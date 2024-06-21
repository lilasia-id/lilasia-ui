# Lilasia UI

## Installation

```bash
npm install lilasia-ui
```

## Usage

```javascript
/** @type {import('tailwindcss').Config} */
import { preset } from 'lilasia-ui'

export default {
  content: ['./index.html', './src/*.{html,vue,ts}'],
  presets: [preset],
  theme: {
    extend: {}
  },
  plugins: []
}
```

Use the `preset` function to add the Lilasia UI plugin to your Tailwind CSS configuration.
