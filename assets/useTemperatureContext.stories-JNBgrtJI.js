import{R as e}from"./iframe-D3btsgxg.js";import{a as i,T as n,u}from"./TemperatureString-BGo8j_Dk.js";import"./preload-helper-PPVm8Dsz.js";import"./temperature-D-xsJM9F.js";typeof window<"u"&&!window.localStorage&&(window.localStorage={getItem:()=>null,setItem:()=>{},removeItem:()=>{},clear:()=>{},length:0,key:()=>null});const s=()=>e.createElement("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px",fontFamily:"Arial, sans-serif",maxWidth:"400px"}},e.createElement("h3",null,"Temperature Context Demo"),e.createElement("p",null,"Room temperature: ",e.createElement(n,{temperature:20,units:"C"})),e.createElement("p",null,"Freezing point: ",e.createElement(n,{temperature:32,units:"F"})),e.createElement("p",{style:{fontSize:"12px",color:"#666"}},"💡 Click the temperatures to toggle between F/C display")),g=()=>{const{temperatureUnits:r,setTemperatureUnits:p}=u(),m=["F","C","K"],d=[{label:"Room Temperature",temp:20,unit:"C"},{label:"Hot Summer Day",temp:95,unit:"F"},{label:"Absolute Zero",temp:0,unit:"K"},{label:"Boiling Water",temp:373.15,unit:"K"}];return e.createElement("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px",fontFamily:"Arial, sans-serif",maxWidth:"500px"}},e.createElement("h3",null,"Temperature Context with Controls"),e.createElement("div",{style:{marginBottom:"15px"}},e.createElement("strong",null,"Current units:")," ",r),e.createElement("div",{style:{marginBottom:"15px"}},e.createElement("h4",{style:{marginBottom:"10px"}},"Unit Controls:"),e.createElement("div",{style:{display:"flex",gap:"8px"}},m.map(t=>e.createElement("button",{key:t,onClick:()=>p(t),style:{padding:"6px 12px",border:"1px solid #007acc",borderRadius:"4px",backgroundColor:r===t?"#007acc":"white",color:r===t?"white":"#007acc",cursor:"pointer",fontSize:"12px"},"data-testid":`unit-${t}`},"°",t)))),e.createElement("div",null,e.createElement("h4",{style:{marginBottom:"10px"}},"Sample Temperatures:"),e.createElement("div",{style:{display:"grid",gap:"8px"}},d.map((t,c)=>e.createElement("div",{key:c,style:{padding:"8px",border:"1px solid #ddd",borderRadius:"4px",backgroundColor:"#f9f9f9",display:"flex",justifyContent:"space-between",alignItems:"center"}},e.createElement("span",null,t.label,":"),e.createElement(n,{temperature:t.temp,units:t.unit}))))))},x=()=>e.createElement("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap",fontFamily:"Arial, sans-serif"}},e.createElement("div",{style:{padding:"15px",border:"2px solid #dc3545",borderRadius:"8px",minWidth:"250px"}},e.createElement("h4",{style:{margin:"0 0 10px 0",color:"#dc3545"}},"Provider A (Independent)"),e.createElement(i,null,e.createElement("div",null,e.createElement("div",{style:{marginBottom:"8px"}},"Sample 1: ",e.createElement(n,{temperature:25,units:"C"})),e.createElement("div",null,"Sample 2: ",e.createElement(n,{temperature:98.6,units:"F"}))))),e.createElement("div",{style:{padding:"15px",border:"2px solid #007acc",borderRadius:"8px",minWidth:"250px"}},e.createElement("h4",{style:{margin:"0 0 10px 0",color:"#007acc"}},"Provider B (Independent)"),e.createElement(i,null,e.createElement("div",null,e.createElement("div",{style:{marginBottom:"8px"}},"Sample 1: ",e.createElement(n,{temperature:25,units:"C"})),e.createElement("div",null,"Sample 2: ",e.createElement(n,{temperature:98.6,units:"F"}))))),e.createElement("div",{style:{width:"100%",padding:"10px",backgroundColor:"#f8f9fa",borderRadius:"4px",fontSize:"12px",color:"#666"}},"💡 Each lab has its own independent temperature context. Click the temperatures in each box to see they change independently!")),f={title:"Hooks/useTemperatureContext",component:s,parameters:{layout:"centered",docs:{description:{component:"A React hook that provides context for managing temperature unit preferences across your application. Components wrapped in TempProvider can access and modify the temperature unit setting (F, C, K) with automatic localStorage persistence."}}},tags:["autodocs"],decorators:[r=>(typeof window<"u"&&window.localStorage&&window.localStorage.removeItem("temperatureUnits"),e.createElement(i,null,e.createElement(r,null)))]},a={render:()=>e.createElement(s,null),parameters:{docs:{description:{story:"Basic usage with TemperatureString components. Click the temperature displays to toggle between F/C units."}}}},o={render:()=>e.createElement(g,null),parameters:{docs:{description:{story:"Example with manual controls to change temperature units. Shows how the hook can be used to control the display format programmatically."}}}},l={render:()=>e.createElement(x,null),decorators:[r=>(typeof window<"u"&&window.localStorage&&window.localStorage.removeItem("temperatureUnits"),e.createElement(r,null))],parameters:{docs:{description:{story:"Two independent TempProviders showing that each maintains its own state. Click the temperatures in each box to see they change independently!"}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <SimpleExample />,
  parameters: {
    docs: {
      description: {
        story: 'Basic usage with TemperatureString components. Click the temperature displays to toggle between F/C units.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledExample />,
  parameters: {
    docs: {
      description: {
        story: 'Example with manual controls to change temperature units. Shows how the hook can be used to control the display format programmatically.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <IndependentProvidersExample />,
  decorators: [(Story: any) => {
    // Don't wrap with provider - the component has its own
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem('temperatureUnits');
    }
    return <Story />;
  }],
  parameters: {
    docs: {
      description: {
        story: 'Two independent TempProviders showing that each maintains its own state. Click the temperatures in each box to see they change independently!'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};const v=["SimpleUsage","WithControls","IndependentProviders"];export{l as IndependentProviders,a as SimpleUsage,o as WithControls,v as __namedExportsOrder,f as default};
