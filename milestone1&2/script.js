// Importing skills section and button for toggle skill section and store in a variable
var button = document.getElementById("toggle");
var skill = document.getElementById("skill");
// make an anonymous function
button.addEventListener("click", function () {
    // using if else statement
    if (skill.style.display === "none") {
        skill.style.display = "block";
    }
    else {
        skill.style.display = "none";
    }
});
