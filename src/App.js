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
      for (let i = 0; i < data.length; i++) {
        let weatherLists = {};
        let temp_max = [];
        let temp_min = [];
        for (let hourlyElement of data[i].hourly) {
          if (weatherLists[hourlyElement.weather[0].main] === undefined) {
            weatherLists[hourlyElement.weather[0].main] = 1;
          } else {
            weatherLists[hourlyElement.weather[0].main] =
              weatherLists[hourlyElement.weather[0].main] + 1;
          }
          temp_max.push(hourlyElement.main.temp_max);
          temp_min.push(hourlyElement.main.temp_min);
        }
        console.log(temp_max);
        let max = Object.keys(weatherLists).reduce((a, b) =>
          weatherLists[a] > weatherLists[b] ? a : b
        );

        data[i].main = max;
        data[i].maxDegrees = [
          temp_max[0],
          temp_max[Math.round(temp_max.length / 2) - 1],
          temp_max[temp_max.length - 1],
        ];
        data[i].minDegrees = [
          temp_min[0] ,
            temp_min[Math.round(temp_min.length / 2) - 1] ,
            temp_min[temp_min.length - 1],
        ];
      }

      setWeatherList(data);
      console.log(data);
    });
  }, []);

  console.log(weatherList);
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
