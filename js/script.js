// 模擬登入功能
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginContainer = document.getElementById("login-container");
const dashboard = document.getElementById("dashboard");
const pageContainer = document.getElementById("page-container");
const loginSuccessAnimation = document.getElementById("login-success-animation");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    // 檢查登入帳號密碼
    if (username === "beixin" && password === "0123") {
        // 顯示滿版文字動畫
        loginSuccessAnimation.style.display = "flex";

        // 動畫結束後切換到登入後畫面
        setTimeout(() => {
            loginSuccessAnimation.style.display = "none"; // 隱藏動畫
            loginContainer.style.display = "none";        // 隱藏登入畫面
            dashboard.style.display = "block";            // 顯示主畫面
            pageContainer.style.display = "block";        // 顯示翻頁按鈕
        }, 5000); // 等待 5 秒，確保動畫完整顯示
    } else {
        alert("這麼簡單都猜不到!!");
    }
});

const nextPageButton = document.getElementById("next-page-button");
const fullScreenMessage = document.getElementById("full-screen-message");
const messageText = document.getElementById("message-text");

// 點擊翻頁按鈕
nextPageButton.addEventListener("click", function () {
    // 顯示滿版動畫
    fullScreenMessage.style.display = "flex";

    // 第一階段文字
    messageText.textContent = "王小貝，生日快樂!!";

    // 第二階段文字，延遲 2 秒後顯示
    setTimeout(() => {
        messageText.textContent = "祝你身體健康、事事順心";
    }, 3000);

    // 第三階段文字，延遲 4 秒後顯示
    setTimeout(() => {
        messageText.textContent = "最重要的...";
    }, 6000);

    setTimeout(() => {
        messageText.textContent = "友誼長存~";
    }, 9000);

    // 5 秒後隱藏動畫
    setTimeout(() => {
        fullScreenMessage.style.display = "none";

        // 顯示完成提示或其他邏輯
        alert("就這樣，沒有囉~");
    }, 16000);
});


// 設置返回按鈕和回憶按鈕容器
const buttonsContainer = document.querySelector(".buttons-container");
const backButton = document.createElement("button");
backButton.id = "back-button";
backButton.textContent = "返回";
backButton.style.display = "none"; // 初始隱藏

// 插入返回按鈕到按鈕容器中
buttonsContainer.parentElement.appendChild(backButton);

