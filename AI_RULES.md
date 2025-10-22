# AI Development Rules for This Application

This document outlines the technical stack and guidelines for developing features within this application. Adhering to these rules ensures consistency, maintainability, and optimal performance.

## Tech Stack Description

This application is built using a modern, lightweight web stack focused on performance and simplicity:

*   **HTML5**: Used for structuring all web content with semantic and accessible elements.
*   **CSS3**: All styling is handled with vanilla CSS, leveraging features like Flexbox, Grid, and CSS Variables for responsive design and theming (including dark mode).
*   **Vanilla JavaScript**: All client-side interactivity, DOM manipulation, and event handling are implemented using plain JavaScript, without external frameworks or libraries.
*   **Google Fonts**: Typography is managed using the 'Poppins' font, imported from Google Fonts.
*   **SVG Icons**: Icons are primarily embedded directly as SVG for flexibility and performance.
*   **Vite**: Serves as the development server and build tool, providing a fast and efficient development experience.
*   **No Frameworks**: The project intentionally avoids large JavaScript frameworks (like React, Vue, Angular) to maintain a minimal footprint.
*   **No UI Libraries**: No external UI component libraries (like Bootstrap, Material UI, or shadcn/ui) are used; all components are custom-built with vanilla HTML/CSS/JS.

## Library Usage Rules

To maintain consistency and adhere to the project's lightweight philosophy, please follow these guidelines for library usage:

*   **HTML**: Always use semantic HTML5. Ensure proper structure and accessibility.
*   **CSS**:
    *   All styling must be written in `style.css`.
    *   Utilize CSS variables extensively for colors, fonts, and other design tokens to support theming (especially dark mode).
    *   Employ Flexbox and CSS Grid for layout and responsive design.
    *   **Prohibited**: Do not introduce any external CSS frameworks (e.g., Bootstrap, Tailwind CSS, Bulma) or preprocessors (e.g., Sass, Less).
*   **JavaScript**:
    *   All client-side logic and interactivity must be implemented using **vanilla JavaScript** in `script.js`.
    *   **Prohibited**: Do not introduce any JavaScript frameworks (e.g., React, Vue, Angular) or utility libraries (e.g., jQuery, Lodash).
    *   Ensure code is modular and well-commented.
*   **Icons**:
    *   Prefer embedding SVG icons directly into the HTML.
    *   Simple emoji or text-based icons are also acceptable.
    *   **Prohibited**: Do not add external icon libraries (e.g., Font Awesome, Lucide React).
*   **Build Tool**: Vite is the designated build tool. Configuration should remain minimal and aligned with a vanilla JS project.
*   **Dependencies**: Only add development dependencies that are essential for the build process (like Vite itself). Avoid adding runtime dependencies unless absolutely necessary and explicitly approved.