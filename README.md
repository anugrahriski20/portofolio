# Website Portofolio Pribadi

Website portofolio pribadi single-page yang modern, responsif, dan dilengkapi dengan dark mode toggle.

## Fitur Utama

- **Responsive Design**: Tampil sempurna di desktop, tablet, dan mobile
- **Dark Mode**: Toggle antara light dan dark theme dengan smooth transition
- **Smooth Scroll**: Navigasi yang mulus antar section
- **Animasi**: Fade-in animations dan hover effects yang halus
- **Form Validation**: Validasi form kontak dengan feedback yang jelas
- **Lazy Loading**: Optimasi loading gambar untuk performa lebih baik
- **SEO Friendly**: Struktur HTML semantik dan meta tags yang tepat

## Struktur File

```
/
├── index.html          # File HTML utama
├── style.css           # Styling lengkap
├── script.js           # Interaksi dan animasi
└── README.md           # Dokumentasi
```

## Section Website

1. **Header**: Navigasi sticky dengan logo dan menu
2. **Hero**: Foto profil, nama, profesi, dan CTA buttons
3. **About**: Deskripsi diri dan skill cards (6 keahlian)
4. **Projects**: 3 project cards dengan gambar, deskripsi, dan tech stack
5. **Contact**: Form kontak dan informasi kontak
6. **Footer**: Copyright, quick links, dan social media

## Cara Menggunakan

### 1. Edit Konten

**Mengganti Nama & Info Pribadi:**
Buka `index.html` dan cari bagian berikut:

```html
<!-- Hero Section -->
<h1>Halo, Saya <span class="gradient-text">John Doe</span></h1>
<p>Full Stack Developer & UI/UX Designer</p>
```

Ganti "John Doe" dengan nama Anda dan sesuaikan profesi Anda.

**Mengganti Foto Profil:**
```html
<img src="https://via.placeholder.com/400x400/3b82f6/ffffff?text=Profile">
```

Ganti URL placeholder dengan link foto Anda atau simpan foto di folder project:
```html
<img src="./images/profile.jpg">
```

**Mengganti Gambar Proyek:**
Cari bagian projects dan ganti URL placeholder:
```html
<img src="https://via.placeholder.com/600x400/3b82f6/ffffff?text=E-Commerce+Platform">
```

### 2. Kustomisasi Warna

Buka `style.css` dan edit CSS variables di bagian `:root`:

```css
:root {
    --primary-color: #3b82f6;    /* Warna utama (biru) */
    --accent-color: #10b981;     /* Warna aksen (hijau) */
    --text-color: #1f2937;       /* Warna teks */
}
```

**Pilihan warna alternatif:**
- Biru profesional: `#3b82f6`
- Hijau modern: `#10b981`
- Abu netral: `#64748b`
- Teal: `#14b8a6`

### 3. Edit Skill Cards

Cari section `skills-grid` di `index.html`:

```html
<div class="skill-item">
    <div class="skill-icon">🎨</div>
    <h4 class="skill-name">UI/UX Design</h4>
    <p class="skill-desc">Figma, Adobe XD, Sketch</p>
</div>
```

Tambah/kurangi skill sesuai kebutuhan.

### 4. Edit Proyek

Cari section `projects-grid` dan edit atau tambah project card:

```html
<article class="project-card">
    <div class="project-image">
        <img src="URL_GAMBAR" alt="Nama Proyek">
        <div class="project-overlay">
            <span class="project-tag">Kategori</span>
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Nama Proyek</h3>
        <p class="project-description">Deskripsi proyek...</p>
        <div class="project-tech">
            <span class="tech-badge">React</span>
            <span class="tech-badge">Node.js</span>
        </div>
        <a href="#" class="project-link">Lihat Detail →</a>
    </div>
</article>
```

### 5. Edit Informasi Kontak

Cari section `contact-details`:

```html
<div class="contact-item">
    <div class="contact-icon">📧</div>
    <div>
        <h4>Email</h4>
        <p>johndoe@example.com</p>
    </div>
</div>
```

