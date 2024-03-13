const trainingField = document.querySelector('.training-entry-input');
const trainingFieldResume = document.querySelector('.training-entry-output');

const courseInput = document.getElementById('courseInput');
const providerInput = document.getElementById('courseProviderInput');
const startDateInput = document.getElementById('courseStartDateInput');
const endDateInput = document.getElementById('courseEndDateInput');

const addTrainingButton = document.getElementById("addTrainingButton");
const removeTrainingButton = document.getElementById("removeTrainingButton");

addTrainingButton.addEventListener('click', function() {
    const courseInputValue = courseInput.value;
    const providerInputValue = providerInput.value;
    const startDateInputValue = startDateInput.value;
    const endDateInputValue = endDateInput.value;

    // Check if the input is not empty
    if (courseInputValue && providerInputValue && startDateInputValue && endDateInputValue) {
      
        const newTrainingField = document.createElement("div");
        newTrainingField.className = "newTrainingField";

        trainingFieldResume.appendChild(newTrainingField);

        newTrainingField.appendChild(document.createElement("br"));

        const courseName = document.createElement("strong");
        courseName.textContent = courseInputValue;
        
        newTrainingField.append(courseName);
        newTrainingField.append(", ");
        newTrainingField.append(providerInputValue);


        newTrainingField.append(document.createElement("br"));
    
        newTrainingField.append(startDateInputValue);
        newTrainingField.append(" - ");
        newTrainingField.append(endDateInputValue);
        newTrainingField.appendChild(document.createElement("br"));
      
    }
  });

removeTrainingButton.addEventListener('click', function() {
    const newTrainingField = trainingFieldResume.getElementsByTagName('div');
  
    if (newTrainingField.length > 0) {
        trainingFieldResume.removeChild(newTrainingField[newTrainingField.length - 1]);
    }
});

