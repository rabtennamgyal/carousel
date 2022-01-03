const imgs = document.querySelectorAll('.imgs')

const rightArrow = document.getElementById('right')
const leftArrow = document.getElementById('left')

let cur = 0
let max = imgs.length

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

    console.log(cur)
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

    console.log(cur)
})