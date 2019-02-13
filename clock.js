(function() {
  clock = id => {
    var time;
    var img;

    if (id == "boston") {
      time = new Date().toLocaleTimeString("en-US", {
        timeZone: "America/New_York"
      });
    } else if (id === "paris") {
      time = new Date().toLocaleTimeString("en-US", {
        timeZone: "Europe/Paris"
      });
    }

    if (
      (time.split(":")[0] >= 6 && time.slice(-2) === "AM") ||
      (time.split(":")[0] < 8 && time.slice(-2) === "PM")
    ) {
      img = "sun";
    } else {
      img = "moon";
    }

    document.getElementById(id).innerHTML = `<span>${id[0].toUpperCase() +
      id.slice(1)}</span>
      <time>${time.split(":")[0]}:${time.split(":")[1]}${time
      .slice(-2)
      .toLowerCase()}</time>
      <i><img src="icons/${img}.svg" alt="sun"></i>`;
  };

  clock("paris");
  clock("boston");

  setInterval(function() {
    clock("paris");
    clock("boston");
  }, 1000);
})();
