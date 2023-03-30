window.onload = function () {
    // get the elements from the DOM
    var task = document.getElementById("task");
    var add = document.getElementById("add");
    var display = document.getElementById("display");
    var list = document.getElementById("list");

    // add event listener to the add button
    add.addEventListener("click", function () {
        // get the value from the task text box
        var taskValue = task.value;

        // create a new list item
        var li = document.createElement("li");

        // create a new text node
        var textNode = document.createTextNode(taskValue);

        // create a new delete button
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";

        // add the text node to the list item
        li.appendChild(textNode);

        // add the delete button to the list item
        li.appendChild(deleteButton);

        // add the list item to the list
        list.appendChild(li);

        // clear the task text box
        task.value = "";

        // add event listener to the delete button
        deleteButton.addEventListener("click", function () {
            // remove the list item from the list
            list.removeChild(li);
        });
    });

    // Load the page with the list hidden
    list.style.display = "none";

    // On click button should display the list and change to hide, then on click hide should hide the list and change to display

    display.addEventListener("click", function () {
        if (list.style.display === "none") {
            list.style.display = "block";
            display.innerHTML = "Hide";
        } else {
            list.style.display = "none";
            display.innerHTML = "Display";
        }
    });
};