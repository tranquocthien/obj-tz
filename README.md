
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
import objtz from 'obj-tz';
objtz.encode(a:1); // ⇨ 'YjE4MTU5ZGRlZWU3YWQyNDVmYjBhMmUxOTIwYWJkZTk0Y2IxNWExMjp7ImEiOjF9'
```

... or using CommonJS syntax:

```javascript
const objtz = require('obj-tz');
objtz.encode(a:1); // ⇨ 'YjE4MTU5ZGRlZWU3YWQyNDVmYjBhMmUxOTIwYWJkZTk0Y2IxNWExMjp7ImEiOjF9'
```

Other options read on ...

## API Summary

|  |  |  |
| --- | --- | --- |
| [`objtz.encode()`](#encode) | Encode object| New in `obj-tz@1.0.4` |
| [`objtz.decode()`](#decode) | Decode object | New in `obj-tz@1.0.4` |

### License
```
Copyright (c) 2022 Trần Quốc Thiện

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```
