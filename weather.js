//function converts kelvin to celsius. and then celsius to farenheit.
const converter=(a)=>{
  let b=a-273.15
let c= b*9/5+32
  return Math.floor(c)
}

const curse=document.querySelector('#curse')
const specs=document.querySelector('#specs')
const display= document.querySelector('#cityname')
const temperature= document.querySelector('#temperature')
const rating= document.querySelector('#rating')
const container=document.querySelector('#containers')
const display2= document.querySelector('#high')
const display3= document.querySelector('#low')
const display4= document.querySelector('#condition')


const form= document.querySelector('form')

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  specs.hidden=false;
  curse.hidden=false;
  const input=form.elements.ins.value
  const input2=form.elements.ins2.value
  const input3=form.elements.ins3.value
  const APIKEY= '29a7fe06e62c2f9cac4afa909dc55ebe'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${input},${input2},${input3}&appid=${APIKEY}`;

  //api.openweathermap.org/data/2.5/weather?q=${input},${input2},${input3}&appid=${APIKEY}
  
 fetch(url)
  .then(response => response.json())
  .then(data => {
   const tem=data.main.temp
   console.log(data)
   
   if(converter(tem)>=36&& converter(tem)<=65 ){
     if(data.weather[0].description=='mist'|| data.weather[0].description=='light rain'|| data.weather[0].description=='rain' ||
       data.weather[0].description=='heavy rain'){  container.style.backgroundImage="url('https://www.teahub.io/photos/full/186-1866807_sprinkling-rain-gif.gif')"
                                            
     }
     else if(data.weather[0].description=='clear sky'){
container.style.backgroundImage="url('https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/sunny-sky-carlos-caetano.jpg')"
     }
     else if (data.weather[0].description=='overcast clouds'){
       container.style.backgroundImage="url('https://images.unsplash.com/photo-1534358594138-6955f589fa24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFyayUyMGNsb3VkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80')"
     }
      else if(data.weather[0].description=='few clouds' || data.weather[0].description=='broken clouds'){
       container.style.backgroundImage="url('https://images.unsplash.com/photo-1571457403686-45e398766082?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWR5JTIwYmx1ZSUyMHNreXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80')"
       
     }
       
   
   display.innerText=`${input}`
   temperature.innerText=`${converter(tem)}℉`
   rating.innerText=`Fucking Chilly`
   display2.innerText=`High:${converter(data.main.temp_max)}℉`
   display3.innerText=`Low:${converter(data.main.temp_min)}℉`
   display4.innerText=`Expect: ${data.weather[0].description}`

   }
   else if(converter(tem)>80){
     
      if(data.weather[0].description=='mist'|| data.weather[0].description=='light rain'|| data.weather[0].description=='rain' ||
       data.weather[0].description=='heavy rain'){  container.style.backgroundImage="url('https://www.teahub.io/photos/full/186-1866807_sprinkling-rain-gif.gif')"
     }
     else if(data.weather[0].description=='clear sky'){
container.style.backgroundImage="url('https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/sunny-sky-carlos-caetano.jpg')"
     }
     else if (data.weather[0].description=='overcast clouds'){
       container.style.backgroundImage="url('https://images.unsplash.com/photo-1534358594138-6955f589fa24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFyayUyMGNsb3VkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80')"
     }
      else if(data.weather[0].description=='few clouds' || data.weather[0].description=='broken clouds'){
       container.style.backgroundImage="url('https://images.unsplash.com/photo-1571457403686-45e398766082?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWR5JTIwYmx1ZSUyMHNreXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80')"
       
     }
     
   display.innerText=`${input}`
   temperature.innerText=`${converter(tem)}℉`
   rating.innerText=`TOO FUCKING HOT`
   display2.innerText=`High:${converter(data.main.temp_max)}℉`
   display3.innerText=`Low:${converter(data.main.temp_min)}℉`
   display4.innerText=`Expect: ${data.weather[0].description}`
   }
   else if(converter(tem)<=35){
     
      if(data.weather[0].description=='mist'|| data.weather[0].description=='light rain'|| data.weather[0].description=='rain' ||
       data.weather[0].description=='heavy rain'){  container.style.backgroundImage="url('https://www.teahub.io/photos/full/186-1866807_sprinkling-rain-gif.gif')"
     }
     else if(data.weather[0].description=='clear sky'){
container.style.backgroundImage="url('https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/sunny-sky-carlos-caetano.jpg')"
     }
     else if (data.weather[0].description=='overcast clouds'){
       container.style.backgroundImage="url('https://images.unsplash.com/photo-1534358594138-6955f589fa24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFyayUyMGNsb3VkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80')"
     }
      else if(data.weather[0].description=='few clouds' || data.weather[0].description=='broken clouds'){
       container.style.backgroundImage="url('https://images.unsplash.com/photo-1571457403686-45e398766082?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWR5JTIwYmx1ZSUyMHNreXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80')"
       
     }
     
   display.innerText=`${input}`
   temperature.innerText=`${converter(tem)}℉`
   rating.innerText=`Fucking FREEZING HOLY SHIT`
   display2.innerText=`High:${converter(data.main.temp_max)}℉`
   display3.innerText=`Low:${converter(data.main.temp_min)}℉`
   display4.innerText=`Expect: ${data.weather[0].description}`
   }
   
   else{
          if(data.weather[0].description=='mist'|| data.weather[0].description=='light rain'|| data.weather[0].description=='rain' ||
       data.weather[0].description=='heavy rain'){  container.style.backgroundImage="url('https://www.teahub.io/photos/full/186-1866807_sprinkling-rain-gif.gif')"
     }
     else if(data.weather[0].description=='clear sky'){
container.style.backgroundImage="url('https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/sunny-sky-carlos-caetano.jpg')"
     }
     else if (data.weather[0].description=='overcast clouds'){
       container.style.backgroundImage="url('https://images.unsplash.com/photo-1534358594138-6955f589fa24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFyayUyMGNsb3VkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80')"
     }
     else if(data.weather[0].description=='few clouds' || data.weather[0].description=='broken clouds'){
       container.style.backgroundImage="url('https://images.unsplash.com/photo-1571457403686-45e398766082?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWR5JTIwYmx1ZSUyMHNreXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80')"
       
     }
     
   display.innerText=`${input}`
   temperature.innerText=`${converter(tem)}℉`
   rating.innerText=`NICE AS FUCK`
   display2.innerText=`High:${converter(data.main.temp_max)}℉`
   display3.innerText=`Low:${converter(data.main.temp_min)}℉`
   display4.innerText=`Expect: ${data.weather[0].description}`
   }
  })
  .catch(err => {
   console.log('no',err)
  });

})
