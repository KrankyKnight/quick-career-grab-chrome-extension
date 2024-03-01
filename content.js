(function () {
  // Search Variables
  let anchors = document.querySelectorAll('a');
  const regex = /^(jobs?|careers?)$/gi;
  let filteredLinks = [];

  // Message Variables

  
  // Helpers
  function oneLink(link) {
    if(window.confirm(`Would you like to navigate to ${link}?`)) {
      window.open(link, '_blank')
    }
  }

  function moreLinks(linkArray, message){
    if(window.confirm(message)) {
      let message = `Enter number of desired link: \n`

      for(const index in linkArray) {
        message += `${index}: ${linkArray[index]} \n`
      }

      const selection = window.prompt(message);

      if(!linkArray[selection]) {
        moreLinks(linkArray, `${selection} is not a viable option, try again?`);
      } else window.open(linkArray[selection], '_blank');
    }
  }

  function deepSearch(link) {
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
    if(result) return link;
  }
  
  // Filter Results
  for(const link of anchors) {
    if(deepSearch(link)) filteredLinks.push(link);
  }
  
  // No results
  if(filteredLinks.length === 0) {
    alert('No links found during search');
    return;
  }

  if(window.confirm(`${filteredLinks.length} link${filteredLinks.length > 1 ? 's' : ''} found!`)) {
    if(filteredLinks.length === 1) oneLink(filteredLinks[0]);
    else moreLinks(filteredLinks, `Would you like to see list of links?`);
  }
})();

