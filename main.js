$(window).on("load", () => {
    const list = $("#tasks");
    const form = $("#new-task-form");
    const input = $("#new-task-input");
    const submit = $("#new-task-submit");

    submit.click( (e) => {
        e.preventDefault();

        if (input.val() == false)
        {
            alert("Please add task");
        }
        else
        {
            const task = $("<div>").addClass("task");
            const taskInput = $("<input>").addClass("text");
            const taskContent = $("<div>").addClass("content");
            const taskButtons = $("<div>").addClass("actions");
            const deleteButton = $("<button>").addClass("delete").html("<i class='fa-solid fa-trash'></i>");
            const editButton = $("<button>").addClass("edit").html("<i class='fa-solid fa-pen-to-square'></i>");

            taskInput.attr("type", "text");
            taskInput.attr("value", input.val());
            taskInput.attr("readonly", "readonly");

            editButton.attr("title", "edit task");
            deleteButton.attr("title", "remove task");
            
            taskButtons.append(editButton);
            taskButtons.append(deleteButton);
            taskContent.append(taskInput);
            task.append(taskContent);
            task.append(taskButtons);
            list.append(task);

            input.attr("value", "");

            editButton.click( () => {
                if (editButton.html() === '<i class="fa-solid fa-pen-to-square"></i>')
                {
                    taskInput.removeAttr("readonly");
                    taskInput.focus();
                    editButton.html("<i class='fa-solid fa-floppy-disk'></i>");
                }
                else
                {
                    taskInput.attr("readonly", "readonly");
                    editButton.html("<i class='fa-solid fa-pen-to-square'></i>");
                }
            });
    
            deleteButton.click( () => {
                task.remove();
            });
        }
    });
});