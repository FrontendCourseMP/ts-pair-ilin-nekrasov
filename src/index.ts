document.addEventListener('DOMContentLoaded', () => {
    const form1 = document.getElementById('form1') as HTMLFormElement;
    const form2 = document.getElementById('form2') as HTMLFormElement;
    const output1 = document.getElementById('output1') as HTMLOutputElement;
    const output2 = document.getElementById('output2') as HTMLOutputElement;
    const surnameInput = document.getElementById('Surname') as HTMLInputElement;
    const nameInput = document.getElementById('Name') as HTMLInputElement;
    const midNameInput = document.getElementById('MidName') as HTMLInputElement;
    const fullNameInput = document.getElementById('FullName') as HTMLInputElement;

    if (!form1 || !form2 || !output1 || !output2 || !surnameInput || !nameInput || !midNameInput || !fullNameInput) {
        console.error('One or more required elements not found');
        return;
    }

    function isValidNamePart(part: string): boolean {
        return /^[А-ЯЁ][а-яё]*$/.test(part);
    }

    form1.addEventListener('submit', (event) => {
        event.preventDefault();

        const surname = surnameInput.value?.trim() || '';
        const name = nameInput.value?.trim() || '';
        const midName = midNameInput.value?.trim() || '';

        if (!isValidNamePart(surname) || !isValidNamePart(name) || !isValidNamePart(midName)) {
            output1.textContent = 'Ошибка: введите корректные ФИО (только буквы, первая заглавная)';
            return;
        }

        const result = `${surname} ${name} ${midName}`.trim().replace(/\s+/g, ' ');

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
    class MathExpressionEvaluator {
        expression: string;

        constructor() {
            this.expression = "";
        }

        setExpression(expr: string) {
            this.expression = expr.replace(/[^0-9.+*]/g, '');
        }

        evaluate(): number | string {
            try {
            if (!/^[0-9.+*]+$/.test(this.expression)) {
                return "Недопустимые символы в выражении";
            }
            const func = new Function('return ' + this.expression);
            const result = func();
            if (typeof result === "number" && !isNaN(result)) {
                return result;
            } else {
                return "Ошибка вычисления";
            }
            } catch {
            return "Ошибка вычисления";
            }
        }
        }

        const form = document.getElementById('calcForm') as HTMLFormElement;
        const input = document.getElementById('expressionInput') as HTMLInputElement;
        const resultDiv = document.getElementById('result') as HTMLDivElement;

        const evaluator = new MathExpressionEvaluator();

        form.addEventListener('submit', (event) => {
        event.preventDefault();
        evaluator.setExpression(input.value);
        const result = evaluator.evaluate();
        resultDiv.textContent = 'Результат: ' + result;
    });
});
