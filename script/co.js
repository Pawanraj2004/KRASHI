const URL = "https://teachablemachine.withgoogle.com/models/vz589Memb/";

let model, webcam, labelContainer, treatmentContainer, maxPredictions;

// Load the Teachable Machine model on page load
async function loadModel() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    labelContainer = document.getElementById("label-container");
    treatmentContainer = document.getElementById("treatment-container"); // Add treatment container
    labelContainer.innerHTML = ""; // Clear labels
    for (let i = 0; i < maxPredictions; i++) {
        labelContainer.appendChild(document.createElement("div"));
    }
}

// Predict function for both webcam and uploaded images
async function predict(source) {
    const prediction = await model.predict(source);
    let healthy, powdery, rusty;

    // Show the percentage results for each class
    for (let i = 0; i < maxPredictions; i++) {
        const classPrediction =
            prediction[i].className + ": " + (prediction[i].probability * 100).toFixed(2) + "%";
        labelContainer.childNodes[i].innerHTML = classPrediction;

        // Store the probabilities for each condition
        if (prediction[i].className.toLowerCase() === 'healthy') {
            healthy = prediction[i].probability * 100;
        } else if (prediction[i].className.toLowerCase() === 'powdery') {
            powdery = prediction[i].probability * 100;
        } else if (prediction[i].className.toLowerCase() === 'rusty') {
            rusty = prediction[i].probability * 100;
        }
    }

    // Provide treatment based on the condition percentages
    let treatment = "";
    if (healthy === 100) {
        treatment = "The plant is perfectly healthy. No treatment needed.";
    } else if (rusty > 50) {
        treatment = "The plant has severe rust infection. Apply a copper-based fungicide and water the roots only.";
    } else if (powdery > 50) {
        treatment = "The plant has severe powdery mildew. Apply sulfur-based fungicide and ensure proper air circulation.";
    } else if (powdery > 30 || rusty > 30) {
        treatment = "The plant is moderately affected. Prune the affected leaves and apply organic fungicides.";
    } else {
        treatment = "The plant shows mild symptoms. Regular monitoring and preventive care are advised.";
    }

    // Display the treatment suggestion
    treatmentContainer.innerHTML = `<h3>Treatment Suggestion:</h3><p>${treatment}</p>`;
}

// Handle image upload and prediction
function uploadImage() {
    document.getElementById('imageInput').click();
}

function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const img = new Image();
        img.onload = async function () {
            hideWebcam(); // Stop the webcam feed
            const canvas = document.getElementById('uploaded-image-container');
            const context = canvas.getContext('2d');
            canvas.width = 320;
            canvas.height = 240;

            const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
            const x = (canvas.width / 2) - (img.width / 2) * scale;
            const y = (canvas.height / 2) - (img.height / 2) * scale;
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, x, y, img.width * scale, img.height * scale);

            canvas.style.display = 'block';

            await predict(canvas);

            event.target.value = ''; // Reset file input
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function stopWebcam() {
    if (webcam) {
        webcam.stop();
        document.getElementById("webcam-container").style.display = 'none';
    }
}

function hideWebcam() {
    stopWebcam();
    document.getElementById('webcam-container').style.display = 'none';
}

// Load the model when the page loads
window.onload = loadModel;
