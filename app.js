
const data = [
  { file: '2016',          meta: '2016', title: 'Reading List 2016' },
  { file: 'work',          meta: '2016', title: 'Work' },
  { file: 'morning',       meta: '2015', title: 'Morning' },
  { file: '2015',          meta: '2015', title: 'Reading List 2015' },
  { file: 'accessibility', meta: '2014', title: 'Accessibility In The Modern Age' },
  { file: '2014',          meta: '2014', title: 'Reading List 2014' },
  { file: 'vim',           meta: '2014', title: 'Working With Vim' },
  { file: 'reading',       meta: '2014', title: 'More, Better, Reading' },
  { file: 'tales',         meta: '2014', title: 'Tales Of Development' },
];

const ul = document.getElementById('list');
let home = true;
const markdownContainer = document.getElementById('marked');
const homepageContainer = document.getElementById('main');

// loop
for ( var i = 0 ; i < data.length; i++ ) {
  item = data[i];
  let htmlString = `
  <li>
      <a class="h2 bold markdown" href="md/${item.file}.md">${item.title}</a>
      <small class="block">${item.meta}</small>

    </li>`;
  ul.insertAdjacentHTML('beforeend', htmlString);
}

function displayPage(home) {
  window.scrollTo(0, 0);

  if ( home ) {
    markdownContainer.style.display = 'none';
    homepageContainer.style.display = 'block';
  } else {
    markdownContainer.style.display = 'block';
    homepageContainer.style.display = 'none';
  }
}

// markdown
function getFileContents(file, markdownContainer) {
  var request = new XMLHttpRequest();
  request.open('GET', file, true);
  request.onreadystatechange = function () {
    if (this.status !== 200) console.log('error retrieving file');
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
  if ( window.location.hash ) {
    var hashValue = window.location.hash.substr(1);
    var link = document.querySelector("a[href='" + hashValue + "']");
    if ( link != null ) {
      link.click();
    }
  } else if ( !window.location.hash ) {
    displayPage(true);
  }
}

// click
document.querySelectorAll('.markdown').forEach(function(element) {
  element.addEventListener('click', function(e){
    e.preventDefault();
    var file = this.getAttribute('href');
    getFileContents(file, markdownContainer);
  });
});

window.onhashchange = locationHashChanged;
window.onload = locationHashChanged;
