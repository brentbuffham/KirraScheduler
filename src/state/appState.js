// ============================================================
//  APPLICATION STATE
//  Central state object for the Blast Scheduler application
// ============================================================

var APP = {
  planStart: new Date("2026-02-25"),
  ganttWeeks: 8,
  rigHours: 24,
  availability: 0.85,
  utilisation: 0.75,
  editingBlastIdx: null,
  ctxBlastIdx: null,
  ctxSection: null,
  importedBlasts: [],
  chargeConfigs: [],

  // Step 1) Global dependency defaults (per-blast overrides allowed)
  deps: {
    drillPctForLoad: 0.5,
    drillPctForBlast: 1.0,
    loadPctForBlast: 1.0,   // FIXED: always 100% (non-configurable)
    minLeadDays: 0,
    enforceSequence: true,
  },

  // Step 2) Pattern library
  patterns: [
    { id: "1.1.01",    benchHt: 12, diam: 229, pf: 0.6,  burden: 7.65, spacing: 8.85, subdrill: 1.5, stemming: 4,   type: "WASTE" },
    { id: "1.1.02",    benchHt: 12, diam: 229, pf: 0.7,  burden: 7.1,  spacing: 8.2,  subdrill: 1.5, stemming: 4,   type: "WASTE" },
    { id: "1.1.02a",   benchHt: 12, diam: 229, pf: 0.8,  burden: 7,    spacing: 8,    subdrill: 1.5, stemming: 3.4, type: "WASTE" },
    { id: "1.1.03",    benchHt: 12, diam: 229, pf: 0.8,  burden: 6.5,  spacing: 7.5,  subdrill: 1.5, stemming: 3.8, type: "WASTE" },
    { id: "1.1.04",    benchHt: 12, diam: 229, pf: 0.9,  burden: 6.25, spacing: 7.25, subdrill: 1.5, stemming: 4,   type: "WASTE" },
    { id: "1.1.05",    benchHt: 12, diam: 229, pf: 1.0,  burden: 5.95, spacing: 6.85, subdrill: 1.5, stemming: 4,   type: "WASTE" },
    { id: "1.1.06",    benchHt: 12, diam: 229, pf: 1.1,  burden: 5.65, spacing: 6.55, subdrill: 1.5, stemming: 4,   type: "YELLOW" },
    { id: "1.1.07",    benchHt: 12, diam: 229, pf: 1.2,  burden: 5.5,  spacing: 6.2,  subdrill: 1.5, stemming: 3.8, type: "YELLOW" },
    { id: "1.1.08",    benchHt: 12, diam: 229, pf: 1.3,  burden: 5.2,  spacing: 6.0,  subdrill: 1.5, stemming: 4,   type: "YELLOW" },
    { id: "1.1.09",    benchHt: 12, diam: 229, pf: 1.4,  burden: 5.0,  spacing: 5.8,  subdrill: 1.5, stemming: 4,   type: "YELLOW" },
    { id: "1.1.10",    benchHt: 12, diam: 229, pf: 1.5,  burden: 4.85, spacing: 5.6,  subdrill: 1.5, stemming: 4,   type: "ORE" },
    { id: "1.1.11",    benchHt: 12, diam: 229, pf: 1.6,  burden: 4.7,  spacing: 5.4,  subdrill: 1.5, stemming: 4,   type: "ORE" },
    { id: "1.1.12",    benchHt: 12, diam: 229, pf: 1.7,  burden: 4.55, spacing: 5.25, subdrill: 1.5, stemming: 4,   type: "ORE" },
    { id: "1.1.12a",   benchHt: 12, diam: 229, pf: 1.75, burden: 4.7,  spacing: 5.2,  subdrill: 1.6, stemming: 3.1, type: "ORE" },
    { id: "1.1.13",    benchHt: 12, diam: 229, pf: 1.8,  burden: 4.5,  spacing: 5.2,  subdrill: 1.5, stemming: 3.5, type: "ORE" },
    { id: "1.1.14",    benchHt: 12, diam: 229, pf: 1.9,  burden: 4.3,  spacing: 5.0,  subdrill: 1.5, stemming: 4,   type: "ORE" },
    { id: "1.1.14a",   benchHt: 12, diam: 229, pf: 1.9,  burden: 4.5,  spacing: 5.0,  subdrill: 1.5, stemming: 3.7, type: "ORE" },
    { id: "1.1.15",    benchHt: 12, diam: 229, pf: 2.0,  burden: 4.4,  spacing: 4.9,  subdrill: 1.6, stemming: 3.6, type: "ORE" },
    { id: "1.1.43P12", benchHt: 12, diam: 127, pf: 0.6,  burden: 1.0,  spacing: 1.6,  subdrill: 0.6, stemming: 2.2, type: "PRESPLIT" },
    { id: "1.1.44P24", benchHt: 24, diam: 127, pf: 0.6,  burden: 1.0,  spacing: 1.8,  subdrill: 0.3, stemming: 2.2, type: "PRESPLIT" },
  ],

  // Step 3) Blast schedule data (initial seed data)
  blasts: [
    {
      name: "S4_214_410P_V2", mode: "Auto", surfaceArea: 0, pattern: "", pctD65: 1, pctPV: 0,
      rateD65: 19, ratePV: 20, numD65: 1, numPV: 0, loadRate: 80000,
      d65Meters: 3496.4, pvMeters: 0, volume: 6219, expMass: 3064.5,
      drillStart: "2026-02-21", drillStartTime: "06:00", drillDays: 1, loadStart: "2026-02-21", loadDays: 1,
      blastDate: "2026-02-22", status: "active",
      deps: { drillPctForLoad: null, drillPctForBlast: null, loadPctForBlast: null, minLeadDays: null, predecessor: null },
      assignedDrills: ["D65-01"], assignedMPU: "MPU-01",
      holeTypes: [
        { type: "PRESPLIT", diam: 0.127, burden: 1, spacing: 1.8, holes: 138, drillMeters: 3496.4, expMass: 3168 }
      ]
    },
    {
      name: "S4_226_412_V1", mode: "Auto", surfaceArea: 0, pattern: "", pctD65: 0, pctPV: 1,
      rateD65: 17, ratePV: 20, numD65: 0, numPV: 3, loadRate: 100000,
      d65Meters: 1149, pvMeters: 5766.4, volume: 124236, expMass: 236949,
      drillStart: "2026-02-21", drillStartTime: "06:00", drillDays: 3, loadStart: "2026-02-23", loadDays: 3,
      blastDate: "2026-02-26", status: "active",
      deps: { drillPctForLoad: null, drillPctForBlast: null, loadPctForBlast: null, minLeadDays: null, predecessor: null },
      assignedDrills: ["PV271-01", "PV271-02", "PV271-03"], assignedMPU: "MPU-01",
      holeTypes: [
        { type: "BUFFER", diam: 0.127, burden: 3.8, spacing: 2.3, holes: 65, drillMeters: 882.9, expMass: 6416 },
        { type: "PRODUCTION", diam: 0.165, burden: 3.5, spacing: 4.7, holes: 19, drillMeters: 266.1, expMass: 5403 },
        { type: "PRODUCTION", diam: 0.229, burden: 4.7, spacing: 4.7, holes: 420, drillMeters: 5768.9, expMass: 225812 }
      ]
    },
    {
      name: "S4_226_410_V1", mode: "Auto", surfaceArea: 0, pattern: "", pctD65: 0, pctPV: 1,
      rateD65: 19, ratePV: 20, numD65: 0, numPV: 3, loadRate: 100000,
      d65Meters: 2333, pvMeters: 7461.8, volume: 165245, expMass: 326375,
      drillStart: "2026-02-23", drillStartTime: "10:00", drillDays: 7, loadStart: "2026-02-27", loadDays: 4,
      blastDate: "2026-03-02", status: "active",
      deps: { drillPctForLoad: null, drillPctForBlast: null, loadPctForBlast: null, minLeadDays: null, predecessor: null },
      assignedDrills: ["PV271-01", "PV271-02", "PV271-03"], assignedMPU: "MPU-02",
      drillBlocks: [
        {
          id: "block-0", label: "A",
          drillStart: "2026-02-23", drillStartTime: "10:00", drillDays: 3,
          meters: 5000,
          assignedDrills: ["PV271-01", "PV271-02"],
          drillRates: { "PV271-01": 55, "PV271-02": 55 }
        },
        {
          id: "block-1", label: "B",
          drillStart: "2026-02-27", drillStartTime: "06:00", drillDays: 3,
          meters: 4794.8,
          assignedDrills: ["PV271-02", "PV271-03"],
          drillRates: { "PV271-02": 55, "PV271-03": 55 }
        }
      ],
      holeTypes: [
        { type: "BUFFER", diam: 0.127, burden: 3, spacing: 1.6, holes: 24, drillMeters: 324.1, expMass: 1461 },
        { type: "BUFFER", diam: 0.165, burden: 3.6, spacing: 3, holes: 73, drillMeters: 896.1, expMass: 15934 },
        { type: "PRODUCTION", diam: 0.165, burden: 4.4, spacing: 2.5, holes: 89, drillMeters: 1112.8, expMass: 21559 },
        { type: "PRODUCTION", diam: 0.229, burden: 4.9, spacing: 4.4, holes: 563, drillMeters: 7461.8, expMass: 287420 }
      ]
    },
    {
      name: "S4_214_411P", mode: "Manual", surfaceArea: 100, pattern: "1.1.44P24", pctD65: 1, pctPV: 0,
      rateD65: 19, ratePV: 20, numD65: 2, numPV: 0, loadRate: 100000,
      d65Meters: 1350, pvMeters: 0, volume: 2400, expMass: 1440,
      drillStart: "2026-03-01", drillStartTime: "06:00", drillDays: 2, loadStart: "2026-03-05", loadDays: 1,
      blastDate: "2026-03-06", status: "planned",
      deps: { drillPctForLoad: null, drillPctForBlast: null, loadPctForBlast: null, minLeadDays: null, predecessor: null },
      assignedDrills: ["D65-01", "D65-02"], assignedMPU: "",
      holeTypes: [
        { type: "PRESPLIT", diam: 0.127, burden: 1, spacing: 1.8, holes: 0, drillMeters: 1350, expMass: 1440 }
      ]
    },
    {
      name: "S4_226_411", mode: "Manual", surfaceArea: 10240, pattern: "1.1.15", pctD65: 0, pctPV: 1,
      rateD65: 20, ratePV: 19, numD65: 0, numPV: 4, loadRate: 100000,
      d65Meters: 0, pvMeters: 6459.4, volume: 122880, expMass: 245760,
      drillStart: "2026-03-02", drillDays: 6, loadStart: "2026-03-07", loadDays: 3,
      blastDate: "2026-03-10", status: "planned",
      deps: { drillPctForLoad: null, drillPctForBlast: null, loadPctForBlast: null, minLeadDays: null, predecessor: null },
      assignedDrills: ["PV271-01", "PV271-02", "PV271-03", "PV271-04"], assignedMPU: "MPU-01",
      holeTypes: [
        { type: "PRODUCTION", diam: 0.229, burden: 4.4, spacing: 4.9, holes: 0, drillMeters: 6459.4, expMass: 245760 }
      ]
    },
    {
      name: "S4_214_412P", mode: "Manual", surfaceArea: 220, pattern: "1.1.44P24", pctD65: 1, pctPV: 0,
      rateD65: 15, ratePV: 21, numD65: 2, numPV: 4, loadRate: 100000,
      d65Meters: 2970, pvMeters: 0, volume: 5280, expMass: 3168,
      drillStart: "2026-03-04", drillDays: 3, loadStart: null, loadDays: 0,
      blastDate: null, status: "planned",
      deps: { drillPctForLoad: null, drillPctForBlast: null, loadPctForBlast: null, minLeadDays: null, predecessor: null },
      assignedDrills: ["D65-01", "D65-02"], assignedMPU: "",
      holeTypes: [
        { type: "PRESPLIT", diam: 0.127, burden: 1, spacing: 1.8, holes: 0, drillMeters: 2970, expMass: 3168 }
      ]
    },
    {
      name: "S4_226_413", mode: "Manual", surfaceArea: 5000, pattern: "1.1.15", pctD65: 0, pctPV: 1,
      rateD65: 17, ratePV: 20, numD65: 0, numPV: 4, loadRate: 100000,
      d65Meters: 0, pvMeters: 3154, volume: 60000, expMass: 120000,
      drillStart: "2026-03-07", drillDays: 3, loadStart: null, loadDays: 0,
      blastDate: null, status: "planned",
      deps: { drillPctForLoad: null, drillPctForBlast: null, loadPctForBlast: null, minLeadDays: null, predecessor: null },
      assignedDrills: ["PV271-01", "PV271-02", "PV271-03", "PV271-04"], assignedMPU: "MPU-01",
      holeTypes: [
        { type: "PRODUCTION", diam: 0.229, burden: 4.4, spacing: 4.9, holes: 0, drillMeters: 3154, expMass: 120000 }
      ]
    },
    {
      name: "S4_226_407", mode: "Manual", surfaceArea: 11886, pattern: "1.1.15", pctD65: 0, pctPV: 1,
      rateD65: 45, ratePV: 20, numD65: 0, numPV: 4, loadRate: 100000,
      d65Meters: 0, pvMeters: 7497.7, volume: 142632, expMass: 285264,
      drillStart: "2026-03-09", drillDays: 6, loadStart: null, loadDays: 0,
      blastDate: null, status: "planned",
      deps: { drillPctForLoad: null, drillPctForBlast: null, loadPctForBlast: null, minLeadDays: null, predecessor: null },
      assignedDrills: ["PV271-01", "PV271-02", "PV271-03", "PV271-04"], assignedMPU: "MPU-02",
      holeTypes: [
        { type: "PRODUCTION", diam: 0.229, burden: 4.4, spacing: 4.9, holes: 0, drillMeters: 7497.7, expMass: 285264 }
      ]
    }
  ],

  // Step 4) Spatial data for 3D playback
  kirraProjectSurfaces: [],
  kirraProjectSolids: [],

  // Step 5) Conformance data
  conformance: {
    targetBCM: 600000,
    actualBCM: 426594,
    targetMTD: 700000,
    monthStart: "2026-02-01"
  }
};

export { APP };
