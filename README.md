# alpinejs-moment

> An Alpine JS plugin wrapper for moment.js

Usage

```js
<div x-text="$moment().format('LTS')"></div>
```

Example:

Using (Alpines JS Timeout Plugin)[] you could build a clock really ease.

```js
<div  x-data x-timeout:1000="$el.innerText=$moment().format('LTS')"></div>
```
