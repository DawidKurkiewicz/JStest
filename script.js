var index =   sessionStorage.getItem('index') || 0 ;



function addPerson (name) {
  localStorage.setItem('person' + index, name);
  index++;
  sessionStorage.setItem('index', index);


}

function removePerson (key) {
  localStorage.removeItem(key)
}


addPerson ('marek');
addPerson ('da');
addPerson ('wa');
addPerson ('fa');
addPerson ('xa');
addPerson ('ds');

