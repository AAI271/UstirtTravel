(function() {
    // https://dashboard.emailjs.com/admin/account
    // public key
    emailjs.init('qD7CZ7n1WvXqEb3GR');
})();

window.onload = function() {
    document.getElementById('send-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // service id and template id
        emailjs.sendForm('service_6yf3wrj', 'template_7on9yvv', this)
            .then(function() {
                alert('Спасибо Ваш запрос отправлен!');
            }, function(error) {
                alert('Ошибка! Попробуйте позднее')
            });
        this.fullName.value="";
        this.phone.value="";
        this.age.value="";
    });
}

const header = document.querySelector('header');

// Функция для добавления/удаления класса "scrolled"
function toggleScrolledClass() {
    if (window.scrollY >= 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Слушаем событие прокрутки и вызываем функцию
window.addEventListener('scroll', toggleScrolledClass);


const burger = document.getElementById('burger');
const nav = document.getElementById('nav');


burger.addEventListener('click',()=>{
    nav.classList.toggle('open')
})
