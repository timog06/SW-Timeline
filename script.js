var items = new vis.DataSet([

  // Areas
  {
    id: "A",
    content: "Period A",
    start: "2014-01-16",
    end: "2014-01-22",
    type: "background",
  },
  {
    id: "B",
    content: "Period B",
    start: "2014-01-25",
    end: "2014-01-30",
    type: "background",
    className: "negative",
  },

  // Items
  { id: 1, content: "item 1<br>start", start: "2014-01-23" },
  { id: 2, content: "item 2", start: "2014-01-18" },
  { id: 3, content: "item 3", start: "2014-01-21" },
  { id: 4, content: "item 4", start: "2014-01-19", end: "2014-01-24" },
  { id: 5, content: "item 5", start: "2014-01-28", type: "point" },
  { id: 6, content: "item 6", start: "2014-01-26" },
]);

var container = document.getElementById("visualization");
var options = {
start: "2014-01-10",
end: "2014-02-10",
editable: false,
showCurrentTime: false,
height: '300px'
};

var timeline = new vis.Timeline(container, items, options);

// Add a custom time bar
var customTimeId = 'customTimeId';
timeline.addCustomTime(new Date(), customTimeId);

var customDate = new Date('2014-01-20');
timeline.setCustomTime(customDate, customTimeId);


// Event details elements
var eventDetails = document.getElementById("event-details");
var eventTitle = document.getElementById("event-title");
var eventDate = document.getElementById("event-date");
var eventDescription = document.getElementById("event-description");

// Click event handler
timeline.on('select', function (properties) {
if (properties.items.length > 0) {
    var selectedItem = items.get(properties.items[0]);
    
    eventTitle.textContent = selectedItem.content;
    eventDate.textContent = selectedItem.start;
    eventDescription.textContent = selectedItem.description || "No description available.";
    
    eventDetails.classList.remove("hidden");
} else {
    eventDetails.classList.add("hidden");
}
});