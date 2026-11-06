document.addEventListener('DOMContentLoaded', () => {
    console.log("ShopEasy Prototype đã khởi chạy thành công!");

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            console.log("Đang tìm kiếm từ khóa:", e.target.value);
        });
    }
});