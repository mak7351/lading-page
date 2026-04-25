'use strict'

/*****************************
 * 
 *  SMOOTH SCROLL TO ANCHOR
 * 
 */

 document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        // const topOffset = document.querySelector('.top-offset').offsetHeight;
        const topOffset = 0; // нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

sliderImageArr.forEach(() => {
    const selectSlideBth = document.createElement('div')
    selectSlideBth.className = "select-slide-button"

    selectSlideBth.onclick = (slide) => userSelectNewSlide(slide)
    selectSlidePointsArr.push(selectSlideBth)
})


const popupButton = document.getElementById("formButton")
const popup = document.getElementById("popUp")
popup.onclick = () => popup.style.display = "none"
popupButton.onclick = checkfunc

checkfunc{

    popUp.style.display = "flex"
const name = document.getElementById("nik")
if (name.leght = 0)
    
}