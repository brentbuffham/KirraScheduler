(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();var L={planStart:new Date("2026-02-25"),ganttWeeks:8,rigHours:24,availability:.85,utilisation:.75,editingBlastIdx:null,ctxBlastIdx:null,ctxSection:null,importedBlasts:[],chargeConfigs:[],deps:{drillPctForLoad:.5,drillPctForBlast:1,loadPctForBlast:1,minLeadDays:0,enforceSequence:!0},patterns:[{id:"1.1.01",benchHt:12,diam:229,pf:.6,burden:7.65,spacing:8.85,subdrill:1.5,stemming:4,type:"WASTE"},{id:"1.1.02",benchHt:12,diam:229,pf:.7,burden:7.1,spacing:8.2,subdrill:1.5,stemming:4,type:"WASTE"},{id:"1.1.02a",benchHt:12,diam:229,pf:.8,burden:7,spacing:8,subdrill:1.5,stemming:3.4,type:"WASTE"},{id:"1.1.03",benchHt:12,diam:229,pf:.8,burden:6.5,spacing:7.5,subdrill:1.5,stemming:3.8,type:"WASTE"},{id:"1.1.04",benchHt:12,diam:229,pf:.9,burden:6.25,spacing:7.25,subdrill:1.5,stemming:4,type:"WASTE"},{id:"1.1.05",benchHt:12,diam:229,pf:1,burden:5.95,spacing:6.85,subdrill:1.5,stemming:4,type:"WASTE"},{id:"1.1.06",benchHt:12,diam:229,pf:1.1,burden:5.65,spacing:6.55,subdrill:1.5,stemming:4,type:"YELLOW"},{id:"1.1.07",benchHt:12,diam:229,pf:1.2,burden:5.5,spacing:6.2,subdrill:1.5,stemming:3.8,type:"YELLOW"},{id:"1.1.08",benchHt:12,diam:229,pf:1.3,burden:5.2,spacing:6,subdrill:1.5,stemming:4,type:"YELLOW"},{id:"1.1.09",benchHt:12,diam:229,pf:1.4,burden:5,spacing:5.8,subdrill:1.5,stemming:4,type:"YELLOW"},{id:"1.1.10",benchHt:12,diam:229,pf:1.5,burden:4.85,spacing:5.6,subdrill:1.5,stemming:4,type:"ORE"},{id:"1.1.11",benchHt:12,diam:229,pf:1.6,burden:4.7,spacing:5.4,subdrill:1.5,stemming:4,type:"ORE"},{id:"1.1.12",benchHt:12,diam:229,pf:1.7,burden:4.55,spacing:5.25,subdrill:1.5,stemming:4,type:"ORE"},{id:"1.1.12a",benchHt:12,diam:229,pf:1.75,burden:4.7,spacing:5.2,subdrill:1.6,stemming:3.1,type:"ORE"},{id:"1.1.13",benchHt:12,diam:229,pf:1.8,burden:4.5,spacing:5.2,subdrill:1.5,stemming:3.5,type:"ORE"},{id:"1.1.14",benchHt:12,diam:229,pf:1.9,burden:4.3,spacing:5,subdrill:1.5,stemming:4,type:"ORE"},{id:"1.1.14a",benchHt:12,diam:229,pf:1.9,burden:4.5,spacing:5,subdrill:1.5,stemming:3.7,type:"ORE"},{id:"1.1.15",benchHt:12,diam:229,pf:2,burden:4.4,spacing:4.9,subdrill:1.6,stemming:3.6,type:"ORE"},{id:"1.1.43P12",benchHt:12,diam:127,pf:.6,burden:1,spacing:1.6,subdrill:.6,stemming:2.2,type:"PRESPLIT"},{id:"1.1.44P24",benchHt:24,diam:127,pf:.6,burden:1,spacing:1.8,subdrill:.3,stemming:2.2,type:"PRESPLIT"}],blasts:[{name:"S4_214_410P_V2",mode:"Auto",surfaceArea:0,pattern:"",pctD65:1,pctPV:0,rateD65:19,ratePV:20,numD65:1,numPV:0,loadRate:8e4,d65Meters:3496.4,pvMeters:0,volume:6219,expMass:3064.5,drillStart:"2026-02-21",drillStartTime:"06:00",drillDays:1,loadStart:"2026-02-21",loadDays:1,blastDate:"2026-02-22",status:"active",deps:{drillPctForLoad:null,drillPctForBlast:null,loadPctForBlast:null,minLeadDays:null,predecessor:null},assignedDrills:["D65-01"],assignedMPU:"MPU-01",holeTypes:[{type:"PRESPLIT",diam:.127,burden:1,spacing:1.8,holes:138,drillMeters:3496.4,expMass:3168}]},{name:"S4_226_412_V1",mode:"Auto",surfaceArea:0,pattern:"",pctD65:0,pctPV:1,rateD65:17,ratePV:20,numD65:0,numPV:3,loadRate:1e5,d65Meters:1149,pvMeters:5766.4,volume:124236,expMass:236949,drillStart:"2026-02-21",drillStartTime:"06:00",drillDays:3,loadStart:"2026-02-23",loadDays:3,blastDate:"2026-02-26",status:"active",deps:{drillPctForLoad:null,drillPctForBlast:null,loadPctForBlast:null,minLeadDays:null,predecessor:null},assignedDrills:["PV271-01","PV271-02","PV271-03"],assignedMPU:"MPU-01",holeTypes:[{type:"BUFFER",diam:.127,burden:3.8,spacing:2.3,holes:65,drillMeters:882.9,expMass:6416},{type:"PRODUCTION",diam:.165,burden:3.5,spacing:4.7,holes:19,drillMeters:266.1,expMass:5403},{type:"PRODUCTION",diam:.229,burden:4.7,spacing:4.7,holes:420,drillMeters:5768.9,expMass:225812}]},{name:"S4_226_410_V1",mode:"Auto",surfaceArea:0,pattern:"",pctD65:0,pctPV:1,rateD65:19,ratePV:20,numD65:0,numPV:3,loadRate:1e5,d65Meters:2333,pvMeters:7461.8,volume:165245,expMass:326375,drillStart:"2026-02-23",drillStartTime:"10:00",drillDays:7,loadStart:"2026-02-27",loadDays:4,blastDate:"2026-03-02",status:"active",deps:{drillPctForLoad:null,drillPctForBlast:null,loadPctForBlast:null,minLeadDays:null,predecessor:null},assignedDrills:["PV271-01","PV271-02","PV271-03"],assignedMPU:"MPU-02",drillBlocks:[{id:"block-0",label:"A",drillStart:"2026-02-23",drillStartTime:"10:00",drillDays:3,meters:5e3,assignedDrills:["PV271-01","PV271-02"],drillRates:{"PV271-01":55,"PV271-02":55}},{id:"block-1",label:"B",drillStart:"2026-02-27",drillStartTime:"06:00",drillDays:3,meters:4794.8,assignedDrills:["PV271-02","PV271-03"],drillRates:{"PV271-02":55,"PV271-03":55}}],holeTypes:[{type:"BUFFER",diam:.127,burden:3,spacing:1.6,holes:24,drillMeters:324.1,expMass:1461},{type:"BUFFER",diam:.165,burden:3.6,spacing:3,holes:73,drillMeters:896.1,expMass:15934},{type:"PRODUCTION",diam:.165,burden:4.4,spacing:2.5,holes:89,drillMeters:1112.8,expMass:21559},{type:"PRODUCTION",diam:.229,burden:4.9,spacing:4.4,holes:563,drillMeters:7461.8,expMass:287420}]},{name:"S4_214_411P",mode:"Manual",surfaceArea:100,pattern:"1.1.44P24",pctD65:1,pctPV:0,rateD65:19,ratePV:20,numD65:2,numPV:0,loadRate:1e5,d65Meters:1350,pvMeters:0,volume:2400,expMass:1440,drillStart:"2026-03-01",drillStartTime:"06:00",drillDays:2,loadStart:"2026-03-05",loadDays:1,blastDate:"2026-03-06",status:"planned",deps:{drillPctForLoad:null,drillPctForBlast:null,loadPctForBlast:null,minLeadDays:null,predecessor:null},assignedDrills:["D65-01","D65-02"],assignedMPU:"",holeTypes:[{type:"PRESPLIT",diam:.127,burden:1,spacing:1.8,holes:0,drillMeters:1350,expMass:1440}]},{name:"S4_226_411",mode:"Manual",surfaceArea:10240,pattern:"1.1.15",pctD65:0,pctPV:1,rateD65:20,ratePV:19,numD65:0,numPV:4,loadRate:1e5,d65Meters:0,pvMeters:6459.4,volume:122880,expMass:245760,drillStart:"2026-03-02",drillDays:6,loadStart:"2026-03-07",loadDays:3,blastDate:"2026-03-10",status:"planned",deps:{drillPctForLoad:null,drillPctForBlast:null,loadPctForBlast:null,minLeadDays:null,predecessor:null},assignedDrills:["PV271-01","PV271-02","PV271-03","PV271-04"],assignedMPU:"MPU-01",holeTypes:[{type:"PRODUCTION",diam:.229,burden:4.4,spacing:4.9,holes:0,drillMeters:6459.4,expMass:245760}]},{name:"S4_214_412P",mode:"Manual",surfaceArea:220,pattern:"1.1.44P24",pctD65:1,pctPV:0,rateD65:15,ratePV:21,numD65:2,numPV:4,loadRate:1e5,d65Meters:2970,pvMeters:0,volume:5280,expMass:3168,drillStart:"2026-03-04",drillDays:3,loadStart:null,loadDays:0,blastDate:null,status:"planned",deps:{drillPctForLoad:null,drillPctForBlast:null,loadPctForBlast:null,minLeadDays:null,predecessor:null},assignedDrills:["D65-01","D65-02"],assignedMPU:"",holeTypes:[{type:"PRESPLIT",diam:.127,burden:1,spacing:1.8,holes:0,drillMeters:2970,expMass:3168}]},{name:"S4_226_413",mode:"Manual",surfaceArea:5e3,pattern:"1.1.15",pctD65:0,pctPV:1,rateD65:17,ratePV:20,numD65:0,numPV:4,loadRate:1e5,d65Meters:0,pvMeters:3154,volume:6e4,expMass:12e4,drillStart:"2026-03-07",drillDays:3,loadStart:null,loadDays:0,blastDate:null,status:"planned",deps:{drillPctForLoad:null,drillPctForBlast:null,loadPctForBlast:null,minLeadDays:null,predecessor:null},assignedDrills:["PV271-01","PV271-02","PV271-03","PV271-04"],assignedMPU:"MPU-01",holeTypes:[{type:"PRODUCTION",diam:.229,burden:4.4,spacing:4.9,holes:0,drillMeters:3154,expMass:12e4}]},{name:"S4_226_407",mode:"Manual",surfaceArea:11886,pattern:"1.1.15",pctD65:0,pctPV:1,rateD65:45,ratePV:20,numD65:0,numPV:4,loadRate:1e5,d65Meters:0,pvMeters:7497.7,volume:142632,expMass:285264,drillStart:"2026-03-09",drillDays:6,loadStart:null,loadDays:0,blastDate:null,status:"planned",deps:{drillPctForLoad:null,drillPctForBlast:null,loadPctForBlast:null,minLeadDays:null,predecessor:null},assignedDrills:["PV271-01","PV271-02","PV271-03","PV271-04"],assignedMPU:"MPU-02",holeTypes:[{type:"PRODUCTION",diam:.229,burden:4.4,spacing:4.9,holes:0,drillMeters:7497.7,expMass:285264}]}],kirraProjectSurfaces:[],kirraProjectSolids:[],conformance:{targetBCM:6e5,actualBCM:426594,targetMTD:7e5,monthStart:"2026-02-01"}},Ze=[{id:"D65-01",name:"D65 #1",type:"D65",minDiam:127,maxDiam:229,rateM_per_day:19,status:"available",crewRequired:{OP:1},maintenance:[{start:"2026-03-10",end:"2026-03-12",reason:"5000hr Service"}]},{id:"D65-02",name:"D65 #2",type:"D65",minDiam:127,maxDiam:229,rateM_per_day:19,status:"available",crewRequired:{OP:1},maintenance:[]},{id:"PV271-01",name:"PV271 #1",type:"PV271",minDiam:200,maxDiam:311,rateM_per_day:20,status:"available",crewRequired:{OP:1},maintenance:[{start:"2026-03-15",end:"2026-03-17",reason:"Track replacement"}]},{id:"PV271-02",name:"PV271 #2",type:"PV271",minDiam:200,maxDiam:311,rateM_per_day:20,status:"available",crewRequired:{OP:1},maintenance:[]},{id:"PV271-03",name:"PV271 #3",type:"PV271",minDiam:200,maxDiam:311,rateM_per_day:20,status:"available",crewRequired:{OP:1},maintenance:[{start:"2026-03-20",end:"2026-03-22",reason:"Engine overhaul"}]},{id:"PV271-04",name:"PV271 #4",type:"PV271",minDiam:200,maxDiam:311,rateM_per_day:20,status:"available",crewRequired:{OP:1},maintenance:[]}],Ut=[{id:"MPU-01",name:"MPU #1",type:"Emulsion",capacity_kg:2e4,rateKg_per_day:1e5,status:"available",crewRequired:{OP:1,SF:1},maintenance:[]},{id:"MPU-02",name:"MPU #2",type:"Emulsion",capacity_kg:2e4,rateKg_per_day:8e4,status:"available",crewRequired:{OP:1,SF:1},maintenance:[{start:"2026-03-08",end:"2026-03-09",reason:"Pump service"}]}],ri=[{id:"P001",name:"John Smith",role:"Drill Operator",certifiedTypes:["D65","PV271"]},{id:"P002",name:"Sarah Johnson",role:"Drill Operator",certifiedTypes:["PV271"]},{id:"P003",name:"Mike Williams",role:"Drill Operator",certifiedTypes:["D65"]},{id:"P004",name:"Emma Davis",role:"Shot Firer",certifiedTypes:[]},{id:"P005",name:"James Wilson",role:"Blast Engineer",certifiedTypes:[]},{id:"P006",name:"Lisa Brown",role:"Loading Operator",certifiedTypes:[]},{id:"P007",name:"David Taylor",role:"Drill Offsider",certifiedTypes:["D65"]},{id:"P008",name:"Amy Anderson",role:"Loading Operator",certifiedTypes:[]}];function eu(n,e){return e>=n.minDiam&&e<=n.maxDiam}function tu(n,e){var t=n.find(function(i){return i.id===e});return t&&(t.status="mobilised"),t}function nu(n,e){var t=n.find(function(i){return i.id===e});return t&&(t.status="demobilised"),t}function iu(n,e){for(var t=-1,i=0;i<n.length;i++)if(n[i].id===e){t=i;break}return t!==-1?n.splice(t,1)[0]:null}function ru(n,e){for(var t=0;t<n.maintenance.length;t++){var i=n.maintenance[t];if(e>=i.start&&e<=i.end)return!0}return!1}function qe(n,e){return e===void 0&&(e=0),n==null||isNaN(n)?"—":Number(n).toLocaleString("en-AU",{minimumFractionDigits:e,maximumFractionDigits:e})}function Lt(n){if(!n)return"—";var e=new Date(n);return e.toLocaleDateString("en-AU",{day:"2-digit",month:"short"})}function Ye(n,e){var t=new Date(n);return t.setDate(t.getDate()+e),t}function Be(n){return n.toISOString().split("T")[0]}function ws(n){var e=new Date(n),t=new Date(e.getFullYear(),0,1);return Math.ceil(((e-t)/864e5+t.getDay()+1)/7)}function il(n){var e=new Date(n).getDay();return e===0||e===6}function au(n){var e=new Date,t=new Date(n);return t.toDateString()===e.toDateString()}function To(){var n=L.rigHours||24,e=L.availability||.85,t=L.utilisation||.75;return n*e*t}function Yt(n){return n.drillBlocks&&n.drillBlocks.length>0}function xr(n){var e=To(),t=0;return(n.assignedDrills||[]).forEach(function(i){var r=0;if(n.drillRates&&n.drillRates[i]!==void 0)r=n.drillRates[i];else{var a=Ze.find(function(s){return s.id===i});a&&(r=a.rateM_per_day)}t+=r*e}),t<=0?1:Math.ceil((n.meters||0)/t)}function su(n){Yt(n)&&n.drillBlocks.forEach(function(e){e.drillDays=xr(e)})}function en(n){if(Yt(n)){su(n);var e=null,t=null,i=[];if(n.drillBlocks.forEach(function(a){var s=new Date(a.drillStart),o=Ye(s,(a.drillDays||1)-1);(!e||s<e)&&(e=s),(!t||o>t)&&(t=o),(a.assignedDrills||[]).forEach(function(l){i.indexOf(l)===-1&&i.push(l)})}),e&&(n.drillStart=Be(e)),e&&t){var r=Math.round((t-e)/864e5)+1;n.drillDays=r}n.assignedDrills=i}}function ou(n){var e=(n.d65Meters||0)+(n.pvMeters||0),t=Math.round(e/2*10)/10,i=Math.round((e-t)*10)/10,r=n.drillStart||Be(new Date),a=n.assignedDrills||[],s=n.drillDays||7,o=Math.max(1,Math.ceil(s*(t/e))),l=Math.max(1,s-o),c={id:"block-0",label:"A",drillStart:r,drillStartTime:n.drillStartTime||"06:00",drillDays:o,meters:t,assignedDrills:a.slice(),drillRates:{}};a.forEach(function(u){var h=Ze.find(function(p){return p.id===u});h&&(c.drillRates[u]=h.rateM_per_day)});var d=Ye(new Date(r),o),f={id:"block-1",label:"B",drillStart:Be(d),drillStartTime:"06:00",drillDays:l,meters:i,assignedDrills:a.slice(),drillRates:{}};a.forEach(function(u){var h=Ze.find(function(p){return p.id===u});h&&(f.drillRates[u]=h.rateM_per_day)}),n.drillBlocks=[c,f],en(n)}function lu(n){if(Yt(n)){en(n);var e=To(),t=(n.d65Meters||0)+(n.pvMeters||0),i=0;n.assignedDrills.forEach(function(r){var a=Ze.find(function(s){return s.id===r});a&&(i+=a.rateM_per_day*e)}),n.drillDays=i>0?Math.ceil(t/i):1,delete n.drillBlocks}}function rl(n){if(!Yt(n))return null;var e=null;return n.drillBlocks.forEach(function(t){var i=Ye(new Date(t.drillStart),(t.drillDays||1)-1);(!e||i>e)&&(e=i)}),e}function cu(n,e,t,i){var r=To();if(Yt(n)&&i!==null&&n.drillBlocks[i]){var a=n.drillBlocks[i],s=new Date(a.drillStart),o=new Date(t),l=Math.round((o-s)/864e5);if(l<=0){var c=(a.assignedDrills||[]).indexOf(e);c!==-1&&a.assignedDrills.splice(c,1),a.drillRates&&delete a.drillRates[e],a.drillDays=xr(a),en(n);return}var d=0;(a.assignedDrills||[]).forEach(function(A){var C=0;if(a.drillRates&&a.drillRates[A]!==void 0)C=a.drillRates[A];else{var U=Ze.find(function(Y){return Y.id===A});U&&(C=U.rateM_per_day)}d+=C*r});var f=d*l;f=Math.min(f,a.meters||0);var u=Math.max(0,(a.meters||0)-f);a.label,a.drillDays=l,a.meters=Math.round(f*10)/10;var h=(a.assignedDrills||[]).filter(function(A){return A!==e}),p={};h.forEach(function(A){if(a.drillRates&&a.drillRates[A]!==void 0)p[A]=a.drillRates[A];else{var C=Ze.find(function(U){return U.id===A});C&&(p[A]=C.rateM_per_day)}});var _="ABCDEFGHIJKLMNOPQRSTUVWXYZ",g=n.drillBlocks.length,m=g<_.length?_[g]:"B"+g,S={id:"block-"+g,label:m,drillStart:Be(o),drillStartTime:a.drillStartTime||"06:00",drillDays:1,meters:Math.round(u*10)/10,assignedDrills:h,drillRates:p};S.drillDays=xr(S),n.drillBlocks.splice(i+1,0,S),en(n);return}var E=new Date(n.drillStart),y=new Date(t),R=Math.round((y-E)/864e5),w=n.assignedDrills||[],D=(n.d65Meters||0)+(n.pvMeters||0);if(R<=0){var x=w.indexOf(e);x!==-1&&w.splice(x,1);return}var b=0;w.forEach(function(A){var C=Ze.find(function(U){return U.id===A});C&&(b+=C.rateM_per_day*r)});var W=b*R;W=Math.min(W,D);var P=Math.max(0,D-W),k={id:"block-0",label:"A",drillStart:n.drillStart,drillStartTime:n.drillStartTime||"06:00",drillDays:R,meters:Math.round(W*10)/10,assignedDrills:w.slice(),drillRates:{}};w.forEach(function(A){var C=Ze.find(function(U){return U.id===A});C&&(k.drillRates[A]=C.rateM_per_day)});var z=w.filter(function(A){return A!==e}),G={id:"block-1",label:"B",drillStart:Be(y),drillStartTime:"06:00",drillDays:1,meters:Math.round(P*10)/10,assignedDrills:z,drillRates:{}};z.forEach(function(A){var C=Ze.find(function(U){return U.id===A});C&&(G.drillRates[A]=C.rateM_per_day)}),G.drillDays=xr(G),n.drillBlocks=[k,G],en(n)}function wa(n){var e=L.deps,t=n.deps||{};return{drillPctForLoad:t.drillPctForLoad!==null&&t.drillPctForLoad!==void 0&&t.drillPctForLoad!==""?parseFloat(t.drillPctForLoad):e.drillPctForLoad,drillPctForBlast:t.drillPctForBlast!==null&&t.drillPctForBlast!==void 0&&t.drillPctForBlast!==""?parseFloat(t.drillPctForBlast):e.drillPctForBlast,loadPctForBlast:1,minLeadDays:t.minLeadDays!==null&&t.minLeadDays!==void 0&&t.minLeadDays!==""?parseInt(t.minLeadDays):e.minLeadDays,predecessor:t.predecessor||null,predType:t.predType||"blast-before-drill"}}function Et(){L.deps.drillPctForLoad=parseFloat(document.getElementById("depDrillForLoad").value)||0,L.deps.drillPctForBlast=parseFloat(document.getElementById("depDrillForBlast").value)||1,L.deps.loadPctForBlast=1,L.deps.minLeadDays=parseInt(document.getElementById("depMinLead").value)||0,L.deps.enforceSequence=document.getElementById("depEnforceSeq").checked,L.blasts.forEach(function(n,e){if(Yt(n)&&en(n),!(!n.drillStart||!n.drillDays)){n._depWarning="";var t=wa(n),i=new Date(n.drillStart),r=n.drillDays||1,a=Math.ceil(r*t.drillPctForLoad),s=Ye(i,a);if(Yt(n)){var o=rl(n);o&&t.drillPctForLoad>=1&&(s=Ye(o,1))}if(t.predecessor){var l=L.blasts.find(function(D){return D.name===t.predecessor});if(l){if(t.predType==="blast-before-drill"&&l.blastDate){var c=new Date(l.blastDate);i<c&&(n._depWarning="Drill starts before predecessor "+l.name+" fires ("+Lt(l.blastDate)+")")}else if(t.predType==="blast-before-load"&&l.blastDate){var d=new Date(l.blastDate);s<d&&(s=Ye(d,1))}else if(t.predType==="drill-before-drill"){var f=l.drillStart?Ye(new Date(l.drillStart),l.drillDays||1):null;f&&i<f&&(n._depWarning="Drill overlaps with predecessor "+l.name+" drill (ends "+Lt(f)+")")}}}if(n._maintWarnings=[],Yt(n))n.drillBlocks.forEach(function(D){if(!(!D.drillStart||!D.assignedDrills)){var x=Be(Ye(new Date(D.drillStart),(D.drillDays||1)-1));D.assignedDrills.forEach(function(b){var W=Ze.find(function(P){return P.id===b});W&&(W.maintenance||[]).forEach(function(P){P.end>=D.drillStart&&P.start<=x&&n._maintWarnings.push(W.id+" [Block "+D.label+"] maint "+Lt(P.start)+"-"+Lt(P.end)+" ("+P.reason+")")})})}});else if(n.assignedDrills&&n.assignedDrills.length>0){var u=Be(Ye(i,r-1));n.assignedDrills.forEach(function(D){var x=Ze.find(function(b){return b.id===D});x&&(x.maintenance||[]).forEach(function(b){b.end>=n.drillStart&&b.start<=u&&n._maintWarnings.push(x.id+" in maintenance "+Lt(b.start)+"-"+Lt(b.end)+" ("+b.reason+")")})})}var h=Be(s);n.loadStartManual&&n.loadStart?n.loadStart<h&&(n._depWarning=(n._depWarning?n._depWarning+"; ":"")+"Loading starts before "+Math.round(t.drillPctForLoad*100)+"% drill complete (earliest: "+Lt(h)+")"):n.loadStart=h;var p=n.loadRate>0?Math.ceil((n.expMass||0)/n.loadRate):1;n.loadDays=Math.max(p,1);var _=Math.ceil(r*t.drillPctForBlast),g=Ye(i,_);if(Yt(n)&&t.drillPctForBlast>=1){var m=rl(n);m&&(g=Ye(m,1))}var S=new Date(n.loadStart),E=Math.ceil(n.loadDays*t.loadPctForBlast),y=Ye(S,E),R=new Date(Math.max(g.getTime(),y.getTime()));R=Ye(R,t.minLeadDays);var w=Be(R);n.blastDateManual&&n.blastDate?n.blastDate<w&&(n._depWarning=(n._depWarning?n._depWarning+"; ":"")+"Blast date before dependencies met (earliest: "+Lt(w)+")"):n.blastDate=w,n._computed={drillPctForLoad:t.drillPctForLoad,drillPctForBlast:t.drillPctForBlast,loadPctForBlast:t.loadPctForBlast,drillDayForLoadStart:a,loadStartDate:n.loadStart,drillOverlapEnd:Be(Ye(i,r-1)),loadOverlapStart:n.loadStart,hasOverlap:t.drillPctForLoad<1,drillEndDate:Be(Ye(i,r-1)),loadEndDate:Be(Ye(S,n.loadDays-1)),autoLoadStart:h,autoBlastDate:w}}})}var Hi=[{code:"OP",label:"Operator",color:"#22d3ee",textColor:"#000"},{code:"FT",label:"Field Technician",color:"#a78bfa",textColor:"#fff"},{code:"SF",label:"Shot Firer",color:"#fb923c",textColor:"#000"}];function al(n,e){for(var t={OP:0,FT:0,SF:0},i=n.assignedDrills||[],r=0;r<i.length;r++){for(var a=null,s=0;s<e.length;s++)if(e[s].id===i[r]){a=e[s];break}if(a&&a.crewRequired){var o=a.crewRequired;t.OP+=o.OP||0,t.FT+=o.FT||0,t.SF+=o.SF||0}}return t}function du(n,e){var t={OP:0,FT:0,SF:0};if(!n.assignedMPU)return t;for(var i=null,r=0;r<e.length;r++)if(e[r].id===n.assignedMPU){i=e[r];break}if(i&&i.crewRequired){var a=i.crewRequired;t.OP+=a.OP||0,t.FT+=a.FT||0,t.SF+=a.SF||0}return t}function yr(n){return n.crewAllocated||(n.crewAllocated={drilling:{OP:0,FT:0,SF:0},loading:{OP:0,FT:0,SF:0}}),n.crewAllocated.drilling||(n.crewAllocated.drilling={OP:0,FT:0,SF:0}),n.crewAllocated.loading||(n.crewAllocated.loading={OP:0,FT:0,SF:0}),n.crewAllocated}function ka(n,e){for(var t="",i=0;i<Hi.length;i++){var r=Hi[i].code,a=e[r]||0;if(a!==0){var s=n[r]||0,o="crew-badge";s>=a?o+=" crew-ok":s>0?o+=" crew-warn":o+=" crew-empty",t+='<span class="'+o+'">'+r+":"+s+"/"+a+"</span>"}}return t}function uu(n,e){var t=e.dataset.ttBlast,i=e.dataset.ttSection,r=e.dataset.ttDate,a=L.blasts.find(function(d){return d.name===t});if(a){var s=wa(a),o=a._computed||{},l=document.getElementById("tooltip"),c='<div class="tt-title">'+t+"</div>";c+='<div class="tt-row"><span>Phase</span><span class="tt-val">'+i+"</span></div>",c+='<div class="tt-row"><span>Date</span><span class="tt-val">'+Lt(r)+"</span></div>",i==="DRILLING"?(c+='<div class="tt-row"><span>Drill Meters</span><span class="tt-val">'+qe((a.d65Meters||0)+(a.pvMeters||0))+" m</span></div>",c+='<div class="tt-row"><span>Duration</span><span class="tt-val">'+a.drillDays+" days</span></div>",c+='<div style="border-top:1px solid var(--border);margin:4px 0;padding-top:4px;">',c+='<div class="tt-row"><span style="color:var(--accent-purple)">Load starts at</span><span class="tt-val">'+Math.round(s.drillPctForLoad*100)+"% drilled</span></div>",o.hasOverlap&&(c+='<div class="tt-row"><span style="color:var(--accent-load)">Loading begins</span><span class="tt-val">'+Lt(o.loadOverlapStart)+"</span></div>",c+='<div class="tt-row"><span style="color:var(--gantt-drill)">Drill finishes</span><span class="tt-val">'+Lt(o.drillEndDate)+"</span></div>"),c+='<div class="tt-row"><span style="color:var(--accent-blast)">Blast at drill</span><span class="tt-val">'+Math.round(s.drillPctForBlast*100)+"%</span></div>",c+="</div>"):i==="LOADING"?(c+='<div class="tt-row"><span>Explosive</span><span class="tt-val">'+qe(a.expMass)+" kg</span></div>",c+='<div class="tt-row"><span>Load Rate</span><span class="tt-val">'+qe(a.loadRate)+" kg/day</span></div>",c+='<div class="tt-row"><span>Duration</span><span class="tt-val">'+a.loadDays+" days</span></div>",c+='<div style="border-top:1px solid var(--border);margin:4px 0;padding-top:4px;">',c+='<div class="tt-row"><span style="color:var(--accent-purple)">Drill was at</span><span class="tt-val">'+Math.round(s.drillPctForLoad*100)+"% when load started</span></div>",c+='<div class="tt-row"><span style="color:var(--accent-blast)">Blast at load</span><span class="tt-val">'+Math.round(s.loadPctForBlast*100)+"%</span></div>",s.minLeadDays>0&&(c+='<div class="tt-row"><span style="color:var(--accent-load)">Lead days</span><span class="tt-val">'+s.minLeadDays+" day(s)</span></div>"),c+="</div>"):(c+='<div class="tt-row"><span>Volume</span><span class="tt-val">'+qe(a.volume)+" bcm</span></div>",c+='<div class="tt-row"><span>PF</span><span class="tt-val">'+(a.volume?qe(a.expMass/a.volume,2):"—")+" kg/bcm</span></div>",c+='<div style="border-top:1px solid var(--border);margin:4px 0;padding-top:4px;">',c+='<div class="tt-row"><span style="color:var(--accent-purple)">Requires</span><span class="tt-val">'+Math.round(s.drillPctForBlast*100)+"% drill + "+Math.round(s.loadPctForBlast*100)+"% load</span></div>",s.minLeadDays>0&&(c+='<div class="tt-row"><span style="color:var(--accent-load)">+'+s.minLeadDays+" lead day(s)</span></div>"),s.predecessor&&(c+='<div class="tt-row"><span style="color:var(--accent-purple)">After</span><span class="tt-val">'+s.predecessor+"</span></div>"),c+="</div>"),a._depWarning&&(c+='<div style="margin-top:4px;padding:4px 6px;background:rgba(239,68,68,0.15);border-radius:4px;color:var(--accent-blast);font-size:12px;">'+a._depWarning+"</div>"),l.innerHTML=c,l.style.display="block",l.style.left=Math.min(n.clientX+12,window.innerWidth-320)+"px",l.style.top=n.clientY-10+"px"}}function hu(){document.getElementById("tooltip").style.display="none"}function tr(n){document.getElementById(n).classList.add("show")}function Un(n){document.getElementById(n).classList.remove("show")}function nr(){var n=L.blasts.reduce(function(a,s){return a+(s.volume||0)},0),e=L.blasts.reduce(function(a,s){return a+(s.expMass||0)},0),t=L.blasts.reduce(function(a,s){return a+s.holeTypes.reduce(function(o,l){return o+(l.holes||0)},0)},0),i="";i+='<div class="stat-card accent-blue">',i+='  <div class="stat-label">Active Blasts</div>',i+='  <div class="stat-value">'+L.blasts.filter(function(a){return a.status==="active"}).length+"</div>",i+="</div>",i+='<div class="stat-card accent-amber">',i+='  <div class="stat-label">Total Volume</div>',i+='  <div class="stat-value">'+qe(n)+'<span class="stat-unit">bcm</span></div>',i+="</div>",i+='<div class="stat-card accent-red">',i+='  <div class="stat-label">Total Explosive</div>',i+='  <div class="stat-value">'+qe(e)+'<span class="stat-unit">kg</span></div>',i+="</div>",i+='<div class="stat-card accent-purple">',i+='  <div class="stat-label">Total Holes</div>',i+='  <div class="stat-value">'+qe(t)+"</div>",i+="</div>",document.getElementById("blastStats").innerHTML=i;var r="<thead><tr>";r+="<th>Blast Name</th><th>Status</th><th>Mode</th><th>Pattern</th>",r+='<th>Hole Types</th><th class="num">Volume (bcm)</th><th class="num">Exp. (kg)</th>',r+='<th class="num">PF (kg/bcm)</th><th class="num">Drill (m)</th>',r+="<th>Drill Start</th><th>Load Start</th><th>Blast Date</th>",r+='<th style="color:var(--accent-purple)">Deps</th>',r+="</tr></thead><tbody>",L.blasts.forEach(function(a,s){var o=a.volume?(a.expMass/a.volume).toFixed(2):"—",l=(a.d65Meters||0)+(a.pvMeters||0),c=a.status==="active"?"badge-active":a.status==="fired"?"badge-blast":"badge-drill",d=a.holeTypes.map(function(p){var _=p.type==="PRESPLIT"?"badge-presplit":p.type==="BUFFER"?"badge-buffer":"badge-production";return'<span class="badge '+_+'">'+p.type+"</span>"}).join(" "),f=wa(a),u=Math.round(f.drillPctForLoad*100)+"%→L";f.drillPctForBlast<1&&(u+=" "+Math.round(f.drillPctForBlast*100)+"%D→B"),f.predecessor&&(u+=" ⛓"+f.predecessor.substring(0,10));var h=a._depWarning?'<span class="dep-warning" title="'+a._depWarning+'">!</span>':"";r+='<tr data-blast-idx="'+s+'" style="cursor:pointer">',r+='<td style="color:var(--text-primary);font-weight:600;">'+a.name+h+"</td>",r+='<td><span class="badge '+c+'">'+a.status+"</span></td>",r+="<td>"+a.mode+"</td>",r+="<td>"+(a.pattern||"—")+"</td>",r+="<td>"+d+"</td>",r+='<td class="num">'+qe(a.volume)+"</td>",r+='<td class="num">'+qe(a.expMass)+"</td>",r+='<td class="num">'+o+"</td>",r+='<td class="num">'+qe(l)+"</td>",r+="<td>"+Lt(a.drillStart)+"</td>",r+="<td>"+Lt(a.loadStart)+"</td>",r+="<td>"+Lt(a.blastDate)+"</td>",r+='<td style="font-size:11px;color:var(--accent-purple)">'+u+"</td>",r+="</tr>"}),r+="</tbody>",document.getElementById("blastTable").innerHTML=r,document.querySelectorAll("#blastTable tr[data-blast-idx]").forEach(function(a){a.addEventListener("dblclick",function(){Ao(parseInt(a.dataset.blastIdx))})})}function Ic(){var n=document.getElementById("fPattern");n.innerHTML='<option value="">-- Select Pattern --</option>',L.patterns.forEach(function(e){var t=document.createElement("option");t.value=e.id,t.textContent=e.id+" — "+e.type+" (PF: "+e.pf+")",n.appendChild(t)})}function Uc(n){var e=document.getElementById("fDepPredecessor");e.innerHTML='<option value="">— None —</option>',L.blasts.forEach(function(t){if(t.name!==n){var i=document.createElement("option");i.value=t.name,i.textContent=t.name,e.appendChild(i)}})}function Fc(n){var e=document.getElementById("fAssignedDrills");e.innerHTML="",Ze.forEach(function(t){var i=document.createElement("option");i.value=t.id,i.textContent=t.id+" ("+t.type+", "+t.minDiam+"-"+t.maxDiam+"mm)",n&&n.indexOf(t.id)!==-1&&(i.selected=!0),e.appendChild(i)})}function Nc(n){var e=document.getElementById("fAssignedMPU");e.innerHTML='<option value="">— None —</option>',Ut.forEach(function(t){var i=document.createElement("option");i.value=t.id,i.textContent=t.id+" ("+t.type+", "+t.rateKg_per_day+" kg/day)",n===t.id&&(i.selected=!0),e.appendChild(i)})}function sl(){var n=document.getElementById("fDrillCompatWarning"),e=document.getElementById("fAssignedDrills"),t=document.getElementById("fPattern").value,i=L.patterns.find(function(c){return c.id===t});if(!i||!e){n.style.display="none";return}for(var r=i.diam,a=e.selectedOptions,s=[],o=0;o<a.length;o++){var l=Ze.find(function(c){return c.id===a[o].value});l&&!eu(l,r)&&s.push(l.id+" cannot drill "+r+"mm (range: "+l.minDiam+"-"+l.maxDiam+"mm)")}s.length>0?(n.textContent="Warning: "+s.join("; "),n.style.display="block"):n.style.display="none"}function fu(){L.editingBlastIdx=null,document.getElementById("blastModalTitle").textContent="Add Blast",document.getElementById("blastModalSave").textContent="Add Blast",document.getElementById("fBlastName").value="",document.getElementById("fBlastMode").value="Manual",document.getElementById("fSurfaceArea").value="",document.getElementById("fDrillStart").value=Be(L.planStart),document.getElementById("fDrillStartTime").value="06:00",document.getElementById("fPctD65").value=0,document.getElementById("fPctPV").value=1,document.getElementById("fLoadRate").value=1e5,document.getElementById("fVolume").value="",document.getElementById("fExpMass").value="",document.getElementById("fRateD65").value=19,document.getElementById("fRatePV").value=20,document.getElementById("fNumD65").value=0,document.getElementById("fNumPV").value=4,document.getElementById("fDepDrillForLoad").value="",document.getElementById("fDepDrillForBlast").value="",document.getElementById("fDepMinLead").value="",Uc(null),document.getElementById("fDepPredecessor").value="",document.getElementById("fDepPredType").value="blast-before-drill",document.getElementById("fDepDrillForLoad").placeholder="Global: "+Math.round(L.deps.drillPctForLoad*100)+"%",document.getElementById("fDepDrillForBlast").placeholder="Global: "+Math.round(L.deps.drillPctForBlast*100)+"%",document.getElementById("fDepMinLead").placeholder="Global: "+L.deps.minLeadDays,Ic(),Fc([]),Nc(""),tr("blastModal")}function Ao(n){L.editingBlastIdx=n;var e=L.blasts[n];document.getElementById("blastModalTitle").textContent="Edit Blast: "+e.name,document.getElementById("blastModalSave").textContent="Save Changes",document.getElementById("fBlastName").value=e.name,document.getElementById("fBlastMode").value=e.mode,document.getElementById("fSurfaceArea").value=e.surfaceArea||"",document.getElementById("fDrillStart").value=e.drillStart||"",document.getElementById("fDrillStartTime").value=e.drillStartTime||"06:00",document.getElementById("fPctD65").value=e.pctD65,document.getElementById("fPctPV").value=e.pctPV,document.getElementById("fLoadRate").value=e.loadRate,document.getElementById("fVolume").value=e.volume||"",document.getElementById("fExpMass").value=e.expMass||"",document.getElementById("fRateD65").value=e.rateD65,document.getElementById("fRatePV").value=e.ratePV,document.getElementById("fNumD65").value=e.numD65,document.getElementById("fNumPV").value=e.numPV;var t=e.deps||{};document.getElementById("fDepDrillForLoad").value=t.drillPctForLoad!==null&&t.drillPctForLoad!==void 0?t.drillPctForLoad:"",document.getElementById("fDepDrillForBlast").value=t.drillPctForBlast!==null&&t.drillPctForBlast!==void 0?t.drillPctForBlast:"",document.getElementById("fDepMinLead").value=t.minLeadDays!==null&&t.minLeadDays!==void 0?t.minLeadDays:"",Uc(e.name),document.getElementById("fDepPredecessor").value=t.predecessor||"",document.getElementById("fDepPredType").value=t.predType||"blast-before-drill",document.getElementById("fDepDrillForLoad").placeholder="Global: "+Math.round(L.deps.drillPctForLoad*100)+"%",document.getElementById("fDepDrillForBlast").placeholder="Global: "+Math.round(L.deps.drillPctForBlast*100)+"%",document.getElementById("fDepMinLead").placeholder="Global: "+L.deps.minLeadDays,Ic(),document.getElementById("fPattern").value=e.pattern||"",Fc(e.assignedDrills||[]),Nc(e.assignedMPU||""),tr("blastModal")}function pu(){var n=document.getElementById("fBlastName").value.trim();if(!n){alert("Blast name required");return}var e=document.getElementById("fPattern").value,t=L.patterns.find(function(ce){return ce.id===e}),i=parseFloat(document.getElementById("fSurfaceArea").value)||0,r=parseFloat(document.getElementById("fVolume").value)||0,a=parseFloat(document.getElementById("fExpMass").value)||0;t&&i>0&&!r&&(r=i*t.benchHt),t&&r>0&&!a&&(a=r*t.pf);var s=0;if(t&&i>0){var o=i/(t.burden*t.spacing),l=t.benchHt+t.subdrill;s=o*l}var c=parseFloat(document.getElementById("fLoadRate").value)||1e5,d=document.getElementById("fDrillStart").value,f=document.getElementById("fDrillStartTime").value||"06:00",u=parseFloat(document.getElementById("fRateD65").value)||19,h=parseFloat(document.getElementById("fRatePV").value)||20,p=parseInt(document.getElementById("fNumD65").value)||0,_=parseInt(document.getElementById("fNumPV").value)||0,g=parseFloat(document.getElementById("fPctD65").value)||0,m=parseFloat(document.getElementById("fPctPV").value)||0,S=s||0,E=S*g,y=S*m,R=p>0?u*p:0,w=_>0?h*_:0,D=R+w,x=D>0?Math.ceil(S/D):1,b=c>0?Math.ceil(a/c):1,W=document.getElementById("fDepDrillForLoad").value,P=document.getElementById("fDepDrillForBlast").value,k=document.getElementById("fDepMinLead").value,z=document.getElementById("fDepPredecessor").value,G=document.getElementById("fDepPredType").value,A={drillPctForLoad:W!==""?parseFloat(W):null,drillPctForBlast:P!==""?parseFloat(P):null,loadPctForBlast:null,minLeadDays:k!==""?parseInt(k):null,predecessor:z||null,predType:G||"blast-before-drill"},C=[];t&&C.push({type:t.type,diam:t.diam/1e3,burden:t.burden,spacing:t.spacing,holes:i>0?Math.round(i/(t.burden*t.spacing)):0,drillMeters:s,expMass:a});for(var U=[],Y=document.getElementById("fAssignedDrills"),J=0;J<Y.selectedOptions.length;J++)U.push(Y.selectedOptions[J].value);var $=document.getElementById("fAssignedMPU").value||"",re={name:n,mode:document.getElementById("fBlastMode").value,surfaceArea:i,pattern:e,pctD65:g,pctPV:m,rateD65:u,ratePV:h,numD65:p,numPV:_,loadRate:c,d65Meters:E,pvMeters:y,volume:r,expMass:a,drillStart:d,drillStartTime:f,drillDays:x,loadStart:null,loadDays:b,blastDate:null,status:"planned",deps:A,assignedDrills:U,assignedMPU:$,holeTypes:C};L.editingBlastIdx!==null?(re.status=L.blasts[L.editingBlastIdx].status,L.blasts[L.editingBlastIdx]=re):L.blasts.push(re),Un("blastModal"),Et(),nt(),nr()}function mu(){document.getElementById("btnAddBlast").addEventListener("click",fu),document.getElementById("blastModalSave").addEventListener("click",pu),document.getElementById("btnCloseBlastModal").addEventListener("click",function(){Un("blastModal")}),document.getElementById("btnCancelBlastModal").addEventListener("click",function(){Un("blastModal")}),document.getElementById("fPattern").addEventListener("change",sl),document.getElementById("fAssignedDrills").addEventListener("change",sl)}var ha=[{code:"UD",label:"Unscheduled Down",color:"#ef4444",category:"down",textColor:"#fff"},{code:"SD",label:"Scheduled Down",color:"#f97316",category:"down",textColor:"#fff"},{code:"SM",label:"Scheduled Maintenance",color:"#a855f7",category:"maintenance",textColor:"#fff"},{code:"UM",label:"Unscheduled Maintenance",color:"#ec4899",category:"maintenance",textColor:"#fff"},{code:"UP",label:"Unscheduled Process",color:"#06b6d4",category:"process",textColor:"#fff"},{code:"SP",label:"Scheduled Process",color:"#14b8a6",category:"process",textColor:"#fff"},{code:"UW",label:"Unscheduled Weather",color:"#64748b",category:"weather",textColor:"#fff"},{code:"SW",label:"Scheduled Weather",color:"#94a3b8",category:"weather",textColor:"#000"},{code:"LP",label:"Low People",color:"#eab308",category:"people",textColor:"#000"}];function Bc(n){for(var e=0;e<ha.length;e++)if(ha[e].code===n)return ha[e];return null}var ol=0;function gu(){return ol++,"delay-"+Date.now()+"-"+ol}function vu(n,e,t,i){var r=Bc(n);return{id:gu(),type:n,label:r?r.label:n,start:e,days:t,section:i||"drilling"}}function _u(n,e,t,i){n.preventDefault(),L.ctxBlastIdx=e,L.ctxSection=t,L.ctxBlockIdx=i??null,L.ctxDelayIdx=null;var r=document.getElementById("contextMenu"),a=L.blasts[e],s=r.querySelectorAll(".ctx-drill-only");s.forEach(function(f){f.style.display=t==="drilling"?"":"none"});var o=r.querySelectorAll(".ctx-block-only"),l=a&&Yt(a);o.forEach(function(f){f.style.display=t==="drilling"&&l?"":"none"});var c=document.getElementById("ctxSplitDrill");c&&(l?c.textContent="✂ Add Block":c.textContent="✂ Split Drill");var d=r.querySelectorAll(".ctx-delay-only");d.forEach(function(f){f.style.display="none"}),r.querySelectorAll(".ctx-general").forEach(function(f){f.style.display=""}),Oc(r,a,t,L.ctxBlockIdx),r.style.display="block",r.style.left=n.clientX+"px",r.style.top=n.clientY+"px"}function ll(n,e,t,i,r,a){n.preventDefault(),L.ctxBlastIdx=e,L.ctxSection=t,L.ctxBlockIdx=i??null,L.ctxDelayIdx=r??null,L.ctxClickDate=a||null;var s=document.getElementById("contextMenu"),o=L.blasts[e];if(r!==null)s.querySelectorAll(".ctx-general").forEach(function(u){u.style.display="none"}),s.querySelectorAll(".ctx-drill-only").forEach(function(u){u.style.display="none"}),s.querySelectorAll(".ctx-block-only").forEach(function(u){u.style.display="none"}),s.querySelectorAll(".ctx-delay-only").forEach(function(u){u.style.display=""});else{var l=s.querySelectorAll(".ctx-drill-only");l.forEach(function(u){u.style.display=t==="drilling"?"":"none"});var c=s.querySelectorAll(".ctx-block-only"),d=o&&Yt(o);c.forEach(function(u){u.style.display=t==="drilling"&&d?"":"none"});var f=document.getElementById("ctxSplitDrill");f&&(f.textContent=d?"✂ Add Block":"✂ Split Drill"),s.querySelectorAll(".ctx-delay-only").forEach(function(u){u.style.display="none"}),s.querySelectorAll(".ctx-general").forEach(function(u){u.style.display=""}),Oc(s,o,t,L.ctxBlockIdx)}s.style.display="block",s.style.left=n.clientX+"px",s.style.top=n.clientY+"px"}function Oc(n,e,t,i){if(n.querySelectorAll(".ctx-dynamic").forEach(function(w){w.remove()}),!!e){var r=n.querySelector(".ctx-divider.ctx-general");if(t==="drilling"){var a,s=i!==null&&e.drillBlocks&&e.drillBlocks[i];if(s?a=e.drillBlocks[i].assignedDrills||[]:a=e.assignedDrills||[],a.length>0){var o=document.createElement("div");o.className="ctx-divider ctx-dynamic",n.insertBefore(o,r);var l=document.createElement("div");if(l.className="ctx-label ctx-dynamic",l.textContent="Assigned Drills",n.insertBefore(l,r),a.forEach(function(w){var D=document.createElement("div");D.className="ctx-item ctx-dynamic",D.style.color="var(--accent-blast)",D.innerHTML="✖ Remove "+w+" entirely",D.addEventListener("click",function(){Mu(e,w,i)}),n.insertBefore(D,r)}),L.ctxClickDate&&a.length>1){var c=xu(e,i),d=L.ctxClickDate===c.start,f=L.ctxClickDate===c.end;if(!d&&!f){var u=document.createElement("div");u.className="ctx-divider ctx-dynamic",n.insertBefore(u,r);var h=document.createElement("div");h.className="ctx-label ctx-dynamic",h.textContent="Remove from "+L.ctxClickDate+" onward",n.insertBefore(h,r),a.forEach(function(w){var D=document.createElement("div");D.className="ctx-item ctx-dynamic",D.style.color="var(--accent-load)",D.innerHTML="✂ Pull "+w+" from "+L.ctxClickDate,D.addEventListener("click",function(){yu(e,w,L.ctxClickDate,i)}),n.insertBefore(D,r)})}}}}if(t==="loading"&&e.assignedMPU){var p=document.createElement("div");p.className="ctx-divider ctx-dynamic",n.insertBefore(p,r);var _=document.createElement("div");_.className="ctx-item ctx-dynamic",_.style.color="var(--accent-blast)",_.innerHTML="✖ Remove "+e.assignedMPU,_.addEventListener("click",function(){e.assignedMPU="",Et(),nt()}),n.insertBefore(_,r)}var g=yr(e),m=g[t];if(m){for(var S=!1,E=0;E<Hi.length;E++)if((m[Hi[E].code]||0)>0){S=!0;break}if(S){var y=document.createElement("div");y.className="ctx-divider ctx-dynamic",n.insertBefore(y,r);var R=document.createElement("div");R.className="ctx-label ctx-dynamic",R.textContent="Crew ("+t+")",n.insertBefore(R,r),Hi.forEach(function(w){var D=m[w.code]||0;if(!(D<=0)){var x=document.createElement("div");x.className="ctx-item ctx-dynamic",x.style.color=w.color,x.innerHTML="✖ Remove 1 "+w.code+" (have "+D+")",x.addEventListener("click",function(){m[w.code]=Math.max(0,(m[w.code]||0)-1),nt()}),n.insertBefore(x,r)}})}}}}function xu(n,e){var t=e!==null&&n.drillBlocks&&n.drillBlocks[e];if(t){var i=n.drillBlocks[e],r=i.drillStart,a=i.drillDays||1,s=new Date(r);return s.setDate(s.getDate()+a-1),{start:r,end:s.toISOString().split("T")[0]}}var o=n.drillStart,l=n.drillDays||1,c=new Date(o);return c.setDate(c.getDate()+l-1),{start:o,end:c.toISOString().split("T")[0]}}function yu(n,e,t,i){L.blasts.indexOf(n),cu(n,e,t,i),Et(),nt()}function Mu(n,e,t){var i=t!==null&&n.drillBlocks&&n.drillBlocks[t];if(i){var r=n.drillBlocks[t],a=(r.assignedDrills||[]).indexOf(e);a!==-1&&r.assignedDrills.splice(a,1),r.drillRates&&delete r.drillRates[e],en(n)}else{var s=(n.assignedDrills||[]).indexOf(e);s!==-1&&n.assignedDrills.splice(s,1)}Et(),nt()}function Su(){Ao(L.ctxBlastIdx)}function za(n){L.blasts[L.ctxBlastIdx].status=n,nt()}function Eu(){var n=JSON.parse(JSON.stringify(L.blasts[L.ctxBlastIdx]));n.name+="_copy",n.status="planned",L.blasts.push(n),nt()}function bu(){confirm("Remove "+L.blasts[L.ctxBlastIdx].name+"?")&&(L.blasts.splice(L.ctxBlastIdx,1),nt())}function Tu(){var n=L.blasts[L.ctxBlastIdx];if(n){if(Yt(n)){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZ",t=n.drillBlocks.length,i=t<e.length?e[t]:"B"+t;n.drillBlocks.push({id:"block-"+t,label:i,drillStart:n.drillStart,drillStartTime:"06:00",drillDays:1,meters:0,assignedDrills:[],drillRates:{}})}else ou(n);Et(),nt()}}function Au(){var n=L.blasts[L.ctxBlastIdx];n&&(lu(n),Et(),nt())}function wu(){document.dispatchEvent(new CustomEvent("editBlock",{detail:{blastIdx:L.ctxBlastIdx,blockIdx:L.ctxBlockIdx}}))}function Du(){var n=L.blasts[L.ctxBlastIdx];!n||!n.delays||L.ctxDelayIdx===null||(n.delays.splice(L.ctxDelayIdx,1),nt())}function Ru(){var n=L.blasts[L.ctxBlastIdx];!n||!n.delays||L.ctxDelayIdx===null||(n.delays[L.ctxDelayIdx].days+=1,nt())}function Pu(){var n=L.blasts[L.ctxBlastIdx];if(!(!n||!n.delays||L.ctxDelayIdx===null)){var e=n.delays[L.ctxDelayIdx];e.days>1&&(e.days-=1),nt()}}function Cu(){document.addEventListener("click",function(){document.getElementById("contextMenu").style.display="none"}),document.getElementById("ctxEdit").addEventListener("click",Su),document.getElementById("ctxDrilling").addEventListener("click",function(){za("drilling")}),document.getElementById("ctxLoading").addEventListener("click",function(){za("loading")}),document.getElementById("ctxFired").addEventListener("click",function(){za("fired")}),document.getElementById("ctxDuplicate").addEventListener("click",Eu),document.getElementById("ctxRemove").addEventListener("click",bu),document.getElementById("ctxSplitDrill").addEventListener("click",Tu),document.getElementById("ctxMergeBlocks").addEventListener("click",Au),document.getElementById("ctxEditBlock").addEventListener("click",wu);var n=document.getElementById("ctxRemoveDelay"),e=document.getElementById("ctxExtendDelay"),t=document.getElementById("ctxShrinkDelay");n&&n.addEventListener("click",Du),e&&e.addEventListener("click",Ru),t&&t.addEventListener("click",Pu)}var cl=32,ht={active:!1,blastIdx:null,section:null,blockIdx:null,startX:0,dayOffset:0,ghostEl:null};function kc(){var n=document.getElementById("ganttScroll");n&&(n.addEventListener("mousedown",Lu),document.addEventListener("mousemove",Iu),document.addEventListener("mouseup",Uu))}function Lu(n){if(!n.target.closest(".gantt-resize-handle")){var e=n.target.closest(".gantt-bar");if(e&&!e.classList.contains("delay-bar")){var t=e.closest(".gantt-row");if(t){var i=t.dataset.section,r=parseInt(t.dataset.blast);if(!isNaN(r)){var a=L.blasts[r];if(a){var s=t.dataset.block!==void 0?parseInt(t.dataset.block):null;if(i==="drilling"){if(s!==null){var o=a.drillBlocks&&a.drillBlocks[s];if(!o||!o.drillStart)return}else if(!a.drillStart)return}i==="loading"&&!a.loadStart||i==="blasting"&&!a.blastDate||(n.preventDefault(),ht.active=!0,ht.blastIdx=r,ht.section=i,ht.blockIdx=s,ht.startX=n.clientX,ht.dayOffset=0,e.classList.add("gantt-bar-dragging"),ht.ghostEl=e,document.body.style.cursor="grabbing")}}}}}}function Iu(n){if(ht.active){n.preventDefault();var e=n.clientX-ht.startX,t=Math.round(e/cl);if(ht.dayOffset=t,ht.ghostEl){var i=ht.ghostEl.closest(".gantt-row");if(i){var r=i.querySelectorAll(".gantt-bar");r.forEach(function(a){a.style.transform="translateX("+t*cl+"px)",a.style.opacity="0.6",a.style.zIndex="50"})}}}}function Uu(n){if(ht.active){document.body.style.cursor="";var e=ht.dayOffset,t=ht.blastIdx,i=ht.section,r=ht.blockIdx;if(ht.ghostEl){var a=ht.ghostEl.closest(".gantt-row");if(a){var s=a.querySelectorAll(".gantt-bar");s.forEach(function(h){h.style.transform="",h.style.opacity="",h.style.zIndex=""})}ht.ghostEl.classList.remove("gantt-bar-dragging")}if(e!==0&&t!==null){var o=L.blasts[t];if(o){if(i==="drilling"&&r!==null){var l=o.drillBlocks&&o.drillBlocks[r];if(l&&l.drillStart){var c=Ye(new Date(l.drillStart),e);l.drillStart=Be(c),en(o)}}else if(i==="drilling"&&o.drillStart){var d=Ye(new Date(o.drillStart),e);o.drillStart=Be(d),o.loadStartManual=!1,o.blastDateManual=!1,o.drillBlocks&&o.drillBlocks.forEach(function(h){h.drillStart&&(h.drillStart=Be(Ye(new Date(h.drillStart),e)))})}else if(i==="loading"&&o.loadStart){var f=Ye(new Date(o.loadStart),e);o.loadStart=Be(f),o.loadStartManual=!0}else if(i==="blasting"&&o.blastDate){var u=Ye(new Date(o.blastDate),e);o.blastDate=Be(u),o.blastDateManual=!0}Et(),nt()}}ht.active=!1,ht.blastIdx=null,ht.section=null,ht.blockIdx=null,ht.ghostEl=null,ht.dayOffset=0}}var Fu=32,Re={active:!1,edge:null,blastIdx:null,section:null,blockIdx:null,delayIdx:null,startX:0,dayOffset:0,originalDays:0,originalStart:null,barEl:null};function zc(){var n=document.getElementById("ganttScroll");n&&(n.addEventListener("mousedown",Nu),document.addEventListener("mousemove",Bu),document.addEventListener("mouseup",Ou))}function Nu(n){var e=n.target.closest(".gantt-resize-handle");if(e){var t=e.closest(".gantt-bar"),i=e.closest(".gantt-row");if(!(!t||!i)){var r=parseInt(i.dataset.blast),a=i.dataset.section;if(!isNaN(r)){var s=L.blasts[r];if(s){n.preventDefault(),n.stopPropagation();var o=i.dataset.block!==void 0?parseInt(i.dataset.block):null,l=t.dataset.delayIdx!==void 0?parseInt(t.dataset.delayIdx):null,c=1,d=null;if(l!==null&&s.delays&&s.delays[l])c=s.delays[l].days||1,d=s.delays[l].start;else if(a==="drilling"&&o!==null){var f=s.drillBlocks&&s.drillBlocks[o];f&&(c=f.drillDays||1,d=f.drillStart)}else a==="drilling"?(c=s.drillDays||1,d=s.drillStart):a==="loading"&&(c=s.loadDays||Math.ceil((s.expMass||0)/(s.loadRate||1e5)),d=s.loadStart);Re.active=!0,Re.edge=e.classList.contains("handle-left")?"left":"right",Re.blastIdx=r,Re.section=a,Re.blockIdx=o,Re.delayIdx=l,Re.startX=n.clientX,Re.dayOffset=0,Re.originalDays=c,Re.originalStart=d,Re.barEl=t,t.classList.add("gantt-bar-resizing"),document.body.style.cursor="ew-resize"}}}}}function Bu(n){if(Re.active){n.preventDefault();var e=n.clientX-Re.startX,t=Math.round(e/Fu);Re.dayOffset=t,Re.barEl&&(Re.edge==="right"?Re.barEl.style.outline="2px solid var(--accent-cyan)":Re.barEl.style.outline="2px solid var(--accent-purple)")}}function Ou(n){if(Re.active){document.body.style.cursor="";var e=Re.dayOffset;if(Re.barEl&&(Re.barEl.classList.remove("gantt-bar-resizing"),Re.barEl.style.outline=""),e!==0&&Re.blastIdx!==null){var t=L.blasts[Re.blastIdx];if(t){if(Re.delayIdx!==null&&t.delays&&t.delays[Re.delayIdx]){var i=t.delays[Re.delayIdx];if(Re.edge==="right")i.days=Math.max(1,Re.originalDays+e);else{var r=Ye(new Date(Re.originalStart),e),a=Re.originalDays-e;a>=1&&(i.start=Be(r),i.days=a)}}else if(Re.section==="drilling"&&Re.blockIdx!==null){var s=t.drillBlocks&&t.drillBlocks[Re.blockIdx];s&&(ku(s,e,Re.edge,Re.originalDays,Re.originalStart),en(t))}else Re.section==="drilling"?zu(t,e,Re.edge,Re.originalDays,Re.originalStart):Re.section==="loading"&&Vu(t,e,Re.edge,Re.originalDays,Re.originalStart);Et(),nt()}}Re.active=!1,Re.blastIdx=null,Re.section=null,Re.blockIdx=null,Re.delayIdx=null,Re.barEl=null,Re.dayOffset=0}}function ku(n,e,t,i,r){var a;t==="right"?a=Math.max(1,i+e):(a=Math.max(1,i-e),n.drillStart=Be(Ye(new Date(r),e))),n.drillDays=a;var s=(L.rigHours||24)*(L.availability||.85)*(L.utilisation||.75),o=n.meters||0,l=(n.assignedDrills||[]).length;if(l>0&&o>0&&s>0){var c=o/a,d=Math.round(c/(l*s)*10)/10;d=Math.max(1,d),(n.assignedDrills||[]).forEach(function(f){n.drillRates||(n.drillRates={}),n.drillRates[f]=d})}}function zu(n,e,t,i,r){var a;t==="right"?a=Math.max(1,i+e):(a=Math.max(1,i-e),n.drillStart=Be(Ye(new Date(r),e)),n.loadStartManual=!1,n.blastDateManual=!1),n.drillDays=a;var s=(L.rigHours||24)*(L.availability||.85)*(L.utilisation||.75),o=(n.d65Meters||0)+(n.pvMeters||0),l=(n.numD65||0)+(n.numPV||0);if(l>0&&o>0&&s>0){var c=o/a,d=Math.round(c/(l*s)*10)/10;d=Math.max(1,d),n.numPV>0&&(n.ratePV=d),n.numD65>0&&(n.rateD65=d)}}function Vu(n,e,t,i,r){var a;t==="right"?a=Math.max(1,i+e):(a=Math.max(1,i-e),n.loadStart=Be(Ye(new Date(r),e)),n.loadStartManual=!0),n.loadDays=a;var s=n.expMass||0;s>0&&a>0&&(n.loadRate=Math.round(s/a))}function dl(){var n=document.getElementById("ganttScroll"),e=document.getElementById("ganttTable");if(!(!n||!e)){var t=e.parentElement;(!t||t.id!=="ganttContentWrapper")&&(t=document.createElement("div"),t.id="ganttContentWrapper",t.style.cssText="position:relative;display:inline-block;min-width:100%;",n.insertBefore(t,e),t.appendChild(e));var i=document.getElementById("ganttConnectorSvg");i&&i.remove();var r="http://www.w3.org/2000/svg",a=document.createElementNS(r,"svg");a.id="ganttConnectorSvg",a.setAttribute("width",e.scrollWidth||e.offsetWidth),a.setAttribute("height",e.scrollHeight||e.offsetHeight);var s=getComputedStyle(document.documentElement),o=s.getPropertyValue("--accent-green").trim()||"#10b981",l=s.getPropertyValue("--accent-blast").trim()||"#ef4444",c=document.createElementNS(r,"defs");c.appendChild(ul(r,"arrOk",o)),c.appendChild(ul(r,"arrWarn",l)),a.appendChild(c);var d={},f=document.querySelectorAll(".gantt-row[data-blast]");f.forEach(function(h){var p=h.dataset.blast,_=h.dataset.section;d[p]||(d[p]={}),_==="drilling"&&h.dataset.block!==void 0?(d[p]._drillRows||(d[p]._drillRows=[]),d[p]._drillRows.push(h)):d[p][_]=h}),Object.keys(d).forEach(function(h){var p=d[h];if(p._drillRows&&p._drillRows.length>0&&!p.drilling){var _=null,g=-1/0;p._drillRows.forEach(function(m){var S=m.querySelectorAll(".gantt-bar");if(S.length){var E=S[S.length-1],y=E.closest("td");if(y){var R=y.getBoundingClientRect();R.right>g&&(g=R.right,_=m)}}}),_&&(p.drilling=_)}});var u=e.getBoundingClientRect();Object.keys(d).forEach(function(h){var p=L.blasts[parseInt(h)];if(p){var _=d[h],g=!!p._depWarning;if(_.drilling&&_.loading){var m=hl(_.drilling,u),S=Hu(_.loading,u);m&&S&&fl(r,a,m,S,g,o,l)}if(_.loading&&_.blasting){var E=hl(_.loading,u),y=Gu(_.blasting,u);E&&y&&fl(r,a,E,y,g,o,l)}}}),t.appendChild(a)}}function ul(n,e,t){var i=document.createElementNS(n,"marker");i.setAttribute("id",e),i.setAttribute("markerWidth","8"),i.setAttribute("markerHeight","6"),i.setAttribute("refX","7"),i.setAttribute("refY","3"),i.setAttribute("orient","auto");var r=document.createElementNS(n,"polygon");return r.setAttribute("points","0 0, 8 3, 0 6"),r.setAttribute("fill",t),i.appendChild(r),i}function Yi(n,e){var t=n.getBoundingClientRect();return{left:t.left-e.left,top:t.top-e.top,width:t.width,height:t.height}}function hl(n,e){var t=n.querySelectorAll(".gantt-bar");if(!t.length)return null;var i=t[t.length-1].closest("td");if(!i)return null;var r=Yi(n,e),a=Yi(i,e);return{x:a.left+a.width,y:r.top+r.height/2}}function Hu(n,e){var t=n.querySelectorAll(".gantt-bar");if(!t.length)return null;var i=t[0].closest("td");if(!i)return null;var r=Yi(n,e),a=Yi(i,e);return{x:a.left,y:r.top+r.height/2}}function Gu(n,e){var t=n.querySelectorAll(".gantt-bar");if(!t.length)return null;var i=t[0].closest("td");if(!i)return null;var r=Yi(n,e),a=Yi(i,e);return{x:a.left+a.width/2,y:r.top+r.height/2}}function fl(n,e,t,i,r,a,s){var o=document.createElementNS(n,"path"),l=t.x+6,c="M "+t.x+" "+t.y+" L "+l+" "+t.y+" L "+l+" "+i.y+" L "+i.x+" "+i.y;o.setAttribute("d",c),o.setAttribute("fill","none"),o.setAttribute("stroke",r?s:a),o.setAttribute("stroke-width","2"),o.setAttribute("stroke-linecap","round"),o.setAttribute("stroke-linejoin","round"),o.setAttribute("marker-end","url(#"+(r?"arrWarn":"arrOk")+")"),o.setAttribute("opacity","0.85"),r&&o.setAttribute("stroke-dasharray","4 2"),e.appendChild(o)}var mi={drills:!1,mpus:!1,crew:!1,delays:!1};function wo(){var n=document.getElementById("delayPalette");if(n){var e="";e+=Br("drills","DRILLS","var(--accent-drill)"),mi.drills||(e+='<div class="palette-chips">',Ze.forEach(function(t){var i=t.status==="demobilised"?"var(--text-muted)":"var(--accent-drill)",r=t.status==="demobilised"?"opacity:0.4;":"",a=t.status!=="demobilised"?"true":"false";e+='<div class="palette-chip drill-chip" draggable="'+a+'" data-drag-type="drill" data-drag-id="'+t.id+'" style="border-color:'+i+";"+r+'" title="'+t.name+" ("+t.type+") — "+t.rateM_per_day+' m/hr">',e+='<span class="palette-chip-icon" style="background:'+i+';">'+t.type.charAt(0)+"</span>",e+='<span class="palette-chip-text">'+t.id+"</span>",e+="</div>"}),e+="</div>"),e+=Br("mpus","MPUs","var(--accent-load)"),mi.mpus||(e+='<div class="palette-chips">',Ut.forEach(function(t){var i=t.status==="demobilised"?"var(--text-muted)":"var(--accent-load)",r=t.status==="demobilised"?"opacity:0.4;":"",a=t.status!=="demobilised"?"true":"false";e+='<div class="palette-chip mpu-chip" draggable="'+a+'" data-drag-type="mpu" data-drag-id="'+t.id+'" style="border-color:'+i+";"+r+'" title="'+t.name+" ("+t.type+") — "+t.rateKg_per_day+' kg/day">',e+='<span class="palette-chip-icon" style="background:'+i+';">'+t.type.charAt(0)+"</span>",e+='<span class="palette-chip-text">'+t.id+"</span>",e+="</div>"}),e+="</div>"),e+=Br("crew","CREW","var(--accent-purple)"),mi.crew||(e+='<div class="palette-chips">',Hi.forEach(function(t){e+='<div class="palette-chip crew-chip" draggable="true" data-drag-type="crew" data-drag-id="'+t.code+'" style="border-color:'+t.color+';" title="'+t.label+'">',e+='<span class="palette-chip-icon" style="background:'+t.color+";color:"+t.textColor+';">'+t.code.charAt(0)+"</span>",e+='<span class="palette-chip-text">'+t.code+" — "+t.label+"</span>",e+="</div>"}),e+="</div>"),e+=Br("delays","DELAYS","var(--accent-blast)"),mi.delays||(e+='<div class="palette-chips">',ha.forEach(function(t){e+='<div class="palette-chip delay-chip" draggable="true" data-drag-type="delay" data-drag-id="'+t.code+'" style="background:'+t.color+";color:"+t.textColor+";border-color:"+t.color+';" title="'+t.label+'">',e+='<span class="delay-chip-code">'+t.code+"</span>",e+='<span class="delay-chip-label">'+t.label+"</span>",e+="</div>"}),e+="</div>"),n.innerHTML=e,n.querySelectorAll(".palette-section-hdr").forEach(function(t){t.addEventListener("click",function(){var i=t.dataset.paletteSection;mi[i]=!mi[i],wo(),Vc()})})}}function Br(n,e,t){var i=mi[n]?"▶":"▼";return'<div class="palette-section-hdr" data-palette-section="'+n+'" style="border-left:3px solid '+t+';"><span class="palette-arrow">'+i+"</span> "+e+"</div>"}function Wu(){wo(),Vc(),Xu(),Qu()}function Vc(){var n=document.getElementById("delayPalette");n&&(n.ondragstart=function(e){var t=e.target.closest(".palette-chip");if(t){var i=t.dataset.dragType,r=t.dataset.dragId;e.dataTransfer.setData("text/plain",i+":"+r),e.dataTransfer.effectAllowed="copy",t.classList.add("palette-chip-dragging");var a=function(){t.classList.remove("palette-chip-dragging"),t.removeEventListener("dragend",a)};t.addEventListener("dragend",a)}})}function Xu(){var n=document.getElementById("ganttScroll");n&&(n._paletteDropBound||(n._paletteDropBound=!0,n.addEventListener("dragover",function(e){var t=e.dataTransfer.types;if(t.indexOf("text/plain")!==-1){e.preventDefault(),e.dataTransfer.dropEffect="copy";var i=e.target.closest(".gantt-cell");i&&(pl(),i.classList.add("delay-drop-target"))}}),n.addEventListener("dragleave",function(e){var t=e.target.closest(".gantt-cell");t&&t.classList.remove("delay-drop-target")}),n.addEventListener("drop",function(e){e.preventDefault(),pl();var t=e.dataTransfer.getData("text/plain");if(t){var i=t.split(":");if(!(i.length<2)){var r=i[0],a=i[1],s=e.target.closest(".gantt-cell"),o=e.target.closest(".gantt-row");if(!(!s||!o)){var l=parseInt(o.dataset.blast),c=o.dataset.section;if(!isNaN(l)){var d=L.blasts[l];d&&(r==="delay"?qu(d,a,c,s,o):r==="drill"?Yu(d,a,c,o):r==="mpu"?Zu(d,a,c):r==="crew"?Ku(d,a,c):r==="gantt-drill"?Ju(d,a,parseInt(i[2]),c,o):r==="gantt-mpu"&&$u(d,a,parseInt(i[2]),c))}}}}})))}function qu(n,e,t,i,r){var a=ju(i,r);if(a){n.delays||(n.delays=[]);var s=vu(e,a,1,t);n.delays.push(s),nt()}}function Yu(n,e,t,i){if(t!=="drilling"){Ht("Drills can only be dropped on DRILLING rows");return}var r=i.dataset.block!==void 0?parseInt(i.dataset.block):null;if(r!==null&&n.drillBlocks&&n.drillBlocks[r]){var a=n.drillBlocks[r];if((a.assignedDrills||[]).indexOf(e)!==-1){Ht(e+" already assigned to block "+a.label);return}a.assignedDrills||(a.assignedDrills=[]),a.assignedDrills.push(e);var s=Ze.find(function(o){return o.id===e});s&&(a.drillRates||(a.drillRates={}),a.drillRates[e]=s.rateM_per_day),en(n)}else{if((n.assignedDrills||[]).indexOf(e)!==-1){Ht(e+" already assigned to "+n.name);return}n.assignedDrills||(n.assignedDrills=[]),n.assignedDrills.push(e)}Et(),nt(),Ht(e+" assigned to "+n.name,!0)}function Zu(n,e,t){if(t!=="loading"){Ht("MPUs can only be dropped on LOADING rows");return}var i=n.assignedMPU;n.assignedMPU=e,Et(),nt(),Ht(i&&i!==e?"Changed "+n.name+" MPU: "+i+" → "+e:e+" assigned to "+n.name,!0)}function Ku(n,e,t){if(t!=="drilling"&&t!=="loading"){Ht("Crew can only be dropped on DRILLING or LOADING rows");return}var i=yr(n),r=i[t];r[e]=(r[e]||0)+1,nt(),Ht("+"+e+" on "+n.name+" "+t,!0)}function ju(n,e){for(var t=e.querySelectorAll(".gantt-cell"),i=-1,r=0;r<t.length;r++)if(t[r]===n){i=r;break}if(i<0)return null;var a=new Date(L.planStart);a.setDate(a.getDate()-5);var s=new Date(a);return s.setDate(s.getDate()+i),Be(s)}function pl(){document.querySelectorAll(".delay-drop-target").forEach(function(n){n.classList.remove("delay-drop-target")})}function Ht(n,e){var t=document.getElementById("dropFeedback");t&&t.remove();var i=document.createElement("div");i.id="dropFeedback",i.className="drop-feedback "+(e?"drop-feedback-ok":"drop-feedback-warn"),i.textContent=n,document.body.appendChild(i),setTimeout(function(){i.classList.add("drop-feedback-fade"),setTimeout(function(){i.remove()},400)},2e3)}function Ju(n,e,t,i,r){if(i!=="drilling"){Ht("Drills can only be dropped on DRILLING rows");return}var a=L.blasts[t];if(a&&a!==n){var s=(a.assignedDrills||[]).indexOf(e);s!==-1&&a.assignedDrills.splice(s,1);var o=r.dataset.block!==void 0?parseInt(r.dataset.block):null;if(o!==null&&n.drillBlocks&&n.drillBlocks[o]){var l=n.drillBlocks[o];if((l.assignedDrills||[]).indexOf(e)===-1){l.assignedDrills||(l.assignedDrills=[]),l.assignedDrills.push(e);var c=Ze.find(function(d){return d.id===e});c&&(l.drillRates||(l.drillRates={}),l.drillRates[e]=c.rateM_per_day)}en(n)}else(n.assignedDrills||[]).indexOf(e)===-1&&(n.assignedDrills||(n.assignedDrills=[]),n.assignedDrills.push(e));Et(),nt(),Ht(e+": "+a.name+" → "+n.name,!0)}}function $u(n,e,t,i){if(i!=="loading"){Ht("MPUs can only be dropped on LOADING rows");return}var r=L.blasts[t];r&&r!==n&&(r.assignedMPU="",n.assignedMPU=e,Et(),nt(),Ht(e+": "+r.name+" → "+n.name,!0))}function Qu(){var n=document.getElementById("delayPalette");!n||n._returnDropBound||(n._returnDropBound=!0,n.addEventListener("dragover",function(e){var t=e.dataTransfer.types;t.indexOf("text/plain")!==-1&&(e.preventDefault(),e.dataTransfer.dropEffect="move",n.classList.add("palette-drop-active"))}),n.addEventListener("dragleave",function(e){n.contains(e.relatedTarget)||n.classList.remove("palette-drop-active")}),n.addEventListener("drop",function(e){e.preventDefault(),n.classList.remove("palette-drop-active");var t=e.dataTransfer.getData("text/plain");if(t){var i=t.split(":"),r=i[0],a=i[1],s=parseInt(i[2]),o=i.length>3?parseInt(i[3]):null;if(!isNaN(s)){var l=L.blasts[s];l&&(r==="gantt-drill"?eh(l,a,o):r==="gantt-mpu"&&th(l,a))}}}))}function eh(n,e,t){var i=t!==null&&!isNaN(t)&&n.drillBlocks&&n.drillBlocks[t];if(i){var r=n.drillBlocks[t],a=(r.assignedDrills||[]).indexOf(e);a!==-1&&r.assignedDrills.splice(a,1),r.drillRates&&delete r.drillRates[e],en(n)}else{var s=(n.assignedDrills||[]).indexOf(e);s!==-1&&n.assignedDrills.splice(s,1)}Et(),nt(),Ht(e+" removed from "+n.name,!0)}function th(n,e){n.assignedMPU===e&&(n.assignedMPU=""),Et(),nt(),Ht(e+" removed from "+n.name,!0)}function nh(){var n={};return L.blasts.forEach(function(e){if(e.drillStart)if(Yt(e))(e.drillBlocks||[]).forEach(function(a){if(!(!a.drillStart||!a.assignedDrills)){var s=new Date(a.drillStart),o=a.drillDays||1;a.assignedDrills.forEach(function(l){n[l]||(n[l]={});for(var c=0;c<o;c++){var d=Be(Ye(s,c));n[l][d]||(n[l][d]=[]),n[l][d].push(e.name)}})}});else{var t=e.assignedDrills||[];if(t.length===0)return;var i=new Date(e.drillStart),r=e.drillDays||1;t.forEach(function(a){n[a]||(n[a]={});for(var s=0;s<r;s++){var o=Be(Ye(i,s));n[a][o]||(n[a][o]=[]),n[a][o].push(e.name)}})}}),n}function ih(){var n=nh(),e=[];return Object.keys(n).forEach(function(t){var i=n[t];Object.keys(i).forEach(function(r){if(i[r].length>1){var a=Ze.find(function(s){return s.id===t});e.push({drillId:t,drillType:a?a.type:"Unknown",date:r,blasts:i[r]})}})}),e}function rh(){var n=ih(),e={};return n.forEach(function(t){t.blasts.forEach(function(i){var r=i+"|"+t.date;e[r]||(e[r]=[]),e[r].push(t.drillId)})}),e}var Ti={};function ml(n,e,t){if(!n||n.length===0)return"";for(var i="",r=0;r<n.length;r++){var a=n[r];i+='<span class="gantt-drill-chip" draggable="true" data-drag-type="gantt-drill" data-drag-id="'+a+'" data-blast-idx="'+e+'" data-block-idx="'+(t??"")+'" title="Drag back to palette to unassign '+a+'">'+a+"</span>"}return i}function ah(n,e){return n?'<span class="gantt-mpu-chip" draggable="true" data-drag-type="gantt-mpu" data-drag-id="'+n+'" data-blast-idx="'+e+'" title="Drag back to palette to unassign '+n+'">'+n+"</span> ":""}var gl='<span class="gantt-edit-btn" title="Edit"><svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M11.5 1.5l3 3L5 14H2v-3z"/><path d="M10 3l3 3"/></svg></span>';function nt(){L.planStart=new Date(document.getElementById("planStartDate").value),L.ganttWeeks=parseInt(document.getElementById("ganttWeeks").value),L.rigHours=parseFloat(document.getElementById("rigHours").value),L.availability=parseFloat(document.getElementById("rigAvail").value),L.utilisation=parseFloat(document.getElementById("rigUtil").value);for(var n=L.ganttWeeks*7,e=[],t=Ye(L.planStart,-5),i=0;i<n+5;i++)e.push(Ye(t,i));var r=L.blasts.reduce(function(A,C){return A+(C.volume||0)},0),a=L.blasts.reduce(function(A,C){return A+(C.expMass||0)},0),s=L.blasts.reduce(function(A,C){return A+(C.d65Meters||0)+(C.pvMeters||0)},0),o=L.blasts.filter(function(A){return A.status==="active"}).length,l=L.blasts.filter(function(A){return A.status==="planned"}).length,c=L.rigHours*L.availability*L.utilisation,d="";d+='<div class="stat-card accent-blue">',d+='  <div class="stat-label">Total Blasts</div>',d+='  <div class="stat-value">'+L.blasts.length+"</div>",d+='  <div class="stat-sub">'+o+" active &middot; "+l+" planned</div>",d+="</div>",d+='<div class="stat-card accent-amber">',d+='  <div class="stat-label">Total Volume</div>',d+='  <div class="stat-value">'+qe(r)+'<span class="stat-unit">bcm</span></div>',d+="</div>",d+='<div class="stat-card accent-red">',d+='  <div class="stat-label">Total Explosive</div>',d+='  <div class="stat-value">'+qe(a)+'<span class="stat-unit">kg</span></div>',d+='  <div class="stat-sub">Avg PF: '+qe(a/r,2)+" kg/bcm</div>",d+="</div>",d+='<div class="stat-card accent-cyan">',d+='  <div class="stat-label">Total Drill Meters</div>',d+='  <div class="stat-value">'+qe(s)+'<span class="stat-unit">m</span></div>',d+="</div>",d+='<div class="stat-card accent-green">',d+='  <div class="stat-label">Effective Rig Hours/Day</div>',d+='  <div class="stat-value">'+qe(c,1)+'<span class="stat-unit">hrs</span></div>',d+='  <div class="stat-sub">'+L.rigHours+"h &times; "+L.availability+" &times; "+L.utilisation+"</div>",d+="</div>",document.getElementById("ganttStats").innerHTML=d;var f="<thead>";f+='<tr><th class="sticky-col" rowspan="3" style="text-align:left;min-width:180px;">Blast</th>',f+='<th class="sticky-col-2" rowspan="3" style="min-width:90px;">Info</th>';for(var u="",h=0;h<e.length;h++){var p=e[h],_=p.toLocaleDateString("en-AU",{month:"long"});if(_!==u){for(var g=0,m=h;m<e.length&&e[m].toLocaleDateString("en-AU",{month:"long"})===_;m++)g++;f+='<th colspan="'+g+'" class="gantt-header-month">'+_+"</th>",u=_}}f+="</tr>",f+="<tr>";for(var S=-1,E=0;E<e.length;E++){var y=ws(e[E]);if(y!==S){for(var R=0,w=E;w<e.length&&ws(e[w])===y;w++)R++;f+='<th colspan="'+R+'" class="gantt-header-week">Wk '+y+"</th>",S=y}}f+="</tr>",f+="<tr>";for(var D=["Su","Mo","Tu","We","Th","Fr","Sa"],x=0;x<e.length;x++){var b=e[x],W=au(b)?"today":il(b)?"weekend":"";f+='<th class="gantt-header-date '+W+'">'+b.getDate()+'<br><span style="font-size:9px;opacity:0.5;">'+D[b.getDay()]+"</span></th>"}f+="</tr></thead><tbody>";var P=rh();function k(A,C,U,Y,J,$,re,ce){for(var De="",it=Y.toLowerCase(),je=(C.delays||[]).filter(function(ae){return ae.section===it}),j=0;j<e.length;j++){var ie=e[j],ee=Be(ie),Pe="",Te="",Le=!1,ft=!1;if(A.start&&A.end&&ee>=A.start&&ee<=A.end){if(Pe=Y==="DRILLING"?"drill":Y==="LOADING"?"load":"blast",C.status==="planned"&&Y!=="BLASTING"&&(Pe+=" planned"),Le=ee===A.start,ft=ee===A.end,Y==="DRILLING"&&$.hasOverlap&&$.loadOverlapStart&&ee>=$.loadOverlapStart&&ee<=$.drillOverlapEnd&&(Pe="drill-load-overlap",C.status==="planned"&&(Pe+=" planned")),Y==="DRILLING"&&!re&&C.drillStart&&C.drillDays>1){var Ge=new Date(C.drillStart),Ke=Be(Ye(Ge,Math.ceil(C.drillDays*J.drillPctForLoad)-1));if(ee===Ke&&J.drillPctForLoad<1&&(Te+='<div class="dep-marker" style="left:calc(100% - 1px);" data-label="'+Math.round(J.drillPctForLoad*100)+'%→Load"></div>'),J.drillPctForBlast<1){var tt=Be(Ye(Ge,Math.ceil(C.drillDays*J.drillPctForBlast)-1));ee===tt&&(Te+='<div class="dep-marker" style="left:calc(100% - 1px);background:var(--accent-blast);" data-label="'+Math.round(J.drillPctForBlast*100)+'%→Blast"></div>')}}Y==="LOADING"&&C.loadStart&&C.loadDays>1,Le&&Y!=="BLASTING"&&(Te+='<div class="gantt-resize-handle handle-left"></div>'),ft&&Y!=="BLASTING"&&(Te+='<div class="gantt-resize-handle handle-right"></div>')}Y==="BLASTING"&&C.blastDate&&ee===C.blastDate&&(Pe="milestone");var Fe=il(ie)?"opacity:0.7;":"",dt="",I=re||C.assignedDrills;if(Y==="DRILLING"&&I&&I.length>0){var pt=I.some(function(ae){var me=Ze.find(function(ne){return ne.id===ae});return me&&ru(me,ee)});pt&&ee>=(A.start||"")&&ee<=(A.end||"")&&(dt="background:rgba(239,68,68,0.12);")}var Ne="";if(Y==="DRILLING"&&Pe){var $e=C.name+"|"+ee;P[$e]&&(Ne="background:repeating-linear-gradient(-45deg,transparent,transparent 3px,rgba(239,68,68,0.25) 3px,rgba(239,68,68,0.25) 6px);")}if(De+='<td class="gantt-cell" style="'+Fe+dt+Ne+'">',Pe){var _e='data-tt-blast="'+C.name+'" data-tt-section="'+Y+'" data-tt-date="'+ee+'"',T="",v=ce||C.drillStartTime;if(Y==="DRILLING"&&ee===A.start&&v){var B=v.split(":"),K=parseInt(B[0])||0,Q=Math.round(K/24*28);T=' style="left:'+(1+Q)+'px;"',Te+='<span class="start-time-label">'+v+"</span>"}var q="";if(Y==="DRILLING"){var ve=C.name+"|"+ee;P[ve]&&(q='<div class="fleet-conflict-indicator" title="Drill conflict: '+P[ve].join(", ")+' double-booked"></div>')}De+='<div class="gantt-bar '+Pe+'"'+T+" "+_e+">"+Te+q+"</div>"}for(var oe=0;oe<je.length;oe++){var Me=je[oe],Ce=Be(Ye(new Date(Me.start),(Me.days||1)-1));if(ee>=Me.start&&ee<=Ce){var te=Bc(Me.type),se=te?te.color:"#888",xe=te?te.textColor:"#fff",ye=ee===Me.start,fe=ee===Ce,ke=(C.delays||[]).indexOf(Me),F="";ye&&(F+='<div class="gantt-resize-handle handle-left"></div>'),fe&&(F+='<div class="gantt-resize-handle handle-right"></div>');var le=ye?'<span class="delay-bar-label">'+Me.type+"</span>":"";De+='<div class="gantt-bar delay-bar" data-delay-idx="'+ke+'" style="background:'+se+";color:"+xe+';top:16px;bottom:-3px;z-index:3;" data-tt-blast="'+C.name+'" data-tt-section="'+Y+'" data-tt-date="'+ee+'">'+le+F+"</div>"}}De+="</td>"}return De}function z(A,C,U){var Y=A.toLowerCase(),J=Ti[Y]?" collapsed":"";f+='<tr class="gantt-section-header'+J+'" data-section-toggle="'+Y+'">',f+='<td colspan="'+(e.length+2)+'">',f+='<span class="collapse-arrow">▼</span>',f+='<span class="section-icon" style="background:'+C+'"></span>'+A,f+="</td></tr>",L.blasts.forEach(function($,re){var ce=wa($),De=$._computed||{};if(A==="DRILLING"&&Yt($)){$.drillBlocks.forEach(function(Ne,$e){if(Ne.drillStart){var _e={start:Ne.drillStart,end:Be(Ye(new Date(Ne.drillStart),(Ne.drillDays||1)-1))},T=ml(Ne.assignedDrills||[],re,$e),v=al($,Ze),B=yr($).drilling,K=ka(B,v),Q=T+qe(Ne.meters||0)+"m"+K;f+='<tr class="gantt-row gantt-block-row" data-blast="'+re+'" data-section="drilling" data-block="'+$e+'">',f+='<td class="sticky-col" data-ctx-idx="'+re+'" data-ctx-section="drilling" data-ctx-block="'+$e+'">',f+=gl+'<span class="block-label">['+Ne.label+"]</span> "+$.name,f+="</td>",f+='<td class="sticky-col-2">'+Q+"</td>",f+=k(_e,$,re,A,ce,De,Ne.assignedDrills,Ne.drillStartTime),f+="</tr>"}});return}var it=U($);if(it){var je="";$._depWarning?je='<span class="dep-warning" title="'+$._depWarning+'">!</span>':De.hasOverlap&&A==="DRILLING"&&(je='<span class="dep-ok" title="Load starts at '+Math.round(ce.drillPctForLoad*100)+'% drill">⛓</span>');var j="";$._maintWarnings&&$._maintWarnings.length>0&&A==="DRILLING"&&(j='<span class="dep-warning" title="'+$._maintWarnings.join("; ")+'">⚠</span>');var ie="";if(A==="DRILLING"){var ee=ml($.assignedDrills||[],re,null),Pe=al($,Ze),Te=yr($).drilling,Le=ka(Te,Pe),ft="";if($.drillStart&&$.drillDays){for(var Ge=!1,Ke=0;Ke<($.drillDays||0);Ke++){var tt=Be(Ye(new Date($.drillStart),Ke));if(P[$.name+"|"+tt]){Ge=!0;break}}Ge&&(ft='<span class="fleet-conflict-badge" title="Drill rig double-booked">⚠ CONFLICT</span>')}ie=ee+qe(($.d65Meters||0)+($.pvMeters||0))+"m"+je+j+Le+ft}else if(A==="LOADING"){var Fe=ah($.assignedMPU,re),dt=du($,Ut),I=yr($).loading,pt=ka(I,dt);ie=Fe+qe($.expMass)+"kg"+je+pt}else ie=qe($.volume)+" bcm";f+='<tr class="gantt-row" data-blast="'+re+'" data-section="'+Y+'">',f+='<td class="sticky-col" data-ctx-idx="'+re+'" data-ctx-section="'+Y+'">',f+=gl+$.name,f+="</td>",f+='<td class="sticky-col-2">'+ie+"</td>",f+=k(it,$,re,A,ce,De,null,null),f+="</tr>"}})}z("DRILLING","var(--accent-drill)",function(A){if(!A.drillStart)return null;var C=A.drillStart,U=Be(Ye(new Date(A.drillStart),(A.drillDays||1)-1));return{start:C,end:U}}),z("LOADING","var(--accent-load)",function(A){if(!A.loadStart)return null;var C=A.loadStart,U=A.loadDays||Math.ceil((A.expMass||0)/(A.loadRate||1e5)),Y=Be(Ye(new Date(A.loadStart),Math.max(U-1,0)));return{start:C,end:Y}}),z("BLASTING","var(--accent-blast)",function(A){return A.blastDate?{start:A.blastDate,end:A.blastDate}:null}),f+="</tbody>",document.getElementById("ganttTable").innerHTML=f,document.querySelectorAll(".gantt-bar").forEach(function(A){A.addEventListener("mouseenter",function(C){uu(C,A)}),A.addEventListener("mouseleave",hu)}),document.querySelectorAll(".gantt-row td.sticky-col[data-ctx-idx]").forEach(function(A){A.addEventListener("contextmenu",function(C){var U=A.dataset.ctxBlock!==void 0?parseInt(A.dataset.ctxBlock):null;_u(C,parseInt(A.dataset.ctxIdx),A.dataset.ctxSection,U)})}),document.querySelectorAll(".gantt-bar").forEach(function(A){A.addEventListener("contextmenu",function(C){C.preventDefault(),C.stopPropagation();var U=A.closest(".gantt-row");if(U){var Y=parseInt(U.dataset.blast),J=U.dataset.section,$=U.dataset.block!==void 0?parseInt(U.dataset.block):null,re=A.dataset.delayIdx!==void 0?parseInt(A.dataset.delayIdx):null,ce=A.dataset.ttDate||null;re!==null?ll(C,Y,J,$,re,ce):ll(C,Y,J,$,null,ce)}})}),document.querySelectorAll(".gantt-edit-btn").forEach(function(A){A.addEventListener("click",function(C){C.stopPropagation();var U=A.closest("td.sticky-col");if(U){var Y=parseInt(U.dataset.ctxIdx),J=U.dataset.ctxBlock!==void 0?parseInt(U.dataset.ctxBlock):null;J!==null?document.dispatchEvent(new CustomEvent("editBlock",{detail:{blastIdx:Y,blockIdx:J}})):Ao(Y)}})}),kc(),zc(),document.querySelectorAll(".gantt-drill-chip, .gantt-mpu-chip").forEach(function(A){A.addEventListener("dragstart",function(C){C.stopPropagation();var U=A.dataset.dragType,Y=A.dataset.dragId,J=A.dataset.blastIdx,$=A.dataset.blockIdx,re=U+":"+Y+":"+J+($!==""?":"+$:"");C.dataTransfer.setData("text/plain",re),C.dataTransfer.effectAllowed="move",A.classList.add("chip-dragging")}),A.addEventListener("dragend",function(){A.classList.remove("chip-dragging")})}),document.querySelectorAll(".gantt-section-header[data-section-toggle]").forEach(function(A){A.addEventListener("click",function(){var C=A.dataset.sectionToggle;Ti[C]=!Ti[C],A.classList.toggle("collapsed");for(var U=A.nextElementSibling;U&&!U.classList.contains("gantt-section-header");)U.classList.contains("gantt-row")&&U.classList.toggle("section-hidden",Ti[C]),U=U.nextElementSibling;requestAnimationFrame(function(){dl()})})}),Object.keys(Ti).forEach(function(A){if(Ti[A]){var C=document.querySelector('.gantt-section-header[data-section-toggle="'+A+'"]');if(C)for(var U=C.nextElementSibling;U&&!U.classList.contains("gantt-section-header");)U.classList.contains("gantt-row")&&U.classList.add("section-hidden"),U=U.nextElementSibling}});var G=document.getElementById("ganttScroll");G&&!G._hScrollBound&&(G._hScrollBound=!0,G.addEventListener("wheel",function(A){(A.shiftKey||A.altKey)&&(A.preventDefault(),G.scrollLeft+=A.deltaY||A.deltaX)},{passive:!1})),requestAnimationFrame(function(){dl()}),wo()}var sh={WASTE:"var(--waste)",YELLOW:"var(--yellow-zone)",ORE:"var(--ore)",PRESPLIT:"var(--presplit)"};function Da(){var n=document.getElementById("patternGrid"),e="";L.patterns.forEach(function(t){var i=sh[t.type]||"var(--text-muted)";e+='<div class="pattern-card">',e+='  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">',e+='    <div class="pattern-id">'+t.id+"</div>",e+='    <span class="badge" style="background:'+i+"20;color:"+i+'">'+t.type+"</span>",e+="  </div>",e+='  <div class="pattern-detail"><span class="label">Bench Height</span><span class="value">'+t.benchHt+" m</span></div>",e+='  <div class="pattern-detail"><span class="label">Diameter</span><span class="value">'+t.diam+" mm</span></div>",e+='  <div class="pattern-detail"><span class="label">Burden</span><span class="value">'+t.burden+" m</span></div>",e+='  <div class="pattern-detail"><span class="label">Spacing</span><span class="value">'+t.spacing+" m</span></div>",e+='  <div class="pattern-detail"><span class="label">Powder Factor</span><span class="value">'+t.pf+" kg/bcm</span></div>",e+='  <div class="pattern-detail"><span class="label">Sub-drill</span><span class="value">'+t.subdrill+" m</span></div>",e+='  <div class="pattern-detail"><span class="label">Stemming</span><span class="value">'+t.stemming+" m</span></div>",e+="</div>"}),n.innerHTML=e}function Lr(){var n=parseFloat(document.getElementById("loadingRate").value)||1e5,e=L.blasts.reduce(function(o,l){return o+(l.expMass||0)},0),t=L.blasts.reduce(function(o,l){return o+(l.volume||0)},0),i={};L.blasts.forEach(function(o){if(!(!o.blastDate&&!o.loadStart)){var l=o.loadStart||o.drillStart;if(l){var c=ws(new Date(l)),d=new Date(l).getFullYear(),f=d+"-W"+c;i[f]||(i[f]={week:c,year:d,blasts:[],totalExp:0,totalVol:0,loadDays:0}),i[f].blasts.push(o.name),i[f].totalExp+=o.expMass||0,i[f].totalVol+=o.volume||0,i[f].loadDays+=Math.ceil((o.expMass||0)/n)}}});var r="";r+='<div class="stat-card accent-red">',r+='  <div class="stat-label">Total Explosive Required</div>',r+='  <div class="stat-value">'+qe(e)+'<span class="stat-unit">kg</span></div>',r+='  <div class="stat-sub">'+qe(e/1e3)+" tonnes</div>",r+="</div>",r+='<div class="stat-card accent-amber">',r+='  <div class="stat-label">Loading Days Required</div>',r+='  <div class="stat-value">'+qe(Math.ceil(e/n))+'<span class="stat-unit">days</span></div>',r+='  <div class="stat-sub">@ '+qe(n)+" kg/day</div>",r+="</div>",r+='<div class="stat-card accent-cyan">',r+='  <div class="stat-label">Avg PF</div>',r+='  <div class="stat-value">'+(t?qe(e/t,2):"—")+'<span class="stat-unit">kg/bcm</span></div>',r+="</div>",r+='<div class="stat-card accent-green">',r+='  <div class="stat-label">Charge Source</div>',r+='  <div class="stat-value" style="font-size:16px">'+(L.chargeConfigs.length?"Kirra Config":"Designed")+"</div>",r+='  <div class="stat-sub">'+(L.chargeConfigs.length?L.chargeConfigs.length+" configs loaded":"From schedule data")+"</div>",r+="</div>",document.getElementById("forecastStats").innerHTML=r;var a='<thead><tr><th>Week</th><th>Blasts</th><th class="num">Explosive (kg)</th><th class="num">Volume (bcm)</th><th class="num">Load Days</th><th class="num">Daily Rate (kg)</th></tr></thead><tbody>',s=Object.values(i).sort(function(o,l){return o.year-l.year||o.week-l.week});s.forEach(function(o){var l=o.loadDays>0?o.totalExp/o.loadDays:0;a+="<tr>",a+="<td>Wk "+o.week+", "+o.year+"</td>",a+="<td>"+o.blasts.join(", ")+"</td>",a+='<td class="num">'+qe(o.totalExp)+"</td>",a+='<td class="num">'+qe(o.totalVol)+"</td>",a+='<td class="num">'+o.loadDays+"</td>",a+='<td class="num">'+qe(l)+"</td>",a+="</tr>"}),a+="</tbody>",document.getElementById("forecastTable").innerHTML=a}function Ra(){var n=L.conformance,e=n.actualBCM/n.targetBCM,t=n.actualBCM-n.targetBCM,i=e>=.9?"var(--accent-green)":e>=.7?"var(--accent-load)":"var(--accent-blast)",r="";r+='<div class="stat-card accent-green">',r+='  <div class="stat-label">Target BCM (Month)</div>',r+='  <div class="stat-value">'+qe(n.targetBCM)+'<span class="stat-unit">bcm</span></div>',r+="</div>",r+='<div class="stat-card accent-cyan">',r+='  <div class="stat-label">Actual BCM (MTD)</div>',r+='  <div class="stat-value">'+qe(n.actualBCM)+'<span class="stat-unit">bcm</span></div>',r+='  <div class="conformance-bar"><div class="fill" style="width:'+Math.min(e*100,100)+"%;background:"+i+'"></div></div>',r+="</div>",r+='<div class="stat-card '+(t>=0?"accent-green":"accent-red")+'">',r+='  <div class="stat-label">Variance</div>',r+='  <div class="stat-value" style="color:'+(t>=0?"var(--accent-green)":"var(--accent-blast)")+'">'+(t>=0?"+":"")+qe(t)+'<span class="stat-unit">bcm</span></div>',r+="</div>",r+='<div class="stat-card accent-purple">',r+='  <div class="stat-label">Conformance</div>',r+='  <div class="stat-value">'+qe(e*100,1)+'<span class="stat-unit">%</span></div>',r+="</div>",document.getElementById("confStats").innerHTML=r;var a='<thead><tr><th>Blast</th><th class="num">Planned BCM</th><th class="num">Planned Exp (kg)</th><th>Blast Date</th><th>Status</th></tr></thead><tbody>';L.blasts.forEach(function(s){var o=s.status==="active"?"badge-active":s.status==="fired"?"badge-complete":"badge-drill";a+="<tr>",a+='<td style="font-weight:600;color:var(--text-primary)">'+s.name+"</td>",a+='<td class="num">'+qe(s.volume)+"</td>",a+='<td class="num">'+qe(s.expMass)+"</td>",a+="<td>"+Lt(s.blastDate)+"</td>",a+='<td><span class="badge '+o+'">'+s.status+"</span></td>",a+="</tr>"}),a+="</tbody>",document.getElementById("confTable").innerHTML=a}function On(){oh(),lh(),ch(),dh(),uh()}function oh(){var n=Ze.filter(function(c){return c.status==="available"}).length,e=Ze.length,t=Ut.filter(function(c){return c.status==="available"}).length,i=Ut.length,r=ri.length,a=ri.filter(function(c){return c.role==="Drill Operator"}).length,s=0,o=new Date().toISOString().split("T")[0];Ze.concat(Ut).forEach(function(c){(c.maintenance||[]).forEach(function(d){d.end>=o&&s++})});var l="";l+='<div class="stat-card accent-blue">',l+='  <div class="stat-label">Drill Rigs</div>',l+='  <div class="stat-value">'+n+" / "+e+"</div>",l+='  <div class="stat-sub">'+n+" available</div>",l+="</div>",l+='<div class="stat-card accent-amber">',l+='  <div class="stat-label">MPUs</div>',l+='  <div class="stat-value">'+t+" / "+i+"</div>",l+='  <div class="stat-sub">'+t+" available</div>",l+="</div>",l+='<div class="stat-card accent-purple">',l+='  <div class="stat-label">Personnel</div>',l+='  <div class="stat-value">'+r+"</div>",l+='  <div class="stat-sub">'+a+" drill operators</div>",l+="</div>",l+='<div class="stat-card accent-red">',l+='  <div class="stat-label">Upcoming Maintenance</div>',l+='  <div class="stat-value">'+s+"</div>",l+='  <div class="stat-sub">scheduled windows</div>',l+="</div>",document.getElementById("equipStats").innerHTML=l}function lh(){var n="<thead><tr>";n+="<th>ID</th><th>Name</th><th>Type</th>",n+='<th class="num">Min Diam (mm)</th><th class="num">Max Diam (mm)</th>',n+='<th class="num">Rate (m/day)</th><th>Crew Req</th><th>Status</th><th>Assigned To</th><th>Maintenance</th><th>Actions</th>',n+="</tr></thead><tbody>",Ze.forEach(function(e){var t=L.blasts.filter(function(o){return(o.assignedDrills||[]).indexOf(e.id)!==-1}).map(function(o){return o.name}),i=Gc(e.status),r=e.maintenance.length,a=r>0?'<span class="badge badge-blast">'+r+" window(s)</span>":'<span class="badge badge-complete">Clear</span>',s=Wc(e.status,e.id,"drill");n+='<tr data-drill-id="'+e.id+'">',n+='<td style="color:var(--accent-cyan);font-weight:600;">'+e.id+"</td>",n+="<td>"+e.name+"</td>",n+='<td><span class="badge badge-drill">'+e.type+"</span></td>",n+='<td class="num">'+e.minDiam+"</td>",n+='<td class="num">'+e.maxDiam+"</td>",n+='<td class="num">'+qe(e.rateM_per_day)+"</td>",n+='<td style="font-size:11px;">'+Hc(e.crewRequired)+"</td>",n+='<td><span class="badge '+i+'">'+e.status+"</span></td>",n+='<td style="font-size:12px;">'+(t.length>0?t.join(", "):'<span style="color:var(--text-muted)">—</span>')+"</td>",n+="<td>"+a+"</td>",n+='<td class="equip-actions">'+s+"</td>",n+="</tr>"}),n+="</tbody>",document.getElementById("drillTable").innerHTML=n,Xc("drill")}function ch(){var n="<thead><tr>";n+="<th>ID</th><th>Name</th><th>Type</th>",n+='<th class="num">Capacity (kg)</th><th class="num">Rate (kg/day)</th>',n+="<th>Crew Req</th><th>Status</th><th>Assigned To</th><th>Maintenance</th><th>Actions</th>",n+="</tr></thead><tbody>",Ut.forEach(function(e){var t=L.blasts.filter(function(o){return o.assignedMPU===e.id}).map(function(o){return o.name}),i=Gc(e.status),r=e.maintenance.length,a=r>0?'<span class="badge badge-blast">'+r+" window(s)</span>":'<span class="badge badge-complete">Clear</span>',s=Wc(e.status,e.id,"mpu");n+='<tr data-mpu-id="'+e.id+'">',n+='<td style="color:var(--accent-load);font-weight:600;">'+e.id+"</td>",n+="<td>"+e.name+"</td>",n+='<td><span class="badge badge-load">'+e.type+"</span></td>",n+='<td class="num">'+qe(e.capacity_kg)+"</td>",n+='<td class="num">'+qe(e.rateKg_per_day)+"</td>",n+='<td style="font-size:11px;">'+Hc(e.crewRequired)+"</td>",n+='<td><span class="badge '+i+'">'+e.status+"</span></td>",n+='<td style="font-size:12px;">'+(t.length>0?t.join(", "):'<span style="color:var(--text-muted)">—</span>')+"</td>",n+="<td>"+a+"</td>",n+='<td class="equip-actions">'+s+"</td>",n+="</tr>"}),n+="</tbody>",document.getElementById("mpuTable").innerHTML=n,Xc("mpu")}function dh(){var n="<thead><tr>";n+="<th>ID</th><th>Name</th><th>Role</th><th>Certified Equipment Types</th>",n+="</tr></thead><tbody>",ri.forEach(function(e){var t=e.certifiedTypes.length>0?e.certifiedTypes.map(function(i){return'<span class="badge badge-drill">'+i+"</span>"}).join(" "):'<span style="color:var(--text-muted)">—</span>';n+='<tr data-person-id="'+e.id+'">',n+='<td style="color:var(--accent-purple);font-weight:600;">'+e.id+"</td>",n+='<td style="font-weight:500;">'+e.name+"</td>",n+="<td>"+e.role+"</td>",n+="<td>"+t+"</td>",n+="</tr>"}),n+="</tbody>",document.getElementById("peopleTable").innerHTML=n}function uh(){var n=[];Ze.forEach(function(t){(t.maintenance||[]).forEach(function(i){n.push({equipId:t.id,equipName:t.name,equipType:"Drill",start:i.start,end:i.end,reason:i.reason})})}),Ut.forEach(function(t){(t.maintenance||[]).forEach(function(i){n.push({equipId:t.id,equipName:t.name,equipType:"MPU",start:i.start,end:i.end,reason:i.reason})})}),n.sort(function(t,i){return t.start<i.start?-1:t.start>i.start?1:0});var e="<thead><tr>";e+="<th>Equipment</th><th>Type</th><th>Start</th><th>End</th><th>Days</th><th>Reason</th><th>Conflicts</th>",e+="</tr></thead><tbody>",n.forEach(function(t){var i=[];L.blasts.forEach(function(o){if(o.drillStart){var l=(o.assignedDrills||[]).concat(o.assignedMPU?[o.assignedMPU]:[]);if(l.indexOf(t.equipId)!==-1){var c=new Date(o.drillStart);c.setDate(c.getDate()+(o.drillDays||1)-1);var d=c.toISOString().split("T")[0];t.end>=o.drillStart&&t.start<=d&&i.push(o.name)}}});var r=Math.ceil((new Date(t.end)-new Date(t.start))/864e5)+1,a=i.length>0?'<span class="dep-warning" title="Overlaps: '+i.join(", ")+'">!</span> '+i.join(", "):'<span class="badge badge-complete">None</span>',s=t.equipType==="Drill"?"badge-drill":"badge-load";e+="<tr>",e+='<td style="font-weight:600;">'+t.equipId+"</td>",e+='<td><span class="badge '+s+'">'+t.equipType+"</span></td>",e+="<td>"+Lt(t.start)+"</td>",e+="<td>"+Lt(t.end)+"</td>",e+='<td class="num">'+r+"</td>",e+="<td>"+t.reason+"</td>",e+='<td style="font-size:12px;">'+a+"</td>",e+="</tr>"}),n.length===0&&(e+='<tr><td colspan="7" style="text-align:center;color:var(--text-muted);padding:20px;">No maintenance windows scheduled</td></tr>'),e+="</tbody>",document.getElementById("maintenanceTable").innerHTML=e}function Hc(n){if(!n)return'<span style="color:var(--text-muted)">—</span>';for(var e=[],t=Object.keys(n),i=0;i<t.length;i++)n[t[i]]>0&&e.push('<span class="badge badge-drill" style="font-size:10px;padding:1px 5px;">'+t[i]+":"+n[t[i]]+"</span>");return e.length>0?e.join(" "):'<span style="color:var(--text-muted)">—</span>'}function Gc(n){return n==="available"||n==="mobilised"?"badge-active":n==="demobilised"?"badge-demobilised":"badge-blast"}function Wc(n,e,t){var i='<div class="equip-action-btns">';return n==="demobilised"?(i+='<button class="btn-equip-action btn-mobilise" data-equip-id="'+e+'" data-equip-type="'+t+'" title="Mobilise">',i+='<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 2v12M2 8l6-6 6 6"/></svg> Mob</button>'):(i+='<button class="btn-equip-action btn-demobilise" data-equip-id="'+e+'" data-equip-type="'+t+'" title="Demobilise">',i+='<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 14V2M2 8l6 6 6-6"/></svg> Demob</button>'),i+='<button class="btn-equip-action btn-remove-equip" data-equip-id="'+e+'" data-equip-type="'+t+'" title="Remove">',i+='<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 4h12M5 4V2h6v2M6 7v5M10 7v5M3 4l1 10h8l1-10"/></svg></button>',i+="</div>",i}function Xc(n){var e=n==="drill"?Ze:Ut;document.querySelectorAll('.btn-mobilise[data-equip-type="'+n+'"]').forEach(function(t){t.addEventListener("click",function(i){i.stopPropagation();var r=t.dataset.equipId;tu(e,r),On()})}),document.querySelectorAll('.btn-demobilise[data-equip-type="'+n+'"]').forEach(function(t){t.addEventListener("click",function(i){i.stopPropagation();var r=t.dataset.equipId;nu(e,r),On()})}),document.querySelectorAll('.btn-remove-equip[data-equip-type="'+n+'"]').forEach(function(t){t.addEventListener("click",function(i){i.stopPropagation();var r=t.dataset.equipId;confirm("Remove "+r+"? This cannot be undone.")&&(iu(e,r),On())})})}function hh(){var n=document.querySelectorAll(".tab");n.forEach(function(e){e.addEventListener("click",function(){document.querySelectorAll(".tab").forEach(function(i){i.classList.remove("active")}),document.querySelectorAll(".tab-panel").forEach(function(i){i.classList.remove("active")}),e.classList.add("active"),document.getElementById("tab-"+e.dataset.tab).classList.add("active");var t=e.dataset.tab;t==="gantt"?nt():t==="blasts"?nr():t==="patterns"?Da():t==="forecast"?Lr():t==="conformance"?Ra():t==="equipment"&&On()})})}function fh(){var n=localStorage.getItem("kirra-scheduler-theme");n==="light"&&document.documentElement.setAttribute("data-theme","light");var e=localStorage.getItem("kirra-scheduler-cb");e==="true"&&document.documentElement.setAttribute("data-cb","true");var t=document.getElementById("btnThemeToggle");t&&t.addEventListener("click",function(){var r=document.documentElement.getAttribute("data-theme");r==="light"?(document.documentElement.removeAttribute("data-theme"),localStorage.setItem("kirra-scheduler-theme","dark")):(document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("kirra-scheduler-theme","light"))});var i=document.getElementById("btnCBToggle");i&&i.addEventListener("click",function(){var r=document.documentElement.getAttribute("data-cb");r==="true"?(document.documentElement.removeAttribute("data-cb"),localStorage.setItem("kirra-scheduler-cb","false")):(document.documentElement.setAttribute("data-cb","true"),localStorage.setItem("kirra-scheduler-cb","true"))})}var Gi=null;function ph(){Gi="drill",document.getElementById("equipModalTitle").textContent="Add Drill Rig";var n="";n+='<div class="form-row">',n+='  <div class="form-field"><label>Drill ID</label><input type="text" id="fEqId" placeholder="e.g. D65-03"></div>',n+='  <div class="form-field"><label>Name</label><input type="text" id="fEqName" placeholder="e.g. D65 #3"></div>',n+="</div>",n+='<div class="form-row">',n+='  <div class="form-field"><label>Type</label>',n+='    <select id="fEqType"><option value="D65">D65</option><option value="PV271">PV271</option><option value="DM45">DM45</option><option value="Other">Other</option></select>',n+="  </div>",n+='  <div class="form-field"><label>Rate (m/day)</label><input type="number" id="fEqRate" value="20"></div>',n+="</div>",n+='<div class="form-row">',n+='  <div class="form-field"><label>Min Diameter (mm)</label><input type="number" id="fEqMinDiam" value="127"></div>',n+='  <div class="form-field"><label>Max Diameter (mm)</label><input type="number" id="fEqMaxDiam" value="229"></div>',n+="</div>",n+='<div class="form-row">',n+='  <div class="form-field"><label>Crew Required — OP</label><input type="number" id="fEqCrewOP" value="1" min="0" max="10" step="1"></div>',n+='  <div class="form-field"><label>Crew Required — FT</label><input type="number" id="fEqCrewFT" value="0" min="0" max="10" step="1"></div>',n+="</div>",document.getElementById("equipModalBody").innerHTML=n,tr("equipmentModal")}function mh(){Gi="mpu",document.getElementById("equipModalTitle").textContent="Add Mobile Processing Unit";var n="";n+='<div class="form-row">',n+='  <div class="form-field"><label>MPU ID</label><input type="text" id="fEqId" placeholder="e.g. MPU-03"></div>',n+='  <div class="form-field"><label>Name</label><input type="text" id="fEqName" placeholder="e.g. MPU #3"></div>',n+="</div>",n+='<div class="form-row">',n+='  <div class="form-field"><label>Type</label>',n+='    <select id="fEqType"><option value="Emulsion">Emulsion</option><option value="ANFO">ANFO</option><option value="Bulk">Bulk</option></select>',n+="  </div>",n+='  <div class="form-field"><label>Rate (kg/day)</label><input type="number" id="fEqRate" value="100000"></div>',n+="</div>",n+='<div class="form-row">',n+='  <div class="form-field"><label>Capacity (kg)</label><input type="number" id="fEqMinDiam" value="20000"></div>',n+='  <div class="form-field"></div>',n+="</div>",n+='<div class="form-row">',n+='  <div class="form-field"><label>Crew Required — OP</label><input type="number" id="fEqCrewOP" value="1" min="0" max="10" step="1"></div>',n+='  <div class="form-field"><label>Crew Required — SF</label><input type="number" id="fEqCrewSF" value="1" min="0" max="10" step="1"></div>',n+="</div>",document.getElementById("equipModalBody").innerHTML=n,tr("equipmentModal")}function gh(){Gi="person",document.getElementById("equipModalTitle").textContent="Add Personnel";var n="";n+='<div class="form-row">',n+='  <div class="form-field"><label>Person ID</label><input type="text" id="fEqId" placeholder="e.g. P009"></div>',n+='  <div class="form-field"><label>Full Name</label><input type="text" id="fEqName" placeholder="e.g. Jane Smith"></div>',n+="</div>",n+='<div class="form-row">',n+='  <div class="form-field"><label>Role</label>',n+='    <select id="fEqType"><option value="Drill Operator">Drill Operator</option><option value="Drill Offsider">Drill Offsider</option><option value="Loading Operator">Loading Operator</option><option value="Shot Firer">Shot Firer</option><option value="Blast Engineer">Blast Engineer</option><option value="Supervisor">Supervisor</option></select>',n+="  </div>",n+='  <div class="form-field"><label>Certified Types (comma separated)</label><input type="text" id="fEqRate" placeholder="e.g. D65, PV271"></div>',n+="</div>",document.getElementById("equipModalBody").innerHTML=n,tr("equipmentModal")}function vh(){var n=document.getElementById("fEqId").value.trim(),e=document.getElementById("fEqName").value.trim();if(!n||!e){alert("ID and Name are required");return}var t=document.getElementById("fEqType").value,i=document.getElementById("fEqRate"),r=document.getElementById("fEqMinDiam"),a=document.getElementById("fEqMaxDiam");if(Gi==="drill"){var s=parseInt((document.getElementById("fEqCrewOP")||{}).value)||0,o=parseInt((document.getElementById("fEqCrewFT")||{}).value)||0,l={};s>0&&(l.OP=s),o>0&&(l.FT=o),Ze.push({id:n,name:e,type:t,minDiam:parseInt(r.value)||127,maxDiam:parseInt(a.value)||229,rateM_per_day:parseFloat(i.value)||20,status:"available",crewRequired:l,maintenance:[]})}else if(Gi==="mpu"){var c=parseInt((document.getElementById("fEqCrewOP")||{}).value)||0,d=parseInt((document.getElementById("fEqCrewSF")||{}).value)||0,f={};c>0&&(f.OP=c),d>0&&(f.SF=d),Ut.push({id:n,name:e,type:t,capacity_kg:parseInt(r.value)||2e4,rateKg_per_day:parseFloat(i.value)||1e5,status:"available",crewRequired:f,maintenance:[]})}else if(Gi==="person"){var u=i.value.split(",").map(function(h){return h.trim()}).filter(function(h){return h.length>0});ri.push({id:n,name:e,role:t,certifiedTypes:u})}Un("equipmentModal"),On()}function _h(){var n=document.getElementById("fMaintEquip");n.innerHTML="",Ze.forEach(function(e){var t=document.createElement("option");t.value="drill:"+e.id,t.textContent="[Drill] "+e.id+" - "+e.name,n.appendChild(t)}),Ut.forEach(function(e){var t=document.createElement("option");t.value="mpu:"+e.id,t.textContent="[MPU] "+e.id+" - "+e.name,n.appendChild(t)})}function xh(){_h(),document.getElementById("maintModalTitle").textContent="Add Maintenance Window",document.getElementById("fMaintReason").value="",document.getElementById("fMaintStart").value="",document.getElementById("fMaintEnd").value="",tr("maintenanceModal")}function yh(){var n=document.getElementById("fMaintEquip").value,e=document.getElementById("fMaintReason").value.trim(),t=document.getElementById("fMaintStart").value,i=document.getElementById("fMaintEnd").value;if(!n||!t||!i){alert("Equipment, start, and end date are required");return}if(i<t){alert("End date must be on or after start date");return}e||(e="Maintenance");var r=n.split(":"),a=r[0],s=r[1],o=a==="drill"?Ze:Ut,l=o.find(function(c){return c.id===s});l&&l.maintenance.push({start:t,end:i,reason:e}),Un("maintenanceModal"),On()}function Mh(){document.getElementById("btnAddDrill").addEventListener("click",ph),document.getElementById("btnAddMPU").addEventListener("click",mh),document.getElementById("btnAddPerson").addEventListener("click",gh),document.getElementById("btnAddMaintenance").addEventListener("click",xh),document.getElementById("equipModalSave").addEventListener("click",vh),document.getElementById("btnCloseEquipModal").addEventListener("click",function(){Un("equipmentModal")}),document.getElementById("btnCancelEquipModal").addEventListener("click",function(){Un("equipmentModal")}),document.getElementById("maintModalSave").addEventListener("click",yh),document.getElementById("btnCloseMaintModal").addEventListener("click",function(){Un("maintenanceModal")}),document.getElementById("btnCancelMaintModal").addEventListener("click",function(){Un("maintenanceModal")})}function Sh(){document.addEventListener("editBlock",function(n){var e=n.detail.blastIdx,t=n.detail.blockIdx;Eh(e,t)})}function Eh(n,e){var t=L.blasts[n];if(!t||!t.drillBlocks||!t.drillBlocks[e])return;var i=t.drillBlocks[e],r=(t.d65Meters||0)+(t.pvMeters||0),a=0;t.drillBlocks.forEach(function(u,h){h!==e&&(a+=u.meters||0)});var s=Math.round((r-a)*10)/10,o='<div class="block-edit-form" style="display:grid;gap:10px;">';o+='<div style="font-weight:700;font-size:14px;color:var(--text-primary);">'+t.name+" — Block "+i.label+"</div>",o+='<div class="form-row" style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">',o+='<label style="font-size:12px;">Start Date<br><input type="date" id="beStartDate" value="'+(i.drillStart||"")+'" style="width:100%;padding:4px;"></label>',o+='<label style="font-size:12px;">Start Time<br><input type="time" id="beStartTime" value="'+(i.drillStartTime||"06:00")+'" step="1800" style="width:100%;padding:4px;"></label>',o+="</div>",o+='<label style="font-size:12px;">Meters for this block (max '+s+"m of "+Math.round(r)+"m total)<br>",o+='<input type="number" id="beMeters" value="'+(i.meters||0)+'" min="0" max="'+s+'" step="0.1" style="width:100%;padding:4px;"></label>',o+='<div style="font-size:12px;font-weight:600;margin-top:4px;">Assigned Drills & Pen Rate (m/hr)</div>',o+='<div id="beDrillList" style="display:grid;gap:6px;">',Ze.forEach(function(u){var h=(i.assignedDrills||[]).indexOf(u.id)!==-1,p=i.drillRates&&i.drillRates[u.id]!==void 0?i.drillRates[u.id]:u.rateM_per_day,_=h?" checked":"";o+='<div style="display:grid;grid-template-columns:auto 1fr auto;gap:8px;align-items:center;">',o+='<label style="font-size:11px;white-space:nowrap;"><input type="checkbox" class="be-drill-cb" value="'+u.id+'"'+_+"> "+u.id+" ("+u.type+")</label>",o+="<div></div>",o+='<input type="number" class="be-drill-rate" data-drill="'+u.id+'" value="'+p+'" min="1" step="1" style="width:60px;padding:2px 4px;font-size:11px;text-align:right;"'+(h?"":" disabled")+">",o+="</div>"}),o+="</div>",o+='<div id="beCalcPreview" style="font-size:11px;color:var(--text-muted);margin-top:4px;"></div>',o+="</div>";var l=document.getElementById("blockEditOverlay");l&&l.remove();var c=document.createElement("div");c.id="blockEditOverlay",c.style.cssText="position:fixed;inset:0;z-index:1000;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.5);";var d=document.createElement("div");d.style.cssText="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:20px;min-width:360px;max-width:460px;box-shadow:var(--shadow);",d.innerHTML=o+'<div style="display:flex;gap:8px;justify-content:flex-end;margin-top:14px;"><button class="btn" id="beCancelBtn">Cancel</button><button class="btn btn-success" id="beSaveBtn">Save Block</button></div>',c.appendChild(d),document.body.appendChild(c),d.querySelectorAll(".be-drill-cb").forEach(function(u){u.addEventListener("change",function(){var h=d.querySelector('.be-drill-rate[data-drill="'+u.value+'"]');h&&(h.disabled=!u.checked),f()})});function f(){var u=parseFloat(document.getElementById("beMeters").value)||0,h=0;d.querySelectorAll(".be-drill-cb:checked").forEach(function(S){var E=d.querySelector('.be-drill-rate[data-drill="'+S.value+'"]');h+=parseFloat(E.value)||0});var p=(L.rigHours||24)*(L.availability||.85)*(L.utilisation||.75),_=h*p,g=_>0?Math.ceil(u/_):"?",m=document.getElementById("beCalcPreview");m&&(m.textContent="Estimated: "+g+" drill day(s) — "+Math.round(h)+" m/hr pen rate x "+p.toFixed(1)+" eff hrs = "+Math.round(_)+" m/day")}document.getElementById("beMeters").addEventListener("input",f),d.querySelectorAll(".be-drill-rate").forEach(function(u){u.addEventListener("input",f)}),f(),document.getElementById("beCancelBtn").addEventListener("click",function(){c.remove()}),c.addEventListener("click",function(u){u.target===c&&c.remove()}),document.getElementById("beSaveBtn").addEventListener("click",function(){i.drillStart=document.getElementById("beStartDate").value,i.drillStartTime=document.getElementById("beStartTime").value||"06:00",i.meters=parseFloat(document.getElementById("beMeters").value)||0,i.assignedDrills=[],i.drillRates={},d.querySelectorAll(".be-drill-cb:checked").forEach(function(u){i.assignedDrills.push(u.value);var h=d.querySelector('.be-drill-rate[data-drill="'+u.value+'"]');i.drillRates[u.value]=parseFloat(h.value)||20}),i.drillDays=xr(i),en(t),c.remove(),Et(),nt()})}function qc(){var n=document.getElementById("importPreview");n.style.display="block";var e="<thead><tr><th>Blast Name</th><th>Hole Types</th><th>Burden</th><th>Spacing</th><th>Bench Ht</th><th>Diam (mm)</th></tr></thead><tbody>";L.importedBlasts.forEach(function(t){t.holeTypes.forEach(function(i,r){e+="<tr>",r===0&&(e+='<td rowspan="'+t.holeTypes.length+'" style="font-weight:600;color:var(--text-primary)">'+t.name+"</td>");var a=i.type==="PRESPLIT"?"badge-presplit":i.type==="BUFFER"?"badge-buffer":"badge-production";e+='<td><span class="badge '+a+'">'+i.type+"</span></td>",e+='<td class="num">'+(i.burden||"—")+"</td>",e+='<td class="num">'+(i.spacing||"—")+"</td>",e+='<td class="num">'+(i.benchHt||"—")+"</td>",e+='<td class="num">'+(i.diam||"—")+"</td>",e+="</tr>"})}),e+="</tbody>",document.getElementById("importTable").innerHTML=e}function bh(){L.importedBlasts.forEach(function(n){var e=L.blasts.find(function(t){return t.name===n.name});e?e.holeTypes=n.holeTypes.map(function(t){return{type:t.type,diam:(t.diam||229)/1e3,burden:t.burden,spacing:t.spacing,holes:0,drillMeters:0,expMass:0}}):L.blasts.push({name:n.name,mode:"Manual",surfaceArea:0,pattern:"",pctD65:0,pctPV:1,rateD65:19,ratePV:20,numD65:0,numPV:4,loadRate:1e5,d65Meters:0,pvMeters:0,volume:0,expMass:0,drillStart:Be(L.planStart),drillDays:1,loadStart:null,loadDays:0,blastDate:null,status:"planned",deps:{drillPctForLoad:null,drillPctForBlast:null,loadPctForBlast:null,minLeadDays:null,predecessor:null},holeTypes:n.holeTypes.map(function(t){return{type:t.type,diam:(t.diam||229)/1e3,burden:t.burden,spacing:t.spacing,holes:0,drillMeters:0,expMass:0}})})}),L.importedBlasts=[],document.getElementById("importPreview").style.display="none",document.getElementById("dxfLog").innerHTML+='<div class="log-ok">Merged into schedule</div>',nt(),nr()}function Th(){L.importedBlasts=[],document.getElementById("importPreview").style.display="none"}function Ah(){document.getElementById("btnMergeImported").addEventListener("click",bh),document.getElementById("btnClearImported").addEventListener("click",Th)}function wh(){var n={format:"KirraGanttProject",version:"1.0.0",exportDate:new Date().toISOString(),settings:{planStart:Be(L.planStart),ganttWeeks:L.ganttWeeks,rigHours:L.rigHours,availability:L.availability,utilisation:L.utilisation,deps:L.deps},blasts:L.blasts,patterns:L.patterns,chargeConfigs:L.chargeConfigs,importedBlasts:L.importedBlasts,drills:Ze,mpus:Ut,people:ri,conformance:L.conformance,kirraProjectSurfaces:L.kirraProjectSurfaces||[],kirraProjectSolids:L.kirraProjectSolids||[]},e=new Blob([JSON.stringify(n,null,2)],{type:"application/json"}),t=URL.createObjectURL(e),i=document.createElement("a");i.href=t,i.download="KirraSchedule_"+Be(new Date)+".kgp",i.click(),URL.revokeObjectURL(t)}function Dh(){var n=["Blast Name","Status","Mode","Pattern","Surface Area (m2)","Volume (bcm)","Explosive Mass (kg)","D65 Meters","PV Meters","Total Drill Meters","Drill Start","Start Time","Drill Days","Load Start","Load Days","Blast Date","Assigned Drills","Assigned MPU","Rate D65 (m/day)","Rate PV (m/day)","Num D65","Num PV","Load Rate (kg/day)","Drill % to Load","Drill % to Blast","Lead Days","Predecessor"],e=[n.join(",")];L.blasts.forEach(function(s){var o=(s.d65Meters||0)+(s.pvMeters||0),l=s.deps.drillPctForLoad!==null?s.deps.drillPctForLoad:L.deps.drillPctForLoad||"",c=s.deps.drillPctForBlast!==null?s.deps.drillPctForBlast:L.deps.drillPctForBlast||"",d=s.deps.minLeadDays!==null?s.deps.minLeadDays:L.deps.minLeadDays||"",f=s.deps.predecessor||"",u=[Va(s.name),s.status||"",s.mode||"",s.pattern||"",s.surfaceArea||0,s.volume||0,s.expMass||0,s.d65Meters||0,s.pvMeters||0,Math.round(o*10)/10,s.drillStart||"",s.drillStartTime||"",s.drillDays||0,s.loadStart||"",s.loadDays||0,s.blastDate||"",Va((s.assignedDrills||[]).join(" | ")),s.assignedMPU||"",s.rateD65||0,s.ratePV||0,s.numD65||0,s.numPV||0,s.loadRate||0,l,c,d,Va(f)];e.push(u.join(","))});var t=e.join(`
`),i=new Blob([t],{type:"text/csv;charset=utf-8;"}),r=URL.createObjectURL(i),a=document.createElement("a");a.href=r,a.download="KirraSchedule_"+Be(new Date)+".csv",a.click(),URL.revokeObjectURL(r)}function Va(n){var e=String(n);return e.indexOf(",")!==-1||e.indexOf('"')!==-1||e.indexOf(`
`)!==-1?'"'+e.replace(/"/g,'""')+'"':e}function Rh(n){var e=document.getElementById("exportMenu");if(e){e.remove();return}var t=document.getElementById("btnExport"),i=t.getBoundingClientRect(),r=document.createElement("div");r.id="exportMenu",r.className="export-menu",r.style.top=i.bottom+4+"px",r.style.right=window.innerWidth-i.right+"px";var a="";a+='<div class="export-menu-item" id="exportKGP">',a+='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">',a+='<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',a+="</svg>",a+=" Kirra Gantt Project (.kgp)",a+='<span class="export-menu-hint">Full project — all data, equipment, settings</span>',a+="</div>",a+='<div class="export-menu-item" id="exportCSV">',a+='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">',a+='<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>',a+='<line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/>',a+='<line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/>',a+="</svg>",a+=" Schedule Spreadsheet (.csv)",a+='<span class="export-menu-hint">Blast list for Excel / Google Sheets</span>',a+="</div>",r.innerHTML=a,document.body.appendChild(r),document.getElementById("exportKGP").addEventListener("click",function(){r.remove(),wh()}),document.getElementById("exportCSV").addEventListener("click",function(){r.remove(),Dh()});var s=function(o){!r.contains(o.target)&&o.target!==t&&(r.remove(),document.removeEventListener("click",s))};setTimeout(function(){document.addEventListener("click",s)},10)}function Ph(){document.getElementById("btnExport").addEventListener("click",Rh)}function Ch(){if(document.getElementById("resetDialogOverlay"))return;var n=document.createElement("div");n.id="resetDialogOverlay",n.className="reset-overlay";var e=document.createElement("div");e.className="reset-dialog";var t="";t+='<div class="reset-header">',t+='<svg viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" width="28" height="28">',t+='<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>',t+='<line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',t+="</svg>",t+="<h3>Reset Kirra Scheduler</h3>",t+="</div>",t+='<div class="reset-warning">',t+="<strong>This action cannot be undone.</strong> ",t+="Export a <em>Kirra Gantt Project (.kgp)</em> file first if you want to preserve your current schedule.",t+="</div>",t+='<div class="reset-form">',t+='<label class="reset-option reset-option-all">',t+='<input type="checkbox" id="resetAll" value="all">',t+='<span class="reset-option-text">Reset All</span>',t+='<span class="reset-option-desc">Wipe the Kirra Gantt of all information</span>',t+="</label>",t+='<div class="reset-divider"></div>',t+='<div class="reset-section-label">Spatial</div>',t+='<label class="reset-option">',t+='<input type="checkbox" id="resetPolygons" value="polygons">',t+='<span class="reset-option-text">Remove Polygons and Volumes without Drill Holes</span>',t+="</label>",t+='<label class="reset-option">',t+='<input type="checkbox" id="resetDrillPlans" value="drillPlans">',t+='<span class="reset-option-text">Remove Designed Drill Plans</span>',t+='<span class="reset-option-desc">Clears all blast entries from the schedule</span>',t+="</label>",t+='<div class="reset-divider"></div>',t+='<div class="reset-section-label">Configurations</div>',t+='<label class="reset-option">',t+='<input type="checkbox" id="resetPatterns" value="patterns">',t+='<span class="reset-option-text">Remove Pattern Specifications</span>',t+='<span class="reset-option-desc">Clears the Pattern Library</span>',t+="</label>",t+='<label class="reset-option">',t+='<input type="checkbox" id="resetChargeConfigs" value="chargeConfigs">',t+='<span class="reset-option-text">Remove Charge Configurations</span>',t+='<span class="reset-option-desc">Clears imported charge configs</span>',t+="</label>",t+='<div class="reset-divider"></div>',t+='<div class="reset-section-label">Equipment</div>',t+='<label class="reset-option">',t+='<input type="checkbox" id="resetDrillFleet" value="drillFleet">',t+='<span class="reset-option-text">Remove Drill Fleet</span>',t+='<span class="reset-option-desc">Clears all drill rigs and their assignments</span>',t+="</label>",t+='<label class="reset-option">',t+='<input type="checkbox" id="resetLoadFleet" value="loadFleet">',t+='<span class="reset-option-text">Remove Loading Fleet</span>',t+='<span class="reset-option-desc">Clears all MPUs and their assignments</span>',t+="</label>",t+='<label class="reset-option">',t+='<input type="checkbox" id="resetMaintenance" value="maintenance">',t+='<span class="reset-option-text">Remove Maintenance Windows</span>',t+='<span class="reset-option-desc">Clears scheduled maintenance from drills and MPUs (keeps the rigs)</span>',t+="</label>",t+='<label class="reset-option">',t+='<input type="checkbox" id="resetPersonnel" value="personnel">',t+='<span class="reset-option-text">Remove Personnel Roster</span>',t+='<span class="reset-option-desc">Clears the named personnel list</span>',t+="</label>",t+='<div class="reset-divider"></div>',t+='<div class="reset-section-label">Scheduling</div>',t+='<label class="reset-option">',t+='<input type="checkbox" id="resetDelays" value="delays">',t+='<span class="reset-option-text">Remove All Delays</span>',t+='<span class="reset-option-desc">Strips UD, SD, SM, UM, UP, SP, UW, SW, LP delays from all blasts</span>',t+="</label>",t+='<label class="reset-option">',t+='<input type="checkbox" id="resetBlocks" value="blocks">',t+='<span class="reset-option-text">Remove Drill Blocks / Splits</span>',t+='<span class="reset-option-desc">Merges split blocks back to single-phase drilling per blast</span>',t+="</label>",t+='<label class="reset-option">',t+='<input type="checkbox" id="resetCrew" value="crew">',t+='<span class="reset-option-text">Remove Crew Allocations</span>',t+='<span class="reset-option-desc">Clears OP/FT/SF crew assignments from all blasts</span>',t+="</label>",t+='<div class="reset-divider"></div>',t+='<div class="reset-section-label">Targets &amp; Settings</div>',t+='<label class="reset-option">',t+='<input type="checkbox" id="resetConformance" value="conformance">',t+='<span class="reset-option-text">Reset Conformance Targets</span>',t+='<span class="reset-option-desc">Resets target BCM, actual BCM, and target MTD to zero</span>',t+="</label>",t+='<label class="reset-option">',t+='<input type="checkbox" id="resetSettings" value="settings">',t+='<span class="reset-option-text">Reset Global Settings to Defaults</span>',t+='<span class="reset-option-desc">Rig hours 24, availability 0.85, utilisation 0.75, default dependency rules</span>',t+="</label>",t+="</div>",t+='<div class="reset-actions">',t+='<button class="btn reset-btn-cancel" id="resetCancel">Cancel</button>',t+='<button class="btn reset-btn-confirm" id="resetConfirm" disabled>',t+='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">',t+='<path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',t+="</svg>",t+=" Reset Selected",t+="</button>",t+="</div>",e.innerHTML=t,n.appendChild(e),document.body.appendChild(n);var i=document.getElementById("resetAll"),r=e.querySelectorAll('.reset-form input[type="checkbox"]:not(#resetAll)');i.addEventListener("change",function(){var o=i.checked;r.forEach(function(l){l.checked=o,l.disabled=o}),a()}),r.forEach(function(o){o.addEventListener("change",function(){var l=!0;r.forEach(function(c){c.checked||(l=!1)}),i.checked=l,a()})});function a(){var o=i.checked;o||r.forEach(function(l){l.checked&&(o=!0)}),document.getElementById("resetConfirm").disabled=!o}document.getElementById("resetCancel").addEventListener("click",function(){n.remove()}),n.addEventListener("click",function(o){o.target===n&&n.remove()});var s=function(o){o.key==="Escape"&&(n.remove(),document.removeEventListener("keydown",s))};document.addEventListener("keydown",s),document.getElementById("resetConfirm").addEventListener("click",function(){Lh(),n.remove()})}function Lh(){var n=document.getElementById("resetAll").checked;if((n||document.getElementById("resetPolygons").checked)&&(L.blasts=L.blasts.filter(function(a){var s=(a.d65Meters||0)+(a.pvMeters||0);return s>0})),(n||document.getElementById("resetDrillPlans").checked)&&(L.blasts=[],L.importedBlasts=[]),(n||document.getElementById("resetPatterns").checked)&&(L.patterns=[]),(n||document.getElementById("resetChargeConfigs").checked)&&(L.chargeConfigs=[]),(n||document.getElementById("resetDrillFleet").checked)&&(Ze.length=0,L.blasts.forEach(function(a){a.assignedDrills=[],a.drillBlocks&&a.drillBlocks.forEach(function(s){s.assignedDrills=[],s.drillRates={}})})),(n||document.getElementById("resetLoadFleet").checked)&&(Ut.length=0,L.blasts.forEach(function(a){a.assignedMPU=""})),(n||document.getElementById("resetMaintenance").checked)&&(Ze.forEach(function(a){a.maintenance=[]}),Ut.forEach(function(a){a.maintenance=[]})),(n||document.getElementById("resetPersonnel").checked)&&(ri.length=0),(n||document.getElementById("resetDelays").checked)&&L.blasts.forEach(function(a){a.delays=[]}),(n||document.getElementById("resetBlocks").checked)&&L.blasts.forEach(function(a){if(a.drillBlocks&&a.drillBlocks.length>0){var s=0;a.drillBlocks.forEach(function(l){s+=l.meters||0});var o=[];a.drillBlocks.forEach(function(l){(l.assignedDrills||[]).forEach(function(c){o.indexOf(c)===-1&&o.push(c)})}),a.assignedDrills=o,delete a.drillBlocks}}),(n||document.getElementById("resetCrew").checked)&&L.blasts.forEach(function(a){delete a.crewAllocated}),(n||document.getElementById("resetConformance").checked)&&(L.conformance={targetBCM:0,actualBCM:0,targetMTD:0,monthStart:new Date().toISOString().split("T")[0].slice(0,8)+"01"}),n||document.getElementById("resetSettings").checked){L.rigHours=24,L.availability=.85,L.utilisation=.75,L.ganttWeeks=8,L.deps={drillPctForLoad:.5,drillPctForBlast:1,loadPctForBlast:1,minLeadDays:0,enforceSequence:!0},document.getElementById("planStart");var e=document.getElementById("ganttWeeks"),t=document.getElementById("rigHours"),i=document.getElementById("availability"),r=document.getElementById("utilisation");e&&(e.value=L.ganttWeeks),t&&(t.value=L.rigHours),i&&(i.value=L.availability),r&&(r.value=L.utilisation)}Et(),nt(),nr(),Da(),Lr(),Ra(),On()}function Ih(){var n=document.getElementById("btnResetGantt");n&&n.addEventListener("click",Ch)}function Do(n,e,t){var i=document.getElementById(n),r=document.getElementById(e);i.addEventListener("click",function(){r.click()}),i.addEventListener("dragover",function(a){a.preventDefault(),i.classList.add("dragover")}),i.addEventListener("dragleave",function(){i.classList.remove("dragover")}),i.addEventListener("drop",function(a){a.preventDefault(),i.classList.remove("dragover");var s=a.dataTransfer.files[0];s&&t(s)}),r.addEventListener("change",function(a){a.target.files[0]&&t(a.target.files[0])})}function Uh(n){var e=document.getElementById("dxfLog");e.innerHTML='<div class="log-info">Reading '+n.name+"...</div>";var t=new FileReader;t.onload=function(i){var r=i.target.result,a=Fh(r);if(a.length===0){e.innerHTML+='<div class="log-warn">Warning: No blast polygons found. Expected layer naming: BLASTNAME-HOLETYPE{[B][S][BH][SD][D]}</div>';return}e.innerHTML+='<div class="log-ok">Found '+a.length+" blast definition(s)</div>",L.importedBlasts=a,qc()},t.readAsText(n)}function Fh(n){for(var e=[],t=n.split(`
`).map(function(p){return p.trim()}),i=/^(.+?)-(.+?)\{\[([^\]]*)\]\[([^\]]*)\]\[([^\]]*)\]\[([^\]]*)\]\[([^\]]*)\]\}/,r=new Set,a={},s=0;s<t.length;s++)if(t[s]==="LWPOLYLINE"||t[s]==="POLYLINE"){for(var o="",l=[],c=s+1;c<Math.min(s+500,t.length);c++){if(t[c]==="8"&&t[c+1]&&(o=t[c+1]),t[c]==="10"&&t[c+1]){var d=parseFloat(t[c+1]);if(t[c+2]==="20"&&t[c+3]){var f=parseFloat(t[c+3]);l.push({x:d,y:f})}}if(t[c]==="0")break}o&&(r.add(o),a[o]||(a[o]=[]),a[o].push(l))}for(var u=0;u<t.length;u++)t[u]==="2"&&t[u-1]==="0"&&r.add(t[u+1]||t[u]);var h=document.getElementById("dxfLog");return h.innerHTML+='<div class="log-info">Found '+r.size+" layers in DXF</div>",r.forEach(function(p){var _=p.match(i);if(_){var g=_[1],m=_[2],S=_[3],E=_[4],y=_[5],R=_[6],w=_[7],D=e.find(function(x){return x.name===g});D||(D={name:g,holeTypes:[],polygons:[]},e.push(D)),D.holeTypes.push({type:m.toUpperCase(),burden:parseFloat(S)||0,spacing:parseFloat(E)||0,benchHt:parseFloat(y)||12,subdrill:parseFloat(R)||1.5,diam:parseFloat(w)||229,layer:p,polygon:a[p]||[]}),h.innerHTML+='<div class="log-ok">'+g+" → "+m+" (B:"+S+" S:"+E+" BH:"+y+")</div>"}else h.innerHTML+='<div class="log-warn">Layer "'+p+`" doesn't match expected pattern</div>`}),e}function Nh(n){var e=document.getElementById("kirraLog");e.innerHTML='<div class="log-info">Reading '+n.name+"...</div>";var t=new FileReader;t.onload=function(i){try{var r=JSON.parse(i.target.result);if(r.chargeConfigs||r.charge_configs){var a=r.chargeConfigs||r.charge_configs;L.chargeConfigs=Array.isArray(a)?a:[a],e.innerHTML+='<div class="log-ok">Loaded '+L.chargeConfigs.length+" charge config(s)</div>",L.chargeConfigs.forEach(function(s){var o=s.name||s.configName||"Unknown",l=s.decks||s.chargeDeck||[];e.innerHTML+='<div class="log-ok">  → '+o+": "+l.length+" deck(s)</div>"})}else r.name||r.configName?(L.chargeConfigs=[r],e.innerHTML+='<div class="log-ok">Loaded charge config: '+(r.name||r.configName)+"</div>"):e.innerHTML+=`<div class="log-warn">No charge configs found in file. Expected 'chargeConfigs' or 'charge_configs' key.</div>`;Lr()}catch(s){e.innerHTML+='<div class="log-err">Parse error: '+s.message+"</div>"}},t.readAsText(n)}function Bh(n){var e=document.getElementById("kirraProjectLog");e.innerHTML='<div class="log-info">Reading '+n.name+"...</div>";var t=new FileReader;t.onload=function(i){try{var r=JSON.parse(i.target.result);if(r.format!=="KirraGanttProject"){e.innerHTML+='<div class="log-warn">Not a Kirra Gantt Project file. Trying standard import...</div>',parseKirraProjectFromData(r,e);return}if(e.innerHTML+='<div class="log-ok">Kirra Gantt Project v'+(r.version||"?")+" ("+Math.round(n.size/1024)+" KB)</div>",e.innerHTML+='<div class="log-info">Exported: '+(r.exportDate||"unknown")+"</div>",r.settings){var a=r.settings;a.planStart&&(L.planStart=new Date(a.planStart)),a.ganttWeeks!==void 0&&(L.ganttWeeks=a.ganttWeeks),a.rigHours!==void 0&&(L.rigHours=a.rigHours),a.availability!==void 0&&(L.availability=a.availability),a.utilisation!==void 0&&(L.utilisation=a.utilisation),a.deps&&(L.deps=a.deps),e.innerHTML+='<div class="log-ok">Settings restored</div>'}r.blasts&&Array.isArray(r.blasts)&&(L.blasts=r.blasts,e.innerHTML+='<div class="log-ok">'+r.blasts.length+" blast(s) restored</div>"),r.patterns&&Array.isArray(r.patterns)&&(L.patterns=r.patterns,e.innerHTML+='<div class="log-ok">'+r.patterns.length+" pattern(s) restored</div>"),r.chargeConfigs&&(L.chargeConfigs=Array.isArray(r.chargeConfigs)?r.chargeConfigs:[]),r.drills&&Array.isArray(r.drills)&&(Ze.length=0,r.drills.forEach(function(d){Ze.push(d)}),e.innerHTML+='<div class="log-ok">'+r.drills.length+" drill(s) restored</div>"),r.mpus&&Array.isArray(r.mpus)&&(Ut.length=0,r.mpus.forEach(function(d){Ut.push(d)}),e.innerHTML+='<div class="log-ok">'+r.mpus.length+" MPU(s) restored</div>"),r.people&&Array.isArray(r.people)&&(ri.length=0,r.people.forEach(function(d){ri.push(d)}),e.innerHTML+='<div class="log-ok">'+r.people.length+" personnel restored</div>"),r.conformance&&(L.conformance=r.conformance,e.innerHTML+='<div class="log-ok">Conformance targets restored</div>'),r.importedBlasts&&(L.importedBlasts=r.importedBlasts),r.kirraProjectSurfaces&&Array.isArray(r.kirraProjectSurfaces)&&(L.kirraProjectSurfaces=r.kirraProjectSurfaces,e.innerHTML+='<div class="log-ok">'+r.kirraProjectSurfaces.length+" surface(s) restored for 3D playback</div>"),r.kirraProjectSolids&&Array.isArray(r.kirraProjectSolids)&&(L.kirraProjectSolids=r.kirraProjectSolids,e.innerHTML+='<div class="log-ok">'+r.kirraProjectSolids.length+" solid(s) restored for 3D playback</div>"),e.innerHTML+='<div class="log-ok" style="font-weight:700;margin-top:6px;">Project restored successfully</div>';var s=document.getElementById("ganttWeeks"),o=document.getElementById("rigHours"),l=document.getElementById("availability"),c=document.getElementById("utilisation");s&&(s.value=L.ganttWeeks),o&&(o.value=L.rigHours),l&&(l.value=L.availability),c&&(c.value=L.utilisation),Et(),nt(),nr(),Da(),Lr(),Ra(),On()}catch(d){e.innerHTML+='<div class="log-err">Parse error: '+d.message+"</div>"}},t.readAsText(n)}function Oh(n){if(n.name&&n.name.toLowerCase().indexOf(".kgp")!==-1){Bh(n);return}var e=document.getElementById("kirraProjectLog");e.innerHTML='<div class="log-info">Reading '+n.name+"...</div>";var t=new FileReader;t.onload=function(i){try{var r=JSON.parse(i.target.result);e.innerHTML+='<div class="log-ok">Parsed Kirra project file ('+Math.round(n.size/1024)+" KB)</div>";var a=[],s=["images","pointClouds","points","circles","geoTiffs","lasFiles","navFiles","dxfEntities"];s.forEach(function(y){if(r[y]){var R=Array.isArray(r[y])?r[y].length:Object.keys(r[y]).length;a.push(y+" ("+R+")")}}),a.length>0&&(e.innerHTML+='<div class="log-warn">⚠ Ignored data types (not used by Scheduler): '+a.join(", ")+"</div>");var o=r.blastHoles||r.holes||r.allBlastHoles||null;if(o&&Array.isArray(o)&&o.length>0){e.innerHTML+='<div class="log-ok">→ Blast holes: '+o.length+" total</div>";var l=kh(o),c=Object.keys(l);e.innerHTML+='<div class="log-ok">  Found '+c.length+" blast pattern(s): "+c.join(", ")+"</div>",c.forEach(function(y){var R=zh(y,l[y]);L.importedBlasts.push(R)})}var d=r.kads||r.kadEntities||r.drawings||null;if(d){var f=Array.isArray(d)?d:Object.values(d),u=0,h=0,p=0,_=0;f.forEach(function(y){var R=y.entityType||(y.geometryData?"unknown":"");if(R==="poly"||R==="polygon"){u++;var w=Vh(y);if(w.length>0){var D=y.entityName||y.name||"KAD_Poly_"+u,x=L.importedBlasts.find(function(b){return b.name===D});x?(x.polygons=w,e.innerHTML+='<div class="log-ok">  KAD poly "'+D+'" matched to blast</div>'):e.innerHTML+='<div class="log-info">  KAD poly "'+D+'" (no matching blast)</div>'}}else R==="line"?h++:R==="text"?p++:R==="point"&&_++}),e.innerHTML+='<div class="log-ok">→ KAD entities: '+u+" polys imported</div>",h+p+_>0&&(e.innerHTML+='<div class="log-warn">  Ignored KAD types: '+(h>0?h+" lines ":"")+(p>0?p+" texts ":"")+(_>0?_+" points":"")+"</div>")}var g=r.surfaces||r.loadedSurfaces||null;if(g){var m=Array.isArray(g)?g:Object.values(g);L.kirraProjectSurfaces=m.map(function(y){return{name:y.name||y.id||"Unnamed",points:y.points||[],triangles:y.triangles||[],bounds:y.meshBounds||null,gradient:y.gradient||"default",visible:!0,opacity:.85}}),e.innerHTML+='<div class="log-ok">→ Surfaces: '+m.length+" imported (full geometry preserved for 3D)</div>",m.forEach(function(y){var R=y.name||y.id||"Unnamed",w=y.points?y.points.length:0,D=y.triangles?y.triangles.length:0;e.innerHTML+='<div class="log-ok">  '+R+" ("+w+" pts, "+D+" tris)</div>"})}var S=r.solids||r.meshes||null;if(S){var E=Array.isArray(S)?S:Object.values(S);L.kirraProjectSolids=E.map(function(y){return{name:y.name||y.id||"Unnamed",points:y.points||[],triangles:y.triangles||[],volume:y.volume||0,bounds:y.meshBounds||null,isTextured:!!y.isTexturedMesh,visible:!0,opacity:.85}}),e.innerHTML+='<div class="log-ok">→ Solids: '+E.length+" imported (full geometry preserved)</div>"}r.chargeConfigs&&(L.chargeConfigs=Array.isArray(r.chargeConfigs)?r.chargeConfigs:[r.chargeConfigs],e.innerHTML+='<div class="log-info">  Charge configs merged into forecast engine</div>'),L.importedBlasts.length>0?(e.innerHTML+='<div class="log-ok" style="font-weight:700;margin-top:6px;">✅ '+L.importedBlasts.length+" blast(s) ready to merge into schedule</div>",qc()):e.innerHTML+=`<div class="log-warn">No blast data found. Expected 'blastHoles', 'holes', or 'blasts' key.</div>`}catch(y){e.innerHTML+='<div class="log-err">Parse error: '+y.message+"</div>"}},t.readAsText(n)}function kh(n){var e={};return n.forEach(function(t){var i=t.entityName||t.entity_name||t.patternName||"Unnamed";e[i]||(e[i]=[]),e[i].push(t)}),e}function zh(n,e){var t={},i=0,r=0;e.forEach(function(d){var f=d.holeDiameter||d.diameter||229,u=f>1?f/1e3:f,h=d.holeType||d.type||"Production",p=h+"_"+Math.round(f),_=d.holeLengthCalculated||d.holeLength||0;if(_===0&&d.startZLocation&&d.endZLocation){var g=(d.endXLocation||0)-(d.startXLocation||0),m=(d.endYLocation||0)-(d.startYLocation||0),S=(d.endZLocation||0)-(d.startZLocation||0);_=Math.sqrt(g*g+m*m+S*S)}i+=_,t[p]||(t[p]={type:h.toUpperCase(),diam:u,burden:d.burden||0,spacing:d.spacing||0,holes:0,drillMeters:0,expMass:0}),t[p].holes++,t[p].drillMeters+=_,d.burden&&(t[p].burden=d.burden),d.spacing&&(t[p].spacing=d.spacing)});var a=Object.keys(t).map(function(d){return t[d]}),s=0,o=0;a.forEach(function(d){d.diam<=.165?s+=d.drillMeters:o+=d.drillMeters});var l=i>0?s/i:0,c=i>0?o/i:0;return{name:n,mode:"Auto",surfaceArea:0,pattern:"",pctD65:Math.round(l*100)/100,pctPV:Math.round(c*100)/100,rateD65:19,ratePV:20,numD65:l>0?1:0,numPV:c>0?1:0,loadRate:1e5,d65Meters:Math.round(s*10)/10,pvMeters:Math.round(o*10)/10,volume:0,expMass:Math.round(r),drillStart:null,drillStartTime:"06:00",drillDays:0,loadStart:null,loadDays:0,blastDate:null,status:"planned",deps:{drillPctForLoad:null,drillPctForBlast:null,loadPctForBlast:null,minLeadDays:null,predecessor:null},assignedDrills:[],assignedMPU:"",holeTypes:a,polygons:[],_sourceHoleCount:e.length}}function Vh(n){var e=n.geometryData||n.points||[];return Array.isArray(e)?e.map(function(t){return{x:t.pointXLocation||t.x||0,y:t.pointYLocation||t.y||0,z:t.pointZLocation||t.z||0}}).filter(function(t){return t.x!==0||t.y!==0}):[]}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ro="183",kn={ROTATE:0,DOLLY:1,PAN:2},zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hh=0,vl=1,Gh=2,fa=1,Wh=2,gr=3,ai=0,Zt=1,dn=2,zn=0,Wi=1,_l=2,xl=3,yl=4,Xh=5,gi=100,qh=101,Yh=102,Zh=103,Kh=104,jh=200,Jh=201,$h=202,Qh=203,Ds=204,Rs=205,ef=206,tf=207,nf=208,rf=209,af=210,sf=211,of=212,lf=213,cf=214,Ps=0,Cs=1,Ls=2,Zi=3,Is=4,Us=5,Fs=6,Ns=7,Po=0,df=1,uf=2,yn=0,Yc=1,Zc=2,Kc=3,jc=4,Jc=5,$c=6,Qc=7,ed=300,yi=301,Ki=302,Ha=303,Ga=304,Pa=306,Bs=1e3,Fn=1001,Os=1002,It=1003,hf=1004,Or=1005,kt=1006,Wa=1007,_i=1008,Qt=1009,td=1010,nd=1011,Tr=1012,Co=1013,Sn=1014,_n=1015,Gn=1016,Lo=1017,Io=1018,Ar=1020,id=35902,rd=35899,ad=1021,sd=1022,hn=1023,Wn=1026,xi=1027,od=1028,Uo=1029,ji=1030,Fo=1031,No=1033,pa=33776,ma=33777,ga=33778,va=33779,ks=35840,zs=35841,Vs=35842,Hs=35843,Gs=36196,Ws=37492,Xs=37496,qs=37488,Ys=37489,Zs=37490,Ks=37491,js=37808,Js=37809,$s=37810,Qs=37811,eo=37812,to=37813,no=37814,io=37815,ro=37816,ao=37817,so=37818,oo=37819,lo=37820,co=37821,uo=36492,ho=36494,fo=36495,po=36283,mo=36284,go=36285,vo=36286,ff=3200,ld=0,pf=1,ni="",$t="srgb",Ji="srgb-linear",Ma="linear",at="srgb",Ai=7680,Ml=519,mf=512,gf=513,vf=514,Bo=515,_f=516,xf=517,Oo=518,yf=519,Sl=35044,El="300 es",xn=2e3,wr=2001;function Mf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Sa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Sf(){const n=Sa("canvas");return n.style.display="block",n}const bl={};function Tl(...n){const e="THREE."+n.shift();console.log(e,...n)}function cd(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ie(...n){n=cd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function et(...n){n=cd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ea(...n){const e=n.join(" ");e in bl||(bl[e]=!0,Ie(...n))}function Ef(n,e,t){return new Promise(function(i,r){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const bf={[Ps]:Cs,[Ls]:Fs,[Is]:Ns,[Zi]:Us,[Cs]:Ps,[Fs]:Ls,[Ns]:Is,[Us]:Zi};class Si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_a=Math.PI/180,_o=180/Math.PI;function ir(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Xe(n,e,t){return Math.max(e,Math.min(t,n))}function Tf(n,e){return(n%e+e)%e}function Xa(n,e,t){return(1-t)*n+t*e}function lr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Xt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Af={DEG2RAD:_a};class pe{constructor(e=0,t=0){pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class si{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,o){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3],u=a[s+0],h=a[s+1],p=a[s+2],_=a[s+3];if(f!==_||l!==u||c!==h||d!==p){let g=l*u+c*h+d*p+f*_;g<0&&(u=-u,h=-h,p=-p,_=-_,g=-g);let m=1-o;if(g<.9995){const S=Math.acos(g),E=Math.sin(S);m=Math.sin(m*S)/E,o=Math.sin(o*S)/E,l=l*m+u*o,c=c*m+h*o,d=d*m+p*o,f=f*m+_*o}else{l=l*m+u*o,c=c*m+h*o,d=d*m+p*o,f=f*m+_*o;const S=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=S,c*=S,d*=S,f*=S}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,a,s){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=a[s],u=a[s+1],h=a[s+2],p=a[s+3];return e[t]=o*p+d*f+l*h-c*u,e[t+1]=l*p+d*u+c*f-o*h,e[t+2]=c*p+d*h+o*u-l*f,e[t+3]=d*p-o*f-l*u-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),f=o(a/2),u=l(i/2),h=l(r/2),p=l(a/2);switch(s){case"XYZ":this._x=u*d*f+c*h*p,this._y=c*h*f-u*d*p,this._z=c*d*p+u*h*f,this._w=c*d*f-u*h*p;break;case"YXZ":this._x=u*d*f+c*h*p,this._y=c*h*f-u*d*p,this._z=c*d*p-u*h*f,this._w=c*d*f+u*h*p;break;case"ZXY":this._x=u*d*f-c*h*p,this._y=c*h*f+u*d*p,this._z=c*d*p+u*h*f,this._w=c*d*f-u*h*p;break;case"ZYX":this._x=u*d*f-c*h*p,this._y=c*h*f+u*d*p,this._z=c*d*p-u*h*f,this._w=c*d*f+u*h*p;break;case"YZX":this._x=u*d*f+c*h*p,this._y=c*h*f+u*d*p,this._z=c*d*p-u*h*f,this._w=c*d*f-u*h*p;break;case"XZY":this._x=u*d*f-c*h*p,this._y=c*h*f-u*d*p,this._z=c*d*p+u*h*f,this._w=c*d*f+u*h*p;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],d=t[6],f=t[10],u=i+o+f;if(u>0){const h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(d-l)*h,this._y=(a-c)*h,this._z=(s-r)*h}else if(i>o&&i>f){const h=2*Math.sqrt(1+i-o-f);this._w=(d-l)/h,this._x=.25*h,this._y=(r+s)/h,this._z=(a+c)/h}else if(o>f){const h=2*Math.sqrt(1+o-i-f);this._w=(a-c)/h,this._x=(r+s)/h,this._y=.25*h,this._z=(l+d)/h}else{const h=2*Math.sqrt(1+f-i-o);this._w=(s-r)/h,this._x=(a+c)/h,this._y=(l+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+s*o+r*c-a*l,this._y=r*d+s*l+a*o-i*c,this._z=a*d+s*c+i*l-r*o,this._w=s*d-i*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,a=-a,s=-s,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+a*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+a*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Al.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Al.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*i),d=2*(o*t-a*r),f=2*(a*i-s*t);return this.x=t+l*c+s*f-o*d,this.y=i+l*d+o*c-a*f,this.z=r+l*f+a*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qa.copy(this).projectOnVector(e),this.sub(qa)}reflect(e){return this.sub(qa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qa=new N,Al=new si;class ze{constructor(e,t,i,r,a,s,o,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c)}set(e,t,i,r,a,s,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=a,d[5]=l,d[6]=i,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],d=i[4],f=i[7],u=i[2],h=i[5],p=i[8],_=r[0],g=r[3],m=r[6],S=r[1],E=r[4],y=r[7],R=r[2],w=r[5],D=r[8];return a[0]=s*_+o*S+l*R,a[3]=s*g+o*E+l*w,a[6]=s*m+o*y+l*D,a[1]=c*_+d*S+f*R,a[4]=c*g+d*E+f*w,a[7]=c*m+d*y+f*D,a[2]=u*_+h*S+p*R,a[5]=u*g+h*E+p*w,a[8]=u*m+h*y+p*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*s*d-t*o*c-i*a*d+i*o*l+r*a*c-r*s*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*s-o*c,u=o*l-d*a,h=c*a-s*l,p=t*f+i*u+r*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=f*_,e[1]=(r*c-d*i)*_,e[2]=(o*i-r*s)*_,e[3]=u*_,e[4]=(d*t-r*l)*_,e[5]=(r*a-o*t)*_,e[6]=h*_,e[7]=(i*l-c*t)*_,e[8]=(s*t-i*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ya.makeScale(e,t)),this}rotate(e){return this.premultiply(Ya.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ya.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ya=new ze,wl=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dl=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wf(){const n={enabled:!0,workingColorSpace:Ji,spaces:{},convert:function(r,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===at&&(r.r=Vn(r.r),r.g=Vn(r.g),r.b=Vn(r.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===at&&(r.r=Xi(r.r),r.g=Xi(r.g),r.b=Xi(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ni?Ma:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,s){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return Ea("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return Ea("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ji]:{primaries:e,whitePoint:i,transfer:Ma,toXYZ:wl,fromXYZ:Dl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$t},outputColorSpaceConfig:{drawingBufferColorSpace:$t}},[$t]:{primaries:e,whitePoint:i,transfer:at,toXYZ:wl,fromXYZ:Dl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$t}}}),n}const Je=wf();function Vn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let wi;class Df{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{wi===void 0&&(wi=Sa("canvas")),wi.width=e.width,wi.height=e.height;const r=wi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=wi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Vn(a[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Vn(t[i]/255)*255):t[i]=Vn(t[i]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rf=0;class ko{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=ir(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(Za(r[s].image)):a.push(Za(r[s]))}else a=Za(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function Za(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Df.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let Pf=0;const Ka=new N;class Gt extends Si{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,i=Fn,r=Fn,a=kt,s=_i,o=hn,l=Qt,c=Gt.DEFAULT_ANISOTROPY,d=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=ir(),this.name="",this.source=new ko(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ka).x}get height(){return this.source.getSize(Ka).y}get depth(){return this.source.getSize(Ka).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ed)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bs:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case Os:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bs:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case Os:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=ed;Gt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const l=e.elements,c=l[0],d=l[4],f=l[8],u=l[1],h=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(d-u)<.01&&Math.abs(f-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,y=(h+1)/2,R=(m+1)/2,w=(d+u)/4,D=(f+_)/4,x=(p+g)/4;return E>y&&E>R?E<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(E),r=w/i,a=D/i):y>R?y<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(y),i=w/r,a=x/r):R<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(R),i=D/a,r=x/a),this.set(i,r,a,t),this}let S=Math.sqrt((g-p)*(g-p)+(f-_)*(f-_)+(u-d)*(u-d));return Math.abs(S)<.001&&(S=1),this.x=(g-p)/S,this.y=(f-_)/S,this.z=(u-d)/S,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cf extends Si{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},a=new Gt(r),s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ko(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mn extends Cf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class dd extends Gt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lf extends Gt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mt{constructor(e,t,i,r,a,s,o,l,c,d,f,u,h,p,_,g){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c,d,f,u,h,p,_,g)}set(e,t,i,r,a,s,o,l,c,d,f,u,h,p,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=a,m[5]=s,m[9]=o,m[13]=l,m[2]=c,m[6]=d,m[10]=f,m[14]=u,m[3]=h,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Di.setFromMatrixColumn(e,0).length(),a=1/Di.setFromMatrixColumn(e,1).length(),s=1/Di.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const u=s*d,h=s*f,p=o*d,_=o*f;t[0]=l*d,t[4]=-l*f,t[8]=c,t[1]=h+p*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=p+h*c,t[10]=s*l}else if(e.order==="YXZ"){const u=l*d,h=l*f,p=c*d,_=c*f;t[0]=u+_*o,t[4]=p*o-h,t[8]=s*c,t[1]=s*f,t[5]=s*d,t[9]=-o,t[2]=h*o-p,t[6]=_+u*o,t[10]=s*l}else if(e.order==="ZXY"){const u=l*d,h=l*f,p=c*d,_=c*f;t[0]=u-_*o,t[4]=-s*f,t[8]=p+h*o,t[1]=h+p*o,t[5]=s*d,t[9]=_-u*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const u=s*d,h=s*f,p=o*d,_=o*f;t[0]=l*d,t[4]=p*c-h,t[8]=u*c+_,t[1]=l*f,t[5]=_*c+u,t[9]=h*c-p,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const u=s*l,h=s*c,p=o*l,_=o*c;t[0]=l*d,t[4]=_-u*f,t[8]=p*f+h,t[1]=f,t[5]=s*d,t[9]=-o*d,t[2]=-c*d,t[6]=h*f+p,t[10]=u-_*f}else if(e.order==="XZY"){const u=s*l,h=s*c,p=o*l,_=o*c;t[0]=l*d,t[4]=-f,t[8]=c*d,t[1]=u*f+_,t[5]=s*d,t[9]=h*f-p,t[2]=p*f-h,t[6]=o*d,t[10]=_*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(If,e,Uf)}lookAt(e,t,i){const r=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),Kn.crossVectors(i,jt),Kn.lengthSq()===0&&(Math.abs(i.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),Kn.crossVectors(i,jt)),Kn.normalize(),kr.crossVectors(jt,Kn),r[0]=Kn.x,r[4]=kr.x,r[8]=jt.x,r[1]=Kn.y,r[5]=kr.y,r[9]=jt.y,r[2]=Kn.z,r[6]=kr.z,r[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],d=i[1],f=i[5],u=i[9],h=i[13],p=i[2],_=i[6],g=i[10],m=i[14],S=i[3],E=i[7],y=i[11],R=i[15],w=r[0],D=r[4],x=r[8],b=r[12],W=r[1],P=r[5],k=r[9],z=r[13],G=r[2],A=r[6],C=r[10],U=r[14],Y=r[3],J=r[7],$=r[11],re=r[15];return a[0]=s*w+o*W+l*G+c*Y,a[4]=s*D+o*P+l*A+c*J,a[8]=s*x+o*k+l*C+c*$,a[12]=s*b+o*z+l*U+c*re,a[1]=d*w+f*W+u*G+h*Y,a[5]=d*D+f*P+u*A+h*J,a[9]=d*x+f*k+u*C+h*$,a[13]=d*b+f*z+u*U+h*re,a[2]=p*w+_*W+g*G+m*Y,a[6]=p*D+_*P+g*A+m*J,a[10]=p*x+_*k+g*C+m*$,a[14]=p*b+_*z+g*U+m*re,a[3]=S*w+E*W+y*G+R*Y,a[7]=S*D+E*P+y*A+R*J,a[11]=S*x+E*k+y*C+R*$,a[15]=S*b+E*z+y*U+R*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],u=e[10],h=e[14],p=e[3],_=e[7],g=e[11],m=e[15],S=l*h-c*u,E=o*h-c*f,y=o*u-l*f,R=s*h-c*d,w=s*u-l*d,D=s*f-o*d;return t*(_*S-g*E+m*y)-i*(p*S-g*R+m*w)+r*(p*E-_*R+m*D)-a*(p*y-_*w+g*D)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],u=e[10],h=e[11],p=e[12],_=e[13],g=e[14],m=e[15],S=t*o-i*s,E=t*l-r*s,y=t*c-a*s,R=i*l-r*o,w=i*c-a*o,D=r*c-a*l,x=d*_-f*p,b=d*g-u*p,W=d*m-h*p,P=f*g-u*_,k=f*m-h*_,z=u*m-h*g,G=S*z-E*k+y*P+R*W-w*b+D*x;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/G;return e[0]=(o*z-l*k+c*P)*A,e[1]=(r*k-i*z-a*P)*A,e[2]=(_*D-g*w+m*R)*A,e[3]=(u*w-f*D-h*R)*A,e[4]=(l*W-s*z-c*b)*A,e[5]=(t*z-r*W+a*b)*A,e[6]=(g*y-p*D-m*E)*A,e[7]=(d*D-u*y+h*E)*A,e[8]=(s*k-o*W+c*x)*A,e[9]=(i*W-t*k-a*x)*A,e[10]=(p*w-_*y+m*S)*A,e[11]=(f*y-d*w-h*S)*A,e[12]=(o*b-s*P-l*x)*A,e[13]=(t*P-i*b+r*x)*A,e[14]=(_*E-p*R-g*S)*A,e[15]=(d*R-f*E+u*S)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,d=a*o;return this.set(c*s+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*s,0,c*l-r*o,d*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,d=s+s,f=o+o,u=a*c,h=a*d,p=a*f,_=s*d,g=s*f,m=o*f,S=l*c,E=l*d,y=l*f,R=i.x,w=i.y,D=i.z;return r[0]=(1-(_+m))*R,r[1]=(h+y)*R,r[2]=(p-E)*R,r[3]=0,r[4]=(h-y)*w,r[5]=(1-(u+m))*w,r[6]=(g+S)*w,r[7]=0,r[8]=(p+E)*D,r[9]=(g-S)*D,r[10]=(1-(u+_))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const a=this.determinant();if(a===0)return i.set(1,1,1),t.identity(),this;let s=Di.set(r[0],r[1],r[2]).length();const o=Di.set(r[4],r[5],r[6]).length(),l=Di.set(r[8],r[9],r[10]).length();a<0&&(s=-s),on.copy(this);const c=1/s,d=1/o,f=1/l;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=d,on.elements[5]*=d,on.elements[6]*=d,on.elements[8]*=f,on.elements[9]*=f,on.elements[10]*=f,t.setFromRotationMatrix(on),i.x=s,i.y=o,i.z=l,this}makePerspective(e,t,i,r,a,s,o=xn,l=!1){const c=this.elements,d=2*a/(t-e),f=2*a/(i-r),u=(t+e)/(t-e),h=(i+r)/(i-r);let p,_;if(l)p=a/(s-a),_=s*a/(s-a);else if(o===xn)p=-(s+a)/(s-a),_=-2*s*a/(s-a);else if(o===wr)p=-s/(s-a),_=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,a,s,o=xn,l=!1){const c=this.elements,d=2/(t-e),f=2/(i-r),u=-(t+e)/(t-e),h=-(i+r)/(i-r);let p,_;if(l)p=1/(s-a),_=s/(s-a);else if(o===xn)p=-2/(s-a),_=-(s+a)/(s-a);else if(o===wr)p=-1/(s-a),_=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Di=new N,on=new mt,If=new N(0,0,0),Uf=new N(1,1,1),Kn=new N,kr=new N,jt=new N,Rl=new mt,Pl=new si;class En{constructor(e=0,t=0,i=0,r=En.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],d=r[9],f=r[2],u=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Xe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,h),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Rl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pl.setFromEuler(this),this.setFromQuaternion(Pl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class ud{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ff=0;const Cl=new N,Ri=new si,Dn=new mt,zr=new N,cr=new N,Nf=new N,Bf=new si,Ll=new N(1,0,0),Il=new N(0,1,0),Ul=new N(0,0,1),Fl={type:"added"},Of={type:"removed"},Pi={type:"childadded",child:null},ja={type:"childremoved",child:null};class Ft extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new N,t=new En,i=new si,r=new N(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new ze}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ud,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(Ll,e)}rotateY(e){return this.rotateOnAxis(Il,e)}rotateZ(e){return this.rotateOnAxis(Ul,e)}translateOnAxis(e,t){return Cl.copy(e).applyQuaternion(this.quaternion),this.position.add(Cl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ll,e)}translateY(e){return this.translateOnAxis(Il,e)}translateZ(e){return this.translateOnAxis(Ul,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?zr.copy(e):zr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(cr,zr,this.up):Dn.lookAt(zr,cr,this.up),this.quaternion.setFromRotationMatrix(Dn),r&&(Dn.extractRotation(r.matrixWorld),Ri.setFromRotationMatrix(Dn),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fl),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Of),ja.child=e,this.dispatchEvent(ja),ja.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fl),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,e,Nf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,Bf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*i-a[8]*r,a[13]+=i-a[1]*t-a[5]*i-a[9]*r,a[14]+=r-a[2]*t-a[6]*i-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),f=s(e.shapes),u=s(e.skeletons),h=s(e.animations),p=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),h.length>0&&(i.animations=h),p.length>0&&(i.nodes=p)}return i.object=r,i;function s(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ft.DEFAULT_UP=new N(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Vi extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kf={type:"move"};class Ja{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=d.position.distanceTo(f.position),h=.02,p=.005;c.inputState.pinching&&u>h+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=h-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kf)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Vi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function $a(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ve{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=Tf(e,1),t=Xe(t,0,1),i=Xe(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=$a(s,a,e+1/3),this.g=$a(s,a,e),this.b=$a(s,a,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,t=$t){function i(a){a!==void 0&&parseFloat(a)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){const i=hd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vn(e.r),this.g=Vn(e.g),this.b=Vn(e.b),this}copyLinearToSRGB(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return Je.workingToColorSpace(Ot.copy(this),e),Math.round(Xe(Ot.r*255,0,255))*65536+Math.round(Xe(Ot.g*255,0,255))*256+Math.round(Xe(Ot.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Ot.copy(this),t);const i=Ot.r,r=Ot.g,a=Ot.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let l,c;const d=(o+s)/2;if(o===s)l=0,c=0;else{const f=s-o;switch(c=d<=.5?f/(s+o):f/(2-s-o),s){case i:l=(r-a)/f+(r<a?6:0);break;case r:l=(a-i)/f+2;break;case a:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=$t){Je.workingToColorSpace(Ot.copy(this),e);const t=Ot.r,i=Ot.g,r=Ot.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(jn),this.setHSL(jn.h+e,jn.s+t,jn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(jn),e.getHSL(Vr);const i=Xa(jn.h,Vr.h,t),r=Xa(jn.s,Vr.s,t),a=Xa(jn.l,Vr.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Ve;Ve.NAMES=hd;class zf extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ln=new N,Rn=new N,Qa=new N,Pn=new N,Ci=new N,Li=new N,Nl=new N,es=new N,ts=new N,ns=new N,is=new _t,rs=new _t,as=new _t;class un{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ln.subVectors(e,t),r.cross(ln);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){ln.subVectors(r,t),Rn.subVectors(i,t),Qa.subVectors(e,t);const s=ln.dot(ln),o=ln.dot(Rn),l=ln.dot(Qa),c=Rn.dot(Rn),d=Rn.dot(Qa),f=s*c-o*o;if(f===0)return a.set(0,0,0),null;const u=1/f,h=(c*l-o*d)*u,p=(s*d-o*l)*u;return a.set(1-h-p,p,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(e,t,i,r,a,s,o,l){return this.getBarycoord(e,t,i,r,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Pn.x),l.addScaledVector(s,Pn.y),l.addScaledVector(o,Pn.z),l)}static getInterpolatedAttribute(e,t,i,r,a,s){return is.setScalar(0),rs.setScalar(0),as.setScalar(0),is.fromBufferAttribute(e,t),rs.fromBufferAttribute(e,i),as.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(is,a.x),s.addScaledVector(rs,a.y),s.addScaledVector(as,a.z),s}static isFrontFacing(e,t,i,r){return ln.subVectors(i,t),Rn.subVectors(e,t),ln.cross(Rn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),ln.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,a){return un.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let s,o;Ci.subVectors(r,i),Li.subVectors(a,i),es.subVectors(e,i);const l=Ci.dot(es),c=Li.dot(es);if(l<=0&&c<=0)return t.copy(i);ts.subVectors(e,r);const d=Ci.dot(ts),f=Li.dot(ts);if(d>=0&&f<=d)return t.copy(r);const u=l*f-d*c;if(u<=0&&l>=0&&d<=0)return s=l/(l-d),t.copy(i).addScaledVector(Ci,s);ns.subVectors(e,a);const h=Ci.dot(ns),p=Li.dot(ns);if(p>=0&&h<=p)return t.copy(a);const _=h*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(i).addScaledVector(Li,o);const g=d*p-h*f;if(g<=0&&f-d>=0&&h-p>=0)return Nl.subVectors(a,r),o=(f-d)/(f-d+(h-p)),t.copy(r).addScaledVector(Nl,o);const m=1/(g+_+u);return s=_*m,o=u*m,t.copy(i).addScaledVector(Ci,s).addScaledVector(Li,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class rr{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,cn):cn.fromBufferAttribute(a,s),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Hr.copy(i.boundingBox)),Hr.applyMatrix4(e.matrixWorld),this.union(Hr)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dr),Gr.subVectors(this.max,dr),Ii.subVectors(e.a,dr),Ui.subVectors(e.b,dr),Fi.subVectors(e.c,dr),Jn.subVectors(Ui,Ii),$n.subVectors(Fi,Ui),ci.subVectors(Ii,Fi);let t=[0,-Jn.z,Jn.y,0,-$n.z,$n.y,0,-ci.z,ci.y,Jn.z,0,-Jn.x,$n.z,0,-$n.x,ci.z,0,-ci.x,-Jn.y,Jn.x,0,-$n.y,$n.x,0,-ci.y,ci.x,0];return!ss(t,Ii,Ui,Fi,Gr)||(t=[1,0,0,0,1,0,0,0,1],!ss(t,Ii,Ui,Fi,Gr))?!1:(Wr.crossVectors(Jn,$n),t=[Wr.x,Wr.y,Wr.z],ss(t,Ii,Ui,Fi,Gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Cn=[new N,new N,new N,new N,new N,new N,new N,new N],cn=new N,Hr=new rr,Ii=new N,Ui=new N,Fi=new N,Jn=new N,$n=new N,ci=new N,dr=new N,Gr=new N,Wr=new N,di=new N;function ss(n,e,t,i,r){for(let a=0,s=n.length-3;a<=s;a+=3){di.fromArray(n,a);const o=r.x*Math.abs(di.x)+r.y*Math.abs(di.y)+r.z*Math.abs(di.z),l=e.dot(di),c=t.dot(di),d=i.dot(di);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Mt=new N,Xr=new pe;let Vf=0;class rn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Sl,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Xr.fromBufferAttribute(this,t),Xr.applyMatrix3(e),this.setXY(t,Xr.x,Xr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=lr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Xt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=lr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=lr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=lr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=lr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),r=Xt(r,this.array),a=Xt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sl&&(e.usage=this.usage),e}}class fd extends rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class pd extends rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Tt extends rn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Hf=new rr,ur=new N,os=new N;class Ca{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Hf.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ur.subVectors(e,this.center);const t=ur.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ur,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(os.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ur.copy(e.center).add(os)),this.expandByPoint(ur.copy(e.center).sub(os))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Gf=0;const tn=new mt,ls=new Ft,Ni=new N,Jt=new rr,hr=new rr,Rt=new N;class Wt extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=ir(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mf(e)?pd:fd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new ze().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,i){return tn.makeTranslation(e,t,i),this.applyMatrix4(tn),this}scale(e,t,i){return tn.makeScale(e,t,i),this.applyMatrix4(tn),this}lookAt(e){return ls.lookAt(e),ls.updateMatrix(),this.applyMatrix4(ls.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Tt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];Jt.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ca);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];hr.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(Jt.min,hr.min),Jt.expandByPoint(Rt),Rt.addVectors(Jt.max,hr.max),Jt.expandByPoint(Rt)):(Jt.expandByPoint(hr.min),Jt.expandByPoint(hr.max))}Jt.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)Rt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Rt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Rt.fromBufferAttribute(o,c),l&&(Ni.fromBufferAttribute(e,c),Rt.add(Ni)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new N,l[x]=new N;const c=new N,d=new N,f=new N,u=new pe,h=new pe,p=new pe,_=new N,g=new N;function m(x,b,W){c.fromBufferAttribute(i,x),d.fromBufferAttribute(i,b),f.fromBufferAttribute(i,W),u.fromBufferAttribute(a,x),h.fromBufferAttribute(a,b),p.fromBufferAttribute(a,W),d.sub(c),f.sub(c),h.sub(u),p.sub(u);const P=1/(h.x*p.y-p.x*h.y);isFinite(P)&&(_.copy(d).multiplyScalar(p.y).addScaledVector(f,-h.y).multiplyScalar(P),g.copy(f).multiplyScalar(h.x).addScaledVector(d,-p.x).multiplyScalar(P),o[x].add(_),o[b].add(_),o[W].add(_),l[x].add(g),l[b].add(g),l[W].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let x=0,b=S.length;x<b;++x){const W=S[x],P=W.start,k=W.count;for(let z=P,G=P+k;z<G;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const E=new N,y=new N,R=new N,w=new N;function D(x){R.fromBufferAttribute(r,x),w.copy(R);const b=o[x];E.copy(b),E.sub(R.multiplyScalar(R.dot(b))).normalize(),y.crossVectors(w,b);const P=y.dot(l[x])<0?-1:1;s.setXYZW(x,E.x,E.y,E.z,P)}for(let x=0,b=S.length;x<b;++x){const W=S[x],P=W.start,k=W.count;for(let z=P,G=P+k;z<G;z+=3)D(e.getX(z+0)),D(e.getX(z+1)),D(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,h=i.count;u<h;u++)i.setXYZ(u,0,0,0);const r=new N,a=new N,s=new N,o=new N,l=new N,c=new N,d=new N,f=new N;if(e)for(let u=0,h=e.count;u<h;u+=3){const p=e.getX(u+0),_=e.getX(u+1),g=e.getX(u+2);r.fromBufferAttribute(t,p),a.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),d.subVectors(s,a),f.subVectors(r,a),d.cross(f),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),o.add(d),l.add(d),c.add(d),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,h=t.count;u<h;u+=3)r.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),d.subVectors(s,a),f.subVectors(r,a),d.cross(f),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,u=new c.constructor(l.length*d);let h=0,p=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?h=l[_]*o.data.stride+o.offset:h=l[_]*d;for(let m=0;m<d;m++)u[p++]=c[h++]}return new rn(u,d,f)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let d=0,f=c.length;d<f;d++){const u=c[d],h=e(u,i);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,u=c.length;f<u;f++){const h=c[f];d.push(h.toJSON(e.data))}d.length>0&&(r[l]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const a=e.morphAttributes;for(const c in a){const d=[],f=a[c];for(let u=0,h=f.length;u<h;u++)d.push(f[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Wf=0;class ar extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=ir(),this.name="",this.type="Material",this.blending=Wi,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ds,this.blendDst=Rs,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ml,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(i.blending=this.blending),this.side!==ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ds&&(i.blendSrc=this.blendSrc),this.blendDst!==Rs&&(i.blendDst=this.blendDst),this.blendEquation!==gi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ml&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ln=new N,cs=new N,qr=new N,Qn=new N,ds=new N,Yr=new N,us=new N;class zo{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,t),Ln.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){cs.copy(e).add(t).multiplyScalar(.5),qr.copy(t).sub(e).normalize(),Qn.copy(this.origin).sub(cs);const a=e.distanceTo(t)*.5,s=-this.direction.dot(qr),o=Qn.dot(this.direction),l=-Qn.dot(qr),c=Qn.lengthSq(),d=Math.abs(1-s*s);let f,u,h,p;if(d>0)if(f=s*l-o,u=s*o-l,p=a*d,f>=0)if(u>=-p)if(u<=p){const _=1/d;f*=_,u*=_,h=f*(f+s*u+2*o)+u*(s*f+u+2*l)+c}else u=a,f=Math.max(0,-(s*u+o)),h=-f*f+u*(u+2*l)+c;else u=-a,f=Math.max(0,-(s*u+o)),h=-f*f+u*(u+2*l)+c;else u<=-p?(f=Math.max(0,-(-s*a+o)),u=f>0?-a:Math.min(Math.max(-a,-l),a),h=-f*f+u*(u+2*l)+c):u<=p?(f=0,u=Math.min(Math.max(-a,-l),a),h=u*(u+2*l)+c):(f=Math.max(0,-(s*a+o)),u=f>0?a:Math.min(Math.max(-a,-l),a),h=-f*f+u*(u+2*l)+c);else u=s>0?-a:a,f=Math.max(0,-(s*u+o)),h=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(cs).addScaledVector(qr,u),h}intersectSphere(e,t){Ln.subVectors(e.center,this.origin);const i=Ln.dot(this.direction),r=Ln.dot(Ln)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),d>=0?(a=(e.min.y-u.y)*d,s=(e.max.y-u.y)*d):(a=(e.max.y-u.y)*d,s=(e.min.y-u.y)*d),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,t,i,r,a){ds.subVectors(t,e),Yr.subVectors(i,e),us.crossVectors(ds,Yr);let s=this.direction.dot(us),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Qn.subVectors(this.origin,e);const l=o*this.direction.dot(Yr.crossVectors(Qn,Yr));if(l<0)return null;const c=o*this.direction.dot(ds.cross(Qn));if(c<0||l+c>s)return null;const d=-o*Qn.dot(us);return d<0?null:this.at(d/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class La extends ar{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bl=new mt,ui=new zo,Zr=new Ca,Ol=new N,Kr=new N,jr=new N,Jr=new N,hs=new N,$r=new N,kl=new N,Qr=new N;class St extends Ft{constructor(e=new Wt,t=new La){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){$r.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const d=o[l],f=a[l];d!==0&&(hs.fromBufferAttribute(f,e),s?$r.addScaledVector(hs,d):$r.addScaledVector(hs.sub(t),d))}t.add($r)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zr.copy(i.boundingSphere),Zr.applyMatrix4(a),ui.copy(e.ray).recast(e.near),!(Zr.containsPoint(ui.origin)===!1&&(ui.intersectSphere(Zr,Ol)===null||ui.origin.distanceToSquared(Ol)>(e.far-e.near)**2))&&(Bl.copy(a).invert(),ui.copy(e.ray).applyMatrix4(Bl),!(i.boundingBox!==null&&ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ui)))}_computeIntersections(e,t,i){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,d=a.attributes.uv1,f=a.attributes.normal,u=a.groups,h=a.drawRange;if(o!==null)if(Array.isArray(s))for(let p=0,_=u.length;p<_;p++){const g=u[p],m=s[g.materialIndex],S=Math.max(g.start,h.start),E=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let y=S,R=E;y<R;y+=3){const w=o.getX(y),D=o.getX(y+1),x=o.getX(y+2);r=ea(this,m,e,i,c,d,f,w,D,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const p=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let g=p,m=_;g<m;g+=3){const S=o.getX(g),E=o.getX(g+1),y=o.getX(g+2);r=ea(this,s,e,i,c,d,f,S,E,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let p=0,_=u.length;p<_;p++){const g=u[p],m=s[g.materialIndex],S=Math.max(g.start,h.start),E=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let y=S,R=E;y<R;y+=3){const w=y,D=y+1,x=y+2;r=ea(this,m,e,i,c,d,f,w,D,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const p=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let g=p,m=_;g<m;g+=3){const S=g,E=g+1,y=g+2;r=ea(this,s,e,i,c,d,f,S,E,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Xf(n,e,t,i,r,a,s,o){let l;if(e.side===Zt?l=i.intersectTriangle(s,a,r,!0,o):l=i.intersectTriangle(r,a,s,e.side===ai,o),l===null)return null;Qr.copy(o),Qr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Qr);return c<t.near||c>t.far?null:{distance:c,point:Qr.clone(),object:n}}function ea(n,e,t,i,r,a,s,o,l,c){n.getVertexPosition(o,Kr),n.getVertexPosition(l,jr),n.getVertexPosition(c,Jr);const d=Xf(n,e,t,i,Kr,jr,Jr,kl);if(d){const f=new N;un.getBarycoord(kl,Kr,jr,Jr,f),r&&(d.uv=un.getInterpolatedAttribute(r,o,l,c,f,new pe)),a&&(d.uv1=un.getInterpolatedAttribute(a,o,l,c,f,new pe)),s&&(d.normal=un.getInterpolatedAttribute(s,o,l,c,f,new N),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new N,materialIndex:0};un.getNormal(Kr,jr,Jr,u.normal),d.face=u,d.barycoord=f}return d}class qf extends Gt{constructor(e=null,t=1,i=1,r,a,s,o,l,c=It,d=It,f,u){super(null,s,o,l,c,d,r,a,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fs=new N,Yf=new N,Zf=new ze;class ti{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=fs.subVectors(i,t).cross(Yf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(fs),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Zf.getNormalMatrix(e),r=this.coplanarPoint(fs).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new Ca,Kf=new pe(.5,.5),ta=new N;class Vo{constructor(e=new ti,t=new ti,i=new ti,r=new ti,a=new ti,s=new ti){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xn,i=!1){const r=this.planes,a=e.elements,s=a[0],o=a[1],l=a[2],c=a[3],d=a[4],f=a[5],u=a[6],h=a[7],p=a[8],_=a[9],g=a[10],m=a[11],S=a[12],E=a[13],y=a[14],R=a[15];if(r[0].setComponents(c-s,h-d,m-p,R-S).normalize(),r[1].setComponents(c+s,h+d,m+p,R+S).normalize(),r[2].setComponents(c+o,h+f,m+_,R+E).normalize(),r[3].setComponents(c-o,h-f,m-_,R-E).normalize(),i)r[4].setComponents(l,u,g,y).normalize(),r[5].setComponents(c-l,h-u,m-g,R-y).normalize();else if(r[4].setComponents(c-l,h-u,m-g,R-y).normalize(),t===xn)r[5].setComponents(c+l,h+u,m+g,R+y).normalize();else if(t===wr)r[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(e){hi.center.set(0,0,0);const t=Kf.distanceTo(e.center);return hi.radius=.7071067811865476+t,hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ta.x=r.normal.x>0?e.max.x:e.min.x,ta.y=r.normal.y>0?e.max.y:e.min.y,ta.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ta)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ho extends ar{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ba=new N,Ta=new N,zl=new mt,fr=new zo,na=new Ca,ps=new N,Vl=new N;class md extends Ft{constructor(e=new Wt,t=new Ho){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)ba.fromBufferAttribute(t,r-1),Ta.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ba.distanceTo(Ta);e.setAttribute("lineDistance",new Tt(i,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),na.copy(i.boundingSphere),na.applyMatrix4(r),na.radius+=a,e.ray.intersectsSphere(na)===!1)return;zl.copy(r).invert(),fr.copy(e.ray).applyMatrix4(zl);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){const h=Math.max(0,s.start),p=Math.min(d.count,s.start+s.count);for(let _=h,g=p-1;_<g;_+=c){const m=d.getX(_),S=d.getX(_+1),E=ia(this,e,fr,l,m,S,_);E&&t.push(E)}if(this.isLineLoop){const _=d.getX(p-1),g=d.getX(h),m=ia(this,e,fr,l,_,g,p-1);m&&t.push(m)}}else{const h=Math.max(0,s.start),p=Math.min(u.count,s.start+s.count);for(let _=h,g=p-1;_<g;_+=c){const m=ia(this,e,fr,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){const _=ia(this,e,fr,l,p-1,h,p-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function ia(n,e,t,i,r,a,s){const o=n.geometry.attributes.position;if(ba.fromBufferAttribute(o,r),Ta.fromBufferAttribute(o,a),t.distanceSqToSegment(ba,Ta,ps,Vl)>i)return;ps.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ps);if(!(c<e.near||c>e.far))return{distance:c,point:Vl.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Hl=new N,Gl=new N;class jf extends md{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)Hl.fromBufferAttribute(t,r),Gl.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Hl.distanceTo(Gl);e.setAttribute("lineDistance",new Tt(i,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gd extends Gt{constructor(e=[],t=yi,i,r,a,s,o,l,c,d){super(e,t,i,r,a,s,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dr extends Gt{constructor(e,t,i=Sn,r,a,s,o=It,l=It,c,d=Wn,f=1){if(d!==Wn&&d!==xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,r,a,s,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ko(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Jf extends Dr{constructor(e,t=Sn,i=yi,r,a,s=It,o=It,l,c=Wn){const d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,i,r,a,s,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class vd extends Gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xn extends Wt{constructor(e=1,t=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],d=[],f=[];let u=0,h=0;p("z","y","x",-1,-1,i,t,e,s,a,0),p("z","y","x",1,-1,i,t,-e,s,a,1),p("x","z","y",1,1,e,i,t,r,s,2),p("x","z","y",1,-1,e,i,-t,r,s,3),p("x","y","z",1,-1,e,t,i,r,a,4),p("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(f,2));function p(_,g,m,S,E,y,R,w,D,x,b){const W=y/D,P=R/x,k=y/2,z=R/2,G=w/2,A=D+1,C=x+1;let U=0,Y=0;const J=new N;for(let $=0;$<C;$++){const re=$*P-z;for(let ce=0;ce<A;ce++){const De=ce*W-k;J[_]=De*S,J[g]=re*E,J[m]=G,c.push(J.x,J.y,J.z),J[_]=0,J[g]=0,J[m]=w>0?1:-1,d.push(J.x,J.y,J.z),f.push(ce/D),f.push(1-$/x),U+=1}}for(let $=0;$<x;$++)for(let re=0;re<D;re++){const ce=u+re+A*$,De=u+re+A*($+1),it=u+(re+1)+A*($+1),je=u+(re+1)+A*$;l.push(ce,De,je),l.push(De,it,je),Y+=6}o.addGroup(h,Y,b),h+=Y,u+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class $i extends Wt{constructor(e=1,t=1,i=1,r=32,a=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),a=Math.floor(a);const d=[],f=[],u=[],h=[];let p=0;const _=[],g=i/2;let m=0;S(),s===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(d),this.setAttribute("position",new Tt(f,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(h,2));function S(){const y=new N,R=new N;let w=0;const D=(t-e)/i;for(let x=0;x<=a;x++){const b=[],W=x/a,P=W*(t-e)+e;for(let k=0;k<=r;k++){const z=k/r,G=z*l+o,A=Math.sin(G),C=Math.cos(G);R.x=P*A,R.y=-W*i+g,R.z=P*C,f.push(R.x,R.y,R.z),y.set(A,D,C).normalize(),u.push(y.x,y.y,y.z),h.push(z,1-W),b.push(p++)}_.push(b)}for(let x=0;x<r;x++)for(let b=0;b<a;b++){const W=_[b][x],P=_[b+1][x],k=_[b+1][x+1],z=_[b][x+1];(e>0||b!==0)&&(d.push(W,P,z),w+=3),(t>0||b!==a-1)&&(d.push(P,k,z),w+=3)}c.addGroup(m,w,0),m+=w}function E(y){const R=p,w=new pe,D=new N;let x=0;const b=y===!0?e:t,W=y===!0?1:-1;for(let k=1;k<=r;k++)f.push(0,g*W,0),u.push(0,W,0),h.push(.5,.5),p++;const P=p;for(let k=0;k<=r;k++){const G=k/r*l+o,A=Math.cos(G),C=Math.sin(G);D.x=b*C,D.y=g*W,D.z=b*A,f.push(D.x,D.y,D.z),u.push(0,W,0),w.x=A*.5+.5,w.y=C*.5*W+.5,h.push(w.x,w.y),p++}for(let k=0;k<r;k++){const z=R+k,G=P+k;y===!0?d.push(G,G+1,z):d.push(G+1,G,z),x+=3}c.addGroup(m,x,y===!0?1:2),m+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Tn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ie("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),a=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const a=i.length;let s;t?s=t:s=e*i[a-1];let o=0,l=a-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-s,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===s)return r/(a-1);const d=i[r],u=i[r+1]-d,h=(s-d)/u;return(r+h)/(a-1)}getTangent(e,t){let r=e-1e-4,a=e+1e-4;r<0&&(r=0),a>1&&(a=1);const s=this.getPoint(r),o=this.getPoint(a),l=t||(s.isVector2?new pe:new N);return l.copy(o).sub(s).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new N,r=[],a=[],s=[],o=new N,l=new mt;for(let h=0;h<=e;h++){const p=h/e;r[h]=this.getTangentAt(p,new N)}a[0]=new N,s[0]=new N;let c=Number.MAX_VALUE;const d=Math.abs(r[0].x),f=Math.abs(r[0].y),u=Math.abs(r[0].z);d<=c&&(c=d,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],o),s[0].crossVectors(r[0],a[0]);for(let h=1;h<=e;h++){if(a[h]=a[h-1].clone(),s[h]=s[h-1].clone(),o.crossVectors(r[h-1],r[h]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(Xe(r[h-1].dot(r[h]),-1,1));a[h].applyMatrix4(l.makeRotationAxis(o,p))}s[h].crossVectors(r[h],a[h])}if(t===!0){let h=Math.acos(Xe(a[0].dot(a[e]),-1,1));h/=e,r[0].dot(o.crossVectors(a[0],a[e]))>0&&(h=-h);for(let p=1;p<=e;p++)a[p].applyMatrix4(l.makeRotationAxis(r[p],h*p)),s[p].crossVectors(r[p],a[p])}return{tangents:r,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Go extends Tn{constructor(e=0,t=0,i=1,r=1,a=0,s=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new pe){const i=t,r=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(s?a=0:a=r),this.aClockwise===!0&&!s&&(a===r?a=-r:a=a-r);const o=this.aStartAngle+e*a;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,h=c-this.aY;l=u*d-h*f+this.aX,c=u*f+h*d+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class $f extends Go{constructor(e,t,i,r,a,s){super(e,t,i,i,r,a,s),this.isArcCurve=!0,this.type="ArcCurve"}}function Wo(){let n=0,e=0,t=0,i=0;function r(a,s,o,l){n=a,e=o,t=-3*a+3*s-2*o-l,i=2*a-2*s+o+l}return{initCatmullRom:function(a,s,o,l,c){r(s,o,c*(o-a),c*(l-s))},initNonuniformCatmullRom:function(a,s,o,l,c,d,f){let u=(s-a)/c-(o-a)/(c+d)+(o-s)/d,h=(o-s)/d-(l-s)/(d+f)+(l-o)/f;u*=d,h*=d,r(s,o,u,h)},calc:function(a){const s=a*a,o=s*a;return n+e*a+t*s+i*o}}}const ra=new N,ms=new Wo,gs=new Wo,vs=new Wo;class Qf extends Tn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new N){const i=t,r=this.points,a=r.length,s=(a-(this.closed?0:1))*e;let o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,d;this.closed||o>0?c=r[(o-1)%a]:(ra.subVectors(r[0],r[1]).add(r[0]),c=ra);const f=r[o%a],u=r[(o+1)%a];if(this.closed||o+2<a?d=r[(o+2)%a]:(ra.subVectors(r[a-1],r[a-2]).add(r[a-1]),d=ra),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(f),h),_=Math.pow(f.distanceToSquared(u),h),g=Math.pow(u.distanceToSquared(d),h);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),ms.initNonuniformCatmullRom(c.x,f.x,u.x,d.x,p,_,g),gs.initNonuniformCatmullRom(c.y,f.y,u.y,d.y,p,_,g),vs.initNonuniformCatmullRom(c.z,f.z,u.z,d.z,p,_,g)}else this.curveType==="catmullrom"&&(ms.initCatmullRom(c.x,f.x,u.x,d.x,this.tension),gs.initCatmullRom(c.y,f.y,u.y,d.y,this.tension),vs.initCatmullRom(c.z,f.z,u.z,d.z,this.tension));return i.set(ms.calc(l),gs.calc(l),vs.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new N().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Wl(n,e,t,i,r){const a=(i-e)*.5,s=(r-t)*.5,o=n*n,l=n*o;return(2*t-2*i+a+s)*l+(-3*t+3*i-2*a-s)*o+a*n+t}function ep(n,e){const t=1-n;return t*t*e}function tp(n,e){return 2*(1-n)*n*e}function np(n,e){return n*n*e}function Mr(n,e,t,i){return ep(n,e)+tp(n,t)+np(n,i)}function ip(n,e){const t=1-n;return t*t*t*e}function rp(n,e){const t=1-n;return 3*t*t*n*e}function ap(n,e){return 3*(1-n)*n*n*e}function sp(n,e){return n*n*n*e}function Sr(n,e,t,i,r){return ip(n,e)+rp(n,t)+ap(n,i)+sp(n,r)}class _d extends Tn{constructor(e=new pe,t=new pe,i=new pe,r=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new pe){const i=t,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(Sr(e,r.x,a.x,s.x,o.x),Sr(e,r.y,a.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class op extends Tn{constructor(e=new N,t=new N,i=new N,r=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new N){const i=t,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(Sr(e,r.x,a.x,s.x,o.x),Sr(e,r.y,a.y,s.y,o.y),Sr(e,r.z,a.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class xd extends Tn{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lp extends Tn{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yd extends Tn{constructor(e=new pe,t=new pe,i=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new pe){const i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(Mr(e,r.x,a.x,s.x),Mr(e,r.y,a.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cp extends Tn{constructor(e=new N,t=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new N){const i=t,r=this.v0,a=this.v1,s=this.v2;return i.set(Mr(e,r.x,a.x,s.x),Mr(e,r.y,a.y,s.y),Mr(e,r.z,a.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Md extends Tn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){const i=t,r=this.points,a=(r.length-1)*e,s=Math.floor(a),o=a-s,l=r[s===0?s:s-1],c=r[s],d=r[s>r.length-2?r.length-1:s+1],f=r[s>r.length-3?r.length-1:s+2];return i.set(Wl(o,l.x,c.x,d.x,f.x),Wl(o,l.y,c.y,d.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new pe().fromArray(r))}return this}}var Xl=Object.freeze({__proto__:null,ArcCurve:$f,CatmullRomCurve3:Qf,CubicBezierCurve:_d,CubicBezierCurve3:op,EllipseCurve:Go,LineCurve:xd,LineCurve3:lp,QuadraticBezierCurve:yd,QuadraticBezierCurve3:cp,SplineCurve:Md});class dp extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xl[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let a=0;for(;a<r.length;){if(r[a]>=i){const s=r[a]-i,o=this.curves[a],l=o.getLength(),c=l===0?0:1-s/l;return o.getPointAt(c,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,a=this.curves;r<a.length;r++){const s=a[r],o=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,l=s.getPoints(o);for(let c=0;c<l.length;c++){const d=l[c];i&&i.equals(d)||(t.push(d),i=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Xl[r.type]().fromJSON(r))}return this}}class ql extends dp{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new xd(this.currentPoint.clone(),new pe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const a=new yd(this.currentPoint.clone(),new pe(e,t),new pe(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,s){const o=new _d(this.currentPoint.clone(),new pe(e,t),new pe(i,r),new pe(a,s));return this.curves.push(o),this.currentPoint.set(a,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Md(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,s){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,a,s),this}absarc(e,t,i,r,a,s){return this.absellipse(e,t,i,i,r,a,s),this}ellipse(e,t,i,r,a,s,o,l){const c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,i,r,a,s,o,l),this}absellipse(e,t,i,r,a,s,o,l){const c=new Go(e,t,i,r,a,s,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Sd extends ql{constructor(e){super(e),this.uuid=ir(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new ql().fromJSON(r))}return this}}function up(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let a=Ed(n,0,r,t,!0);const s=[];if(!a||a.next===a.prev)return s;let o,l,c;if(i&&(a=gp(n,e,a,t)),n.length>80*t){o=n[0],l=n[1];let d=o,f=l;for(let u=t;u<r;u+=t){const h=n[u],p=n[u+1];h<o&&(o=h),p<l&&(l=p),h>d&&(d=h),p>f&&(f=p)}c=Math.max(d-o,f-l),c=c!==0?32767/c:0}return Rr(a,s,t,o,l,c,0),s}function Ed(n,e,t,i,r){let a;if(r===wp(n,e,t,i)>0)for(let s=e;s<t;s+=i)a=Yl(s/i|0,n[s],n[s+1],a);else for(let s=t-i;s>=e;s-=i)a=Yl(s/i|0,n[s],n[s+1],a);return a&&Qi(a,a.next)&&(Cr(a),a=a.next),a}function Mi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Qi(t,t.next)||gt(t.prev,t,t.next)===0)){if(Cr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Rr(n,e,t,i,r,a,s){if(!n)return;!s&&a&&Mp(n,i,r,a);let o=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(a?fp(n,i,r,a):hp(n)){e.push(l.i,n.i,c.i),Cr(n),n=c.next,o=c.next;continue}if(n=c,n===o){s?s===1?(n=pp(Mi(n),e),Rr(n,e,t,i,r,a,2)):s===2&&mp(n,e,t,i,r,a):Rr(Mi(n),e,t,i,r,a,1);break}}}function hp(n){const e=n.prev,t=n,i=n.next;if(gt(e,t,i)>=0)return!1;const r=e.x,a=t.x,s=i.x,o=e.y,l=t.y,c=i.y,d=Math.min(r,a,s),f=Math.min(o,l,c),u=Math.max(r,a,s),h=Math.max(o,l,c);let p=i.next;for(;p!==e;){if(p.x>=d&&p.x<=u&&p.y>=f&&p.y<=h&&vr(r,o,a,l,s,c,p.x,p.y)&&gt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function fp(n,e,t,i){const r=n.prev,a=n,s=n.next;if(gt(r,a,s)>=0)return!1;const o=r.x,l=a.x,c=s.x,d=r.y,f=a.y,u=s.y,h=Math.min(o,l,c),p=Math.min(d,f,u),_=Math.max(o,l,c),g=Math.max(d,f,u),m=xo(h,p,e,t,i),S=xo(_,g,e,t,i);let E=n.prevZ,y=n.nextZ;for(;E&&E.z>=m&&y&&y.z<=S;){if(E.x>=h&&E.x<=_&&E.y>=p&&E.y<=g&&E!==r&&E!==s&&vr(o,d,l,f,c,u,E.x,E.y)&&gt(E.prev,E,E.next)>=0||(E=E.prevZ,y.x>=h&&y.x<=_&&y.y>=p&&y.y<=g&&y!==r&&y!==s&&vr(o,d,l,f,c,u,y.x,y.y)&&gt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;E&&E.z>=m;){if(E.x>=h&&E.x<=_&&E.y>=p&&E.y<=g&&E!==r&&E!==s&&vr(o,d,l,f,c,u,E.x,E.y)&&gt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;y&&y.z<=S;){if(y.x>=h&&y.x<=_&&y.y>=p&&y.y<=g&&y!==r&&y!==s&&vr(o,d,l,f,c,u,y.x,y.y)&&gt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function pp(n,e){let t=n;do{const i=t.prev,r=t.next.next;!Qi(i,r)&&Td(i,t,t.next,r)&&Pr(i,r)&&Pr(r,i)&&(e.push(i.i,t.i,r.i),Cr(t),Cr(t.next),t=n=r),t=t.next}while(t!==n);return Mi(t)}function mp(n,e,t,i,r,a){let s=n;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&bp(s,o)){let l=Ad(s,o);s=Mi(s,s.next),l=Mi(l,l.next),Rr(s,e,t,i,r,a,0),Rr(l,e,t,i,r,a,0);return}o=o.next}s=s.next}while(s!==n)}function gp(n,e,t,i){const r=[];for(let a=0,s=e.length;a<s;a++){const o=e[a]*i,l=a<s-1?e[a+1]*i:n.length,c=Ed(n,o,l,i,!1);c===c.next&&(c.steiner=!0),r.push(Ep(c))}r.sort(vp);for(let a=0;a<r.length;a++)t=_p(r[a],t);return t}function vp(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function _p(n,e){const t=xp(n,e);if(!t)return e;const i=Ad(t,n);return Mi(i,i.next),Mi(t,t.next)}function xp(n,e){let t=e;const i=n.x,r=n.y;let a=-1/0,s;if(Qi(n,t))return t;do{if(Qi(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>a&&(a=f,s=t.x<t.next.x?t:t.next,f===i))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,l=s.x,c=s.y;let d=1/0;t=s;do{if(i>=t.x&&t.x>=l&&i!==t.x&&bd(r<c?i:a,r,l,c,r<c?a:i,r,t.x,t.y)){const f=Math.abs(r-t.y)/(i-t.x);Pr(t,n)&&(f<d||f===d&&(t.x>s.x||t.x===s.x&&yp(s,t)))&&(s=t,d=f)}t=t.next}while(t!==o);return s}function yp(n,e){return gt(n.prev,n,e.prev)<0&&gt(e.next,n,n.next)<0}function Mp(n,e,t,i){let r=n;do r.z===0&&(r.z=xo(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Sp(r)}function Sp(n){let e,t=1;do{let i=n,r;n=null;let a=null;for(e=0;i;){e++;let s=i,o=0;for(let c=0;c<t&&(o++,s=s.nextZ,!!s);c++);let l=t;for(;o>0||l>0&&s;)o!==0&&(l===0||!s||i.z<=s.z)?(r=i,i=i.nextZ,o--):(r=s,s=s.nextZ,l--),a?a.nextZ=r:n=r,r.prevZ=a,a=r;i=s}a.nextZ=null,t*=2}while(e>1);return n}function xo(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Ep(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function bd(n,e,t,i,r,a,s,o){return(r-s)*(e-o)>=(n-s)*(a-o)&&(n-s)*(i-o)>=(t-s)*(e-o)&&(t-s)*(a-o)>=(r-s)*(i-o)}function vr(n,e,t,i,r,a,s,o){return!(n===s&&e===o)&&bd(n,e,t,i,r,a,s,o)}function bp(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Tp(n,e)&&(Pr(n,e)&&Pr(e,n)&&Ap(n,e)&&(gt(n.prev,n,e.prev)||gt(n,e.prev,e))||Qi(n,e)&&gt(n.prev,n,n.next)>0&&gt(e.prev,e,e.next)>0)}function gt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Qi(n,e){return n.x===e.x&&n.y===e.y}function Td(n,e,t,i){const r=sa(gt(n,e,t)),a=sa(gt(n,e,i)),s=sa(gt(t,i,n)),o=sa(gt(t,i,e));return!!(r!==a&&s!==o||r===0&&aa(n,t,e)||a===0&&aa(n,i,e)||s===0&&aa(t,n,i)||o===0&&aa(t,e,i))}function aa(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function sa(n){return n>0?1:n<0?-1:0}function Tp(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Td(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Pr(n,e){return gt(n.prev,n,n.next)<0?gt(n,e,n.next)>=0&&gt(n,n.prev,e)>=0:gt(n,e,n.prev)<0||gt(n,n.next,e)<0}function Ap(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,a=(n.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&r<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Ad(n,e){const t=yo(n.i,n.x,n.y),i=yo(e.i,e.x,e.y),r=n.next,a=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,a.next=i,i.prev=a,i}function Yl(n,e,t,i){const r=yo(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Cr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function yo(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function wp(n,e,t,i){let r=0;for(let a=e,s=t-i;a<t;a+=i)r+=(n[s]-n[a])*(n[a+1]+n[s+1]),s=a;return r}class Dp{static triangulate(e,t,i=2){return up(e,t,i)}}class Er{static area(e){const t=e.length;let i=0;for(let r=t-1,a=0;a<t;r=a++)i+=e[r].x*e[a].y-e[a].x*e[r].y;return i*.5}static isClockWise(e){return Er.area(e)<0}static triangulateShape(e,t){const i=[],r=[],a=[];Zl(e),Kl(i,e);let s=e.length;t.forEach(Zl);for(let l=0;l<t.length;l++)r.push(s),s+=t[l].length,Kl(i,t[l]);const o=Dp.triangulate(i,r);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}}function Zl(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Kl(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Ia extends Wt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,f=e/o,u=t/l,h=[],p=[],_=[],g=[];for(let m=0;m<d;m++){const S=m*u-s;for(let E=0;E<c;E++){const y=E*f-a;p.push(y,-S,0),_.push(0,0,1),g.push(E/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){const E=S+c*m,y=S+c*(m+1),R=S+1+c*(m+1),w=S+1+c*m;h.push(E,y,w),h.push(y,R,w)}this.setIndex(h),this.setAttribute("position",new Tt(p,3)),this.setAttribute("normal",new Tt(_,3)),this.setAttribute("uv",new Tt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xo extends Wt{constructor(e=new Sd([new pe(0,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],a=[],s=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let d=0;d<e.length;d++)c(e[d]),this.addGroup(o,l,d),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Tt(r,3)),this.setAttribute("normal",new Tt(a,3)),this.setAttribute("uv",new Tt(s,2));function c(d){const f=r.length/3,u=d.extractPoints(t);let h=u.shape;const p=u.holes;Er.isClockWise(h)===!1&&(h=h.reverse());for(let g=0,m=p.length;g<m;g++){const S=p[g];Er.isClockWise(S)===!0&&(p[g]=S.reverse())}const _=Er.triangulateShape(h,p);for(let g=0,m=p.length;g<m;g++){const S=p[g];h=h.concat(S)}for(let g=0,m=h.length;g<m;g++){const S=h[g];r.push(S.x,S.y,0),a.push(0,0,1),s.push(S.x,S.y)}for(let g=0,m=_.length;g<m;g++){const S=_[g],E=S[0]+f,y=S[1]+f,R=S[2]+f;i.push(E,y,R),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Rp(t,e)}static fromJSON(e,t){const i=[];for(let r=0,a=e.shapes.length;r<a;r++){const s=t[e.shapes[r]];i.push(s)}return new Xo(i,e.curveSegments)}}function Rp(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}function er(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function zt(n){const e={};for(let t=0;t<n.length;t++){const i=er(n[t]);for(const r in i)e[r]=i[r]}return e}function Pp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function wd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Cp={clone:er,merge:zt};var Lp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends ar{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lp,this.fragmentShader=Ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=Pp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Up extends bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Nn extends ar{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ve(16777215),this.specular=new Ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ld,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Po,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fp extends ar{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ff,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Np extends ar{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Dd extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const _s=new mt,jl=new N,Jl=new N;class Bp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=Qt,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vo,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;jl.setFromMatrixPosition(e.matrixWorld),t.position.copy(jl),Jl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jl),t.updateMatrixWorld(),_s.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_s,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===wr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_s)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const oa=new N,la=new si,pn=new N;class Rd extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(oa,la,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,la,pn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(oa,la,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,la,pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ei=new N,$l=new pe,Ql=new pe;class nn extends Rd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_o*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_a*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _o*2*Math.atan(Math.tan(_a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ei.x,ei.y).multiplyScalar(-e/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ei.x,ei.y).multiplyScalar(-e/ei.z)}getViewSize(e,t){return this.getViewBounds(e,$l,Ql),t.subVectors(Ql,$l)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_a*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class qo extends Rd{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Op extends Bp{constructor(){super(new qo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ec extends Dd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Op}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class kp extends Dd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Bi=-90,Oi=1;class zp extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new nn(Bi,Oi,e,t);r.layers=this.layers,this.add(r);const a=new nn(Bi,Oi,e,t);a.layers=this.layers,this.add(a);const s=new nn(Bi,Oi,e,t);s.layers=this.layers,this.add(s);const o=new nn(Bi,Oi,e,t);o.layers=this.layers,this.add(o);const l=new nn(Bi,Oi,e,t);l.layers=this.layers,this.add(l);const c=new nn(Bi,Oi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===xn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,d]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(f,u,h),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Vp extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class tc{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Xe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Hp extends jf{constructor(e=10,t=10,i=4473924,r=8947848){i=new Ve(i),r=new Ve(r);const a=t/2,s=e/t,o=e/2,l=[],c=[];for(let u=0,h=0,p=-o;u<=t;u++,p+=s){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);const _=u===a?i:r;_.toArray(c,h),h+=3,_.toArray(c,h),h+=3,_.toArray(c,h),h+=3,_.toArray(c,h),h+=3}const d=new Wt;d.setAttribute("position",new Tt(l,3)),d.setAttribute("color",new Tt(c,3));const f=new Ho({vertexColors:!0,toneMapped:!1});super(d,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Gp extends Si{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ie("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function nc(n,e,t,i){const r=Wp(i);switch(t){case ad:return n*e;case od:return n*e/r.components*r.byteLength;case Uo:return n*e/r.components*r.byteLength;case ji:return n*e*2/r.components*r.byteLength;case Fo:return n*e*2/r.components*r.byteLength;case sd:return n*e*3/r.components*r.byteLength;case hn:return n*e*4/r.components*r.byteLength;case No:return n*e*4/r.components*r.byteLength;case pa:case ma:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ga:case va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zs:case Hs:return Math.max(n,16)*Math.max(e,8)/4;case ks:case Vs:return Math.max(n,8)*Math.max(e,8)/2;case Gs:case Ws:case qs:case Ys:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xs:case Zs:case Ks:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case js:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Js:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case $s:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Qs:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case eo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case to:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case no:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case io:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ro:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ao:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case so:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case oo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case lo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case co:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case uo:case ho:case fo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case po:case mo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case go:case vo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wp(n){switch(n){case Qt:case td:return{byteLength:1,components:1};case Tr:case nd:case Gn:return{byteLength:2,components:1};case Lo:case Io:return{byteLength:2,components:4};case Sn:case Co:case _n:return{byteLength:4,components:1};case id:case rd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ro}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ro);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Pd(){let n=null,e=!1,t=null,i=null;function r(a,s){t(a,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Xp(n){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,d),o.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const d=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,d);else{f.sort((h,p)=>h.start-p.start);let u=0;for(let h=1;h<f.length;h++){const p=f[u],_=f[h];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++u,f[u]=_)}f.length=u+1;for(let h=0,p=f.length;h<p;h++){const _=f[h];n.bufferSubData(c,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:a,update:s}}var qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$p=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,em=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,tm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,im=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,am=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,mm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_m=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ym=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Em=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Tm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Im=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Um=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Om=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,km=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Wm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ym=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Km=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$m=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ng=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ig=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ag=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,og=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_g=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Mg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Eg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ag=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Dg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Pg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ig=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ug=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Fg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ng=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Og=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Wg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$g=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ev=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,av=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ov=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_v=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ev=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:qp,alphahash_pars_fragment:Yp,alphamap_fragment:Zp,alphamap_pars_fragment:Kp,alphatest_fragment:jp,alphatest_pars_fragment:Jp,aomap_fragment:$p,aomap_pars_fragment:Qp,batching_pars_vertex:em,batching_vertex:tm,begin_vertex:nm,beginnormal_vertex:im,bsdfs:rm,iridescence_fragment:am,bumpmap_pars_fragment:sm,clipping_planes_fragment:om,clipping_planes_pars_fragment:lm,clipping_planes_pars_vertex:cm,clipping_planes_vertex:dm,color_fragment:um,color_pars_fragment:hm,color_pars_vertex:fm,color_vertex:pm,common:mm,cube_uv_reflection_fragment:gm,defaultnormal_vertex:vm,displacementmap_pars_vertex:_m,displacementmap_vertex:xm,emissivemap_fragment:ym,emissivemap_pars_fragment:Mm,colorspace_fragment:Sm,colorspace_pars_fragment:Em,envmap_fragment:bm,envmap_common_pars_fragment:Tm,envmap_pars_fragment:Am,envmap_pars_vertex:wm,envmap_physical_pars_fragment:Om,envmap_vertex:Dm,fog_vertex:Rm,fog_pars_vertex:Pm,fog_fragment:Cm,fog_pars_fragment:Lm,gradientmap_pars_fragment:Im,lightmap_pars_fragment:Um,lights_lambert_fragment:Fm,lights_lambert_pars_fragment:Nm,lights_pars_begin:Bm,lights_toon_fragment:km,lights_toon_pars_fragment:zm,lights_phong_fragment:Vm,lights_phong_pars_fragment:Hm,lights_physical_fragment:Gm,lights_physical_pars_fragment:Wm,lights_fragment_begin:Xm,lights_fragment_maps:qm,lights_fragment_end:Ym,logdepthbuf_fragment:Zm,logdepthbuf_pars_fragment:Km,logdepthbuf_pars_vertex:jm,logdepthbuf_vertex:Jm,map_fragment:$m,map_pars_fragment:Qm,map_particle_fragment:eg,map_particle_pars_fragment:tg,metalnessmap_fragment:ng,metalnessmap_pars_fragment:ig,morphinstance_vertex:rg,morphcolor_vertex:ag,morphnormal_vertex:sg,morphtarget_pars_vertex:og,morphtarget_vertex:lg,normal_fragment_begin:cg,normal_fragment_maps:dg,normal_pars_fragment:ug,normal_pars_vertex:hg,normal_vertex:fg,normalmap_pars_fragment:pg,clearcoat_normal_fragment_begin:mg,clearcoat_normal_fragment_maps:gg,clearcoat_pars_fragment:vg,iridescence_pars_fragment:_g,opaque_fragment:xg,packing:yg,premultiplied_alpha_fragment:Mg,project_vertex:Sg,dithering_fragment:Eg,dithering_pars_fragment:bg,roughnessmap_fragment:Tg,roughnessmap_pars_fragment:Ag,shadowmap_pars_fragment:wg,shadowmap_pars_vertex:Dg,shadowmap_vertex:Rg,shadowmask_pars_fragment:Pg,skinbase_vertex:Cg,skinning_pars_vertex:Lg,skinning_vertex:Ig,skinnormal_vertex:Ug,specularmap_fragment:Fg,specularmap_pars_fragment:Ng,tonemapping_fragment:Bg,tonemapping_pars_fragment:Og,transmission_fragment:kg,transmission_pars_fragment:zg,uv_pars_fragment:Vg,uv_pars_vertex:Hg,uv_vertex:Gg,worldpos_vertex:Wg,background_vert:Xg,background_frag:qg,backgroundCube_vert:Yg,backgroundCube_frag:Zg,cube_vert:Kg,cube_frag:jg,depth_vert:Jg,depth_frag:$g,distance_vert:Qg,distance_frag:ev,equirect_vert:tv,equirect_frag:nv,linedashed_vert:iv,linedashed_frag:rv,meshbasic_vert:av,meshbasic_frag:sv,meshlambert_vert:ov,meshlambert_frag:lv,meshmatcap_vert:cv,meshmatcap_frag:dv,meshnormal_vert:uv,meshnormal_frag:hv,meshphong_vert:fv,meshphong_frag:pv,meshphysical_vert:mv,meshphysical_frag:gv,meshtoon_vert:vv,meshtoon_frag:_v,points_vert:xv,points_frag:yv,shadow_vert:Mv,shadow_frag:Sv,sprite_vert:Ev,sprite_frag:bv},de={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},vn={basic:{uniforms:zt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:zt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:zt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:zt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:zt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ve(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:zt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:zt([de.points,de.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:zt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:zt([de.common,de.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:zt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:zt([de.sprite,de.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:zt([de.common,de.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:zt([de.lights,de.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};vn.physical={uniforms:zt([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const ca={r:0,b:0,g:0},fi=new En,Tv=new mt;function Av(n,e,t,i,r,a){const s=new Ve(0);let o=r===!0?0:1,l,c,d=null,f=0,u=null;function h(S){let E=S.isScene===!0?S.background:null;if(E&&E.isTexture){const y=S.backgroundBlurriness>0;E=e.get(E,y)}return E}function p(S){let E=!1;const y=h(S);y===null?g(s,o):y&&y.isColor&&(g(y,1),E=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(S,E){const y=h(E);y&&(y.isCubeTexture||y.mapping===Pa)?(c===void 0&&(c=new St(new Xn(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:er(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,w,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),fi.copy(E.backgroundRotation),fi.x*=-1,fi.y*=-1,fi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Tv.makeRotationFromEuler(fi)),c.material.toneMapped=Je.getTransfer(y.colorSpace)!==at,(d!==y||f!==y.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,f=y.version,u=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new St(new Ia(2,2),new bn({name:"BackgroundMaterial",uniforms:er(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Je.getTransfer(y.colorSpace)!==at,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,d=y,f=y.version,u=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function g(S,E){S.getRGB(ca,wd(n)),t.buffers.color.setClear(ca.r,ca.g,ca.b,E,a)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(S,E=1){s.set(S),o=E,g(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,g(s,o)},render:p,addToRenderList:_,dispose:m}}function wv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let a=r,s=!1;function o(P,k,z,G,A){let C=!1;const U=f(P,G,z,k);a!==U&&(a=U,c(a.object)),C=h(P,G,z,A),C&&p(P,G,z,A),A!==null&&e.update(A,n.ELEMENT_ARRAY_BUFFER),(C||s)&&(s=!1,y(P,k,z,G),A!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(A).buffer))}function l(){return n.createVertexArray()}function c(P){return n.bindVertexArray(P)}function d(P){return n.deleteVertexArray(P)}function f(P,k,z,G){const A=G.wireframe===!0;let C=i[k.id];C===void 0&&(C={},i[k.id]=C);const U=P.isInstancedMesh===!0?P.id:0;let Y=C[U];Y===void 0&&(Y={},C[U]=Y);let J=Y[z.id];J===void 0&&(J={},Y[z.id]=J);let $=J[A];return $===void 0&&($=u(l()),J[A]=$),$}function u(P){const k=[],z=[],G=[];for(let A=0;A<t;A++)k[A]=0,z[A]=0,G[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:z,attributeDivisors:G,object:P,attributes:{},index:null}}function h(P,k,z,G){const A=a.attributes,C=k.attributes;let U=0;const Y=z.getAttributes();for(const J in Y)if(Y[J].location>=0){const re=A[J];let ce=C[J];if(ce===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(ce=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(ce=P.instanceColor)),re===void 0||re.attribute!==ce||ce&&re.data!==ce.data)return!0;U++}return a.attributesNum!==U||a.index!==G}function p(P,k,z,G){const A={},C=k.attributes;let U=0;const Y=z.getAttributes();for(const J in Y)if(Y[J].location>=0){let re=C[J];re===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(re=P.instanceColor));const ce={};ce.attribute=re,re&&re.data&&(ce.data=re.data),A[J]=ce,U++}a.attributes=A,a.attributesNum=U,a.index=G}function _(){const P=a.newAttributes;for(let k=0,z=P.length;k<z;k++)P[k]=0}function g(P){m(P,0)}function m(P,k){const z=a.newAttributes,G=a.enabledAttributes,A=a.attributeDivisors;z[P]=1,G[P]===0&&(n.enableVertexAttribArray(P),G[P]=1),A[P]!==k&&(n.vertexAttribDivisor(P,k),A[P]=k)}function S(){const P=a.newAttributes,k=a.enabledAttributes;for(let z=0,G=k.length;z<G;z++)k[z]!==P[z]&&(n.disableVertexAttribArray(z),k[z]=0)}function E(P,k,z,G,A,C,U){U===!0?n.vertexAttribIPointer(P,k,z,A,C):n.vertexAttribPointer(P,k,z,G,A,C)}function y(P,k,z,G){_();const A=G.attributes,C=z.getAttributes(),U=k.defaultAttributeValues;for(const Y in C){const J=C[Y];if(J.location>=0){let $=A[Y];if($===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&($=P.instanceColor)),$!==void 0){const re=$.normalized,ce=$.itemSize,De=e.get($);if(De===void 0)continue;const it=De.buffer,je=De.type,j=De.bytesPerElement,ie=je===n.INT||je===n.UNSIGNED_INT||$.gpuType===Co;if($.isInterleavedBufferAttribute){const ee=$.data,Pe=ee.stride,Te=$.offset;if(ee.isInstancedInterleavedBuffer){for(let Le=0;Le<J.locationSize;Le++)m(J.location+Le,ee.meshPerAttribute);P.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Le=0;Le<J.locationSize;Le++)g(J.location+Le);n.bindBuffer(n.ARRAY_BUFFER,it);for(let Le=0;Le<J.locationSize;Le++)E(J.location+Le,ce/J.locationSize,je,re,Pe*j,(Te+ce/J.locationSize*Le)*j,ie)}else{if($.isInstancedBufferAttribute){for(let ee=0;ee<J.locationSize;ee++)m(J.location+ee,$.meshPerAttribute);P.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ee=0;ee<J.locationSize;ee++)g(J.location+ee);n.bindBuffer(n.ARRAY_BUFFER,it);for(let ee=0;ee<J.locationSize;ee++)E(J.location+ee,ce/J.locationSize,je,re,ce*j,ce/J.locationSize*ee*j,ie)}}else if(U!==void 0){const re=U[Y];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(J.location,re);break;case 3:n.vertexAttrib3fv(J.location,re);break;case 4:n.vertexAttrib4fv(J.location,re);break;default:n.vertexAttrib1fv(J.location,re)}}}}S()}function R(){b();for(const P in i){const k=i[P];for(const z in k){const G=k[z];for(const A in G){const C=G[A];for(const U in C)d(C[U].object),delete C[U];delete G[A]}}delete i[P]}}function w(P){if(i[P.id]===void 0)return;const k=i[P.id];for(const z in k){const G=k[z];for(const A in G){const C=G[A];for(const U in C)d(C[U].object),delete C[U];delete G[A]}}delete i[P.id]}function D(P){for(const k in i){const z=i[k];for(const G in z){const A=z[G];if(A[P.id]===void 0)continue;const C=A[P.id];for(const U in C)d(C[U].object),delete C[U];delete A[P.id]}}}function x(P){for(const k in i){const z=i[k],G=P.isInstancedMesh===!0?P.id:0,A=z[G];if(A!==void 0){for(const C in A){const U=A[C];for(const Y in U)d(U[Y].object),delete U[Y];delete A[C]}delete z[G],Object.keys(z).length===0&&delete i[k]}}}function b(){W(),s=!0,a!==r&&(a=r,c(a.object))}function W(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:W,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:g,disableUnusedAttributes:S}}function Dv(n,e,t){let i;function r(c){i=c}function a(c,d){n.drawArrays(i,c,d),t.update(d,i,1)}function s(c,d,f){f!==0&&(n.drawArraysInstanced(i,c,d,f),t.update(d,i,f))}function o(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let h=0;for(let p=0;p<f;p++)h+=d[p];t.update(h,i,1)}function l(c,d,f,u){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<c.length;p++)s(c[p],d[p],u[p]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,d,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=d[_]*u[_];t.update(p,i,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Rv(n,e,t,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(D){return!(D!==hn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const x=D===Gn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Qt&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==_n&&!x)}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(Ie("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:h,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:y,maxSamples:R,samples:w}}function Pv(n){const e=this;let t=null,i=0,r=!1,a=!1;const s=new ti,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const h=f.length!==0||u||i!==0||r;return r=u,i=f.length,h},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,u){t=d(f,u,0)},this.setState=function(f,u,h){const p=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,m=n.get(f);if(!r||p===null||p.length===0||a&&!g)a?d(null):c();else{const S=a?0:i,E=S*4;let y=m.clippingState||null;l.value=y,y=d(p,u,E,h);for(let R=0;R!==E;++R)y[R]=t[R];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,u,h,p){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=l.value,p!==!0||g===null){const m=h+_*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let E=0,y=h;E!==_;++E,y+=4)s.copy(f[E]).applyMatrix4(S,o),s.normal.toArray(g,y),g[y+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}const ii=4,ic=[.125,.215,.35,.446,.526,.582],vi=20,Cv=256,pr=new qo,rc=new Ve;let xs=null,ys=0,Ms=0,Ss=!1;const Lv=new N;class ac{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){const{size:s=256,position:o=Lv}=a;xs=this._renderer.getRenderTarget(),ys=this._renderer.getActiveCubeFace(),Ms=this._renderer.getActiveMipmapLevel(),Ss=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(xs,ys,Ms),this._renderer.xr.enabled=Ss,e.scissorTest=!1,ki(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yi||e.mapping===Ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xs=this._renderer.getRenderTarget(),ys=this._renderer.getActiveCubeFace(),Ms=this._renderer.getActiveMipmapLevel(),Ss=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Gn,format:hn,colorSpace:Ji,depthBuffer:!1},r=sc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sc(e,t,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Iv(a)),this._blurMaterial=Fv(a,e,t),this._ggxMaterial=Uv(a,e,t)}return r}_compileMaterial(e){const t=new St(new Wt,e);this._renderer.compile(t,pr)}_sceneToCubeUV(e,t,i,r,a){const l=new nn(90,1,t,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,h=f.toneMapping;f.getClearColor(rc),f.toneMapping=yn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new St(new Xn,new La({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let m=!1;const S=e.background;S?S.isColor&&(g.color.copy(S),e.background=null,m=!0):(g.color.copy(rc),m=!0);for(let E=0;E<6;E++){const y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+d[E],a.y,a.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+d[E],a.z)):(l.up.set(0,c[E],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+d[E]));const R=this._cubeSize;ki(r,y*R,E>2?R:0,R,R),f.setRenderTarget(r),m&&f.render(_,l),f.render(e,l)}f.toneMapping=h,f.autoClear=u,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===yi||e.mapping===Ki;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oc());const a=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=a;const o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;ki(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,pr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,a=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;const l=s.uniforms,c=i/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-d*d),u=0+c*1.25,h=f*u,{_lodMax:p}=this,_=this._sizeLods[i],g=3*_*(i>p-ii?i-p+ii:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=p-t,ki(a,g,m,3*_,2*_),r.setRenderTarget(a),r.render(o,pr),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=p-i,ki(e,g,m,3*_,2*_),r.setRenderTarget(e),r.render(o,pr)}_blur(e,t,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&et("blur direction must be either latitudinal or longitudinal!");const d=3,f=this._lodMeshes[r];f.material=c;const u=c.uniforms,h=this._sizeLods[i]-1,p=isFinite(a)?Math.PI/(2*h):2*Math.PI/(2*vi-1),_=a/p,g=isFinite(a)?1+Math.floor(d*_):vi;g>vi&&Ie(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${vi}`);const m=[];let S=0;for(let D=0;D<vi;++D){const x=D/_,b=Math.exp(-x*x/2);m.push(b),D===0?S+=b:D<g&&(S+=2*b)}for(let D=0;D<m.length;D++)m[D]=m[D]/S;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=m,u.latitudinal.value=s==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:E}=this;u.dTheta.value=p,u.mipInt.value=E-i;const y=this._sizeLods[r],R=3*y*(r>E-ii?r-E+ii:0),w=4*(this._cubeSize-y);ki(t,R,w,3*y,2*y),l.setRenderTarget(t),l.render(f,pr)}}function Iv(n){const e=[],t=[],i=[];let r=n;const a=n-ii+1+ic.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);e.push(o);let l=1/o;s>n-ii?l=ic[s-n+ii-1]:s===0&&(l=0),t.push(l);const c=1/(o-2),d=-c,f=1+c,u=[d,d,f,d,f,f,d,d,f,f,d,f],h=6,p=6,_=3,g=2,m=1,S=new Float32Array(_*p*h),E=new Float32Array(g*p*h),y=new Float32Array(m*p*h);for(let w=0;w<h;w++){const D=w%3*2/3-1,x=w>2?0:-1,b=[D,x,0,D+2/3,x,0,D+2/3,x+1,0,D,x,0,D+2/3,x+1,0,D,x+1,0];S.set(b,_*p*w),E.set(u,g*p*w);const W=[w,w,w,w,w,w];y.set(W,m*p*w)}const R=new Wt;R.setAttribute("position",new rn(S,_)),R.setAttribute("uv",new rn(E,g)),R.setAttribute("faceIndex",new rn(y,m)),i.push(new St(R,null)),r>ii&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function sc(n,e,t){const i=new Mn(n,e,t);return i.texture.mapping=Pa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ki(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Uv(n,e,t){return new bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Cv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ua(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Fv(n,e,t){const i=new Float32Array(vi),r=new N(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function oc(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function lc(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Ua(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Cd extends Mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new gd(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Xn(5,5,5),a=new bn({name:"CubemapFromEquirect",uniforms:er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:zn});a.uniforms.tEquirect.value=t;const s=new St(r,a),o=t.minFilter;return t.minFilter===_i&&(t.minFilter=kt),new zp(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}}function Nv(n){let e=new WeakMap,t=new WeakMap,i=null;function r(u,h=!1){return u==null?null:h?s(u):a(u)}function a(u){if(u&&u.isTexture){const h=u.mapping;if(h===Ha||h===Ga)if(e.has(u)){const p=e.get(u).texture;return o(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const _=new Cd(p.height);return _.fromEquirectangularTexture(n,u),e.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture){const h=u.mapping,p=h===Ha||h===Ga,_=h===yi||h===Ki;if(p||_){let g=t.get(u);const m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new ac(n)),g=p?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{const S=u.image;return p&&S&&S.height>0||_&&S&&l(S)?(i===null&&(i=new ac(n)),g=p?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",d),g.texture):null}}}return u}function o(u,h){return h===Ha?u.mapping=yi:h===Ga&&(u.mapping=Ki),u}function l(u){let h=0;const p=6;for(let _=0;_<p;_++)u[_]!==void 0&&h++;return h===p}function c(u){const h=u.target;h.removeEventListener("dispose",c);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function d(u){const h=u.target;h.removeEventListener("dispose",d);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function Bv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ea("WebGLRenderer: "+i+" extension not supported."),r}}}function Ov(n,e,t,i){const r={},a=new WeakMap;function s(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const p in u.attributes)e.remove(u.attributes[p]);u.removeEventListener("dispose",s),delete r[u.id];const h=a.get(u);h&&(e.remove(h),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return r[u.id]===!0||(u.addEventListener("dispose",s),r[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const h in u)e.update(u[h],n.ARRAY_BUFFER)}function c(f){const u=[],h=f.index,p=f.attributes.position;let _=0;if(p===void 0)return;if(h!==null){const S=h.array;_=h.version;for(let E=0,y=S.length;E<y;E+=3){const R=S[E+0],w=S[E+1],D=S[E+2];u.push(R,w,w,D,D,R)}}else{const S=p.array;_=p.version;for(let E=0,y=S.length/3-1;E<y;E+=3){const R=E+0,w=E+1,D=E+2;u.push(R,w,w,D,D,R)}}const g=new(p.count>=65535?pd:fd)(u,1);g.version=_;const m=a.get(f);m&&e.remove(m),a.set(f,g)}function d(f){const u=a.get(f);if(u){const h=f.index;h!==null&&u.version<h.version&&c(f)}else c(f);return a.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function kv(n,e,t){let i;function r(u){i=u}let a,s;function o(u){a=u.type,s=u.bytesPerElement}function l(u,h){n.drawElements(i,h,a,u*s),t.update(h,i,1)}function c(u,h,p){p!==0&&(n.drawElementsInstanced(i,h,a,u*s,p),t.update(h,i,p))}function d(u,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,a,u,0,p);let g=0;for(let m=0;m<p;m++)g+=h[m];t.update(g,i,1)}function f(u,h,p,_){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<u.length;m++)c(u[m]/s,h[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(i,h,0,a,u,0,_,0,p);let m=0;for(let S=0;S<p;S++)m+=h[S]*_[S];t.update(m,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function zv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:et("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Vv(n,e,t){const i=new WeakMap,r=new _t;function a(s,o,l){const c=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==f){let W=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",W)};var h=W;u!==void 0&&u.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let y=0;p===!0&&(y=1),_===!0&&(y=2),g===!0&&(y=3);let R=o.attributes.position.count*y,w=1;R>e.maxTextureSize&&(w=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const D=new Float32Array(R*w*4*f),x=new dd(D,R,w,f);x.type=_n,x.needsUpdate=!0;const b=y*4;for(let P=0;P<f;P++){const k=m[P],z=S[P],G=E[P],A=R*w*4*P;for(let C=0;C<k.count;C++){const U=C*b;p===!0&&(r.fromBufferAttribute(k,C),D[A+U+0]=r.x,D[A+U+1]=r.y,D[A+U+2]=r.z,D[A+U+3]=0),_===!0&&(r.fromBufferAttribute(z,C),D[A+U+4]=r.x,D[A+U+5]=r.y,D[A+U+6]=r.z,D[A+U+7]=0),g===!0&&(r.fromBufferAttribute(G,C),D[A+U+8]=r.x,D[A+U+9]=r.y,D[A+U+10]=r.z,D[A+U+11]=G.itemSize===4?r.w:1)}}u={count:f,texture:x,size:new pe(R,w)},i.set(o,u),o.addEventListener("dispose",W)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:a}}function Hv(n,e,t,i,r){let a=new WeakMap;function s(c){const d=r.render.frame,f=c.geometry,u=e.get(c,f);if(a.get(u)!==d&&(e.update(u),a.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==d&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),a.set(c,d))),c.isSkinnedMesh){const h=c.skeleton;a.get(h)!==d&&(h.update(),a.set(h,d))}return u}function o(){a=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:s,dispose:o}}const Gv={[Yc]:"LINEAR_TONE_MAPPING",[Zc]:"REINHARD_TONE_MAPPING",[Kc]:"CINEON_TONE_MAPPING",[jc]:"ACES_FILMIC_TONE_MAPPING",[$c]:"AGX_TONE_MAPPING",[Qc]:"NEUTRAL_TONE_MAPPING",[Jc]:"CUSTOM_TONE_MAPPING"};function Wv(n,e,t,i,r){const a=new Mn(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),s=new Mn(e,t,{type:Gn,depthBuffer:!1,stencilBuffer:!1}),o=new Wt;o.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Tt([0,2,0,0,2,0],2));const l=new Up({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new St(o,l),d=new qo(-1,1,1,-1,0,1);let f=null,u=null,h=!1,p,_=null,g=[],m=!1;this.setSize=function(S,E){a.setSize(S,E),s.setSize(S,E);for(let y=0;y<g.length;y++){const R=g[y];R.setSize&&R.setSize(S,E)}},this.setEffects=function(S){g=S,m=g.length>0&&g[0].isRenderPass===!0;const E=a.width,y=a.height;for(let R=0;R<g.length;R++){const w=g[R];w.setSize&&w.setSize(E,y)}},this.begin=function(S,E){if(h||S.toneMapping===yn&&g.length===0)return!1;if(_=E,E!==null){const y=E.width,R=E.height;(a.width!==y||a.height!==R)&&this.setSize(y,R)}return m===!1&&S.setRenderTarget(a),p=S.toneMapping,S.toneMapping=yn,!0},this.hasRenderPass=function(){return m},this.end=function(S,E){S.toneMapping=p,h=!0;let y=a,R=s;for(let w=0;w<g.length;w++){const D=g[w];if(D.enabled!==!1&&(D.render(S,R,y,E),D.needsSwap!==!1)){const x=y;y=R,R=x}}if(f!==S.outputColorSpace||u!==S.toneMapping){f=S.outputColorSpace,u=S.toneMapping,l.defines={},Je.getTransfer(f)===at&&(l.defines.SRGB_TRANSFER="");const w=Gv[u];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,S.setRenderTarget(_),S.render(c,d),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){a.dispose(),s.dispose(),o.dispose(),l.dispose()}}const Ld=new Gt,Mo=new Dr(1,1),Id=new dd,Ud=new Lf,Fd=new gd,cc=[],dc=[],uc=new Float32Array(16),hc=new Float32Array(9),fc=new Float32Array(4);function sr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=cc[r];if(a===void 0&&(a=new Float32Array(r),cc[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(a,o)}return a}function At(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Fa(n,e){let t=dc[e];t===void 0&&(t=new Int32Array(e),dc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Xv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function qv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function Yv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function Zv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function Kv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;fc.set(i),n.uniformMatrix2fv(this.addr,!1,fc),wt(t,i)}}function jv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;hc.set(i),n.uniformMatrix3fv(this.addr,!1,hc),wt(t,i)}}function Jv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;uc.set(i),n.uniformMatrix4fv(this.addr,!1,uc),wt(t,i)}}function $v(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Qv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function e0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function t0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function n0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function i0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function r0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function a0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function s0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let a;this.type===n.SAMPLER_2D_SHADOW?(Mo.compareFunction=t.isReversedDepthBuffer()?Oo:Bo,a=Mo):a=Ld,t.setTexture2D(e||a,r)}function o0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ud,r)}function l0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Fd,r)}function c0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Id,r)}function d0(n){switch(n){case 5126:return Xv;case 35664:return qv;case 35665:return Yv;case 35666:return Zv;case 35674:return Kv;case 35675:return jv;case 35676:return Jv;case 5124:case 35670:return $v;case 35667:case 35671:return Qv;case 35668:case 35672:return e0;case 35669:case 35673:return t0;case 5125:return n0;case 36294:return i0;case 36295:return r0;case 36296:return a0;case 35678:case 36198:case 36298:case 36306:case 35682:return s0;case 35679:case 36299:case 36307:return o0;case 35680:case 36300:case 36308:case 36293:return l0;case 36289:case 36303:case 36311:case 36292:return c0}}function u0(n,e){n.uniform1fv(this.addr,e)}function h0(n,e){const t=sr(e,this.size,2);n.uniform2fv(this.addr,t)}function f0(n,e){const t=sr(e,this.size,3);n.uniform3fv(this.addr,t)}function p0(n,e){const t=sr(e,this.size,4);n.uniform4fv(this.addr,t)}function m0(n,e){const t=sr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function g0(n,e){const t=sr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function v0(n,e){const t=sr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function _0(n,e){n.uniform1iv(this.addr,e)}function x0(n,e){n.uniform2iv(this.addr,e)}function y0(n,e){n.uniform3iv(this.addr,e)}function M0(n,e){n.uniform4iv(this.addr,e)}function S0(n,e){n.uniform1uiv(this.addr,e)}function E0(n,e){n.uniform2uiv(this.addr,e)}function b0(n,e){n.uniform3uiv(this.addr,e)}function T0(n,e){n.uniform4uiv(this.addr,e)}function A0(n,e,t){const i=this.cache,r=e.length,a=Fa(t,r);At(i,a)||(n.uniform1iv(this.addr,a),wt(i,a));let s;this.type===n.SAMPLER_2D_SHADOW?s=Mo:s=Ld;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||s,a[o])}function w0(n,e,t){const i=this.cache,r=e.length,a=Fa(t,r);At(i,a)||(n.uniform1iv(this.addr,a),wt(i,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Ud,a[s])}function D0(n,e,t){const i=this.cache,r=e.length,a=Fa(t,r);At(i,a)||(n.uniform1iv(this.addr,a),wt(i,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Fd,a[s])}function R0(n,e,t){const i=this.cache,r=e.length,a=Fa(t,r);At(i,a)||(n.uniform1iv(this.addr,a),wt(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Id,a[s])}function P0(n){switch(n){case 5126:return u0;case 35664:return h0;case 35665:return f0;case 35666:return p0;case 35674:return m0;case 35675:return g0;case 35676:return v0;case 5124:case 35670:return _0;case 35667:case 35671:return x0;case 35668:case 35672:return y0;case 35669:case 35673:return M0;case 5125:return S0;case 36294:return E0;case 36295:return b0;case 36296:return T0;case 35678:case 36198:case 36298:case 36306:case 35682:return A0;case 35679:case 36299:case 36307:return w0;case 35680:case 36300:case 36308:case 36293:return D0;case 36289:case 36303:case 36311:case 36292:return R0}}class C0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=d0(t.type)}}class L0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=P0(t.type)}}class I0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],i)}}}const Es=/(\w+)(\])?(\[|\.)?/g;function pc(n,e){n.seq.push(e),n.map[e.id]=e}function U0(n,e,t){const i=n.name,r=i.length;for(Es.lastIndex=0;;){const a=Es.exec(i),s=Es.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){pc(t,c===void 0?new C0(o,n,e):new L0(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new I0(o),pc(t,f)),t=f}}}class xa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(t,s),l=e.getUniformLocation(t,o.name);U0(o,l,this)}const r=[],a=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):a.push(s);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function mc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const F0=37297;let N0=0;function B0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const gc=new ze;function O0(n){Je._getMatrix(gc,Je.workingColorSpace,n);const e=`mat3( ${gc.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case Ma:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function vc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+B0(n.getShaderSource(e),o)}else return a}function k0(n,e){const t=O0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const z0={[Yc]:"Linear",[Zc]:"Reinhard",[Kc]:"Cineon",[jc]:"ACESFilmic",[$c]:"AgX",[Qc]:"Neutral",[Jc]:"Custom"};function V0(n,e){const t=z0[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const da=new N;function H0(){Je.getLuminanceCoefficients(da);const n=da.x.toFixed(4),e=da.y.toFixed(4),t=da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_r).join(`
`)}function W0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function X0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),s=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function _r(n){return n!==""}function _c(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const q0=/^[ \t]*#include +<([\w\d./]+)>/gm;function So(n){return n.replace(q0,Z0)}const Y0=new Map;function Z0(n,e){let t=He[e];if(t===void 0){const i=Y0.get(e);if(i!==void 0)t=He[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return So(t)}const K0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yc(n){return n.replace(K0,j0)}function j0(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Mc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const J0={[fa]:"SHADOWMAP_TYPE_PCF",[gr]:"SHADOWMAP_TYPE_VSM"};function $0(n){return J0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Q0={[yi]:"ENVMAP_TYPE_CUBE",[Ki]:"ENVMAP_TYPE_CUBE",[Pa]:"ENVMAP_TYPE_CUBE_UV"};function e_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Q0[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const t_={[Ki]:"ENVMAP_MODE_REFRACTION"};function n_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":t_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const i_={[Po]:"ENVMAP_BLENDING_MULTIPLY",[df]:"ENVMAP_BLENDING_MIX",[uf]:"ENVMAP_BLENDING_ADD"};function r_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":i_[n.combine]||"ENVMAP_BLENDING_NONE"}function a_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function s_(n,e,t,i){const r=n.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=$0(t),c=e_(t),d=n_(t),f=r_(t),u=a_(t),h=G0(t),p=W0(a),_=r.createProgram();let g,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(_r).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(_r).join(`
`),m.length>0&&(m+=`
`)):(g=[Mc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),m=[Mc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yn?"#define TONE_MAPPING":"",t.toneMapping!==yn?He.tonemapping_pars_fragment:"",t.toneMapping!==yn?V0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,k0("linearToOutputTexel",t.outputColorSpace),H0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_r).join(`
`)),s=So(s),s=_c(s,t),s=xc(s,t),o=So(o),o=_c(o,t),o=xc(o,t),s=yc(s),o=yc(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===El?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===El?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const E=S+g+s,y=S+m+o,R=mc(r,r.VERTEX_SHADER,E),w=mc(r,r.FRAGMENT_SHADER,y);r.attachShader(_,R),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function D(P){if(n.debug.checkShaderErrors){const k=r.getProgramInfoLog(_)||"",z=r.getShaderInfoLog(R)||"",G=r.getShaderInfoLog(w)||"",A=k.trim(),C=z.trim(),U=G.trim();let Y=!0,J=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,R,w);else{const $=vc(r,R,"vertex"),re=vc(r,w,"fragment");et("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+A+`
`+$+`
`+re)}else A!==""?Ie("WebGLProgram: Program Info Log:",A):(C===""||U==="")&&(J=!1);J&&(P.diagnostics={runnable:Y,programLog:A,vertexShader:{log:C,prefix:g},fragmentShader:{log:U,prefix:m}})}r.deleteShader(R),r.deleteShader(w),x=new xa(r,_),b=X0(r,_)}let x;this.getUniforms=function(){return x===void 0&&D(this),x};let b;this.getAttributes=function(){return b===void 0&&D(this),b};let W=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=r.getProgramParameter(_,F0)),W},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=N0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=w,this}let o_=0;class l_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new c_(e),t.set(e,i)),i}}class c_{constructor(e){this.id=o_++,this.code=e,this.usedTimes=0}}function d_(n,e,t,i,r,a){const s=new ud,o=new l_,l=new Set,c=[],d=new Map,f=i.logarithmicDepthBuffer;let u=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,b,W,P,k){const z=P.fog,G=k.geometry,A=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,C=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,U=e.get(x.envMap||A,C),Y=U&&U.mapping===Pa?U.image.height:null,J=h[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Ie("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const $=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,re=$!==void 0?$.length:0;let ce=0;G.morphAttributes.position!==void 0&&(ce=1),G.morphAttributes.normal!==void 0&&(ce=2),G.morphAttributes.color!==void 0&&(ce=3);let De,it,je,j;if(J){const rt=vn[J];De=rt.vertexShader,it=rt.fragmentShader}else De=x.vertexShader,it=x.fragmentShader,o.update(x),je=o.getVertexShaderID(x),j=o.getFragmentShaderID(x);const ie=n.getRenderTarget(),ee=n.state.buffers.depth.getReversed(),Pe=k.isInstancedMesh===!0,Te=k.isBatchedMesh===!0,Le=!!x.map,ft=!!x.matcap,Ge=!!U,Ke=!!x.aoMap,tt=!!x.lightMap,Fe=!!x.bumpMap,dt=!!x.normalMap,I=!!x.displacementMap,pt=!!x.emissiveMap,Ne=!!x.metalnessMap,$e=!!x.roughnessMap,_e=x.anisotropy>0,T=x.clearcoat>0,v=x.dispersion>0,B=x.iridescence>0,K=x.sheen>0,Q=x.transmission>0,q=_e&&!!x.anisotropyMap,ve=T&&!!x.clearcoatMap,oe=T&&!!x.clearcoatNormalMap,Me=T&&!!x.clearcoatRoughnessMap,Ce=B&&!!x.iridescenceMap,te=B&&!!x.iridescenceThicknessMap,se=K&&!!x.sheenColorMap,xe=K&&!!x.sheenRoughnessMap,ye=!!x.specularMap,fe=!!x.specularColorMap,ke=!!x.specularIntensityMap,F=Q&&!!x.transmissionMap,le=Q&&!!x.thicknessMap,ae=!!x.gradientMap,me=!!x.alphaMap,ne=x.alphaTest>0,Z=!!x.alphaHash,Se=!!x.extensions;let Ue=yn;x.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Ue=n.toneMapping);const ut={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:De,fragmentShader:it,defines:x.defines,customVertexShaderID:je,customFragmentShaderID:j,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Te,batchingColor:Te&&k._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&k.instanceColor!==null,instancingMorph:Pe&&k.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Ji,alphaToCoverage:!!x.alphaToCoverage,map:Le,matcap:ft,envMap:Ge,envMapMode:Ge&&U.mapping,envMapCubeUVHeight:Y,aoMap:Ke,lightMap:tt,bumpMap:Fe,normalMap:dt,displacementMap:I,emissiveMap:pt,normalMapObjectSpace:dt&&x.normalMapType===pf,normalMapTangentSpace:dt&&x.normalMapType===ld,metalnessMap:Ne,roughnessMap:$e,anisotropy:_e,anisotropyMap:q,clearcoat:T,clearcoatMap:ve,clearcoatNormalMap:oe,clearcoatRoughnessMap:Me,dispersion:v,iridescence:B,iridescenceMap:Ce,iridescenceThicknessMap:te,sheen:K,sheenColorMap:se,sheenRoughnessMap:xe,specularMap:ye,specularColorMap:fe,specularIntensityMap:ke,transmission:Q,transmissionMap:F,thicknessMap:le,gradientMap:ae,opaque:x.transparent===!1&&x.blending===Wi&&x.alphaToCoverage===!1,alphaMap:me,alphaTest:ne,alphaHash:Z,combine:x.combine,mapUv:Le&&p(x.map.channel),aoMapUv:Ke&&p(x.aoMap.channel),lightMapUv:tt&&p(x.lightMap.channel),bumpMapUv:Fe&&p(x.bumpMap.channel),normalMapUv:dt&&p(x.normalMap.channel),displacementMapUv:I&&p(x.displacementMap.channel),emissiveMapUv:pt&&p(x.emissiveMap.channel),metalnessMapUv:Ne&&p(x.metalnessMap.channel),roughnessMapUv:$e&&p(x.roughnessMap.channel),anisotropyMapUv:q&&p(x.anisotropyMap.channel),clearcoatMapUv:ve&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:oe&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:te&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:se&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:xe&&p(x.sheenRoughnessMap.channel),specularMapUv:ye&&p(x.specularMap.channel),specularColorMapUv:fe&&p(x.specularColorMap.channel),specularIntensityMapUv:ke&&p(x.specularIntensityMap.channel),transmissionMapUv:F&&p(x.transmissionMap.channel),thicknessMapUv:le&&p(x.thicknessMap.channel),alphaMapUv:me&&p(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(dt||_e),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!G.attributes.uv&&(Le||me),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||G.attributes.normal===void 0&&dt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ee,skinning:k.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ce,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&W.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Le&&x.map.isVideoTexture===!0&&Je.getTransfer(x.map.colorSpace)===at,decodeVideoTextureEmissive:pt&&x.emissiveMap.isVideoTexture===!0&&Je.getTransfer(x.emissiveMap.colorSpace)===at,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===dn,flipSided:x.side===Zt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Se&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&x.extensions.multiDraw===!0||Te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ut.vertexUv1s=l.has(1),ut.vertexUv2s=l.has(2),ut.vertexUv3s=l.has(3),l.clear(),ut}function g(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const W in x.defines)b.push(W),b.push(x.defines[W]);return x.isRawShaderMaterial===!1&&(m(b,x),S(b,x),b.push(n.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function S(x,b){s.disableAll(),b.instancing&&s.enable(0),b.instancingColor&&s.enable(1),b.instancingMorph&&s.enable(2),b.matcap&&s.enable(3),b.envMap&&s.enable(4),b.normalMapObjectSpace&&s.enable(5),b.normalMapTangentSpace&&s.enable(6),b.clearcoat&&s.enable(7),b.iridescence&&s.enable(8),b.alphaTest&&s.enable(9),b.vertexColors&&s.enable(10),b.vertexAlphas&&s.enable(11),b.vertexUv1s&&s.enable(12),b.vertexUv2s&&s.enable(13),b.vertexUv3s&&s.enable(14),b.vertexTangents&&s.enable(15),b.anisotropy&&s.enable(16),b.alphaHash&&s.enable(17),b.batching&&s.enable(18),b.dispersion&&s.enable(19),b.batchingColor&&s.enable(20),b.gradientMap&&s.enable(21),x.push(s.mask),s.disableAll(),b.fog&&s.enable(0),b.useFog&&s.enable(1),b.flatShading&&s.enable(2),b.logarithmicDepthBuffer&&s.enable(3),b.reversedDepthBuffer&&s.enable(4),b.skinning&&s.enable(5),b.morphTargets&&s.enable(6),b.morphNormals&&s.enable(7),b.morphColors&&s.enable(8),b.premultipliedAlpha&&s.enable(9),b.shadowMapEnabled&&s.enable(10),b.doubleSided&&s.enable(11),b.flipSided&&s.enable(12),b.useDepthPacking&&s.enable(13),b.dithering&&s.enable(14),b.transmission&&s.enable(15),b.sheen&&s.enable(16),b.opaque&&s.enable(17),b.pointsUvs&&s.enable(18),b.decodeVideoTexture&&s.enable(19),b.decodeVideoTextureEmissive&&s.enable(20),b.alphaToCoverage&&s.enable(21),x.push(s.mask)}function E(x){const b=h[x.type];let W;if(b){const P=vn[b];W=Cp.clone(P.uniforms)}else W=x.uniforms;return W}function y(x,b){let W=d.get(b);return W!==void 0?++W.usedTimes:(W=new s_(n,b,x,r),c.push(W),d.set(b,W)),W}function R(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),d.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function D(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:E,acquireProgram:y,releaseProgram:R,releaseShaderCache:w,programs:c,dispose:D}}function u_(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function i(s){n.delete(s)}function r(s,o,l){n.get(s)[o]=l}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:a}}function h_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Sc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ec(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function s(u){let h=0;return u.isInstancedMesh&&(h+=2),u.isSkinnedMesh&&(h+=1),h}function o(u,h,p,_,g,m){let S=n[e];return S===void 0?(S={id:u.id,object:u,geometry:h,material:p,materialVariant:s(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},n[e]=S):(S.id=u.id,S.object=u,S.geometry=h,S.material=p,S.materialVariant=s(u),S.groupOrder=_,S.renderOrder=u.renderOrder,S.z=g,S.group=m),e++,S}function l(u,h,p,_,g,m){const S=o(u,h,p,_,g,m);p.transmission>0?i.push(S):p.transparent===!0?r.push(S):t.push(S)}function c(u,h,p,_,g,m){const S=o(u,h,p,_,g,m);p.transmission>0?i.unshift(S):p.transparent===!0?r.unshift(S):t.unshift(S)}function d(u,h){t.length>1&&t.sort(u||h_),i.length>1&&i.sort(h||Sc),r.length>1&&r.sort(h||Sc)}function f(){for(let u=e,h=n.length;u<h;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:l,unshift:c,finish:f,sort:d}}function f_(){let n=new WeakMap;function e(i,r){const a=n.get(i);let s;return a===void 0?(s=new Ec,n.set(i,[s])):r>=a.length?(s=new Ec,a.push(s)):s=a[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function p_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ve};break;case"SpotLight":t={position:new N,direction:new N,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function m_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let g_=0;function v_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function __(n){const e=new p_,t=m_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,a=new mt,s=new mt;function o(c){let d=0,f=0,u=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let h=0,p=0,_=0,g=0,m=0,S=0,E=0,y=0,R=0,w=0,D=0;c.sort(v_);for(let b=0,W=c.length;b<W;b++){const P=c[b],k=P.color,z=P.intensity,G=P.distance;let A=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ji?A=P.shadow.map.texture:A=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=k.r*z,f+=k.g*z,u+=k.b*z;else if(P.isLightProbe){for(let C=0;C<9;C++)i.probe[C].addScaledVector(P.sh.coefficients[C],z);D++}else if(P.isDirectionalLight){const C=e.get(P);if(C.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const U=P.shadow,Y=t.get(P);Y.shadowIntensity=U.intensity,Y.shadowBias=U.bias,Y.shadowNormalBias=U.normalBias,Y.shadowRadius=U.radius,Y.shadowMapSize=U.mapSize,i.directionalShadow[h]=Y,i.directionalShadowMap[h]=A,i.directionalShadowMatrix[h]=P.shadow.matrix,S++}i.directional[h]=C,h++}else if(P.isSpotLight){const C=e.get(P);C.position.setFromMatrixPosition(P.matrixWorld),C.color.copy(k).multiplyScalar(z),C.distance=G,C.coneCos=Math.cos(P.angle),C.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),C.decay=P.decay,i.spot[_]=C;const U=P.shadow;if(P.map&&(i.spotLightMap[R]=P.map,R++,U.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[_]=U.matrix,P.castShadow){const Y=t.get(P);Y.shadowIntensity=U.intensity,Y.shadowBias=U.bias,Y.shadowNormalBias=U.normalBias,Y.shadowRadius=U.radius,Y.shadowMapSize=U.mapSize,i.spotShadow[_]=Y,i.spotShadowMap[_]=A,y++}_++}else if(P.isRectAreaLight){const C=e.get(P);C.color.copy(k).multiplyScalar(z),C.halfWidth.set(P.width*.5,0,0),C.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=C,g++}else if(P.isPointLight){const C=e.get(P);if(C.color.copy(P.color).multiplyScalar(P.intensity),C.distance=P.distance,C.decay=P.decay,P.castShadow){const U=P.shadow,Y=t.get(P);Y.shadowIntensity=U.intensity,Y.shadowBias=U.bias,Y.shadowNormalBias=U.normalBias,Y.shadowRadius=U.radius,Y.shadowMapSize=U.mapSize,Y.shadowCameraNear=U.camera.near,Y.shadowCameraFar=U.camera.far,i.pointShadow[p]=Y,i.pointShadowMap[p]=A,i.pointShadowMatrix[p]=P.shadow.matrix,E++}i.point[p]=C,p++}else if(P.isHemisphereLight){const C=e.get(P);C.skyColor.copy(P.color).multiplyScalar(z),C.groundColor.copy(P.groundColor).multiplyScalar(z),i.hemi[m]=C,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=u;const x=i.hash;(x.directionalLength!==h||x.pointLength!==p||x.spotLength!==_||x.rectAreaLength!==g||x.hemiLength!==m||x.numDirectionalShadows!==S||x.numPointShadows!==E||x.numSpotShadows!==y||x.numSpotMaps!==R||x.numLightProbes!==D)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=y+R-w,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=D,x.directionalLength=h,x.pointLength=p,x.spotLength=_,x.rectAreaLength=g,x.hemiLength=m,x.numDirectionalShadows=S,x.numPointShadows=E,x.numSpotShadows=y,x.numSpotMaps=R,x.numLightProbes=D,i.version=g_++)}function l(c,d){let f=0,u=0,h=0,p=0,_=0;const g=d.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const E=c[m];if(E.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),f++}else if(E.isSpotLight){const y=i.spot[h];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),h++}else if(E.isRectAreaLight){const y=i.rectArea[p];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),s.identity(),a.copy(E.matrixWorld),a.premultiply(g),s.extractRotation(a),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),p++}else if(E.isPointLight){const y=i.point[u];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),u++}else if(E.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:i}}function bc(n){const e=new __(n),t=[],i=[];function r(d){c.camera=d,t.length=0,i.length=0}function a(d){t.push(d)}function s(d){i.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function x_(n){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new bc(n),e.set(r,[o])):a>=s.length?(o=new bc(n),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const y_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,S_=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],E_=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Tc=new mt,mr=new N,bs=new N;function b_(n,e,t){let i=new Vo;const r=new pe,a=new pe,s=new _t,o=new Fp,l=new Np,c={},d=t.maxTextureSize,f={[ai]:Zt,[Zt]:ai,[dn]:dn},u=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:y_,fragmentShader:M_}),h=u.clone();h.defines.HORIZONTAL_PASS=1;const p=new Wt;p.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new St(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fa;let m=this.type;this.render=function(w,D,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Wh&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=fa);const b=n.getRenderTarget(),W=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),k=n.state;k.setBlending(zn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const z=m!==this.type;z&&D.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(A=>A.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,A=w.length;G<A;G++){const C=w[G],U=C.shadow;if(U===void 0){Ie("WebGLShadowMap:",C,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const Y=U.getFrameExtents();r.multiply(Y),a.copy(U.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/Y.x),r.x=a.x*Y.x,U.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/Y.y),r.y=a.y*Y.y,U.mapSize.y=a.y));const J=n.state.buffers.depth.getReversed();if(U.camera._reversedDepth=J,U.map===null||z===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===gr){if(C.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Mn(r.x,r.y,{format:ji,type:Gn,minFilter:kt,magFilter:kt,generateMipmaps:!1}),U.map.texture.name=C.name+".shadowMap",U.map.depthTexture=new Dr(r.x,r.y,_n),U.map.depthTexture.name=C.name+".shadowMapDepth",U.map.depthTexture.format=Wn,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=It,U.map.depthTexture.magFilter=It}else C.isPointLight?(U.map=new Cd(r.x),U.map.depthTexture=new Jf(r.x,Sn)):(U.map=new Mn(r.x,r.y),U.map.depthTexture=new Dr(r.x,r.y,Sn)),U.map.depthTexture.name=C.name+".shadowMap",U.map.depthTexture.format=Wn,this.type===fa?(U.map.depthTexture.compareFunction=J?Oo:Bo,U.map.depthTexture.minFilter=kt,U.map.depthTexture.magFilter=kt):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=It,U.map.depthTexture.magFilter=It);U.camera.updateProjectionMatrix()}const $=U.map.isWebGLCubeRenderTarget?6:1;for(let re=0;re<$;re++){if(U.map.isWebGLCubeRenderTarget)n.setRenderTarget(U.map,re),n.clear();else{re===0&&(n.setRenderTarget(U.map),n.clear());const ce=U.getViewport(re);s.set(a.x*ce.x,a.y*ce.y,a.x*ce.z,a.y*ce.w),k.viewport(s)}if(C.isPointLight){const ce=U.camera,De=U.matrix,it=C.distance||ce.far;it!==ce.far&&(ce.far=it,ce.updateProjectionMatrix()),mr.setFromMatrixPosition(C.matrixWorld),ce.position.copy(mr),bs.copy(ce.position),bs.add(S_[re]),ce.up.copy(E_[re]),ce.lookAt(bs),ce.updateMatrixWorld(),De.makeTranslation(-mr.x,-mr.y,-mr.z),Tc.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Tc,ce.coordinateSystem,ce.reversedDepth)}else U.updateMatrices(C);i=U.getFrustum(),y(D,x,U.camera,C,this.type)}U.isPointLightShadow!==!0&&this.type===gr&&S(U,x),U.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(b,W,P)};function S(w,D){const x=e.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Mn(r.x,r.y,{format:ji,type:Gn})),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(D,null,x,u,_,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(D,null,x,h,_,null)}function E(w,D,x,b){let W=null;const P=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)W=P;else if(W=x.isPointLight===!0?l:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const k=W.uuid,z=D.uuid;let G=c[k];G===void 0&&(G={},c[k]=G);let A=G[z];A===void 0&&(A=W.clone(),G[z]=A,D.addEventListener("dispose",R)),W=A}if(W.visible=D.visible,W.wireframe=D.wireframe,b===gr?W.side=D.shadowSide!==null?D.shadowSide:D.side:W.side=D.shadowSide!==null?D.shadowSide:f[D.side],W.alphaMap=D.alphaMap,W.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,W.map=D.map,W.clipShadows=D.clipShadows,W.clippingPlanes=D.clippingPlanes,W.clipIntersection=D.clipIntersection,W.displacementMap=D.displacementMap,W.displacementScale=D.displacementScale,W.displacementBias=D.displacementBias,W.wireframeLinewidth=D.wireframeLinewidth,W.linewidth=D.linewidth,x.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const k=n.properties.get(W);k.light=x}return W}function y(w,D,x,b,W){if(w.visible===!1)return;if(w.layers.test(D.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&W===gr)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const z=e.update(w),G=w.material;if(Array.isArray(G)){const A=z.groups;for(let C=0,U=A.length;C<U;C++){const Y=A[C],J=G[Y.materialIndex];if(J&&J.visible){const $=E(w,J,b,W);w.onBeforeShadow(n,w,D,x,z,$,Y),n.renderBufferDirect(x,null,z,$,w,Y),w.onAfterShadow(n,w,D,x,z,$,Y)}}}else if(G.visible){const A=E(w,G,b,W);w.onBeforeShadow(n,w,D,x,z,A,null),n.renderBufferDirect(x,null,z,A,w,null),w.onAfterShadow(n,w,D,x,z,A,null)}}const k=w.children;for(let z=0,G=k.length;z<G;z++)y(k[z],D,x,b,W)}function R(w){w.target.removeEventListener("dispose",R);for(const x in c){const b=c[x],W=w.target.uuid;W in b&&(b[W].dispose(),delete b[W])}}}function T_(n,e){function t(){let F=!1;const le=new _t;let ae=null;const me=new _t(0,0,0,0);return{setMask:function(ne){ae!==ne&&!F&&(n.colorMask(ne,ne,ne,ne),ae=ne)},setLocked:function(ne){F=ne},setClear:function(ne,Z,Se,Ue,ut){ut===!0&&(ne*=Ue,Z*=Ue,Se*=Ue),le.set(ne,Z,Se,Ue),me.equals(le)===!1&&(n.clearColor(ne,Z,Se,Ue),me.copy(le))},reset:function(){F=!1,ae=null,me.set(-1,0,0,0)}}}function i(){let F=!1,le=!1,ae=null,me=null,ne=null;return{setReversed:function(Z){if(le!==Z){const Se=e.get("EXT_clip_control");Z?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),le=Z;const Ue=ne;ne=null,this.setClear(Ue)}},getReversed:function(){return le},setTest:function(Z){Z?ie(n.DEPTH_TEST):ee(n.DEPTH_TEST)},setMask:function(Z){ae!==Z&&!F&&(n.depthMask(Z),ae=Z)},setFunc:function(Z){if(le&&(Z=bf[Z]),me!==Z){switch(Z){case Ps:n.depthFunc(n.NEVER);break;case Cs:n.depthFunc(n.ALWAYS);break;case Ls:n.depthFunc(n.LESS);break;case Zi:n.depthFunc(n.LEQUAL);break;case Is:n.depthFunc(n.EQUAL);break;case Us:n.depthFunc(n.GEQUAL);break;case Fs:n.depthFunc(n.GREATER);break;case Ns:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=Z}},setLocked:function(Z){F=Z},setClear:function(Z){ne!==Z&&(ne=Z,le&&(Z=1-Z),n.clearDepth(Z))},reset:function(){F=!1,ae=null,me=null,ne=null,le=!1}}}function r(){let F=!1,le=null,ae=null,me=null,ne=null,Z=null,Se=null,Ue=null,ut=null;return{setTest:function(rt){F||(rt?ie(n.STENCIL_TEST):ee(n.STENCIL_TEST))},setMask:function(rt){le!==rt&&!F&&(n.stencilMask(rt),le=rt)},setFunc:function(rt,An,wn){(ae!==rt||me!==An||ne!==wn)&&(n.stencilFunc(rt,An,wn),ae=rt,me=An,ne=wn)},setOp:function(rt,An,wn){(Z!==rt||Se!==An||Ue!==wn)&&(n.stencilOp(rt,An,wn),Z=rt,Se=An,Ue=wn)},setLocked:function(rt){F=rt},setClear:function(rt){ut!==rt&&(n.clearStencil(rt),ut=rt)},reset:function(){F=!1,le=null,ae=null,me=null,ne=null,Z=null,Se=null,Ue=null,ut=null}}}const a=new t,s=new i,o=new r,l=new WeakMap,c=new WeakMap;let d={},f={},u=new WeakMap,h=[],p=null,_=!1,g=null,m=null,S=null,E=null,y=null,R=null,w=null,D=new Ve(0,0,0),x=0,b=!1,W=null,P=null,k=null,z=null,G=null;const A=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let C=!1,U=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(Y)[1]),C=U>=1):Y.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),C=U>=2);let J=null,$={};const re=n.getParameter(n.SCISSOR_BOX),ce=n.getParameter(n.VIEWPORT),De=new _t().fromArray(re),it=new _t().fromArray(ce);function je(F,le,ae,me){const ne=new Uint8Array(4),Z=n.createTexture();n.bindTexture(F,Z),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Se=0;Se<ae;Se++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,ne):n.texImage2D(le+Se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ne);return Z}const j={};j[n.TEXTURE_2D]=je(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=je(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=je(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=je(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ie(n.DEPTH_TEST),s.setFunc(Zi),Fe(!1),dt(vl),ie(n.CULL_FACE),Ke(zn);function ie(F){d[F]!==!0&&(n.enable(F),d[F]=!0)}function ee(F){d[F]!==!1&&(n.disable(F),d[F]=!1)}function Pe(F,le){return f[F]!==le?(n.bindFramebuffer(F,le),f[F]=le,F===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=le),F===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=le),!0):!1}function Te(F,le){let ae=h,me=!1;if(F){ae=u.get(le),ae===void 0&&(ae=[],u.set(le,ae));const ne=F.textures;if(ae.length!==ne.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let Z=0,Se=ne.length;Z<Se;Z++)ae[Z]=n.COLOR_ATTACHMENT0+Z;ae.length=ne.length,me=!0}}else ae[0]!==n.BACK&&(ae[0]=n.BACK,me=!0);me&&n.drawBuffers(ae)}function Le(F){return p!==F?(n.useProgram(F),p=F,!0):!1}const ft={[gi]:n.FUNC_ADD,[qh]:n.FUNC_SUBTRACT,[Yh]:n.FUNC_REVERSE_SUBTRACT};ft[Zh]=n.MIN,ft[Kh]=n.MAX;const Ge={[jh]:n.ZERO,[Jh]:n.ONE,[$h]:n.SRC_COLOR,[Ds]:n.SRC_ALPHA,[af]:n.SRC_ALPHA_SATURATE,[nf]:n.DST_COLOR,[ef]:n.DST_ALPHA,[Qh]:n.ONE_MINUS_SRC_COLOR,[Rs]:n.ONE_MINUS_SRC_ALPHA,[rf]:n.ONE_MINUS_DST_COLOR,[tf]:n.ONE_MINUS_DST_ALPHA,[sf]:n.CONSTANT_COLOR,[of]:n.ONE_MINUS_CONSTANT_COLOR,[lf]:n.CONSTANT_ALPHA,[cf]:n.ONE_MINUS_CONSTANT_ALPHA};function Ke(F,le,ae,me,ne,Z,Se,Ue,ut,rt){if(F===zn){_===!0&&(ee(n.BLEND),_=!1);return}if(_===!1&&(ie(n.BLEND),_=!0),F!==Xh){if(F!==g||rt!==b){if((m!==gi||y!==gi)&&(n.blendEquation(n.FUNC_ADD),m=gi,y=gi),rt)switch(F){case Wi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _l:n.blendFunc(n.ONE,n.ONE);break;case xl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:et("WebGLState: Invalid blending: ",F);break}else switch(F){case Wi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _l:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case xl:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yl:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",F);break}S=null,E=null,R=null,w=null,D.set(0,0,0),x=0,g=F,b=rt}return}ne=ne||le,Z=Z||ae,Se=Se||me,(le!==m||ne!==y)&&(n.blendEquationSeparate(ft[le],ft[ne]),m=le,y=ne),(ae!==S||me!==E||Z!==R||Se!==w)&&(n.blendFuncSeparate(Ge[ae],Ge[me],Ge[Z],Ge[Se]),S=ae,E=me,R=Z,w=Se),(Ue.equals(D)===!1||ut!==x)&&(n.blendColor(Ue.r,Ue.g,Ue.b,ut),D.copy(Ue),x=ut),g=F,b=!1}function tt(F,le){F.side===dn?ee(n.CULL_FACE):ie(n.CULL_FACE);let ae=F.side===Zt;le&&(ae=!ae),Fe(ae),F.blending===Wi&&F.transparent===!1?Ke(zn):Ke(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),a.setMask(F.colorWrite);const me=F.stencilWrite;o.setTest(me),me&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),pt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(F){W!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),W=F)}function dt(F){F!==Hh?(ie(n.CULL_FACE),F!==P&&(F===vl?n.cullFace(n.BACK):F===Gh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ee(n.CULL_FACE),P=F}function I(F){F!==k&&(C&&n.lineWidth(F),k=F)}function pt(F,le,ae){F?(ie(n.POLYGON_OFFSET_FILL),(z!==le||G!==ae)&&(z=le,G=ae,s.getReversed()&&(le=-le),n.polygonOffset(le,ae))):ee(n.POLYGON_OFFSET_FILL)}function Ne(F){F?ie(n.SCISSOR_TEST):ee(n.SCISSOR_TEST)}function $e(F){F===void 0&&(F=n.TEXTURE0+A-1),J!==F&&(n.activeTexture(F),J=F)}function _e(F,le,ae){ae===void 0&&(J===null?ae=n.TEXTURE0+A-1:ae=J);let me=$[ae];me===void 0&&(me={type:void 0,texture:void 0},$[ae]=me),(me.type!==F||me.texture!==le)&&(J!==ae&&(n.activeTexture(ae),J=ae),n.bindTexture(F,le||j[F]),me.type=F,me.texture=le)}function T(){const F=$[J];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(F){et("WebGLState:",F)}}function B(){try{n.compressedTexImage3D(...arguments)}catch(F){et("WebGLState:",F)}}function K(){try{n.texSubImage2D(...arguments)}catch(F){et("WebGLState:",F)}}function Q(){try{n.texSubImage3D(...arguments)}catch(F){et("WebGLState:",F)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(F){et("WebGLState:",F)}}function ve(){try{n.compressedTexSubImage3D(...arguments)}catch(F){et("WebGLState:",F)}}function oe(){try{n.texStorage2D(...arguments)}catch(F){et("WebGLState:",F)}}function Me(){try{n.texStorage3D(...arguments)}catch(F){et("WebGLState:",F)}}function Ce(){try{n.texImage2D(...arguments)}catch(F){et("WebGLState:",F)}}function te(){try{n.texImage3D(...arguments)}catch(F){et("WebGLState:",F)}}function se(F){De.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),De.copy(F))}function xe(F){it.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),it.copy(F))}function ye(F,le){let ae=c.get(le);ae===void 0&&(ae=new WeakMap,c.set(le,ae));let me=ae.get(F);me===void 0&&(me=n.getUniformBlockIndex(le,F.name),ae.set(F,me))}function fe(F,le){const me=c.get(le).get(F);l.get(le)!==me&&(n.uniformBlockBinding(le,me,F.__bindingPointIndex),l.set(le,me))}function ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},J=null,$={},f={},u=new WeakMap,h=[],p=null,_=!1,g=null,m=null,S=null,E=null,y=null,R=null,w=null,D=new Ve(0,0,0),x=0,b=!1,W=null,P=null,k=null,z=null,G=null,De.set(0,0,n.canvas.width,n.canvas.height),it.set(0,0,n.canvas.width,n.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:ie,disable:ee,bindFramebuffer:Pe,drawBuffers:Te,useProgram:Le,setBlending:Ke,setMaterial:tt,setFlipSided:Fe,setCullFace:dt,setLineWidth:I,setPolygonOffset:pt,setScissorTest:Ne,activeTexture:$e,bindTexture:_e,unbindTexture:T,compressedTexImage2D:v,compressedTexImage3D:B,texImage2D:Ce,texImage3D:te,updateUBOMapping:ye,uniformBlockBinding:fe,texStorage2D:oe,texStorage3D:Me,texSubImage2D:K,texSubImage3D:Q,compressedTexSubImage2D:q,compressedTexSubImage3D:ve,scissor:se,viewport:xe,reset:ke}}function A_(n,e,t,i,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,d=new WeakMap;let f;const u=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(T,v){return h?new OffscreenCanvas(T,v):Sa("canvas")}function _(T,v,B){let K=1;const Q=_e(T);if((Q.width>B||Q.height>B)&&(K=B/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor(K*Q.width),ve=Math.floor(K*Q.height);f===void 0&&(f=p(q,ve));const oe=v?p(q,ve):f;return oe.width=q,oe.height=ve,oe.getContext("2d").drawImage(T,0,0,q,ve),Ie("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+ve+")."),oe}else return"data"in T&&Ie("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function g(T){return T.generateMipmaps}function m(T){n.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(T,v,B,K,Q=!1){if(T!==null){if(n[T]!==void 0)return n[T];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=v;if(v===n.RED&&(B===n.FLOAT&&(q=n.R32F),B===n.HALF_FLOAT&&(q=n.R16F),B===n.UNSIGNED_BYTE&&(q=n.R8)),v===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.R8UI),B===n.UNSIGNED_SHORT&&(q=n.R16UI),B===n.UNSIGNED_INT&&(q=n.R32UI),B===n.BYTE&&(q=n.R8I),B===n.SHORT&&(q=n.R16I),B===n.INT&&(q=n.R32I)),v===n.RG&&(B===n.FLOAT&&(q=n.RG32F),B===n.HALF_FLOAT&&(q=n.RG16F),B===n.UNSIGNED_BYTE&&(q=n.RG8)),v===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RG8UI),B===n.UNSIGNED_SHORT&&(q=n.RG16UI),B===n.UNSIGNED_INT&&(q=n.RG32UI),B===n.BYTE&&(q=n.RG8I),B===n.SHORT&&(q=n.RG16I),B===n.INT&&(q=n.RG32I)),v===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RGB8UI),B===n.UNSIGNED_SHORT&&(q=n.RGB16UI),B===n.UNSIGNED_INT&&(q=n.RGB32UI),B===n.BYTE&&(q=n.RGB8I),B===n.SHORT&&(q=n.RGB16I),B===n.INT&&(q=n.RGB32I)),v===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),B===n.UNSIGNED_INT&&(q=n.RGBA32UI),B===n.BYTE&&(q=n.RGBA8I),B===n.SHORT&&(q=n.RGBA16I),B===n.INT&&(q=n.RGBA32I)),v===n.RGB&&(B===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),v===n.RGBA){const ve=Q?Ma:Je.getTransfer(K);B===n.FLOAT&&(q=n.RGBA32F),B===n.HALF_FLOAT&&(q=n.RGBA16F),B===n.UNSIGNED_BYTE&&(q=ve===at?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(T,v){let B;return T?v===null||v===Sn||v===Ar?B=n.DEPTH24_STENCIL8:v===_n?B=n.DEPTH32F_STENCIL8:v===Tr&&(B=n.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Sn||v===Ar?B=n.DEPTH_COMPONENT24:v===_n?B=n.DEPTH_COMPONENT32F:v===Tr&&(B=n.DEPTH_COMPONENT16),B}function R(T,v){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==It&&T.minFilter!==kt?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function w(T){const v=T.target;v.removeEventListener("dispose",w),x(v),v.isVideoTexture&&d.delete(v)}function D(T){const v=T.target;v.removeEventListener("dispose",D),W(v)}function x(T){const v=i.get(T);if(v.__webglInit===void 0)return;const B=T.source,K=u.get(B);if(K){const Q=K[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(T),Object.keys(K).length===0&&u.delete(B)}i.remove(T)}function b(T){const v=i.get(T);n.deleteTexture(v.__webglTexture);const B=T.source,K=u.get(B);delete K[v.__cacheKey],s.memory.textures--}function W(T){const v=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let Q=0;Q<v.__webglFramebuffer[K].length;Q++)n.deleteFramebuffer(v.__webglFramebuffer[K][Q]);else n.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)n.deleteFramebuffer(v.__webglFramebuffer[K]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const B=T.textures;for(let K=0,Q=B.length;K<Q;K++){const q=i.get(B[K]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),s.memory.textures--),i.remove(B[K])}i.remove(T)}let P=0;function k(){P=0}function z(){const T=P;return T>=r.maxTextures&&Ie("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),P+=1,T}function G(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function A(T,v){const B=i.get(T);if(T.isVideoTexture&&Ne(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){const K=T.image;if(K===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{j(B,T,v);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+v)}function C(T,v){const B=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){j(B,T,v);return}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+v)}function U(T,v){const B=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){j(B,T,v);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+v)}function Y(T,v){const B=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&B.__version!==T.version){ie(B,T,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+v)}const J={[Bs]:n.REPEAT,[Fn]:n.CLAMP_TO_EDGE,[Os]:n.MIRRORED_REPEAT},$={[It]:n.NEAREST,[hf]:n.NEAREST_MIPMAP_NEAREST,[Or]:n.NEAREST_MIPMAP_LINEAR,[kt]:n.LINEAR,[Wa]:n.LINEAR_MIPMAP_NEAREST,[_i]:n.LINEAR_MIPMAP_LINEAR},re={[mf]:n.NEVER,[yf]:n.ALWAYS,[gf]:n.LESS,[Bo]:n.LEQUAL,[vf]:n.EQUAL,[Oo]:n.GEQUAL,[_f]:n.GREATER,[xf]:n.NOTEQUAL};function ce(T,v){if(v.type===_n&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===kt||v.magFilter===Wa||v.magFilter===Or||v.magFilter===_i||v.minFilter===kt||v.minFilter===Wa||v.minFilter===Or||v.minFilter===_i)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,J[v.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,J[v.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,J[v.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,$[v.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,$[v.minFilter]),v.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,re[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===It||v.minFilter!==Or&&v.minFilter!==_i||v.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function De(T,v){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",w));const K=v.source;let Q=u.get(K);Q===void 0&&(Q={},u.set(K,Q));const q=G(v);if(q!==T.__cacheKey){Q[q]===void 0&&(Q[q]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,B=!0),Q[q].usedTimes++;const ve=Q[T.__cacheKey];ve!==void 0&&(Q[T.__cacheKey].usedTimes--,ve.usedTimes===0&&b(v)),T.__cacheKey=q,T.__webglTexture=Q[q].texture}return B}function it(T,v,B){return Math.floor(Math.floor(T/B)/v)}function je(T,v,B,K){const q=T.updateRanges;if(q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,B,K,v.data);else{q.sort((te,se)=>te.start-se.start);let ve=0;for(let te=1;te<q.length;te++){const se=q[ve],xe=q[te],ye=se.start+se.count,fe=it(xe.start,v.width,4),ke=it(se.start,v.width,4);xe.start<=ye+1&&fe===ke&&it(xe.start+xe.count-1,v.width,4)===fe?se.count=Math.max(se.count,xe.start+xe.count-se.start):(++ve,q[ve]=xe)}q.length=ve+1;const oe=n.getParameter(n.UNPACK_ROW_LENGTH),Me=n.getParameter(n.UNPACK_SKIP_PIXELS),Ce=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let te=0,se=q.length;te<se;te++){const xe=q[te],ye=Math.floor(xe.start/4),fe=Math.ceil(xe.count/4),ke=ye%v.width,F=Math.floor(ye/v.width),le=fe,ae=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,ke,F,le,ae,B,K,v.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,oe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Me),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ce)}}function j(T,v,B){let K=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=n.TEXTURE_3D);const Q=De(T,v),q=v.source;t.bindTexture(K,T.__webglTexture,n.TEXTURE0+B);const ve=i.get(q);if(q.version!==ve.__version||Q===!0){t.activeTexture(n.TEXTURE0+B);const oe=Je.getPrimaries(Je.workingColorSpace),Me=v.colorSpace===ni?null:Je.getPrimaries(v.colorSpace),Ce=v.colorSpace===ni||oe===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let te=_(v.image,!1,r.maxTextureSize);te=$e(v,te);const se=a.convert(v.format,v.colorSpace),xe=a.convert(v.type);let ye=E(v.internalFormat,se,xe,v.colorSpace,v.isVideoTexture);ce(K,v);let fe;const ke=v.mipmaps,F=v.isVideoTexture!==!0,le=ve.__version===void 0||Q===!0,ae=q.dataReady,me=R(v,te);if(v.isDepthTexture)ye=y(v.format===xi,v.type),le&&(F?t.texStorage2D(n.TEXTURE_2D,1,ye,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,ye,te.width,te.height,0,se,xe,null));else if(v.isDataTexture)if(ke.length>0){F&&le&&t.texStorage2D(n.TEXTURE_2D,me,ye,ke[0].width,ke[0].height);for(let ne=0,Z=ke.length;ne<Z;ne++)fe=ke[ne],F?ae&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,fe.width,fe.height,se,xe,fe.data):t.texImage2D(n.TEXTURE_2D,ne,ye,fe.width,fe.height,0,se,xe,fe.data);v.generateMipmaps=!1}else F?(le&&t.texStorage2D(n.TEXTURE_2D,me,ye,te.width,te.height),ae&&je(v,te,se,xe)):t.texImage2D(n.TEXTURE_2D,0,ye,te.width,te.height,0,se,xe,te.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){F&&le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,ye,ke[0].width,ke[0].height,te.depth);for(let ne=0,Z=ke.length;ne<Z;ne++)if(fe=ke[ne],v.format!==hn)if(se!==null)if(F){if(ae)if(v.layerUpdates.size>0){const Se=nc(fe.width,fe.height,v.format,v.type);for(const Ue of v.layerUpdates){const ut=fe.data.subarray(Ue*Se/fe.data.BYTES_PER_ELEMENT,(Ue+1)*Se/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,Ue,fe.width,fe.height,1,se,ut)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,te.depth,se,fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,ye,fe.width,fe.height,te.depth,0,fe.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ae&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,te.depth,se,xe,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,ye,fe.width,fe.height,te.depth,0,se,xe,fe.data)}else{F&&le&&t.texStorage2D(n.TEXTURE_2D,me,ye,ke[0].width,ke[0].height);for(let ne=0,Z=ke.length;ne<Z;ne++)fe=ke[ne],v.format!==hn?se!==null?F?ae&&t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,fe.width,fe.height,se,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,ye,fe.width,fe.height,0,fe.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ae&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,fe.width,fe.height,se,xe,fe.data):t.texImage2D(n.TEXTURE_2D,ne,ye,fe.width,fe.height,0,se,xe,fe.data)}else if(v.isDataArrayTexture)if(F){if(le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,ye,te.width,te.height,te.depth),ae)if(v.layerUpdates.size>0){const ne=nc(te.width,te.height,v.format,v.type);for(const Z of v.layerUpdates){const Se=te.data.subarray(Z*ne/te.data.BYTES_PER_ELEMENT,(Z+1)*ne/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,te.width,te.height,1,se,xe,Se)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,se,xe,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,te.width,te.height,te.depth,0,se,xe,te.data);else if(v.isData3DTexture)F?(le&&t.texStorage3D(n.TEXTURE_3D,me,ye,te.width,te.height,te.depth),ae&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,se,xe,te.data)):t.texImage3D(n.TEXTURE_3D,0,ye,te.width,te.height,te.depth,0,se,xe,te.data);else if(v.isFramebufferTexture){if(le)if(F)t.texStorage2D(n.TEXTURE_2D,me,ye,te.width,te.height);else{let ne=te.width,Z=te.height;for(let Se=0;Se<me;Se++)t.texImage2D(n.TEXTURE_2D,Se,ye,ne,Z,0,se,xe,null),ne>>=1,Z>>=1}}else if(ke.length>0){if(F&&le){const ne=_e(ke[0]);t.texStorage2D(n.TEXTURE_2D,me,ye,ne.width,ne.height)}for(let ne=0,Z=ke.length;ne<Z;ne++)fe=ke[ne],F?ae&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,se,xe,fe):t.texImage2D(n.TEXTURE_2D,ne,ye,se,xe,fe);v.generateMipmaps=!1}else if(F){if(le){const ne=_e(te);t.texStorage2D(n.TEXTURE_2D,me,ye,ne.width,ne.height)}ae&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se,xe,te)}else t.texImage2D(n.TEXTURE_2D,0,ye,se,xe,te);g(v)&&m(K),ve.__version=q.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function ie(T,v,B){if(v.image.length!==6)return;const K=De(T,v),Q=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+B);const q=i.get(Q);if(Q.version!==q.__version||K===!0){t.activeTexture(n.TEXTURE0+B);const ve=Je.getPrimaries(Je.workingColorSpace),oe=v.colorSpace===ni?null:Je.getPrimaries(v.colorSpace),Me=v.colorSpace===ni||ve===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ce=v.isCompressedTexture||v.image[0].isCompressedTexture,te=v.image[0]&&v.image[0].isDataTexture,se=[];for(let Z=0;Z<6;Z++)!Ce&&!te?se[Z]=_(v.image[Z],!0,r.maxCubemapSize):se[Z]=te?v.image[Z].image:v.image[Z],se[Z]=$e(v,se[Z]);const xe=se[0],ye=a.convert(v.format,v.colorSpace),fe=a.convert(v.type),ke=E(v.internalFormat,ye,fe,v.colorSpace),F=v.isVideoTexture!==!0,le=q.__version===void 0||K===!0,ae=Q.dataReady;let me=R(v,xe);ce(n.TEXTURE_CUBE_MAP,v);let ne;if(Ce){F&&le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,ke,xe.width,xe.height);for(let Z=0;Z<6;Z++){ne=se[Z].mipmaps;for(let Se=0;Se<ne.length;Se++){const Ue=ne[Se];v.format!==hn?ye!==null?F?ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se,0,0,Ue.width,Ue.height,ye,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se,ke,Ue.width,Ue.height,0,Ue.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se,0,0,Ue.width,Ue.height,ye,fe,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se,ke,Ue.width,Ue.height,0,ye,fe,Ue.data)}}}else{if(ne=v.mipmaps,F&&le){ne.length>0&&me++;const Z=_e(se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,ke,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(te){F?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,se[Z].width,se[Z].height,ye,fe,se[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ke,se[Z].width,se[Z].height,0,ye,fe,se[Z].data);for(let Se=0;Se<ne.length;Se++){const ut=ne[Se].image[Z].image;F?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se+1,0,0,ut.width,ut.height,ye,fe,ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se+1,ke,ut.width,ut.height,0,ye,fe,ut.data)}}else{F?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ye,fe,se[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ke,ye,fe,se[Z]);for(let Se=0;Se<ne.length;Se++){const Ue=ne[Se];F?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se+1,0,0,ye,fe,Ue.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Se+1,ke,ye,fe,Ue.image[Z])}}}g(v)&&m(n.TEXTURE_CUBE_MAP),q.__version=Q.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function ee(T,v,B,K,Q,q){const ve=a.convert(B.format,B.colorSpace),oe=a.convert(B.type),Me=E(B.internalFormat,ve,oe,B.colorSpace),Ce=i.get(v),te=i.get(B);if(te.__renderTarget=v,!Ce.__hasExternalTextures){const se=Math.max(1,v.width>>q),xe=Math.max(1,v.height>>q);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,q,Me,se,xe,v.depth,0,ve,oe,null):t.texImage2D(Q,q,Me,se,xe,0,ve,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),pt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,Q,te.__webglTexture,0,I(v)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,Q,te.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(T,v,B){if(n.bindRenderbuffer(n.RENDERBUFFER,T),v.depthBuffer){const K=v.depthTexture,Q=K&&K.isDepthTexture?K.type:null,q=y(v.stencilBuffer,Q),ve=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;pt(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,I(v),q,v.width,v.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,I(v),q,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,q,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,T)}else{const K=v.textures;for(let Q=0;Q<K.length;Q++){const q=K[Q],ve=a.convert(q.format,q.colorSpace),oe=a.convert(q.type),Me=E(q.internalFormat,ve,oe,q.colorSpace);pt(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,I(v),Me,v.width,v.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,I(v),Me,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Me,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Te(T,v,B){const K=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(v.depthTexture);if(Q.__renderTarget=v,(!Q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,v.depthTexture.addEventListener("dispose",w)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),ce(n.TEXTURE_CUBE_MAP,v.depthTexture);const Ce=a.convert(v.depthTexture.format),te=a.convert(v.depthTexture.type);let se;v.depthTexture.format===Wn?se=n.DEPTH_COMPONENT24:v.depthTexture.format===xi&&(se=n.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,se,v.width,v.height,0,Ce,te,null)}}else A(v.depthTexture,0);const q=Q.__webglTexture,ve=I(v),oe=K?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,Me=v.depthTexture.format===xi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===Wn)pt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Me,oe,q,0,ve):n.framebufferTexture2D(n.FRAMEBUFFER,Me,oe,q,0);else if(v.depthTexture.format===xi)pt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Me,oe,q,0,ve):n.framebufferTexture2D(n.FRAMEBUFFER,Me,oe,q,0);else throw new Error("Unknown depthTexture format")}function Le(T){const v=i.get(T),B=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const K=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){const Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=K}if(T.depthTexture&&!v.__autoAllocateDepthBuffer)if(B)for(let K=0;K<6;K++)Te(v.__webglFramebuffer[K],T,K);else{const K=T.texture.mipmaps;K&&K.length>0?Te(v.__webglFramebuffer[0],T,0):Te(v.__webglFramebuffer,T,0)}else if(B){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=n.createRenderbuffer(),Pe(v.__webglDepthbuffer[K],T,!1);else{const Q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,q)}}else{const K=T.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Pe(v.__webglDepthbuffer,T,!1);else{const Q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ft(T,v,B){const K=i.get(T);v!==void 0&&ee(K.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Le(T)}function Ge(T){const v=T.texture,B=i.get(T),K=i.get(v);T.addEventListener("dispose",D);const Q=T.textures,q=T.isWebGLCubeRenderTarget===!0,ve=Q.length>1;if(ve||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=v.version,s.memory.textures++),q){B.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[oe]=[];for(let Me=0;Me<v.mipmaps.length;Me++)B.__webglFramebuffer[oe][Me]=n.createFramebuffer()}else B.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let oe=0;oe<v.mipmaps.length;oe++)B.__webglFramebuffer[oe]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(ve)for(let oe=0,Me=Q.length;oe<Me;oe++){const Ce=i.get(Q[oe]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),s.memory.textures++)}if(T.samples>0&&pt(T)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let oe=0;oe<Q.length;oe++){const Me=Q[oe];B.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[oe]);const Ce=a.convert(Me.format,Me.colorSpace),te=a.convert(Me.type),se=E(Me.internalFormat,Ce,te,Me.colorSpace,T.isXRRenderTarget===!0),xe=I(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,se,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,B.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Pe(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),ce(n.TEXTURE_CUBE_MAP,v);for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0)for(let Me=0;Me<v.mipmaps.length;Me++)ee(B.__webglFramebuffer[oe][Me],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me);else ee(B.__webglFramebuffer[oe],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);g(v)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let oe=0,Me=Q.length;oe<Me;oe++){const Ce=Q[oe],te=i.get(Ce);let se=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(se=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,te.__webglTexture),ce(se,Ce),ee(B.__webglFramebuffer,T,Ce,n.COLOR_ATTACHMENT0+oe,se,0),g(Ce)&&m(se)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(oe=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,K.__webglTexture),ce(oe,v),v.mipmaps&&v.mipmaps.length>0)for(let Me=0;Me<v.mipmaps.length;Me++)ee(B.__webglFramebuffer[Me],T,v,n.COLOR_ATTACHMENT0,oe,Me);else ee(B.__webglFramebuffer,T,v,n.COLOR_ATTACHMENT0,oe,0);g(v)&&m(oe),t.unbindTexture()}T.depthBuffer&&Le(T)}function Ke(T){const v=T.textures;for(let B=0,K=v.length;B<K;B++){const Q=v[B];if(g(Q)){const q=S(T),ve=i.get(Q).__webglTexture;t.bindTexture(q,ve),m(q),t.unbindTexture()}}}const tt=[],Fe=[];function dt(T){if(T.samples>0){if(pt(T)===!1){const v=T.textures,B=T.width,K=T.height;let Q=n.COLOR_BUFFER_BIT;const q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=i.get(T),oe=v.length>1;if(oe)for(let Ce=0;Ce<v.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const Me=T.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Ce=0;Ce<v.length;Ce++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[Ce]);const te=i.get(v[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,te,0)}n.blitFramebuffer(0,0,B,K,0,0,B,K,Q,n.NEAREST),l===!0&&(tt.length=0,Fe.length=0,tt.push(n.COLOR_ATTACHMENT0+Ce),T.depthBuffer&&T.resolveDepthBuffer===!1&&(tt.push(q),Fe.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Fe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let Ce=0;Ce<v.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,ve.__webglColorRenderbuffer[Ce]);const te=i.get(v[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function I(T){return Math.min(r.maxSamples,T.samples)}function pt(T){const v=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ne(T){const v=s.render.frame;d.get(T)!==v&&(d.set(T,v),T.update())}function $e(T,v){const B=T.colorSpace,K=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==Ji&&B!==ni&&(Je.getTransfer(B)===at?(K!==hn||Q!==Qt)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",B)),v}function _e(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=k,this.setTexture2D=A,this.setTexture2DArray=C,this.setTexture3D=U,this.setTextureCube=Y,this.rebindTextures=ft,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function w_(n,e){function t(i,r=ni){let a;const s=Je.getTransfer(r);if(i===Qt)return n.UNSIGNED_BYTE;if(i===Lo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Io)return n.UNSIGNED_SHORT_5_5_5_1;if(i===id)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===rd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===td)return n.BYTE;if(i===nd)return n.SHORT;if(i===Tr)return n.UNSIGNED_SHORT;if(i===Co)return n.INT;if(i===Sn)return n.UNSIGNED_INT;if(i===_n)return n.FLOAT;if(i===Gn)return n.HALF_FLOAT;if(i===ad)return n.ALPHA;if(i===sd)return n.RGB;if(i===hn)return n.RGBA;if(i===Wn)return n.DEPTH_COMPONENT;if(i===xi)return n.DEPTH_STENCIL;if(i===od)return n.RED;if(i===Uo)return n.RED_INTEGER;if(i===ji)return n.RG;if(i===Fo)return n.RG_INTEGER;if(i===No)return n.RGBA_INTEGER;if(i===pa||i===ma||i===ga||i===va)if(s===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===pa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ma)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ga)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===va)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===pa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ma)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ga)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===va)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ks||i===zs||i===Vs||i===Hs)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===ks)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zs)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vs)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hs)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gs||i===Ws||i===Xs||i===qs||i===Ys||i===Zs||i===Ks)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Gs||i===Ws)return s===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Xs)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===qs)return a.COMPRESSED_R11_EAC;if(i===Ys)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Zs)return a.COMPRESSED_RG11_EAC;if(i===Ks)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===js||i===Js||i===$s||i===Qs||i===eo||i===to||i===no||i===io||i===ro||i===ao||i===so||i===oo||i===lo||i===co)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===js)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Js)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$s)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qs)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===eo)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===to)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===no)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===io)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ro)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ao)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===so)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===oo)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===lo)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===co)return s===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===uo||i===ho||i===fo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===uo)return s===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ho)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===po||i===mo||i===go||i===vo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===po)return a.COMPRESSED_RED_RGTC1_EXT;if(i===mo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===go)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ar?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const D_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class P_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new vd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new bn({vertexShader:D_,fragmentShader:R_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new St(new Ia(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class C_ extends Si{constructor(e,t){super();const i=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,d=null,f=null,u=null,h=null,p=null;const _=typeof XRWebGLBinding<"u",g=new P_,m={},S=t.getContextAttributes();let E=null,y=null;const R=[],w=[],D=new pe;let x=null;const b=new nn;b.viewport=new _t;const W=new nn;W.viewport=new _t;const P=[b,W],k=new Vp;let z=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ie=R[j];return ie===void 0&&(ie=new Ja,R[j]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(j){let ie=R[j];return ie===void 0&&(ie=new Ja,R[j]=ie),ie.getGripSpace()},this.getHand=function(j){let ie=R[j];return ie===void 0&&(ie=new Ja,R[j]=ie),ie.getHandSpace()};function A(j){const ie=w.indexOf(j.inputSource);if(ie===-1)return;const ee=R[ie];ee!==void 0&&(ee.update(j.inputSource,j.frame,c||s),ee.dispatchEvent({type:j.type,data:j.inputSource}))}function C(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",C),r.removeEventListener("inputsourceschange",U);for(let j=0;j<R.length;j++){const ie=w[j];ie!==null&&(w[j]=null,R[j].disconnect(ie))}z=null,G=null,g.reset();for(const j in m)delete m[j];e.setRenderTarget(E),h=null,u=null,f=null,r=null,y=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){a=j,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",C),r.addEventListener("inputsourceschange",U),S.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(D),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,Pe=null,Te=null;S.depth&&(Te=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=S.stencil?xi:Wn,Pe=S.stencil?Ar:Sn);const Le={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:a};f=this.getBinding(),u=f.createProjectionLayer(Le),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Mn(u.textureWidth,u.textureHeight,{format:hn,type:Qt,depthTexture:new Dr(u.textureWidth,u.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ee={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};h=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new Mn(h.framebufferWidth,h.framebufferHeight,{format:hn,type:Qt,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function U(j){for(let ie=0;ie<j.removed.length;ie++){const ee=j.removed[ie],Pe=w.indexOf(ee);Pe>=0&&(w[Pe]=null,R[Pe].disconnect(ee))}for(let ie=0;ie<j.added.length;ie++){const ee=j.added[ie];let Pe=w.indexOf(ee);if(Pe===-1){for(let Le=0;Le<R.length;Le++)if(Le>=w.length){w.push(ee),Pe=Le;break}else if(w[Le]===null){w[Le]=ee,Pe=Le;break}if(Pe===-1)break}const Te=R[Pe];Te&&Te.connect(ee)}}const Y=new N,J=new N;function $(j,ie,ee){Y.setFromMatrixPosition(ie.matrixWorld),J.setFromMatrixPosition(ee.matrixWorld);const Pe=Y.distanceTo(J),Te=ie.projectionMatrix.elements,Le=ee.projectionMatrix.elements,ft=Te[14]/(Te[10]-1),Ge=Te[14]/(Te[10]+1),Ke=(Te[9]+1)/Te[5],tt=(Te[9]-1)/Te[5],Fe=(Te[8]-1)/Te[0],dt=(Le[8]+1)/Le[0],I=ft*Fe,pt=ft*dt,Ne=Pe/(-Fe+dt),$e=Ne*-Fe;if(ie.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX($e),j.translateZ(Ne),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Te[10]===-1)j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const _e=ft+Ne,T=Ge+Ne,v=I-$e,B=pt+(Pe-$e),K=Ke*Ge/T*_e,Q=tt*Ge/T*_e;j.projectionMatrix.makePerspective(v,B,K,Q,_e,T),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function re(j,ie){ie===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ie.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let ie=j.near,ee=j.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(ee=g.depthFar)),k.near=W.near=b.near=ie,k.far=W.far=b.far=ee,(z!==k.near||G!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),z=k.near,G=k.far),k.layers.mask=j.layers.mask|6,b.layers.mask=k.layers.mask&-5,W.layers.mask=k.layers.mask&-3;const Pe=j.parent,Te=k.cameras;re(k,Pe);for(let Le=0;Le<Te.length;Le++)re(Te[Le],Pe);Te.length===2?$(k,b,W):k.projectionMatrix.copy(b.projectionMatrix),ce(j,k,Pe)};function ce(j,ie,ee){ee===null?j.matrix.copy(ie.matrixWorld):(j.matrix.copy(ee.matrixWorld),j.matrix.invert(),j.matrix.multiply(ie.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=_o*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&h===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(j){return m[j]};let De=null;function it(j,ie){if(d=ie.getViewerPose(c||s),p=ie,d!==null){const ee=d.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let Pe=!1;ee.length!==k.cameras.length&&(k.cameras.length=0,Pe=!0);for(let Ge=0;Ge<ee.length;Ge++){const Ke=ee[Ge];let tt=null;if(h!==null)tt=h.getViewport(Ke);else{const dt=f.getViewSubImage(u,Ke);tt=dt.viewport,Ge===0&&(e.setRenderTargetTextures(y,dt.colorTexture,dt.depthStencilTexture),e.setRenderTarget(y))}let Fe=P[Ge];Fe===void 0&&(Fe=new nn,Fe.layers.enable(Ge),Fe.viewport=new _t,P[Ge]=Fe),Fe.matrix.fromArray(Ke.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Ke.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(tt.x,tt.y,tt.width,tt.height),Ge===0&&(k.matrix.copy(Fe.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Pe===!0&&k.cameras.push(Fe)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const Ge=f.getDepthInformation(ee[0]);Ge&&Ge.isValid&&Ge.texture&&g.init(Ge,r.renderState)}if(Te&&Te.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let Ge=0;Ge<ee.length;Ge++){const Ke=ee[Ge].camera;if(Ke){let tt=m[Ke];tt||(tt=new vd,m[Ke]=tt);const Fe=f.getCameraImage(Ke);tt.sourceTexture=Fe}}}}for(let ee=0;ee<R.length;ee++){const Pe=w[ee],Te=R[ee];Pe!==null&&Te!==void 0&&Te.update(Pe,ie,c||s)}De&&De(j,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),p=null}const je=new Pd;je.setAnimationLoop(it),this.setAnimationLoop=function(j){De=j},this.dispose=function(){}}}const pi=new En,L_=new mt;function I_(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,wd(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,S,E,y){m.isMeshBasicMaterial?a(g,m):m.isMeshLambertMaterial?(a(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(a(g,m),f(g,m)):m.isMeshPhongMaterial?(a(g,m),d(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(a(g,m),u(g,m),m.isMeshPhysicalMaterial&&h(g,m,y)):m.isMeshMatcapMaterial?(a(g,m),p(g,m)):m.isMeshDepthMaterial?a(g,m):m.isMeshDistanceMaterial?(a(g,m),_(g,m)):m.isMeshNormalMaterial?a(g,m):m.isLineBasicMaterial?(s(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,S,E):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Zt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Zt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const S=e.get(m),E=S.envMap,y=S.envMapRotation;E&&(g.envMap.value=E,pi.copy(y),pi.x*=-1,pi.y*=-1,pi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),g.envMapRotation.value.setFromMatrix4(L_.makeRotationFromEuler(pi)),g.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function s(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,S,E){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=E*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function d(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function h(g,m,S){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Zt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const S=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function U_(n,e,t,i){let r={},a={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const y=E.program;i.uniformBlockBinding(S,y)}function c(S,E){let y=r[S.id];y===void 0&&(p(S),y=d(S),r[S.id]=y,S.addEventListener("dispose",g));const R=E.program;i.updateUBOMapping(S,R);const w=e.render.frame;a[S.id]!==w&&(u(S),a[S.id]=w)}function d(S){const E=f();S.__bindingPointIndex=E;const y=n.createBuffer(),R=S.__size,w=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,R,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,y),y}function f(){for(let S=0;S<o;S++)if(s.indexOf(S)===-1)return s.push(S),S;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const E=r[S.id],y=S.uniforms,R=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let w=0,D=y.length;w<D;w++){const x=Array.isArray(y[w])?y[w]:[y[w]];for(let b=0,W=x.length;b<W;b++){const P=x[b];if(h(P,w,b,R)===!0){const k=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let A=0;A<z.length;A++){const C=z[A],U=_(C);typeof C=="number"||typeof C=="boolean"?(P.__data[0]=C,n.bufferSubData(n.UNIFORM_BUFFER,k+G,P.__data)):C.isMatrix3?(P.__data[0]=C.elements[0],P.__data[1]=C.elements[1],P.__data[2]=C.elements[2],P.__data[3]=0,P.__data[4]=C.elements[3],P.__data[5]=C.elements[4],P.__data[6]=C.elements[5],P.__data[7]=0,P.__data[8]=C.elements[6],P.__data[9]=C.elements[7],P.__data[10]=C.elements[8],P.__data[11]=0):(C.toArray(P.__data,G),G+=U.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(S,E,y,R){const w=S.value,D=E+"_"+y;if(R[D]===void 0)return typeof w=="number"||typeof w=="boolean"?R[D]=w:R[D]=w.clone(),!0;{const x=R[D];if(typeof w=="number"||typeof w=="boolean"){if(x!==w)return R[D]=w,!0}else if(x.equals(w)===!1)return x.copy(w),!0}return!1}function p(S){const E=S.uniforms;let y=0;const R=16;for(let D=0,x=E.length;D<x;D++){const b=Array.isArray(E[D])?E[D]:[E[D]];for(let W=0,P=b.length;W<P;W++){const k=b[W],z=Array.isArray(k.value)?k.value:[k.value];for(let G=0,A=z.length;G<A;G++){const C=z[G],U=_(C),Y=y%R,J=Y%U.boundary,$=Y+J;y+=J,$!==0&&R-$<U.storage&&(y+=R-$),k.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=U.storage}}}const w=y%R;return w>0&&(y+=R-w),S.__size=y,S.__cache={},this}function _(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ie("WebGLRenderer: Unsupported uniform value type.",S),E}function g(S){const E=S.target;E.removeEventListener("dispose",g);const y=s.indexOf(E.__bindingPointIndex);s.splice(y,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete a[E.id]}function m(){for(const S in r)n.deleteBuffer(r[S]);s=[],r={},a={}}return{bind:l,update:c,dispose:m}}const F_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mn=null;function N_(){return mn===null&&(mn=new qf(F_,16,16,ji,Gn),mn.name="DFG_LUT",mn.minFilter=kt,mn.magFilter=kt,mn.wrapS=Fn,mn.wrapT=Fn,mn.generateMipmaps=!1,mn.needsUpdate=!0),mn}class B_{constructor(e={}){const{canvas:t=Sf(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:h=Qt}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;const _=h,g=new Set([No,Fo,Uo]),m=new Set([Qt,Sn,Tr,Ar,Lo,Io]),S=new Uint32Array(4),E=new Int32Array(4);let y=null,R=null;const w=[],D=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let W=!1;this._outputColorSpace=$t;let P=0,k=0,z=null,G=-1,A=null;const C=new _t,U=new _t;let Y=null;const J=new Ve(0);let $=0,re=t.width,ce=t.height,De=1,it=null,je=null;const j=new _t(0,0,re,ce),ie=new _t(0,0,re,ce);let ee=!1;const Pe=new Vo;let Te=!1,Le=!1;const ft=new mt,Ge=new N,Ke=new _t,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function dt(){return z===null?De:1}let I=i;function pt(M,O){return t.getContext(M,O)}try{const M={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ro}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",ut,!1),I===null){const O="webgl2";if(I=pt(O,M),I===null)throw pt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw et("WebGLRenderer: "+M.message),M}let Ne,$e,_e,T,v,B,K,Q,q,ve,oe,Me,Ce,te,se,xe,ye,fe,ke,F,le,ae,me;function ne(){Ne=new Bv(I),Ne.init(),le=new w_(I,Ne),$e=new Rv(I,Ne,e,le),_e=new T_(I,Ne),$e.reversedDepthBuffer&&u&&_e.buffers.depth.setReversed(!0),T=new zv(I),v=new u_,B=new A_(I,Ne,_e,v,$e,le,T),K=new Nv(b),Q=new Xp(I),ae=new wv(I,Q),q=new Ov(I,Q,T,ae),ve=new Hv(I,q,Q,ae,T),fe=new Vv(I,$e,B),se=new Pv(v),oe=new d_(b,K,Ne,$e,ae,se),Me=new I_(b,v),Ce=new f_,te=new x_(Ne),ye=new Av(b,K,_e,ve,p,l),xe=new b_(b,ve,$e),me=new U_(I,T,$e,_e),ke=new Dv(I,Ne,T),F=new kv(I,Ne,T),T.programs=oe.programs,b.capabilities=$e,b.extensions=Ne,b.properties=v,b.renderLists=Ce,b.shadowMap=xe,b.state=_e,b.info=T}ne(),_!==Qt&&(x=new Wv(_,t.width,t.height,r,a));const Z=new C_(b,I);this.xr=Z,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=Ne.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ne.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(M){M!==void 0&&(De=M,this.setSize(re,ce,!1))},this.getSize=function(M){return M.set(re,ce)},this.setSize=function(M,O,X=!0){if(Z.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}re=M,ce=O,t.width=Math.floor(M*De),t.height=Math.floor(O*De),X===!0&&(t.style.width=M+"px",t.style.height=O+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(re*De,ce*De).floor()},this.setDrawingBufferSize=function(M,O,X){re=M,ce=O,De=X,t.width=Math.floor(M*X),t.height=Math.floor(O*X),this.setViewport(0,0,M,O)},this.setEffects=function(M){if(_===Qt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let O=0;O<M.length;O++)if(M[O].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(C)},this.getViewport=function(M){return M.copy(j)},this.setViewport=function(M,O,X,H){M.isVector4?j.set(M.x,M.y,M.z,M.w):j.set(M,O,X,H),_e.viewport(C.copy(j).multiplyScalar(De).round())},this.getScissor=function(M){return M.copy(ie)},this.setScissor=function(M,O,X,H){M.isVector4?ie.set(M.x,M.y,M.z,M.w):ie.set(M,O,X,H),_e.scissor(U.copy(ie).multiplyScalar(De).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(M){_e.setScissorTest(ee=M)},this.setOpaqueSort=function(M){it=M},this.setTransparentSort=function(M){je=M},this.getClearColor=function(M){return M.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,X=!0){let H=0;if(M){let V=!1;if(z!==null){const ue=z.texture.format;V=g.has(ue)}if(V){const ue=z.texture.type,ge=m.has(ue),he=ye.getClearColor(),Ee=ye.getClearAlpha(),Ae=he.r,Oe=he.g,We=he.b;ge?(S[0]=Ae,S[1]=Oe,S[2]=We,S[3]=Ee,I.clearBufferuiv(I.COLOR,0,S)):(E[0]=Ae,E[1]=Oe,E[2]=We,E[3]=Ee,I.clearBufferiv(I.COLOR,0,E))}else H|=I.COLOR_BUFFER_BIT}O&&(H|=I.DEPTH_BUFFER_BIT),X&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",ut,!1),ye.dispose(),Ce.dispose(),te.dispose(),v.dispose(),K.dispose(),ve.dispose(),ae.dispose(),me.dispose(),oe.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Ko),Z.removeEventListener("sessionend",jo),oi.stop()};function Se(M){M.preventDefault(),Tl("WebGLRenderer: Context Lost."),W=!0}function Ue(){Tl("WebGLRenderer: Context Restored."),W=!1;const M=T.autoReset,O=xe.enabled,X=xe.autoUpdate,H=xe.needsUpdate,V=xe.type;ne(),T.autoReset=M,xe.enabled=O,xe.autoUpdate=X,xe.needsUpdate=H,xe.type=V}function ut(M){et("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function rt(M){const O=M.target;O.removeEventListener("dispose",rt),An(O)}function An(M){wn(M),v.remove(M)}function wn(M){const O=v.get(M).programs;O!==void 0&&(O.forEach(function(X){oe.releaseProgram(X)}),M.isShaderMaterial&&oe.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,X,H,V,ue){O===null&&(O=tt);const ge=V.isMesh&&V.matrixWorld.determinant()<0,he=Zd(M,O,X,H,V);_e.setMaterial(H,ge);let Ee=X.index,Ae=1;if(H.wireframe===!0){if(Ee=q.getWireframeAttribute(X),Ee===void 0)return;Ae=2}const Oe=X.drawRange,We=X.attributes.position;let we=Oe.start*Ae,st=(Oe.start+Oe.count)*Ae;ue!==null&&(we=Math.max(we,ue.start*Ae),st=Math.min(st,(ue.start+ue.count)*Ae)),Ee!==null?(we=Math.max(we,0),st=Math.min(st,Ee.count)):We!=null&&(we=Math.max(we,0),st=Math.min(st,We.count));const xt=st-we;if(xt<0||xt===1/0)return;ae.setup(V,H,he,X,Ee);let vt,ot=ke;if(Ee!==null&&(vt=Q.get(Ee),ot=F,ot.setIndex(vt)),V.isMesh)H.wireframe===!0?(_e.setLineWidth(H.wireframeLinewidth*dt()),ot.setMode(I.LINES)):ot.setMode(I.TRIANGLES);else if(V.isLine){let Nt=H.linewidth;Nt===void 0&&(Nt=1),_e.setLineWidth(Nt*dt()),V.isLineSegments?ot.setMode(I.LINES):V.isLineLoop?ot.setMode(I.LINE_LOOP):ot.setMode(I.LINE_STRIP)}else V.isPoints?ot.setMode(I.POINTS):V.isSprite&&ot.setMode(I.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Ea("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))ot.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Nt=V._multiDrawStarts,be=V._multiDrawCounts,Kt=V._multiDrawCount,Qe=Ee?Q.get(Ee).bytesPerElement:1,sn=v.get(H).currentProgram.getUniforms();for(let fn=0;fn<Kt;fn++)sn.setValue(I,"_gl_DrawID",fn),ot.render(Nt[fn]/Qe,be[fn])}else if(V.isInstancedMesh)ot.renderInstances(we,xt,V.count);else if(X.isInstancedBufferGeometry){const Nt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,be=Math.min(X.instanceCount,Nt);ot.renderInstances(we,xt,be)}else ot.render(we,xt)};function Zo(M,O,X){M.transparent===!0&&M.side===dn&&M.forceSinglePass===!1?(M.side=Zt,M.needsUpdate=!0,Nr(M,O,X),M.side=ai,M.needsUpdate=!0,Nr(M,O,X),M.side=dn):Nr(M,O,X)}this.compile=function(M,O,X=null){X===null&&(X=M),R=te.get(X),R.init(O),D.push(R),X.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(R.pushLight(V),V.castShadow&&R.pushShadow(V))}),M!==X&&M.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(R.pushLight(V),V.castShadow&&R.pushShadow(V))}),R.setupLights();const H=new Set;return M.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ue=V.material;if(ue)if(Array.isArray(ue))for(let ge=0;ge<ue.length;ge++){const he=ue[ge];Zo(he,X,V),H.add(he)}else Zo(ue,X,V),H.add(ue)}),R=D.pop(),H},this.compileAsync=function(M,O,X=null){const H=this.compile(M,O,X);return new Promise(V=>{function ue(){if(H.forEach(function(ge){v.get(ge).currentProgram.isReady()&&H.delete(ge)}),H.size===0){V(M);return}setTimeout(ue,10)}Ne.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Ba=null;function Yd(M){Ba&&Ba(M)}function Ko(){oi.stop()}function jo(){oi.start()}const oi=new Pd;oi.setAnimationLoop(Yd),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(M){Ba=M,Z.setAnimationLoop(M),M===null?oi.stop():oi.start()},Z.addEventListener("sessionstart",Ko),Z.addEventListener("sessionend",jo),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;const X=Z.enabled===!0&&Z.isPresenting===!0,H=x!==null&&(z===null||X)&&x.begin(b,z);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(O),O=Z.getCamera()),M.isScene===!0&&M.onBeforeRender(b,M,O,z),R=te.get(M,D.length),R.init(O),D.push(R),ft.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Pe.setFromProjectionMatrix(ft,xn,O.reversedDepth),Le=this.localClippingEnabled,Te=se.init(this.clippingPlanes,Le),y=Ce.get(M,w.length),y.init(),w.push(y),Z.enabled===!0&&Z.isPresenting===!0){const ge=b.xr.getDepthSensingMesh();ge!==null&&Oa(ge,O,-1/0,b.sortObjects)}Oa(M,O,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(it,je),Fe=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Fe&&ye.addToRenderList(y,M),this.info.render.frame++,Te===!0&&se.beginShadows();const V=R.state.shadowsArray;if(xe.render(V,M,O),Te===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&x.hasRenderPass())===!1){const ge=y.opaque,he=y.transmissive;if(R.setupLights(),O.isArrayCamera){const Ee=O.cameras;if(he.length>0)for(let Ae=0,Oe=Ee.length;Ae<Oe;Ae++){const We=Ee[Ae];$o(ge,he,M,We)}Fe&&ye.render(M);for(let Ae=0,Oe=Ee.length;Ae<Oe;Ae++){const We=Ee[Ae];Jo(y,M,We,We.viewport)}}else he.length>0&&$o(ge,he,M,O),Fe&&ye.render(M),Jo(y,M,O)}z!==null&&k===0&&(B.updateMultisampleRenderTarget(z),B.updateRenderTargetMipmap(z)),H&&x.end(b),M.isScene===!0&&M.onAfterRender(b,M,O),ae.resetDefaultState(),G=-1,A=null,D.pop(),D.length>0?(R=D[D.length-1],Te===!0&&se.setGlobalState(b.clippingPlanes,R.state.camera)):R=null,w.pop(),w.length>0?y=w[w.length-1]:y=null};function Oa(M,O,X,H){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)R.pushLight(M),M.castShadow&&R.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Pe.intersectsSprite(M)){H&&Ke.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ft);const ge=ve.update(M),he=M.material;he.visible&&y.push(M,ge,he,X,Ke.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Pe.intersectsObject(M))){const ge=ve.update(M),he=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ke.copy(M.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ke.copy(ge.boundingSphere.center)),Ke.applyMatrix4(M.matrixWorld).applyMatrix4(ft)),Array.isArray(he)){const Ee=ge.groups;for(let Ae=0,Oe=Ee.length;Ae<Oe;Ae++){const We=Ee[Ae],we=he[We.materialIndex];we&&we.visible&&y.push(M,ge,we,X,Ke.z,We)}}else he.visible&&y.push(M,ge,he,X,Ke.z,null)}}const ue=M.children;for(let ge=0,he=ue.length;ge<he;ge++)Oa(ue[ge],O,X,H)}function Jo(M,O,X,H){const{opaque:V,transmissive:ue,transparent:ge}=M;R.setupLightsView(X),Te===!0&&se.setGlobalState(b.clippingPlanes,X),H&&_e.viewport(C.copy(H)),V.length>0&&Fr(V,O,X),ue.length>0&&Fr(ue,O,X),ge.length>0&&Fr(ge,O,X),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function $o(M,O,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[H.id]===void 0){const we=Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[H.id]=new Mn(1,1,{generateMipmaps:!0,type:we?Gn:Qt,minFilter:_i,samples:$e.samples,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace})}const ue=R.state.transmissionRenderTarget[H.id],ge=H.viewport||C;ue.setSize(ge.z*b.transmissionResolutionScale,ge.w*b.transmissionResolutionScale);const he=b.getRenderTarget(),Ee=b.getActiveCubeFace(),Ae=b.getActiveMipmapLevel();b.setRenderTarget(ue),b.getClearColor(J),$=b.getClearAlpha(),$<1&&b.setClearColor(16777215,.5),b.clear(),Fe&&ye.render(X);const Oe=b.toneMapping;b.toneMapping=yn;const We=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),R.setupLightsView(H),Te===!0&&se.setGlobalState(b.clippingPlanes,H),Fr(M,X,H),B.updateMultisampleRenderTarget(ue),B.updateRenderTargetMipmap(ue),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let st=0,xt=O.length;st<xt;st++){const vt=O[st],{object:ot,geometry:Nt,material:be,group:Kt}=vt;if(be.side===dn&&ot.layers.test(H.layers)){const Qe=be.side;be.side=Zt,be.needsUpdate=!0,Qo(ot,X,H,Nt,be,Kt),be.side=Qe,be.needsUpdate=!0,we=!0}}we===!0&&(B.updateMultisampleRenderTarget(ue),B.updateRenderTargetMipmap(ue))}b.setRenderTarget(he,Ee,Ae),b.setClearColor(J,$),We!==void 0&&(H.viewport=We),b.toneMapping=Oe}function Fr(M,O,X){const H=O.isScene===!0?O.overrideMaterial:null;for(let V=0,ue=M.length;V<ue;V++){const ge=M[V],{object:he,geometry:Ee,group:Ae}=ge;let Oe=ge.material;Oe.allowOverride===!0&&H!==null&&(Oe=H),he.layers.test(X.layers)&&Qo(he,O,X,Ee,Oe,Ae)}}function Qo(M,O,X,H,V,ue){M.onBeforeRender(b,O,X,H,V,ue),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(b,O,X,H,M,ue),V.transparent===!0&&V.side===dn&&V.forceSinglePass===!1?(V.side=Zt,V.needsUpdate=!0,b.renderBufferDirect(X,O,H,V,M,ue),V.side=ai,V.needsUpdate=!0,b.renderBufferDirect(X,O,H,V,M,ue),V.side=dn):b.renderBufferDirect(X,O,H,V,M,ue),M.onAfterRender(b,O,X,H,V,ue)}function Nr(M,O,X){O.isScene!==!0&&(O=tt);const H=v.get(M),V=R.state.lights,ue=R.state.shadowsArray,ge=V.state.version,he=oe.getParameters(M,V.state,ue,O,X),Ee=oe.getProgramCacheKey(he);let Ae=H.programs;H.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?O.environment:null,H.fog=O.fog;const Oe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;H.envMap=K.get(M.envMap||H.environment,Oe),H.envMapRotation=H.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,Ae===void 0&&(M.addEventListener("dispose",rt),Ae=new Map,H.programs=Ae);let We=Ae.get(Ee);if(We!==void 0){if(H.currentProgram===We&&H.lightsStateVersion===ge)return tl(M,he),We}else he.uniforms=oe.getUniforms(M),M.onBeforeCompile(he,b),We=oe.acquireProgram(he,Ee),Ae.set(Ee,We),H.uniforms=he.uniforms;const we=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(we.clippingPlanes=se.uniform),tl(M,he),H.needsLights=jd(M),H.lightsStateVersion=ge,H.needsLights&&(we.ambientLightColor.value=V.state.ambient,we.lightProbe.value=V.state.probe,we.directionalLights.value=V.state.directional,we.directionalLightShadows.value=V.state.directionalShadow,we.spotLights.value=V.state.spot,we.spotLightShadows.value=V.state.spotShadow,we.rectAreaLights.value=V.state.rectArea,we.ltc_1.value=V.state.rectAreaLTC1,we.ltc_2.value=V.state.rectAreaLTC2,we.pointLights.value=V.state.point,we.pointLightShadows.value=V.state.pointShadow,we.hemisphereLights.value=V.state.hemi,we.directionalShadowMatrix.value=V.state.directionalShadowMatrix,we.spotLightMatrix.value=V.state.spotLightMatrix,we.spotLightMap.value=V.state.spotLightMap,we.pointShadowMatrix.value=V.state.pointShadowMatrix),H.currentProgram=We,H.uniformsList=null,We}function el(M){if(M.uniformsList===null){const O=M.currentProgram.getUniforms();M.uniformsList=xa.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function tl(M,O){const X=v.get(M);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function Zd(M,O,X,H,V){O.isScene!==!0&&(O=tt),B.resetTextureUnits();const ue=O.fog,ge=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?O.environment:null,he=z===null?b.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Ji,Ee=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ae=K.get(H.envMap||ge,Ee),Oe=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,We=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),we=!!X.morphAttributes.position,st=!!X.morphAttributes.normal,xt=!!X.morphAttributes.color;let vt=yn;H.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(vt=b.toneMapping);const ot=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Nt=ot!==void 0?ot.length:0,be=v.get(H),Kt=R.state.lights;if(Te===!0&&(Le===!0||M!==A)){const Dt=M===A&&H.id===G;se.setState(H,M,Dt)}let Qe=!1;H.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Kt.state.version||be.outputColorSpace!==he||V.isBatchedMesh&&be.batching===!1||!V.isBatchedMesh&&be.batching===!0||V.isBatchedMesh&&be.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&be.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&be.instancing===!1||!V.isInstancedMesh&&be.instancing===!0||V.isSkinnedMesh&&be.skinning===!1||!V.isSkinnedMesh&&be.skinning===!0||V.isInstancedMesh&&be.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&be.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&be.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&be.instancingMorph===!1&&V.morphTexture!==null||be.envMap!==Ae||H.fog===!0&&be.fog!==ue||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==se.numPlanes||be.numIntersection!==se.numIntersection)||be.vertexAlphas!==Oe||be.vertexTangents!==We||be.morphTargets!==we||be.morphNormals!==st||be.morphColors!==xt||be.toneMapping!==vt||be.morphTargetsCount!==Nt)&&(Qe=!0):(Qe=!0,be.__version=H.version);let sn=be.currentProgram;Qe===!0&&(sn=Nr(H,O,V));let fn=!1,li=!1,Ei=!1;const ct=sn.getUniforms(),Ct=be.uniforms;if(_e.useProgram(sn.program)&&(fn=!0,li=!0,Ei=!0),H.id!==G&&(G=H.id,li=!0),fn||A!==M){_e.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ct.setValue(I,"projectionMatrix",M.projectionMatrix),ct.setValue(I,"viewMatrix",M.matrixWorldInverse);const Zn=ct.map.cameraPosition;Zn!==void 0&&Zn.setValue(I,Ge.setFromMatrixPosition(M.matrixWorld)),$e.logarithmicDepthBuffer&&ct.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ct.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),A!==M&&(A=M,li=!0,Ei=!0)}if(be.needsLights&&(Kt.state.directionalShadowMap.length>0&&ct.setValue(I,"directionalShadowMap",Kt.state.directionalShadowMap,B),Kt.state.spotShadowMap.length>0&&ct.setValue(I,"spotShadowMap",Kt.state.spotShadowMap,B),Kt.state.pointShadowMap.length>0&&ct.setValue(I,"pointShadowMap",Kt.state.pointShadowMap,B)),V.isSkinnedMesh){ct.setOptional(I,V,"bindMatrix"),ct.setOptional(I,V,"bindMatrixInverse");const Dt=V.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),ct.setValue(I,"boneTexture",Dt.boneTexture,B))}V.isBatchedMesh&&(ct.setOptional(I,V,"batchingTexture"),ct.setValue(I,"batchingTexture",V._matricesTexture,B),ct.setOptional(I,V,"batchingIdTexture"),ct.setValue(I,"batchingIdTexture",V._indirectTexture,B),ct.setOptional(I,V,"batchingColorTexture"),V._colorsTexture!==null&&ct.setValue(I,"batchingColorTexture",V._colorsTexture,B));const Yn=X.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&fe.update(V,X,sn),(li||be.receiveShadow!==V.receiveShadow)&&(be.receiveShadow=V.receiveShadow,ct.setValue(I,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&O.environment!==null&&(Ct.envMapIntensity.value=O.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=N_()),li&&(ct.setValue(I,"toneMappingExposure",b.toneMappingExposure),be.needsLights&&Kd(Ct,Ei),ue&&H.fog===!0&&Me.refreshFogUniforms(Ct,ue),Me.refreshMaterialUniforms(Ct,H,De,ce,R.state.transmissionRenderTarget[M.id]),xa.upload(I,el(be),Ct,B)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(xa.upload(I,el(be),Ct,B),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ct.setValue(I,"center",V.center),ct.setValue(I,"modelViewMatrix",V.modelViewMatrix),ct.setValue(I,"normalMatrix",V.normalMatrix),ct.setValue(I,"modelMatrix",V.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Dt=H.uniformsGroups;for(let Zn=0,bi=Dt.length;Zn<bi;Zn++){const nl=Dt[Zn];me.update(nl,sn),me.bind(nl,sn)}}return sn}function Kd(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function jd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(M,O,X){const H=v.get(M);H.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),v.get(M.texture).__webglTexture=O,v.get(M.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){const X=v.get(M);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0};const Jd=I.createFramebuffer();this.setRenderTarget=function(M,O=0,X=0){z=M,P=O,k=X;let H=null,V=!1,ue=!1;if(M){const he=v.get(M);if(he.__useDefaultFramebuffer!==void 0){_e.bindFramebuffer(I.FRAMEBUFFER,he.__webglFramebuffer),C.copy(M.viewport),U.copy(M.scissor),Y=M.scissorTest,_e.viewport(C),_e.scissor(U),_e.setScissorTest(Y),G=-1;return}else if(he.__webglFramebuffer===void 0)B.setupRenderTarget(M);else if(he.__hasExternalTextures)B.rebindTextures(M,v.get(M.texture).__webglTexture,v.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Oe=M.depthTexture;if(he.__boundDepthTexture!==Oe){if(Oe!==null&&v.has(Oe)&&(M.width!==Oe.image.width||M.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(M)}}const Ee=M.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ue=!0);const Ae=v.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ae[O])?H=Ae[O][X]:H=Ae[O],V=!0):M.samples>0&&B.useMultisampledRTT(M)===!1?H=v.get(M).__webglMultisampledFramebuffer:Array.isArray(Ae)?H=Ae[X]:H=Ae,C.copy(M.viewport),U.copy(M.scissor),Y=M.scissorTest}else C.copy(j).multiplyScalar(De).floor(),U.copy(ie).multiplyScalar(De).floor(),Y=ee;if(X!==0&&(H=Jd),_e.bindFramebuffer(I.FRAMEBUFFER,H)&&_e.drawBuffers(M,H),_e.viewport(C),_e.scissor(U),_e.setScissorTest(Y),V){const he=v.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,he.__webglTexture,X)}else if(ue){const he=O;for(let Ee=0;Ee<M.textures.length;Ee++){const Ae=v.get(M.textures[Ee]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ee,Ae.__webglTexture,X,he)}}else if(M!==null&&X!==0){const he=v.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,he.__webglTexture,X)}G=-1},this.readRenderTargetPixels=function(M,O,X,H,V,ue,ge,he=0){if(!(M&&M.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=v.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee){_e.bindFramebuffer(I.FRAMEBUFFER,Ee);try{const Ae=M.textures[he],Oe=Ae.format,We=Ae.type;if(M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+he),!$e.textureFormatReadable(Oe)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(We)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-H&&X>=0&&X<=M.height-V&&I.readPixels(O,X,H,V,le.convert(Oe),le.convert(We),ue)}finally{const Ae=z!==null?v.get(z).__webglFramebuffer:null;_e.bindFramebuffer(I.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(M,O,X,H,V,ue,ge,he=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=v.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee)if(O>=0&&O<=M.width-H&&X>=0&&X<=M.height-V){_e.bindFramebuffer(I.FRAMEBUFFER,Ee);const Ae=M.textures[he],Oe=Ae.format,We=Ae.type;if(M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+he),!$e.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const we=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,we),I.bufferData(I.PIXEL_PACK_BUFFER,ue.byteLength,I.STREAM_READ),I.readPixels(O,X,H,V,le.convert(Oe),le.convert(We),0);const st=z!==null?v.get(z).__webglFramebuffer:null;_e.bindFramebuffer(I.FRAMEBUFFER,st);const xt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Ef(I,xt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,we),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ue),I.deleteBuffer(we),I.deleteSync(xt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,X=0){const H=Math.pow(2,-X),V=Math.floor(M.image.width*H),ue=Math.floor(M.image.height*H),ge=O!==null?O.x:0,he=O!==null?O.y:0;B.setTexture2D(M,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,ge,he,V,ue),_e.unbindTexture()};const $d=I.createFramebuffer(),Qd=I.createFramebuffer();this.copyTextureToTexture=function(M,O,X=null,H=null,V=0,ue=0){let ge,he,Ee,Ae,Oe,We,we,st,xt;const vt=M.isCompressedTexture?M.mipmaps[ue]:M.image;if(X!==null)ge=X.max.x-X.min.x,he=X.max.y-X.min.y,Ee=X.isBox3?X.max.z-X.min.z:1,Ae=X.min.x,Oe=X.min.y,We=X.isBox3?X.min.z:0;else{const Ct=Math.pow(2,-V);ge=Math.floor(vt.width*Ct),he=Math.floor(vt.height*Ct),M.isDataArrayTexture?Ee=vt.depth:M.isData3DTexture?Ee=Math.floor(vt.depth*Ct):Ee=1,Ae=0,Oe=0,We=0}H!==null?(we=H.x,st=H.y,xt=H.z):(we=0,st=0,xt=0);const ot=le.convert(O.format),Nt=le.convert(O.type);let be;O.isData3DTexture?(B.setTexture3D(O,0),be=I.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(B.setTexture2DArray(O,0),be=I.TEXTURE_2D_ARRAY):(B.setTexture2D(O,0),be=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const Kt=I.getParameter(I.UNPACK_ROW_LENGTH),Qe=I.getParameter(I.UNPACK_IMAGE_HEIGHT),sn=I.getParameter(I.UNPACK_SKIP_PIXELS),fn=I.getParameter(I.UNPACK_SKIP_ROWS),li=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,vt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,vt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ae),I.pixelStorei(I.UNPACK_SKIP_ROWS,Oe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,We);const Ei=M.isDataArrayTexture||M.isData3DTexture,ct=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){const Ct=v.get(M),Yn=v.get(O),Dt=v.get(Ct.__renderTarget),Zn=v.get(Yn.__renderTarget);_e.bindFramebuffer(I.READ_FRAMEBUFFER,Dt.__webglFramebuffer),_e.bindFramebuffer(I.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let bi=0;bi<Ee;bi++)Ei&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,v.get(M).__webglTexture,V,We+bi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,v.get(O).__webglTexture,ue,xt+bi)),I.blitFramebuffer(Ae,Oe,ge,he,we,st,ge,he,I.DEPTH_BUFFER_BIT,I.NEAREST);_e.bindFramebuffer(I.READ_FRAMEBUFFER,null),_e.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(V!==0||M.isRenderTargetTexture||v.has(M)){const Ct=v.get(M),Yn=v.get(O);_e.bindFramebuffer(I.READ_FRAMEBUFFER,$d),_e.bindFramebuffer(I.DRAW_FRAMEBUFFER,Qd);for(let Dt=0;Dt<Ee;Dt++)Ei?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ct.__webglTexture,V,We+Dt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ct.__webglTexture,V),ct?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Yn.__webglTexture,ue,xt+Dt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Yn.__webglTexture,ue),V!==0?I.blitFramebuffer(Ae,Oe,ge,he,we,st,ge,he,I.COLOR_BUFFER_BIT,I.NEAREST):ct?I.copyTexSubImage3D(be,ue,we,st,xt+Dt,Ae,Oe,ge,he):I.copyTexSubImage2D(be,ue,we,st,Ae,Oe,ge,he);_e.bindFramebuffer(I.READ_FRAMEBUFFER,null),_e.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ct?M.isDataTexture||M.isData3DTexture?I.texSubImage3D(be,ue,we,st,xt,ge,he,Ee,ot,Nt,vt.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(be,ue,we,st,xt,ge,he,Ee,ot,vt.data):I.texSubImage3D(be,ue,we,st,xt,ge,he,Ee,ot,Nt,vt):M.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ue,we,st,ge,he,ot,Nt,vt.data):M.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ue,we,st,vt.width,vt.height,ot,vt.data):I.texSubImage2D(I.TEXTURE_2D,ue,we,st,ge,he,ot,Nt,vt);I.pixelStorei(I.UNPACK_ROW_LENGTH,Kt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Qe),I.pixelStorei(I.UNPACK_SKIP_PIXELS,sn),I.pixelStorei(I.UNPACK_SKIP_ROWS,fn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,li),ue===0&&O.generateMipmaps&&I.generateMipmap(be),_e.unbindTexture()},this.initRenderTarget=function(M){v.get(M).__webglFramebuffer===void 0&&B.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?B.setTextureCube(M,0):M.isData3DTexture?B.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?B.setTexture2DArray(M,0):B.setTexture2D(M,0),_e.unbindTexture()},this.resetState=function(){P=0,k=0,z=null,_e.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const Ac={type:"change"},Yo={type:"start"},Nd={type:"end"},ua=new zo,wc=new ti,O_=Math.cos(70*Af.DEG2RAD),bt=new N,qt=2*Math.PI,lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ts=1e-6;class k_ extends Gp{constructor(e,t=null){super(e,t),this.state=lt.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:kn.ROTATE,MIDDLE:kn.DOLLY,RIGHT:kn.PAN},this.touches={ONE:zi.ROTATE,TWO:zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new si,this._lastTargetPosition=new N,this._quat=new si().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new tc,this._sphericalDelta=new tc,this._scale=1,this._panOffset=new N,this._rotateStart=new pe,this._rotateEnd=new pe,this._rotateDelta=new pe,this._panStart=new pe,this._panEnd=new pe,this._panDelta=new pe,this._dollyStart=new pe,this._dollyEnd=new pe,this._dollyDelta=new pe,this._dollyDirection=new N,this._mouse=new pe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=V_.bind(this),this._onPointerDown=z_.bind(this),this._onPointerUp=H_.bind(this),this._onContextMenu=K_.bind(this),this._onMouseWheel=X_.bind(this),this._onKeyDown=q_.bind(this),this._onTouchStart=Y_.bind(this),this._onTouchMove=Z_.bind(this),this._onMouseDown=G_.bind(this),this._onMouseMove=W_.bind(this),this._interceptControlDown=j_.bind(this),this._interceptControlUp=J_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ac),this.update(),this.state=lt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;bt.copy(t).sub(this.target),bt.applyQuaternion(this._quat),this._spherical.setFromVector3(bt),this.autoRotate&&this.state===lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=qt:i>Math.PI&&(i-=qt),r<-Math.PI?r+=qt:r>Math.PI&&(r-=qt),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=s!=this._spherical.radius}if(bt.setFromSpherical(this._spherical),bt.applyQuaternion(this._quatInverse),t.copy(this.target).add(bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const o=bt.length();s=this._clampDistance(o*this._scale);const l=o-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){const o=new N(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),s=bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(ua.origin.copy(this.object.position),ua.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ua.direction))<O_?this.object.lookAt(this.target):(wc.setFromNormalAndCoplanarPoint(this.object.up,this.target),ua.intersectPlane(wc,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Ts||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ts||this._lastTargetPosition.distanceToSquared(this.target)>Ts?(this.dispatchEvent(Ac),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?qt/60*this.autoRotateSpeed*e:qt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){bt.setFromMatrixColumn(t,0),bt.multiplyScalar(-e),this._panOffset.add(bt)}_panUp(e,t){this.screenSpacePanning===!0?bt.setFromMatrixColumn(t,1):(bt.setFromMatrixColumn(t,0),bt.crossVectors(this.object.up,bt)),bt.multiplyScalar(e),this._panOffset.add(bt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;bt.copy(r).sub(this.target);let a=bt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,a=t-i.top,s=i.width,o=i.height;this._mouse.x=r/s*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(i*i+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(s,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new pe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function z_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function V_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function H_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Nd),this.state=lt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function G_(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case kn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=lt.DOLLY;break;case kn.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=lt.ROTATE}break;case kn.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=lt.PAN}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(Yo)}function W_(n){switch(this.state){case lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function X_(n){this.enabled===!1||this.enableZoom===!1||this.state!==lt.NONE||(n.preventDefault(),this.dispatchEvent(Yo),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Nd))}function q_(n){this.enabled!==!1&&this._handleKeyDown(n)}function Y_(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case zi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=lt.TOUCH_ROTATE;break;case zi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=lt.TOUCH_PAN;break;default:this.state=lt.NONE}break;case 2:switch(this.touches.TWO){case zi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=lt.TOUCH_DOLLY_PAN;break;case zi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=lt.TOUCH_DOLLY_ROTATE;break;default:this.state=lt.NONE}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(Yo)}function Z_(n){switch(this._trackPointer(n),this.state){case lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=lt.NONE}}function K_(n){this.enabled!==!1&&n.preventDefault()}function j_(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function J_(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var gn=null,Pt=null,In=null,yt=null,br=null,Bd=0,Od=0,kd=0;function $_(n){gn=new zf,gn.background=new Ve(1710638),Pt=new nn(60,1,.1,5e4),Pt.position.set(0,0,500),Pt.up.set(0,0,1),In=new B_({canvas:n,antialias:!0,alpha:!1}),In.setPixelRatio(Math.min(window.devicePixelRatio,2)),In.outputColorSpace=$t;var e=new kp(16777215,.6);gn.add(e);var t=new ec(16777215,.8);t.position.set(200,300,500),gn.add(t);var i=new ec(8947916,.3);return i.position.set(-200,-100,200),gn.add(i),yt=new k_(Pt,In.domElement),yt.enableDamping=!0,yt.dampingFactor=.12,yt.screenSpacePanning=!0,yt.maxPolarAngle=Math.PI,yt.mouseButtons={LEFT:kn.PAN,MIDDLE:kn.DOLLY,RIGHT:kn.ROTATE},br=new Hp(2e3,40,3355477,2236996),br.rotation.x=Math.PI/2,gn.add(br),{scene:gn,camera:Pt,renderer:In,controls:yt}}function Dc(n,e){!In||!Pt||(In.setSize(n,e),Pt.aspect=n/e,Pt.updateProjectionMatrix())}function Q_(n,e,t){Bd=n,Od=e,kd=t}function ya(n,e,t){return new N(n-Bd,e-Od,t-kd)}function ex(n){function e(){requestAnimationFrame(e),yt&&yt.update(),In&&gn&&Pt&&In.render(gn,Pt)}e()}function tx(n){if(!(!Pt||!yt)){var e=0;Pt.position.set(0,0,e+1e3),yt.target.set(0,0,e),yt.update()}}function nx(n){if(!(!Pt||!yt)){var e=0;Pt.position.set(500,-500,e+500),yt.target.set(0,0,e),yt.update()}}function ix(n){if(!(!Pt||!yt)){var e=0;Pt.position.set(300,-600,e+300),yt.target.set(0,0,e),yt.update()}}function rx(n,e,t,i,r,a){if(!(!Pt||!yt)){var s=(n+e)/2,o=(t+i)/2,l=(r+a)/2,c=e-n,d=i-t,f=a-r,u=Math.max(c,d,f),h=u*1.5;yt.target.set(s,o,l),Pt.position.set(s+h*.5,o-h*.7,l+h*.5),yt.update()}}function ax(n){br&&(br.visible=n)}function or(){return gn}var an={};function As(n){if(n<.2){var e=n/.2;return new Ve(.1,.2+e*.4,.6-e*.2)}else if(n<.4){var e=(n-.2)/.2;return new Ve(.1+e*.3,.6+e*.2,.2-e*.1)}else if(n<.6){var e=(n-.4)/.2;return new Ve(.4+e*.5,.8-e*.1,.1)}else if(n<.8){var e=(n-.6)/.2;return new Ve(.9,.7-e*.3,.1)}else{var e=(n-.8)/.2;return new Ve(.9+e*.1,.4-e*.2,.1+e*.1)}}function sx(n,e,t,i){var r=or();if(!r||!e||e.length===0||!t||t.length===0)return null;for(var a=i||{},s=a.opacity!==void 0?a.opacity:.85,o=a.visible!==void 0?a.visible:!0,l=1/0,c=-1/0,d=0;d<e.length;d++){var f=e[d].z||0;f<l&&(l=f),f>c&&(c=f)}var u=c-l;u<.01&&(u=1);for(var h=new Float32Array(t.length*3*3),p=new Float32Array(t.length*3*3),_=0,g=0;g<t.length;g++){var m=t[g],S=m.a!==void 0?m.a:m[0],E=m.b!==void 0?m.b:m[1],y=m.c!==void 0?m.c:m[2];if(!(S>=e.length||E>=e.length||y>=e.length)){var R=e[S],w=e[E],D=e[y],x=ya(R.x,R.y,R.z||0),b=ya(w.x,w.y,w.z||0),W=ya(D.x,D.y,D.z||0);h[_*9+0]=x.x,h[_*9+1]=x.y,h[_*9+2]=x.z,h[_*9+3]=b.x,h[_*9+4]=b.y,h[_*9+5]=b.z,h[_*9+6]=W.x,h[_*9+7]=W.y,h[_*9+8]=W.z;var P=((R.z||0)-l)/u,k=((w.z||0)-l)/u,z=((D.z||0)-l)/u,G=As(P),A=As(k),C=As(z);p[_*9+0]=G.r,p[_*9+1]=G.g,p[_*9+2]=G.b,p[_*9+3]=A.r,p[_*9+4]=A.g,p[_*9+5]=A.b,p[_*9+6]=C.r,p[_*9+7]=C.g,p[_*9+8]=C.b,_++}}var U=new Float32Array(h.buffer,0,_*9),Y=new Float32Array(p.buffer,0,_*9),J=new Wt;J.setAttribute("position",new rn(U,3)),J.setAttribute("color",new rn(Y,3)),J.computeVertexNormals();var $=new Nn({vertexColors:!0,side:dn,transparent:s<1,opacity:s,shininess:10,flatShading:!1}),re=new St(J,$);re.name="surface_"+n,re.visible=o,r.add(re);var ce=new La({color:4473958,wireframe:!0,transparent:!0,opacity:.15}),De=new St(J.clone(),ce);return De.name="wireframe_"+n,De.visible=!1,r.add(De),an[n]={mesh:re,wireframe:De,minZ:l,maxZ:c,triCount:_},an[n]}function ox(n,e){var t=an[n];t&&(t.mesh.visible=e,t.wireframe.visible&&!e&&(t.wireframe.visible=!1))}function lx(n,e){var t=an[n];t&&t.mesh.material&&(t.mesh.material.transparent=e<1,t.mesh.material.opacity=e,t.mesh.material.needsUpdate=!0)}function cx(n,e){var t=an[n];t&&(t.wireframe.visible=e&&t.mesh.visible)}function dx(n){for(var e=Object.keys(an),t=0;t<e.length;t++)cx(e[t],n)}function ux(){var n=Object.keys(an);if(n.length===0)return null;for(var e=1/0,t=-1/0,i=1/0,r=-1/0,a=1/0,s=-1/0,o=0;o<n.length;o++){var l=an[n[o]],c=new rr().setFromObject(l.mesh);c.min.x<e&&(e=c.min.x),c.max.x>t&&(t=c.max.x),c.min.y<i&&(i=c.min.y),c.max.y>r&&(r=c.max.y),c.min.z<a&&(a=c.min.z),c.max.z>s&&(s=c.max.z)}return{minX:e,maxX:t,minY:i,maxY:r,minZ:a,maxZ:s}}function hx(){for(var n=or(),e=Object.keys(an),t=0;t<e.length;t++){var i=an[e[t]];n&&(n.remove(i.mesh),n.remove(i.wireframe)),i.mesh.geometry.dispose(),i.mesh.material.dispose(),i.wireframe.geometry.dispose(),i.wireframe.material.dispose()}an={}}function fx(){return Object.keys(an)}var Hn={},Aa={planned:5592422,drilling:3900150,loading:16096779,blastDay:15680580,completed:2278750,active:3900150};function px(n,e,t,i){var r=or();if(!r||!e||e.length<3)return null;for(var a=t||0,s=Aa[i]||Aa.planned,o=[],l=0;l<e.length;l++){var c=e[l],d=ya(c.x,c.y,c.z||a);o.push(d)}o.length>0&&o.push(o[0].clone());var f=new Wt().setFromPoints(o),u=new Ho({color:s,linewidth:2}),h=new md(f,u);h.name="blast_outline_"+n,r.add(h);var p=new Sd;p.moveTo(o[0].x,o[0].y);for(var l=1;l<o.length-1;l++)p.lineTo(o[l].x,o[l].y);p.closePath();for(var _=new Xo(p),g=_.attributes.position.array,l=2;l<g.length;l+=3)g[l]=o[0].z;_.attributes.position.needsUpdate=!0,_.computeVertexNormals();var m=new La({color:s,transparent:!0,opacity:.25,side:dn}),S=new St(_,m);S.name="blast_fill_"+n,r.add(S);for(var E=0,y=0,R=o[0].z,l=0;l<o.length-1;l++)E+=o[l].x,y+=o[l].y;return E/=o.length-1,y/=o.length-1,Hn[n]={outline:h,fill:S,centroid:new N(E,y,R),status:i,color:s},Hn[n]}function Rc(n,e){var t=Hn[n];if(t){var i=Aa[e]||Aa.planned;t.outline.material.color.setHex(i),t.fill.material.color.setHex(i),t.status=e,t.color=i}}function Pc(n){var e=Hn[n];return e?e.centroid:null}function mx(n,e){var t=Hn[n];t&&(t.outline.visible=e,t.fill.visible=e)}function gx(n){for(var e=Object.keys(Hn),t=0;t<e.length;t++)mx(e[t],n)}function vx(){for(var n=or(),e=Object.keys(Hn),t=0;t<e.length;t++){var i=Hn[e[t]];n&&(n.remove(i.outline),n.remove(i.fill)),i.outline.geometry.dispose(),i.outline.material.dispose(),i.fill.geometry.dispose(),i.fill.material.dispose()}Hn={}}var Bn={};function _x(n){var e=new Vi,t=n==="D65"?3:4,i=n==="D65"?6:8,r=2,a=new Xn(t,i,r),s=new Nn({color:16096779,flatShading:!0}),o=new St(a,s);o.position.set(0,0,r/2),e.add(o);var l=new Xn(t*.7,i*.3,2.5),c=new Nn({color:1982639,flatShading:!0}),d=new St(l,c);d.position.set(0,-i*.3,r+1.25),e.add(d);var f=n==="D65"?14:20,u=new $i(.3,.4,f,8),h=new Nn({color:13421772,flatShading:!0}),p=new St(u,h);p.rotation.x=Math.PI/2,p.rotation.z=Math.PI/2,p.position.set(0,i*.1,r+f/2),e.add(p);var _=new $i(.1,.1,f*.9,6),g=new Nn({color:8947848}),m=new St(_,g);return m.rotation.x=Math.PI/2,m.rotation.z=Math.PI/2,m.position.set(0,i*.1,r+f*.45),e.add(m),e}function xx(){var n=new Vi,e=new Xn(3,10,1.5),t=new Nn({color:3621201,flatShading:!0}),i=new St(e,t);i.position.set(0,0,1.5),n.add(i);var r=new Xn(2.6,2.5,2.5),a=new Nn({color:14427686,flatShading:!0}),s=new St(r,a);s.position.set(0,-4.5,3),n.add(s);var o=new $i(1.2,1.2,6,12),l=new Nn({color:10265519,flatShading:!0}),c=new St(o,l);c.position.set(0,1,3.5),n.add(c);var d=new $i(.6,.6,.5,8);d.rotateZ(Math.PI/2);for(var f=new Nn({color:1710618}),u=[[-1.8,-3.5,.6],[1.8,-3.5,.6],[-1.8,1,.6],[1.8,1,.6],[-1.8,3,.6],[1.8,3,.6]],h=0;h<u.length;h++){var p=new St(d,f);p.position.set(u[h][0],u[h][1],u[h][2]),n.add(p)}return n}function Cc(n,e,t){var i=or();if(!i)return null;Bn[n]&&i.remove(Bn[n].group);var r;return e==="D65"||e==="PV271"?r=_x(e):r=xx(),r.position.copy(t),r.name="equip_"+n,i.add(r),Bn[n]={group:r,type:e},Bn[n]}function yx(n){for(var e=Object.keys(Bn),t=0;t<e.length;t++)Bn[e[t]].group.visible=n}function zd(){for(var n=or(),e=Object.keys(Bn),t=0;t<e.length;t++)n&&n.remove(Bn[e[t]].group);Bn={}}var Vt=[],qn=0,Ir=!1,Vd=1,qi=null,Eo=null;function Mx(){if(Vt=[],L.blasts.length===0)return Vt;var n=null,e=null;if(L.blasts.forEach(function(o){var l=[o.drillStart,o.loadStart,o.blastDate];if(l.forEach(function(u){u&&((!n||u<n)&&(n=u),(!e||u>e)&&(e=u))}),o.drillStart&&o.drillDays){var c=new Date(o.drillStart);c.setDate(c.getDate()+(o.drillDays||0));var d=Be(c);(!e||d>e)&&(e=d)}if(o.loadStart&&o.loadDays){var f=new Date(o.loadStart);f.setDate(f.getDate()+(o.loadDays||0));var d=Be(f);(!e||d>e)&&(e=d)}}),!n||!e)return Vt;var t=new Date(n),i=new Date(e);i.setDate(i.getDate()+1);for(var r=0;t<=i;){var a=Be(t),s={};L.blasts.forEach(function(o){var l=Sx(o,a);l&&(s[o.name]=l)}),Vt.push({index:r,date:a,blastStates:s}),r++,t.setDate(t.getDate()+1)}return qn=0,Vt}function Sx(n,e){if(n.blastDate&&e===n.blastDate)return{phase:"blastDay",drills:n.assignedDrills||[],mpu:n.assignedMPU||""};if(n.loadStart&&n.loadDays){var t=new Date(n.loadStart);t.setDate(t.getDate()+n.loadDays-1);var i=Be(t);if(e>=n.loadStart&&e<=i)return{phase:"loading",drills:[],mpu:n.assignedMPU||""}}if(n.drillBlocks&&n.drillBlocks.length>0)for(var r=0;r<n.drillBlocks.length;r++){var a=n.drillBlocks[r];if(a.drillStart&&a.drillDays){var s=new Date(a.drillStart);s.setDate(s.getDate()+a.drillDays-1);var o=Be(s);if(e>=a.drillStart&&e<=o)return{phase:"drilling",drills:a.assignedDrills||[],mpu:""}}}else if(n.drillStart&&n.drillDays){var l=new Date(n.drillStart);l.setDate(l.getDate()+n.drillDays-1);var c=Be(l);if(e>=n.drillStart&&e<=c)return{phase:"drilling",drills:n.assignedDrills||[],mpu:""}}return n.blastDate&&e>n.blastDate?{phase:"completed",drills:[],mpu:""}:n.drillStart&&e>=n.drillStart?{phase:"planned",drills:[],mpu:""}:null}function Ex(){return Vt.length===0?null:Vt[qn]||null}function Hd(){return Vt.length}function Ur(n){n<0&&(n=0),n>=Vt.length&&(n=Vt.length-1),qn=n,Eo&&Eo(Vt[qn])}function Gd(){qn<Vt.length-1?Ur(qn+1):Na()}function bx(){qn>0&&Ur(qn-1)}function Tx(){Ur(0)}function Ax(){Ur(Vt.length-1)}function Wd(){if(Vt.length!==0){Ir=!0,qi&&clearInterval(qi);var n=Math.max(50,1e3/Vd);qi=setInterval(function(){qn<Vt.length-1?Gd():Na()},n)}}function Na(){Ir=!1,qi&&(clearInterval(qi),qi=null)}function wx(){Ir?Na():Wd()}function Dx(){return Ir}function Rx(n){Vd=n,Ir&&(Na(),Wd())}function Px(n){Eo=n}var bo=!1,Lc=null;function Cx(){if(!bo){var n=document.getElementById("playbackCanvas"),e=document.getElementById("playbackViewport");if(!(!n||!e)){$_(n);var t=e.getBoundingClientRect();Dc(t.width,t.height),Lc=new ResizeObserver(function(r){for(var a=0;a<r.length;a++){var s=r[a].contentRect;Dc(s.width,s.height)}}),Lc.observe(e),ex(),document.getElementById("pbCamTop").addEventListener("click",function(){tx()}),document.getElementById("pbCamIso").addEventListener("click",function(){nx()}),document.getElementById("pbCamPersp").addEventListener("click",function(){ix()}),document.getElementById("pbShowAllBlasts").addEventListener("change",function(r){gx(r.target.checked)}),document.getElementById("pbShowEquipment").addEventListener("change",function(r){yx(r.target.checked)}),document.getElementById("pbWireframe").addEventListener("change",function(r){dx(r.target.checked)}),document.getElementById("pbGrid").addEventListener("change",function(r){ax(r.target.checked)}),document.getElementById("pbTlStart").addEventListener("click",Tx),document.getElementById("pbTlPrev").addEventListener("click",bx),document.getElementById("pbTlPlay").addEventListener("click",function(){wx(),Ix()}),document.getElementById("pbTlNext").addEventListener("click",Gd),document.getElementById("pbTlEnd").addEventListener("click",Ax),document.getElementById("pbTlRange").addEventListener("input",function(r){Ur(parseInt(r.target.value))});var i=document.querySelectorAll(".pb-speed-btn");i.forEach(function(r){r.addEventListener("click",function(){var a=parseInt(r.getAttribute("data-speed"));Rx(a),i.forEach(function(s){s.classList.remove("active")}),r.classList.add("active")})}),Px(function(r){Xd(r),qd(r)}),bo=!0}}}function Lx(){bo||Cx(),hx(),vx(),zd();var n=!1,e=[],t=[],i=[],r=L.kirraProjectSurfaces||[];r.forEach(function(h){h.bounds?(e.push(h.bounds.minX,h.bounds.maxX),t.push(h.bounds.minY,h.bounds.maxY),i.push(h.bounds.minZ,h.bounds.maxZ),n=!0):h.points&&h.points.length>0&&(h.points.forEach(function(p){e.push(p.x),t.push(p.y),i.push(p.z||0)}),n=!0)}),L.blasts.forEach(function(h){h.polygons&&h.polygons.length>0&&(h.polygons.forEach(function(p){e.push(p.x),t.push(p.y),i.push(p.z||0)}),n=!0)});var a=document.getElementById("playbackNoData");if(a&&(a.style.display=n?"none":"flex"),!!n){var s=e.reduce(function(h,p){return h+p},0)/e.length,o=t.reduce(function(h,p){return h+p},0)/t.length,l=i.reduce(function(h,p){return h+p},0)/i.length;Q_(s,o,l),r.forEach(function(h){h.points&&h.points.length>0&&h.triangles&&h.triangles.length>0&&sx(h.name,h.points,h.triangles,{opacity:h.opacity!==void 0?h.opacity:.85,visible:h.visible!==void 0?h.visible:!0})}),L.blasts.forEach(function(h){if(h.polygons&&h.polygons.length>0){var p=0;h.polygons.forEach(function(_){p+=_.z||0}),p/=h.polygons.length,px(h.name,h.polygons,p,h.status||"planned")}}),Ux();var c=ux();c&&rx(c.minX,c.maxX,c.minY,c.maxY,c.minZ,c.maxZ),Mx();var d=Hd(),f=document.getElementById("pbTlRange");f&&(f.max=Math.max(0,d-1),f.value=0);var u=Ex();u?(Xd(u),qd(u)):(document.getElementById("pbTlDay").textContent="No schedule data",document.getElementById("pbTlDate").textContent="")}}function Xd(n){if(n){var e=Hd();document.getElementById("pbTlDay").textContent="Day "+(n.index+1)+" of "+e,document.getElementById("pbTlDate").textContent=n.date,document.getElementById("pbTlRange").value=n.index}}function Ix(){var n=document.getElementById("pbTlPlay");n&&(n.innerHTML=Dx()?"&#9646;&#9646;":"&#9654;")}function qd(n){if(n){L.blasts.forEach(function(i){var r=n.blastStates[i.name];r?Rc(i.name,r.phase):Rc(i.name,"planned")}),zd();var e={},t=document.getElementById("pbShowEquipment");t&&!t.checked||L.blasts.forEach(function(i){var r=n.blastStates[i.name];if(r&&(r.phase==="drilling"&&r.drills&&r.drills.forEach(function(l){if(!e[l]){var c=Pc(i.name);if(c){var d=Ze.find(function(p){return p.id===l}),f=d?d.type:"PV271",u=Object.keys(e).length*8,h=c.clone();h.x+=u,Cc(l,f,h),e[l]=!0}}}),r.phase==="loading"&&r.mpu)){var a=r.mpu;if(e[a])return;var s=Pc(i.name);if(!s)return;var o=s.clone();o.x-=15,Cc(a,"MPU",o),e[a]=!0}})}}function Ux(){var n=document.getElementById("playbackSurfaceList");if(n){var e=fx();if(e.length===0){n.innerHTML='<div class="playback-empty-msg">No surfaces loaded.<br>Import a Kirra Project or DXF with 3DFACE data.</div>';return}var t="";e.forEach(function(i){t+='<div class="playback-surface-item">',t+='<label class="playback-toggle">',t+='<input type="checkbox" data-surface="'+i+'" class="pb-surf-toggle" checked>',t+=" "+i,t+="</label>",t+='<input type="range" min="0" max="100" value="85" class="pb-surf-opacity" data-surface="'+i+'" title="Opacity">',t+="</div>"}),n.innerHTML=t,n.querySelectorAll(".pb-surf-toggle").forEach(function(i){i.addEventListener("change",function(){ox(i.getAttribute("data-surface"),i.checked)})}),n.querySelectorAll(".pb-surf-opacity").forEach(function(i){i.addEventListener("input",function(){lx(i.getAttribute("data-surface"),parseInt(i.value)/100)})})}}function Fx(){var n=document.querySelector('[data-tab="playback"]');n&&n.addEventListener("click",function(){setTimeout(function(){Lx()},50)})}fh();hh();Cu();mu();Mh();Sh();Ah();Ph();Ih();document.getElementById("btnRefreshGantt").addEventListener("click",function(){Et(),nt()});document.getElementById("btnRecalcDates").addEventListener("click",function(){Et(),nt()});Do("dxfDropZone","dxfFileInput",Uh);Do("kirraDropZone","kirraFileInput",Nh);Do("kirraProjectDropZone","kirraProjectInput",Oh);Et();nt();nr();Da();Lr();Ra();On();kc();zc();Wu();Fx();console.log("Kirra Scheduler initialised.");
