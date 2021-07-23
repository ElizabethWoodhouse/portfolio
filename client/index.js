import { contact, projects, homePage, notFound } from './pages/index';

//directory of routes to pages
let routes = {
	'': homePage,
	'#projects': projects,
	'#contact': contact,
	'#404': notFound,
};

function pageUpdater(pathName) {
	let contentDiv = document.querySelector('#content');
	contentDiv.innerHTML =
		routes[pathName] === undefined ? routes['#404'] : routes[pathName];
	//if route is not in object then show 404 page
}

//window.history.pushState() => manually adds currentPages url to the users nav history
const onNav = (action) => {
	console.log(action, 'hey');
	if (!action.backtrack) {
		console.timeLog(action, 'action');
		let pathName = window.location.hash;
		window.history.pushState(
			{ pathName },
			pathName,
			window.location.origin + pathName
		);
		pageUpdater(pathName);
	} else {
		pageUpdater(action.state);
		console.log(action.state, 'in on Nav');
	}
};

window.onpopstate = (evt) => {
	let historyEvent = { backtrack: true, state: evt.state };
	onNav(historyEvent);
};

window.addEventListener('hashchange', onNav);

// document.querySelectorAll('.nav-item').forEach((item) => {
// 	item.addEventListener('onclick', onNav);
// });
