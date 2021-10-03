const images = [
    "0.png", "1.png", "2.png", "3.png"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];
const body = document.body
const bgImage = document.createElement("img");
// //JS로 html요소를 생성할 수도 있음..!!!! 
// bgImage.src = `/IMG/${chosenImage}`;

// document.body.appendChild(bgImage);
body.style.backgroundImage = `url(/IMG/${chosenImage})`;
//appendChild -> html 추가