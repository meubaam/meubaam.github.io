
const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const HIDDEN_C = "hidden";
const USERNAME_KEY = "username";
//string을 계속해서 사용하게 될 경우 오타가 날 수 있는데 그럴 때 JS에선 안알려줌..
//하지만 JS에서 변수선언을 하고 사용하면 오타가 났다고 알려준다! 그래서 변수선언을 하는 편이 좋음

function loginSubmit(event) { 
    event.preventDefault();
    loginForm.classList.add(HIDDEN_C);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}
    // greeting.innerText = `Hello ${username}`;
    // // "Hello " + username 과 같은 결과임  ``백틱 기호를 이용해서 ${}안에 변수 넣어주면 됨
    // greeting.classList.remove(HIDDEN_C);
    //local storage - > 브라우저에 정보를 쉽게 저자할 수 있게 해줌.
    // key와 value가 필요함. 미니DB
function paintGreetings(user) {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_C); 
}
//add-remove 반복해야 하니까 귀찮고 함수를 새로 하나 만들자! paint greetings    
//함수 안에서 localstorage.setItem 해서 한 번 더 찾고 ()argument없이 쓸 수도 있음.

// LOCAL STORAGE에 USERNAME이 저장되어 있을 경우 - LOGIN FORM 보여주는 대신 H1 바로 보여주려 함
// 어떻게 확인을 할까?

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_C)
    loginForm.addEventListener("submit", loginSubmit);
} else {
    paintGreetings(savedUsername);
}