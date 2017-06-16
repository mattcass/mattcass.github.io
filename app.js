const data = [
  {
    file: 'https://cash-app-9ed43.firebaseapp.com/',
    meta: '2017',
    type: 'Development',
    code: 'React, D3, Next.js',
    link: 'https://github.com/mattcass/argent',
    markdown: ' ',
    title: 'Monthly Budget Tracking Application '
  },
  {
    file: 'albers/',
    meta: '2017',
    type: 'Development',
    code: 'React',
    link: 'https://github.com/mattcass/albers',
    markdown: ' ',
    title: 'Homage To The Square'
  },
  {
    file: 'md/2017.md',
    meta: '2017',
    type: 'Reading',
    code: '',
    markdown: 'markdown',
    title: 'Reading List 2017'
  },
  {
    file: 'hash/',
    meta: '2016',
    type: 'Development',
    code: 'Javascript',
    link: 'https://github.com/mattcass/hash.click',
    markdown: '',
    title: 'hash.click.js'
  },
  {
    file: 'md/node.md',
    meta: '2016',
    type: 'Blog',
    code: 'Node.js',
    markdown: 'markdown',
    title: 'Leveraging Node in Development'
  },
  {
    file: 'md/video.md',
    meta: '2016',
    type: 'Blog',
    code: 'Javascript',
    link: 'https://codepen.io/mattcass/pen/QNOxQg',
    markdown: 'markdown',
    title: 'Video on Demand'
  },
  {
    file: 'md/workflow.md',
    meta: '2016',
    type: 'Blog',
    code: 'Gulp, Javascript',
    markdown: 'markdown',
    title: 'Creating a Development Workflow with Taskrunners'
  },
  {
    file: 'md/2016.md',
    meta: '2016',
    type: 'Reading',
    code: '',
    markdown: 'markdown',
    title: 'Reading List 2016'
  },
  {
    file: 'md/work.md',
    meta: '2016',
    type: 'Reading',
    code: '',
    markdown: 'markdown',
    title: 'Work'
  },
  {
    file: 'md/morning.md',
    meta: '2015',
    type: 'Blog',
    code: '',
    markdown: 'markdown',
    title: 'Morning'
  },
  {
    file: 'md/2015.md',
    meta: '2015',
    markdown: 'markdown',
    type: 'Reading',
    code: '',
    title: 'Reading List 2015'
  },
  {
    file: 'md/accessibility.md',
    meta: '2014',
    type: 'Blog',
    code: '',
    markdown: 'markdown',
    title: 'Accessibility In The Modern Age'
  },
  {
    file: 'md/2014.md',
    meta: '2014',
    type: 'Reading',
    code: '',
    markdown: 'markdown',
    title: 'Reading List 2014'
  },
  {
    file: 'md/vim.md',
    meta: '2014',
    type: 'Blog',
    code: 'Unix',
    markdown: 'markdown',
    title: 'Working With Vim'
  },
  {
    file: 'md/reading.md',
    meta: '2014',
    type: 'Blog',
    code: '',
    markdown: 'markdown',
    title: 'More, Better, Reading'
  },
  {
    file: 'md/tales.md',
    meta: '2014',
    type: 'Blog',
    code: '',
    markdown: 'markdown',
    title: 'Tales Of Development'
  }
];

const ul = document.getElementById('list');
var home = true;
const markdownContainer = document.getElementById('marked');
const homepageContainer = document.getElementById('main');

// loop
for (var i = 0; i < data.length; i++) {
  item = data[i];
  var link = item.link ? `<a href="${item.link}">View Code</a>` : ``
  var code = item.code ? `, ${item.code}` : ``

  let htmlString = `
  <li>
      <a class="item h2 bold ${item.markdown}" href="${item.file}">${item.title}</a>
      <small>${item.type}${code}</small>
      <small>${link}</small>
      <small class="light">${item.meta}</small>

    </li>`;
  ul.insertAdjacentHTML('beforeend', htmlString);
}

function displayPage(home) {
  window.scrollTo(0, 0);

  if (home) {
    markdownContainer.classList.add('hidden');
    homepageContainer.classList.remove('hidden');
  } else {
    markdownContainer.classList.remove('hidden');
    homepageContainer.classList.add('hidden');
  }
}

// markdown
function getFileContents(file, markdownContainer) {
  var request = new XMLHttpRequest();
  request.open('GET', file, true);
  request.onreadystatechange = function() {
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
document.querySelectorAll('.markdown').forEach(function(element) {
  element.addEventListener('click', function(e) {
    e.preventDefault();
    var file = this.getAttribute('href');
    getFileContents(file, markdownContainer);
  });
});

window.onhashchange = locationHashChanged;
window.onload = locationHashChanged;
