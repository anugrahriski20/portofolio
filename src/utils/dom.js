/**
 * Memuat konten HTML dari path file dan menyuntikkannya ke elemen target.
 * @param {string} path - Path ke file HTML.
 * @param {string} targetId - ID elemen DOM tempat konten akan disuntikkan.
 * @returns {Promise<void>}
 */
export async function loadComponent(path, targetId) {
    try {
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error(`Gagal memuat komponen: ${path}`);
        }
        const html = await response.text();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.innerHTML = html;
        } else {
            console.error(`Elemen target dengan ID '${targetId}' tidak ditemukan.`);
        }
    } catch (error) {
        console.error('Error loading component:', error);
    }
}