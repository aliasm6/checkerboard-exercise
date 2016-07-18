// Your JS goes here

for (var i = 0; i < 63; i++) {
  if(i % 2 === 0){
    var divCol = document.createElement('div');
    document.body.appendChild(divCol);
    divCol.style.width = '11.1%';
    divCol.style.paddingBottom = '11.1%';
    divCol.style.backgroundColor = 'red';
    divCol.style.display = 'inline-block';


  }else {
    var divCol = document.createElement('div');
    document.body.appendChild(divCol);
    divCol.style.width = '11.1%';
    divCol.style.paddingBottom = '11.1%';
    divCol.style.backgroundColor = 'black';
    divCol.style.display = 'inline-block';
  }
}
