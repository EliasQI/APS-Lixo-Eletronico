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