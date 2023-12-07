class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.nome = document.querySelector('.nome');
        this.sobrenome = document.querySelector('.sobrenome');
        this.cpf = document.querySelector('.cpf');
        this.usuario = document.querySelector('.usuario');
        this.senha = document.querySelector('.senha');
        this.feedback = document.querySelector('.feedback');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', (e) => {
            this.evitarSubmit(e);
            this.validaInputNome(e);
            this.validaInputSobrenome(e);
            this.validaInputCpf(e);
            this.validaInputUsuario(e);
            this.validaInputSenha(e);
        });

        
    }

    evitarSubmit(e) {
        e.preventDefault();
        console.log('Formulário não enviado.')
    }

    validaInputNome(e) {
        if (this.nome.value == "" ) {
            const div = document.createElement("div");
            div.innerText = 'Campo Nome não pode estar vazio'
            this.feedback.appendChild(div);
            return;
        }
   
    }
    
    validaInputSobrenome(e) {
        if (this.sobrenome.value == "" ) {
            console.log('Campo Sobrenome não pode estar vazio')
        }
    }
    
    validaInputCpf(e) {
        if (this.cpf.value == "" ) {
            console.log('Campo Cpf não pode estar vazio')
        }
    }

    validaInputUsuario(e) {
        if (this.usuario.value == "" ) {
            console.log('Campo Usuario não pode estar vazio')
        }
    }

    validaInputSenha(e) {
        if (this.senha.value == "" ) {
            console.log('Campo Senha não pode estar vazio')
        }
    }



}   

const formulario = new ValidaFormulario();
