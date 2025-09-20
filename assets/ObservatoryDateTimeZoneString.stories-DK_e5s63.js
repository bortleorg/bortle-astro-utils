import{R as d}from"./iframe-Ci1duq-y.js";import{O as l,a as u}from"./ObservatoryDateTimeZoneString-C79ZQpuX.js";import"./preload-helper-PPVm8Dsz.js";typeof window<"u"&&!window.localStorage&&(window.localStorage={getItem:()=>null,setItem:()=>{},removeItem:()=>{},clear:()=>{},length:0,key:()=>null});const h={title:"Components/ObservatoryDateTimeZoneString",component:l,parameters:{layout:"centered",docs:{description:{component:'An interactive date/time display component that shows times in different formats: relative (e.g., "2 days ago"), observatory time (Chicago timezone), local time, and UTC. Click the displayed time to cycle through the different display modes. Perfect for astronomy applications where multiple time references are important.'}}},tags:["autodocs"],argTypes:{utcDate:{control:{type:"date"},description:"The UTC date/time to display (can be Date, string, or number)"}},decorators:[p=>(typeof window<"u"&&window.localStorage&&(window.localStorage.removeItem("observatoryDateTimeDisplay"),window.localStorage.removeItem("observatoryTimeZone")),d.createElement(u,null,d.createElement(p,null)))]},e={args:{utcDate:new Date},parameters:{docs:{description:{story:"Current time - shows the current moment in different time formats. Click to cycle through: relative → observatory (Chicago) → local → UTC"}}}},t={args:{utcDate:new Date(Date.now()-7200*1e3)},parameters:{docs:{description:{story:'A time from 2 hours ago - great for seeing relative time display ("2 hours ago")'}}}},r={args:{utcDate:new Date(Date.now()-1440*60*1e3)},parameters:{docs:{description:{story:"Yesterday at this time - demonstrates relative date display"}}}},a={args:{utcDate:new Date(Date.now()-10080*60*1e3)},parameters:{docs:{description:{story:"One week ago - shows how longer time periods are displayed relatively"}}}},o={args:{utcDate:new Date("2024-01-01T00:00:00Z")},parameters:{docs:{description:{story:"New Year's Day 2024 at midnight UTC - good for seeing different timezone conversions"}}}},s={args:{utcDate:new Date("2024-06-20T20:50:59Z")},parameters:{docs:{description:{story:"Summer Solstice 2024 - an important astronomical date showing how the component handles significant times for astronomers"}}}},n={args:{utcDate:new Date("2023-12-22T09:27:21Z")},parameters:{docs:{description:{story:"Winter Solstice 2023 - another key astronomical date"}}}},i={args:{utcDate:new Date("2024-04-08T18:17:00Z")},parameters:{docs:{description:{story:"April 8, 2024 Total Solar Eclipse - demonstrates how the component displays significant astronomical events"}}}},c={args:{utcDate:new Date("2030-01-01T00:00:00Z")},parameters:{docs:{description:{story:"A future date (2030) - shows how the component handles future times"}}}},m={args:{utcDate:new Date("1969-07-20T20:17:00Z")},parameters:{docs:{description:{story:"Apollo 11 Moon Landing (July 20, 1969) - a historic astronomical moment showing how the component displays very old dates"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    utcDate: new Date()
  },
  parameters: {
    docs: {
      description: {
        story: 'Current time - shows the current moment in different time formats. Click to cycle through: relative → observatory (Chicago) → local → UTC'
      }
    }
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    utcDate: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
  },
  parameters: {
    docs: {
      description: {
        story: 'A time from 2 hours ago - great for seeing relative time display ("2 hours ago")'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    utcDate: new Date(Date.now() - 24 * 60 * 60 * 1000) // 1 day ago
  },
  parameters: {
    docs: {
      description: {
        story: 'Yesterday at this time - demonstrates relative date display'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    utcDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // 1 week ago
  },
  parameters: {
    docs: {
      description: {
        story: 'One week ago - shows how longer time periods are displayed relatively'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    utcDate: new Date('2024-01-01T00:00:00Z')
  },
  parameters: {
    docs: {
      description: {
        story: 'New Year\\'s Day 2024 at midnight UTC - good for seeing different timezone conversions'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    utcDate: new Date('2024-06-20T20:50:59Z') // 2024 summer solstice
  },
  parameters: {
    docs: {
      description: {
        story: 'Summer Solstice 2024 - an important astronomical date showing how the component handles significant times for astronomers'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    utcDate: new Date('2023-12-22T09:27:21Z') // 2023 winter solstice
  },
  parameters: {
    docs: {
      description: {
        story: 'Winter Solstice 2023 - another key astronomical date'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    utcDate: new Date('2024-04-08T18:17:00Z') // 2024 total solar eclipse
  },
  parameters: {
    docs: {
      description: {
        story: 'April 8, 2024 Total Solar Eclipse - demonstrates how the component displays significant astronomical events'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    utcDate: new Date('2030-01-01T00:00:00Z')
  },
  parameters: {
    docs: {
      description: {
        story: 'A future date (2030) - shows how the component handles future times'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    utcDate: new Date('1969-07-20T20:17:00Z') // Apollo 11 moon landing
  },
  parameters: {
    docs: {
      description: {
        story: 'Apollo 11 Moon Landing (July 20, 1969) - a historic astronomical moment showing how the component displays very old dates'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};const D=["CurrentTime","RecentPast","Yesterday","LastWeek","NewYears2024","SummerSolstice2024","WinterSolstice2023","EclipseDate","FarFuture","VintageDate"];export{e as CurrentTime,i as EclipseDate,c as FarFuture,a as LastWeek,o as NewYears2024,t as RecentPast,s as SummerSolstice2024,m as VintageDate,n as WinterSolstice2023,r as Yesterday,D as __namedExportsOrder,h as default};
