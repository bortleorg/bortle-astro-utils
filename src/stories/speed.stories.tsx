import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { metersPerSecondToKmph, metersPerSecondToMph } from '../utils/speed';

// Interactive demo component
const SpeedConverterDemo: React.FC = () => {
  const [speedMps, setSpeedMps] = React.useState(10);
  
  const speedKmph = metersPerSecondToKmph(speedMps);
  const speedMph = metersPerSecondToMph(speedMps);
  
  const windExamples = [
    { mps: 0.5, description: "Light air", effects: "Smoke drift indicates wind direction" },
    { mps: 3, description: "Light breeze", effects: "Wind felt on face, leaves rustle" },
    { mps: 7, description: "Gentle breeze", effects: "Leaves and small twigs in motion" },
    { mps: 12, description: "Moderate breeze", effects: "Small branches move, dust raised" },
    { mps: 18, description: "Fresh breeze", effects: "Small trees sway, wavelets on water" },
    { mps: 25, description: "Strong breeze", effects: "Large branches move, whistling in wires" },
    { mps: 32, description: "Near gale", effects: "Whole trees in motion, walking difficult" },
    { mps: 40, description: "Gale", effects: "Twigs break off trees, progress impeded" },
  ];

  const astronomyImpact = (mps: number) => {
    if (mps <= 2) return { level: "Excellent", color: "#4caf50", impact: "Perfect for all observations" };
    if (mps <= 5) return { level: "Good", color: "#8bc34a", impact: "Suitable for most observations" };
    if (mps <= 10) return { level: "Fair", color: "#ffc107", impact: "May affect fine adjustments" };
    if (mps <= 15) return { level: "Poor", color: "#ff9800", impact: "Telescope shake, tracking issues" };
    return { level: "Unsafe", color: "#f44336", impact: "Do not observe - equipment damage risk" };
  };

  const impact = astronomyImpact(speedMps);

  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px'
    }}>
      <h3>Wind Speed Converter</h3>
      <p style={{ marginBottom: '20px', color: '#666' }}>
        Convert wind speeds between m/s, km/h, and mph. Essential for astronomy planning 
        as wind affects telescope stability and atmospheric seeing.
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
            Wind Speed: {speedMps} m/s
          </label>
          <input
            type="range"
            min="0"
            max="50"
            step="0.5"
            value={speedMps}
            onChange={(e) => setSpeedMps(parseFloat(e.target.value))}
            style={{ width: '100%', height: '8px' }}
            data-testid="speed-slider"
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#666' }}>
            <span>0 m/s (Calm)</span>
            <span>50 m/s (Hurricane)</span>
          </div>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '15px',
          marginTop: '20px'
        }}>
          <div style={{
            padding: '15px',
            border: '2px solid #2196f3',
            borderRadius: '8px',
            backgroundColor: '#e3f2fd',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold' }} data-testid="speed-mps">
              {speedMps.toFixed(1)} m/s
            </div>
            <div style={{ color: '#666', fontSize: '12px' }}>Meters per second</div>
          </div>
          
          <div style={{
            padding: '15px',
            border: '2px solid #4caf50',
            borderRadius: '8px',
            backgroundColor: '#e8f5e8',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold' }} data-testid="speed-kmph">
              {speedKmph.toFixed(1)} km/h
            </div>
            <div style={{ color: '#666', fontSize: '12px' }}>Kilometers per hour</div>
          </div>
          
          <div style={{
            padding: '15px',
            border: '2px solid #ff9800',
            borderRadius: '8px',
            backgroundColor: '#fff3e0',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold' }} data-testid="speed-mph">
              {speedMph.toFixed(1)} mph
            </div>
            <div style={{ color: '#666', fontSize: '12px' }}>Miles per hour</div>
          </div>
        </div>
        
        <div style={{ 
          marginTop: '20px',
          padding: '15px',
          borderRadius: '8px',
          backgroundColor: impact.color,
          color: 'white',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
            Astronomy Impact: {impact.level}
          </div>
          <div style={{ fontSize: '14px', marginTop: '5px' }}>
            {impact.impact}
          </div>
        </div>
      </div>
      
      <div style={{ marginBottom: '30px' }}>
        <h4>Wind Speed Examples</h4>
        <div style={{ display: 'grid', gap: '8px' }}>
          {windExamples.map((example, index) => {
            const exampleKmph = metersPerSecondToKmph(example.mps);
            const exampleMph = metersPerSecondToMph(example.mps);
            const isSelected = Math.abs(speedMps - example.mps) < 1;
            
            return (
              <div
                key={index}
                style={{
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  backgroundColor: isSelected ? '#e3f2fd' : 'white',
                  borderColor: isSelected ? '#2196f3' : '#ddd'
                }}
                onClick={() => setSpeedMps(example.mps)}
                data-testid={`example-${index}`}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '10px', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 'bold' }}>{example.description}</div>
                    <div style={{ fontSize: '12px', color: '#666' }}>
                      {example.mps} m/s • {exampleKmph.toFixed(1)} km/h • {exampleMph.toFixed(1)} mph
                    </div>
                  </div>
                  <div style={{ fontSize: '12px', color: '#666' }}>
                    {example.effects}
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
          <strong>📡 Radio Astronomy:</strong><br />
          Wind &gt; 15 m/s can damage large dish antennas. Most radio telescopes 
          automatically stow at 20+ m/s winds.
        </div>
        
        <div style={{ 
          padding: '15px',
          backgroundColor: '#f0fff0',
          borderRadius: '4px',
          fontSize: '12px'
        }}>
          <strong>🔭 Optical Telescopes:</strong><br />
          Wind &gt; 10 m/s causes noticeable vibrations. Professional observatories 
          often close domes at 15+ m/s.
        </div>
        
        <div style={{ 
          padding: '15px',
          backgroundColor: '#fffef0',
          borderRadius: '4px',
          fontSize: '12px'
        }}>
          <strong>📸 Astrophotography:</strong><br />
          Even 5 m/s winds can cause star trailing in long exposures. 
          Use shorter exposures or wind shields.
        </div>
      </div>
      
      <div style={{ 
        padding: '15px',
        backgroundColor: '#f0f8ff',
        borderRadius: '4px',
        fontSize: '12px',
        color: '#666'
      }}>
        <strong>Conversion Formulas:</strong><br />
        • m/s to km/h: multiply by 3.6<br />
        • m/s to mph: multiply by 2.237<br />
        • Beaufort scale and wind effects help assess observing conditions
      </div>
    </div>
  );
};

const meta: Meta<typeof SpeedConverterDemo> = {
  title: 'Utils/speed',
  component: SpeedConverterDemo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Wind speed conversion utilities for astronomy planning. Convert between m/s, km/h, and mph with impact assessment for different types of observations.'
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
        story: 'Interactive wind speed converter with astronomy impact assessment. Use the slider to see how different wind speeds affect observing conditions.'
      }
    }
  }
};
