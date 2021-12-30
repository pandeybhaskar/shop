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
   let BrkLn = document.createElement('br');
   document.body.appendChild(SpnItm);
   SpnItm.textContent= addItem[(addItem.length)-1];
   ButItm.id= addItem.length;
   document.body.appendChild(ButItm);
   ButItm.textContent= "Delete";
   //alert("btm id: "+ ButItm.id);
  // alert(addItem[ButItm.id-1])
   document.body.appendChild(BrkLn);
   const delBtutton= document.getElementById(ButItm.id)
   delBtutton.onclick=()=>{
    //alert(ButItm.id);
     document.body.removeChild(ButItm);
     document.body.removeChild(SpnItm);
     addItem[ButItm.id-1]=null;

    }
  // listItm.appendChild(addItem[(addItem.length)-1]);
}
 