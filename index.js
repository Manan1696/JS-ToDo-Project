
const icnbtn = document.getElementById("icnbtn");
const popup = document.querySelector(".openbox");


icnbtn.addEventListener("click", () => {
  const popupbox = document.createElement("div");
  const popHeading = document.createElement("p");
  const popInput = document.createElement("input");
  const addBtn = document.createElement("div");
  const closeBtn = document.createElement("div");

  document.querySelector(".mainbox1").classList.add("blur");
  popup.appendChild(popupbox);
  popupbox.className = "popup-box";
  popHeading.innerText = "Add New Task";
  popInput.type = "text";
  popInput.placeholder = "Add New Note";
  popInput.style.textAlign= 'center';
  addBtn.className = "popup-box-button";
  closeBtn.className = "popup-box-button";
  addBtn.innerText = "Add";
  closeBtn.innerText = "Close"; 

  popupbox.appendChild(popHeading);
  popupbox.appendChild(popInput);
  popupbox.appendChild(addBtn);
  popupbox.appendChild(closeBtn);
  
  addBtn.addEventListener("click", () => {
      document.getElementById("maintext").style.display="none";
      const box = document.createElement("div");
      const boxHeading = document.createElement("span");
      const add = document.createElement("i");
      const deleteBtn = document.createElement("i");
      const boxicon = document.createElement("div");
      boxicon.className = "button-box";
      add.className = "fa fas fas fa-plus-square";
      deleteBtn.className = "fa fas fa-trash";
      boxHeading.id="box-heading";
      box.className = "box";
      const box2=document.querySelector(".box2");
      box2.appendChild(box);
      box.appendChild(boxHeading);
      box.appendChild(boxicon);
      boxicon.appendChild(add);
      boxicon.appendChild(deleteBtn);
      boxHeading.innerText = popInput.value;

      boxHeading.addEventListener('click',()=>{
        const heading=document.getElementById("heading");
        heading.innerText=boxHeading.innerText;
        const mainbox1=document.querySelector(".mainbox1");
        const box3=document.querySelector(".box3");
        mainbox1.style.visibility="hidden";
        box3.style.visibility="visible";
        const icnbtn1=document.getElementById("icnbtn1");
        box3.appendChild(box);
        deleteBtn.addEventListener('click',()=>{
          document.querySelector(".box3").removeChild(box);
          document.querySelector(".mainbox1").style.visibility="visible";
          document.querySelector(".box3").style.visibility="hidden";
        })
        icnbtn1.addEventListener('click',()=>{
          box3.removeChild(box);
          box2.appendChild(box);
          document.querySelector(".mainbox1").style.visibility="visible";
          document.querySelector(".box3").style.visibility="hidden";
        })
      })

      boxHeading.style.borderBottom = "1px solid black";
      popup.removeChild(popupbox);
      document.querySelector(".mainbox1").classList.remove("blur");
      deleteBtn.addEventListener("click", () => {
        document.querySelector(".box2").removeChild(box);
        if(document.querySelector(".box2").innerText===""){
          document.querySelector("#maintext").style.display="block";
        }
      });

    

      add.addEventListener("click", () => {
        const popupbox = document.createElement("div");
        const popHeading = document.createElement("p");
        const popInput = document.createElement("input");
        const addBtn = document.createElement("div");
        const closeBtn = document.createElement("div");
        popup.appendChild(popupbox);
        popupbox.className = "popup-box";
        popHeading.innerText = "Add New Items";
        popInput.type = "text";
        popInput.style.textAlign = "center";
        popInput.placeholder = "Add New Task Here";
        addBtn.className = "popup-box-button";
        closeBtn.className = "popup-box-button";
        addBtn.innerText = "Add";
        closeBtn.innerText = "Close";
        document.querySelector(".mainbox1").classList.add("blur");
        popupbox.appendChild(popHeading);
        popupbox.appendChild(popInput);
        popupbox.appendChild(addBtn);
        popupbox.appendChild(closeBtn);
        addBtn.addEventListener("click", () => {
          if(popInput.value !== "") {
            const task = document.createElement("div");
            const taskText = document.createElement("span");
            const doneButton = document.createElement("button");
            taskText.className = "task-text";
            doneButton.className = "done-button";
            task.className = "task";
            taskText.innerText = popInput.value;
            doneButton.innerText = "Completed";
            document.querySelector(".mainbox1").classList.remove("blur");
            box.appendChild(task);
            task.appendChild(taskText);
            task.appendChild(doneButton);
            popup.removeChild(popupbox);
            doneButton.addEventListener("click", () => {
              taskText.style.textDecoration = "line-through";
              task.removeChild(doneButton);
            });
          }
        });

        closeBtn.addEventListener("click", () => {
          popup.removeChild(popupbox);
          document.querySelector(".mainbox1").classList.remove("blur");
        });
      });
  });

  closeBtn.addEventListener("click", () => {
    popup.removeChild(popupbox);
    document.querySelector(".mainbox1").classList.remove("blur");
  });
});