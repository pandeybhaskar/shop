const unlist= document.querySelector('ul');
const inputelm= document.querySelector('input');
const addButton= document.querySelector('button');
let addItem=[];


/*addButton.addEventListener('click', function(){
    alert("Button add ")
});
*/
addButton.onclick=()=>{
    //alert("Button add clicked!");
   addItem.push(inputelm.value);

   inputelm.value=""
   let listItm= document.createElement('li');
   let SpnItm= document.createElement('span');
   let ButItm= document.createElement('button');
   document.body.appendChild(SpnItm);
   SpnItm.textContent= addItem[(addItem.length)-1];
  // document.body.appendChild(ButItm);
  document.body.appendChild(ButItm);
   ButItm.textContent= "Delete";
   listItm.appendChild(addItem[(addItem.length)-1]);

   ButItm.onclick=()=>{
       listItm.parentNode.removeChild(addItem);
}

}