// 點擊事件的通用邏輯
function setupMemoryClickEvent(memoryId, title, description, imageSources) {
    document.getElementById(memoryId).addEventListener("click", function () {
        // 隱藏按鈕群
        buttonsContainer.style.display = "none";
        // 顯示選擇的內容
        const memoryDisplay = document.getElementById("memory-display");
        memoryDisplay.style.display = "block";
        memoryDisplay.innerHTML = `
            <h3>${title}</h3>
            <p>${description}</p>
            <div class="images-container">
                ${imageSources
                .map(
                    (src) =>
                        `<img src="${src}" alt="回憶照片" class="memory-img">`
                )
                .join("")}
            </div>
        `;
        // 顯示返回按鈕
        backButton.style.display = "block";

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
// 返回按鈕功能
backButton.addEventListener("click", function () {
    // 隱藏回憶內容
    document.getElementById("memory-display").style.display = "none";
    // 顯示按鈕群
    buttonsContainer.style.display = "flex";
    // 隱藏返回按鈕
    backButton.style.display = "none";
});

// 設置回憶的點擊事件
setupMemoryClickEvent("memory1", "Knick", "這裡是我們相遇的地方，當初的我，跟小笙組著CP線，雖然我打從心底知道，那段CP~我已經是為了觀眾，為了流量在維持著。<br>但認識了田恬甜之後~每天的相處跟陪伴，讓我慢慢把凱文的思想拉回正軌，也讓我對凱文很抱歉，把一個好好的角色演壞了，才衍生出這麼早就讓凱文離開的劇情。<br>老實跟你說~演譯凱文時的我~暈爛，在暈的過程中，也學到了「聊天、相處」在追人的過程中，真的很重要!!!", [
    "./img/kk1.png",
    "./img/kk2.png",
    "./img/kk3.png",
    "./img/kk4.png",
    "./img/kk5.png"
]);

setupMemoryClickEvent("memory2", "Ark Project", "在KK結束後~我們私底下有意無意的說好~在Ark要組CP，從第一次的突襲告白(失敗收場)，一直到結婚那刻，我體會到了追人的難，吵架的煩XD<br>雖然中間有些突發狀況~但我秉持著只要真心喜歡一個人，為她做的任何事，都不能奢求回報。最後我還是成功了，成功體驗了一次真正有酸甜苦辣的戀愛，這段時光真的是我RP以來~最幸福，最快樂的時光!!!<br>但同時也是我花最多時間抽離出角色的一個伺服器，殺青的那一刻，是發自內心的難過與不捨QAQ", [
    "./img/ark1.png",
    "./img/ark2.png",
    "./img/ark3.png",
    "./img/ark4.png",
    "./img/ark5.png"
]);

setupMemoryClickEvent("memory3", "AlphaG 2.0", "AG2.0~一段奇妙的旅程，妹妹的黏TT，哥哥的保護慾都發揮到了極致。<br>雞排的那些錄音檔，在歐曉蓓的奶音下，真的是讓我這個當哥哥的好氣又好笑。雖然最後伺服器的人數驟降，還是謝謝你持續到最後，給我一個完整的Ending", [
    "./img/ag1.png",
    "./img/ag2.png",
    "./img/ag3.png",
    "./img/ag4.jpg",
    "./img/ag5.png"
]);

setupMemoryClickEvent("memory4", "佰安市", "佰安的標題為甚麼是得來不易呢~林凜琳跟黃曉翔的再度重逢，是真的不容易，就像我與你在茫茫人海中認識，也不容易XD<br>在你看到這禮物時，佰安可能已經快結束了。我還是那句老話，現實生活重要，你也不要有太大的壓力，雖然在佰安跟你相處的時間有限，但整體的體感還是很舒服的。如果最後佰安真的關了，我會用DC寫一封信，給你當作一個結尾吧。<br>最後私心希望你早早忙完，早早回歸XD", [
    "./img/an1.png",
    "./img/an2.png",
    "./img/an3.png",
    "./img/an4.png",
    "./img/an5.png"
]);

setupMemoryClickEvent("memory5", "現實RP", "跟你認識應該也有一年了吧，從一開始的上船、暈船到下船，到最後的知心朋友(知心的部分可能是我單方面認為XD)。聽你說了許多感情事、家庭事及工作事，你真的很辛苦...你常跟我說~你年紀也不小了，知道自己在幹嘛。我信! 但我只是捨不得看你一直受傷，甚至是流淚。工作壓力、家庭壓力及感情壓力，你一直在扛著，扛久了記得停下來休息一下，找個垃圾桶(舉手)好好宣洩一下。<br>好幾個月前跟你吵過一次架，你說「我吸收了你的垃圾，但又把垃圾反丟回來給妳」，那次之後我進化了XD也謝謝你把我徹底的上了一課<br>我DC的自介「這後盾雖然殘破了點，當「妳」主動拿起它時，它會盡全力支撐著妳，直到消失在這世上」。所以~王小貝，只要是我在的一天，我永遠是妳專用的垃圾桶~<br>能夠認識你，真的很開心!!", [
    "./img/hebe1.jpg",
    "./img/hebe2.jpg",
    "./img/hebe3.jpeg",
    "./img/hebe4.jpg",
    "./img/hebe5.jpg"
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
    <div class="hint-header">
        <h3>登入提示</h3>
    </div>
    <div class="hint-content">
        <p><strong>帳號:</strong> 你的 Discord 帳號 (6 個英文)</p>
        <p><strong>密碼:</strong> 你的生日 (4 個數字)</p>
    </div>
    <div class="hint-footer">
        <button id="close-hint" class="hint-close-btn">關閉</button>
    </div>
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


