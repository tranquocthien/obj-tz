
## Quickstart

**1. Install**
###### npm
```shell
npm install obj-tz
```
###### yarn
```shell
yarn add obj-tz
```

**2. Create a obj-tz** (ES6 module syntax)

```javascript
import obj-tz from 'obj-tz';
obj-tz.encode(a:1); // ⇨ 'YjE4MTU5ZGRlZWU3YWQyNDVmYjBhMmUxOTIwYWJkZTk0Y2IxNWExMjp7ImEiOjF9'
```

... or using CommonJS syntax:

```javascript
const obj-tz = require('obj-tz');
obj-tz.encode(a:1); // ⇨ 'YjE4MTU5ZGRlZWU3YWQyNDVmYjBhMmUxOTIwYWJkZTk0Y2IxNWExMjp7ImEiOjF9'
```

Other options read on ...

## API Summary

|  |  |  |
| --- | --- | --- |
| [`uuid.encode()`](#encode) | Encode object| New in `obj-tz@1.0.4` |
| [`uuid.decode()`](#decode) | Decode object | New in `obj-tz@1.0.4` |