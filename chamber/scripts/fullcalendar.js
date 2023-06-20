var eventElements = document.getElementsByClassName('event');

for (var i = 0; i < eventElements.length; i++) {
  var eventElement = eventElements[i];
  eventElement.addEventListener('mouseenter', enlargeEvent);
  eventElement.addEventListener('mouseleave', shrinkEvent);
}

function enlargeEvent() {
  this.style.transform = 'scale(1.1)';
}

function shrinkEvent() {
  this.style.transform = 'scale(1)';
}

document.addEventListener('DOMContentLoaded', function() {
  var calendarBody = document.getElementById('calendar-body');

  var currentDate = new Date();

  var month = 6;
  var year = 2023;

  var firstDay = new Date(year, month, 1);

  var totalDays = new Date(year, month + 1, 0).getDate();

  var startingPos = firstDay.getDay();

  var day = 1;

  for (var row = 0; row < 6; row++) {
    var newRow = document.createElement('tr');

    for (var col = 0; col < 7; col++) {
      var newCell = document.createElement('td');

      if ((row === 0 && col < startingPos) || day > totalDays) {
        newCell.textContent = '';
      } else {
        newCell.textContent = day;

        var event = findEvent(year, month + 1, day);
        if (event) {
          var eventElement = document.createElement('div');
          eventElement.className = 'event';
          eventElement.textContent = event.title;

          var eventDescription = document.createElement('div');
          eventDescription.className = 'event-description';
          eventDescription.textContent = event.description;

          eventElement.appendChild(eventDescription);
          newCell.appendChild(eventElement);
        }

        day++;
      }

      newRow.appendChild(newCell);
    }

    calendarBody.appendChild(newRow);
  }
});

function findEvent(year, month, day) {
  var events = [
    {
      title: 'Independence Day Celebration',
      start: '2023-07-04',
      description: 'Join us on July 4th at the Peachtree City Park for a spectacular Independence Day celebration. Enjoy live music, delicious food vendors, thrilling fireworks display, and family-friendly activities. It\'s an event you won\'t want to miss!'
    },
    {
      title: 'Summer Music Festival',
      start: '2023-07-10',
      end: '2023-07-12',
      description: 'Experience the Summer Music Festival with a lineup of renowned artists and bands. It\'s three days of non-stop music and entertainment for music lovers of all ages!'
    },
    {
      title: 'Peachtree City Farmers Market',
      start: '2023-07-15',
      description: 'Visit the Peachtree City Farmers Market and explore a wide variety of fresh produce, local crafts, and artisanal products. Support local vendors and enjoy the vibrant community atmosphere.'
    },
    {
      title: 'Outdoor Movie Night',
      start: '2023-07-22',
      description: 'Bring your blankets and chairs to enjoy a free outdoor movie night under the stars. Snacks and beverages will be available for purchase. Fun for the whole family!'
    },
    {
      title: 'Summer Fun Run',
      start: '2023-07-29',
      description: 'Participate in the Summer Fun Run and experience a scenic route through Peachtree City. Lace up your running shoes and join the community for a morning of fitness and fun!'
    },
    {
      title: 'Ribbon Cutting Ceremony - Grand Opening of the Diamond Shack',
      start: '2023-07-06T13:00:00',
      description: 'Join us for the Ribbon Cutting Ceremony celebrating the grand opening of the Diamond Shack. Be the first to explore our exquisite collection of diamonds and jewelry!'
    }
  ];

  var eventDate = new Date(year, month - 1, day);

  for (var i = 0; i < events.length; i++) {
    var startDate = new Date(events[i].start);
    var endDate = new Date(events[i].end);

    if (
      eventDate.toDateString() === startDate.toDateString() ||
      (endDate && eventDate >= startDate && eventDate <= endDate)
    ) {
      return events[i];
    }
  }

  return null;
}