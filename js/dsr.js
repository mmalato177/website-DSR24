$(document).ready(function () {
	AOS.init({
		// Global settings:
		disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		animatedClassName: 'aos-animate', // class applied on animation
		useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
		disableMutationObserver: false, // disables automatic mutations' detections (advanced)
		// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
		offset: 0, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 400, // values from 0 to 3000, with step 50ms
		easing: 'ease', // default easing for AOS animations
		once: true, // whether animation should happen only once - while scrolling down
		mirror: false, // whether elements should animate out while scrolling past them
		anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
	});
});



document.addEventListener("scroll", function () {
	const navbar = document.querySelector("nav.navbar");

	if (window.scrollY > 100) {
		navbar.classList.add("nav-scrolled");
	} else {
		navbar.classList.remove("nav-scrolled");
	}
});

/*******************************/
/******  BRANDS SLIDER ******/
/*******************************/

const track = document.querySelector(".brands-track");
const dots = document.querySelectorAll(".dot");

const STEP = 320; 

dots.forEach(dot => {
	dot.addEventListener("click", () => {
		const step = dot.dataset.step;

		track.style.transform = `translateX(-${STEP * step}px)`;

		dots.forEach(d => d.classList.remove("active"));
		dot.classList.add("active");
	});
});

// Portfolio Filter
const portfolioFilters = document.querySelectorAll(".portfolio-filters button");
const portfolioItems = document.querySelectorAll(".portfolio-item");

portfolioFilters.forEach(filter => {
	filter.addEventListener("click", () => {
		// Remove active class from all buttons
		portfolioFilters.forEach(btn => {
			btn.classList.remove("active", "btn-primary");
			btn.classList.add("btn-outline-secondary");
		});

		// Add active class to clicked button
		filter.classList.add("active", "btn-primary");
		filter.classList.remove("btn-outline-secondary");

		// Get filter category
		const category = filter.dataset.filter;

		// Filter items
		portfolioItems.forEach(item => {
			if (category === "all" || item.dataset.category === category) {
				item.style.display = "block";
			} else {
				item.style.display = "none";
			}
		});
	});
});

// Video Modal - Stop video when modal closes
const videoModal = document.getElementById('videoModal');
const videoIframe = document.getElementById('videoIframe');
const videoUrl = 'https://www.youtube.com/embed/yln99sC_okY'; // Formato embed

if (videoModal) {
	videoModal.addEventListener('show.bs.modal', function () {
		videoIframe.src = videoUrl + '?autoplay=1';
	});

	videoModal.addEventListener('hide.bs.modal', function () {
		videoIframe.src = '';
	});
}

// Accessibility Menu

document.addEventListener("DOMContentLoaded", () => {
	const toggleBtn = document.getElementById("accessibility-toggle");
	const menu = document.getElementById("accessibility-menu");
	const closeBtn = document.getElementById("close-menu");
	const content = document.getElementById("main-content");

	/* Reset button */
	document.getElementById('reset-btn').addEventListener('click', function (e) {
		e.preventDefault();
		resetAll();
	});

	function resetAll() {
		content.classList.remove("high-contrast", "invert-colors", "bw");
		fontSize = 16;
		content.style.fontSize = fontSize + "px";
	}

	/*get initial font size*/
	let fontSize = parseFloat(getComputedStyle(content).fontSize);

	/* Open menu */
	toggleBtn.addEventListener("click", () => {
		menu.classList.add("open");
		toggleBtn.style.opacity = "0";
		toggleBtn.style.pointerEvents = "none";
	});

	/* Close menu */
	closeBtn.addEventListener("click", () => {
		menu.classList.remove("open");
		toggleBtn.style.opacity = "1";
		toggleBtn.style.pointerEvents = "auto";
	});

	/* Menu actions */
	menu.querySelectorAll("button[data-action]").forEach(btn => {
		btn.addEventListener("click", () => {
			const action = btn.dataset.action;

			switch (action) {
				case "high-contrast":
					content.classList.toggle("high-contrast");
					break;

				case "invert-colors":
					content.classList.toggle("invert-colors");
					break;

				case "bw":
					content.classList.toggle("bw");
					break;

				case "font-increase":
					fontSize += 2;
					content.style.fontSize = fontSize + "px";
					break;

				case "font-decrease":
					fontSize = Math.max(12, fontSize - 2);
					content.style.fontSize = fontSize + "px";
					break;
			}
		});

	});

});




