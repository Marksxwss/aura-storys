/*
 * aura/js/features/checkout.js
 * Simulação do fluxo de checkout: etapas, validações e confirmação.
 */

window.AURA = window.AURA || {};

window.AURA.checkout = {
    step: 1,
    formData: {
        email: '',
        cpf: '',
        address: '',
        payment: ''
    },

    init() {
        if (!document.getElementById('checkout-form')) return;
        this.renderStep();
        this.bindEvents();
    },

    bindEvents() {
        document.getElementById('next-step').addEventListener('click', () => this.nextStep());
    },

    renderStep() {
        const container = document.getElementById('checkout-steps');
        const stepIndicator = document.getElementById('step-indicator');

        stepIndicator.innerText = `Etapa ${this.step} de 3`;

        const steps = {
            1: `
                <div class="space-y-6 animate-fade-in-up">
                    <h3 class="text-xl font-serif mb-6">Identificação</h3>
                    <div class="flex flex-col gap-4">
                        <div class="flex flex-col gap-2">
                            <label class="text-xs uppercase tracking-widest font-bold">E-mail</label>
                            <input type="email" id="check-email" class="p-4 border border-aura-border outline-none focus:border-aura-terracotta transition-colors" placeholder="email@exemplo.com">
                        </div>
                        <div class="flex flex-col gap-2">
                            <label class="text-xs uppercase tracking-widest font-bold">CPF</label>
                            <input type="text" id="check-cpf" class="p-4 border border-aura-border outline-none focus:border-aura-terracotta transition-colors" placeholder="000.000.000-00">
                        </div>
                    </div>
                </div>
            `,
            2: `
                <div class="space-y-6 animate-fade-in-up">
                    <h3 class="text-xl font-serif mb-6">Entrega</h3>
                    <div class="flex flex-col gap-4">
                        <div class="flex flex-col gap-2">
                            <label class="text-xs uppercase tracking-widest font-bold">Endereço Completo</label>
                            <input type="text" id="check-address" class="p-4 border border-aura-border outline-none focus:border-aura-terracotta transition-colors" placeholder="Rua, Número, Bairro, Cidade - UF">
                        </div>
                    </div>
                </div>
            `,
            3: `
                <div class="space-y-6 animate-fade-in-up">
                    <h3 class="text-xl font-serif mb-6">Pagamento</h3>
                    <div class="grid grid-cols-1 gap-4">
                        <label class="flex items-center gap-4 p-4 border border-aura-border cursor-pointer hover:bg-aura-stone transition-colors">
                            <input type="radio" name="payment" value="pix" class="accent-aura-terracotta">
                            <span class="text-sm">Pix (5% de desconto)</span>
                        </label>
                        <label class="flex items-center gap-4 p-4 border border-aura-border cursor-pointer hover:bg-aura-stone transition-colors">
                            <input type="radio" name="payment" value="card" class="accent-aura-terracotta">
                            <span class="text-sm">Cartão de Crédito (até 10x)</span>
                        </label>
                        <label class="flex items-center gap-4 p-4 border border-aura-border cursor-pointer hover:bg-aura-stone transition-colors">
                            <input type="radio" name="payment" value="boleto" class="accent-aura-terracotta">
                            <span class="text-sm">Boleto Bancário</span>
                        </label>
                    </div>
                </div>
            `
        };

        container.innerHTML = steps[this.step];
    },

    nextStep() {
        if (this.validateStep()) {
            if (this.step < 3) {
                this.step++;
                this.renderStep();
            } else {
                this.completeOrder();
            }
        }
    },

    validateStep() {
        // Validação simples para demonstração
        const inputs = document.querySelectorAll('#checkout-steps input');
        let valid = true;
        inputs.forEach(input => {
            if (!input.value) {
                input.classList.add('border-red-500');
                valid = false;
            } else {
                input.classList.remove('border-red-500');
            }
        });
        return valid;
    },

    completeOrder() {
        // Salva pedido fictício e redireciona
        window.location.href = 'pedido-confirmado.html';
    }
};
