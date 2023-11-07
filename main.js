var add = document.getElementById('add-btn');
var inputValue = document.getElementById('input');

add.addEventListener('click', function () {
    console.log(inputValue.value);
    var li = document.createElement('li');
    var ul = document.querySelector('ul');
    var taskName = document.createElement('div');

    var editBtn = document.createElement('i');
    editBtn.setAttribute("class", "edit-button fa-solid fa-pen-to-square");
    editBtn.setAttribute("id", "edit-btn");

    var editBox = document.createElement('input');
    editBox.setAttribute("id", "edit-value");
    editBox.style.display = "none";

    var checkBtn = document.createElement('i');
    checkBtn.setAttribute("id", "check-btn");
    checkBtn.setAttribute("class", "check-button fa-solid fa-check");
    checkBtn.style.display = "none";

    taskName.setAttribute('id', 'task-name');
    taskName.innerHTML = inputValue.value;
    li.appendChild(taskName);
    li.appendChild(editBtn);
    li.appendChild(editBox);
    li.appendChild(checkBtn);
    ul.appendChild(li);



    editBtn.addEventListener('click', function () {
        editBtn.style.display = 'none';
        editBox.style.display = "block";
        checkBtn.style.display = "block";
    });

    checkBtn.addEventListener('click', function () {
        taskName.innerHTML = editBox.value;
        checkBtn.style.display = "none";
        editBox.style.display = "none";
        editBtn.style.display = "block";
    })
})