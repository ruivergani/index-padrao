// Use o ID #evento para ativar o modal ao carregar a página.
$(document).ready(function () {
	$('#evento').modal('show');
})

// Se o modal tiver algum vídeo, o vídeo pusara ao fechar o moda.
$(document).ready(function () {
	$('#evento').on('hidden.bs.modal', function () {
		let $this = $(this).find('iframe'),
			tempSrc = $this.attr('src');
		$this.attr('src', "");
		$this.attr('src', tempSrc);
	});

	$('#evento').on('hidden.bs.modal', function () {
		let evento = document.getElementById("htmlVideo");
		if (evento != null) {
			evento.pause();
			evento.currentTime = 0;
		}
	});
});

// Rolagem suave quando OnePage ao utilizar a clasee .menu-item no link/botão.
 $(".menu-item").click(function(event){
     event.preventDefault();
     //Calcula o local do destino
     var dest=0;
     if($(this.hash).offset().top > $(document).height()-$(window).height()){
          dest=$(document).height()-$(window).height();
     }else{
          dest=$(this.hash).offset().top -1; // Alterar o valor > -1 < conforme a altura do menu fixo existente na página.
     }
     //Ir para o Destino
     $('html,body').animate({scrollTop:dest}, 1600,'swing');
 });