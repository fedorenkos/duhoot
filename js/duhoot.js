$(document).ready(function(){


function myFunction(){
	var x = document.createElement('input');
	var x = setAttribute('type', 'search');
	document.body.appendChild(x);
	$('#search-input').slideout({
		tabHandle: '#handel',
		tabLocation: 'right',
		speed: 300,
		action:'click'
	});
};

$('body').on('click', '#handel', function() {
	$('#search-input').toggle({
		tabHandle: '#handel',
		tabLocation: 'right',
		speed: 300,
		action:'click'
	});

	return false;
})

$(document).ready(function(){
	var touch = $('#touch-menu');
	var nav = $('.nav');

	$(touch).on('click', function(e){
		e.preventDefault();
		nav.slideToggle();
	});
	$(window).resize(function(){
		var wid = $(window).width();
		if(wid > 1024 && nav.is(':hidden')){
			nav.removeAttr('style');

		}
	});
});

$(document).ready(function(){
	var touch = $('#recom_filter');
	var ul = $('.recommend');

	$(touch).on('click', function(e){
		e.preventDefault();
		ul.slideToggle();
	});
	$(window).resize(function(){
		var wid = $(window).width();
		if(wid > 1024 && ul.is(':hidden')){
			ul.removeAttr('style');

		}
	});
});

$(document).ready(function(){
	var touch = $('#sub_filter');
	var div = $('.main_filter');

	$(touch).on('click', function(e){
		e.preventDefault();
		div.slideToggle();
	});
	$(window).resize(function(){
		var wid = $(window).width();
		if(wid > 1024 && div.is(':hidden')){
			div.removeAttr('style');

		}
	});
});

$(document).ready(function(){
	var touch = $('#hidden_filter');
	var div = $('.filters');

	$(touch).on('click', function(e){
		e.preventDefault();
		div.slideToggle();
	});
	$(window).resize(function(){
		var wid = $(window).width();
		if(wid > 1024 && div.is(':hidden')){
			div.removeAttr('style');

		}
	});
});


$('body').on('click', '.star-rating_star', function(){
	$(this).prevAll().removeClass('rating_star--active');
	//$(this).nextAll().addClass('unrated-star');
	$(this).nextAll().addBack() .addClass('rating_star--active');
	//$(this).prevAll().andSelf().removeClass('unrated-star');
});







//Get modal
var modal1 = document.getElementById('id01');

//When the user clicks anywhere outsideof the modal, close it
window.onclick = function(event) {
	if (event.target==modal1) {
		modal1.style.display = "none";
	}
}


}); 


var countriesAndCities = {};
countriesAndCities['ger'] = ['Berlin', 'Munchen'];
countriesAndCities['uk'] = ['London', 'Liverpool'];
countriesAndCities['usa'] = ['New York', 'Chicago'];
countriesAndCities['it'] = ['Rome', 'Milano'];
countriesAndCities['ukr'] = ['Kyiv', 'Lviv'];

function changeCountryList() {
    var countryList = document.getElementById("country-list");
    var cityList = document.getElementById("city-list");
    var selectedCountry = countryList.options[countryList.selectedIndex].value;
    while (cityList.options.length) {
        cityList.remove(0);
    }
    var countries = countriesAndCities[selectedCountry];
    if (countries) {
        var i;
        for (i = 0; i < countries.length; i++) {
            var country = new Option(countries[i], i);
            cityList.options.add(country);
        }
    }
} 

function changeCountryMap() {
    var countryMap = document.getElementById("country-map");
    var cityMap = document.getElementById("city-map");
    var selectedCountry = countryMap.options[countryMap.selectedIndex].value;
    while (cityMap.options.length) {
        cityMap.remove(0);
    }
    var countries = countriesAndCities[selectedCountry];
    if (countries) {
        var i;
        for (i = 0; i < countries.length; i++) {
            var country = new Option(countries[i], i);
            cityMap.options.add(country);
        }
    }
} 


var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

function myFunction(){
    document.getElementById("span0").innerHTML = add();

}	


var add1 = (function () {
    var count = 0;
    return function () {return count += 1;}
})();

function myFunction1(){
    document.getElementById("span1A").innerHTML = add1();

}	


var add2 = (function () {
    var counter1 = 0;
    return function () {return counter1 += 1;}
})();


function myFunction2(){
    document.getElementById("span2").innerHTML = add2();

}	

    