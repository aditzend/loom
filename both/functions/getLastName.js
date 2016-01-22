getLastName = function(inputStr) {
  console.log(inputStr.length);

    spacePos = inputStr.indexOf(' ');

  lastNameLow = inputStr.slice(spacePos + 2,inputStr.length).toLocaleLowerCase();
  lastNameUp = inputStr.slice(spacePos + 1,spacePos + 2).toLocaleUpperCase();
  lastName = lastNameUp + lastNameLow;
  console.log(lastName);
  return lastName;
}
