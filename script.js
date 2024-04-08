const apiKey="8fd84b103424745236f8d90653e938b5";
const searchBox=document.getElementById('searchBox');
const form=document.getElementById('form');
const celcius=document.getElementById('celcius');
const percentage=document.getElementById('percentage');
const invalid=document.getElementById('invalid');
const windspeed=document.getElementById('windspeed');
const cityname=document.querySelector('.cityName');
const sky=document.querySelector('.sky');
const weather=document.querySelector('.weather');
const result=document.querySelector('#result');



async function callApi(city){
  const getApi= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
  if(getApi.status===404){
    invalid.style.display='block'
  }
  const APi=await getApi.json()
const temperature=APi.main.temp;
const cityName=APi.name;
const humidity=APi.main.humidity;
const windSpeed=APi.wind.speed;


celcius.innerHTML=`${Math.round(temperature)}<sup>o</sup>C`;
percentage.innerHTML=humidity + '%';
windspeed.innerHTML=windSpeed +'Km/h';
cityname.innerHTML=cityName;
if(APi.weather[0].main=='Clouds'){
  sky.src='images/clouds.png'
} else if(APi.weather[0].main=='Clear'){
  sky.src='images/clear.png'
} else if(APi.weather[0].main=='Drizzle'){
  sky.src='images/drizzle.png'
}
else if(APi.weather[0].main=='Rain'){
  sky.src='images/rain.png'
}else if(APi.weather[0].main=='Snow'){
  sky.src='images/snow.png'
}else if(APi.weather[0].main=='Mist'){
  sky.src='images/mist.png'
}
weather.style.display='block'
result.innerHTML="Seems like"+ " " + APi.weather[0].main
}


form.addEventListener('submit',(e)=>{
e.preventDefault()
  callApi(searchBox.value)
})