import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { mpsas2bortle } from '../utils/mpsas2bortle';

// Interactive demo component
const MPSASToBortleDemo: React.FC = () => {
  const [mpsasValue, setMpsasValue] = React.useState(21.5);
  
  const bortleScale = mpsas2bortle(mpsasValue);
  
  const bortleDescriptions = {
    1: "Excellent dark-sky site - Black",
    2: "Typical truly dark site - Gray", 
    3: "Rural sky - Blue",
    4: "Rural/suburban transition - Green/Yellow",
    5: "Suburban sky - Orange",
    6: "Bright suburban sky - Red",
    7: "Suburban/urban transition or full Moon - Red",
    8: "City sky - White",
    9: "Inner-city sky - White"
  };
  
  const bortleColors = {
    1: "#000000",
    2: "#4a4a4a", 
    3: "#0066cc",
    4: "#66cc00",
    5: "#ff8800",
    6: "#ff0000",
    7: "#ff3366",
    8: "#ffffff",
    9: "#ffffff"
  };

  const examples = [
    { mpsas: 22.5, location: "Death Valley National Park" },
    { mpsas: 22.0, location: "Remote mountaintop observatory" },
    { mpsas: 21.8, location: "Excellent dark sky site" },
    { mpsas: 21.5, location: "Good rural location" },
    { mpsas: 21.0, location: "Rural area with some light pollution" },
    { mpsas: 20.5, location: "Rural/suburban transition" },
    { mpsas: 20.0, location: "Suburban area" },
    { mpsas: 19.0, location: "Bright suburban/urban area" },
    { mpsas: 17.0, location: "City center" },
  ];

  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px'
    }}>
      <h3>MPSAS to Bortle Scale Converter</h3>
      <p style={{ marginBottom: '20px', color: '#666' }}>
        Convert between Magnitudes Per Square Arc Second (MPSAS) and the Bortle Dark-Sky Scale.
        MPSAS measures sky brightness - higher values indicate darker skies.
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
            MPSAS Value: {mpsasValue.toFixed(2)}
          </label>
          <input
            type="range"
            min="16"
            max="23"
            step="0.1"
            value={mpsasValue}
            onChange={(e) => setMpsasValue(parseFloat(e.target.value))}
            style={{ width: '100%', height: '8px' }}
            data-testid="mpsas-slider"
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#666' }}>
            <span>16 (City)</span>
            <span>23 (Pristine)</span>
          </div>
        </div>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '15px',
          marginTop: '20px'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: bortleColors[bortleScale as keyof typeof bortleColors],
            border: bortleScale >= 8 ? '2px solid #333' : 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: bortleScale >= 5 ? 'white' : 'black',
            fontWeight: 'bold',
            fontSize: '24px'
          }}>
            {bortleScale}
          </div>
          
          <div>
            <div style={{ fontSize: '18px', fontWeight: 'bold' }} data-testid="bortle-result">
              Bortle Class {bortleScale}
            </div>
            <div style={{ color: '#666', fontSize: '14px' }}>
              {bortleDescriptions[bortleScale as keyof typeof bortleDescriptions]}
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h4>Real-world Examples</h4>
        <div style={{ 
          display: 'grid', 
          gap: '10px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
        }}>
          {examples.map((example, index) => {
            const exampleBortle = mpsas2bortle(example.mpsas);
            return (
              <div
                key={index}
                style={{
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  backgroundColor: mpsasValue === example.mpsas ? '#e3f2fd' : 'white',
                  borderColor: mpsasValue === example.mpsas ? '#2196f3' : '#ddd'
                }}
                onClick={() => setMpsasValue(example.mpsas)}
                data-testid={`example-${index}`}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 'bold' }}>{example.location}</div>
                    <div style={{ fontSize: '12px', color: '#666' }}>
                      MPSAS: {example.mpsas} → Bortle {exampleBortle}
                    </div>
                  </div>
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: bortleColors[exampleBortle as keyof typeof bortleColors],
                      border: exampleBortle >= 8 ? '1px solid #333' : 'none'
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div style={{ 
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#f0f8ff',
        borderRadius: '4px',
        fontSize: '12px',
        color: '#666'
      }}>
        <strong>About the Bortle Scale:</strong> The Bortle Dark-Sky Scale is a nine-level scale 
        to rate the night sky's darkness at a location. Class 1 represents the darkest skies 
        while Class 9 represents heavily light-polluted city skies.
      </div>
    </div>
  );
};

const meta: Meta<typeof MPSASToBortleDemo> = {
  title: 'Utils/mpsas2bortle',
  component: MPSASToBortleDemo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Convert between MPSAS (Magnitudes Per Square Arc Second) and the Bortle Dark-Sky Scale. This utility helps astronomers and astrophotographers understand sky quality at different locations.'
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
        story: 'Interactive converter with real-world examples. Drag the slider or click on examples to see how MPSAS values translate to Bortle scale ratings.'
      }
    }
  }
};
