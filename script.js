const projectDescription = document.querySelector('#portfolio-description'); // container of each project description
const about = document.querySelector('#portfolio-about');
const main = document.querySelector('main');

const hoverProject = (description, image) => {
    if (description !== "")
        about.style.visibility = "visible";
    else
        about.style.visibility = "hidden";

    if (image) {
        main.style.backgroundImage = image;
        main.style.backgroundSize = "cover";
        main.style.backgroundPosition = "center";
    }
    else 
        main.style.backgroundImage = "none";
        
    projectDescription.style.display = "none";
    projectDescription.innerHTML = description;
    projectDescription.style.display = "block";
};


// hoverProject("test");
