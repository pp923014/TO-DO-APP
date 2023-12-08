// sellection of input field
let input=document.querySelector('#addtask');
let inputValue=input.value;

// selection of button
let btn=document.querySelector('.addbtn');


// selection of those div where we show js created element
let items=document.querySelector('.items');
let p=document.createElement('p');

// Array declaration where we store input value
let arrItems=[];
displayItems()


// function of onclick event on button
function addtasks(){
  arrItems.push(input.value);
  console.log(arrItems);
  input.value=''; 
  displayItems();
}


function displayItems(){
  let containerElement = document.querySelector('.items');
  let newHtml = '';
  for (let i = 0; i < arrItems.length; i++) {
    let item= arrItems[i];
    newHtml += `<div  style="display:flex; margin-left:160px"><span >${item}</span></div>
   <div style="display:flex; " > <button class='btn-delete' onclick="arrItems.splice(${i}, 1);displayItems();">Done</button></div>  `;
  }
  containerElement.innerHTML = newHtml;
}
