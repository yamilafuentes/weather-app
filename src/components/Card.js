import React from "react";
import Spinner from "./Spinner"

const Card = ({loadingData, showData, weather, forecast}) => {
  let today = new Date()
  let day = today.getDate()
  let month = today.getMonth() + 1
  let year = today.getFullYear()
  let date = day + '/' + month + '/' + year 

  let url = ""
  let iconUrl = ""

  let iconUrl3 = ""
  let iconUrl6 = ""
  let iconUrl9 = ""

  let forecastDate3 = ""
  let forecastDate6 = ""
  let forecastDate9 = ""

  if (loadingData) {
    return <Spinner />
  }

  if (showData) {
    url = "https://openweathermap.org/img/wn/"
    iconUrl = url + weather.weather[0].icon + "@2x.png"

    iconUrl3 = url + forecast.list[1].weather[0].icon + "@2x.png"
    iconUrl6 = url + forecast.list[2].weather[0].icon + "@2x.png"
    iconUrl9 = url + forecast.list[3].weather[0].icon + "@2x.png"
    
    console.log('forecast.list[1].dt_txt.', forecast.list[1].dt_txt)
    
    forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' + forecast.list[1].dt_txt.substring(11, 13)
    forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' + forecast.list[2].dt_txt.substring(11, 13)
    forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' + forecast.list[3].dt_txt.substring(11, 13)    

  
  }

  console.log('iconUrl', iconUrl)

  return (
    <div className="mt-5">

      {
        showData === true ? (
          <div className="container">
            <div className="card mb-3 mx-auto bg-dark text-light">
              <div className="row g-0">
                <div className="col-md-4">
                  <h3 className="card-title">{weather.name}</h3>
                  <p className="card-date">{date}</p>
                  <h1 className="card-temp">{(weather.main.temp - 273.15).toFixed(1)} °C</h1>
                  <p className="card-desc"><img src={iconUrl} alt="weather icon" /> {weather.weather[0].description}</p>
                  <img src="https://images.pexels.com/photos/6171260/pexels-photo-6171260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rounder-start" alt="decorative image"></img>
                </div>
                <div className="col-md-8">

                  <div className="card-body text-start mt-2">
                    <h5 className="card-text">Maximum Temperature: {(weather.main.temp_max - 273.15).toFixed(1)} °C</h5>
                    <h5 className="card-text">Minimum Temperature: {(weather.main.temp_min - 273.15).toFixed(1)} °C</h5>
                    <h5 className="card-text">Feels Like: {(weather.main.feels_like - 273.15).toFixed(1)} °C</h5>
                    <h5 className="card-text">Humidity: {weather.main.humidity} %</h5>
                    <h5 className="card-text">Wind Speed: {weather.wind.speed} m/s</h5>
                  </div>
                  <hr/>

                  <div className="row mt-4">
                    <div className="col">
                      <p>{forecastDate3}h</p>
                      <p  className="description"><img src={iconUrl3} alt="icon"/>{forecast.list[1].weather[0].description}</p>
                      <p className="temp">{(forecast.list[1].main.temp - 273.15).toFixed(1)}ºC</p>
                    </div>
                    <div className="col">
                      <p>{forecastDate6}h</p>
                      <p className="description"><img src={iconUrl6} alt="icon"/>{forecast.list[2].weather[0].description}</p>
                      <p className="temp">{(forecast.list[2].main.temp - 273.15).toFixed(1)}ºC</p>
                    </div>
                    <div className="col">
                      <p>{forecastDate9}h</p>
                      <p className="description"><img src={iconUrl9} alt="icon"/>{forecast.list[3].weather[0].description}</p>
                      <p className="temp">{(forecast.list[3].main.temp - 273.15).toFixed(1)}ºC</p>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        ): (
          <h2 className="text-light">Sorry, we found no match for your location.</h2>
        )
      }

    </div>
  )
}




export default Card