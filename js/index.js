// index.html
function validar() {
    var nome = formnewsletter.nome.value;
    var email = formnewsletter.email.value;
    if (nome != "" && email != "") {
        var resposta = window.confirm("confirme se este é realmente o seu email: " + email);
        if (resposta == false) {
            alert("informe seu email novamente");
            formnewsletter.email.value = "";
            formnewsletter.email.focus();
            return false;
        }
        alert ("Muito obrigado " + nome + " fique de olho em nossas novidades!!");
    }
    if (nome == "") {
        alert ("preencha o campo nome");
        formnewsletter.nome.focus();
        return false;
    }
    if (email == "") {
        alert ("Ola " + nome + ", por favor preencha o compo email");
        formnewsletter.email.focus();
        return false;
    }
}
//flores.html
function abrirModalBusca() {
    var modal = document.querySelector(".modal-busca");
    if (modal) {
        modal.classList.add("abrir");
    }
}
function fecharModalBusca() {
    var modal = document.querySelector(".modal-busca");
    if (modal) {
        modal.classList.remove("abrir");
    }
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