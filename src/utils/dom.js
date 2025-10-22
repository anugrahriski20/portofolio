/**
 * Memuat konten HTML dari path file dan menyuntikkannya ke elemen target.
 * @param {string} path - Path ke file HTML.
 * @param {string} targetId - ID elemen DOM tempat konten akan disuntikkan.
 * @returns {Promise<void>}
 */
export async function loadComponent(path, targetId) {
    try {
        // Menggunakan path relatif yang benar dari root (public folder)
        const fullPath = path.startsWith('./') ? path.substring(2) : path;
        
        const response = await fetch(fullPath);
        if (!response.ok) {
            // Log error response status for debugging deployment issues
            console.error(`Gagal memuat komponen: ${fullPath}. Status: ${response.status}`);
            throw new Error(`Gagal memuat komponen: ${fullPath}`);
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