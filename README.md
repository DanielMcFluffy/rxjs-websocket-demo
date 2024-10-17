# RxJS WebSocket Demo

## Overview

Basic demo of subscribing to a socket server via rxjs subjects.

## Code Snippet

```ts
const subject = webSocket({
    url: 'ws://localhost:8000',
    deserializer: msg => msg
});

subject.pipe(
    map(x => JSON.parse(x.data).response)
).subscribe({
    next: msg => {
        messageContainer.innerHTML += `
            <div><span>Received: </span> ${msg}</div>
        `
    },
    error: err => console.log(err),
    complete: () => console.log('complete')
   });
```
## Screenshots
![Alt Text](./assets/example.jpeg)

## Licenses

MIT License

Copyright (c) [2024] [Daniel McFluffy]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.