export type Team = {
  id: string;
  index: string;
  name: string;
  description: string;
};

export const teams: Team[] = [
  {
    id: "architecture",
    index: "01",
    name: "Architecture",
    description:
      "Specs, workload analysis, and the power–performance–area tradeoffs behind every block.",
  },
  {
    id: "rtl-design",
    index: "02",
    name: "RTL Design",
    description:
      "SystemVerilog for the datapath, control, memories, and on-chip interfaces.",
  },
  {
    id: "design-verification",
    index: "03",
    name: "Design Verification",
    description:
      "Testbenches, cocotb and UVM-style environments, coverage closure, and formal checks.",
  },
  {
    id: "physical-design",
    index: "04",
    name: "Physical Design",
    description:
      "Synthesis through place-and-route, with timing, DRC, and LVS signoff.",
  },
  {
    id: "analog",
    index: "05",
    name: "Analog / Mixed-Signal",
    description:
      "Schematic capture, device sizing, simulation, and custom layout for the analog blocks.",
  },
  {
    id: "operations",
    index: "06",
    name: "Operations & Outreach",
    description:
      "Sponsors, events, workshops, and onboarding the next cohort of chip designers.",
  },
];
