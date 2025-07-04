import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ObservatoryDateTimeZoneString } from '../components/ObservatoryDateTimeZoneString';
import { ObservatoryDateTimeDisplayProvider } from '../hooks/useObservatoryDateTimeContext';

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

const meta: Meta<typeof ObservatoryDateTimeZoneString> = {
  title: 'Components/ObservatoryDateTimeZoneString',
  component: ObservatoryDateTimeZoneString,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'An interactive date/time display component that shows times in different formats: relative (e.g., "2 days ago"), observatory time (Chicago timezone), local time, and UTC. Click the displayed time to cycle through the different display modes. Perfect for astronomy applications where multiple time references are important.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    utcDate: {
      control: { type: 'date' },
      description: 'The UTC date/time to display (can be Date, string, or number)'
    },
  },
  decorators: [
    (Story) => {
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

export const CurrentTime: Story = {
  args: {
    utcDate: new Date(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Current time - shows the current moment in different time formats. Click to cycle through: relative → observatory (Chicago) → local → UTC'
      }
    }
  }
};

export const RecentPast: Story = {
  args: {
    utcDate: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
  },
  parameters: {
    docs: {
      description: {
        story: 'A time from 2 hours ago - great for seeing relative time display ("2 hours ago")'
      }
    }
  }
};

export const Yesterday: Story = {
  args: {
    utcDate: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
  },
  parameters: {
    docs: {
      description: {
        story: 'Yesterday at this time - demonstrates relative date display'
      }
    }
  }
};

export const LastWeek: Story = {
  args: {
    utcDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 1 week ago
  },
  parameters: {
    docs: {
      description: {
        story: 'One week ago - shows how longer time periods are displayed relatively'
      }
    }
  }
};

export const NewYears2024: Story = {
  args: {
    utcDate: new Date('2024-01-01T00:00:00Z'),
  },
  parameters: {
    docs: {
      description: {
        story: 'New Year\'s Day 2024 at midnight UTC - good for seeing different timezone conversions'
      }
    }
  }
};

export const SummerSolstice2024: Story = {
  args: {
    utcDate: new Date('2024-06-20T20:50:59Z'), // 2024 summer solstice
  },
  parameters: {
    docs: {
      description: {
        story: 'Summer Solstice 2024 - an important astronomical date showing how the component handles significant times for astronomers'
      }
    }
  }
};

export const WinterSolstice2023: Story = {
  args: {
    utcDate: new Date('2023-12-22T09:27:21Z'), // 2023 winter solstice
  },
  parameters: {
    docs: {
      description: {
        story: 'Winter Solstice 2023 - another key astronomical date'
      }
    }
  }
};

export const EclipseDate: Story = {
  args: {
    utcDate: new Date('2024-04-08T18:17:00Z'), // 2024 total solar eclipse
  },
  parameters: {
    docs: {
      description: {
        story: 'April 8, 2024 Total Solar Eclipse - demonstrates how the component displays significant astronomical events'
      }
    }
  }
};

export const FarFuture: Story = {
  args: {
    utcDate: new Date('2030-01-01T00:00:00Z'),
  },
  parameters: {
    docs: {
      description: {
        story: 'A future date (2030) - shows how the component handles future times'
      }
    }
  }
};

export const VintageDate: Story = {
  args: {
    utcDate: new Date('1969-07-20T20:17:00Z'), // Apollo 11 moon landing
  },
  parameters: {
    docs: {
      description: {
        story: 'Apollo 11 Moon Landing (July 20, 1969) - a historic astronomical moment showing how the component displays very old dates'
      }
    }
  }
};