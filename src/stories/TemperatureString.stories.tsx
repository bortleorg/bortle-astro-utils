import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TemperatureString } from '../components/TemperatureString';
import { TempProvider } from '../hooks/useTemperatureContext';

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

const meta: Meta<typeof TemperatureString> = {
  title: 'Components/TemperatureString',
  component: TemperatureString,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'An interactive temperature display component that converts between Fahrenheit, Celsius, and Kelvin. Click the temperature to toggle between F/C display units. The input temperature can be in any of the three units.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    temperature: {
      control: { type: 'number', min: -273.15, max: 5778, step: 0.1 },
      description: 'The temperature value to display'
    },
    units: {
      control: { type: 'select' },
      options: ['F', 'C', 'K'],
      description: 'The unit of the input temperature'
    },
  },
  decorators: [
    (Story) => {
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

export const RoomTemperature: Story = {
  args: {
    temperature: 20,
    units: 'C',
  },
  parameters: {
    docs: {
      description: {
        story: 'Room temperature (20°C / 68°F). Try clicking to toggle between units!'
      }
    }
  }
};

export const FreezingPoint: Story = {
  args: {
    temperature: 32,
    units: 'F',
  },
  parameters: {
    docs: {
      description: {
        story: 'Freezing point of water (32°F / 0°C / 273.15K)'
      }
    }
  }
};

export const BoilingPoint: Story = {
  args: {
    temperature: 373.15,
    units: 'K',
  },
  parameters: {
    docs: {
      description: {
        story: 'Boiling point of water (373.15K / 100°C / 212°F)'
      }
    }
  }
};

export const AbsoluteZero: Story = {
  args: {
    temperature: 0,
    units: 'K',
  },
  parameters: {
    docs: {
      description: {
        story: 'Absolute zero (0K / -273.15°C / -459.67°F) - the coldest possible temperature'
      }
    }
  }
};

export const DeepSpace: Story = {
  args: {
    temperature: 2.7,
    units: 'K',
  },
  parameters: {
    docs: {
      description: {
        story: 'Cosmic microwave background temperature (2.7K / -270.45°C / -454.81°F) - the temperature of deep space'
      }
    }
  }
};

export const SunSurface: Story = {
  args: {
    temperature: 5778,
    units: 'K',
  },
  parameters: {
    docs: {
      description: {
        story: 'Surface temperature of the Sun (5778K / 5504.85°C / 9940.73°F)'
      }
    }
  }
};

export const HotSummer: Story = {
  args: {
    temperature: 95,
    units: 'F',
  },
  parameters: {
    docs: {
      description: {
        story: 'Hot summer day (95°F / 35°C / 308.15K)'
      }
    }
  }
};

export const ColdWinter: Story = {
  args: {
    temperature: -10,
    units: 'C',
  },
  parameters: {
    docs: {
      description: {
        story: 'Cold winter day (-10°C / 14°F / 263.15K)'
      }
    }
  }
};