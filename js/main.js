let ratingBlock = document.querySelector('.rating')
let ratingThanks = document.querySelector('.rating_thanks')
let ratingNum = 0
let ratingSelected = document.querySelector('.selected')
let rating = Array.from(document.querySelectorAll('.rating-btn'))

rating.map(item => {
    item.addEventListener('click', () => {
        if (ratingNum === 0) {
            ratingNum = +item.value
            item.classList.add('rating-btn-active')
        } else {
            for (const element in rating) {
                rating[element].classList.remove('rating-btn-active')
            }
            ratingNum = +item.value
            item.classList.add('rating-btn-active')
        }
        return ratingNum
    })
})

document.querySelector('.rating-submit').addEventListener('click', () => {
    if (ratingNum !== 0) {
        ratingBlock.style.display = 'none'
        ratingThanks.style.display = 'flex'
        ratingSelected.innerHTML = `You selected ${ratingNum} out of 5`
    }
})