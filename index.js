$(document).ready(function() {
    var turn = 'X';
    for (var i = 0; i < 9; i++) {
        $('#board').append('<div class="cell"></div>');
    }
//Appending the board ID in the HTML for when webpage is opened to add the cells
    $('.cell').click(function() {
        if ($(this).text() == '') {
            $(this).text(turn);
            turn = turn == 'X' ? 'O' : 'X';
            $('#turn').text(turn + "'s turn");
            checkWin();
        }
//Added to the class "cell" the function if the cell's text is empty, it's the turn of the x player, but if it the cell is filled with an X, it is O's turn and will input that into the "O's Turn", otherwise, it goes back to X's turn. Finally it runs the check win function.
    });
    $('#reset').click(function() {
        $('.cell').text('');
        turn = 'X';
        $('#turn').text(turn + "'s turn");
    });
//The reset ID then opens when clicked on the HTML "function", which then clears the cells to text '', and then resets the player's turn to X's turn.
    function checkWin() {
        var cells = $('.cell');
        var lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
//Check win gives the lines of the cells first.
        for (var i = 0; i < lines.length; i++) {
            if (
                $(cells[lines[i][0]]).text() != '' &&
                $(cells[lines[i][0]]).text() == $(cells[lines[i][1]]).text() &&
                $(cells[lines[i][1]]).text() == $(cells[lines[i][2]]).text()
            ) {
                alert($(cells[lines[i][0]]).text() + ' wins!');
                $('#reset').click();
            }
        }
//Then runs a for loop that will check if the text content of certain cells are equal and not empty. The loop first checks the lines array and adds to the lines each loop,
//it then checks if the text content of the cell is not an empty string. Then checks to see if the first, second, and third elements of the liens are equal, if they are equal
//it announces that the matching cells wins. If it hears the reset click, it will call the reset Id.
    }
});
