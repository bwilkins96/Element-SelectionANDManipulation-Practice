/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        let urlPath = url.split("/");
        let breed = urlPath[urlPath.length - 2];

        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */

        let newLi = document.createElement("li");
        let newFigure = document.createElement("figure");

        let newImg = document.createElement("img");
        newImg.setAttribute("src", url);
        let newFig = document.createElement("figcaption");
        newFig.innerText = breed;

        newFigure.appendChild(newImg);
        newFigure.appendChild(newFig);

        newLi.appendChild(newFigure);

        /* Add the new dog card as a child to the ul in the .gallery element */
        let ul = document.querySelector("ul");
        ul.appendChild(newLi);

    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    let firstDoggo = document.querySelector("ul > li");

    /*-------------------- Remove the first dog card --------------------- */
    firstDoggo.remove();
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    let dogs = document.querySelectorAll("ul > li");
    let lastDoggo = dogs[dogs.length - 1];

    /*-------------------- Remove the last dog card ----------------------- */
    lastDoggo.remove();
});
