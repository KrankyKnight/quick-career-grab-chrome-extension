# quick-career-grab-chrome-extension

### __Description__

This is a Chrome extension that can be used to quickly search a web page for links to a career or job page.

### **Under the Hood**
The code utilizes a regex test and recursive node search to find anchor tags that contain "job", "jobs", "career" or "careers" as text content and return the associated url.

### __Installation__

1. Pull down the file to your local machine
2. Open your Chrome browser and navigate to the "Manage Extensions" page
3. Make sure "Developer mode" is toggled on in the upper right of the page
4. Select "Load unpacked"
5. Select the root folder for this code
6. Toggle on and good hunting

### __Issues__

The scraper has run into some issues when a page hasn't fully loaded or is using lazy loading in a way that prevents the link from rendering on page load.

If your initial run of the extension does no work, wait a second and try running it again. The link may not have loaded.

If this persists, you can try scrolling down to force a load, but at that point the extension may not have any benefit on that page.
