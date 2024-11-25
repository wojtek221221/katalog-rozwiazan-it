
function showModal(categoryId) {
    const modal = document.getElementById(categoryId);
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

function closeModal(categoryId) {
    const modal = document.getElementById(categoryId);
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}
