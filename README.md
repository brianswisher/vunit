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
  }
}
```
