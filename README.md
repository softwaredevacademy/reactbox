This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Reactbox Web Developer test

This is a simple app to check if the user can pick up their parcels.
The app is composed of a list view where they can view all the parcels, and a detail view where they can see more information including a map to the precise location.

The project is done with the latest version of React and uses functional components with Hooks for better modularity in case it needs to be expanded.

Example link: [Reactbox](https://reactbox-sda.web.app)

---

## Setup

These are the instructions to run the project:

1. Open the terminal and navigate to the folder where this readme file is located.
1. Install the project dependencies by typing `npm install` on the terminal.
1. Start the project by typing `npm start` on the terminal.

---

## Dependencies

Beside React JS and it's own dependencies, this project uses:

1. SASS for styling components.
1. Moment.JS for formatting dates.
1. Leaflet for map handling.
1. React router to enabling the browser back button in the views.
1. React i18: For internationalization.

To see a complete diagram check the image called `project-structure.png` in the root folder. Currently using the "Complete stack".

---

## Project organization

The component organization and CSS styles is done using the Atomic design methodology by Brad Frost. ([link](https://bradfrost.com/blog/post/atomic-web-design/)) This methodology is mentioned in the official React guide under File Structure. ([link](https://reactjs.org/docs/faq-structure.html#grouping-by-file-type))

- The project includes the `order` prop type in the folder `ultils/orderProptype.js` to test that the components receive the information with the correct types.
- To see the DOM tree, check `project-structure.png`.
- To see the design files, check `React box design.sketch`. It require Sketch version 52.6 or superior.
- To know more about the organization, please check the spreadsheet `Project organization.numbers`. It require Apple Numbers on any macOS device.

---

### Internationalization

- I'm using [React-i18-next](https://react.i18next.com) to translate the strings from the project. The folder `src/internationalization` contains translations from English and Swedish.
- The project can scale to multiple languages by adding more json files and making the flag button show a menu with all the languages available.
- The documentation of React i18 mentions how to mix the string using Moment.js to format dates, but i did not wanted to go over time limit given.
- The documentation also mentions how to start with the device language, this is another feature that i would like to implement as well.
- The Swedish translation is done by copying the english text to Google Translate, some minor misspellings may appear.

---

## Note

The diagram images and design file will be available for seven days from the date of delivery date.
