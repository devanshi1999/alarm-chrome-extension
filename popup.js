const time=document.getElementById('time');
const name=document.getElementById('name');
const set=document.getElementById('set');
const info=document.getElementById('info');

document.addEventListener('DOMContentLoaded', function () {
set.addEventListener('click',function(e) {

	var t=time.value;
	var n=name.value;

	var date = new Date(t);
	var milliseconds = date.getTime(); 

	console.log(milliseconds,Date.now());

	const params = {
			when: milliseconds
	}

	chrome.alarms.create(n,params);

});

info.addEventListener('click', function(e) {

	chrome.alarms.getAll(function(alarms) {

		console.log(alarms);

	});

});
});