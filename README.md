# HDV-Daylight

<img src="img/title.png" width="300px">

<blockquote>
    <p>
        ‘‘ What people should do at night is sleep, not work.
    </p>
    <p align="right">
        Someone ( 1992 - )
    </p>
</blockquote>
<br>

## Summary
HCV-Daylight provides color changes according to time of day, like bright in the morning, dark at night. Seasonal colors are customizable.

## Installation
```
npm i hcv-daylight
```

## Usage
### Page alteration
```javascript
// reflect current daylight to page
const daylight = require("hcv-daylight");
const props = [ "background-color",  "border-color", "color" ];
const config = { now: new Date(), impact: 0.1 };
daylight.reflectToPage(props, config);
```

### Element alteration
```javascript
// reflect current daylight to single element
const ele = document.getElementById("something");
const daylight = require("hcv-daylight");
const props = [ "background-color",  "border-color", "color" ];
const config = { now: new Date(), impact: 0.1 };
daylight.reflectToElement(ele, props, config);
```

### Color alteration
```javascript
// reflect current daylight to color
const daylight = require("hcv-daylight");
const config = { now: new Date(), impact: 0.1 };
const color = daylight.getReflectionColor("#333333");
```