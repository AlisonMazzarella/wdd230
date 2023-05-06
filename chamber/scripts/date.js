document.addEventListener('DOMContentLoaded', function() {
    var currentDateContainer = document.getElementById('currentDate');
    var currentDate = new Date();
    
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    var formattedDate = daysOfWeek[currentDate.getDay()] + ', ' + currentDate.getDate() + ' ' + months[currentDate.getMonth()] + ' ' + currentDate.getFullYear();
    
    currentDateContainer.innerText = formattedDate;
});
