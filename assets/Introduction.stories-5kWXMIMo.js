import{R as e}from"./iframe-B9dT2rpX.js";const n={title:"Introduction",parameters:{layout:"fullscreen",previewTabs:{canvas:{hidden:!0}},viewMode:"docs"},tags:["autodocs"]},t={parameters:{docs:{page:()=>e.createElement("div",{style:{padding:"20px",fontFamily:"system-ui, sans-serif"}},e.createElement("h1",null,"Bortle Astro Utils"),e.createElement("p",{style:{fontSize:"18px",color:"#666"}},"A TypeScript library providing utility functions and React components for astrophotography applications."),e.createElement("h2",null,"🌟 Interactive Components"),e.createElement("p",null,"This styleguide showcases the React components available in the library. All components are interactive - click on them to see their functionality!"),e.createElement("h3",null,"📊 TemperatureString"),e.createElement("p",null,"An interactive temperature display component that converts between Fahrenheit, Celsius, and Kelvin. Perfect for displaying sensor readings, weather data, or any temperature-related information in astronomy applications. Click the displayed temperature to toggle between F/C units."),e.createElement("h3",null,"🕐 ObservatoryDateTimeZoneString"),e.createElement("p",null,"A smart date/time component that displays times in multiple formats useful for astronomical observations:"),e.createElement("ul",null,e.createElement("li",null,e.createElement("strong",null,"Relative:"),' "2 hours ago", "yesterday", etc.'),e.createElement("li",null,e.createElement("strong",null,"Observatory:")," Time in the observatory's timezone (Chicago/Central)"),e.createElement("li",null,e.createElement("strong",null,"Local:")," Time in the user's local timezone"),e.createElement("li",null,e.createElement("strong",null,"UTC:")," Universal Coordinated Time")),e.createElement("p",null,"Click the displayed time to cycle through these different modes."),e.createElement("h2",null,"🔧 Context Providers"),e.createElement("p",null,"The components use React context providers to manage global settings:"),e.createElement("ul",null,e.createElement("li",null,e.createElement("strong",null,"TempProvider:")," Manages temperature unit preferences (F/C/K)"),e.createElement("li",null,e.createElement("strong",null,"ObservatoryDateTimeDisplayProvider:")," Manages time display format and timezone preferences")),e.createElement("h2",null,"📚 Usage"),e.createElement("p",null,"Explore the component stories to see different use cases and configurations. Each story includes:"),e.createElement("ul",null,e.createElement("li",null,"Interactive controls to modify component props"),e.createElement("li",null,"Real-time preview of the component"),e.createElement("li",null,"Documentation explaining the scenario"),e.createElement("li",null,"Code examples showing how to use the component")),e.createElement("h2",null,"🚀 Getting Started"),e.createElement("pre",{style:{background:"#f6f8fa",padding:"16px",borderRadius:"6px",overflow:"auto",fontSize:"14px"}},`npm install bortle-astro-utils

import React from 'react';
import { 
  TemperatureString, 
  ObservatoryDateTimeZoneString,
  TempProvider,
  ObservatoryDateTimeDisplayProvider 
} from 'bortle-astro-utils';

function App() {
  return (
    <TempProvider>
      <ObservatoryDateTimeDisplayProvider>
        <TemperatureString temperature={20} units="C" />
        <ObservatoryDateTimeZoneString utcDate={new Date()} />
      </ObservatoryDateTimeDisplayProvider>
    </TempProvider>
  );
}`),e.createElement("p",null,e.createElement("strong",null,"Tip:")," Try changing the controls in the component stories to see how the components behave with different props and settings!"))}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      page: () => <div style={{
        padding: '20px',
        fontFamily: 'system-ui, sans-serif'
      }}>
          <h1>Bortle Astro Utils</h1>
          <p style={{
          fontSize: '18px',
          color: '#666'
        }}>
            A TypeScript library providing utility functions and React components for astrophotography applications.
          </p>
          
          <h2>🌟 Interactive Components</h2>
          <p>
            This styleguide showcases the React components available in the library. All components are interactive - 
            click on them to see their functionality!
          </p>
          
          <h3>📊 TemperatureString</h3>
          <p>
            An interactive temperature display component that converts between Fahrenheit, Celsius, and Kelvin. 
            Perfect for displaying sensor readings, weather data, or any temperature-related information in astronomy applications.
            Click the displayed temperature to toggle between F/C units.
          </p>
          
          <h3>🕐 ObservatoryDateTimeZoneString</h3>
          <p>
            A smart date/time component that displays times in multiple formats useful for astronomical observations:
          </p>
          <ul>
            <li><strong>Relative:</strong> "2 hours ago", "yesterday", etc.</li>
            <li><strong>Observatory:</strong> Time in the observatory's timezone (Chicago/Central)</li>
            <li><strong>Local:</strong> Time in the user's local timezone</li>
            <li><strong>UTC:</strong> Universal Coordinated Time</li>
          </ul>
          <p>Click the displayed time to cycle through these different modes.</p>
          
          <h2>🔧 Context Providers</h2>
          <p>
            The components use React context providers to manage global settings:
          </p>
          <ul>
            <li><strong>TempProvider:</strong> Manages temperature unit preferences (F/C/K)</li>
            <li><strong>ObservatoryDateTimeDisplayProvider:</strong> Manages time display format and timezone preferences</li>
          </ul>
          
          <h2>📚 Usage</h2>
          <p>
            Explore the component stories to see different use cases and configurations. Each story includes:
          </p>
          <ul>
            <li>Interactive controls to modify component props</li>
            <li>Real-time preview of the component</li>
            <li>Documentation explaining the scenario</li>
            <li>Code examples showing how to use the component</li>
          </ul>
          
          <h2>🚀 Getting Started</h2>
          <pre style={{
          background: '#f6f8fa',
          padding: '16px',
          borderRadius: '6px',
          overflow: 'auto',
          fontSize: '14px'
        }}>
          {\`npm install bortle-astro-utils

import React from 'react';
import { 
  TemperatureString, 
  ObservatoryDateTimeZoneString,
  TempProvider,
  ObservatoryDateTimeDisplayProvider 
} from 'bortle-astro-utils';

function App() {
  return (
    <TempProvider>
      <ObservatoryDateTimeDisplayProvider>
        <TemperatureString temperature={20} units="C" />
        <ObservatoryDateTimeZoneString utcDate={new Date()} />
      </ObservatoryDateTimeDisplayProvider>
    </TempProvider>
  );
}\`}
          </pre>
          
          <p>
            <strong>Tip:</strong> Try changing the controls in the component stories to see how the components 
            behave with different props and settings!
          </p>
        </div>
    }
  }
}`,...t.parameters?.docs?.source}}};const o=["Welcome"];export{t as Welcome,o as __namedExportsOrder,n as default};
