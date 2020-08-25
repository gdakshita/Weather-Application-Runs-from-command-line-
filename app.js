const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const address = process.argv[2]

if (!address){
    console.log('Provide a address')
}
else {
    geocode(address,(error, {latitude,long,location} = {})=>{
        if(error){
            return console.log(error)
    
        }
        forecast(latitude,long,(error,data_forecast)=>{
            if(error){
                return console.log(error)
            }
    
            console.log('location',location)
            console.log(data_forecast)
        })
    
    })
    
}



