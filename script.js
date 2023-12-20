let darkmode = document.querySelector('#darkmode');


darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('color');
    } else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('color');
    }
}
function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    if (login == "admin" && senha == "admin") {
        alert('sucesso');
        location.href = "index.html";
    } else {
        alert('usuario ou senha incorretos');
    }
}

let menu = document.querySelector('#menu-icon');
let Links = document.querySelector('.Links');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    Links.classList.toggle('open');

};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    Links.classList.remove('open');
};








