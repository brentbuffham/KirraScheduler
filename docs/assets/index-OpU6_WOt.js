(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function e(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=e(r);fetch(r.href,a)}})();var z={planStart:new Date("2026-02-25"),ganttWeeks:8,rigHours:24,availability:.85,utilisation:.75,editingBlastIdx:null,ctxBlastIdx:null,ctxSection:null,importedBlasts:[],chargeConfigs:[],deps:{drillPctForLoad:.5,drillPctForBlast:1,loadPctForBlast:1,minLeadDays:0,enforceSequence:!0},patterns:[{id:"1.1.01",benchHt:12,diam:229,pf:.6,burden:7.65,spacing:8.85,subdrill:1.5,stemming:4,type:"WASTE"},{id:"1.1.02",benchHt:12,diam:229,pf:.7,burden:7.1,spacing:8.2,subdrill:1.5,stemming:4,type:"WASTE"},{id:"1.1.02a",benchHt:12,diam:229,pf:.8,burden:7,spacing:8,subdrill:1.5,stemming:3.4,type:"WASTE"},{id:"1.1.03",benchHt:12,diam:229,pf:.8,burden:6.5,spacing:7.5,subdrill:1.5,stemming:3.8,type:"WASTE"},{id:"1.1.04",benchHt:12,diam:229,pf:.9,burden:6.25,spacing:7.25,subdrill:1.5,stemming:4,type:"WASTE"},{id:"1.1.05",benchHt:12,diam:229,pf:1,burden:5.95,spacing:6.85,subdrill:1.5,stemming:4,type:"WASTE"},{id:"1.1.06",benchHt:12,diam:229,pf:1.1,burden:5.65,spacing:6.55,subdrill:1.5,stemming:4,type:"YELLOW"},{id:"1.1.07",benchHt:12,diam:229,pf:1.2,burden:5.5,spacing:6.2,subdrill:1.5,stemming:3.8,type:"YELLOW"},{id:"1.1.08",benchHt:12,diam:229,pf:1.3,burden:5.2,spacing:6,subdrill:1.5,stemming:4,type:"YELLOW"},{id:"1.1.09",benchHt:12,diam:229,pf:1.4,burden:5,spacing:5.8,subdrill:1.5,stemming:4,type:"YELLOW"},{id:"1.1.10",benchHt:12,diam:229,pf:1.5,burden:4.85,spacing:5.6,subdrill:1.5,stemming:4,type:"ORE"},{id:"1.1.11",benchHt:12,diam:229,pf:1.6,burden:4.7,spacing:5.4,subdrill:1.5,stemming:4,type:"ORE"},{id:"1.1.12",benchHt:12,diam:229,pf:1.7,burden:4.55,spacing:5.25,subdrill:1.5,stemming:4,type:"ORE"},{id:"1.1.12a",benchHt:12,diam:229,pf:1.75,burden:4.7,spacing:5.2,subdrill:1.6,stemming:3.1,type:"ORE"},{id:"1.1.13",benchHt:12,diam:229,pf:1.8,burden:4.5,spacing:5.2,subdrill:1.5,stemming:3.5,type:"ORE"},{id:"1.1.14",benchHt:12,diam:229,pf:1.9,burden:4.3,spacing:5,subdrill:1.5,stemming:4,type:"ORE"},{id:"1.1.14a",benchHt:12,diam:229,pf:1.9,burden:4.5,spacing:5,subdrill:1.5,stemming:3.7,type:"ORE"},{id:"1.1.15",benchHt:12,diam:229,pf:2,burden:4.4,spacing:4.9,subdrill:1.6,stemming:3.6,type:"ORE"},{id:"1.1.43P12",benchHt:12,diam:127,pf:.6,burden:1,spacing:1.6,subdrill:.6,stemming:2.2,type:"PRESPLIT"},{id:"1.1.44P24",benchHt:24,diam:127,pf:.6,burden:1,spacing:1.8,subdrill:.3,stemming:2.2,type:"PRESPLIT"}],blasts:[{name:"S4_214_410P_V2",mode:"Auto",surfaceArea:0,pattern:"",pctD65:1,pctPV:0,rateD65:19,ratePV:20,numD65:1,numPV:0,loadRate:8e4,d65Meters:3496.4,pvMeters:0,volume:6219,expMass:3064.5,drillStart:"2026-02-21",drillStartTime:"06:00",drillDays:1,loadStart:"2026-02-21",loadDays:1,blastDate:"2026-02-22",status:"active",deps:{drillPctForLoad:null,drillPctForBlast:null,loadPctForBlast:null,minLeadDays:null,predecessor:null},assignedDrills:["D65-01"],assignedMPUs:["MPU-01"],holeTypes:[{type:"PRESPLIT",diam:.127,burden:1,spacing:1.8,holes:138,drillMeters:3496.4,expMass:3168}]},{name:"S4_226_412_V1",mode:"Auto",surfaceArea:0,pattern:"",pctD65:0,pctPV:1,rateD65:17,ratePV:20,numD65:0,numPV:3,loadRate:1e5,d65Meters:1149,pvMeters:5766.4,volume:124236,expMass:236949,drillStart:"2026-02-21",drillStartTime:"06:00",drillDays:3,loadStart:"2026-02-23",loadDays:3,blastDate:"2026-02-26",status:"active",deps:{drillPctForLoad:null,drillPctForBlast:null,loadPctForBlast:null,minLeadDays:null,predecessor:null},assignedDrills:["PV271-01","PV271-02","PV271-03"],assignedMPUs:["MPU-01"],prepStart:"2026-02-19",prepDays:2,assignedAncillary:["EX-01","DZ-01","GR-01"],holeTypes:[{type:"BUFFER",diam:.127,burden:3.8,spacing:2.3,holes:65,drillMeters:882.9,expMass:6416},{type:"PRODUCTION",diam:.165,burden:3.5,spacing:4.7,holes:19,drillMeters:266.1,expMass:5403},{type:"PRODUCTION",diam:.229,burden:4.7,spacing:4.7,holes:420,drillMeters:5768.9,expMass:225812}]},{name:"S4_226_410_V1",mode:"Auto",surfaceArea:0,pattern:"",pctD65:0,pctPV:1,rateD65:19,ratePV:20,numD65:0,numPV:3,loadRate:1e5,d65Meters:2333,pvMeters:7461.8,volume:165245,expMass:326375,drillStart:"2026-02-23",drillStartTime:"10:00",drillDays:7,loadStart:"2026-02-27",loadDays:4,blastDate:"2026-03-02",status:"active",deps:{drillPctForLoad:null,drillPctForBlast:null,loadPctForBlast:null,minLeadDays:null,predecessor:null},assignedDrills:["PV271-01","PV271-02","PV271-03"],assignedMPUs:["MPU-02"],prepStart:"2026-02-21",prepDays:2,assignedAncillary:["EX-01","LD-01","DZ-02"],drillBlocks:[{id:"block-0",label:"A",drillStart:"2026-02-23",drillStartTime:"10:00",drillDays:3,meters:5e3,assignedDrills:["PV271-01","PV271-02"],drillRates:{"PV271-01":55,"PV271-02":55}},{id:"block-1",label:"B",drillStart:"2026-02-27",drillStartTime:"06:00",drillDays:3,meters:4794.8,assignedDrills:["PV271-02","PV271-03"],drillRates:{"PV271-02":55,"PV271-03":55}}],holeTypes:[{type:"BUFFER",diam:.127,burden:3,spacing:1.6,holes:24,drillMeters:324.1,expMass:1461},{type:"BUFFER",diam:.165,burden:3.6,spacing:3,holes:73,drillMeters:896.1,expMass:15934},{type:"PRODUCTION",diam:.165,burden:4.4,spacing:2.5,holes:89,drillMeters:1112.8,expMass:21559},{type:"PRODUCTION",diam:.229,burden:4.9,spacing:4.4,holes:563,drillMeters:7461.8,expMass:287420}]},{name:"S4_214_411P",mode:"Manual",surfaceArea:100,pattern:"1.1.44P24",pctD65:1,pctPV:0,rateD65:19,ratePV:20,numD65:2,numPV:0,loadRate:1e5,d65Meters:1350,pvMeters:0,volume:2400,expMass:1440,drillStart:"2026-03-01",drillStartTime:"06:00",drillDays:2,loadStart:"2026-03-05",loadDays:1,blastDate:"2026-03-06",status:"planned",deps:{drillPctForLoad:null,drillPctForBlast:null,loadPctForBlast:null,minLeadDays:null,predecessor:null},assignedDrills:["D65-01","D65-02"],assignedMPUs:[],holeTypes:[{type:"PRESPLIT",diam:.127,burden:1,spacing:1.8,holes:0,drillMeters:1350,expMass:1440}]},{name:"S4_226_411",mode:"Manual",surfaceArea:10240,pattern:"1.1.15",pctD65:0,pctPV:1,rateD65:20,ratePV:19,numD65:0,numPV:4,loadRate:1e5,d65Meters:0,pvMeters:6459.4,volume:122880,expMass:245760,drillStart:"2026-03-02",drillDays:6,loadStart:"2026-03-07",loadDays:3,blastDate:"2026-03-10",status:"planned",deps:{drillPctForLoad:null,drillPctForBlast:null,loadPctForBlast:null,minLeadDays:null,predecessor:null},assignedDrills:["PV271-01","PV271-02","PV271-03","PV271-04"],assignedMPUs:["MPU-01"],holeTypes:[{type:"PRODUCTION",diam:.229,burden:4.4,spacing:4.9,holes:0,drillMeters:6459.4,expMass:245760}]},{name:"S4_214_412P",mode:"Manual",surfaceArea:220,pattern:"1.1.44P24",pctD65:1,pctPV:0,rateD65:15,ratePV:21,numD65:2,numPV:4,loadRate:1e5,d65Meters:2970,pvMeters:0,volume:5280,expMass:3168,drillStart:"2026-03-04",drillDays:3,loadStart:null,loadDays:0,blastDate:null,status:"planned",deps:{drillPctForLoad:null,drillPctForBlast:null,loadPctForBlast:null,minLeadDays:null,predecessor:null},assignedDrills:["D65-01","D65-02"],assignedMPUs:[],holeTypes:[{type:"PRESPLIT",diam:.127,burden:1,spacing:1.8,holes:0,drillMeters:2970,expMass:3168}]},{name:"S4_226_413",mode:"Manual",surfaceArea:5e3,pattern:"1.1.15",pctD65:0,pctPV:1,rateD65:17,ratePV:20,numD65:0,numPV:4,loadRate:1e5,d65Meters:0,pvMeters:3154,volume:6e4,expMass:12e4,drillStart:"2026-03-07",drillDays:3,loadStart:null,loadDays:0,blastDate:null,status:"planned",deps:{drillPctForLoad:null,drillPctForBlast:null,loadPctForBlast:null,minLeadDays:null,predecessor:null},assignedDrills:["PV271-01","PV271-02","PV271-03","PV271-04"],assignedMPUs:["MPU-01"],holeTypes:[{type:"PRODUCTION",diam:.229,burden:4.4,spacing:4.9,holes:0,drillMeters:3154,expMass:12e4}]},{name:"S4_226_407",mode:"Manual",surfaceArea:11886,pattern:"1.1.15",pctD65:0,pctPV:1,rateD65:45,ratePV:20,numD65:0,numPV:4,loadRate:1e5,d65Meters:0,pvMeters:7497.7,volume:142632,expMass:285264,drillStart:"2026-03-09",drillDays:6,loadStart:null,loadDays:0,blastDate:null,status:"planned",deps:{drillPctForLoad:null,drillPctForBlast:null,loadPctForBlast:null,minLeadDays:null,predecessor:null},assignedDrills:["PV271-01","PV271-02","PV271-03","PV271-04"],assignedMPUs:["MPU-01","MPU-02"],holeTypes:[{type:"PRODUCTION",diam:.229,burden:4.4,spacing:4.9,holes:0,drillMeters:7497.7,expMass:285264}]}],kirraProjectSurfaces:[],kirraProjectSolids:[],conformance:{targetBCM:6e5,actualBCM:426594,targetMTD:7e5,monthStart:"2026-02-01"}},ne=[{id:"D65-01",name:"D65 #1",type:"D65",minDiam:127,maxDiam:229,rateM_per_day:19,status:"available",crewRequired:{OP:1},maintenance:[{start:"2026-03-10",end:"2026-03-12",reason:"5000hr Service"}]},{id:"D65-02",name:"D65 #2",type:"D65",minDiam:127,maxDiam:229,rateM_per_day:19,status:"available",crewRequired:{OP:1},maintenance:[]},{id:"PV271-01",name:"PV271 #1",type:"PV271",minDiam:200,maxDiam:311,rateM_per_day:20,status:"available",crewRequired:{OP:1},maintenance:[{start:"2026-03-15",end:"2026-03-17",reason:"Track replacement"}]},{id:"PV271-02",name:"PV271 #2",type:"PV271",minDiam:200,maxDiam:311,rateM_per_day:20,status:"available",crewRequired:{OP:1},maintenance:[]},{id:"PV271-03",name:"PV271 #3",type:"PV271",minDiam:200,maxDiam:311,rateM_per_day:20,status:"available",crewRequired:{OP:1},maintenance:[{start:"2026-03-20",end:"2026-03-22",reason:"Engine overhaul"}]},{id:"PV271-04",name:"PV271 #4",type:"PV271",minDiam:200,maxDiam:311,rateM_per_day:20,status:"available",crewRequired:{OP:1},maintenance:[]}],Te=[{id:"MPU-01",name:"MPU #1",type:"Emulsion",capacity_kg:2e4,rateKg_per_day:1e5,status:"available",crewRequired:{OP:1,SF:1},maintenance:[]},{id:"MPU-02",name:"MPU #2",type:"Emulsion",capacity_kg:2e4,rateKg_per_day:8e4,status:"available",crewRequired:{OP:1,SF:1},maintenance:[{start:"2026-03-08",end:"2026-03-09",reason:"Pump service"}]}],yi=[{id:"DZ-01",name:"D9 Dozer #1",type:"Dozer",rateM2_per_day:8e3,status:"available",maintenance:[]},{id:"DZ-02",name:"D9 Dozer #2",type:"Dozer",rateM2_per_day:8e3,status:"available",maintenance:[]},{id:"GR-01",name:"Grader #1",type:"Grader",rateM2_per_day:12e3,status:"available",maintenance:[]},{id:"EX-01",name:"Excavator #1",type:"Excavator",rateM2_per_day:5e3,status:"available",maintenance:[]},{id:"LD-01",name:"Loader #1",type:"Loader",rateM2_per_day:6e3,status:"available",maintenance:[]},{id:"RL-01",name:"Roller #1",type:"Roller",rateM2_per_day:15e3,status:"available",maintenance:[]}],Gn=[{id:"P001",name:"John Smith",role:"Drill Operator",certifiedTypes:["D65","PV271"]},{id:"P002",name:"Sarah Johnson",role:"Drill Operator",certifiedTypes:["PV271"]},{id:"P003",name:"Mike Williams",role:"Drill Operator",certifiedTypes:["D65"]},{id:"P004",name:"Emma Davis",role:"Shot Firer",certifiedTypes:[]},{id:"P005",name:"James Wilson",role:"Blast Engineer",certifiedTypes:[]},{id:"P006",name:"Lisa Brown",role:"Loading Operator",certifiedTypes:[]},{id:"P007",name:"David Taylor",role:"Drill Offsider",certifiedTypes:["D65"]},{id:"P008",name:"Amy Anderson",role:"Loading Operator",certifiedTypes:[]}];function mu(n,t){return t>=n.minDiam&&t<=n.maxDiam}function gu(n,t){var e=n.find(function(i){return i.id===t});return e&&(e.status="mobilised"),e}function vu(n,t){var e=n.find(function(i){return i.id===t});return e&&(e.status="demobilised"),e}function _u(n,t){for(var e=-1,i=0;i<n.length;i++)if(n[i].id===t){e=i;break}return e!==-1?n.splice(e,1)[0]:null}function xu(n,t){for(var e=0;e<n.maintenance.length;e++){var i=n.maintenance[e];if(t>=i.start&&t<=i.end)return!0}return!1}function ee(n,t){return t===void 0&&(t=0),n==null||isNaN(n)?"—":Number(n).toLocaleString("en-AU",{minimumFractionDigits:t,maximumFractionDigits:t})}function Ue(n){if(!n)return"—";var t=new Date(n);return t.toLocaleDateString("en-AU",{day:"2-digit",month:"short"})}function Qt(n,t){var e=new Date(n);return e.setDate(e.getDate()+t),e}function Xt(n){return n.toISOString().split("T")[0]}function Ls(n){var t=new Date(n),e=new Date(t.getFullYear(),0,1);return Math.ceil(((t-e)/864e5+e.getDay()+1)/7)}function fl(n){var t=new Date(n).getDay();return t===0||t===6}function yu(n){var t=new Date,e=new Date(n);return e.toDateString()===t.toDateString()}function Po(){var n=z.rigHours||24,t=z.availability||.85,e=z.utilisation||.75;return n*t*e}function Ye(n){return n.drillBlocks&&n.drillBlocks.length>0}function Sr(n){var t=Po(),e=0;return(n.assignedDrills||[]).forEach(function(i){var r=0;if(n.drillRates&&n.drillRates[i]!==void 0)r=n.drillRates[i];else{var a=ne.find(function(s){return s.id===i});a&&(r=a.rateM_per_day)}e+=r*t}),e<=0?1:Math.ceil((n.meters||0)/e)}function Su(n){Ye(n)&&n.drillBlocks.forEach(function(t){t.drillDays=Sr(t)})}function tn(n){if(Ye(n)){Su(n);var t=null,e=null,i=[];if(n.drillBlocks.forEach(function(a){var s=new Date(a.drillStart),o=Qt(s,(a.drillDays||1)-1);(!t||s<t)&&(t=s),(!e||o>e)&&(e=o),(a.assignedDrills||[]).forEach(function(l){i.indexOf(l)===-1&&i.push(l)})}),t&&(n.drillStart=Xt(t)),t&&e){var r=Math.round((e-t)/864e5)+1;n.drillDays=r}n.assignedDrills=i}}function Mu(n){var t=(n.d65Meters||0)+(n.pvMeters||0),e=Math.round(t/2*10)/10,i=Math.round((t-e)*10)/10,r=n.drillStart||Xt(new Date),a=n.assignedDrills||[],s=n.drillDays||7,o=Math.max(1,Math.ceil(s*(e/t))),l=Math.max(1,s-o),c={id:"block-0",label:"A",drillStart:r,drillStartTime:n.drillStartTime||"06:00",drillDays:o,meters:e,assignedDrills:a.slice(),drillRates:{}};a.forEach(function(h){var d=ne.find(function(m){return m.id===h});d&&(c.drillRates[h]=d.rateM_per_day)});var u=Qt(new Date(r),o),f={id:"block-1",label:"B",drillStart:Xt(u),drillStartTime:"06:00",drillDays:l,meters:i,assignedDrills:a.slice(),drillRates:{}};a.forEach(function(h){var d=ne.find(function(m){return m.id===h});d&&(f.drillRates[h]=d.rateM_per_day)}),n.drillBlocks=[c,f],tn(n)}function Eu(n){if(Ye(n)){tn(n);var t=Po(),e=(n.d65Meters||0)+(n.pvMeters||0),i=0;n.assignedDrills.forEach(function(r){var a=ne.find(function(s){return s.id===r});a&&(i+=a.rateM_per_day*t)}),n.drillDays=i>0?Math.ceil(e/i):1,delete n.drillBlocks}}function pl(n){if(!Ye(n))return null;var t=null;return n.drillBlocks.forEach(function(e){var i=Qt(new Date(e.drillStart),(e.drillDays||1)-1);(!t||i>t)&&(t=i)}),t}function bu(n,t,e,i){var r=Po();if(Ye(n)&&i!==null&&n.drillBlocks[i]){var a=n.drillBlocks[i],s=new Date(a.drillStart),o=new Date(e),l=Math.round((o-s)/864e5);if(l<=0){var c=(a.assignedDrills||[]).indexOf(t);c!==-1&&a.assignedDrills.splice(c,1),a.drillRates&&delete a.drillRates[t],a.drillDays=Sr(a),tn(n);return}var u=0;(a.assignedDrills||[]).forEach(function(C){var N=0;if(a.drillRates&&a.drillRates[C]!==void 0)N=a.drillRates[C];else{var U=ne.find(function(Q){return Q.id===C});U&&(N=U.rateM_per_day)}u+=N*r});var f=u*l;f=Math.min(f,a.meters||0);var h=Math.max(0,(a.meters||0)-f);a.label,a.drillDays=l,a.meters=Math.round(f*10)/10;var d=(a.assignedDrills||[]).filter(function(C){return C!==t}),m={};d.forEach(function(C){if(a.drillRates&&a.drillRates[C]!==void 0)m[C]=a.drillRates[C];else{var N=ne.find(function(U){return U.id===C});N&&(m[C]=N.rateM_per_day)}});var v="ABCDEFGHIJKLMNOPQRSTUVWXYZ",g=n.drillBlocks.length,p=g<v.length?v[g]:"B"+g,_={id:"block-"+g,label:p,drillStart:Xt(o),drillStartTime:a.drillStartTime||"06:00",drillDays:1,meters:Math.round(h*10)/10,assignedDrills:d,drillRates:m};_.drillDays=Sr(_),n.drillBlocks.splice(i+1,0,_),tn(n);return}var y=new Date(n.drillStart),x=new Date(e),A=Math.round((x-y)/864e5),L=n.assignedDrills||[],P=(n.d65Meters||0)+(n.pvMeters||0);if(A<=0){var M=L.indexOf(t);M!==-1&&L.splice(M,1);return}var w=0;L.forEach(function(C){var N=ne.find(function(U){return U.id===C});N&&(w+=N.rateM_per_day*r)});var H=w*A;H=Math.min(H,P);var F=Math.max(0,P-H),D={id:"block-0",label:"A",drillStart:n.drillStart,drillStartTime:n.drillStartTime||"06:00",drillDays:A,meters:Math.round(H*10)/10,assignedDrills:L.slice(),drillRates:{}};L.forEach(function(C){var N=ne.find(function(U){return U.id===C});N&&(D.drillRates[C]=N.rateM_per_day)});var B=L.filter(function(C){return C!==t}),S={id:"block-1",label:"B",drillStart:Xt(x),drillStartTime:"06:00",drillDays:1,meters:Math.round(F*10)/10,assignedDrills:B,drillRates:{}};B.forEach(function(C){var N=ne.find(function(U){return U.id===C});N&&(S.drillRates[C]=N.rateM_per_day)}),S.drillDays=Sr(S),n.drillBlocks=[D,S],tn(n)}function La(n){var t=z.deps,e=n.deps||{};return{drillPctForLoad:e.drillPctForLoad!==null&&e.drillPctForLoad!==void 0&&e.drillPctForLoad!==""?parseFloat(e.drillPctForLoad):t.drillPctForLoad,drillPctForBlast:e.drillPctForBlast!==null&&e.drillPctForBlast!==void 0&&e.drillPctForBlast!==""?parseFloat(e.drillPctForBlast):t.drillPctForBlast,loadPctForBlast:1,minLeadDays:e.minLeadDays!==null&&e.minLeadDays!==void 0&&e.minLeadDays!==""?parseInt(e.minLeadDays):t.minLeadDays,predecessor:e.predecessor||null,predType:e.predType||"blast-before-drill"}}function Se(){z.deps.drillPctForLoad=parseFloat(document.getElementById("depDrillForLoad").value)||0,z.deps.drillPctForBlast=parseFloat(document.getElementById("depDrillForBlast").value)||1,z.deps.loadPctForBlast=1,z.deps.minLeadDays=parseInt(document.getElementById("depMinLead").value)||0,z.deps.enforceSequence=document.getElementById("depEnforceSeq").checked,z.blasts.forEach(function(n,t){if(Ye(n)&&tn(n),!(!n.drillStart||!n.drillDays)){n._depWarning="";var e=La(n),i=new Date(n.drillStart),r=n.drillDays||1,a=Math.ceil(r*e.drillPctForLoad),s=Qt(i,a);if(Ye(n)){var o=pl(n);o&&e.drillPctForLoad>=1&&(s=Qt(o,1))}if(e.predecessor){var l=z.blasts.find(function(D){return D.name===e.predecessor});if(l){if(e.predType==="blast-before-drill"&&l.blastDate){var c=new Date(l.blastDate);i<c&&(n._depWarning="Drill starts before predecessor "+l.name+" fires ("+Ue(l.blastDate)+")")}else if(e.predType==="blast-before-load"&&l.blastDate){var u=new Date(l.blastDate);s<u&&(s=Qt(u,1))}else if(e.predType==="drill-before-drill"){var f=l.drillStart?Qt(new Date(l.drillStart),l.drillDays||1):null;f&&i<f&&(n._depWarning="Drill overlaps with predecessor "+l.name+" drill (ends "+Ue(f)+")")}}}if(n._maintWarnings=[],Ye(n))n.drillBlocks.forEach(function(D){if(!(!D.drillStart||!D.assignedDrills)){var B=Xt(Qt(new Date(D.drillStart),(D.drillDays||1)-1));D.assignedDrills.forEach(function(S){var C=ne.find(function(N){return N.id===S});C&&(C.maintenance||[]).forEach(function(N){N.end>=D.drillStart&&N.start<=B&&n._maintWarnings.push(C.id+" [Block "+D.label+"] maint "+Ue(N.start)+"-"+Ue(N.end)+" ("+N.reason+")")})})}});else if(n.assignedDrills&&n.assignedDrills.length>0){var h=Xt(Qt(i,r-1));n.assignedDrills.forEach(function(D){var B=ne.find(function(S){return S.id===D});B&&(B.maintenance||[]).forEach(function(S){S.end>=n.drillStart&&S.start<=h&&n._maintWarnings.push(B.id+" in maintenance "+Ue(S.start)+"-"+Ue(S.end)+" ("+S.reason+")")})})}var d=Xt(s);n.loadStartManual&&n.loadStart?n.loadStart<d&&(n._depWarning=(n._depWarning?n._depWarning+"; ":"")+"Loading starts before "+Math.round(e.drillPctForLoad*100)+"% drill complete (earliest: "+Ue(d)+")"):n.loadStart=d;var m=n.assignedMPUs||(n.assignedMPU?[n.assignedMPU]:[]),v=0;if(m.length>0)for(var g=0;g<m.length;g++){var p=Te.find(function(D){return D.id===m[g]});p&&(v+=p.rateKg_per_day||0)}var _=v>0?v:n.loadRate||1e5,y=_>0?Math.ceil((n.expMass||0)/_):1;n.loadDays=Math.max(y,1);var x=Math.ceil(r*e.drillPctForBlast),A=Qt(i,x);if(Ye(n)&&e.drillPctForBlast>=1){var L=pl(n);L&&(A=Qt(L,1))}var P=new Date(n.loadStart),M=Math.ceil(n.loadDays*e.loadPctForBlast),w=Qt(P,M),H=new Date(Math.max(A.getTime(),w.getTime()));H=Qt(H,e.minLeadDays);var F=Xt(H);n.blastDateManual&&n.blastDate?n.blastDate<F&&(n._depWarning=(n._depWarning?n._depWarning+"; ":"")+"Blast date before dependencies met (earliest: "+Ue(F)+")"):n.blastDate=F,n._computed={drillPctForLoad:e.drillPctForLoad,drillPctForBlast:e.drillPctForBlast,loadPctForBlast:e.loadPctForBlast,drillDayForLoadStart:a,loadStartDate:n.loadStart,drillOverlapEnd:Xt(Qt(i,r-1)),loadOverlapStart:n.loadStart,hasOverlap:e.drillPctForLoad<1,drillEndDate:Xt(Qt(i,r-1)),loadEndDate:Xt(Qt(P,n.loadDays-1)),autoLoadStart:d,autoBlastDate:F}}})}var Gi=[{code:"OP",label:"Operator",color:"#22d3ee",textColor:"#000"},{code:"FT",label:"Field Technician",color:"#a78bfa",textColor:"#fff"},{code:"SF",label:"Shot Firer",color:"#fb923c",textColor:"#000"}];function ml(n,t){for(var e={OP:0,FT:0,SF:0},i=n.assignedDrills||[],r=0;r<i.length;r++){for(var a=null,s=0;s<t.length;s++)if(t[s].id===i[r]){a=t[s];break}if(a&&a.crewRequired){var o=a.crewRequired;e.OP+=o.OP||0,e.FT+=o.FT||0,e.SF+=o.SF||0}}return e}function Tu(n,t){var e={OP:0,FT:0,SF:0},i=n.assignedMPUs||(n.assignedMPU?[n.assignedMPU]:[]);if(i.length===0)return e;for(var r=0;r<i.length;r++){for(var a=null,s=0;s<t.length;s++)if(t[s].id===i[r]){a=t[s];break}if(a&&a.crewRequired){var o=a.crewRequired;e.OP+=o.OP||0,e.FT+=o.FT||0,e.SF+=o.SF||0}}return e}function Mr(n){return n.crewAllocated||(n.crewAllocated={drilling:{OP:0,FT:0,SF:0},loading:{OP:0,FT:0,SF:0}}),n.crewAllocated.drilling||(n.crewAllocated.drilling={OP:0,FT:0,SF:0}),n.crewAllocated.loading||(n.crewAllocated.loading={OP:0,FT:0,SF:0}),n.crewAllocated}function Ga(n,t){for(var e="",i=0;i<Gi.length;i++){var r=Gi[i].code,a=t[r]||0;if(a!==0){var s=n[r]||0,o="crew-badge";s>=a?o+=" crew-ok":s>0?o+=" crew-warn":o+=" crew-empty",e+='<span class="'+o+'">'+r+":"+s+"/"+a+"</span>"}}return e}function wu(n,t){var e=t.dataset.ttBlast,i=t.dataset.ttSection,r=t.dataset.ttDate,a=z.blasts.find(function(u){return u.name===e});if(a){var s=La(a),o=a._computed||{},l=document.getElementById("tooltip"),c='<div class="tt-title">'+e+"</div>";c+='<div class="tt-row"><span>Phase</span><span class="tt-val">'+i+"</span></div>",c+='<div class="tt-row"><span>Date</span><span class="tt-val">'+Ue(r)+"</span></div>",i==="DRILLING"?(c+='<div class="tt-row"><span>Drill Meters</span><span class="tt-val">'+ee((a.d65Meters||0)+(a.pvMeters||0))+" m</span></div>",c+='<div class="tt-row"><span>Duration</span><span class="tt-val">'+a.drillDays+" days</span></div>",c+='<div style="border-top:1px solid var(--border);margin:4px 0;padding-top:4px;">',c+='<div class="tt-row"><span style="color:var(--accent-purple)">Load starts at</span><span class="tt-val">'+Math.round(s.drillPctForLoad*100)+"% drilled</span></div>",o.hasOverlap&&(c+='<div class="tt-row"><span style="color:var(--accent-load)">Loading begins</span><span class="tt-val">'+Ue(o.loadOverlapStart)+"</span></div>",c+='<div class="tt-row"><span style="color:var(--gantt-drill)">Drill finishes</span><span class="tt-val">'+Ue(o.drillEndDate)+"</span></div>"),c+='<div class="tt-row"><span style="color:var(--accent-blast)">Blast at drill</span><span class="tt-val">'+Math.round(s.drillPctForBlast*100)+"%</span></div>",c+="</div>"):i==="LOADING"?(c+='<div class="tt-row"><span>Explosive</span><span class="tt-val">'+ee(a.expMass)+" kg</span></div>",c+='<div class="tt-row"><span>Load Rate</span><span class="tt-val">'+ee(a.loadRate)+" kg/day</span></div>",c+='<div class="tt-row"><span>Duration</span><span class="tt-val">'+a.loadDays+" days</span></div>",c+='<div style="border-top:1px solid var(--border);margin:4px 0;padding-top:4px;">',c+='<div class="tt-row"><span style="color:var(--accent-purple)">Drill was at</span><span class="tt-val">'+Math.round(s.drillPctForLoad*100)+"% when load started</span></div>",c+='<div class="tt-row"><span style="color:var(--accent-blast)">Blast at load</span><span class="tt-val">'+Math.round(s.loadPctForBlast*100)+"%</span></div>",s.minLeadDays>0&&(c+='<div class="tt-row"><span style="color:var(--accent-load)">Lead days</span><span class="tt-val">'+s.minLeadDays+" day(s)</span></div>"),c+="</div>"):(c+='<div class="tt-row"><span>Volume</span><span class="tt-val">'+ee(a.volume)+" bcm</span></div>",c+='<div class="tt-row"><span>PF</span><span class="tt-val">'+(a.volume?ee(a.expMass/a.volume,2):"—")+" kg/bcm</span></div>",c+='<div style="border-top:1px solid var(--border);margin:4px 0;padding-top:4px;">',c+='<div class="tt-row"><span style="color:var(--accent-purple)">Requires</span><span class="tt-val">'+Math.round(s.drillPctForBlast*100)+"% drill + "+Math.round(s.loadPctForBlast*100)+"% load</span></div>",s.minLeadDays>0&&(c+='<div class="tt-row"><span style="color:var(--accent-load)">+'+s.minLeadDays+" lead day(s)</span></div>"),s.predecessor&&(c+='<div class="tt-row"><span style="color:var(--accent-purple)">After</span><span class="tt-val">'+s.predecessor+"</span></div>"),c+="</div>"),a._depWarning&&(c+='<div style="margin-top:4px;padding:4px 6px;background:rgba(239,68,68,0.15);border-radius:4px;color:var(--accent-blast);font-size:12px;">'+a._depWarning+"</div>"),l.innerHTML=c,l.style.display="block",l.style.left=Math.min(n.clientX+12,window.innerWidth-320)+"px",l.style.top=n.clientY-10+"px"}}function Au(){document.getElementById("tooltip").style.display="none"}function nr(n){document.getElementById(n).classList.add("show")}function Un(n){document.getElementById(n).classList.remove("show")}function ir(){var n=z.blasts.reduce(function(a,s){return a+(s.volume||0)},0),t=z.blasts.reduce(function(a,s){return a+(s.expMass||0)},0),e=z.blasts.reduce(function(a,s){return a+s.holeTypes.reduce(function(o,l){return o+(l.holes||0)},0)},0),i="";i+='<div class="stat-card accent-blue">',i+='  <div class="stat-label">Active Blasts</div>',i+='  <div class="stat-value">'+z.blasts.filter(function(a){return a.status==="active"}).length+"</div>",i+="</div>",i+='<div class="stat-card accent-amber">',i+='  <div class="stat-label">Total Volume</div>',i+='  <div class="stat-value">'+ee(n)+'<span class="stat-unit">bcm</span></div>',i+="</div>",i+='<div class="stat-card accent-red">',i+='  <div class="stat-label">Total Explosive</div>',i+='  <div class="stat-value">'+ee(t)+'<span class="stat-unit">kg</span></div>',i+="</div>",i+='<div class="stat-card accent-purple">',i+='  <div class="stat-label">Total Holes</div>',i+='  <div class="stat-value">'+ee(e)+"</div>",i+="</div>",document.getElementById("blastStats").innerHTML=i;var r="<thead><tr>";r+="<th>Blast Name</th><th>Status</th><th>Mode</th><th>Pattern</th>",r+='<th>Hole Types</th><th class="num">Volume (bcm)</th><th class="num">Exp. (kg)</th>',r+='<th class="num">PF (kg/bcm)</th><th class="num">Drill (m)</th>',r+="<th>Drill Start</th><th>Load Start</th><th>Blast Date</th>",r+='<th style="color:var(--accent-purple)">Deps</th>',r+="</tr></thead><tbody>",z.blasts.forEach(function(a,s){var o=a.volume?(a.expMass/a.volume).toFixed(2):"—",l=(a.d65Meters||0)+(a.pvMeters||0),c=a.status==="active"?"badge-active":a.status==="fired"?"badge-blast":"badge-drill",u=a.holeTypes.map(function(m){var v=m.type==="PRESPLIT"?"badge-presplit":m.type==="BUFFER"?"badge-buffer":"badge-production";return'<span class="badge '+v+'">'+m.type+"</span>"}).join(" "),f=La(a),h=Math.round(f.drillPctForLoad*100)+"%→L";f.drillPctForBlast<1&&(h+=" "+Math.round(f.drillPctForBlast*100)+"%D→B"),f.predecessor&&(h+=" ⛓"+f.predecessor.substring(0,10));var d=a._depWarning?'<span class="dep-warning" title="'+a._depWarning+'">!</span>':"";r+='<tr data-blast-idx="'+s+'" style="cursor:pointer">',r+='<td style="color:var(--text-primary);font-weight:600;">'+a.name+d+"</td>",r+='<td><span class="badge '+c+'">'+a.status+"</span></td>",r+="<td>"+a.mode+"</td>",r+="<td>"+(a.pattern||"—")+"</td>",r+="<td>"+u+"</td>",r+='<td class="num">'+ee(a.volume)+"</td>",r+='<td class="num">'+ee(a.expMass)+"</td>",r+='<td class="num">'+o+"</td>",r+='<td class="num">'+ee(l)+"</td>",r+="<td>"+Ue(a.drillStart)+"</td>",r+="<td>"+Ue(a.loadStart)+"</td>",r+="<td>"+Ue(a.blastDate)+"</td>",r+='<td style="font-size:11px;color:var(--accent-purple)">'+h+"</td>",r+="</tr>"}),r+="</tbody>",document.getElementById("blastTable").innerHTML=r,document.querySelectorAll("#blastTable tr[data-blast-idx]").forEach(function(a){a.addEventListener("dblclick",function(){Ro(parseInt(a.dataset.blastIdx))})})}function Du(n){for(var t=z.kirraProjectSolids||[],e=0;e<t.length;e++)if(t[e].name===n)return t[e];return null}function jc(){var n=document.getElementById("fPattern");n.innerHTML='<option value="">-- Select Pattern --</option>',z.patterns.forEach(function(t){var e=document.createElement("option");e.value=t.id,e.textContent=t.id+" — "+t.type+" (PF: "+t.pf+")",n.appendChild(e)})}function Zc(n){var t=document.getElementById("fDepPredecessor");t.innerHTML='<option value="">— None —</option>',z.blasts.forEach(function(e){if(e.name!==n){var i=document.createElement("option");i.value=e.name,i.textContent=e.name,t.appendChild(i)}})}function Kc(n){var t=document.getElementById("fAssignedDrills");t.innerHTML="",ne.forEach(function(e){var i=document.createElement("option");i.value=e.id,i.textContent=e.id+" ("+e.type+", "+e.minDiam+"-"+e.maxDiam+"mm)",n&&n.indexOf(e.id)!==-1&&(i.selected=!0),t.appendChild(i)})}function Jc(n){var t=document.getElementById("fAssignedMPUs");t.innerHTML="",Te.forEach(function(e){var i=document.createElement("option");i.value=e.id,i.textContent=e.id+" ("+e.type+", "+e.rateKg_per_day+" kg/day)",n&&n.indexOf(e.id)!==-1&&(i.selected=!0),t.appendChild(i)})}function $c(n){var t=document.getElementById("fAssignedAncillary");t&&(t.innerHTML="",yi.forEach(function(e){var i=document.createElement("option");i.value=e.id,i.textContent=e.id+" ("+e.type+")",n&&n.indexOf(e.id)!==-1&&(i.selected=!0),t.appendChild(i)}))}function gl(){var n=document.getElementById("fDrillCompatWarning"),t=document.getElementById("fAssignedDrills"),e=document.getElementById("fPattern").value,i=z.patterns.find(function(c){return c.id===e});if(!i||!t){n.style.display="none";return}for(var r=i.diam,a=t.selectedOptions,s=[],o=0;o<a.length;o++){var l=ne.find(function(c){return c.id===a[o].value});l&&!mu(l,r)&&s.push(l.id+" cannot drill "+r+"mm (range: "+l.minDiam+"-"+l.maxDiam+"mm)")}s.length>0?(n.textContent="Warning: "+s.join("; "),n.style.display="block"):n.style.display="none"}function Cu(){z.editingBlastIdx=null,document.getElementById("blastModalTitle").textContent="Add Blast",document.getElementById("blastModalSave").textContent="Add Blast",document.getElementById("fBlastName").value="",document.getElementById("fBlastMode").value="Manual",document.getElementById("fSurfaceArea").value="",document.getElementById("fDrillStart").value=Xt(z.planStart),document.getElementById("fDrillStartTime").value="06:00",document.getElementById("fPctD65").value=0,document.getElementById("fPctPV").value=1,document.getElementById("fLoadRate").value=1e5,document.getElementById("fVolume").value="",document.getElementById("fExpMass").value="",document.getElementById("fRateD65").value=19,document.getElementById("fRatePV").value=20,document.getElementById("fNumD65").value=0,document.getElementById("fNumPV").value=4,document.getElementById("fDepDrillForLoad").value="",document.getElementById("fDepDrillForBlast").value="",document.getElementById("fDepMinLead").value="",Zc(null),document.getElementById("fDepPredecessor").value="",document.getElementById("fDepPredType").value="blast-before-drill",document.getElementById("fDepDrillForLoad").placeholder="Global: "+Math.round(z.deps.drillPctForLoad*100)+"%",document.getElementById("fDepDrillForBlast").placeholder="Global: "+Math.round(z.deps.drillPctForBlast*100)+"%",document.getElementById("fDepMinLead").placeholder="Global: "+z.deps.minLeadDays,jc(),Kc([]),Jc([]);var n=document.getElementById("fPrepStart"),t=document.getElementById("fPrepDays");n&&(n.value=""),t&&(t.value=""),$c([]),nr("blastModal")}function Ro(n){z.editingBlastIdx=n;var t=z.blasts[n];document.getElementById("blastModalTitle").textContent="Edit Blast: "+t.name,document.getElementById("blastModalSave").textContent="Save Changes",document.getElementById("fBlastName").value=t.name,document.getElementById("fBlastMode").value=t.mode,document.getElementById("fSurfaceArea").value=t.surfaceArea||"",document.getElementById("fDrillStart").value=t.drillStart||"",document.getElementById("fDrillStartTime").value=t.drillStartTime||"06:00",document.getElementById("fPctD65").value=t.pctD65,document.getElementById("fPctPV").value=t.pctPV,document.getElementById("fLoadRate").value=t.loadRate,document.getElementById("fVolume").value=t.volume||"",document.getElementById("fExpMass").value=t.expMass||"",document.getElementById("fRateD65").value=t.rateD65,document.getElementById("fRatePV").value=t.ratePV,document.getElementById("fNumD65").value=t.numD65,document.getElementById("fNumPV").value=t.numPV;var e=t.deps||{};document.getElementById("fDepDrillForLoad").value=e.drillPctForLoad!==null&&e.drillPctForLoad!==void 0?e.drillPctForLoad:"",document.getElementById("fDepDrillForBlast").value=e.drillPctForBlast!==null&&e.drillPctForBlast!==void 0?e.drillPctForBlast:"",document.getElementById("fDepMinLead").value=e.minLeadDays!==null&&e.minLeadDays!==void 0?e.minLeadDays:"",Zc(t.name),document.getElementById("fDepPredecessor").value=e.predecessor||"",document.getElementById("fDepPredType").value=e.predType||"blast-before-drill",document.getElementById("fDepDrillForLoad").placeholder="Global: "+Math.round(z.deps.drillPctForLoad*100)+"%",document.getElementById("fDepDrillForBlast").placeholder="Global: "+Math.round(z.deps.drillPctForBlast*100)+"%",document.getElementById("fDepMinLead").placeholder="Global: "+z.deps.minLeadDays,jc(),document.getElementById("fPattern").value=t.pattern||"",Kc(t.assignedDrills||[]),Jc(t.assignedMPUs||(t.assignedMPU?[t.assignedMPU]:[]));var i=document.getElementById("fPrepStart"),r=document.getElementById("fPrepDays");i&&(i.value=t.prepStart||""),r&&(r.value=t.prepDays||""),$c(t.assignedAncillary||[]),nr("blastModal")}function Pu(){var n=document.getElementById("fBlastName").value.trim();if(!n){alert("Blast name required");return}var t=document.getElementById("fPattern").value,e=z.patterns.find(function(Vt){return Vt.id===t}),i=parseFloat(document.getElementById("fSurfaceArea").value)||0,r=parseFloat(document.getElementById("fVolume").value)||0,a=parseFloat(document.getElementById("fExpMass").value)||0,s=Du(n);!r&&s&&(r=s.volume||0,!i&&s.surfaceArea&&(i=s.surfaceArea)),e&&i>0&&!r&&(r=i*e.benchHt),e&&r>0&&!a&&(a=r*e.pf);var o=0;if(e&&i>0){var l=i/(e.burden*e.spacing),c=e.benchHt+e.subdrill;o=l*c}var u=parseFloat(document.getElementById("fLoadRate").value)||1e5,f=document.getElementById("fDrillStart").value,h=document.getElementById("fDrillStartTime").value||"06:00",d=parseFloat(document.getElementById("fRateD65").value)||19,m=parseFloat(document.getElementById("fRatePV").value)||20,v=parseInt(document.getElementById("fNumD65").value)||0,g=parseInt(document.getElementById("fNumPV").value)||0,p=parseFloat(document.getElementById("fPctD65").value)||0,_=parseFloat(document.getElementById("fPctPV").value)||0,y=o||0,x=y*p,A=y*_,L=v>0?d*v:0,P=g>0?m*g:0,M=L+P,w=M>0?Math.ceil(y/M):1,H=u>0?Math.ceil(a/u):1,F=document.getElementById("fDepDrillForLoad").value,D=document.getElementById("fDepDrillForBlast").value,B=document.getElementById("fDepMinLead").value,S=document.getElementById("fDepPredecessor").value,C=document.getElementById("fDepPredType").value,N={drillPctForLoad:F!==""?parseFloat(F):null,drillPctForBlast:D!==""?parseFloat(D):null,loadPctForBlast:null,minLeadDays:B!==""?parseInt(B):null,predecessor:S||null,predType:C||"blast-before-drill"},U=[];e&&U.push({type:e.type,diam:e.diam/1e3,burden:e.burden,spacing:e.spacing,holes:i>0?Math.round(i/(e.burden*e.spacing)):0,drillMeters:o,expMass:a});var Q=document.getElementById("fPrepStart"),X=document.getElementById("fPrepDays"),$=Q?Q.value:"",W=X&&parseInt(X.value)||0,V=[],pt=document.getElementById("fAssignedAncillary");if(pt)for(var mt=0;mt<pt.selectedOptions.length;mt++)V.push(pt.selectedOptions[mt].value);for(var ut=[],it=document.getElementById("fAssignedDrills"),ht=0;ht<it.selectedOptions.length;ht++)ut.push(it.selectedOptions[ht].value);for(var at=[],yt=document.getElementById("fAssignedMPUs"),Et=0;Et<yt.selectedOptions.length;Et++)at.push(yt.selectedOptions[Et].value);var St={name:n,mode:document.getElementById("fBlastMode").value,surfaceArea:i,pattern:t,pctD65:p,pctPV:_,rateD65:d,ratePV:m,numD65:v,numPV:g,loadRate:u,d65Meters:x,pvMeters:A,volume:r,expMass:a,drillStart:f,drillStartTime:h,drillDays:w,loadStart:null,loadDays:H,blastDate:null,status:"planned",deps:N,assignedDrills:ut,assignedMPUs:at,prepStart:$||null,prepDays:W||0,assignedAncillary:V,holeTypes:U,solidBounds:s?s.bounds:null,solidBenchHt:s?s.benchHt:null};if(z.editingBlastIdx!==null){var Wt=z.blasts[z.editingBlastIdx];St.status=Wt.status,!St.solidBounds&&Wt.solidBounds&&(St.solidBounds=Wt.solidBounds),!St.solidBenchHt&&Wt.solidBenchHt&&(St.solidBenchHt=Wt.solidBenchHt),!St.prepStart&&Wt.prepStart&&(St.prepStart=Wt.prepStart),!St.prepDays&&Wt.prepDays&&(St.prepDays=Wt.prepDays),St.assignedAncillary.length===0&&Wt.assignedAncillary&&(St.assignedAncillary=Wt.assignedAncillary),z.blasts[z.editingBlastIdx]=St}else z.blasts.push(St);Un("blastModal"),Se(),se(),ir()}function Ru(){document.getElementById("btnAddBlast").addEventListener("click",Cu),document.getElementById("blastModalSave").addEventListener("click",Pu),document.getElementById("btnCloseBlastModal").addEventListener("click",function(){Un("blastModal")}),document.getElementById("btnCancelBlastModal").addEventListener("click",function(){Un("blastModal")}),document.getElementById("fPattern").addEventListener("change",gl),document.getElementById("fAssignedDrills").addEventListener("change",gl)}var va=[{code:"UD",label:"Unscheduled Down",color:"#ef4444",category:"down",textColor:"#fff"},{code:"SD",label:"Scheduled Down",color:"#f97316",category:"down",textColor:"#fff"},{code:"SM",label:"Scheduled Maintenance",color:"#a855f7",category:"maintenance",textColor:"#fff"},{code:"UM",label:"Unscheduled Maintenance",color:"#ec4899",category:"maintenance",textColor:"#fff"},{code:"UP",label:"Unscheduled Process",color:"#06b6d4",category:"process",textColor:"#fff"},{code:"SP",label:"Scheduled Process",color:"#14b8a6",category:"process",textColor:"#fff"},{code:"UW",label:"Unscheduled Weather",color:"#64748b",category:"weather",textColor:"#fff"},{code:"SW",label:"Scheduled Weather",color:"#94a3b8",category:"weather",textColor:"#000"},{code:"LP",label:"Low People",color:"#eab308",category:"people",textColor:"#000"}];function Qc(n){for(var t=0;t<va.length;t++)if(va[t].code===n)return va[t];return null}var vl=0;function Lu(){return vl++,"delay-"+Date.now()+"-"+vl}function Iu(n,t,e,i){var r=Qc(n);return{id:Lu(),type:n,label:r?r.label:n,start:t,days:e,section:i||"drilling"}}function Uu(n,t,e,i){n.preventDefault(),z.ctxBlastIdx=t,z.ctxSection=e,z.ctxBlockIdx=i??null,z.ctxDelayIdx=null;var r=document.getElementById("contextMenu"),a=z.blasts[t],s=r.querySelectorAll(".ctx-drill-only");s.forEach(function(f){f.style.display=e==="drilling"?"":"none"});var o=r.querySelectorAll(".ctx-block-only"),l=a&&Ye(a);o.forEach(function(f){f.style.display=e==="drilling"&&l?"":"none"});var c=document.getElementById("ctxSplitDrill");c&&(l?c.textContent="✂ Add Block":c.textContent="✂ Split Drill");var u=r.querySelectorAll(".ctx-delay-only");u.forEach(function(f){f.style.display="none"}),r.querySelectorAll(".ctx-general").forEach(function(f){f.style.display=""}),td(r,a,e,z.ctxBlockIdx),r.style.display="block",r.style.left=n.clientX+"px",r.style.top=n.clientY+"px"}function _l(n,t,e,i,r,a){n.preventDefault(),z.ctxBlastIdx=t,z.ctxSection=e,z.ctxBlockIdx=i??null,z.ctxDelayIdx=r??null,z.ctxClickDate=a||null;var s=document.getElementById("contextMenu"),o=z.blasts[t];if(r!==null)s.querySelectorAll(".ctx-general").forEach(function(h){h.style.display="none"}),s.querySelectorAll(".ctx-drill-only").forEach(function(h){h.style.display="none"}),s.querySelectorAll(".ctx-block-only").forEach(function(h){h.style.display="none"}),s.querySelectorAll(".ctx-delay-only").forEach(function(h){h.style.display=""});else{var l=s.querySelectorAll(".ctx-drill-only");l.forEach(function(h){h.style.display=e==="drilling"?"":"none"});var c=s.querySelectorAll(".ctx-block-only"),u=o&&Ye(o);c.forEach(function(h){h.style.display=e==="drilling"&&u?"":"none"});var f=document.getElementById("ctxSplitDrill");f&&(f.textContent=u?"✂ Add Block":"✂ Split Drill"),s.querySelectorAll(".ctx-delay-only").forEach(function(h){h.style.display="none"}),s.querySelectorAll(".ctx-general").forEach(function(h){h.style.display=""}),td(s,o,e,z.ctxBlockIdx)}s.style.display="block",s.style.left=n.clientX+"px",s.style.top=n.clientY+"px"}function td(n,t,e,i){if(n.querySelectorAll(".ctx-dynamic").forEach(function(P){P.remove()}),!!t){var r=n.querySelector(".ctx-divider.ctx-general");if(e==="drilling"){var a,s=i!==null&&t.drillBlocks&&t.drillBlocks[i];if(s?a=t.drillBlocks[i].assignedDrills||[]:a=t.assignedDrills||[],a.length>0){var o=document.createElement("div");o.className="ctx-divider ctx-dynamic",n.insertBefore(o,r);var l=document.createElement("div");if(l.className="ctx-label ctx-dynamic",l.textContent="Assigned Drills",n.insertBefore(l,r),a.forEach(function(P){var M=document.createElement("div");M.className="ctx-item ctx-dynamic",M.style.color="var(--accent-blast)",M.innerHTML="✖ Remove "+P+" entirely",M.addEventListener("click",function(){Nu(t,P,i)}),n.insertBefore(M,r)}),z.ctxClickDate&&a.length>1){var c=Bu(t,i),u=z.ctxClickDate===c.start,f=z.ctxClickDate===c.end;if(!u&&!f){var h=document.createElement("div");h.className="ctx-divider ctx-dynamic",n.insertBefore(h,r);var d=document.createElement("div");d.className="ctx-label ctx-dynamic",d.textContent="Remove from "+z.ctxClickDate+" onward",n.insertBefore(d,r),a.forEach(function(P){var M=document.createElement("div");M.className="ctx-item ctx-dynamic",M.style.color="var(--accent-load)",M.innerHTML="✂ Pull "+P+" from "+z.ctxClickDate,M.addEventListener("click",function(){Fu(t,P,z.ctxClickDate,i)}),n.insertBefore(M,r)})}}}}var m=t.assignedMPUs||(t.assignedMPU?[t.assignedMPU]:[]);if(e==="loading"&&m.length>0){var v=document.createElement("div");v.className="ctx-divider ctx-dynamic",n.insertBefore(v,r);var g=document.createElement("div");g.className="ctx-label ctx-dynamic",g.textContent="Assigned MPUs",n.insertBefore(g,r),m.forEach(function(P){var M=document.createElement("div");M.className="ctx-item ctx-dynamic",M.style.color="var(--accent-blast)",M.innerHTML="✖ Remove "+P,M.addEventListener("click",function(){var w=t.assignedMPUs||[],H=w.indexOf(P);H!==-1&&w.splice(H,1),t.assignedMPUs=w,Se(),se()}),n.insertBefore(M,r)})}var p=Mr(t),_=p[e];if(_){for(var y=!1,x=0;x<Gi.length;x++)if((_[Gi[x].code]||0)>0){y=!0;break}if(y){var A=document.createElement("div");A.className="ctx-divider ctx-dynamic",n.insertBefore(A,r);var L=document.createElement("div");L.className="ctx-label ctx-dynamic",L.textContent="Crew ("+e+")",n.insertBefore(L,r),Gi.forEach(function(P){var M=_[P.code]||0;if(!(M<=0)){var w=document.createElement("div");w.className="ctx-item ctx-dynamic",w.style.color=P.color,w.innerHTML="✖ Remove 1 "+P.code+" (have "+M+")",w.addEventListener("click",function(){_[P.code]=Math.max(0,(_[P.code]||0)-1),se()}),n.insertBefore(w,r)}})}}}}function Bu(n,t){var e=t!==null&&n.drillBlocks&&n.drillBlocks[t];if(e){var i=n.drillBlocks[t],r=i.drillStart,a=i.drillDays||1,s=new Date(r);return s.setDate(s.getDate()+a-1),{start:r,end:s.toISOString().split("T")[0]}}var o=n.drillStart,l=n.drillDays||1,c=new Date(o);return c.setDate(c.getDate()+l-1),{start:o,end:c.toISOString().split("T")[0]}}function Fu(n,t,e,i){z.blasts.indexOf(n),bu(n,t,e,i),Se(),se()}function Nu(n,t,e){var i=e!==null&&n.drillBlocks&&n.drillBlocks[e];if(i){var r=n.drillBlocks[e],a=(r.assignedDrills||[]).indexOf(t);a!==-1&&r.assignedDrills.splice(a,1),r.drillRates&&delete r.drillRates[t],tn(n)}else{var s=(n.assignedDrills||[]).indexOf(t);s!==-1&&n.assignedDrills.splice(s,1)}Se(),se()}function Ou(){Ro(z.ctxBlastIdx)}function Wa(n){z.blasts[z.ctxBlastIdx].status=n,se()}function ku(){var n=JSON.parse(JSON.stringify(z.blasts[z.ctxBlastIdx]));n.name+="_copy",n.status="planned",z.blasts.push(n),se()}function zu(){confirm("Remove "+z.blasts[z.ctxBlastIdx].name+"?")&&(z.blasts.splice(z.ctxBlastIdx,1),se())}function Hu(){var n=z.blasts[z.ctxBlastIdx];if(n){if(Ye(n)){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZ",e=n.drillBlocks.length,i=e<t.length?t[e]:"B"+e;n.drillBlocks.push({id:"block-"+e,label:i,drillStart:n.drillStart,drillStartTime:"06:00",drillDays:1,meters:0,assignedDrills:[],drillRates:{}})}else Mu(n);Se(),se()}}function Vu(){var n=z.blasts[z.ctxBlastIdx];n&&(Eu(n),Se(),se())}function Gu(){document.dispatchEvent(new CustomEvent("editBlock",{detail:{blastIdx:z.ctxBlastIdx,blockIdx:z.ctxBlockIdx}}))}function Wu(){var n=z.blasts[z.ctxBlastIdx];!n||!n.delays||z.ctxDelayIdx===null||(n.delays.splice(z.ctxDelayIdx,1),se())}function Xu(){var n=z.blasts[z.ctxBlastIdx];!n||!n.delays||z.ctxDelayIdx===null||(n.delays[z.ctxDelayIdx].days+=1,se())}function qu(){var n=z.blasts[z.ctxBlastIdx];if(!(!n||!n.delays||z.ctxDelayIdx===null)){var t=n.delays[z.ctxDelayIdx];t.days>1&&(t.days-=1),se()}}function Yu(){document.addEventListener("click",function(){document.getElementById("contextMenu").style.display="none"}),document.getElementById("ctxEdit").addEventListener("click",Ou),document.getElementById("ctxDrilling").addEventListener("click",function(){Wa("drilling")}),document.getElementById("ctxLoading").addEventListener("click",function(){Wa("loading")}),document.getElementById("ctxFired").addEventListener("click",function(){Wa("fired")}),document.getElementById("ctxDuplicate").addEventListener("click",ku),document.getElementById("ctxRemove").addEventListener("click",zu),document.getElementById("ctxSplitDrill").addEventListener("click",Hu),document.getElementById("ctxMergeBlocks").addEventListener("click",Vu),document.getElementById("ctxEditBlock").addEventListener("click",Gu);var n=document.getElementById("ctxRemoveDelay"),t=document.getElementById("ctxExtendDelay"),e=document.getElementById("ctxShrinkDelay");n&&n.addEventListener("click",Wu),t&&t.addEventListener("click",Xu),e&&e.addEventListener("click",qu)}var xl=32,pe={active:!1,blastIdx:null,section:null,blockIdx:null,startX:0,dayOffset:0,ghostEl:null};function ed(){var n=document.getElementById("ganttScroll");n&&(n.addEventListener("mousedown",ju),document.addEventListener("mousemove",Zu),document.addEventListener("mouseup",Ku))}function ju(n){if(!n.target.closest(".gantt-resize-handle")){var t=n.target.closest(".gantt-bar");if(t&&!t.classList.contains("delay-bar")){var e=t.closest(".gantt-row");if(e){var i=e.dataset.section,r=parseInt(e.dataset.blast);if(!isNaN(r)){var a=z.blasts[r];if(a){var s=e.dataset.block!==void 0?parseInt(e.dataset.block):null;if(i==="drilling"){if(s!==null){var o=a.drillBlocks&&a.drillBlocks[s];if(!o||!o.drillStart)return}else if(!a.drillStart)return}i==="pattern prep"&&!a.prepStart||i==="loading"&&!a.loadStart||i==="blasting"&&!a.blastDate||(n.preventDefault(),pe.active=!0,pe.blastIdx=r,pe.section=i,pe.blockIdx=s,pe.startX=n.clientX,pe.dayOffset=0,t.classList.add("gantt-bar-dragging"),pe.ghostEl=t,document.body.style.cursor="grabbing")}}}}}}function Zu(n){if(pe.active){n.preventDefault();var t=n.clientX-pe.startX,e=Math.round(t/xl);if(pe.dayOffset=e,pe.ghostEl){var i=pe.ghostEl.closest(".gantt-row");if(i){var r=i.querySelectorAll(".gantt-bar");r.forEach(function(a){a.style.transform="translateX("+e*xl+"px)",a.style.opacity="0.6",a.style.zIndex="50"})}}}}function Ku(n){if(pe.active){document.body.style.cursor="";var t=pe.dayOffset,e=pe.blastIdx,i=pe.section,r=pe.blockIdx;if(pe.ghostEl){var a=pe.ghostEl.closest(".gantt-row");if(a){var s=a.querySelectorAll(".gantt-bar");s.forEach(function(m){m.style.transform="",m.style.opacity="",m.style.zIndex=""})}pe.ghostEl.classList.remove("gantt-bar-dragging")}if(t!==0&&e!==null){var o=z.blasts[e];if(o){if(i==="drilling"&&r!==null){var l=o.drillBlocks&&o.drillBlocks[r];if(l&&l.drillStart){var c=Qt(new Date(l.drillStart),t);l.drillStart=Xt(c),tn(o)}}else if(i==="drilling"&&o.drillStart){var u=Qt(new Date(o.drillStart),t);o.drillStart=Xt(u),o.loadStartManual=!1,o.blastDateManual=!1,o.drillBlocks&&o.drillBlocks.forEach(function(m){m.drillStart&&(m.drillStart=Xt(Qt(new Date(m.drillStart),t)))})}else if(i==="pattern prep"&&o.prepStart){var f=Qt(new Date(o.prepStart),t);o.prepStart=Xt(f)}else if(i==="loading"&&o.loadStart){var h=Qt(new Date(o.loadStart),t);o.loadStart=Xt(h),o.loadStartManual=!0}else if(i==="blasting"&&o.blastDate){var d=Qt(new Date(o.blastDate),t);o.blastDate=Xt(d),o.blastDateManual=!0}Se(),se()}}pe.active=!1,pe.blastIdx=null,pe.section=null,pe.blockIdx=null,pe.ghostEl=null,pe.dayOffset=0}}var Ju=32,Ot={active:!1,edge:null,blastIdx:null,section:null,blockIdx:null,delayIdx:null,startX:0,dayOffset:0,originalDays:0,originalStart:null,barEl:null};function nd(){var n=document.getElementById("ganttScroll");n&&(n.addEventListener("mousedown",$u),document.addEventListener("mousemove",Qu),document.addEventListener("mouseup",th))}function $u(n){var t=n.target.closest(".gantt-resize-handle");if(t){var e=t.closest(".gantt-bar"),i=t.closest(".gantt-row");if(!(!e||!i)){var r=parseInt(i.dataset.blast),a=i.dataset.section;if(!isNaN(r)){var s=z.blasts[r];if(s){n.preventDefault(),n.stopPropagation();var o=i.dataset.block!==void 0?parseInt(i.dataset.block):null,l=e.dataset.delayIdx!==void 0?parseInt(e.dataset.delayIdx):null,c=1,u=null;if(l!==null&&s.delays&&s.delays[l])c=s.delays[l].days||1,u=s.delays[l].start;else if(a==="pattern prep")c=s.prepDays||1,u=s.prepStart;else if(a==="drilling"&&o!==null){var f=s.drillBlocks&&s.drillBlocks[o];f&&(c=f.drillDays||1,u=f.drillStart)}else a==="drilling"?(c=s.drillDays||1,u=s.drillStart):a==="loading"&&(c=s.loadDays||Math.ceil((s.expMass||0)/(s.loadRate||1e5)),u=s.loadStart);Ot.active=!0,Ot.edge=t.classList.contains("handle-left")?"left":"right",Ot.blastIdx=r,Ot.section=a,Ot.blockIdx=o,Ot.delayIdx=l,Ot.startX=n.clientX,Ot.dayOffset=0,Ot.originalDays=c,Ot.originalStart=u,Ot.barEl=e,e.classList.add("gantt-bar-resizing"),document.body.style.cursor="ew-resize"}}}}}function Qu(n){if(Ot.active){n.preventDefault();var t=n.clientX-Ot.startX,e=Math.round(t/Ju);Ot.dayOffset=e,Ot.barEl&&(Ot.edge==="right"?Ot.barEl.style.outline="2px solid var(--accent-cyan)":Ot.barEl.style.outline="2px solid var(--accent-purple)")}}function th(n){if(Ot.active){document.body.style.cursor="";var t=Ot.dayOffset;if(Ot.barEl&&(Ot.barEl.classList.remove("gantt-bar-resizing"),Ot.barEl.style.outline=""),t!==0&&Ot.blastIdx!==null){var e=z.blasts[Ot.blastIdx];if(e){if(Ot.delayIdx!==null&&e.delays&&e.delays[Ot.delayIdx]){var i=e.delays[Ot.delayIdx];if(Ot.edge==="right")i.days=Math.max(1,Ot.originalDays+t);else{var r=Qt(new Date(Ot.originalStart),t),a=Ot.originalDays-t;a>=1&&(i.start=Xt(r),i.days=a)}}else if(Ot.section==="pattern prep"){var s=Math.max(Ot.originalDays+(Ot.edge==="right"?t:-t),1);e.prepDays=s,Ot.edge==="left"&&(e.prepStart=Xt(Qt(new Date(Ot.originalStart),t)))}else if(Ot.section==="drilling"&&Ot.blockIdx!==null){var o=e.drillBlocks&&e.drillBlocks[Ot.blockIdx];o&&(eh(o,t,Ot.edge,Ot.originalDays,Ot.originalStart),tn(e))}else Ot.section==="drilling"?nh(e,t,Ot.edge,Ot.originalDays,Ot.originalStart):Ot.section==="loading"&&ih(e,t,Ot.edge,Ot.originalDays,Ot.originalStart);Se(),se()}}Ot.active=!1,Ot.blastIdx=null,Ot.section=null,Ot.blockIdx=null,Ot.delayIdx=null,Ot.barEl=null,Ot.dayOffset=0}}function eh(n,t,e,i,r){var a;e==="right"?a=Math.max(1,i+t):(a=Math.max(1,i-t),n.drillStart=Xt(Qt(new Date(r),t))),n.drillDays=a;var s=(z.rigHours||24)*(z.availability||.85)*(z.utilisation||.75),o=n.meters||0,l=(n.assignedDrills||[]).length;if(l>0&&o>0&&s>0){var c=o/a,u=Math.round(c/(l*s)*10)/10;u=Math.max(1,u),(n.assignedDrills||[]).forEach(function(f){n.drillRates||(n.drillRates={}),n.drillRates[f]=u})}}function nh(n,t,e,i,r){var a;e==="right"?a=Math.max(1,i+t):(a=Math.max(1,i-t),n.drillStart=Xt(Qt(new Date(r),t)),n.loadStartManual=!1,n.blastDateManual=!1),n.drillDays=a;var s=(z.rigHours||24)*(z.availability||.85)*(z.utilisation||.75),o=(n.d65Meters||0)+(n.pvMeters||0),l=(n.numD65||0)+(n.numPV||0);if(l>0&&o>0&&s>0){var c=o/a,u=Math.round(c/(l*s)*10)/10;u=Math.max(1,u),n.numPV>0&&(n.ratePV=u),n.numD65>0&&(n.rateD65=u)}}function ih(n,t,e,i,r){var a;e==="right"?a=Math.max(1,i+t):(a=Math.max(1,i-t),n.loadStart=Xt(Qt(new Date(r),t)),n.loadStartManual=!0),n.loadDays=a;var s=n.expMass||0;s>0&&a>0&&(n.loadRate=Math.round(s/a))}function yl(){var n=document.getElementById("ganttScroll"),t=document.getElementById("ganttTable");if(!(!n||!t)){var e=t.parentElement;(!e||e.id!=="ganttContentWrapper")&&(e=document.createElement("div"),e.id="ganttContentWrapper",e.style.cssText="position:relative;display:inline-block;min-width:100%;",n.insertBefore(e,t),e.appendChild(t));var i=document.getElementById("ganttConnectorSvg");i&&i.remove();var r="http://www.w3.org/2000/svg",a=document.createElementNS(r,"svg");a.id="ganttConnectorSvg",a.setAttribute("width",t.scrollWidth||t.offsetWidth),a.setAttribute("height",t.scrollHeight||t.offsetHeight);var s=getComputedStyle(document.documentElement),o=s.getPropertyValue("--accent-green").trim()||"#10b981",l=s.getPropertyValue("--accent-blast").trim()||"#ef4444",c=document.createElementNS(r,"defs");c.appendChild(Sl(r,"arrOk",o)),c.appendChild(Sl(r,"arrWarn",l)),a.appendChild(c);var u={},f=document.querySelectorAll(".gantt-row[data-blast]");f.forEach(function(d){var m=d.dataset.blast,v=d.dataset.section;u[m]||(u[m]={}),v==="drilling"&&d.dataset.block!==void 0?(u[m]._drillRows||(u[m]._drillRows=[]),u[m]._drillRows.push(d)):u[m][v]=d}),Object.keys(u).forEach(function(d){var m=u[d];if(m._drillRows&&m._drillRows.length>0&&!m.drilling){var v=null,g=-1/0;m._drillRows.forEach(function(p){var _=p.querySelectorAll(".gantt-bar");if(_.length){var y=_[_.length-1],x=y.closest("td");if(x){var A=x.getBoundingClientRect();A.right>g&&(g=A.right,v=p)}}}),v&&(m.drilling=v)}});var h=t.getBoundingClientRect();Object.keys(u).forEach(function(d){var m=z.blasts[parseInt(d)];if(m){var v=u[d],g=!!m._depWarning;if(v.drilling&&v.loading){var p=Ml(v.drilling,h),_=rh(v.loading,h);p&&_&&El(r,a,p,_,g,o,l)}if(v.loading&&v.blasting){var y=Ml(v.loading,h),x=ah(v.blasting,h);y&&x&&El(r,a,y,x,g,o,l)}}}),e.appendChild(a)}}function Sl(n,t,e){var i=document.createElementNS(n,"marker");i.setAttribute("id",t),i.setAttribute("markerWidth","8"),i.setAttribute("markerHeight","6"),i.setAttribute("refX","7"),i.setAttribute("refY","3"),i.setAttribute("orient","auto");var r=document.createElementNS(n,"polygon");return r.setAttribute("points","0 0, 8 3, 0 6"),r.setAttribute("fill",e),i.appendChild(r),i}function ji(n,t){var e=n.getBoundingClientRect();return{left:e.left-t.left,top:e.top-t.top,width:e.width,height:e.height}}function Ml(n,t){var e=n.querySelectorAll(".gantt-bar");if(!e.length)return null;var i=e[e.length-1].closest("td");if(!i)return null;var r=ji(n,t),a=ji(i,t);return{x:a.left+a.width,y:r.top+r.height/2}}function rh(n,t){var e=n.querySelectorAll(".gantt-bar");if(!e.length)return null;var i=e[0].closest("td");if(!i)return null;var r=ji(n,t),a=ji(i,t);return{x:a.left,y:r.top+r.height/2}}function ah(n,t){var e=n.querySelectorAll(".gantt-bar");if(!e.length)return null;var i=e[0].closest("td");if(!i)return null;var r=ji(n,t),a=ji(i,t);return{x:a.left+a.width/2,y:r.top+r.height/2}}function El(n,t,e,i,r,a,s){var o=document.createElementNS(n,"path"),l=e.x+6,c="M "+e.x+" "+e.y+" L "+l+" "+e.y+" L "+l+" "+i.y+" L "+i.x+" "+i.y;o.setAttribute("d",c),o.setAttribute("fill","none"),o.setAttribute("stroke",r?s:a),o.setAttribute("stroke-width","2"),o.setAttribute("stroke-linecap","round"),o.setAttribute("stroke-linejoin","round"),o.setAttribute("marker-end","url(#"+(r?"arrWarn":"arrOk")+")"),o.setAttribute("opacity","0.85"),r&&o.setAttribute("stroke-dasharray","4 2"),t.appendChild(o)}var ni={drills:!1,mpus:!1,ancillary:!0,crew:!1,delays:!1};function Lo(){var n=document.getElementById("delayPalette");if(n){var t="";t+=cr("drills","DRILLS","var(--accent-drill)"),ni.drills||(t+='<div class="palette-chips">',ne.forEach(function(e){var i=e.status==="demobilised"?"var(--text-muted)":"var(--accent-drill)",r=e.status==="demobilised"?"opacity:0.4;":"",a=e.status!=="demobilised"?"true":"false";t+='<div class="palette-chip drill-chip" draggable="'+a+'" data-drag-type="drill" data-drag-id="'+e.id+'" style="border-color:'+i+";"+r+'" title="'+e.name+" ("+e.type+") — "+e.rateM_per_day+' m/hr">',t+='<span class="palette-chip-icon" style="background:'+i+';">'+e.type.charAt(0)+"</span>",t+='<span class="palette-chip-text">'+e.id+"</span>",t+="</div>"}),t+="</div>"),t+=cr("mpus","MPUs","var(--accent-load)"),ni.mpus||(t+='<div class="palette-chips">',Te.forEach(function(e){var i=e.status==="demobilised"?"var(--text-muted)":"var(--accent-load)",r=e.status==="demobilised"?"opacity:0.4;":"",a=e.status!=="demobilised"?"true":"false";t+='<div class="palette-chip mpu-chip" draggable="'+a+'" data-drag-type="mpu" data-drag-id="'+e.id+'" style="border-color:'+i+";"+r+'" title="'+e.name+" ("+e.type+") — "+e.rateKg_per_day+' kg/day">',t+='<span class="palette-chip-icon" style="background:'+i+';">'+e.type.charAt(0)+"</span>",t+='<span class="palette-chip-text">'+e.id+"</span>",t+="</div>"}),t+="</div>"),t+=cr("ancillary","ANCILLARY","var(--accent-prep)"),ni.ancillary||(t+='<div class="palette-chips">',yi.forEach(function(e){var i=e.status==="demobilised"?"var(--text-muted)":"var(--accent-prep)",r=e.status==="demobilised"?"opacity:0.4;":"",a=e.status!=="demobilised"?"true":"false";t+='<div class="palette-chip ancillary-chip" draggable="'+a+'" data-drag-type="ancillary" data-drag-id="'+e.id+'" style="border-color:'+i+";"+r+'" title="'+e.name+" ("+e.type+')">',t+='<span class="palette-chip-icon" style="background:'+i+';">'+e.type.charAt(0)+"</span>",t+='<span class="palette-chip-text">'+e.id+"</span>",t+="</div>"}),t+="</div>"),t+=cr("crew","CREW","var(--accent-purple)"),ni.crew||(t+='<div class="palette-chips">',Gi.forEach(function(e){t+='<div class="palette-chip crew-chip" draggable="true" data-drag-type="crew" data-drag-id="'+e.code+'" style="border-color:'+e.color+';" title="'+e.label+'">',t+='<span class="palette-chip-icon" style="background:'+e.color+";color:"+e.textColor+';">'+e.code.charAt(0)+"</span>",t+='<span class="palette-chip-text">'+e.code+" — "+e.label+"</span>",t+="</div>"}),t+="</div>"),t+=cr("delays","DELAYS","var(--accent-blast)"),ni.delays||(t+='<div class="palette-chips">',va.forEach(function(e){t+='<div class="palette-chip delay-chip" draggable="true" data-drag-type="delay" data-drag-id="'+e.code+'" style="background:'+e.color+";color:"+e.textColor+";border-color:"+e.color+';" title="'+e.label+'">',t+='<span class="delay-chip-code">'+e.code+"</span>",t+='<span class="delay-chip-label">'+e.label+"</span>",t+="</div>"}),t+="</div>"),n.innerHTML=t,n.querySelectorAll(".palette-section-hdr").forEach(function(e){e.addEventListener("click",function(){var i=e.dataset.paletteSection;ni[i]=!ni[i],Lo(),id()})})}}function cr(n,t,e){var i=ni[n]?"▶":"▼";return'<div class="palette-section-hdr" data-palette-section="'+n+'" style="border-left:3px solid '+e+';"><span class="palette-arrow">'+i+"</span> "+t+"</div>"}function sh(){Lo(),id(),oh(),gh()}function id(){var n=document.getElementById("delayPalette");n&&(n.ondragstart=function(t){var e=t.target.closest(".palette-chip");if(e){var i=e.dataset.dragType,r=e.dataset.dragId;t.dataTransfer.setData("text/plain",i+":"+r),t.dataTransfer.effectAllowed="copy",e.classList.add("palette-chip-dragging");var a=function(){e.classList.remove("palette-chip-dragging"),e.removeEventListener("dragend",a)};e.addEventListener("dragend",a)}})}function oh(){var n=document.getElementById("ganttScroll");n&&(n._paletteDropBound||(n._paletteDropBound=!0,n.addEventListener("dragover",function(t){var e=t.dataTransfer.types;if(e.indexOf("text/plain")!==-1){t.preventDefault(),t.dataTransfer.dropEffect="copy";var i=t.target.closest(".gantt-cell");i&&(bl(),i.classList.add("delay-drop-target"))}}),n.addEventListener("dragleave",function(t){var e=t.target.closest(".gantt-cell");e&&e.classList.remove("delay-drop-target")}),n.addEventListener("drop",function(t){t.preventDefault(),bl();var e=t.dataTransfer.getData("text/plain");if(e){var i=e.split(":");if(!(i.length<2)){var r=i[0],a=i[1],s=t.target.closest(".gantt-cell"),o=t.target.closest(".gantt-row");if(!(!s||!o)){var l=parseInt(o.dataset.blast),c=o.dataset.section;if(!isNaN(l)){var u=z.blasts[l];u&&(r==="delay"?lh(u,a,c,s,o):r==="drill"?ch(u,a,c,o):r==="mpu"?dh(u,a,c):r==="ancillary"?uh(u,a,c):r==="crew"?hh(u,a,c):r==="gantt-drill"?ph(u,a,parseInt(i[2]),c,o):r==="gantt-mpu"&&mh(u,a,parseInt(i[2]),c))}}}}})))}function lh(n,t,e,i,r){var a=fh(i,r);if(a){n.delays||(n.delays=[]);var s=Iu(t,a,1,e);n.delays.push(s),se()}}function ch(n,t,e,i){if(e!=="drilling"){Le("Drills can only be dropped on DRILLING rows");return}var r=i.dataset.block!==void 0?parseInt(i.dataset.block):null;if(r!==null&&n.drillBlocks&&n.drillBlocks[r]){var a=n.drillBlocks[r];if((a.assignedDrills||[]).indexOf(t)!==-1){Le(t+" already assigned to block "+a.label);return}a.assignedDrills||(a.assignedDrills=[]),a.assignedDrills.push(t);var s=ne.find(function(o){return o.id===t});s&&(a.drillRates||(a.drillRates={}),a.drillRates[t]=s.rateM_per_day),tn(n)}else{if((n.assignedDrills||[]).indexOf(t)!==-1){Le(t+" already assigned to "+n.name);return}n.assignedDrills||(n.assignedDrills=[]),n.assignedDrills.push(t)}Se(),se(),Le(t+" assigned to "+n.name,!0)}function dh(n,t,e){if(e!=="loading"){Le("MPUs can only be dropped on LOADING rows");return}if(n.assignedMPUs||(n.assignedMPUs=[]),n.assignedMPUs.indexOf(t)!==-1){Le(t+" already assigned to "+n.name);return}n.assignedMPUs.push(t),Se(),se(),Le(t+" assigned to "+n.name,!0)}function uh(n,t,e){if(e!=="pattern prep"){Le("Ancillary can only be dropped on PATTERN PREP rows");return}if(n.assignedAncillary||(n.assignedAncillary=[]),n.assignedAncillary.indexOf(t)!==-1){Le(t+" already assigned to "+n.name);return}n.assignedAncillary.push(t),se(),Le(t+" assigned to "+n.name+" prep",!0)}function hh(n,t,e){if(e!=="drilling"&&e!=="loading"){Le("Crew can only be dropped on DRILLING or LOADING rows");return}var i=Mr(n),r=i[e];r[t]=(r[t]||0)+1,se(),Le("+"+t+" on "+n.name+" "+e,!0)}function fh(n,t){for(var e=t.querySelectorAll(".gantt-cell"),i=-1,r=0;r<e.length;r++)if(e[r]===n){i=r;break}if(i<0)return null;var a=new Date(z.planStart);a.setDate(a.getDate()-5);var s=new Date(a);return s.setDate(s.getDate()+i),Xt(s)}function bl(){document.querySelectorAll(".delay-drop-target").forEach(function(n){n.classList.remove("delay-drop-target")})}function Le(n,t){var e=document.getElementById("dropFeedback");e&&e.remove();var i=document.createElement("div");i.id="dropFeedback",i.className="drop-feedback "+(t?"drop-feedback-ok":"drop-feedback-warn"),i.textContent=n,document.body.appendChild(i),setTimeout(function(){i.classList.add("drop-feedback-fade"),setTimeout(function(){i.remove()},400)},2e3)}function ph(n,t,e,i,r){if(i!=="drilling"){Le("Drills can only be dropped on DRILLING rows");return}var a=z.blasts[e];if(a&&a!==n){var s=(a.assignedDrills||[]).indexOf(t);s!==-1&&a.assignedDrills.splice(s,1);var o=r.dataset.block!==void 0?parseInt(r.dataset.block):null;if(o!==null&&n.drillBlocks&&n.drillBlocks[o]){var l=n.drillBlocks[o];if((l.assignedDrills||[]).indexOf(t)===-1){l.assignedDrills||(l.assignedDrills=[]),l.assignedDrills.push(t);var c=ne.find(function(u){return u.id===t});c&&(l.drillRates||(l.drillRates={}),l.drillRates[t]=c.rateM_per_day)}tn(n)}else(n.assignedDrills||[]).indexOf(t)===-1&&(n.assignedDrills||(n.assignedDrills=[]),n.assignedDrills.push(t));Se(),se(),Le(t+": "+a.name+" → "+n.name,!0)}}function mh(n,t,e,i){if(i!=="loading"){Le("MPUs can only be dropped on LOADING rows");return}var r=z.blasts[e];if(r&&r!==n){var a=r.assignedMPUs||[],s=a.indexOf(t);s!==-1&&a.splice(s,1),r.assignedMPUs=a,n.assignedMPUs||(n.assignedMPUs=[]),n.assignedMPUs.indexOf(t)===-1&&n.assignedMPUs.push(t),Se(),se(),Le(t+": "+r.name+" → "+n.name,!0)}}function gh(){var n=document.getElementById("delayPalette");!n||n._returnDropBound||(n._returnDropBound=!0,n.addEventListener("dragover",function(t){var e=t.dataTransfer.types;e.indexOf("text/plain")!==-1&&(t.preventDefault(),t.dataTransfer.dropEffect="move",n.classList.add("palette-drop-active"))}),n.addEventListener("dragleave",function(t){n.contains(t.relatedTarget)||n.classList.remove("palette-drop-active")}),n.addEventListener("drop",function(t){t.preventDefault(),n.classList.remove("palette-drop-active");var e=t.dataTransfer.getData("text/plain");if(e){var i=e.split(":"),r=i[0],a=i[1],s=parseInt(i[2]),o=i.length>3?parseInt(i[3]):null;if(!isNaN(s)){var l=z.blasts[s];l&&(r==="gantt-drill"?vh(l,a,o):r==="gantt-mpu"&&_h(l,a))}}}))}function vh(n,t,e){var i=e!==null&&!isNaN(e)&&n.drillBlocks&&n.drillBlocks[e];if(i){var r=n.drillBlocks[e],a=(r.assignedDrills||[]).indexOf(t);a!==-1&&r.assignedDrills.splice(a,1),r.drillRates&&delete r.drillRates[t],tn(n)}else{var s=(n.assignedDrills||[]).indexOf(t);s!==-1&&n.assignedDrills.splice(s,1)}Se(),se(),Le(t+" removed from "+n.name,!0)}function _h(n,t){var e=n.assignedMPUs||[],i=e.indexOf(t);i!==-1&&e.splice(i,1),n.assignedMPUs=e,Se(),se(),Le(t+" removed from "+n.name,!0)}function xh(){var n={};return z.blasts.forEach(function(t){if(t.drillStart)if(Ye(t))(t.drillBlocks||[]).forEach(function(a){if(!(!a.drillStart||!a.assignedDrills)){var s=new Date(a.drillStart),o=a.drillDays||1;a.assignedDrills.forEach(function(l){n[l]||(n[l]={});for(var c=0;c<o;c++){var u=Xt(Qt(s,c));n[l][u]||(n[l][u]=[]),n[l][u].push(t.name)}})}});else{var e=t.assignedDrills||[];if(e.length===0)return;var i=new Date(t.drillStart),r=t.drillDays||1;e.forEach(function(a){n[a]||(n[a]={});for(var s=0;s<r;s++){var o=Xt(Qt(i,s));n[a][o]||(n[a][o]=[]),n[a][o].push(t.name)}})}}),n}function yh(){var n=xh(),t=[];return Object.keys(n).forEach(function(e){var i=n[e];Object.keys(i).forEach(function(r){if(i[r].length>1){var a=ne.find(function(s){return s.id===e});t.push({drillId:e,drillType:a?a.type:"Unknown",date:r,blasts:i[r]})}})}),t}function Sh(){var n=yh(),t={};return n.forEach(function(e){e.blasts.forEach(function(i){var r=i+"|"+e.date;t[r]||(t[r]=[]),t[r].push(e.drillId)})}),t}var wi={};function Tl(n,t,e){if(!n||n.length===0)return"";for(var i="",r=0;r<n.length;r++){var a=n[r];i+='<span class="gantt-drill-chip" draggable="true" data-drag-type="gantt-drill" data-drag-id="'+a+'" data-blast-idx="'+t+'" data-block-idx="'+(e??"")+'" title="Drag back to palette to unassign '+a+'">'+a+"</span>"}return i}function Mh(n,t){return n?'<span class="gantt-mpu-chip" draggable="true" data-drag-type="gantt-mpu" data-drag-id="'+n+'" data-blast-idx="'+t+'" title="Drag back to palette to unassign '+n+'">'+n+"</span> ":""}function Eh(n,t){if(!n||n.length===0)return"";for(var e="",i=0;i<n.length;i++)e+=Mh(n[i],t);return e}var wl='<span class="gantt-edit-btn" title="Edit"><svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M11.5 1.5l3 3L5 14H2v-3z"/><path d="M10 3l3 3"/></svg></span>';function se(){z.planStart=new Date(document.getElementById("planStartDate").value),z.ganttWeeks=parseInt(document.getElementById("ganttWeeks").value),z.rigHours=parseFloat(document.getElementById("rigHours").value),z.availability=parseFloat(document.getElementById("rigAvail").value),z.utilisation=parseFloat(document.getElementById("rigUtil").value);for(var n=z.ganttWeeks*7,t=[],e=Qt(z.planStart,-5),i=0;i<n+5;i++)t.push(Qt(e,i));var r=z.blasts.reduce(function(C,N){return C+(N.volume||0)},0),a=z.blasts.reduce(function(C,N){return C+(N.expMass||0)},0),s=z.blasts.reduce(function(C,N){return C+(N.d65Meters||0)+(N.pvMeters||0)},0),o=z.blasts.filter(function(C){return C.status==="active"}).length,l=z.blasts.filter(function(C){return C.status==="planned"}).length,c=z.rigHours*z.availability*z.utilisation,u="";u+='<div class="stat-card accent-blue">',u+='  <div class="stat-label">Total Blasts</div>',u+='  <div class="stat-value">'+z.blasts.length+"</div>",u+='  <div class="stat-sub">'+o+" active &middot; "+l+" planned</div>",u+="</div>",u+='<div class="stat-card accent-amber">',u+='  <div class="stat-label">Total Volume</div>',u+='  <div class="stat-value">'+ee(r)+'<span class="stat-unit">bcm</span></div>',u+="</div>",u+='<div class="stat-card accent-red">',u+='  <div class="stat-label">Total Explosive</div>',u+='  <div class="stat-value">'+ee(a)+'<span class="stat-unit">kg</span></div>',u+='  <div class="stat-sub">Avg PF: '+ee(a/r,2)+" kg/bcm</div>",u+="</div>",u+='<div class="stat-card accent-cyan">',u+='  <div class="stat-label">Total Drill Meters</div>',u+='  <div class="stat-value">'+ee(s)+'<span class="stat-unit">m</span></div>',u+="</div>",u+='<div class="stat-card accent-green">',u+='  <div class="stat-label">Effective Rig Hours/Day</div>',u+='  <div class="stat-value">'+ee(c,1)+'<span class="stat-unit">hrs</span></div>',u+='  <div class="stat-sub">'+z.rigHours+"h &times; "+z.availability+" &times; "+z.utilisation+"</div>",u+="</div>",document.getElementById("ganttStats").innerHTML=u;var f="<thead>";f+='<tr><th class="sticky-col" rowspan="3" style="text-align:left;min-width:180px;">Blast</th>',f+='<th class="sticky-col-2" rowspan="3" style="min-width:90px;">Info</th>';for(var h="",d=0;d<t.length;d++){var m=t[d],v=m.toLocaleDateString("en-AU",{month:"long"});if(v!==h){for(var g=0,p=d;p<t.length&&t[p].toLocaleDateString("en-AU",{month:"long"})===v;p++)g++;f+='<th colspan="'+g+'" class="gantt-header-month">'+v+"</th>",h=v}}f+="</tr>",f+="<tr>";for(var _=-1,y=0;y<t.length;y++){var x=Ls(t[y]);if(x!==_){for(var A=0,L=y;L<t.length&&Ls(t[L])===x;L++)A++;f+='<th colspan="'+A+'" class="gantt-header-week">Wk '+x+"</th>",_=x}}f+="</tr>",f+="<tr>";for(var P=["Su","Mo","Tu","We","Th","Fr","Sa"],M=0;M<t.length;M++){var w=t[M],H=yu(w)?"today":fl(w)?"weekend":"";f+='<th class="gantt-header-date '+H+'">'+w.getDate()+'<br><span style="font-size:9px;opacity:0.5;">'+P[w.getDay()]+"</span></th>"}f+="</tr></thead><tbody>";var F=Sh();function D(C,N,U,Q,X,$,W,V){for(var pt="",mt=Q.toLowerCase(),ut=(N.delays||[]).filter(function(_t){return _t.section===mt}),it=0;it<t.length;it++){var ht=t[it],at=Xt(ht),yt="",Et="",St=!1,Wt=!1;if(C.start&&C.end&&at>=C.start&&at<=C.end){if(yt=Q==="PATTERN PREP"?"prep":Q==="DRILLING"?"drill":Q==="LOADING"?"load":"blast",N.status==="planned"&&Q!=="BLASTING"&&(yt+=" planned"),St=at===C.start,Wt=at===C.end,Q==="DRILLING"&&$.hasOverlap&&$.loadOverlapStart&&at>=$.loadOverlapStart&&at<=$.drillOverlapEnd&&(yt="drill-load-overlap",N.status==="planned"&&(yt+=" planned")),Q==="DRILLING"&&!W&&N.drillStart&&N.drillDays>1){var Vt=new Date(N.drillStart),b=Xt(Qt(Vt,Math.ceil(N.drillDays*X.drillPctForLoad)-1));if(at===b&&X.drillPctForLoad<1&&(Et+='<div class="dep-marker" style="left:calc(100% - 1px);" data-label="'+Math.round(X.drillPctForLoad*100)+'%→Load"></div>'),X.drillPctForBlast<1){var rt=Xt(Qt(Vt,Math.ceil(N.drillDays*X.drillPctForBlast)-1));at===rt&&(Et+='<div class="dep-marker" style="left:calc(100% - 1px);background:var(--accent-blast);" data-label="'+Math.round(X.drillPctForBlast*100)+'%→Blast"></div>')}}Q==="LOADING"&&N.loadStart&&N.loadDays>1,St&&Q!=="BLASTING"&&(Et+='<div class="gantt-resize-handle handle-left"></div>'),Wt&&Q!=="BLASTING"&&(Et+='<div class="gantt-resize-handle handle-right"></div>')}Q==="BLASTING"&&N.blastDate&&at===N.blastDate&&(yt="milestone");var K=fl(ht)?"opacity:0.7;":"",O="",E=W||N.assignedDrills;if(Q==="DRILLING"&&E&&E.length>0){var q=E.some(function(_t){var wt=ne.find(function(gt){return gt.id===_t});return wt&&xu(wt,at)});q&&at>=(C.start||"")&&at<=(C.end||"")&&(O="background:rgba(239,68,68,0.12);")}var st="";if(Q==="DRILLING"&&yt){var ct=N.name+"|"+at;F[ct]&&(st="background:repeating-linear-gradient(-45deg,transparent,transparent 3px,rgba(239,68,68,0.25) 3px,rgba(239,68,68,0.25) 6px);")}if(pt+='<td class="gantt-cell" style="'+K+O+st+'">',yt){var G='data-tt-blast="'+N.name+'" data-tt-section="'+Q+'" data-tt-date="'+at+'"',R="",T=V||N.drillStartTime;if(Q==="DRILLING"&&at===C.start&&T){var k=T.split(":"),J=parseInt(k[0])||0,lt=Math.round(J/24*28);R=' style="left:'+(1+lt)+'px;"',Et+='<span class="start-time-label">'+T+"</span>"}var tt="";if(Q==="DRILLING"){var bt=N.name+"|"+at;F[bt]&&(tt='<div class="fleet-conflict-indicator" title="Drill conflict: '+F[bt].join(", ")+' double-booked"></div>')}pt+='<div class="gantt-bar '+yt+'"'+R+" "+G+">"+Et+tt+"</div>"}for(var xt=0;xt<ut.length;xt++){var At=ut[xt],kt=Xt(Qt(new Date(At.start),(At.days||1)-1));if(at>=At.start&&at<=kt){var ft=Qc(At.type),vt=ft?ft.color:"#888",It=ft?ft.textColor:"#fff",Dt=at===At.start,Ct=at===kt,Yt=(N.delays||[]).indexOf(At),Y="";Dt&&(Y+='<div class="gantt-resize-handle handle-left"></div>'),Ct&&(Y+='<div class="gantt-resize-handle handle-right"></div>');var Mt=Dt?'<span class="delay-bar-label">'+At.type+"</span>":"";pt+='<div class="gantt-bar delay-bar" data-delay-idx="'+Yt+'" style="background:'+vt+";color:"+It+';top:16px;bottom:-3px;z-index:3;" data-tt-blast="'+N.name+'" data-tt-section="'+Q+'" data-tt-date="'+at+'">'+Mt+Y+"</div>"}}pt+="</td>"}return pt}function B(C,N,U){var Q=C.toLowerCase(),X=wi[Q]?" collapsed":"";f+='<tr class="gantt-section-header'+X+'" data-section-toggle="'+Q+'">',f+='<td colspan="'+(t.length+2)+'">',f+='<span class="collapse-arrow">▼</span>',f+='<span class="section-icon" style="background:'+N+'"></span>'+C,f+="</td></tr>",z.blasts.forEach(function($,W){var V=La($),pt=$._computed||{};if(C==="DRILLING"&&Ye($)){$.drillBlocks.forEach(function(G,R){if(G.drillStart){var T={start:G.drillStart,end:Xt(Qt(new Date(G.drillStart),(G.drillDays||1)-1))},k=Tl(G.assignedDrills||[],W,R),J=ml($,ne),lt=Mr($).drilling,tt=Ga(lt,J),bt=k+ee(G.meters||0)+"m"+tt;f+='<tr class="gantt-row gantt-block-row" data-blast="'+W+'" data-section="drilling" data-block="'+R+'">',f+='<td class="sticky-col" data-ctx-idx="'+W+'" data-ctx-section="drilling" data-ctx-block="'+R+'">',f+=wl+'<span class="block-label">['+G.label+"]</span> "+$.name,f+="</td>",f+='<td class="sticky-col-2">'+bt+"</td>",f+=D(T,$,W,C,V,pt,G.assignedDrills,G.drillStartTime),f+="</tr>"}});return}var mt=U($);if(mt){var ut="";$._depWarning?ut='<span class="dep-warning" title="'+$._depWarning+'">!</span>':pt.hasOverlap&&C==="DRILLING"&&(ut='<span class="dep-ok" title="Load starts at '+Math.round(V.drillPctForLoad*100)+'% drill">⛓</span>');var it="";$._maintWarnings&&$._maintWarnings.length>0&&C==="DRILLING"&&(it='<span class="dep-warning" title="'+$._maintWarnings.join("; ")+'">⚠</span>');var ht="";if(C==="PATTERN PREP"){var at=$.assignedAncillary||[];ht=at.length>0?at.join(", "):"",$.prepDays&&(ht+=(ht?" ":"")+$.prepDays+"d")}else if(C==="DRILLING"){var yt=Tl($.assignedDrills||[],W,null),Et=ml($,ne),St=Mr($).drilling,Wt=Ga(St,Et),Vt="";if($.drillStart&&$.drillDays){for(var b=!1,rt=0;rt<($.drillDays||0);rt++){var K=Xt(Qt(new Date($.drillStart),rt));if(F[$.name+"|"+K]){b=!0;break}}b&&(Vt='<span class="fleet-conflict-badge" title="Drill rig double-booked">⚠ CONFLICT</span>')}ht=yt+ee(($.d65Meters||0)+($.pvMeters||0))+"m"+ut+it+Wt+Vt}else if(C==="LOADING"){var O=$.assignedMPUs||($.assignedMPU?[$.assignedMPU]:[]),E=Eh(O,W),q=Tu($,Te),st=Mr($).loading,ct=Ga(st,q);ht=E+ee($.expMass)+"kg"+ut+ct}else ht=ee($.volume)+" bcm";f+='<tr class="gantt-row" data-blast="'+W+'" data-section="'+Q+'">',f+='<td class="sticky-col" data-ctx-idx="'+W+'" data-ctx-section="'+Q+'">',f+=wl+$.name,f+="</td>",f+='<td class="sticky-col-2">'+ht+"</td>",f+=D(mt,$,W,C,V,pt,null,null),f+="</tr>"}})}B("PATTERN PREP","var(--accent-prep)",function(C){if(!C.prepStart||!C.prepDays)return null;var N=C.prepStart,U=Xt(Qt(new Date(C.prepStart),Math.max((C.prepDays||1)-1,0)));return{start:N,end:U}}),B("DRILLING","var(--accent-drill)",function(C){if(!C.drillStart)return null;var N=C.drillStart,U=Xt(Qt(new Date(C.drillStart),(C.drillDays||1)-1));return{start:N,end:U}}),B("LOADING","var(--accent-load)",function(C){if(!C.loadStart)return null;var N=C.loadStart,U=C.loadDays||Math.ceil((C.expMass||0)/(C.loadRate||1e5)),Q=Xt(Qt(new Date(C.loadStart),Math.max(U-1,0)));return{start:N,end:Q}}),B("BLASTING","var(--accent-blast)",function(C){return C.blastDate?{start:C.blastDate,end:C.blastDate}:null}),f+="</tbody>",document.getElementById("ganttTable").innerHTML=f,document.querySelectorAll(".gantt-bar").forEach(function(C){C.addEventListener("mouseenter",function(N){wu(N,C)}),C.addEventListener("mouseleave",Au)}),document.querySelectorAll(".gantt-row td.sticky-col[data-ctx-idx]").forEach(function(C){C.addEventListener("contextmenu",function(N){var U=C.dataset.ctxBlock!==void 0?parseInt(C.dataset.ctxBlock):null;Uu(N,parseInt(C.dataset.ctxIdx),C.dataset.ctxSection,U)})}),document.querySelectorAll(".gantt-bar").forEach(function(C){C.addEventListener("contextmenu",function(N){N.preventDefault(),N.stopPropagation();var U=C.closest(".gantt-row");if(U){var Q=parseInt(U.dataset.blast),X=U.dataset.section,$=U.dataset.block!==void 0?parseInt(U.dataset.block):null,W=C.dataset.delayIdx!==void 0?parseInt(C.dataset.delayIdx):null,V=C.dataset.ttDate||null;W!==null?_l(N,Q,X,$,W,V):_l(N,Q,X,$,null,V)}})}),document.querySelectorAll(".gantt-edit-btn").forEach(function(C){C.addEventListener("click",function(N){N.stopPropagation();var U=C.closest("td.sticky-col");if(U){var Q=parseInt(U.dataset.ctxIdx),X=U.dataset.ctxBlock!==void 0?parseInt(U.dataset.ctxBlock):null;X!==null?document.dispatchEvent(new CustomEvent("editBlock",{detail:{blastIdx:Q,blockIdx:X}})):Ro(Q)}})}),ed(),nd(),document.querySelectorAll(".gantt-drill-chip, .gantt-mpu-chip").forEach(function(C){C.addEventListener("dragstart",function(N){N.stopPropagation();var U=C.dataset.dragType,Q=C.dataset.dragId,X=C.dataset.blastIdx,$=C.dataset.blockIdx,W=U+":"+Q+":"+X+($!==""?":"+$:"");N.dataTransfer.setData("text/plain",W),N.dataTransfer.effectAllowed="move",C.classList.add("chip-dragging")}),C.addEventListener("dragend",function(){C.classList.remove("chip-dragging")})}),document.querySelectorAll(".gantt-section-header[data-section-toggle]").forEach(function(C){C.addEventListener("click",function(){var N=C.dataset.sectionToggle;wi[N]=!wi[N],C.classList.toggle("collapsed");for(var U=C.nextElementSibling;U&&!U.classList.contains("gantt-section-header");)U.classList.contains("gantt-row")&&U.classList.toggle("section-hidden",wi[N]),U=U.nextElementSibling;requestAnimationFrame(function(){yl()})})}),Object.keys(wi).forEach(function(C){if(wi[C]){var N=document.querySelector('.gantt-section-header[data-section-toggle="'+C+'"]');if(N)for(var U=N.nextElementSibling;U&&!U.classList.contains("gantt-section-header");)U.classList.contains("gantt-row")&&U.classList.add("section-hidden"),U=U.nextElementSibling}});var S=document.getElementById("ganttScroll");S&&!S._hScrollBound&&(S._hScrollBound=!0,S.addEventListener("wheel",function(C){(C.shiftKey||C.altKey)&&(C.preventDefault(),S.scrollLeft+=C.deltaY||C.deltaX)},{passive:!1})),requestAnimationFrame(function(){yl()}),Lo()}var bh={WASTE:"var(--waste)",YELLOW:"var(--yellow-zone)",ORE:"var(--ore)",PRESPLIT:"var(--presplit)"};function Ur(){var n=document.getElementById("patternGrid"),t="";z.patterns.length===0&&(t+='<div style="grid-column:1/-1;text-align:center;padding:48px 24px;color:var(--text-muted);">',t+='  <div style="font-size:36px;margin-bottom:12px;">&#x1F4CB;</div>',t+=`  <div style="font-family:'JetBrains Mono',monospace;font-size:14px;font-weight:600;">No Patterns Loaded</div>`,t+='  <div style="font-size:13px;margin-top:6px;">Export a blank CSV template, fill in your site patterns, then import it back.</div>',t+="</div>"),z.patterns.forEach(function(i,r){var a=bh[i.type]||"var(--text-muted)";t+='<div class="pattern-card" data-pattern-idx="'+r+'">',t+='  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">',t+='    <div class="pattern-id">'+i.id+"</div>",t+='    <span class="badge" style="background:'+a+"20;color:"+a+'">'+i.type+"</span>",t+="  </div>",t+='  <div class="pattern-detail"><span class="label">Bench Height</span><span class="value">'+i.benchHt+" m</span></div>",t+='  <div class="pattern-detail"><span class="label">Diameter</span><span class="value">'+i.diam+" mm</span></div>",t+='  <div class="pattern-detail"><span class="label">Burden</span><span class="value">'+i.burden+" m</span></div>",t+='  <div class="pattern-detail"><span class="label">Spacing</span><span class="value">'+i.spacing+" m</span></div>",t+='  <div class="pattern-detail"><span class="label">Powder Factor</span><span class="value">'+i.pf+" kg/bcm</span></div>",t+='  <div class="pattern-detail"><span class="label">Sub-drill</span><span class="value">'+i.subdrill+" m</span></div>",t+='  <div class="pattern-detail"><span class="label">Stemming</span><span class="value">'+i.stemming+" m</span></div>",t+="</div>"}),n.innerHTML=t;var e=document.getElementById("patternCount");e&&(e.textContent=z.patterns.length+" pattern(s)")}var rd=["Pattern ID","Bench Height (m)","Diameter (mm)","Powder Factor (kg/bcm)","Burden (m)","Spacing (m)","Sub-drill (m)","Stemming (m)","Type"],Th=[["EXAMPLE-W01",12,229,.7,7.1,8.2,1.5,4,"WASTE"],["EXAMPLE-O01",12,229,1.5,4.85,5.6,1.5,4,"ORE"],["EXAMPLE-PS01",12,127,.6,1,1.6,.6,2.2,"PRESPLIT"],["EXAMPLE-Y01",10,165,1.1,5.65,6.55,1.5,3.8,"YELLOW"]];function ad(){var n=[];n.push("# Kirra Scheduler - Pattern Library Template"),n.push("# Fill in your site drill & blast patterns below."),n.push("# Type must be one of: WASTE, YELLOW, ORE, PRESPLIT"),n.push("# Diameter is in mm (e.g. 229, 165, 127, 311)"),n.push("# Delete the EXAMPLE rows before importing."),n.push("# Lines starting with # are ignored on import."),n.push("#"),n.push(rd.join(",")),Th.forEach(function(a){n.push(a.join(","))}),n.push(""),n.push(""),n.push("");var t=n.join(`
`),e=new Blob([t],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(e),r=document.createElement("a");r.href=i,r.download="KirraPatternTemplate.csv",r.click(),URL.revokeObjectURL(i)}function sd(){var n=[];n.push(rd.join(",")),z.patterns.forEach(function(a){n.push([Dh(a.id),a.benchHt,a.diam,a.pf,a.burden,a.spacing,a.subdrill,a.stemming,a.type].join(","))});var t=n.join(`
`),e=new Blob([t],{type:"text/csv;charset=utf-8;"}),i=URL.createObjectURL(e),r=document.createElement("a");r.href=i,r.download="KirraPatternLibrary.csv",r.click(),URL.revokeObjectURL(i)}function wh(n){var t=new FileReader;t.onload=function(e){for(var i=e.target.result,r=i.split(/\r?\n/),a=[],s=[],o=!1,l=0;l<r.length;l++){var c=r[l].trim();if(!(c===""||c.charAt(0)==="#")){if(!o&&c.toLowerCase().indexOf("pattern id")!==-1){o=!0;continue}var u=Ah(c);if(u.length<9){s.push("Row "+(l+1)+": expected 9 columns, got "+u.length);continue}var f=u[0].trim(),h=parseFloat(u[1]),d=parseFloat(u[2]),m=parseFloat(u[3]),v=parseFloat(u[4]),g=parseFloat(u[5]),p=parseFloat(u[6]),_=parseFloat(u[7]),y=u[8].trim().toUpperCase();if(!f){s.push("Row "+(l+1)+": missing Pattern ID");continue}if(isNaN(h)||isNaN(d)||isNaN(m)||isNaN(v)||isNaN(g)){s.push("Row "+(l+1)+" ("+f+"): invalid numeric value");continue}var x=["WASTE","YELLOW","ORE","PRESPLIT"];if(x.indexOf(y)===-1){s.push("Row "+(l+1)+" ("+f+"): type '"+y+"' not valid. Use: "+x.join(", "));continue}a.push({id:f,benchHt:h,diam:d,pf:m,burden:v,spacing:g,subdrill:isNaN(p)?0:p,stemming:isNaN(_)?0:_,type:y})}}if(a.length===0&&s.length===0){Al("No pattern data found in the CSV file. Make sure to include the header row and at least one data row.","warn");return}if(s.length>0){var A=s.length+` row(s) skipped:
`+s.slice(0,5).join(`
`);s.length>5&&(A+=`
... and `+(s.length-5)+" more"),console.warn("Pattern CSV import warnings:",A)}a.length>0&&(z.patterns=a,Ur(),Al("Imported "+a.length+" pattern(s) successfully."+(s.length>0?" ("+s.length+" row(s) skipped)":""),"ok"))},t.readAsText(n)}function Ah(n){for(var t=[],e="",i=!1,r=0;r<n.length;r++){var a=n.charAt(r);a==='"'?i&&r+1<n.length&&n.charAt(r+1)==='"'?(e+='"',r++):i=!i:a===","&&!i?(t.push(e),e=""):e+=a}return t.push(e),t}function Dh(n){var t=String(n);return t.indexOf(",")!==-1||t.indexOf('"')!==-1||t.indexOf(`
`)!==-1?'"'+t.replace(/"/g,'""')+'"':t}function Al(n,t){var e=document.getElementById("patternImportMsg");e&&e.remove();var i=document.createElement("div");i.id="patternImportMsg";var r=t==="ok"?"var(--accent-green)":t==="warn"?"var(--accent-load)":"var(--accent-blast)";i.style.cssText="font-family:'JetBrains Mono',monospace;font-size:12px;color:"+r+";padding:10px 14px;margin-top:12px;border:1px solid "+r+"40;border-radius:var(--radius);background:"+r+"10;",i.textContent=n;var a=document.getElementById("patternGrid");a.parentNode.insertBefore(i,a.nextSibling),setTimeout(function(){i.parentNode&&i.remove()},8e3)}function Ch(){var n=document.getElementById("btnExportPatternTemplate");n&&n.addEventListener("click",ad);var t=document.getElementById("btnExportPatternLib");t&&t.addEventListener("click",sd);var e=document.getElementById("btnImportPatterns"),i=document.getElementById("patternFileInput");e&&i&&(e.addEventListener("click",function(){i.click()}),i.addEventListener("change",function(r){r.target.files[0]&&(wh(r.target.files[0]),i.value="")}))}function Br(){var n=parseFloat(document.getElementById("loadingRate").value)||1e5,t=z.blasts.reduce(function(o,l){return o+(l.expMass||0)},0),e=z.blasts.reduce(function(o,l){return o+(l.volume||0)},0),i={};z.blasts.forEach(function(o){if(!(!o.blastDate&&!o.loadStart)){var l=o.loadStart||o.drillStart;if(l){var c=Ls(new Date(l)),u=new Date(l).getFullYear(),f=u+"-W"+c;i[f]||(i[f]={week:c,year:u,blasts:[],totalExp:0,totalVol:0,loadDays:0}),i[f].blasts.push(o.name),i[f].totalExp+=o.expMass||0,i[f].totalVol+=o.volume||0,i[f].loadDays+=Math.ceil((o.expMass||0)/n)}}});var r="";r+='<div class="stat-card accent-red">',r+='  <div class="stat-label">Total Explosive Required</div>',r+='  <div class="stat-value">'+ee(t)+'<span class="stat-unit">kg</span></div>',r+='  <div class="stat-sub">'+ee(t/1e3)+" tonnes</div>",r+="</div>",r+='<div class="stat-card accent-amber">',r+='  <div class="stat-label">Loading Days Required</div>',r+='  <div class="stat-value">'+ee(Math.ceil(t/n))+'<span class="stat-unit">days</span></div>',r+='  <div class="stat-sub">@ '+ee(n)+" kg/day</div>",r+="</div>",r+='<div class="stat-card accent-cyan">',r+='  <div class="stat-label">Avg PF</div>',r+='  <div class="stat-value">'+(e?ee(t/e,2):"—")+'<span class="stat-unit">kg/bcm</span></div>',r+="</div>",r+='<div class="stat-card accent-green">',r+='  <div class="stat-label">Charge Source</div>',r+='  <div class="stat-value" style="font-size:16px">'+(z.chargeConfigs.length?"Kirra Config":"Designed")+"</div>",r+='  <div class="stat-sub">'+(z.chargeConfigs.length?z.chargeConfigs.length+" configs loaded":"From schedule data")+"</div>",r+="</div>",document.getElementById("forecastStats").innerHTML=r;var a='<thead><tr><th>Week</th><th>Blasts</th><th class="num">Explosive (kg)</th><th class="num">Volume (bcm)</th><th class="num">Load Days</th><th class="num">Daily Rate (kg)</th></tr></thead><tbody>',s=Object.values(i).sort(function(o,l){return o.year-l.year||o.week-l.week});s.forEach(function(o){var l=o.loadDays>0?o.totalExp/o.loadDays:0;a+="<tr>",a+="<td>Wk "+o.week+", "+o.year+"</td>",a+="<td>"+o.blasts.join(", ")+"</td>",a+='<td class="num">'+ee(o.totalExp)+"</td>",a+='<td class="num">'+ee(o.totalVol)+"</td>",a+='<td class="num">'+o.loadDays+"</td>",a+='<td class="num">'+ee(l)+"</td>",a+="</tr>"}),a+="</tbody>",document.getElementById("forecastTable").innerHTML=a}function Ia(){var n=z.conformance,t=n.actualBCM/n.targetBCM,e=n.actualBCM-n.targetBCM,i=t>=.9?"var(--accent-green)":t>=.7?"var(--accent-load)":"var(--accent-blast)",r="";r+='<div class="stat-card accent-green">',r+='  <div class="stat-label">Target BCM (Month)</div>',r+='  <div class="stat-value">'+ee(n.targetBCM)+'<span class="stat-unit">bcm</span></div>',r+="</div>",r+='<div class="stat-card accent-cyan">',r+='  <div class="stat-label">Actual BCM (MTD)</div>',r+='  <div class="stat-value">'+ee(n.actualBCM)+'<span class="stat-unit">bcm</span></div>',r+='  <div class="conformance-bar"><div class="fill" style="width:'+Math.min(t*100,100)+"%;background:"+i+'"></div></div>',r+="</div>",r+='<div class="stat-card '+(e>=0?"accent-green":"accent-red")+'">',r+='  <div class="stat-label">Variance</div>',r+='  <div class="stat-value" style="color:'+(e>=0?"var(--accent-green)":"var(--accent-blast)")+'">'+(e>=0?"+":"")+ee(e)+'<span class="stat-unit">bcm</span></div>',r+="</div>",r+='<div class="stat-card accent-purple">',r+='  <div class="stat-label">Conformance</div>',r+='  <div class="stat-value">'+ee(t*100,1)+'<span class="stat-unit">%</span></div>',r+="</div>",document.getElementById("confStats").innerHTML=r;var a='<thead><tr><th>Blast</th><th class="num">Planned BCM</th><th class="num">Planned Exp (kg)</th><th>Blast Date</th><th>Status</th></tr></thead><tbody>';z.blasts.forEach(function(s){var o=s.status==="active"?"badge-active":s.status==="fired"?"badge-complete":"badge-drill";a+="<tr>",a+='<td style="font-weight:600;color:var(--text-primary)">'+s.name+"</td>",a+='<td class="num">'+ee(s.volume)+"</td>",a+='<td class="num">'+ee(s.expMass)+"</td>",a+="<td>"+Ue(s.blastDate)+"</td>",a+='<td><span class="badge '+o+'">'+s.status+"</span></td>",a+="</tr>"}),a+="</tbody>",document.getElementById("confTable").innerHTML=a}function On(){Ph(),Rh(),Lh(),Ih(),Uh(),Bh()}function Ph(){var n=ne.filter(function(f){return f.status==="available"}).length,t=ne.length,e=Te.filter(function(f){return f.status==="available"}).length,i=Te.length,r=Gn.length,a=Gn.filter(function(f){return f.role==="Drill Operator"}).length,s=0,o=new Date().toISOString().split("T")[0];ne.concat(Te).forEach(function(f){(f.maintenance||[]).forEach(function(h){h.end>=o&&s++})});var l="";l+='<div class="stat-card accent-blue">',l+='  <div class="stat-label">Drill Rigs</div>',l+='  <div class="stat-value">'+n+" / "+t+"</div>",l+='  <div class="stat-sub">'+n+" available</div>",l+="</div>",l+='<div class="stat-card accent-amber">',l+='  <div class="stat-label">MPUs</div>',l+='  <div class="stat-value">'+e+" / "+i+"</div>",l+='  <div class="stat-sub">'+e+" available</div>",l+="</div>",l+='<div class="stat-card accent-purple">',l+='  <div class="stat-label">Personnel</div>',l+='  <div class="stat-value">'+r+"</div>",l+='  <div class="stat-sub">'+a+" drill operators</div>",l+="</div>";var c=yi.filter(function(f){return f.status==="available"}).length,u=yi.length;l+='<div class="stat-card" style="border-left-color:var(--accent-prep);">',l+='  <div class="stat-label">Ancillary Fleet</div>',l+='  <div class="stat-value">'+c+" / "+u+"</div>",l+='  <div class="stat-sub">'+c+" available</div>",l+="</div>",l+='<div class="stat-card accent-red">',l+='  <div class="stat-label">Upcoming Maintenance</div>',l+='  <div class="stat-value">'+s+"</div>",l+='  <div class="stat-sub">scheduled windows</div>',l+="</div>",document.getElementById("equipStats").innerHTML=l}function Rh(){var n="<thead><tr>";n+="<th>ID</th><th>Name</th><th>Type</th>",n+='<th class="num">Min Diam (mm)</th><th class="num">Max Diam (mm)</th>',n+='<th class="num">Rate (m/day)</th><th>Crew Req</th><th>Status</th><th>Assigned To</th><th>Maintenance</th><th>Actions</th>',n+="</tr></thead><tbody>",ne.forEach(function(t){var e=z.blasts.filter(function(o){return(o.assignedDrills||[]).indexOf(t.id)!==-1}).map(function(o){return o.name}),i=Io(t.status),r=t.maintenance.length,a=r>0?'<span class="badge badge-blast">'+r+" window(s)</span>":'<span class="badge badge-complete">Clear</span>',s=Uo(t.status,t.id,"drill");n+='<tr data-drill-id="'+t.id+'">',n+='<td style="color:var(--accent-cyan);font-weight:600;">'+t.id+"</td>",n+="<td>"+t.name+"</td>",n+='<td><span class="badge badge-drill">'+t.type+"</span></td>",n+='<td class="num">'+t.minDiam+"</td>",n+='<td class="num">'+t.maxDiam+"</td>",n+='<td class="num">'+ee(t.rateM_per_day)+"</td>",n+='<td style="font-size:11px;">'+od(t.crewRequired)+"</td>",n+='<td><span class="badge '+i+'">'+t.status+"</span></td>",n+='<td style="font-size:12px;">'+(e.length>0?e.join(", "):'<span style="color:var(--text-muted)">—</span>')+"</td>",n+="<td>"+a+"</td>",n+='<td class="equip-actions">'+s+"</td>",n+="</tr>"}),n+="</tbody>",document.getElementById("drillTable").innerHTML=n,Bo("drill")}function Lh(){var n="<thead><tr>";n+="<th>ID</th><th>Name</th><th>Type</th>",n+='<th class="num">Capacity (kg)</th><th class="num">Rate (kg/day)</th>',n+="<th>Crew Req</th><th>Status</th><th>Assigned To</th><th>Maintenance</th><th>Actions</th>",n+="</tr></thead><tbody>",Te.forEach(function(t){var e=z.blasts.filter(function(o){return(o.assignedMPUs||(o.assignedMPU?[o.assignedMPU]:[])).indexOf(t.id)!==-1}).map(function(o){return o.name}),i=Io(t.status),r=t.maintenance.length,a=r>0?'<span class="badge badge-blast">'+r+" window(s)</span>":'<span class="badge badge-complete">Clear</span>',s=Uo(t.status,t.id,"mpu");n+='<tr data-mpu-id="'+t.id+'">',n+='<td style="color:var(--accent-load);font-weight:600;">'+t.id+"</td>",n+="<td>"+t.name+"</td>",n+='<td><span class="badge badge-load">'+t.type+"</span></td>",n+='<td class="num">'+ee(t.capacity_kg)+"</td>",n+='<td class="num">'+ee(t.rateKg_per_day)+"</td>",n+='<td style="font-size:11px;">'+od(t.crewRequired)+"</td>",n+='<td><span class="badge '+i+'">'+t.status+"</span></td>",n+='<td style="font-size:12px;">'+(e.length>0?e.join(", "):'<span style="color:var(--text-muted)">—</span>')+"</td>",n+="<td>"+a+"</td>",n+='<td class="equip-actions">'+s+"</td>",n+="</tr>"}),n+="</tbody>",document.getElementById("mpuTable").innerHTML=n,Bo("mpu")}function Ih(){var n="<thead><tr>";n+="<th>ID</th><th>Name</th><th>Type</th>",n+='<th class="num">Rate (m²/day)</th>',n+="<th>Status</th><th>Assigned To</th><th>Actions</th>",n+="</tr></thead><tbody>",yi.forEach(function(e){var i=z.blasts.filter(function(s){return(s.assignedAncillary||[]).indexOf(e.id)!==-1}).map(function(s){return s.name}),r=Io(e.status),a=Uo(e.status,e.id,"ancillary");n+='<tr data-ancillary-id="'+e.id+'">',n+='<td style="color:var(--accent-prep);font-weight:600;">'+e.id+"</td>",n+="<td>"+e.name+"</td>",n+='<td><span class="badge" style="background:rgba(20,184,166,0.15);color:var(--accent-prep);">'+e.type+"</span></td>",n+='<td class="num">'+ee(e.rateM2_per_day)+"</td>",n+='<td><span class="badge '+r+'">'+e.status+"</span></td>",n+='<td style="font-size:12px;">'+(i.length>0?i.join(", "):'<span style="color:var(--text-muted)">—</span>')+"</td>",n+='<td class="equip-actions">'+a+"</td>",n+="</tr>"}),n+="</tbody>";var t=document.getElementById("ancillaryTable");t&&(t.innerHTML=n),Bo("ancillary")}function Uh(){var n="<thead><tr>";n+="<th>ID</th><th>Name</th><th>Role</th><th>Certified Equipment Types</th>",n+="</tr></thead><tbody>",Gn.forEach(function(t){var e=t.certifiedTypes.length>0?t.certifiedTypes.map(function(i){return'<span class="badge badge-drill">'+i+"</span>"}).join(" "):'<span style="color:var(--text-muted)">—</span>';n+='<tr data-person-id="'+t.id+'">',n+='<td style="color:var(--accent-purple);font-weight:600;">'+t.id+"</td>",n+='<td style="font-weight:500;">'+t.name+"</td>",n+="<td>"+t.role+"</td>",n+="<td>"+e+"</td>",n+="</tr>"}),n+="</tbody>",document.getElementById("peopleTable").innerHTML=n}function Bh(){var n=[];ne.forEach(function(e){(e.maintenance||[]).forEach(function(i){n.push({equipId:e.id,equipName:e.name,equipType:"Drill",start:i.start,end:i.end,reason:i.reason})})}),Te.forEach(function(e){(e.maintenance||[]).forEach(function(i){n.push({equipId:e.id,equipName:e.name,equipType:"MPU",start:i.start,end:i.end,reason:i.reason})})}),n.sort(function(e,i){return e.start<i.start?-1:e.start>i.start?1:0});var t="<thead><tr>";t+="<th>Equipment</th><th>Type</th><th>Start</th><th>End</th><th>Days</th><th>Reason</th><th>Conflicts</th>",t+="</tr></thead><tbody>",n.forEach(function(e){var i=[];z.blasts.forEach(function(o){if(o.drillStart){var l=(o.assignedDrills||[]).concat(o.assignedMPUs||(o.assignedMPU?[o.assignedMPU]:[]));if(l.indexOf(e.equipId)!==-1){var c=new Date(o.drillStart);c.setDate(c.getDate()+(o.drillDays||1)-1);var u=c.toISOString().split("T")[0];e.end>=o.drillStart&&e.start<=u&&i.push(o.name)}}});var r=Math.ceil((new Date(e.end)-new Date(e.start))/864e5)+1,a=i.length>0?'<span class="dep-warning" title="Overlaps: '+i.join(", ")+'">!</span> '+i.join(", "):'<span class="badge badge-complete">None</span>',s=e.equipType==="Drill"?"badge-drill":"badge-load";t+="<tr>",t+='<td style="font-weight:600;">'+e.equipId+"</td>",t+='<td><span class="badge '+s+'">'+e.equipType+"</span></td>",t+="<td>"+Ue(e.start)+"</td>",t+="<td>"+Ue(e.end)+"</td>",t+='<td class="num">'+r+"</td>",t+="<td>"+e.reason+"</td>",t+='<td style="font-size:12px;">'+a+"</td>",t+="</tr>"}),n.length===0&&(t+='<tr><td colspan="7" style="text-align:center;color:var(--text-muted);padding:20px;">No maintenance windows scheduled</td></tr>'),t+="</tbody>",document.getElementById("maintenanceTable").innerHTML=t}function od(n){if(!n)return'<span style="color:var(--text-muted)">—</span>';for(var t=[],e=Object.keys(n),i=0;i<e.length;i++)n[e[i]]>0&&t.push('<span class="badge badge-drill" style="font-size:10px;padding:1px 5px;">'+e[i]+":"+n[e[i]]+"</span>");return t.length>0?t.join(" "):'<span style="color:var(--text-muted)">—</span>'}function Io(n){return n==="available"||n==="mobilised"?"badge-active":n==="demobilised"?"badge-demobilised":"badge-blast"}function Uo(n,t,e){var i='<div class="equip-action-btns">';return n==="demobilised"?(i+='<button class="btn-equip-action btn-mobilise" data-equip-id="'+t+'" data-equip-type="'+e+'" title="Mobilise">',i+='<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 2v12M2 8l6-6 6 6"/></svg> Mob</button>'):(i+='<button class="btn-equip-action btn-demobilise" data-equip-id="'+t+'" data-equip-type="'+e+'" title="Demobilise">',i+='<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 14V2M2 8l6 6 6-6"/></svg> Demob</button>'),i+='<button class="btn-equip-action btn-remove-equip" data-equip-id="'+t+'" data-equip-type="'+e+'" title="Remove">',i+='<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 4h12M5 4V2h6v2M6 7v5M10 7v5M3 4l1 10h8l1-10"/></svg></button>',i+="</div>",i}function Bo(n){var t=n==="drill"?ne:n==="ancillary"?yi:Te;document.querySelectorAll('.btn-mobilise[data-equip-type="'+n+'"]').forEach(function(e){e.addEventListener("click",function(i){i.stopPropagation();var r=e.dataset.equipId;gu(t,r),On()})}),document.querySelectorAll('.btn-demobilise[data-equip-type="'+n+'"]').forEach(function(e){e.addEventListener("click",function(i){i.stopPropagation();var r=e.dataset.equipId;vu(t,r),On()})}),document.querySelectorAll('.btn-remove-equip[data-equip-type="'+n+'"]').forEach(function(e){e.addEventListener("click",function(i){i.stopPropagation();var r=e.dataset.equipId;confirm("Remove "+r+"? This cannot be undone.")&&(_u(t,r),On())})})}function Fh(){var n=document.querySelectorAll(".tab");n.forEach(function(t){t.addEventListener("click",function(){document.querySelectorAll(".tab").forEach(function(i){i.classList.remove("active")}),document.querySelectorAll(".tab-panel").forEach(function(i){i.classList.remove("active")}),t.classList.add("active"),document.getElementById("tab-"+t.dataset.tab).classList.add("active");var e=t.dataset.tab;e==="gantt"?se():e==="blasts"?ir():e==="patterns"?Ur():e==="forecast"?Br():e==="conformance"?Ia():e==="equipment"&&On()})})}function Nh(){var n=localStorage.getItem("kirra-scheduler-theme");n==="light"&&document.documentElement.setAttribute("data-theme","light");var t=localStorage.getItem("kirra-scheduler-cb");t==="true"&&document.documentElement.setAttribute("data-cb","true");var e=document.getElementById("btnThemeToggle");e&&e.addEventListener("click",function(){var r=document.documentElement.getAttribute("data-theme");r==="light"?(document.documentElement.removeAttribute("data-theme"),localStorage.setItem("kirra-scheduler-theme","dark")):(document.documentElement.setAttribute("data-theme","light"),localStorage.setItem("kirra-scheduler-theme","light"))});var i=document.getElementById("btnCBToggle");i&&i.addEventListener("click",function(){var r=document.documentElement.getAttribute("data-cb");r==="true"?(document.documentElement.removeAttribute("data-cb"),localStorage.setItem("kirra-scheduler-cb","false")):(document.documentElement.setAttribute("data-cb","true"),localStorage.setItem("kirra-scheduler-cb","true"))})}var Wi=null;function Oh(){Wi="drill",document.getElementById("equipModalTitle").textContent="Add Drill Rig";var n="";n+='<div class="form-row">',n+='  <div class="form-field"><label>Drill ID</label><input type="text" id="fEqId" placeholder="e.g. D65-03"></div>',n+='  <div class="form-field"><label>Name</label><input type="text" id="fEqName" placeholder="e.g. D65 #3"></div>',n+="</div>",n+='<div class="form-row">',n+='  <div class="form-field"><label>Type</label>',n+='    <select id="fEqType"><option value="D65">D65</option><option value="PV271">PV271</option><option value="DM45">DM45</option><option value="Other">Other</option></select>',n+="  </div>",n+='  <div class="form-field"><label>Rate (m/day)</label><input type="number" id="fEqRate" value="20"></div>',n+="</div>",n+='<div class="form-row">',n+='  <div class="form-field"><label>Min Diameter (mm)</label><input type="number" id="fEqMinDiam" value="127"></div>',n+='  <div class="form-field"><label>Max Diameter (mm)</label><input type="number" id="fEqMaxDiam" value="229"></div>',n+="</div>",n+='<div class="form-row">',n+='  <div class="form-field"><label>Crew Required — OP</label><input type="number" id="fEqCrewOP" value="1" min="0" max="10" step="1"></div>',n+='  <div class="form-field"><label>Crew Required — FT</label><input type="number" id="fEqCrewFT" value="0" min="0" max="10" step="1"></div>',n+="</div>",document.getElementById("equipModalBody").innerHTML=n,nr("equipmentModal")}function kh(){Wi="mpu",document.getElementById("equipModalTitle").textContent="Add Mobile Processing Unit";var n="";n+='<div class="form-row">',n+='  <div class="form-field"><label>MPU ID</label><input type="text" id="fEqId" placeholder="e.g. MPU-03"></div>',n+='  <div class="form-field"><label>Name</label><input type="text" id="fEqName" placeholder="e.g. MPU #3"></div>',n+="</div>",n+='<div class="form-row">',n+='  <div class="form-field"><label>Type</label>',n+='    <select id="fEqType"><option value="Emulsion">Emulsion</option><option value="ANFO">ANFO</option><option value="Bulk">Bulk</option></select>',n+="  </div>",n+='  <div class="form-field"><label>Rate (kg/day)</label><input type="number" id="fEqRate" value="100000"></div>',n+="</div>",n+='<div class="form-row">',n+='  <div class="form-field"><label>Capacity (kg)</label><input type="number" id="fEqMinDiam" value="20000"></div>',n+='  <div class="form-field"></div>',n+="</div>",n+='<div class="form-row">',n+='  <div class="form-field"><label>Crew Required — OP</label><input type="number" id="fEqCrewOP" value="1" min="0" max="10" step="1"></div>',n+='  <div class="form-field"><label>Crew Required — SF</label><input type="number" id="fEqCrewSF" value="1" min="0" max="10" step="1"></div>',n+="</div>",document.getElementById("equipModalBody").innerHTML=n,nr("equipmentModal")}function zh(){Wi="person",document.getElementById("equipModalTitle").textContent="Add Personnel";var n="";n+='<div class="form-row">',n+='  <div class="form-field"><label>Person ID</label><input type="text" id="fEqId" placeholder="e.g. P009"></div>',n+='  <div class="form-field"><label>Full Name</label><input type="text" id="fEqName" placeholder="e.g. Jane Smith"></div>',n+="</div>",n+='<div class="form-row">',n+='  <div class="form-field"><label>Role</label>',n+='    <select id="fEqType"><option value="Drill Operator">Drill Operator</option><option value="Drill Offsider">Drill Offsider</option><option value="Loading Operator">Loading Operator</option><option value="Shot Firer">Shot Firer</option><option value="Blast Engineer">Blast Engineer</option><option value="Supervisor">Supervisor</option></select>',n+="  </div>",n+='  <div class="form-field"><label>Certified Types (comma separated)</label><input type="text" id="fEqRate" placeholder="e.g. D65, PV271"></div>',n+="</div>",document.getElementById("equipModalBody").innerHTML=n,nr("equipmentModal")}function Hh(){var n=document.getElementById("fEqId").value.trim(),t=document.getElementById("fEqName").value.trim();if(!n||!t){alert("ID and Name are required");return}var e=document.getElementById("fEqType").value,i=document.getElementById("fEqRate"),r=document.getElementById("fEqMinDiam"),a=document.getElementById("fEqMaxDiam");if(Wi==="drill"){var s=parseInt((document.getElementById("fEqCrewOP")||{}).value)||0,o=parseInt((document.getElementById("fEqCrewFT")||{}).value)||0,l={};s>0&&(l.OP=s),o>0&&(l.FT=o),ne.push({id:n,name:t,type:e,minDiam:parseInt(r.value)||127,maxDiam:parseInt(a.value)||229,rateM_per_day:parseFloat(i.value)||20,status:"available",crewRequired:l,maintenance:[]})}else if(Wi==="mpu"){var c=parseInt((document.getElementById("fEqCrewOP")||{}).value)||0,u=parseInt((document.getElementById("fEqCrewSF")||{}).value)||0,f={};c>0&&(f.OP=c),u>0&&(f.SF=u),Te.push({id:n,name:t,type:e,capacity_kg:parseInt(r.value)||2e4,rateKg_per_day:parseFloat(i.value)||1e5,status:"available",crewRequired:f,maintenance:[]})}else if(Wi==="person"){var h=i.value.split(",").map(function(d){return d.trim()}).filter(function(d){return d.length>0});Gn.push({id:n,name:t,role:e,certifiedTypes:h})}Un("equipmentModal"),On()}function Vh(){var n=document.getElementById("fMaintEquip");n.innerHTML="",ne.forEach(function(t){var e=document.createElement("option");e.value="drill:"+t.id,e.textContent="[Drill] "+t.id+" - "+t.name,n.appendChild(e)}),Te.forEach(function(t){var e=document.createElement("option");e.value="mpu:"+t.id,e.textContent="[MPU] "+t.id+" - "+t.name,n.appendChild(e)})}function Gh(){Vh(),document.getElementById("maintModalTitle").textContent="Add Maintenance Window",document.getElementById("fMaintReason").value="",document.getElementById("fMaintStart").value="",document.getElementById("fMaintEnd").value="",nr("maintenanceModal")}function Wh(){var n=document.getElementById("fMaintEquip").value,t=document.getElementById("fMaintReason").value.trim(),e=document.getElementById("fMaintStart").value,i=document.getElementById("fMaintEnd").value;if(!n||!e||!i){alert("Equipment, start, and end date are required");return}if(i<e){alert("End date must be on or after start date");return}t||(t="Maintenance");var r=n.split(":"),a=r[0],s=r[1],o=a==="drill"?ne:Te,l=o.find(function(c){return c.id===s});l&&l.maintenance.push({start:e,end:i,reason:t}),Un("maintenanceModal"),On()}function Xh(){document.getElementById("btnAddDrill").addEventListener("click",Oh),document.getElementById("btnAddMPU").addEventListener("click",kh),document.getElementById("btnAddPerson").addEventListener("click",zh),document.getElementById("btnAddMaintenance").addEventListener("click",Gh),document.getElementById("equipModalSave").addEventListener("click",Hh),document.getElementById("btnCloseEquipModal").addEventListener("click",function(){Un("equipmentModal")}),document.getElementById("btnCancelEquipModal").addEventListener("click",function(){Un("equipmentModal")}),document.getElementById("maintModalSave").addEventListener("click",Wh),document.getElementById("btnCloseMaintModal").addEventListener("click",function(){Un("maintenanceModal")}),document.getElementById("btnCancelMaintModal").addEventListener("click",function(){Un("maintenanceModal")})}function qh(){document.addEventListener("editBlock",function(n){var t=n.detail.blastIdx,e=n.detail.blockIdx;Yh(t,e)})}function Yh(n,t){var e=z.blasts[n];if(!e||!e.drillBlocks||!e.drillBlocks[t])return;var i=e.drillBlocks[t],r=(e.d65Meters||0)+(e.pvMeters||0),a=0;e.drillBlocks.forEach(function(h,d){d!==t&&(a+=h.meters||0)});var s=Math.round((r-a)*10)/10,o='<div class="block-edit-form" style="display:grid;gap:10px;">';o+='<div style="font-weight:700;font-size:14px;color:var(--text-primary);">'+e.name+" — Block "+i.label+"</div>",o+='<div class="form-row" style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">',o+='<label style="font-size:12px;">Start Date<br><input type="date" id="beStartDate" value="'+(i.drillStart||"")+'" style="width:100%;padding:4px;"></label>',o+='<label style="font-size:12px;">Start Time<br><input type="time" id="beStartTime" value="'+(i.drillStartTime||"06:00")+'" step="1800" style="width:100%;padding:4px;"></label>',o+="</div>",o+='<label style="font-size:12px;">Meters for this block (max '+s+"m of "+Math.round(r)+"m total)<br>",o+='<input type="number" id="beMeters" value="'+(i.meters||0)+'" min="0" max="'+s+'" step="0.1" style="width:100%;padding:4px;"></label>',o+='<div style="font-size:12px;font-weight:600;margin-top:4px;">Assigned Drills & Pen Rate (m/hr)</div>',o+='<div id="beDrillList" style="display:grid;gap:6px;">',ne.forEach(function(h){var d=(i.assignedDrills||[]).indexOf(h.id)!==-1,m=i.drillRates&&i.drillRates[h.id]!==void 0?i.drillRates[h.id]:h.rateM_per_day,v=d?" checked":"";o+='<div style="display:grid;grid-template-columns:auto 1fr auto;gap:8px;align-items:center;">',o+='<label style="font-size:11px;white-space:nowrap;"><input type="checkbox" class="be-drill-cb" value="'+h.id+'"'+v+"> "+h.id+" ("+h.type+")</label>",o+="<div></div>",o+='<input type="number" class="be-drill-rate" data-drill="'+h.id+'" value="'+m+'" min="1" step="1" style="width:60px;padding:2px 4px;font-size:11px;text-align:right;"'+(d?"":" disabled")+">",o+="</div>"}),o+="</div>",o+='<div id="beCalcPreview" style="font-size:11px;color:var(--text-muted);margin-top:4px;"></div>',o+="</div>";var l=document.getElementById("blockEditOverlay");l&&l.remove();var c=document.createElement("div");c.id="blockEditOverlay",c.style.cssText="position:fixed;inset:0;z-index:1000;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.5);";var u=document.createElement("div");u.style.cssText="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:20px;min-width:360px;max-width:460px;box-shadow:var(--shadow);",u.innerHTML=o+'<div style="display:flex;gap:8px;justify-content:flex-end;margin-top:14px;"><button class="btn" id="beCancelBtn">Cancel</button><button class="btn btn-success" id="beSaveBtn">Save Block</button></div>',c.appendChild(u),document.body.appendChild(c),u.querySelectorAll(".be-drill-cb").forEach(function(h){h.addEventListener("change",function(){var d=u.querySelector('.be-drill-rate[data-drill="'+h.value+'"]');d&&(d.disabled=!h.checked),f()})});function f(){var h=parseFloat(document.getElementById("beMeters").value)||0,d=0;u.querySelectorAll(".be-drill-cb:checked").forEach(function(_){var y=u.querySelector('.be-drill-rate[data-drill="'+_.value+'"]');d+=parseFloat(y.value)||0});var m=(z.rigHours||24)*(z.availability||.85)*(z.utilisation||.75),v=d*m,g=v>0?Math.ceil(h/v):"?",p=document.getElementById("beCalcPreview");p&&(p.textContent="Estimated: "+g+" drill day(s) — "+Math.round(d)+" m/hr pen rate x "+m.toFixed(1)+" eff hrs = "+Math.round(v)+" m/day")}document.getElementById("beMeters").addEventListener("input",f),u.querySelectorAll(".be-drill-rate").forEach(function(h){h.addEventListener("input",f)}),f(),document.getElementById("beCancelBtn").addEventListener("click",function(){c.remove()}),c.addEventListener("click",function(h){h.target===c&&c.remove()}),document.getElementById("beSaveBtn").addEventListener("click",function(){i.drillStart=document.getElementById("beStartDate").value,i.drillStartTime=document.getElementById("beStartTime").value||"06:00",i.meters=parseFloat(document.getElementById("beMeters").value)||0,i.assignedDrills=[],i.drillRates={},u.querySelectorAll(".be-drill-cb:checked").forEach(function(h){i.assignedDrills.push(h.value);var d=u.querySelector('.be-drill-rate[data-drill="'+h.value+'"]');i.drillRates[h.value]=parseFloat(d.value)||20}),i.drillDays=Sr(i),tn(e),c.remove(),Se(),se()})}function Xa(n){return n==null||n===0?"—":Math.round(n).toLocaleString()}function Fo(){var n=document.getElementById("importPreview");n.style.display="block";var t="<thead><tr>";t+="<th>Blast Name</th><th>Source</th>",t+='<th class="num">Volume (m3)</th><th class="num">Area (m2)</th>',t+='<th class="num">Bench Ht (m)</th><th class="num">Exp. Mass (kg)</th>',t+="<th>Hole Types</th>",t+="</tr></thead><tbody>",z.importedBlasts.forEach(function(e){var i=e._sourceType||"import",r=i==="solid"?"Solid":"Holes",a=i==="solid"?"badge-buffer":"badge-production";if(t+="<tr>",t+='<td style="font-weight:600;color:var(--text-primary)">'+e.name+"</td>",t+='<td><span class="badge '+a+'">'+r+"</span></td>",t+='<td class="num">'+Xa(e.volume)+"</td>",t+='<td class="num">'+Xa(e.surfaceArea)+"</td>",t+='<td class="num">'+(e.solidBenchHt?e.solidBenchHt.toFixed(1):"—")+"</td>",t+='<td class="num">'+Xa(e.expMass)+"</td>",e.holeTypes&&e.holeTypes.length>0){var s=e.holeTypes.map(function(o){var l=o.type==="PRESPLIT"?"badge-presplit":o.type==="BUFFER"?"badge-buffer":"badge-production";return'<span class="badge '+l+'">'+o.type+"</span>"}).join(" ");t+="<td>"+s+"</td>"}else t+='<td style="color:var(--text-muted);font-size:11px;">No hole data</td>';t+="</tr>"}),t+="</tbody>",document.getElementById("importTable").innerHTML=t}function jh(){z.importedBlasts.forEach(function(e){var i=z.blasts.find(function(r){return r.name===e.name});i?(e.volume&&e.volume>0&&(i.volume=e.volume),e.surfaceArea&&e.surfaceArea>0&&(i.surfaceArea=e.surfaceArea),e.expMass&&e.expMass>0&&(i.expMass=e.expMass),e.solidBenchHt&&e.solidBenchHt>0&&(i.solidBenchHt=e.solidBenchHt),e.solidBounds&&(i.solidBounds=e.solidBounds),e.holeTypes&&e.holeTypes.length>0&&(i.holeTypes=e.holeTypes.map(function(r){return{type:r.type,diam:r.diam>1?r.diam/1e3:r.diam,burden:r.burden,spacing:r.spacing,holes:r.holes||0,drillMeters:r.drillMeters||0,expMass:r.expMass||0}}))):z.blasts.push({name:e.name,mode:"Manual",surfaceArea:e.surfaceArea||0,pattern:e.pattern||"",pctD65:e.pctD65||0,pctPV:e.pctPV||1,rateD65:e.rateD65||19,ratePV:e.ratePV||20,numD65:e.numD65||0,numPV:e.numPV||4,loadRate:e.loadRate||1e5,d65Meters:e.d65Meters||0,pvMeters:e.pvMeters||0,volume:e.volume||0,expMass:e.expMass||0,drillStart:e.drillStart||Xt(z.planStart),drillStartTime:e.drillStartTime||"06:00",drillDays:e.drillDays||1,loadStart:null,loadDays:e.loadDays||0,blastDate:null,status:"planned",deps:{drillPctForLoad:null,drillPctForBlast:null,loadPctForBlast:null,minLeadDays:null,predecessor:null},assignedDrills:e.assignedDrills||[],assignedMPUs:e.assignedMPUs||(e.assignedMPU?[e.assignedMPU]:[]),holeTypes:(e.holeTypes||[]).map(function(r){return{type:r.type,diam:r.diam>1?r.diam/1e3:r.diam,burden:r.burden||0,spacing:r.spacing||0,holes:r.holes||0,drillMeters:r.drillMeters||0,expMass:r.expMass||0}}),solidBounds:e.solidBounds||null,solidBenchHt:e.solidBenchHt||null})}),z.importedBlasts=[],document.getElementById("importPreview").style.display="none";var n=document.getElementById("kapProjectLog"),t=document.getElementById("dxfLog");n&&(n.innerHTML+='<div class="log-ok" style="font-weight:700;">Merged into schedule</div>'),t&&(t.innerHTML+='<div class="log-ok">Merged into schedule</div>'),Se(),se(),ir()}function Zh(){z.importedBlasts=[],document.getElementById("importPreview").style.display="none"}function Kh(){document.getElementById("btnMergeImported").addEventListener("click",jh),document.getElementById("btnClearImported").addEventListener("click",Zh)}function Jh(){var n={format:"KirraGanttProject",version:"1.0.0",exportDate:new Date().toISOString(),settings:{planStart:Xt(z.planStart),ganttWeeks:z.ganttWeeks,rigHours:z.rigHours,availability:z.availability,utilisation:z.utilisation,deps:z.deps},blasts:z.blasts,patterns:z.patterns,chargeConfigs:z.chargeConfigs,importedBlasts:z.importedBlasts,drills:ne,mpus:Te,people:Gn,conformance:z.conformance,kirraProjectSurfaces:z.kirraProjectSurfaces||[],kirraProjectSolids:z.kirraProjectSolids||[]},t=new Blob([JSON.stringify(n,null,2)],{type:"application/json"}),e=URL.createObjectURL(t),i=document.createElement("a");i.href=e,i.download="KirraSchedule_"+Xt(new Date)+".kgp",i.click(),URL.revokeObjectURL(e)}function $h(){var n=["Blast Name","Status","Mode","Pattern","Surface Area (m2)","Volume (bcm)","Explosive Mass (kg)","D65 Meters","PV Meters","Total Drill Meters","Drill Start","Start Time","Drill Days","Load Start","Load Days","Blast Date","Assigned Drills","Assigned MPUs","Rate D65 (m/day)","Rate PV (m/day)","Num D65","Num PV","Load Rate (kg/day)","Drill % to Load","Drill % to Blast","Lead Days","Predecessor"],t=[n.join(",")];z.blasts.forEach(function(s){var o=(s.d65Meters||0)+(s.pvMeters||0),l=s.deps.drillPctForLoad!==null?s.deps.drillPctForLoad:z.deps.drillPctForLoad||"",c=s.deps.drillPctForBlast!==null?s.deps.drillPctForBlast:z.deps.drillPctForBlast||"",u=s.deps.minLeadDays!==null?s.deps.minLeadDays:z.deps.minLeadDays||"",f=s.deps.predecessor||"",h=[zr(s.name),s.status||"",s.mode||"",s.pattern||"",s.surfaceArea||0,s.volume||0,s.expMass||0,s.d65Meters||0,s.pvMeters||0,Math.round(o*10)/10,s.drillStart||"",s.drillStartTime||"",s.drillDays||0,s.loadStart||"",s.loadDays||0,s.blastDate||"",zr((s.assignedDrills||[]).join(" | ")),zr((s.assignedMPUs||(s.assignedMPU?[s.assignedMPU]:[])).join(" | ")),s.rateD65||0,s.ratePV||0,s.numD65||0,s.numPV||0,s.loadRate||0,l,c,u,zr(f)];t.push(h.join(","))});var e=t.join(`
`),i=new Blob([e],{type:"text/csv;charset=utf-8;"}),r=URL.createObjectURL(i),a=document.createElement("a");a.href=r,a.download="KirraSchedule_"+Xt(new Date)+".csv",a.click(),URL.revokeObjectURL(r)}function zr(n){var t=String(n);return t.indexOf(",")!==-1||t.indexOf('"')!==-1||t.indexOf(`
`)!==-1?'"'+t.replace(/"/g,'""')+'"':t}function Qh(n){var t=document.getElementById("exportMenu");if(t){t.remove();return}var e=document.getElementById("btnExport"),i=e.getBoundingClientRect(),r=document.createElement("div");r.id="exportMenu",r.className="export-menu",r.style.top=i.bottom+4+"px",r.style.right=window.innerWidth-i.right+"px";var a="";a+='<div class="export-menu-item" id="exportKGP">',a+='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">',a+='<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',a+="</svg>",a+=" Kirra Gantt Project (.kgp)",a+='<span class="export-menu-hint">Full project — all data, equipment, settings</span>',a+="</div>",a+='<div class="export-menu-item" id="exportCSV">',a+='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">',a+='<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>',a+='<line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/>',a+='<line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/>',a+="</svg>",a+=" Schedule Spreadsheet (.csv)",a+='<span class="export-menu-hint">Blast list for Excel / Google Sheets</span>',a+="</div>",a+='<div style="border-top:1px solid var(--border);margin:4px 0;"></div>',a+='<div class="export-menu-item" id="exportPatternTemplate">',a+='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">',a+='<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',a+='<line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',a+="</svg>",a+=" Pattern Library Template (.csv)",a+='<span class="export-menu-hint">Blank template for people to fill in</span>',a+="</div>",a+='<div class="export-menu-item" id="exportPatternLib">',a+='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">',a+='<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',a+='<line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',a+="</svg>",a+=" Pattern Library (.csv)",a+='<span class="export-menu-hint">Export current patterns as CSV</span>',a+="</div>",r.innerHTML=a,document.body.appendChild(r),document.getElementById("exportKGP").addEventListener("click",function(){r.remove(),Jh()}),document.getElementById("exportCSV").addEventListener("click",function(){r.remove(),$h()}),document.getElementById("exportPatternTemplate").addEventListener("click",function(){r.remove(),ad()}),document.getElementById("exportPatternLib").addEventListener("click",function(){r.remove(),sd()});var s=function(o){!r.contains(o.target)&&o.target!==e&&(r.remove(),document.removeEventListener("click",s))};setTimeout(function(){document.addEventListener("click",s)},10)}function tf(){document.getElementById("btnExport").addEventListener("click",Qh)}var No="kirra-scheduler-setup";function ef(){return!localStorage.getItem(No)}function Dl(){z.blasts.length=0,ne.length=0,Te.length=0,yi.length=0,Gn.length=0,z.conformance.actualBCM=0,z.conformance.targetBCM=0,z.conformance.targetMTD=0}function nf(n){localStorage.setItem(No,n)}function rf(){localStorage.removeItem(No)}function af(){return new Promise(function(n){var t=document.createElement("div");t.className="startup-overlay";var e=document.createElement("div");e.className="startup-dialog",e.innerHTML=`<div class="startup-logo"><img src="icons/icon-192.png" alt="Kirra" width="64" height="64" onerror="this.style.display='none'"></div><h2 class="startup-title">Welcome to Kirra Scheduler</h2><p class="startup-subtitle">Drill &amp; Blast Open Cut Planning</p><div class="startup-divider"></div><p class="startup-prompt">How would you like to get started?</p><div class="startup-options"><button class="startup-btn startup-btn-examples" id="startupExamples"><span class="startup-btn-icon">&#x1F4CB;</span><span class="startup-btn-label">Load Example Data</span><span class="startup-btn-desc">Pre-loaded blasts, equipment, and patterns so you can explore the app right away</span></button><button class="startup-btn startup-btn-fresh" id="startupFresh"><span class="startup-btn-icon">&#x2728;</span><span class="startup-btn-label">Start From Scratch</span><span class="startup-btn-desc">Empty schedule — set up your own equipment, patterns, and blasts</span></button></div><p class="startup-hint">You can always reset later with the <strong style="color:var(--accent-blast)">Reset</strong> button.</p>`,t.appendChild(e),document.body.appendChild(t),requestAnimationFrame(function(){t.classList.add("visible")}),document.getElementById("startupExamples").addEventListener("click",function(){i("examples")}),document.getElementById("startupFresh").addEventListener("click",function(){i("fresh")});function i(r){t.classList.remove("visible"),setTimeout(function(){t.remove(),n(r)},300)}})}function sf(){if(document.getElementById("resetDialogOverlay"))return;var n=document.createElement("div");n.id="resetDialogOverlay",n.className="reset-overlay";var t=document.createElement("div");t.className="reset-dialog";var e="";e+='<div class="reset-header">',e+='<svg viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" width="28" height="28">',e+='<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>',e+='<line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',e+="</svg>",e+="<h3>Reset Kirra Scheduler</h3>",e+="</div>",e+='<div class="reset-warning">',e+="<strong>This action cannot be undone.</strong> ",e+="Export a <em>Kirra Gantt Project (.kgp)</em> file first if you want to preserve your current schedule.",e+="</div>",e+='<div class="reset-form">',e+='<label class="reset-option reset-option-all">',e+='<input type="checkbox" id="resetAll" value="all">',e+='<span class="reset-option-text">Reset All</span>',e+='<span class="reset-option-desc">Wipe the Kirra Gantt of all information</span>',e+="</label>",e+='<div class="reset-divider"></div>',e+='<div class="reset-section-label">Spatial</div>',e+='<label class="reset-option">',e+='<input type="checkbox" id="resetPolygons" value="polygons">',e+='<span class="reset-option-text">Remove Polygons and Volumes without Drill Holes</span>',e+="</label>",e+='<label class="reset-option">',e+='<input type="checkbox" id="resetDrillPlans" value="drillPlans">',e+='<span class="reset-option-text">Remove Designed Drill Plans</span>',e+='<span class="reset-option-desc">Clears all blast entries from the schedule</span>',e+="</label>",e+='<div class="reset-divider"></div>',e+='<div class="reset-section-label">Configurations</div>',e+='<label class="reset-option">',e+='<input type="checkbox" id="resetPatterns" value="patterns">',e+='<span class="reset-option-text">Remove Pattern Specifications</span>',e+='<span class="reset-option-desc">Clears the Pattern Library</span>',e+="</label>",e+='<label class="reset-option">',e+='<input type="checkbox" id="resetChargeConfigs" value="chargeConfigs">',e+='<span class="reset-option-text">Remove Charge Configurations</span>',e+='<span class="reset-option-desc">Clears imported charge configs</span>',e+="</label>",e+='<div class="reset-divider"></div>',e+='<div class="reset-section-label">Equipment</div>',e+='<label class="reset-option">',e+='<input type="checkbox" id="resetDrillFleet" value="drillFleet">',e+='<span class="reset-option-text">Remove Drill Fleet</span>',e+='<span class="reset-option-desc">Clears all drill rigs and their assignments</span>',e+="</label>",e+='<label class="reset-option">',e+='<input type="checkbox" id="resetLoadFleet" value="loadFleet">',e+='<span class="reset-option-text">Remove Loading Fleet</span>',e+='<span class="reset-option-desc">Clears all MPUs and their assignments</span>',e+="</label>",e+='<label class="reset-option">',e+='<input type="checkbox" id="resetMaintenance" value="maintenance">',e+='<span class="reset-option-text">Remove Maintenance Windows</span>',e+='<span class="reset-option-desc">Clears scheduled maintenance from drills and MPUs (keeps the rigs)</span>',e+="</label>",e+='<label class="reset-option">',e+='<input type="checkbox" id="resetPersonnel" value="personnel">',e+='<span class="reset-option-text">Remove Personnel Roster</span>',e+='<span class="reset-option-desc">Clears the named personnel list</span>',e+="</label>",e+='<div class="reset-divider"></div>',e+='<div class="reset-section-label">Scheduling</div>',e+='<label class="reset-option">',e+='<input type="checkbox" id="resetDelays" value="delays">',e+='<span class="reset-option-text">Remove All Delays</span>',e+='<span class="reset-option-desc">Strips UD, SD, SM, UM, UP, SP, UW, SW, LP delays from all blasts</span>',e+="</label>",e+='<label class="reset-option">',e+='<input type="checkbox" id="resetBlocks" value="blocks">',e+='<span class="reset-option-text">Remove Drill Blocks / Splits</span>',e+='<span class="reset-option-desc">Merges split blocks back to single-phase drilling per blast</span>',e+="</label>",e+='<label class="reset-option">',e+='<input type="checkbox" id="resetCrew" value="crew">',e+='<span class="reset-option-text">Remove Crew Allocations</span>',e+='<span class="reset-option-desc">Clears OP/FT/SF crew assignments from all blasts</span>',e+="</label>",e+='<div class="reset-divider"></div>',e+='<div class="reset-section-label">Targets &amp; Settings</div>',e+='<label class="reset-option">',e+='<input type="checkbox" id="resetConformance" value="conformance">',e+='<span class="reset-option-text">Reset Conformance Targets</span>',e+='<span class="reset-option-desc">Resets target BCM, actual BCM, and target MTD to zero</span>',e+="</label>",e+='<label class="reset-option">',e+='<input type="checkbox" id="resetSettings" value="settings">',e+='<span class="reset-option-text">Reset Global Settings to Defaults</span>',e+='<span class="reset-option-desc">Rig hours 24, availability 0.85, utilisation 0.75, default dependency rules</span>',e+="</label>",e+="</div>",e+='<div class="reset-actions">',e+='<button class="btn reset-btn-cancel" id="resetCancel">Cancel</button>',e+='<button class="btn reset-btn-confirm" id="resetConfirm" disabled>',e+='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">',e+='<path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',e+="</svg>",e+=" Reset Selected",e+="</button>",e+="</div>",t.innerHTML=e,n.appendChild(t),document.body.appendChild(n);var i=document.getElementById("resetAll"),r=t.querySelectorAll('.reset-form input[type="checkbox"]:not(#resetAll)');i.addEventListener("change",function(){var o=i.checked;r.forEach(function(l){l.checked=o,l.disabled=o}),a()}),r.forEach(function(o){o.addEventListener("change",function(){var l=!0;r.forEach(function(c){c.checked||(l=!1)}),i.checked=l,a()})});function a(){var o=i.checked;o||r.forEach(function(l){l.checked&&(o=!0)}),document.getElementById("resetConfirm").disabled=!o}document.getElementById("resetCancel").addEventListener("click",function(){n.remove()}),n.addEventListener("click",function(o){o.target===n&&n.remove()});var s=function(o){o.key==="Escape"&&(n.remove(),document.removeEventListener("keydown",s))};document.addEventListener("keydown",s),document.getElementById("resetConfirm").addEventListener("click",function(){of(),n.remove()})}function of(){var n=document.getElementById("resetAll").checked;if((n||document.getElementById("resetPolygons").checked)&&(z.blasts=z.blasts.filter(function(a){var s=(a.d65Meters||0)+(a.pvMeters||0);return s>0})),(n||document.getElementById("resetDrillPlans").checked)&&(z.blasts=[],z.importedBlasts=[]),(n||document.getElementById("resetPatterns").checked)&&(z.patterns=[]),(n||document.getElementById("resetChargeConfigs").checked)&&(z.chargeConfigs=[]),(n||document.getElementById("resetDrillFleet").checked)&&(ne.length=0,z.blasts.forEach(function(a){a.assignedDrills=[],a.drillBlocks&&a.drillBlocks.forEach(function(s){s.assignedDrills=[],s.drillRates={}})})),(n||document.getElementById("resetLoadFleet").checked)&&(Te.length=0,z.blasts.forEach(function(a){a.assignedMPUs=[]})),(n||document.getElementById("resetMaintenance").checked)&&(ne.forEach(function(a){a.maintenance=[]}),Te.forEach(function(a){a.maintenance=[]})),(n||document.getElementById("resetPersonnel").checked)&&(Gn.length=0),(n||document.getElementById("resetDelays").checked)&&z.blasts.forEach(function(a){a.delays=[]}),(n||document.getElementById("resetBlocks").checked)&&z.blasts.forEach(function(a){if(a.drillBlocks&&a.drillBlocks.length>0){var s=0;a.drillBlocks.forEach(function(l){s+=l.meters||0});var o=[];a.drillBlocks.forEach(function(l){(l.assignedDrills||[]).forEach(function(c){o.indexOf(c)===-1&&o.push(c)})}),a.assignedDrills=o,delete a.drillBlocks}}),(n||document.getElementById("resetCrew").checked)&&z.blasts.forEach(function(a){delete a.crewAllocated}),(n||document.getElementById("resetConformance").checked)&&(z.conformance={targetBCM:0,actualBCM:0,targetMTD:0,monthStart:new Date().toISOString().split("T")[0].slice(0,8)+"01"}),n||document.getElementById("resetSettings").checked){z.rigHours=24,z.availability=.85,z.utilisation=.75,z.ganttWeeks=8,z.deps={drillPctForLoad:.5,drillPctForBlast:1,loadPctForBlast:1,minLeadDays:0,enforceSequence:!0},document.getElementById("planStart");var t=document.getElementById("ganttWeeks"),e=document.getElementById("rigHours"),i=document.getElementById("availability"),r=document.getElementById("utilisation");t&&(t.value=z.ganttWeeks),e&&(e.value=z.rigHours),i&&(i.value=z.availability),r&&(r.value=z.utilisation)}n&&rf(),Se(),se(),ir(),Ur(),Br(),Ia(),On()}function lf(){var n=document.getElementById("btnResetGantt");n&&n.addEventListener("click",sf)}function Oo(n,t,e){var i=document.getElementById(n),r=document.getElementById(t);i.addEventListener("click",function(){r.click()}),i.addEventListener("dragover",function(a){a.preventDefault(),i.classList.add("dragover")}),i.addEventListener("dragleave",function(){i.classList.remove("dragover")}),i.addEventListener("drop",function(a){a.preventDefault(),i.classList.remove("dragover");var s=a.dataTransfer.files[0];s&&e(s)}),r.addEventListener("change",function(a){a.target.files[0]&&e(a.target.files[0])})}function cf(n){var t=document.getElementById("dxfLog");t.innerHTML='<div class="log-info">Reading '+n.name+"...</div>";var e=new FileReader;e.onload=function(i){var r=i.target.result,a=df(r);if(a.length===0){t.innerHTML+='<div class="log-warn">Warning: No blast polygons found. Expected layer naming: BLASTNAME-HOLETYPE{[B][S][BH][SD][D]}</div>';return}t.innerHTML+='<div class="log-ok">Found '+a.length+" blast definition(s)</div>",z.importedBlasts=a,Fo()},e.readAsText(n)}function df(n){for(var t=[],e=n.split(`
`).map(function(m){return m.trim()}),i=/^(.+?)-(.+?)\{\[([^\]]*)\]\[([^\]]*)\]\[([^\]]*)\]\[([^\]]*)\]\[([^\]]*)\]\}/,r=new Set,a={},s=0;s<e.length;s++)if(e[s]==="LWPOLYLINE"||e[s]==="POLYLINE"){for(var o="",l=[],c=s+1;c<Math.min(s+500,e.length);c++){if(e[c]==="8"&&e[c+1]&&(o=e[c+1]),e[c]==="10"&&e[c+1]){var u=parseFloat(e[c+1]);if(e[c+2]==="20"&&e[c+3]){var f=parseFloat(e[c+3]);l.push({x:u,y:f})}}if(e[c]==="0")break}o&&(r.add(o),a[o]||(a[o]=[]),a[o].push(l))}for(var h=0;h<e.length;h++)e[h]==="2"&&e[h-1]==="0"&&r.add(e[h+1]||e[h]);var d=document.getElementById("dxfLog");return d.innerHTML+='<div class="log-info">Found '+r.size+" layers in DXF</div>",r.forEach(function(m){var v=m.match(i);if(v){var g=v[1],p=v[2],_=v[3],y=v[4],x=v[5],A=v[6],L=v[7],P=t.find(function(M){return M.name===g});P||(P={name:g,holeTypes:[],polygons:[]},t.push(P)),P.holeTypes.push({type:p.toUpperCase(),burden:parseFloat(_)||0,spacing:parseFloat(y)||0,benchHt:parseFloat(x)||12,subdrill:parseFloat(A)||1.5,diam:parseFloat(L)||229,layer:m,polygon:a[m]||[]}),d.innerHTML+='<div class="log-ok">'+g+" → "+p+" (B:"+_+" S:"+y+" BH:"+x+")</div>"}else d.innerHTML+='<div class="log-warn">Layer "'+m+`" doesn't match expected pattern</div>`}),t}function uf(n){var t=document.getElementById("kirraLog");t.innerHTML='<div class="log-info">Reading '+n.name+"...</div>";var e=new FileReader;e.onload=function(i){try{var r=JSON.parse(i.target.result);if(r.chargeConfigs||r.charge_configs){var a=r.chargeConfigs||r.charge_configs;z.chargeConfigs=Array.isArray(a)?a:[a],t.innerHTML+='<div class="log-ok">Loaded '+z.chargeConfigs.length+" charge config(s)</div>",z.chargeConfigs.forEach(function(s){var o=s.name||s.configName||"Unknown",l=s.decks||s.chargeDeck||[];t.innerHTML+='<div class="log-ok">  → '+o+": "+l.length+" deck(s)</div>"})}else r.name||r.configName?(z.chargeConfigs=[r],t.innerHTML+='<div class="log-ok">Loaded charge config: '+(r.name||r.configName)+"</div>"):t.innerHTML+=`<div class="log-warn">No charge configs found in file. Expected 'chargeConfigs' or 'charge_configs' key.</div>`;Br()}catch(s){t.innerHTML+='<div class="log-err">Parse error: '+s.message+"</div>"}},e.readAsText(n)}function hf(n){var t=document.getElementById("kirraProjectLog");t.innerHTML='<div class="log-info">Reading '+n.name+"...</div>";var e=new FileReader;e.onload=function(i){try{var r=JSON.parse(i.target.result);if(r.format!=="KirraGanttProject"){t.innerHTML+='<div class="log-warn">Not a Kirra Gantt Project file. Trying standard import...</div>',parseKirraProjectFromData(r,t);return}if(t.innerHTML+='<div class="log-ok">Kirra Gantt Project v'+(r.version||"?")+" ("+Math.round(n.size/1024)+" KB)</div>",t.innerHTML+='<div class="log-info">Exported: '+(r.exportDate||"unknown")+"</div>",r.settings){var a=r.settings;a.planStart&&(z.planStart=new Date(a.planStart)),a.ganttWeeks!==void 0&&(z.ganttWeeks=a.ganttWeeks),a.rigHours!==void 0&&(z.rigHours=a.rigHours),a.availability!==void 0&&(z.availability=a.availability),a.utilisation!==void 0&&(z.utilisation=a.utilisation),a.deps&&(z.deps=a.deps),t.innerHTML+='<div class="log-ok">Settings restored</div>'}r.blasts&&Array.isArray(r.blasts)&&(z.blasts=r.blasts,t.innerHTML+='<div class="log-ok">'+r.blasts.length+" blast(s) restored</div>"),r.patterns&&Array.isArray(r.patterns)&&(z.patterns=r.patterns,t.innerHTML+='<div class="log-ok">'+r.patterns.length+" pattern(s) restored</div>"),r.chargeConfigs&&(z.chargeConfigs=Array.isArray(r.chargeConfigs)?r.chargeConfigs:[]),r.drills&&Array.isArray(r.drills)&&(ne.length=0,r.drills.forEach(function(u){ne.push(u)}),t.innerHTML+='<div class="log-ok">'+r.drills.length+" drill(s) restored</div>"),r.mpus&&Array.isArray(r.mpus)&&(Te.length=0,r.mpus.forEach(function(u){Te.push(u)}),t.innerHTML+='<div class="log-ok">'+r.mpus.length+" MPU(s) restored</div>"),r.people&&Array.isArray(r.people)&&(Gn.length=0,r.people.forEach(function(u){Gn.push(u)}),t.innerHTML+='<div class="log-ok">'+r.people.length+" personnel restored</div>"),r.conformance&&(z.conformance=r.conformance,t.innerHTML+='<div class="log-ok">Conformance targets restored</div>'),r.importedBlasts&&(z.importedBlasts=r.importedBlasts),r.kirraProjectSurfaces&&Array.isArray(r.kirraProjectSurfaces)&&(z.kirraProjectSurfaces=r.kirraProjectSurfaces,t.innerHTML+='<div class="log-ok">'+r.kirraProjectSurfaces.length+" surface(s) restored for 3D playback</div>"),r.kirraProjectSolids&&Array.isArray(r.kirraProjectSolids)&&(z.kirraProjectSolids=r.kirraProjectSolids,t.innerHTML+='<div class="log-ok">'+r.kirraProjectSolids.length+" solid(s) restored for 3D playback</div>"),t.innerHTML+='<div class="log-ok" style="font-weight:700;margin-top:6px;">Project restored successfully</div>';var s=document.getElementById("ganttWeeks"),o=document.getElementById("rigHours"),l=document.getElementById("availability"),c=document.getElementById("utilisation");s&&(s.value=z.ganttWeeks),o&&(o.value=z.rigHours),l&&(l.value=z.availability),c&&(c.value=z.utilisation),Se(),se(),ir(),Ur(),Br(),Ia(),On()}catch(u){t.innerHTML+='<div class="log-err">Parse error: '+u.message+"</div>"}},e.readAsText(n)}function ff(n){if(n.name&&n.name.toLowerCase().indexOf(".kgp")!==-1){hf(n);return}var t=document.getElementById("kirraProjectLog");t.innerHTML='<div class="log-info">Reading '+n.name+"...</div>";var e=new FileReader;e.onload=function(i){try{var r=JSON.parse(i.target.result);t.innerHTML+='<div class="log-ok">Parsed Kirra project file ('+Math.round(n.size/1024)+" KB)</div>";var a=[],s=["images","pointClouds","points","circles","geoTiffs","lasFiles","navFiles","dxfEntities"];s.forEach(function(x){if(r[x]){var A=Array.isArray(r[x])?r[x].length:Object.keys(r[x]).length;a.push(x+" ("+A+")")}}),a.length>0&&(t.innerHTML+='<div class="log-warn">⚠ Ignored data types (not used by Scheduler): '+a.join(", ")+"</div>");var o=r.blastHoles||r.holes||r.allBlastHoles||null;if(o&&Array.isArray(o)&&o.length>0){t.innerHTML+='<div class="log-ok">→ Blast holes: '+o.length+" total</div>";var l=pf(o),c=Object.keys(l);t.innerHTML+='<div class="log-ok">  Found '+c.length+" blast pattern(s): "+c.join(", ")+"</div>",c.forEach(function(x){var A=mf(x,l[x]);z.importedBlasts.push(A)})}var u=r.kads||r.kadEntities||r.drawings||null;if(u){var f=Array.isArray(u)?u:Object.values(u),h=0,d=0,m=0,v=0;f.forEach(function(x){var A=x.entityType||(x.geometryData?"unknown":"");if(A==="poly"||A==="polygon"){h++;var L=gf(x);if(L.length>0){var P=x.entityName||x.name||"KAD_Poly_"+h,M=z.importedBlasts.find(function(w){return w.name===P});M?(M.polygons=L,t.innerHTML+='<div class="log-ok">  KAD poly "'+P+'" matched to blast</div>'):t.innerHTML+='<div class="log-info">  KAD poly "'+P+'" (no matching blast)</div>'}}else A==="line"?d++:A==="text"?m++:A==="point"&&v++}),t.innerHTML+='<div class="log-ok">→ KAD entities: '+h+" polys imported</div>",d+m+v>0&&(t.innerHTML+='<div class="log-warn">  Ignored KAD types: '+(d>0?d+" lines ":"")+(m>0?m+" texts ":"")+(v>0?v+" points":"")+"</div>")}var g=r.surfaces||r.loadedSurfaces||null;if(g){var p=Array.isArray(g)?g:Object.values(g);z.kirraProjectSurfaces=p.map(function(x){return{name:x.name||x.id||"Unnamed",points:x.points||[],triangles:x.triangles||[],bounds:x.meshBounds||null,gradient:x.gradient||"default",visible:!0,opacity:.85}}),t.innerHTML+='<div class="log-ok">→ Surfaces: '+p.length+" imported (full geometry preserved for 3D)</div>",p.forEach(function(x){var A=x.name||x.id||"Unnamed",L=x.points?x.points.length:0,P=x.triangles?x.triangles.length:0;t.innerHTML+='<div class="log-ok">  '+A+" ("+L+" pts, "+P+" tris)</div>"})}var _=r.solids||r.meshes||null;if(_){var y=Array.isArray(_)?_:Object.values(_);z.kirraProjectSolids=y.map(function(x){return{name:x.name||x.id||"Unnamed",points:x.points||[],triangles:x.triangles||[],volume:x.volume||0,bounds:x.meshBounds||null,isTextured:!!x.isTexturedMesh,visible:!0,opacity:.85}}),t.innerHTML+='<div class="log-ok">→ Solids: '+y.length+" imported (full geometry preserved)</div>"}r.chargeConfigs&&(z.chargeConfigs=Array.isArray(r.chargeConfigs)?r.chargeConfigs:[r.chargeConfigs],t.innerHTML+='<div class="log-info">  Charge configs merged into forecast engine</div>'),z.importedBlasts.length>0?(t.innerHTML+='<div class="log-ok" style="font-weight:700;margin-top:6px;">✅ '+z.importedBlasts.length+" blast(s) ready to merge into schedule</div>",Fo()):t.innerHTML+=`<div class="log-warn">No blast data found. Expected 'blastHoles', 'holes', or 'blasts' key.</div>`}catch(x){t.innerHTML+='<div class="log-err">Parse error: '+x.message+"</div>"}},e.readAsText(n)}function pf(n){var t={};return n.forEach(function(e){var i=e.entityName||e.entity_name||e.patternName||"Unnamed";t[i]||(t[i]=[]),t[i].push(e)}),t}function mf(n,t){var e={},i=0,r=0;t.forEach(function(u){var f=u.holeDiameter||u.diameter||229,h=f>1?f/1e3:f,d=u.holeType||u.type||"Production",m=d+"_"+Math.round(f),v=u.holeLengthCalculated||u.holeLength||0;if(v===0&&u.startZLocation&&u.endZLocation){var g=(u.endXLocation||0)-(u.startXLocation||0),p=(u.endYLocation||0)-(u.startYLocation||0),_=(u.endZLocation||0)-(u.startZLocation||0);v=Math.sqrt(g*g+p*p+_*_)}i+=v,e[m]||(e[m]={type:d.toUpperCase(),diam:h,burden:u.burden||0,spacing:u.spacing||0,holes:0,drillMeters:0,expMass:0}),e[m].holes++,e[m].drillMeters+=v,u.burden&&(e[m].burden=u.burden),u.spacing&&(e[m].spacing=u.spacing)});var a=Object.keys(e).map(function(u){return e[u]}),s=0,o=0;a.forEach(function(u){u.diam<=.165?s+=u.drillMeters:o+=u.drillMeters});var l=i>0?s/i:0,c=i>0?o/i:0;return{name:n,mode:"Auto",surfaceArea:0,pattern:"",pctD65:Math.round(l*100)/100,pctPV:Math.round(c*100)/100,rateD65:19,ratePV:20,numD65:l>0?1:0,numPV:c>0?1:0,loadRate:1e5,d65Meters:Math.round(s*10)/10,pvMeters:Math.round(o*10)/10,volume:0,expMass:Math.round(r),drillStart:null,drillStartTime:"06:00",drillDays:0,loadStart:null,loadDays:0,blastDate:null,status:"planned",deps:{drillPctForLoad:null,drillPctForBlast:null,loadPctForBlast:null,minLeadDays:null,predecessor:null},assignedDrills:[],assignedMPUs:[],holeTypes:a,polygons:[],_sourceHoleCount:t.length}}function gf(n){var t=n.geometryData||n.points||[];return Array.isArray(t)?t.map(function(e){return{x:e.pointXLocation||e.x||0,y:e.pointYLocation||e.y||0,z:e.pointZLocation||e.z||0}}).filter(function(e){return e.x!==0||e.y!==0}):[]}var Hr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function vf(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function Vr(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var qa={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var Cl;function _f(){return Cl||(Cl=1,(function(n,t){(function(e){n.exports=e()})(function(){return(function e(i,r,a){function s(c,u){if(!r[c]){if(!i[c]){var f=typeof Vr=="function"&&Vr;if(!u&&f)return f(c,!0);if(o)return o(c,!0);var h=new Error("Cannot find module '"+c+"'");throw h.code="MODULE_NOT_FOUND",h}var d=r[c]={exports:{}};i[c][0].call(d.exports,function(m){var v=i[c][1][m];return s(v||m)},d,d.exports,e,i,r,a)}return r[c].exports}for(var o=typeof Vr=="function"&&Vr,l=0;l<a.length;l++)s(a[l]);return s})({1:[function(e,i,r){var a=e("./utils"),s=e("./support"),o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(l){for(var c,u,f,h,d,m,v,g=[],p=0,_=l.length,y=_,x=a.getTypeOf(l)!=="string";p<l.length;)y=_-p,f=x?(c=l[p++],u=p<_?l[p++]:0,p<_?l[p++]:0):(c=l.charCodeAt(p++),u=p<_?l.charCodeAt(p++):0,p<_?l.charCodeAt(p++):0),h=c>>2,d=(3&c)<<4|u>>4,m=1<y?(15&u)<<2|f>>6:64,v=2<y?63&f:64,g.push(o.charAt(h)+o.charAt(d)+o.charAt(m)+o.charAt(v));return g.join("")},r.decode=function(l){var c,u,f,h,d,m,v=0,g=0,p="data:";if(l.substr(0,p.length)===p)throw new Error("Invalid base64 input, it looks like a data url.");var _,y=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===o.charAt(64)&&y--,l.charAt(l.length-2)===o.charAt(64)&&y--,y%1!=0)throw new Error("Invalid base64 input, bad content length.");for(_=s.uint8array?new Uint8Array(0|y):new Array(0|y);v<l.length;)c=o.indexOf(l.charAt(v++))<<2|(h=o.indexOf(l.charAt(v++)))>>4,u=(15&h)<<4|(d=o.indexOf(l.charAt(v++)))>>2,f=(3&d)<<6|(m=o.indexOf(l.charAt(v++))),_[g++]=c,d!==64&&(_[g++]=u),m!==64&&(_[g++]=f);return _}},{"./support":30,"./utils":32}],2:[function(e,i,r){var a=e("./external"),s=e("./stream/DataWorker"),o=e("./stream/Crc32Probe"),l=e("./stream/DataLengthProbe");function c(u,f,h,d,m){this.compressedSize=u,this.uncompressedSize=f,this.crc32=h,this.compression=d,this.compressedContent=m}c.prototype={getContentWorker:function(){var u=new s(a.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),f=this;return u.on("end",function(){if(this.streamInfo.data_length!==f.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),u},getCompressedWorker:function(){return new s(a.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(u,f,h){return u.pipe(new o).pipe(new l("uncompressedSize")).pipe(f.compressWorker(h)).pipe(new l("compressedSize")).withStreamInfo("compression",f)},i.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,i,r){var a=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new a("STORE compression")},uncompressWorker:function(){return new a("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,i,r){var a=e("./utils"),s=(function(){for(var o,l=[],c=0;c<256;c++){o=c;for(var u=0;u<8;u++)o=1&o?3988292384^o>>>1:o>>>1;l[c]=o}return l})();i.exports=function(o,l){return o!==void 0&&o.length?a.getTypeOf(o)!=="string"?(function(c,u,f,h){var d=s,m=h+f;c^=-1;for(var v=h;v<m;v++)c=c>>>8^d[255&(c^u[v])];return-1^c})(0|l,o,o.length,0):(function(c,u,f,h){var d=s,m=h+f;c^=-1;for(var v=h;v<m;v++)c=c>>>8^d[255&(c^u.charCodeAt(v))];return-1^c})(0|l,o,o.length,0):0}},{"./utils":32}],5:[function(e,i,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,i,r){var a=null;a=typeof Promise<"u"?Promise:e("lie"),i.exports={Promise:a}},{lie:37}],7:[function(e,i,r){var a=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",s=e("pako"),o=e("./utils"),l=e("./stream/GenericWorker"),c=a?"uint8array":"array";function u(f,h){l.call(this,"FlateWorker/"+f),this._pako=null,this._pakoAction=f,this._pakoOptions=h,this.meta={}}r.magic="\b\0",o.inherits(u,l),u.prototype.processChunk=function(f){this.meta=f.meta,this._pako===null&&this._createPako(),this._pako.push(o.transformTo(c,f.data),!1)},u.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},u.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},u.prototype._createPako=function(){this._pako=new s[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var f=this;this._pako.onData=function(h){f.push({data:h,meta:f.meta})}},r.compressWorker=function(f){return new u("Deflate",f)},r.uncompressWorker=function(){return new u("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,i,r){function a(d,m){var v,g="";for(v=0;v<m;v++)g+=String.fromCharCode(255&d),d>>>=8;return g}function s(d,m,v,g,p,_){var y,x,A=d.file,L=d.compression,P=_!==c.utf8encode,M=o.transformTo("string",_(A.name)),w=o.transformTo("string",c.utf8encode(A.name)),H=A.comment,F=o.transformTo("string",_(H)),D=o.transformTo("string",c.utf8encode(H)),B=w.length!==A.name.length,S=D.length!==H.length,C="",N="",U="",Q=A.dir,X=A.date,$={crc32:0,compressedSize:0,uncompressedSize:0};m&&!v||($.crc32=d.crc32,$.compressedSize=d.compressedSize,$.uncompressedSize=d.uncompressedSize);var W=0;m&&(W|=8),P||!B&&!S||(W|=2048);var V=0,pt=0;Q&&(V|=16),p==="UNIX"?(pt=798,V|=(function(ut,it){var ht=ut;return ut||(ht=it?16893:33204),(65535&ht)<<16})(A.unixPermissions,Q)):(pt=20,V|=(function(ut){return 63&(ut||0)})(A.dosPermissions)),y=X.getUTCHours(),y<<=6,y|=X.getUTCMinutes(),y<<=5,y|=X.getUTCSeconds()/2,x=X.getUTCFullYear()-1980,x<<=4,x|=X.getUTCMonth()+1,x<<=5,x|=X.getUTCDate(),B&&(N=a(1,1)+a(u(M),4)+w,C+="up"+a(N.length,2)+N),S&&(U=a(1,1)+a(u(F),4)+D,C+="uc"+a(U.length,2)+U);var mt="";return mt+=`
\0`,mt+=a(W,2),mt+=L.magic,mt+=a(y,2),mt+=a(x,2),mt+=a($.crc32,4),mt+=a($.compressedSize,4),mt+=a($.uncompressedSize,4),mt+=a(M.length,2),mt+=a(C.length,2),{fileRecord:f.LOCAL_FILE_HEADER+mt+M+C,dirRecord:f.CENTRAL_FILE_HEADER+a(pt,2)+mt+a(F.length,2)+"\0\0\0\0"+a(V,4)+a(g,4)+M+C+F}}var o=e("../utils"),l=e("../stream/GenericWorker"),c=e("../utf8"),u=e("../crc32"),f=e("../signature");function h(d,m,v,g){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=m,this.zipPlatform=v,this.encodeFileName=g,this.streamFiles=d,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}o.inherits(h,l),h.prototype.push=function(d){var m=d.meta.percent||0,v=this.entriesCount,g=this._sources.length;this.accumulate?this.contentBuffer.push(d):(this.bytesWritten+=d.data.length,l.prototype.push.call(this,{data:d.data,meta:{currentFile:this.currentFile,percent:v?(m+100*(v-g-1))/v:100}}))},h.prototype.openedSource=function(d){this.currentSourceOffset=this.bytesWritten,this.currentFile=d.file.name;var m=this.streamFiles&&!d.file.dir;if(m){var v=s(d,m,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:v.fileRecord,meta:{percent:0}})}else this.accumulate=!0},h.prototype.closedSource=function(d){this.accumulate=!1;var m=this.streamFiles&&!d.file.dir,v=s(d,m,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(v.dirRecord),m)this.push({data:(function(g){return f.DATA_DESCRIPTOR+a(g.crc32,4)+a(g.compressedSize,4)+a(g.uncompressedSize,4)})(d),meta:{percent:100}});else for(this.push({data:v.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},h.prototype.flush=function(){for(var d=this.bytesWritten,m=0;m<this.dirRecords.length;m++)this.push({data:this.dirRecords[m],meta:{percent:100}});var v=this.bytesWritten-d,g=(function(p,_,y,x,A){var L=o.transformTo("string",A(x));return f.CENTRAL_DIRECTORY_END+"\0\0\0\0"+a(p,2)+a(p,2)+a(_,4)+a(y,4)+a(L.length,2)+L})(this.dirRecords.length,v,d,this.zipComment,this.encodeFileName);this.push({data:g,meta:{percent:100}})},h.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},h.prototype.registerPrevious=function(d){this._sources.push(d);var m=this;return d.on("data",function(v){m.processChunk(v)}),d.on("end",function(){m.closedSource(m.previous.streamInfo),m._sources.length?m.prepareNextSource():m.end()}),d.on("error",function(v){m.error(v)}),this},h.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},h.prototype.error=function(d){var m=this._sources;if(!l.prototype.error.call(this,d))return!1;for(var v=0;v<m.length;v++)try{m[v].error(d)}catch{}return!0},h.prototype.lock=function(){l.prototype.lock.call(this);for(var d=this._sources,m=0;m<d.length;m++)d[m].lock()},i.exports=h},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,i,r){var a=e("../compressions"),s=e("./ZipFileWorker");r.generateWorker=function(o,l,c){var u=new s(l.streamFiles,c,l.platform,l.encodeFileName),f=0;try{o.forEach(function(h,d){f++;var m=(function(_,y){var x=_||y,A=a[x];if(!A)throw new Error(x+" is not a valid compression method !");return A})(d.options.compression,l.compression),v=d.options.compressionOptions||l.compressionOptions||{},g=d.dir,p=d.date;d._compressWorker(m,v).withStreamInfo("file",{name:h,dir:g,date:p,comment:d.comment||"",unixPermissions:d.unixPermissions,dosPermissions:d.dosPermissions}).pipe(u)}),u.entriesCount=f}catch(h){u.error(h)}return u}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,i,r){function a(){if(!(this instanceof a))return new a;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var s=new a;for(var o in this)typeof this[o]!="function"&&(s[o]=this[o]);return s}}(a.prototype=e("./object")).loadAsync=e("./load"),a.support=e("./support"),a.defaults=e("./defaults"),a.version="3.10.1",a.loadAsync=function(s,o){return new a().loadAsync(s,o)},a.external=e("./external"),i.exports=a},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,i,r){var a=e("./utils"),s=e("./external"),o=e("./utf8"),l=e("./zipEntries"),c=e("./stream/Crc32Probe"),u=e("./nodejsUtils");function f(h){return new s.Promise(function(d,m){var v=h.decompressed.getContentWorker().pipe(new c);v.on("error",function(g){m(g)}).on("end",function(){v.streamInfo.crc32!==h.decompressed.crc32?m(new Error("Corrupted zip : CRC32 mismatch")):d()}).resume()})}i.exports=function(h,d){var m=this;return d=a.extend(d||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:o.utf8decode}),u.isNode&&u.isStream(h)?s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):a.prepareContent("the loaded zip file",h,!0,d.optimizedBinaryString,d.base64).then(function(v){var g=new l(d);return g.load(v),g}).then(function(v){var g=[s.Promise.resolve(v)],p=v.files;if(d.checkCRC32)for(var _=0;_<p.length;_++)g.push(f(p[_]));return s.Promise.all(g)}).then(function(v){for(var g=v.shift(),p=g.files,_=0;_<p.length;_++){var y=p[_],x=y.fileNameStr,A=a.resolve(y.fileNameStr);m.file(A,y.decompressed,{binary:!0,optimizedBinaryString:!0,date:y.date,dir:y.dir,comment:y.fileCommentStr.length?y.fileCommentStr:null,unixPermissions:y.unixPermissions,dosPermissions:y.dosPermissions,createFolders:d.createFolders}),y.dir||(m.file(A).unsafeOriginalName=x)}return g.zipComment.length&&(m.comment=g.zipComment),m})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,i,r){var a=e("../utils"),s=e("../stream/GenericWorker");function o(l,c){s.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}a.inherits(o,s),o.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(u){c.push({data:u,meta:{percent:0}})}).on("error",function(u){c.isPaused?this.generatedError=u:c.error(u)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},o.prototype.pause=function(){return!!s.prototype.pause.call(this)&&(this._stream.pause(),!0)},o.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},i.exports=o},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,i,r){var a=e("readable-stream").Readable;function s(o,l,c){a.call(this,l),this._helper=o;var u=this;o.on("data",function(f,h){u.push(f)||u._helper.pause(),c&&c(h)}).on("error",function(f){u.emit("error",f)}).on("end",function(){u.push(null)})}e("../utils").inherits(s,a),s.prototype._read=function(){this._helper.resume()},i.exports=s},{"../utils":32,"readable-stream":16}],14:[function(e,i,r){i.exports={isNode:typeof Buffer<"u",newBufferFrom:function(a,s){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(a,s);if(typeof a=="number")throw new Error('The "data" argument must not be a number');return new Buffer(a,s)},allocBuffer:function(a){if(Buffer.alloc)return Buffer.alloc(a);var s=new Buffer(a);return s.fill(0),s},isBuffer:function(a){return Buffer.isBuffer(a)},isStream:function(a){return a&&typeof a.on=="function"&&typeof a.pause=="function"&&typeof a.resume=="function"}}},{}],15:[function(e,i,r){function a(A,L,P){var M,w=o.getTypeOf(L),H=o.extend(P||{},u);H.date=H.date||new Date,H.compression!==null&&(H.compression=H.compression.toUpperCase()),typeof H.unixPermissions=="string"&&(H.unixPermissions=parseInt(H.unixPermissions,8)),H.unixPermissions&&16384&H.unixPermissions&&(H.dir=!0),H.dosPermissions&&16&H.dosPermissions&&(H.dir=!0),H.dir&&(A=p(A)),H.createFolders&&(M=g(A))&&_.call(this,M,!0);var F=w==="string"&&H.binary===!1&&H.base64===!1;P&&P.binary!==void 0||(H.binary=!F),(L instanceof f&&L.uncompressedSize===0||H.dir||!L||L.length===0)&&(H.base64=!1,H.binary=!0,L="",H.compression="STORE",w="string");var D=null;D=L instanceof f||L instanceof l?L:m.isNode&&m.isStream(L)?new v(A,L):o.prepareContent(A,L,H.binary,H.optimizedBinaryString,H.base64);var B=new h(A,D,H);this.files[A]=B}var s=e("./utf8"),o=e("./utils"),l=e("./stream/GenericWorker"),c=e("./stream/StreamHelper"),u=e("./defaults"),f=e("./compressedObject"),h=e("./zipObject"),d=e("./generate"),m=e("./nodejsUtils"),v=e("./nodejs/NodejsStreamInputAdapter"),g=function(A){A.slice(-1)==="/"&&(A=A.substring(0,A.length-1));var L=A.lastIndexOf("/");return 0<L?A.substring(0,L):""},p=function(A){return A.slice(-1)!=="/"&&(A+="/"),A},_=function(A,L){return L=L!==void 0?L:u.createFolders,A=p(A),this.files[A]||a.call(this,A,null,{dir:!0,createFolders:L}),this.files[A]};function y(A){return Object.prototype.toString.call(A)==="[object RegExp]"}var x={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(A){var L,P,M;for(L in this.files)M=this.files[L],(P=L.slice(this.root.length,L.length))&&L.slice(0,this.root.length)===this.root&&A(P,M)},filter:function(A){var L=[];return this.forEach(function(P,M){A(P,M)&&L.push(M)}),L},file:function(A,L,P){if(arguments.length!==1)return A=this.root+A,a.call(this,A,L,P),this;if(y(A)){var M=A;return this.filter(function(H,F){return!F.dir&&M.test(H)})}var w=this.files[this.root+A];return w&&!w.dir?w:null},folder:function(A){if(!A)return this;if(y(A))return this.filter(function(w,H){return H.dir&&A.test(w)});var L=this.root+A,P=_.call(this,L),M=this.clone();return M.root=P.name,M},remove:function(A){A=this.root+A;var L=this.files[A];if(L||(A.slice(-1)!=="/"&&(A+="/"),L=this.files[A]),L&&!L.dir)delete this.files[A];else for(var P=this.filter(function(w,H){return H.name.slice(0,A.length)===A}),M=0;M<P.length;M++)delete this.files[P[M].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(A){var L,P={};try{if((P=o.extend(A||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:s.utf8encode})).type=P.type.toLowerCase(),P.compression=P.compression.toUpperCase(),P.type==="binarystring"&&(P.type="string"),!P.type)throw new Error("No output type specified.");o.checkSupport(P.type),P.platform!=="darwin"&&P.platform!=="freebsd"&&P.platform!=="linux"&&P.platform!=="sunos"||(P.platform="UNIX"),P.platform==="win32"&&(P.platform="DOS");var M=P.comment||this.comment||"";L=d.generateWorker(this,P,M)}catch(w){(L=new l("error")).error(w)}return new c(L,P.type||"string",P.mimeType)},generateAsync:function(A,L){return this.generateInternalStream(A).accumulate(L)},generateNodeStream:function(A,L){return(A=A||{}).type||(A.type="nodebuffer"),this.generateInternalStream(A).toNodejsStream(L)}};i.exports=x},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,i,r){i.exports=e("stream")},{stream:void 0}],17:[function(e,i,r){var a=e("./DataReader");function s(o){a.call(this,o);for(var l=0;l<this.data.length;l++)o[l]=255&o[l]}e("../utils").inherits(s,a),s.prototype.byteAt=function(o){return this.data[this.zero+o]},s.prototype.lastIndexOfSignature=function(o){for(var l=o.charCodeAt(0),c=o.charCodeAt(1),u=o.charCodeAt(2),f=o.charCodeAt(3),h=this.length-4;0<=h;--h)if(this.data[h]===l&&this.data[h+1]===c&&this.data[h+2]===u&&this.data[h+3]===f)return h-this.zero;return-1},s.prototype.readAndCheckSignature=function(o){var l=o.charCodeAt(0),c=o.charCodeAt(1),u=o.charCodeAt(2),f=o.charCodeAt(3),h=this.readData(4);return l===h[0]&&c===h[1]&&u===h[2]&&f===h[3]},s.prototype.readData=function(o){if(this.checkOffset(o),o===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},i.exports=s},{"../utils":32,"./DataReader":18}],18:[function(e,i,r){var a=e("../utils");function s(o){this.data=o,this.length=o.length,this.index=0,this.zero=0}s.prototype={checkOffset:function(o){this.checkIndex(this.index+o)},checkIndex:function(o){if(this.length<this.zero+o||o<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+o+"). Corrupted zip ?")},setIndex:function(o){this.checkIndex(o),this.index=o},skip:function(o){this.setIndex(this.index+o)},byteAt:function(){},readInt:function(o){var l,c=0;for(this.checkOffset(o),l=this.index+o-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=o,c},readString:function(o){return a.transformTo("string",this.readData(o))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var o=this.readInt(4);return new Date(Date.UTC(1980+(o>>25&127),(o>>21&15)-1,o>>16&31,o>>11&31,o>>5&63,(31&o)<<1))}},i.exports=s},{"../utils":32}],19:[function(e,i,r){var a=e("./Uint8ArrayReader");function s(o){a.call(this,o)}e("../utils").inherits(s,a),s.prototype.readData=function(o){this.checkOffset(o);var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},i.exports=s},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,i,r){var a=e("./DataReader");function s(o){a.call(this,o)}e("../utils").inherits(s,a),s.prototype.byteAt=function(o){return this.data.charCodeAt(this.zero+o)},s.prototype.lastIndexOfSignature=function(o){return this.data.lastIndexOf(o)-this.zero},s.prototype.readAndCheckSignature=function(o){return o===this.readData(4)},s.prototype.readData=function(o){this.checkOffset(o);var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},i.exports=s},{"../utils":32,"./DataReader":18}],21:[function(e,i,r){var a=e("./ArrayReader");function s(o){a.call(this,o)}e("../utils").inherits(s,a),s.prototype.readData=function(o){if(this.checkOffset(o),o===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},i.exports=s},{"../utils":32,"./ArrayReader":17}],22:[function(e,i,r){var a=e("../utils"),s=e("../support"),o=e("./ArrayReader"),l=e("./StringReader"),c=e("./NodeBufferReader"),u=e("./Uint8ArrayReader");i.exports=function(f){var h=a.getTypeOf(f);return a.checkSupport(h),h!=="string"||s.uint8array?h==="nodebuffer"?new c(f):s.uint8array?new u(a.transformTo("uint8array",f)):new o(a.transformTo("array",f)):new l(f)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,i,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,i,r){var a=e("./GenericWorker"),s=e("../utils");function o(l){a.call(this,"ConvertWorker to "+l),this.destType=l}s.inherits(o,a),o.prototype.processChunk=function(l){this.push({data:s.transformTo(this.destType,l.data),meta:l.meta})},i.exports=o},{"../utils":32,"./GenericWorker":28}],25:[function(e,i,r){var a=e("./GenericWorker"),s=e("../crc32");function o(){a.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(o,a),o.prototype.processChunk=function(l){this.streamInfo.crc32=s(l.data,this.streamInfo.crc32||0),this.push(l)},i.exports=o},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,i,r){var a=e("../utils"),s=e("./GenericWorker");function o(l){s.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}a.inherits(o,s),o.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}s.prototype.processChunk.call(this,l)},i.exports=o},{"../utils":32,"./GenericWorker":28}],27:[function(e,i,r){var a=e("../utils"),s=e("./GenericWorker");function o(l){s.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(u){c.dataIsReady=!0,c.data=u,c.max=u&&u.length||0,c.type=a.getTypeOf(u),c.isPaused||c._tickAndRepeat()},function(u){c.error(u)})}a.inherits(o,s),o.prototype.cleanUp=function(){s.prototype.cleanUp.call(this),this.data=null},o.prototype.resume=function(){return!!s.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,a.delay(this._tickAndRepeat,[],this)),!0)},o.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(a.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},o.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},i.exports=o},{"../utils":32,"./GenericWorker":28}],28:[function(e,i,r){function a(s){this.name=s||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}a.prototype={push:function(s){this.emit("data",s)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(s){this.emit("error",s)}return!0},error:function(s){return!this.isFinished&&(this.isPaused?this.generatedError=s:(this.isFinished=!0,this.emit("error",s),this.previous&&this.previous.error(s),this.cleanUp()),!0)},on:function(s,o){return this._listeners[s].push(o),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(s,o){if(this._listeners[s])for(var l=0;l<this._listeners[s].length;l++)this._listeners[s][l].call(this,o)},pipe:function(s){return s.registerPrevious(this)},registerPrevious:function(s){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=s.streamInfo,this.mergeStreamInfo(),this.previous=s;var o=this;return s.on("data",function(l){o.processChunk(l)}),s.on("end",function(){o.end()}),s.on("error",function(l){o.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var s=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),s=!0),this.previous&&this.previous.resume(),!s},flush:function(){},processChunk:function(s){this.push(s)},withStreamInfo:function(s,o){return this.extraStreamInfo[s]=o,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var s in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,s)&&(this.streamInfo[s]=this.extraStreamInfo[s])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var s="Worker "+this.name;return this.previous?this.previous+" -> "+s:s}},i.exports=a},{}],29:[function(e,i,r){var a=e("../utils"),s=e("./ConvertWorker"),o=e("./GenericWorker"),l=e("../base64"),c=e("../support"),u=e("../external"),f=null;if(c.nodestream)try{f=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function h(m,v){return new u.Promise(function(g,p){var _=[],y=m._internalType,x=m._outputType,A=m._mimeType;m.on("data",function(L,P){_.push(L),v&&v(P)}).on("error",function(L){_=[],p(L)}).on("end",function(){try{var L=(function(P,M,w){switch(P){case"blob":return a.newBlob(a.transformTo("arraybuffer",M),w);case"base64":return l.encode(M);default:return a.transformTo(P,M)}})(x,(function(P,M){var w,H=0,F=null,D=0;for(w=0;w<M.length;w++)D+=M[w].length;switch(P){case"string":return M.join("");case"array":return Array.prototype.concat.apply([],M);case"uint8array":for(F=new Uint8Array(D),w=0;w<M.length;w++)F.set(M[w],H),H+=M[w].length;return F;case"nodebuffer":return Buffer.concat(M);default:throw new Error("concat : unsupported type '"+P+"'")}})(y,_),A);g(L)}catch(P){p(P)}_=[]}).resume()})}function d(m,v,g){var p=v;switch(v){case"blob":case"arraybuffer":p="uint8array";break;case"base64":p="string"}try{this._internalType=p,this._outputType=v,this._mimeType=g,a.checkSupport(p),this._worker=m.pipe(new s(p)),m.lock()}catch(_){this._worker=new o("error"),this._worker.error(_)}}d.prototype={accumulate:function(m){return h(this,m)},on:function(m,v){var g=this;return m==="data"?this._worker.on(m,function(p){v.call(g,p.data,p.meta)}):this._worker.on(m,function(){a.delay(v,arguments,g)}),this},resume:function(){return a.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(m){if(a.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new f(this,{objectMode:this._outputType!=="nodebuffer"},m)}},i.exports=d},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,i,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var a=new ArrayBuffer(0);try{r.blob=new Blob([a],{type:"application/zip"}).size===0}catch{try{var s=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);s.append(a),r.blob=s.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(e,i,r){for(var a=e("./utils"),s=e("./support"),o=e("./nodejsUtils"),l=e("./stream/GenericWorker"),c=new Array(256),u=0;u<256;u++)c[u]=252<=u?6:248<=u?5:240<=u?4:224<=u?3:192<=u?2:1;c[254]=c[254]=1;function f(){l.call(this,"utf-8 decode"),this.leftOver=null}function h(){l.call(this,"utf-8 encode")}r.utf8encode=function(d){return s.nodebuffer?o.newBufferFrom(d,"utf-8"):(function(m){var v,g,p,_,y,x=m.length,A=0;for(_=0;_<x;_++)(64512&(g=m.charCodeAt(_)))==55296&&_+1<x&&(64512&(p=m.charCodeAt(_+1)))==56320&&(g=65536+(g-55296<<10)+(p-56320),_++),A+=g<128?1:g<2048?2:g<65536?3:4;for(v=s.uint8array?new Uint8Array(A):new Array(A),_=y=0;y<A;_++)(64512&(g=m.charCodeAt(_)))==55296&&_+1<x&&(64512&(p=m.charCodeAt(_+1)))==56320&&(g=65536+(g-55296<<10)+(p-56320),_++),g<128?v[y++]=g:(g<2048?v[y++]=192|g>>>6:(g<65536?v[y++]=224|g>>>12:(v[y++]=240|g>>>18,v[y++]=128|g>>>12&63),v[y++]=128|g>>>6&63),v[y++]=128|63&g);return v})(d)},r.utf8decode=function(d){return s.nodebuffer?a.transformTo("nodebuffer",d).toString("utf-8"):(function(m){var v,g,p,_,y=m.length,x=new Array(2*y);for(v=g=0;v<y;)if((p=m[v++])<128)x[g++]=p;else if(4<(_=c[p]))x[g++]=65533,v+=_-1;else{for(p&=_===2?31:_===3?15:7;1<_&&v<y;)p=p<<6|63&m[v++],_--;1<_?x[g++]=65533:p<65536?x[g++]=p:(p-=65536,x[g++]=55296|p>>10&1023,x[g++]=56320|1023&p)}return x.length!==g&&(x.subarray?x=x.subarray(0,g):x.length=g),a.applyFromCharCode(x)})(d=a.transformTo(s.uint8array?"uint8array":"array",d))},a.inherits(f,l),f.prototype.processChunk=function(d){var m=a.transformTo(s.uint8array?"uint8array":"array",d.data);if(this.leftOver&&this.leftOver.length){if(s.uint8array){var v=m;(m=new Uint8Array(v.length+this.leftOver.length)).set(this.leftOver,0),m.set(v,this.leftOver.length)}else m=this.leftOver.concat(m);this.leftOver=null}var g=(function(_,y){var x;for((y=y||_.length)>_.length&&(y=_.length),x=y-1;0<=x&&(192&_[x])==128;)x--;return x<0||x===0?y:x+c[_[x]]>y?x:y})(m),p=m;g!==m.length&&(s.uint8array?(p=m.subarray(0,g),this.leftOver=m.subarray(g,m.length)):(p=m.slice(0,g),this.leftOver=m.slice(g,m.length))),this.push({data:r.utf8decode(p),meta:d.meta})},f.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=f,a.inherits(h,l),h.prototype.processChunk=function(d){this.push({data:r.utf8encode(d.data),meta:d.meta})},r.Utf8EncodeWorker=h},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,i,r){var a=e("./support"),s=e("./base64"),o=e("./nodejsUtils"),l=e("./external");function c(v){return v}function u(v,g){for(var p=0;p<v.length;++p)g[p]=255&v.charCodeAt(p);return g}e("setimmediate"),r.newBlob=function(v,g){r.checkSupport("blob");try{return new Blob([v],{type:g})}catch{try{var p=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return p.append(v),p.getBlob(g)}catch{throw new Error("Bug : can't construct the Blob.")}}};var f={stringifyByChunk:function(v,g,p){var _=[],y=0,x=v.length;if(x<=p)return String.fromCharCode.apply(null,v);for(;y<x;)g==="array"||g==="nodebuffer"?_.push(String.fromCharCode.apply(null,v.slice(y,Math.min(y+p,x)))):_.push(String.fromCharCode.apply(null,v.subarray(y,Math.min(y+p,x)))),y+=p;return _.join("")},stringifyByChar:function(v){for(var g="",p=0;p<v.length;p++)g+=String.fromCharCode(v[p]);return g},applyCanBeUsed:{uint8array:(function(){try{return a.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return a.nodebuffer&&String.fromCharCode.apply(null,o.allocBuffer(1)).length===1}catch{return!1}})()}};function h(v){var g=65536,p=r.getTypeOf(v),_=!0;if(p==="uint8array"?_=f.applyCanBeUsed.uint8array:p==="nodebuffer"&&(_=f.applyCanBeUsed.nodebuffer),_)for(;1<g;)try{return f.stringifyByChunk(v,p,g)}catch{g=Math.floor(g/2)}return f.stringifyByChar(v)}function d(v,g){for(var p=0;p<v.length;p++)g[p]=v[p];return g}r.applyFromCharCode=h;var m={};m.string={string:c,array:function(v){return u(v,new Array(v.length))},arraybuffer:function(v){return m.string.uint8array(v).buffer},uint8array:function(v){return u(v,new Uint8Array(v.length))},nodebuffer:function(v){return u(v,o.allocBuffer(v.length))}},m.array={string:h,array:c,arraybuffer:function(v){return new Uint8Array(v).buffer},uint8array:function(v){return new Uint8Array(v)},nodebuffer:function(v){return o.newBufferFrom(v)}},m.arraybuffer={string:function(v){return h(new Uint8Array(v))},array:function(v){return d(new Uint8Array(v),new Array(v.byteLength))},arraybuffer:c,uint8array:function(v){return new Uint8Array(v)},nodebuffer:function(v){return o.newBufferFrom(new Uint8Array(v))}},m.uint8array={string:h,array:function(v){return d(v,new Array(v.length))},arraybuffer:function(v){return v.buffer},uint8array:c,nodebuffer:function(v){return o.newBufferFrom(v)}},m.nodebuffer={string:h,array:function(v){return d(v,new Array(v.length))},arraybuffer:function(v){return m.nodebuffer.uint8array(v).buffer},uint8array:function(v){return d(v,new Uint8Array(v.length))},nodebuffer:c},r.transformTo=function(v,g){if(g=g||"",!v)return g;r.checkSupport(v);var p=r.getTypeOf(g);return m[p][v](g)},r.resolve=function(v){for(var g=v.split("/"),p=[],_=0;_<g.length;_++){var y=g[_];y==="."||y===""&&_!==0&&_!==g.length-1||(y===".."?p.pop():p.push(y))}return p.join("/")},r.getTypeOf=function(v){return typeof v=="string"?"string":Object.prototype.toString.call(v)==="[object Array]"?"array":a.nodebuffer&&o.isBuffer(v)?"nodebuffer":a.uint8array&&v instanceof Uint8Array?"uint8array":a.arraybuffer&&v instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(v){if(!a[v.toLowerCase()])throw new Error(v+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(v){var g,p,_="";for(p=0;p<(v||"").length;p++)_+="\\x"+((g=v.charCodeAt(p))<16?"0":"")+g.toString(16).toUpperCase();return _},r.delay=function(v,g,p){setImmediate(function(){v.apply(p||null,g||[])})},r.inherits=function(v,g){function p(){}p.prototype=g.prototype,v.prototype=new p},r.extend=function(){var v,g,p={};for(v=0;v<arguments.length;v++)for(g in arguments[v])Object.prototype.hasOwnProperty.call(arguments[v],g)&&p[g]===void 0&&(p[g]=arguments[v][g]);return p},r.prepareContent=function(v,g,p,_,y){return l.Promise.resolve(g).then(function(x){return a.blob&&(x instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(x))!==-1)&&typeof FileReader<"u"?new l.Promise(function(A,L){var P=new FileReader;P.onload=function(M){A(M.target.result)},P.onerror=function(M){L(M.target.error)},P.readAsArrayBuffer(x)}):x}).then(function(x){var A=r.getTypeOf(x);return A?(A==="arraybuffer"?x=r.transformTo("uint8array",x):A==="string"&&(y?x=s.decode(x):p&&_!==!0&&(x=(function(L){return u(L,a.uint8array?new Uint8Array(L.length):new Array(L.length))})(x))),x):l.Promise.reject(new Error("Can't read the data of '"+v+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,i,r){var a=e("./reader/readerFor"),s=e("./utils"),o=e("./signature"),l=e("./zipEntry"),c=e("./support");function u(f){this.files=[],this.loadOptions=f}u.prototype={checkSignature:function(f){if(!this.reader.readAndCheckSignature(f)){this.reader.index-=4;var h=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+s.pretty(h)+", expected "+s.pretty(f)+")")}},isSignature:function(f,h){var d=this.reader.index;this.reader.setIndex(f);var m=this.reader.readString(4)===h;return this.reader.setIndex(d),m},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var f=this.reader.readData(this.zipCommentLength),h=c.uint8array?"uint8array":"array",d=s.transformTo(h,f);this.zipComment=this.loadOptions.decodeFileName(d)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var f,h,d,m=this.zip64EndOfCentralSize-44;0<m;)f=this.reader.readInt(2),h=this.reader.readInt(4),d=this.reader.readData(h),this.zip64ExtensibleData[f]={id:f,length:h,value:d}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var f,h;for(f=0;f<this.files.length;f++)h=this.files[f],this.reader.setIndex(h.localHeaderOffset),this.checkSignature(o.LOCAL_FILE_HEADER),h.readLocalPart(this.reader),h.handleUTF8(),h.processAttributes()},readCentralDir:function(){var f;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER);)(f=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(f);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var f=this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);if(f<0)throw this.isSignature(0,o.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(f);var h=f;if(this.checkSignature(o.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===s.MAX_VALUE_16BITS||this.diskWithCentralDirStart===s.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===s.MAX_VALUE_16BITS||this.centralDirRecords===s.MAX_VALUE_16BITS||this.centralDirSize===s.MAX_VALUE_32BITS||this.centralDirOffset===s.MAX_VALUE_32BITS){if(this.zip64=!0,(f=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(f),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,o.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var d=this.centralDirOffset+this.centralDirSize;this.zip64&&(d+=20,d+=12+this.zip64EndOfCentralSize);var m=h-d;if(0<m)this.isSignature(h,o.CENTRAL_FILE_HEADER)||(this.reader.zero=m);else if(m<0)throw new Error("Corrupted zip: missing "+Math.abs(m)+" bytes.")},prepareReader:function(f){this.reader=a(f)},load:function(f){this.prepareReader(f),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},i.exports=u},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,i,r){var a=e("./reader/readerFor"),s=e("./utils"),o=e("./compressedObject"),l=e("./crc32"),c=e("./utf8"),u=e("./compressions"),f=e("./support");function h(d,m){this.options=d,this.loadOptions=m}h.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(d){var m,v;if(d.skip(22),this.fileNameLength=d.readInt(2),v=d.readInt(2),this.fileName=d.readData(this.fileNameLength),d.skip(v),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((m=(function(g){for(var p in u)if(Object.prototype.hasOwnProperty.call(u,p)&&u[p].magic===g)return u[p];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+s.pretty(this.compressionMethod)+" unknown (inner file : "+s.transformTo("string",this.fileName)+")");this.decompressed=new o(this.compressedSize,this.uncompressedSize,this.crc32,m,d.readData(this.compressedSize))},readCentralPart:function(d){this.versionMadeBy=d.readInt(2),d.skip(2),this.bitFlag=d.readInt(2),this.compressionMethod=d.readString(2),this.date=d.readDate(),this.crc32=d.readInt(4),this.compressedSize=d.readInt(4),this.uncompressedSize=d.readInt(4);var m=d.readInt(2);if(this.extraFieldsLength=d.readInt(2),this.fileCommentLength=d.readInt(2),this.diskNumberStart=d.readInt(2),this.internalFileAttributes=d.readInt(2),this.externalFileAttributes=d.readInt(4),this.localHeaderOffset=d.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");d.skip(m),this.readExtraFields(d),this.parseZIP64ExtraField(d),this.fileComment=d.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var d=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),d==0&&(this.dosPermissions=63&this.externalFileAttributes),d==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var d=a(this.extraFields[1].value);this.uncompressedSize===s.MAX_VALUE_32BITS&&(this.uncompressedSize=d.readInt(8)),this.compressedSize===s.MAX_VALUE_32BITS&&(this.compressedSize=d.readInt(8)),this.localHeaderOffset===s.MAX_VALUE_32BITS&&(this.localHeaderOffset=d.readInt(8)),this.diskNumberStart===s.MAX_VALUE_32BITS&&(this.diskNumberStart=d.readInt(4))}},readExtraFields:function(d){var m,v,g,p=d.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});d.index+4<p;)m=d.readInt(2),v=d.readInt(2),g=d.readData(v),this.extraFields[m]={id:m,length:v,value:g};d.setIndex(p)},handleUTF8:function(){var d=f.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var m=this.findExtraFieldUnicodePath();if(m!==null)this.fileNameStr=m;else{var v=s.transformTo(d,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(v)}var g=this.findExtraFieldUnicodeComment();if(g!==null)this.fileCommentStr=g;else{var p=s.transformTo(d,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(p)}}},findExtraFieldUnicodePath:function(){var d=this.extraFields[28789];if(d){var m=a(d.value);return m.readInt(1)!==1||l(this.fileName)!==m.readInt(4)?null:c.utf8decode(m.readData(d.length-5))}return null},findExtraFieldUnicodeComment:function(){var d=this.extraFields[25461];if(d){var m=a(d.value);return m.readInt(1)!==1||l(this.fileComment)!==m.readInt(4)?null:c.utf8decode(m.readData(d.length-5))}return null}},i.exports=h},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,i,r){function a(m,v,g){this.name=m,this.dir=g.dir,this.date=g.date,this.comment=g.comment,this.unixPermissions=g.unixPermissions,this.dosPermissions=g.dosPermissions,this._data=v,this._dataBinary=g.binary,this.options={compression:g.compression,compressionOptions:g.compressionOptions}}var s=e("./stream/StreamHelper"),o=e("./stream/DataWorker"),l=e("./utf8"),c=e("./compressedObject"),u=e("./stream/GenericWorker");a.prototype={internalStream:function(m){var v=null,g="string";try{if(!m)throw new Error("No output type specified.");var p=(g=m.toLowerCase())==="string"||g==="text";g!=="binarystring"&&g!=="text"||(g="string"),v=this._decompressWorker();var _=!this._dataBinary;_&&!p&&(v=v.pipe(new l.Utf8EncodeWorker)),!_&&p&&(v=v.pipe(new l.Utf8DecodeWorker))}catch(y){(v=new u("error")).error(y)}return new s(v,g,"")},async:function(m,v){return this.internalStream(m).accumulate(v)},nodeStream:function(m,v){return this.internalStream(m||"nodebuffer").toNodejsStream(v)},_compressWorker:function(m,v){if(this._data instanceof c&&this._data.compression.magic===m.magic)return this._data.getCompressedWorker();var g=this._decompressWorker();return this._dataBinary||(g=g.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(g,m,v)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof u?this._data:new o(this._data)}};for(var f=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],h=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},d=0;d<f.length;d++)a.prototype[f[d]]=h;i.exports=a},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,i,r){(function(a){var s,o,l=a.MutationObserver||a.WebKitMutationObserver;if(l){var c=0,u=new l(m),f=a.document.createTextNode("");u.observe(f,{characterData:!0}),s=function(){f.data=c=++c%2}}else if(a.setImmediate||a.MessageChannel===void 0)s="document"in a&&"onreadystatechange"in a.document.createElement("script")?function(){var v=a.document.createElement("script");v.onreadystatechange=function(){m(),v.onreadystatechange=null,v.parentNode.removeChild(v),v=null},a.document.documentElement.appendChild(v)}:function(){setTimeout(m,0)};else{var h=new a.MessageChannel;h.port1.onmessage=m,s=function(){h.port2.postMessage(0)}}var d=[];function m(){var v,g;o=!0;for(var p=d.length;p;){for(g=d,d=[],v=-1;++v<p;)g[v]();p=d.length}o=!1}i.exports=function(v){d.push(v)!==1||o||s()}}).call(this,typeof Hr<"u"?Hr:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,i,r){var a=e("immediate");function s(){}var o={},l=["REJECTED"],c=["FULFILLED"],u=["PENDING"];function f(p){if(typeof p!="function")throw new TypeError("resolver must be a function");this.state=u,this.queue=[],this.outcome=void 0,p!==s&&v(this,p)}function h(p,_,y){this.promise=p,typeof _=="function"&&(this.onFulfilled=_,this.callFulfilled=this.otherCallFulfilled),typeof y=="function"&&(this.onRejected=y,this.callRejected=this.otherCallRejected)}function d(p,_,y){a(function(){var x;try{x=_(y)}catch(A){return o.reject(p,A)}x===p?o.reject(p,new TypeError("Cannot resolve promise with itself")):o.resolve(p,x)})}function m(p){var _=p&&p.then;if(p&&(typeof p=="object"||typeof p=="function")&&typeof _=="function")return function(){_.apply(p,arguments)}}function v(p,_){var y=!1;function x(P){y||(y=!0,o.reject(p,P))}function A(P){y||(y=!0,o.resolve(p,P))}var L=g(function(){_(A,x)});L.status==="error"&&x(L.value)}function g(p,_){var y={};try{y.value=p(_),y.status="success"}catch(x){y.status="error",y.value=x}return y}(i.exports=f).prototype.finally=function(p){if(typeof p!="function")return this;var _=this.constructor;return this.then(function(y){return _.resolve(p()).then(function(){return y})},function(y){return _.resolve(p()).then(function(){throw y})})},f.prototype.catch=function(p){return this.then(null,p)},f.prototype.then=function(p,_){if(typeof p!="function"&&this.state===c||typeof _!="function"&&this.state===l)return this;var y=new this.constructor(s);return this.state!==u?d(y,this.state===c?p:_,this.outcome):this.queue.push(new h(y,p,_)),y},h.prototype.callFulfilled=function(p){o.resolve(this.promise,p)},h.prototype.otherCallFulfilled=function(p){d(this.promise,this.onFulfilled,p)},h.prototype.callRejected=function(p){o.reject(this.promise,p)},h.prototype.otherCallRejected=function(p){d(this.promise,this.onRejected,p)},o.resolve=function(p,_){var y=g(m,_);if(y.status==="error")return o.reject(p,y.value);var x=y.value;if(x)v(p,x);else{p.state=c,p.outcome=_;for(var A=-1,L=p.queue.length;++A<L;)p.queue[A].callFulfilled(_)}return p},o.reject=function(p,_){p.state=l,p.outcome=_;for(var y=-1,x=p.queue.length;++y<x;)p.queue[y].callRejected(_);return p},f.resolve=function(p){return p instanceof this?p:o.resolve(new this(s),p)},f.reject=function(p){var _=new this(s);return o.reject(_,p)},f.all=function(p){var _=this;if(Object.prototype.toString.call(p)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=p.length,x=!1;if(!y)return this.resolve([]);for(var A=new Array(y),L=0,P=-1,M=new this(s);++P<y;)w(p[P],P);return M;function w(H,F){_.resolve(H).then(function(D){A[F]=D,++L!==y||x||(x=!0,o.resolve(M,A))},function(D){x||(x=!0,o.reject(M,D))})}},f.race=function(p){var _=this;if(Object.prototype.toString.call(p)!=="[object Array]")return this.reject(new TypeError("must be an array"));var y=p.length,x=!1;if(!y)return this.resolve([]);for(var A=-1,L=new this(s);++A<y;)P=p[A],_.resolve(P).then(function(M){x||(x=!0,o.resolve(L,M))},function(M){x||(x=!0,o.reject(L,M))});var P;return L}},{immediate:36}],38:[function(e,i,r){var a={};(0,e("./lib/utils/common").assign)(a,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),i.exports=a},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,i,r){var a=e("./zlib/deflate"),s=e("./utils/common"),o=e("./utils/strings"),l=e("./zlib/messages"),c=e("./zlib/zstream"),u=Object.prototype.toString,f=0,h=-1,d=0,m=8;function v(p){if(!(this instanceof v))return new v(p);this.options=s.assign({level:h,method:m,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:""},p||{});var _=this.options;_.raw&&0<_.windowBits?_.windowBits=-_.windowBits:_.gzip&&0<_.windowBits&&_.windowBits<16&&(_.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var y=a.deflateInit2(this.strm,_.level,_.method,_.windowBits,_.memLevel,_.strategy);if(y!==f)throw new Error(l[y]);if(_.header&&a.deflateSetHeader(this.strm,_.header),_.dictionary){var x;if(x=typeof _.dictionary=="string"?o.string2buf(_.dictionary):u.call(_.dictionary)==="[object ArrayBuffer]"?new Uint8Array(_.dictionary):_.dictionary,(y=a.deflateSetDictionary(this.strm,x))!==f)throw new Error(l[y]);this._dict_set=!0}}function g(p,_){var y=new v(_);if(y.push(p,!0),y.err)throw y.msg||l[y.err];return y.result}v.prototype.push=function(p,_){var y,x,A=this.strm,L=this.options.chunkSize;if(this.ended)return!1;x=_===~~_?_:_===!0?4:0,typeof p=="string"?A.input=o.string2buf(p):u.call(p)==="[object ArrayBuffer]"?A.input=new Uint8Array(p):A.input=p,A.next_in=0,A.avail_in=A.input.length;do{if(A.avail_out===0&&(A.output=new s.Buf8(L),A.next_out=0,A.avail_out=L),(y=a.deflate(A,x))!==1&&y!==f)return this.onEnd(y),!(this.ended=!0);A.avail_out!==0&&(A.avail_in!==0||x!==4&&x!==2)||(this.options.to==="string"?this.onData(o.buf2binstring(s.shrinkBuf(A.output,A.next_out))):this.onData(s.shrinkBuf(A.output,A.next_out)))}while((0<A.avail_in||A.avail_out===0)&&y!==1);return x===4?(y=a.deflateEnd(this.strm),this.onEnd(y),this.ended=!0,y===f):x!==2||(this.onEnd(f),!(A.avail_out=0))},v.prototype.onData=function(p){this.chunks.push(p)},v.prototype.onEnd=function(p){p===f&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=p,this.msg=this.strm.msg},r.Deflate=v,r.deflate=g,r.deflateRaw=function(p,_){return(_=_||{}).raw=!0,g(p,_)},r.gzip=function(p,_){return(_=_||{}).gzip=!0,g(p,_)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,i,r){var a=e("./zlib/inflate"),s=e("./utils/common"),o=e("./utils/strings"),l=e("./zlib/constants"),c=e("./zlib/messages"),u=e("./zlib/zstream"),f=e("./zlib/gzheader"),h=Object.prototype.toString;function d(v){if(!(this instanceof d))return new d(v);this.options=s.assign({chunkSize:16384,windowBits:0,to:""},v||{});var g=this.options;g.raw&&0<=g.windowBits&&g.windowBits<16&&(g.windowBits=-g.windowBits,g.windowBits===0&&(g.windowBits=-15)),!(0<=g.windowBits&&g.windowBits<16)||v&&v.windowBits||(g.windowBits+=32),15<g.windowBits&&g.windowBits<48&&(15&g.windowBits)==0&&(g.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u,this.strm.avail_out=0;var p=a.inflateInit2(this.strm,g.windowBits);if(p!==l.Z_OK)throw new Error(c[p]);this.header=new f,a.inflateGetHeader(this.strm,this.header)}function m(v,g){var p=new d(g);if(p.push(v,!0),p.err)throw p.msg||c[p.err];return p.result}d.prototype.push=function(v,g){var p,_,y,x,A,L,P=this.strm,M=this.options.chunkSize,w=this.options.dictionary,H=!1;if(this.ended)return!1;_=g===~~g?g:g===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof v=="string"?P.input=o.binstring2buf(v):h.call(v)==="[object ArrayBuffer]"?P.input=new Uint8Array(v):P.input=v,P.next_in=0,P.avail_in=P.input.length;do{if(P.avail_out===0&&(P.output=new s.Buf8(M),P.next_out=0,P.avail_out=M),(p=a.inflate(P,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&w&&(L=typeof w=="string"?o.string2buf(w):h.call(w)==="[object ArrayBuffer]"?new Uint8Array(w):w,p=a.inflateSetDictionary(this.strm,L)),p===l.Z_BUF_ERROR&&H===!0&&(p=l.Z_OK,H=!1),p!==l.Z_STREAM_END&&p!==l.Z_OK)return this.onEnd(p),!(this.ended=!0);P.next_out&&(P.avail_out!==0&&p!==l.Z_STREAM_END&&(P.avail_in!==0||_!==l.Z_FINISH&&_!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(y=o.utf8border(P.output,P.next_out),x=P.next_out-y,A=o.buf2string(P.output,y),P.next_out=x,P.avail_out=M-x,x&&s.arraySet(P.output,P.output,y,x,0),this.onData(A)):this.onData(s.shrinkBuf(P.output,P.next_out)))),P.avail_in===0&&P.avail_out===0&&(H=!0)}while((0<P.avail_in||P.avail_out===0)&&p!==l.Z_STREAM_END);return p===l.Z_STREAM_END&&(_=l.Z_FINISH),_===l.Z_FINISH?(p=a.inflateEnd(this.strm),this.onEnd(p),this.ended=!0,p===l.Z_OK):_!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(P.avail_out=0))},d.prototype.onData=function(v){this.chunks.push(v)},d.prototype.onEnd=function(v){v===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=v,this.msg=this.strm.msg},r.Inflate=d,r.inflate=m,r.inflateRaw=function(v,g){return(g=g||{}).raw=!0,m(v,g)},r.ungzip=m},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,i,r){var a=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var u=c.shift();if(u){if(typeof u!="object")throw new TypeError(u+"must be non-object");for(var f in u)u.hasOwnProperty(f)&&(l[f]=u[f])}}return l},r.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var s={arraySet:function(l,c,u,f,h){if(c.subarray&&l.subarray)l.set(c.subarray(u,u+f),h);else for(var d=0;d<f;d++)l[h+d]=c[u+d]},flattenChunks:function(l){var c,u,f,h,d,m;for(c=f=0,u=l.length;c<u;c++)f+=l[c].length;for(m=new Uint8Array(f),c=h=0,u=l.length;c<u;c++)d=l[c],m.set(d,h),h+=d.length;return m}},o={arraySet:function(l,c,u,f,h){for(var d=0;d<f;d++)l[h+d]=c[u+d]},flattenChunks:function(l){return[].concat.apply([],l)}};r.setTyped=function(l){l?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,s)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,o))},r.setTyped(a)},{}],42:[function(e,i,r){var a=e("./common"),s=!0,o=!0;try{String.fromCharCode.apply(null,[0])}catch{s=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{o=!1}for(var l=new a.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function u(f,h){if(h<65537&&(f.subarray&&o||!f.subarray&&s))return String.fromCharCode.apply(null,a.shrinkBuf(f,h));for(var d="",m=0;m<h;m++)d+=String.fromCharCode(f[m]);return d}l[254]=l[254]=1,r.string2buf=function(f){var h,d,m,v,g,p=f.length,_=0;for(v=0;v<p;v++)(64512&(d=f.charCodeAt(v)))==55296&&v+1<p&&(64512&(m=f.charCodeAt(v+1)))==56320&&(d=65536+(d-55296<<10)+(m-56320),v++),_+=d<128?1:d<2048?2:d<65536?3:4;for(h=new a.Buf8(_),v=g=0;g<_;v++)(64512&(d=f.charCodeAt(v)))==55296&&v+1<p&&(64512&(m=f.charCodeAt(v+1)))==56320&&(d=65536+(d-55296<<10)+(m-56320),v++),d<128?h[g++]=d:(d<2048?h[g++]=192|d>>>6:(d<65536?h[g++]=224|d>>>12:(h[g++]=240|d>>>18,h[g++]=128|d>>>12&63),h[g++]=128|d>>>6&63),h[g++]=128|63&d);return h},r.buf2binstring=function(f){return u(f,f.length)},r.binstring2buf=function(f){for(var h=new a.Buf8(f.length),d=0,m=h.length;d<m;d++)h[d]=f.charCodeAt(d);return h},r.buf2string=function(f,h){var d,m,v,g,p=h||f.length,_=new Array(2*p);for(d=m=0;d<p;)if((v=f[d++])<128)_[m++]=v;else if(4<(g=l[v]))_[m++]=65533,d+=g-1;else{for(v&=g===2?31:g===3?15:7;1<g&&d<p;)v=v<<6|63&f[d++],g--;1<g?_[m++]=65533:v<65536?_[m++]=v:(v-=65536,_[m++]=55296|v>>10&1023,_[m++]=56320|1023&v)}return u(_,m)},r.utf8border=function(f,h){var d;for((h=h||f.length)>f.length&&(h=f.length),d=h-1;0<=d&&(192&f[d])==128;)d--;return d<0||d===0?h:d+l[f[d]]>h?d:h}},{"./common":41}],43:[function(e,i,r){i.exports=function(a,s,o,l){for(var c=65535&a|0,u=a>>>16&65535|0,f=0;o!==0;){for(o-=f=2e3<o?2e3:o;u=u+(c=c+s[l++]|0)|0,--f;);c%=65521,u%=65521}return c|u<<16|0}},{}],44:[function(e,i,r){i.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,i,r){var a=(function(){for(var s,o=[],l=0;l<256;l++){s=l;for(var c=0;c<8;c++)s=1&s?3988292384^s>>>1:s>>>1;o[l]=s}return o})();i.exports=function(s,o,l,c){var u=a,f=c+l;s^=-1;for(var h=c;h<f;h++)s=s>>>8^u[255&(s^o[h])];return-1^s}},{}],46:[function(e,i,r){var a,s=e("../utils/common"),o=e("./trees"),l=e("./adler32"),c=e("./crc32"),u=e("./messages"),f=0,h=4,d=0,m=-2,v=-1,g=4,p=2,_=8,y=9,x=286,A=30,L=19,P=2*x+1,M=15,w=3,H=258,F=H+w+1,D=42,B=113,S=1,C=2,N=3,U=4;function Q(b,rt){return b.msg=u[rt],rt}function X(b){return(b<<1)-(4<b?9:0)}function $(b){for(var rt=b.length;0<=--rt;)b[rt]=0}function W(b){var rt=b.state,K=rt.pending;K>b.avail_out&&(K=b.avail_out),K!==0&&(s.arraySet(b.output,rt.pending_buf,rt.pending_out,K,b.next_out),b.next_out+=K,rt.pending_out+=K,b.total_out+=K,b.avail_out-=K,rt.pending-=K,rt.pending===0&&(rt.pending_out=0))}function V(b,rt){o._tr_flush_block(b,0<=b.block_start?b.block_start:-1,b.strstart-b.block_start,rt),b.block_start=b.strstart,W(b.strm)}function pt(b,rt){b.pending_buf[b.pending++]=rt}function mt(b,rt){b.pending_buf[b.pending++]=rt>>>8&255,b.pending_buf[b.pending++]=255&rt}function ut(b,rt){var K,O,E=b.max_chain_length,q=b.strstart,st=b.prev_length,ct=b.nice_match,G=b.strstart>b.w_size-F?b.strstart-(b.w_size-F):0,R=b.window,T=b.w_mask,k=b.prev,J=b.strstart+H,lt=R[q+st-1],tt=R[q+st];b.prev_length>=b.good_match&&(E>>=2),ct>b.lookahead&&(ct=b.lookahead);do if(R[(K=rt)+st]===tt&&R[K+st-1]===lt&&R[K]===R[q]&&R[++K]===R[q+1]){q+=2,K++;do;while(R[++q]===R[++K]&&R[++q]===R[++K]&&R[++q]===R[++K]&&R[++q]===R[++K]&&R[++q]===R[++K]&&R[++q]===R[++K]&&R[++q]===R[++K]&&R[++q]===R[++K]&&q<J);if(O=H-(J-q),q=J-H,st<O){if(b.match_start=rt,ct<=(st=O))break;lt=R[q+st-1],tt=R[q+st]}}while((rt=k[rt&T])>G&&--E!=0);return st<=b.lookahead?st:b.lookahead}function it(b){var rt,K,O,E,q,st,ct,G,R,T,k=b.w_size;do{if(E=b.window_size-b.lookahead-b.strstart,b.strstart>=k+(k-F)){for(s.arraySet(b.window,b.window,k,k,0),b.match_start-=k,b.strstart-=k,b.block_start-=k,rt=K=b.hash_size;O=b.head[--rt],b.head[rt]=k<=O?O-k:0,--K;);for(rt=K=k;O=b.prev[--rt],b.prev[rt]=k<=O?O-k:0,--K;);E+=k}if(b.strm.avail_in===0)break;if(st=b.strm,ct=b.window,G=b.strstart+b.lookahead,R=E,T=void 0,T=st.avail_in,R<T&&(T=R),K=T===0?0:(st.avail_in-=T,s.arraySet(ct,st.input,st.next_in,T,G),st.state.wrap===1?st.adler=l(st.adler,ct,T,G):st.state.wrap===2&&(st.adler=c(st.adler,ct,T,G)),st.next_in+=T,st.total_in+=T,T),b.lookahead+=K,b.lookahead+b.insert>=w)for(q=b.strstart-b.insert,b.ins_h=b.window[q],b.ins_h=(b.ins_h<<b.hash_shift^b.window[q+1])&b.hash_mask;b.insert&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[q+w-1])&b.hash_mask,b.prev[q&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=q,q++,b.insert--,!(b.lookahead+b.insert<w)););}while(b.lookahead<F&&b.strm.avail_in!==0)}function ht(b,rt){for(var K,O;;){if(b.lookahead<F){if(it(b),b.lookahead<F&&rt===f)return S;if(b.lookahead===0)break}if(K=0,b.lookahead>=w&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+w-1])&b.hash_mask,K=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),K!==0&&b.strstart-K<=b.w_size-F&&(b.match_length=ut(b,K)),b.match_length>=w)if(O=o._tr_tally(b,b.strstart-b.match_start,b.match_length-w),b.lookahead-=b.match_length,b.match_length<=b.max_lazy_match&&b.lookahead>=w){for(b.match_length--;b.strstart++,b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+w-1])&b.hash_mask,K=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart,--b.match_length!=0;);b.strstart++}else b.strstart+=b.match_length,b.match_length=0,b.ins_h=b.window[b.strstart],b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+1])&b.hash_mask;else O=o._tr_tally(b,0,b.window[b.strstart]),b.lookahead--,b.strstart++;if(O&&(V(b,!1),b.strm.avail_out===0))return S}return b.insert=b.strstart<w-1?b.strstart:w-1,rt===h?(V(b,!0),b.strm.avail_out===0?N:U):b.last_lit&&(V(b,!1),b.strm.avail_out===0)?S:C}function at(b,rt){for(var K,O,E;;){if(b.lookahead<F){if(it(b),b.lookahead<F&&rt===f)return S;if(b.lookahead===0)break}if(K=0,b.lookahead>=w&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+w-1])&b.hash_mask,K=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),b.prev_length=b.match_length,b.prev_match=b.match_start,b.match_length=w-1,K!==0&&b.prev_length<b.max_lazy_match&&b.strstart-K<=b.w_size-F&&(b.match_length=ut(b,K),b.match_length<=5&&(b.strategy===1||b.match_length===w&&4096<b.strstart-b.match_start)&&(b.match_length=w-1)),b.prev_length>=w&&b.match_length<=b.prev_length){for(E=b.strstart+b.lookahead-w,O=o._tr_tally(b,b.strstart-1-b.prev_match,b.prev_length-w),b.lookahead-=b.prev_length-1,b.prev_length-=2;++b.strstart<=E&&(b.ins_h=(b.ins_h<<b.hash_shift^b.window[b.strstart+w-1])&b.hash_mask,K=b.prev[b.strstart&b.w_mask]=b.head[b.ins_h],b.head[b.ins_h]=b.strstart),--b.prev_length!=0;);if(b.match_available=0,b.match_length=w-1,b.strstart++,O&&(V(b,!1),b.strm.avail_out===0))return S}else if(b.match_available){if((O=o._tr_tally(b,0,b.window[b.strstart-1]))&&V(b,!1),b.strstart++,b.lookahead--,b.strm.avail_out===0)return S}else b.match_available=1,b.strstart++,b.lookahead--}return b.match_available&&(O=o._tr_tally(b,0,b.window[b.strstart-1]),b.match_available=0),b.insert=b.strstart<w-1?b.strstart:w-1,rt===h?(V(b,!0),b.strm.avail_out===0?N:U):b.last_lit&&(V(b,!1),b.strm.avail_out===0)?S:C}function yt(b,rt,K,O,E){this.good_length=b,this.max_lazy=rt,this.nice_length=K,this.max_chain=O,this.func=E}function Et(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=_,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new s.Buf16(2*P),this.dyn_dtree=new s.Buf16(2*(2*A+1)),this.bl_tree=new s.Buf16(2*(2*L+1)),$(this.dyn_ltree),$(this.dyn_dtree),$(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new s.Buf16(M+1),this.heap=new s.Buf16(2*x+1),$(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new s.Buf16(2*x+1),$(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function St(b){var rt;return b&&b.state?(b.total_in=b.total_out=0,b.data_type=p,(rt=b.state).pending=0,rt.pending_out=0,rt.wrap<0&&(rt.wrap=-rt.wrap),rt.status=rt.wrap?D:B,b.adler=rt.wrap===2?0:1,rt.last_flush=f,o._tr_init(rt),d):Q(b,m)}function Wt(b){var rt=St(b);return rt===d&&(function(K){K.window_size=2*K.w_size,$(K.head),K.max_lazy_match=a[K.level].max_lazy,K.good_match=a[K.level].good_length,K.nice_match=a[K.level].nice_length,K.max_chain_length=a[K.level].max_chain,K.strstart=0,K.block_start=0,K.lookahead=0,K.insert=0,K.match_length=K.prev_length=w-1,K.match_available=0,K.ins_h=0})(b.state),rt}function Vt(b,rt,K,O,E,q){if(!b)return m;var st=1;if(rt===v&&(rt=6),O<0?(st=0,O=-O):15<O&&(st=2,O-=16),E<1||y<E||K!==_||O<8||15<O||rt<0||9<rt||q<0||g<q)return Q(b,m);O===8&&(O=9);var ct=new Et;return(b.state=ct).strm=b,ct.wrap=st,ct.gzhead=null,ct.w_bits=O,ct.w_size=1<<ct.w_bits,ct.w_mask=ct.w_size-1,ct.hash_bits=E+7,ct.hash_size=1<<ct.hash_bits,ct.hash_mask=ct.hash_size-1,ct.hash_shift=~~((ct.hash_bits+w-1)/w),ct.window=new s.Buf8(2*ct.w_size),ct.head=new s.Buf16(ct.hash_size),ct.prev=new s.Buf16(ct.w_size),ct.lit_bufsize=1<<E+6,ct.pending_buf_size=4*ct.lit_bufsize,ct.pending_buf=new s.Buf8(ct.pending_buf_size),ct.d_buf=1*ct.lit_bufsize,ct.l_buf=3*ct.lit_bufsize,ct.level=rt,ct.strategy=q,ct.method=K,Wt(b)}a=[new yt(0,0,0,0,function(b,rt){var K=65535;for(K>b.pending_buf_size-5&&(K=b.pending_buf_size-5);;){if(b.lookahead<=1){if(it(b),b.lookahead===0&&rt===f)return S;if(b.lookahead===0)break}b.strstart+=b.lookahead,b.lookahead=0;var O=b.block_start+K;if((b.strstart===0||b.strstart>=O)&&(b.lookahead=b.strstart-O,b.strstart=O,V(b,!1),b.strm.avail_out===0)||b.strstart-b.block_start>=b.w_size-F&&(V(b,!1),b.strm.avail_out===0))return S}return b.insert=0,rt===h?(V(b,!0),b.strm.avail_out===0?N:U):(b.strstart>b.block_start&&(V(b,!1),b.strm.avail_out),S)}),new yt(4,4,8,4,ht),new yt(4,5,16,8,ht),new yt(4,6,32,32,ht),new yt(4,4,16,16,at),new yt(8,16,32,32,at),new yt(8,16,128,128,at),new yt(8,32,128,256,at),new yt(32,128,258,1024,at),new yt(32,258,258,4096,at)],r.deflateInit=function(b,rt){return Vt(b,rt,_,15,8,0)},r.deflateInit2=Vt,r.deflateReset=Wt,r.deflateResetKeep=St,r.deflateSetHeader=function(b,rt){return b&&b.state?b.state.wrap!==2?m:(b.state.gzhead=rt,d):m},r.deflate=function(b,rt){var K,O,E,q;if(!b||!b.state||5<rt||rt<0)return b?Q(b,m):m;if(O=b.state,!b.output||!b.input&&b.avail_in!==0||O.status===666&&rt!==h)return Q(b,b.avail_out===0?-5:m);if(O.strm=b,K=O.last_flush,O.last_flush=rt,O.status===D)if(O.wrap===2)b.adler=0,pt(O,31),pt(O,139),pt(O,8),O.gzhead?(pt(O,(O.gzhead.text?1:0)+(O.gzhead.hcrc?2:0)+(O.gzhead.extra?4:0)+(O.gzhead.name?8:0)+(O.gzhead.comment?16:0)),pt(O,255&O.gzhead.time),pt(O,O.gzhead.time>>8&255),pt(O,O.gzhead.time>>16&255),pt(O,O.gzhead.time>>24&255),pt(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),pt(O,255&O.gzhead.os),O.gzhead.extra&&O.gzhead.extra.length&&(pt(O,255&O.gzhead.extra.length),pt(O,O.gzhead.extra.length>>8&255)),O.gzhead.hcrc&&(b.adler=c(b.adler,O.pending_buf,O.pending,0)),O.gzindex=0,O.status=69):(pt(O,0),pt(O,0),pt(O,0),pt(O,0),pt(O,0),pt(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),pt(O,3),O.status=B);else{var st=_+(O.w_bits-8<<4)<<8;st|=(2<=O.strategy||O.level<2?0:O.level<6?1:O.level===6?2:3)<<6,O.strstart!==0&&(st|=32),st+=31-st%31,O.status=B,mt(O,st),O.strstart!==0&&(mt(O,b.adler>>>16),mt(O,65535&b.adler)),b.adler=1}if(O.status===69)if(O.gzhead.extra){for(E=O.pending;O.gzindex<(65535&O.gzhead.extra.length)&&(O.pending!==O.pending_buf_size||(O.gzhead.hcrc&&O.pending>E&&(b.adler=c(b.adler,O.pending_buf,O.pending-E,E)),W(b),E=O.pending,O.pending!==O.pending_buf_size));)pt(O,255&O.gzhead.extra[O.gzindex]),O.gzindex++;O.gzhead.hcrc&&O.pending>E&&(b.adler=c(b.adler,O.pending_buf,O.pending-E,E)),O.gzindex===O.gzhead.extra.length&&(O.gzindex=0,O.status=73)}else O.status=73;if(O.status===73)if(O.gzhead.name){E=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>E&&(b.adler=c(b.adler,O.pending_buf,O.pending-E,E)),W(b),E=O.pending,O.pending===O.pending_buf_size)){q=1;break}q=O.gzindex<O.gzhead.name.length?255&O.gzhead.name.charCodeAt(O.gzindex++):0,pt(O,q)}while(q!==0);O.gzhead.hcrc&&O.pending>E&&(b.adler=c(b.adler,O.pending_buf,O.pending-E,E)),q===0&&(O.gzindex=0,O.status=91)}else O.status=91;if(O.status===91)if(O.gzhead.comment){E=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>E&&(b.adler=c(b.adler,O.pending_buf,O.pending-E,E)),W(b),E=O.pending,O.pending===O.pending_buf_size)){q=1;break}q=O.gzindex<O.gzhead.comment.length?255&O.gzhead.comment.charCodeAt(O.gzindex++):0,pt(O,q)}while(q!==0);O.gzhead.hcrc&&O.pending>E&&(b.adler=c(b.adler,O.pending_buf,O.pending-E,E)),q===0&&(O.status=103)}else O.status=103;if(O.status===103&&(O.gzhead.hcrc?(O.pending+2>O.pending_buf_size&&W(b),O.pending+2<=O.pending_buf_size&&(pt(O,255&b.adler),pt(O,b.adler>>8&255),b.adler=0,O.status=B)):O.status=B),O.pending!==0){if(W(b),b.avail_out===0)return O.last_flush=-1,d}else if(b.avail_in===0&&X(rt)<=X(K)&&rt!==h)return Q(b,-5);if(O.status===666&&b.avail_in!==0)return Q(b,-5);if(b.avail_in!==0||O.lookahead!==0||rt!==f&&O.status!==666){var ct=O.strategy===2?(function(G,R){for(var T;;){if(G.lookahead===0&&(it(G),G.lookahead===0)){if(R===f)return S;break}if(G.match_length=0,T=o._tr_tally(G,0,G.window[G.strstart]),G.lookahead--,G.strstart++,T&&(V(G,!1),G.strm.avail_out===0))return S}return G.insert=0,R===h?(V(G,!0),G.strm.avail_out===0?N:U):G.last_lit&&(V(G,!1),G.strm.avail_out===0)?S:C})(O,rt):O.strategy===3?(function(G,R){for(var T,k,J,lt,tt=G.window;;){if(G.lookahead<=H){if(it(G),G.lookahead<=H&&R===f)return S;if(G.lookahead===0)break}if(G.match_length=0,G.lookahead>=w&&0<G.strstart&&(k=tt[J=G.strstart-1])===tt[++J]&&k===tt[++J]&&k===tt[++J]){lt=G.strstart+H;do;while(k===tt[++J]&&k===tt[++J]&&k===tt[++J]&&k===tt[++J]&&k===tt[++J]&&k===tt[++J]&&k===tt[++J]&&k===tt[++J]&&J<lt);G.match_length=H-(lt-J),G.match_length>G.lookahead&&(G.match_length=G.lookahead)}if(G.match_length>=w?(T=o._tr_tally(G,1,G.match_length-w),G.lookahead-=G.match_length,G.strstart+=G.match_length,G.match_length=0):(T=o._tr_tally(G,0,G.window[G.strstart]),G.lookahead--,G.strstart++),T&&(V(G,!1),G.strm.avail_out===0))return S}return G.insert=0,R===h?(V(G,!0),G.strm.avail_out===0?N:U):G.last_lit&&(V(G,!1),G.strm.avail_out===0)?S:C})(O,rt):a[O.level].func(O,rt);if(ct!==N&&ct!==U||(O.status=666),ct===S||ct===N)return b.avail_out===0&&(O.last_flush=-1),d;if(ct===C&&(rt===1?o._tr_align(O):rt!==5&&(o._tr_stored_block(O,0,0,!1),rt===3&&($(O.head),O.lookahead===0&&(O.strstart=0,O.block_start=0,O.insert=0))),W(b),b.avail_out===0))return O.last_flush=-1,d}return rt!==h?d:O.wrap<=0?1:(O.wrap===2?(pt(O,255&b.adler),pt(O,b.adler>>8&255),pt(O,b.adler>>16&255),pt(O,b.adler>>24&255),pt(O,255&b.total_in),pt(O,b.total_in>>8&255),pt(O,b.total_in>>16&255),pt(O,b.total_in>>24&255)):(mt(O,b.adler>>>16),mt(O,65535&b.adler)),W(b),0<O.wrap&&(O.wrap=-O.wrap),O.pending!==0?d:1)},r.deflateEnd=function(b){var rt;return b&&b.state?(rt=b.state.status)!==D&&rt!==69&&rt!==73&&rt!==91&&rt!==103&&rt!==B&&rt!==666?Q(b,m):(b.state=null,rt===B?Q(b,-3):d):m},r.deflateSetDictionary=function(b,rt){var K,O,E,q,st,ct,G,R,T=rt.length;if(!b||!b.state||(q=(K=b.state).wrap)===2||q===1&&K.status!==D||K.lookahead)return m;for(q===1&&(b.adler=l(b.adler,rt,T,0)),K.wrap=0,T>=K.w_size&&(q===0&&($(K.head),K.strstart=0,K.block_start=0,K.insert=0),R=new s.Buf8(K.w_size),s.arraySet(R,rt,T-K.w_size,K.w_size,0),rt=R,T=K.w_size),st=b.avail_in,ct=b.next_in,G=b.input,b.avail_in=T,b.next_in=0,b.input=rt,it(K);K.lookahead>=w;){for(O=K.strstart,E=K.lookahead-(w-1);K.ins_h=(K.ins_h<<K.hash_shift^K.window[O+w-1])&K.hash_mask,K.prev[O&K.w_mask]=K.head[K.ins_h],K.head[K.ins_h]=O,O++,--E;);K.strstart=O,K.lookahead=w-1,it(K)}return K.strstart+=K.lookahead,K.block_start=K.strstart,K.insert=K.lookahead,K.lookahead=0,K.match_length=K.prev_length=w-1,K.match_available=0,b.next_in=ct,b.input=G,b.avail_in=st,K.wrap=q,d},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,i,r){i.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,i,r){i.exports=function(a,s){var o,l,c,u,f,h,d,m,v,g,p,_,y,x,A,L,P,M,w,H,F,D,B,S,C;o=a.state,l=a.next_in,S=a.input,c=l+(a.avail_in-5),u=a.next_out,C=a.output,f=u-(s-a.avail_out),h=u+(a.avail_out-257),d=o.dmax,m=o.wsize,v=o.whave,g=o.wnext,p=o.window,_=o.hold,y=o.bits,x=o.lencode,A=o.distcode,L=(1<<o.lenbits)-1,P=(1<<o.distbits)-1;t:do{y<15&&(_+=S[l++]<<y,y+=8,_+=S[l++]<<y,y+=8),M=x[_&L];e:for(;;){if(_>>>=w=M>>>24,y-=w,(w=M>>>16&255)===0)C[u++]=65535&M;else{if(!(16&w)){if((64&w)==0){M=x[(65535&M)+(_&(1<<w)-1)];continue e}if(32&w){o.mode=12;break t}a.msg="invalid literal/length code",o.mode=30;break t}H=65535&M,(w&=15)&&(y<w&&(_+=S[l++]<<y,y+=8),H+=_&(1<<w)-1,_>>>=w,y-=w),y<15&&(_+=S[l++]<<y,y+=8,_+=S[l++]<<y,y+=8),M=A[_&P];n:for(;;){if(_>>>=w=M>>>24,y-=w,!(16&(w=M>>>16&255))){if((64&w)==0){M=A[(65535&M)+(_&(1<<w)-1)];continue n}a.msg="invalid distance code",o.mode=30;break t}if(F=65535&M,y<(w&=15)&&(_+=S[l++]<<y,(y+=8)<w&&(_+=S[l++]<<y,y+=8)),d<(F+=_&(1<<w)-1)){a.msg="invalid distance too far back",o.mode=30;break t}if(_>>>=w,y-=w,(w=u-f)<F){if(v<(w=F-w)&&o.sane){a.msg="invalid distance too far back",o.mode=30;break t}if(B=p,(D=0)===g){if(D+=m-w,w<H){for(H-=w;C[u++]=p[D++],--w;);D=u-F,B=C}}else if(g<w){if(D+=m+g-w,(w-=g)<H){for(H-=w;C[u++]=p[D++],--w;);if(D=0,g<H){for(H-=w=g;C[u++]=p[D++],--w;);D=u-F,B=C}}}else if(D+=g-w,w<H){for(H-=w;C[u++]=p[D++],--w;);D=u-F,B=C}for(;2<H;)C[u++]=B[D++],C[u++]=B[D++],C[u++]=B[D++],H-=3;H&&(C[u++]=B[D++],1<H&&(C[u++]=B[D++]))}else{for(D=u-F;C[u++]=C[D++],C[u++]=C[D++],C[u++]=C[D++],2<(H-=3););H&&(C[u++]=C[D++],1<H&&(C[u++]=C[D++]))}break}}break}}while(l<c&&u<h);l-=H=y>>3,_&=(1<<(y-=H<<3))-1,a.next_in=l,a.next_out=u,a.avail_in=l<c?c-l+5:5-(l-c),a.avail_out=u<h?h-u+257:257-(u-h),o.hold=_,o.bits=y}},{}],49:[function(e,i,r){var a=e("../utils/common"),s=e("./adler32"),o=e("./crc32"),l=e("./inffast"),c=e("./inftrees"),u=1,f=2,h=0,d=-2,m=1,v=852,g=592;function p(D){return(D>>>24&255)+(D>>>8&65280)+((65280&D)<<8)+((255&D)<<24)}function _(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new a.Buf16(320),this.work=new a.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function y(D){var B;return D&&D.state?(B=D.state,D.total_in=D.total_out=B.total=0,D.msg="",B.wrap&&(D.adler=1&B.wrap),B.mode=m,B.last=0,B.havedict=0,B.dmax=32768,B.head=null,B.hold=0,B.bits=0,B.lencode=B.lendyn=new a.Buf32(v),B.distcode=B.distdyn=new a.Buf32(g),B.sane=1,B.back=-1,h):d}function x(D){var B;return D&&D.state?((B=D.state).wsize=0,B.whave=0,B.wnext=0,y(D)):d}function A(D,B){var S,C;return D&&D.state?(C=D.state,B<0?(S=0,B=-B):(S=1+(B>>4),B<48&&(B&=15)),B&&(B<8||15<B)?d:(C.window!==null&&C.wbits!==B&&(C.window=null),C.wrap=S,C.wbits=B,x(D))):d}function L(D,B){var S,C;return D?(C=new _,(D.state=C).window=null,(S=A(D,B))!==h&&(D.state=null),S):d}var P,M,w=!0;function H(D){if(w){var B;for(P=new a.Buf32(512),M=new a.Buf32(32),B=0;B<144;)D.lens[B++]=8;for(;B<256;)D.lens[B++]=9;for(;B<280;)D.lens[B++]=7;for(;B<288;)D.lens[B++]=8;for(c(u,D.lens,0,288,P,0,D.work,{bits:9}),B=0;B<32;)D.lens[B++]=5;c(f,D.lens,0,32,M,0,D.work,{bits:5}),w=!1}D.lencode=P,D.lenbits=9,D.distcode=M,D.distbits=5}function F(D,B,S,C){var N,U=D.state;return U.window===null&&(U.wsize=1<<U.wbits,U.wnext=0,U.whave=0,U.window=new a.Buf8(U.wsize)),C>=U.wsize?(a.arraySet(U.window,B,S-U.wsize,U.wsize,0),U.wnext=0,U.whave=U.wsize):(C<(N=U.wsize-U.wnext)&&(N=C),a.arraySet(U.window,B,S-C,N,U.wnext),(C-=N)?(a.arraySet(U.window,B,S-C,C,0),U.wnext=C,U.whave=U.wsize):(U.wnext+=N,U.wnext===U.wsize&&(U.wnext=0),U.whave<U.wsize&&(U.whave+=N))),0}r.inflateReset=x,r.inflateReset2=A,r.inflateResetKeep=y,r.inflateInit=function(D){return L(D,15)},r.inflateInit2=L,r.inflate=function(D,B){var S,C,N,U,Q,X,$,W,V,pt,mt,ut,it,ht,at,yt,Et,St,Wt,Vt,b,rt,K,O,E=0,q=new a.Buf8(4),st=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!D||!D.state||!D.output||!D.input&&D.avail_in!==0)return d;(S=D.state).mode===12&&(S.mode=13),Q=D.next_out,N=D.output,$=D.avail_out,U=D.next_in,C=D.input,X=D.avail_in,W=S.hold,V=S.bits,pt=X,mt=$,rt=h;t:for(;;)switch(S.mode){case m:if(S.wrap===0){S.mode=13;break}for(;V<16;){if(X===0)break t;X--,W+=C[U++]<<V,V+=8}if(2&S.wrap&&W===35615){q[S.check=0]=255&W,q[1]=W>>>8&255,S.check=o(S.check,q,2,0),V=W=0,S.mode=2;break}if(S.flags=0,S.head&&(S.head.done=!1),!(1&S.wrap)||(((255&W)<<8)+(W>>8))%31){D.msg="incorrect header check",S.mode=30;break}if((15&W)!=8){D.msg="unknown compression method",S.mode=30;break}if(V-=4,b=8+(15&(W>>>=4)),S.wbits===0)S.wbits=b;else if(b>S.wbits){D.msg="invalid window size",S.mode=30;break}S.dmax=1<<b,D.adler=S.check=1,S.mode=512&W?10:12,V=W=0;break;case 2:for(;V<16;){if(X===0)break t;X--,W+=C[U++]<<V,V+=8}if(S.flags=W,(255&S.flags)!=8){D.msg="unknown compression method",S.mode=30;break}if(57344&S.flags){D.msg="unknown header flags set",S.mode=30;break}S.head&&(S.head.text=W>>8&1),512&S.flags&&(q[0]=255&W,q[1]=W>>>8&255,S.check=o(S.check,q,2,0)),V=W=0,S.mode=3;case 3:for(;V<32;){if(X===0)break t;X--,W+=C[U++]<<V,V+=8}S.head&&(S.head.time=W),512&S.flags&&(q[0]=255&W,q[1]=W>>>8&255,q[2]=W>>>16&255,q[3]=W>>>24&255,S.check=o(S.check,q,4,0)),V=W=0,S.mode=4;case 4:for(;V<16;){if(X===0)break t;X--,W+=C[U++]<<V,V+=8}S.head&&(S.head.xflags=255&W,S.head.os=W>>8),512&S.flags&&(q[0]=255&W,q[1]=W>>>8&255,S.check=o(S.check,q,2,0)),V=W=0,S.mode=5;case 5:if(1024&S.flags){for(;V<16;){if(X===0)break t;X--,W+=C[U++]<<V,V+=8}S.length=W,S.head&&(S.head.extra_len=W),512&S.flags&&(q[0]=255&W,q[1]=W>>>8&255,S.check=o(S.check,q,2,0)),V=W=0}else S.head&&(S.head.extra=null);S.mode=6;case 6:if(1024&S.flags&&(X<(ut=S.length)&&(ut=X),ut&&(S.head&&(b=S.head.extra_len-S.length,S.head.extra||(S.head.extra=new Array(S.head.extra_len)),a.arraySet(S.head.extra,C,U,ut,b)),512&S.flags&&(S.check=o(S.check,C,ut,U)),X-=ut,U+=ut,S.length-=ut),S.length))break t;S.length=0,S.mode=7;case 7:if(2048&S.flags){if(X===0)break t;for(ut=0;b=C[U+ut++],S.head&&b&&S.length<65536&&(S.head.name+=String.fromCharCode(b)),b&&ut<X;);if(512&S.flags&&(S.check=o(S.check,C,ut,U)),X-=ut,U+=ut,b)break t}else S.head&&(S.head.name=null);S.length=0,S.mode=8;case 8:if(4096&S.flags){if(X===0)break t;for(ut=0;b=C[U+ut++],S.head&&b&&S.length<65536&&(S.head.comment+=String.fromCharCode(b)),b&&ut<X;);if(512&S.flags&&(S.check=o(S.check,C,ut,U)),X-=ut,U+=ut,b)break t}else S.head&&(S.head.comment=null);S.mode=9;case 9:if(512&S.flags){for(;V<16;){if(X===0)break t;X--,W+=C[U++]<<V,V+=8}if(W!==(65535&S.check)){D.msg="header crc mismatch",S.mode=30;break}V=W=0}S.head&&(S.head.hcrc=S.flags>>9&1,S.head.done=!0),D.adler=S.check=0,S.mode=12;break;case 10:for(;V<32;){if(X===0)break t;X--,W+=C[U++]<<V,V+=8}D.adler=S.check=p(W),V=W=0,S.mode=11;case 11:if(S.havedict===0)return D.next_out=Q,D.avail_out=$,D.next_in=U,D.avail_in=X,S.hold=W,S.bits=V,2;D.adler=S.check=1,S.mode=12;case 12:if(B===5||B===6)break t;case 13:if(S.last){W>>>=7&V,V-=7&V,S.mode=27;break}for(;V<3;){if(X===0)break t;X--,W+=C[U++]<<V,V+=8}switch(S.last=1&W,V-=1,3&(W>>>=1)){case 0:S.mode=14;break;case 1:if(H(S),S.mode=20,B!==6)break;W>>>=2,V-=2;break t;case 2:S.mode=17;break;case 3:D.msg="invalid block type",S.mode=30}W>>>=2,V-=2;break;case 14:for(W>>>=7&V,V-=7&V;V<32;){if(X===0)break t;X--,W+=C[U++]<<V,V+=8}if((65535&W)!=(W>>>16^65535)){D.msg="invalid stored block lengths",S.mode=30;break}if(S.length=65535&W,V=W=0,S.mode=15,B===6)break t;case 15:S.mode=16;case 16:if(ut=S.length){if(X<ut&&(ut=X),$<ut&&(ut=$),ut===0)break t;a.arraySet(N,C,U,ut,Q),X-=ut,U+=ut,$-=ut,Q+=ut,S.length-=ut;break}S.mode=12;break;case 17:for(;V<14;){if(X===0)break t;X--,W+=C[U++]<<V,V+=8}if(S.nlen=257+(31&W),W>>>=5,V-=5,S.ndist=1+(31&W),W>>>=5,V-=5,S.ncode=4+(15&W),W>>>=4,V-=4,286<S.nlen||30<S.ndist){D.msg="too many length or distance symbols",S.mode=30;break}S.have=0,S.mode=18;case 18:for(;S.have<S.ncode;){for(;V<3;){if(X===0)break t;X--,W+=C[U++]<<V,V+=8}S.lens[st[S.have++]]=7&W,W>>>=3,V-=3}for(;S.have<19;)S.lens[st[S.have++]]=0;if(S.lencode=S.lendyn,S.lenbits=7,K={bits:S.lenbits},rt=c(0,S.lens,0,19,S.lencode,0,S.work,K),S.lenbits=K.bits,rt){D.msg="invalid code lengths set",S.mode=30;break}S.have=0,S.mode=19;case 19:for(;S.have<S.nlen+S.ndist;){for(;yt=(E=S.lencode[W&(1<<S.lenbits)-1])>>>16&255,Et=65535&E,!((at=E>>>24)<=V);){if(X===0)break t;X--,W+=C[U++]<<V,V+=8}if(Et<16)W>>>=at,V-=at,S.lens[S.have++]=Et;else{if(Et===16){for(O=at+2;V<O;){if(X===0)break t;X--,W+=C[U++]<<V,V+=8}if(W>>>=at,V-=at,S.have===0){D.msg="invalid bit length repeat",S.mode=30;break}b=S.lens[S.have-1],ut=3+(3&W),W>>>=2,V-=2}else if(Et===17){for(O=at+3;V<O;){if(X===0)break t;X--,W+=C[U++]<<V,V+=8}V-=at,b=0,ut=3+(7&(W>>>=at)),W>>>=3,V-=3}else{for(O=at+7;V<O;){if(X===0)break t;X--,W+=C[U++]<<V,V+=8}V-=at,b=0,ut=11+(127&(W>>>=at)),W>>>=7,V-=7}if(S.have+ut>S.nlen+S.ndist){D.msg="invalid bit length repeat",S.mode=30;break}for(;ut--;)S.lens[S.have++]=b}}if(S.mode===30)break;if(S.lens[256]===0){D.msg="invalid code -- missing end-of-block",S.mode=30;break}if(S.lenbits=9,K={bits:S.lenbits},rt=c(u,S.lens,0,S.nlen,S.lencode,0,S.work,K),S.lenbits=K.bits,rt){D.msg="invalid literal/lengths set",S.mode=30;break}if(S.distbits=6,S.distcode=S.distdyn,K={bits:S.distbits},rt=c(f,S.lens,S.nlen,S.ndist,S.distcode,0,S.work,K),S.distbits=K.bits,rt){D.msg="invalid distances set",S.mode=30;break}if(S.mode=20,B===6)break t;case 20:S.mode=21;case 21:if(6<=X&&258<=$){D.next_out=Q,D.avail_out=$,D.next_in=U,D.avail_in=X,S.hold=W,S.bits=V,l(D,mt),Q=D.next_out,N=D.output,$=D.avail_out,U=D.next_in,C=D.input,X=D.avail_in,W=S.hold,V=S.bits,S.mode===12&&(S.back=-1);break}for(S.back=0;yt=(E=S.lencode[W&(1<<S.lenbits)-1])>>>16&255,Et=65535&E,!((at=E>>>24)<=V);){if(X===0)break t;X--,W+=C[U++]<<V,V+=8}if(yt&&(240&yt)==0){for(St=at,Wt=yt,Vt=Et;yt=(E=S.lencode[Vt+((W&(1<<St+Wt)-1)>>St)])>>>16&255,Et=65535&E,!(St+(at=E>>>24)<=V);){if(X===0)break t;X--,W+=C[U++]<<V,V+=8}W>>>=St,V-=St,S.back+=St}if(W>>>=at,V-=at,S.back+=at,S.length=Et,yt===0){S.mode=26;break}if(32&yt){S.back=-1,S.mode=12;break}if(64&yt){D.msg="invalid literal/length code",S.mode=30;break}S.extra=15&yt,S.mode=22;case 22:if(S.extra){for(O=S.extra;V<O;){if(X===0)break t;X--,W+=C[U++]<<V,V+=8}S.length+=W&(1<<S.extra)-1,W>>>=S.extra,V-=S.extra,S.back+=S.extra}S.was=S.length,S.mode=23;case 23:for(;yt=(E=S.distcode[W&(1<<S.distbits)-1])>>>16&255,Et=65535&E,!((at=E>>>24)<=V);){if(X===0)break t;X--,W+=C[U++]<<V,V+=8}if((240&yt)==0){for(St=at,Wt=yt,Vt=Et;yt=(E=S.distcode[Vt+((W&(1<<St+Wt)-1)>>St)])>>>16&255,Et=65535&E,!(St+(at=E>>>24)<=V);){if(X===0)break t;X--,W+=C[U++]<<V,V+=8}W>>>=St,V-=St,S.back+=St}if(W>>>=at,V-=at,S.back+=at,64&yt){D.msg="invalid distance code",S.mode=30;break}S.offset=Et,S.extra=15&yt,S.mode=24;case 24:if(S.extra){for(O=S.extra;V<O;){if(X===0)break t;X--,W+=C[U++]<<V,V+=8}S.offset+=W&(1<<S.extra)-1,W>>>=S.extra,V-=S.extra,S.back+=S.extra}if(S.offset>S.dmax){D.msg="invalid distance too far back",S.mode=30;break}S.mode=25;case 25:if($===0)break t;if(ut=mt-$,S.offset>ut){if((ut=S.offset-ut)>S.whave&&S.sane){D.msg="invalid distance too far back",S.mode=30;break}it=ut>S.wnext?(ut-=S.wnext,S.wsize-ut):S.wnext-ut,ut>S.length&&(ut=S.length),ht=S.window}else ht=N,it=Q-S.offset,ut=S.length;for($<ut&&(ut=$),$-=ut,S.length-=ut;N[Q++]=ht[it++],--ut;);S.length===0&&(S.mode=21);break;case 26:if($===0)break t;N[Q++]=S.length,$--,S.mode=21;break;case 27:if(S.wrap){for(;V<32;){if(X===0)break t;X--,W|=C[U++]<<V,V+=8}if(mt-=$,D.total_out+=mt,S.total+=mt,mt&&(D.adler=S.check=S.flags?o(S.check,N,mt,Q-mt):s(S.check,N,mt,Q-mt)),mt=$,(S.flags?W:p(W))!==S.check){D.msg="incorrect data check",S.mode=30;break}V=W=0}S.mode=28;case 28:if(S.wrap&&S.flags){for(;V<32;){if(X===0)break t;X--,W+=C[U++]<<V,V+=8}if(W!==(4294967295&S.total)){D.msg="incorrect length check",S.mode=30;break}V=W=0}S.mode=29;case 29:rt=1;break t;case 30:rt=-3;break t;case 31:return-4;case 32:default:return d}return D.next_out=Q,D.avail_out=$,D.next_in=U,D.avail_in=X,S.hold=W,S.bits=V,(S.wsize||mt!==D.avail_out&&S.mode<30&&(S.mode<27||B!==4))&&F(D,D.output,D.next_out,mt-D.avail_out)?(S.mode=31,-4):(pt-=D.avail_in,mt-=D.avail_out,D.total_in+=pt,D.total_out+=mt,S.total+=mt,S.wrap&&mt&&(D.adler=S.check=S.flags?o(S.check,N,mt,D.next_out-mt):s(S.check,N,mt,D.next_out-mt)),D.data_type=S.bits+(S.last?64:0)+(S.mode===12?128:0)+(S.mode===20||S.mode===15?256:0),(pt==0&&mt===0||B===4)&&rt===h&&(rt=-5),rt)},r.inflateEnd=function(D){if(!D||!D.state)return d;var B=D.state;return B.window&&(B.window=null),D.state=null,h},r.inflateGetHeader=function(D,B){var S;return D&&D.state?(2&(S=D.state).wrap)==0?d:((S.head=B).done=!1,h):d},r.inflateSetDictionary=function(D,B){var S,C=B.length;return D&&D.state?(S=D.state).wrap!==0&&S.mode!==11?d:S.mode===11&&s(1,B,C,0)!==S.check?-3:F(D,B,C,C)?(S.mode=31,-4):(S.havedict=1,h):d},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,i,r){var a=e("../utils/common"),s=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];i.exports=function(u,f,h,d,m,v,g,p){var _,y,x,A,L,P,M,w,H,F=p.bits,D=0,B=0,S=0,C=0,N=0,U=0,Q=0,X=0,$=0,W=0,V=null,pt=0,mt=new a.Buf16(16),ut=new a.Buf16(16),it=null,ht=0;for(D=0;D<=15;D++)mt[D]=0;for(B=0;B<d;B++)mt[f[h+B]]++;for(N=F,C=15;1<=C&&mt[C]===0;C--);if(C<N&&(N=C),C===0)return m[v++]=20971520,m[v++]=20971520,p.bits=1,0;for(S=1;S<C&&mt[S]===0;S++);for(N<S&&(N=S),D=X=1;D<=15;D++)if(X<<=1,(X-=mt[D])<0)return-1;if(0<X&&(u===0||C!==1))return-1;for(ut[1]=0,D=1;D<15;D++)ut[D+1]=ut[D]+mt[D];for(B=0;B<d;B++)f[h+B]!==0&&(g[ut[f[h+B]]++]=B);if(P=u===0?(V=it=g,19):u===1?(V=s,pt-=257,it=o,ht-=257,256):(V=l,it=c,-1),D=S,L=v,Q=B=W=0,x=-1,A=($=1<<(U=N))-1,u===1&&852<$||u===2&&592<$)return 1;for(;;){for(M=D-Q,H=g[B]<P?(w=0,g[B]):g[B]>P?(w=it[ht+g[B]],V[pt+g[B]]):(w=96,0),_=1<<D-Q,S=y=1<<U;m[L+(W>>Q)+(y-=_)]=M<<24|w<<16|H|0,y!==0;);for(_=1<<D-1;W&_;)_>>=1;if(_!==0?(W&=_-1,W+=_):W=0,B++,--mt[D]==0){if(D===C)break;D=f[h+g[B]]}if(N<D&&(W&A)!==x){for(Q===0&&(Q=N),L+=S,X=1<<(U=D-Q);U+Q<C&&!((X-=mt[U+Q])<=0);)U++,X<<=1;if($+=1<<U,u===1&&852<$||u===2&&592<$)return 1;m[x=W&A]=N<<24|U<<16|L-v|0}}return W!==0&&(m[L+W]=D-Q<<24|64<<16|0),p.bits=N,0}},{"../utils/common":41}],51:[function(e,i,r){i.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,i,r){var a=e("../utils/common"),s=0,o=1;function l(E){for(var q=E.length;0<=--q;)E[q]=0}var c=0,u=29,f=256,h=f+1+u,d=30,m=19,v=2*h+1,g=15,p=16,_=7,y=256,x=16,A=17,L=18,P=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],M=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],w=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],H=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],F=new Array(2*(h+2));l(F);var D=new Array(2*d);l(D);var B=new Array(512);l(B);var S=new Array(256);l(S);var C=new Array(u);l(C);var N,U,Q,X=new Array(d);function $(E,q,st,ct,G){this.static_tree=E,this.extra_bits=q,this.extra_base=st,this.elems=ct,this.max_length=G,this.has_stree=E&&E.length}function W(E,q){this.dyn_tree=E,this.max_code=0,this.stat_desc=q}function V(E){return E<256?B[E]:B[256+(E>>>7)]}function pt(E,q){E.pending_buf[E.pending++]=255&q,E.pending_buf[E.pending++]=q>>>8&255}function mt(E,q,st){E.bi_valid>p-st?(E.bi_buf|=q<<E.bi_valid&65535,pt(E,E.bi_buf),E.bi_buf=q>>p-E.bi_valid,E.bi_valid+=st-p):(E.bi_buf|=q<<E.bi_valid&65535,E.bi_valid+=st)}function ut(E,q,st){mt(E,st[2*q],st[2*q+1])}function it(E,q){for(var st=0;st|=1&E,E>>>=1,st<<=1,0<--q;);return st>>>1}function ht(E,q,st){var ct,G,R=new Array(g+1),T=0;for(ct=1;ct<=g;ct++)R[ct]=T=T+st[ct-1]<<1;for(G=0;G<=q;G++){var k=E[2*G+1];k!==0&&(E[2*G]=it(R[k]++,k))}}function at(E){var q;for(q=0;q<h;q++)E.dyn_ltree[2*q]=0;for(q=0;q<d;q++)E.dyn_dtree[2*q]=0;for(q=0;q<m;q++)E.bl_tree[2*q]=0;E.dyn_ltree[2*y]=1,E.opt_len=E.static_len=0,E.last_lit=E.matches=0}function yt(E){8<E.bi_valid?pt(E,E.bi_buf):0<E.bi_valid&&(E.pending_buf[E.pending++]=E.bi_buf),E.bi_buf=0,E.bi_valid=0}function Et(E,q,st,ct){var G=2*q,R=2*st;return E[G]<E[R]||E[G]===E[R]&&ct[q]<=ct[st]}function St(E,q,st){for(var ct=E.heap[st],G=st<<1;G<=E.heap_len&&(G<E.heap_len&&Et(q,E.heap[G+1],E.heap[G],E.depth)&&G++,!Et(q,ct,E.heap[G],E.depth));)E.heap[st]=E.heap[G],st=G,G<<=1;E.heap[st]=ct}function Wt(E,q,st){var ct,G,R,T,k=0;if(E.last_lit!==0)for(;ct=E.pending_buf[E.d_buf+2*k]<<8|E.pending_buf[E.d_buf+2*k+1],G=E.pending_buf[E.l_buf+k],k++,ct===0?ut(E,G,q):(ut(E,(R=S[G])+f+1,q),(T=P[R])!==0&&mt(E,G-=C[R],T),ut(E,R=V(--ct),st),(T=M[R])!==0&&mt(E,ct-=X[R],T)),k<E.last_lit;);ut(E,y,q)}function Vt(E,q){var st,ct,G,R=q.dyn_tree,T=q.stat_desc.static_tree,k=q.stat_desc.has_stree,J=q.stat_desc.elems,lt=-1;for(E.heap_len=0,E.heap_max=v,st=0;st<J;st++)R[2*st]!==0?(E.heap[++E.heap_len]=lt=st,E.depth[st]=0):R[2*st+1]=0;for(;E.heap_len<2;)R[2*(G=E.heap[++E.heap_len]=lt<2?++lt:0)]=1,E.depth[G]=0,E.opt_len--,k&&(E.static_len-=T[2*G+1]);for(q.max_code=lt,st=E.heap_len>>1;1<=st;st--)St(E,R,st);for(G=J;st=E.heap[1],E.heap[1]=E.heap[E.heap_len--],St(E,R,1),ct=E.heap[1],E.heap[--E.heap_max]=st,E.heap[--E.heap_max]=ct,R[2*G]=R[2*st]+R[2*ct],E.depth[G]=(E.depth[st]>=E.depth[ct]?E.depth[st]:E.depth[ct])+1,R[2*st+1]=R[2*ct+1]=G,E.heap[1]=G++,St(E,R,1),2<=E.heap_len;);E.heap[--E.heap_max]=E.heap[1],(function(tt,bt){var xt,At,kt,ft,vt,It,Dt=bt.dyn_tree,Ct=bt.max_code,Yt=bt.stat_desc.static_tree,Y=bt.stat_desc.has_stree,Mt=bt.stat_desc.extra_bits,_t=bt.stat_desc.extra_base,wt=bt.stat_desc.max_length,gt=0;for(ft=0;ft<=g;ft++)tt.bl_count[ft]=0;for(Dt[2*tt.heap[tt.heap_max]+1]=0,xt=tt.heap_max+1;xt<v;xt++)wt<(ft=Dt[2*Dt[2*(At=tt.heap[xt])+1]+1]+1)&&(ft=wt,gt++),Dt[2*At+1]=ft,Ct<At||(tt.bl_count[ft]++,vt=0,_t<=At&&(vt=Mt[At-_t]),It=Dt[2*At],tt.opt_len+=It*(ft+vt),Y&&(tt.static_len+=It*(Yt[2*At+1]+vt)));if(gt!==0){do{for(ft=wt-1;tt.bl_count[ft]===0;)ft--;tt.bl_count[ft]--,tt.bl_count[ft+1]+=2,tt.bl_count[wt]--,gt-=2}while(0<gt);for(ft=wt;ft!==0;ft--)for(At=tt.bl_count[ft];At!==0;)Ct<(kt=tt.heap[--xt])||(Dt[2*kt+1]!==ft&&(tt.opt_len+=(ft-Dt[2*kt+1])*Dt[2*kt],Dt[2*kt+1]=ft),At--)}})(E,q),ht(R,lt,E.bl_count)}function b(E,q,st){var ct,G,R=-1,T=q[1],k=0,J=7,lt=4;for(T===0&&(J=138,lt=3),q[2*(st+1)+1]=65535,ct=0;ct<=st;ct++)G=T,T=q[2*(ct+1)+1],++k<J&&G===T||(k<lt?E.bl_tree[2*G]+=k:G!==0?(G!==R&&E.bl_tree[2*G]++,E.bl_tree[2*x]++):k<=10?E.bl_tree[2*A]++:E.bl_tree[2*L]++,R=G,lt=(k=0)===T?(J=138,3):G===T?(J=6,3):(J=7,4))}function rt(E,q,st){var ct,G,R=-1,T=q[1],k=0,J=7,lt=4;for(T===0&&(J=138,lt=3),ct=0;ct<=st;ct++)if(G=T,T=q[2*(ct+1)+1],!(++k<J&&G===T)){if(k<lt)for(;ut(E,G,E.bl_tree),--k!=0;);else G!==0?(G!==R&&(ut(E,G,E.bl_tree),k--),ut(E,x,E.bl_tree),mt(E,k-3,2)):k<=10?(ut(E,A,E.bl_tree),mt(E,k-3,3)):(ut(E,L,E.bl_tree),mt(E,k-11,7));R=G,lt=(k=0)===T?(J=138,3):G===T?(J=6,3):(J=7,4)}}l(X);var K=!1;function O(E,q,st,ct){mt(E,(c<<1)+(ct?1:0),3),(function(G,R,T,k){yt(G),pt(G,T),pt(G,~T),a.arraySet(G.pending_buf,G.window,R,T,G.pending),G.pending+=T})(E,q,st)}r._tr_init=function(E){K||((function(){var q,st,ct,G,R,T=new Array(g+1);for(G=ct=0;G<u-1;G++)for(C[G]=ct,q=0;q<1<<P[G];q++)S[ct++]=G;for(S[ct-1]=G,G=R=0;G<16;G++)for(X[G]=R,q=0;q<1<<M[G];q++)B[R++]=G;for(R>>=7;G<d;G++)for(X[G]=R<<7,q=0;q<1<<M[G]-7;q++)B[256+R++]=G;for(st=0;st<=g;st++)T[st]=0;for(q=0;q<=143;)F[2*q+1]=8,q++,T[8]++;for(;q<=255;)F[2*q+1]=9,q++,T[9]++;for(;q<=279;)F[2*q+1]=7,q++,T[7]++;for(;q<=287;)F[2*q+1]=8,q++,T[8]++;for(ht(F,h+1,T),q=0;q<d;q++)D[2*q+1]=5,D[2*q]=it(q,5);N=new $(F,P,f+1,h,g),U=new $(D,M,0,d,g),Q=new $(new Array(0),w,0,m,_)})(),K=!0),E.l_desc=new W(E.dyn_ltree,N),E.d_desc=new W(E.dyn_dtree,U),E.bl_desc=new W(E.bl_tree,Q),E.bi_buf=0,E.bi_valid=0,at(E)},r._tr_stored_block=O,r._tr_flush_block=function(E,q,st,ct){var G,R,T=0;0<E.level?(E.strm.data_type===2&&(E.strm.data_type=(function(k){var J,lt=4093624447;for(J=0;J<=31;J++,lt>>>=1)if(1&lt&&k.dyn_ltree[2*J]!==0)return s;if(k.dyn_ltree[18]!==0||k.dyn_ltree[20]!==0||k.dyn_ltree[26]!==0)return o;for(J=32;J<f;J++)if(k.dyn_ltree[2*J]!==0)return o;return s})(E)),Vt(E,E.l_desc),Vt(E,E.d_desc),T=(function(k){var J;for(b(k,k.dyn_ltree,k.l_desc.max_code),b(k,k.dyn_dtree,k.d_desc.max_code),Vt(k,k.bl_desc),J=m-1;3<=J&&k.bl_tree[2*H[J]+1]===0;J--);return k.opt_len+=3*(J+1)+5+5+4,J})(E),G=E.opt_len+3+7>>>3,(R=E.static_len+3+7>>>3)<=G&&(G=R)):G=R=st+5,st+4<=G&&q!==-1?O(E,q,st,ct):E.strategy===4||R===G?(mt(E,2+(ct?1:0),3),Wt(E,F,D)):(mt(E,4+(ct?1:0),3),(function(k,J,lt,tt){var bt;for(mt(k,J-257,5),mt(k,lt-1,5),mt(k,tt-4,4),bt=0;bt<tt;bt++)mt(k,k.bl_tree[2*H[bt]+1],3);rt(k,k.dyn_ltree,J-1),rt(k,k.dyn_dtree,lt-1)})(E,E.l_desc.max_code+1,E.d_desc.max_code+1,T+1),Wt(E,E.dyn_ltree,E.dyn_dtree)),at(E),ct&&yt(E)},r._tr_tally=function(E,q,st){return E.pending_buf[E.d_buf+2*E.last_lit]=q>>>8&255,E.pending_buf[E.d_buf+2*E.last_lit+1]=255&q,E.pending_buf[E.l_buf+E.last_lit]=255&st,E.last_lit++,q===0?E.dyn_ltree[2*st]++:(E.matches++,q--,E.dyn_ltree[2*(S[st]+f+1)]++,E.dyn_dtree[2*V(q)]++),E.last_lit===E.lit_bufsize-1},r._tr_align=function(E){mt(E,2,3),ut(E,y,F),(function(q){q.bi_valid===16?(pt(q,q.bi_buf),q.bi_buf=0,q.bi_valid=0):8<=q.bi_valid&&(q.pending_buf[q.pending++]=255&q.bi_buf,q.bi_buf>>=8,q.bi_valid-=8)})(E)}},{"../utils/common":41}],53:[function(e,i,r){i.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,i,r){(function(a){(function(s,o){if(!s.setImmediate){var l,c,u,f,h=1,d={},m=!1,v=s.document,g=Object.getPrototypeOf&&Object.getPrototypeOf(s);g=g&&g.setTimeout?g:s,l={}.toString.call(s.process)==="[object process]"?function(x){process.nextTick(function(){_(x)})}:(function(){if(s.postMessage&&!s.importScripts){var x=!0,A=s.onmessage;return s.onmessage=function(){x=!1},s.postMessage("","*"),s.onmessage=A,x}})()?(f="setImmediate$"+Math.random()+"$",s.addEventListener?s.addEventListener("message",y,!1):s.attachEvent("onmessage",y),function(x){s.postMessage(f+x,"*")}):s.MessageChannel?((u=new MessageChannel).port1.onmessage=function(x){_(x.data)},function(x){u.port2.postMessage(x)}):v&&"onreadystatechange"in v.createElement("script")?(c=v.documentElement,function(x){var A=v.createElement("script");A.onreadystatechange=function(){_(x),A.onreadystatechange=null,c.removeChild(A),A=null},c.appendChild(A)}):function(x){setTimeout(_,0,x)},g.setImmediate=function(x){typeof x!="function"&&(x=new Function(""+x));for(var A=new Array(arguments.length-1),L=0;L<A.length;L++)A[L]=arguments[L+1];var P={callback:x,args:A};return d[h]=P,l(h),h++},g.clearImmediate=p}function p(x){delete d[x]}function _(x){if(m)setTimeout(_,0,x);else{var A=d[x];if(A){m=!0;try{(function(L){var P=L.callback,M=L.args;switch(M.length){case 0:P();break;case 1:P(M[0]);break;case 2:P(M[0],M[1]);break;case 3:P(M[0],M[1],M[2]);break;default:P.apply(o,M)}})(A)}finally{p(x),m=!1}}}}function y(x){x.source===s&&typeof x.data=="string"&&x.data.indexOf(f)===0&&_(+x.data.slice(f.length))}})(typeof self>"u"?a===void 0?this:a:self)}).call(this,typeof Hr<"u"?Hr:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(qa)),qa.exports}var xf=_f();const yf=vf(xf);function Pl(n){var t=document.getElementById("kapProjectLog");if(!t){console.warn("KAP import log element not found");return}t.innerHTML='<div class="log-info">Reading '+n.name+" ("+Math.round(n.size/1024)+" KB)...</div>";var e=new FileReader;e.onload=function(i){Sf(i.target.result,n.name,t)},e.onerror=function(){t.innerHTML+='<div class="log-err">Failed to read file</div>'},e.readAsArrayBuffer(n)}async function Sf(n,t,e){try{var i=await yf.loadAsync(n);e.innerHTML+='<div class="log-ok">ZIP opened successfully</div>';var r=i.file("manifest.json");if(!r){e.innerHTML+='<div class="log-err">No manifest.json found — not a valid KAP file</div>';return}var a=JSON.parse(await r.async("string"));e.innerHTML+='<div class="log-ok">Kirra Application Project v'+(a.kapVersion||"?")+"</div>",e.innerHTML+='<div class="log-info">Created: '+(a.created||"unknown")+"</div>",e.innerHTML+='<div class="log-info">Project: '+(a.projectName||"Untitled")+"</div>";var s=a.counts||{};e.innerHTML+='<div class="log-info">Contents: '+(s.holes||0)+" holes, "+(s.drawings||0)+" drawings, "+(s.surfaces||0)+" surfaces, "+(s.configs||0)+" charge configs</div>";var o={},l=i.file("layers.json");if(l)for(var c=JSON.parse(await l.async("string")),u=c.surfaceLayers||[],f=0;f<u.length;f++){var h=(u[f].layerName||"").toUpperCase();(h.indexOf("BLAST")!==-1||h.indexOf("SOLID")!==-1)&&(o[u[f].layerId]=u[f].layerName,e.innerHTML+='<div class="log-info">Blast solid layer detected: '+u[f].layerName+"</div>")}var d=i.file("surfaces.json");if(d){e.innerHTML+='<div class="log-info">Parsing surfaces (may take a moment for large data)...</div>';var m=JSON.parse(await d.async("string"));Mf(m,o,e)}var v=i.file("holes.json");if(v){var g=JSON.parse(await v.async("string"));Tf(g,e)}var p=i.file("drawings.json");if(p){var _=JSON.parse(await p.async("string"));wf(_,e)}var y=i.file("charging.json");if(y){var x=JSON.parse(await y.async("string"));Af(x,e)}var A=i.file("configs.json");if(A){var L=JSON.parse(await A.async("string"));Df(L,e)}e.innerHTML+='<div class="log-ok" style="font-weight:700;margin-top:8px;">KAP import complete</div>',z.importedBlasts.length>0&&(e.innerHTML+='<div class="log-ok">'+z.importedBlasts.length+" blast(s) ready to merge into schedule</div>",Fo()),z.kirraProjectSurfaces.length>0&&(e.innerHTML+='<div class="log-info">Switch to 3D PLAYBACK tab to view surfaces.</div>')}catch(P){e.innerHTML+='<div class="log-err">Error: '+P.message+"</div>",console.error("KAP import error:",P)}}function Mf(n,t,e){if(!Array.isArray(n)||n.length===0){e.innerHTML+='<div class="log-info">No surfaces in KAP file</div>';return}for(var i=[],r=[],a=0;a<n.length;a++){var s=n[a],o=s.name||s.id||"Surface_"+a,l=s.points||[],c=s.triangles||[],u=c.length>0&&c[0]&&c[0].vertices!==void 0,f=Ef(l,c,u,s.meshBounds),h=!1,d=s.id||"";s.layerId&&t[s.layerId]&&(h=!0),d.indexOf("EXTRUDED_")===0&&(h=!0);var m={name:o,points:l,triangles:c,bounds:f,gradient:s.gradient||"default",visible:s.visible!==!1,opacity:s.transparency!==void 0?s.transparency:.85,hillshadeColor:s.hillshadeColor||null,layerId:s.layerId||null};if(h){var v=bf(c,u,l,f),g=Math.abs(f.maxZ-f.minZ),p=g>0?Math.round(v/g):0;m.volume=v,m.benchHt=g,m.surfaceArea=p,m.isBlastSolid=!0,r.push(m),e.innerHTML+='<div class="log-ok">  Blast solid: '+o+" | vol: "+Math.round(v).toLocaleString()+" m3 | bench: "+g.toFixed(1)+" m | area: "+p.toLocaleString()+" m2 ("+c.length+" tris)</div>";var _={name:o,mode:"Manual",surfaceArea:p,pattern:"",pctD65:0,pctPV:1,rateD65:19,ratePV:20,numD65:0,numPV:4,loadRate:1e5,d65Meters:0,pvMeters:0,volume:Math.round(v),expMass:0,drillStart:null,drillStartTime:"06:00",drillDays:0,loadStart:null,loadDays:0,blastDate:null,status:"planned",deps:{drillPctForLoad:null,drillPctForBlast:null,loadPctForBlast:null,minLeadDays:null,predecessor:null},assignedDrills:[],assignedMPUs:[],holeTypes:[],solidBounds:f,solidBenchHt:g,_sourceType:"solid"};z.importedBlasts.push(_)}else i.push(m),e.innerHTML+='<div class="log-ok">  Surface: '+o+" ("+l.length+" pts, "+c.length+" tris"+(u?", vertex-per-tri":", indexed")+")</div>"}z.kirraProjectSurfaces=i,z.kirraProjectSolids=(z.kirraProjectSolids||[]).concat(r),e.innerHTML+='<div class="log-ok">'+i.length+" surface(s) + "+r.length+" blast solid(s) loaded</div>"}function Ef(n,t,e,i){if(i&&i.minX!==void 0)return i;var r=1/0,a=-1/0,s=1/0,o=-1/0,l=1/0,c=-1/0;if(e)for(var u=0;u<t.length;u++){var f=t[u].vertices;if(f)for(var h=0;h<f.length;h++){var d=f[h];d.x<r&&(r=d.x),d.x>a&&(a=d.x),d.y<s&&(s=d.y),d.y>o&&(o=d.y);var m=d.z||0;m<l&&(l=m),m>c&&(c=m)}}else if(n.length>0)for(var v=0;v<n.length;v++){var d=n[v];d.x<r&&(r=d.x),d.x>a&&(a=d.x),d.y<s&&(s=d.y),d.y>o&&(o=d.y);var m=d.z||0;m<l&&(l=m),m>c&&(c=m)}return{minX:r,maxX:a,minY:s,maxY:o,minZ:l,maxZ:c}}function bf(n,t,e,i){if(!n||n.length===0)return 0;var r=(i.minX+i.maxX)/2,a=(i.minY+i.maxY)/2,s=(i.minZ+i.maxZ)/2,o=0;if(t)for(var l=0;l<n.length;l++){var c=n[l].vertices;if(!(!c||c.length<3)){var u=c[0].x-r,f=c[0].y-a,h=(c[0].z||0)-s,d=c[1].x-r,m=c[1].y-a,v=(c[1].z||0)-s,g=c[2].x-r,p=c[2].y-a,_=(c[2].z||0)-s;o+=(u*(m*_-p*v)-d*(f*_-p*h)+g*(f*v-m*h))/6}}else for(var l=0;l<n.length;l++){var y=n[l],x,A,L;if(Array.isArray(y))x=y[0],A=y[1],L=y[2];else if(y.a!==void 0)x=y.a,A=y.b,L=y.c;else continue;if(!(x>=e.length||A>=e.length||L>=e.length)){var u=e[x].x-r,f=e[x].y-a,h=(e[x].z||0)-s,d=e[A].x-r,m=e[A].y-a,v=(e[A].z||0)-s,g=e[L].x-r,p=e[L].y-a,_=(e[L].z||0)-s;o+=(u*(m*_-p*v)-d*(f*_-p*h)+g*(f*v-m*h))/6}}return Math.abs(o)}function Tf(n,t){if(!Array.isArray(n)||n.length===0){t.innerHTML+='<div class="log-info">No holes in KAP file</div>';return}for(var e={},i=0;i<n.length;i++){var r=n[i],a=r.entityName||"Unknown";e[a]||(e[a]=[]),e[a].push(r)}z.kapHoleData||(z.kapHoleData={});for(var s=Object.keys(e),i=0;i<s.length;i++)z.kapHoleData[s[i]]=e[s[i]];for(var o=0,l=0,i=0;i<s.length;i++){var a=s[i],c=e[a],u=z.blasts.find(function(m){return m.name===a});if(u){(!u.polygons||u.polygons.length===0)&&(u.kapHoles=c,u.holeCount=c.length),o++;continue}var f=z.importedBlasts.find(function(m){return m.name===a});f?(f.kapHoles=c,f._sourceHoleCount=c.length,o++):l++}t.innerHTML+='<div class="log-ok">'+n.length+" holes in "+s.length+" blast entities ("+o+" matched, "+l+" unmatched)</div>",s.forEach(function(h){t.innerHTML+='<div class="log-info">  '+h+": "+e[h].length+" holes</div>"})}function wf(n,t){if(!Array.isArray(n)||n.length===0){t.innerHTML+='<div class="log-info">No drawings in KAP file</div>';return}for(var e=0,i=0,r=0,a=0;a<n.length;a++){var s=n[a],o=s[0],l=s[1],c=l.entityType||"unknown";if(c==="poly"){e++;var u=l.data||[];if(u.length>0){for(var f=[],h=0;h<u.length;h++)f.push({x:u[h].pointXLocation,y:u[h].pointYLocation,z:u[h].pointZLocation||0});var d=z.blasts.find(function(m){return o.indexOf(m.name)!==-1||m.name.indexOf(o)!==-1});d?(d.polygons=f,t.innerHTML+='<div class="log-ok">  Polygon "'+o+'" -> blast "'+d.name+'"</div>'):(z.kapPolygons||(z.kapPolygons=[]),z.kapPolygons.push({name:o,points:f,color:u[0]&&u[0].color||"#FF0000",closed:u[0]?u[0].closed:!0}))}}else c==="line"?i++:r++}t.innerHTML+='<div class="log-ok">'+n.length+" drawings: "+e+" polygons, "+i+" lines, "+r+" other</div>"}function Af(n,t){if(!Array.isArray(n)||n.length===0){t.innerHTML+='<div class="log-info">No charging data in KAP file</div>';return}for(var e={},i={},r=0;r<n.length;r++){var a=n[r],s=Array.isArray(a)?a[1]:a,o=s.entityName||"Unknown";e[o]||(e[o]=0,i[o]=0),i[o]++;for(var l=s.decks||[],c=0;c<l.length;c++){var u=l[c],f=u.product||{},h=f.productCategory||"";if(h==="BulkExplosive"||h==="HighExplosive")if(u.massKg)e[o]+=u.massKg;else{var d=u.topDepth||0,m=u.baseDepth||0,v=Math.abs(m-d),g=f.density||0;if(u.deckType==="DECOUPLED"){var p=(f.diameterMm||32)/1e3,_=p/2,y=(f.massGrams||0)/1e3,x=(f.lengthMm||400)/1e3;if(y>0&&x>0){var A=Math.floor(v/x);e[o]+=A*y}else g>0&&(e[o]+=Math.PI*_*_*v*g*1e3)}else if(u.deckType==="COUPLED"&&g>0){var L=s.holeDiameterMm||229,P=L/1e3/2;e[o]+=Math.PI*P*P*v*g*1e3}}}}for(var M=Object.keys(e),r=0;r<M.length;r++){var o=M[r],w=Math.round(e[o]),H=i[o],F=z.importedBlasts.find(function(C){return C.name===o});F&&(F.expMass=w,F._sourceHoleCount=H);var D=z.blasts.find(function(C){return C.name===o});D&&w>0&&(D.expMass=w),t.innerHTML+='<div class="log-ok">  Charging: '+o+" = "+H+" holes, "+w.toLocaleString()+" kg explosive</div>"}}function Df(n,t){if(!Array.isArray(n)||n.length===0){t.innerHTML+='<div class="log-info">No charge configs in KAP file</div>';return}for(var e=[],i=0;i<n.length;i++){var r=n[i],a=r[0],s=r[1];e.push({id:a,name:s.configName||s.name||a,code:s.configCode||"",data:s})}e.length>0&&(z.chargeConfigs=z.chargeConfigs.concat(e),t.innerHTML+='<div class="log-ok">'+e.length+" charge config(s) imported</div>",e.forEach(function(o){t.innerHTML+='<div class="log-info">  '+o.code+" - "+o.name+"</div>"}))}function Cf(){var n=document.getElementById("kapDropZone"),t=document.getElementById("kapFileInput");!n||!t||(t.addEventListener("change",function(e){var i=e.target.files;i.length>0&&Pl(i[0]),t.value=""}),n.addEventListener("dragover",function(e){e.preventDefault(),e.stopPropagation(),n.classList.add("drag-over")}),n.addEventListener("dragleave",function(e){e.preventDefault(),n.classList.remove("drag-over")}),n.addEventListener("drop",function(e){e.preventDefault(),e.stopPropagation(),n.classList.remove("drag-over");var i=e.dataTransfer.files;i.length>0&&Pl(i[0])}),n.addEventListener("click",function(e){e.target!==t&&t.click()}))}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ko="183",kn={ROTATE:0,DOLLY:1,PAN:2},Hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pf=0,Rl=1,Rf=2,_a=1,Lf=2,_r=3,si=0,je=1,dn=2,zn=0,Xi=1,Ll=2,Il=3,Ul=4,If=5,gi=100,Uf=101,Bf=102,Ff=103,Nf=104,Of=200,kf=201,zf=202,Hf=203,Is=204,Us=205,Vf=206,Gf=207,Wf=208,Xf=209,qf=210,Yf=211,jf=212,Zf=213,Kf=214,Bs=0,Fs=1,Ns=2,Zi=3,Os=4,ks=5,zs=6,Hs=7,zo=0,Jf=1,$f=2,yn=0,ld=1,cd=2,dd=3,ud=4,hd=5,fd=6,pd=7,md=300,Si=301,Ki=302,Ya=303,ja=304,Ua=306,Vs=1e3,Bn=1001,Gs=1002,Be=1003,Qf=1004,Gr=1005,ze=1006,Za=1007,_i=1008,Qe=1009,gd=1010,vd=1011,Ar=1012,Ho=1013,Mn=1014,_n=1015,Wn=1016,Vo=1017,Go=1018,Dr=1020,_d=35902,xd=35899,yd=1021,Sd=1022,hn=1023,Xn=1026,xi=1027,Md=1028,Wo=1029,Ji=1030,Xo=1031,qo=1033,xa=33776,ya=33777,Sa=33778,Ma=33779,Ws=35840,Xs=35841,qs=35842,Ys=35843,js=36196,Zs=37492,Ks=37496,Js=37488,$s=37489,Qs=37490,to=37491,eo=37808,no=37809,io=37810,ro=37811,ao=37812,so=37813,oo=37814,lo=37815,co=37816,uo=37817,ho=37818,fo=37819,po=37820,mo=37821,go=36492,vo=36494,_o=36495,xo=36283,yo=36284,So=36285,Mo=36286,tp=3200,Ed=0,ep=1,ri="",$e="srgb",$i="srgb-linear",wa="linear",le="srgb",Ai=7680,Bl=519,np=512,ip=513,rp=514,Yo=515,ap=516,sp=517,jo=518,op=519,Fl=35044,Nl="300 es",xn=2e3,Cr=2001;function lp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Aa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function cp(){const n=Aa("canvas");return n.style.display="block",n}const Ol={};function kl(...n){const t="THREE."+n.shift();console.log(t,...n)}function bd(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Gt(...n){n=bd(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ae(...n){n=bd(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Da(...n){const t=n.join(" ");t in Ol||(Ol[t]=!0,Gt(...n))}function dp(n,t,e){return new Promise(function(i,r){function a(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:i()}}setTimeout(a,e)})}const up={[Bs]:Fs,[Ns]:zs,[Os]:Hs,[Zi]:ks,[Fs]:Bs,[zs]:Ns,[Hs]:Os,[ks]:Zi};class Ei{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const a=r.indexOf(e);a!==-1&&r.splice(a,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ea=Math.PI/180,Eo=180/Math.PI;function rr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]).toLowerCase()}function te(n,t,e){return Math.max(t,Math.min(e,n))}function hp(n,t){return(n%t+t)%t}function Ka(n,t,e){return(1-e)*n+e*t}function dr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Xe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const fp={DEG2RAD:Ea};class Lt{constructor(t=0,e=0){Lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),a=this.x-t.x,s=this.y-t.y;return this.x=a*i-s*r+t.x,this.y=a*r+s*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oi{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,a,s,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],h=a[s+0],d=a[s+1],m=a[s+2],v=a[s+3];if(f!==v||l!==h||c!==d||u!==m){let g=l*h+c*d+u*m+f*v;g<0&&(h=-h,d=-d,m=-m,v=-v,g=-g);let p=1-o;if(g<.9995){const _=Math.acos(g),y=Math.sin(_);p=Math.sin(p*_)/y,o=Math.sin(o*_)/y,l=l*p+h*o,c=c*p+d*o,u=u*p+m*o,f=f*p+v*o}else{l=l*p+h*o,c=c*p+d*o,u=u*p+m*o,f=f*p+v*o;const _=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=_,c*=_,u*=_,f*=_}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,a,s){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=a[s],h=a[s+1],d=a[s+2],m=a[s+3];return t[e]=o*m+u*f+l*d-c*h,t[e+1]=l*m+u*h+c*f-o*d,t[e+2]=c*m+u*d+o*h-l*f,t[e+3]=u*m-o*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,a=t._z,s=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(a/2),h=l(i/2),d=l(r/2),m=l(a/2);switch(s){case"XYZ":this._x=h*u*f+c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f-h*d*m;break;case"YXZ":this._x=h*u*f+c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f+h*d*m;break;case"ZXY":this._x=h*u*f-c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f-h*d*m;break;case"ZYX":this._x=h*u*f-c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f+h*d*m;break;case"YZX":this._x=h*u*f+c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f-h*d*m;break;case"XZY":this._x=h*u*f-c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f+h*d*m;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],a=e[8],s=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(a-c)*d,this._z=(s-r)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+s)/d,this._z=(a+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(a-c)/d,this._x=(r+s)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(s-r)/d,this._x=(a+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,a=t._z,s=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+s*o+r*c-a*l,this._y=r*u+s*l+a*o-i*c,this._z=a*u+s*c+i*l-r*o,this._w=s*u-i*o-r*l-a*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,a=t._z,s=t._w,o=this.dot(t);o<0&&(i=-i,r=-r,a=-a,s=-s,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+r*e,this._z=this._z*l+a*e,this._w=this._w*l+s*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+r*e,this._z=this._z*l+a*e,this._w=this._w*l+s*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(t=0,e=0,i=0){j.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*r,this.y=a[1]*e+a[4]*i+a[7]*r,this.z=a[2]*e+a[5]*i+a[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,a=t.elements,s=1/(a[3]*e+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*e+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*e+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,a=t.x,s=t.y,o=t.z,l=t.w,c=2*(s*r-o*i),u=2*(o*e-a*r),f=2*(a*i-s*e);return this.x=e+l*c+s*f-o*u,this.y=i+l*u+o*c-a*f,this.z=r+l*f+a*u-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r,this.y=a[1]*e+a[5]*i+a[9]*r,this.z=a[2]*e+a[6]*i+a[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,a=t.z,s=e.x,o=e.y,l=e.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ja.copy(this).projectOnVector(t),this.sub(Ja)}reflect(t){return this.sub(Ja.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ja=new j,zl=new oi;class Zt{constructor(t,e,i,r,a,s,o,l,c){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,a,s,o,l,c)}set(t,e,i,r,a,s,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=a,u[5]=l,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],m=i[8],v=r[0],g=r[3],p=r[6],_=r[1],y=r[4],x=r[7],A=r[2],L=r[5],P=r[8];return a[0]=s*v+o*_+l*A,a[3]=s*g+o*y+l*L,a[6]=s*p+o*x+l*P,a[1]=c*v+u*_+f*A,a[4]=c*g+u*y+f*L,a[7]=c*p+u*x+f*P,a[2]=h*v+d*_+m*A,a[5]=h*g+d*y+m*L,a[8]=h*p+d*x+m*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],a=t[3],s=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*s*u-e*o*c-i*a*u+i*o*l+r*a*c-r*s*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],a=t[3],s=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*s-o*c,h=o*l-u*a,d=c*a-s*l,m=e*f+i*h+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return t[0]=f*v,t[1]=(r*c-u*i)*v,t[2]=(o*i-r*s)*v,t[3]=h*v,t[4]=(u*e-r*l)*v,t[5]=(r*a-o*e)*v,t[6]=d*v,t[7]=(i*l-c*e)*v,t[8]=(s*e-i*a)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+t,-r*c,r*l,-r*(-c*s+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply($a.makeScale(t,e)),this}rotate(t){return this.premultiply($a.makeRotation(-t)),this}translate(t,e){return this.premultiply($a.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $a=new Zt,Hl=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vl=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pp(){const n={enabled:!0,workingColorSpace:$i,spaces:{},convert:function(r,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===le&&(r.r=Hn(r.r),r.g=Hn(r.g),r.b=Hn(r.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===le&&(r.r=qi(r.r),r.g=qi(r.g),r.b=qi(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ri?wa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,s){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return Da("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return Da("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,a)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[$i]:{primaries:t,whitePoint:i,transfer:wa,toXYZ:Hl,fromXYZ:Vl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:t,whitePoint:i,transfer:le,toXYZ:Hl,fromXYZ:Vl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}}),n}const ie=pp();function Hn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Di;class mp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Di===void 0&&(Di=Aa("canvas")),Di.width=t.width,Di.height=t.height;const r=Di.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Di}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Aa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Hn(a[s]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Hn(e[i]/255)*255):e[i]=Hn(e[i]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gp=0;class Zo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=rr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(Qa(r[s].image)):a.push(Qa(r[s]))}else a=Qa(r);i.url=a}return e||(t.images[this.uuid]=i),i}}function Qa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?mp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}let vp=0;const ts=new j;class Ge extends Ei{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,i=Bn,r=Bn,a=ze,s=_i,o=hn,l=Qe,c=Ge.DEFAULT_ANISOTROPY,u=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=rr(),this.name="",this.source=new Zo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ts).x}get height(){return this.source.getSize(ts).y}get depth(){return this.source.getSize(ts).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==md)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vs:t.x=t.x-Math.floor(t.x);break;case Bn:t.x=t.x<0?0:1;break;case Gs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vs:t.y=t.y-Math.floor(t.y);break;case Bn:t.y=t.y<0?0:1;break;case Gs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=md;Ge.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,i=0,r=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,a=this.w,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*e+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*e+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*e+s[7]*i+s[11]*r+s[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,a;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,x=(d+1)/2,A=(p+1)/2,L=(u+h)/4,P=(f+v)/4,M=(m+g)/4;return y>x&&y>A?y<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(y),r=L/i,a=P/i):x>A?x<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(x),i=L/r,a=M/r):A<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(A),i=P/a,r=M/a),this.set(i,r,a,e),this}let _=Math.sqrt((g-m)*(g-m)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(f-v)/_,this.z=(h-u)/_,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(te(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _p extends Ei{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:i.depth},a=new Ge(r),s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Zo(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sn extends _p{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Td extends Ge{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Be,this.minFilter=Be,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xp extends Ge{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Be,this.minFilter=Be,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class me{constructor(t,e,i,r,a,s,o,l,c,u,f,h,d,m,v,g){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,a,s,o,l,c,u,f,h,d,m,v,g)}set(t,e,i,r,a,s,o,l,c,u,f,h,d,m,v,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=a,p[5]=s,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,r=1/Ci.setFromMatrixColumn(t,0).length(),a=1/Ci.setFromMatrixColumn(t,1).length(),s=1/Ci.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*s,e[9]=i[9]*s,e[10]=i[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,a=t.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(a),f=Math.sin(a);if(t.order==="XYZ"){const h=s*u,d=s*f,m=o*u,v=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+m*c,e[5]=h-v*c,e[9]=-o*l,e[2]=v-h*c,e[6]=m+d*c,e[10]=s*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,m=c*u,v=c*f;e[0]=h+v*o,e[4]=m*o-d,e[8]=s*c,e[1]=s*f,e[5]=s*u,e[9]=-o,e[2]=d*o-m,e[6]=v+h*o,e[10]=s*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,m=c*u,v=c*f;e[0]=h-v*o,e[4]=-s*f,e[8]=m+d*o,e[1]=d+m*o,e[5]=s*u,e[9]=v-h*o,e[2]=-s*c,e[6]=o,e[10]=s*l}else if(t.order==="ZYX"){const h=s*u,d=s*f,m=o*u,v=o*f;e[0]=l*u,e[4]=m*c-d,e[8]=h*c+v,e[1]=l*f,e[5]=v*c+h,e[9]=d*c-m,e[2]=-c,e[6]=o*l,e[10]=s*l}else if(t.order==="YZX"){const h=s*l,d=s*c,m=o*l,v=o*c;e[0]=l*u,e[4]=v-h*f,e[8]=m*f+d,e[1]=f,e[5]=s*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*f+m,e[10]=h-v*f}else if(t.order==="XZY"){const h=s*l,d=s*c,m=o*l,v=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+v,e[5]=s*u,e[9]=d*f-m,e[2]=m*f-d,e[6]=o*u,e[10]=v*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yp,t,Sp)}lookAt(t,e,i){const r=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),Kn.crossVectors(i,Ke),Kn.lengthSq()===0&&(Math.abs(i.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),Kn.crossVectors(i,Ke)),Kn.normalize(),Wr.crossVectors(Ke,Kn),r[0]=Kn.x,r[4]=Wr.x,r[8]=Ke.x,r[1]=Kn.y,r[5]=Wr.y,r[9]=Ke.y,r[2]=Kn.z,r[6]=Wr.z,r[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],m=i[2],v=i[6],g=i[10],p=i[14],_=i[3],y=i[7],x=i[11],A=i[15],L=r[0],P=r[4],M=r[8],w=r[12],H=r[1],F=r[5],D=r[9],B=r[13],S=r[2],C=r[6],N=r[10],U=r[14],Q=r[3],X=r[7],$=r[11],W=r[15];return a[0]=s*L+o*H+l*S+c*Q,a[4]=s*P+o*F+l*C+c*X,a[8]=s*M+o*D+l*N+c*$,a[12]=s*w+o*B+l*U+c*W,a[1]=u*L+f*H+h*S+d*Q,a[5]=u*P+f*F+h*C+d*X,a[9]=u*M+f*D+h*N+d*$,a[13]=u*w+f*B+h*U+d*W,a[2]=m*L+v*H+g*S+p*Q,a[6]=m*P+v*F+g*C+p*X,a[10]=m*M+v*D+g*N+p*$,a[14]=m*w+v*B+g*U+p*W,a[3]=_*L+y*H+x*S+A*Q,a[7]=_*P+y*F+x*C+A*X,a[11]=_*M+y*D+x*N+A*$,a[15]=_*w+y*B+x*U+A*W,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],a=t[12],s=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],m=t[3],v=t[7],g=t[11],p=t[15],_=l*d-c*h,y=o*d-c*f,x=o*h-l*f,A=s*d-c*u,L=s*h-l*u,P=s*f-o*u;return e*(v*_-g*y+p*x)-i*(m*_-g*A+p*L)+r*(m*y-v*A+p*P)-a*(m*x-v*L+g*P)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],a=t[3],s=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],m=t[12],v=t[13],g=t[14],p=t[15],_=e*o-i*s,y=e*l-r*s,x=e*c-a*s,A=i*l-r*o,L=i*c-a*o,P=r*c-a*l,M=u*v-f*m,w=u*g-h*m,H=u*p-d*m,F=f*g-h*v,D=f*p-d*v,B=h*p-d*g,S=_*B-y*D+x*F+A*H-L*w+P*M;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/S;return t[0]=(o*B-l*D+c*F)*C,t[1]=(r*D-i*B-a*F)*C,t[2]=(v*P-g*L+p*A)*C,t[3]=(h*L-f*P-d*A)*C,t[4]=(l*H-s*B-c*w)*C,t[5]=(e*B-r*H+a*w)*C,t[6]=(g*x-m*P-p*y)*C,t[7]=(u*P-h*x+d*y)*C,t[8]=(s*D-o*H+c*M)*C,t[9]=(i*H-e*D-a*M)*C,t[10]=(m*L-v*x+p*_)*C,t[11]=(f*x-u*L-d*_)*C,t[12]=(o*w-s*F-l*M)*C,t[13]=(e*F-i*w+r*M)*C,t[14]=(v*y-m*A-g*_)*C,t[15]=(u*A-f*y+h*_)*C,this}scale(t){const e=this.elements,i=t.x,r=t.y,a=t.z;return e[0]*=i,e[4]*=r,e[8]*=a,e[1]*=i,e[5]*=r,e[9]*=a,e[2]*=i,e[6]*=r,e[10]*=a,e[3]*=i,e[7]*=r,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),a=1-i,s=t.x,o=t.y,l=t.z,c=a*s,u=a*o;return this.set(c*s+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*s,0,c*l-r*o,u*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,a,s){return this.set(1,i,a,0,t,1,s,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,a=e._x,s=e._y,o=e._z,l=e._w,c=a+a,u=s+s,f=o+o,h=a*c,d=a*u,m=a*f,v=s*u,g=s*f,p=o*f,_=l*c,y=l*u,x=l*f,A=i.x,L=i.y,P=i.z;return r[0]=(1-(v+p))*A,r[1]=(d+x)*A,r[2]=(m-y)*A,r[3]=0,r[4]=(d-x)*L,r[5]=(1-(h+p))*L,r[6]=(g+_)*L,r[7]=0,r[8]=(m+y)*P,r[9]=(g-_)*P,r[10]=(1-(h+v))*P,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const a=this.determinant();if(a===0)return i.set(1,1,1),e.identity(),this;let s=Ci.set(r[0],r[1],r[2]).length();const o=Ci.set(r[4],r[5],r[6]).length(),l=Ci.set(r[8],r[9],r[10]).length();a<0&&(s=-s),on.copy(this);const c=1/s,u=1/o,f=1/l;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=f,on.elements[9]*=f,on.elements[10]*=f,e.setFromRotationMatrix(on),i.x=s,i.y=o,i.z=l,this}makePerspective(t,e,i,r,a,s,o=xn,l=!1){const c=this.elements,u=2*a/(e-t),f=2*a/(i-r),h=(e+t)/(e-t),d=(i+r)/(i-r);let m,v;if(l)m=a/(s-a),v=s*a/(s-a);else if(o===xn)m=-(s+a)/(s-a),v=-2*s*a/(s-a);else if(o===Cr)m=-s/(s-a),v=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,a,s,o=xn,l=!1){const c=this.elements,u=2/(e-t),f=2/(i-r),h=-(e+t)/(e-t),d=-(i+r)/(i-r);let m,v;if(l)m=1/(s-a),v=s/(s-a);else if(o===xn)m=-2/(s-a),v=-(s+a)/(s-a);else if(o===Cr)m=-1/(s-a),v=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ci=new j,on=new me,yp=new j(0,0,0),Sp=new j(1,1,1),Kn=new j,Wr=new j,Ke=new j,Gl=new me,Wl=new oi;class En{constructor(t=0,e=0,i=0,r=En.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-te(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-te(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Gl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wl.setFromEuler(this),this.setFromQuaternion(Wl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class wd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Mp=0;const Xl=new j,Pi=new oi,Dn=new me,Xr=new j,ur=new j,Ep=new j,bp=new oi,ql=new j(1,0,0),Yl=new j(0,1,0),jl=new j(0,0,1),Zl={type:"added"},Tp={type:"removed"},Ri={type:"childadded",child:null},es={type:"childremoved",child:null};class Fe extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new j,e=new En,i=new oi,r=new j(1,1,1);function a(){i.setFromEuler(e,!1)}function s(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new me},normalMatrix:{value:new Zt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.premultiply(Pi),this}rotateX(t){return this.rotateOnAxis(ql,t)}rotateY(t){return this.rotateOnAxis(Yl,t)}rotateZ(t){return this.rotateOnAxis(jl,t)}translateOnAxis(t,e){return Xl.copy(t).applyQuaternion(this.quaternion),this.position.add(Xl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ql,t)}translateY(t){return this.translateOnAxis(Yl,t)}translateZ(t){return this.translateOnAxis(jl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Xr.copy(t):Xr.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(ur,Xr,this.up):Dn.lookAt(Xr,ur,this.up),this.quaternion.setFromRotationMatrix(Dn),r&&(Dn.extractRotation(r.matrixWorld),Pi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zl),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null):ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tp),es.child=t,this.dispatchEvent(es),es.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zl),Ri.child=t,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,t,Ep),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,bp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,r=t.z,a=this.matrix.elements;a[12]+=e-a[0]*e-a[4]*i-a[8]*r,a[13]+=i-a[1]*e-a[5]*i-a[9]*r,a[14]+=r-a[2]*e-a[6]*i-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];a(t.shapes,f)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));r.material=o}else r.material=a(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(t.animations,l))}}if(e){const o=s(t.geometries),l=s(t.materials),c=s(t.textures),u=s(t.images),f=s(t.shapes),h=s(t.skeletons),d=s(t.animations),m=s(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=r,i;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Fe.DEFAULT_UP=new j(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Vi extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wp={type:"move"};class ns{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){s=!0;for(const v of t.hand.values()){const g=e.getJointPose(v,i),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&h>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wp)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Vi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Ad={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},qr={h:0,s:0,l:0};function is(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Kt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,ie.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=ie.workingColorSpace){if(t=hp(t,1),e=te(e,0,1),i=te(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,s=2*i-a;this.r=is(s,a,t+1/3),this.g=is(s,a,t),this.b=is(s,a,t-1/3)}return ie.colorSpaceToWorking(this,r),this}setStyle(t,e=$e){function i(a){a!==void 0&&parseFloat(a)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(a,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){const i=Ad[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}copyLinearToSRGB(t){return this.r=qi(t.r),this.g=qi(t.g),this.b=qi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return ie.workingToColorSpace(ke.copy(this),t),Math.round(te(ke.r*255,0,255))*65536+Math.round(te(ke.g*255,0,255))*256+Math.round(te(ke.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(ke.copy(this),e);const i=ke.r,r=ke.g,a=ke.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const f=s-o;switch(c=u<=.5?f/(s+o):f/(2-s-o),s){case i:l=(r-a)/f+(r<a?6:0);break;case r:l=(a-i)/f+2;break;case a:l=(i-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=$e){ie.workingToColorSpace(ke.copy(this),t);const e=ke.r,i=ke.g,r=ke.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(qr);const i=Ka(Jn.h,qr.h,e),r=Ka(Jn.s,qr.s,e),a=Ka(Jn.l,qr.l,e);return this.setHSL(i,r,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*r,this.g=a[1]*e+a[4]*i+a[7]*r,this.b=a[2]*e+a[5]*i+a[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new Kt;Kt.NAMES=Ad;class Ap extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ln=new j,Cn=new j,rs=new j,Pn=new j,Li=new j,Ii=new j,Kl=new j,as=new j,ss=new j,os=new j,ls=new _e,cs=new _e,ds=new _e;class un{constructor(t=new j,e=new j,i=new j){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),ln.subVectors(t,e),r.cross(ln);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(t,e,i,r,a){ln.subVectors(r,e),Cn.subVectors(i,e),rs.subVectors(t,e);const s=ln.dot(ln),o=ln.dot(Cn),l=ln.dot(rs),c=Cn.dot(Cn),u=Cn.dot(rs),f=s*c-o*o;if(f===0)return a.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,m=(s*u-o*l)*h;return a.set(1-d-m,m,d)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(t,e,i,r,a,s,o,l){return this.getBarycoord(t,e,i,r,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Pn.x),l.addScaledVector(s,Pn.y),l.addScaledVector(o,Pn.z),l)}static getInterpolatedAttribute(t,e,i,r,a,s){return ls.setScalar(0),cs.setScalar(0),ds.setScalar(0),ls.fromBufferAttribute(t,e),cs.fromBufferAttribute(t,i),ds.fromBufferAttribute(t,r),s.setScalar(0),s.addScaledVector(ls,a.x),s.addScaledVector(cs,a.y),s.addScaledVector(ds,a.z),s}static isFrontFacing(t,e,i,r){return ln.subVectors(i,e),Cn.subVectors(t,e),ln.cross(Cn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),ln.cross(Cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,a){return un.getInterpolation(t,this.a,this.b,this.c,e,i,r,a)}containsPoint(t){return un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,a=this.c;let s,o;Li.subVectors(r,i),Ii.subVectors(a,i),as.subVectors(t,i);const l=Li.dot(as),c=Ii.dot(as);if(l<=0&&c<=0)return e.copy(i);ss.subVectors(t,r);const u=Li.dot(ss),f=Ii.dot(ss);if(u>=0&&f<=u)return e.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),e.copy(i).addScaledVector(Li,s);os.subVectors(t,a);const d=Li.dot(os),m=Ii.dot(os);if(m>=0&&d<=m)return e.copy(a);const v=d*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(i).addScaledVector(Ii,o);const g=u*m-d*f;if(g<=0&&f-u>=0&&d-m>=0)return Kl.subVectors(a,r),o=(f-u)/(f-u+(d-m)),e.copy(r).addScaledVector(Kl,o);const p=1/(g+v+h);return s=v*p,o=h*p,e.copy(i).addScaledVector(Li,s).addScaledVector(Ii,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ar{constructor(t=new j(1/0,1/0,1/0),e=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)t.isMesh===!0?t.getVertexPosition(s,cn):cn.fromBufferAttribute(a,s),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yr.copy(i.boundingBox)),Yr.applyMatrix4(t.matrixWorld),this.union(Yr)}const r=t.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hr),jr.subVectors(this.max,hr),Ui.subVectors(t.a,hr),Bi.subVectors(t.b,hr),Fi.subVectors(t.c,hr),$n.subVectors(Bi,Ui),Qn.subVectors(Fi,Bi),di.subVectors(Ui,Fi);let e=[0,-$n.z,$n.y,0,-Qn.z,Qn.y,0,-di.z,di.y,$n.z,0,-$n.x,Qn.z,0,-Qn.x,di.z,0,-di.x,-$n.y,$n.x,0,-Qn.y,Qn.x,0,-di.y,di.x,0];return!us(e,Ui,Bi,Fi,jr)||(e=[1,0,0,0,1,0,0,0,1],!us(e,Ui,Bi,Fi,jr))?!1:(Zr.crossVectors($n,Qn),e=[Zr.x,Zr.y,Zr.z],us(e,Ui,Bi,Fi,jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Rn=[new j,new j,new j,new j,new j,new j,new j,new j],cn=new j,Yr=new ar,Ui=new j,Bi=new j,Fi=new j,$n=new j,Qn=new j,di=new j,hr=new j,jr=new j,Zr=new j,ui=new j;function us(n,t,e,i,r){for(let a=0,s=n.length-3;a<=s;a+=3){ui.fromArray(n,a);const o=r.x*Math.abs(ui.x)+r.y*Math.abs(ui.y)+r.z*Math.abs(ui.z),l=t.dot(ui),c=e.dot(ui),u=i.dot(ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Me=new j,Kr=new Lt;let Dp=0;class rn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Fl,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Kr.fromBufferAttribute(this,e),Kr.applyMatrix3(t),this.setXY(e,Kr.x,Kr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=dr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Xe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=dr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=dr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=dr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=dr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),i=Xe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),i=Xe(i,this.array),r=Xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,a){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),i=Xe(i,this.array),r=Xe(r,this.array),a=Xe(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fl&&(t.usage=this.usage),t}}class Dd extends rn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Cd extends rn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class we extends rn{constructor(t,e,i){super(new Float32Array(t),e,i)}}const Cp=new ar,fr=new j,hs=new j;class Ba{constructor(t=new j,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Cp.setFromPoints(t).getCenter(i);let r=0;for(let a=0,s=t.length;a<s;a++)r=Math.max(r,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fr.subVectors(t,this.center);const e=fr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(fr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fr.copy(t.center).add(hs)),this.expandByPoint(fr.copy(t.center).sub(hs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Pp=0;const en=new me,fs=new Fe,Ni=new j,Je=new ar,pr=new ar,Pe=new j;class We extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lp(t)?Cd:Dd)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Zt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,i){return en.makeTranslation(t,e,i),this.applyMatrix4(en),this}scale(t,e,i){return en.makeScale(t,e,i),this.applyMatrix4(en),this}lookAt(t){return fs.lookAt(t),fs.updateMatrix(),this.applyMatrix4(fs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,a=t.length;r<a;r++){const s=t[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new we(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const a=t[r];e.setXYZ(r,a.x,a.y,a.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ar);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const a=e[i];Je.setFromBufferAttribute(a),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ba);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){const i=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let a=0,s=e.length;a<s;a++){const o=e[a];pr.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(Je.min,pr.min),Je.expandByPoint(Pe),Pe.addVectors(Je.max,pr.max),Je.expandByPoint(Pe)):(Je.expandByPoint(pr.min),Je.expandByPoint(pr.max))}Je.getCenter(i);let r=0;for(let a=0,s=t.count;a<s;a++)Pe.fromBufferAttribute(t,a),r=Math.max(r,i.distanceToSquared(Pe));if(e)for(let a=0,s=e.length;a<s;a++){const o=e[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Pe.fromBufferAttribute(o,c),l&&(Ni.fromBufferAttribute(t,c),Pe.add(Ni)),r=Math.max(r,i.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let M=0;M<i.count;M++)o[M]=new j,l[M]=new j;const c=new j,u=new j,f=new j,h=new Lt,d=new Lt,m=new Lt,v=new j,g=new j;function p(M,w,H){c.fromBufferAttribute(i,M),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,H),h.fromBufferAttribute(a,M),d.fromBufferAttribute(a,w),m.fromBufferAttribute(a,H),u.sub(c),f.sub(c),d.sub(h),m.sub(h);const F=1/(d.x*m.y-m.x*d.y);isFinite(F)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(F),g.copy(f).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(F),o[M].add(v),o[w].add(v),o[H].add(v),l[M].add(g),l[w].add(g),l[H].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let M=0,w=_.length;M<w;++M){const H=_[M],F=H.start,D=H.count;for(let B=F,S=F+D;B<S;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const y=new j,x=new j,A=new j,L=new j;function P(M){A.fromBufferAttribute(r,M),L.copy(A);const w=o[M];y.copy(w),y.sub(A.multiplyScalar(A.dot(w))).normalize(),x.crossVectors(L,w);const F=x.dot(l[M])<0?-1:1;s.setXYZW(M,y.x,y.y,y.z,F)}for(let M=0,w=_.length;M<w;++M){const H=_[M],F=H.start,D=H.count;for(let B=F,S=F+D;B<S;B+=3)P(t.getX(B+0)),P(t.getX(B+1)),P(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new j,a=new j,s=new j,o=new j,l=new j,c=new j,u=new j,f=new j;if(t)for(let h=0,d=t.count;h<d;h+=3){const m=t.getX(h+0),v=t.getX(h+1),g=t.getX(h+2);r.fromBufferAttribute(e,m),a.fromBufferAttribute(e,v),s.fromBufferAttribute(e,g),u.subVectors(s,a),f.subVectors(r,a),u.cross(f),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)r.fromBufferAttribute(e,h+0),a.fromBufferAttribute(e,h+1),s.fromBufferAttribute(e,h+2),u.subVectors(s,a),f.subVectors(r,a),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,m=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*u;for(let p=0;p<u;p++)h[m++]=c[d++]}return new rn(h,u,f)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new We,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,i);e.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,i);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,a=!0)}a&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const a=t.morphAttributes;for(const c in a){const u=[],f=a[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let c=0,u=s.length;c<u;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Rp=0;class sr extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=Xi,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Is,this.blendDst=Us,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(i.blending=this.blending),this.side!==si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Is&&(i.blendSrc=this.blendSrc),this.blendDst!==Us&&(i.blendDst=this.blendDst),this.blendEquation!==gi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(e){const a=r(t.textures),s=r(t.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ln=new j,ps=new j,Jr=new j,ti=new j,ms=new j,$r=new j,gs=new j;class Ko{constructor(t=new j,e=new j(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){ps.copy(t).add(e).multiplyScalar(.5),Jr.copy(e).sub(t).normalize(),ti.copy(this.origin).sub(ps);const a=t.distanceTo(e)*.5,s=-this.direction.dot(Jr),o=ti.dot(this.direction),l=-ti.dot(Jr),c=ti.lengthSq(),u=Math.abs(1-s*s);let f,h,d,m;if(u>0)if(f=s*l-o,h=s*o-l,m=a*u,f>=0)if(h>=-m)if(h<=m){const v=1/u;f*=v,h*=v,d=f*(f+s*h+2*o)+h*(s*f+h+2*l)+c}else h=a,f=Math.max(0,-(s*h+o)),d=-f*f+h*(h+2*l)+c;else h=-a,f=Math.max(0,-(s*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-m?(f=Math.max(0,-(-s*a+o)),h=f>0?-a:Math.min(Math.max(-a,-l),a),d=-f*f+h*(h+2*l)+c):h<=m?(f=0,h=Math.min(Math.max(-a,-l),a),d=h*(h+2*l)+c):(f=Math.max(0,-(s*a+o)),h=f>0?a:Math.min(Math.max(-a,-l),a),d=-f*f+h*(h+2*l)+c);else h=s>0?-a:a,f=Math.max(0,-(s*h+o)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ps).addScaledVector(Jr,h),d}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);const i=Ln.dot(this.direction),r=Ln.dot(Ln)-i*i,a=t.radius*t.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,a,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),u>=0?(a=(t.min.y-h.y)*u,s=(t.max.y-h.y)*u):(a=(t.max.y-h.y)*u,s=(t.min.y-h.y)*u),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,i,r,a){ms.subVectors(e,t),$r.subVectors(i,t),gs.crossVectors(ms,$r);let s=this.direction.dot(gs),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;ti.subVectors(this.origin,t);const l=o*this.direction.dot($r.crossVectors(ti,$r));if(l<0)return null;const c=o*this.direction.dot(ms.cross(ti));if(c<0||l+c>s)return null;const u=-o*ti.dot(gs);return u<0?null:this.at(u/s,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fa extends sr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Jl=new me,hi=new Ko,Qr=new Ba,$l=new j,ta=new j,ea=new j,na=new j,vs=new j,ia=new j,Ql=new j,ra=new j;class Ee extends Fe{constructor(t=new We,e=new Fa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(a&&o){ia.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=o[l],f=a[l];u!==0&&(vs.fromBufferAttribute(f,t),s?ia.addScaledVector(vs,u):ia.addScaledVector(vs.sub(e),u))}e.add(ia)}return e}raycast(t,e){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qr.copy(i.boundingSphere),Qr.applyMatrix4(a),hi.copy(t.ray).recast(t.near),!(Qr.containsPoint(hi.origin)===!1&&(hi.intersectSphere(Qr,$l)===null||hi.origin.distanceToSquared($l)>(t.far-t.near)**2))&&(Jl.copy(a).invert(),hi.copy(t.ray).applyMatrix4(Jl),!(i.boundingBox!==null&&hi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,hi)))}_computeIntersections(t,e,i){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,f=a.attributes.normal,h=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(s))for(let m=0,v=h.length;m<v;m++){const g=h[m],p=s[g.materialIndex],_=Math.max(g.start,d.start),y=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let x=_,A=y;x<A;x+=3){const L=o.getX(x),P=o.getX(x+1),M=o.getX(x+2);r=aa(this,p,t,i,c,u,f,L,P,M),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const m=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){const _=o.getX(g),y=o.getX(g+1),x=o.getX(g+2);r=aa(this,s,t,i,c,u,f,_,y,x),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,v=h.length;m<v;m++){const g=h[m],p=s[g.materialIndex],_=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let x=_,A=y;x<A;x+=3){const L=x,P=x+1,M=x+2;r=aa(this,p,t,i,c,u,f,L,P,M),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const m=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){const _=g,y=g+1,x=g+2;r=aa(this,s,t,i,c,u,f,_,y,x),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}}function Lp(n,t,e,i,r,a,s,o){let l;if(t.side===je?l=i.intersectTriangle(s,a,r,!0,o):l=i.intersectTriangle(r,a,s,t.side===si,o),l===null)return null;ra.copy(o),ra.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ra);return c<e.near||c>e.far?null:{distance:c,point:ra.clone(),object:n}}function aa(n,t,e,i,r,a,s,o,l,c){n.getVertexPosition(o,ta),n.getVertexPosition(l,ea),n.getVertexPosition(c,na);const u=Lp(n,t,e,i,ta,ea,na,Ql);if(u){const f=new j;un.getBarycoord(Ql,ta,ea,na,f),r&&(u.uv=un.getInterpolatedAttribute(r,o,l,c,f,new Lt)),a&&(u.uv1=un.getInterpolatedAttribute(a,o,l,c,f,new Lt)),s&&(u.normal=un.getInterpolatedAttribute(s,o,l,c,f,new j),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new j,materialIndex:0};un.getNormal(ta,ea,na,h.normal),u.face=h,u.barycoord=f}return u}class Ip extends Ge{constructor(t=null,e=1,i=1,r,a,s,o,l,c=Be,u=Be,f,h){super(null,s,o,l,c,u,r,a,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _s=new j,Up=new j,Bp=new Zt;class ii{constructor(t=new j(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=_s.subVectors(i,e).cross(Up.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(_s),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Bp.getNormalMatrix(t),r=this.coplanarPoint(_s).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new Ba,Fp=new Lt(.5,.5),sa=new j;class Jo{constructor(t=new ii,e=new ii,i=new ii,r=new ii,a=new ii,s=new ii){this.planes=[t,e,i,r,a,s]}set(t,e,i,r,a,s){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=xn,i=!1){const r=this.planes,a=t.elements,s=a[0],o=a[1],l=a[2],c=a[3],u=a[4],f=a[5],h=a[6],d=a[7],m=a[8],v=a[9],g=a[10],p=a[11],_=a[12],y=a[13],x=a[14],A=a[15];if(r[0].setComponents(c-s,d-u,p-m,A-_).normalize(),r[1].setComponents(c+s,d+u,p+m,A+_).normalize(),r[2].setComponents(c+o,d+f,p+v,A+y).normalize(),r[3].setComponents(c-o,d-f,p-v,A-y).normalize(),i)r[4].setComponents(l,h,g,x).normalize(),r[5].setComponents(c-l,d-h,p-g,A-x).normalize();else if(r[4].setComponents(c-l,d-h,p-g,A-x).normalize(),e===xn)r[5].setComponents(c+l,d+h,p+g,A+x).normalize();else if(e===Cr)r[5].setComponents(l,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(t){fi.center.set(0,0,0);const e=Fp.distanceTo(t.center);return fi.radius=.7071067811865476+e,fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(sa.x=r.normal.x>0?t.max.x:t.min.x,sa.y=r.normal.y>0?t.max.y:t.min.y,sa.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(sa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $o extends sr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ca=new j,Pa=new j,tc=new me,mr=new Ko,oa=new Ba,xs=new j,ec=new j;class Pd extends Fe{constructor(t=new We,e=new $o){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,a=e.count;r<a;r++)Ca.fromBufferAttribute(e,r-1),Pa.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Ca.distanceTo(Pa);t.setAttribute("lineDistance",new we(i,1))}else Gt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,a=t.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(r),oa.radius+=a,t.ray.intersectsSphere(oa)===!1)return;tc.copy(r).invert(),mr.copy(t.ray).applyMatrix4(tc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,s.start),m=Math.min(u.count,s.start+s.count);for(let v=d,g=m-1;v<g;v+=c){const p=u.getX(v),_=u.getX(v+1),y=la(this,t,mr,l,p,_,v);y&&e.push(y)}if(this.isLineLoop){const v=u.getX(m-1),g=u.getX(d),p=la(this,t,mr,l,v,g,m-1);p&&e.push(p)}}else{const d=Math.max(0,s.start),m=Math.min(h.count,s.start+s.count);for(let v=d,g=m-1;v<g;v+=c){const p=la(this,t,mr,l,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){const v=la(this,t,mr,l,m-1,d,m-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function la(n,t,e,i,r,a,s){const o=n.geometry.attributes.position;if(Ca.fromBufferAttribute(o,r),Pa.fromBufferAttribute(o,a),e.distanceSqToSegment(Ca,Pa,xs,ec)>i)return;xs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(xs);if(!(c<t.near||c>t.far))return{distance:c,point:ec.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const nc=new j,ic=new j;class Np extends Pd{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,a=e.count;r<a;r+=2)nc.fromBufferAttribute(e,r),ic.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+nc.distanceTo(ic);t.setAttribute("lineDistance",new we(i,1))}else Gt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Rd extends Ge{constructor(t=[],e=Si,i,r,a,s,o,l,c,u){super(t,e,i,r,a,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Pr extends Ge{constructor(t,e,i=Mn,r,a,s,o=Be,l=Be,c,u=Xn,f=1){if(u!==Xn&&u!==xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,r,a,s,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Zo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Op extends Pr{constructor(t,e=Mn,i=Si,r,a,s=Be,o=Be,l,c=Xn){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,i,r,a,s,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Ld extends Ge{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class qn extends We{constructor(t=1,e=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],u=[],f=[];let h=0,d=0;m("z","y","x",-1,-1,i,e,t,s,a,0),m("z","y","x",1,-1,i,e,-t,s,a,1),m("x","z","y",1,1,t,i,e,r,s,2),m("x","z","y",1,-1,t,i,-e,r,s,3),m("x","y","z",1,-1,t,e,i,r,a,4),m("x","y","z",-1,-1,t,e,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(u,3)),this.setAttribute("uv",new we(f,2));function m(v,g,p,_,y,x,A,L,P,M,w){const H=x/P,F=A/M,D=x/2,B=A/2,S=L/2,C=P+1,N=M+1;let U=0,Q=0;const X=new j;for(let $=0;$<N;$++){const W=$*F-B;for(let V=0;V<C;V++){const pt=V*H-D;X[v]=pt*_,X[g]=W*y,X[p]=S,c.push(X.x,X.y,X.z),X[v]=0,X[g]=0,X[p]=L>0?1:-1,u.push(X.x,X.y,X.z),f.push(V/P),f.push(1-$/M),U+=1}}for(let $=0;$<M;$++)for(let W=0;W<P;W++){const V=h+W+C*$,pt=h+W+C*($+1),mt=h+(W+1)+C*($+1),ut=h+(W+1)+C*$;l.push(V,pt,ut),l.push(pt,mt,ut),Q+=6}o.addGroup(d,Q,w),d+=Q,h+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Qi extends We{constructor(t=1,e=1,i=1,r=32,a=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),a=Math.floor(a);const u=[],f=[],h=[],d=[];let m=0;const v=[],g=i/2;let p=0;_(),s===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new we(f,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(d,2));function _(){const x=new j,A=new j;let L=0;const P=(e-t)/i;for(let M=0;M<=a;M++){const w=[],H=M/a,F=H*(e-t)+t;for(let D=0;D<=r;D++){const B=D/r,S=B*l+o,C=Math.sin(S),N=Math.cos(S);A.x=F*C,A.y=-H*i+g,A.z=F*N,f.push(A.x,A.y,A.z),x.set(C,P,N).normalize(),h.push(x.x,x.y,x.z),d.push(B,1-H),w.push(m++)}v.push(w)}for(let M=0;M<r;M++)for(let w=0;w<a;w++){const H=v[w][M],F=v[w+1][M],D=v[w+1][M+1],B=v[w][M+1];(t>0||w!==0)&&(u.push(H,F,B),L+=3),(e>0||w!==a-1)&&(u.push(F,D,B),L+=3)}c.addGroup(p,L,0),p+=L}function y(x){const A=m,L=new Lt,P=new j;let M=0;const w=x===!0?t:e,H=x===!0?1:-1;for(let D=1;D<=r;D++)f.push(0,g*H,0),h.push(0,H,0),d.push(.5,.5),m++;const F=m;for(let D=0;D<=r;D++){const S=D/r*l+o,C=Math.cos(S),N=Math.sin(S);P.x=w*N,P.y=g*H,P.z=w*C,f.push(P.x,P.y,P.z),h.push(0,H,0),L.x=C*.5+.5,L.y=N*.5*H+.5,d.push(L.x,L.y),m++}for(let D=0;D<r;D++){const B=A+D,S=F+D;x===!0?u.push(S,S+1,B):u.push(S+1,S,B),M+=3}c.addGroup(p,M,x===!0?1:2),p+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Tn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Gt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),a=0;e.push(0);for(let s=1;s<=t;s++)i=this.getPoint(s/t),a+=i.distanceTo(r),e.push(a),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let r=0;const a=i.length;let s;e?s=e:s=t*i[a-1];let o=0,l=a-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-s,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===s)return r/(a-1);const u=i[r],h=i[r+1]-u,d=(s-u)/h;return(r+d)/(a-1)}getTangent(t,e){let r=t-1e-4,a=t+1e-4;r<0&&(r=0),a>1&&(a=1);const s=this.getPoint(r),o=this.getPoint(a),l=e||(s.isVector2?new Lt:new j);return l.copy(o).sub(s).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new j,r=[],a=[],s=[],o=new j,l=new me;for(let d=0;d<=t;d++){const m=d/t;r[d]=this.getTangentAt(m,new j)}a[0]=new j,s[0]=new j;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],o),s[0].crossVectors(r[0],a[0]);for(let d=1;d<=t;d++){if(a[d]=a[d-1].clone(),s[d]=s[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(te(r[d-1].dot(r[d]),-1,1));a[d].applyMatrix4(l.makeRotationAxis(o,m))}s[d].crossVectors(r[d],a[d])}if(e===!0){let d=Math.acos(te(a[0].dot(a[t]),-1,1));d/=t,r[0].dot(o.crossVectors(a[0],a[t]))>0&&(d=-d);for(let m=1;m<=t;m++)a[m].applyMatrix4(l.makeRotationAxis(r[m],d*m)),s[m].crossVectors(r[m],a[m])}return{tangents:r,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Qo extends Tn{constructor(t=0,e=0,i=1,r=1,a=0,s=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Lt){const i=e,r=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(s?a=0:a=r),this.aClockwise===!0&&!s&&(a===r?a=-r:a=a-r);const o=this.aStartAngle+t*a;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class kp extends Qo{constructor(t,e,i,r,a,s){super(t,e,i,i,r,a,s),this.isArcCurve=!0,this.type="ArcCurve"}}function tl(){let n=0,t=0,e=0,i=0;function r(a,s,o,l){n=a,t=o,e=-3*a+3*s-2*o-l,i=2*a-2*s+o+l}return{initCatmullRom:function(a,s,o,l,c){r(s,o,c*(o-a),c*(l-s))},initNonuniformCatmullRom:function(a,s,o,l,c,u,f){let h=(s-a)/c-(o-a)/(c+u)+(o-s)/u,d=(o-s)/u-(l-s)/(u+f)+(l-o)/f;h*=u,d*=u,r(s,o,h,d)},calc:function(a){const s=a*a,o=s*a;return n+t*a+e*s+i*o}}}const ca=new j,ys=new tl,Ss=new tl,Ms=new tl;class zp extends Tn{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new j){const i=e,r=this.points,a=r.length,s=(a-(this.closed?0:1))*t;let o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%a]:(ca.subVectors(r[0],r[1]).add(r[0]),c=ca);const f=r[o%a],h=r[(o+1)%a];if(this.closed||o+2<a?u=r[(o+2)%a]:(ca.subVectors(r[a-1],r[a-2]).add(r[a-1]),u=ca),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(u),d);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),ys.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,m,v,g),Ss.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,m,v,g),Ms.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,m,v,g)}else this.curveType==="catmullrom"&&(ys.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Ss.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Ms.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(ys.calc(l),Ss.calc(l),Ms.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new j().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function rc(n,t,e,i,r){const a=(i-t)*.5,s=(r-e)*.5,o=n*n,l=n*o;return(2*e-2*i+a+s)*l+(-3*e+3*i-2*a-s)*o+a*n+e}function Hp(n,t){const e=1-n;return e*e*t}function Vp(n,t){return 2*(1-n)*n*t}function Gp(n,t){return n*n*t}function Er(n,t,e,i){return Hp(n,t)+Vp(n,e)+Gp(n,i)}function Wp(n,t){const e=1-n;return e*e*e*t}function Xp(n,t){const e=1-n;return 3*e*e*n*t}function qp(n,t){return 3*(1-n)*n*n*t}function Yp(n,t){return n*n*n*t}function br(n,t,e,i,r){return Wp(n,t)+Xp(n,e)+qp(n,i)+Yp(n,r)}class Id extends Tn{constructor(t=new Lt,e=new Lt,i=new Lt,r=new Lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new Lt){const i=e,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(br(t,r.x,a.x,s.x,o.x),br(t,r.y,a.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class jp extends Tn{constructor(t=new j,e=new j,i=new j,r=new j){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new j){const i=e,r=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(br(t,r.x,a.x,s.x,o.x),br(t,r.y,a.y,s.y,o.y),br(t,r.z,a.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ud extends Tn{constructor(t=new Lt,e=new Lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Lt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zp extends Tn{constructor(t=new j,e=new j){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new j){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new j){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bd extends Tn{constructor(t=new Lt,e=new Lt,i=new Lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Lt){const i=e,r=this.v0,a=this.v1,s=this.v2;return i.set(Er(t,r.x,a.x,s.x),Er(t,r.y,a.y,s.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kp extends Tn{constructor(t=new j,e=new j,i=new j){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new j){const i=e,r=this.v0,a=this.v1,s=this.v2;return i.set(Er(t,r.x,a.x,s.x),Er(t,r.y,a.y,s.y),Er(t,r.z,a.z,s.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fd extends Tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Lt){const i=e,r=this.points,a=(r.length-1)*t,s=Math.floor(a),o=a-s,l=r[s===0?s:s-1],c=r[s],u=r[s>r.length-2?r.length-1:s+1],f=r[s>r.length-3?r.length-1:s+2];return i.set(rc(o,l.x,c.x,u.x,f.x),rc(o,l.y,c.y,u.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new Lt().fromArray(r))}return this}}var ac=Object.freeze({__proto__:null,ArcCurve:kp,CatmullRomCurve3:zp,CubicBezierCurve:Id,CubicBezierCurve3:jp,EllipseCurve:Qo,LineCurve:Ud,LineCurve3:Zp,QuadraticBezierCurve:Bd,QuadraticBezierCurve3:Kp,SplineCurve:Fd});class Jp extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ac[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),r=this.getCurveLengths();let a=0;for(;a<r.length;){if(r[a]>=i){const s=r[a]-i,o=this.curves[a],l=o.getLength(),c=l===0?0:1-s/l;return o.getPointAt(c,e)}a++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,r=this.curves.length;i<r;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let r=0,a=this.curves;r<a.length;r++){const s=a[r],o=s.isEllipseCurve?t*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?t*s.points.length:t,l=s.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(new ac[r.type]().fromJSON(r))}return this}}class sc extends Jp{constructor(t){super(),this.type="Path",this.currentPoint=new Lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Ud(this.currentPoint.clone(),new Lt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,r){const a=new Bd(this.currentPoint.clone(),new Lt(t,e),new Lt(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(t,e,i,r,a,s){const o=new Id(this.currentPoint.clone(),new Lt(t,e),new Lt(i,r),new Lt(a,s));return this.curves.push(o),this.currentPoint.set(a,s),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Fd(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,r,a,s){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,r,a,s),this}absarc(t,e,i,r,a,s){return this.absellipse(t,e,i,i,r,a,s),this}ellipse(t,e,i,r,a,s,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,r,a,s,o,l),this}absellipse(t,e,i,r,a,s,o,l){const c=new Qo(t,e,i,r,a,s,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Nd extends sc{constructor(t){super(t),this.uuid=rr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,r=this.holes.length;i<r;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(new sc().fromJSON(r))}return this}}function $p(n,t,e=2){const i=t&&t.length,r=i?t[0]*e:n.length;let a=Od(n,0,r,e,!0);const s=[];if(!a||a.next===a.prev)return s;let o,l,c;if(i&&(a=im(n,t,a,e)),n.length>80*e){o=n[0],l=n[1];let u=o,f=l;for(let h=e;h<r;h+=e){const d=n[h],m=n[h+1];d<o&&(o=d),m<l&&(l=m),d>u&&(u=d),m>f&&(f=m)}c=Math.max(u-o,f-l),c=c!==0?32767/c:0}return Rr(a,s,e,o,l,c,0),s}function Od(n,t,e,i,r){let a;if(r===pm(n,t,e,i)>0)for(let s=t;s<e;s+=i)a=oc(s/i|0,n[s],n[s+1],a);else for(let s=e-i;s>=t;s-=i)a=oc(s/i|0,n[s],n[s+1],a);return a&&tr(a,a.next)&&(Ir(a),a=a.next),a}function Mi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(tr(e,e.next)||ge(e.prev,e,e.next)===0)){if(Ir(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Rr(n,t,e,i,r,a,s){if(!n)return;!s&&a&&lm(n,i,r,a);let o=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(a?tm(n,i,r,a):Qp(n)){t.push(l.i,n.i,c.i),Ir(n),n=c.next,o=c.next;continue}if(n=c,n===o){s?s===1?(n=em(Mi(n),t),Rr(n,t,e,i,r,a,2)):s===2&&nm(n,t,e,i,r,a):Rr(Mi(n),t,e,i,r,a,1);break}}}function Qp(n){const t=n.prev,e=n,i=n.next;if(ge(t,e,i)>=0)return!1;const r=t.x,a=e.x,s=i.x,o=t.y,l=e.y,c=i.y,u=Math.min(r,a,s),f=Math.min(o,l,c),h=Math.max(r,a,s),d=Math.max(o,l,c);let m=i.next;for(;m!==t;){if(m.x>=u&&m.x<=h&&m.y>=f&&m.y<=d&&xr(r,o,a,l,s,c,m.x,m.y)&&ge(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function tm(n,t,e,i){const r=n.prev,a=n,s=n.next;if(ge(r,a,s)>=0)return!1;const o=r.x,l=a.x,c=s.x,u=r.y,f=a.y,h=s.y,d=Math.min(o,l,c),m=Math.min(u,f,h),v=Math.max(o,l,c),g=Math.max(u,f,h),p=bo(d,m,t,e,i),_=bo(v,g,t,e,i);let y=n.prevZ,x=n.nextZ;for(;y&&y.z>=p&&x&&x.z<=_;){if(y.x>=d&&y.x<=v&&y.y>=m&&y.y<=g&&y!==r&&y!==s&&xr(o,u,l,f,c,h,y.x,y.y)&&ge(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=d&&x.x<=v&&x.y>=m&&x.y<=g&&x!==r&&x!==s&&xr(o,u,l,f,c,h,x.x,x.y)&&ge(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=v&&y.y>=m&&y.y<=g&&y!==r&&y!==s&&xr(o,u,l,f,c,h,y.x,y.y)&&ge(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=_;){if(x.x>=d&&x.x<=v&&x.y>=m&&x.y<=g&&x!==r&&x!==s&&xr(o,u,l,f,c,h,x.x,x.y)&&ge(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function em(n,t){let e=n;do{const i=e.prev,r=e.next.next;!tr(i,r)&&zd(i,e,e.next,r)&&Lr(i,r)&&Lr(r,i)&&(t.push(i.i,e.i,r.i),Ir(e),Ir(e.next),e=n=r),e=e.next}while(e!==n);return Mi(e)}function nm(n,t,e,i,r,a){let s=n;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&um(s,o)){let l=Hd(s,o);s=Mi(s,s.next),l=Mi(l,l.next),Rr(s,t,e,i,r,a,0),Rr(l,t,e,i,r,a,0);return}o=o.next}s=s.next}while(s!==n)}function im(n,t,e,i){const r=[];for(let a=0,s=t.length;a<s;a++){const o=t[a]*i,l=a<s-1?t[a+1]*i:n.length,c=Od(n,o,l,i,!1);c===c.next&&(c.steiner=!0),r.push(dm(c))}r.sort(rm);for(let a=0;a<r.length;a++)e=am(r[a],e);return e}function rm(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=i-r}return e}function am(n,t){const e=sm(n,t);if(!e)return t;const i=Hd(e,n);return Mi(i,i.next),Mi(e,e.next)}function sm(n,t){let e=t;const i=n.x,r=n.y;let a=-1/0,s;if(tr(n,e))return e;do{if(tr(n,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=i&&f>a&&(a=f,s=e.x<e.next.x?e:e.next,f===i))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,c=s.y;let u=1/0;e=s;do{if(i>=e.x&&e.x>=l&&i!==e.x&&kd(r<c?i:a,r,l,c,r<c?a:i,r,e.x,e.y)){const f=Math.abs(r-e.y)/(i-e.x);Lr(e,n)&&(f<u||f===u&&(e.x>s.x||e.x===s.x&&om(s,e)))&&(s=e,u=f)}e=e.next}while(e!==o);return s}function om(n,t){return ge(n.prev,n,t.prev)<0&&ge(t.next,n,n.next)<0}function lm(n,t,e,i){let r=n;do r.z===0&&(r.z=bo(r.x,r.y,t,e,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,cm(r)}function cm(n){let t,e=1;do{let i=n,r;n=null;let a=null;for(t=0;i;){t++;let s=i,o=0;for(let c=0;c<e&&(o++,s=s.nextZ,!!s);c++);let l=e;for(;o>0||l>0&&s;)o!==0&&(l===0||!s||i.z<=s.z)?(r=i,i=i.nextZ,o--):(r=s,s=s.nextZ,l--),a?a.nextZ=r:n=r,r.prevZ=a,a=r;i=s}a.nextZ=null,e*=2}while(t>1);return n}function bo(n,t,e,i,r){return n=(n-e)*r|0,t=(t-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function dm(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function kd(n,t,e,i,r,a,s,o){return(r-s)*(t-o)>=(n-s)*(a-o)&&(n-s)*(i-o)>=(e-s)*(t-o)&&(e-s)*(a-o)>=(r-s)*(i-o)}function xr(n,t,e,i,r,a,s,o){return!(n===s&&t===o)&&kd(n,t,e,i,r,a,s,o)}function um(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!hm(n,t)&&(Lr(n,t)&&Lr(t,n)&&fm(n,t)&&(ge(n.prev,n,t.prev)||ge(n,t.prev,t))||tr(n,t)&&ge(n.prev,n,n.next)>0&&ge(t.prev,t,t.next)>0)}function ge(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function tr(n,t){return n.x===t.x&&n.y===t.y}function zd(n,t,e,i){const r=ua(ge(n,t,e)),a=ua(ge(n,t,i)),s=ua(ge(e,i,n)),o=ua(ge(e,i,t));return!!(r!==a&&s!==o||r===0&&da(n,e,t)||a===0&&da(n,i,t)||s===0&&da(e,n,i)||o===0&&da(e,t,i))}function da(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function ua(n){return n>0?1:n<0?-1:0}function hm(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&zd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Lr(n,t){return ge(n.prev,n,n.next)<0?ge(n,t,n.next)>=0&&ge(n,n.prev,t)>=0:ge(n,t,n.prev)<0||ge(n,n.next,t)<0}function fm(n,t){let e=n,i=!1;const r=(n.x+t.x)/2,a=(n.y+t.y)/2;do e.y>a!=e.next.y>a&&e.next.y!==e.y&&r<(e.next.x-e.x)*(a-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Hd(n,t){const e=To(n.i,n.x,n.y),i=To(t.i,t.x,t.y),r=n.next,a=t.prev;return n.next=t,t.prev=n,e.next=r,r.prev=e,i.next=e,e.prev=i,a.next=i,i.prev=a,i}function oc(n,t,e,i){const r=To(n,t,e);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ir(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function To(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function pm(n,t,e,i){let r=0;for(let a=t,s=e-i;a<e;a+=i)r+=(n[s]-n[a])*(n[a+1]+n[s+1]),s=a;return r}class mm{static triangulate(t,e,i=2){return $p(t,e,i)}}class Tr{static area(t){const e=t.length;let i=0;for(let r=e-1,a=0;a<e;r=a++)i+=t[r].x*t[a].y-t[a].x*t[r].y;return i*.5}static isClockWise(t){return Tr.area(t)<0}static triangulateShape(t,e){const i=[],r=[],a=[];lc(t),cc(i,t);let s=t.length;e.forEach(lc);for(let l=0;l<e.length;l++)r.push(s),s+=e[l].length,cc(i,e[l]);const o=mm.triangulate(i,r);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}}function lc(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function cc(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Na extends We{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const a=t/2,s=e/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=t/o,h=e/l,d=[],m=[],v=[],g=[];for(let p=0;p<u;p++){const _=p*h-s;for(let y=0;y<c;y++){const x=y*f-a;m.push(x,-_,0),v.push(0,0,1),g.push(y/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){const y=_+c*p,x=_+c*(p+1),A=_+1+c*(p+1),L=_+1+c*p;d.push(y,x,L),d.push(x,A,L)}this.setIndex(d),this.setAttribute("position",new we(m,3)),this.setAttribute("normal",new we(v,3)),this.setAttribute("uv",new we(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Na(t.width,t.height,t.widthSegments,t.heightSegments)}}class el extends We{constructor(t=new Nd([new Lt(0,.5),new Lt(-.5,-.5),new Lt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],r=[],a=[],s=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new we(r,3)),this.setAttribute("normal",new we(a,3)),this.setAttribute("uv",new we(s,2));function c(u){const f=r.length/3,h=u.extractPoints(e);let d=h.shape;const m=h.holes;Tr.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){const _=m[g];Tr.isClockWise(_)===!0&&(m[g]=_.reverse())}const v=Tr.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){const _=m[g];d=d.concat(_)}for(let g=0,p=d.length;g<p;g++){const _=d[g];r.push(_.x,_.y,0),a.push(0,0,1),s.push(_.x,_.y)}for(let g=0,p=v.length;g<p;g++){const _=v[g],y=_[0]+f,x=_[1]+f,A=_[2]+f;i.push(y,x,A),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return gm(e,t)}static fromJSON(t,e){const i=[];for(let r=0,a=t.shapes.length;r<a;r++){const s=e[t.shapes[r]];i.push(s)}return new el(i,t.curveSegments)}}function gm(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const r=n[e];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t}function er(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function He(n){const t={};for(let e=0;e<n.length;e++){const i=er(n[e]);for(const r in i)t[r]=i[r]}return t}function vm(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Vd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const _m={clone:er,merge:He};var xm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ym=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends sr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xm,this.fragmentShader=ym,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=er(t.uniforms),this.uniformsGroups=vm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?e.uniforms[r]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[r]={type:"m4",value:s.toArray()}:e.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Sm extends bn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Fn extends sr{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Kt(16777215),this.specular=new Kt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ed,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=zo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Mm extends sr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Em extends sr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Gd extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const Es=new me,dc=new j,uc=new j;class bm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=Qe,this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jo,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;dc.setFromMatrixPosition(t.matrixWorld),e.position.copy(dc),uc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(uc),e.updateMatrixWorld(),Es.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Es,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Cr||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Es)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ha=new j,fa=new oi,pn=new j;class Wd extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ha,fa,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ha,fa,pn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(ha,fa,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ha,fa,pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ei=new j,hc=new Lt,fc=new Lt;class nn extends Wd{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Eo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ea*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Eo*2*Math.atan(Math.tan(Ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ei.x,ei.y).multiplyScalar(-t/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ei.x,ei.y).multiplyScalar(-t/ei.z)}getViewSize(t,e){return this.getViewBounds(t,hc,fc),e.subVectors(fc,hc)}setViewOffset(t,e,i,r,a,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ea*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,e-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class nl extends Wd{constructor(t=-1,e=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-t,s=i+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Tm extends bm{constructor(){super(new nl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pc extends Gd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new Tm}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class wm extends Gd{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Oi=-90,ki=1;class Am extends Fe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new nn(Oi,ki,t,e);r.layers=this.layers,this.add(r);const a=new nn(Oi,ki,t,e);a.layers=this.layers,this.add(a);const s=new nn(Oi,ki,t,e);s.layers=this.layers,this.add(s);const o=new nn(Oi,ki,t,e);o.layers=this.layers,this.add(o);const l=new nn(Oi,ki,t,e);l.layers=this.layers,this.add(l);const c=new nn(Oi,ki,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,a,s,o,l]=e;for(const c of e)this.remove(c);if(t===xn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Cr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,1,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,2,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Dm extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class mc{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=te(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(te(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Cm extends Np{constructor(t=10,e=10,i=4473924,r=8947848){i=new Kt(i),r=new Kt(r);const a=e/2,s=t/e,o=t/2,l=[],c=[];for(let h=0,d=0,m=-o;h<=e;h++,m+=s){l.push(-o,0,m,o,0,m),l.push(m,0,-o,m,0,o);const v=h===a?i:r;v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3}const u=new We;u.setAttribute("position",new we(l,3)),u.setAttribute("color",new we(c,3));const f=new $o({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Pm extends Ei{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Gt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function gc(n,t,e,i){const r=Rm(i);switch(e){case yd:return n*t;case Md:return n*t/r.components*r.byteLength;case Wo:return n*t/r.components*r.byteLength;case Ji:return n*t*2/r.components*r.byteLength;case Xo:return n*t*2/r.components*r.byteLength;case Sd:return n*t*3/r.components*r.byteLength;case hn:return n*t*4/r.components*r.byteLength;case qo:return n*t*4/r.components*r.byteLength;case xa:case ya:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Sa:case Ma:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Xs:case Ys:return Math.max(n,16)*Math.max(t,8)/4;case Ws:case qs:return Math.max(n,8)*Math.max(t,8)/2;case js:case Zs:case Js:case $s:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ks:case Qs:case to:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case eo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case no:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case io:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ro:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ao:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case so:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case oo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case lo:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case co:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case uo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ho:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case fo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case po:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case mo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case go:case vo:case _o:return Math.ceil(n/4)*Math.ceil(t/4)*16;case xo:case yo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case So:case Mo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Rm(n){switch(n){case Qe:case gd:return{byteLength:1,components:1};case Ar:case vd:case Wn:return{byteLength:2,components:1};case Vo:case Go:return{byteLength:2,components:4};case Mn:case Ho:case _n:return{byteLength:4,components:1};case _d:case xd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ko}}));typeof window<"u"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ko);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xd(){let n=null,t=!1,e=null,i=null;function r(a,s){e(a,s),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){n=a}}}function Lm(n){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,m)=>d.start-m.start);let h=0;for(let d=1;d<f.length;d++){const m=f[h],v=f[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++h,f[h]=v)}f.length=h+1;for(let d=0,m=f.length;d<m;d++){const v=f[d];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:a,update:s}}var Im=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Um=`#ifdef USE_ALPHAHASH
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
#endif`,Bm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Om=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,km=`#ifdef USE_AOMAP
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
#endif`,zm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hm=`#ifdef USE_BATCHING
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
#endif`,Vm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qm=`#ifdef USE_IRIDESCENCE
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
#endif`,Ym=`#ifdef USE_BUMPMAP
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
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,tg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,eg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ng=`#define PI 3.141592653589793
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
} // validated`,ig=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rg=`vec3 transformedNormal = objectNormal;
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
#endif`,ag=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,og=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cg="gl_FragColor = linearToOutputTexel( gl_FragColor );",dg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ug=`#ifdef USE_ENVMAP
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
#endif`,hg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,fg=`#ifdef USE_ENVMAP
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
#endif`,pg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mg=`#ifdef USE_ENVMAP
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
#endif`,gg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_g=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yg=`#ifdef USE_GRADIENTMAP
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
}`,Sg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bg=`uniform bool receiveShadow;
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
#endif`,Tg=`#ifdef USE_ENVMAP
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
#endif`,wg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pg=`PhysicalMaterial material;
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
#endif`,Rg=`uniform sampler2D dfgLUT;
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
}`,Lg=`
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
#endif`,Ig=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ug=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ng=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Og=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vg=`#if defined( USE_POINTS_UV )
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
#endif`,Gg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jg=`#ifdef USE_MORPHTARGETS
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
#endif`,Zg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ev=`#ifdef USE_NORMALMAP
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
#endif`,nv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,av=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ov=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vv=`float getShadowMask() {
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
}`,_v=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xv=`#ifdef USE_SKINNING
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
#endif`,yv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sv=`#ifdef USE_SKINNING
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
#endif`,Mv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ev=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wv=`#ifdef USE_TRANSMISSION
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
#endif`,Av=`#ifdef USE_TRANSMISSION
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
#endif`,Dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Iv=`uniform sampler2D t2D;
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
}`,Uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ov=`#include <common>
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
}`,kv=`#if DEPTH_PACKING == 3200
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
}`,zv=`#define DISTANCE
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
}`,Hv=`#define DISTANCE
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
}`,Vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wv=`uniform float scale;
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
}`,Xv=`uniform vec3 diffuse;
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
}`,qv=`#include <common>
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
}`,Yv=`uniform vec3 diffuse;
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
}`,jv=`#define LAMBERT
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
}`,Zv=`#define LAMBERT
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
}`,Kv=`#define MATCAP
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
}`,Jv=`#define MATCAP
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
}`,$v=`#define NORMAL
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
}`,Qv=`#define NORMAL
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
}`,t0=`#define PHONG
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
}`,e0=`#define PHONG
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
}`,n0=`#define STANDARD
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
}`,i0=`#define STANDARD
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
}`,r0=`#define TOON
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
}`,a0=`#define TOON
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
}`,s0=`uniform float size;
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
}`,o0=`uniform vec3 diffuse;
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
}`,l0=`#include <common>
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
}`,c0=`uniform vec3 color;
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
}`,d0=`uniform float rotation;
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
}`,u0=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:Im,alphahash_pars_fragment:Um,alphamap_fragment:Bm,alphamap_pars_fragment:Fm,alphatest_fragment:Nm,alphatest_pars_fragment:Om,aomap_fragment:km,aomap_pars_fragment:zm,batching_pars_vertex:Hm,batching_vertex:Vm,begin_vertex:Gm,beginnormal_vertex:Wm,bsdfs:Xm,iridescence_fragment:qm,bumpmap_pars_fragment:Ym,clipping_planes_fragment:jm,clipping_planes_pars_fragment:Zm,clipping_planes_pars_vertex:Km,clipping_planes_vertex:Jm,color_fragment:$m,color_pars_fragment:Qm,color_pars_vertex:tg,color_vertex:eg,common:ng,cube_uv_reflection_fragment:ig,defaultnormal_vertex:rg,displacementmap_pars_vertex:ag,displacementmap_vertex:sg,emissivemap_fragment:og,emissivemap_pars_fragment:lg,colorspace_fragment:cg,colorspace_pars_fragment:dg,envmap_fragment:ug,envmap_common_pars_fragment:hg,envmap_pars_fragment:fg,envmap_pars_vertex:pg,envmap_physical_pars_fragment:Tg,envmap_vertex:mg,fog_vertex:gg,fog_pars_vertex:vg,fog_fragment:_g,fog_pars_fragment:xg,gradientmap_pars_fragment:yg,lightmap_pars_fragment:Sg,lights_lambert_fragment:Mg,lights_lambert_pars_fragment:Eg,lights_pars_begin:bg,lights_toon_fragment:wg,lights_toon_pars_fragment:Ag,lights_phong_fragment:Dg,lights_phong_pars_fragment:Cg,lights_physical_fragment:Pg,lights_physical_pars_fragment:Rg,lights_fragment_begin:Lg,lights_fragment_maps:Ig,lights_fragment_end:Ug,logdepthbuf_fragment:Bg,logdepthbuf_pars_fragment:Fg,logdepthbuf_pars_vertex:Ng,logdepthbuf_vertex:Og,map_fragment:kg,map_pars_fragment:zg,map_particle_fragment:Hg,map_particle_pars_fragment:Vg,metalnessmap_fragment:Gg,metalnessmap_pars_fragment:Wg,morphinstance_vertex:Xg,morphcolor_vertex:qg,morphnormal_vertex:Yg,morphtarget_pars_vertex:jg,morphtarget_vertex:Zg,normal_fragment_begin:Kg,normal_fragment_maps:Jg,normal_pars_fragment:$g,normal_pars_vertex:Qg,normal_vertex:tv,normalmap_pars_fragment:ev,clearcoat_normal_fragment_begin:nv,clearcoat_normal_fragment_maps:iv,clearcoat_pars_fragment:rv,iridescence_pars_fragment:av,opaque_fragment:sv,packing:ov,premultiplied_alpha_fragment:lv,project_vertex:cv,dithering_fragment:dv,dithering_pars_fragment:uv,roughnessmap_fragment:hv,roughnessmap_pars_fragment:fv,shadowmap_pars_fragment:pv,shadowmap_pars_vertex:mv,shadowmap_vertex:gv,shadowmask_pars_fragment:vv,skinbase_vertex:_v,skinning_pars_vertex:xv,skinning_vertex:yv,skinnormal_vertex:Sv,specularmap_fragment:Mv,specularmap_pars_fragment:Ev,tonemapping_fragment:bv,tonemapping_pars_fragment:Tv,transmission_fragment:wv,transmission_pars_fragment:Av,uv_pars_fragment:Dv,uv_pars_vertex:Cv,uv_vertex:Pv,worldpos_vertex:Rv,background_vert:Lv,background_frag:Iv,backgroundCube_vert:Uv,backgroundCube_frag:Bv,cube_vert:Fv,cube_frag:Nv,depth_vert:Ov,depth_frag:kv,distance_vert:zv,distance_frag:Hv,equirect_vert:Vv,equirect_frag:Gv,linedashed_vert:Wv,linedashed_frag:Xv,meshbasic_vert:qv,meshbasic_frag:Yv,meshlambert_vert:jv,meshlambert_frag:Zv,meshmatcap_vert:Kv,meshmatcap_frag:Jv,meshnormal_vert:$v,meshnormal_frag:Qv,meshphong_vert:t0,meshphong_frag:e0,meshphysical_vert:n0,meshphysical_frag:i0,meshtoon_vert:r0,meshtoon_frag:a0,points_vert:s0,points_frag:o0,shadow_vert:l0,shadow_frag:c0,sprite_vert:d0,sprite_frag:u0},Tt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},vn={basic:{uniforms:He([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:He([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Kt(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:He([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:He([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:He([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:He([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:He([Tt.points,Tt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:He([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:He([Tt.common,Tt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:He([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:He([Tt.sprite,Tt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:He([Tt.common,Tt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:He([Tt.lights,Tt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};vn.physical={uniforms:He([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const pa={r:0,b:0,g:0},pi=new En,h0=new me;function f0(n,t,e,i,r,a){const s=new Kt(0);let o=r===!0?0:1,l,c,u=null,f=0,h=null;function d(_){let y=_.isScene===!0?_.background:null;if(y&&y.isTexture){const x=_.backgroundBlurriness>0;y=t.get(y,x)}return y}function m(_){let y=!1;const x=d(_);x===null?g(s,o):x&&x.isColor&&(g(x,1),y=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(_,y){const x=d(y);x&&(x.isCubeTexture||x.mapping===Ua)?(c===void 0&&(c=new Ee(new qn(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:er(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,L,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),pi.copy(y.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(h0.makeRotationFromEuler(pi)),c.material.toneMapped=ie.getTransfer(x.colorSpace)!==le,(u!==x||f!==x.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,h=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ee(new Na(2,2),new bn({name:"BackgroundMaterial",uniforms:er(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ie.getTransfer(x.colorSpace)!==le,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,h=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,y){_.getRGB(pa,Vd(n)),e.buffers.color.setClear(pa.r,pa.g,pa.b,y,a)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(_,y=1){s.set(_),o=y,g(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,g(s,o)},render:m,addToRenderList:v,dispose:p}}function p0(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let a=r,s=!1;function o(F,D,B,S,C){let N=!1;const U=f(F,S,B,D);a!==U&&(a=U,c(a.object)),N=d(F,S,B,C),N&&m(F,S,B,C),C!==null&&t.update(C,n.ELEMENT_ARRAY_BUFFER),(N||s)&&(s=!1,x(F,D,B,S),C!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(C).buffer))}function l(){return n.createVertexArray()}function c(F){return n.bindVertexArray(F)}function u(F){return n.deleteVertexArray(F)}function f(F,D,B,S){const C=S.wireframe===!0;let N=i[D.id];N===void 0&&(N={},i[D.id]=N);const U=F.isInstancedMesh===!0?F.id:0;let Q=N[U];Q===void 0&&(Q={},N[U]=Q);let X=Q[B.id];X===void 0&&(X={},Q[B.id]=X);let $=X[C];return $===void 0&&($=h(l()),X[C]=$),$}function h(F){const D=[],B=[],S=[];for(let C=0;C<e;C++)D[C]=0,B[C]=0,S[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:S,object:F,attributes:{},index:null}}function d(F,D,B,S){const C=a.attributes,N=D.attributes;let U=0;const Q=B.getAttributes();for(const X in Q)if(Q[X].location>=0){const W=C[X];let V=N[X];if(V===void 0&&(X==="instanceMatrix"&&F.instanceMatrix&&(V=F.instanceMatrix),X==="instanceColor"&&F.instanceColor&&(V=F.instanceColor)),W===void 0||W.attribute!==V||V&&W.data!==V.data)return!0;U++}return a.attributesNum!==U||a.index!==S}function m(F,D,B,S){const C={},N=D.attributes;let U=0;const Q=B.getAttributes();for(const X in Q)if(Q[X].location>=0){let W=N[X];W===void 0&&(X==="instanceMatrix"&&F.instanceMatrix&&(W=F.instanceMatrix),X==="instanceColor"&&F.instanceColor&&(W=F.instanceColor));const V={};V.attribute=W,W&&W.data&&(V.data=W.data),C[X]=V,U++}a.attributes=C,a.attributesNum=U,a.index=S}function v(){const F=a.newAttributes;for(let D=0,B=F.length;D<B;D++)F[D]=0}function g(F){p(F,0)}function p(F,D){const B=a.newAttributes,S=a.enabledAttributes,C=a.attributeDivisors;B[F]=1,S[F]===0&&(n.enableVertexAttribArray(F),S[F]=1),C[F]!==D&&(n.vertexAttribDivisor(F,D),C[F]=D)}function _(){const F=a.newAttributes,D=a.enabledAttributes;for(let B=0,S=D.length;B<S;B++)D[B]!==F[B]&&(n.disableVertexAttribArray(B),D[B]=0)}function y(F,D,B,S,C,N,U){U===!0?n.vertexAttribIPointer(F,D,B,C,N):n.vertexAttribPointer(F,D,B,S,C,N)}function x(F,D,B,S){v();const C=S.attributes,N=B.getAttributes(),U=D.defaultAttributeValues;for(const Q in N){const X=N[Q];if(X.location>=0){let $=C[Q];if($===void 0&&(Q==="instanceMatrix"&&F.instanceMatrix&&($=F.instanceMatrix),Q==="instanceColor"&&F.instanceColor&&($=F.instanceColor)),$!==void 0){const W=$.normalized,V=$.itemSize,pt=t.get($);if(pt===void 0)continue;const mt=pt.buffer,ut=pt.type,it=pt.bytesPerElement,ht=ut===n.INT||ut===n.UNSIGNED_INT||$.gpuType===Ho;if($.isInterleavedBufferAttribute){const at=$.data,yt=at.stride,Et=$.offset;if(at.isInstancedInterleavedBuffer){for(let St=0;St<X.locationSize;St++)p(X.location+St,at.meshPerAttribute);F.isInstancedMesh!==!0&&S._maxInstanceCount===void 0&&(S._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let St=0;St<X.locationSize;St++)g(X.location+St);n.bindBuffer(n.ARRAY_BUFFER,mt);for(let St=0;St<X.locationSize;St++)y(X.location+St,V/X.locationSize,ut,W,yt*it,(Et+V/X.locationSize*St)*it,ht)}else{if($.isInstancedBufferAttribute){for(let at=0;at<X.locationSize;at++)p(X.location+at,$.meshPerAttribute);F.isInstancedMesh!==!0&&S._maxInstanceCount===void 0&&(S._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let at=0;at<X.locationSize;at++)g(X.location+at);n.bindBuffer(n.ARRAY_BUFFER,mt);for(let at=0;at<X.locationSize;at++)y(X.location+at,V/X.locationSize,ut,W,V*it,V/X.locationSize*at*it,ht)}}else if(U!==void 0){const W=U[Q];if(W!==void 0)switch(W.length){case 2:n.vertexAttrib2fv(X.location,W);break;case 3:n.vertexAttrib3fv(X.location,W);break;case 4:n.vertexAttrib4fv(X.location,W);break;default:n.vertexAttrib1fv(X.location,W)}}}}_()}function A(){w();for(const F in i){const D=i[F];for(const B in D){const S=D[B];for(const C in S){const N=S[C];for(const U in N)u(N[U].object),delete N[U];delete S[C]}}delete i[F]}}function L(F){if(i[F.id]===void 0)return;const D=i[F.id];for(const B in D){const S=D[B];for(const C in S){const N=S[C];for(const U in N)u(N[U].object),delete N[U];delete S[C]}}delete i[F.id]}function P(F){for(const D in i){const B=i[D];for(const S in B){const C=B[S];if(C[F.id]===void 0)continue;const N=C[F.id];for(const U in N)u(N[U].object),delete N[U];delete C[F.id]}}}function M(F){for(const D in i){const B=i[D],S=F.isInstancedMesh===!0?F.id:0,C=B[S];if(C!==void 0){for(const N in C){const U=C[N];for(const Q in U)u(U[Q].object),delete U[Q];delete C[N]}delete B[S],Object.keys(B).length===0&&delete i[D]}}}function w(){H(),s=!0,a!==r&&(a=r,c(a.object))}function H(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:w,resetDefaultState:H,dispose:A,releaseStatesOfGeometry:L,releaseStatesOfObject:M,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:g,disableUnusedAttributes:_}}function m0(n,t,e){let i;function r(c){i=c}function a(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function s(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),e.update(u,i,f))}function o(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let m=0;m<f;m++)d+=u[m];e.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)s(c[m],u[m],h[m]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let m=0;for(let v=0;v<f;v++)m+=u[v]*h[v];e.update(m,i,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function g0(n,t,e,i){let r;function a(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(P){return!(P!==hn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const M=P===Wn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Qe&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==_n&&!M)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Gt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),L=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:x,maxSamples:A,samples:L}}function v0(n){const t=this;let e=null,i=0,r=!1,a=!1;const s=new ii,o=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const m=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,p=n.get(f);if(!r||m===null||m.length===0||a&&!g)a?u(null):c();else{const _=a?0:i,y=_*4;let x=p.clippingState||null;l.value=x,x=u(m,h,y,d);for(let A=0;A!==y;++A)x[A]=e[A];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,d,m){const v=f!==null?f.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const p=d+v*4,_=h.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,x=d;y!==v;++y,x+=4)s.copy(f[y]).applyMatrix4(_,o),s.normal.toArray(g,x),g[x+3]=s.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}const ai=4,vc=[.125,.215,.35,.446,.526,.582],vi=20,_0=256,gr=new nl,_c=new Kt;let bs=null,Ts=0,ws=0,As=!1;const x0=new j;class xc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,a={}){const{size:s=256,position:o=x0}=a;bs=this._renderer.getRenderTarget(),Ts=this._renderer.getActiveCubeFace(),ws=this._renderer.getActiveMipmapLevel(),As=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(bs,Ts,ws),this._renderer.xr.enabled=As,t.scissorTest=!1,zi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Si||t.mapping===Ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bs=this._renderer.getRenderTarget(),Ts=this._renderer.getActiveCubeFace(),ws=this._renderer.getActiveMipmapLevel(),As=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:Wn,format:hn,colorSpace:$i,depthBuffer:!1},r=yc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yc(t,e,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=y0(a)),this._blurMaterial=M0(a,t,e),this._ggxMaterial=S0(a,t,e)}return r}_compileMaterial(t){const e=new Ee(new We,t);this._renderer.compile(e,gr)}_sceneToCubeUV(t,e,i,r,a){const l=new nn(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(_c),f.toneMapping=yn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ee(new qn,new Fa({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let p=!1;const _=t.background;_?_.isColor&&(g.color.copy(_),t.background=null,p=!0):(g.color.copy(_c),p=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+u[y],a.y,a.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+u[y],a.z)):(l.up.set(0,c[y],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+u[y]));const A=this._cubeSize;zi(r,x*A,y>2?A:0,A,A),f.setRenderTarget(r),p&&f.render(v,l),f.render(t,l)}f.toneMapping=d,f.autoClear=h,t.background=_}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Si||t.mapping===Ki;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sc());const a=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=a;const o=a.uniforms;o.envMap.value=t;const l=this._cubeSize;zi(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(s,gr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(t,a-1,a);e.autoClear=i}_applyGGXFilter(t,e,i){const r=this._renderer,a=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;const l=s.uniforms,c=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,d=f*h,{_lodMax:m}=this,v=this._sizeLods[i],g=3*v*(i>m-ai?i-m+ai:0),p=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-e,zi(a,g,p,3*v,2*v),r.setRenderTarget(a),r.render(o,gr),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=m-i,zi(t,g,p,3*v,2*v),r.setRenderTarget(t),r.render(o,gr)}_blur(t,e,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,i,r,"latitudinal",a),this._halfBlur(s,t,i,i,r,"longitudinal",a)}_halfBlur(t,e,i,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&ae("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,d=this._sizeLods[i]-1,m=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*vi-1),v=a/m,g=isFinite(a)?1+Math.floor(u*v):vi;g>vi&&Gt(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${vi}`);const p=[];let _=0;for(let P=0;P<vi;++P){const M=P/v,w=Math.exp(-M*M/2);p.push(w),P===0?_+=w:P<g&&(_+=2*w)}for(let P=0;P<p.length;P++)p[P]=p[P]/_;h.envMap.value=t.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=m,h.mipInt.value=y-i;const x=this._sizeLods[r],A=3*x*(r>y-ai?r-y+ai:0),L=4*(this._cubeSize-x);zi(e,A,L,3*x,2*x),l.setRenderTarget(e),l.render(f,gr)}}function y0(n){const t=[],e=[],i=[];let r=n;const a=n-ai+1+vc.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let l=1/o;s>n-ai?l=vc[s-n+ai-1]:s===0&&(l=0),e.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,m=6,v=3,g=2,p=1,_=new Float32Array(v*m*d),y=new Float32Array(g*m*d),x=new Float32Array(p*m*d);for(let L=0;L<d;L++){const P=L%3*2/3-1,M=L>2?0:-1,w=[P,M,0,P+2/3,M,0,P+2/3,M+1,0,P,M,0,P+2/3,M+1,0,P,M+1,0];_.set(w,v*m*L),y.set(h,g*m*L);const H=[L,L,L,L,L,L];x.set(H,p*m*L)}const A=new We;A.setAttribute("position",new rn(_,v)),A.setAttribute("uv",new rn(y,g)),A.setAttribute("faceIndex",new rn(x,p)),i.push(new Ee(A,null)),r>ai&&r--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function yc(n,t,e){const i=new Sn(n,t,e);return i.texture.mapping=Ua,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zi(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function S0(n,t,e){return new bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Oa(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function M0(n,t,e){const i=new Float32Array(vi),r=new j(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Oa(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Sc(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oa(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Mc(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Oa(){return`

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
	`}class qd extends Sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Rd(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new qn(5,5,5),a=new bn({name:"CubemapFromEquirect",uniforms:er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:je,blending:zn});a.uniforms.tEquirect.value=e;const s=new Ee(r,a),o=e.minFilter;return e.minFilter===_i&&(e.minFilter=ze),new Am(1,10,this).update(t,s),e.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const a=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,i,r);t.setRenderTarget(a)}}function E0(n){let t=new WeakMap,e=new WeakMap,i=null;function r(h,d=!1){return h==null?null:d?s(h):a(h)}function a(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ya||d===ja)if(t.has(h)){const m=t.get(h).texture;return o(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const v=new qd(m.height);return v.fromEquirectangularTexture(n,h),t.set(h,v),h.addEventListener("dispose",c),o(v.texture,h.mapping)}else return null}}return h}function s(h){if(h&&h.isTexture){const d=h.mapping,m=d===Ya||d===ja,v=d===Si||d===Ki;if(m||v){let g=e.get(h);const p=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new xc(n)),g=m?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const _=h.image;return m&&_&&_.height>0||v&&_&&l(_)?(i===null&&(i=new xc(n)),g=m?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,d){return d===Ya?h.mapping=Si:d===ja&&(h.mapping=Ki),h}function l(h){let d=0;const m=6;for(let v=0;v<m;v++)h[v]!==void 0&&d++;return d===m}function c(h){const d=h.target;d.removeEventListener("dispose",c);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function b0(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Da("WebGLRenderer: "+i+" extension not supported."),r}}}function T0(n,t,e,i){const r={},a=new WeakMap;function s(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const m in h.attributes)t.remove(h.attributes[m]);h.removeEventListener("dispose",s),delete r[h.id];const d=a.get(h);d&&(t.remove(d),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)t.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,m=f.attributes.position;let v=0;if(m===void 0)return;if(d!==null){const _=d.array;v=d.version;for(let y=0,x=_.length;y<x;y+=3){const A=_[y+0],L=_[y+1],P=_[y+2];h.push(A,L,L,P,P,A)}}else{const _=m.array;v=m.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const A=y+0,L=y+1,P=y+2;h.push(A,L,L,P,P,A)}}const g=new(m.count>=65535?Cd:Dd)(h,1);g.version=v;const p=a.get(f);p&&t.remove(p),a.set(f,g)}function u(f){const h=a.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return a.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function w0(n,t,e){let i;function r(h){i=h}let a,s;function o(h){a=h.type,s=h.bytesPerElement}function l(h,d){n.drawElements(i,d,a,h*s),e.update(d,i,1)}function c(h,d,m){m!==0&&(n.drawElementsInstanced(i,d,a,h*s,m),e.update(d,i,m))}function u(h,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,a,h,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];e.update(g,i,1)}function f(h,d,m,v){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<h.length;p++)c(h[p]/s,d[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,a,h,0,v,0,m);let p=0;for(let _=0;_<m;_++)p+=d[_]*v[_];e.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function A0(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(e.calls++,s){case n.TRIANGLES:e.triangles+=o*(a/3);break;case n.LINES:e.lines+=o*(a/2);break;case n.LINE_STRIP:e.lines+=o*(a-1);break;case n.LINE_LOOP:e.lines+=o*a;break;case n.POINTS:e.points+=o*a;break;default:ae("WebGLInfo: Unknown draw mode:",s);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function D0(n,t,e){const i=new WeakMap,r=new _e;function a(s,o,l){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let H=function(){M.dispose(),i.delete(o),o.removeEventListener("dispose",H)};var d=H;h!==void 0&&h.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;m===!0&&(x=1),v===!0&&(x=2),g===!0&&(x=3);let A=o.attributes.position.count*x,L=1;A>t.maxTextureSize&&(L=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const P=new Float32Array(A*L*4*f),M=new Td(P,A,L,f);M.type=_n,M.needsUpdate=!0;const w=x*4;for(let F=0;F<f;F++){const D=p[F],B=_[F],S=y[F],C=A*L*4*F;for(let N=0;N<D.count;N++){const U=N*w;m===!0&&(r.fromBufferAttribute(D,N),P[C+U+0]=r.x,P[C+U+1]=r.y,P[C+U+2]=r.z,P[C+U+3]=0),v===!0&&(r.fromBufferAttribute(B,N),P[C+U+4]=r.x,P[C+U+5]=r.y,P[C+U+6]=r.z,P[C+U+7]=0),g===!0&&(r.fromBufferAttribute(S,N),P[C+U+8]=r.x,P[C+U+9]=r.y,P[C+U+10]=r.z,P[C+U+11]=S.itemSize===4?r.w:1)}}h={count:f,texture:M,size:new Lt(A,L)},i.set(o,h),o.addEventListener("dispose",H)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:a}}function C0(n,t,e,i,r){let a=new WeakMap;function s(c){const u=r.render.frame,f=c.geometry,h=t.get(c,f);if(a.get(h)!==u&&(t.update(h),a.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),a.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;a.get(d)!==u&&(d.update(),a.set(d,u))}return h}function o(){a=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:o}}const P0={[ld]:"LINEAR_TONE_MAPPING",[cd]:"REINHARD_TONE_MAPPING",[dd]:"CINEON_TONE_MAPPING",[ud]:"ACES_FILMIC_TONE_MAPPING",[fd]:"AGX_TONE_MAPPING",[pd]:"NEUTRAL_TONE_MAPPING",[hd]:"CUSTOM_TONE_MAPPING"};function R0(n,t,e,i,r){const a=new Sn(t,e,{type:n,depthBuffer:i,stencilBuffer:r}),s=new Sn(t,e,{type:Wn,depthBuffer:!1,stencilBuffer:!1}),o=new We;o.setAttribute("position",new we([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new we([0,2,0,0,2,0],2));const l=new Sm({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Ee(o,l),u=new nl(-1,1,1,-1,0,1);let f=null,h=null,d=!1,m,v=null,g=[],p=!1;this.setSize=function(_,y){a.setSize(_,y),s.setSize(_,y);for(let x=0;x<g.length;x++){const A=g[x];A.setSize&&A.setSize(_,y)}},this.setEffects=function(_){g=_,p=g.length>0&&g[0].isRenderPass===!0;const y=a.width,x=a.height;for(let A=0;A<g.length;A++){const L=g[A];L.setSize&&L.setSize(y,x)}},this.begin=function(_,y){if(d||_.toneMapping===yn&&g.length===0)return!1;if(v=y,y!==null){const x=y.width,A=y.height;(a.width!==x||a.height!==A)&&this.setSize(x,A)}return p===!1&&_.setRenderTarget(a),m=_.toneMapping,_.toneMapping=yn,!0},this.hasRenderPass=function(){return p},this.end=function(_,y){_.toneMapping=m,d=!0;let x=a,A=s;for(let L=0;L<g.length;L++){const P=g[L];if(P.enabled!==!1&&(P.render(_,A,x,y),P.needsSwap!==!1)){const M=x;x=A,A=M}}if(f!==_.outputColorSpace||h!==_.toneMapping){f=_.outputColorSpace,h=_.toneMapping,l.defines={},ie.getTransfer(f)===le&&(l.defines.SRGB_TRANSFER="");const L=P0[h];L&&(l.defines[L]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=x.texture,_.setRenderTarget(v),_.render(c,u),v=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){a.dispose(),s.dispose(),o.dispose(),l.dispose()}}const Yd=new Ge,wo=new Pr(1,1),jd=new Td,Zd=new xp,Kd=new Rd,Ec=[],bc=[],Tc=new Float32Array(16),wc=new Float32Array(9),Ac=new Float32Array(4);function or(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let a=Ec[r];if(a===void 0&&(a=new Float32Array(r),Ec[r]=a),t!==0){i.toArray(a,0);for(let s=1,o=0;s!==t;++s)o+=e,n[s].toArray(a,o)}return a}function Ae(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function De(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ka(n,t){let e=bc[t];e===void 0&&(e=new Int32Array(t),bc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function L0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function I0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2fv(this.addr,t),De(e,t)}}function U0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;n.uniform3fv(this.addr,t),De(e,t)}}function B0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4fv(this.addr,t),De(e,t)}}function F0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Ae(e,i))return;Ac.set(i),n.uniformMatrix2fv(this.addr,!1,Ac),De(e,i)}}function N0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Ae(e,i))return;wc.set(i),n.uniformMatrix3fv(this.addr,!1,wc),De(e,i)}}function O0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Ae(e,i))return;Tc.set(i),n.uniformMatrix4fv(this.addr,!1,Tc),De(e,i)}}function k0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function z0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2iv(this.addr,t),De(e,t)}}function H0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;n.uniform3iv(this.addr,t),De(e,t)}}function V0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4iv(this.addr,t),De(e,t)}}function G0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function W0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2uiv(this.addr,t),De(e,t)}}function X0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;n.uniform3uiv(this.addr,t),De(e,t)}}function q0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4uiv(this.addr,t),De(e,t)}}function Y0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let a;this.type===n.SAMPLER_2D_SHADOW?(wo.compareFunction=e.isReversedDepthBuffer()?jo:Yo,a=wo):a=Yd,e.setTexture2D(t||a,r)}function j0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Zd,r)}function Z0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Kd,r)}function K0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||jd,r)}function J0(n){switch(n){case 5126:return L0;case 35664:return I0;case 35665:return U0;case 35666:return B0;case 35674:return F0;case 35675:return N0;case 35676:return O0;case 5124:case 35670:return k0;case 35667:case 35671:return z0;case 35668:case 35672:return H0;case 35669:case 35673:return V0;case 5125:return G0;case 36294:return W0;case 36295:return X0;case 36296:return q0;case 35678:case 36198:case 36298:case 36306:case 35682:return Y0;case 35679:case 36299:case 36307:return j0;case 35680:case 36300:case 36308:case 36293:return Z0;case 36289:case 36303:case 36311:case 36292:return K0}}function $0(n,t){n.uniform1fv(this.addr,t)}function Q0(n,t){const e=or(t,this.size,2);n.uniform2fv(this.addr,e)}function t_(n,t){const e=or(t,this.size,3);n.uniform3fv(this.addr,e)}function e_(n,t){const e=or(t,this.size,4);n.uniform4fv(this.addr,e)}function n_(n,t){const e=or(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function i_(n,t){const e=or(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function r_(n,t){const e=or(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function a_(n,t){n.uniform1iv(this.addr,t)}function s_(n,t){n.uniform2iv(this.addr,t)}function o_(n,t){n.uniform3iv(this.addr,t)}function l_(n,t){n.uniform4iv(this.addr,t)}function c_(n,t){n.uniform1uiv(this.addr,t)}function d_(n,t){n.uniform2uiv(this.addr,t)}function u_(n,t){n.uniform3uiv(this.addr,t)}function h_(n,t){n.uniform4uiv(this.addr,t)}function f_(n,t,e){const i=this.cache,r=t.length,a=ka(e,r);Ae(i,a)||(n.uniform1iv(this.addr,a),De(i,a));let s;this.type===n.SAMPLER_2D_SHADOW?s=wo:s=Yd;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||s,a[o])}function p_(n,t,e){const i=this.cache,r=t.length,a=ka(e,r);Ae(i,a)||(n.uniform1iv(this.addr,a),De(i,a));for(let s=0;s!==r;++s)e.setTexture3D(t[s]||Zd,a[s])}function m_(n,t,e){const i=this.cache,r=t.length,a=ka(e,r);Ae(i,a)||(n.uniform1iv(this.addr,a),De(i,a));for(let s=0;s!==r;++s)e.setTextureCube(t[s]||Kd,a[s])}function g_(n,t,e){const i=this.cache,r=t.length,a=ka(e,r);Ae(i,a)||(n.uniform1iv(this.addr,a),De(i,a));for(let s=0;s!==r;++s)e.setTexture2DArray(t[s]||jd,a[s])}function v_(n){switch(n){case 5126:return $0;case 35664:return Q0;case 35665:return t_;case 35666:return e_;case 35674:return n_;case 35675:return i_;case 35676:return r_;case 5124:case 35670:return a_;case 35667:case 35671:return s_;case 35668:case 35672:return o_;case 35669:case 35673:return l_;case 5125:return c_;case 36294:return d_;case 36295:return u_;case 36296:return h_;case 35678:case 36198:case 36298:case 36306:case 35682:return f_;case 35679:case 36299:case 36307:return p_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return g_}}class __{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=J0(e.type)}}class x_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=v_(e.type)}}class y_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(t,e[o.id],i)}}}const Ds=/(\w+)(\])?(\[|\.)?/g;function Dc(n,t){n.seq.push(t),n.map[t.id]=t}function S_(n,t,e){const i=n.name,r=i.length;for(Ds.lastIndex=0;;){const a=Ds.exec(i),s=Ds.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){Dc(e,c===void 0?new __(o,n,t):new x_(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new y_(o),Dc(e,f)),e=f}}}class ba{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=t.getActiveUniform(e,s),l=t.getUniformLocation(e,o.name);S_(o,l,this)}const r=[],a=[];for(const s of this.seq)s.type===t.SAMPLER_2D_SHADOW||s.type===t.SAMPLER_CUBE_SHADOW||s.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(s):a.push(s);r.length>0&&(this.seq=r.concat(a))}setValue(t,e,i,r){const a=this.map[e];a!==void 0&&a.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let a=0,s=e.length;a!==s;++a){const o=e[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,a=t.length;r!==a;++r){const s=t[r];s.id in e&&i.push(s)}return i}}function Cc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const M_=37297;let E_=0;function b_(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===t?">":" "} ${o}: ${e[s]}`)}return i.join(`
`)}const Pc=new Zt;function T_(n){ie._getMatrix(Pc,ie.workingColorSpace,n);const t=`mat3( ${Pc.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(n)){case wa:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Rc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),a=(n.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+a+`

`+b_(n.getShaderSource(t),o)}else return a}function w_(n,t){const e=T_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const A_={[ld]:"Linear",[cd]:"Reinhard",[dd]:"Cineon",[ud]:"ACESFilmic",[fd]:"AgX",[pd]:"Neutral",[hd]:"Custom"};function D_(n,t){const e=A_[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ma=new j;function C_(){ie.getLuminanceCoefficients(ma);const n=ma.x.toFixed(4),t=ma.y.toFixed(4),e=ma.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function P_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yr).join(`
`)}function R_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function L_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(t,r),s=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),e[s]={type:a.type,location:n.getAttribLocation(t,s),locationSize:o}}return e}function yr(n){return n!==""}function Lc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ic(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const I_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ao(n){return n.replace(I_,B_)}const U_=new Map;function B_(n,t){let e=Jt[t];if(e===void 0){const i=U_.get(t);if(i!==void 0)e=Jt[i],Gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ao(e)}const F_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uc(n){return n.replace(F_,N_)}function N_(n,t,e,i){let r="";for(let a=parseInt(t);a<parseInt(e);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Bc(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const O_={[_a]:"SHADOWMAP_TYPE_PCF",[_r]:"SHADOWMAP_TYPE_VSM"};function k_(n){return O_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const z_={[Si]:"ENVMAP_TYPE_CUBE",[Ki]:"ENVMAP_TYPE_CUBE",[Ua]:"ENVMAP_TYPE_CUBE_UV"};function H_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":z_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const V_={[Ki]:"ENVMAP_MODE_REFRACTION"};function G_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":V_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const W_={[zo]:"ENVMAP_BLENDING_MULTIPLY",[Jf]:"ENVMAP_BLENDING_MIX",[$f]:"ENVMAP_BLENDING_ADD"};function X_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":W_[n.combine]||"ENVMAP_BLENDING_NONE"}function q_(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Y_(n,t,e,i){const r=n.getContext(),a=e.defines;let s=e.vertexShader,o=e.fragmentShader;const l=k_(e),c=H_(e),u=G_(e),f=X_(e),h=q_(e),d=P_(e),m=R_(a),v=r.createProgram();let g,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(yr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(yr).join(`
`),p.length>0&&(p+=`
`)):(g=[Bc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),p=[Bc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yn?"#define TONE_MAPPING":"",e.toneMapping!==yn?Jt.tonemapping_pars_fragment:"",e.toneMapping!==yn?D_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,w_("linearToOutputTexel",e.outputColorSpace),C_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(yr).join(`
`)),s=Ao(s),s=Lc(s,e),s=Ic(s,e),o=Ao(o),o=Lc(o,e),o=Ic(o,e),s=Uc(s),o=Uc(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=_+g+s,x=_+p+o,A=Cc(r,r.VERTEX_SHADER,y),L=Cc(r,r.FRAGMENT_SHADER,x);r.attachShader(v,A),r.attachShader(v,L),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function P(F){if(n.debug.checkShaderErrors){const D=r.getProgramInfoLog(v)||"",B=r.getShaderInfoLog(A)||"",S=r.getShaderInfoLog(L)||"",C=D.trim(),N=B.trim(),U=S.trim();let Q=!0,X=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,A,L);else{const $=Rc(r,A,"vertex"),W=Rc(r,L,"fragment");ae("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+C+`
`+$+`
`+W)}else C!==""?Gt("WebGLProgram: Program Info Log:",C):(N===""||U==="")&&(X=!1);X&&(F.diagnostics={runnable:Q,programLog:C,vertexShader:{log:N,prefix:g},fragmentShader:{log:U,prefix:p}})}r.deleteShader(A),r.deleteShader(L),M=new ba(r,v),w=L_(r,v)}let M;this.getUniforms=function(){return M===void 0&&P(this),M};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let H=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=r.getProgramParameter(v,M_)),H},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=E_++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=L,this}let j_=0;class Z_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(t);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new K_(t),e.set(t,i)),i}}class K_{constructor(t){this.id=j_++,this.code=t,this.usedTimes=0}}function J_(n,t,e,i,r,a){const s=new wd,o=new Z_,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return l.add(M),M===0?"uv":`uv${M}`}function v(M,w,H,F,D){const B=F.fog,S=D.geometry,C=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,N=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,U=t.get(M.envMap||C,N),Q=U&&U.mapping===Ua?U.image.height:null,X=d[M.type];M.precision!==null&&(h=i.getMaxPrecision(M.precision),h!==M.precision&&Gt("WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));const $=S.morphAttributes.position||S.morphAttributes.normal||S.morphAttributes.color,W=$!==void 0?$.length:0;let V=0;S.morphAttributes.position!==void 0&&(V=1),S.morphAttributes.normal!==void 0&&(V=2),S.morphAttributes.color!==void 0&&(V=3);let pt,mt,ut,it;if(X){const oe=vn[X];pt=oe.vertexShader,mt=oe.fragmentShader}else pt=M.vertexShader,mt=M.fragmentShader,o.update(M),ut=o.getVertexShaderID(M),it=o.getFragmentShaderID(M);const ht=n.getRenderTarget(),at=n.state.buffers.depth.getReversed(),yt=D.isInstancedMesh===!0,Et=D.isBatchedMesh===!0,St=!!M.map,Wt=!!M.matcap,Vt=!!U,b=!!M.aoMap,rt=!!M.lightMap,K=!!M.bumpMap,O=!!M.normalMap,E=!!M.displacementMap,q=!!M.emissiveMap,st=!!M.metalnessMap,ct=!!M.roughnessMap,G=M.anisotropy>0,R=M.clearcoat>0,T=M.dispersion>0,k=M.iridescence>0,J=M.sheen>0,lt=M.transmission>0,tt=G&&!!M.anisotropyMap,bt=R&&!!M.clearcoatMap,xt=R&&!!M.clearcoatNormalMap,At=R&&!!M.clearcoatRoughnessMap,kt=k&&!!M.iridescenceMap,ft=k&&!!M.iridescenceThicknessMap,vt=J&&!!M.sheenColorMap,It=J&&!!M.sheenRoughnessMap,Dt=!!M.specularMap,Ct=!!M.specularColorMap,Yt=!!M.specularIntensityMap,Y=lt&&!!M.transmissionMap,Mt=lt&&!!M.thicknessMap,_t=!!M.gradientMap,wt=!!M.alphaMap,gt=M.alphaTest>0,dt=!!M.alphaHash,Bt=!!M.extensions;let qt=yn;M.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(qt=n.toneMapping);const fe={shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:pt,fragmentShader:mt,defines:M.defines,customVertexShaderID:ut,customFragmentShaderID:it,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:Et,batchingColor:Et&&D._colorsTexture!==null,instancing:yt,instancingColor:yt&&D.instanceColor!==null,instancingMorph:yt&&D.morphTexture!==null,outputColorSpace:ht===null?n.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:$i,alphaToCoverage:!!M.alphaToCoverage,map:St,matcap:Wt,envMap:Vt,envMapMode:Vt&&U.mapping,envMapCubeUVHeight:Q,aoMap:b,lightMap:rt,bumpMap:K,normalMap:O,displacementMap:E,emissiveMap:q,normalMapObjectSpace:O&&M.normalMapType===ep,normalMapTangentSpace:O&&M.normalMapType===Ed,metalnessMap:st,roughnessMap:ct,anisotropy:G,anisotropyMap:tt,clearcoat:R,clearcoatMap:bt,clearcoatNormalMap:xt,clearcoatRoughnessMap:At,dispersion:T,iridescence:k,iridescenceMap:kt,iridescenceThicknessMap:ft,sheen:J,sheenColorMap:vt,sheenRoughnessMap:It,specularMap:Dt,specularColorMap:Ct,specularIntensityMap:Yt,transmission:lt,transmissionMap:Y,thicknessMap:Mt,gradientMap:_t,opaque:M.transparent===!1&&M.blending===Xi&&M.alphaToCoverage===!1,alphaMap:wt,alphaTest:gt,alphaHash:dt,combine:M.combine,mapUv:St&&m(M.map.channel),aoMapUv:b&&m(M.aoMap.channel),lightMapUv:rt&&m(M.lightMap.channel),bumpMapUv:K&&m(M.bumpMap.channel),normalMapUv:O&&m(M.normalMap.channel),displacementMapUv:E&&m(M.displacementMap.channel),emissiveMapUv:q&&m(M.emissiveMap.channel),metalnessMapUv:st&&m(M.metalnessMap.channel),roughnessMapUv:ct&&m(M.roughnessMap.channel),anisotropyMapUv:tt&&m(M.anisotropyMap.channel),clearcoatMapUv:bt&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:xt&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:It&&m(M.sheenRoughnessMap.channel),specularMapUv:Dt&&m(M.specularMap.channel),specularColorMapUv:Ct&&m(M.specularColorMap.channel),specularIntensityMapUv:Yt&&m(M.specularIntensityMap.channel),transmissionMapUv:Y&&m(M.transmissionMap.channel),thicknessMapUv:Mt&&m(M.thicknessMap.channel),alphaMapUv:wt&&m(M.alphaMap.channel),vertexTangents:!!S.attributes.tangent&&(O||G),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!S.attributes.color&&S.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!S.attributes.uv&&(St||wt),fog:!!B,useFog:M.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||S.attributes.normal===void 0&&O===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:at,skinning:D.isSkinnedMesh===!0,morphTargets:S.morphAttributes.position!==void 0,morphNormals:S.morphAttributes.normal!==void 0,morphColors:S.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:V,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:qt,decodeVideoTexture:St&&M.map.isVideoTexture===!0&&ie.getTransfer(M.map.colorSpace)===le,decodeVideoTextureEmissive:q&&M.emissiveMap.isVideoTexture===!0&&ie.getTransfer(M.emissiveMap.colorSpace)===le,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===dn,flipSided:M.side===je,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Bt&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&M.extensions.multiDraw===!0||Et)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return fe.vertexUv1s=l.has(1),fe.vertexUv2s=l.has(2),fe.vertexUv3s=l.has(3),l.clear(),fe}function g(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const H in M.defines)w.push(H),w.push(M.defines[H]);return M.isRawShaderMaterial===!1&&(p(w,M),_(w,M),w.push(n.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function p(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function _(M,w){s.disableAll(),w.instancing&&s.enable(0),w.instancingColor&&s.enable(1),w.instancingMorph&&s.enable(2),w.matcap&&s.enable(3),w.envMap&&s.enable(4),w.normalMapObjectSpace&&s.enable(5),w.normalMapTangentSpace&&s.enable(6),w.clearcoat&&s.enable(7),w.iridescence&&s.enable(8),w.alphaTest&&s.enable(9),w.vertexColors&&s.enable(10),w.vertexAlphas&&s.enable(11),w.vertexUv1s&&s.enable(12),w.vertexUv2s&&s.enable(13),w.vertexUv3s&&s.enable(14),w.vertexTangents&&s.enable(15),w.anisotropy&&s.enable(16),w.alphaHash&&s.enable(17),w.batching&&s.enable(18),w.dispersion&&s.enable(19),w.batchingColor&&s.enable(20),w.gradientMap&&s.enable(21),M.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.reversedDepthBuffer&&s.enable(4),w.skinning&&s.enable(5),w.morphTargets&&s.enable(6),w.morphNormals&&s.enable(7),w.morphColors&&s.enable(8),w.premultipliedAlpha&&s.enable(9),w.shadowMapEnabled&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.transmission&&s.enable(15),w.sheen&&s.enable(16),w.opaque&&s.enable(17),w.pointsUvs&&s.enable(18),w.decodeVideoTexture&&s.enable(19),w.decodeVideoTextureEmissive&&s.enable(20),w.alphaToCoverage&&s.enable(21),M.push(s.mask)}function y(M){const w=d[M.type];let H;if(w){const F=vn[w];H=_m.clone(F.uniforms)}else H=M.uniforms;return H}function x(M,w){let H=u.get(w);return H!==void 0?++H.usedTimes:(H=new Y_(n,w,M,r),c.push(H),u.set(w,H)),H}function A(M){if(--M.usedTimes===0){const w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),u.delete(M.cacheKey),M.destroy()}}function L(M){o.remove(M)}function P(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:y,acquireProgram:x,releaseProgram:A,releaseShaderCache:L,programs:c,dispose:P}}function $_(){let n=new WeakMap;function t(s){return n.has(s)}function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function i(s){n.delete(s)}function r(s,o,l){n.get(s)[o]=l}function a(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:a}}function Q_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Fc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Nc(){const n=[];let t=0;const e=[],i=[],r=[];function a(){t=0,e.length=0,i.length=0,r.length=0}function s(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,m,v,g,p){let _=n[t];return _===void 0?(_={id:h.id,object:h,geometry:d,material:m,materialVariant:s(h),groupOrder:v,renderOrder:h.renderOrder,z:g,group:p},n[t]=_):(_.id=h.id,_.object=h,_.geometry=d,_.material=m,_.materialVariant=s(h),_.groupOrder=v,_.renderOrder=h.renderOrder,_.z=g,_.group=p),t++,_}function l(h,d,m,v,g,p){const _=o(h,d,m,v,g,p);m.transmission>0?i.push(_):m.transparent===!0?r.push(_):e.push(_)}function c(h,d,m,v,g,p){const _=o(h,d,m,v,g,p);m.transmission>0?i.unshift(_):m.transparent===!0?r.unshift(_):e.unshift(_)}function u(h,d){e.length>1&&e.sort(h||Q_),i.length>1&&i.sort(d||Fc),r.length>1&&r.sort(d||Fc)}function f(){for(let h=t,d=n.length;h<d;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:r,init:a,push:l,unshift:c,finish:f,sort:u}}function tx(){let n=new WeakMap;function t(i,r){const a=n.get(i);let s;return a===void 0?(s=new Nc,n.set(i,[s])):r>=a.length?(s=new Nc,a.push(s)):s=a[r],s}function e(){n=new WeakMap}return{get:t,dispose:e}}function ex(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new j,color:new Kt};break;case"SpotLight":e={position:new j,direction:new j,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new j,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new j,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new j,halfWidth:new j,halfHeight:new j};break}return n[t.id]=e,e}}}function nx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let ix=0;function rx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function ax(n){const t=new ex,e=nx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const r=new j,a=new me,s=new me;function o(c){let u=0,f=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let d=0,m=0,v=0,g=0,p=0,_=0,y=0,x=0,A=0,L=0,P=0;c.sort(rx);for(let w=0,H=c.length;w<H;w++){const F=c[w],D=F.color,B=F.intensity,S=F.distance;let C=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Ji?C=F.shadow.map.texture:C=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)u+=D.r*B,f+=D.g*B,h+=D.b*B;else if(F.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(F.sh.coefficients[N],B);P++}else if(F.isDirectionalLight){const N=t.get(F);if(N.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const U=F.shadow,Q=e.get(F);Q.shadowIntensity=U.intensity,Q.shadowBias=U.bias,Q.shadowNormalBias=U.normalBias,Q.shadowRadius=U.radius,Q.shadowMapSize=U.mapSize,i.directionalShadow[d]=Q,i.directionalShadowMap[d]=C,i.directionalShadowMatrix[d]=F.shadow.matrix,_++}i.directional[d]=N,d++}else if(F.isSpotLight){const N=t.get(F);N.position.setFromMatrixPosition(F.matrixWorld),N.color.copy(D).multiplyScalar(B),N.distance=S,N.coneCos=Math.cos(F.angle),N.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),N.decay=F.decay,i.spot[v]=N;const U=F.shadow;if(F.map&&(i.spotLightMap[A]=F.map,A++,U.updateMatrices(F),F.castShadow&&L++),i.spotLightMatrix[v]=U.matrix,F.castShadow){const Q=e.get(F);Q.shadowIntensity=U.intensity,Q.shadowBias=U.bias,Q.shadowNormalBias=U.normalBias,Q.shadowRadius=U.radius,Q.shadowMapSize=U.mapSize,i.spotShadow[v]=Q,i.spotShadowMap[v]=C,x++}v++}else if(F.isRectAreaLight){const N=t.get(F);N.color.copy(D).multiplyScalar(B),N.halfWidth.set(F.width*.5,0,0),N.halfHeight.set(0,F.height*.5,0),i.rectArea[g]=N,g++}else if(F.isPointLight){const N=t.get(F);if(N.color.copy(F.color).multiplyScalar(F.intensity),N.distance=F.distance,N.decay=F.decay,F.castShadow){const U=F.shadow,Q=e.get(F);Q.shadowIntensity=U.intensity,Q.shadowBias=U.bias,Q.shadowNormalBias=U.normalBias,Q.shadowRadius=U.radius,Q.shadowMapSize=U.mapSize,Q.shadowCameraNear=U.camera.near,Q.shadowCameraFar=U.camera.far,i.pointShadow[m]=Q,i.pointShadowMap[m]=C,i.pointShadowMatrix[m]=F.shadow.matrix,y++}i.point[m]=N,m++}else if(F.isHemisphereLight){const N=t.get(F);N.skyColor.copy(F.color).multiplyScalar(B),N.groundColor.copy(F.groundColor).multiplyScalar(B),i.hemi[p]=N,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Tt.LTC_FLOAT_1,i.rectAreaLTC2=Tt.LTC_FLOAT_2):(i.rectAreaLTC1=Tt.LTC_HALF_1,i.rectAreaLTC2=Tt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const M=i.hash;(M.directionalLength!==d||M.pointLength!==m||M.spotLength!==v||M.rectAreaLength!==g||M.hemiLength!==p||M.numDirectionalShadows!==_||M.numPointShadows!==y||M.numSpotShadows!==x||M.numSpotMaps!==A||M.numLightProbes!==P)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+A-L,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=P,M.directionalLength=d,M.pointLength=m,M.spotLength=v,M.rectAreaLength=g,M.hemiLength=p,M.numDirectionalShadows=_,M.numPointShadows=y,M.numSpotShadows=x,M.numSpotMaps=A,M.numLightProbes=P,i.version=ix++)}function l(c,u){let f=0,h=0,d=0,m=0,v=0;const g=u.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){const y=c[p];if(y.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),f++}else if(y.isSpotLight){const x=i.spot[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),d++}else if(y.isRectAreaLight){const x=i.rectArea[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),s.identity(),a.copy(y.matrixWorld),a.premultiply(g),s.extractRotation(a),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),m++}else if(y.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),h++}else if(y.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:i}}function Oc(n){const t=new ax(n),e=[],i=[];function r(u){c.camera=u,e.length=0,i.length=0}function a(u){e.push(u)}function s(u){i.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function sx(n){let t=new WeakMap;function e(r,a=0){const s=t.get(r);let o;return s===void 0?(o=new Oc(n),t.set(r,[o])):a>=s.length?(o=new Oc(n),s.push(o)):o=s[a],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const ox=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lx=`uniform sampler2D shadow_pass;
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
}`,cx=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],dx=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],kc=new me,vr=new j,Cs=new j;function ux(n,t,e){let i=new Jo;const r=new Lt,a=new Lt,s=new _e,o=new Mm,l=new Em,c={},u=e.maxTextureSize,f={[si]:je,[je]:si,[dn]:dn},h=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:ox,fragmentShader:lx}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const m=new We;m.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ee(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_a;let p=this.type;this.render=function(L,P,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||L.length===0)return;this.type===Lf&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=_a);const w=n.getRenderTarget(),H=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),D=n.state;D.setBlending(zn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const B=p!==this.type;B&&P.traverse(function(S){S.material&&(Array.isArray(S.material)?S.material.forEach(C=>C.needsUpdate=!0):S.material.needsUpdate=!0)});for(let S=0,C=L.length;S<C;S++){const N=L[S],U=N.shadow;if(U===void 0){Gt("WebGLShadowMap:",N,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const Q=U.getFrameExtents();r.multiply(Q),a.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/Q.x),r.x=a.x*Q.x,U.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/Q.y),r.y=a.y*Q.y,U.mapSize.y=a.y));const X=n.state.buffers.depth.getReversed();if(U.camera._reversedDepth=X,U.map===null||B===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===_r){if(N.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Sn(r.x,r.y,{format:Ji,type:Wn,minFilter:ze,magFilter:ze,generateMipmaps:!1}),U.map.texture.name=N.name+".shadowMap",U.map.depthTexture=new Pr(r.x,r.y,_n),U.map.depthTexture.name=N.name+".shadowMapDepth",U.map.depthTexture.format=Xn,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Be,U.map.depthTexture.magFilter=Be}else N.isPointLight?(U.map=new qd(r.x),U.map.depthTexture=new Op(r.x,Mn)):(U.map=new Sn(r.x,r.y),U.map.depthTexture=new Pr(r.x,r.y,Mn)),U.map.depthTexture.name=N.name+".shadowMap",U.map.depthTexture.format=Xn,this.type===_a?(U.map.depthTexture.compareFunction=X?jo:Yo,U.map.depthTexture.minFilter=ze,U.map.depthTexture.magFilter=ze):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Be,U.map.depthTexture.magFilter=Be);U.camera.updateProjectionMatrix()}const $=U.map.isWebGLCubeRenderTarget?6:1;for(let W=0;W<$;W++){if(U.map.isWebGLCubeRenderTarget)n.setRenderTarget(U.map,W),n.clear();else{W===0&&(n.setRenderTarget(U.map),n.clear());const V=U.getViewport(W);s.set(a.x*V.x,a.y*V.y,a.x*V.z,a.y*V.w),D.viewport(s)}if(N.isPointLight){const V=U.camera,pt=U.matrix,mt=N.distance||V.far;mt!==V.far&&(V.far=mt,V.updateProjectionMatrix()),vr.setFromMatrixPosition(N.matrixWorld),V.position.copy(vr),Cs.copy(V.position),Cs.add(cx[W]),V.up.copy(dx[W]),V.lookAt(Cs),V.updateMatrixWorld(),pt.makeTranslation(-vr.x,-vr.y,-vr.z),kc.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),U._frustum.setFromProjectionMatrix(kc,V.coordinateSystem,V.reversedDepth)}else U.updateMatrices(N);i=U.getFrustum(),x(P,M,U.camera,N,this.type)}U.isPointLightShadow!==!0&&this.type===_r&&_(U,M),U.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(w,H,F)};function _(L,P){const M=t.update(v);h.defines.VSM_SAMPLES!==L.blurSamples&&(h.defines.VSM_SAMPLES=L.blurSamples,d.defines.VSM_SAMPLES=L.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Sn(r.x,r.y,{format:Ji,type:Wn})),h.uniforms.shadow_pass.value=L.map.depthTexture,h.uniforms.resolution.value=L.mapSize,h.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(P,null,M,h,v,null),d.uniforms.shadow_pass.value=L.mapPass.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(P,null,M,d,v,null)}function y(L,P,M,w){let H=null;const F=M.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(F!==void 0)H=F;else if(H=M.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const D=H.uuid,B=P.uuid;let S=c[D];S===void 0&&(S={},c[D]=S);let C=S[B];C===void 0&&(C=H.clone(),S[B]=C,P.addEventListener("dispose",A)),H=C}if(H.visible=P.visible,H.wireframe=P.wireframe,w===_r?H.side=P.shadowSide!==null?P.shadowSide:P.side:H.side=P.shadowSide!==null?P.shadowSide:f[P.side],H.alphaMap=P.alphaMap,H.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,H.map=P.map,H.clipShadows=P.clipShadows,H.clippingPlanes=P.clippingPlanes,H.clipIntersection=P.clipIntersection,H.displacementMap=P.displacementMap,H.displacementScale=P.displacementScale,H.displacementBias=P.displacementBias,H.wireframeLinewidth=P.wireframeLinewidth,H.linewidth=P.linewidth,M.isPointLight===!0&&H.isMeshDistanceMaterial===!0){const D=n.properties.get(H);D.light=M}return H}function x(L,P,M,w,H){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&H===_r)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,L.matrixWorld);const B=t.update(L),S=L.material;if(Array.isArray(S)){const C=B.groups;for(let N=0,U=C.length;N<U;N++){const Q=C[N],X=S[Q.materialIndex];if(X&&X.visible){const $=y(L,X,w,H);L.onBeforeShadow(n,L,P,M,B,$,Q),n.renderBufferDirect(M,null,B,$,L,Q),L.onAfterShadow(n,L,P,M,B,$,Q)}}}else if(S.visible){const C=y(L,S,w,H);L.onBeforeShadow(n,L,P,M,B,C,null),n.renderBufferDirect(M,null,B,C,L,null),L.onAfterShadow(n,L,P,M,B,C,null)}}const D=L.children;for(let B=0,S=D.length;B<S;B++)x(D[B],P,M,w,H)}function A(L){L.target.removeEventListener("dispose",A);for(const M in c){const w=c[M],H=L.target.uuid;H in w&&(w[H].dispose(),delete w[H])}}}function hx(n,t){function e(){let Y=!1;const Mt=new _e;let _t=null;const wt=new _e(0,0,0,0);return{setMask:function(gt){_t!==gt&&!Y&&(n.colorMask(gt,gt,gt,gt),_t=gt)},setLocked:function(gt){Y=gt},setClear:function(gt,dt,Bt,qt,fe){fe===!0&&(gt*=qt,dt*=qt,Bt*=qt),Mt.set(gt,dt,Bt,qt),wt.equals(Mt)===!1&&(n.clearColor(gt,dt,Bt,qt),wt.copy(Mt))},reset:function(){Y=!1,_t=null,wt.set(-1,0,0,0)}}}function i(){let Y=!1,Mt=!1,_t=null,wt=null,gt=null;return{setReversed:function(dt){if(Mt!==dt){const Bt=t.get("EXT_clip_control");dt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),Mt=dt;const qt=gt;gt=null,this.setClear(qt)}},getReversed:function(){return Mt},setTest:function(dt){dt?ht(n.DEPTH_TEST):at(n.DEPTH_TEST)},setMask:function(dt){_t!==dt&&!Y&&(n.depthMask(dt),_t=dt)},setFunc:function(dt){if(Mt&&(dt=up[dt]),wt!==dt){switch(dt){case Bs:n.depthFunc(n.NEVER);break;case Fs:n.depthFunc(n.ALWAYS);break;case Ns:n.depthFunc(n.LESS);break;case Zi:n.depthFunc(n.LEQUAL);break;case Os:n.depthFunc(n.EQUAL);break;case ks:n.depthFunc(n.GEQUAL);break;case zs:n.depthFunc(n.GREATER);break;case Hs:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}wt=dt}},setLocked:function(dt){Y=dt},setClear:function(dt){gt!==dt&&(gt=dt,Mt&&(dt=1-dt),n.clearDepth(dt))},reset:function(){Y=!1,_t=null,wt=null,gt=null,Mt=!1}}}function r(){let Y=!1,Mt=null,_t=null,wt=null,gt=null,dt=null,Bt=null,qt=null,fe=null;return{setTest:function(oe){Y||(oe?ht(n.STENCIL_TEST):at(n.STENCIL_TEST))},setMask:function(oe){Mt!==oe&&!Y&&(n.stencilMask(oe),Mt=oe)},setFunc:function(oe,wn,An){(_t!==oe||wt!==wn||gt!==An)&&(n.stencilFunc(oe,wn,An),_t=oe,wt=wn,gt=An)},setOp:function(oe,wn,An){(dt!==oe||Bt!==wn||qt!==An)&&(n.stencilOp(oe,wn,An),dt=oe,Bt=wn,qt=An)},setLocked:function(oe){Y=oe},setClear:function(oe){fe!==oe&&(n.clearStencil(oe),fe=oe)},reset:function(){Y=!1,Mt=null,_t=null,wt=null,gt=null,dt=null,Bt=null,qt=null,fe=null}}}const a=new e,s=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],m=null,v=!1,g=null,p=null,_=null,y=null,x=null,A=null,L=null,P=new Kt(0,0,0),M=0,w=!1,H=null,F=null,D=null,B=null,S=null;const C=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,U=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(Q)[1]),N=U>=1):Q.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),N=U>=2);let X=null,$={};const W=n.getParameter(n.SCISSOR_BOX),V=n.getParameter(n.VIEWPORT),pt=new _e().fromArray(W),mt=new _e().fromArray(V);function ut(Y,Mt,_t,wt){const gt=new Uint8Array(4),dt=n.createTexture();n.bindTexture(Y,dt),n.texParameteri(Y,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(Y,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Bt=0;Bt<_t;Bt++)Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?n.texImage3D(Mt,0,n.RGBA,1,1,wt,0,n.RGBA,n.UNSIGNED_BYTE,gt):n.texImage2D(Mt+Bt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,gt);return dt}const it={};it[n.TEXTURE_2D]=ut(n.TEXTURE_2D,n.TEXTURE_2D,1),it[n.TEXTURE_CUBE_MAP]=ut(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[n.TEXTURE_2D_ARRAY]=ut(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),it[n.TEXTURE_3D]=ut(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ht(n.DEPTH_TEST),s.setFunc(Zi),K(!1),O(Rl),ht(n.CULL_FACE),b(zn);function ht(Y){u[Y]!==!0&&(n.enable(Y),u[Y]=!0)}function at(Y){u[Y]!==!1&&(n.disable(Y),u[Y]=!1)}function yt(Y,Mt){return f[Y]!==Mt?(n.bindFramebuffer(Y,Mt),f[Y]=Mt,Y===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Mt),Y===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Et(Y,Mt){let _t=d,wt=!1;if(Y){_t=h.get(Mt),_t===void 0&&(_t=[],h.set(Mt,_t));const gt=Y.textures;if(_t.length!==gt.length||_t[0]!==n.COLOR_ATTACHMENT0){for(let dt=0,Bt=gt.length;dt<Bt;dt++)_t[dt]=n.COLOR_ATTACHMENT0+dt;_t.length=gt.length,wt=!0}}else _t[0]!==n.BACK&&(_t[0]=n.BACK,wt=!0);wt&&n.drawBuffers(_t)}function St(Y){return m!==Y?(n.useProgram(Y),m=Y,!0):!1}const Wt={[gi]:n.FUNC_ADD,[Uf]:n.FUNC_SUBTRACT,[Bf]:n.FUNC_REVERSE_SUBTRACT};Wt[Ff]=n.MIN,Wt[Nf]=n.MAX;const Vt={[Of]:n.ZERO,[kf]:n.ONE,[zf]:n.SRC_COLOR,[Is]:n.SRC_ALPHA,[qf]:n.SRC_ALPHA_SATURATE,[Wf]:n.DST_COLOR,[Vf]:n.DST_ALPHA,[Hf]:n.ONE_MINUS_SRC_COLOR,[Us]:n.ONE_MINUS_SRC_ALPHA,[Xf]:n.ONE_MINUS_DST_COLOR,[Gf]:n.ONE_MINUS_DST_ALPHA,[Yf]:n.CONSTANT_COLOR,[jf]:n.ONE_MINUS_CONSTANT_COLOR,[Zf]:n.CONSTANT_ALPHA,[Kf]:n.ONE_MINUS_CONSTANT_ALPHA};function b(Y,Mt,_t,wt,gt,dt,Bt,qt,fe,oe){if(Y===zn){v===!0&&(at(n.BLEND),v=!1);return}if(v===!1&&(ht(n.BLEND),v=!0),Y!==If){if(Y!==g||oe!==w){if((p!==gi||x!==gi)&&(n.blendEquation(n.FUNC_ADD),p=gi,x=gi),oe)switch(Y){case Xi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ll:n.blendFunc(n.ONE,n.ONE);break;case Il:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ul:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ae("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Xi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ll:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Il:ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ul:ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ae("WebGLState: Invalid blending: ",Y);break}_=null,y=null,A=null,L=null,P.set(0,0,0),M=0,g=Y,w=oe}return}gt=gt||Mt,dt=dt||_t,Bt=Bt||wt,(Mt!==p||gt!==x)&&(n.blendEquationSeparate(Wt[Mt],Wt[gt]),p=Mt,x=gt),(_t!==_||wt!==y||dt!==A||Bt!==L)&&(n.blendFuncSeparate(Vt[_t],Vt[wt],Vt[dt],Vt[Bt]),_=_t,y=wt,A=dt,L=Bt),(qt.equals(P)===!1||fe!==M)&&(n.blendColor(qt.r,qt.g,qt.b,fe),P.copy(qt),M=fe),g=Y,w=!1}function rt(Y,Mt){Y.side===dn?at(n.CULL_FACE):ht(n.CULL_FACE);let _t=Y.side===je;Mt&&(_t=!_t),K(_t),Y.blending===Xi&&Y.transparent===!1?b(zn):b(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),s.setFunc(Y.depthFunc),s.setTest(Y.depthTest),s.setMask(Y.depthWrite),a.setMask(Y.colorWrite);const wt=Y.stencilWrite;o.setTest(wt),wt&&(o.setMask(Y.stencilWriteMask),o.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),o.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),q(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?ht(n.SAMPLE_ALPHA_TO_COVERAGE):at(n.SAMPLE_ALPHA_TO_COVERAGE)}function K(Y){H!==Y&&(Y?n.frontFace(n.CW):n.frontFace(n.CCW),H=Y)}function O(Y){Y!==Pf?(ht(n.CULL_FACE),Y!==F&&(Y===Rl?n.cullFace(n.BACK):Y===Rf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):at(n.CULL_FACE),F=Y}function E(Y){Y!==D&&(N&&n.lineWidth(Y),D=Y)}function q(Y,Mt,_t){Y?(ht(n.POLYGON_OFFSET_FILL),(B!==Mt||S!==_t)&&(B=Mt,S=_t,s.getReversed()&&(Mt=-Mt),n.polygonOffset(Mt,_t))):at(n.POLYGON_OFFSET_FILL)}function st(Y){Y?ht(n.SCISSOR_TEST):at(n.SCISSOR_TEST)}function ct(Y){Y===void 0&&(Y=n.TEXTURE0+C-1),X!==Y&&(n.activeTexture(Y),X=Y)}function G(Y,Mt,_t){_t===void 0&&(X===null?_t=n.TEXTURE0+C-1:_t=X);let wt=$[_t];wt===void 0&&(wt={type:void 0,texture:void 0},$[_t]=wt),(wt.type!==Y||wt.texture!==Mt)&&(X!==_t&&(n.activeTexture(_t),X=_t),n.bindTexture(Y,Mt||it[Y]),wt.type=Y,wt.texture=Mt)}function R(){const Y=$[X];Y!==void 0&&Y.type!==void 0&&(n.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function T(){try{n.compressedTexImage2D(...arguments)}catch(Y){ae("WebGLState:",Y)}}function k(){try{n.compressedTexImage3D(...arguments)}catch(Y){ae("WebGLState:",Y)}}function J(){try{n.texSubImage2D(...arguments)}catch(Y){ae("WebGLState:",Y)}}function lt(){try{n.texSubImage3D(...arguments)}catch(Y){ae("WebGLState:",Y)}}function tt(){try{n.compressedTexSubImage2D(...arguments)}catch(Y){ae("WebGLState:",Y)}}function bt(){try{n.compressedTexSubImage3D(...arguments)}catch(Y){ae("WebGLState:",Y)}}function xt(){try{n.texStorage2D(...arguments)}catch(Y){ae("WebGLState:",Y)}}function At(){try{n.texStorage3D(...arguments)}catch(Y){ae("WebGLState:",Y)}}function kt(){try{n.texImage2D(...arguments)}catch(Y){ae("WebGLState:",Y)}}function ft(){try{n.texImage3D(...arguments)}catch(Y){ae("WebGLState:",Y)}}function vt(Y){pt.equals(Y)===!1&&(n.scissor(Y.x,Y.y,Y.z,Y.w),pt.copy(Y))}function It(Y){mt.equals(Y)===!1&&(n.viewport(Y.x,Y.y,Y.z,Y.w),mt.copy(Y))}function Dt(Y,Mt){let _t=c.get(Mt);_t===void 0&&(_t=new WeakMap,c.set(Mt,_t));let wt=_t.get(Y);wt===void 0&&(wt=n.getUniformBlockIndex(Mt,Y.name),_t.set(Y,wt))}function Ct(Y,Mt){const wt=c.get(Mt).get(Y);l.get(Mt)!==wt&&(n.uniformBlockBinding(Mt,wt,Y.__bindingPointIndex),l.set(Mt,wt))}function Yt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},X=null,$={},f={},h=new WeakMap,d=[],m=null,v=!1,g=null,p=null,_=null,y=null,x=null,A=null,L=null,P=new Kt(0,0,0),M=0,w=!1,H=null,F=null,D=null,B=null,S=null,pt.set(0,0,n.canvas.width,n.canvas.height),mt.set(0,0,n.canvas.width,n.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:ht,disable:at,bindFramebuffer:yt,drawBuffers:Et,useProgram:St,setBlending:b,setMaterial:rt,setFlipSided:K,setCullFace:O,setLineWidth:E,setPolygonOffset:q,setScissorTest:st,activeTexture:ct,bindTexture:G,unbindTexture:R,compressedTexImage2D:T,compressedTexImage3D:k,texImage2D:kt,texImage3D:ft,updateUBOMapping:Dt,uniformBlockBinding:Ct,texStorage2D:xt,texStorage3D:At,texSubImage2D:J,texSubImage3D:lt,compressedTexSubImage2D:tt,compressedTexSubImage3D:bt,scissor:vt,viewport:It,reset:Yt}}function fx(n,t,e,i,r,a,s){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,T){return d?new OffscreenCanvas(R,T):Aa("canvas")}function v(R,T,k){let J=1;const lt=G(R);if((lt.width>k||lt.height>k)&&(J=k/Math.max(lt.width,lt.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const tt=Math.floor(J*lt.width),bt=Math.floor(J*lt.height);f===void 0&&(f=m(tt,bt));const xt=T?m(tt,bt):f;return xt.width=tt,xt.height=bt,xt.getContext("2d").drawImage(R,0,0,tt,bt),Gt("WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+tt+"x"+bt+")."),xt}else return"data"in R&&Gt("WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){n.generateMipmap(R)}function _(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(R,T,k,J,lt=!1){if(R!==null){if(n[R]!==void 0)return n[R];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let tt=T;if(T===n.RED&&(k===n.FLOAT&&(tt=n.R32F),k===n.HALF_FLOAT&&(tt=n.R16F),k===n.UNSIGNED_BYTE&&(tt=n.R8)),T===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(tt=n.R8UI),k===n.UNSIGNED_SHORT&&(tt=n.R16UI),k===n.UNSIGNED_INT&&(tt=n.R32UI),k===n.BYTE&&(tt=n.R8I),k===n.SHORT&&(tt=n.R16I),k===n.INT&&(tt=n.R32I)),T===n.RG&&(k===n.FLOAT&&(tt=n.RG32F),k===n.HALF_FLOAT&&(tt=n.RG16F),k===n.UNSIGNED_BYTE&&(tt=n.RG8)),T===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(tt=n.RG8UI),k===n.UNSIGNED_SHORT&&(tt=n.RG16UI),k===n.UNSIGNED_INT&&(tt=n.RG32UI),k===n.BYTE&&(tt=n.RG8I),k===n.SHORT&&(tt=n.RG16I),k===n.INT&&(tt=n.RG32I)),T===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(tt=n.RGB8UI),k===n.UNSIGNED_SHORT&&(tt=n.RGB16UI),k===n.UNSIGNED_INT&&(tt=n.RGB32UI),k===n.BYTE&&(tt=n.RGB8I),k===n.SHORT&&(tt=n.RGB16I),k===n.INT&&(tt=n.RGB32I)),T===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(tt=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(tt=n.RGBA16UI),k===n.UNSIGNED_INT&&(tt=n.RGBA32UI),k===n.BYTE&&(tt=n.RGBA8I),k===n.SHORT&&(tt=n.RGBA16I),k===n.INT&&(tt=n.RGBA32I)),T===n.RGB&&(k===n.UNSIGNED_INT_5_9_9_9_REV&&(tt=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(tt=n.R11F_G11F_B10F)),T===n.RGBA){const bt=lt?wa:ie.getTransfer(J);k===n.FLOAT&&(tt=n.RGBA32F),k===n.HALF_FLOAT&&(tt=n.RGBA16F),k===n.UNSIGNED_BYTE&&(tt=bt===le?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(tt=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(tt=n.RGB5_A1)}return(tt===n.R16F||tt===n.R32F||tt===n.RG16F||tt===n.RG32F||tt===n.RGBA16F||tt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function x(R,T){let k;return R?T===null||T===Mn||T===Dr?k=n.DEPTH24_STENCIL8:T===_n?k=n.DEPTH32F_STENCIL8:T===Ar&&(k=n.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Mn||T===Dr?k=n.DEPTH_COMPONENT24:T===_n?k=n.DEPTH_COMPONENT32F:T===Ar&&(k=n.DEPTH_COMPONENT16),k}function A(R,T){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Be&&R.minFilter!==ze?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function L(R){const T=R.target;T.removeEventListener("dispose",L),M(T),T.isVideoTexture&&u.delete(T)}function P(R){const T=R.target;T.removeEventListener("dispose",P),H(T)}function M(R){const T=i.get(R);if(T.__webglInit===void 0)return;const k=R.source,J=h.get(k);if(J){const lt=J[T.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&w(R),Object.keys(J).length===0&&h.delete(k)}i.remove(R)}function w(R){const T=i.get(R);n.deleteTexture(T.__webglTexture);const k=R.source,J=h.get(k);delete J[T.__cacheKey],s.memory.textures--}function H(R){const T=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(T.__webglFramebuffer[J]))for(let lt=0;lt<T.__webglFramebuffer[J].length;lt++)n.deleteFramebuffer(T.__webglFramebuffer[J][lt]);else n.deleteFramebuffer(T.__webglFramebuffer[J]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[J])}else{if(Array.isArray(T.__webglFramebuffer))for(let J=0;J<T.__webglFramebuffer.length;J++)n.deleteFramebuffer(T.__webglFramebuffer[J]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let J=0;J<T.__webglColorRenderbuffer.length;J++)T.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[J]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const k=R.textures;for(let J=0,lt=k.length;J<lt;J++){const tt=i.get(k[J]);tt.__webglTexture&&(n.deleteTexture(tt.__webglTexture),s.memory.textures--),i.remove(k[J])}i.remove(R)}let F=0;function D(){F=0}function B(){const R=F;return R>=r.maxTextures&&Gt("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),F+=1,R}function S(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function C(R,T){const k=i.get(R);if(R.isVideoTexture&&st(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){const J=R.image;if(J===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{it(k,R,T);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+T)}function N(R,T){const k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){it(k,R,T);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+T)}function U(R,T){const k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){it(k,R,T);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+T)}function Q(R,T){const k=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&k.__version!==R.version){ht(k,R,T);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+T)}const X={[Vs]:n.REPEAT,[Bn]:n.CLAMP_TO_EDGE,[Gs]:n.MIRRORED_REPEAT},$={[Be]:n.NEAREST,[Qf]:n.NEAREST_MIPMAP_NEAREST,[Gr]:n.NEAREST_MIPMAP_LINEAR,[ze]:n.LINEAR,[Za]:n.LINEAR_MIPMAP_NEAREST,[_i]:n.LINEAR_MIPMAP_LINEAR},W={[np]:n.NEVER,[op]:n.ALWAYS,[ip]:n.LESS,[Yo]:n.LEQUAL,[rp]:n.EQUAL,[jo]:n.GEQUAL,[ap]:n.GREATER,[sp]:n.NOTEQUAL};function V(R,T){if(T.type===_n&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===ze||T.magFilter===Za||T.magFilter===Gr||T.magFilter===_i||T.minFilter===ze||T.minFilter===Za||T.minFilter===Gr||T.minFilter===_i)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,X[T.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,X[T.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,X[T.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,$[T.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,$[T.minFilter]),T.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,W[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Be||T.minFilter!==Gr&&T.minFilter!==_i||T.type===_n&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function pt(R,T){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",L));const J=T.source;let lt=h.get(J);lt===void 0&&(lt={},h.set(J,lt));const tt=S(T);if(tt!==R.__cacheKey){lt[tt]===void 0&&(lt[tt]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,k=!0),lt[tt].usedTimes++;const bt=lt[R.__cacheKey];bt!==void 0&&(lt[R.__cacheKey].usedTimes--,bt.usedTimes===0&&w(T)),R.__cacheKey=tt,R.__webglTexture=lt[tt].texture}return k}function mt(R,T,k){return Math.floor(Math.floor(R/k)/T)}function ut(R,T,k,J){const tt=R.updateRanges;if(tt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,k,J,T.data);else{tt.sort((ft,vt)=>ft.start-vt.start);let bt=0;for(let ft=1;ft<tt.length;ft++){const vt=tt[bt],It=tt[ft],Dt=vt.start+vt.count,Ct=mt(It.start,T.width,4),Yt=mt(vt.start,T.width,4);It.start<=Dt+1&&Ct===Yt&&mt(It.start+It.count-1,T.width,4)===Ct?vt.count=Math.max(vt.count,It.start+It.count-vt.start):(++bt,tt[bt]=It)}tt.length=bt+1;const xt=n.getParameter(n.UNPACK_ROW_LENGTH),At=n.getParameter(n.UNPACK_SKIP_PIXELS),kt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let ft=0,vt=tt.length;ft<vt;ft++){const It=tt[ft],Dt=Math.floor(It.start/4),Ct=Math.ceil(It.count/4),Yt=Dt%T.width,Y=Math.floor(Dt/T.width),Mt=Ct,_t=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Yt),n.pixelStorei(n.UNPACK_SKIP_ROWS,Y),e.texSubImage2D(n.TEXTURE_2D,0,Yt,Y,Mt,_t,k,J,T.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,xt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,At),n.pixelStorei(n.UNPACK_SKIP_ROWS,kt)}}function it(R,T,k){let J=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(J=n.TEXTURE_3D);const lt=pt(R,T),tt=T.source;e.bindTexture(J,R.__webglTexture,n.TEXTURE0+k);const bt=i.get(tt);if(tt.version!==bt.__version||lt===!0){e.activeTexture(n.TEXTURE0+k);const xt=ie.getPrimaries(ie.workingColorSpace),At=T.colorSpace===ri?null:ie.getPrimaries(T.colorSpace),kt=T.colorSpace===ri||xt===At?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let ft=v(T.image,!1,r.maxTextureSize);ft=ct(T,ft);const vt=a.convert(T.format,T.colorSpace),It=a.convert(T.type);let Dt=y(T.internalFormat,vt,It,T.colorSpace,T.isVideoTexture);V(J,T);let Ct;const Yt=T.mipmaps,Y=T.isVideoTexture!==!0,Mt=bt.__version===void 0||lt===!0,_t=tt.dataReady,wt=A(T,ft);if(T.isDepthTexture)Dt=x(T.format===xi,T.type),Mt&&(Y?e.texStorage2D(n.TEXTURE_2D,1,Dt,ft.width,ft.height):e.texImage2D(n.TEXTURE_2D,0,Dt,ft.width,ft.height,0,vt,It,null));else if(T.isDataTexture)if(Yt.length>0){Y&&Mt&&e.texStorage2D(n.TEXTURE_2D,wt,Dt,Yt[0].width,Yt[0].height);for(let gt=0,dt=Yt.length;gt<dt;gt++)Ct=Yt[gt],Y?_t&&e.texSubImage2D(n.TEXTURE_2D,gt,0,0,Ct.width,Ct.height,vt,It,Ct.data):e.texImage2D(n.TEXTURE_2D,gt,Dt,Ct.width,Ct.height,0,vt,It,Ct.data);T.generateMipmaps=!1}else Y?(Mt&&e.texStorage2D(n.TEXTURE_2D,wt,Dt,ft.width,ft.height),_t&&ut(T,ft,vt,It)):e.texImage2D(n.TEXTURE_2D,0,Dt,ft.width,ft.height,0,vt,It,ft.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Y&&Mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,Dt,Yt[0].width,Yt[0].height,ft.depth);for(let gt=0,dt=Yt.length;gt<dt;gt++)if(Ct=Yt[gt],T.format!==hn)if(vt!==null)if(Y){if(_t)if(T.layerUpdates.size>0){const Bt=gc(Ct.width,Ct.height,T.format,T.type);for(const qt of T.layerUpdates){const fe=Ct.data.subarray(qt*Bt/Ct.data.BYTES_PER_ELEMENT,(qt+1)*Bt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,gt,0,0,qt,Ct.width,Ct.height,1,vt,fe)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,gt,0,0,0,Ct.width,Ct.height,ft.depth,vt,Ct.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,gt,Dt,Ct.width,Ct.height,ft.depth,0,Ct.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?_t&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,gt,0,0,0,Ct.width,Ct.height,ft.depth,vt,It,Ct.data):e.texImage3D(n.TEXTURE_2D_ARRAY,gt,Dt,Ct.width,Ct.height,ft.depth,0,vt,It,Ct.data)}else{Y&&Mt&&e.texStorage2D(n.TEXTURE_2D,wt,Dt,Yt[0].width,Yt[0].height);for(let gt=0,dt=Yt.length;gt<dt;gt++)Ct=Yt[gt],T.format!==hn?vt!==null?Y?_t&&e.compressedTexSubImage2D(n.TEXTURE_2D,gt,0,0,Ct.width,Ct.height,vt,Ct.data):e.compressedTexImage2D(n.TEXTURE_2D,gt,Dt,Ct.width,Ct.height,0,Ct.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?_t&&e.texSubImage2D(n.TEXTURE_2D,gt,0,0,Ct.width,Ct.height,vt,It,Ct.data):e.texImage2D(n.TEXTURE_2D,gt,Dt,Ct.width,Ct.height,0,vt,It,Ct.data)}else if(T.isDataArrayTexture)if(Y){if(Mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,Dt,ft.width,ft.height,ft.depth),_t)if(T.layerUpdates.size>0){const gt=gc(ft.width,ft.height,T.format,T.type);for(const dt of T.layerUpdates){const Bt=ft.data.subarray(dt*gt/ft.data.BYTES_PER_ELEMENT,(dt+1)*gt/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,dt,ft.width,ft.height,1,vt,It,Bt)}T.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,vt,It,ft.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Dt,ft.width,ft.height,ft.depth,0,vt,It,ft.data);else if(T.isData3DTexture)Y?(Mt&&e.texStorage3D(n.TEXTURE_3D,wt,Dt,ft.width,ft.height,ft.depth),_t&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,vt,It,ft.data)):e.texImage3D(n.TEXTURE_3D,0,Dt,ft.width,ft.height,ft.depth,0,vt,It,ft.data);else if(T.isFramebufferTexture){if(Mt)if(Y)e.texStorage2D(n.TEXTURE_2D,wt,Dt,ft.width,ft.height);else{let gt=ft.width,dt=ft.height;for(let Bt=0;Bt<wt;Bt++)e.texImage2D(n.TEXTURE_2D,Bt,Dt,gt,dt,0,vt,It,null),gt>>=1,dt>>=1}}else if(Yt.length>0){if(Y&&Mt){const gt=G(Yt[0]);e.texStorage2D(n.TEXTURE_2D,wt,Dt,gt.width,gt.height)}for(let gt=0,dt=Yt.length;gt<dt;gt++)Ct=Yt[gt],Y?_t&&e.texSubImage2D(n.TEXTURE_2D,gt,0,0,vt,It,Ct):e.texImage2D(n.TEXTURE_2D,gt,Dt,vt,It,Ct);T.generateMipmaps=!1}else if(Y){if(Mt){const gt=G(ft);e.texStorage2D(n.TEXTURE_2D,wt,Dt,gt.width,gt.height)}_t&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,vt,It,ft)}else e.texImage2D(n.TEXTURE_2D,0,Dt,vt,It,ft);g(T)&&p(J),bt.__version=tt.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function ht(R,T,k){if(T.image.length!==6)return;const J=pt(R,T),lt=T.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+k);const tt=i.get(lt);if(lt.version!==tt.__version||J===!0){e.activeTexture(n.TEXTURE0+k);const bt=ie.getPrimaries(ie.workingColorSpace),xt=T.colorSpace===ri?null:ie.getPrimaries(T.colorSpace),At=T.colorSpace===ri||bt===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const kt=T.isCompressedTexture||T.image[0].isCompressedTexture,ft=T.image[0]&&T.image[0].isDataTexture,vt=[];for(let dt=0;dt<6;dt++)!kt&&!ft?vt[dt]=v(T.image[dt],!0,r.maxCubemapSize):vt[dt]=ft?T.image[dt].image:T.image[dt],vt[dt]=ct(T,vt[dt]);const It=vt[0],Dt=a.convert(T.format,T.colorSpace),Ct=a.convert(T.type),Yt=y(T.internalFormat,Dt,Ct,T.colorSpace),Y=T.isVideoTexture!==!0,Mt=tt.__version===void 0||J===!0,_t=lt.dataReady;let wt=A(T,It);V(n.TEXTURE_CUBE_MAP,T);let gt;if(kt){Y&&Mt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,Yt,It.width,It.height);for(let dt=0;dt<6;dt++){gt=vt[dt].mipmaps;for(let Bt=0;Bt<gt.length;Bt++){const qt=gt[Bt];T.format!==hn?Dt!==null?Y?_t&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Bt,0,0,qt.width,qt.height,Dt,qt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Bt,Yt,qt.width,qt.height,0,qt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Bt,0,0,qt.width,qt.height,Dt,Ct,qt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Bt,Yt,qt.width,qt.height,0,Dt,Ct,qt.data)}}}else{if(gt=T.mipmaps,Y&&Mt){gt.length>0&&wt++;const dt=G(vt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,Yt,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(ft){Y?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,vt[dt].width,vt[dt].height,Dt,Ct,vt[dt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Yt,vt[dt].width,vt[dt].height,0,Dt,Ct,vt[dt].data);for(let Bt=0;Bt<gt.length;Bt++){const fe=gt[Bt].image[dt].image;Y?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Bt+1,0,0,fe.width,fe.height,Dt,Ct,fe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Bt+1,Yt,fe.width,fe.height,0,Dt,Ct,fe.data)}}else{Y?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Dt,Ct,vt[dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Yt,Dt,Ct,vt[dt]);for(let Bt=0;Bt<gt.length;Bt++){const qt=gt[Bt];Y?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Bt+1,0,0,Dt,Ct,qt.image[dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Bt+1,Yt,Dt,Ct,qt.image[dt])}}}g(T)&&p(n.TEXTURE_CUBE_MAP),tt.__version=lt.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function at(R,T,k,J,lt,tt){const bt=a.convert(k.format,k.colorSpace),xt=a.convert(k.type),At=y(k.internalFormat,bt,xt,k.colorSpace),kt=i.get(T),ft=i.get(k);if(ft.__renderTarget=T,!kt.__hasExternalTextures){const vt=Math.max(1,T.width>>tt),It=Math.max(1,T.height>>tt);lt===n.TEXTURE_3D||lt===n.TEXTURE_2D_ARRAY?e.texImage3D(lt,tt,At,vt,It,T.depth,0,bt,xt,null):e.texImage2D(lt,tt,At,vt,It,0,bt,xt,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),q(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,lt,ft.__webglTexture,0,E(T)):(lt===n.TEXTURE_2D||lt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,lt,ft.__webglTexture,tt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function yt(R,T,k){if(n.bindRenderbuffer(n.RENDERBUFFER,R),T.depthBuffer){const J=T.depthTexture,lt=J&&J.isDepthTexture?J.type:null,tt=x(T.stencilBuffer,lt),bt=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;q(T)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,E(T),tt,T.width,T.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,E(T),tt,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,tt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,bt,n.RENDERBUFFER,R)}else{const J=T.textures;for(let lt=0;lt<J.length;lt++){const tt=J[lt],bt=a.convert(tt.format,tt.colorSpace),xt=a.convert(tt.type),At=y(tt.internalFormat,bt,xt,tt.colorSpace);q(T)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,E(T),At,T.width,T.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,E(T),At,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,At,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Et(R,T,k){const J=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const lt=i.get(T.depthTexture);if(lt.__renderTarget=T,(!lt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),J){if(lt.__webglInit===void 0&&(lt.__webglInit=!0,T.depthTexture.addEventListener("dispose",L)),lt.__webglTexture===void 0){lt.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,lt.__webglTexture),V(n.TEXTURE_CUBE_MAP,T.depthTexture);const kt=a.convert(T.depthTexture.format),ft=a.convert(T.depthTexture.type);let vt;T.depthTexture.format===Xn?vt=n.DEPTH_COMPONENT24:T.depthTexture.format===xi&&(vt=n.DEPTH24_STENCIL8);for(let It=0;It<6;It++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,vt,T.width,T.height,0,kt,ft,null)}}else C(T.depthTexture,0);const tt=lt.__webglTexture,bt=E(T),xt=J?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,At=T.depthTexture.format===xi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===Xn)q(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,At,xt,tt,0,bt):n.framebufferTexture2D(n.FRAMEBUFFER,At,xt,tt,0);else if(T.depthTexture.format===xi)q(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,At,xt,tt,0,bt):n.framebufferTexture2D(n.FRAMEBUFFER,At,xt,tt,0);else throw new Error("Unknown depthTexture format")}function St(R){const T=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){const J=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),J){const lt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,J.removeEventListener("dispose",lt)};J.addEventListener("dispose",lt),T.__depthDisposeCallback=lt}T.__boundDepthTexture=J}if(R.depthTexture&&!T.__autoAllocateDepthBuffer)if(k)for(let J=0;J<6;J++)Et(T.__webglFramebuffer[J],R,J);else{const J=R.texture.mipmaps;J&&J.length>0?Et(T.__webglFramebuffer[0],R,0):Et(T.__webglFramebuffer,R,0)}else if(k){T.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[J]),T.__webglDepthbuffer[J]===void 0)T.__webglDepthbuffer[J]=n.createRenderbuffer(),yt(T.__webglDepthbuffer[J],R,!1);else{const lt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=T.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,tt)}}else{const J=R.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),yt(T.__webglDepthbuffer,R,!1);else{const lt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,tt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Wt(R,T,k){const J=i.get(R);T!==void 0&&at(J.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&St(R)}function Vt(R){const T=R.texture,k=i.get(R),J=i.get(T);R.addEventListener("dispose",P);const lt=R.textures,tt=R.isWebGLCubeRenderTarget===!0,bt=lt.length>1;if(bt||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=T.version,s.memory.textures++),tt){k.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(T.mipmaps&&T.mipmaps.length>0){k.__webglFramebuffer[xt]=[];for(let At=0;At<T.mipmaps.length;At++)k.__webglFramebuffer[xt][At]=n.createFramebuffer()}else k.__webglFramebuffer[xt]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){k.__webglFramebuffer=[];for(let xt=0;xt<T.mipmaps.length;xt++)k.__webglFramebuffer[xt]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(bt)for(let xt=0,At=lt.length;xt<At;xt++){const kt=i.get(lt[xt]);kt.__webglTexture===void 0&&(kt.__webglTexture=n.createTexture(),s.memory.textures++)}if(R.samples>0&&q(R)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let xt=0;xt<lt.length;xt++){const At=lt[xt];k.__webglColorRenderbuffer[xt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[xt]);const kt=a.convert(At.format,At.colorSpace),ft=a.convert(At.type),vt=y(At.internalFormat,kt,ft,At.colorSpace,R.isXRRenderTarget===!0),It=E(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,It,vt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,k.__webglColorRenderbuffer[xt])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),yt(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(tt){e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),V(n.TEXTURE_CUBE_MAP,T);for(let xt=0;xt<6;xt++)if(T.mipmaps&&T.mipmaps.length>0)for(let At=0;At<T.mipmaps.length;At++)at(k.__webglFramebuffer[xt][At],R,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,At);else at(k.__webglFramebuffer[xt],R,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);g(T)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let xt=0,At=lt.length;xt<At;xt++){const kt=lt[xt],ft=i.get(kt);let vt=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(vt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(vt,ft.__webglTexture),V(vt,kt),at(k.__webglFramebuffer,R,kt,n.COLOR_ATTACHMENT0+xt,vt,0),g(kt)&&p(vt)}e.unbindTexture()}else{let xt=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(xt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(xt,J.__webglTexture),V(xt,T),T.mipmaps&&T.mipmaps.length>0)for(let At=0;At<T.mipmaps.length;At++)at(k.__webglFramebuffer[At],R,T,n.COLOR_ATTACHMENT0,xt,At);else at(k.__webglFramebuffer,R,T,n.COLOR_ATTACHMENT0,xt,0);g(T)&&p(xt),e.unbindTexture()}R.depthBuffer&&St(R)}function b(R){const T=R.textures;for(let k=0,J=T.length;k<J;k++){const lt=T[k];if(g(lt)){const tt=_(R),bt=i.get(lt).__webglTexture;e.bindTexture(tt,bt),p(tt),e.unbindTexture()}}}const rt=[],K=[];function O(R){if(R.samples>0){if(q(R)===!1){const T=R.textures,k=R.width,J=R.height;let lt=n.COLOR_BUFFER_BIT;const tt=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=i.get(R),xt=T.length>1;if(xt)for(let kt=0;kt<T.length;kt++)e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+kt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+kt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);const At=R.texture.mipmaps;At&&At.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let kt=0;kt<T.length;kt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(lt|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(lt|=n.STENCIL_BUFFER_BIT)),xt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,bt.__webglColorRenderbuffer[kt]);const ft=i.get(T[kt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ft,0)}n.blitFramebuffer(0,0,k,J,0,0,k,J,lt,n.NEAREST),l===!0&&(rt.length=0,K.length=0,rt.push(n.COLOR_ATTACHMENT0+kt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(rt.push(tt),K.push(tt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,K)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xt)for(let kt=0;kt<T.length;kt++){e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+kt,n.RENDERBUFFER,bt.__webglColorRenderbuffer[kt]);const ft=i.get(T[kt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+kt,n.TEXTURE_2D,ft,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const T=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function E(R){return Math.min(r.maxSamples,R.samples)}function q(R){const T=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function st(R){const T=s.render.frame;u.get(R)!==T&&(u.set(R,T),R.update())}function ct(R,T){const k=R.colorSpace,J=R.format,lt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==$i&&k!==ri&&(ie.getTransfer(k)===le?(J!==hn||lt!==Qe)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ae("WebGLTextures: Unsupported texture color space:",k)),T}function G(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=D,this.setTexture2D=C,this.setTexture2DArray=N,this.setTexture3D=U,this.setTextureCube=Q,this.rebindTextures=Wt,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=b,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=at,this.useMultisampledRTT=q,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function px(n,t){function e(i,r=ri){let a;const s=ie.getTransfer(r);if(i===Qe)return n.UNSIGNED_BYTE;if(i===Vo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Go)return n.UNSIGNED_SHORT_5_5_5_1;if(i===_d)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===xd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===gd)return n.BYTE;if(i===vd)return n.SHORT;if(i===Ar)return n.UNSIGNED_SHORT;if(i===Ho)return n.INT;if(i===Mn)return n.UNSIGNED_INT;if(i===_n)return n.FLOAT;if(i===Wn)return n.HALF_FLOAT;if(i===yd)return n.ALPHA;if(i===Sd)return n.RGB;if(i===hn)return n.RGBA;if(i===Xn)return n.DEPTH_COMPONENT;if(i===xi)return n.DEPTH_STENCIL;if(i===Md)return n.RED;if(i===Wo)return n.RED_INTEGER;if(i===Ji)return n.RG;if(i===Xo)return n.RG_INTEGER;if(i===qo)return n.RGBA_INTEGER;if(i===xa||i===ya||i===Sa||i===Ma)if(s===le)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===xa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ya)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Sa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ma)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===xa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ya)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Sa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ma)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ws||i===Xs||i===qs||i===Ys)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Ws)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xs)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qs)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ys)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===js||i===Zs||i===Ks||i===Js||i===$s||i===Qs||i===to)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===js||i===Zs)return s===le?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Ks)return s===le?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Js)return a.COMPRESSED_R11_EAC;if(i===$s)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Qs)return a.COMPRESSED_RG11_EAC;if(i===to)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===eo||i===no||i===io||i===ro||i===ao||i===so||i===oo||i===lo||i===co||i===uo||i===ho||i===fo||i===po||i===mo)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===eo)return s===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===no)return s===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===io)return s===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ro)return s===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ao)return s===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===so)return s===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===oo)return s===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===lo)return s===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===co)return s===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===uo)return s===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ho)return s===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fo)return s===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===po)return s===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===mo)return s===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===go||i===vo||i===_o)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===go)return s===le?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_o)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xo||i===yo||i===So||i===Mo)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===xo)return a.COMPRESSED_RED_RGTC1_EXT;if(i===yo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===So)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Dr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const mx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gx=`
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

}`;class vx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Ld(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new bn({vertexShader:mx,fragmentShader:gx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ee(new Na(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _x extends Ei{constructor(t,e){super();const i=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,m=null;const v=typeof XRWebGLBinding<"u",g=new vx,p={},_=e.getContextAttributes();let y=null,x=null;const A=[],L=[],P=new Lt;let M=null;const w=new nn;w.viewport=new _e;const H=new nn;H.viewport=new _e;const F=[w,H],D=new Dm;let B=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ht=A[it];return ht===void 0&&(ht=new ns,A[it]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(it){let ht=A[it];return ht===void 0&&(ht=new ns,A[it]=ht),ht.getGripSpace()},this.getHand=function(it){let ht=A[it];return ht===void 0&&(ht=new ns,A[it]=ht),ht.getHandSpace()};function C(it){const ht=L.indexOf(it.inputSource);if(ht===-1)return;const at=A[ht];at!==void 0&&(at.update(it.inputSource,it.frame,c||s),at.dispatchEvent({type:it.type,data:it.inputSource}))}function N(){r.removeEventListener("select",C),r.removeEventListener("selectstart",C),r.removeEventListener("selectend",C),r.removeEventListener("squeeze",C),r.removeEventListener("squeezestart",C),r.removeEventListener("squeezeend",C),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",U);for(let it=0;it<A.length;it++){const ht=L[it];ht!==null&&(L[it]=null,A[it].disconnect(ht))}B=null,S=null,g.reset();for(const it in p)delete p[it];t.setRenderTarget(y),d=null,h=null,f=null,r=null,x=null,ut.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){a=it,i.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){o=it,i.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(it){c=it},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(it){if(r=it,r!==null){if(y=t.getRenderTarget(),r.addEventListener("select",C),r.addEventListener("selectstart",C),r.addEventListener("selectend",C),r.addEventListener("squeeze",C),r.addEventListener("squeezestart",C),r.addEventListener("squeezeend",C),r.addEventListener("end",N),r.addEventListener("inputsourceschange",U),_.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let at=null,yt=null,Et=null;_.depth&&(Et=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=_.stencil?xi:Xn,yt=_.stencil?Dr:Mn);const St={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:a};f=this.getBinding(),h=f.createProjectionLayer(St),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),x=new Sn(h.textureWidth,h.textureHeight,{format:hn,type:Qe,depthTexture:new Pr(h.textureWidth,h.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const at={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(r,e,at),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Sn(d.framebufferWidth,d.framebufferHeight,{format:hn,type:Qe,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),ut.setContext(r),ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function U(it){for(let ht=0;ht<it.removed.length;ht++){const at=it.removed[ht],yt=L.indexOf(at);yt>=0&&(L[yt]=null,A[yt].disconnect(at))}for(let ht=0;ht<it.added.length;ht++){const at=it.added[ht];let yt=L.indexOf(at);if(yt===-1){for(let St=0;St<A.length;St++)if(St>=L.length){L.push(at),yt=St;break}else if(L[St]===null){L[St]=at,yt=St;break}if(yt===-1)break}const Et=A[yt];Et&&Et.connect(at)}}const Q=new j,X=new j;function $(it,ht,at){Q.setFromMatrixPosition(ht.matrixWorld),X.setFromMatrixPosition(at.matrixWorld);const yt=Q.distanceTo(X),Et=ht.projectionMatrix.elements,St=at.projectionMatrix.elements,Wt=Et[14]/(Et[10]-1),Vt=Et[14]/(Et[10]+1),b=(Et[9]+1)/Et[5],rt=(Et[9]-1)/Et[5],K=(Et[8]-1)/Et[0],O=(St[8]+1)/St[0],E=Wt*K,q=Wt*O,st=yt/(-K+O),ct=st*-K;if(ht.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(ct),it.translateZ(st),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Et[10]===-1)it.projectionMatrix.copy(ht.projectionMatrix),it.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const G=Wt+st,R=Vt+st,T=E-ct,k=q+(yt-ct),J=b*Vt/R*G,lt=rt*Vt/R*G;it.projectionMatrix.makePerspective(T,k,J,lt,G,R),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function W(it,ht){ht===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ht.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(r===null)return;let ht=it.near,at=it.far;g.texture!==null&&(g.depthNear>0&&(ht=g.depthNear),g.depthFar>0&&(at=g.depthFar)),D.near=H.near=w.near=ht,D.far=H.far=w.far=at,(B!==D.near||S!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),B=D.near,S=D.far),D.layers.mask=it.layers.mask|6,w.layers.mask=D.layers.mask&-5,H.layers.mask=D.layers.mask&-3;const yt=it.parent,Et=D.cameras;W(D,yt);for(let St=0;St<Et.length;St++)W(Et[St],yt);Et.length===2?$(D,w,H):D.projectionMatrix.copy(w.projectionMatrix),V(it,D,yt)};function V(it,ht,at){at===null?it.matrix.copy(ht.matrixWorld):(it.matrix.copy(at.matrixWorld),it.matrix.invert(),it.matrix.multiply(ht.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ht.projectionMatrix),it.projectionMatrixInverse.copy(ht.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Eo*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(it){l=it,h!==null&&(h.fixedFoveation=it),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=it)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(it){return p[it]};let pt=null;function mt(it,ht){if(u=ht.getViewerPose(c||s),m=ht,u!==null){const at=u.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let yt=!1;at.length!==D.cameras.length&&(D.cameras.length=0,yt=!0);for(let Vt=0;Vt<at.length;Vt++){const b=at[Vt];let rt=null;if(d!==null)rt=d.getViewport(b);else{const O=f.getViewSubImage(h,b);rt=O.viewport,Vt===0&&(t.setRenderTargetTextures(x,O.colorTexture,O.depthStencilTexture),t.setRenderTarget(x))}let K=F[Vt];K===void 0&&(K=new nn,K.layers.enable(Vt),K.viewport=new _e,F[Vt]=K),K.matrix.fromArray(b.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(b.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(rt.x,rt.y,rt.width,rt.height),Vt===0&&(D.matrix.copy(K.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),yt===!0&&D.cameras.push(K)}const Et=r.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const Vt=f.getDepthInformation(at[0]);Vt&&Vt.isValid&&Vt.texture&&g.init(Vt,r.renderState)}if(Et&&Et.includes("camera-access")&&v){t.state.unbindTexture(),f=i.getBinding();for(let Vt=0;Vt<at.length;Vt++){const b=at[Vt].camera;if(b){let rt=p[b];rt||(rt=new Ld,p[b]=rt);const K=f.getCameraImage(b);rt.sourceTexture=K}}}}for(let at=0;at<A.length;at++){const yt=L[at],Et=A[at];yt!==null&&Et!==void 0&&Et.update(yt,ht,c||s)}pt&&pt(it,ht),ht.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ht}),m=null}const ut=new Xd;ut.setAnimationLoop(mt),this.setAnimationLoop=function(it){pt=it},this.dispose=function(){}}}const mi=new En,xx=new me;function yx(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Vd(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,_,y,x){p.isMeshBasicMaterial?a(g,p):p.isMeshLambertMaterial?(a(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(a(g,p),f(g,p)):p.isMeshPhongMaterial?(a(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(a(g,p),h(g,p),p.isMeshPhysicalMaterial&&d(g,p,x)):p.isMeshMatcapMaterial?(a(g,p),m(g,p)):p.isMeshDepthMaterial?a(g,p):p.isMeshDistanceMaterial?(a(g,p),v(g,p)):p.isMeshNormalMaterial?a(g,p):p.isLineBasicMaterial?(s(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,_,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===je&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===je&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const _=t.get(p),y=_.envMap,x=_.envMapRotation;y&&(g.envMap.value=y,mi.copy(x),mi.x*=-1,mi.y*=-1,mi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),g.envMapRotation.value.setFromMatrix4(xx.makeRotationFromEuler(mi)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function s(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,_,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,_){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===je&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const _=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Sx(n,t,e,i){let r={},a={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){const x=y.program;i.uniformBlockBinding(_,x)}function c(_,y){let x=r[_.id];x===void 0&&(m(_),x=u(_),r[_.id]=x,_.addEventListener("dispose",g));const A=y.program;i.updateUBOMapping(_,A);const L=t.render.frame;a[_.id]!==L&&(h(_),a[_.id]=L)}function u(_){const y=f();_.__bindingPointIndex=y;const x=n.createBuffer(),A=_.__size,L=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,A,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function f(){for(let _=0;_<o;_++)if(s.indexOf(_)===-1)return s.push(_),_;return ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const y=r[_.id],x=_.uniforms,A=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let L=0,P=x.length;L<P;L++){const M=Array.isArray(x[L])?x[L]:[x[L]];for(let w=0,H=M.length;w<H;w++){const F=M[w];if(d(F,L,w,A)===!0){const D=F.__offset,B=Array.isArray(F.value)?F.value:[F.value];let S=0;for(let C=0;C<B.length;C++){const N=B[C],U=v(N);typeof N=="number"||typeof N=="boolean"?(F.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,D+S,F.__data)):N.isMatrix3?(F.__data[0]=N.elements[0],F.__data[1]=N.elements[1],F.__data[2]=N.elements[2],F.__data[3]=0,F.__data[4]=N.elements[3],F.__data[5]=N.elements[4],F.__data[6]=N.elements[5],F.__data[7]=0,F.__data[8]=N.elements[6],F.__data[9]=N.elements[7],F.__data[10]=N.elements[8],F.__data[11]=0):(N.toArray(F.__data,S),S+=U.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(_,y,x,A){const L=_.value,P=y+"_"+x;if(A[P]===void 0)return typeof L=="number"||typeof L=="boolean"?A[P]=L:A[P]=L.clone(),!0;{const M=A[P];if(typeof L=="number"||typeof L=="boolean"){if(M!==L)return A[P]=L,!0}else if(M.equals(L)===!1)return M.copy(L),!0}return!1}function m(_){const y=_.uniforms;let x=0;const A=16;for(let P=0,M=y.length;P<M;P++){const w=Array.isArray(y[P])?y[P]:[y[P]];for(let H=0,F=w.length;H<F;H++){const D=w[H],B=Array.isArray(D.value)?D.value:[D.value];for(let S=0,C=B.length;S<C;S++){const N=B[S],U=v(N),Q=x%A,X=Q%U.boundary,$=Q+X;x+=X,$!==0&&A-$<U.storage&&(x+=A-$),D.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=U.storage}}}const L=x%A;return L>0&&(x+=A-L),_.__size=x,_.__cache={},this}function v(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Gt("WebGLRenderer: Unsupported uniform value type.",_),y}function g(_){const y=_.target;y.removeEventListener("dispose",g);const x=s.indexOf(y.__bindingPointIndex);s.splice(x,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete a[y.id]}function p(){for(const _ in r)n.deleteBuffer(r[_]);s=[],r={},a={}}return{bind:l,update:c,dispose:p}}const Mx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mn=null;function Ex(){return mn===null&&(mn=new Ip(Mx,16,16,Ji,Wn),mn.name="DFG_LUT",mn.minFilter=ze,mn.magFilter=ze,mn.wrapS=Bn,mn.wrapT=Bn,mn.generateMipmaps=!1,mn.needsUpdate=!0),mn}class bx{constructor(t={}){const{canvas:e=cp(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Qe}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;const v=d,g=new Set([qo,Xo,Wo]),p=new Set([Qe,Mn,Ar,Dr,Vo,Go]),_=new Uint32Array(4),y=new Int32Array(4);let x=null,A=null;const L=[],P=[];let M=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let H=!1;this._outputColorSpace=$e;let F=0,D=0,B=null,S=-1,C=null;const N=new _e,U=new _e;let Q=null;const X=new Kt(0);let $=0,W=e.width,V=e.height,pt=1,mt=null,ut=null;const it=new _e(0,0,W,V),ht=new _e(0,0,W,V);let at=!1;const yt=new Jo;let Et=!1,St=!1;const Wt=new me,Vt=new j,b=new _e,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let K=!1;function O(){return B===null?pt:1}let E=i;function q(I,Z){return e.getContext(I,Z)}try{const I={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ko}`),e.addEventListener("webglcontextlost",Bt,!1),e.addEventListener("webglcontextrestored",qt,!1),e.addEventListener("webglcontextcreationerror",fe,!1),E===null){const Z="webgl2";if(E=q(Z,I),E===null)throw q(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw ae("WebGLRenderer: "+I.message),I}let st,ct,G,R,T,k,J,lt,tt,bt,xt,At,kt,ft,vt,It,Dt,Ct,Yt,Y,Mt,_t,wt;function gt(){st=new b0(E),st.init(),Mt=new px(E,st),ct=new g0(E,st,t,Mt),G=new hx(E,st),ct.reversedDepthBuffer&&h&&G.buffers.depth.setReversed(!0),R=new A0(E),T=new $_,k=new fx(E,st,G,T,ct,Mt,R),J=new E0(w),lt=new Lm(E),_t=new p0(E,lt),tt=new T0(E,lt,R,_t),bt=new C0(E,tt,lt,_t,R),Ct=new D0(E,ct,k),vt=new v0(T),xt=new J_(w,J,st,ct,_t,vt),At=new yx(w,T),kt=new tx,ft=new sx(st),Dt=new f0(w,J,G,bt,m,l),It=new ux(w,bt,ct),wt=new Sx(E,R,ct,G),Yt=new m0(E,st,R),Y=new w0(E,st,R),R.programs=xt.programs,w.capabilities=ct,w.extensions=st,w.properties=T,w.renderLists=kt,w.shadowMap=It,w.state=G,w.info=R}gt(),v!==Qe&&(M=new R0(v,e.width,e.height,r,a));const dt=new _x(w,E);this.xr=dt,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const I=st.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=st.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return pt},this.setPixelRatio=function(I){I!==void 0&&(pt=I,this.setSize(W,V,!1))},this.getSize=function(I){return I.set(W,V)},this.setSize=function(I,Z,ot=!0){if(dt.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}W=I,V=Z,e.width=Math.floor(I*pt),e.height=Math.floor(Z*pt),ot===!0&&(e.style.width=I+"px",e.style.height=Z+"px"),M!==null&&M.setSize(e.width,e.height),this.setViewport(0,0,I,Z)},this.getDrawingBufferSize=function(I){return I.set(W*pt,V*pt).floor()},this.setDrawingBufferSize=function(I,Z,ot){W=I,V=Z,pt=ot,e.width=Math.floor(I*ot),e.height=Math.floor(Z*ot),this.setViewport(0,0,I,Z)},this.setEffects=function(I){if(v===Qe){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let Z=0;Z<I.length;Z++)if(I[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(N)},this.getViewport=function(I){return I.copy(it)},this.setViewport=function(I,Z,ot,nt){I.isVector4?it.set(I.x,I.y,I.z,I.w):it.set(I,Z,ot,nt),G.viewport(N.copy(it).multiplyScalar(pt).round())},this.getScissor=function(I){return I.copy(ht)},this.setScissor=function(I,Z,ot,nt){I.isVector4?ht.set(I.x,I.y,I.z,I.w):ht.set(I,Z,ot,nt),G.scissor(U.copy(ht).multiplyScalar(pt).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(I){G.setScissorTest(at=I)},this.setOpaqueSort=function(I){mt=I},this.setTransparentSort=function(I){ut=I},this.getClearColor=function(I){return I.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(I=!0,Z=!0,ot=!0){let nt=0;if(I){let et=!1;if(B!==null){const Pt=B.texture.format;et=g.has(Pt)}if(et){const Pt=B.texture.type,Ut=p.has(Pt),Rt=Dt.getClearColor(),Ft=Dt.getClearAlpha(),zt=Rt.r,jt=Rt.g,$t=Rt.b;Ut?(_[0]=zt,_[1]=jt,_[2]=$t,_[3]=Ft,E.clearBufferuiv(E.COLOR,0,_)):(y[0]=zt,y[1]=jt,y[2]=$t,y[3]=Ft,E.clearBufferiv(E.COLOR,0,y))}else nt|=E.COLOR_BUFFER_BIT}Z&&(nt|=E.DEPTH_BUFFER_BIT),ot&&(nt|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&E.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Bt,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",fe,!1),Dt.dispose(),kt.dispose(),ft.dispose(),T.dispose(),J.dispose(),bt.dispose(),_t.dispose(),wt.dispose(),xt.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",al),dt.removeEventListener("sessionend",sl),li.stop()};function Bt(I){I.preventDefault(),kl("WebGLRenderer: Context Lost."),H=!0}function qt(){kl("WebGLRenderer: Context Restored."),H=!1;const I=R.autoReset,Z=It.enabled,ot=It.autoUpdate,nt=It.needsUpdate,et=It.type;gt(),R.autoReset=I,It.enabled=Z,It.autoUpdate=ot,It.needsUpdate=nt,It.type=et}function fe(I){ae("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function oe(I){const Z=I.target;Z.removeEventListener("dispose",oe),wn(Z)}function wn(I){An(I),T.remove(I)}function An(I){const Z=T.get(I).programs;Z!==void 0&&(Z.forEach(function(ot){xt.releaseProgram(ot)}),I.isShaderMaterial&&xt.releaseShaderCache(I))}this.renderBufferDirect=function(I,Z,ot,nt,et,Pt){Z===null&&(Z=rt);const Ut=et.isMesh&&et.matrixWorld.determinant()<0,Rt=cu(I,Z,ot,nt,et);G.setMaterial(nt,Ut);let Ft=ot.index,zt=1;if(nt.wireframe===!0){if(Ft=tt.getWireframeAttribute(ot),Ft===void 0)return;zt=2}const jt=ot.drawRange,$t=ot.attributes.position;let Ht=jt.start*zt,ce=(jt.start+jt.count)*zt;Pt!==null&&(Ht=Math.max(Ht,Pt.start*zt),ce=Math.min(ce,(Pt.start+Pt.count)*zt)),Ft!==null?(Ht=Math.max(Ht,0),ce=Math.min(ce,Ft.count)):$t!=null&&(Ht=Math.max(Ht,0),ce=Math.min(ce,$t.count));const xe=ce-Ht;if(xe<0||xe===1/0)return;_t.setup(et,nt,Rt,ot,Ft);let ve,de=Yt;if(Ft!==null&&(ve=lt.get(Ft),de=Y,de.setIndex(ve)),et.isMesh)nt.wireframe===!0?(G.setLineWidth(nt.wireframeLinewidth*O()),de.setMode(E.LINES)):de.setMode(E.TRIANGLES);else if(et.isLine){let Ne=nt.linewidth;Ne===void 0&&(Ne=1),G.setLineWidth(Ne*O()),et.isLineSegments?de.setMode(E.LINES):et.isLineLoop?de.setMode(E.LINE_LOOP):de.setMode(E.LINE_STRIP)}else et.isPoints?de.setMode(E.POINTS):et.isSprite&&de.setMode(E.TRIANGLES);if(et.isBatchedMesh)if(et._multiDrawInstances!==null)Da("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),de.renderMultiDrawInstances(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount,et._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))de.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{const Ne=et._multiDrawStarts,Nt=et._multiDrawCounts,Ze=et._multiDrawCount,re=Ft?lt.get(Ft).bytesPerElement:1,sn=T.get(nt).currentProgram.getUniforms();for(let fn=0;fn<Ze;fn++)sn.setValue(E,"_gl_DrawID",fn),de.render(Ne[fn]/re,Nt[fn])}else if(et.isInstancedMesh)de.renderInstances(Ht,xe,et.count);else if(ot.isInstancedBufferGeometry){const Ne=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Nt=Math.min(ot.instanceCount,Ne);de.renderInstances(Ht,xe,Nt)}else de.render(Ht,xe)};function rl(I,Z,ot){I.transparent===!0&&I.side===dn&&I.forceSinglePass===!1?(I.side=je,I.needsUpdate=!0,kr(I,Z,ot),I.side=si,I.needsUpdate=!0,kr(I,Z,ot),I.side=dn):kr(I,Z,ot)}this.compile=function(I,Z,ot=null){ot===null&&(ot=I),A=ft.get(ot),A.init(Z),P.push(A),ot.traverseVisible(function(et){et.isLight&&et.layers.test(Z.layers)&&(A.pushLight(et),et.castShadow&&A.pushShadow(et))}),I!==ot&&I.traverseVisible(function(et){et.isLight&&et.layers.test(Z.layers)&&(A.pushLight(et),et.castShadow&&A.pushShadow(et))}),A.setupLights();const nt=new Set;return I.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;const Pt=et.material;if(Pt)if(Array.isArray(Pt))for(let Ut=0;Ut<Pt.length;Ut++){const Rt=Pt[Ut];rl(Rt,ot,et),nt.add(Rt)}else rl(Pt,ot,et),nt.add(Pt)}),A=P.pop(),nt},this.compileAsync=function(I,Z,ot=null){const nt=this.compile(I,Z,ot);return new Promise(et=>{function Pt(){if(nt.forEach(function(Ut){T.get(Ut).currentProgram.isReady()&&nt.delete(Ut)}),nt.size===0){et(I);return}setTimeout(Pt,10)}st.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let Ha=null;function lu(I){Ha&&Ha(I)}function al(){li.stop()}function sl(){li.start()}const li=new Xd;li.setAnimationLoop(lu),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(I){Ha=I,dt.setAnimationLoop(I),I===null?li.stop():li.start()},dt.addEventListener("sessionstart",al),dt.addEventListener("sessionend",sl),this.render=function(I,Z){if(Z!==void 0&&Z.isCamera!==!0){ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;const ot=dt.enabled===!0&&dt.isPresenting===!0,nt=M!==null&&(B===null||ot)&&M.begin(w,B);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(Z),Z=dt.getCamera()),I.isScene===!0&&I.onBeforeRender(w,I,Z,B),A=ft.get(I,P.length),A.init(Z),P.push(A),Wt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),yt.setFromProjectionMatrix(Wt,xn,Z.reversedDepth),St=this.localClippingEnabled,Et=vt.init(this.clippingPlanes,St),x=kt.get(I,L.length),x.init(),L.push(x),dt.enabled===!0&&dt.isPresenting===!0){const Ut=w.xr.getDepthSensingMesh();Ut!==null&&Va(Ut,Z,-1/0,w.sortObjects)}Va(I,Z,0,w.sortObjects),x.finish(),w.sortObjects===!0&&x.sort(mt,ut),K=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,K&&Dt.addToRenderList(x,I),this.info.render.frame++,Et===!0&&vt.beginShadows();const et=A.state.shadowsArray;if(It.render(et,I,Z),Et===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(nt&&M.hasRenderPass())===!1){const Ut=x.opaque,Rt=x.transmissive;if(A.setupLights(),Z.isArrayCamera){const Ft=Z.cameras;if(Rt.length>0)for(let zt=0,jt=Ft.length;zt<jt;zt++){const $t=Ft[zt];ll(Ut,Rt,I,$t)}K&&Dt.render(I);for(let zt=0,jt=Ft.length;zt<jt;zt++){const $t=Ft[zt];ol(x,I,$t,$t.viewport)}}else Rt.length>0&&ll(Ut,Rt,I,Z),K&&Dt.render(I),ol(x,I,Z)}B!==null&&D===0&&(k.updateMultisampleRenderTarget(B),k.updateRenderTargetMipmap(B)),nt&&M.end(w),I.isScene===!0&&I.onAfterRender(w,I,Z),_t.resetDefaultState(),S=-1,C=null,P.pop(),P.length>0?(A=P[P.length-1],Et===!0&&vt.setGlobalState(w.clippingPlanes,A.state.camera)):A=null,L.pop(),L.length>0?x=L[L.length-1]:x=null};function Va(I,Z,ot,nt){if(I.visible===!1)return;if(I.layers.test(Z.layers)){if(I.isGroup)ot=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(Z);else if(I.isLight)A.pushLight(I),I.castShadow&&A.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||yt.intersectsSprite(I)){nt&&b.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Wt);const Ut=bt.update(I),Rt=I.material;Rt.visible&&x.push(I,Ut,Rt,ot,b.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||yt.intersectsObject(I))){const Ut=bt.update(I),Rt=I.material;if(nt&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),b.copy(I.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),b.copy(Ut.boundingSphere.center)),b.applyMatrix4(I.matrixWorld).applyMatrix4(Wt)),Array.isArray(Rt)){const Ft=Ut.groups;for(let zt=0,jt=Ft.length;zt<jt;zt++){const $t=Ft[zt],Ht=Rt[$t.materialIndex];Ht&&Ht.visible&&x.push(I,Ut,Ht,ot,b.z,$t)}}else Rt.visible&&x.push(I,Ut,Rt,ot,b.z,null)}}const Pt=I.children;for(let Ut=0,Rt=Pt.length;Ut<Rt;Ut++)Va(Pt[Ut],Z,ot,nt)}function ol(I,Z,ot,nt){const{opaque:et,transmissive:Pt,transparent:Ut}=I;A.setupLightsView(ot),Et===!0&&vt.setGlobalState(w.clippingPlanes,ot),nt&&G.viewport(N.copy(nt)),et.length>0&&Or(et,Z,ot),Pt.length>0&&Or(Pt,Z,ot),Ut.length>0&&Or(Ut,Z,ot),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function ll(I,Z,ot,nt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[nt.id]===void 0){const Ht=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[nt.id]=new Sn(1,1,{generateMipmaps:!0,type:Ht?Wn:Qe,minFilter:_i,samples:ct.samples,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace})}const Pt=A.state.transmissionRenderTarget[nt.id],Ut=nt.viewport||N;Pt.setSize(Ut.z*w.transmissionResolutionScale,Ut.w*w.transmissionResolutionScale);const Rt=w.getRenderTarget(),Ft=w.getActiveCubeFace(),zt=w.getActiveMipmapLevel();w.setRenderTarget(Pt),w.getClearColor(X),$=w.getClearAlpha(),$<1&&w.setClearColor(16777215,.5),w.clear(),K&&Dt.render(ot);const jt=w.toneMapping;w.toneMapping=yn;const $t=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),A.setupLightsView(nt),Et===!0&&vt.setGlobalState(w.clippingPlanes,nt),Or(I,ot,nt),k.updateMultisampleRenderTarget(Pt),k.updateRenderTargetMipmap(Pt),st.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let ce=0,xe=Z.length;ce<xe;ce++){const ve=Z[ce],{object:de,geometry:Ne,material:Nt,group:Ze}=ve;if(Nt.side===dn&&de.layers.test(nt.layers)){const re=Nt.side;Nt.side=je,Nt.needsUpdate=!0,cl(de,ot,nt,Ne,Nt,Ze),Nt.side=re,Nt.needsUpdate=!0,Ht=!0}}Ht===!0&&(k.updateMultisampleRenderTarget(Pt),k.updateRenderTargetMipmap(Pt))}w.setRenderTarget(Rt,Ft,zt),w.setClearColor(X,$),$t!==void 0&&(nt.viewport=$t),w.toneMapping=jt}function Or(I,Z,ot){const nt=Z.isScene===!0?Z.overrideMaterial:null;for(let et=0,Pt=I.length;et<Pt;et++){const Ut=I[et],{object:Rt,geometry:Ft,group:zt}=Ut;let jt=Ut.material;jt.allowOverride===!0&&nt!==null&&(jt=nt),Rt.layers.test(ot.layers)&&cl(Rt,Z,ot,Ft,jt,zt)}}function cl(I,Z,ot,nt,et,Pt){I.onBeforeRender(w,Z,ot,nt,et,Pt),I.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),et.onBeforeRender(w,Z,ot,nt,I,Pt),et.transparent===!0&&et.side===dn&&et.forceSinglePass===!1?(et.side=je,et.needsUpdate=!0,w.renderBufferDirect(ot,Z,nt,et,I,Pt),et.side=si,et.needsUpdate=!0,w.renderBufferDirect(ot,Z,nt,et,I,Pt),et.side=dn):w.renderBufferDirect(ot,Z,nt,et,I,Pt),I.onAfterRender(w,Z,ot,nt,et,Pt)}function kr(I,Z,ot){Z.isScene!==!0&&(Z=rt);const nt=T.get(I),et=A.state.lights,Pt=A.state.shadowsArray,Ut=et.state.version,Rt=xt.getParameters(I,et.state,Pt,Z,ot),Ft=xt.getProgramCacheKey(Rt);let zt=nt.programs;nt.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?Z.environment:null,nt.fog=Z.fog;const jt=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;nt.envMap=J.get(I.envMap||nt.environment,jt),nt.envMapRotation=nt.environment!==null&&I.envMap===null?Z.environmentRotation:I.envMapRotation,zt===void 0&&(I.addEventListener("dispose",oe),zt=new Map,nt.programs=zt);let $t=zt.get(Ft);if($t!==void 0){if(nt.currentProgram===$t&&nt.lightsStateVersion===Ut)return ul(I,Rt),$t}else Rt.uniforms=xt.getUniforms(I),I.onBeforeCompile(Rt,w),$t=xt.acquireProgram(Rt,Ft),zt.set(Ft,$t),nt.uniforms=Rt.uniforms;const Ht=nt.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ht.clippingPlanes=vt.uniform),ul(I,Rt),nt.needsLights=uu(I),nt.lightsStateVersion=Ut,nt.needsLights&&(Ht.ambientLightColor.value=et.state.ambient,Ht.lightProbe.value=et.state.probe,Ht.directionalLights.value=et.state.directional,Ht.directionalLightShadows.value=et.state.directionalShadow,Ht.spotLights.value=et.state.spot,Ht.spotLightShadows.value=et.state.spotShadow,Ht.rectAreaLights.value=et.state.rectArea,Ht.ltc_1.value=et.state.rectAreaLTC1,Ht.ltc_2.value=et.state.rectAreaLTC2,Ht.pointLights.value=et.state.point,Ht.pointLightShadows.value=et.state.pointShadow,Ht.hemisphereLights.value=et.state.hemi,Ht.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Ht.spotLightMatrix.value=et.state.spotLightMatrix,Ht.spotLightMap.value=et.state.spotLightMap,Ht.pointShadowMatrix.value=et.state.pointShadowMatrix),nt.currentProgram=$t,nt.uniformsList=null,$t}function dl(I){if(I.uniformsList===null){const Z=I.currentProgram.getUniforms();I.uniformsList=ba.seqWithValue(Z.seq,I.uniforms)}return I.uniformsList}function ul(I,Z){const ot=T.get(I);ot.outputColorSpace=Z.outputColorSpace,ot.batching=Z.batching,ot.batchingColor=Z.batchingColor,ot.instancing=Z.instancing,ot.instancingColor=Z.instancingColor,ot.instancingMorph=Z.instancingMorph,ot.skinning=Z.skinning,ot.morphTargets=Z.morphTargets,ot.morphNormals=Z.morphNormals,ot.morphColors=Z.morphColors,ot.morphTargetsCount=Z.morphTargetsCount,ot.numClippingPlanes=Z.numClippingPlanes,ot.numIntersection=Z.numClipIntersection,ot.vertexAlphas=Z.vertexAlphas,ot.vertexTangents=Z.vertexTangents,ot.toneMapping=Z.toneMapping}function cu(I,Z,ot,nt,et){Z.isScene!==!0&&(Z=rt),k.resetTextureUnits();const Pt=Z.fog,Ut=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?Z.environment:null,Rt=B===null?w.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:$i,Ft=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,zt=J.get(nt.envMap||Ut,Ft),jt=nt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,$t=!!ot.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Ht=!!ot.morphAttributes.position,ce=!!ot.morphAttributes.normal,xe=!!ot.morphAttributes.color;let ve=yn;nt.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(ve=w.toneMapping);const de=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Ne=de!==void 0?de.length:0,Nt=T.get(nt),Ze=A.state.lights;if(Et===!0&&(St===!0||I!==C)){const Ce=I===C&&nt.id===S;vt.setState(nt,I,Ce)}let re=!1;nt.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Ze.state.version||Nt.outputColorSpace!==Rt||et.isBatchedMesh&&Nt.batching===!1||!et.isBatchedMesh&&Nt.batching===!0||et.isBatchedMesh&&Nt.batchingColor===!0&&et.colorTexture===null||et.isBatchedMesh&&Nt.batchingColor===!1&&et.colorTexture!==null||et.isInstancedMesh&&Nt.instancing===!1||!et.isInstancedMesh&&Nt.instancing===!0||et.isSkinnedMesh&&Nt.skinning===!1||!et.isSkinnedMesh&&Nt.skinning===!0||et.isInstancedMesh&&Nt.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&Nt.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&Nt.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&Nt.instancingMorph===!1&&et.morphTexture!==null||Nt.envMap!==zt||nt.fog===!0&&Nt.fog!==Pt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==vt.numPlanes||Nt.numIntersection!==vt.numIntersection)||Nt.vertexAlphas!==jt||Nt.vertexTangents!==$t||Nt.morphTargets!==Ht||Nt.morphNormals!==ce||Nt.morphColors!==xe||Nt.toneMapping!==ve||Nt.morphTargetsCount!==Ne)&&(re=!0):(re=!0,Nt.__version=nt.version);let sn=Nt.currentProgram;re===!0&&(sn=kr(nt,Z,et));let fn=!1,ci=!1,bi=!1;const he=sn.getUniforms(),Ie=Nt.uniforms;if(G.useProgram(sn.program)&&(fn=!0,ci=!0,bi=!0),nt.id!==S&&(S=nt.id,ci=!0),fn||C!==I){G.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),he.setValue(E,"projectionMatrix",I.projectionMatrix),he.setValue(E,"viewMatrix",I.matrixWorldInverse);const Zn=he.map.cameraPosition;Zn!==void 0&&Zn.setValue(E,Vt.setFromMatrixPosition(I.matrixWorld)),ct.logarithmicDepthBuffer&&he.setValue(E,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&he.setValue(E,"isOrthographic",I.isOrthographicCamera===!0),C!==I&&(C=I,ci=!0,bi=!0)}if(Nt.needsLights&&(Ze.state.directionalShadowMap.length>0&&he.setValue(E,"directionalShadowMap",Ze.state.directionalShadowMap,k),Ze.state.spotShadowMap.length>0&&he.setValue(E,"spotShadowMap",Ze.state.spotShadowMap,k),Ze.state.pointShadowMap.length>0&&he.setValue(E,"pointShadowMap",Ze.state.pointShadowMap,k)),et.isSkinnedMesh){he.setOptional(E,et,"bindMatrix"),he.setOptional(E,et,"bindMatrixInverse");const Ce=et.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),he.setValue(E,"boneTexture",Ce.boneTexture,k))}et.isBatchedMesh&&(he.setOptional(E,et,"batchingTexture"),he.setValue(E,"batchingTexture",et._matricesTexture,k),he.setOptional(E,et,"batchingIdTexture"),he.setValue(E,"batchingIdTexture",et._indirectTexture,k),he.setOptional(E,et,"batchingColorTexture"),et._colorsTexture!==null&&he.setValue(E,"batchingColorTexture",et._colorsTexture,k));const jn=ot.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&Ct.update(et,ot,sn),(ci||Nt.receiveShadow!==et.receiveShadow)&&(Nt.receiveShadow=et.receiveShadow,he.setValue(E,"receiveShadow",et.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&Z.environment!==null&&(Ie.envMapIntensity.value=Z.environmentIntensity),Ie.dfgLUT!==void 0&&(Ie.dfgLUT.value=Ex()),ci&&(he.setValue(E,"toneMappingExposure",w.toneMappingExposure),Nt.needsLights&&du(Ie,bi),Pt&&nt.fog===!0&&At.refreshFogUniforms(Ie,Pt),At.refreshMaterialUniforms(Ie,nt,pt,V,A.state.transmissionRenderTarget[I.id]),ba.upload(E,dl(Nt),Ie,k)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(ba.upload(E,dl(Nt),Ie,k),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&he.setValue(E,"center",et.center),he.setValue(E,"modelViewMatrix",et.modelViewMatrix),he.setValue(E,"normalMatrix",et.normalMatrix),he.setValue(E,"modelMatrix",et.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const Ce=nt.uniformsGroups;for(let Zn=0,Ti=Ce.length;Zn<Ti;Zn++){const hl=Ce[Zn];wt.update(hl,sn),wt.bind(hl,sn)}}return sn}function du(I,Z){I.ambientLightColor.needsUpdate=Z,I.lightProbe.needsUpdate=Z,I.directionalLights.needsUpdate=Z,I.directionalLightShadows.needsUpdate=Z,I.pointLights.needsUpdate=Z,I.pointLightShadows.needsUpdate=Z,I.spotLights.needsUpdate=Z,I.spotLightShadows.needsUpdate=Z,I.rectAreaLights.needsUpdate=Z,I.hemisphereLights.needsUpdate=Z}function uu(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(I,Z,ot){const nt=T.get(I);nt.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),T.get(I.texture).__webglTexture=Z,T.get(I.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:ot,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,Z){const ot=T.get(I);ot.__webglFramebuffer=Z,ot.__useDefaultFramebuffer=Z===void 0};const hu=E.createFramebuffer();this.setRenderTarget=function(I,Z=0,ot=0){B=I,F=Z,D=ot;let nt=null,et=!1,Pt=!1;if(I){const Rt=T.get(I);if(Rt.__useDefaultFramebuffer!==void 0){G.bindFramebuffer(E.FRAMEBUFFER,Rt.__webglFramebuffer),N.copy(I.viewport),U.copy(I.scissor),Q=I.scissorTest,G.viewport(N),G.scissor(U),G.setScissorTest(Q),S=-1;return}else if(Rt.__webglFramebuffer===void 0)k.setupRenderTarget(I);else if(Rt.__hasExternalTextures)k.rebindTextures(I,T.get(I.texture).__webglTexture,T.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const jt=I.depthTexture;if(Rt.__boundDepthTexture!==jt){if(jt!==null&&T.has(jt)&&(I.width!==jt.image.width||I.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(I)}}const Ft=I.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(Pt=!0);const zt=T.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(zt[Z])?nt=zt[Z][ot]:nt=zt[Z],et=!0):I.samples>0&&k.useMultisampledRTT(I)===!1?nt=T.get(I).__webglMultisampledFramebuffer:Array.isArray(zt)?nt=zt[ot]:nt=zt,N.copy(I.viewport),U.copy(I.scissor),Q=I.scissorTest}else N.copy(it).multiplyScalar(pt).floor(),U.copy(ht).multiplyScalar(pt).floor(),Q=at;if(ot!==0&&(nt=hu),G.bindFramebuffer(E.FRAMEBUFFER,nt)&&G.drawBuffers(I,nt),G.viewport(N),G.scissor(U),G.setScissorTest(Q),et){const Rt=T.get(I.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Rt.__webglTexture,ot)}else if(Pt){const Rt=Z;for(let Ft=0;Ft<I.textures.length;Ft++){const zt=T.get(I.textures[Ft]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+Ft,zt.__webglTexture,ot,Rt)}}else if(I!==null&&ot!==0){const Rt=T.get(I.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Rt.__webglTexture,ot)}S=-1},this.readRenderTargetPixels=function(I,Z,ot,nt,et,Pt,Ut,Rt=0){if(!(I&&I.isWebGLRenderTarget)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=T.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ft=Ft[Ut]),Ft){G.bindFramebuffer(E.FRAMEBUFFER,Ft);try{const zt=I.textures[Rt],jt=zt.format,$t=zt.type;if(I.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Rt),!ct.textureFormatReadable(jt)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable($t)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=I.width-nt&&ot>=0&&ot<=I.height-et&&E.readPixels(Z,ot,nt,et,Mt.convert(jt),Mt.convert($t),Pt)}finally{const zt=B!==null?T.get(B).__webglFramebuffer:null;G.bindFramebuffer(E.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(I,Z,ot,nt,et,Pt,Ut,Rt=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=T.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ft=Ft[Ut]),Ft)if(Z>=0&&Z<=I.width-nt&&ot>=0&&ot<=I.height-et){G.bindFramebuffer(E.FRAMEBUFFER,Ft);const zt=I.textures[Rt],jt=zt.format,$t=zt.type;if(I.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Rt),!ct.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ht=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Ht),E.bufferData(E.PIXEL_PACK_BUFFER,Pt.byteLength,E.STREAM_READ),E.readPixels(Z,ot,nt,et,Mt.convert(jt),Mt.convert($t),0);const ce=B!==null?T.get(B).__webglFramebuffer:null;G.bindFramebuffer(E.FRAMEBUFFER,ce);const xe=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await dp(E,xe,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Ht),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,Pt),E.deleteBuffer(Ht),E.deleteSync(xe),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,Z=null,ot=0){const nt=Math.pow(2,-ot),et=Math.floor(I.image.width*nt),Pt=Math.floor(I.image.height*nt),Ut=Z!==null?Z.x:0,Rt=Z!==null?Z.y:0;k.setTexture2D(I,0),E.copyTexSubImage2D(E.TEXTURE_2D,ot,0,0,Ut,Rt,et,Pt),G.unbindTexture()};const fu=E.createFramebuffer(),pu=E.createFramebuffer();this.copyTextureToTexture=function(I,Z,ot=null,nt=null,et=0,Pt=0){let Ut,Rt,Ft,zt,jt,$t,Ht,ce,xe;const ve=I.isCompressedTexture?I.mipmaps[Pt]:I.image;if(ot!==null)Ut=ot.max.x-ot.min.x,Rt=ot.max.y-ot.min.y,Ft=ot.isBox3?ot.max.z-ot.min.z:1,zt=ot.min.x,jt=ot.min.y,$t=ot.isBox3?ot.min.z:0;else{const Ie=Math.pow(2,-et);Ut=Math.floor(ve.width*Ie),Rt=Math.floor(ve.height*Ie),I.isDataArrayTexture?Ft=ve.depth:I.isData3DTexture?Ft=Math.floor(ve.depth*Ie):Ft=1,zt=0,jt=0,$t=0}nt!==null?(Ht=nt.x,ce=nt.y,xe=nt.z):(Ht=0,ce=0,xe=0);const de=Mt.convert(Z.format),Ne=Mt.convert(Z.type);let Nt;Z.isData3DTexture?(k.setTexture3D(Z,0),Nt=E.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(k.setTexture2DArray(Z,0),Nt=E.TEXTURE_2D_ARRAY):(k.setTexture2D(Z,0),Nt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,Z.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,Z.unpackAlignment);const Ze=E.getParameter(E.UNPACK_ROW_LENGTH),re=E.getParameter(E.UNPACK_IMAGE_HEIGHT),sn=E.getParameter(E.UNPACK_SKIP_PIXELS),fn=E.getParameter(E.UNPACK_SKIP_ROWS),ci=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,ve.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ve.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,zt),E.pixelStorei(E.UNPACK_SKIP_ROWS,jt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,$t);const bi=I.isDataArrayTexture||I.isData3DTexture,he=Z.isDataArrayTexture||Z.isData3DTexture;if(I.isDepthTexture){const Ie=T.get(I),jn=T.get(Z),Ce=T.get(Ie.__renderTarget),Zn=T.get(jn.__renderTarget);G.bindFramebuffer(E.READ_FRAMEBUFFER,Ce.__webglFramebuffer),G.bindFramebuffer(E.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let Ti=0;Ti<Ft;Ti++)bi&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,T.get(I).__webglTexture,et,$t+Ti),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,T.get(Z).__webglTexture,Pt,xe+Ti)),E.blitFramebuffer(zt,jt,Ut,Rt,Ht,ce,Ut,Rt,E.DEPTH_BUFFER_BIT,E.NEAREST);G.bindFramebuffer(E.READ_FRAMEBUFFER,null),G.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(et!==0||I.isRenderTargetTexture||T.has(I)){const Ie=T.get(I),jn=T.get(Z);G.bindFramebuffer(E.READ_FRAMEBUFFER,fu),G.bindFramebuffer(E.DRAW_FRAMEBUFFER,pu);for(let Ce=0;Ce<Ft;Ce++)bi?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ie.__webglTexture,et,$t+Ce):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Ie.__webglTexture,et),he?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,jn.__webglTexture,Pt,xe+Ce):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,jn.__webglTexture,Pt),et!==0?E.blitFramebuffer(zt,jt,Ut,Rt,Ht,ce,Ut,Rt,E.COLOR_BUFFER_BIT,E.NEAREST):he?E.copyTexSubImage3D(Nt,Pt,Ht,ce,xe+Ce,zt,jt,Ut,Rt):E.copyTexSubImage2D(Nt,Pt,Ht,ce,zt,jt,Ut,Rt);G.bindFramebuffer(E.READ_FRAMEBUFFER,null),G.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else he?I.isDataTexture||I.isData3DTexture?E.texSubImage3D(Nt,Pt,Ht,ce,xe,Ut,Rt,Ft,de,Ne,ve.data):Z.isCompressedArrayTexture?E.compressedTexSubImage3D(Nt,Pt,Ht,ce,xe,Ut,Rt,Ft,de,ve.data):E.texSubImage3D(Nt,Pt,Ht,ce,xe,Ut,Rt,Ft,de,Ne,ve):I.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,Pt,Ht,ce,Ut,Rt,de,Ne,ve.data):I.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,Pt,Ht,ce,ve.width,ve.height,de,ve.data):E.texSubImage2D(E.TEXTURE_2D,Pt,Ht,ce,Ut,Rt,de,Ne,ve);E.pixelStorei(E.UNPACK_ROW_LENGTH,Ze),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,re),E.pixelStorei(E.UNPACK_SKIP_PIXELS,sn),E.pixelStorei(E.UNPACK_SKIP_ROWS,fn),E.pixelStorei(E.UNPACK_SKIP_IMAGES,ci),Pt===0&&Z.generateMipmaps&&E.generateMipmap(Nt),G.unbindTexture()},this.initRenderTarget=function(I){T.get(I).__webglFramebuffer===void 0&&k.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?k.setTextureCube(I,0):I.isData3DTexture?k.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?k.setTexture2DArray(I,0):k.setTexture2D(I,0),G.unbindTexture()},this.resetState=function(){F=0,D=0,B=null,G.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}const zc={type:"change"},il={type:"start"},Jd={type:"end"},ga=new Ko,Hc=new ii,Tx=Math.cos(70*fp.DEG2RAD),be=new j,qe=2*Math.PI,ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ps=1e-6;class wx extends Pm{constructor(t,e=null){super(t,e),this.state=ue.NONE,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:kn.ROTATE,MIDDLE:kn.DOLLY,RIGHT:kn.PAN},this.touches={ONE:Hi.ROTATE,TWO:Hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new oi,this._lastTargetPosition=new j,this._quat=new oi().setFromUnitVectors(t.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new mc,this._sphericalDelta=new mc,this._scale=1,this._panOffset=new j,this._rotateStart=new Lt,this._rotateEnd=new Lt,this._rotateDelta=new Lt,this._panStart=new Lt,this._panEnd=new Lt,this._panDelta=new Lt,this._dollyStart=new Lt,this._dollyEnd=new Lt,this._dollyDelta=new Lt,this._dollyDirection=new j,this._mouse=new Lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Dx.bind(this),this._onPointerDown=Ax.bind(this),this._onPointerUp=Cx.bind(this),this._onContextMenu=Fx.bind(this),this._onMouseWheel=Lx.bind(this),this._onKeyDown=Ix.bind(this),this._onTouchStart=Ux.bind(this),this._onTouchMove=Bx.bind(this),this._onMouseDown=Px.bind(this),this._onMouseMove=Rx.bind(this),this._interceptControlDown=Nx.bind(this),this._interceptControlUp=Ox.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(zc),this.update(),this.state=ue.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;be.copy(e).sub(this.target),be.applyQuaternion(this._quat),this._spherical.setFromVector3(be),this.autoRotate&&this.state===ue.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=qe:i>Math.PI&&(i-=qe),r<-Math.PI?r+=qe:r>Math.PI&&(r-=qe),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=s!=this._spherical.radius}if(be.setFromSpherical(this._spherical),be.applyQuaternion(this._quatInverse),e.copy(this.target).add(be),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const o=be.length();s=this._clampDistance(o*this._scale);const l=o-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){const o=new j(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;const c=new j(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),s=be.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(ga.origin.copy(this.object.position),ga.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ga.direction))<Tx?this.object.lookAt(this.target):(Hc.setFromNormalAndCoplanarPoint(this.object.up,this.target),ga.intersectPlane(Hc,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Ps||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ps||this._lastTargetPosition.distanceToSquared(this.target)>Ps?(this.dispatchEvent(zc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?qe/60*this.autoRotateSpeed*t:qe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){be.setFromMatrixColumn(e,0),be.multiplyScalar(-t),this._panOffset.add(be)}_panUp(t,e){this.screenSpacePanning===!0?be.setFromMatrixColumn(e,1):(be.setFromMatrixColumn(e,0),be.crossVectors(this.object.up,be)),be.multiplyScalar(t),this._panOffset.add(be)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;be.copy(r).sub(this.target);let a=be.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*a/i.clientHeight,this.object.matrix),this._panUp(2*e*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,a=e-i.top,s=i.width,o=i.height;this._mouse.x=r/s*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,a=Math.sqrt(i*i+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),a=.5*(t.pageY+i.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,a=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(s,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Lt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Ax(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Dx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Cx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Jd),this.state=ue.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Px(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case kn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ue.DOLLY;break;case kn.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ue.ROTATE}break;case kn.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ue.PAN}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(il)}function Rx(n){switch(this.state){case ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Lx(n){this.enabled===!1||this.enableZoom===!1||this.state!==ue.NONE||(n.preventDefault(),this.dispatchEvent(il),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Jd))}function Ix(n){this.enabled!==!1&&this._handleKeyDown(n)}function Ux(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Hi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ue.TOUCH_ROTATE;break;case Hi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ue.TOUCH_PAN;break;default:this.state=ue.NONE}break;case 2:switch(this.touches.TWO){case Hi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ue.TOUCH_DOLLY_PAN;break;case Hi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ue.TOUCH_DOLLY_ROTATE;break;default:this.state=ue.NONE}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(il)}function Bx(n){switch(this._trackPointer(n),this.state){case ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ue.NONE}}function Fx(n){this.enabled!==!1&&n.preventDefault()}function Nx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ox(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var gn=null,Re=null,In=null,ye=null,wr=null,$d=0,Qd=0,tu=0;function kx(n){gn=new Ap,gn.background=new Kt(1710638),Re=new nn(60,1,.1,5e4),Re.position.set(0,0,500),Re.up.set(0,0,1),In=new bx({canvas:n,antialias:!0,alpha:!1}),In.setPixelRatio(Math.min(window.devicePixelRatio,2)),In.outputColorSpace=$e;var t=new wm(16777215,.6);gn.add(t);var e=new pc(16777215,.8);e.position.set(200,300,500),gn.add(e);var i=new pc(8947916,.3);return i.position.set(-200,-100,200),gn.add(i),ye=new wx(Re,In.domElement),ye.enableDamping=!0,ye.dampingFactor=.12,ye.screenSpacePanning=!0,ye.maxPolarAngle=Math.PI,ye.mouseButtons={LEFT:kn.PAN,MIDDLE:kn.DOLLY,RIGHT:kn.ROTATE},wr=new Cm(2e3,40,3355477,2236996),wr.rotation.x=Math.PI/2,gn.add(wr),{scene:gn,camera:Re,renderer:In,controls:ye}}function Vc(n,t){!In||!Re||(In.setSize(n,t),Re.aspect=n/t,Re.updateProjectionMatrix())}function zx(n,t,e){$d=n,Qd=t,tu=e}function Ta(n,t,e){return new j(n-$d,t-Qd,e-tu)}function Hx(n){function t(){requestAnimationFrame(t),ye&&ye.update(),In&&gn&&Re&&In.render(gn,Re)}t()}function Vx(n){if(!(!Re||!ye)){var t=0;Re.position.set(0,0,t+1e3),ye.target.set(0,0,t),ye.update()}}function Gx(n){if(!(!Re||!ye)){var t=0;Re.position.set(500,-500,t+500),ye.target.set(0,0,t),ye.update()}}function Wx(n){if(!(!Re||!ye)){var t=0;Re.position.set(300,-600,t+300),ye.target.set(0,0,t),ye.update()}}function Xx(n,t,e,i,r,a){if(!(!Re||!ye)){var s=(n+t)/2,o=(e+i)/2,l=(r+a)/2,c=t-n,u=i-e,f=a-r,h=Math.max(c,u,f),d=h*1.5;ye.target.set(s,o,l),Re.position.set(s+d*.5,o-d*.7,l+d*.5),ye.update()}}function qx(n){wr&&(wr.visible=n)}function lr(){return gn}var an={};function Rs(n){if(n<.2){var t=n/.2;return new Kt(.1,.2+t*.4,.6-t*.2)}else if(n<.4){var t=(n-.2)/.2;return new Kt(.1+t*.3,.6+t*.2,.2-t*.1)}else if(n<.6){var t=(n-.4)/.2;return new Kt(.4+t*.5,.8-t*.1,.1)}else if(n<.8){var t=(n-.6)/.2;return new Kt(.9,.7-t*.3,.1)}else{var t=(n-.8)/.2;return new Kt(.9+t*.1,.4-t*.2,.1+t*.1)}}function Yx(n,t,e,i){var r=lr();if(!r||!t||t.length===0||!e||e.length===0)return null;var a=i||{},s=a.opacity!==void 0?a.opacity:.85,o=a.visible!==void 0?a.visible:!0,l=1/0,c=-1/0,u=e.length>0&&e[0].vertices!==void 0;if(u)for(var f=0;f<e.length;f++){var h=e[f].vertices;if(h)for(var d=0;d<h.length;d++){var m=h[d].z||0;m<l&&(l=m),m>c&&(c=m)}}else for(var f=0;f<t.length;f++){var m=t[f].z||0;m<l&&(l=m),m>c&&(c=m)}var v=c-l;v<.01&&(v=1);for(var g=e.length>0&&e[0].vertices!==void 0,p=new Float32Array(e.length*3*3),_=new Float32Array(e.length*3*3),y=0,x=0;x<e.length;x++){var A=e[x],L,P,M;if(g){if(!A.vertices||A.vertices.length<3)continue;L=A.vertices[0],P=A.vertices[1],M=A.vertices[2]}else{var w=A.a!==void 0?A.a:A[0],H=A.b!==void 0?A.b:A[1],F=A.c!==void 0?A.c:A[2];if(w>=t.length||H>=t.length||F>=t.length)continue;L=t[w],P=t[H],M=t[F]}var D=Ta(L.x,L.y,L.z||0),B=Ta(P.x,P.y,P.z||0),S=Ta(M.x,M.y,M.z||0);p[y*9+0]=D.x,p[y*9+1]=D.y,p[y*9+2]=D.z,p[y*9+3]=B.x,p[y*9+4]=B.y,p[y*9+5]=B.z,p[y*9+6]=S.x,p[y*9+7]=S.y,p[y*9+8]=S.z;var C=((L.z||0)-l)/v,N=((P.z||0)-l)/v,U=((M.z||0)-l)/v,Q=Rs(C),X=Rs(N),$=Rs(U);_[y*9+0]=Q.r,_[y*9+1]=Q.g,_[y*9+2]=Q.b,_[y*9+3]=X.r,_[y*9+4]=X.g,_[y*9+5]=X.b,_[y*9+6]=$.r,_[y*9+7]=$.g,_[y*9+8]=$.b,y++}var W=new Float32Array(p.buffer,0,y*9),V=new Float32Array(_.buffer,0,y*9),pt=new We;pt.setAttribute("position",new rn(W,3)),pt.setAttribute("color",new rn(V,3)),pt.computeVertexNormals();var mt=new Fn({vertexColors:!0,side:dn,transparent:s<1,opacity:s,shininess:10,flatShading:!1}),ut=new Ee(pt,mt);ut.name="surface_"+n,ut.visible=o,r.add(ut);var it=new Fa({color:4473958,wireframe:!0,transparent:!0,opacity:.15}),ht=new Ee(pt.clone(),it);return ht.name="wireframe_"+n,ht.visible=!1,r.add(ht),an[n]={mesh:ut,wireframe:ht,minZ:l,maxZ:c,triCount:y},an[n]}function jx(n,t){var e=an[n];e&&(e.mesh.visible=t,e.wireframe.visible&&!t&&(e.wireframe.visible=!1))}function Zx(n,t){var e=an[n];e&&e.mesh.material&&(e.mesh.material.transparent=t<1,e.mesh.material.opacity=t,e.mesh.material.needsUpdate=!0)}function Kx(n,t){var e=an[n];e&&(e.wireframe.visible=t&&e.mesh.visible)}function Jx(n){for(var t=Object.keys(an),e=0;e<t.length;e++)Kx(t[e],n)}function $x(){var n=Object.keys(an);if(n.length===0)return null;for(var t=1/0,e=-1/0,i=1/0,r=-1/0,a=1/0,s=-1/0,o=0;o<n.length;o++){var l=an[n[o]],c=new ar().setFromObject(l.mesh);c.min.x<t&&(t=c.min.x),c.max.x>e&&(e=c.max.x),c.min.y<i&&(i=c.min.y),c.max.y>r&&(r=c.max.y),c.min.z<a&&(a=c.min.z),c.max.z>s&&(s=c.max.z)}return{minX:t,maxX:e,minY:i,maxY:r,minZ:a,maxZ:s}}function Qx(){for(var n=lr(),t=Object.keys(an),e=0;e<t.length;e++){var i=an[t[e]];n&&(n.remove(i.mesh),n.remove(i.wireframe)),i.mesh.geometry.dispose(),i.mesh.material.dispose(),i.wireframe.geometry.dispose(),i.wireframe.material.dispose()}an={}}function ty(){return Object.keys(an)}var Vn={},Ra={planned:5592422,drilling:3900150,loading:16096779,blastDay:15680580,completed:2278750,active:3900150};function ey(n,t,e,i){var r=lr();if(!r||!t||t.length<3)return null;for(var a=e||0,s=Ra[i]||Ra.planned,o=[],l=0;l<t.length;l++){var c=t[l],u=Ta(c.x,c.y,c.z||a);o.push(u)}o.length>0&&o.push(o[0].clone());var f=new We().setFromPoints(o),h=new $o({color:s,linewidth:2}),d=new Pd(f,h);d.name="blast_outline_"+n,r.add(d);var m=new Nd;m.moveTo(o[0].x,o[0].y);for(var l=1;l<o.length-1;l++)m.lineTo(o[l].x,o[l].y);m.closePath();for(var v=new el(m),g=v.attributes.position.array,l=2;l<g.length;l+=3)g[l]=o[0].z;v.attributes.position.needsUpdate=!0,v.computeVertexNormals();var p=new Fa({color:s,transparent:!0,opacity:.25,side:dn}),_=new Ee(v,p);_.name="blast_fill_"+n,r.add(_);for(var y=0,x=0,A=o[0].z,l=0;l<o.length-1;l++)y+=o[l].x,x+=o[l].y;return y/=o.length-1,x/=o.length-1,Vn[n]={outline:d,fill:_,centroid:new j(y,x,A),status:i,color:s},Vn[n]}function Gc(n,t){var e=Vn[n];if(e){var i=Ra[t]||Ra.planned;e.outline.material.color.setHex(i),e.fill.material.color.setHex(i),e.status=t,e.color=i}}function Wc(n){var t=Vn[n];return t?t.centroid:null}function ny(n,t){var e=Vn[n];e&&(e.outline.visible=t,e.fill.visible=t)}function iy(n){for(var t=Object.keys(Vn),e=0;e<t.length;e++)ny(t[e],n)}function ry(){for(var n=lr(),t=Object.keys(Vn),e=0;e<t.length;e++){var i=Vn[t[e]];n&&(n.remove(i.outline),n.remove(i.fill)),i.outline.geometry.dispose(),i.outline.material.dispose(),i.fill.geometry.dispose(),i.fill.material.dispose()}Vn={}}var Nn={};function ay(n){var t=new Vi,e=n==="D65"?3:4,i=n==="D65"?6:8,r=2,a=new qn(e,i,r),s=new Fn({color:16096779,flatShading:!0}),o=new Ee(a,s);o.position.set(0,0,r/2),t.add(o);var l=new qn(e*.7,i*.3,2.5),c=new Fn({color:1982639,flatShading:!0}),u=new Ee(l,c);u.position.set(0,-i*.3,r+1.25),t.add(u);var f=n==="D65"?14:20,h=new Qi(.3,.4,f,8),d=new Fn({color:13421772,flatShading:!0}),m=new Ee(h,d);m.rotation.x=Math.PI/2,m.rotation.z=Math.PI/2,m.position.set(0,i*.1,r+f/2),t.add(m);var v=new Qi(.1,.1,f*.9,6),g=new Fn({color:8947848}),p=new Ee(v,g);return p.rotation.x=Math.PI/2,p.rotation.z=Math.PI/2,p.position.set(0,i*.1,r+f*.45),t.add(p),t}function sy(){var n=new Vi,t=new qn(3,10,1.5),e=new Fn({color:3621201,flatShading:!0}),i=new Ee(t,e);i.position.set(0,0,1.5),n.add(i);var r=new qn(2.6,2.5,2.5),a=new Fn({color:14427686,flatShading:!0}),s=new Ee(r,a);s.position.set(0,-4.5,3),n.add(s);var o=new Qi(1.2,1.2,6,12),l=new Fn({color:10265519,flatShading:!0}),c=new Ee(o,l);c.position.set(0,1,3.5),n.add(c);var u=new Qi(.6,.6,.5,8);u.rotateZ(Math.PI/2);for(var f=new Fn({color:1710618}),h=[[-1.8,-3.5,.6],[1.8,-3.5,.6],[-1.8,1,.6],[1.8,1,.6],[-1.8,3,.6],[1.8,3,.6]],d=0;d<h.length;d++){var m=new Ee(u,f);m.position.set(h[d][0],h[d][1],h[d][2]),n.add(m)}return n}function Xc(n,t,e){var i=lr();if(!i)return null;Nn[n]&&i.remove(Nn[n].group);var r;return t==="D65"||t==="PV271"?r=ay(t):r=sy(),r.position.copy(e),r.name="equip_"+n,i.add(r),Nn[n]={group:r,type:t},Nn[n]}function oy(n){for(var t=Object.keys(Nn),e=0;e<t.length;e++)Nn[t[e]].group.visible=n}function eu(){for(var n=lr(),t=Object.keys(Nn),e=0;e<t.length;e++)n&&n.remove(Nn[t[e]].group);Nn={}}var Ve=[],Yn=0,Fr=!1,nu=1,Yi=null,Do=null;function ly(){if(Ve=[],z.blasts.length===0)return Ve;var n=null,t=null;if(z.blasts.forEach(function(o){var l=[o.drillStart,o.loadStart,o.blastDate];if(l.forEach(function(h){h&&((!n||h<n)&&(n=h),(!t||h>t)&&(t=h))}),o.drillStart&&o.drillDays){var c=new Date(o.drillStart);c.setDate(c.getDate()+(o.drillDays||0));var u=Xt(c);(!t||u>t)&&(t=u)}if(o.loadStart&&o.loadDays){var f=new Date(o.loadStart);f.setDate(f.getDate()+(o.loadDays||0));var u=Xt(f);(!t||u>t)&&(t=u)}}),!n||!t)return Ve;var e=new Date(n),i=new Date(t);i.setDate(i.getDate()+1);for(var r=0;e<=i;){var a=Xt(e),s={};z.blasts.forEach(function(o){var l=cy(o,a);l&&(s[o.name]=l)}),Ve.push({index:r,date:a,blastStates:s}),r++,e.setDate(e.getDate()+1)}return Yn=0,Ve}function cy(n,t){if(n.blastDate&&t===n.blastDate)return{phase:"blastDay",drills:n.assignedDrills||[],mpus:n.assignedMPUs||(n.assignedMPU?[n.assignedMPU]:[])};if(n.loadStart&&n.loadDays){var e=new Date(n.loadStart);e.setDate(e.getDate()+n.loadDays-1);var i=Xt(e);if(t>=n.loadStart&&t<=i)return{phase:"loading",drills:[],mpus:n.assignedMPUs||(n.assignedMPU?[n.assignedMPU]:[])}}if(n.drillBlocks&&n.drillBlocks.length>0)for(var r=0;r<n.drillBlocks.length;r++){var a=n.drillBlocks[r];if(a.drillStart&&a.drillDays){var s=new Date(a.drillStart);s.setDate(s.getDate()+a.drillDays-1);var o=Xt(s);if(t>=a.drillStart&&t<=o)return{phase:"drilling",drills:a.assignedDrills||[],mpus:[]}}}else if(n.drillStart&&n.drillDays){var l=new Date(n.drillStart);l.setDate(l.getDate()+n.drillDays-1);var c=Xt(l);if(t>=n.drillStart&&t<=c)return{phase:"drilling",drills:n.assignedDrills||[],mpus:[]}}return n.blastDate&&t>n.blastDate?{phase:"completed",drills:[],mpus:[]}:n.drillStart&&t>=n.drillStart?{phase:"planned",drills:[],mpus:[]}:null}function dy(){return Ve.length===0?null:Ve[Yn]||null}function iu(){return Ve.length}function Nr(n){n<0&&(n=0),n>=Ve.length&&(n=Ve.length-1),Yn=n,Do&&Do(Ve[Yn])}function ru(){Yn<Ve.length-1?Nr(Yn+1):za()}function uy(){Yn>0&&Nr(Yn-1)}function hy(){Nr(0)}function fy(){Nr(Ve.length-1)}function au(){if(Ve.length!==0){Fr=!0,Yi&&clearInterval(Yi);var n=Math.max(50,1e3/nu);Yi=setInterval(function(){Yn<Ve.length-1?ru():za()},n)}}function za(){Fr=!1,Yi&&(clearInterval(Yi),Yi=null)}function py(){Fr?za():au()}function my(){return Fr}function gy(n){nu=n,Fr&&(za(),au())}function vy(n){Do=n}var Co=!1,qc=null;function _y(){if(!Co){var n=document.getElementById("playbackCanvas"),t=document.getElementById("playbackViewport");if(!(!n||!t)){kx(n);var e=t.getBoundingClientRect();Vc(e.width,e.height),qc=new ResizeObserver(function(r){for(var a=0;a<r.length;a++){var s=r[a].contentRect;Vc(s.width,s.height)}}),qc.observe(t),Hx(),document.getElementById("pbCamTop").addEventListener("click",function(){Vx()}),document.getElementById("pbCamIso").addEventListener("click",function(){Gx()}),document.getElementById("pbCamPersp").addEventListener("click",function(){Wx()}),document.getElementById("pbShowAllBlasts").addEventListener("change",function(r){iy(r.target.checked)}),document.getElementById("pbShowEquipment").addEventListener("change",function(r){oy(r.target.checked)}),document.getElementById("pbWireframe").addEventListener("change",function(r){Jx(r.target.checked)}),document.getElementById("pbGrid").addEventListener("change",function(r){qx(r.target.checked)}),document.getElementById("pbTlStart").addEventListener("click",hy),document.getElementById("pbTlPrev").addEventListener("click",uy),document.getElementById("pbTlPlay").addEventListener("click",function(){py(),yy()}),document.getElementById("pbTlNext").addEventListener("click",ru),document.getElementById("pbTlEnd").addEventListener("click",fy),document.getElementById("pbTlRange").addEventListener("input",function(r){Nr(parseInt(r.target.value))});var i=document.querySelectorAll(".pb-speed-btn");i.forEach(function(r){r.addEventListener("click",function(){var a=parseInt(r.getAttribute("data-speed"));gy(a),i.forEach(function(s){s.classList.remove("active")}),r.classList.add("active")})}),vy(function(r){su(r),ou(r)}),Co=!0}}}function xy(){Co||_y(),Qx(),ry(),eu();var n=!1,t=[],e=[],i=[],r=z.kirraProjectSurfaces||[];r.forEach(function(d){if(d.bounds&&isFinite(d.bounds.minX)&&isFinite(d.bounds.maxX))t.push(d.bounds.minX,d.bounds.maxX),e.push(d.bounds.minY,d.bounds.maxY),i.push(d.bounds.minZ,d.bounds.maxZ),n=!0;else if(d.points&&d.points.length>0)d.points.forEach(function(v){t.push(v.x),e.push(v.y),i.push(v.z||0)}),n=!0;else if(d.triangles&&d.triangles.length>0&&d.triangles[0].vertices){var m=[d.triangles[0],d.triangles[Math.floor(d.triangles.length/2)],d.triangles[d.triangles.length-1]];m.forEach(function(v){v.vertices&&v.vertices.forEach(function(g){t.push(g.x),e.push(g.y),i.push(g.z||0)})}),n=!0}}),z.blasts.forEach(function(d){d.polygons&&d.polygons.length>0&&(d.polygons.forEach(function(m){t.push(m.x),e.push(m.y),i.push(m.z||0)}),n=!0)});var a=document.getElementById("playbackNoData");if(a&&(a.style.display=n?"none":"flex"),!!n){var s=t.reduce(function(d,m){return d+m},0)/t.length,o=e.reduce(function(d,m){return d+m},0)/e.length,l=i.reduce(function(d,m){return d+m},0)/i.length;zx(s,o,l),r.forEach(function(d){d.points&&d.points.length>0&&d.triangles&&d.triangles.length>0&&Yx(d.name,d.points,d.triangles,{opacity:d.opacity!==void 0?d.opacity:.85,visible:d.visible!==void 0?d.visible:!0})}),z.blasts.forEach(function(d){if(d.polygons&&d.polygons.length>0){var m=0;d.polygons.forEach(function(v){m+=v.z||0}),m/=d.polygons.length,ey(d.name,d.polygons,m,d.status||"planned")}}),Sy();var c=$x();c&&Xx(c.minX,c.maxX,c.minY,c.maxY,c.minZ,c.maxZ),ly();var u=iu(),f=document.getElementById("pbTlRange");f&&(f.max=Math.max(0,u-1),f.value=0);var h=dy();h?(su(h),ou(h)):(document.getElementById("pbTlDay").textContent="No schedule data",document.getElementById("pbTlDate").textContent="")}}function su(n){if(n){var t=iu();document.getElementById("pbTlDay").textContent="Day "+(n.index+1)+" of "+t,document.getElementById("pbTlDate").textContent=n.date,document.getElementById("pbTlRange").value=n.index}}function yy(){var n=document.getElementById("pbTlPlay");n&&(n.innerHTML=my()?"&#9646;&#9646;":"&#9654;")}function ou(n){if(n){z.blasts.forEach(function(i){var r=n.blastStates[i.name];r?Gc(i.name,r.phase):Gc(i.name,"planned")}),eu();var t={},e=document.getElementById("pbShowEquipment");e&&!e.checked||z.blasts.forEach(function(i){var r=n.blastStates[i.name];if(r&&(r.phase==="drilling"&&r.drills&&r.drills.forEach(function(c){if(!t[c]){var u=Wc(i.name);if(u){var f=ne.find(function(v){return v.id===c}),h=f?f.type:"PV271",d=Object.keys(t).length*8,m=u.clone();m.x+=d,Xc(c,h,m),t[c]=!0}}}),r.phase==="loading"&&r.mpus&&r.mpus.length>0))for(var a=0;a<r.mpus.length;a++){var s=r.mpus[a];if(!t[s]){var o=Wc(i.name);if(o){var l=o.clone();l.x-=15+a*10,Xc(s,"MPU",l),t[s]=!0}}}})}}function Sy(){var n=document.getElementById("playbackSurfaceList");if(n){var t=ty();if(t.length===0){n.innerHTML='<div class="playback-empty-msg">No surfaces loaded.<br>Import a Kirra Project or DXF with 3DFACE data.</div>';return}var e="";t.forEach(function(i){e+='<div class="playback-surface-item">',e+='<label class="playback-toggle">',e+='<input type="checkbox" data-surface="'+i+'" class="pb-surf-toggle" checked>',e+=" "+i,e+="</label>",e+='<input type="range" min="0" max="100" value="85" class="pb-surf-opacity" data-surface="'+i+'" title="Opacity">',e+="</div>"}),n.innerHTML=e,n.querySelectorAll(".pb-surf-toggle").forEach(function(i){i.addEventListener("change",function(){jx(i.getAttribute("data-surface"),i.checked)})}),n.querySelectorAll(".pb-surf-opacity").forEach(function(i){i.addEventListener("input",function(){Zx(i.getAttribute("data-surface"),parseInt(i.value)/100)})})}}function My(){var n=document.querySelector('[data-tab="playback"]');n&&n.addEventListener("click",function(){setTimeout(function(){xy()},50)})}Nh();Fh();Yu();Ru();Xh();qh();Kh();tf();lf();Ch();document.getElementById("btnRefreshGantt").addEventListener("click",function(){Se(),se()});document.getElementById("btnRecalcDates").addEventListener("click",function(){Se(),se()});Oo("dxfDropZone","dxfFileInput",cf);Oo("kirraDropZone","kirraFileInput",uf);Oo("kirraProjectDropZone","kirraProjectInput",ff);(function(){if(ef())af().then(function(e){e==="fresh"&&Dl(),nf(e),Yc()});else{var t=localStorage.getItem("kirra-scheduler-setup");t==="fresh"&&Dl(),Yc()}})();function Yc(){Se(),se(),ir(),Ur(),Br(),Ia(),On(),ed(),nd(),sh(),My(),Cf(),console.log("Kirra Scheduler initialised.")}
