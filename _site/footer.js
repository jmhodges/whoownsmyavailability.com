var links = [
  {
   "href": "http://blog.b3k.us/2009/07/15/service-level-disagreements.html",
   "text": "Service Level Disagreements"
   },
  {
    "href": "http://blog.b3k.us/2009/07/16/service-level-disagreements-2.html",
    "text": "Service Level Disagreements, Part 2"
  },
  {
    "href": "http://www.kitchensoap.com/2011/04/07/resilience-engineering-part-i/",
    "text": "Resilience Engineering: Part I"
  },
  {
    "href": "http://www.kitchensoap.com/2009/11/12/how-complex-systems-fail-a-webops-perspective/",
    "text": "How Complex Systems Fail: A WebOps Perspective"
  }
];
var div = document.getElementById("footer");
var linkTag = document.createElement('a');
var link = links[Math.floor(Math.random() * links.length)];

linkTag.href = link.href;
linkTag.appendChild(document.createTextNode(link.text));
var p = document.createElement('p');
p.appendChild(linkTag);
div.appendChild(p);
