//유저가 값을 입력한다
// + 버튼 클릭 할일 추가
// delete버튼 누르면 할일 삭제
//check버튼 누르면 할일 끝 지움밑줄
//진행중 탭을ㅇ 누르면, 언더바가 이동
//끝난탭 끝난탭 진행중탭 진행중인것만
//전체탭 누르면 전체아이템


let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let taskList = [];

addButton.addEventListener("click", addTask);

function addTask(){
    let task = {
        taskContent : taskInput.value,
        isComplete : false
    }
    taskList.push(task);
    console.log(taskList);
    render();
}

function render(){
    let resultHTML = '';
    for(let i=0; i < taskList.length; i++){
        resultHTML += `<div class="task">
        <div>${taskList[i].taskContent}</div>
        <div>
          <button>Check</button>
          <button>Delete</button>
        </div>
      </div>`
    }

    document.getElementById("task-board").innerHTML = resultHTML;
}


