var links = [
  {
   "href": "http://blog.b3k.us/2009/07/15/service-level-disagreements.html",
   "text": "Service Level Disagreements, by Benjamin Black"
   },
  {
    "href": "http://blog.b3k.us/2009/07/16/service-level-disagreements-2.html",
    "text": "Service Level Disagreements, Part 2, by Benjamin Black"
  },
  {
    "href": "http://www.kitchensoap.com/2011/04/07/resilience-engineering-part-i/",
    "text": "Resilience Engineering: Part I, by John Allspaw"
  },
  {
    "href": "http://www.kitchensoap.com/2009/11/12/how-complex-systems-fail-a-webops-perspective/",
    "text": "How Complex Systems Fail: A WebOps Perspective, by John Allspaw"
  }
];
var footer = document.getElementById("footer");
var h2 = document.createElement('h2');
var linkTag = document.createElement('a');

var link = links[Math.floor(Math.random() * links.length)];
linkTag.href = link.href;
linkTag.appendChild(document.createTextNode(link.text));

h2.appendChild(linkTag);
footer.appendChild(h2);
