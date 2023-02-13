function dark_light(){
    var SW = document.getElementById("sw")
    var logo = document.getElementById("logo")
    var icon = document.getElementById("icon-SW")
    var icon2 = document.getElementById("iconGitH")
    var icon3 = document.getElementById("iconLinkI")
    var icon4 = document.getElementById("iconIg")

    var button = document.getElementById("sw");
            var backgroundChanged = false;
            button.addEventListener("click", function() {
            var css = document.styleSheets[0];
            for (var i = 0; i < css.cssRules.length; i++) {
                if (css.cssRules[i].selectorText === "body::after") {
                var rule = css.cssRules[i];
                if (backgroundChanged) {
                    document.body.classList.toggle("light-mode");
                    rule.style.backgroundImage = "url('../images/bg-night.jpg')";
                    icon.src = "images/moon-white.png"
                    logo.src = "images/logo-white.png"
                    icon2.src = "images/github-white.png"
                    icon3.src = "images/linkedin-white.png"
                    icon4.src = "images/instagram-white.png"

                } else {
                    document.body.classList.toggle("light-mode");
                    rule.style.backgroundImage = "url('../images/bg-day.jpg')";
                    icon.src = "images/moon-black.png"
                    logo.src = "images/logo-black.png"
                    icon2.src = "images/github-black.png"
                    icon3.src = "images/linkedin-black.png"
                    icon4.src = "images/instagram-black.png"
                }
                backgroundChanged = !backgroundChanged;
                break;
                }
            }
            });
}