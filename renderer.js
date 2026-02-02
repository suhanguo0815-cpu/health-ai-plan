function renderContent() {
    const data = window.presentationData;
    if (!data) {
        console.error('Presentation data not found!');
        return;
    }

    // Helper to safely get nested properties
    const getNestedValue = (obj, path) => {
        return path.split('.').reduce((prev, curr) => prev && prev[curr], obj);
    };

    // Find all elements with data-bind attribute
    const elements = document.querySelectorAll('[data-bind]');

    elements.forEach(element => {
        const key = element.getAttribute('data-bind');
        const value = getNestedValue(data, key);

        if (value !== undefined && value !== null) {
            // Check if we should use innerHTML (for strings with tags like <br>)
            // or textContent. For this use case, we'll default to innerHTML 
            // to support styling tags in the content, but be mindful of XSS in dynamic apps.
            // Since this is a static local file, it is relatively safe.
            if (element.tagName === 'IMG') {
                element.src = value;
            } else {
                element.innerHTML = value;
            }
        } else {
            console.warn(`Missing data for key: ${key}`);
        }
    });

    // Handle lists specifically if needed, or rely on specific binding structures.
    // For arrays, we might encounter scenarios where we need to repeat elements.
    // To keep it simple for now, we will bind to parents or strictly structured children indices if appropriate,
    // or use custom logic for lists if the HTML structure is rigid.
    //
    // However, looking at the provided keys, some point to arrays (e.g. members).
    // The current HTML text is hardcoded. We need a strategy for lists.
    // Strategy: We will manually map list items in the HTML using indices for now,
    // e.g. slides.team.members.0.name, slides.team.members.1.name
    // Handle style binding
    const styleElements = document.querySelectorAll('[data-bind-style]');
    styleElements.forEach(element => {
        const bindStr = element.getAttribute('data-bind-style');
        // Syntax: "height: slides.x.y.z"
        const [prop, path] = bindStr.split(':').map(s => s.trim());
        if (prop && path) {
            const val = getNestedValue(data, path);
            if (val) element.style[prop] = val;
        }
    });

    // This keeps the HTML structure stable.
}

// Run on load
document.addEventListener('DOMContentLoaded', renderContent);
