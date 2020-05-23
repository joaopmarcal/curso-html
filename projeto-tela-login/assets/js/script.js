const email = "joaopaulozangrande@gmail.com";

console.log(email);
console.log("O seu e-mail é: " + email);

document.getElementById('btn-submit').addEventListener('click', e => {

    console.log('o botão foi clicado');

});

document.getElementById('form-login').addEventListener('mouseenter', e => {
    console.log('O mouse está sobre o formulário')
});

document.querySelector('#form-login').addEventListener('mouseleave', e => {
    console.log('O mouse está fora do formulário');
});

document.querySelector('#form-login').addEventListener('submit', e => {
    e.preventDefault();
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    let json = {
        email,
        password
    }

    if (!json.email){
        console.error('O campo não foi preenchido');
    } else if (!json.password){
        console.error('O campo não foi preenchido');
    } else {
        console.info("Dados validados com sucesso");
    }

    /*
    let stringJSON = JSON.stringify(json);

    console.log(stringJSON);

    let jsonParse = JSON.parse(stringJSON);

    console.log(jsonParse);
    */
});