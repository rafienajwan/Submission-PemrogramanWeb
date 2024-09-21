function myFunction() {
    var navbar = document.getElementById("mynav");
    var links = navbar.getElementsByTagName("ul")[0];

    if (navbar.className === "navbar") {
        navbar.className += " responsive";
        links.style.display = "block";
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    } else {
        navbar.className = "navbar";
        links.style.display = "none";
    }
}