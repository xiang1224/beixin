// 模擬登入功能
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginContainer = document.getElementById("login-container");
const dashboard = document.getElementById("dashboard");
const memoryDisplay = document.getElementById("memory-display");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    // 檢查登入帳號密碼
    if (username === "beixin" && password === "0123") {
        // 登入成功，顯示主頁
        loginContainer.style.display = "none";
        dashboard.style.display = "block";
    } else {
        alert("帳號或密碼錯誤！");
    }
});

// 顯示回憶的內容
document.getElementById("memory1").addEventListener("click", function () {
    memoryDisplay.style.display = "block";
    memoryDisplay.innerHTML = `
        <h3>我們的相遇</h3>
        <p>這是我們第一次相遇的回憶，記得那天我們第一次見面，彼此的眼神中都充滿了期待...</p>
        <div class="images-container">
            <img src="photo1.jpg" alt="相遇照片1">
            <img src="photo2.jpg" alt="相遇照片2">
            <img src="photo3.jpg" alt="相遇照片3">
            <img src="photo4.jpg" alt="相遇照片4">
            <img src="photo5.jpg" alt="相遇照片5">
        </div>
    `;
});

document.getElementById("memory2").addEventListener("click", function () {
    memoryDisplay.style.display = "block";
    memoryDisplay.innerHTML = `
        <h3>第一次旅行</h3>
        <p>我們一起去旅行，度過了充滿歡笑和冒險的時光，那是我們的第一次遠足，一直是我們最美好的回憶。</p>
        <div class="images-container">
            <img src="./img/ark1.png" alt="旅行照片1">
            <img src="./img/ark2.png" alt="旅行照片2">
            <img src="./img/ark3.png" alt="旅行照片3">
            <img src="./img/ark4.png" alt="旅行照片4">
            <img src="./img/ark5.png" alt="旅行照片5">
        </div>
    `;
});

document.getElementById("memory3").addEventListener("click", function () {
    memoryDisplay.style.display = "block";
    memoryDisplay.innerHTML = `
        <h3>生日驚喜</h3>
        <p>這是你給我準備的生日驚喜，完全沒想到會收到這樣的驚喜，我的心充滿了感動...</p>
        <div class="images-container">
            <img src="birthday1.jpg" alt="生日驚喜照片1">
            <img src="birthday2.jpg" alt="生日驚喜照片2">
            <img src="birthday3.jpg" alt="生日驚喜照片3">
            <img src="birthday4.jpg" alt="生日驚喜照片4">
            <img src="birthday5.jpg" alt="生日驚喜照片5">
        </div>
    `;
});
