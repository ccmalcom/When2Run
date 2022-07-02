export  async function getWeatherData(zip) {
    try{
        let res = await fetch(`https://royal-canoe-73866.herokuapp.com/weather/check/${zip}`);
        let data = await res.json();
        let hi = getHi(data.temp, data.humidity);
        let canRun = tooHot(hi) ? 'Too hot!' : 'Can run!';
        let transformedData ={
            t : data.temperature,
            rh : data.humidity,
            condition : data.condition,
            city: data.city,
            icon: data.icon,
            hi: hi,
            canRun: canRun
        }     
        return transformedData;

    } catch(err){
        console.log(err);
    }
}

export const tooHot = (heatIndex) =>{
    // heatIndex=getHi(t, rh);
    if(heatIndex > 98.6){
        return true;
    } else {
        return false;
    }
}
// export const tooHot = (t, rh) =>{
//     heatIndex=getHi(t, rh);
//     if(heatIndex > 98.6){
//         console.log(`It's too hot!`);
//         return true
//     } else {
//         console.log(`It's not too hot!`);
//         return false;
//     }
// }

export const getHi = (t, rh) =>{
    let hi =-42.379 + 2.04901523*t + 10.14333127*rh - .22475541*t*rh - .00683783*t*t - .05481717*rh*rh + .00122874*t*t*rh + .00085282*t*rh*rh - .00000199*t*t*rh*rh;
    console.log(`before adjustment: ${hi}`);

    if (hi <= 80) {
        hi = (0.5*(t + 61 + ((t-68)*1.2) + (rh*0.094)));
        console.log(`after hi<=80 adjustment: ${hi}`);
        return hi;
    } else if(rh < 13 && (t >= 80 && t <= 112)){
        hi = hi - ((13-rh)/4 * Math.sqrt((17-Math.abs(t-95))/17));
        console.log(`after rh<13 adjustment 2: ${hi}`);
        return hi;
    } else if (rh > 85 && (t >= 80 && t <= 87)){
         hi = hi - (((rh-85)/10) * ((87-t)/5));
        console.log(`after rh>85 t=80-87 adjustment 3: ${hi}`);
        return hi;
    } else {
        console.log(`no adjustment: ${hi}`);
        return hi;
    }
    
} 