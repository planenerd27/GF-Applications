const pageWidth = window.innerWidth;

const pathname = window.location.pathname;

/**
 * Sets the navigation bar based on the page width.
 */
function setNavBar(id, link, name) {
    const condition = pageWidth > 900;
    const contentDiv = document.getElementById(id);
    if (condition) {
        contentDiv.innerHTML = `
            <nav>
                <menu class="flexcontainer">
                    <li><button onclick="window.location.href='./${link}';">${name}</button></li>
                    <li><button onClick="window.location.href='https://docs.google.com/forms/d/e/1FAIpQLScoPTEbJs5ABXMeV6D_ztEiIvJTvPbI20zh8RoP4nx_9WUh9Q/viewform?usp=sharing';">Apply Here</button></li>
                </menu>
            </nav>
        `;
    } else {
        contentDiv.innerHTML = `
            <div class="dropdown">
                <button class="dropbtn">Menu</button>
                <div class="dropdown-content">
                    <a href="./${link}">${name}</a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScoPTEbJs5ABXMeV6D_ztEiIvJTvPbI20zh8RoP4nx_9WUh9Q/viewform?usp=sharing">Apply Here</a>
                </div>
            </div>
        `;
    }
}

if (pathname === "/index.html" || pathname === "/") {
    setNavBar("links", "benefits.html", "Job Benefits");
} else if (pathname === "/benefits.html") {
    setNavBar("links", "index.html", "Home");
}