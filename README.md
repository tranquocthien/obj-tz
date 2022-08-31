
## Quickstart

**1. Install**
###### npm
```shell
npm install obj_cz
```
###### yarn
```shell
yarn add obj_cz
```

**2. Create a OBJ_CZ** (ES6 module syntax)

```javascript
import obj_cz from 'obj_cz';
obj_cz.encode(a:1); // ⇨ 'YjE4MTU5ZGRlZWU3YWQyNDVmYjBhMmUxOTIwYWJkZTk0Y2IxNWExMjp7ImEiOjF9'
```

... or using CommonJS syntax:

```javascript
const obj_cz = require('obj_cz');
obj_cz.encode(a:1); // ⇨ 'YjE4MTU5ZGRlZWU3YWQyNDVmYjBhMmUxOTIwYWJkZTk0Y2IxNWExMjp7ImEiOjF9'
```

Other options read on ...

## API Summary

|  |  |  |
| --- | --- | --- |
| [`uuid.encode()`](#encode) | Encode object| New in `obj_cz@1.0.4` |
| [`uuid.decode()`](#decode) | Decode object | New in `obj_cz@1.0.4` |