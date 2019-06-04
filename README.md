# Vue Slider 

> A customizable horizontal slide menu for VueJs 2+

![Demo Image](https://jeremyhamm.github.io/vue-slider/demo/demo.gif)

***

## Installation

##### NPM
```
  npm install vue-slider --save
```

#### Browser
```html
<script src="https://unpkg.com/vue-slider"></script>
```

***

## Useage

#### Mount with global
 ```javascript
import Vue from 'vue'
import Slider from './components/Slider'

Vue.use(Slider)
```

#### Mount with component
```javascript

import Slider from './components/Slider'

export default {
  components: {
    'slider': Slider
  }
}
```

#### Use in component
```html
<div id="app" ref="app">
  <slider :width="300" format="push" direction="left" :opacity="0.15"></slider>
</div>
```
**_Important_**
* In order to use `full` mode the parent element needs to contain `ref="app"`

#### Properties
| Name      | Type   | Default | Options             |
| ---       |---     | ---     | ---                 |
| width     | Number | 300     | Width in pixels     |
| format    | String | overlay | push, full, overlay |
| direction | String | left    | left, right         |
| opacity   | Number | 0       | 0.00 - 1.00         |
