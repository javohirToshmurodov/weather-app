import { useEffect } from "react";
import { Container } from "./styles";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { fetchForecast } from "./redux/global";
import { WeatherDateList } from "./components/WeatherDateList";
import WeatherHourly from "./components/WeatherHourly";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchForecast());
  }, [dispatch]);
  return (
    <Container>
      <Routes>
        <Route path="/" element={<WeatherDateList />} />
        <Route path="/:date" element={<WeatherHourly />} />
      </Routes>
    </Container>
  );
};

export default App;
