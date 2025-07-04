import{r as y,R as D}from"./iframe-Cb0cCiOm.js";const H=["local","observatory","relative","utc"],R=y.createContext(void 0),V=({children:e})=>{const t=()=>{const u=localStorage.getItem("observatoryDateTimeDisplay");return u&&H.includes(u)?u:"relative"},a=()=>{const u=localStorage.getItem("observatoryTimeZone");return u||"UTC"},[r,o]=y.useState(t()),[s,n]=y.useState(a()),l=u=>{const d=typeof u=="function"?u(r):u;return localStorage.setItem("observatoryDateTimeDisplay",d),o(d)},i=u=>{const d=typeof u=="function"?u(s):u;return localStorage.setItem("observatoryTimeZone",d),n(d)};return D.createElement(R.Provider,{value:{observatoryDateTimeDisplay:r,setObservatoryDateTimeDisplay:l,observatoryTimeZone:s,setObservatoryTimeZone:i}},e)},J=()=>{const e=y.useContext(R);if(e===void 0)throw new Error("useObservatoryDateTimeDisplayContext must be used within a ObservatoryDateTimeDisplayProvider");return e};V.__docgenInfo={description:"",methods:[],displayName:"ObservatoryDateTimeDisplayProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};let A=null;function $(){return A==null&&(A=new Intl.DateTimeFormat().resolvedOptions().timeZone),A}function Z(e){"@babel/helpers - typeof";return Z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Z(e)}function f(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function c(e){f(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||Z(e)==="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}var Q={};function B(){return Q}function _(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function N(e,t){f(2,arguments);var a=c(e),r=c(t),o=a.getTime()-r.getTime();return o<0?-1:o>0?1:o}function G(e,t){f(2,arguments);var a=c(e),r=c(t),o=a.getFullYear()-r.getFullYear(),s=a.getMonth()-r.getMonth();return o*12+s}function K(e,t){return f(2,arguments),c(e).getTime()-c(t).getTime()}var ee={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)}},te="trunc";function ae(e){return ee[te]}function re(e){f(1,arguments);var t=c(e);return t.setHours(23,59,59,999),t}function ne(e){f(1,arguments);var t=c(e),a=t.getMonth();return t.setFullYear(t.getFullYear(),a+1,0),t.setHours(23,59,59,999),t}function oe(e){f(1,arguments);var t=c(e);return re(t).getTime()===ne(t).getTime()}function ie(e,t){f(2,arguments);var a=c(e),r=c(t),o=N(a,r),s=Math.abs(G(a,r)),n;if(s<1)n=0;else{a.getMonth()===1&&a.getDate()>27&&a.setDate(30),a.setMonth(a.getMonth()-o*s);var l=N(a,r)===-o;oe(c(e))&&s===1&&N(e,r)===1&&(l=!1),n=o*(s-Number(l))}return n===0?0:n}function se(e,t,a){f(2,arguments);var r=K(e,t)/1e3;return ae()(r)}var ue={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},le=function(t,a,r){var o,s=ue[t];return typeof s=="string"?o=s:a===1?o=s.one:o=s.other.replace("{{count}}",a.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+o:o+" ago":o};function I(e){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth,r=e.formats[a]||e.formats[e.defaultWidth];return r}}var ce={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},me={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},de={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},fe={date:I({formats:ce,defaultWidth:"full"}),time:I({formats:me,defaultWidth:"full"}),dateTime:I({formats:de,defaultWidth:"full"})},he={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},ge=function(t,a,r,o){return he[t]};function v(e){return function(t,a){var r=a!=null&&a.context?String(a.context):"standalone",o;if(r==="formatting"&&e.formattingValues){var s=e.defaultFormattingWidth||e.defaultWidth,n=a!=null&&a.width?String(a.width):s;o=e.formattingValues[n]||e.formattingValues[s]}else{var l=e.defaultWidth,i=a!=null&&a.width?String(a.width):e.defaultWidth;o=e.values[i]||e.values[l]}var u=e.argumentCallback?e.argumentCallback(t):t;return o[u]}}var ve={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},pe={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},ye={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},De={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},we={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},be={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Te=function(t,a){var r=Number(t),o=r%100;if(o>20||o<10)switch(o%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},Se={ordinalNumber:Te,era:v({values:ve,defaultWidth:"wide"}),quarter:v({values:pe,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:v({values:ye,defaultWidth:"wide"}),day:v({values:De,defaultWidth:"wide"}),dayPeriod:v({values:we,defaultWidth:"wide",formattingValues:be,defaultFormattingWidth:"wide"})};function p(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],s=t.match(o);if(!s)return null;var n=s[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],i=Array.isArray(l)?Pe(l,function(h){return h.test(n)}):Me(l,function(h){return h.test(n)}),u;u=e.valueCallback?e.valueCallback(i):i,u=a.valueCallback?a.valueCallback(u):u;var d=t.slice(n.length);return{value:u,rest:d}}}function Me(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function Pe(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}function Ce(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.match(e.matchPattern);if(!r)return null;var o=r[0],s=t.match(e.parsePattern);if(!s)return null;var n=e.valueCallback?e.valueCallback(s[0]):s[0];n=a.valueCallback?a.valueCallback(n):n;var l=t.slice(o.length);return{value:n,rest:l}}}var We=/^(\d+)(th|st|nd|rd)?/i,Oe=/\d+/i,ke={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Ne={any:[/^b/i,/^(a|c)/i]},xe={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ae={any:[/1/i,/2/i,/3/i,/4/i]},Ie={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Fe={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ze={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Ee={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},_e={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Ye={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Re={ordinalNumber:Ce({matchPattern:We,parsePattern:Oe,valueCallback:function(t){return parseInt(t,10)}}),era:p({matchPatterns:ke,defaultMatchWidth:"wide",parsePatterns:Ne,defaultParseWidth:"any"}),quarter:p({matchPatterns:xe,defaultMatchWidth:"wide",parsePatterns:Ae,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:p({matchPatterns:Ie,defaultMatchWidth:"wide",parsePatterns:Fe,defaultParseWidth:"any"}),day:p({matchPatterns:Ze,defaultMatchWidth:"wide",parsePatterns:Ee,defaultParseWidth:"any"}),dayPeriod:p({matchPatterns:_e,defaultMatchWidth:"any",parsePatterns:Ye,defaultParseWidth:"any"})},Ve={code:"en-US",formatDistance:le,formatLong:fe,formatRelative:ge,localize:Se,match:Re,options:{weekStartsOn:0,firstWeekContainsDate:1}};function X(e,t){if(e==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}function Xe(e){return X({},e)}var Y=1440,Le=2520,F=43200,je=86400;function Ue(e,t,a){var r,o;f(2,arguments);var s=B(),n=(r=(o=a?.locale)!==null&&o!==void 0?o:s.locale)!==null&&r!==void 0?r:Ve;if(!n.formatDistance)throw new RangeError("locale must contain formatDistance property");var l=N(e,t);if(isNaN(l))throw new RangeError("Invalid time value");var i=X(Xe(a),{addSuffix:!!a?.addSuffix,comparison:l}),u,d;l>0?(u=c(t),d=c(e)):(u=c(e),d=c(t));var h=se(d,u),j=(_(d)-_(u))/1e3,m=Math.round((h-j)/60),g;if(m<2)return a!=null&&a.includeSeconds?h<5?n.formatDistance("lessThanXSeconds",5,i):h<10?n.formatDistance("lessThanXSeconds",10,i):h<20?n.formatDistance("lessThanXSeconds",20,i):h<40?n.formatDistance("halfAMinute",0,i):h<60?n.formatDistance("lessThanXMinutes",1,i):n.formatDistance("xMinutes",1,i):m===0?n.formatDistance("lessThanXMinutes",1,i):n.formatDistance("xMinutes",m,i);if(m<45)return n.formatDistance("xMinutes",m,i);if(m<90)return n.formatDistance("aboutXHours",1,i);if(m<Y){var U=Math.round(m/60);return n.formatDistance("aboutXHours",U,i)}else{if(m<Le)return n.formatDistance("xDays",1,i);if(m<F){var z=Math.round(m/Y);return n.formatDistance("xDays",z,i)}else if(m<je)return g=Math.round(m/F),n.formatDistance("aboutXMonths",g,i)}if(g=ie(d,u),g<12){var q=Math.round(m/F);return n.formatDistance("xMonths",q,i)}else{var E=g%12,x=Math.floor(g/12);return E<3?n.formatDistance("aboutXYears",x,i):E<9?n.formatDistance("overXYears",x,i):n.formatDistance("almostXYears",x+1,i)}}function ze(e,t){return f(1,arguments),Ue(e,Date.now(),t)}class qe{constructor(t,a){typeof t=="string"?this.utcDate=new Date(t):typeof t=="number"?this.utcDate=new Date(t):this.utcDate=t,this.homeTimeZone=a}getLocalDateTime(){return new Date(this.utcDate).toLocaleString("en-US",{timeZone:$(),dateStyle:"short",timeStyle:"long"})}getHomeDateTime(){return new Date(this.utcDate).toLocaleString("en-US",{timeZone:this.homeTimeZone,dateStyle:"short",timeStyle:"long"})}getUTCDateTime(){return new Date(this.utcDate).toLocaleString("en-US",{timeZone:"UTC",dateStyle:"short",timeStyle:"long"})}getRelativeTime(){const t=new Date(this.utcDate);return ze(t,{addSuffix:!0})}}const L=e=>{const{observatoryDateTimeDisplay:t,setObservatoryDateTimeDisplay:a}=J(),[r,o]=D.useState(Date.now());y.useEffect(()=>{const i=setInterval(()=>o(Date.now()),3e4);return()=>{clearInterval(i)}},[]);const s=()=>{a(i=>i==="relative"?"observatory":i==="observatory"?"local":i==="local"?"utc":"relative")},n=new qe(e.utcDate,"America/Chicago"),l=()=>t==="local"?n.getLocalDateTime():t==="observatory"?n.getHomeDateTime():t==="relative"?n.getRelativeTime():n.getUTCDateTime();return D.createElement("span",{onClick:s},`${l()}`)};L.__docgenInfo={description:"",methods:[],displayName:"ObservatoryDateTimeZoneString",props:{utcDate:{required:!0,tsType:{name:"union",raw:"Date | string | number",elements:[{name:"Date"},{name:"string"},{name:"number"}]},description:""}}};typeof window<"u"&&!window.localStorage&&(window.localStorage={getItem:()=>null,setItem:()=>{},removeItem:()=>{},clear:()=>{},length:0,key:()=>null});const Je={title:"Components/ObservatoryDateTimeZoneString",component:L,parameters:{layout:"centered",docs:{description:{component:'An interactive date/time display component that shows times in different formats: relative (e.g., "2 days ago"), observatory time (Chicago timezone), local time, and UTC. Click the displayed time to cycle through the different display modes. Perfect for astronomy applications where multiple time references are important.'}}},tags:["autodocs"],argTypes:{utcDate:{control:{type:"date"},description:"The UTC date/time to display (can be Date, string, or number)"}},decorators:[e=>(typeof window<"u"&&window.localStorage&&(window.localStorage.removeItem("observatoryDateTimeDisplay"),window.localStorage.removeItem("observatoryTimeZone")),D.createElement(V,null,D.createElement(e,null)))]},w={args:{utcDate:new Date},parameters:{docs:{description:{story:"Current time - shows the current moment in different time formats. Click to cycle through: relative → observatory (Chicago) → local → UTC"}}}},b={args:{utcDate:new Date(Date.now()-2*60*60*1e3)},parameters:{docs:{description:{story:'A time from 2 hours ago - great for seeing relative time display ("2 hours ago")'}}}},T={args:{utcDate:new Date(Date.now()-24*60*60*1e3)},parameters:{docs:{description:{story:"Yesterday at this time - demonstrates relative date display"}}}},S={args:{utcDate:new Date(Date.now()-7*24*60*60*1e3)},parameters:{docs:{description:{story:"One week ago - shows how longer time periods are displayed relatively"}}}},M={args:{utcDate:new Date("2024-01-01T00:00:00Z")},parameters:{docs:{description:{story:"New Year's Day 2024 at midnight UTC - good for seeing different timezone conversions"}}}},P={args:{utcDate:new Date("2024-06-20T20:50:59Z")},parameters:{docs:{description:{story:"Summer Solstice 2024 - an important astronomical date showing how the component handles significant times for astronomers"}}}},C={args:{utcDate:new Date("2023-12-22T09:27:21Z")},parameters:{docs:{description:{story:"Winter Solstice 2023 - another key astronomical date"}}}},W={args:{utcDate:new Date("2024-04-08T18:17:00Z")},parameters:{docs:{description:{story:"April 8, 2024 Total Solar Eclipse - demonstrates how the component displays significant astronomical events"}}}},O={args:{utcDate:new Date("2030-01-01T00:00:00Z")},parameters:{docs:{description:{story:"A future date (2030) - shows how the component handles future times"}}}},k={args:{utcDate:new Date("1969-07-20T20:17:00Z")},parameters:{docs:{description:{story:"Apollo 11 Moon Landing (July 20, 1969) - a historic astronomical moment showing how the component displays very old dates"}}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};const $e=["CurrentTime","RecentPast","Yesterday","LastWeek","NewYears2024","SummerSolstice2024","WinterSolstice2023","EclipseDate","FarFuture","VintageDate"];export{w as CurrentTime,W as EclipseDate,O as FarFuture,S as LastWeek,M as NewYears2024,b as RecentPast,P as SummerSolstice2024,k as VintageDate,C as WinterSolstice2023,T as Yesterday,$e as __namedExportsOrder,Je as default};
