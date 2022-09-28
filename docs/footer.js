var links = [
  {
    "href": "http://www.kitchensoap.com/2011/04/07/resilience-engineering-part-i/",
    "text": "Resilience Engineering: Part I, by John Allspaw"
  },
  {
    "href": "http://www.kitchensoap.com/2009/11/12/how-complex-systems-fail-a-webops-perspective/",
    "text": "How Complex Systems Fail: A WebOps Perspective, by John Allspaw"
  },
  {
    "href": "http://www.amazon.com/Human-Error-James-Reason/dp/0521314194",
    "text": "Human Error, by James Reason"
  },
  {
    "href": "https://web.archive.org/web/20130301025004/http://www.namahn.com/we-share/interviews/erik-hollnagel-err-human-etto-principle",
    "text": "To Err Is Human: The ETTO Principle, by Erik Hollnagel"
  },
  {
    "href": "http://www.amazon.com/Resilience-Engineering-Practice-Ashgate-Studies/dp/1409410358/",
    "text": "Resilience Engineering in Practice, by Erik Hollnagel, Jean Pari\350s, David D. Woods and John Wreathal"
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
