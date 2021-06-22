import { contact, projects, homePage } from './pages/index.js ';

//directory of routes to pages
let routes = {
	'/home': homePage,
	'/projects': projects,
	'/contact': contact,
	'/404': notFound,
};

//update the content div with page information based on route selected
//window.location.pathname => gets current page address
let contentDiv = document.querySelector('#content');
contentDiv.innerHTML = `<p>hey</p>`;
// routes[window.location.pathname];
// console.log(contentDiv);
