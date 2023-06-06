document.addEventListener('DOMContentLoaded', function() {
    var currentDateContainer = document.getElementById('currentDate');
    var currentDate = new Date();
    
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = currentDate.toLocaleDateString(undefined, options);
    
    if (window.location.pathname === '/chamber/index.html' && (currentDate.getDay() === 1 || currentDate.getDay() === 2)) {
        const localizedDay = currentDate.toLocaleDateString(undefined, { weekday: 'long' });
        formattedDate += `\n🤝🏼 Come join us for the chamber meet and greet ${localizedDay} at 7:00 p.m.`;
    }
    
    currentDateContainer.innerText = formattedDate;
});
