import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Weather from "./Weather";
const WeatherHourly = (props) => {
  const {date} = useParams();
  const [hourly, setHourly] = useState([])

 
  useEffect(()=>{
    const data = props.weatherList.filter(item=>item.date===date);
    setHourly(data[0]?.hourly)
  },[date, props.weatherList])

  return (
    <>
        <Title>Hourly of {date}</Title>
      <WeatherWrapper>
      {hourly?.map((item, index) => ( 
        <Weather
          key={index}
          date={item.dt_txt.substring(10,19)}
          icon={item.weather[0].icon}
          max={item.main.temp_max}
          min={item.main.temp_min}
          title={item.weather[0].main}
        />
      ))}
      </WeatherWrapper>
    </>
  );
};
export default WeatherHourly;


const WeatherWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
`
export const Title = styled.h1`
  text-align: center;
  font-size: 48px;
  color: white;
`