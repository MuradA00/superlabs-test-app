For creating a shake counting logic i've created a hook ``UseShakes``, This custom hook, tracks the number of shakes a user makes by utilizing the device's accelerometer sensor. Here's a brief description of its logic:

Accelerometer Setup: The hook creates an instance of the Accelerometer with a specified frequency (60 Hz). This allows it to monitor the device's motion in real-time.

Threshold and Cooldown:

It sets a threshold (20) for the magnitude of the shake (how strong the movement needs to be to count).
It also implements a cooldown period (500ms) to avoid counting shakes that happen too quickly in succession.
Error Handling: The handleAccelerometer function checks if the Accelerometer API is available in the current environment (e.g., the device supports it and it's not running on the server side). If not, it sets an error state using setIsError.

Shake Detection: The handleShakes function calculates the magnitude of the shake by combining the X, Y, and Z values from the accelerometer. If the magnitude is above the threshold and enough time has passed since the last recorded shake (based on the cooldown), it increments the shake count using increaseShakes.

Effect Hook: The useEffect hook starts the accelerometer and listens for the reading event, which triggers every time new motion data is available. It cleans up the event listener when the component unmounts or when the effect is re-run.

In summary, this hook listens for device shakes, calculates their strength, and ensures that only valid shakes (strong enough and spaced out by the cooldown) are counted. It also handles errors if the device doesn't support the accelerometer.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
