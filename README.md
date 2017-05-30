# Spaceship Emporium

This challenge is to build an e-commerce looking site using React/Redux.

The content comes from a JSON object we fetch through an API endpoint, dispatch it to Redux store, grab the data we want from a container then renders on the front-end through a component. The site is responsive and cross browser tested on Chrome, Safari, Firefox and IE 11. A boilerplate was used as the initial setup so we have cool things like hot reloading and code splitting.

[./src/assets/wireframes.png](Wireframes) were provided for reference.

## Installation

1. Clone the repo - `git clone https://github.com/billdevcode/spaceship-emporium.git`
2. Go into the folder - `cd spaceship-emporium`
3. Install dependencies - `yarn install` or `npm install`
4. Start server - `yarn start` or `npm start`
5. Open a browser and go to `http://localhost:3000`

## Structure

- The **fun** stuff are all in `/src`
- Routes are set up with `/` auto forwarding to `/spaceships` (in case we want to sell lightsabers or robots in the future) and each individual spaceship is nested as `spaceships/spaceship`.

## License

MIT License
