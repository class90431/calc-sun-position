# @class90431/calc-sun-position

## 簡介

- 用於計算太陽：
  - 方位角
  - 高度角

## 安裝

```sh
npm install --save @class90431/calc-sun-position
```

## 導入

```javascript
const calculateSunAzEl = require("@class90431/calc-sun-position");
```

## 參數

- year
  - 西元
- month
  - 月份
- day
  - 日期
- hour
  - 24 小時制
- minute
  - 分鐘數
- second
  - 秒數
- lat
  - 緯度
- lon
  - 經度
- tz
  - 時區（例如：台灣時區是 + 8, 則填入 8 即可。）

## 範例

```javascript
const calculateSunAzEl = require('@class90431/calc-sun-position')

// calculateSunAzEl(year, month, day, hour, minute, second, lat, lon, tz)
const result = calculateSunAzEl(2020, 12, 31, 12, 0, 0, 25, 121, 8)
console.log(result) // { azimuth: 180.29392587236583, elevation: 41.952069876326135 }
```
## 備註
- 得到的值，單位皆為度。
- azimuth ( 方位角 ) : 以正北為 0 ; 正東為 90 ; 正南為 180 ; 正西為 270。
- elevation (高度角) : 水平地面為 0 ; 觀測點正上方為 90。

## 參考
- [Link](https://keisan.casio.com/exec/system/1224682277)
- [Link2](https://www.esrl.noaa.gov/gmd/grad/solcalc/)
