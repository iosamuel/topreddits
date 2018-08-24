## Step by step on decisions made for this test
Since this is a really simple single-page, I decided to use a simplified version of vue, vuetify (for material design layout) and jquery (mostly for the ajax request)

Since the commit `ad2792d` I used lodash, because I think its a must in every javascript project, because all of this really useful utilities. Here I use it to unescape the posts html from reddit. In this commit I will take a break and continue after my other responsibilites are done.

It took me a little bit of time between commit and commit, because I had to look inside the reddit json object from the public api, and trace the exact properties that I needed to render properly everything.

**Note:** I decided to use reddit public json api instead of the oauth version, just for simplicity

### Responsiveness
I think this is the most responsive it can get, since this is just a `single-page`, to add a more `mobile-friendly` experience I think it should need `routing` system, so you can navigate to a post insted of just rendering it in the same page