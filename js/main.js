$(document).ready(function(){
	var input = '';
	var url = '';
	var cep = '';
	var logradouro = '';
	var complemento = '';
	var bairro = '';
	var localidade = '';
	var uf = '';

	$('.search-form button').on('click', function(event){
		event.preventDefault();
		input = $('.search-form input').val();
		url = 'https://viacep.com.br/ws/'+input+'/json/';

		$.ajax({
			method: 'GET',
			url: url,
			success: function(response) {
				console.log(response);
				logradouro = response.logradouro;
				complemento = response.complemento;
				bairro = response.bairro;
				localidade = response.localidade;
				uf = response.uf;
				$('.cep').text(input);
				$('.logradouro').text(logradouro);
				$('.complemento').text(complemento);
				$('.bairro').text(bairro);
				$('.localidade').text(localidade);
				$('.uf').text(uf);
			}
		});


	});
});