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

class validaCpf {
    constructor(cpf) {
        this.cpf = cpf;
        this.cpfArray = [];
        this.cpfNovo = "";
        this.totalDigito1 = 0;
        this.totalDigito2 = 0;
        this.primeiroDigito = 0;
        this.segundoDigito = 0;
    }

    //Método responsável por tirar os pontos do cpf
    limpaCpf() {
        this.cpfLimpo = this.cpf.replace(/\D+/g, '');
        return this.cpfLimpo;
    }
    
    encontraPrimeiroDigito() {
        this.cpfLimpo = this.limpaCpf(this.cpf);
        this.cpfArray = Array.from(this.cpfLimpo);

        this.totalDigito1 = 0;
        
        //multiplicação regressiva do cpf
        for (let i=0; i<=this.cpfArray.length; i++){

            if (i == this.cpfArray[0]) this.totalDigito1  += parseInt((i * 10));
            if (i == this.cpfArray[1]) this.totalDigito1 += parseInt(i * 9);
            if (i == this.cpfArray[2]) this.totalDigito1 += parseInt(i * 8);
            if (i == this.cpfArray[3]) this.totalDigito1 += parseInt(i * 7);
            if (i == this.cpfArray[4]) this.totalDigito1 += parseInt(i * 6); 
            if (i == this.cpfArray[5]) this.totalDigito1 += parseInt(i * 5); 
            if (i == this.cpfArray[6]) this.totalDigito1 += parseInt(i * 4);
            if (i == this.cpfArray[7]) this.totalDigito1 += parseInt(i * 3);
            if (i == this.cpfArray[8]) this.totalDigito1 += parseInt(i * 2);
         
        }

        //VERIFICAÇÃO 
        this.primeiroDigito = 11 - (this.totalDigito1 % 11);
        this.primeiroDigito >= 10 ? this.primeiroDigito = '0' : this.primeiroDigito;

        return this.primeiroDigito;
    }

    encontraSegundoDigito() {

        this.cpfLimpo = this.limpaCpf(this.cpf);
        this.cpfArray = Array.from(this.cpfLimpo);
        this.totalDigito2 = 0;
        this.primeiroDigito = this.encontraPrimeiroDigito(this.cpf);


        //multiplicação regressiva do cpf
        for (let i=0; i<=this.cpfArray.length; i++){

            if (i == this.cpfArray[0]) this.totalDigito1 += parseInt((i * 11));
            if (i == this.cpfArray[1]) this.totalDigito1 += parseInt(i * 10);
            if (i == this.cpfArray[2]) this.totalDigito1 += parseInt(i * 9);
            if (i == this.cpfArray[3]) this.totalDigito1 += parseInt(i * 8);
            if (i == this.cpfArray[4]) this.totalDigito1 += parseInt(i * 7); 
            if (i == this.cpfArray[5]) this.totalDigito1 += parseInt(i * 6); 
            if (i == this.cpfArray[6]) this.totalDigito1 += parseInt(i * 5);
            if (i == this.cpfArray[7]) this.totalDigito1 += parseInt(i * 4);
            if (i == this.cpfArray[8]) this.totalDigito1 += parseInt(i * 3);
         
        }
        this.totalDigito2 += this.primeiroDigito * 2;
        
        //VERIFICAÇÃO 
        this.segundoDigito = 11 - (this.totalDigito2 % 11);
        this.segundoDigito >= 10 ? this.segundoDigito = '0' : this.segundoDigito;

        return this.segundoDigito;
    }
    
    validandoCpf(cpf) {
        
        this.cpf = cpf;
        this.limpaCpf(this.cpf)
        this.encontraPrimeiroDigito(this.cpf);
        this.encontraSegundoDigito(this.cpf);
        
        this.cpfLimpo = this.limpaCpf(this.cpf);
        this.cpfArray = Array.from(this.cpfLimpo);
        this.primeiroDigito = this.encontraPrimeiroDigito(this.cpf);
        this.segundoDigito = this.encontraSegundoDigito(this.cpf);

        console.log(this.primeiroDigito, this.segundoDigito);

        this.cpfArraySliced = this.cpfArray.slice(0, -2);
        

        if(this.cpfArray.length != 11 || this.primeiroDigito != this.cpfArray[9] || this.segundoDigito != this.cpfArray[10]){
            console.log('cpf inválido!')
            return 'CPF Inválido!';
        } 
        else {
            console.log('cpf válido!')
            return;
        }
        
    }

}

const formulario = new ValidaFormulario();
const cpf = new validaCpf();
cpf.validandoCpf('') // passar cpf como parâmetro para o método