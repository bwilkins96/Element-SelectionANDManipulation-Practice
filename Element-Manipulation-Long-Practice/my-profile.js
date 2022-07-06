//console.log("this is my profile!");

let h1 = document.createElement("h1");
h1.setAttribute("id", "myName");
h1.setAttribute("class", "name");
h1.innerText = "Ben Wilkins";
document.body.appendChild(h1);

let img = document.createElement("img");
img.setAttribute("src", "./ProfileCopy.jpg");
img.setAttribute("class", "profPic");
//img.style.width = "250px";
//img.style.height = "auto";
document.body.appendChild(img);

const aboutMeArr = ["November 5, 1996", "Software Engineering at App Academy Open",
    "MS in Environmental Studies at Point Park University", "Engaged to Hannah Walden (until August 26!)"];

let aboutMeList = document.createElement("ul");
aboutMeList.setAttribute("class", "my-details");

aboutMeArr.forEach( ele => {
    let aboutMe = document.createElement("li");
    aboutMe.setAttribute("class", "details");
    aboutMe.innerText = ele;
    aboutMeList.appendChild(aboutMe);
});

document.body.appendChild(aboutMeList);

const getTime = () => {
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    let ext = "AM";

    if (hours > 12) { hours -= 12; ext = "PM" }
    if (minutes < 10) {minutes = `0${minutes}`}
    if (seconds < 10) {seconds = `0${seconds}`}

    return `${hours}:${minutes}:${seconds} ${ext}`;
}

const updateTime = () => {
    let prev = document.querySelector(".my-details > .clock");
    if (prev) { prev.remove() }

    let newLi = document.createElement("li")
    newLi.setAttribute("class", "details clock");
    let currentTime = getTime();
    newLi.innerText = `I live in Pittsburgh, PA, and it's currently ${currentTime} here`;

    aboutMeList.appendChild(newLi);

    setTimeout(updateTime, 500);
}

updateTime();

















/* let aboutMeList = document.createElement("ul");
let aboutMe1 = document.createElement("li");
let aboutMe2 = document.createElement("li");
let aboutMe3 = document.createElement("li");
let aboutMe4 = document.createElement("li");
aboutMe1.setAttribute("class", "aboutMe");
aboutMe2.setAttribute("class", "aboutMe");
aboutMe3.setAttribute("class", "aboutMe");
aboutMe4.setAttribute("class", "aboutMe");
aboutMe1.innerText = "November 5, 1996";
aboutMe2.innerText = "Software Engineering at App Academy Open";
aboutMe3.innerText = "MS in Environmental Studies at Point Park University";
aboutMe4.innerText = "Engaged to Hannah Walden (until August 26!)"
aboutMeList.appendChild(aboutMe1);
aboutMeList.appendChild(aboutMe2);
aboutMeList.appendChild(aboutMe3);
aboutMeList.appendChild(aboutMe4);
document.body.appendChild(aboutMeList); */
