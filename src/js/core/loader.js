export async function loadSection(name, container) {

    try {

        const response = await fetch(`src/sections/${name}/template.html`);

        if (!response.ok) {
            console.warn(`No existe la sección: ${name}`);
            return;
        }

        const html = await response.text();

        container.insertAdjacentHTML("beforeend", html);

    } catch (error) {

        console.error(error);

    }

}