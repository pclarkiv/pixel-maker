// Select color input
// Select size input
var height, width, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
  event.preventDefault();
  height = $('#inputHeight').val();
  width = $('#inputWidth').val();
  makeGrid(height, width);
  //console.log('Height:' + Height + 'and Width:' + Width)
})

function makeGrid(xAxis, yAxis) {
  $('tr').remove();

// Your code goes here!
  for (var i = 1; i <= xAxis; i++) {
    $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
    for (var j = 1; j <= yAxis; j++) {
      $('#table' + i).append('<td></td>');
    }
  }

// add color to cell
  $('td').click(function addColor() {
    color = $('#colorPicker').val();
    $(this).attr('style', 'background-color:' + color);

  })
}
