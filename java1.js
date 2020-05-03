window.onload = function(){

	function getwelcom(arg) {
		arg.style.right = "0";
	}
	getwelcom(welcom);




	var objmen = [
			{
				src: 'image/boots/boots2.png',
				header: 'Adidas Crazy Explosive',
				price: 'Price:<span>  320$  </span>',
			},{
				src: 'image/boots/boots2.png',
				header: 'Adidas Crazy Explosive',
				price: 'Price:<span>  340$  </span>',
			},{
				src: 'image/boots/boots3.png',
				header: 'Adidas Crazy Explosive',
				price: 'Price:<span>  320$  </span>',
			},{
				src: 'image/boots/boots2.png',
				header: 'Adidas Crazy Explosive',
				price: 'Price:<span> 451$   </span>',
			},{
				src: 'image/boots/boots2.png',
				header: 'Adidas Crazy Explosive',
				price: 'Price:<span>  231$  </span>',
			},{
				src: 'image/boots/boots2.png',
				header: 'Adidas Crazy Explosive',
				price: 'Price:<span>  331$  </span>',
			},{
				src: 'image/boots/boots7.png',
				header: 'Adidas Crazy Explosive',
				price: 'Price:<span>  341$  </span>',
			},{
				src: 'image/boots/boots8.png',
				header: 'Adidas Crazy Explosive',
				price: 'Price:<span>  457$  </span>',
			},{
				src: 'image/boots/boots8.png',
				header: 'Adidas Crazy Explosive',
				price: 'Price:<span>  457$  </span>',
			},
		];
		
		var divproduct = document.getElementById('Product');

		for (var i = 0; i < objmen.length; i++) {
			var html = '<div class="col-xl-3 mpa" id = "mpaa" >'+
					 		'<a href=""><img id="bot" class="boots1" src="'+objmen[i].src+'"></a>'+
					 		/*'<h3 class="bootsname">'+objmen[i].header+'</h3>'+
					 		'<p class="price" >'+objmen[i].price+'</p>' +*/
						'</div>'
		  	divproduct.innerHTML += html; 
		}
};









// Получаем нужный элемент
var element =  document.querySelector('.catalog');
var para = document.querySelector('.paragraf');
var welcom = document.getElementById('welcom');
var pro = document.getElementById('Product');


var Visible = function (target) {
  // Все позиции элемента
  var targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
    // Если элемент полностью видно, то запускаем следующий код
    console.clear();
    console.log('Вы видите элемент :)');
	target.style.opacity = "1";
	target.style.top = "0";
	target.style.right = "0";
	target.style.transform = "scale(1)";
	target.style.transition = "0.5s ease";


	
	
	


	
  } else {
    // Если элемент не видно, то запускаем этот код
    console.clear();
  };
};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
  Visible (element);
  Visible (para);
  Visible (pro);

  


 
});



window.onscroll = function() {
	myFunctionScroll()
};


var head = document.getElementById("head");
var logo = document.getElementById("logo");
var menu = document.getElementById("menu");


function myFunctionScroll() {

  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
  	head.style.backgroundColor = " rgba(255, 255, 255,1)"; 
  	logo.style.color = "black";
  	logo.style.paddingTop = "30px"; 
  	menu.style.color = "black";
  	menu.style.paddingTop = "30px"; 
  	head.style.transition = "0.5s ease all";

  	head.style.WebkitBoxShadow = "0px 12px 10px 7px rgba(255,255,255,1)";
  	head.style.boxShadow = "0px 12px 10px 7px rgba(255,255,255,1)";


  }else if(document.body.scrollTop < 90 ){
  	head.style.backgroundColor = "";
  	logo.style.color = "";
  	logo.style.paddingTop = "";
  	menu.style.color = "";
  	menu.style.paddingTop = "";
  	head.style.WebkitBoxShadow = "";
  	head.style.boxShadow = "";
  }
}
/*--------knopkeq--------------*/
