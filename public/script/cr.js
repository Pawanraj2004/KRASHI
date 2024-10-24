// Crop Recommendation Data
const cropData = [
    {
      zone: 'Western Himalayas',
      soil: 'Alluvial',
      crops: [
        { crop: 'Rice (K)', ratio: '4:2:1', NPK: [120, 60, 30] },
        { crop: 'Wheat', ratio: '6:2:1', NPK: [150, 50, 25] },
        { crop: 'Maize', ratio: '4:2:2', NPK: [100, 60, 40] }
      ]
    },
    {
      zone: 'Eastern Himalayas',
      soil: 'Alluvial',
      crops: [
        { crop: 'Rice (K)', ratio: '4:2:2', NPK: [80, 40, 40] },
        { crop: 'Rice (R)', ratio: '4:2:2', NPK: [80, 40, 40] },
        { crop: 'Potato', ratio: '6:3:3', NPK: [150, 75, 75] }
      ]
    },
    {
      zone: 'Lower Gangetic Plain',
      soil: 'Alluvial',
      crops: [
        { crop: 'Jute', ratio: '5:2:2', NPK: [100, 40, 40] },
        { crop: 'Rice', ratio: '4:2:2', NPK: [80, 40, 40] },
        { crop: 'Sugarcane', ratio: '8:4:4', NPK: [200, 100, 100] }
      ]
    },
    {
      zone: 'Middle Gangetic Plain',
      soil: 'Alluvial',
      crops: [
        { crop: 'Rice', ratio: '4:2:1', NPK: [120, 60, 30] },
        { crop: 'Wheat', ratio: '5:2:1', NPK: [100, 40, 20] },
        { crop: 'Sugarcane', ratio: '8:4:4', NPK: [200, 100, 100] }
      ]
    },
    {
      zone: 'Upper Gangetic Plain',
      soil: 'Alluvial',
      crops: [
        { crop: 'Wheat', ratio: '6:2:1', NPK: [150, 50, 25] },
        { crop: 'Paddy', ratio: '4:2:2', NPK: [100, 50, 50] },
        { crop: 'Sugarcane', ratio: '8:4:4', NPK: [200, 100, 100] }
      ]
    },
    {
      zone: 'Western Plateau and Hills',
      soil: 'Black',
      crops: [
        { crop: 'Cotton', ratio: '4:2:2', NPK: [120, 60, 60] },
        { crop: 'Soybean', ratio: '3:1:1', NPK: [90, 30, 30] },
        { crop: 'Sorghum', ratio: '2:1:1', NPK: [80, 40, 40] }
      ]
    },
    {
      zone: 'Central Plateau and Hills',
      soil: 'Red',
      crops: [
        { crop: 'Groundnut', ratio: '3:2:1', NPK: [60, 40, 20] },
        { crop: 'Millets', ratio: '2:1:1', NPK: [60, 30, 30] },
        { crop: 'Soybean', ratio: '3:1:1', NPK: [90, 30, 30] }
      ]
    },
    {
      zone: 'Eastern Plateau and Hills',
      soil: 'Lateritic',
      crops: [
        { crop: 'Rice', ratio: '4:2:2', NPK: [100, 50, 50] },
        { crop: 'Pulses', ratio: '2:1:1', NPK: [60, 30, 30] },
        { crop: 'Cotton', ratio: '4:2:2', NPK: [120, 60, 60] }
      ]
    },
    {
      zone: 'Western Coastal Plains',
      soil: 'Lateritic',
      crops: [
        { crop: 'Coconut', ratio: '3:2:1', NPK: [90, 60, 30] },
        { crop: 'Rice', ratio: '4:2:2', NPK: [80, 40, 40] },
        { crop: 'Cashew', ratio: '4:2:1', NPK: [120, 60, 30] }
      ]
    },
    {
      zone: 'Eastern Coastal Plains',
      soil: 'Alluvial',
      crops: [
        { crop: 'Rice', ratio: '4:2:2', NPK: [100, 50, 50] },
        { crop: 'Groundnut', ratio: '3:2:1', NPK: [90, 60, 30] },
        { crop: 'Cotton', ratio: '4:2:2', NPK: [120, 60, 60] }
      ]
    },
    {
      zone: 'North Eastern Hill Region',
      soil: 'Lateritic',
      crops: [
        { crop: 'Tea', ratio: '5:3:2', NPK: [120, 75, 50] },
        { crop: 'Rice', ratio: '4:2:2', NPK: [80, 40, 40] },
        { crop: 'Pineapple', ratio: '3:2:2', NPK: [90, 60, 60] }
      ]
    },
    {
      zone: 'Northern Dry Region',
      soil: 'Sandy',
      crops: [
        { crop: 'Bajra', ratio: '3:1:1', NPK: [60, 30, 30] },
        { crop: 'Mustard', ratio: '2:1:1', NPK: [60, 40, 40] },
        { crop: 'Wheat', ratio: '6:2:1', NPK: [150, 50, 25] }
      ]
    },
    {
      zone: 'Southern Dry Region',
      soil: 'Red',
      crops: [
        { crop: 'Ragi', ratio: '3:1:1', NPK: [60, 30, 30] },
        { crop: 'Millets', ratio: '2:1:1', NPK: [60, 30, 30] },
        { crop: 'Groundnut', ratio: '3:2:1', NPK: [90, 60, 30] }
      ]
    }
  ];  

