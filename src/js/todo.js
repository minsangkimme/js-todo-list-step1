// todo list에 todoItem을 키보드로 입력하여 추가하기
// todo list의 체크박스를 클릭하여 complete 상태로 변경. (li tag 에 completed class 추가, input 태그에 checked 속성 추가)
// todo list의 x버튼을 이용해서 해당 엘리먼트를 삭제
// todo list를 더블클릭했을 때 input 모드로 변경. (li tag 에 editing class 추가) 단 이때 수정을 완료하지 않은 상태에서 esc키를 누르면 수정되지 않은 채로 다시 view 모드로 복귀
// todo list의 item갯수를 count한 갯수를 리스트의 하단에 보여주기
// todo list의 상태값을 확인하여, 해야할 일과, 완료한 일을 클릭하면 해당 상태의 아이템만 보여주기

// root Element class: todoapp
// input Id: new-todo-title, class: new-todo
// toggle all checkbox class: toggle-all
// todo list ul id: todo-list, class: todo-list
// 카운트 컨테이너 wrap class count-container
// 총 개수 class: todo-count
// 필터 class: filters
// 전체보기 class: all selected
// 해야할일 class: active
// 완료한일 class: completed

const todoInputEl = document.querySelector('#new-todo-title');
const todoUlEl = document.querySelector('#todo-list');

let todoItem = '';

const renderTodo = function (todoItem) {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const input = document.createElement('input');
    const label = document.createElement('label');
    const button = document.createElement('button');

    div.classList.add('view');
    input.setAttribute('type', 'checkbox');
    input.classList.add('toggle');
    label.classList.add('label');
    label.textContent = todoItem;
    button.classList.add('destroy');

    div.appendChild(input);
    div.appendChild(label);
    div.appendChild(button);
    li.appendChild(div);
    todoUlEl.appendChild(li);

    const completedButtonElList = document.querySelectorAll('.toggle');

    completedButtonElList.forEach(button => {
        button.addEventListener('click', function (e) {
            const isCompleted = e.target.checked;

            if (isCompleted) {
                button.parentNode.parentNode.classList.add('completed');
                return;
            }

            button.parentNode.parentNode.classList.remove('completed');
        });
    });

    todoInputEl.value = '';
};

todoInputEl.addEventListener('keyup', function (e) {
    try {
        todoItem = e.target.value;
    } catch (e) {
        console.error('Error : ', e);
    }
});

document.addEventListener('keydown', function (e) {
    if (todoItem.length < 1) return;
    if (e.key === 'Enter') {
        // todo item 추가
        renderTodo(todoItem);
    }
});


