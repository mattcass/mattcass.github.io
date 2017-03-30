## Video on Demand

<i>Originally published on [Fresh Tilled Soil's](https://www.freshtilledsoil.com) blog: [https://www.freshtilledsoil.com/video-on-demand](https://www.freshtilledsoil.com/video-on-demand)</i>

On client projects, we are often tasked with embedding a Vimeo or YouTube video into a website. These sites make that task extremely easy with a one-click embed code. However, as convenient as that is, there is one major drawback – these videos reduce performance.

A user who visits a website already has to download the CSS, JavaScript, image, and font resources that we have chosen to include on that page. By including an <code>&lt;iframe&gt;</code> embed code we are forcing that user to make additional HTTP requests. That is happening before they might even realize there is a video on the page they are interested in watching.

A solution to this issue would be to only load in the <code>&lt;iframe&gt;</code> resources when a user has explicitly requested them. That is, only make the additional HTTP requests for the video if a user has clicked the play button. To do that we are going to need to use some JavaScript and restructure our HTML.

You can see a <a href="http://codepen.io/mattcass/pen/QNOxQg" target="_blank">full working demo of this technique</a> or, keep reading for an explanation:

A typical embed code for a Vimeo video might look something like the following:

```
<iframe
  src="https://player.vimeo.com/video/83864360?autoplay=1&title=0&byline=0&portrait=0" width="500"
  height="281"
  frameborder="0"
  webkitallowfullscreen
  mozallowfullscreen
  allowfullscreen>
</iframe>
```

We are going to replace the above code with an &lt;a&gt; tag and copy the ‘src’ attribute to the <code>&lt;a&gt;</code> tags ‘href’ attribute. Because we only want the link itself without the additional embed parameters we can place these in a separate data attr which we will have access to via JavaScript. We can also take this opportunity to supply a title attribute to the video link for better accessibility. Our updated code would look like this:

```
<a
  class="embed-video"
  title=”descriptive title here”
  href="https://player.vimeo.com/video/83864360"
  data-params="?autoplay=1&title=0&byline=0&portrait=0">
  Play Video
</a>
```


By replacing the <code>&lt;iframe&gt;</code> with an <code>&lt;a&gt;</code> tag we have provided a great fallback solution for any users without the use of JavaScript and we have successfully prevented the unwanted additional HTTP requests from taking place when the page first loads.

Our goal now is to use JavaScript to listen for a user click on the newly created <code>&lt;a&gt;</code> tag. When this takes place we are going to prevent the default behavior of the <code>&lt;a&gt;</code> tag and instead use the ‘href’ and ‘data’ attributes to recreate the <code>&lt;iframe&gt;</code> that Vimeo supplied and append this into the page.

With the techniques listed above, we are able to improve individual page performance and progressively enhance the experience for our clients’ users.

You can check out the working solution on codepen: [http://codepen.io/mattcass/pen/QNOxQg](http://codepen.io/mattcass/pen/QNOxQg)
