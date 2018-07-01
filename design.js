// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$("#submit").on('click', makeGrid);
$('#pixelCanvas').on("click", "td", addColor)

let rows, columns, table, mainTable;


function makeGrid(e) {

    e.preventDefault();


    //variable declaration
      //create table
     table = $('#pixelCanvas');

      //create rows
    rows = $("#input_height").val();

      //create columns
     columns= $("#input_width").val();
    mainTable = "";

    //clear table and create new
    while(table.empty()){

    
    //loop to create table
    for (let i= 1; i <= rows; i++) {

        mainTable += "<tr>";
        for (let j = 1; j <= columns; j++) {
            mainTable += '<td></td>'
        }
        mainTable += "</tr>";
    }
    return table.append(mainTable);
}}

function addColor() {
    let color = $('#colorPicker').val();
    $(this).css("background-color", color);
}