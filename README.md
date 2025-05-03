# use-cookie-popup

![NPM Version](https://img.shields.io/npm/v/use-cookie-popup?logo=npm)
![Static Badge](https://img.shields.io/badge/React-gray?logo=react&logoColor=61dbfb)
![Static Badge](https://img.shields.io/badge/Typescript-blue?logo=typescript&logoColor=white)

This library helps you to implement the logic of your cookie popup. Uses [Cookie library](https://www.npmjs.com/package/cookie) under the hood.

Example: https://next-js-example-app-sandy.vercel.app/

## How to use

Import the library:

```typescript
import { useCookiePopup } from "use-cookie-popup";
// or
const { useCookiePopup } = require("use-cookie-popup");
```

Use the library:

```tsx
import { useCookiePopup } from "use-cookie-popup";

import { useCookiePopup } from "./hooks/useCookiePopup";

export const MainComponent = () => {
  const { isVisible, onAccept, onDecline } = useCookiePopup({
    name: "cookie-name",
  });
  return (
    <div>
      {/** your cookie popup */}
      {isVisible && (
        <div>
          <button onClick={onDecline}>Decline</button>
          <button onClick={onAccept}>Accept</button>
        </div>
      )}
    </div>
  );
};
```
