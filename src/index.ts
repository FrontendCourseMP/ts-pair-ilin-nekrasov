document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form') as HTMLFormElement;
    const output = document.querySelector('output') as HTMLOutputElement;
    const surnameInput = document.getElementById('Surname') as HTMLInputElement;
    const nameInput = document.getElementById('Name') as HTMLInputElement;
    const midNameInput = document.getElementById('MidName') as HTMLInputElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const surname = surnameInput.value.trim();
        const name = nameInput.value.trim();
        const midName = midNameInput.value.trim();

        const result = `${surname} ${name[0] ? name[0] + '.' : ''} ${midName[0] ? midName[0] + '.' : ''}`.trim();

        output.textContent = result;
    });
    // TODO хорс заголовки, хэш мапы
});
