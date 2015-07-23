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