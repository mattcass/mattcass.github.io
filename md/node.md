## Leveraging Node In Development

<i>Originally published on [Fresh Tilled Soil's](https://www.freshtilledsoil.com) blog: [https://www.freshtilledsoil.com/leveraging-node-in-development](https://www.freshtilledsoil.com/leveraging-node-in-development)</i>

If you are comfortable with <abbr title="Cascading Style Sheets">CSS</abbr> and are moving toward writing <abbr title="Syntactically Awesome Style Sheets">Sass</abbr> you will run into the following lines of code.

```
  $ gem install sass
  $ sass --watch app/sass:public/stylesheets
```

For the front-end developer writing <abbr>Sass</abbr> for the first time, it isn’t necessary to understand the intricacies behind these lines of code, but simply for them to know which directories to reference. The developer can focus on the new <abbr>Sass</abbr> syntax and take comfort in the fact that the line of code above watches their <abbr>Sass</abbr> files and outputs a <abbr>CSS</abbr> file exactly where requested.

There is logic, reason and a litany of functions behind each command or library. These are computers after all and fellow developers wrote the code we are using. That said, it can seem daunting to try to understand the complexity of any new tool or library when you first start. I wouldn’t recommend that anyone forego trying to understand the tools they use, but I have found it helpful to focus one’s understanding when it becomes most relevant.

For me, this moment of relevance has just occurred with <a href="https://nodejs.org/en/">Node.js</a>. Node is a powerful tool which I have been utilizing in my daily workflow but only with a modicum of in-depth understanding. As I imagine to be the case for many others, I was first drawn to Node to make use of the <a href="https://www.npmjs.com/">Node Package Manager</a>. With <abbr title="Node Package Manager">NPM</abbr>, installing project dependencies couldn’t be easier. For instance, the following line will install jQuery locally and make a reference to it in your <code>package.json</code> file:

```
  $ npm install jquery --save-dev
```

While cloning a repository, all it usually takes to get up and running is the following line:

```
  $ npm install
```

which reads through the project’s local package.json file and downloads every bit of code you might need.

I knew Node’s tagline: “Node.js uses an event-driven, non-blocking <abbr title="Input Output">I/O</abbr> model that makes it lightweight and efficient.” Also, I was aware that it is built on Chrome’s V8 JavaScript engine, and that it’s very popular as a web server. However, I felt I wasn’t using it as well as I could.

In order to shrink the knowledge gap, I looked for areas where I could further leverage Node during the development process. I found that by making use of <a href="https://nodejs.org/dist/latest-v4.x/docs/api/process.html#process_process_env">Node’s process.env variable</a>&nbsp;I would be able to define whether a build was in ‘production’ mode versus ‘development’ mode and thereby run appropriate tasks only when necessary.

An example of this could be minifying css when in production mode only. Utilizing Gulp, this can be done by including <a href="https://www.npmjs.com/package/gulp-if">gulp-if</a>&nbsp;to conditionally control when we allow the build process to run certain tasks, however, we need to pass in a parameter, which in this case can be an ‘environment’ variable.

In the gulpfile below we include this additional ‘environment’ variable and assign it to Node’s process.env. This ‘environment’ variable is equal to <code>NODE_ENV</code> or if this is not explicitly set (in which case <code>NODE_ENV</code> would equal undefined) we default the environment to ‘development’.

```
  // Include gulp
  var gulp = require(‘gulp’);

  // Include plugins
  var uglifycss = require('gulp-uglifycss');
  var gulpif = require('gulp-if');

  // Define the environment variable,
  // If NODE_ENV is undefined default to ‘development’ mode
  var environment = process.env.NODE_ENV || 'development';

  // Task: styles
  gulp.task('styles', function() {
    return gulp.src(./assets/css/styles.css)
    .pipe(gulpif(environment === 'production', uglifycss() ) )
    .pipe(gulp.dest('./assets/css/'))
  });

  // Task: default
  gulp.task('default', [ 'styles' ] );
```

In this way we can continue to run our gulp development tasks with a single command:

```
  $ gulp
```

and when we want to set the environment to production and run any additional production tasks we can manually update the <code>NODE_ENV</code> with the following command:

```
  $ NODE_ENV=production gulp
```

I am always happy to use a new tool or library if it can help improve my daily workflow. However, it can be even more satisfying to leverage additional functionality within those tools already in use. I recommend digging further into one of your favorite tools, you never know what you’ll find.