// Map states to zones
const stateToZoneMap = {
  'Jammu & Kashmir': 'Western Himalayas',
  'Himachal Pradesh': 'Western Himalayas',
  'Uttarakhand': 'Western Himalayas',
  'Assam': 'Eastern Himalayas',
  'West Bengal': 'Eastern Himalayas',
  'Arunachal Pradesh': 'Eastern Himalayas',
  'Sikkim': 'Eastern Himalayas',
  'Nagaland': 'Eastern Himalayas',
  'Manipur': 'Eastern Himalayas',
  'Meghalaya': 'Eastern Himalayas',
  'Uttar Pradesh': 'Upper Gangetic Plain',
  'Bihar': 'Middle Gangetic Plain',
  'Maharashtra': 'Western Plateau and Hills',
  'Madhya Pradesh': 'Central Plateau and Hills',
  'Chhattisgarh': 'Central Plateau and Hills',
  'Odisha': 'Eastern Plateau and Hills',
  'Jharkhand': 'Eastern Plateau and Hills',
  'Goa': 'Western Coastal Plains',
  'Kerala': 'Western Coastal Plains',
  'Tamil Nadu': 'Southern Dry Region',
  'Andhra Pradesh': 'Eastern Coastal Plains',
  'Rajasthan': 'Northern Dry Region',
  'Gujarat': 'Northern Dry Region',
  'Karnataka': 'Southern Dry Region',
  // Add any other state-zone mappings
};

// Listen for form submission
document.getElementById('crop-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const state = document.getElementById('zone').value;
    const soil = document.getElementById('soil').value;
    const nitrogen = parseFloat(document.getElementById('nitrogen').value);
    const phosphorus = parseFloat(document.getElementById('phosphorus').value);
    const potassium = parseFloat(document.getElementById('potassium').value);

    // Find the zone based on the selected state
    const zone = stateToZoneMap[state] || '';

    // Find the matching crops for the selected zone and soil
    const zoneData = cropData.find(item => item.zone === zone && item.soil === soil);

    let recommendedCrop = 'No suitable crop found';

    if (zoneData) {
      // Loop through the crops and find the closest match for NPK values
      for (const cropInfo of zoneData.crops) {
        const [N, P, K] = cropInfo.NPK;
        if (nitrogen >= N && phosphorus >= P && potassium >= K) {
          recommendedCrop = `Recommended Crop: ${cropInfo.crop}`;
          break;
        }
      }
    }

    // Display the result
    document.getElementById('result').textContent = recommendedCrop;
});
