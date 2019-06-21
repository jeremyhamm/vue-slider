# Vue Slider 

> A customizable horizontal slide menu for VueJs 2+

![Demo Image](https://jeremyhamm.github.io/vue-slider/demo/demo.gif)

***

## Installation

##### NPM
```
  npm i @jeremyhamm/vue-slider
```

#### Browser
```html
<script src="https://unpkg.com/@jeremyhamm/vue-slider"></script>
```

***

## Useage

#### Mount with global
 ```javascript
import Vue from 'vue'
import Slider from '@jeremyhamm/vue-slider'

Vue.use(Slider)
```

#### Mount with component
```javascript

import Slider from '@jeremyhamm/vue-slider'

export default {
  components: {
    'slider': Slider
  }
}
```

#### Use in component
```html
 <slider :width="300" format="push" direction="left" :opacity="0.15" :links="[{'id': 1, 'text': 'Link 1', 'url': 'https://github.com'}, {'id': 2, 'text': 'Link 2', 'url': 'https://github.com'}]"></slider>
```

#### Properties
| Name      | Type     | Default   | Options                |
| ---       |---       | ---       | ---                    |
| width     | `Number` | `300`     | Menu Width `(px)`      |
| format    | `String` | `overlay` | `push, full, overlay`  |
| direction | `String` | `left`    | `left, right`          |
| opacity   | `Number` | `0`       | `0.00 - 1.00` Representing [css opacity](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)        |
| links     | `Array`  | null      | `[{'id': 1, 'text': 'Link 1', 'url': 'https://github.com'}, {'id': 2, 'text': 'Link 2', 'url': 'https://github.com'}]` |

#### Styles
All menu styles can be updated in `/assets/sass/variables.scss`
