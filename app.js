const imgs = document.querySelectorAll('.imgs')

const rightArrow = document.getElementById('right')
const leftArrow = document.getElementById('left')

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


rightArrow.addEventListener('click', () => {
    if (cur === max - 1) {
        cur = 0
    } else {
        cur++; 
    }

    imgs.forEach((el, i) => {
        el.style.transform = `translateX(${100 * (i - cur)}%)`
    })
    styleDot()
})


leftArrow.addEventListener('click', () => {
    if (cur === 0) {
        cur = max - 1
    } else {
        cur--;
    }

    imgs.forEach((el, i) => {
        el.style.transform = `translateX(${100 * (i - cur)}%)`
    })
    styleDot()
})