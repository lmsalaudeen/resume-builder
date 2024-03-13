// Get User inputs
// Basic info section - Form
const nameInput = document.getElementById('nameInput');
const locInput = document.getElementById('locationInput');
const emailInput = document.getElementById('emailInput');
const phoneInput = document.getElementById('phoneInput');

// summary
const summaryInput = document.getElementById('summaryInput');


// GET OUTPUTS
// Basic info section - Output
const nameOutput = document.getElementById('name');
const locOutput = document.getElementById('location');
const emailOutput = document.getElementById('email');
const phoneOutput = document.getElementById('phone');

// summary -
const summaryOutput = document.getElementById('summary');


// EVENT LISTENERS TO UPDATE RESUME UPON FORM INPUT
nameInput.addEventListener("keyup", updateName);
locInput.addEventListener("keyup", updateLocation);
emailInput.addEventListener("keyup", updateEmail);
phoneInput.addEventListener("keyup", updatePhone);
summaryInput.addEventListener("keyup", updateSummary);


// FUNCTIONS TO UPDATE ENTRIES
function updateName() {nameOutput.innerText = nameInput.value;}
function updateLocation() {locOutput.innerText = locInput.value;}
function updateEmail() {emailOutput.innerText = emailInput.value};
function updatePhone() {phoneOutput.innerText = phoneInput.value};
function updateSummary() {summaryOutput.innerText = summaryInput.value};


// SKILLS ADD AND REMOVE INPUT
const skillInput = document.getElementById("skillInput");
const skillsOutput = document.getElementById("skillsOutput");

const addSkillButton = document.getElementById('addSkillButton');
const removeSkillButton = document.getElementById('removeSkillButton');

addSkillButton.addEventListener('click', function() {
    const skill = skillInput.value;
  
    // Check if the input is not empty
    if (skill) {
      const skillItem = document.createElement('li');
      skillItem.textContent = skill;
  
      skillsOutput.appendChild(skillItem);
      skillInput.value = '';
    }
  });
  
removeSkillButton.addEventListener('click', function() {
    const skillItems = skillsOutput.getElementsByTagName('li');
  
    if (skillItems.length > 0) {
      skillsOutput.removeChild(skillItems[skillItems.length - 1]);
    }
});
  
