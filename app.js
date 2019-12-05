const data = [
  {
    file: "md/2019.md",
    meta: "2019",
    markdown: "markdown",
    title: "Reading List 2019"
  },
  {
    file: "md/2018.md",
    meta: "2018",
    markdown: "markdown",
    title: "Reading List 2018"
  },
  {
    file: "albers/",
    meta: "2017",
    type: "Development",
    markdown: " ",
    title: "Homage To The Square"
  },
  {
    file: "md/2017.md",
    meta: "2017",
    type: "Reading",
    markdown: "markdown",
    title: "Reading List 2017"
  },
  {
    file: "hash/",
    meta: "2016",
    type: "Development",
    markdown: "",
    title: "hash.click.js"
  },
  {
    file: "md/2016.md",
    meta: "2016",
    type: "Reading",
    markdown: "markdown",
    title: "Reading List 2016"
  },
  {
    file: "md/work.md",
    meta: "2016",
    type: "Reading",
    markdown: "markdown",
    title: "Work"
  },
  {
    file: "md/morning.md",
    meta: "2015",
    type: "Blog",
    markdown: "markdown",
    title: "Morning"
  },
  {
    file: "md/2015.md",
    meta: "2015",
    markdown: "markdown",
    type: "Reading",
    title: "Reading List 2015"
  },
  {
    file: "md/accessibility.md",
    meta: "2014",
    type: "Blog",
    markdown: "markdown",
    title: "Accessibility In The Modern Age"
  },
  {
    file: "md/2014.md",
    meta: "2014",
    type: "Reading",
    markdown: "markdown",
    title: "Reading List 2014"
  },
  {
    file: "md/vim.md",
    meta: "2014",
    type: "Blog",
    markdown: "markdown",
    title: "Working With Vim"
  },
  {
    file: "md/reading.md",
    meta: "2014",
    type: "Blog",
    markdown: "markdown",
    title: "More, Better, Reading"
  },
  {
    file: "md/tales.md",
    meta: "2014",
    type: "Blog",
    markdown: "markdown",
    title: "Tales Of Development"
  }
];

const ul = document.getElementById("list");
var home = true;
const markdownContainer = document.getElementById("marked");
const homepageContainer = document.getElementById("main");

// loop
for (var i = 0; i < data.length; i++) {
  item = data[i];

  let htmlString = `
  <li>
      <a class="item h2 bold ${item.markdown}" href="${item.file}">${item.title}</a>
      <small class="light">${item.meta}</small>

    </li>`;
  ul.insertAdjacentHTML("beforeend", htmlString);
}

function displayPage(home) {
  window.scrollTo(0, 0);

  if (home) {
    markdownContainer.classList.add("hidden");
    homepageContainer.classList.remove("hidden");
  } else {
    markdownContainer.classList.remove("hidden");
    homepageContainer.classList.add("hidden");
  }
}

// markdown
function getFileContents(file, markdownContainer) {
  var request = new XMLHttpRequest();
  request.open("GET", file, true);
  request.onreadystatechange = function() {
    if (this.status !== 200) console.log("error retrieving file");
    // get file text
    var text = this.responseText;
    // convert file text using marked and insert into containing div
    markdownContainer.innerHTML = marked.parse(text);
    window.location.hash = file;
    displayPage(false);
  };
  request.send();
}

// router
function locationHashChanged() {
  if (window.location.hash) {
    var hashValue = window.location.hash.substr(1);
    var link = document.querySelector("a[href='" + hashValue + "']");
    if (link != null) {
      link.click();
    }
  } else if (!window.location.hash) {
    displayPage(true);
  }
}

// click
document.querySelectorAll(".markdown").forEach(function(element) {
  element.addEventListener("click", function(e) {
    e.preventDefault();
    var file = this.getAttribute("href");
    getFileContents(file, markdownContainer);
  });
});

window.onhashchange = locationHashChanged;
window.onload = locationHashChanged;
