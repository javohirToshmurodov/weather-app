import styled from "styled-components";
import { Wrapper } from "./styles/components";
const WeatherDaily = (props) => {
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
        <p>{props.title}</p>
      </div>
      <div className="degree">
        <p className="max">19° - 21° - 18°</p>
        <p className="min">12° - 15° - 11°</p>
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
    flex-direction: column;
  }
  .min,
  .max {
    font-size: 18px;
    margin: 5px;
  }
`;
