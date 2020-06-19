// index.html
async function entrar() {
    if (entrar <= 1){
        await sleep(50);
        alert("seja bem vindo")
    }
    if (entrar <= 1)
    function sleep(ms) {
        return new Promise(resolve =>setTimeout(resolve, ms));
    }
}
function validar() {
    var nome = formnewsletter.nome.value;
    var email = formnewsletter.email.value;
    if (nome != "" && email != "") {
        var resposta = window.confirm("confirme se este é realmente o seu email: " + email)
        if (resposta == false) {
            alert("informe seu email novamente");
            formnewsletter.email.value = "";
            formnewsletter.email.focus();
            return false;
        }
        alert ("Muito obrigado " + nome + " fique de olho em nossas novidades!!");
    }
    if (email == "") {
        alert ("Ola " + nome + ", por favor preencha o compo email");
        formnewsletter.email.focus();
        return false;
    }
    if (nome == "") {
        alert ("preencha o campo nome");
        formnewsletter.nome.focus();
        return false;
    }
}
//flores.html
function trocarimagem() {
    var troca = document.getElementsByName("troca");
    troca.src="img/rosa.jpg";
}
//contato.html
function formContato() {
    var nome = formcontato.nome.value;
    var sobrenome = formcontato.sobrenome.value;
    var email = formcontato.email.value;
    var mensagem = formcontato.mensagem.value;
    if (nome != "" && sobrenome != "" && email != "" && mensagem != "") {
        alert("agradecemos seu feedback");
        var confirma = window.confirm("vamos redireciona-lo para a pagina inicial ok?");
        if (confirma != true) {
            return false;
        }
    }
    if (nome == "") {
        alert("preencha o campo nome");
        formcontato.nome.focus();
        return false;
    }
    if (sobrenome == "") {
        alert("preencha o campo sobrenome");
        formcontato.sobrenome.focus();
        return false;
    }
    if (email == "") {
        alert("preencha o campo email");
        formcontato.email.focus();
        return false;
    }
    if (mensagem == "") {
        alert("preencha o campo mensagem");
        formcontato.mensagem.focus();
        return false;
    }
}