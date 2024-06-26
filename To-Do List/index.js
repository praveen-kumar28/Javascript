


function add_item(){
    let item=document.getElementById("box");
    let list_item=document.getElementById("list_item");
    if(item.value != ""){
         let make_list=document.createElement("li");
         make_list.appendChild(document.createTextNode(item.value));
         list_item.appendChild(make_list);
         item.value="";

         make_list.onclick=function(){
            this.parentNode.removeChild(this);
         }
    }
    else{
        alert("Please add a value to the item");
    }
}