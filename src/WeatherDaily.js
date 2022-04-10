import styled from "styled-components";
import { Wrapper } from "./styles/components";
const WeatherDaily = (props) => {
  console.log(props.maxDegrees);
  return (
    <StyledWrapper>
      <p className="date">{props.date} </p>

      <div className="weather-images">
        <img
          src={`http://openweathermap.org/img/wn/${props.icon}.png`}
          alt="weather-icon"
        />
        -
        <img
          src={`http://openweathermap.org/img/wn/${props.icon}.png`}
          alt="weather-icon"
        />
        -
        <img
          src={`http://openweathermap.org/img/wn/${props.icon}.png`}
          alt="weather-icon"
        />
      </div>
      <div className="weather-title">
        <p>{props.main}</p>
      </div>
      <div className="degree">
        <p className="max">{props.maxDegrees[0]}° - {props.maxDegrees[1]}° - {props.maxDegrees[2]}°</p>

      </div>
      <div className="degree">
        <p className="min">{props.minDegrees[0]}° - {props.minDegrees[1]}° - {props.minDegrees[2]}°</p>
      </div>
    </StyledWrapper>
  );
};

export default WeatherDaily;

const StyledWrapper = styled(Wrapper)`
  width: 180px;
  padding: 10px;
  min-height: 100px;
  .date {
    margin-top: 0;
  }
  .weather-images {
    margin-top: -20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .degree {
    display: flex;
  }
  .min,
  .max {
    font-size: 15px;
  }
  .weather-title p {
    margin: 0 0 40px 0;
  }
`;
