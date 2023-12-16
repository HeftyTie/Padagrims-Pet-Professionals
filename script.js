document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('consultation-form');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.querySelector('.close-modal');

    openModalBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
function redirectToPage(page) {
    window.location.href = page;
}