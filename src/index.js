import mainRenderer from './modules/renderer';
import Project from './modules/projects';
import Activity from './modules/activities';

const projects = [];

localStorage.setItem('p', JSON.stringify(projects));

const setEditActivity = (evt) => {
  const storedProjects = JSON.parse(localStorage.getItem('p'));
  const index = evt.target.id.replace('editActButton', '');
  const form = document.getElementById(`activityFormContainer${index}`);
  const arr = index.split('');
  const title = document.getElementById(`activityFormTitleInput${index}`);
  const description = document.getElementById(`activityFormDescriptionInput${index}`);
  const date = document.getElementById(`activityFormDueDateInput${index}`);
  const priority = document.getElementById(`activityFormPriorityInput${index}`);
  const { activities } = storedProjects[arr[0]];

  title.value = activities[arr[1]].title;
  description.value = activities[arr[1]].description;
  date.value = activities[arr[1]].dueDate;
  priority.value = activities[arr[1]].priority;
  form.classList.remove('hidden');
};

const editActivity = (evt) => {
  const storedProjects = JSON.parse(localStorage.getItem('p'));
  const index = evt.target.id.replace('activityEditAccept', '');
  const arr = index.split('');
  const form = document.getElementById(`activityFormContainer${index}`);
  const title = document.getElementById(`activityFormTitleInput${index}`);
  const description = document.getElementById(`activityFormDescriptionInput${index}`);
  const date = document.getElementById(`activityFormDueDateInput${index}`);
  const priority = document.getElementById(`activityFormPriorityInput${index}`);
  const alert = document.getElementById('masterAlert');
  const bigTitle = document.getElementById(`activityBigTitle${arr[1]}`);

  const titleChange = document.getElementById(`activityTitle${index}`);
  const descriptionChange = document.getElementById(`activityDescription${index}`);
  const dateChange = document.getElementById(`activityDate${index}`);
  const prioChange = document.getElementById(`activityPriority${index}`);
  const { activities } = storedProjects[arr[0]];

  if (title.value !== '' && description.value !== '' && date.value !== '' && priority.value !== '') {
    activities[arr[1]].title = title.value;
    activities[arr[1]].description = description.value;
    activities[arr[1]].dueDate = date.value;
    activities[arr[1]].priority = priority.value;
    titleChange.innerHTML = title.value;
    descriptionChange.innerHTML = description.value;
    dateChange.innerHTML = date.value;
    prioChange.innerHTML = priority.value;
    bigTitle.innerHTML = `Activity ${title.value}`;
    form.className += ' hidden';
    title.value = '';
    description.value = '';
    date.value = '';
    priority.value = '';
    alert.innerHTML = '';
    localStorage.setItem('p', JSON.stringify(storedProjects));
  } else {
    alert.innerHTML = 'You must enter all the required fields';
  }
};

const deleteActivity = (evt) => {
  let storedProjects = JSON.parse(localStorage.getItem('p'));
  const index = evt.target.id.replace('delActButton', '');
  const arr = index.split('');
  const [one, two] = arr;

  let { activities } = storedProjects[one];

  for (let actindex = 0; actindex < activities.length; actindex += 1) {
    const del = document.getElementById(`activityContainer${one}${actindex}`);
    del.remove();
  }
  storedProjects[one].activities.splice(two, 1);
  localStorage.setItem('p', JSON.stringify(storedProjects));
  storedProjects = JSON.parse(localStorage.getItem('p'));
  activities = storedProjects[one].activities;

  for (let actindex = 0; actindex < activities.length; actindex += 1) {
    mainRenderer('activity', one, actindex, [], [deleteActivity, setEditActivity, editActivity], 0, activities[actindex]);
  }
};

const newActivity = (evt) => {
  const storedProjects = JSON.parse(localStorage.getItem('p'));
  const index = evt.target.id.replace('activityEditAccept', '');
  const form = document.getElementById(`activityFormContainer${index}`);
  const title = document.getElementById(`activityFormTitleInput${index}`);
  const description = document.getElementById(`activityFormDescriptionInput${index}`);
  const dueDate = document.getElementById(`activityFormDueDateInput${index}`);
  const priority = document.getElementById(`activityFormPriorityInput${index}`);
  const alert = document.getElementById('masterAlert');

  if (title.value !== '' && description.value !== '' && dueDate.value !== '' && priority.value !== '') {
    const activity = new Activity(title.value, description.value, dueDate.value, priority.value);
    storedProjects[index].activities.push(activity);
    localStorage.setItem('p', JSON.stringify(storedProjects));
    const updatedProjects = JSON.parse(localStorage.getItem('p'));
    form.className += ' hidden';
    title.value = '';
    description.value = '';
    dueDate.value = '';
    priority.value = '';
    const { activities } = updatedProjects[index];
    alert.innerHTML = '';
    for (let actindex = 0; actindex < activities.length; actindex += 1) {
      mainRenderer('activity', index, actindex, [], [deleteActivity, setEditActivity, editActivity], 0, activities[actindex]);
    }
  } else {
    alert.innerHTML = 'You must enter all the required fields';
  }
};

const setNewActivity = (evt) => {
  const index = evt.target.id.replace('newActButton', '');
  const form = document.getElementById(`activityFormContainer${index}`);
  form.classList.remove('hidden');
};

