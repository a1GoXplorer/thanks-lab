window.onload = function() {

//alert("JS is a go for launch, Capt.");

//create an objet which selects all the boxes by Id
  var boxes = {};
  boxes.box0 = document.getElementById("squareZero");
  boxes.box1 = document.getElementById("squareOne");
  boxes.box2 = document.getElementById("squareTwo");
  boxes.box3 = document.getElementById("squareThree");
  boxes.box4 = document.getElementById("squareFour");
  boxes.box5 = document.getElementById("squareFive");
  boxes.box6 = document.getElementById("squareSix");
  boxes.box7 = document.getElementById("squareSeven");
  boxes.box8 = document.getElementById("squareEight");
  boxes.box9 = document.getElementById("squareNine");
  boxes.box10 = document.getElementById("squareOneZero");
  boxes.box11 = document.getElementById("squareOneOne");
  var resetButton = document.getElementById("reset");

  //array of symbols
  var symbols = {"@":0,"$":0,"!":0,"?":0,"*":0,"%":0,"#":0,"{}":0}
  //empty object for each innerHTML ID
  var fillTheBoxes = {}
  //keeps track of how many rounds a player has gone w/o a solve
  var turn = 1;

//assignment of symbols
var assignSymbols = function(box) {
      
      for(var i = 0; i < box.length; i += 1)
      {

      	if (symbols["@"]=== 2)
      	{
           return true;
      	}
      		else
      	{
      		box.innerHTML = symbols[Math.floor(symbols.length * Math.random())];
      	}

      	if (symbols["$"]=== 2)
      		{
           return true;
      	}
      	else
      	{
      		box.innerHTML = symbols[Math.floor(symbols.length * Math.random())];
      	}

      	if (symbols["!"]=== 2)
      	{
      		return true;
      	}
      	else
      	{
      		box.innerHTML = symbols[Math.floor(symbols.length * Math.random())];
      	}

      	if (symbols["?"]=== 2)
      	{
      		return true;
      	}
      	else
      	{
      		box.innerHTML = symbols[Math.floor(symbols.length * Math.random())];
      	}
      	
      	if (symbols["*"]=== 2)
      	{
      		return true;
      	}
      	else
      	{
      		box.innerHTML = symbols[Math.floor(symbols.length * Math.random())];
      	}

      	if (symbols["%"]=== 2)
      	{
      		return true;
      	}
      	else
      	{
      		box.innerHTML = symbols[Math.floor(symbols.length * Math.random())];
      	}

      	if (symbols["#"]=== 2) 
      	{
            return true;
      	}
      	else
      	{
      		box.innerHTML = symbols[Math.floor(symbols.length * Math.random())];
      	}

      	if (symbols["{}"]=== 2)
      	{
      		return true;
      	}
      	else
      	{
      		box.innerHTML = symbols[Math.floor(symbols.length * Math.random())];
      	}
       
        	assignSymbols(boxes);
        
    }
};


//var checksMatchesarr



//reveals sign, checks for a match
 /*var playBox = function([arr], function(box) ) {
  for(var i = 0; i<boxes.length; i++) {
    checksMatches(boxes[i], i, boxes);
  };
};



var setClickHandler = function (box) {
    box.onclick = function () {
      playBox(box);
    }
  };
  for (var i = 0; i < 12; i += 1) {
    var box = boxes["box" + i];
    setClickHandler(box);
  }
 }











resetButton.onclick=function() {
  	document.location.reload(true);
  }

};