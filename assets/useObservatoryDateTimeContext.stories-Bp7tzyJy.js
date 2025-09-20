import{R as e}from"./iframe-YRkfsvd7.js";import{a as m,O as t,u as d}from"./ObservatoryDateTimeZoneString-BVuIff5Y.js";import"./preload-helper-PPVm8Dsz.js";typeof window<"u"&&!window.localStorage&&(window.localStorage={getItem:()=>null,setItem:()=>{},removeItem:()=>{},clear:()=>{},length:0,key:()=>null});const p=()=>e.createElement("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px",fontFamily:"Arial, sans-serif",maxWidth:"400px"}},e.createElement("h3",null,"Observatory Date Time Display"),e.createElement("p",null,"Current time: ",e.createElement(t,{utcDate:new Date})),e.createElement("p",{style:{fontSize:"12px",color:"#666"}},"💡 Click the time to cycle through display modes: relative → observatory → local → UTC")),v=()=>{const{observatoryDateTimeDisplay:r,setObservatoryDateTimeDisplay:a}=d(),y=["relative","observatory","local","utc"];return e.createElement("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px",fontFamily:"Arial, sans-serif",maxWidth:"500px"}},e.createElement("h3",null,"Controlled Observatory DateTime"),e.createElement("div",{style:{marginBottom:"15px"}},e.createElement("strong",null,"Current mode:")," ",r),e.createElement("div",{style:{marginBottom:"15px"}},e.createElement("strong",null,"Eclipse date:")," ",e.createElement(t,{utcDate:new Date("2024-04-08T18:20:00Z")})),e.createElement("div",{style:{marginBottom:"15px"}},e.createElement("strong",null,"Current time:")," ",e.createElement(t,{utcDate:new Date})),e.createElement("div",null,e.createElement("h4",{style:{marginBottom:"10px"}},"Display Mode Controls:"),e.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"}},y.map(o=>e.createElement("button",{key:o,onClick:()=>a(o),style:{padding:"6px 12px",border:"1px solid #007acc",borderRadius:"4px",backgroundColor:r===o?"#007acc":"white",color:r===o?"white":"#007acc",cursor:"pointer",fontSize:"12px"},"data-testid":`display-${o}`},o)))))},w=()=>{const{observatoryTimeZone:r,setObservatoryTimeZone:a}=d();return e.createElement("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px",fontFamily:"Arial, sans-serif",maxWidth:"600px"}},e.createElement("h3",null,"TimeZone Precedence Demo"),e.createElement("div",{style:{marginBottom:"15px"}},e.createElement("strong",null,"Context TimeZone:")," ",r,e.createElement("br",null),e.createElement("button",{onClick:()=>a("America/New_York"),style:{marginRight:"8px",marginTop:"5px",padding:"4px 8px",fontSize:"12px"}},"Set to New York"),e.createElement("button",{onClick:()=>a("Europe/London"),style:{marginRight:"8px",padding:"4px 8px",fontSize:"12px"}},"Set to London"),e.createElement("button",{onClick:()=>a("Asia/Tokyo"),style:{padding:"4px 8px",fontSize:"12px"}},"Set to Tokyo")),e.createElement("div",{style:{display:"grid",gap:"15px",gridTemplateColumns:"1fr 1fr"}},e.createElement("div",{style:{padding:"10px",border:"1px solid #ddd",borderRadius:"4px"}},e.createElement("h4",{style:{margin:"0 0 8px 0",fontSize:"14px"}},"Uses Context TimeZone"),e.createElement("div",null,"Eclipse: ",e.createElement(t,{utcDate:new Date("2024-04-08T18:20:00Z")})),e.createElement("div",null,"Now: ",e.createElement(t,{utcDate:new Date}))),e.createElement("div",{style:{padding:"10px",border:"1px solid #ddd",borderRadius:"4px"}},e.createElement("h4",{style:{margin:"0 0 8px 0",fontSize:"14px"}},"Overrides with Australia/Sydney"),e.createElement("div",null,"Eclipse: ",e.createElement(t,{utcDate:new Date("2024-04-08T18:20:00Z"),observatoryTimeZone:"Australia/Sydney"})),e.createElement("div",null,"Now: ",e.createElement(t,{utcDate:new Date,observatoryTimeZone:"Australia/Sydney"})))),e.createElement("div",{style:{marginTop:"15px",padding:"10px",backgroundColor:"#f8f9fa",borderRadius:"4px",fontSize:"12px",color:"#666"}},"💡 Component prop timezone takes precedence over context timezone. Change the context timezone and notice only the left column updates!"))},u=()=>e.createElement("div",{style:{display:"grid",gap:"15px",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",fontFamily:"Arial, sans-serif"}},e.createElement("div",{style:{padding:"15px",border:"2px solid #dc3545",borderRadius:"8px"}},e.createElement("h4",{style:{margin:"0 0 10px 0",color:"#dc3545"}},"🏔️ Mauna Kea Observatory"),e.createElement("small",{style:{color:"#666"}},"Hawaii, USA"),e.createElement(m,{initialTimeZone:"Pacific/Honolulu"},e.createElement("div",{style:{marginTop:"8px"}},e.createElement("div",null,"Eclipse: ",e.createElement(t,{utcDate:new Date("2024-04-08T18:20:00Z")})),e.createElement("div",null,"Now: ",e.createElement(t,{utcDate:new Date}))))),e.createElement("div",{style:{padding:"15px",border:"2px solid #28a745",borderRadius:"8px"}},e.createElement("h4",{style:{margin:"0 0 10px 0",color:"#28a745"}},"🌵 McDonald Observatory"),e.createElement("small",{style:{color:"#666"}},"Texas, USA"),e.createElement(m,{initialTimeZone:"America/Chicago"},e.createElement("div",{style:{marginTop:"8px"}},e.createElement("div",null,"Eclipse: ",e.createElement(t,{utcDate:new Date("2024-04-08T18:20:00Z")})),e.createElement("div",null,"Now: ",e.createElement(t,{utcDate:new Date}))))),e.createElement("div",{style:{padding:"15px",border:"2px solid #007acc",borderRadius:"8px"}},e.createElement("h4",{style:{margin:"0 0 10px 0",color:"#007acc"}},"🏛️ Royal Observatory"),e.createElement("small",{style:{color:"#666"}},"Greenwich, UK"),e.createElement(m,{initialTimeZone:"Europe/London"},e.createElement("div",{style:{marginTop:"8px"}},e.createElement("div",null,"Eclipse: ",e.createElement(t,{utcDate:new Date("2024-04-08T18:20:00Z")})),e.createElement("div",null,"Now: ",e.createElement(t,{utcDate:new Date}))))),e.createElement("div",{style:{gridColumn:"1 / -1",padding:"10px",backgroundColor:"#f8f9fa",borderRadius:"4px",fontSize:"12px",color:"#666"}},"🌍 Each observatory uses its local timezone via the provider's initialTimeZone prop. Click the times to cycle through display modes independently!")),E={title:"Hooks/useObservatoryDateTimeContext",component:p,parameters:{layout:"centered",docs:{description:{component:"A React hook that provides context for managing observatory date/time display preferences. Components wrapped in ObservatoryDateTimeDisplayProvider can access and modify the display mode (relative, observatory, local, UTC) and observatory time zone settings."}}},tags:["autodocs"],decorators:[r=>(typeof window<"u"&&window.localStorage&&(window.localStorage.removeItem("observatoryDateTimeDisplay"),window.localStorage.removeItem("observatoryTimeZone")),e.createElement(m,null,e.createElement(r,null)))]},n={render:()=>e.createElement(p,null),parameters:{docs:{description:{story:"Basic usage with ObservatoryDateTimeZoneString component. Click the time display to cycle through different modes: relative → observatory → local → UTC."}}}},i={render:()=>e.createElement(v,null),parameters:{docs:{description:{story:"Example with manual controls to change display modes. Shows how the hook can be used to control the display format programmatically."}}}},l={render:()=>e.createElement(u,null),decorators:[r=>(typeof window<"u"&&window.localStorage&&(window.localStorage.removeItem("observatoryDateTimeDisplay"),window.localStorage.removeItem("observatoryTimeZone")),e.createElement(r,null))],parameters:{docs:{description:{story:"Three different observatories each with their own timezone configuration via initialTimeZone prop. Each maintains independent state and timezone settings."}}}},s={render:()=>e.createElement(w,null),parameters:{docs:{description:{story:"Demonstrates how component-level observatoryTimeZone prop takes precedence over context timezone. The left column uses context timezone (changeable via buttons), while the right column always uses Australia/Sydney timezone."}}}},c={render:()=>e.createElement(u,null),decorators:[r=>(typeof window<"u"&&window.localStorage&&(window.localStorage.removeItem("observatoryDateTimeDisplay"),window.localStorage.removeItem("observatoryTimeZone")),e.createElement(r,null))],parameters:{docs:{description:{story:"Real-world example showing multiple famous observatories, each configured with their local timezone. Shows how different observatories around the world can display the same astronomical events in their local time."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <SimpleExample />,
  parameters: {
    docs: {
      description: {
        story: 'Basic usage with ObservatoryDateTimeZoneString component. Click the time display to cycle through different modes: relative → observatory → local → UTC.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledExample />,
  parameters: {
    docs: {
      description: {
        story: 'Example with manual controls to change display modes. Shows how the hook can be used to control the display format programmatically.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <MultipleObservatoriesExample />,
  decorators: [(Story: any) => {
    // Don't wrap with provider - the component has its own
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem('observatoryDateTimeDisplay');
      window.localStorage.removeItem('observatoryTimeZone');
    }
    return <Story />;
  }],
  parameters: {
    docs: {
      description: {
        story: 'Three different observatories each with their own timezone configuration via initialTimeZone prop. Each maintains independent state and timezone settings.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <TimeZonePrecedenceExample />,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates how component-level observatoryTimeZone prop takes precedence over context timezone. The left column uses context timezone (changeable via buttons), while the right column always uses Australia/Sydney timezone.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <MultipleObservatoriesExample />,
  decorators: [(Story: any) => {
    // Don't wrap with provider - the component has its own
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem('observatoryDateTimeDisplay');
      window.localStorage.removeItem('observatoryTimeZone');
    }
    return <Story />;
  }],
  parameters: {
    docs: {
      description: {
        story: 'Real-world example showing multiple famous observatories, each configured with their local timezone. Shows how different observatories around the world can display the same astronomical events in their local time.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};const b=["SimpleUsage","WithControls","IndependentProviders","TimeZonePrecedence","MultipleObservatories"];export{l as IndependentProviders,c as MultipleObservatories,n as SimpleUsage,s as TimeZonePrecedence,i as WithControls,b as __namedExportsOrder,E as default};
