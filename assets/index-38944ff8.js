import{g as f,a as o,i as r,c as e,t as g}from"./entry-client-1c288a35.js";import{M as c}from"./markdown-1b49c5d4.js";import{s as n}from"./v8-12852d0f.js";import{I as u}from"./items-b3d7c025.js";import"./property-ec84dc75.js";import"./subtitle-4027edf1.js";const $=g("<div><!#><!/><!#><!/>");function S(){const a=`# Transition
A \`transition\` property controls timing for the interpolation between a transitionable style property's previous value and new value. A style's [root \`transition\`](/root/#transition) property provides global transition defaults for that style.
\`\`\`json
"transition": ${JSON.stringify(n.$root.transition.example,null,2)}
\`\`\`
Any transitionable layer property, may also have its own \`*-transition\` property that defines specific transition timing for that layer property, overriding the global \`transition\` values.

\`\`\`json
"fill-opacity-transition": ${JSON.stringify(n.$root.transition.example,null,2)}
\`\`\`

## Transition Options
`;return(()=>{const t=f($),s=t.firstChild,[i,l]=o(s.nextSibling),p=i.nextSibling,[m,y]=o(p.nextSibling);return r(t,e(c,{content:a}),i,l),r(t,e(u,{headingLevel:"3",get entry(){return n.transition}}),m,y),t})()}export{S as default};