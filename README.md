# Alpine.js plugin Moment

An Alpine JS **Moment  Plugin** lets you programmatically monitor changes to the size of the screen

## Instalation
### Via script include
```html
<script src="/js/moment.min.js" defer></script>
<script src="/js/alpine.js" defer></script>
```

### Via CDN
```html
<!-- Alpine Plugins -->
<script src="https://unpkg.com/@victoryoalli/alpinejs-moment@1.0.0/dist/moment.min.js" defer></script>
<!-- Alpine Core -->
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### Via NPM

```bash
npm i @victoryoalli/alpinejs-moment
```

```javascript
import Alpine from 'alpinejs'

import moment from '@victoryoalli/alpinejs-moment'
Alpine.plugin(moment)

window.Alpine = Alpine
window.Alpine.start()
```

# $moment()
Magic Helper
```html
    <div x-data x-text="$moment().format('LTS')"></div>
```
