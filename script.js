document.addEventListener('DOMContentLoaded', function () {
    const mover = document.getElementById('mov');
    const step = 10;

    window.addEventListener('keydown', function (event) {
        switch (event.key) {
            case 'ArrowUp':
                move('up');
                break;
            case 'ArrowDown':
                move('down');
                break;
            case 'ArrowLeft':
                move('left');
                break;
            case 'ArrowRight':
                move('right');
                break;
        }
    });

    function move(direction) {
        const currentTop = parseInt(getComputedStyle(mover).top);
        const currentLeft = parseInt(getComputedStyle(mover).left);

        switch (direction) {
            case 'up':
                mover.style.top = currentTop - step + 'px';
                break;
            case 'down':
                mover.style.top = currentTop + step + 'px';
                break;
            case 'left':
                mover.style.left = currentLeft - step + 'px';
                break;
            case 'right':
                mover.style.left = currentLeft + step + 'px';
                break;
        }
    }
});
