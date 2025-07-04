import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { useObservatoryDateTimeDisplayContext, ObservatoryDateTimeDisplayProvider, ObservatoryDateTimeDisplay } from '../hooks/useObservatoryDateTimeContext';
import { ObservatoryDateTimeZoneString } from '../components/ObservatoryDateTimeZoneString';

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
      <h3>Observatory Date Time Display</h3>
      <p>
        Current time: <ObservatoryDateTimeZoneString utcDate={new Date()} />
      </p>
      <p style={{ fontSize: '12px', color: '#666' }}>
        💡 Click the time to cycle through display modes: relative → observatory → local → UTC
      </p>
    </div>
  );
};

// Component with manual controls
const ControlledExample: React.FC = () => {
  const { observatoryDateTimeDisplay, setObservatoryDateTimeDisplay } = useObservatoryDateTimeDisplayContext();
  
  const displayOptions: ObservatoryDateTimeDisplay[] = ['relative', 'observatory', 'local', 'utc'];
  
  return (
    <div style={{ 
      padding: '20px', 
      border: '1px solid #ccc', 
      borderRadius: '8px',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '500px'
    }}>
      <h3>Controlled Observatory DateTime</h3>
      
      <div style={{ marginBottom: '15px' }}>
        <strong>Current mode:</strong> {observatoryDateTimeDisplay}
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <strong>Eclipse date:</strong> <ObservatoryDateTimeZoneString utcDate={new Date('2024-04-08T18:20:00Z')} />
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <strong>Current time:</strong> <ObservatoryDateTimeZoneString utcDate={new Date()} />
      </div>

      <div>
        <h4 style={{ marginBottom: '10px' }}>Display Mode Controls:</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {displayOptions.map((option) => (
            <button
              key={option}
              onClick={() => setObservatoryDateTimeDisplay(option)}
              style={{
                padding: '6px 12px',
                border: '1px solid #007acc',
                borderRadius: '4px',
                backgroundColor: observatoryDateTimeDisplay === option ? '#007acc' : 'white',
                color: observatoryDateTimeDisplay === option ? 'white' : '#007acc',
                cursor: 'pointer',
                fontSize: '12px'
              }}
              data-testid={`display-${option}`}
            >
              {option}
            </button>
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
        border: '2px solid #28a745', 
        borderRadius: '8px',
        minWidth: '250px'
      }}>
        <h4 style={{ margin: '0 0 10px 0', color: '#28a745' }}>Provider A (Independent)</h4>
        <ObservatoryDateTimeDisplayProvider>
          <div>
            <div style={{ marginBottom: '8px' }}>
              Eclipse: <ObservatoryDateTimeZoneString utcDate={new Date('2024-04-08T18:20:00Z')} />
            </div>
            <div>
              Now: <ObservatoryDateTimeZoneString utcDate={new Date()} />
            </div>
          </div>
        </ObservatoryDateTimeDisplayProvider>
      </div>

      <div style={{ 
        padding: '15px', 
        border: '2px solid #007acc', 
        borderRadius: '8px',
        minWidth: '250px'
      }}>
        <h4 style={{ margin: '0 0 10px 0', color: '#007acc' }}>Provider B (Independent)</h4>
        <ObservatoryDateTimeDisplayProvider>
          <div>
            <div style={{ marginBottom: '8px' }}>
              Eclipse: <ObservatoryDateTimeZoneString utcDate={new Date('2024-04-08T18:20:00Z')} />
            </div>
            <div>
              Now: <ObservatoryDateTimeZoneString utcDate={new Date()} />
            </div>
          </div>
        </ObservatoryDateTimeDisplayProvider>
      </div>
      
      <div style={{ 
        width: '100%',
        padding: '10px',
        backgroundColor: '#f8f9fa',
        borderRadius: '4px',
        fontSize: '12px',
        color: '#666'
      }}>
        💡 Each observatory has its own independent context. Click the times in each box to see they change independently!
      </div>
    </div>
  );
};

const meta: Meta<typeof SimpleExample> = {
  title: 'Hooks/useObservatoryDateTimeContext',
  component: SimpleExample,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A React hook that provides context for managing observatory date/time display preferences. Components wrapped in ObservatoryDateTimeDisplayProvider can access and modify the display mode (relative, observatory, local, UTC) and observatory time zone settings.'
      }
    }
  },
  tags: ['autodocs'],
  decorators: [
    (Story: any) => {
      // Reset localStorage before each story
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem('observatoryDateTimeDisplay');
        window.localStorage.removeItem('observatoryTimeZone');
      }
      return (
        <ObservatoryDateTimeDisplayProvider>
          <Story />
        </ObservatoryDateTimeDisplayProvider>
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
        story: 'Basic usage with ObservatoryDateTimeZoneString component. Click the time display to cycle through different modes: relative → observatory → local → UTC.'
      }
    }
  }
};

export const WithControls: Story = {
  render: () => <ControlledExample />,
  parameters: {
    docs: {
      description: {
        story: 'Example with manual controls to change display modes. Shows how the hook can be used to control the display format programmatically.'
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
        window.localStorage.removeItem('observatoryDateTimeDisplay');
        window.localStorage.removeItem('observatoryTimeZone');
      }
      return <Story />;
    }
  ],
  parameters: {
    docs: {
      description: {
        story: 'Two independent ObservatoryDateTimeDisplayProviders showing that each maintains its own state. Click the times in each box to see they change independently!'
      }
    }
  }
};
