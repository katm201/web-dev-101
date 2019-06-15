# Web Dev 101

## Stylesheets

Cascading style sheets (or CSS) is how we style the structural (HTML) elements on a page. While we can add styling to each of our HTML elements in the `style` attribute (like in the previous section), it gets tedious and requires a lot of repetition.

Having to do this for _every_ `h1` element would get annoying and cluttered:
```html
<h1 style="color: blue; font-family: Arial; font-size: 42px; margin-left: 10px; margin-right: 10px;">
    Chapter 1
</h1>

<h1 style="color: blue; font-family: Arial; font-size: 42px; margin-left: 10px; margin-right: 10px;">
    Chapter 2
</h1>

<h1 style="color: blue; font-family: Arial; font-size: 42px; margin-left: 10px; margin-right: 10px;">
    Chapter 3
</h1>
```

Instead we can create a class once and apply it to all the elements we want to use it:
```css
.heading {
    color: blue;
    font-family: Arial;
    font-size: 42px;
    margin-left: 10px;
    margin-right: 10px;
}
```

```html
<h1 class="heading">Chapter 1</h1>
<h1 class="heading">Chapter 2</h1>
<h1 class="heading">Chapter 3</h1>
```

You can define styles by:
1. `id`: used for a single element on a page
```css
#register-button {
    color: pink;
    border-radius: 5px;
}
```
1. `class`: used wherever at the developer's discretion (as seen above)
1. `element`: used on every element of that type
```css
p {
    line-height: 20px;
}
```

You then link the stylesheet into the HTML file to make it available to the browser:
```html
<link rel="stylesheet" type="text/css" href="stylesheet.css">
```

It's called "cascading" style sheets because you can apply as many classes or styles as you want to an element. The browser then calculates which style to use when collisions occur.

You can see our [HTML file](./index.html) and [stylesheet](./stylesheet.css) to get a better idea of potential options.

For more information on CSS, visit [Shay How's HTML & CSS tutorial](https://learn.shayhowe.com/html-css/).

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

To go to the next section, select the `03-javascript` branch in the Github dropdown or execute in your terminal:
```sh
git checkout 03-javascript
```
