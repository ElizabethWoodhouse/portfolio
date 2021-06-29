import { contact, projects, homePage, notFound } from './pages/index';

//directory of routes to pages
let routes = {
	'/': homePage,
	'/projects': projects,
	'/contact': contact,
	'/404': notFound,
};

//update page based on the current page address
//window.location.pathname => gets current page address
function pageUpdater() {
	let pathName = window.location.pathname;
	//update the content div with page information based on route selected
	let contentDiv = document.querySelector('#content');
	//if route in the object then show 404 page
	contentDiv.innerHTML =
		routes[pathName] === undefined ? routes['/404'] : routes[pathName];
}

//window.history.pushState() => manually adds currentPages url to the users nav history
const onNav = (pathName) => {
	window.history.pushState({}, pathName, window.location.origin + pathname);
	pageUpdater();
};

//window.onpopstate updates the state the previous page
//popstate dispatched to window each time the active history entry changes between two history entries
//popstate event is only triggered by performing a browser action, such as clicking on the back button (or calling history.back() in JavaScript)
window.onpopstate = () => {
	pageUpdater();
};
