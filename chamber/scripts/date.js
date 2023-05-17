document.addEventListener('DOMContentLoaded', function() {
    const currentDateContainer = document.getElementById('currentDate');
    const currentDate = new Date();
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString(undefined, options);
    
    if (currentDate.getDay() === 1 || currentDate.getDay() === 2) {
        const localizedDay = currentDate.toLocaleDateString(undefined, { weekday: 'long' });
        formattedDate += `\n🤝🏼 Come join us for the chamber meet and greet ${localizedDay} at 7:00 p.m.`;
    }
    
    currentDateContainer.innerText = formattedDate;
});
