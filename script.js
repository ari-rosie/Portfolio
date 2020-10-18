const projectDescription = document.querySelector('#portfolio-description'); // container of each project description
const about = document.querySelector('#portfolio-about');

const hoverProject = (description) => {
    if (description !== "")
        about.style.visibility = "visible";
    else
        about.style.visibility = "hidden";

    projectDescription.innerHTML = description;
};

// hoverProject("test");
