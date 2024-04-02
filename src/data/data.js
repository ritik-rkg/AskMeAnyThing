const jsonData = [
    {
      "Latitude": "lat",
      "Longitude": "lng",
      "District": "mcqsr",
      "State": "mcqsr",
      "CASEID": "num",
      "V002": "num",
      "V102": "mcqsr",
      "V106": "mcqsr",
      "V113": "mcqsr",
      "V116": "mcqsr",
      "V130": "mcqsr",
      "V131": "mcqsr",
      "V149": "mcqsr",
      "V161": "mcqsr",
      "V190": "mcqsr",
      "ML101": "mcqsr",
      "V218": "num",
      "V445": "num",
      "V446": "mcqsr",
      "V447": "mcqsr",
      "V457": "mcqsr",
      "BORD": "mcqsr",
      "B4": "mcqsr",
      "B5": "mcqsr",
      "M18": "mcqsr",
      "M19": "mcqsr",
      "HW13": "mcqsr",
      "HW53": "mcqsr",
      "HW55": "mcqsr",
      "HW57": "mcqsr",
      "HW70": "num",
      "HW71": "num",
      "HW72": "num",
      "HW73": "mcqsr",
      "V481": "mcqsr",
      "V481A": "mcqsr",
      "V481B": "mcqsr",
      "V481C": "mcqsr",
      "V481D": "mcqsr",
      "V481E": "mcqsr",
      "V481F": "mcqsr",
      "V481G": "mcqsr",
      "V481H": "mcqsr",
      "V481X": "mcqsr",
      "V119": "mcqsr",
      "V120": "mcqsr",
      "V121": "mcqsr",
      "V122": "mcqsr",
      "V123": "mcqsr",
      "V124": "mcqsr",
      "V125": "mcqsr",
      "M57A": "mcqsr",
      "M57B": "mcqsr",
      "M57C": "mcqsr",
      "M57E": "mcqsr",
      "M57F": "mcqsr",
      "M57G": "mcqsr",
      "M57H": "mcqsr",
      "M57I": "mcqsr",
      "M57J": "mcqsr",
      "M57K": "mcqsr",
      "M57L": "mcqsr",
      "M57M": "mcqsr",
      "M57N": "mcqsr",
      "M57S": "mcqsr",
      "M57T": "mcqsr",
      "M57X": "mcqsr",
      "HW70_1": "mcqsr",
      "HW71_1": "mcqsr",
      "HW72_1": "mcqsr",
      "obese": "mcqsr",
      "V445_1": "mcqsr",
      "ageMonths_Cat": "mcqsr",
      "AntenetalCare": "mcqmr"
    }
  ];
  
  // Function to get unique values from an array
  const getUniqueValues = (arr) => [...new Set(arr)];
  
  // Function to create arrays for each unique value type
  const createArraysForUniqueValues = (jsonData) => {
    const uniqueValues = {};
    
    // Iterate through each key-value pair in the data
    for (const key in jsonData[0]) {
      const value = jsonData[0][key];
      
      // If the value type is not already a key in the uniqueValues object, create an empty array for it
      if (!uniqueValues[value]) {
        uniqueValues[value] = [];
      }
      
      // Push the key to the corresponding array for its value type
      uniqueValues[value].push(key);
    }
    
    return uniqueValues;
  };
  
  // Call the function to create arrays for each unique value type
  const uniqueArrays = createArraysForUniqueValues(jsonData);
  
  console.log(uniqueArrays);
  