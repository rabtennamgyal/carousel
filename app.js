const imgs = document.querySelectorAll('.imgs')

const rightArrow = document.getElementById('right')
const leftArrow = document.getElementById('left')
const dot = document.querySelectorAll('.dot')

let cur = 0
let max = imgs.length


function styleDot() {
    const dots = document.querySelectorAll('.dot')
    let newDots = Array.from(dots)
    let curDot = dots[cur]
    curDot.style.backgroundColor = '#fff'

    let rest = newDots.filter(el => el !== curDot)

    rest.forEach(el => {
        el.style.backgroundColor = '#000'
    })
}

styleDot()


imgs.forEach((el, i) => {
    el.style.transform = `translateX(${100 * (i - cur)}%)`
})


function slideRight() {
    if (cur === max - 1) {
        cur = 0
    } else {
        cur++; 
    }

    imgs.forEach((el, i) => {
        el.style.transform = `translateX(${100 * (i - cur)}%)`
    })
    styleDot()
}


function slideLeft() {
    if (cur === 0) {
        cur = max - 1
    } else {
        cur--;
    }

    imgs.forEach((el, i) => {
        el.style.transform = `translateX(${100 * (i - cur)}%)`
    })
    styleDot()
}


rightArrow.addEventListener('click', () => {
    slideRight()
})


leftArrow.addEventListener('click', () => {
    slideLeft()
})


dot.forEach(el => {
    el.addEventListener('click', (e) => {
        const curDot = e.target.classList[1]
        let dots = Array.from(dot)
        let dotClass = dots.map(el => el.classList[1])

        for (let i = 0; i < dotClass.length; i++) {
            if (curDot === dotClass[i]) {
                cur = i
                styleDot()
                imgs.forEach((el, i) => {
                    el.style.transform = `translateX(${100 * (i - cur)}%)`
                })
            }
        }
    })
})


setInterval(() => {
    slideRight()
}, 10000)