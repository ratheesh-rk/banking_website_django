/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

 // Array of objects for options
  const districts = [
    { value: "ernakulam", label: "Ernakulam" },
    { value: "thrissur", label: "Thrissur" },
    { value: "alappuzha", label: "Alappuzha" }
  ];

  const branchesByDistrict = {
    ernakulam: [
      { value: "edappally", label: "Edappally" },
      { value: "kalamassery", label: "Kalamassery" },
      { value: "aluva", label: "Aluva" }
    ],
    thrissur: [
      { value: "mannuthy", label: "Mannuthy" },
      { value: "chavakkad", label: "Chavakkad" },
      { value: "peringavu", label: "Peringavu" }
    ],
    alappuzha: [
      { value: "harippad", label: "Harippad" },
      { value: "chengannur", label: "Changannur" },
      { value: "cherthala", label: "Cherthala" }
    ]
  };

  // Function to populate dropdown
  function populateDropdown(array, dropdownId) {
    const dropdown = document.getElementById(dropdownId);

    // Clear previous options
    dropdown.innerHTML = `<option value="">Select ${dropdownId}</option>`;

    // Loop through the array of objects to generate options
    array.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option.value;
      optionElement.text = option.label;
      dropdown.add(optionElement);
    });

    // Disable the dropdown
    dropdown.disabled = true;
  }

  function populateBranches() {
    const districtSelect = document.getElementById("district");
    const branchSelect = document.getElementById("branch");

    // Clear previous options
    branchSelect.innerHTML = '<option value="">Select Branch</option>';

    const selectedDistrict = districtSelect.value;

    if (selectedDistrict && branchesByDistrict[selectedDistrict]) {
      populateDropdown(branchesByDistrict[selectedDistrict], "branch");

      // Enable the branch dropdown
      branchSelect.disabled = false;
    } else {
      // Disable the branch dropdown if no district is selected
      branchSelect.disabled = true;
    }
  }

  // Populate the initial district dropdown
  populateDropdown(districts, "District");