const setEditproject = (evt) => {
  const storedProjects = JSON.parse(localStorage.getItem('p'));
  const index = evt.target.id.replace('editProject', '');
  const name = document.getElementById(`projectFormNameInput${index}`);
  const objective = document.getElementById(`projectFormObjectiveInput${index}`);
  const startDate = document.getElementById(`projectFormStartDateInput${index}`);
  const endDate = document.getElementById(`projectFormCompletionDateInput${index}`);
  const description = document.getElementById(`projectFormDescriptionInput${index}`);
  const projectEditForm = document.getElementById(`projectFormContainer${index}`);
  projectEditForm.classList.remove('hidden');
  name.value = storedProjects[index].name;
  objective.value = storedProjects[index].objective;
  startDate.value = storedProjects[index].startDate;
  endDate.value = storedProjects[index].completionDate;
  description.value = storedProjects[index].description;
};

const editProject = (evt) => {
  const storedProjects = JSON.parse(localStorage.getItem('p'));
  const index = evt.target.id.replace('projectFormAcceptEditButton', '');
  const form = document.getElementById(`projectFormContainer${index}`);
  const name = document.getElementById(`projectFormNameInput${index}`);
  const objective = document.getElementById(`projectFormObjectiveInput${index}`);
  const startDate = document.getElementById(`projectFormStartDateInput${index}`);
  const endDate = document.getElementById(`projectFormCompletionDateInput${index}`);
  const description = document.getElementById(`projectFormDescriptionInput${index}`);
  const projectName = document.getElementById(`projectName${index}`);
  const projectDates = document.getElementById(`projectDates${index}`);
  const projectObjective = document.getElementById(`projectObjective${index}`);
  const projectDescription = document.getElementById(`projectDescription${index}`);
  const projectBigTitle = document.getElementById(`projectBigTitle${index}`);
  const alert = document.getElementById('masterAlert');

  if (name.value !== '' && objective.value !== '' && startDate.value !== '' && description.value !== '' && endDate.value !== '') {
    storedProjects[index].name = name.value;
    storedProjects[index].objective = objective.value;
    storedProjects[index].description = description.value;
    storedProjects[index].startDate = startDate.value;
    storedProjects[index].completionDate = endDate.value;
    projectName.innerHTML = name.value;
    projectDates.innerHTML = `${startDate.value}  /  ${endDate.value}`;
    projectObjective.innerHTML = objective.value;
    projectDescription.innerHTML = description.value;
    projectBigTitle.innerHTML = `Project ${name.value}`;
    form.className += ' hidden';
    name.value = '';
    objective.value = '';
    startDate.value = '';
    endDate.value = '';
    description.value = '';
    alert.innerHTML = '';
    localStorage.setItem('p', JSON.stringify(storedProjects));
  } else {
    alert.innerHTML = 'You must enter all the required fields';
  }
};

const deleteProject = (evt) => {
  const storedProjects = JSON.parse(localStorage.getItem('p'));
  const start = evt.target.id.replace('deleteProject', '');
  for (let index = 0; index < storedProjects.length; index += 1) {
    const projectContainer = document.getElementById(`projectContainer${index}`);
    projectContainer.remove();
  }
  storedProjects.splice(start, 1);
  localStorage.setItem('p', JSON.stringify(storedProjects));
  for (let index = 0; index < storedProjects.length; index += 1) {
    const { activities } = storedProjects[index];
    mainRenderer('project', index, 0, [setNewActivity, setEditproject, deleteProject, 0, 0, editProject, newActivity], [], storedProjects[index]);
    for (let actindex = 0; actindex < activities.length; actindex += 1) {
      mainRenderer('activity', index, actindex, [], [deleteActivity, setEditActivity, editActivity], 0, activities[actindex]);
    }
  }
};

const newProject = () => {
  const storedProjects = JSON.parse(localStorage.getItem('p'));
  const form = document.getElementById('defaultFormContainer');
  const name = document.getElementById('defaultProjectNameInput');
  const objective = document.getElementById('defaultProjectObjectiveInput');
  const startDate = document.getElementById('defaultProjectStartInput');
  const endDate = document.getElementById('defaultProjectDatesInput');
  const description = document.getElementById('defaultProjectDescriptionInput');
  const alert = document.getElementById('masterAlert');
  if (name.value !== '' && objective.value !== '' && startDate.value !== '' && description.value !== '' && endDate.value !== '' && startDate.value < endDate.value) {
    const project = new Project(name.value, objective.value);
    project.setDescription = description.value;
    project.setStartDate = startDate.value;
    project.setCompletionDate = endDate.value;
    storedProjects.push(project);

    for (let index = 0; index < storedProjects.length; index += 1) {
      mainRenderer('project', index, 0, [setNewActivity, setEditproject, deleteProject, 0, 0, editProject, newActivity], [], storedProjects[index]);
    }

    form.className += ' hidden';
    name.value = '';
    objective.value = '';
    startDate.value = '';
    description.value = '';
    alert.innerHTML = '';
    localStorage.setItem('p', JSON.stringify(storedProjects));
  } else if (startDate.value >= endDate.value) {
    alert.innerHTML = 'The end date must be posterior to the start date ';
  } else {
    alert.innerHTML = 'You must enter all the required fields';
  }
};

const setProject = () => {
  const form = document.getElementById('defaultFormContainer');
  form.classList.remove('hidden');
};

const pfunctions = [setNewActivity, setEditproject, deleteProject, setProject, newProject];

mainRenderer('blank', 1, 1, pfunctions);
const storedProjects = JSON.parse(localStorage.getItem('p'));
const project0 = new Project('loremIpsus', 'LoremImpsus Dolor Sit Amet');
project0.setDescription = 'Lorem Ipsus dolorsit amet consequiteur dolrem';
project0.setStartDate = 1;
project0.setCompletionDate = 44;
storedProjects.push(project0);
localStorage.setItem('p', JSON.stringify(storedProjects));
mainRenderer('project', 0, 0, [setNewActivity, setEditproject, deleteProject, 0, 0, editProject, newActivity], [], storedProjects[0]);