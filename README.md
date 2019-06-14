# Web Dev 101

## Stylesheets

Hyper Text Markup Language (HTML) is used to manage the structural elements of a webpage. It uses a tree-like structure (also known as the DOM -- document object model) with parent, siblings, and children elements.

Here's an example of how you'd diagram a webpage's HTML file:  
![HTML Tree Example](https://www.w3schools.com/js/pic_htmltree.gif)

When viewing our [HTML file](./index.html), you have two options:
1. Open in the browser
    - This will show you what the user will see
2. Open in a text editor
    - This will show you the code for the page

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Web Development 101</title>
    </head>
    <body>
        <h1 style="color: blue">
            Web Development Crash Course
        </h1>
        <input />
        <button>Click Me!</button>
    </body>
</html>
```

The `head` tags contain our meta data, while the `body` tags display what's shown on the page. All styling is the browser's default (colors, fonts, etc.) *except* for the `h1` heading tag that we've made `blue`.

For more information on HTML tags, visit [Shay How's HTML & CSS tutorial](https://learn.shayhowe.com/html-css/).

## Table of Contents

1. `01-html`
1. `02-stylesheet`
1. `03-javascript`
1. `04-node`
1. `05-state`
1. `06-filesystem`
1. `07-cdn`
1. `08-npm`
1. `09-libraries`
1. `10-frameworks`

To get back to the main page, select the `master` branch in the Github dropdown or execute in your terminal:

```sh
git checkout master
```

To go to the next section, select the `02-stylesheet` branch in the Github dropdown or execute in your terminal:
```sh
git checkout 02-stylesheet
```
