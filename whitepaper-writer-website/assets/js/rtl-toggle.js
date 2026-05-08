// RTL Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
    const rtlToggles = document.querySelectorAll('.rtl-toggle');
    if (rtlToggles.length === 0) return;

    // Check for saved user preference, if any, on load of the website
    const currentDir = localStorage.getItem('dir') || 'ltr';
    document.documentElement.setAttribute('dir', currentDir);
    updateRTLButtons(currentDir);

    rtlToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            let currentDir = document.documentElement.getAttribute('dir');
            let targetDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
            
            document.documentElement.setAttribute('dir', targetDir);
            localStorage.setItem('dir', targetDir);
            updateRTLButtons(targetDir);
        });
    });

    function updateRTLButtons(dir) {
        rtlToggles.forEach(toggle => {
            if (dir === 'rtl') {
                toggle.textContent = 'LTR';
                toggle.title = 'Switch to Left-to-Right';
            } else {
                toggle.textContent = 'RTL';
                toggle.title = 'Switch to Right-to-Left';
            }
        });
    }
});
