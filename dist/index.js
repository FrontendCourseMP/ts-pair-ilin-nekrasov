"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const output = document.querySelector('output');
    const surnameInput = document.getElementById('Surname');
    const nameInput = document.getElementById('Name');
    const midNameInput = document.getElementById('MidName');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const surname = surnameInput.value.trim();
        const name = nameInput.value.trim();
        const midName = midNameInput.value.trim();
        const result = `${surname} ${name[0] ? name[0] + '.' : ''} ${midName[0] ? midName[0] + '.' : ''}`.trim();
        output.textContent = result;
    });
});
//# sourceMappingURL=index.js.map