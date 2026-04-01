let number = 0;
// // h1에 이쓴ㄴ 숫자 요소를 가져오자
// const resultH1 = document.getElementsByTagName("h1")[0];
const resultH1 = document.getElementById("result");
// // button에 있는 + 요소를 가져오자
// const plusButton = document.getElementsByTagName("button")[0];
//const plusButton = document.getElementsByClassName("plus")[0] //elements면 괄호가 있음
// plusButton.addEventListener("click", plus) //호이스팅
//함수 또는 var는 위에 있는 걸로 취급. 호이스팅때문

// function plus() {
//     number++;
//     resultH1.innerHTML = number;
// }

//함수의 정의야 정의. undefind가 아님. 호출은 js가 해줄거임.
// plusButton.addEventListener("click", () => {
//     number++;
//     resultH1.innerHTML=number;
// });

//onclick은 변수
// plusButton.onclick = () => {
//     number++;
//     resultH1.innerHTML=number;
// };

const plus = (value = 0) => {
    number+= value;
    resultH1.innerHTML = number;
}
const reset = (value = 0) => {
    number = 0;
    resultH1.innerHTML = number;
}
// const twoplus = () => {
//     number=number+2;
//     resultH1.innerHTML = number;
// }
// const minus = () => {
//     number--;
//     resultH1.innerHTML = number;
// }