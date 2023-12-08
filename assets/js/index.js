class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.nome = document.querySelector('.nome');
        this.sobrenome = document.querySelector('.sobrenome');
        this.cpf = document.querySelector('.cpf');
        this.usuario = document.querySelector('.usuario');
        this.senha = document.querySelector('.senha');
        this.feedback = document.querySelector('.feedback');

        this.div = document.createElement("div");
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', (e) => {
            this.evitarSubmit(e);
            this.verificaInputVazioEValidaCampos(e);
            this.validaInputCpf(e);
        });

        
    }

    evitarSubmit(e) {
        e.preventDefault();
        console.log('Formulário não enviado.')
    }

   
    verificaInputVazioEValidaCampos(e) {
         //verificando se algum campo está vazio e retornando o feedback
        if (this.nome.value == "" || this.sobrenome.value == "" || this.cpf.value == "" || this.usuario.value == "" || this.senha.value == "") {
            this.div.innerText = 'Preencha todos os campos.'
            this.feedback.appendChild(this.div);
            return;
        }
        

        //chamando as funções que validam os campos
        this.validaInputSenha();
        this.validaInputUsuario();
    }
    
    validaInputCpf(e) {
      console.log('validar cpf chamada')
    }

    validaInputUsuario() {
        //Verificando a quantidade de caracteres
        if (this.usuario.value.length < 3 || this.usuario.value.length > 12) {
            this.div.innerText = 'Usuário deve ter entre 3 e 12 caracteres.'
            this.feedback.appendChild(this.div);

        }

        if (this.usuario.value.includes(".") || this.usuario.value.includes("/",) || this.usuario.value.includes(";") || this.usuario.value.includes(",")) {
            this.div.innerText = 'Usuário inválido.'
            this.feedback.appendChild(this.div);
        }

    }

    validaInputSenha() {
        //Verificando a quantidade de caracteres
        if (this.senha.value.length < 6 || this.senha.value.length > 12) {
            this.div.innerText = 'A senha deve ter entre 6 e 12 caracteres.'
            this.feedback.appendChild(this.div);
            return;
        }

        

    }



}   



const formulario = new ValidaFormulario();
