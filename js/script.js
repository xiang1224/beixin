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
        alert("這麼簡單都能打錯!!!");
    }
});

// 點擊事件的通用邏輯
function setupMemoryClickEvent(memoryId, title, description, imageSources) {
    document.getElementById(memoryId).addEventListener("click", function () {
        const memoryDisplay = document.getElementById("memory-display");
        memoryDisplay.style.display = "block";
        memoryDisplay.innerHTML = `
            <h3>${title}</h3>
            <p>${description}</p>
            <div class="images-container">
                ${imageSources.map(src => `<img src="${src}" alt="旅行照片" class="memory-img">`).join('')}
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
}

// 設置回憶的點擊事件
setupMemoryClickEvent("memory1", "第一次旅行", "我們一起去旅行，度過了充滿歡笑和冒險的時光，那是我們的第一次遠足，一直是我們最美好的回憶。", [
    "./img/ark1.png",
    "./img/ark2.png",
    "./img/ark3.png",
    "./img/ark4.png",
    "./img/ark5.png"
]);

setupMemoryClickEvent("memory2", "Ark Project", "我們一起去旅行，度過了充滿歡笑和冒險的時光，那是我們的第一次遠足，一直是我們最美好的回憶。", [
    "./img/ark1.png",
    "./img/ark2.png",
    "./img/ark3.png",
    "./img/ark4.png",
    "./img/ark5.png"
]);

setupMemoryClickEvent("memory3", "AlphaG 2.0", "我們一起去旅行，度過了充滿歡笑和冒險的時光，那是我們的第一次遠足，一直是我們最美好的回憶。", [
    "./img/ark1.png",
    "./img/ark2.png",
    "./img/ark3.png",
    "./img/ark4.png",
    "./img/ark5.png"
]);

setupMemoryClickEvent("memory4", "佰安市", "我們一起去旅行，度過了充滿歡笑和冒險的時光，那是我們的第一次遠足，一直是我們最美好的回憶。", [
    "./img/ark1.png",
    "./img/ark2.png",
    "./img/ark3.png",
    "./img/ark4.png",
    "./img/ark5.png"
]);

setupMemoryClickEvent("memory5", "現實RP", "我們一起去旅行，度過了充滿歡笑和冒險的時光，那是我們的第一次遠足，一直是我們最美好的回憶。", [
    "./img/ark1.png",
    "./img/ark2.png",
    "./img/ark3.png",
    "./img/ark4.png",
    "./img/ark5.png"
]);

// 關閉模態窗口的功能
document.getElementById("image-modal").addEventListener("click", function () {
    this.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".fade-in-button");
    buttons.forEach((button, index) => {
        // 為每個按鈕添加不同的動畫延遲
        button.style.animationDelay = `${index * 0.5}s`;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const hintButton = document.getElementById('hint-button');
    hintButton.addEventListener('click', function () {
        // 建立提示框
        const hintBox = document.createElement('div');
        hintBox.className = 'hint-box';
        hintBox.innerHTML = `
            <p><strong>帳號:</strong> 你的Discord帳號</p>
            <p><strong>密碼:</strong> 你的生日</p>
            <button id="close-hint">關閉</button>
        `;

        // 建立遮罩層
        const overlay = document.createElement('div');
        overlay.className = 'hint-overlay';

        document.body.appendChild(overlay);
        document.body.appendChild(hintBox);

        // 顯示提示框與遮罩層
        overlay.style.display = 'block';
        hintBox.style.display = 'block';

        // 關閉提示框功能
        const closeButton = document.getElementById('close-hint');
        closeButton.addEventListener('click', function () {
            hintBox.remove();
            overlay.remove();
        });
    });
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

const container = document.querySelector('.animated-background');
for (let i = 0; i < 20; i++) {
    const shape = document.createElement('div');
    shape.className = 'floating-shape';
    shape.style.top = Math.random() * 100 + '%';
    shape.style.left = Math.random() * 100 + '%';
    shape.style.animationDelay = Math.random() * 10 + 's';
    container.appendChild(shape);
}


