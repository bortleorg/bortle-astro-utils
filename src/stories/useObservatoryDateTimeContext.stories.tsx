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

// Component showing timezone precedence
const TimeZonePrecedenceExample: React.FC = () => {
  const { observatoryTimeZone, setObservatoryTimeZone } = useObservatoryDateTimeDisplayContext();
  
  return (
    <div style={{ 
      padding: '20px', 
      border: '1px solid #ccc', 
      borderRadius: '8px',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px'
    }}>
      <h3>TimeZone Precedence Demo</h3>
      
      <div style={{ marginBottom: '15px' }}>
        <strong>Context TimeZone:</strong> {observatoryTimeZone}
        <br />
        <button 
          onClick={() => setObservatoryTimeZone('America/New_York')}
          style={{ marginRight: '8px', marginTop: '5px', padding: '4px 8px', fontSize: '12px' }}
        >
          Set to New York
        </button>
        <button 
          onClick={() => setObservatoryTimeZone('Europe/London')}
          style={{ marginRight: '8px', padding: '4px 8px', fontSize: '12px' }}
        >
          Set to London
        </button>
        <button 
          onClick={() => setObservatoryTimeZone('Asia/Tokyo')}
          style={{ padding: '4px 8px', fontSize: '12px' }}
        >
          Set to Tokyo
        </button>
      </div>
      
      <div style={{ display: 'grid', gap: '15px', gridTemplateColumns: '1fr 1fr' }}>
        <div style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Uses Context TimeZone</h4>
          <div>Eclipse: <ObservatoryDateTimeZoneString utcDate={new Date('2024-04-08T18:20:00Z')} /></div>
          <div>Now: <ObservatoryDateTimeZoneString utcDate={new Date()} /></div>
        </div>
        
        <div style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Overrides with Australia/Sydney</h4>
          <div>Eclipse: <ObservatoryDateTimeZoneString utcDate={new Date('2024-04-08T18:20:00Z')} observatoryTimeZone="Australia/Sydney" /></div>
          <div>Now: <ObservatoryDateTimeZoneString utcDate={new Date()} observatoryTimeZone="Australia/Sydney" /></div>
        </div>
      </div>
      
      <div style={{ 
        marginTop: '15px',
        padding: '10px',
        backgroundColor: '#f8f9fa',
        borderRadius: '4px',
        fontSize: '12px',
        color: '#666'
      }}>
        💡 Component prop timezone takes precedence over context timezone. Change the context timezone and notice only the left column updates!
      </div>
    </div>
  );
};

// Component showing different observatory locations
const MultipleObservatoriesExample: React.FC = () => {
  return (
    <div style={{ 
      display: 'grid', 
      gap: '15px', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ 
        padding: '15px', 
        border: '2px solid #dc3545', 
        borderRadius: '8px'
      }}>
        <h4 style={{ margin: '0 0 10px 0', color: '#dc3545' }}>🏔️ Mauna Kea Observatory</h4>
        <small style={{ color: '#666' }}>Hawaii, USA</small>
        <ObservatoryDateTimeDisplayProvider initialTimeZone="Pacific/Honolulu">
          <div style={{ marginTop: '8px' }}>
            <div>Eclipse: <ObservatoryDateTimeZoneString utcDate={new Date('2024-04-08T18:20:00Z')} /></div>
            <div>Now: <ObservatoryDateTimeZoneString utcDate={new Date()} /></div>
          </div>
        </ObservatoryDateTimeDisplayProvider>
      </div>

      <div style={{ 
        padding: '15px', 
        border: '2px solid #28a745', 
        borderRadius: '8px'
      }}>
        <h4 style={{ margin: '0 0 10px 0', color: '#28a745' }}>🌵 McDonald Observatory</h4>
        <small style={{ color: '#666' }}>Texas, USA</small>
        <ObservatoryDateTimeDisplayProvider initialTimeZone="America/Chicago">
          <div style={{ marginTop: '8px' }}>
            <div>Eclipse: <ObservatoryDateTimeZoneString utcDate={new Date('2024-04-08T18:20:00Z')} /></div>
            <div>Now: <ObservatoryDateTimeZoneString utcDate={new Date()} /></div>
          </div>
        </ObservatoryDateTimeDisplayProvider>
      </div>

      <div style={{ 
        padding: '15px', 
        border: '2px solid #007acc', 
        borderRadius: '8px'
      }}>
        <h4 style={{ margin: '0 0 10px 0', color: '#007acc' }}>🏛️ Royal Observatory</h4>
        <small style={{ color: '#666' }}>Greenwich, UK</small>
        <ObservatoryDateTimeDisplayProvider initialTimeZone="Europe/London">
          <div style={{ marginTop: '8px' }}>
            <div>Eclipse: <ObservatoryDateTimeZoneString utcDate={new Date('2024-04-08T18:20:00Z')} /></div>
            <div>Now: <ObservatoryDateTimeZoneString utcDate={new Date()} /></div>
          </div>
        </ObservatoryDateTimeDisplayProvider>
      </div>
      
      <div style={{ 
        gridColumn: '1 / -1',
        padding: '10px',
        backgroundColor: '#f8f9fa',
        borderRadius: '4px',
        fontSize: '12px',
        color: '#666'
      }}>
        🌍 Each observatory uses its local timezone via the provider's initialTimeZone prop. Click the times to cycle through display modes independently!
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
  render: () => <MultipleObservatoriesExample />,
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
        story: 'Three different observatories each with their own timezone configuration via initialTimeZone prop. Each maintains independent state and timezone settings.'
      }
    }
  }
};

export const TimeZonePrecedence: Story = {
  render: () => <TimeZonePrecedenceExample />,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates how component-level observatoryTimeZone prop takes precedence over context timezone. The left column uses context timezone (changeable via buttons), while the right column always uses Australia/Sydney timezone.'
      }
    }
  }
};

export const MultipleObservatories: Story = {
  render: () => <MultipleObservatoriesExample />,
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
        story: 'Real-world example showing multiple famous observatories, each configured with their local timezone. Shows how different observatories around the world can display the same astronomical events in their local time.'
      }
    }
  }
};
