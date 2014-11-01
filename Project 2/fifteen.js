//INFO 2180 Dynamic Web Development I Project 2
//Due Friday, 31st October, 2014
//Author Kimberley McDowell (411000229)


//Function to set the puzzle's background
function setPuzzleBackground()
{

	var divArray = new Array(); //array to hold all the divs (puzzlepieces)
	var puzzlePiece = document.getElementById("puzzlearea").getElementById("div");

	for(var counter = 0; counter < puzzlePiece.length; counter++)
	{
		divArray[counter] = puzzlePiece[counter];
	}

	//First row of puzzle pieces
	divArray[0].style.backgroundPosition = '0px -0px';
	divArray[1].style.backgroundPosition = '-100px 0px';
	divArray[2].style.backgroundPosition = '-200px 0px';
	divArray[3].style.backgroundPosition = '-300px 0px';

	//Second row of puzzle pieces
	divArray[4].style.backgroundPosition = '0px -96px';
	divArray[5].style.backgroundPosition = '-96px -96px';
	divArray[6].style.backgroundPosition = '-192px -96px';
	divArray[7].style.backgroundPosition = '-200px -96px';

	//Third row of puzzle pieces
	divArray[8].style.backgroundPosition = '0px -192px';
	divArray[9].style.backgroundPosition = '-96px -192px';
	divArray[10].style.backgroundPosition = '-192px -192px';
	divArray[11].style.backgroundPosition = '-200px -192px';

	//Fourth row of puzzle pieces
	divArray[12].style.backgroundPosition = '0px -200px';
	divArray[13].style.backgroundPosition = '-96px -200px';
	divArray[14].style.backgroundPosition = '-192px -200px';

}


//Function to set up the puzzle board and align the puzzle pieces correctly in the right order
function setPieces()
{
	var puzzlePiece = document.getElementById("puzzlearea").getElementsByTagName("div");
	
	var pos1 = 0;
	var pos2 = 0;
	var pos3 = 0;
	var pos4 = 0;
	
	var count = 1;
	var space = 0;
		
	for(var counter = 0; counter < puzzlePiece.length; counter++)
	{
	
	    if(counter <= 3)
	   	{
	   		var div = puzzlePiece[counter];
	   		div.className =  "puzzlepiece";
	   		div.style.left= (pos1) + 'px';
	   		pos1 = pos1 + 96;
	   	}

	   	else if(counter > 3 && counter <= 7 )
	    {
	    	space = 96;
	    	pos1 = 0;
	    	var div = puzzlePiece[counter];
	   		div.className =  "puzzlepiece";
	   		div.style.top = (space) + 'px';
	   		div.style.left =  (pos2)+ 'px';
	    	pos2 = pos2 + 96;
	    }
	    
	   	else if(counter > 7 && counter <= 11)
	    {
	    	space = 96 * 2;
	    	pos1 = 0;
	    	var div = puzzlePiece[counter];
	    	div.className =  "puzzlepiece";
	    	div.style.top = (space) + 'px';
	    	div.style.left =  (pos3)+ 'px';
	    	pos3 = pos3 + 96;
	    }

	   	else
	   	{
	   		space = 96 * 3;
	   		pos1 = 0;
	   		var div = puzzlePiece[counter];
	   		div.className =  "puzzlepiece";
	   		div.style.top = (space) + 'px';
	   		div.style.left =  (pos4)+ 'px';
	   		pos4 = pos4 + 96;
	   	}

	}

}

//Function to scramble the puzzle pieces and randomize the numbers
function scramble()
{

}

window.onload = function()
{
	setPieces();
	setPuzzleBackground();
};
	