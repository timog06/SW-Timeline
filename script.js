fetch("descriptions.json")
  .then((response) => response.json())
  .then((descriptions) => {
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
        content: "Era of the Empire",
        start: new Date(-19, 10, 1),
        end: "0005-01-01",
        type: "background",
        style: "color: red; background-color: pink;",
      },

      // Items
      {
        id: 1,
        content: "Fall of the Galactic Republic",
        start: new Date(-19, 9, 1),
        description: descriptions["1"],
      },
      {
        id: 2,
        content: "Founding of the Galactic Empire",
        start: new Date(-19, 10, 1),
        description: descriptions["2"],
      },
      { id: 3, content: "item 3", start: "0010-01-01" },
      { id: 4, content: "item 4", start: "0012-01-01", end: "0015-01-01" },
      { id: 5, content: "item 5", start: "0014-01-01", type: "point" },
      { id: 6, content: "item 6", start: "0024-01-01" },
      { id: 7, content: "item 7", start: new Date(-100, 11, 31) },
    ]);

    // Initialize Timeline
    var container = document.getElementById("visualization");
    var options = {
      start: new Date(-5, 1, 1),
      end: "0020-01-01",
      editable: false,
      showCurrentTime: false,
      height: "300px",
    };

    var timeline = new vis.Timeline(container, items, options);

    // Custom time bar
    var customTimeId = "customTimeId";
    timeline.addCustomTime(new Date(), customTimeId);

    var customDate = new Date("0050-01-01");
    timeline.setCustomTime(customDate, customTimeId);

    // Event elements
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
  })

  // Error when descriptions can't be loaded
  .catch((error) => {
    var errorBox = document.createElement("div");

    errorBox.style.backgroundColor = "red";
    errorBox.style.color = "white";
    errorBox.style.padding = "10px";
    errorBox.style.margin = "10px 0";
    errorBox.style.borderRadius = "5px";
    errorBox.style.textAlign = "center";
    errorBox.style.fontSize = "14px";

    errorBox.textContent = "Error loading the descriptions.";

    var container = document.getElementById("visualization");
    container.parentNode.insertBefore(errorBox, container);

    console.error("Error loading descriptions:", error);
  });
