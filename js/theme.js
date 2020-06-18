// preloader
window.addEventListener('load', function () {
	$(".page-preloader")[0].className += ' exit';
});

// theme toggle button
let themeToggle = $('#theme-toggle')[0];

// variable controlling dark mode
let isDark = false;

// items affected by mode change
let navbar = $(".navbar-custom")[0];
let header = $("header")[0];
let about = $("#about")[0];
let portfolio = $("#portfolio")[0];
let socialize = $(".socialize")[0];
let talk = $(".talk")[0];
let footer = $("footer")[0];

// automatic darkmode every evening
let date = new Date();
if (date.getHours() > 17 && date.getHours() <= 23) {
	isDark = true;
	applyMode("dark");
} else if (date.getHours() >= 00 && date.getHours() < 06) {
	isDark = true;
	applyMode("dark");
} else {
	isDark = false;
	applyMode();
}

// toggle theme
themeToggle.onclick = function () {
	isDark = !isDark;
	isDark === true ? applyMode("dark") : applyMode();
}

// apply theme to elements
function applyMode(theme = "light") {
	if (theme !== "dark" && theme !== "light") theme = "light";
	if (theme === "dark") {
		document.body.style = "background: #000 !important;  color: #ccc !important;";
		header.style = "background: #000;  color: #ccc !important;";
		navbar.style = "background: rgba(22, 22, 22, 0.8); box-shadow: 0px 1px 30px rgb(0, 0, 0);";
		about.style = "background: #2a2a2a;  color: #ccc !important;";
		for (i = 0; i < $(".skill-panel").length; i++) {
			$(".skill-panel")[i].style = "background: #000; color: #ccc; border: 1px solid #222; box-shadow: 0px 0px 5px #444;";
		}
		portfolio.style = "background: #000;  color: #ccc !important; z-index: 100 !important;";
		talk.style = "background: #2a2a2a;  color: #ccc !important; z-index: 0 !important;";
		socialize.style = "background: #2a2a2a;  color: #ccc !important;";
		footer.style = "background: #2a2a2a;  color: #ccc !important;";
		for (i = 0; i < $(".modal-content").length; i++) {
			$(".modal-content")[i].style = "background: #000; color: #ccc; border: 1px solid #222; box-shadow: 0px 0px 5px #444;";
		}
		$(".btn-github-inverse")[0].style = "color: white !important; border: 1px solid white;";
		themeToggle.innerText = "😎";
	} else if (theme === "light") {
		document.body.style = "background: #fff !important;  color: #rgb(107, 107, 107) !important;";
		header.style = "background: #fff;  color: #rgb(107, 107, 107) !important;";
		navbar.style = "background: rgba(255, 255, 255, 0.9); box-shadow: 0px 1px 30px rgba(124, 124, 124, 0.3);";
		about.style = "background: rgb(117, 124, 129);  color: #fff !important;";
		for (i = 0; i < $(".skill-panel").length; i++) {
			$(".skill-panel")[i].style = "background: #fff; color: #233140; border: none; box-shadow: none;";
		}
		portfolio.style = "background: #fff;  color: #black !important; z-index: 100 !important;";
		talk.style = "background: #fff;  color: #000 !important; z-index: 0 !important;";
		socialize.style = "background: #fff;  color: #000 !important;";
		footer.style = "background: #fff;  color: #ccc !important;";
		for (i = 0; i < $(".modal-content").length; i++) {
			$(".modal-content")[i].style = "background: #fff; color: #000;";
		}
		$(".btn-github-inverse")[0].style = "color: black; border: 1px solid black;";
		themeToggle.innerText = "🌒";
	}
}
