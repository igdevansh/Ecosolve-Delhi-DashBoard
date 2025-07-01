export const mockPieData = [
  {
    id: "PET",
    label: "PET",
    value: 42,
    color: "#2e7d32",
  },
  {
    id: "HDPE", 
    label: "HDPE",
    value: 25,
    color: "#66bb6a",
  },
  {
    id: "PVC",
    label: "PVC", 
    value: 12,
    color: "#ff7043",
  },
  {
    id: "LDPE",
    label: "LDPE",
    value: 8,
    color: "#42a5f5",
  },
  {
    id: "Other",
    label: "Other",
    value: 13,
    color: "#ab47bc",
  },
];

export const mockLineData = [
  {
    id: "Plastic Saved (kg)",
    color: "#4cceac",
    data: [
      { x: "Jan", y: 58 },
      { x: "Feb", y: 65 },
      { x: "Mar", y: 76 },
      { x: "Apr", y: 88 },
      { x: "May", y: 95 },
      { x: "Jun", y: 112 },
    ],
  },
  {
    id: "Target Saving (kg)",
    color: "#a4de6c",
    data: [
      { x: "Jan", y: 80 },
      { x: "Feb", y: 88 },
      { x: "Mar", y: 93 },
      { x: "Apr", y: 99 },
      { x: "May", y: 105 },
      { x: "Jun", y: 112 },
    ],
  },
];

export const mockResources = [
  {
    name: "Goonj Dropping Centre – Mayur Vihar Phase 2",
    type: "Recycling Center",
    description: "Accepts clothes, paper, and household materials for reuse and recycling.",
    address: "277, Pocket C, Mayur Vihar Phase 2, Delhi 110091",
    hours: "Mon-Sat: 11 AM–4 PM; Sun: 8 AM–11 AM",
    phone: "011-4142-0042",
    website: null,
  },
  {
    name: "JAAGRUTI – Waste Paper Recycling Services",
    type: "Recycling Center", 
    description: "Offers waste paper recycling services for organizations and individuals. Email: paper@we-recycle.org.",
    address: "Contact for address",
    hours: null,
    phone: "011-2613-5246",
    website: "http://we-recycle.org/",
  },
  {
    name: "Pom Pom",
    type: "Recycling Center",
    description: "A social enterprise that helps you recycle your dry waste at your doorstep, providing monetary value in return.",
    address: "Serves various locations in Delhi NCR",
    hours: "Service available via app booking",
    phone: "+91-8882-333-888",
    website: "https://pompom.in/",
  },
];
