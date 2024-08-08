

var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
];



const mainEl = document.querySelector("main");
console.log(mainEl);

mainEl.style.backgroundColor = "var(--main-bg)";

const h1 = document.createElement("h1");
h1.textContent = "DOM MANIPULATION";
mainEl.appendChild(h1);

mainEl.classList.add("flex-ctr");
const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

menuLinks.forEach((link)=>{
let tab = document.createElement('a');
tab.setAttribute("href","link.href");
tab.textContent = link.text;
topMenuEl.appendChild(tab);

})

const subMenuEL = document.getElementById('sub-menu')
subMenuEL.style.height="100%";
subMenuEL.style.backgroundColor= "var(--sub-menu-bg)";
subMenuEL.classList.add('flex-around');
subMenuEL.style.position="absolute";
subMenuEL.style.top="0";


