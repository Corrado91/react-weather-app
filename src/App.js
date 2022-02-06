import axios from "axios";
import './App.css';
import React, { useEffect, useState } from "react";
import plus from "../src/assets/img/Plus.png";
import location from "../src/assets/img/Location.png";
import search from "../src/assets/img/Search-1.png"
import sunny from "../src/assets/img/Sunny.png"
import modrainswrsday from "../src/assets/img/ModRainSwrsDay.png"
import cloudy from "../src/assets/img/Cloudy.png"
import wind from "../src/assets/img/wind.png"

function App() {

  const [isActive, setActive] = useState("false");
  const [weather1, setWeather1] = useState("");
  const [pressure, setPressure] = useState("");
  const [deg, setDeg] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [feelsLike, setFeelsLike] = useState(0);
  const [minTemperature, setMinTemperature] = useState(0);
  const [maxTemperature, setMaxTemperature] = useState(0);
  const [temperature1, setTemperature1] = useState(0);
  const [temperature2, setTemperature2] = useState(0);
  const [temperature3, setTemperature3] = useState(0);
  const [cityName1, setCityName1] = useState("");
  const [cityName2, setCityName2] = useState("");
  const [cityName3, setCityName3] = useState("");


  const fetchWeatherCity1 = async () => {
    try{
      const res = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=Turin&appid=aa59ff46a6cab78dc3f47160f7573941"
      );
      setTemperature1(res.data.main.temp);
      setCityName1(res.data.name);
      setWeather1(res.data.weather[0].main);
      setPressure(res.data.main.pressure);
      setMinTemperature(res.data.main.temp_min)
      setMaxTemperature(res.data.main.temp_max)
      setHumidity(res.data.main.humidity)
      setFeelsLike(res.data.main.feels_like)
      setDeg(res.data.wind.deg)
      console.log(res.data);
    } catch (err) {
      console.log(err)
    }
  }

  const fetchWeatherCity2 = async () => {
    try{
      const res = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=London&appid=aa59ff46a6cab78dc3f47160f7573941"
      );
      setTemperature2(res.data.main.temp);
      setCityName2(res.data.name);
      console.log(res.data);
    } catch (err) {
      console.log(err)
    }
  }

  const fetchWeatherCity3 = async () => {
    try{
      const res = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=Rome&appid=aa59ff46a6cab78dc3f47160f7573941"
      );
      setTemperature3(res.data.main.temp);
      setCityName3(res.data.name);
      console.log(res.data);
    } catch (err) {
      console.log(err)
    }
  }

  const handleToggle = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    fetchWeatherCity1();
    fetchWeatherCity2();
    fetchWeatherCity3();
  }, []);


  return (
    <div className="App">

      <div className="container-fluid">
        <div className="row">
  
          <div className="col-sm-12 col-md-6 col-lg-8">
            {/* CITY 1 */}
            <div className="rectangle-city-1">
              <div className="row justify-content-around">
                <div className="col-8 mt-5">
                  <div className="temperature mx-auto">{temperature1.toString().split("", 2)}°</div>
                  <div className="weather mt-4"><img src={sunny}></img></div>
                </div>
              </div>
            </div>
            <div className="artiom-vallat-9-vbj-0-qkx-1-g-">
              <div className="row justify-content-around">
                <div className="col-6 col-sm-6 col-md-6 col-lg-8 mt-5 pt-4">
                  <div className="city">{cityName1.split(" ")[2]}</div>
                  <div className="data my-4">Friday, 18 September</div>
                  <div className="weather">{weather1}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4">
            {/* ADD CITY */}
            <div className="rectangle d-flex justify-content-center align-items-center">
              <img src={plus} className="plus" /><span className="aggiungi-citta">Aggiungi città</span>
            </div>

            {/* OTHER CITIES */}
            <div className="rectangle-city-2 my-4">
              <div className="row mx-auto py-3">
                <div className="col-4">
                  <div className="city2 mx-auto">{cityName2}</div>
                  <div className="data2 my-2 mx-auto">Friday, 18 September</div>
                  <div className="hours mx-auto">2:38 p.m.</div>
                </div>
                <div className="col-4">
                  <div className="weather mx-auto"><img src={modrainswrsday}></img></div>
                </div>
                <div className="col-4">
                  <div className="temperature mx-auto">{temperature2.toString().split("", 2)}°</div>
                </div>
              </div>
            </div>
            {/* OTHER CITIES */}
            <div className="rectangle-city-3 my-4">
              <div className="row mx-auto py-3">
                <div className="col-4">
                  <div className="city2 mx-auto">{cityName3}</div>
                  <div className="data2 my-2 mx-auto">Friday, 18 September</div>
                  <div className="hours mx-auto">3:38 p.m.</div>
                </div>
                <div className="col-4 py-4">
                  <div className="weather mx-auto"><img src={cloudy}></img></div>
                </div>
                <div className="col-4">
                  <div className="temperature mx-auto">{temperature3.toString().split("", 2)}°</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-8 py-5">
            <div className="row">
              <div className="col-sm-12 col-4 col-md-6 col-lg-4">
                {/* TODAY */}
                <div className="today">
                  <span>Today</span>
                  <div className="mask-today">
                    <div class="container">
                      <div class="row justify-content-md-center pt-5">
                        <div class="col col-lg-3 col-sm-4">
                          <p className="temperature1">
                            {temperature1.toString().split("", 2)}° <br />
                          </p>
                          <p className="temperature">
                            {maxTemperature.toString().split("", 2)}°<br />
                          </p>
                          <p className="temperature">
                            {minTemperature.toString().split("", 2)}°<br />
                          </p>
                          <p className="temperature">
                            {temperature2.toString().split("", 2)}°<br />
                          </p>
                        </div>
                        <div class="col-md-auto col-sm-4">
                          <p className="now">Now</p>
                          <div className="oval"></div>
                          <div className="oval oval-1"></div>
                          <div className="oval oval-2"></div>
                          <div className="oval oval-3"></div>
                          <div className="line mt-4 mx-auto"></div>
                        </div>
                        <div class="col col-lg-3 col-sm-4">
                          <br />
                          <br />
                          <p className="weather mt-5 pt-3 mb-0">4 p.m.</p>
                          <br />
                          <p className="weather mt-5 pt-2">5 p.m.</p>
                          <br />
                          <p className="weather mt-4 pt-3">7 p.m.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-8 col-md-6 col-lg-8 d-flex justify-content-center align-items-end">
                {/* MENU WEEK AND MONTH */}
                <div className="white">
                  <span onClick={handleToggle} className={isActive ? "this-week" : "this-week-default"}>This week</span>
                  <span onClick={handleToggle} className={isActive ? "this-month" : "this-month-active"}>This month</span>
                </div>

                <div className="group-4-group-3-group-2-mask d-flex">
                  {/* MONTH */}
                  <div className={isActive ? "d-none" : "box mx-auto row"}>
                    <div className="col-6">
                      <div className="day ml-3 py-4">Fri, 25 Set</div>
                      <div className="weather py-5">
                        <img className="ml-4" src={wind} />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="pressure ml-3 py-4">{pressure.toString().split("", 2)}°</div>
                      <div className="s-w ml-3 py-4">
                        <span>Strong wind</span><br />
                        <span>The high will be {maxTemperature.toString().split("", 2)}°C, the low<br /> will be {minTemperature.toString().split("", 2)}°C.</span><br /><br />
                        <span>Humidity: {humidity}%</span><br />
                        <span>UV: {feelsLike.toString().split("", 1)}</span><br />
                        <span>Dew point: {deg.toString().split("", 2)}°C</span>
                      </div>
                    </div>
                  </div>
                  {/* WEEK */}
                  <div className={isActive ? "rectangle mx-auto" : "d-none"}>
                    <div className="day mx-auto py-4">Saturday</div>
                    <div className="temperature mx-auto py-5">{temperature1.toString().split("", 2)}°</div>
                    <div className="weather mx-auto py-5"><img src={sunny}></img></div>
                  </div>
                  <div className={isActive ? "rectangle mx-auto" : "d-none"}>
                    <div className="day mx-auto py-4">Sunday</div>
                    <div className="temperature mx-auto py-5">{temperature2.toString().split("", 2)}°</div>
                    <div className="weather mx-auto py-5"><img src={cloudy}></img></div>
                  </div>
                  <div className={isActive ? "rectangle mx-auto" : "d-none"}>
                    <div className="day mx-auto py-4">Monday</div>
                    <div className="temperature mx-auto py-5">{temperature3.toString().split("", 2)}°</div>
                    <div className="weather mx-auto py-5"><img src={modrainswrsday}></img></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-4 py-5">
            {/* OTHER CITIES */}
            <h3 className="ml-3">Search</h3>
            <input className="mask-input d-flex justify-content-center align-items-center my-4" placeholder="ex: Miami" type="text"></input>
            <button className="search-btn"><span><img className="" src={search} /></span></button>

            <h3 className="ml-3">Localization</h3>
            <div className="mask-location">
              <span className="d-flex justify-content-center align-items-center py-4">
                <img src={location} />
              </span>
              <div className="add-localization">ADD LOCALIZATION</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
