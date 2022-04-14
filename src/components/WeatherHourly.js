import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Weather from "./Weather";
import { Loader } from "./Loader";
const WeatherHourly = (props) => {
  const { date } = useParams();
  const [hourly, setHourly] = useState([]);
  const forecast = useSelector((state) => state.global.forecast);
  const loading = useSelector((state) => state.global.loading);
  let navigate = useNavigate();
  useEffect(() => {
    const data = forecast.filter((item) => item.date === date);
    setHourly(data[0]?.hourly);
  }, [date, forecast]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header>
            <Button onClick={() => navigate("/")}>Back</Button>
            <Title>Hourly of {date}</Title>
          </Header>
          <WeatherWrapper>
            {hourly?.map((item, index) => (
              <Weather
                key={index}
                date={item.dt_txt.substring(10, 19)}
                icon={item.weather[0].icon}
                max={item.main.temp_max}
                min={item.main.temp_min}
                title={item.weather[0].main}
              />
            ))}
          </WeatherWrapper>
        </>
      )}
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
`;
export const Title = styled.h1`
  text-align: center;
  font-size: 48px;
  color: white;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  /* padding:0 70px; */
`;

const Button = styled.button`
  font-size: 22px;
  padding: 5px 15px;
  border-radius: 8px;
  border: 1px solid white;
  background-color: transparent;
  color: white;
  cursor: pointer;
`;
