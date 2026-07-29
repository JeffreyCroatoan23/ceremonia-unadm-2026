import { sections } from "./config.js";
import { loadSection } from "./loader.js";

async function init() {
    const app = document.getElementById("app");

    if (!app) {
        throw new Error("No se encontró #app");
    }

    for (const section of sections) {
        await loadSection(section, app);
    }
}

init();