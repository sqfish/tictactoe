$('td').click(function () {
  var classes = ['red','blue','blank'];
  this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
  $(this).on("mouseout", checkWin);
});



function checkColor(color, col, row, diag1, diag2) {
  var rowCounter = 0;
  var colCounter = 0;
  var diagCount1 = 0;
  var diagCount2 = 0;
    for(var j = 0; j < 3; j++){
      if (col[j].className == color){
        rowCounter++;
      }
      if (row[j].className == color) {
        colCounter++;
      }  
      if (diag1[j].className == color) {
        diagCount1++;
      }
      if (diag2[j].className == color) {
        diagCount2++;
      } 
    };
    if (colCounter === 3 || rowCounter === 3 || diagCount1 === 3 || diagCount2 === 3) {
      return true;
    } else {
      return false;
    }
}


function checkWin() {
  var $columns = $("tbody td");
  var $rows = $("tbody tr");
  var diag1 = [$columns[0], $columns[4], $columns[8]];
  var diag2 = [$columns[2], $columns[4], $columns[6]];
  for(var i = 1; i < 4; i++) {
    var $col = $columns.nthCol(i).toArray();
    var $row = $rows[i-1].children;
    
    if(checkColor("red", $col, $row, diag1, diag2)) {
      $("#result").text("red wins")
      // document.write("red wins")
      return;
    }
    
    if(checkColor("blue", $col, $row, diag1, diag2)) {
      $("#result").text("blue wins")
      return;
    }
  }
    $("#result").text("no winner yet")
    return;
};



// $('button').click(function() {
//   checkWin();
// })



// function checkWin() {
//   switch (true) {
//     case ($cell1.hasClass('red') && $cell2.hasClass('red') && $cell3.hasClass('red')):
//     alert("WINNER!");
//       break;
//     case ($cell4.hasClass('red') && $cell5.hasClass('red') && $cell6.hasClass('red')):
//     alert("WINNER!");
//       break;
//     case ($cell7.hasClass('red') && $cell8.hasClass('red') && $cell9.hasClass('red')):
//     alert("WINNER!");
//       break;
//     case ($cell1.hasClass('red') && $cell5.hasClass('red') && $cell9.hasClass('red')):
//     alert("WINNER!");
//       break;
//     case ($cell3.hasClass('red') && $cell5.hasClass('red') && $cell7.hasClass('red')):
//     alert("WINNER!");
//       break;
//     case ($cell1.hasClass('red') && $cell4.hasClass('red') && $cell7.hasClass('red')):
//     alert("WINNER!");
//       break;
//     case ($cell3.hasClass('red') && $cell6.hasClass('red') && $cell9.hasClass('red')):
//     alert("WINNER!");
//       break;
//     case ($cell2.hasClass('red') && $cell5.hasClass('red') && $cell8.hasClass('red')):
//     alert("WINNER!");
//       break;
//     case ($cell1.hasClass('blue') && $cell2.hasClass('blue') && $cell3.hasClass('blue')):
//     alert("WINNER!");
//       break;
//     case ($cell4.hasClass('blue') && $cell5.hasClass('blue') && $cell6.hasClass('blue')):
//     alert("WINNER!");
//       break;
//     case ($cell7.hasClass('blue') && $cell8.hasClass('blue') && $cell9.hasClass('blue')):
//     alert("WINNER!");
//       break;
//     case ($cell1.hasClass('blue') && $cell5.hasClass('blue') && $cell9.hasClass('blue')):
//     alert("WINNER!");
//       break;
//     case ($cell3.hasClass('blue') && $cell5.hasClass('blue') && $cell7.hasClass('blue')):
//     alert("WINNER!");
//       break;
//     case ($cell1.hasClass('blue') && $cell4.hasClass('blue') && $cell7.hasClass('blue')):
//     alert("WINNER!");
//       break;
//     case ($cell3.hasClass('blue') && $cell6.hasClass('blue') && $cell9.hasClass('blue')):
//     alert("WINNER!");
//       break;
//     case ($cell2.hasClass('blue') && $cell5.hasClass('blue') && $cell8.hasClass('blue')):
//     alert("WINNER!");
//       break;  
//   }
// }











// $("td").click(function() {
//   $(this).removeClass("red").addClass("blue"); 
// }, function() {
//      $(this).removeClass("blue").addClass("red");
// });



// $('td').click(function() {
//  // $(this).removeClass();
//  $(this).addClass('blue')
// })

// // $('td').dblclick(function() {
// //   $(this).removeClass();
// //   $(this).addClass('red')
// // })