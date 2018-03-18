function liveTime(){
	
	var heading = React.createElement('h1', {}, 'Help Queue');
	var ticketLocation = React.createElement('h3', {}, '3a');
	var ticketName = React.createElement('h3', {}, 'Thato & Haley');
	var ticketIssue = React.createElement('h3', {}, "Firebase won't save record");
	var clock = React.createElement('h2', {}, `It is ${new Date().toLocaleTimeString()}`);
	var app = React.createElement('div', {}, heading, ticketLocation, ticketName, ticketIssue);
	
	ReactDOM.render(
		app,
		document.getElementById('react-app-root')
	);
}

setInterval(liveTime, 1000);