import SunCalc from 'suncalc'
import { getTimeArray } from './components/getTimeArray'
import moment from 'moment'

const timeArray: Array<string> = getTimeArray('2020-12-29', '2020-12-30', 15)
const latitude: number = 25
const longitude: number = 121

timeArray.forEach((time: any) => {
    const sunPosition = SunCalc.getPosition(time, latitude, longitude)
    const sunriseAzimuth: number = 180 + sunPosition.azimuth * 180 / Math.PI
    const sunriseAltitude: number = sunPosition.altitude * 180 / Math.PI
    console.log(moment(time).format('YYYY-MM-DD HH:mm'), sunriseAzimuth, sunriseAltitude)
})
