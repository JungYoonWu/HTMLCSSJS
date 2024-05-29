//웹 페이지가 로드되면 함수 실행
window.onload = function() {
    //id속성이 #todoInput인 요소를 todoInput변수에 저장
    const todoInput = document.querySelector("#todoInput");
    //id속성값이 #addBtn인 요소를 addBtn변수에 저장 
    const addBtn = document.querySelector("#addBtn");
    //변수addBtn에 저장된 버튼을 클릭하면 실행될 이벤트 리스너를 추가
    addBtn.addEventListener("click", function() {
        //todoInput요소에 value값이 있으면 addTodoList함수 호출
        if (todoInput.value != "") addTodoList();
    });
}
//선언적 함수 addTodoList
function addTodoList() {
    //console에 todoInput에 입력된 값을 출력
    console.log(todoInput.value);

    //class속성값이 listArea인 요소를 listArea에 저장
    const listArea = document.querySelector(".listArea");
    
    //새로운 li태그요소를 생성해서 liNode변수에 저장
    const liNode = document.createElement("li");
    
    //새로운 button태그요소를 생성해서 checkBtn변수에 저장
    const checkBtn = document.createElement("button");
    
    //새로운 span태그요소를 생성해서 todoText변수에 저장
    const todoText = document.createElement("span");

    //새로운 button태그요소를 생성해서 delBtn변수에 저장
    const delBtn = document.createElement("button");

    //checkBtn button태그를 liNode요소에 자식요소로 추가
    liNode.appendChild(checkBtn);
    //todoText span태그를 liNode요소에 자식요소로 추가
    liNode.appendChild(todoText);
    //delBtn button태그를 liNode요소에 자식요소로 추가
    liNode.appendChild(delBtn);
    //자식요소들을 추가해서 만든 liNode li태그를 listArea요소에 자식요소로 추가
    listArea.appendChild(liNode);

    //todoText span에 todoInput의 입력값을 텍스트로 설정
    todoText.innerText = todoInput.value;
    //초기화
    todoInput.value = "";
    //delBtn 버튼에 X텍스트 설정
    delBtn.innerText = "X"

    //chechBtn버튼에 checkBtn클래스 추가
    checkBtn.classList.add("checkBtn");
    //todoText span에 todoText클래스 추가
    todoText.classList.add("todoText");
    //delBtn버튼에 delBtn클래스 추가
    delBtn.classList.add("delBtn");

    //checkBtn버튼이 클릭되면 실행될 이벤트리스너를 추가
    checkBtn.addEventListener("click", function() {
        //checkBtn버튼의 내용이 없으면 V를 추가하고 아니면 ""로 초기화
        if (checkBtn.innerHTML == "") {
            checkBtn.innerHTML = "✔";
        }
        else {
            checkBtn.innerHTML = "";
        }
        //todoText span에 check클래스를 추가하거나 제가
        todoText.classList.toggle("check");
    })
    //delBtn이 클릭되면 liNode요소를 삭제하는 이벤트리스너 추가
    delBtn.addEventListener("click", function() {
        liNode.remove();
    })
    //console창에 listArea요소의 마지막 자식요소를 출력
    console.log(listArea.lastChild);
}