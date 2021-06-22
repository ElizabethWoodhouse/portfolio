import { contact, projects, homePage } from './pages/index.js ';

//directory of routes to pages
let routes = {
	'/': homePage,
	'/projects': projects,
	'/contact': contact,
	'/404': notFound,
};

//update the content div with page information based on route selected
//window.location.pathname => gets current page address
let contentDiv = document.querySelector('#content');
contentDiv.innerHTML = routes[window.location.pathname];
