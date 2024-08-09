

var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#', subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
  ]},
];

// Initialize main element
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

// Initialize top menu
const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100px";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// Create and add menu items
menuLinks.forEach((link, index) => {
  const a = document.createElement("a");
  a.href = link.href;
  a.innerText = link.text;
  a.dataset.index = index; // Store index
  topMenuEl.appendChild(a);
});

// Initialize submenu
const subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0"; // Hide initially


// Event listener for top menu
topMenuEl.addEventListener('click', function(event) {
  event.preventDefault();
  
  if (event.target.tagName !== 'A') return;

  const target = event.target;
  const index = target.dataset.index;
  const linkData = menuLinks[index];

  // Toggle active class
  topMenuEl.querySelectorAll('a').forEach(link => link.classList.remove('active'));
  target.classList.add('active');

  // Show/hide submenu
  if (linkData.subLinks) {
      buildSubMenu(linkData.subLinks);
      subMenuEl.style.top = '100px'; // Show submenu
  } else {
      subMenuEl.style.top = '0'; // Hide submenu
  }
});

// Build submenu function
function buildSubMenu(subLinks) {
  subMenuEl.innerHTML = ''; // Clear existing submenu
  subLinks.forEach(link => {
      const a = document.createElement('a');
      a.href = link.href;
      a.innerText = link.text;
      subMenuEl.appendChild(a);
  });
}

// Event listener for submenu
subMenuEl.addEventListener('click', function(event) {
  event.preventDefault();

  if (event.target.tagName === 'A') {
      console.log(event.target.textContent);
      subMenuEl.style.top = '0'; // Hide submenu
      document.querySelector('main h1').textContent = event.target.textContent;
  }
});




// var menuLinks = [
//     {text: 'about', href: '/about'},
//     {text: 'catalog', href: '#', subLinks: [
//       {text: 'all', href: '/catalog/all'},
//       {text: 'top selling', href: '/catalog/top'},
//       {text: 'search', href: '/catalog/search'},
//     ]},
//     {text: 'orders', href: '#' , subLinks: [
//       {text: 'new', href: '/orders/new'},
//       {text: 'pending', href: '/orders/pending'},
//       {text: 'history', href: '/orders/history'},
//     ]},
//     {text: 'account', href: '#', subLinks: [
//       {text: 'profile', href: '/account/profile'},
//       {text: 'sign out', href: '/account/signout'},
//     ]},
// ];



// const mainEl = document.querySelector("main");
// console.log(mainEl);

// mainEl.style.backgroundColor = "var(--main-bg)";

// const h1 = document.createElement("h1");
// h1.textContent = "DOM MANIPULATION";
// mainEl.appendChild(h1);

// mainEl.classList.add("flex-ctr");
// const topMenuEl = document.getElementById("top-menu");
// topMenuEl.style.height = "100%";
// topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
// topMenuEl.classList.add("flex-around");

// menuLinks.forEach((link)=>{
// let tab = document.createElement('a');
// tab.setAttribute("href","link.href");
// tab.textContent = link.text;
// topMenuEl.appendChild(tab);

// })

// const subMenuEL = document.getElementById('sub-menu')
// subMenuEL.style.height="100%";
// subMenuEL.style.backgroundColor= "var(--sub-menu-bg)";
// subMenuEL.classList.add('flex-around');
// subMenuEL.style.position="absolute";
// subMenuEL.style.top="0";


// const topMenuLinks = document.getElementsByTagName('a');
// topMenuEl.addEventListener('click', (e)=>{
// e.preventDefault();
// if (e.target.tagName !== 'A') {
//   return; 
// }
// console.log(e.target.textContent); 

// const target = e.target;
//     const index = target.dataset.index;
//     const linkData = menuLinks[index];

// topMenuEl.querySelectorAll('a').forEach((i) =>{
//   i.classList.remove('active')
// })
// target.classList.add('active')




// if(linkData.subLinks){
//   buildSubMenu(linkData.subLinks);
//   subMenuEL.style.top='100px'
// }else{
//   subMenuEL.style.top='0'
// }

// });

// function buildSubMenu(subLinks){
//   subMenuEL.innerHTML='';
//   subLinks.forEach((i)=>{
//     const a = document.createElement('a');
//     a.href=i.href;
//     a.innerText=i.text;
//     subMenuEL.appendChild(a);
//   })
// }