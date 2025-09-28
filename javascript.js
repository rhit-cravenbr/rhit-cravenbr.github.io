window.addEventListener("load", () => {
    let navBar = document.querySelector("#navBar");

    //let indexDiv = document.createElement("div");
    let indexLink = document.createElement("a");
    indexLink.textContent = "Index";
    indexLink.href = "index.html";
    //navBar.append(indexDiv);
    navBar.append(indexLink);

    //let resumeDiv = document.createElement("div");
    let resumeLink = document.createElement("a");
    resumeLink.textContent = "Resume";
    resumeLink.href = "resume.html";
    //navBar.append(resumeDiv);
    navBar.append(resumeLink);

    //let portfolioDiv = document.createElement("div");
    let portfolioLink = document.createElement("a");
    portfolioLink.textContent = "Portfolio";
    portfolioLink.href = "portfolio.html";
    //navBar.append(portfolioDiv);
    navBar.append(portfolioLink);

    let foot = document.querySelector("#footer");
})
