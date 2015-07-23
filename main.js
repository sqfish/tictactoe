// 1. Selectors for cells assigned to vars.
// 2. On click add class.
// 3. Then set up classes for red or blue.
// 4. Determine winner, possibly using hasClass().


var $cell1 = $('tbody tr:first-child td:first-child');
var $cell2 = $cell1.next();
var $cell3 = $cell2.next();
var $cell4 = $('tbody tr:nth-child(2) td:first-child');
var $cell5 = $cell4.next();
var $cell6 = $cell5.next();
var $cell7 = $('tbody tr:nth-child(3) td:first-child');
var $cell8 = $cell7.next();
var $cell9 = $cell8.next();

$('td').click(function () {
  var classes = ['red','blue','blank'];
  this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
});

$('button').click(function() {
	checkWin();
})


function checkWin() {
  switch (true) {
  	case ($cell1.hasClass('red') && $cell2.hasClass('red') && $cell3.hasClass('red')):
	  alert("WINNER!");
      break;
    case ($cell4.hasClass('red') && $cell5.hasClass('red') && $cell6.hasClass('red')):
	  alert("WINNER!");
      break;
    case ($cell7.hasClass('red') && $cell8.hasClass('red') && $cell9.hasClass('red')):
	  alert("WINNER!");
      break;
    case ($cell1.hasClass('red') && $cell5.hasClass('red') && $cell9.hasClass('red')):
	  alert("WINNER!");
      break;
    case ($cell3.hasClass('red') && $cell5.hasClass('red') && $cell7.hasClass('red')):
	  alert("WINNER!");
      break;
    case ($cell1.hasClass('red') && $cell4.hasClass('red') && $cell7.hasClass('red')):
	  alert("WINNER!");
      break;
    case ($cell3.hasClass('red') && $cell6.hasClass('red') && $cell9.hasClass('red')):
	  alert("WINNER!");
      break;
    case ($cell2.hasClass('red') && $cell5.hasClass('red') && $cell8.hasClass('red')):
	  alert("WINNER!");
      break;
    case ($cell1.hasClass('blue') && $cell2.hasClass('blue') && $cell3.hasClass('blue')):
	  alert("WINNER!");
      break;
    case ($cell4.hasClass('blue') && $cell5.hasClass('blue') && $cell6.hasClass('blue')):
	  alert("WINNER!");
      break;
    case ($cell7.hasClass('blue') && $cell8.hasClass('blue') && $cell9.hasClass('blue')):
	  alert("WINNER!");
      break;
    case ($cell1.hasClass('blue') && $cell5.hasClass('blue') && $cell9.hasClass('blue')):
	  alert("WINNER!");
      break;
    case ($cell3.hasClass('blue') && $cell5.hasClass('blue') && $cell7.hasClass('blue')):
	  alert("WINNER!");
      break;
    case ($cell1.hasClass('blue') && $cell4.hasClass('blue') && $cell7.hasClass('blue')):
	  alert("WINNER!");
      break;
    case ($cell3.hasClass('blue') && $cell6.hasClass('blue') && $cell9.hasClass('blue')):
	  alert("WINNER!");
      break;
    case ($cell2.hasClass('blue') && $cell5.hasClass('blue') && $cell8.hasClass('blue')):
	  alert("WINNER!");
      break;  
  }
}











// $("td").click(function() {
//   $(this).removeClass("red").addClass("blue"); 
// }, function() {
//      $(this).removeClass("blue").addClass("red");
// });



// $('td').click(function() {
// 	// $(this).removeClass();
// 	$(this).addClass('blue')
// })

// // $('td').dblclick(function() {
// // 	$(this).removeClass();
// // 	$(this).addClass('red')
// // })