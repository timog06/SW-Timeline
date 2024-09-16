// Fetch and display quotes
fetch("quotes.json")
  .then((response) => response.json())
  .then((quotes) => {
    const quotesContainer = document.getElementById("quotes");
    let currentQuoteIndex = 0;

    function showNextQuote() {
      const currentQuote = quotes[currentQuoteIndex];
      quotesContainer.textContent = `"${currentQuote.quote}"`;
      const authorContainer = document.getElementById("quote-author");
      authorContainer.textContent = `- ${currentQuote.author}`;
    
      quotesContainer.style.opacity = 1;
      authorContainer.style.opacity = 1;
    
      setTimeout(() => {
        quotesContainer.style.opacity = 0;
        authorContainer.style.opacity = 0;
    
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    
        setTimeout(showNextQuote, 2000);
      }, 8000);
    }

    // Start the quote rotation
    showNextQuote();
  })
  .catch((error) => {
    console.error("Error loading quotes:", error);
  });

fetch("descriptions.json")
  .then((response) => response.json())
  .then((descriptions) => {
    var items = new vis.DataSet([
      // ------------------------------------------- Areas
      {
        id: "A",
        content: "High Republic Era",
        start: new Date(-500, 1, 1),
        end: new Date(-100, 12, 31),
        type: "background",
        style: "background-color: lightblue;",
      },
      {
        id: "B",
        content: "Regime of the Empire",
        start: new Date(-19, 10, 1),
        end: "0005-12-31",
        type: "background",
        style: "background-color: pink;",
      },
      {
        id: "C",
        content: "New Republic Era",
        start: "0005-01-01",
        end: "0034-12-31",
        type: "background",
        style: "background-color: lightblue;",
      },
      {
        id: "D",
        content: "Regime of the First Order",
        start: "0021-01-01",
        end: "0035-12-31",
        type: "background",
        style: "background-color: pink;",
      },
      {
        id: "E",
        content: "Old Republic Era",
        start: new Date(-25000, 1, 1),
        end: new Date(-1032, 1, 1),
        type: "background",
        style: "background-color: lightblue;",
      },

      // ------------------------------------------- Items

      // Year Zero
      {
        id: 0,
        content: "Battle of Yavin",
        start: "0000-01-01",
        description: descriptions["0"],
      },

      // Movies
      {
        id: 1,
        subgroup: "movies",
        content: "The Phantom Menace",
        start: new Date(-32, 1, 1),
        style: "background-color: yellow",
        description: descriptions[""],
        pic: "episode1.webp",
      },
      {
        id: 2,
        subgroup: "movies",
        content: "Attack of the Clones",
        start: new Date(-22, 1, 1),
        style: "background-color: yellow",
        description: descriptions[""],
        pic: "episode2.webp",
      },
      {
        id: 3,
        subgroup: "movies",
        content: "Revenge of the Sith",
        start: new Date(-19, 1, 1),
        style: "background-color: yellow",
        description: descriptions[""],
        pic: "episode3.webp",
      },
      {
        id: 4,
        subgroup: "movies",
        content: "A New Hope",
        start: "0000-01-01",
        style: "background-color: yellow",
        description: descriptions[""],
        pic: "episode4.webp",
      },
      {
        id: 5,
        subgroup: "movies",
        content: "The Empire Strikes Back",
        start: "0003-01-01",
        style: "background-color: yellow",
        description: descriptions[""],
        pic: "episode5.webp",
      },
      {
        id: 6,
        subgroup: "movies",
        content: "Return of the Jedi",
        start: "0004-01-01",
        style: "background-color: yellow",
        description: descriptions[""],
        pic: "episode6.webp",
      },
      {
        id: 7,
        subgroup: "movies",
        content: "The Force Awakens",
        start: "0034-01-01",
        style: "background-color: yellow",
        description: descriptions[""],
        pic: "episode7.webp",
      },
      {
        id: 8,
        subgroup: "movies",
        content: "The Last Jedi",
        start: "0034-12-31",
        style: "background-color: yellow",
        description: descriptions[""],
        pic: "episode8.webp",
      },
      {
        id: 9,
        subgroup: "movies",
        content: "The Rise of Skywalker",
        start: "0034-01-01",
        style: "background-color: yellow",
        description: descriptions[""],
        pic: "episode9.webp",
      },

      // Series
      {
        id: 17,
        content: "The Clone Wars",
        start: new Date(-22,1 ,1),
        end: new Date(-19,1 ,1),
        type: "range",
        description: descriptions[""],
        pic: "",
      },
      {
        id: 18,
        content: "The Bad Batch",
        start: new Date(-19,1 ,1),
        end: new Date(-18,1 ,1),
        type: "range",
        description: descriptions[""],
        pic: "",
      },
      {
        id: 19,
        content: "Rebels",
        start: new Date(-5,1 ,1),
        end: new Date(-1,1 ,1),
        type: "range",
        description: descriptions[""],
        pic: "",
      },
      {
        id: 20,
        content: "The Mandalorian",
        start: "0009-01-01",
        description: descriptions[""],
        pic: "",
      },
      {
        id: 21,
        content: "The Book of Boba Fett",
        start: "0009-01-01",
        description: descriptions[""],
        pic: "",
      },
      {
        id: 22,
        content: "Obi-Wan Kenobi",
        start: new Date(-9,1 ,1),
        description: descriptions[""],
        pic: "",
      },
      {
        id: 23,
        content: "Andor",
        start: new Date(-5,1 ,1),
        end: new Date(-1,1 ,1),
        type: "range",
        description: descriptions[""],
        pic: "",
      },
      {
        id: 24,
        content: "Ahsoka",
        start: "0009-01-01",
        description: descriptions[""],
        pic: "",
      },

      // Era Change
      {
        id: 10,
        content: "Fall of the Galactic Republic",
        start: new Date(-19, 9, 1),
        description: descriptions["10"],
        pic: "",
      },
      {
        id: 11,
        content: "Founding of the Galactic Empire",
        start: new Date(-19, 10, 1),
        description: descriptions["11"],
        pic: "",
      },
      {
        id: 12,
        content: "Formation of the modern Galactic Republic",
        start: new Date(-1032, 1, 1),
        description: descriptions["12"],
        pic: "",
      },
      {
        id: 25,
        content: "Public Announcement of the First Order",
        start: "0021-01-01",
        description: descriptions["12"],
        pic: "",
      },

      // Wars
      {
        id: 13,
        content: "The Clone Wars",
        start: new Date(-22, 1, 1),
        end: new Date(-19, 8, 1),
        type: "range",
        description: descriptions["13"],
        pic: "clone_wars.webp",
      },
      {
        id: 14,
        content: "New Sith Wars",
        start: new Date(-2000, 1, 1),
        end: new Date(-1000, 12, 31),
        type: "range",
        description: descriptions["14"],
      },

      // Battles
      {
        id: 15,
        content: "Battle of Exegol",
        start: "0035-01-01",
        description: descriptions["15"],
      },

      // Events
      {
        id: 16,
        content: "item 7",
        start: new Date(-100, 11, 31),
        description: descriptions["16"],
      },
    ]);

    // ------------------------------------------- Initialize Timeline
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

    // ------------------------------------------- Event elements
    var eventDetails = document.getElementById("event-details");
    var eventTitle = document.getElementById("event-title");
    var eventDate = document.getElementById("event-date");
    var eventDescription = document.getElementById("event-description");

    // Click event handler
    timeline.on("select", function (properties) {
      if (properties.items.length > 0) {
        var selectedItem = items.get(properties.items[0]);

        // Set the title and date for the selected item
        eventTitle.textContent = selectedItem.content;

        if (selectedItem.type === "range" && selectedItem.end) {
          var startYear = new Date(selectedItem.start).getFullYear();
          var endYear = new Date(selectedItem.end).getFullYear();

          var startFormattedDate =
            startYear >= 0 ? startYear + " ABY" : Math.abs(startYear) + " BBY";
          var endFormattedDate =
            endYear >= 0 ? endYear + " ABY" : Math.abs(endYear) + " BBY";

          eventDate.textContent = `${startFormattedDate} - ${endFormattedDate}`;
        } else {
          var date = new Date(selectedItem.start);
          var year = date.getFullYear();

          // Convert the date to BBY/ABY format
          var formattedDate =
            year >= 0 ? year + " ABY" : Math.abs(year) + " BBY";
          eventDate.textContent = formattedDate;
        }

        eventDescription.textContent =
          selectedItem.description || "No description available.";

        var eventImage = document.getElementById("event-image");

        eventImage.removeAttribute("src");
        eventImage.style.display = "none";

        if (selectedItem.pic) {
          const imagePath = `pics/${selectedItem.pic}`;

          eventImage.src = imagePath;
          eventImage.onload = function () {
            eventImage.style.display = "block";
          };

          eventImage.onerror = function () {
            eventImage.style.display = "none";
          };
        } else {
          eventImage.style.display = "none";
        }

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
