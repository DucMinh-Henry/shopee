//toast function
function toast({
    title = '',
    message = '',
    type = 'info',
    duration = 3000
}) {
    const main = document.getElementById('toast');
    if(main) {
        const toast = document.createElement('div');

        // Auto remove toast
        const autoRemoveId = setTimeout(function() {
            main.removeChild(toast);
        }, duration + 1000);

        // Remove toast when clicked
        toast.onclick = function(e) {
            if(e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        }

        const icons = {
            success: 'fa-solid fa-circle-check',
            info: 'fa-solid fa-circle-info',
            warning: 'fa-solid fa-circle-exclamation',
            erorr: 'fa-solid fa-circle-exclamation',
        }
        const delay = (duration / 1000).toFixed(2);
        const icon = icons[type];

        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `sliderInleft ease .3s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `;
        main.appendChild(toast);
    }
}

function showSuccessToast() {
    toast({
    title: 'Thàng công!',
    message: 'Bạn đã đăng kí thành công tại khóa học của chúng tôi.',
    type: 'success',
    duration: 5000
    })
}

function showErorrToast() {
    toast({
    title: 'Thất Bại!',
    message: 'Có lỗi xảy ra.',
    type: 'erorr',
    duration: 5000
    })
}