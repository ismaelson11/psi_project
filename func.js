function mostrarConteudo(conteudoId) {
  var conteudos = document.querySelectorAll('div[id^="conteudo"]')

  // Oculta todos os conteúdos
  for (var i = 0; i < conteudos.length; i++) {
    conteudos[i].style.display = "none"
  }

  // Exibe o conteúdo com o ID correspondente
  var conteudo = document.getElementById(conteudoId)
  conteudo.style.display = "block"
}

function mostrarTexto(conteudoId) {
  var conteudos = document.querySelectorAll("pergunta")

  // Oculta todos os conteúdos
  for (var i = 0; i < conteudos.length; i++) {
    conteudos[i].style.display = "none"
  }

  // Exibe o conteúdo com o ID correspondente
  var conteudo = document.getElementById(conteudoId)
  if (conteudo.style.display === "block") {
    conteudo.style.display = "none" // Oculta o conteúdo se estiver visível
  } else {
    conteudo.style.display = "block"
  }
}
