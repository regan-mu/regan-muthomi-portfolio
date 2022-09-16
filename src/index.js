// Preloader
const preloader = document.querySelector(".preload");
window.addEventListener("load", () => {
    setTimeout(() => {preloader.classList.add("hide-loader")}, 3000);
});
// Scroll
const allSections = document.querySelectorAll("section[id]");
const handleScroll = () => {
    let scrollY = window.pageYOffset;
    allSections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;
        let sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(`a[href="#${sectionId}"]`).classList.add("current");
        } else {
            document.querySelector(`a[href="#${sectionId}"]`).classList.remove("current");
        }
    });
}
window.addEventListener('scroll', handleScroll);

//Get Date
const date = new Date();
const year = date.getFullYear();
const footer = document.querySelector(".closing");
footer.textContent = `Ⓒ Regan Muthomi | ${year}`;

//Form Input
const contactForm = document.querySelector("#contact-form");
const response = document.querySelector(".response");
contactForm.addEventListener("submit", e => {
    e.preventDefault();
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.message.value = "";
    response.textContent = "Thank you for contacting me.";
});

//Mobile Nav
const hamburger = document.querySelector(".hamburger");
const menuItems = document.querySelector(".menu-items");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    menuItems.classList.contains("show-menu") ? menuItems.classList.remove("show-menu") : menuItems.classList.add("show-menu");
});

//Close Menu when link is clisked
const itemsLinks = document.querySelectorAll(".item");
itemsLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuItems.classList.remove("show-menu");
        hamburger.classList.remove("open");
    });
});
