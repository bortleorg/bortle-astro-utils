import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { useTemperatureContext, TempProvider, TempUnits } from '../hooks/useTemperatureContext';
import { TemperatureString } from '../components/TemperatureString';

// Mock localStorage for Storybook
if (typeof window !== 'undefined' && !window.localStorage) {
  window.localStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {},
    length: 0,
    key: () => null,
  };
}

// Simple component showing basic usage
const SimpleExample: React.FC = () => {
  return (
    <div style={{ 
      padding: '20px', 
      border: '1px solid #ccc', 
      borderRadius: '8px',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '400px'
    }}>
      <h3>Temperature Context Demo</h3>
      <p>
        Room temperature: <TemperatureString temperature={20} units="C" />
      </p>
      <p>
        Freezing point: <TemperatureString temperature={32} units="F" />
      </p>
      <p style={{ fontSize: '12px', color: '#666' }}>
        💡 Click the temperatures to toggle between F/C display
      </p>
    </div>
  );
};

// Component with multiple temperatures and controls
const ControlledExample: React.FC = () => {
  const { temperatureUnits, setTemperatureUnits } = useTemperatureContext();
  
  const unitOptions: TempUnits[] = ['F', 'C', 'K'];
  
  const sampleTemperatures = [
    { label: 'Room Temperature', temp: 20, unit: 'C' as TempUnits },
    { label: 'Hot Summer Day', temp: 95, unit: 'F' as TempUnits },
    { label: 'Absolute Zero', temp: 0, unit: 'K' as TempUnits },
    { label: 'Boiling Water', temp: 373.15, unit: 'K' as TempUnits },
  ];
  
  return (
    <div style={{ 
      padding: '20px', 
      border: '1px solid #ccc', 
      borderRadius: '8px',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '500px'
    }}>
      <h3>Temperature Context with Controls</h3>
      
      <div style={{ marginBottom: '15px' }}>
        <strong>Current units:</strong> {temperatureUnits}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <h4 style={{ marginBottom: '10px' }}>Unit Controls:</h4>
        <div style={{ display: 'flex', gap: '8px' }}>
          {unitOptions.map((unit) => (
            <button
              key={unit}
              onClick={() => setTemperatureUnits(unit)}
              style={{
                padding: '6px 12px',
                border: '1px solid #007acc',
                borderRadius: '4px',
                backgroundColor: temperatureUnits === unit ? '#007acc' : 'white',
                color: temperatureUnits === unit ? 'white' : '#007acc',
                cursor: 'pointer',
                fontSize: '12px'
              }}
              data-testid={`unit-${unit}`}
            >
              °{unit}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: '10px' }}>Sample Temperatures:</h4>
        <div style={{ display: 'grid', gap: '8px' }}>
          {sampleTemperatures.map((item, index) => (
            <div
              key={index}
              style={{
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                backgroundColor: '#f9f9f9',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span>{item.label}:</span>
              <TemperatureString temperature={item.temp} units={item.unit} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Component showing two independent providers
const IndependentProvidersExample: React.FC = () => {
  return (
    <div style={{ 
      display: 'flex', 
      gap: '20px', 
      flexWrap: 'wrap',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ 
        padding: '15px', 
        border: '2px solid #dc3545', 
        borderRadius: '8px',
        minWidth: '250px'
      }}>
        <h4 style={{ margin: '0 0 10px 0', color: '#dc3545' }}>Provider A (Independent)</h4>
        <TempProvider>
          <div>
            <div style={{ marginBottom: '8px' }}>
              Sample 1: <TemperatureString temperature={25} units="C" />
            </div>
            <div>
              Sample 2: <TemperatureString temperature={98.6} units="F" />
            </div>
          </div>
        </TempProvider>
      </div>

      <div style={{ 
        padding: '15px', 
        border: '2px solid #007acc', 
        borderRadius: '8px',
        minWidth: '250px'
      }}>
        <h4 style={{ margin: '0 0 10px 0', color: '#007acc' }}>Provider B (Independent)</h4>
        <TempProvider>
          <div>
            <div style={{ marginBottom: '8px' }}>
              Sample 1: <TemperatureString temperature={25} units="C" />
            </div>
            <div>
              Sample 2: <TemperatureString temperature={98.6} units="F" />
            </div>
          </div>
        </TempProvider>
      </div>
      
      <div style={{ 
        width: '100%',
        padding: '10px',
        backgroundColor: '#f8f9fa',
        borderRadius: '4px',
        fontSize: '12px',
        color: '#666'
      }}>
        💡 Each lab has its own independent temperature context. Click the temperatures in each box to see they change independently!
      </div>
    </div>
  );
};

const meta: Meta<typeof SimpleExample> = {
  title: 'Hooks/useTemperatureContext',
  component: SimpleExample,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A React hook that provides context for managing temperature unit preferences across your application. Components wrapped in TempProvider can access and modify the temperature unit setting (F, C, K) with automatic localStorage persistence.'
      }
    }
  },
  tags: ['autodocs'],
  decorators: [
    (Story: any) => {
      // Reset localStorage before each story
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem('temperatureUnits');
      }
      return (
        <TempProvider>
          <Story />
        </TempProvider>
      );
    }
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleUsage: Story = {
  render: () => <SimpleExample />,
  parameters: {
    docs: {
      description: {
        story: 'Basic usage with TemperatureString components. Click the temperature displays to toggle between F/C units.'
      }
    }
  }
};

export const WithControls: Story = {
  render: () => <ControlledExample />,
  parameters: {
    docs: {
      description: {
        story: 'Example with manual controls to change temperature units. Shows how the hook can be used to control the display format programmatically.'
      }
    }
  }
};

export const IndependentProviders: Story = {
  render: () => <IndependentProvidersExample />,
  decorators: [
    (Story: any) => {
      // Don't wrap with provider - the component has its own
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem('temperatureUnits');
      }
      return <Story />;
    }
  ],
  parameters: {
    docs: {
      description: {
        story: 'Two independent TempProviders showing that each maintains its own state. Click the temperatures in each box to see they change independently!'
      }
    }
  }
};
