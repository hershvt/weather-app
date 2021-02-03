<template>
  <div id="app">
    
  <main>
    <h1>Weather Forecast App</h1>
   
    <div class="search-box" >
      <input type="text" class="search" placeholder="Enter Location..."
       v-model="query" @keypress="fetchWeather"> 
    </div>
    
    
     <div class="weather-wrap" v-if="typeof weather_data.main != 'undefined'">
      <div class="location-box">
        <div class="location">{{weather_data.name}},{{weather_data.sys.country}}</div>       
      </div>
      <div class="weather-box">
        <div class="weather">{{weather_data.weather[0].main}}</div>
        <h5>Temperature</h5>
        <div class="temp">{{weather_data.main.temp}}</div>
        <br>
        <h5>Todays High Temp</h5>
        <div class="high-temp">{{weather_data.main.temp_max}}</div>
        <h5>Todays Low Temp</h5>
        <div class="low-temp">{{weather_data.main.temp_min}}</div>
        <h5>Wind Speed</h5>
        <div class="high-temp">{{weather_data.wind.speed}}</div>
        <h5>Humidity</h5>
        <div class="low-temp">{{weather_data.main.humidity}}</div>
        <h5>Pressure</h5>
        <div class="high-temp">{{weather_data.main.pressure}}</div>
        

      </div> 
    </div>

    <Weektemp/>
  </main>
  </div>
  
</template>

<script>
import Weektemp from './components/Weektemp.vue';


export default {
 
  name: 'App',
  components :{
    Weektemp
  },
  data(){
    return {
      api_key : '5dcc242a4d6e359f744bd50a270f42e0',
      base_url: 'https://api.openweathermap.org/data/2.5/',
      query: '',
      weather_data : {
       
      }
    }
  },
  methods:{
    fetchWeather(e){
      if(e.key == "Enter"){
        fetch(`${this.base_url}weather?q=${this.query}&units=metric&appid=${this.api_key}`)
        .then(res => {
          return res.json();
        }).then(this.setResults);
      }
    },
    setResults(results){
      console.log(results);
      this.weather_data = results;

    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  font-size: 50px;
  color: #fff;
  /* margin-top: 100px; */
  
  background-image: url('./assets/new-york.png');
  background-size: cover;

}

h1{
padding-top: 20px;
text-align: center;
}

.search-box{
 
  margin-bottom: 20px;
}

.search-box .search{
  
  width: 28%;
  margin-left: 17px;
  color: #555555;
  font-size: 40px;

  appearance: none;
  background : none;
  outline : none;
  border: none;

  background-color: rgba(255,255,255,0.5);
  border-radius: 0 15px 0 15px;
}

main{
  min-height: 100vh;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4));
}

.weather-wrap{
background-color: rgba(255,255,255,0.2);
border-radius: 10px;
width: 45%;
box-shadow: 2px 5px rgba(0,0,0,0.2);
}

.location{
  padding-top: 10px;
  margin-left: 30px;
  text-align: left;
  text-shadow: 1px 5px rgba(0,0,0,0.2);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 50px;
  color: #fff;
}

.weather-box{
   column-count: 2;
  padding-top: 10px;
  margin-left: 30px;
  text-align: left;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 40px;
  color: #fff;
}



</style>
