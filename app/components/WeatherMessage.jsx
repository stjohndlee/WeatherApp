var React = require('react');

// var WeatherMessage = (props) => {
//   var {temp, location} = props;
//
//   return (
//     <h3>It's {temp} C in {location}.</h3>
//   );
// };
// module.exports = WeatherMessage;

var WeatherMessage = ({temp, location}) => {
  return (
    <h3 className='text-center'>It's {temp} C in {location}. Have a great day!</h3>
  );
};
module.exports = WeatherMessage;
