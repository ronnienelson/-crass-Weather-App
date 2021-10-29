//function converts kelvin to celsius. and then celsius to farenheit.
const converter=(a)=>{
  let b=a-273.15
let c= b*9/5+32
  return Math.floor(c)
}

const display= document.querySelector('h1')

const display2= document.querySelector('#high')
const display3= document.querySelector('#low')
const display4= document.querySelector('#condition')


const form= document.querySelector('form')

form.addEventListener('submit',(e)=>{
  e.preventDefault()
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
   //if statements handle potential outcomes and display them on the DOM
   if(converter(tem)>=36&& converter(tem)<=82 ){
   display.innerText=`The Temperature in ${input} right now is ${converter(tem)}℉. It's not too fucking hot, and not too fucking cold`
   display2.innerText=`High:${converter(data.main.temp_max)}℉`
   display3.innerText=`Low:${converter(data.main.temp_min)}℉`
   display4.innerText=`Expect: ${data.weather[0].description}`

   }
   else if(converter(tem)>82){
       display.innerText=`The Temperature in ${input} right now is ${converter(tem)}℉. It's FUCKING HOT HOLY SHITBALLS.`
       display2.innerText=`High:${converter(data.main.temp_max)}℉`
   display3.innerText=`Low:${converter(data.main.temp_min)}℉`
   display4.innerText=`Expect: ${data.weather[0].description}`
   }
   else if(converter(tem)<=35){
     display.innerText=`The Temperature in ${input} right now is ${converter(tem)}℉. OH MY FUCKING GOD IT'S FUCKING FREEZING GO INSIDE.`
     display2.innerText=`High:${converter(data.main.temp_max)}℉`
   display3.innerText=`Low:${converter(data.main.temp_min)}℉`
   display4.innerText=`Expect: ${data.weather[0].description}`
   }
   else{
      display.innerText=`The Temperature in ${input} right now is ${converter(tem)}℉. It's a little goddamn chilly`
   display2.innerText=`High:${converter(data.main.temp_max)}℉`
   display3.innerText=`Low:${converter(data.main.temp_min)}℉`
   display4.innerText=`Expect: ${data.weather[0].description}`
   }
  })
  .catch(err => {
   console.log('no',err)
  });

})
