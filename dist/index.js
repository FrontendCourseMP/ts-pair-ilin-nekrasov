document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const output = document.querySelector('output');
    const surnameInput = document.getElementById('Surname');
    const nameInput = document.getElementById('Name');
    const midNameInput = document.getElementById('MidName');
    if (!form || !output || !surnameInput || !nameInput || !midNameInput) {
        console.error('One or more required elements not found');
        return;
    }
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const surname = surnameInput.value.trim();
        const name = nameInput.value.trim();
        const midName = midNameInput.value.trim();
        const nameInitial = name[0] ? `${name[0]}.` : '';
        const midNameInitial = midName[0] ? `${midName[0]}.` : '';
        const result = `${surname} ${nameInitial} ${midNameInitial}`.trim().replace(/\s+/g, ' ');
        output.textContent = result;
    });
});
export {};
//# sourceMappingURL=index.js.map