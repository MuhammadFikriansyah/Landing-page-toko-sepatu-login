const navbarNav = document.querySelector(".navbar-nav");
const menu = document.querySelector("#menu3");
const searchbutton = document.querySelector("#tombol-search");

// Menu Click
menu.onclick = (e) => {
  e.preventDefault();
  navbarNav.classList.toggle("active");
};

// Click Outside Menu dan Search
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!searchbutton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// Efek perpindahan halus ketika mengklik link navbar
const navbarLinks = document.querySelectorAll(".navbar-nav a");

navbarLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetSection = document.querySelector(link.getAttribute("href"));

    // Menghentikan aksi bawaan tautan navbar
    event.preventDefault();

    navbarNav.classList.remove("active");

    // Menggulirkan ke elemen target dengan efek perpindahan halus
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Toggle Untuk Search Icon
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#tombol-search").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Product Section JS
const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;

let isDragging = false,
  startX,
  startScrollLeft;

// Menambahkan addEventListener untuk mengaktifkan button arrow
arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  // Merekam posisi awal kursor dan posisi scroll dari carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return; // Jika isDragging bernilai false, maka berhenti eksekusi dari titik ini.
  // Mengupdate posisi scroll pada carousel berdasarkan pergerakan kursor.
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

/* Product Img */
const productImg3 = document.querySelector('img[src="img/Puma.png"]');
productImg3.style.width = "160px";
productImg3.style.height = "auto";

const productImg1 = document.querySelector('img[src="img/Vans Gilber.png"]');
productImg1.style.width = "180px";
productImg1.style.height = "auto";

const productImg2 = document.querySelector('img[src="img/Vans Gilber.png"]');
productImg2.style.transform = "scaleX(-1)";

const productImg4 = document.querySelector(
  'img[src="img/Nike_Air_Force_1_Low__07_LV8_Double_Swoosh_Olive_Gold_Black.png"]'
);
productImg4.style.transform = "scaleX(-1)";

/* Footer Button */
const backToTopButton = document.getElementById("backToTopBtn");

// Fungsi untuk menggulir ke atas halaman
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Menambahkan event listener untuk tombol "Back To Top"
backToTopButton.addEventListener("click", scrollToTop);

/* Footer Company*/
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    // Efek Halus
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});

/* Button Explore Now */
var exploreButton = document.getElementById("explore");

exploreButton.addEventListener("click", function (event) {
  event.preventDefault();

  var target = exploreButton.getAttribute("href");

  document.querySelector(target).scrollIntoView({
    behavior: "smooth",
  });
});

/* Button Send Contact */
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Memeriksa apakah semua input diberi nilai
    var firstname = document.querySelector('input[name="first-name"]');
    var lastname = document.querySelector('input[name="last-name"]');
    var email = document.querySelector('input[name="email"]');
    var message = document.querySelector('textarea[name="message"]');

    if (
      firstname.value.trim() === "" ||
      lastname.value.trim() === "" ||
      email.value.trim() === "" ||
      message.value.trim() === ""
    ) {
      // Menampilkan pesan error jika ada input yang kosong
      alert("Please fill in all required fields.");
    } else {
      // Menampilkan pop-up konfirmasi jika semua input terisi
      alert("Berhasil Terkirim");
      form.reset(); // Mengosongkan formulir setelah pengiriman berhasil
    }
  });
});

// Product Button Buy Now
document.addEventListener("DOMContentLoaded", function () {
  const buyNowButtons = document.querySelectorAll(".buy-now-button");
  const modal = document.querySelector(".modal");
  const modalContent = document.querySelector(".modal-content");
  const closeModalButton = document.querySelector(".close-modal-button");

  buyNowButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const description = button.getAttribute("data-description");
      modalContent.querySelector("p").textContent = description;
      modal.style.display = "block";
    });
  });

  closeModalButton.addEventListener("click", function () {
    modal.style.display = "none";
  });
});

const loginButton = document.getElementById("tombol-login");
const loginForm = document.getElementById("login-form-element");
const overlay = document.getElementById("overlay");

loginButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (loginForm.style.display === "block") {
    loginForm.style.display = "none";
    overlay.style.display = "none";
  } else {
    loginForm.style.display = "block";
    overlay.style.display = "block";
  }
});

const closeButton = document.getElementById("closed");

closeButton.addEventListener("click", function () {
  loginForm.style.display = "none";
  overlay.style.display = "none";
});

overlay.addEventListener("click", function () {
  loginForm.style.display = "none";
  overlay.style.display = "none";
});
