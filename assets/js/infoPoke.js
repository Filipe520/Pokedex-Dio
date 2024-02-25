const telaInfor = document.getElementById('telaInfor');
const fechamento = document.getElementById("fechamento");
const xEsquerdo = document.getElementById("esquerdo");
const xDireito = document.getElementById("direito");
const pokemon = document.getElementsByClassName("pokemon");
fechamento.addEventListener("mousemove", mauseDentro);
fechamento.addEventListener("mouseout", mauseFora);
let cor

function mauseDentro() {
    xEsquerdo.style.backgroundColor = "black"
    xDireito.style.backgroundColor = "rgb(192, 192, 192)"
}

function mauseFora() {
    xEsquerdo.style.backgroundColor = "rgb(54, 54, 54)"
    xDireito.style.backgroundColor = "rgb(54, 54, 54)"
}

function telaInformacao(id, nome, type, photo, peso, altura) {
    fechamento.classList.add("animaX")
    telaInfor.classList.add("tela");
    telaInfor.classList.remove(type)
    telaInfor.classList.add(type)
    telaInfor.style.width = "600px"
    fechamento.style.width = '25px';
    fechamento.style.transition = "All ease .5s";
    xEsquerdo.classList.add("xEsquerdo");
    xDireito.classList.add("xDireito");
    cor = type
    setTimeout(function() {
        const detailPokemon = `
        <div class="pokemonInfor">
            <div class="pokemonNomeID">
                <div class="pokemonNome">
                    <h1>${nome}</h1>
                </div>
                <div class="pokemonId">
                    <p>#00${id}</p>
                </div>
            </div>
            <img src="assets/image/pokedex.png" alt="pokedex" class="logoFundo">
            <img src="${photo}"
            alt="${nome}" class="photoPokemon" style="z-index: 1;">
        </div>
        <div class="pokemonDetalis">
            <div class="pokemonALturaPeso">
                <div class="pokemonAltura">
                    <p>Altura: ${altura}</p>
                </div>
                <div class="pokemonPeso">
                    <p>Peso: ${peso}</p>
                </div>
            </div>
        </div>
        `
        telaInfor.innerHTML = detailPokemon
    }, 200)
}

function fechaTela() {
    setTimeout(function() {
        telaInfor.style.width = "0px"
        telaInfor.classList.remove("tela");
    }, 350)
    fechamento.classList.remove("animaX")
    telaInfor.classList.remove(cor);
    xEsquerdo.classList.remove("xEsquerdo")
    xDireito.classList.remove("xDireito")
    fechamento.style.width = '0px';
    telaInfor.innerHTML = ""
}