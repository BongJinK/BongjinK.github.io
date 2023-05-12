const projectsSection = document.querySelector(".projects");
const interestsSection = document.querySelector(".interests");

const backendDiv = projectsSection.querySelector(".backend");
const frontendDiv = projectsSection.querySelector(".frontend");

const headers = document.getElementsByTagName("header");

for (let i = 0; i < headers.length; i++) {
    const header = headers[i];

    const tags = header.getElementsByClassName("tag");
    const projectTag = tags[0];
    const interestsTag = tags[1];

    projectsSection.addEventListener("mouseenter", e => {
        projectTag.setAttribute("style", "display : block");
    });
    projectsSection.addEventListener("mouseleave", e => {
        projectTag.setAttribute("style", "display : none");
    });

    interestsSection.addEventListener("mouseenter", e => {
        interestsTag.setAttribute("style", "display : block");
    });
    interestsSection.addEventListener("mouseleave", e => {
        interestsTag.setAttribute("style", "display : none");
    });
}

function Project(link, imageUrl, title, description, skills, period) {
    this.link = link;
    this.imageUrl = imageUrl;
    this.title = title;
    this.description = description;
    this.skills = skills;
    this.period = period;
}

function addProject(project, targetContainer, imageSize, imagePosition) {
    let container;
    if (targetContainer === "backend") {
        container = backendDiv;
    }
    else {
        container = frontendDiv;
    }

    const article = document.createElement("article");
    const a = document.createElement("a");
    const projectImg = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("h6");
    const skills = document.createElement("div");
    const period = document.createElement("span");
    
    article.setAttribute("class", project.title);
    a.setAttribute("href", project.link);
    a.setAttribute("target", "_blank");
    projectImg.setAttribute("class", "project-img");
    projectImg.setAttribute("style", `background: no-repeat ${imagePosition} url('${project.imageUrl}'); background-size: ${imageSize}`);
    title.setAttribute("class", "title");
    title.innerText = project.title;
    description.className = "description";
    description.innerText = project.description;
    skills.setAttribute("class", "skills");
    period.className = "period";
    period.innerText = `${project.period[0]} ~ ${project.period[1]}`;

    a.append(projectImg);
    article.append(a);
    article.append(title);
    article.append(description);
    project.skills.forEach(str => {
        const skill = document.createElement("span");
        skill.innerText = str;
        skills.append(skill);
    });
    article.append(skills);
    article.append(period);

    container.append(article);
}

// Projects 
/*
const sample = new Project(
    "about:blank",
    "/resources/images/yao.gif",
    "sample",
    "sample sample",
    ['ReactJS','Typescript'],
    ['2023.03.09', "2023.04.30"]
);

addProject(sample, "backend", "cover", "center");
*/

const Bank = new Project(
    "https://github.com/BongJinK/atm",
    "/resources/images/ATM.png",
    "Bank",
    "Java mini project : ATM",
    ['Java'],
    ['2023.03.14', "2023.03.19"]
);

addProject(Bank, "backend", "contain", "center");

const rentCar = new Project(
    "https://github.com/BongJinK/Rentcar",
    "/resources/images/cafe.png",
    "Rent-Car Service",
    "Rent Vehicle Service",
    ['JSP','scriptlet','Java 11','Tomcat 9','MySQL', 'JQuery'],
    ['2023.04.4', "2023.04.10"]
);

addProject(rentCar, "backend", "contain", "center");

const CafeProject = new Project(
    "http://cafeproject.store/",
    "/resources/images/cafe.png",
    "Cafe-Service",
    "Compose Coffee Clone",
    ['JSP','JSTL','Java 11','Tomcat 9','MySQL', 'JQuery'],
    ['2023.04.10', "2023.04.24"]
);

addProject(CafeProject, "backend", "contain", "center");

const LaundryGarden = new Project(
    "",
    "/resources/images/LaundryGarden.png",
    "LaundryGarden(세정원)",
    "Non-face-to-face Laundry Service",
    ['JSP','JSTL','Java 11','Tomcat 9','MySQL', 'JQuery'],
    ['2023.04.27', "2023.05.15"]
);

addProject(LaundryGarden, "backend", "contain", "center");

const bookSearch = new Project(
    "/booksearch",
    "resources/images/BookSearch.png",
    "Book Search",
    "Book Search and Inquiry Service",
    ['VanilaJS', 'jQeury', 'Kakao Search API'],
    ['2023.03.13', "2023.03.13"]
);


addProject(bookSearch, "frontend", "contain", "center");

const omok = new Project(
    "/omok",
    "resources/images/Omok.png",
    "Omok",
    "Omok Game",
    ['VanilaJS', 'HTML', 'CSS'],
    ['2023.03.13', "2023.03.13"]
);

addProject(omok, "frontend", "contain", "center");