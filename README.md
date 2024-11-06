# bortle-astro-utils

`bortle-astro-utils` is a TypeScript library that provides utility functions for astrophotography. It includes functions for converting between different units, calculating solar and lunar times, and handling date and time conversions for different time zones.

## Installation

To install `bortle-astro-utils`, use npm or yarn:

```sh
npm install bortle-astro-utils
```

or

```sh
yarn add bortle-astro-utils
```

## Usage

### Importing the library

```typescript
import {
  kelvinToCelsius,
  kelvinToFahrenheit,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  fahrenheitToKelvin,
  celsiusToKelvin,
  metersPerSecondToKmph,
  metersPerSecondToMph,
  getTransparencyDescription,
  getSeeingDescription,
  mpsas2bortle,
  useObservatoryDateTimeDisplayContext,
  ObservatoryDateTimeDisplayProvider,
  TemperatureString,
  ObservatoryDateTime,
  ObservatoryDateTimeZoneString,
  getSolarTimes,
  getLunarInfo,
  useTemperatureContext,
} from "bortle-astro-utils";
```

### Temperature Conversion

```typescript
const celsius = kelvinToCelsius(300); // 26.85
const fahrenheit = kelvinToFahrenheit(300); // 80.33
```

### Speed Conversion

```typescript
const kmph = metersPerSecondToKmph(10); // 36
const mph = metersPerSecondToMph(10); // 22.37
```

### Transparency and Seeing Descriptions

```typescript
const transparency = getTransparencyDescription(10); // "Average (10)"
const seeing = getSeeingDescription(3); // "Average"
```

### MPSAS to Bortle Scale

```typescript
const bortleScale = mpsas2bortle(21.5); // 3
```

### Date and Time Context

```typescript
import React from "react";
import { ObservatoryDateTimeDisplayProvider, useObservatoryDateTimeDisplayContext } from "bortle-astro-utils";

const App = () => {
  return (
    <ObservatoryDateTimeDisplayProvider>
      <MyComponent />
    </ObservatoryDateTimeDisplayProvider>
  );
};

const MyComponent = () => {
  const { observatoryDateTimeDisplay, setObservatoryDateTimeDisplay } = useObservatoryDateTimeDisplayContext();

  return (
    <div>
      <p>Current Display: {observatoryDateTimeDisplay}</p>
      <button onClick={() => setObservatoryDateTimeDisplay("local")}>Set to Local</button>
    </div>
  );
};
```

### Temperature String Component

```typescript
import React from "react";
import { TemperatureString } from "bortle-astro-utils";

const MyComponent = () => {
  return <TemperatureString temperature={300} units="K" />;
};
```

### Observatory DateTime

```typescript
import { ObservatoryDateTime } from "bortle-astro-utils";

const dateTime = new ObservatoryDateTime(new Date(), "America/Chicago");
console.log(dateTime.getLocalDateTime()); // Local date and time
console.log(dateTime.getHomeDateTime()); // Home date and time
console.log(dateTime.getUTCDateTime()); // UTC date and time
console.log(dateTime.getRelativeTime()); // Relative time
```

### ObservatoryDateTimeZoneString Component

```typescript
import React from "react";
import { ObservatoryDateTimeZoneString } from "bortle-astro-utils";

const MyComponent = () => {
  return <ObservatoryDateTimeZoneString utcDate={new Date()} />;
};
```

### useObservatoryDateTimeDisplayContext Hook

```typescript
import React from "react";
import { useObservatoryDateTimeDisplayContext, ObservatoryDateTimeDisplayProvider } from "bortle-astro-utils";

const MyComponent = () => {
  const { observatoryDateTimeDisplay, setObservatoryDateTimeDisplay } = useObservatoryDateTimeDisplayContext();

  return (
    <div>
      <p>Current Display: {observatoryDateTimeDisplay}</p>
      <button onClick={() => setObservatoryDateTimeDisplay("local")}>Set to Local</button>
    </div>
  );
};

const App = () => {
  return (
    <ObservatoryDateTimeDisplayProvider>
      <MyComponent />
    </ObservatoryDateTimeDisplayProvider>
  );
};
```

### Solar and Lunar Times

```typescript
import { getSolarTimes, getLunarInfo } from "bortle-astro-utils";

const latitude = 40.7128;
const longitude = -74.0060;
const altitude = 10;
const timeZone = "America/New_York";

const solarTimes = getSolarTimes(latitude, longitude, altitude, timeZone);
console.log(solarTimes);

const lunarInfo = getLunarInfo(latitude, longitude, altitude, timeZone);
console.log(lunarInfo);
```

### useTemperatureContext Hook

```typescript
import React from "react";
import { useTemperatureContext, TempProvider } from "bortle-astro-utils";

const MyComponent = () => {
  const { temperatureUnits, setTemperatureUnits } = useTemperatureContext();

  return (
    <div>
      <p>Current Units: {temperatureUnits}</p>
      <button onClick={() => setTemperatureUnits("C")}>Set to Celsius</button>
    </div>
  );
};

const App = () => {
  return (
    <TempProvider>
      <MyComponent />
    </TempProvider>
  );
};
```
