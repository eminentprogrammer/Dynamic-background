function change_bg(){
	const bg 	= document.querySelector('body');
	const Btn 	= document.querySelector('.changebg');

	if (Btn.id == 'bg-second'){
		bg.classList.remove('bg-second');
		bg.classList.add('bg-first');
		Btn.classList.add("bg-light");
		Btn.classList.add("bg-light");
		document.querySelector('#bg-second').id='bg-first';
		document.getElementById('bglogo').src = "./plugins/img/dark.png";

	}
	else if(Btn.id == 'bg-first'){
		bg.classList.remove('bg-first');
		bg.classList.add('bg-second');
		Btn.classList.remove("bg-light");
		Btn.classList.add("bg-light");
		document.querySelector('#bg-first').id = 'bg-second';

		document.getElementById('bglogo').src = "./plugins/img/light.png";
	}
}
