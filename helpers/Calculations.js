const API_KEY = 'IrTr5UANqTatitAbpdw4a3jAWVZWuDIU3ZgjwivK'

export async function getWeatherData(zip) {
    console.log(`in calculations.js zip: ${zip}`);
    console.log(`in calculations.js API_KEY: ${API_KEY}`);
    try {
        let res = await fetch(`https://fqity1uf06.execute-api.us-east-2.amazonaws.com/dev/weather/check/${zip}`, {
            headers: {
                'x-api-key': API_KEY
            }
        });
        let data = await res.json();
        console.log('data from call in Calculations.js', data);
        let hi = getHi(data.temp, data.humidity);
        console.log(`data.temp: ${data.temp}, data.humidity: ${data.humidity} `)
        console.log(`hi: ${hi} `)
        let canRun = tooHot(hi) ? 'Too hot!' : 'Can run!';
        let transformedData = {
            t: data.temp,
            rh: data.humidity,
            condition: data.condition,
            city: data.city,
            state: data.state,
            icon: data.icon,
            hi: data.city == undefined ? 1 : hi,
            canRun: data.city == undefined ? `Hm... we can't seem to find data for ${zip}` : canRun,
            location: zip
        }
        return transformedData;

    } catch (err) {
        console.log(err);
    }
}

export const tooHot = (heatIndex) => {
    // heatIndex=getHi(t, rh);
    if (heatIndex > 98.6) {
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

export const getHi = (t, rh) => {
    let hi = (-42.379 + 2.04901523 * t + 10.14333127 * rh - 0.22475541 * t * rh - 0.00683783 * t ** 2 - 0.05481717 * rh ** 2 + 0.00122874 * t ** 2 * rh - 0.00085282 * t * rh ** 2 - 0.00000199 * t ** 2 * rh ** 2)

    console.log(`before adjustment: ${hi}`);

    if (hi <= 80) {
        hi = Math.round(0.5 * (t + 61 + ((t - 68) * 1.2) + (rh * 0.094)));
        console.log(`after hi<=80 adjustment: ${hi}`);
        return hi;
    } else if (rh < 13 && (t >= 80 && t <= 112)) {
        hi = Math.round(hi - ((13 - rh) / 4 * Math.sqrt((17 - Math.abs(t - 95)) / 17)));
        console.log(`after rh<13 adjustment 2: ${hi}`);
        return hi;
    } else if (rh > 85 && (t >= 80 && t <= 87)) {
        hi = Math.round(hi - (((rh - 85) / 10) * ((87 - t) / 5)));
        console.log(`after rh>85 t=80-87 adjustment 3: ${hi}`);
        return hi;
    } else {
        console.log(`no adjustment: ${hi}`);
        return Math.round(hi);
    }

} 