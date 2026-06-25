Add your photos here (1.jpg, 2.jpg, etc.).

Then list each one in data/gallery.json:

{
  "photos": [
    { "url": "images/gallery/1.jpg", "caption": "Your caption" }
  ]
}

Open the site through a local server (not by double-clicking the HTML file)
so the gallery can load. Example:

  python -m http.server 8080

Then visit http://localhost:8080/gallery.html
