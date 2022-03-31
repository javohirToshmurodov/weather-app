import styled from "styled-components";
import  {Wrapper}  from "./styles/components";
const Weather = (props) => {
  return (
    <Wrapper>
      <p className="date">{props.date} </p>
      <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="" />
      <div className="degree">
        <p className="max">{props.max}°</p>
        <p className="min">{props.min}°</p>
      </div>
    </Wrapper>
  );
};

export default Weather;

