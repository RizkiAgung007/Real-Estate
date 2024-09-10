"use strict";
// Pada tampilan mobile
// Fungsi icon pada navbar untuk memunculkan menu
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
// Ketika icon diklik maka content pada navbar akan muncul
navToggler.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Memunculkan bagian header ketika cursor dilakukan scroll kebawah
const header = document.querySelector("[data-header]");
window.addEventListener("scroll", (e) => {
  header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});

// Menambahkan favorite icon
const favIcon = document.querySelectorAll("[data-toggle-btn]");

favIcon.forEach((favIcon) => {
  favIcon.addEventListener("click", () => {
    favIcon.classList.toggle("active");
  });
});
