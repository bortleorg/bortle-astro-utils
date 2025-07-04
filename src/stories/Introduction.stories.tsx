import type { Meta } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: 'Introduction',
  parameters: {
    layout: 'fullscreen',
    previewTabs: {
      canvas: { hidden: true },
    },
    viewMode: 'docs',
  },
  tags: ['autodocs'],
};

export default meta;

export const Welcome = {
  parameters: {
    docs: {
      page: () => (
        <div style={{ padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
          <h1>Bortle Astro Utils</h1>
          <p style={{ fontSize: '18px', color: '#666' }}>
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
{`npm install bortle-astro-utils

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
}`}
          </pre>
          
          <p>
            <strong>Tip:</strong> Try changing the controls in the component stories to see how the components 
            behave with different props and settings!
          </p>
        </div>
      ),
    },
  },
};