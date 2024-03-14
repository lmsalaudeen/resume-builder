const workField = document.getElementsByClassName('work-entry-input');
const workFieldResume = document.querySelector('.work-entry-output');

const jobTitleInput = document.getElementById('jobTitleInput');
const employerInput = document.getElementById('employerInput');
const jobReponsibilitiesInput = document.getElementById('jobReponsibilitiesInput');
const workStartDateInput = document.getElementById('jobStartDateInput');
const workEndDateInput = document.getElementById('jobEndDateInput');

const addJobButton = document.getElementById("addJobButton");
const removeJobButton = document.getElementById("removeJobButton");

addJobButton.addEventListener('click', function() {
    const jobTitleInputValue = jobTitleInput.value;
    const employerInputValue = employerInput.value;
    const workStartDateInputValue = workStartDateInput.value;
    const workEndDateInputValue = workEndDateInput.value;

    // Check if the input is not empty
    if (jobTitleInputValue && employerInputValue && 
        workStartDateInputValue && workEndDateInputValue && jobReponsibilitiesInput.value) {
      
        const newWorkField = document.createElement("div");
        newWorkField.className = "newWorkField";

        workFieldResume.appendChild(newWorkField);

        const jobTitle = document.createElement("strong");
        jobTitle.textContent = jobTitleInputValue;
        
        newWorkField.append(jobTitle);
        newWorkField.append(", ");
        newWorkField.append(employerInputValue);


        newWorkField.append(document.createElement("br"));
    
        newWorkField.append(workStartDateInputValue);
        newWorkField.append(" - ");
        newWorkField.append(workEndDateInputValue);
        newWorkField.appendChild(document.createElement("br"));

        const jobReponsibilitiesItem = document.createElement("li");
        jobReponsibilitiesItem.textContent = jobReponsibilitiesInput.value;
        newWorkField.appendChild(jobReponsibilitiesItem);

        newWorkField.appendChild(document.createElement("br"));

        jobTitleInput.value = '';
        employerInput.value = '';
        workStartDateInput.value = '';
        workEndDateInput.value = '';
        jobReponsibilitiesInput.value = '';
      
    }
  });

removeJobButton.addEventListener('click', function() {
    const newWorkField = workFieldResume.getElementsByTagName('div');
  
    if (newWorkField.length > 0) {
        workFieldResume.removeChild(newWorkField[newWorkField.length - 1]);
    }
});

