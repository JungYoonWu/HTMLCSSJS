//웹 페이지가 로드되면 함수 실행
window.onload = function () {
    //id속성값이 startBtn인 요소값을 찾아서 startBtn변수에 저장
    //startBtn변수에 저장된 버튼을 클릭하면 실행될 이벤트 리스너를 추가
    //click event발생시 실행될 익명함수
    const startBtn = document.querySelector("#startBtn");
    startBtn.addEventListener("click", function () {
        //id속성값이 numberInput인 필드를 numberInput에 저장
        const numberInput = document.querySelector("#numberInput");
        //numberInput의 값이 없으면 placeholder값을 size변수에 저장하고
        //값이 있으면 그 값을 size변수에 저장
        //size에 저장된 값을 console창에 출력
        if (numberInput.value == "") {
            size = numberInput.placeholder;
        }
        else {
            size = numberInput.value;
        }
        console.log(size);

        //class속성값이 tableArea인 요소를 tableArea변수에 저장
        const tableArea = document.querySelector(".tableArea");
        //size크기의 테이블을 만드는 HTML 문자열을 생성해서 cellHTML변수에 저장
        //size만큼 반복해서 열과 행을 생성
        const cellHTML = '<table class="w-auto">\n'
            + ('\t<tr>' + '<td></td>'.repeat(size) + '</tr>').repeat(size)
            + '</table>';
        //생성한 테이블HTML을 tableArea요소의 내부 HTML로 설정
        tableArea.innerHTML = cellHTML;
        //모든 td요소를 찾아서 tds변수에 저장
        const tds = document.querySelectorAll("td");
        //size*size개의 셀 중 하나를 랜덤으로 골라서 curLoc변수에 저장
        let curLoc = Math.floor(Math.random() * size * size);
        //랜덤으로 선택된 curLoc위치의 셀의 배경색을 violet색으로 설정
        tds[curLoc].style.backgroundColor = "violet";
        //curLoc값 console창에 출력
        console.log(curLoc);

        //키가 눌렸을 때 실행될 함수
        window.onkeydown = function (event) {
            //눌린 키의 코드가 방향키가 아니면 함수 종료
            if (event.keyCode < 37 || event.keycode > 40) return;
            //현재 위치한 셀의 배경색을 white로 설정
            tds[curLoc].style.backgroundColor = "white";
            //현제 위치한 셀의 행과 열을을 계산
            let row = Math.floor(curLoc / size);
            let col = curLoc % size;

            //방향키가 눌린 방향에 따라서 curLoc값을 재설정
            switch (event.key) {
                //왼쪽으로 이동
                //첫 번째 열이면 마지막 열로 이동
                case 'ArrowLeft':
                    curLoc += (col > 0 ? -1 : size-1);
                    break;
                //오른쪽으로 이동
                //마지막 열이면 첫 번째 열로 이동
                case 'ArrowRight':
                    curLoc += (col < size-1) ? 1 : -(size-1);
                    break;
                //위로 이동
                //첫 번째 행이면 마지막 행으로 이동
                case 'ArrowUp':
                    curLoc += (row > 0 ? -size : (size-1) * size);
                    break;
                //아래로 이동
                //마지막 행이면 첫 번째 행으로 이동
                case 'ArrowDown':
                    curLoc += Number((row < size-1) ? size : -(size-1)*size);
                    break;
                
            }
            //재설정된 curLoc값 console창에 출력
            console.log(curLoc);
            //새로운 위치의 셀의 배경색을 violet색으로 설정
            tds[curLoc].style.backgroundColor = "violet";
        }

    });
}