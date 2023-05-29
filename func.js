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
