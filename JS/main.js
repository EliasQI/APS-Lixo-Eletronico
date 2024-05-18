// abrir/fechar perguntas

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq =>{
    faq.addEventListener('click', () => {
        faq.classlist.toggle('open');

        //muda icon
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className = "uil uil-minus"
        } else{
            icon.className = "uil uil-plus"
        }
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            const isOpen = answer.style.maxHeight;

            // Close all answers and reset icons
            document.querySelectorAll('.faq-answer').forEach(ans => ans.style.maxHeight = null);
            document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'));

            // Toggle the selected answer and icon
            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                question.classList.add('active');
            }
        });
    });
});