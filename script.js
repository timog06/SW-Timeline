var items = new vis.DataSet([
  // Areas
  {
    id: "A",
    content: "Period A",
    start: "0014-01-16",
    end: "0024-01-22",
    type: "background",
  },
  {
    id: "B",
    content: "Period B",
    start: "0013-01-25",
    end: "0016-01-30",
    type: "background",
  },

  // Items
  { id: 1, content: "item 1 <br> start", start: "0001-01-23" },
  { id: 2, content: "item 2", start: new Date(-3, 11, 26) },
  { id: 3, content: "item 3", start: "0010-01-01" },
  { id: 4, content: "item 4", start: "0012-01-01", end: "0013-01-01" },
  { id: 5, content: "item 5", start: "0014-01-01", type: "point" },
  { id: 6, content: "item 6", start: "0024-01-01" },
  { id: 7, content: "item 7", start: new Date(-100, 11, 31) },
]);

var container = document.getElementById("visualization");
var options = {
  start: new Date(-3, 11, 26),
  end: "0020-01-01",
  editable: false,
  showCurrentTime: false,
  height: "300px",
};

var timeline = new vis.Timeline(container, items, options);

// Add a custom time bar
var customTimeId = "customTimeId";
timeline.addCustomTime(new Date(), customTimeId);

var customDate = new Date("0050-01-01");
timeline.setCustomTime(customDate, customTimeId);

// Event details elements
var eventDetails = document.getElementById("event-details");
var eventTitle = document.getElementById("event-title");
var eventDate = document.getElementById("event-date");
var eventDescription = document.getElementById("event-description");

/// Click event handler
timeline.on("select", function (properties) {
  if (properties.items.length > 0) {
    var selectedItem = items.get(properties.items[0]);

    eventTitle.textContent = selectedItem.content;

    var date = new Date(selectedItem.start);
    var year = date.getFullYear();

    // Convert the date to BBY/ABY format
    var date = new Date(selectedItem.start);
    var year = date.getFullYear();
    var formattedDate;

    if (year > 0) {
      formattedDate = year + " ABY";
    } else {
      formattedDate = Math.abs(year) + " BBY";
    }

    eventDate.textContent = formattedDate;
    eventDescription.textContent =
      selectedItem.description || "No description available.";

    eventDetails.classList.remove("hidden");
  } else {
    eventDetails.classList.add("hidden");
  }
});
