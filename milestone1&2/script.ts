// Importing skills section and button for toggle skill section and store in a variable

const button = document.getElementById("toggle") as HTMLButtonElement;

const skill = document.getElementById("skill") as HTMLElement;

// make an anonymous function
button.addEventListener("click", ()=>{
    // using if else statement
    if(skill.style.display === "none"){
        skill.style.display = "block"
    }else {
        skill.style.display = "none"
    }
})