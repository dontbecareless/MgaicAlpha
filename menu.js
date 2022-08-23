$(document).ready(function(){
	//открываем менюшку статей
	$('.more_button_st').click(function(event){
		$('.more_button_st,.submenu_st,.menu_punkt_st').toggleClass('active');
	});
	$('.menu_punkt_st').click(function(event){
		$('.more_button_st,.submenu_st,.menu_punkt_st').toggleClass('active');
	});
	
	//открываем менюшку колод
	$('.more_button_de').click(function(event){
		$('.more_button_de,.submenu_de,.menu_punkt_de').toggleClass('active');
	});
	$('.menu_punkt_de').click(function(event){
		$('.more_button_de,.submenu_de,.menu_punkt_de').toggleClass('active');
	});
	
	//открываем менюшку аккаунта
	$('.more_button_ac').click(function(event){
		$('.more_button_ac,.submenu_ac,.menu_punkt_ac').toggleClass('active');
	});
	$('.menu_punkt_ac').click(function(event){
		$('.more_button_ac,.submenu_ac,.menu_punkt_ac').toggleClass('active');
	});
	
	
	$('.search_button').click(function(event){
		$('.search_button,.search_menu').toggleClass('active');
	});
	
	
	
	
	window.addEventListener('click', e => { 
		const target = e.target
		if (!target.closest('.submenu_de,.menu_punkt_de,.more_button_de')){ 
			//$('.more_button_ac,.submenu_ac,.menu_punkt_ac').removeClass('active');
			//$('.more_button_st,.submenu_st,menu_punkt_st').removeClass('active');
			$('.more_button_de,.submenu_de,.menu_punkt_de').removeClass('active');
		}
		if (!target.closest('.submenu_st,.menu_punkt_st,.more_button_st')){ 
			//$('.more_button_ac,.submenu_ac,.menu_punkt_ac').removeClass('active');
			$('.more_button_st,.submenu_st,.menu_punkt_st').removeClass('active');
			//$('.more_button_de,.submenu_de,.menu_punkt_de').removeClass('active');
		}
		if (!target.closest('.submenu_ac,.menu_punkt_ac,.more_button_ac')){ 
			$('.more_button_ac,.submenu_ac,.menu_punkt_ac').removeClass('active');
			//$('.more_button_st,.submenu_st,menu_punkt_st').removeClass('active');
			//$('.more_button_de,.submenu_de,.menu_punkt_de').removeClass('active');
		}
		if (!target.closest('.search_menu,.search_button')){ 
			$('.search_button,.search_menu').removeClass('active');
			//$('.more_button_st,.submenu_st,menu_punkt_st').removeClass('active');
			//$('.more_button_de,.submenu_de,.menu_punkt_de').removeClass('active');
		}
	})
});