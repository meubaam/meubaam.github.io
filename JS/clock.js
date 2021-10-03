const clock = document.querySelector("#clock");

//padStart-string의 길이 조절을 해준댜(앞쪽에 글자수만큼 뒤에 추가해줌)
// ex> padStart(2, "0") ->한자리면 앞쪽에 0 추가해줌. 뒤쪽에 넣어주는 padEnd도 있다.

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    // clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
// //interval. 매초 마다, 어느 시간이 지날 때 마다 실행하고 싶을 때
getClock(); //페이지 실행하고 바로 표시될 수 있도록 함수호출. 이걸 안하면 처음에는 기본인 00:00으로 보임
setInterval(getClock, 1000);
// //5000ms - 즉 5초

//timeout. 함수가 실행될 때 까지 얼마나 기다릴지.(delay)
// setTimeout(sayHello, 5000);

// new Date().getHours();
