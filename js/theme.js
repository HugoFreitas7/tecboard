const themeToggle = document.querySelector("#toggle-theme");
const themeIcon = document.querySelector("#theme-icon");
const logo = document.querySelector("#logo");

function applyTheme(theme) {
    const isLight = theme === "light";

    document.body.dataset.theme = isLight ? "light" : "dark";
    logo.src = isLight ? logo.dataset.logoLight : logo.dataset.logoDark;
    themeIcon.src = isLight
        ? themeToggle.dataset.iconDark
        : themeToggle.dataset.iconLight;

    themeToggle.setAttribute("aria-pressed", String(isLight));
    themeToggle.setAttribute(
        "aria-label",
        isLight ? "Ativar tema escuro" : "Ativar tema claro"
    );
}

const savedTheme = localStorage.getItem("tecboard-theme");
applyTheme(savedTheme === "light" ? "light" : "dark");

themeToggle.addEventListener("click", () => {
    const nextTheme =
        document.body.dataset.theme === "dark" ? "light" : "dark";

    applyTheme(nextTheme);
    localStorage.setItem("tecboard-theme", nextTheme);
});