$('td').click(function () {
  var classes = ['red','blue','blank'];
  this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
  $(this).on("mouseout", checkWin);
});

function checkColor(color, col, row, diag) {
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
      if (diag[0][j].className == color) {
        diagCount1++;
      }
      if (diag[1][j].className == color) {
        diagCount2++;
      } 
    };
    if (colCounter === 3 || rowCounter === 3 || diagCount1 === 3 || diagCount2 === 3) {
      return true;
    } else {
      return false;
    }
}

function groupingByThree (array) {
  var newArray = [];
  for(var n = 0; n < 3; n++){
    var x = $.map(array, function(val, i){
      return (i - n) % 3 === 0 ? val : null;
    });
    newArray.push(x);
   };
 return newArray
};


function checkWin() {  
  var $state = $.makeArray($("tbody td"));
  var $columns = groupingByThree($state);
  var $rows = $("tbody tr");
  var diag = [ [$state[0], $state[4], $state[8]], [$state[2], $state[4], $state[6]] ];
    for(var i = 0; i < 3; i++) {
    var $col = $columns[i];
    var $row = $rows[i].children;
    
    if(checkColor("red", $col, $row, diag)) {
      $("#result").text("Otter Wins!");
      return;
    }
    
    if(checkColor("blue", $col, $row, diag)) {
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


