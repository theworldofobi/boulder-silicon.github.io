/**
 * The ASIC Network — https://asicnetwork.net
 * "A collective of university ASIC and VLSI clubs working in the open."
 * Club list taken from https://asicnetwork.net/network.html
 */
export const asicNetwork = {
  url: "https://asicnetwork.net",
  mapUrl: "https://asicnetwork.net/network.html",
  githubUrl: "https://github.com/ASIC-Network",
};

export type Tutorial = {
  index: string;
  title: string;
  description: string;
  href: string;
};

export const tutorials: Tutorial[] = [
  {
    index: "01",
    title: "Digital",
    description:
      "RTL, synthesis, place and route, and signoff — from Verilog you wrote to a layout you can hand off.",
    href: "https://asic-network.github.io/digital-tutorials/",
  },
  {
    index: "02",
    title: "Analog",
    description:
      "Schematic capture, device sizing, simulation, and layout — from a single transistor to a working block.",
    href: "https://asic-network.github.io/analog-tutorials/",
  },
];

export type Club = { name: string; campus: string; href: string };

export const sisterClubs: Club[] = [
  {
    name: "Longhorn Silicon",
    campus: "UT Austin",
    href: "https://longhornsilicon.com/",
  },
  {
    name: "SiliconJackets",
    campus: "Georgia Tech",
    href: "https://siliconjackets.gt/",
  },
  {
    name: "Stone Arch Silicon",
    campus: "Minnesota",
    href: "https://stone-arch-silicon.github.io/stone-arch-silicon/",
  },
  {
    name: "SiliconBadgers",
    campus: "UW–Madison",
    href: "https://siliconbadgers.com/",
  },
  { name: "C2S2", campus: "Cornell", href: "https://www.c2s2.dev/" },
  {
    name: "Chip Forge",
    campus: "Iowa State",
    href: "https://git.ece.iastate.edu/isu-chip-fab",
  },
  { name: "UWASIC", campus: "Waterloo", href: "https://uwasic.com/" },
  { name: "UofT ASIC", campus: "Toronto", href: "https://uoftasic.com/" },
  {
    name: "Schulich on a Chip",
    campus: "Calgary",
    href: "https://schulichonachip.ca/",
  },
];
