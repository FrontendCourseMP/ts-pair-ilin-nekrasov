document.addEventListener('DOMContentLoaded', () => {
    const form1 = document.getElementById('form1');
    const form2 = document.getElementById('form2');
    const output1 = document.getElementById('output1');
    const output2 = document.getElementById('output2');
    const surnameInput = document.getElementById('Surname');
    const nameInput = document.getElementById('Name');
    const midNameInput = document.getElementById('MidName');
    const fullNameInput = document.getElementById('FullName');
    if (!form1 || !form2 || !output1 || !output2 || !surnameInput || !nameInput || !midNameInput || !fullNameInput) {
        console.error('One or more required elements not found');
        return;
    }
    function isValidNamePart(part) {
        return /^[А-ЯЁ][а-яё]*$/.test(part);
    }
    form1.addEventListener('submit', (event) => {
        event.preventDefault();
        const surname = surnameInput.value?.trim() || '';
        const name = nameInput.value?.trim() || '';
        const midName = midNameInput.value?.trim() || '';
        if (!isValidNamePart(surname) || !isValidNamePart(name) || (midName && !isValidNamePart(midName))) {
            output1.textContent = 'Ошибка: введите корректные ФИО (только буквы, первая заглавная)';
            return;
        }
        const nameInitial = name.length > 0 ? `${name[0]}.` : '';
        const midNameInitial = midName.length > 0 ? `${midName[0]}.` : '';
        const result = `${surname} ${nameInitial} ${midNameInitial}`.trim().replace(/\s+/g, ' ');
        output1.textContent = result;
    });
    form2.addEventListener('submit', (event) => {
        event.preventDefault();
        const fullName = fullNameInput.value?.trim() || '';
        const parts = fullName.split(/\s+/).filter(part => part.length > 0);
        if (parts.length < 3 || parts.length > 3) {
            output2.textContent = 'Ошибка: введите ФИО (3 слова)';
            return;
        }
        if (!parts.every(isValidNamePart)) {
            output2.textContent = 'Ошибка: введите корректные ФИО (только буквы, первая заглавная)';
            return;
        }
        const surname = parts[0];
        const name = parts[1] || '';
        const midName = parts[2] || '';
        const nameInitial = name.length > 0 ? `${name[0]}.` : '';
        const midNameInitial = midName.length > 0 ? `${midName[0]}.` : '';
        const result = `${surname} ${nameInitial} ${midNameInitial}`.trim().replace(/\s+/g, ' ');
        output2.textContent = result;
    });
});
export {};
//# sourceMappingURL=index.js.map