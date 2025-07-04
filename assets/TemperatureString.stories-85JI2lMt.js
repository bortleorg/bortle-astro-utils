import{r as C,R as d}from"./iframe-Cb0cCiOm.js";const K=["F","C","K"],F=C.createContext(void 0),h=({children:e})=>{const r=()=>{const t=localStorage.getItem("temperatureUnits");return t&&K.includes(t)?t:"F"},[n,l]=C.useState(r()),g=t=>{const f=typeof t=="function"?t(n):t;return localStorage.setItem("temperatureUnits",f),l(f)};return d.createElement(F.Provider,{value:{temperatureUnits:n,setTemperatureUnits:g}},e)},T=()=>{const e=C.useContext(F);if(e===void 0)throw new Error("useTempContext must be used within a TempProvider");return e};h.__docgenInfo={description:"",methods:[],displayName:"TempProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function y(e){return e-273.15}function w(e){return(e-273.15)*9/5+32}function v(e){return e*9/5+32}function b(e){return(e-32)*5/9}function x(e){return(e-32)*5/9+273.15}const S=e=>{const{temperatureUnits:r,setTemperatureUnits:n}=T(),l=()=>{n(t=>t==="F"?"C":"F")},g=()=>r===e.units?e.temperature:r==="F"?e.units==="C"?v(e.temperature):w(e.temperature):r==="C"?e.units==="F"?b(e.temperature):y(e.temperature):r==="K"?e.units==="F"?x(e.temperature):y(e.temperature):e.temperature;return d.createElement("span",{onClick:l},g().toFixed(1),"°",r)};S.__docgenInfo={description:"",methods:[],displayName:"TemperatureString",props:{temperature:{required:!0,tsType:{name:"number"},description:""},units:{required:!0,tsType:{name:"union",raw:'"F" | "C" | "K"',elements:[{name:"literal",value:'"F"'},{name:"literal",value:'"C"'},{name:"literal",value:'"K"'}]},description:""}}};typeof window<"u"&&!window.localStorage&&(window.localStorage={getItem:()=>null,setItem:()=>{},removeItem:()=>{},clear:()=>{},length:0,key:()=>null});const I={title:"Components/TemperatureString",component:S,parameters:{layout:"centered",docs:{description:{component:"An interactive temperature display component that converts between Fahrenheit, Celsius, and Kelvin. Click the temperature to toggle between F/C display units. The input temperature can be in any of the three units."}}},tags:["autodocs"],argTypes:{temperature:{control:{type:"number",min:-273.15,max:5778,step:.1},description:"The temperature value to display"},units:{control:{type:"select"},options:["F","C","K"],description:"The unit of the input temperature"}},decorators:[e=>(typeof window<"u"&&window.localStorage&&window.localStorage.removeItem("temperatureUnits"),d.createElement(h,null,d.createElement(e,null)))]},s={args:{temperature:20,units:"C"},parameters:{docs:{description:{story:"Room temperature (20°C / 68°F). Try clicking to toggle between units!"}}}},o={args:{temperature:32,units:"F"},parameters:{docs:{description:{story:"Freezing point of water (32°F / 0°C / 273.15K)"}}}},a={args:{temperature:373.15,units:"K"},parameters:{docs:{description:{story:"Boiling point of water (373.15K / 100°C / 212°F)"}}}},i={args:{temperature:0,units:"K"},parameters:{docs:{description:{story:"Absolute zero (0K / -273.15°C / -459.67°F) - the coldest possible temperature"}}}},u={args:{temperature:2.7,units:"K"},parameters:{docs:{description:{story:"Cosmic microwave background temperature (2.7K / -270.45°C / -454.81°F) - the temperature of deep space"}}}},c={args:{temperature:5778,units:"K"},parameters:{docs:{description:{story:"Surface temperature of the Sun (5778K / 5504.85°C / 9940.73°F)"}}}},m={args:{temperature:95,units:"F"},parameters:{docs:{description:{story:"Hot summer day (95°F / 35°C / 308.15K)"}}}},p={args:{temperature:-10,units:"C"},parameters:{docs:{description:{story:"Cold winter day (-10°C / 14°F / 263.15K)"}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const P=["RoomTemperature","FreezingPoint","BoilingPoint","AbsoluteZero","DeepSpace","SunSurface","HotSummer","ColdWinter"];export{i as AbsoluteZero,a as BoilingPoint,p as ColdWinter,u as DeepSpace,o as FreezingPoint,m as HotSummer,s as RoomTemperature,c as SunSurface,P as __namedExportsOrder,I as default};
