// RTL Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
    const rtlToggle = document.getElementById('rtl-toggle');
    if (!rtlToggle) return;

    // Check for saved user preference, if any, on load of the website
    const currentDir = localStorage.getItem('dir') || 'ltr';
    document.documentElement.setAttribute('dir', currentDir);
    updateRTLButton(currentDir);

    rtlToggle.addEventListener('click', () => {
        let currentDir = document.documentElement.getAttribute('dir');
        let targetDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
        
        document.documentElement.setAttribute('dir', targetDir);
        localStorage.setItem('dir', targetDir);
        updateRTLButton(targetDir);
    });

    function updateRTLButton(dir) {
        if (dir === 'rtl') {
            rtlToggle.textContent = 'LTR';
            rtlToggle.title = 'Switch to Left-to-Right';
        } else {
            rtlToggle.textContent = 'RTL';
            rtlToggle.title = 'Switch to Right-to-Left';
        }
    }
});
