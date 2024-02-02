let stepcount = 0;
let stepper = document.querySelector("#step-count");
stepper.innerText = "step count: " + stepcount;
document.addEventListener('DOMContentLoaded', function () {
    const mover = document.getElementById('mov');
    const step = 10;

    window.addEventListener('keydown', function (event) {
        switch (event.key) {
            case 'ArrowUp':
                move('up');
                stepcount++;
                stepper.innerText = "step count: " + stepcount;
                break;
            case 'w':
                move('up');
                stepcount++;
                stepper.innerText = "step count: " + stepcount;
                break;
            case 'ArrowDown':
                move('down');
                stepcount++;
                stepper.innerText = "step count: " + stepcount;
                break;
            case 's':
                move('down');
                stepcount++;
                stepper.innerText = "step count: " + stepcount;
                break;
            case 'ArrowLeft':
                move('left');
                stepcount++;
                stepper.innerText = "step count: " + stepcount;
                break;
            case 'a':
                move('left');
                stepcount++;
                stepper.innerText = "step count: " + stepcount;
                break;
            case 'ArrowRight':
                move('right');
                stepcount++;
                stepper.innerText = "step count: " + stepcount;
                break;
            case 'd':
                move('right');
                stepcount++;
                stepper.innerText = "step count: " + stepcount;
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

let mode = document.querySelector("#mode");
let bod = document.querySelector("body");
let moder = 'light';
let moved = document.querySelector(".mover")
mode.addEventListener("click",()=>{
    if(moder==='light'){
        bod.style.backgroundColor = "#E9724C";
        moved.style.backgroundColor = "#E9724C";
        moder = 'dark'; 
    }
    else{
        bod.style.backgroundColor = "#FFA62B";
        moved.style.backgroundColor = "#FFA62B";
        moder = 'light'; 
    }
})
