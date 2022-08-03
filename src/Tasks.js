import React from 'react'

function Tasks() {

function addnew() {
    
    const newTask = document.getElementById("inputid").value;

    if ( newTask == "" ) { alert("Please enter a task"); }

    else {

    const newCategory = document.getElementById("selectid").value;
    const newContainerDiv = document.createElement("div");
    newContainerDiv.classList.add("containerdivclass");
    const newDiv = document.createElement("div");
    newDiv.classList.add("divclass");
    newDiv.style.backgroundColor = newCategory;
    document.getElementById("container").appendChild(newContainerDiv);
    newContainerDiv.appendChild(newDiv);
    newDiv.innerHTML = newTask;
    const newEditButton = document.createElement("button");
    const newDeleteButton = document.createElement("button");
    newContainerDiv.appendChild(newEditButton);
    newContainerDiv.appendChild(newDeleteButton);
    newEditButton.classList.toggle("editbuttonclass")
    newDeleteButton.classList.add("deletebuttonclass")
    newEditButton.innerHTML = "Edit"
    newDeleteButton.innerHTML = "Delete";


    
    newDiv.addEventListener("click", function() {

        newEditButton.classList.toggle("openeditbuttonclass")
        newDeleteButton.classList.toggle("opendeletebuttonclass")
       

})

newDeleteButton.addEventListener("click", function() {
newContainerDiv.remove();

})

newEditButton.addEventListener("click", function() {
const editedDiv = prompt("Task i değiştir. ")
newDiv.innerHTML = editedDiv;


})

}

}


  return (

    <div>
        
        <div id="topcontainer">
        
        <input id="inputid" />
     
        <select id='selectid'>
            <option value="maroon">Personal</option>
            <option value="red">Work</option>
            <option value="green">Family</option>
        </select>
       
        
        <button className="addbutton" onClick={addnew}>+</button>
      
        </div>

        <div id="container"></div>

        <div id='timeofnow'></div>

        </div>
  )
}

export default Tasks;