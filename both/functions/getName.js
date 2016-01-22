getName = function(inputStr) {
  console.log(inputStr.length);
  if (inputStr.search(' ') == -1 ) {
    spacePos = inputStr.length;
  }else{
    spacePos = inputStr.indexOf(' ');
  }
  nameLow = inputStr.slice(1,spacePos).toLocaleLowerCase();
  nameUp = inputStr.slice(0,1).toLocaleUpperCase();
  name = nameUp + nameLow;
  console.log(name);
  return name;
}
