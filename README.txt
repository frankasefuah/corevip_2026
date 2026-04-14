COREVIP 2027 WEBSITE PACKAGE
=================================

This updated ZIP contains:
- index.html
- styles.css
- script.js
- README.txt

WHAT WAS ADDED
--------------
1. Multilingual language selector:
   - English
   - French
   - Arabic (RTL supported)
   - Portuguese

2. Back-to-top icon button:
   - Floating round button with an upward arrow
   - Replaces the previous text-based link

3. File comments throughout:
   - Clear comment blocks show where to edit content
   - Comments indicate where to place:
     * images
     * links
     * videos
     * speakers
     * hotel booking URLs
     * blog/update links
     * event details
     * translations

4. Content updates from uploaded documents:
   - Event title, dates, venue, theme, and milestone are based on the Concept Note
   - Program section is populated from the Draft Programme Structure

EDITING GUIDE
-------------
A. Change event details
   - Open script.js
   - Search for: EVENT_CONTENT

B. Change translations
   - Open script.js
   - Search for: const i18n

C. Replace placeholder images with real files
   - Open script.js
   - Search for: PLACE YOUR IMAGE HERE
   - Replace generated SVG image values with your real file paths
   Example:
     image: 'assets/images/hero.jpg'

D. Replace demo links
   - Open script.js
   - Search for: PLACE YOUR LINK HERE

E. Add local image assets
   Suggested folder structure:
   /assets/images/
   /assets/videos/

F. Open the site
   - Double-click index.html
   OR upload the files to Netlify, Vercel, cPanel, GitHub Pages, etc.
