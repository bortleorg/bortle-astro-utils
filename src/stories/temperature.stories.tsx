import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { 
  celsiusToFahrenheit, 
  celsiusToKelvin, 
  fahrenheitToCelsius, 
  fahrenheitToKelvin, 
  kelvinToCelsius, 
  kelvinToFahrenheit 
} from '../utils/temperature';

// Interactive demo component
const TemperatureConverterDemo: React.FC = () => {
  const [tempCelsius, setTempCelsius] = React.useState(0);
  
  const tempFahrenheit = celsiusToFahrenheit(tempCelsius);
  const tempKelvin = celsiusToKelvin(tempCelsius);
  
  const getTemperatureContext = (celsius: number) => {
    if (celsius < -40) return { 
      level: "Extreme Cold", 
      color: "#1e3a8a", 
      impact: "CCD cameras excel, but mechanical issues likely",
      examples: ["Antarctica winter", "Liquid nitrogen cooling"] 
    };
    if (celsius < -20) return { 
      level: "Very Cold", 
      color: "#3b82f6", 
      impact: "Excellent for infrared, minimal thermal noise",
      examples: ["Winter night observing", "High altitude sites"] 
    };
    if (celsius < 0) return { 
      level: "Cold", 
      color: "#60a5fa", 
      impact: "Great for CCD cooling, dew point concerns",
      examples: ["Clear winter nights", "Mountain observatories"] 
    };
    if (celsius < 10) return { 
      level: "Cool", 
      color: "#93c5fd", 
      impact: "Good for most equipment, low thermal noise",
      examples: ["Spring/fall nights", "Moderate altitude"] 
    };
    if (celsius < 20) return { 
      level: "Mild", 
      color: "#34d399", 
      impact: "Comfortable observing, moderate thermal effects",
      examples: ["Pleasant evening sessions", "Most amateur sites"] 
    };
    if (celsius < 30) return { 
      level: "Warm", 
      color: "#fbbf24", 
      impact: "Thermal currents affect seeing, equipment heating",
      examples: ["Summer nights", "Desert locations"] 
    };
    if (celsius < 40) return { 
      level: "Hot", 
      color: "#f59e0b", 
      impact: "Poor seeing, equipment overheating risk",
      examples: ["Hot summer days", "Tropical locations"] 
    };
    return { 
      level: "Extreme Heat", 
      color: "#dc2626", 
      impact: "Unsafe for most equipment, severe thermal effects",
      examples: ["Desert midday", "Equipment damage zone"] 
    };
  };

  const context = getTemperatureContext(tempCelsius);

  const astronomyTemperatures = [
    { celsius: -273.15, name: "Absolute Zero", note: "Theoretical minimum temperature" },
    { celsius: -196, name: "Liquid Nitrogen", note: "CCD cooling temperature" },
    { celsius: -78, name: "Dry Ice", note: "DIY camera cooling" },
    { celsius: -40, name: "Extreme Winter", note: "Siberian observatories" },
    { celsius: -20, name: "Cold Night", note: "Excellent for IR astronomy" },
    { celsius: 0, name: "Freezing Point", note: "Dew/frost formation risk" },
    { celsius: 15, name: "Ideal Observing", note: "Balanced comfort and performance" },
    { celsius: 25, name: "Summer Night", note: "Good for visual observing" },
    { celsius: 35, name: "Hot Night", note: "Thermal turbulence issues" },
    { celsius: 50, name: "Desert Day", note: "Avoid equipment exposure" },
  ];

  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '900px'
    }}>
      <h3>Temperature Converter for Astronomy</h3>
      <p style={{ marginBottom: '20px', color: '#666' }}>
        Convert temperatures between Celsius, Fahrenheit, and Kelvin. Temperature critically 
        affects equipment performance, image quality, and observing comfort in astronomy.
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
            Temperature: {tempCelsius}°C
          </label>
          <input
            type="range"
            min="-50"
            max="50"
            step="1"
            value={tempCelsius}
            onChange={(e) => setTempCelsius(parseInt(e.target.value))}
            style={{ width: '100%', height: '8px' }}
            data-testid="temperature-slider"
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#666' }}>
            <span>-50°C (Arctic)</span>
            <span>50°C (Desert)</span>
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
            <div style={{ fontSize: '24px', fontWeight: 'bold' }} data-testid="temp-celsius">
              {tempCelsius}°C
            </div>
            <div style={{ color: '#666', fontSize: '12px' }}>Celsius</div>
          </div>
          
          <div style={{
            padding: '15px',
            border: '2px solid #4caf50',
            borderRadius: '8px',
            backgroundColor: '#e8f5e8',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold' }} data-testid="temp-fahrenheit">
              {tempFahrenheit.toFixed(1)}°F
            </div>
            <div style={{ color: '#666', fontSize: '12px' }}>Fahrenheit</div>
          </div>
          
          <div style={{
            padding: '15px',
            border: '2px solid #ff9800',
            borderRadius: '8px',
            backgroundColor: '#fff3e0',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold' }} data-testid="temp-kelvin">
              {tempKelvin.toFixed(1)} K
            </div>
            <div style={{ color: '#666', fontSize: '12px' }}>Kelvin</div>
          </div>
        </div>
        
        <div style={{ 
          marginTop: '20px',
          padding: '15px',
          borderRadius: '8px',
          backgroundColor: context.color,
          color: 'white',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
            Conditions: {context.level}
          </div>
          <div style={{ fontSize: '14px', marginTop: '5px' }}>
            {context.impact}
          </div>
          <div style={{ fontSize: '12px', marginTop: '8px', opacity: 0.9 }}>
            Examples: {context.examples.join(', ')}
          </div>
        </div>
      </div>
      
      <div style={{ marginBottom: '30px' }}>
        <h4>Common Astronomy Temperatures</h4>
        <div style={{ display: 'grid', gap: '8px' }}>
          {astronomyTemperatures.map((temp, index) => {
            const fahrenheit = celsiusToFahrenheit(temp.celsius);
            const kelvin = celsiusToKelvin(temp.celsius);
            const isSelected = Math.abs(tempCelsius - temp.celsius) < 2;
            
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
                onClick={() => setTempCelsius(Math.round(temp.celsius))}
                data-testid={`temp-example-${index}`}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 2fr', gap: '10px', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 'bold' }}>{temp.name}</div>
                    <div style={{ fontSize: '12px', color: '#666' }}>
                      {temp.celsius}°C
                    </div>
                  </div>
                  <div style={{ fontSize: '12px', color: '#666' }}>
                    {fahrenheit.toFixed(1)}°F<br />
                    {kelvin.toFixed(1)} K
                  </div>
                  <div style={{ fontSize: '12px', color: '#666' }}>
                    {temp.note}
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
          <strong>🔭 Telescope Performance:</strong><br />
          Lower temperatures reduce thermal expansion and improve mirror 
          figure. Allow time for thermal equilibrium.
        </div>
        
        <div style={{ 
          padding: '15px',
          backgroundColor: '#f0fff0',
          borderRadius: '4px',
          fontSize: '12px'
        }}>
          <strong>📸 CCD/CMOS Cameras:</strong><br />
          Cooler sensors have lower dark current and thermal noise. 
          Many cameras cool to -20°C to -40°C.
        </div>
        
        <div style={{ 
          padding: '15px',
          backgroundColor: '#fffef0',
          borderRadius: '4px',
          fontSize: '12px'
        }}>
          <strong>🌡️ Dew Point:</strong><br />
          Temperature drops below dew point cause condensation. 
          Use dew heaters or shields on optics.
        </div>
        
        <div style={{ 
          padding: '15px',
          backgroundColor: '#fff0f0',
          borderRadius: '4px',
          fontSize: '12px'
        }}>
          <strong>👁️ Seeing Conditions:</strong><br />
          Temperature gradients create atmospheric turbulence. 
          Best seeing occurs during thermal stability.
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
        • C to F: (C × 9/5) + 32<br />
        • F to C: (F - 32) × 5/9<br />
        • C to K: C + 273.15<br />
        • K to C: K - 273.15<br />
        • Kelvin is the scientific standard for absolute temperature
      </div>
    </div>
  );
};

const meta: Meta<typeof TemperatureConverterDemo> = {
  title: 'Utils/temperature',
  component: TemperatureConverterDemo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Temperature conversion utilities for astronomy applications. Convert between Celsius, Fahrenheit, and Kelvin with astronomy-specific context for equipment performance and observing conditions.'
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
        story: 'Interactive temperature converter with astronomy-specific context. Shows how temperature affects equipment performance and observing conditions.'
      }
    }
  }
};
