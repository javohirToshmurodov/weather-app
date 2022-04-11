import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import WeatherDaily from "./WeatherDaily";
import { Title } from "./WeatherHourly";
import { useSelector } from "react-redux";
export const WeatherDateList = () => {
  const forecast = useSelector((state) => state.global.forecast);
  return (
    <>
      <Title>{forecast.length} days Forecast</Title>
      <WeatherListWrapper>
        {forecast.map((e, i) => (
          <Link to={`/${e.date}`} key={i}>
            <WeatherDaily
              date={e.date}
              icon={e.hourly[0].weather[0].icon}
              main={e.main}
              maxDegrees={e.maxDegrees}
              minDegrees={e.minDegrees}
              icons={e.icons}
            />
          </Link>
        ))}
      </WeatherListWrapper>
    </>
  );
};
const WeatherListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;
  gap: 5px;
  a {
    color: rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease;
    text-decoration: none;
    border-radius: 10px;
    font-size: 22px;
    padding: 5px;
    :hover {
      transform: scale(1.04);
    }
  }
`;