### 6. Edit Social Media Links

Cari section `social-links` di footer:

```html
<a href="https://linkedin.com/in/username" class="social-link">
```

Ganti `#` dengan URL profil media sosial Anda.

## Menjalankan Lokal

### Opsi 1: Buka langsung di browser
1. Double-click file `index.html`
2. Website akan terbuka di browser default

### Opsi 2: Menggunakan Live Server (Recommended)
1. Install VS Code extension "Live Server"
2. Klik kanan pada `index.html`
3. Pilih "Open with Live Server"

### Opsi 3: Menggunakan Python
```bash
# Python 3
python -m http.server 8000

# Buka browser: http://localhost:8000
```

## Deploy ke Vercel

### Cara 1: Melalui Dashboard Vercel
1. Buka [vercel.com](https://vercel.com)
2. Login dengan GitHub/GitLab/Bitbucket
3. Klik "New Project"
4. Import repository atau upload folder project
5. Klik "Deploy"

### Cara 2: Menggunakan Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Di folder project, jalankan:
vercel

# Ikuti instruksi di terminal
# Website otomatis ter-deploy!
```

Domain gratis otomatis: `https://nama-project.vercel.app`

## Deploy ke Netlify

1. Buka [netlify.com](https://netlify.com)
2. Login
3. Drag & drop folder project ke dashboard
4. Website langsung live!

**Atau via Netlify CLI:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Di folder project:
netlify deploy --prod
```

## Deploy ke GitHub Pages

1. Upload project ke GitHub repository
2. Settings → Pages
3. Source: pilih branch `main` atau `master`
4. Folder: pilih `/ (root)`
5. Save

Website akan tersedia di: `https://username.github.io/repo-name`

## Teknologi yang Digunakan

- **HTML5**: Struktur semantik
- **CSS3**: Flexbox, Grid, CSS Variables, Animations
- **JavaScript (Vanilla)**: DOM manipulation, Event handling
- **Google Fonts**: Font Poppins
- **SVG Icons**: Icon social media embedded

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Tips & Trik

### Mengoptimalkan Gambar
1. Gunakan format WebP untuk foto (ukuran lebih kecil)
2. Compress gambar sebelum upload (gunakan TinyPNG)
3. Ukuran ideal:
   - Profile: 400x400px
   - Project: 600x400px

### SEO Tips
1. Edit meta description di `<head>`:
```html
<meta name="description" content="Deskripsi Anda">
```

2. Tambahkan Open Graph tags untuk social media:
```html
<meta property="og:title" content="Nama Anda - Portfolio">
<meta property="og:description" content="Deskripsi singkat">
<meta property="og:image" content="URL_GAMBAR">
```

### Custom Domain
Setelah deploy ke Vercel/Netlify:
1. Beli domain (Namecheap, Google Domains, dll)
2. Di dashboard hosting, tambahkan custom domain
3. Update DNS records sesuai instruksi

## Troubleshooting

**Gambar tidak muncul:**
- Cek URL gambar sudah benar
- Pastikan format file didukung (jpg, png, webp)
- Cek ukuran file tidak terlalu besar (max 2MB)

**Dark mode tidak tersimpan:**
- Pastikan browser support localStorage
- Cek JavaScript tidak di-block

**Form tidak berfungsi:**
- Form saat ini hanya demo (tidak mengirim email)
- Untuk production, integrasikan dengan:
  - Formspree
  - EmailJS
  - Backend API

**Smooth scroll tidak bekerja:**
- Pastikan JavaScript telah dimuat
- Cek console browser untuk error

## Lisensi

Bebas digunakan untuk keperluan pribadi dan komersial.

## Kontak & Support

Jika ada pertanyaan atau butuh bantuan kustomisasi:
- Email: support@example.com
- GitHub Issues: [link-repo]

---

**Dibuat dengan ❤️ menggunakan HTML, CSS, dan JavaScript**
