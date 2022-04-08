const hamburger = document.querySelector(".hamburger"),
	menu = document.querySelector(".menu"),
	close = document.querySelector(".menu_close");

hamburger.addEventListener("click", () => {
	menu.classList.add("active");
});

close.addEventListener("click", () => {
	menu.classList.remove("active");
});

const counters = document.querySelectorAll(".statistic_interest"),
	lines = document.querySelectorAll(".statistic_scale span");

counters.forEach((item, i) => {
	lines[i].style.width = item.innerHTML;
});
