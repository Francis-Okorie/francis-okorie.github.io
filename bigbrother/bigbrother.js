const menuToggle = document.querySelector(".hamburger");
const menuItem = document.querySelector('.nav-main');
const closeNav = document.querySelector(".closetoggle");
const primaryNav = document.querySelector(".menu");
const navToggle = document.querySelector(".mobile-toggle");
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const audio = document.getElementById('audio');
const playpauseBtn = document.getElementById('playpause');
let count = 0;





function playPause(){
    if (count == 0) {
        count = 1;
        audio.play();
    }else {
        count = 0;
        audio.pause();
    }
}


navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");
    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
        
    } else {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false); 
    }

});




form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();

    if(usernameValue === '') {
        setError(username, 'Full name is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }


};








menuToggle.addEventListener("click", () => {
    const visibilty = menuItem.getAttribute("data-visible");

    if(visibilty === "false") {
        menuItem.setAttribute("data-visible", true);
    }

    console.log("clicked");
});

closeNav.addEventListener("click", () => {
    const visibilty = menuItem.getAttribute("data-visible");
    if(visibilty === "true") {
        menuItem.setAttribute("data-visible", false);
    }
});

