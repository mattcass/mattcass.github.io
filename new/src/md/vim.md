## Vim Tips

I really like simplicity. It is made all the better when simplicity and
functionality exist together. Not something you find too often in the wild.

Only a few months ago I found myself floundering when trying to do anything
productive in my text editor. I was using Vim because I had read some really
great reviews expounding its usefulness. It was configurable, shipped with every
mac, and could even be used when working on remote servers. Not to mention the
fact that it looked liked proper hacking when working through the command line.
I was sold. The only problem was I didn't know how to actually use it. How do
you save a file? How do you open a new file? How do you copy and paste? These
are all relatively simple things. Kind of important things really and I was
beginning to feel stupid especially considering the fact that I already knew how
to do these very things in a normal editor, or Word for that matter.

Progress. Slow steady progress.

I started watching a lot of youtube tutorials. I also read a few blog posts
regarding Vim tips and tricks and I learned the very basic commands. Like "y"
for yank (copy) and "p" for put (paste). I learned just enough so that I could
write some code. Actually get things done. I also happened upon a great post,
which I can't remember at the moment which essentially detailed the necessary
steps to progressing with Vim. It boiled down to a decision to continuously use
Vim and to write down things that annoyed you while working. Like how to delete
the text between two html tags. Something which has been bothering me for weeks.
I finally got so annoyed that I did not know how to do this that I stopped
working, and spent 5 minutes Googling the answer. Sure enough the answer is
extremely simple and will surely save me countless hours of frustration in the
future.

```
// dit "delete inside tags"
<p> This is some text </p>
// To delete between these two tags place cursor
// anywhere inside the tags and type "dit"
// You can also use cit "change in tags" which allows
// you to immmediately write afterwords
// BOOM
// Also ci" which will allow you to change the text inside quotes
```
