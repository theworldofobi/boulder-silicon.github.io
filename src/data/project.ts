export type Milestone = {
  label: string;
  detail: string;
  status: "done" | "active" | "upcoming";
};

/** TODO: replace with the real first chip project. */
export const project = {
  codename: "Flatiron",
  summary:
    "Our first chip: a small RISC-V microcontroller with a custom accelerator block, built end to end by students on an open-source PDK.",
  specs: [
    { label: "Process", value: "SKY130 (TODO)" },
    { label: "Flow", value: "OpenLane / LibreLane" },
    { label: "Core", value: "RV32I (TODO)" },
    { label: "Shuttle", value: "Tiny Tapeout (TODO)" },
  ],
};

export const milestones: Milestone[] = [
  { label: "Spec", detail: "Architecture and block diagram", status: "done" },
  { label: "RTL", detail: "SystemVerilog implementation", status: "active" },
  { label: "DV", detail: "Testbenches and coverage", status: "upcoming" },
  { label: "PD", detail: "Place-and-route and signoff", status: "upcoming" },
  { label: "Tapeout", detail: "GDSII to the fab", status: "upcoming" },
];
