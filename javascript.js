window.addEventListener("load", () => {
    let navBar = document.querySelector("#navBar");
    let indexLink = document.createElement("a");
    let resumeLink = document.createElement("a");
    let portfolioLink = document.createElement("a");
    indexLink.textContent = "Index";
    resumeLink.textContent = "Resume";
    portfolioLink.textContent = "Portfolio";
    indexLink.href = "index.html"
    resumeLink.href = "resume.html"
    portfolioLink.href = "portfolio.html"
    navBar.append(indexLink);
    navBar.append(resumeLink);
    navBar.append(portfolioLink);

    let foot = document.querySelector("#footer");
})
