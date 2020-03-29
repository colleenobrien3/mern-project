# BrewerDE Fullstack MERN Application

## Descriptions and Features

Using the JavaScript based MERN stack (MongoDB, Express, React, Node) I created an application that allows Delawareans to find information about nearby breweries. The React frontend fetches data from [the Express backend API](https://evening-ravine-76048.herokuapp.com/breweries). I used the Bootstrap CSS framework for styling. Click [here](https://github.com/colleenobrien3/express-crud-api) to see the repo for the backend!

## Technologies Used

- JavaScript
- React
- Node
- HTML
- CSS
- Bootstrap

## Getting Started

Click [here](https://brewerde.netlify.com) to view the site, deployed via Netlify! Be sure to click the logo to return to the home page between viewings of specific area listings. (This is how I wanted it, not a bug.)

## Goals

Fine, yes - it's a big fat ugly bug. I do need to fix the routing error described so nonchalantly above. For some reason, even though the state of the React component is updating, the page is not re-rendering. Shouldn't be too hard to fix when I have time to come back to this. Also, I need to fix the bootstrap accordions. The way I looped through my data to create the accordion, I think bootstrap gave each piece the same class, and so when that class is selected for in the JavaScript functions, a click on one item opens EVERY item. Oops.
