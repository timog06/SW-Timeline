var items = new vis.DataSet([
  // Areas
  {
    id: "A",
    content: "Period A",
    start: "0014-01-16", // Keep the year positive
    end: "0024-01-22",
    type: "background",
    abyBby: "ABY" // ABY means positive year display
  },
  {
    id: "B",
    content: "Period B",
    start: "0013-01-25", // Internal positive year
    end: "0016-01-30",
    type: "background",
    abyBby: "BBY" // BBY means negative year display
  },

  // Items
  { id: 1, content: "item 1 <br> start", start: "0001-01-23", abyBby: "ABY" },
  { id: 2, content: "item 2", start: "0003-01-01", abyBby: "ABY" },
  { id: 3, content: "item 3", start: "0010-01-01", abyBby: "ABY" },
  { id: 4, content: "item 4", start: "0012-01-01", end: "0013-01-01", abyBby: "ABY" },
  { id: 5, content: "item 5", start: "0014-01-01", type: "point", abyBby: "ABY" },
  { id: 6, content: "item 6", start: "0024-01-01", abyBby: "ABY" },
  { id: 7, content: "item 7", start: "-001000-11-31", abyBby: "BBY" },
]);

var container = document.getElementById("visualization");
var options = {
    start: "0000-01-01",
    end: "0025-01-01",
    editable: false,
    showCurrentTime: false,
    height: '300px'
};

var timeline = new vis.Timeline(container, items, options);

// Add a custom time bar
var customTimeId = 'customTimeId';
timeline.addCustomTime(new Date(), customTimeId);

var customDate = new Date('0050-06-15');
timeline.setCustomTime(customDate, customTimeId);

// Event details elements
var eventDetails = document.getElementById("event-details");
var eventTitle = document.getElementById("event-title");
var eventDate = document.getElementById("event-date");
var eventDescription = document.getElementById("event-description");

/// Click event handler
timeline.on('select', function (properties) {
    if (properties.items.length > 0) {
        var selectedItem = items.get(properties.items[0]);

        eventTitle.textContent = selectedItem.content;

        var date = new Date(selectedItem.start);
        var year = date.getFullYear();

        // Adjust the year based on abyBby property
        var formattedDate;
        if (selectedItem.abyBby === "ABY") {
            formattedDate = year + " ABY";
        } else if (selectedItem.abyBby === "BBY") {
            formattedDate = year + " BBY";
        }

        eventDate.textContent = formattedDate;
        eventDescription.textContent = selectedItem.description || "No description available.";

        eventDetails.classList.remove("hidden");
    } else {
        eventDetails.classList.add("hidden");
    }
});
