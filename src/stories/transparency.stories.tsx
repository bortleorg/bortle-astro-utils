import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { getTransparencyDescription } from '../utils/transparency';

// Interactive demo component
const TransparencyDemo: React.FC = () => {
  const [transparency, setTransparency] = React.useState(10);
  
  const description = getTransparencyDescription(transparency);
  
  const getTransparencyDetails = (value: number) => {
    if (value <= 5) return {
      level: "Excellent",
      color: "#4caf50",
      emoji: "🌟",
      observing: "Perfect for all observations",
      details: "Pristine skies, minimal atmospheric extinction",
      magnitude: "Can see stars to magnitude 6.5+ with naked eye",
      imaging: "Ideal for deep-sky photography, long exposures"
    };
    if (value <= 9) return {
      level: "Above Average",
      color: "#8bc34a",
      emoji: "✨",
      observing: "Great for most observations",
      details: "Very clear skies with minimal haze",
      magnitude: "Naked eye limit around magnitude 6.0-6.5",
      imaging: "Excellent for photography, good contrast"
    };
    if (value <= 13) return {
      level: "Average",
      color: "#ffc107",
      emoji: "🌤️",
      observing: "Good for general observing",
      details: "Some atmospheric haze, decent clarity",
      magnitude: "Naked eye limit around magnitude 5.5-6.0",
      imaging: "Acceptable for photography with longer exposures"
    };
    if (value <= 23) return {
      level: "Below Average",
      color: "#ff9800",
      emoji: "🌫️",
      observing: "Challenging conditions",
      details: "Significant haze or thin clouds",
      magnitude: "Naked eye limit around magnitude 4.5-5.5",
      imaging: "Difficult for faint objects, shorter exposures needed"
    };
    if (value <= 27) return {
      level: "Poor",
      color: "#f44336",
      emoji: "☁️",
      observing: "Limited to bright objects",
      details: "Heavy haze or scattered clouds",
      magnitude: "Naked eye limit around magnitude 3.0-4.5",
      imaging: "Only bright objects visible, very short exposures"
    };
    return {
      level: "Cloudy",
      color: "#9e9e9e",
      emoji: "🌩️",
      observing: "Observing not recommended",
      details: "Overcast or heavy cloud cover",
      magnitude: "Only brightest stars/planets visible",
      imaging: "No useful observations possible"
    };
  };

  const details = getTransparencyDetails(transparency);

  const transparencyExamples = [
    { value: 2, location: "Mauna Kea, Hawaii", conditions: "World-class observatory site" },
    { value: 5, location: "Atacama Desert, Chile", conditions: "Professional observatory conditions" },
    { value: 8, location: "Dark Sky Preserve", conditions: "Excellent amateur site" },
    { value: 12, location: "Rural Location", conditions: "Good country skies" },
    { value: 18, location: "Suburban Area", conditions: "Light pollution present" },
    { value: 25, location: "Urban Outskirts", conditions: "Significant light pollution" },
    { value: 30, location: "City Center", conditions: "Heavily polluted skies" },
  ];

  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px'
    }}>
      <h3>Atmospheric Transparency Scale</h3>
      <p style={{ marginBottom: '20px', color: '#666' }}>
        Atmospheric transparency measures how clear the sky is, affecting the visibility 
        of faint objects and overall image quality. Lower numbers indicate better transparency.
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
            Transparency: {transparency}
          </label>
          <input
            type="range"
            min="0"
            max="35"
            step="1"
            value={transparency}
            onChange={(e) => setTransparency(parseInt(e.target.value))}
            style={{ width: '100%', height: '8px' }}
            data-testid="transparency-slider"
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#666' }}>
            <span>0 (Perfect)</span>
            <span>35 (Cloudy)</span>
          </div>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 2fr',
          gap: '20px',
          marginTop: '20px'
        }}>
          <div style={{
            padding: '20px',
            border: `3px solid ${details.color}`,
            borderRadius: '12px',
            backgroundColor: 'white',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '10px' }}>{details.emoji}</div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '5px' }} data-testid="transparency-value">
              {transparency}
            </div>
            <div style={{ 
              fontSize: '16px', 
              fontWeight: 'bold', 
              color: details.color,
              marginBottom: '10px' 
            }} data-testid="transparency-description">
              {description}
            </div>
            <div style={{ fontSize: '14px', color: '#666' }}>
              {details.observing}
            </div>
          </div>
          
          <div style={{ 
            display: 'grid',
            gridTemplateRows: 'repeat(4, 1fr)',
            gap: '10px'
          }}>
            <div style={{
              padding: '12px',
              backgroundColor: '#f0f8ff',
              borderRadius: '8px',
              fontSize: '12px'
            }}>
              <strong>📡 Conditions:</strong><br />
              {details.details}
            </div>
            
            <div style={{
              padding: '12px',
              backgroundColor: '#f0fff0',
              borderRadius: '8px',
              fontSize: '12px'
            }}>
              <strong>👁️ Naked Eye Limit:</strong><br />
              {details.magnitude}
            </div>
            
            <div style={{
              padding: '12px',
              backgroundColor: '#fffef0',
              borderRadius: '8px',
              fontSize: '12px'
            }}>
              <strong>📸 Imaging Impact:</strong><br />
              {details.imaging}
            </div>
            
            <div style={{
              padding: '12px',
              backgroundColor: '#fff0f0',
              borderRadius: '8px',
              fontSize: '12px'
            }}>
              <strong>🔭 Observing:</strong><br />
              {details.observing}
            </div>
          </div>
        </div>
      </div>
      
      <div style={{ marginBottom: '30px' }}>
        <h4>Transparency Examples by Location</h4>
        <div style={{ display: 'grid', gap: '8px' }}>
          {transparencyExamples.map((example, index) => {
            const exampleDescription = getTransparencyDescription(example.value);
            const isSelected = Math.abs(transparency - example.value) < 2;
            const exampleDetails = getTransparencyDetails(example.value);
            
            return (
              <div
                key={index}
                style={{
                  padding: '15px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  backgroundColor: isSelected ? '#e3f2fd' : 'white',
                  borderColor: isSelected ? '#2196f3' : '#ddd'
                }}
                onClick={() => setTransparency(example.value)}
                data-testid={`transparency-example-${index}`}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 2fr', gap: '15px', alignItems: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '24px' }}>{exampleDetails.emoji}</div>
                    <div style={{ fontSize: '14px', fontWeight: 'bold' }}>{example.value}</div>
                  </div>
                  <div>
                    <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>{example.location}</div>
                    <div style={{ fontSize: '12px', color: exampleDetails.color, fontWeight: 'bold' }}>
                      {exampleDescription}
                    </div>
                  </div>
                  <div style={{ fontSize: '12px', color: '#666' }}>
                    {example.conditions}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '15px',
        marginBottom: '20px'
      }}>
        <div style={{ 
          padding: '15px',
          backgroundColor: '#f0f8ff',
          borderRadius: '4px',
          fontSize: '12px'
        }}>
          <strong>🌟 Professional Sites:</strong><br />
          Major observatories are built in locations with consistently 
          low transparency values (0-7) for optimal performance.
        </div>
        
        <div style={{ 
          padding: '15px',
          backgroundColor: '#f0fff0',
          borderRadius: '4px',
          fontSize: '12px'
        }}>
          <strong>🔭 Amateur Observing:</strong><br />
          Values 5-15 are excellent for amateur astronomy. Even 
          suburban sites (15-20) can produce good results.
        </div>
        
        <div style={{ 
          padding: '15px',
          backgroundColor: '#fffef0',
          borderRadius: '4px',
          fontSize: '12px'
        }}>
          <strong>📸 Astrophotography:</strong><br />
          Lower transparency means longer exposures possible 
          without washing out faint details.
        </div>
        
        <div style={{ 
          padding: '15px',
          backgroundColor: '#fff0f0',
          borderRadius: '4px',
          fontSize: '12px'
        }}>
          <strong>⏰ Temporal Variation:</strong><br />
          Transparency changes throughout the night and seasons. 
          Best transparency often occurs after midnight.
        </div>
      </div>
      
      <div style={{ 
        padding: '15px',
        backgroundColor: '#f0f8ff',
        borderRadius: '4px',
        fontSize: '12px',
        color: '#666'
      }}>
        <strong>Understanding the Scale:</strong><br />
        • 0-5: World-class observatory conditions<br />
        • 6-13: Excellent to good amateur observing<br />
        • 14-23: Moderate conditions, bright objects visible<br />
        • 24+: Poor conditions, limited observing possible<br />
        • Scale correlates with atmospheric extinction and sky brightness
      </div>
    </div>
  );
};

const meta: Meta<typeof TransparencyDemo> = {
  title: 'Utils/transparency',
  component: TransparencyDemo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Atmospheric transparency utility for astronomy planning. Measures sky clarity and provides context for observing conditions and object visibility.'
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
        story: 'Interactive atmospheric transparency scale demonstrating how sky clarity affects astronomical observations. Lower values indicate better transparency.'
      }
    }
  }
};
