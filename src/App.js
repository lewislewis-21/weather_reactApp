// create a weather app

import React, { useState } from "react";

const App=()=>{
    const [city,setcity] = useState();
    const [weatherdata,setweatherdata] = useState();
    const apikey = "79e82631d0e5804d1511c2fb42d8bfb1"

  
      const fetchdata = async () =>{
        try{
          let myweather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
          let data = await myweather.json();

           setweatherdata(data);
        }catch(error){
          console.log("error...",error);
          setweatherdata(null)
        }
      }
  
      const handlesubmit=(e)=>{
        e.preventDefault();
        if(city){
          fetchdata();
        }
      }

    return(
      <>
        <div>
          <form onSubmit={handlesubmit} className="shadow p-5">
            <h3 className="p-3 text-info">Enter City Name:</h3>
            <input
              className="m-3"
              type="text"
              value={city}
              onChange={(e)=>setcity(e.target.value)}
            />
            <button type="submit">submit</button>
            <div className="m-3">
          {weatherdata && weatherdata.main ? 
          (<>
          <p>temperature is {weatherdata.main.temp}</p>
          <p>humidity is {weatherdata.main.humidity}</p>
          <p>pressure is {weatherdata.main.pressure}</p>
          </>)
          :
          (<p>loading...</p>)
          }
        </div>
          </form>
        </div>
      </>
    )
}


export default App