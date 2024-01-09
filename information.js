// 獲取當前頁面的 URL，你可能需要根據實際情況調整
var currentPage = window.location.href;

// 獲取所有的 li 元素
var navItems = document.querySelectorAll('.nav-item');

// 迭代所有 li 元素
navItems.forEach(function (item) {
    // 檢查當前 li 對應的頁面是否與當前頁面相符
    if (item.querySelector('a').href === currentPage) {
        // 如果相符，添加 selected 類別
        item.classList.add('selected');
    }
});