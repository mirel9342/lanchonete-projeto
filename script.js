const { createWriteStream } = require("fs");
const { createInterface } = require("readline");

let navbar = document.querySelector('navbar');

document.querySelector('#menu-btn').onclick =() => {
    navbaar.classList.toggle('active');
    searchForm.classList.remove('active');
    createWriteStream.classList.remove('active');

}
let searchForm = document.querySelector('.search-form');

document.querySeletor('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    createWriteStream.classList.remove('active');
}
let catItem = document.querySelector('.cart-items-container');
const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})