window.addEventListener('DOMContentLoaded', () => {
    const helloWordLetterArray = Array.from(document.querySelectorAll("[data-helloText='helloText'] > p"));

    // function which add class to element when it is under cursors
    addEventListener("mousemove", helloWordLetterArray.forEach(letter => {
        let letterUnderMouse = null;
        letter.addEventListener("mouseenter", () =>{
            letterUnderMouse = letter;
            letterUnderMouse.classList.add("activeLetter");
        })
        letter.addEventListener("mouseout", () =>{
            letterUnderMouse.classList.remove("activeLetter");
            letterUnderMouse = null;
        })
    }))

    // variables for setInterval below
    const hours = document.querySelector("[data-clock='hours']");
    const minutes = document.querySelector("[data-clock='min']");
    const seconds = document.querySelector("[data-clock='sec']");

    // setInterval which handle clock tips
    setInterval(() => {
        let day = new Date();
        let hr = day.getHours() * 30;
        let min = day.getMinutes() * 6;
        let sec = day.getSeconds() * 6;
        hours.style.transform = `rotateZ(${(hr)+(min/12)}deg)`;
        minutes.style.transform = `rotateZ(${(min)}deg)`;
        seconds.style.transform = `rotateZ(${(sec)}deg)`;
    }, 1000)
});