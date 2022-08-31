
## Quickstart

**1. Install**
###### npm
```shell
npm install obj-cz
```
###### yarn
```shell
yarn add obj-cz
```

**2. Create a obj-cz** (ES6 module syntax)

```javascript
import obj-cz from 'obj-cz';
obj-cz.encode(a:1); // ⇨ 'YjE4MTU5ZGRlZWU3YWQyNDVmYjBhMmUxOTIwYWJkZTk0Y2IxNWExMjp7ImEiOjF9'
```

... or using CommonJS syntax:

```javascript
const obj-cz = require('obj-cz');
obj-cz.encode(a:1); // ⇨ 'YjE4MTU5ZGRlZWU3YWQyNDVmYjBhMmUxOTIwYWJkZTk0Y2IxNWExMjp7ImEiOjF9'
```

Other options read on ...

## API Summary

|  |  |  |
| --- | --- | --- |
| [`uuid.encode()`](#encode) | Encode object| New in `obj-cz@1.0.4` |
| [`uuid.decode()`](#decode) | Decode object | New in `obj-cz@1.0.4` |