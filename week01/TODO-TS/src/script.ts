//1. html 요소 선택
const todoInput = document.getElementById('form-input') as HTMLInputElement;
const todoForm = document.getElementById('todo-form') as HTMLFormElement

const todoList = document.getElementById('todo-list') as HTMLUListElement
const doneList = document.getElementById('done-list') as HTMLUListElement

console.log(todoInput, todoForm, todoList, doneList);

//2. 할 일이 어떻게 생기는지 타입 정의
type Todo = {
    id: number,
    text: string
};

let todos:Todo[] = [];
let doneTasks:Todo[] = [];

//3. 할 일 목록 랜더링 함수를 정의의
const renderTasks = (): void => {
    todoList.innerHTML = '';
    doneList.innerHTML = '';

    todos.forEach((todo): void => {
        const li = createTodoElement(todo, false);
        todoList.appendChild(li);
    });
    doneTasks.forEach((todo): void => {
        const li = createTodoElement(todo, true);
        doneList.appendChild(li);
    })
};

//4. 할 일을 텍스트 입력 처리 함수(공백 잘라줌)
const getTodoText = (): string  =>{
    return todoInput.value.trim();
};

//5. 할 일 추가 처리 함수
const addTodo = (text: string): void =>{
    todos.push({id: Date.now(), text: text});
    todoInput.value = '';
    renderTasks();
};

//6. 할 일 상태 변경(완료)
const completeTodo = (todo:Todo): void => {
    todos = todos.filter((t) => t.id !== todo.id);
    doneTasks.push(todo);
    renderTasks();
};

//7. 완료된 일 삭제
const deleteTodo = (todo:Todo): void => {
    doneTasks = doneTasks.filter((t)=>t.id !==todo.id);
    renderTasks();
};

//8. 할일 아이템 생성 함수(완료 여부에 따라 버튼 텍스트나 색생 성렵)
const createTodoElement = (todo:Todo, isDone: boolean): HTMLElement => {
    const li = document.createElement('li');
    li.classList.add('render-container__item');
    li.textContent = todo.text;

    const button = document.createElement('button');
    button.classList.add('render-container__button');

    if(isDone){
        button.textContent = '삭제';
        button.style.backgroundColor = '#dc3545';
    }
    else{
        button.textContent = '완료';
        button.style.backgroundColor = '#28a745';
    }

    button.addEventListener('click',(): void => {
        if(isDone){
            deleteTodo(todo);
        }else{
            completeTodo(todo);
        }
    })

    li.appendChild(button);
    return li;
};

//9. 폼 제출 이벤트 리스너
todoForm.addEventListener('submit', (event:Event):void =>{
    event.preventDefault();
    const text = getTodoText();
    if(text){
        addTodo(text);
    }
});

renderTasks();
