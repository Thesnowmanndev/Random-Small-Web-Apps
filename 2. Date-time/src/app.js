const nav = document.getElementById("nav");
const siteContent = document.getElementById("site-content");

const navbar = `
    <ul class="flex align-inline justify-between">
        <li><a href="index.html">Home</a></li>
        <li class="text-xl hover:cursor-none">
            <a href="https://github.com/Thesnowmanndev" target="_blank"
                >TheSnowmanndev's
            </a>
        </li>
        <li>
            <a
                href="https://github.com/Thesnowmanndev/Random-Small-Web-Apps"
                target="_blank"
                ><i class="fa-solid fa-display-code"></i> See Code
            </a>
        </li>
    </ul>
    <hr />
`;

function setNav() {
  return (nav.innerHTML = navbar);
}

function initializePage() {
  setNav();
}

initializePage();
