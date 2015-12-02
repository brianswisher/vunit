# vunit
## viewport unit utility


### install
```bash
npm i vunit --save
```

### usage
```javascript
var Vunit require("vunit");
var px = new Vunit(375, "w");
let styles = {
  container: {
    width: px(275)
  },

  //for hard pixels, pass in a viewport width number; returns a number
  banner: {
    width: px(100, document.body.offsetWidth) + "px"
  }
}
```
