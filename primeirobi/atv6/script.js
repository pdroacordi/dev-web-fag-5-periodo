const taskForm = document.querySelector("form");
const taskList = document.querySelector(".task-list");

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const taskInput = taskForm.elements.namedItem("inTaskDescription");

    addToDo(taskInput.value);    
    cleanInput(taskInput);
});

taskList.addEventListener("click", (e) => {
    const toggleBtn = e.target.closest(".toggle");
    if (toggleBtn) {
        const li = toggleBtn.closest("li");
        if (!li) return;

        const isCompleted = li.classList.contains("completed");
        li.classList.toggle("completed", !isCompleted);
        toggleBtn.setAttribute("aria-pressed", String(!isCompleted));

        const txt = li.querySelector('.text')?.textContent ?? '';
        toggleBtn.setAttribute(
            'aria-label',
            isCompleted ? `Marcar como pendente: ${txt}` : `Concluir tarefa: ${txt}`
        );

        isCompleted ? taskList.appendChild(li) : taskList.prepend(li);

        return;
    }

    const deleteBtn = e.target.closest(".delete");
    if (deleteBtn) {
        const li = deleteBtn.closest("li");
        li?.remove();
    }
});


function addToDo(text){
    text = text.trim();
    if (!text) return;
    
    const li = document.createElement("li");

    const toggleBtn = document.createElement("button");
    toggleBtn.className = "toggle";
    toggleBtn.type = "button";
    toggleBtn.setAttribute("aria-pressed", "false");
    toggleBtn.setAttribute("aria-label", `Concluir tarefa: ${text}`);

    const span = document.createElement("span");
    span.className = "text";
    span.textContent = text;

    toggleBtn.appendChild(span);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.type = "button";
    deleteBtn.setAttribute("aria-label", `Excluir ${text}`);
    deleteBtn.textContent = "✕";

    li.appendChild(toggleBtn);
    li.appendChild(deleteBtn);

    taskList.prepend(li);
}

function cleanInput(input) {
    if (!(input instanceof HTMLInputElement)) return;
    input.value = "";
    input.focus();
}