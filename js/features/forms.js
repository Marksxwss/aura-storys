/*
 * aura/js/features/forms.js
 * Validações e tratamentos de formulários (Contato, Newsletter).
 */

window.AURA = window.AURA || {};

window.AURA.forms = {
    init() {
        this.bindNewsletter();
        this.bindContact();
    },

    bindNewsletter() {
        const form = document.querySelector('form[data-form="newsletter"]');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = form.querySelector('input[type="email"]');
            if (this.validateEmail(input.value)) {
                this.submitForm(form, 'Inscrito com sucesso na nossa curadoria!');
            } else {
                this.showError(input, 'Insira um e-mail válido.');
            }
        });
    },

    bindContact() {
        const form = document.querySelector('form[data-form="contact"]');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const inputs = form.querySelectorAll('input, textarea');
            let valid = true;

            inputs.forEach(input => {
                if (!input.value) {
                    this.showError(input, 'Campo obrigatório');
                    valid = false;
                }
            });

            if (valid) {
                this.submitForm(form, 'Mensagem enviada. Responderemos em breve.');
            }
        });
    },

    validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },

    showError(input, message) {
        input.classList.add('border-red-500');
        const err = document.createElement('span');
        err.className = 'text-[10px] text-red-500 absolute';
        err.innerText = message;
        input.parentNode.appendChild(err);
        setTimeout(() => err.remove(), 3000);
    },

    submitForm(form, successMessage) {
        const btn = form.querySelector('button');
        const originalText = btn.innerText;

        btn.disabled = true;
        btn.innerText = 'Enviando...';

        setTimeout(() => {
            btn.innerText = 'Sucesso!';
            btn.classList.add('bg-green-600');
            setTimeout(() => {
                form.reset();
                btn.disabled = false;
                btn.innerText = originalText;
                btn.classList.remove('bg-green-600');
                alert(successMessage);
            }, 2000);
        }, 1500);
    }
};
