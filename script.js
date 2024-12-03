let toggleButton = document.querySelector(".togglebtn");
let body = document.querySelector("body");
let currentmood = "light";
//     console.log('this is toggle btn');
// });
toggleButton.addEventListener('click', () => {
    if (currentmood === "light") {
        currentmood = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currentmood = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currentmood);
});
