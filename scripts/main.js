function imgHover(){
    var myImage = document.getElementById("logo");
        myImage.onmouseover = mouseOver;
        myImage.onmouseout = mouseOut;
        
        function mouseOver() { 
        myImage.src = "images/logo-black.png";
        }
        function mouseOut() { 
        myImage.src = "images/logo-white.png";
    }
}