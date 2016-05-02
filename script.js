$(document).ready(function(){

	



			formSubmit();
			cardClick();
		// createCard();
		console.log('working');


	
})

var cardDatabase = []


function formSubmit(){
		
		$('form').submit(function(e){

				e.preventDefault();

				createCard($(this).serializeArray());
			})
		
	}
		
function createCard(cardData){
	console.log('CardDatabase: ', cardDatabase)
	console.log(cardData)
	$('.right').append($("<div />", {
 		'class': 'card',
		html: [
 			$("<h3 />", {text: cardData[0].value + " " + cardData[1].value}),
 			$("<p />", {text: "Click here to show description"})
		],
		'data-id': cardDatabase.length
	}))


	cardDatabase.push(cardData[2].value)
	$('form').trigger('reset');
}

function cardClick(){

	$('.right').on('click', '.card p', function(){

		var cardDatabaseIDX = $(this).parent().data('id')
		console.log(cardDatabaseIDX)

		$(this).parent().html(cardDatabase[cardDatabaseIDX])
	})
}





// $('#add').click(function(e){
		
	// 	e.preventDefault();

	// 	$('fieldset').each(function(i, element) {
	// 		console.log('working1');
	// 		console.log(element.children.eq(1).val())
    		
	// 		var array = [];

 //    		array.push(element.children.eq(1).val());

 //    		$(h2).append($(<"div />", {
 //    			class: 'card',
 //    			html: [
 //    				$("<h3 />", {text: cardData})
 //    			]

 //    		}))

	// 	});





















