
       var map = null;
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', function() {
	map.setCenter(new google.maps.LatLng(49.574036, 34.5113945));
});
// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
function initMap() {
	var map = new google.maps.Map(document.getElementById('mymap'), {
		center: {
			lat: 49.574036,
			lng: 34.5113945
		},
		zoom: 6,
		styles: [{
			elementType: 'geometry',
			stylers: [{
				color: '#242f3e'
			}]
		}, {
			elementType: 'labels.text.stroke',
			stylers: [{
				color: '#242f3e'
			}]
		}, {
			elementType: 'labels.text.fill',
			stylers: [{
				color: '#746855'
			}]
		}, {
			featureType: 'administrative.locality',
			elementType: 'labels.text.fill',
			stylers: [{
				color: '#d59563'
			}]
		}, {
			featureType: 'poi',
			elementType: 'labels.text.fill',
			stylers: [{
				color: '#d59563'
			}]
		}, {
			featureType: 'poi.park',
			elementType: 'geometry',
			stylers: [{
				color: '#263c3f'
			}]
		}, {
			featureType: 'poi.park',
			elementType: 'labels.text.fill',
			stylers: [{
				color: '#6b9a76'
			}]
		}, {
			featureType: 'road',
			elementType: 'geometry',
			stylers: [{
				color: '#38414e'
			}]
		}, {
			featureType: 'road',
			elementType: 'geometry.stroke',
			stylers: [{
				color: '#212a37'
			}]
		}, {
			featureType: 'road',
			elementType: 'labels.text.fill',
			stylers: [{
				color: '#9ca5b3'
			}]
		}, {
			featureType: 'road.highway',
			elementType: 'geometry',
			stylers: [{
				color: '#746855'
			}]
		}, {
			featureType: 'road.highway',
			elementType: 'geometry.stroke',
			stylers: [{
				color: '#1f2835'
			}]
		}, {
			featureType: 'road.highway',
			elementType: 'labels.text.fill',
			stylers: [{
				color: '#f3d19c'
			}]
		}, {
			featureType: 'transit',
			elementType: 'geometry',
			stylers: [{
				color: '#2f3948'
			}]
		}, {
			featureType: 'transit.station',
			elementType: 'labels.text.fill',
			stylers: [{
				color: '#d59563'
			}]
		}, {
			featureType: 'water',
			elementType: 'geometry',
			stylers: [{
				color: '#17263c'
			}]
		}, {
			featureType: 'water',
			elementType: 'labels.text.fill',
			stylers: [{
				color: '#515c6d'
			}]
		}, {
			featureType: 'water',
			elementType: 'labels.text.stroke',
			stylers: [{
				color: '#17263c'
			}]
		}]
	});
	var infoWindow = new google.maps.InfoWindow({
		map: map
	});
	// Try HTML5 geolocation.
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var pos = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};
			infoWindow.setPosition(pos);
			infoWindow.setContent('My best sity!');
			map.setCenter(pos);
		}, function() {
			handleLocationError(true, infoWindow, map.getCenter());
		});
	} else {
		// Browser doesn't support Geolocation
		handleLocationError(false, infoWindow, map.getCenter());
	}
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	infoWindow.setPosition(pos);
	infoWindow.setContent(browserHasGeolocation ? 'Error: The Geolocation service failed.' : 'Error: Your browser doesn\'t support geolocation.');
} < /script> 
 < script > window.onload = function() {
	document.getElementById('toggler').onclick = function() {
		openbox('box', this);
		return false;
	};
};

function openbox(id, toggler) {
	var div = document.getElementById(id);
	if (div.style.display == 'block') {
		div.style.display = 'none';
		toggler.innerHTML = '<i class="fa fa-plus" aria-hidden="true"></i>';
	} else {
		div.style.display = 'block';
		toggler.innerHTML = '<i class="fa fa-ban" aria-hidden="true"></i>';
	}
}
var result = '';
// Создаем распознаватель
var recognizer = new webkitSpeechRecognition();
// Ставим опцию, чтобы распознавание началось ещё до того, как пользователь закончит говорить
recognizer.interimResults = true;
// Какой язык будем распознавать?
recognizer.lang = 'ru-Ru'; //en-En
//Используем колбек для обработки результатов
recognizer.onresult = function(event) {
	result = event.results[event.resultIndex]; //var 
	if (result.isFinal) {
		//alert('Вы сказали: ' + result[0].transcript);
		if (result[0] == "hi") {
			open folder / URL oor start recording or answer send to social media;
		}
	} else {
		console.log('Промежуточный результат: ', result[0].transcript);
	}
};

