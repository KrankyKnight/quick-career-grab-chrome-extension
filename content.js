(function () {
  /* --- TOP VARIABLES --- */

  const anchors = document.querySelectorAll('a');
  const regex = /^(jobs?|careers?)$/gi;
  const filteredLinks = [];
  const duplicateAvoider = new Set();

  /* --- HELPERS --- */

  // Single link found
  function oneLink(link) {
    if(window.confirm(`Would you like to navigate to the following link: \n${link}`)) {
      window.open(link, '_blank')
    }
  }

  // Multiple links found
  function moreLinks(linkArray, message = ''){
    let newMessage = `${message} Enter number of desired link: \n`
    for(const index in linkArray) {
      newMessage += `${index}: ${linkArray[index]} \n`
    }

    const selection = window.prompt(newMessage);

    if(selection === null) return;

    if(!linkArray[selection]) {
      moreLinks(linkArray, `${selection} is not a viable option, try again? \n`);
    } else window.open(linkArray[selection], '_blank');
  }

  // Scrape for links
  function scrape(link) {
    let result = false;

    function recurseChildren(htmlElement) {
      if(regex.test(htmlElement.innerText)) result = true;
      if(result) return;

      const childArray = htmlElement.children;
      
      if(childArray.length) {
        for(const children of childArray) recurseChildren(children);
      }
    }

    recurseChildren(link);

    if(result) return result;
  }
  
  /* --- FILTER --- */
  
  for(const link of anchors) {
    if(scrape(link) && !duplicateAvoider.has(link.href)) {
      duplicateAvoider.add(link.href);
      filteredLinks.push(link);
    };
  }
  
  /* --- RESULTS --- */

  if(filteredLinks.length === 0) {
    alert('No links found during search');
    return;
  }

  if(window.confirm(`${filteredLinks.length} link${filteredLinks.length > 1 ? 's' : ''} found!`)) {
    if(filteredLinks.length === 1) oneLink(filteredLinks[0]);
    else moreLinks(filteredLinks);
  }
})();
