function openMenu() {
   var x = document.getElementById("menu");
    if (x.className === "menu_bar") {
        x.className += " responsive";
    } else {
        x.className = "menu_bar";
    }
}