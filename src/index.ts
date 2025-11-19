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
        result: string | number;

        constructor() {
            this.expression = "";
            this.result = "";
        }

        setExpression(expr: string) {
            this.result = "";
            const cleaned = expr.replace(/\s+/g, '');

            if (!/^[0-9+*.]+$/.test(cleaned)) {
                this.result = "Ошибка: выражение содержит недопустимые символы (только цифры, +, * и точка разрешены)";
                this.expression = "";
                return;
            }
            if (/(\+|\*){2,}/.test(cleaned)) {
                this.result = "Ошибка: подряд идущие операторы (+ или *) без числа между ними";
                this.expression = "";
                return;
            }
            if (/^[+*]/.test(cleaned)) {
                this.result = "Ошибка: выражение не может начинаться с оператора";
                this.expression = "";
                return;
            }
            if (/[+*]$/.test(cleaned)) {
                this.result = "Ошибка: выражение не может заканчиваться оператором";
                this.expression = "";
                return;
            }
            if (/\.\./.test(cleaned)) {
                this.result = "Ошибка: в выражении обнаружены две точки подряд";
                this.expression = "";
                return;
            }

            const parts = cleaned.split(/[\+\*]/);
            for (const part of parts) {
                if (part.split('.').length > 2) {
                    this.result = `Ошибка: число "${part}" содержит более одной точки`;
                    this.expression = "";
                    return;
                }
                if (part === '') {
                    this.result = "Ошибка: выражение содержит пустой операнд";
                    this.expression = "";
                    return;
                }
            }

            this.expression = cleaned;
            this.result = "";
        }

        evaluate(): number | string {
            if (this.result && typeof this.result === "string") {
                return this.result;
            }
            if (!this.expression) {
                return "Ошибка: выражение пустое или некорректное";
            }
            try {
                const func = new Function('return ' + this.expression);
                const value = func();
                if (typeof value === "number" && isFinite(value)) {
                    this.result = value;
                    return value;
                }
                return "Ошибка вычисления";
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
    // TODO проверить дома и доделать, если что-то не так (вроде всё так)
});
