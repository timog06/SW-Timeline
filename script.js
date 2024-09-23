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

// Fetch descriptions for events
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
        className: "republic",
        type: "background",
      },
      {
        id: "B",
        content: "Regime of the Empire",
        start: new Date(-19, 10, 1),
        end: "0005-12-31",
        className: "empire",
        type: "background",
      },
      {
        id: "C",
        content: "New Republic Era",
        start: "0005-01-01",
        end: "0034-12-31",
        className: "republic",
        type: "background",
      },
      {
        id: "D",
        content: "Regime of the First Order",
        start: "0029-01-01",
        end: "0035-12-31",
        className: "empire",
        type: "background",
      },
      {
        id: "E",
        content: "Old Republic Era",
        start: new Date(-25000, 1, 1),
        end: new Date(-1032, 1, 1),
        className: "republic",
        type: "background",
      },
      {
        id: "F",
        content: "Age of the Infinite Empire",
        start: new Date(-36453, 1, 1),
        end: new Date(-25200, 1, 1),
        className: "empire",
        type: "background",
      },
      {
        id: "G",
        content: "Age of the Sith Empire",
        start: new Date(-4980, 1, 1),
        end: new Date(-3640, 1, 1),
        className: "empire",
        type: "background",
      },
      {
        id: "H",
        content: "Age of the Original Sith Empire",
        start: new Date(-6900, 1, 1),
        end: new Date(-5000, 1, 1),
        className: "empire",
        type: "background",
      },
      {
        id: "I",
        content: "Age of the Reorganized Sith Empire",
        start: new Date(-3631, 1, 1),
        end: new Date(-2000, 1, 1),
        className: "empire",
        type: "background",
      },
      {
        id: "J",
        content: "Age of the New Sith Empire",
        start: new Date(-2000, 1, 1),
        end: new Date(-1100, 1, 1),
        className: "empire",
        type: "background",
      },
      {
        id: "K",
        content: "Republic Dark Age",
        start: new Date(-1100, 1, 1),
        end: new Date(-1000, 1, 1),
        className: "other",
        type: "background",
      },
      {
        id: "L",
        content: "Modern Galactic Republic Era",
        start: new Date(-1000, 1, 1),
        end: new Date(-19, 9, 1),
        className: "republic",
        type: "background",
      },

      // ------------------------------------------- Items

      // Year Zero
      {
        id: 0,
        content: "Battle of Yavin",
        start: "0000-01-01",
        description: descriptions["0"],
        pic:"BoY.webp"
      },

      // Movies
      {
        id: 1,
        subgroup: "movies",
        content: "The Phantom Menace",
        start: new Date(-32, 1, 1),
        style: "background-color: yellow",
        description: descriptions["1"],
        pic: "episode1.webp",
      },
      {
        id: 2,
        subgroup: "movies",
        content: "Attack of the Clones",
        start: new Date(-22, 1, 1),
        style: "background-color: yellow",
        description: descriptions["2"],
        pic: "episode2.webp",
      },
      {
        id: 3,
        subgroup: "movies",
        content: "Revenge of the Sith",
        start: new Date(-19, 1, 1),
        style: "background-color: yellow",
        description: descriptions["3"],
        pic: "episode3.webp",
      },
      {
        id: 4,
        subgroup: "movies",
        content: "A New Hope",
        start: "0000-01-01",
        style: "background-color: yellow",
        description: descriptions["4"],
        pic: "episode4.webp",
      },
      {
        id: 5,
        subgroup: "movies",
        content: "The Empire Strikes Back",
        start: "0003-01-01",
        style: "background-color: yellow",
        description: descriptions["5"],
        pic: "episode5.webp",
      },
      {
        id: 6,
        subgroup: "movies",
        content: "Return of the Jedi",
        start: "0004-01-01",
        style: "background-color: yellow",
        description: descriptions["6"],
        pic: "episode6.webp",
      },
      {
        id: 7,
        subgroup: "movies",
        content: "The Force Awakens",
        start: "0034-01-01",
        style: "background-color: yellow",
        description: descriptions["7"],
        pic: "episode7.webp",
      },
      {
        id: 8,
        subgroup: "movies",
        content: "The Last Jedi",
        start: "0034-12-31",
        style: "background-color: yellow",
        description: descriptions["8"],
        pic: "episode8.webp",
      },
      {
        id: 9,
        subgroup: "movies",
        content: "The Rise of Skywalker",
        start: "0034-01-01",
        style: "background-color: yellow",
        description: descriptions["9"],
        pic: "episode9.webp",
      },

      // Series
      {
        id: 10,
        content: "The Clone Wars",
        start: new Date(-22,1 ,1),
        end: new Date(-19,1 ,1),
        type: "range",
        description: descriptions["10"],
        pic: "clone_wars_series.webp",
      },
      {
        id: 11,
        content: "The Bad Batch",
        start: new Date(-19,1 ,1),
        end: new Date(-18,1 ,1),
        type: "range",
        description: descriptions["11"],
        pic: "badbatch.webp",
      },
      {
        id: 12,
        content: "Rebels",
        start: new Date(-5,1 ,1),
        end: new Date(-1,1 ,1),
        type: "range",
        description: descriptions["12"],
        pic: "rebels.webp",
      },
      {
        id: 13,
        content: "The Mandalorian",
        start: "0009-01-01",
        description: descriptions["13"],
        pic: "mandalorian.webp",
      },
      {
        id: 14,
        content: "The Book of Boba Fett",
        start: "0009-01-01",
        description: descriptions["14"],
        pic: "bobafett.jpg",
      },
      {
        id: 15,
        content: "Obi-Wan Kenobi",
        start: new Date(-9,1 ,1),
        description: descriptions["15"],
        pic: "obi.jpg",
      },
      {
        id: 16,
        content: "Clone Wars 2003",
        start: new Date(-22,1 ,1),
        end: new Date(-19,1 ,1),
        description: descriptions["16"],
        pic: "clone_wars_2003.webp",
      },
      {
        id: 17,
        content: "Andor",
        start: new Date(-5,1 ,1),
        end: new Date(-1,1 ,1),
        type: "range",
        description: descriptions["17"],
        pic: "andor.webp",
      },
      {
        id: 18,
        content: "Ahsoka",
        start: "0009-01-01",
        description: descriptions["18"],
        pic: "ahsoka.webp",
      },

      // Era Change
      {
        id: 19,
        content: "Fall of the Galactic Republic",
        start: new Date(-19, 9, 1),
        description: descriptions["19"],
      },
      {
        id: 20,
        content: "Founding of the Galactic Empire",
        start: new Date(-19, 10, 1),
        description: descriptions["20"],
      },
      {
        id: 21,
        content: "Formation of the modern Galactic Republic",
        start: new Date(-1032, 1, 1),
        description: descriptions["21"],
      },
      {
        id: 22,
        content: "Public Announcement of the First Order",
        start: "0029-01-01",
        description: descriptions["22"],
      },
      {
        id: 23,
        content: "Establishment of the First Order",
        start: "0021-01-01",
        description: descriptions["23"],
      },
      {
        id: 24,
        content: "FILL THIS SHIT",
        start: "0021-01-01",
        description: descriptions["23"],
      },
      {
        id: 25,
        content: "Establishment of the Rule of Two",
        start: new Date(-1032, 1, 1),
        description: descriptions["25"],
      },
      {
        id: 26,
        content: "Establishment of the Old Republic",
        start: new Date(-25000, 1, 1),
        description: descriptions["26"],
      },
      {
        id: 27,
        content: "Fall of the Infinite Empire",
        start: new Date(-25200, 1, 1),
        description: descriptions["27"],
      },
      {
        id: 28,
        content: "Fragmentation of the Sith Empire",
        start: new Date(-3636, 1, 1),
        description: descriptions["28"],
      },
      {
        id: 29,
        content: "Collapse of the Galactic Republic",
        start: new Date(-1100, 1, 1),
        description: descriptions["29"],
      },
      {
        id: 30,
        content: "The Ruusan Reformation",
        start: new Date(-1100, 1, 1),
        description: descriptions["30"],
      },
      {
        id: 31,
        content: "Arrival of the Kwa on Lehon",
        start: new Date(-36453, 1, 1),
        description: descriptions["31"],
        pic: "",
      },

      // Wars
      {
        id: 32,
        content: "Clone Wars",
        start: new Date(-22, 1, 1),
        end: new Date(-19, 8, 1),
        type: "range",
        description: descriptions["32"],
      },
      {
        id: 33,
        content: "New Sith Wars",
        start: new Date(-2000, 1, 1),
        end: new Date(-1000, 1, 1),
        type: "range",
        description: descriptions["33"],
      },
      {
        id: 34,
        content: "Great Hyperspace War",
        start: new Date(-5000, 1, 1),
        end: new Date(-5000, 12, 31),
        type: "range",
        description: descriptions["34"],
      },
      {
        id: 35,
        content: "Great Galactic War",
        start: new Date(-3681, 1, 1),
        end: new Date(-3653, 12, 31),
        type: "range",
        description: descriptions["35"],
      },


      // Battles
      {
        id: 36,
        content: "Battle of Exegol",
        start: "0035-01-01",
        description: descriptions["36"],
      },

      // Events
      {
        id: 37,
        content: "Founding of the Jedi Order",
        start: new Date(-25025, 1, 1),
        description: descriptions["37"],
      },
      {
        id: 38,
        content: "Hundred-Year Darkness",
        start: new Date(-7000, 1, 1),
        end: new Date(-6900, 1, 1),
        description: descriptions["38"],
      },
      {
        id: 39,
        content: "Formation of the Sith Order",
        start: new Date(-5000, 1, 1),
        description: descriptions["39"],
      },
      {
        id: 40,
        content: "Collapse of the Jedi Order",
        start: new Date(-19, 1, 1),
        description: descriptions["40"],
      },
      {
        id: 41,
        content: "Hyperspace Tractor Beam",
        start: new Date(-1000000, 1, 1),
        description: descriptions["41"],
      },
      {
        id: 42,
        content: "First possible Hyperdrive",
        start: new Date(-19, 1, 1),
        description: descriptions["42"],
      },
      {
        id: 43,
        content: "First Force-Drive",
        start: new Date(-36453, 1, 1),
        description: descriptions["43"],
      },
      
      
    ]);

    // ------------------------------------------- Initialize Timeline
    var container = document.getElementById("visualization");
    var options = {
      start: new Date(-15, 1, 1),
      end: "0010-01-01",
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
