// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


if(!document.documentElement.classList.contains('lock')){
	document.documentElement.classList.add('lock')
}
var fileInput  = document.querySelector( ".input-file" ),  
    button     = document.querySelector( ".input-file-trigger" ),
    the_return = document.querySelector(".file-return");
      
button.addEventListener( "keydown", function( event ) {  
    if ( event.keyCode == 13 || event.keyCode == 32 ) {  
        fileInput.focus();  
    }  
});
button.addEventListener( "click", function( event ) {
   fileInput.focus();
   return false;
});  
fileInput.addEventListener( "change", function( event ) {  
    the_return.innerHTML = this.value;  
});  




document.addEventListener("DOMContentLoaded", (event) => {
	function resetChk(buttonId, items) {
		document.getElementById(buttonId).addEventListener('click', function() {
			var checkboxes = document.querySelectorAll(items);
			checkboxes.forEach(function(checkbox) {
				 checkbox.checked = false;
			});
	  });
	 }

	 resetChk('resetServiceButton', '.service-checkbox-item');
	 resetChk('resetPriceButton', '.price-checkbox-item');


	 document.querySelectorAll('.price-checkbox-item').forEach(checkbox => {
		checkbox.addEventListener('change', function() {
			 if (this.checked) {
				  document.querySelectorAll('.price-checkbox-item').forEach(item => {
						if (item !== this) {
							 item.checked = false;
						}
				  });
			 }
		});
  });

  const modalBtnMenu = document.querySelector('.modal-menu-btn');
  if(modalBtnMenu){
	modalBtnMenu.addEventListener("click", function (e) {
		if(document.documentElement.classList.contains('menu-open')){
			document.documentElement.classList.remove('menu-open')
		}
		if(document.documentElement.classList.contains('lock')){
			document.documentElement.classList.remove('lock')
		}
	});
  }
 });

