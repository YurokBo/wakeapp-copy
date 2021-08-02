

export function checkWidth() {
    let width = window.innerWidth
    return width
}

export function mouseMove() {
    let O = document.querySelector('.MainCursor'),
        X = 0,
        Y = 0; //надо  объявлять X/Y здесь, т.к они используются за пределами замыкания обработчика
    window.addEventListener('mousemove', function (ev) {
        ev = window.event || ev; //если window.event определен, то это IE<9, поддерживаем
        X = ev.pageX;
        Y = ev.pageY;
    });

    function move() { //зачем аргумент ?
        let p = 'px';
        O.style.left = X + p;
        O.style.top = Y + p;

        //setTimeout(move, 1);
    }

    move();
}

export function toggleNav() {
    if (this.navIsOpen) {
        this.navIsOpen = false;
    } else {
        this.navIsOpen = true;
    }
}

export function toggleAside(asideInfo) {
    console.dir(asideInfo)
    if (this.asideIsOpen) {
        this.asideIsOpen = false;
    } else {
        this.asideIsOpen = true;
    }
}