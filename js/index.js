function revelarResposta() {
  var resposta = document.querySelector("#resposta");
  resposta.classList.toggle("embacar");
}

function proximaPergunta(proximaPergunta) {
  var pergunta = document.querySelector("#cardContainer");
  pergunta.innerHTML = "";

  var cardDiv = document.createElement("div");

  cardDiv.classList.add("card");

  cardDiv.innerHTML = `
  <div class="card-cabecalho centralizar">
  <h1 class="card-titulo">O que é ${proximaPergunta.title}?</h1>
</div>

<div id="resposta" class="card-conteudo embacar">
  <p>
    ${proximaPergunta.description}
  </p>
 </div>
`;
  pergunta.appendChild(cardDiv);
}

function buscarInformacao() {
  fetch("https://flash.quickstaart.com/random")
    .then(function (resultado) {
      return resultado.json();
    })
    .then(function (resultadoJson) {
      proximaPergunta(resultadoJson);
    });
}

window.addEventListener("load", buscarInformacao);
