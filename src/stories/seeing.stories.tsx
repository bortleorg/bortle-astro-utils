import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { getSeeingDescription } from '../utils/seeing';

// Interactive demo component
const SeeingDemo: React.FC = () => {
  const [seeingValue, setSeeingValue] = React.useState(3);
  
  const description = getSeeingDescription(seeingValue);
  
  const seeingInfo = {
    0: { 
      emoji: "☁️", 
      color: "#666666",
      description: "Cloud cover prevents observations",
      arcseconds: "N/A"
    },
    1: { 
      emoji: "😞", 
      color: "#ff4444",
      description: "Very poor atmospheric stability",
      arcseconds: "> 4\""
    },
    2: { 
      emoji: "😐", 
      color: "#ff8800",
      description: "Below average seeing conditions",
      arcseconds: "3-4\""
    },
    3: { 
      emoji: "🙂", 
      color: "#ffaa00",
      description: "Typical seeing for most locations",
      arcseconds: "2-3\""
    },
    4: { 
      emoji: "😊", 
      color: "#88cc00",
      description: "Good seeing conditions",
      arcseconds: "1-2\""
    },
    5: { 
      emoji: "🤩", 
      color: "#00aa00",
      description: "Exceptional seeing - rare conditions",
      arcseconds: "< 1\""
    }
  };

  const activities = [
    { seeing: [0], activity: "No astronomy possible", suitable: false },
    { seeing: [1], activity: "Basic wide-field photography only", suitable: false },
    { seeing: [2], activity: "Wide-field astrophotography", suitable: true },
    { seeing: [3], activity: "General visual astronomy", suitable: true },
    { seeing: [3, 4], activity: "Planetary observation", suitable: true },
    { seeing: [4, 5], activity: "High-resolution planetary imaging", suitable: true },
    { seeing: [5], activity: "Double star splitting, lunar detail", suitable: true },
  ];

  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '700px'
    }}>
      <h3>Astronomical Seeing Conditions</h3>
      <p style={{ marginBottom: '20px', color: '#666' }}>
        Seeing refers to atmospheric turbulence that affects the steadiness of celestial objects. 
        Better seeing means sharper, more stable images.
      </p>
      
      <div style={{ 
        marginBottom: '30px',
        padding: '20px',
        border: '2px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9'
      }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Seeing Scale: {seeingValue}
          </label>
          <input
            type="range"
            min="0"
            max="5"
            step="1"
            value={seeingValue}
            onChange={(e) => setSeeingValue(parseInt(e.target.value))}
            style={{ width: '100%', height: '8px' }}
            data-testid="seeing-slider"
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#666' }}>
            <span>0 (Cloudy)</span>
            <span>5 (Excellent)</span>
          </div>
        </div>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '15px',
          marginTop: '20px'
        }}>
          <div style={{
            fontSize: '48px'
          }}>
            {seeingInfo[seeingValue as keyof typeof seeingInfo].emoji}
          </div>
          
          <div>
            <div style={{ 
              fontSize: '24px', 
              fontWeight: 'bold',
              color: seeingInfo[seeingValue as keyof typeof seeingInfo].color
            }} data-testid="seeing-result">
              {description}
            </div>
            <div style={{ color: '#666', fontSize: '14px', marginTop: '5px' }}>
              {seeingInfo[seeingValue as keyof typeof seeingInfo].description}
            </div>
            <div style={{ color: '#666', fontSize: '12px', marginTop: '5px' }}>
              Star diameter: {seeingInfo[seeingValue as keyof typeof seeingInfo].arcseconds}
            </div>
          </div>
        </div>
      </div>
      
      <div style={{ marginBottom: '30px' }}>
        <h4>Recommended Activities</h4>
        <div style={{ display: 'grid', gap: '8px' }}>
          {activities.map((item, index) => {
            const isApplicable = item.seeing.includes(seeingValue);
            return (
              <div
                key={index}
                style={{
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  backgroundColor: isApplicable ? '#e8f5e8' : '#f5f5f5',
                  borderColor: isApplicable ? '#4caf50' : '#ddd',
                  opacity: isApplicable ? 1 : 0.6
                }}
                data-testid={`activity-${index}`}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>{item.activity}</span>
                  <span style={{ 
                    fontSize: '12px',
                    color: isApplicable ? '#4caf50' : '#999',
                    fontWeight: isApplicable ? 'bold' : 'normal'
                  }}>
                    {isApplicable ? '✓ Suitable' : '○ Not ideal'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h4>All Seeing Scales</h4>
        <div style={{ display: 'grid', gap: '8px', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          {Object.entries(seeingInfo).map(([value, info]) => (
            <div
              key={value}
              style={{
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'pointer',
                backgroundColor: seeingValue === parseInt(value) ? '#e3f2fd' : 'white',
                borderColor: seeingValue === parseInt(value) ? '#2196f3' : '#ddd'
              }}
              onClick={() => setSeeingValue(parseInt(value))}
              data-testid={`scale-${value}`}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '24px' }}>{info.emoji}</span>
                <div>
                  <div style={{ fontWeight: 'bold', color: info.color }}>
                    {value}: {getSeeingDescription(parseInt(value))}
                  </div>
                  <div style={{ fontSize: '11px', color: '#666' }}>
                    {info.arcseconds}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div style={{ 
        padding: '15px',
        backgroundColor: '#f0f8ff',
        borderRadius: '4px',
        fontSize: '12px',
        color: '#666'
      }}>
        <strong>About Seeing:</strong> Atmospheric seeing is measured by the angular diameter 
        of star images. Excellent seeing (1 arcsecond or better) is rare and typically occurs 
        at high-altitude observatory sites with stable air masses.
      </div>
    </div>
  );
};

const meta: Meta<typeof SeeingDemo> = {
  title: 'Utils/seeing',
  component: SeeingDemo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Astronomical seeing scale from 0 (cloudy) to 5 (excellent). Seeing describes atmospheric stability and affects the sharpness of celestial observations.'
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Interactive seeing scale with recommended activities. Use the slider to see how different seeing conditions affect astronomical observations.'
      }
    }
  }
};
