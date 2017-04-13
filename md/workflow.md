## Creating a Development Workflow with Task Runners

<i>
Originally published on [Fresh Tilled Soil's](https://www.freshtilledsoil.com) blog:
[https://www.freshtilledsoil.com/creating-a-development-workflow-with-task-runners](https://www.freshtilledsoil.com/creating-a-development-workflow-with-task-runners)
</i>

Bill Gates once said, “I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.”

In the programming world there are a myriad of similar quotes, all suggesting that one should work smart, not hard. Putting this theory into practice as a front-end developer in today’s environment entails automating repetitive tasks and leaning on one’s machine to perform the hard work. As an example, let’s look at a typical user interacting with a website:

When a user visits a specific URL, the web browser is tasked with locating the corresponding HTML, CSS, JavaScript, fonts, and image files. Once found, the browser must load these resources and render them on the page. With a slow internet connection, on mobile, or on a 3G network, this may take a noticeable amount of time. Providing these resources at a greater speed will greatly enhance the experience for the user.

One great way to achieve this is by limiting the number of resources that the user needs to fetch before they can begin interacting with the content. This can be achieved by providing minified and concatenated CSS and JavaScript files, optimizing images to reduce file size, and limiting the number of fonts that are loaded on a page.  Less is more in this scenario.

What is great for the end user, however, is not ideal for the development process. As a developer, having a clean, well organized file structure with a clear separation of assets (images/JavaScript/CSS) is far more productive.

By utilizing a [task runner](https://github.com/freshtilledsoil/FTS-gulp) during the development process, a developer is able to work in a well structured file system and leverage modern tools like Sass and Livereload, while still outputting the appropriate minified and compiled source files without any additional effort.
