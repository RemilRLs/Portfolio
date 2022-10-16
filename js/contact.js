
// Class that is going to take a callback function

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { // For each entries that is contain into the class.
       console.log(entry)
       if(entry.isIntersecting){
            entry.target.classList.add('show');
       }
       else{
            entry.target.classList.remove('show');
       }
    });
});

const hiddenElements = document.querySelectorAll('div.contact-content, div.skill-language, div.contact-list');
hiddenElements.forEach((el) => observer.observe(el)); // Observe all hidden elements.
