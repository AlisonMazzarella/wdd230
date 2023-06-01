var storageKey = 'lastVisitTime';
var currentTime = new Date().getTime();
var lastVisitTime = localStorage.getItem(storageKey);
if (lastVisitTime) {
    var daysDiff = Math.round((currentTime - parseInt(lastVisitTime)) / (1000 * 60 * 60 * 24));
    var visitInfo = document.getElementById('visitInfo');
    visitInfo.textContent = 'Days since your last visit: ' + daysDiff;
}
localStorage.setItem(storageKey, currentTime.toString());
