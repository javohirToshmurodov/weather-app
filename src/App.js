import { useEffect, useState } from "react";
import styled from "styled-components";
import { api } from "./axios";
import { Container } from "./styles/components";
import { Link, Route, Routes } from "react-router-dom";
import { WeatherDateList } from "./WeatherDateList";
import WeatherHourly from "./WeatherHourly";
const App = () => {
  const [weatherList, setWeatherList] = useState([]);
  useEffect(() => {
    api.get("/data/2.5/forecast?q=Tashkent").then((res) => {
      // setWeatherList(res.data.list)
      // console.log(res.data.list);

      let response = res.data.list;
      let data = [];
      console.log(data);
      for (const i of response) {
        let date = i.dt_txt.substring(5, 10);
        if (data.filter((e) => e.date === date).length === 0) {
          data.push({ date: date });
        }
      }

      for (const elementData of data) {
        for (const elementRes of response) {
          let resDate = elementRes.dt_txt.substring(5, 10);

          if (elementData.date === resDate) {
            elementData.hourly
              ? (elementData.hourly = [...elementData.hourly, elementRes])
              : (elementData.hourly = [elementRes]);
          }
        }
      }
      for (let element of data) {
        let weatherLists = {};

        for (let hourlyElement of element.hourly) {
          if (weatherLists[hourlyElement.weather[0].main]) {
            weatherLists[hourlyElement.weather[0].main] += 1;
          } else {
            weatherLists = {
              ...weatherLists,
              [hourlyElement.weather[0].main]: 1,
            };
          }
        }
      }

      setWeatherList(data);
    });
  }, []);
  return (
    <Container>
      <Routes>
        <Route
          path="/"
          element={<WeatherDateList weatherList={weatherList} />}
        />
        <Route
          path="/:date"
          element={<WeatherHourly weatherList={weatherList} />}
        />
      </Routes>
    </Container>
  );
};

export default App;
