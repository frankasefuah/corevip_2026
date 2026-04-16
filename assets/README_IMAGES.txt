ASSETS / IMAGES GUIDE
=====================

Place your image files inside this folder structure, for example:

assets/images/hero.jpg
assets/images/gallery/nairobi-welcome.jpg
assets/images/gallery/diamond-jubilee.jpg
assets/images/speakers/chairperson.jpg
assets/images/videos/corevip-teaser.jpg

EXAMPLE USAGE IN script.js
--------------------------
Hero background example:
heroImg = 'assets/images/hero.jpg'

Gallery example:
{ id: 1, title: 'Venue Hall', category: 'Venue', image: 'assets/images/gallery/venue-hall.jpg' }

Speaker example:
{ name: 'AAU Chairperson', role: 'Keynote', image: 'assets/images/speakers/chairperson.jpg' }

Video thumbnail example:
{ title: 'Teaser', thumb: 'assets/images/videos/corevip-teaser.jpg' }

IMPORTANT
---------
The updated website includes automatic fallback placeholders.
If the file does not exist yet, the site will still show a styled placeholder image instead of breaking.
