const myInput = document.querySelector("#item");
     const myButton = document.querySelector("button");
     const myul= document.querySelector("ul"); 


    function addItem(event) {  
      event.preventDefault();

      const itemText= myInput.value;
      myInput.value=""; 
    
    const listItem=document.crearteElement("li");
    const listText=document.createElement("span");
    const deleteButton=document.createElement("button");
    
    listItem.appendChild(listText);
    listItem.appendChild(deleteButton); 

listText.textContent=itemText;

myul.appendChild(listItem);

    }