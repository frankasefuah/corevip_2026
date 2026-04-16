COREVIP 2027 UPDATED WEBSITE PACKAGE
====================================

This ZIP contains:
- index.html
- styles.css
- script.js
- README.txt
- assets/images/README_IMAGES.txt

WHAT WAS ADDED / UPDATED
------------------------
1. FAQ section added.
2. Hotels section now supports a slider layout.
   IMPORTANT: In this updated build, hotels V1 = slider, V2 = grid list.
3. Contact section added beneath the tickets area.
4. Registration section added.
5. Venue map merged into the Gallery section using Google Maps.
6. Customizer removed from view.
7. Fixed state choices applied from your message.
8. Email for exhibition and sponsorship set to:
   corevip2026@aau.org
9. Translation support kept for:
   - English
   - French
   - Arabic (RTL)
   - Portuguese

HOW TO ADD IMAGES FROM assets/images
------------------------------------
Use file paths from the project root like these examples:

1. Hero image example:
   assets/images/hero.jpg

2. Gallery image example:
   assets/images/gallery/venue-hall.jpg

3. Speaker image example:
   assets/images/speakers/chairperson.jpg

4. Video thumbnail example:
   assets/images/videos/corevip-teaser.jpg

WHERE TO EDIT IMAGE PATHS
-------------------------
Open script.js and search for:
- PLACE YOUR IMAGE HERE

You will see examples like:
heroImg = 'assets/images/hero.jpg'

and items like:
image: 'assets/images/gallery/nairobi-welcome.jpg'

If your real image exists there, the website will show it.
If the file is missing, the site automatically falls back to a generated placeholder image.

WHERE TO EDIT EMAIL / PHONE / REGISTRATION / MAP
------------------------------------------------
Open script.js and search for:
const EVENT_CONTENT = {

Edit these values:
- contactEmail
- exhibitionEmail
- sponsorshipEmail
- phone
- registrationLink
- mapQuery

GOOGLE MAPS
-----------
The map inside the Venue & Gallery section uses this query:
KCA University Nairobi Kenya

To change the location, update EVENT_CONTENT.mapQuery in script.js.

HOTELS SLIDER
-------------
Your chosen state kept hotels: 'v1'.
In this build, v1 is the slider version so the default display is now a slider, exactly as requested.

OPEN THE SITE
-------------
1. Unzip the package.
2. Open index.html in your browser.
3. Or upload the files to Netlify, GitHub Pages, Vercel, cPanel, or your server.
