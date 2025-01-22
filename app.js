let amigos = [];

function asignarContenidoElemento(elemento, contenido) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = '';
    if (Array.isArray(contenido)) {
        contenido.forEach(item => {
            let li = document.createElement('li');
            li.textContent = item;
            elementoHTML.appendChild(li);
        });
    } else {
        elementoHTML.innerHTML = contenido;
    }
}

function limpiarElemento(selector, isList = false) {
    let elemento = document.querySelector(selector);
    if (isList) {
        amigos = [];
        elemento.innerHTML = '';
    } else {
        elemento.value = '';
    }
}

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo !== '' && /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(amigo)) {
        amigos.push(capitalize(amigo));
        asignarContenidoElemento('#listaAmigos', amigos);
        limpiarElemento("#amigo");
        asignarContenidoElemento('#resultado', '');
    } else {
        alert('Por favor, ingrese un nombre válido.');
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Por favor, ingrese al menos dos nombres.');
        return;
    } else {
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        asignarContenidoElemento('#resultado', `El amigo secreto sorteado es: ${amigoSorteado}`);
        limpiarElemento('#listaAmigos', true);
    }
}

document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});