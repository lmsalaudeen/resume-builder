const eduField = document.getElementsByClassName('education-entry-input');
const eduFieldResume = document.querySelector('.educationEntryOutput');

const qualificationInput = document.getElementById('qualificationInput');
const institutionInput = document.getElementById('institutionInput');
const qualStartDateInput = document.getElementById('qualStartDateInput');
const qualEndDateInput = document.getElementById('qualEndDateInput');

const addEduButton = document.getElementById("addEduButton");
const removeEduButton = document.getElementById("removeEduButton");

addEduButton.addEventListener('click', function() {
   
    // Check if the input is not empty
    if (qualificationInput.value && institutionInput.value && 
        qualStartDateInput.value && qualEndDateInput.value) {
      
        const newEduField = document.createElement("div");
        newEduField.className = "newEduField";

        eduFieldResume.appendChild(newEduField);

        newEduField.append(document.createElement("br"));

        const qualification = document.createElement("strong");
        qualification.textContent = qualificationInput.value;
        
        newEduField.append(qualification);
        newEduField.append(", ");
        newEduField.append(institutionInput.value);


        newEduField.append(document.createElement("br"));
    
        newEduField.append(qualStartDateInput.value);
        newEduField.append(" - ");
        newEduField.append(qualEndDateInput.value);
        newEduField.appendChild(document.createElement("br"));

        qualificationInput.value = '';
        institutionInput.value = '';
        qualStartDateInput.value = '';
        qualEndDateInput.value = '';
      
    }
  });

removeEduButton.addEventListener('click', function() {
    const newEduField = eduFieldResume.getElementsByTagName('div');
  
    if (newEduField.length > 0) {
        eduFieldResume.removeChild(newEduField[newEduField.length - 1]);
    }
});

