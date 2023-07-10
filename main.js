const container = document.getElementById("container");
const container2 = document.getElementById("container2");

const getWeather = async function () {
  try {
    const weather = await axios
      .get(
        "https://api.tomorrow.io/v4/weather/forecast?location=jerusalem&timesteps=1d&units=metric&apikey=IzQzDBKPIPQ72niPVsM29YxLnrnA6XDq"
      )
      .then((response) => {
        const ww = response.data.timelines.daily[0].values.temperatureAvg;
        console.log(ww);
        container.innerHTML = ww;
      });
  } catch (error) {
    console.log("no");
  }
};
const getWeather2 = async function () {
  try {
    const weather = await axios
      .get(
        "https://api.tomorrow.io/v4/weather/history/recent?location=Jerusalem%20&timesteps=1d&units=metric&apikey=IzQzDBKPIPQ72niPVsM29YxLnrnA6XDq"
      )
      .then((response) => {
        const mm = response.data.timelines.daily[0].values.temperatureAvg;
        console.log(mm);
        container2.innerHTML = mm;
      });
  } catch (error) {
    console.log("no");
  }
};

getWeather();
getWeather2();
