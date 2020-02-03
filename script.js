window.addEventListener('DOMContentLoaded', function() {
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    })

    //timer

    let deadline = '2020-02-11';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());
        let seconds =  Math.floor((t/1000) % 60);
        if (Math.floor((t/1000) % 60) < 10 ) {
            seconds = '0' + Math.floor((t/1000) % 60);
        } else {
            seconds =  Math.floor((t/1000) % 60);
        };
        
        let minutes = Math.floor((t/1000/60) % 60);
        if (Math.floor((t/1000/60) % 60) < 10 ) {
            minutes = '0' + Math.floor((t/1000/60) % 60);
        } else {
            minutes =  Math.floor((t/1000/60) % 60);
        };

        let hours = Math.floor((t/(1000*60*60)));
        if (Math.floor((t/(1000*60*60))) < 10 ) {
            hours = '0' +  Math.floor((t/(1000*60*60)));
        } else {
            hours =  Math.floor((t/(1000*60*60)));
        };

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

        function setClock(id, endtime) {
            let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');
            timeInterval = setInterval(updateClock, 1000);
        
            function updateClock() {
                let t = getTimeRemaining(endtime);
                hours.textContent = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;

                if (t.total <= 0) {
                    clearInterval(timeInterval);
                }
        }
    }

    setClock('timer', deadline);

    //modal
    function showModal() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';

    }

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');
        des = document.querySelectorAll('.description-btn');

        
        for (let i = 0; i < des.length; i++) {
            des[i].addEventListener('click', showModal);
           
        }
 
        more.addEventListener('click', showModal);
        close.addEventListener('click', closeModal);

        //form

        let message = {
            loading: 'Загрузка',
            success: 'Спасибо! Скоро свяжемся',
            failure: 'Что-то пошло не так..'
        };

        let form = document.querySelector('.main-form');
        let input = document.querySelector('.popup-form__input');
        let statucMessage = document.createElement('div');

            statucMessage.classList.add('status');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            form.appendChild(statucMessage);

            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            let formData1 = new formData(form);
            request.send(formData1);
        })    

        //slider
        let slideIndex = 1,
            slides = document.querySelectorAll('.slider-item'),
            prev = document.querySelector('.prev'),
            next = document.querySelector('.next'),
            dotsWrap = document.querySelector('.slider-dots'),
            dots = document.querySelectorAll('.dot');
        
        showSlides(slideIndex);

        function showSlides(n) {

            if (n > slides.length) {
               slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }

            slides.forEach((item) => item.style.display = 'none');
            //for (let i = 0; i < slides.length; i++) {
               // slides[i].style.display = 'none';
            //}
            dots.forEach((item) => item.classList.remove('dot-active'));

            slides[slideIndex - 1].style.display = 'block';
            dots[slideIndex - 1].classList.add('dot-active');
        }

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        prev.addEventListener('click', function() {
            plusSlides(-1);
        });

        next.addEventListener('click', function() {
            plusSlides(1);
        });

        dotsWrap.addEventListener('click', function(event) {
            for (let i = 0; i < dots.length + 1; i++) {
                if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                    currentSlide(i);
                }
            }
        })

        


});

