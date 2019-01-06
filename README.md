## Proof of concept

install these peer deps.

```json
"peerDependencies": {
    "react": "^16.4.0",
    "react-dom": "^16.4.0",
    "styled-components": "^4.1.3"
  }
```

Install the components

```npm install --save afreda-poc```

Wrap app in Themer

```js
import { Themer, theme } from 'afreda-poc'

function App() {
  return (
    <Themer theme={theme}>
      {/* your app here */}
    </Themer>
  )
}
```