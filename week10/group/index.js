import { getJSON, getLocation } from "./utilities.js";

const baseUrl =
  "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02";

// function testGetQuakesForLocation() {
//   var latitude, longitude, maxradiuskm;
//   // call the getLocation function to get the lat/long
//   let location = getLocation();
//   location.then((result) => {
//     latitude = result.coords.latitude;
//     longitude = result.coords.longitude;
//     maxradiuskm = 100;

//     // use that information to build out the correct URL
//     const geoUrl = `${baseUrl}&latitude=${latitude}&longitude=${longitude}&maxradiuskm=${maxradiuskm}`; //+ // add location information here
//     console.log(geoUrl);
//     // use the url to request the correct quakes
//     let data = getJSON(geoUrl);
//     console.log(data);

//     //log out the quakes for now.
//   });
// }

// testGetQuakesForLocation();
