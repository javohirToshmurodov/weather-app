import { useEffect, useState } from "react";
import { api } from "./axios";
import { Container } from "./styles/components";
import Weather from "./Weather";

const App = () => {
  const [weatherList, setWeatherList] = useState([]);
  useEffect(() => {
    api.get("/data/2.5/forecast?q=Tashkent").then((res) => {
      // setWeatherList(res.data.list)
      // console.log(res.data.list);

      let response = res.data.list;
      let data = [];

      for (const i of response) {
        let date = i.dt_txt.substring(5, 10);
        console.log(date);
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
      console.log(data);
    });
  }, []);
  return (
    <Container>
      {weatherList.map((item, index) => (
        <Weather
          key={index}
          date={item.dt_txt}
          icon={item.weather[0].icon}
          max={item.main.temp_max}
          min={item.main.temp_min}
        />
      ))}
    </Container>
  );
};

export default App;
