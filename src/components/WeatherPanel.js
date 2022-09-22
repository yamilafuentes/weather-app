import React, {useState} from "react"
import Form from './Form'
import Card from "./Card"

const WeatherPanel = () => {
  let urlWeather = 'https://api.openweathermap.org/data/2.5/weather?appid=9b430ef19cc45f38f8a20cffd0c257da&lang=en'
  let cityUrl = "&q="

  let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=9b430ef19cc45f38f8a20cffd0c257da&lang=en"

  const [weather, setWeather] = useState([])
  const [forecast, setForecast] = useState([])
  const [loading, setLoading] = useState(false) 
  const [show, setShow] = useState(false)              //para visualizar la tarjeta con la informacion 
  const [location, setLocation] =  useState("")           //para que se pueda comunicar con el formulario

  const getLocation = async (loc) => {                 //funcion para hacer la llamada a la api, recoge la localizacion de la ciudad
    setLoading(true)                                    //cuando hacemos la llamda visualizamos el spiner
    setLocation(loc) 

    //seather

    urlWeather = urlWeather + cityUrl + loc 

    await fetch(urlWeather).then((response) => {
        if(!response.ok) throw {response}
        return response.json() 
    }).then((weatherData) => {
        console.log('weatherData', weatherData)
        setWeather(weatherData)
    }).catch(error =>{
        console.log(error)
        setLoading(false)   
        setShow(false)         //si hay un error que no se visualice
    })


    //Forecast

      urlForecast = urlForecast + cityUrl + loc

    await fetch(urlForecast).then((response) => {
      if(!response.ok) throw {response}
      return response.json() 
    }).then((forecastData) => {
      console.log(forecastData)
      setForecast(forecastData)

      setLoading(false)       //para que no se visualice
      setShow(true)           //mostrar la tarjeta con toda la informacion 

    }).catch(error =>{
      console.log(error)
      setLoading(false)   
      setShow(false)      
    })        
  }   
    
  return (

    <React.Fragment>
      
      <Form 
        newLocation = {getLocation}  //obtener la localizacion
      />

      <Card 
        showData = {show}
        loadingData = {loading}
        weather = {weather}
        forecast = {forecast}
      />
            
    </React.Fragment>


  )
}

export default WeatherPanel