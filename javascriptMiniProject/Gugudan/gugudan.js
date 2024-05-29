//웹 페이지가 로드되면 함수 실행
window.onload = function () {
    //button 태그를 btnNode변수에 저장
    //button 태그를 저장한 btnNode에 클릭하면 실행될 이벤트 리스너를 추가
    //클릭시 익명함수 작동
    const btnNode = document.querySelector("button");
    btnNode.addEventListener("click", function() {
        //id 속성값이 #danInput인 값을 가진 필드의 값을 danNum에 저장
        //danNum에 저장된 값을 console에 출력
        const danNum = document.querySelector("#danInput").value;
        console.log(danNum);
        //id속성 값이 #danNumber인 요소의 HTML 내용을 `danNum단`으로 설정
        document.querySelector("#danNumber").innerHTML = `${danNum}단`;
        
        //id속성 값이 #result인 요소를 resultNode에 저장
        const resultNode = document.querySelector("#result");
        //result 변수를 빈 문자열로 초기화
        let result = "";
        //구구단을 출력하기 위한 1~9까지 반복하는 for문
        //구구단 값을 저장할 result 문자열에 입력받은 danNum * i 추가
        //곱셈 결과는 최소 두 자리가 되도록 왼쪽에 공백처리
        //<br>태그로 줄바꿈
        for (let i = 1; i <= 9; i++) {
            result += `${danNum} x ${i} = ${String(danNum * i).padStart(2,' ')}<br>`;
        }
        //resultNode(id속성값이 #result)에 innerHTML 내용으로 result문자열 설정
        resultNode.innerHTML = result;
        //class속성값이 displayArea 인 요소의 display 스타일을 block으로 설정하여 화면에 표시
        document.querySelector(".displayArea").style.display = "block";
    });
}