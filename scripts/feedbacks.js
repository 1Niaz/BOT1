const ReadFeedbackBtns = document.querySelectorAll('.feedback__read')

ReadFeedbackBtns.forEach(ReadFeedbackBtn => {
    const Feedback = ReadFeedbackBtn.closest('.feedbacks__cards__item').querySelector('.one__feedback')
    const FeedbackBG = Feedback.querySelector('.one__feedback__bg')
    const FeedbackCross = Feedback.querySelector('.one__feedback__cross')

    ReadFeedbackBtn.addEventListener('click', () => {
        Feedback.classList.add('active__block')
        document.body.style.overflow = 'hidden'
    })

    FeedbackCross.addEventListener('click', () => {
        Feedback.classList.remove('active__block')
        document.body.style.overflow = ''
    })

    FeedbackBG.addEventListener('click', () => {
        Feedback.classList.remove('active__block')
        document.body.style.overflow = ''
    })
    
    
})


