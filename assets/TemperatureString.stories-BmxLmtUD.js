import{R as p}from"./iframe-Ci1duq-y.js";import{T as m,a as u}from"./TemperatureString-CrbSJNMo.js";import"./preload-helper-PPVm8Dsz.js";import"./temperature-D-xsJM9F.js";typeof window<"u"&&!window.localStorage&&(window.localStorage={getItem:()=>null,setItem:()=>{},removeItem:()=>{},clear:()=>{},length:0,key:()=>null});const C={title:"Components/TemperatureString",component:m,parameters:{layout:"centered",docs:{description:{component:"An interactive temperature display component that converts between Fahrenheit, Celsius, and Kelvin. Click the temperature to toggle between F/C display units. The input temperature can be in any of the three units."}}},tags:["autodocs"],argTypes:{temperature:{control:{type:"number",min:-273.15,max:5778,step:.1},description:"The temperature value to display"},units:{control:{type:"select"},options:["F","C","K"],description:"The unit of the input temperature"}},decorators:[c=>(typeof window<"u"&&window.localStorage&&window.localStorage.removeItem("temperatureUnits"),p.createElement(u,null,p.createElement(c,null)))]},e={args:{temperature:20,units:"C"},parameters:{docs:{description:{story:"Room temperature (20°C / 68°F). Try clicking to toggle between units!"}}}},r={args:{temperature:32,units:"F"},parameters:{docs:{description:{story:"Freezing point of water (32°F / 0°C / 273.15K)"}}}},t={args:{temperature:373.15,units:"K"},parameters:{docs:{description:{story:"Boiling point of water (373.15K / 100°C / 212°F)"}}}},n={args:{temperature:0,units:"K"},parameters:{docs:{description:{story:"Absolute zero (0K / -273.15°C / -459.67°F) - the coldest possible temperature"}}}},o={args:{temperature:2.7,units:"K"},parameters:{docs:{description:{story:"Cosmic microwave background temperature (2.7K / -270.45°C / -454.81°F) - the temperature of deep space"}}}},s={args:{temperature:5778,units:"K"},parameters:{docs:{description:{story:"Surface temperature of the Sun (5778K / 5504.85°C / 9940.73°F)"}}}},a={args:{temperature:95,units:"F"},parameters:{docs:{description:{story:"Hot summer day (95°F / 35°C / 308.15K)"}}}},i={args:{temperature:-10,units:"C"},parameters:{docs:{description:{story:"Cold winter day (-10°C / 14°F / 263.15K)"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    temperature: 20,
    units: 'C'
  },
  parameters: {
    docs: {
      description: {
        story: 'Room temperature (20°C / 68°F). Try clicking to toggle between units!'
      }
    }
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    temperature: 32,
    units: 'F'
  },
  parameters: {
    docs: {
      description: {
        story: 'Freezing point of water (32°F / 0°C / 273.15K)'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    temperature: 373.15,
    units: 'K'
  },
  parameters: {
    docs: {
      description: {
        story: 'Boiling point of water (373.15K / 100°C / 212°F)'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    temperature: 0,
    units: 'K'
  },
  parameters: {
    docs: {
      description: {
        story: 'Absolute zero (0K / -273.15°C / -459.67°F) - the coldest possible temperature'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    temperature: 2.7,
    units: 'K'
  },
  parameters: {
    docs: {
      description: {
        story: 'Cosmic microwave background temperature (2.7K / -270.45°C / -454.81°F) - the temperature of deep space'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    temperature: 5778,
    units: 'K'
  },
  parameters: {
    docs: {
      description: {
        story: 'Surface temperature of the Sun (5778K / 5504.85°C / 9940.73°F)'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    temperature: 95,
    units: 'F'
  },
  parameters: {
    docs: {
      description: {
        story: 'Hot summer day (95°F / 35°C / 308.15K)'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    temperature: -10,
    units: 'C'
  },
  parameters: {
    docs: {
      description: {
        story: 'Cold winter day (-10°C / 14°F / 263.15K)'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};const F=["RoomTemperature","FreezingPoint","BoilingPoint","AbsoluteZero","DeepSpace","SunSurface","HotSummer","ColdWinter"];export{n as AbsoluteZero,t as BoilingPoint,i as ColdWinter,o as DeepSpace,r as FreezingPoint,a as HotSummer,e as RoomTemperature,s as SunSurface,F as __namedExportsOrder,C as default};
