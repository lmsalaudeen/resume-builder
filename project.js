const projectField = document.querySelector('.project-entry-input');
const projectFieldResume = document.querySelector('.project-entry-output');

const projectTitleInput = document.getElementById('projectTitleInput');
const projectLinkInput = document.getElementById('projectLinkInput');
const projectDescriptionInput = document.getElementById('projectDescriptionInput');


const addProjectButton = document.getElementById("addProjectButton");
const removeProjectButton = document.getElementById("removeProjectButton");

addProjectButton.addEventListener('click', function() {

    // Check if the input is not empty
    if (projectTitleInput.value && projectLinkInput.value && projectDescriptionInput.value) {
      
        const newProjectField = document.createElement("div");
        newProjectField.className = "newProject";
        
        projectFieldResume.appendChild(newProjectField);

        const projectTitle = document.createElement("a");
        projectTitle.textContent = projectTitleInput.value;
        projectTitle.href = projectLinkInput.value;
        newProjectField.append(projectTitle);

        newProjectField.appendChild(document.createElement("br"));

        const projectDescriptionItem = document.createElement("li");
        projectDescriptionItem.textContent = projectDescriptionInput.value;
        newProjectField.appendChild(projectDescriptionItem);

        newProjectField.appendChild(document.createElement("br"));
      
        projectTitleInput.value = '';
        projectLinkInput.value = '';
        projectDescriptionInput.value = '';
    }
  });

  removeProjectButton.addEventListener('click', function() {
    const newProjectField = projectFieldResume.getElementsByTagName('div');
  
    if (newProjectField.length > 0) {
        projectFieldResume.removeChild(newProjectField[newProjectField.length - 1]);
    }
});