function speech(result) { //(result)
	// Начинаем слушать микрофон и распознавать голос
	recognizer.start();
}
var synth = window.speechSynthesis; //var synth = window.event.results[event.resultIndex];
/*let my=new obj(function whic to config this let=my with obj methods )***************************************************/
/**new*/
var utterance = new SpeechSynthesisUtterance('How about we say this now? This is quite a long sentence to say.');
//var utterance1 = result;//??????????????????
function talk() {
	synth.speak(utterance);
}

function stop() {
	synth.pause();
}
var countOfFields = 1; // Текущее число полей
var curFieldNameId = 1; // Уникальное значение для атрибута name
var maxFieldLimit = 5; // Максимальное число возможных полей
function deleteField(a) {
	// Получаем доступ к ДИВу, содержащему поле
	var contDiv = a.parentNode;
	// Удаляем этот ДИВ из DOM-дерева
	contDiv.parentNode.removeChild(contDiv);
	// Уменьшаем значение текущего числа полей
	countOfFields--;
	// Возвращаем false, чтобы не было перехода по сслыке
	return false;
}

function addField() {
	// Проверяем, не достигло ли число полей максимума
	if (countOfFields >= maxFieldLimit) {
		alert("Число полей достигло своего максимума = " + maxFieldLimit);
		return false;
	}
	// Увеличиваем текущее значение числа полей
	countOfFields++;
	// Увеличиваем ID
	curFieldNameId++;
	// Создаем элемент ДИВ
	var div = document.createElement("div");
	// Добавляем HTML-контент с пом. свойства innerHTML
	div.innerHTML = "<input name=\"name_" + curFieldNameId + "\" type=\"text\" /> <a onclick=\"return deleteField(this)\" href=\"#\"><i class="
	fa fa - ban " aria-hidden="
	true "></i></a>";
	// Добавляем новый узел в конец списка полей
	document.getElementById("parentId").appendChild(div);
	// Возвращаем false, чтобы не было перехода по сслыке
	return false;
}
// Набор функций
var base = {
	// Поиск элементов по классу
	findClass: function(str, node) {
		if (document.getElementsByClassName) return (node || document).getElementsByClassName(str);
		else {
			var node = node || document,
				list = node.getElementsByTagName('*'),
				length = list.length,
				Class = str.split(/\s+/),
				classes = Class.length,
				array = [],
				i, j, key;
			for (i = 0; i < length; i++) {
				key = true;
				for (j = 0; j < classes; j++)
					if (list[i].className.search('\\b' + Class[j] + '\\b') == -1) key = false;
				if (key) array.push(list[i]);
			}
			return array;
		}
	},
	// Добавление обработчиков событий
	bind: function(node, type, listener) {
		if (node.addEventListener) node.addEventListener(type, listener, false);
		//@cc_on node.attachEvent('on' + type, function() { listener.call(node); });
	},
	// Реализация DOMContentLoaded
	init: [],
	ready: function() {
		if (!arguments.callee.done) {
			arguments.callee.done = true;
			if (this.timer) clearInterval(this.timer);
			var i, length = this.init.length;
			for (i = 0; i < length; i++) this.init[i]();
			this.init = [];
		}
	},
	check: function() {
		var _this = this,
			listener = function() {
				_this.ready();
			};
		if (document.addEventListener) document.addEventListener('DOMContentLoaded', listener, false);
		if (/KHTML|WebKit/i.test(navigator.userAgent)) this.timer = setInterval(function() {
			if (/loaded|complete/.test(document.readyState)) base.ready();
		}, 10);
		/*@cc_on document.write(unescape('%3CSCRIPT onreadystatechange="if(this.readyState==\'complete\') base.ready()" defer=defer src=\/\/:%3E%3C/SCRIPT%3E')); @*/
		this.bind(window, 'load', listener);
	}
};
// Функции для работы с панельками
var toggler = {
	process: function() {
		var i, list = base.findClass('toggler1'),
			length = list.length;
		for (i = 0; i < length; i++) base.bind(list[i], 'click', this.toggle);
		list = base.findClass('content1');
		length = list.length;
		for (i = 0; i < length; i++) list[i].style.display = 'none';
	},
	toggle: function() {
		var content = base.findClass('content', this.parentNode)[0],
			e = arguments[0] || window.event;
		if (content.style.display == 'block') {
			content.style.display = 'none';
			this.innerHTML = 'Показать';
		} else {
			content.style.display = 'block';
			this.innerHTML = 'Скрыть';
		}
		e.preventDefault ? e.preventDefault() : e.returnValue = false;
	}
};
// Ищем блоки с классом «toggle» по событию DOMContentLoaded
base.init.push(function() {
	toggler.process();
});
// Запускаем проверку готовности DOM
base.check();
