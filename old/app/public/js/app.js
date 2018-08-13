//verifica campos de senha iguais
function confirmaSenhaFunct(){
	var senha = document.getElementById("inputPassword").value;
	var confirmaSenha = document.getElementById("inputConfirmationPassword").value;

	var inputSenha = document.getElementById("inputPassword");
	var inputConfirma = document.getElementById("inputConfirmationPassword");

	if(senha != false && senha == confirmaSenha){

		inputConfirma.classList.add("is-valid");
		inputSenha.classList.add("is-valid");
		inputConfirma.classList.remove("is-invalid");
		inputSenha.classList.remove("is-invalid");
	}else{

		inputConfirma.classList.add("is-invalid");
		inputSenha.classList.add("is-invalid");
		inputConfirma.classList.remove("is-valid");
		inputSenha.classList.remove("is-valid");
	}	
}

//termos de contrato checkbox
var botao = document.getElementById("submitButton");

var checkMarked = document.getElementById("termosDeContrato");

checkMarked.addEventListener("click", function(){

	var checkValue = document.getElementById("termosDeContrato").checked;
	if(checkValue){
		botao.classList.remove("disabled");
		botao.classList.remove("avoid-clicks");
		botao.setAttribute("aria-disabled", "false");
	}else{
		botao.classList.add("disabled");
		botao.classList.add("avoid-clicks");
	}
});
