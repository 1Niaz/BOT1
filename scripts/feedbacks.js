const ReadFeedbackBtns = document.querySelectorAll('.feedback__read')

ReadFeedbackBtns.forEach(ReadFeedbackBtn => {
    const Feedback = document.querySelector('.one__feedback')
    const FeedbackBG = document.querySelector('.one__feedback__bg')
    ReadFeedbackBtn.addEventListener('click', () => {
        Feedback.classList.add('active__block')
    })
    FeedbackBG.addEventListener('click', () => {
        Feedback.classList.remove('active__block')
    })
})


