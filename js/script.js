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
    const memoryDisplay = document.getElementById("memory-display");
    memoryDisplay.style.display = "block";
    memoryDisplay.innerHTML = `
        <h3>第一次旅行</h3>
        <p>我們一起去旅行，度過了充滿歡笑和冒險的時光，那是我們的第一次遠足，一直是我們最美好的回憶。</p>
        <div class="images-container">
            <img src="./img/ark1.png" alt="旅行照片1" class="memory-img">
            <img src="./img/ark2.png" alt="旅行照片2" class="memory-img">
            <img src="./img/ark3.png" alt="旅行照片3" class="memory-img">
            <img src="./img/ark4.png" alt="旅行照片4" class="memory-img">
            <img src="./img/ark5.png" alt="旅行照片5" class="memory-img">
        </div>
    `;

    // 為每張照片添加點擊事件
    const images = document.querySelectorAll(".memory-img");
    images.forEach((img) => {
        img.addEventListener("click", function () {
            const modal = document.getElementById("image-modal");
            const modalImg = document.getElementById("modal-img");
            modal.style.display = "flex";
            modalImg.src = img.src; // 顯示被點擊的圖片
        });
    });
});

// 關閉模態窗口的功能
document.getElementById("image-modal").addEventListener("click", function () {
    this.style.display = "none";
});



document.getElementById("memory3").addEventListener("click", function () {
    const memoryDisplay = document.getElementById("memory-display");
    memoryDisplay.style.display = "block";
    memoryDisplay.innerHTML = `
        <h3>第一次旅行</h3>
        <p>我們一起去旅行，度過了充滿歡笑和冒險的時光，那是我們的第一次遠足，一直是我們最美好的回憶。</p>
        <div class="images-container">
            <img src="./img/ark1.png" alt="旅行照片1" class="memory-img">
            <img src="./img/ark2.png" alt="旅行照片2" class="memory-img">
            <img src="./img/ark3.png" alt="旅行照片3" class="memory-img">
            <img src="./img/ark4.png" alt="旅行照片4" class="memory-img">
            <img src="./img/ark5.png" alt="旅行照片5" class="memory-img">
        </div>
    `;

    // 為每張照片添加點擊事件
    const images = document.querySelectorAll(".memory-img");
    images.forEach((img) => {
        img.addEventListener("click", function () {
            const modal = document.getElementById("image-modal");
            const modalImg = document.getElementById("modal-img");
            modal.style.display = "flex";
            modalImg.src = img.src; // 顯示被點擊的圖片
        });
    });
});

// 關閉模態窗口的功能
document.getElementById("image-modal").addEventListener("click", function () {
    this.style.display = "none";
});

// 背景音樂控制
const music = document.getElementById("background-music");
const toggleMusicButton = document.getElementById("toggle-music");

// 自動播放背景音樂
window.onload = () => {
    music.play();
};

// 切換音樂播放/暫停
toggleMusicButton.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        toggleMusicButton.textContent = "暫停音樂";
    } else {
        music.pause();
        toggleMusicButton.textContent = "播放音樂";
    }
});
