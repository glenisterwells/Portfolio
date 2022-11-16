// Nav Bar Animation

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
    //    Toggle Navs
        nav.classList.toggle('nav-active');  
        // Animate Navs
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 1}s`
            }
        }); 
        
    });
}
    
// H1 Name Animation

const text = document.querySelector('.myName');
// Access text string
const strText = text.textContent;
// Convert to array
const splitText = strText.split('');
// Get rid of OG string once turned into array
text.textContent = '';
// Loop Array
for( let i = 0; i < splitText.length; i++) {
    text.innerHTML += '<span>' + splitText[i] + '</span>';
};

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if (char === splitText.length) {
        complete();
        return;
    }
}
// Clears interval
function complete() {
    clearInterval(timer);
    timer = null;

}

// Time Since Starting to Code
const countUp = () => {
    const startCount = new Date("September 18, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = now - startCount;
    // Measuring time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    // Calculating Gap from start count
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);
    console.log(textSecond);
    // Assign to innerHTML
    document.querySelector('.day').innerHTML = textDay;
    document.querySelector('.hour').innerHTML = textHour;
    document.querySelector('.minute').innerHTML = textMinute;
    document.querySelector('.second').innerHTML = textSecond;
}


// invoke Functions
const app = () => {
    onTick();
    setInterval(countUp, 1000);
    navSlide();
};

app();