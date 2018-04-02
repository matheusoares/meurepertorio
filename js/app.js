$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});


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
