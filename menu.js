$(document).ready(function(){
	//открываем менюшку статей
	$('#menu_punkt_st').click(function(event){
		$('#more_button_st,#menu_st_submenu,#menu_punkt_text_st,#menu_punkt_st').toggleClass('active');
	});
	
	//открываем менюшку колод
	$('#menu_punkt_de').click(function(event){
		$('#more_button_de,#menu_de_submenu,#menu_punkt_text_de,#menu_punkt_de').toggleClass('active');
	});
	
	//открываем менюшку аккаунта
	$('#menu_punkt_ac').click(function(event){
		$('#more_button_ac,#menu_ac_submenu,#menu_punkt_text_ac,#menu_punkt_ac').toggleClass('active');
	});
	
	
	$('.search_button').click(function(event){
		$('.search_button,.search_menu').toggleClass('active');
	});
	
	
	
	
	window.addEventListener('click', e => { 
		const target = e.target
		if (!target.closest('#menu_de_submenu,#menu_punkt_de,#more_button_de')){ 
			$('#more_button_de,#menu_de_submenu,#menu_punkt_de').removeClass('active');
		}
		if (!target.closest('#menu_ac_submenu,#menu_punkt_ac,#more_button_ac')){ 
			$('#more_button_ac,#menu_ac_submenu,#menu_punkt_ac').removeClass('active');
		}
		if (!target.closest('#menu_st_submenu,#menu_punkt_st,#more_button_st')){ 
			$('#more_button_st,#menu_st_submenu,#menu_punkt_st').removeClass('active');
		}
		if (!target.closest('.search_menu,.search_button')){ 
			$('.search_button,.search_menu').removeClass('active');

		}
	})
});