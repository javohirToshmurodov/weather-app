import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../axios";

export const fetchForecast = createAsyncThunk(
  "global/fetchForecast",
  async () => {
    const result = await api
      .get("/data/2.5/forecast?q=Tashkent")
      .then((res) => {
        let response = res.data.list;
        let data = [];
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
          let icons = [];
          for (let hourlyElement of data[i].hourly) {
            if (weatherLists[hourlyElement.weather[0].main] === undefined) {
              weatherLists[hourlyElement.weather[0].main] = 1;
            } else {
              weatherLists[hourlyElement.weather[0].main] =
                weatherLists[hourlyElement.weather[0].main] + 1;
            }
            temp_max.push(hourlyElement.main.temp_max);
            temp_min.push(hourlyElement.main.temp_min);
            icons.push(hourlyElement.weather[0].icon);
          }
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
            temp_min[0],
            temp_min[Math.round(temp_min.length / 2) - 1],
            temp_min[temp_min.length - 1],
          ];
          data[i].icons = [
            icons[0],
            icons[Math.round(icons.length / 2)],
            icons[icons.length - 1],
          ];
        }
        return data;
      });
    return result;
  }
);

const initialState = {
  forecast: [],
  loading: false,
};
const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchForecast.pending]: (state) => {
      state.loading = true;
    },
    [fetchForecast.fulfilled]: (state, action) => {
      state.forecast = action.payload;
      state.loading = false;
    },
  },
});

export default globalSlice.reducer;
