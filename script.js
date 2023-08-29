(function() {
    // https://dashboard.emailjs.com/admin/account
    // public key
    emailjs.init('qD7CZ7n1WvXqEb3GR');
})();

(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "09/10/",
        birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
        birthday = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {

            const now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            if (distance < 0) {
                document.getElementById("countdown").style.display = "none";
                clearInterval(x);
            }
            //seconds
        }, 1000)
}());

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


// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-link');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal(e) {
    e.preventDefault()
    modal.style.display = 'block';
}

// Close
function closeModal() {
    modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

