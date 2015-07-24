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
      $("#result").text("Otter Wins!");
      return;
    }
    
    if(checkColor("blue", $col, $row, diag1, diag2)) {
      $("#result").text("Pug Wins!");
      return;
    }
  }
      $("#result").text("No Winner Yet");
      return;
};



$('button').click(function() {
  alert('You can do it!!!');  
});


