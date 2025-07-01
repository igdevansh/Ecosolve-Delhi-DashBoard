// src/data/mockData.js

// Data for the "Delhi: Plastic Waste by Type" Pie Chart
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

// Data for the "Delhi: Waste Reduction Progress" Line Chart
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

// Data for the "Local Eco-Resources" Page
export const mockResources = [
  {
    name: "Goonj Dropping Centre – Mayur Vihar Phase 2",
    type: "Recycling Center",
    description: "Accepts clothes, paper, and household materials for reuse and recycling.",
    address: "277, Pocket C, Mayur Vihar Phase 2, Delhi 110091",
    hours: "Mon-Sat: 11 AM–4 PM; Sun: 8 AM–11 AM",
    phone: null,
    website: null,
  },
  {
    name: "Chintan Environment Research & Action Group – Khan Market",
    type: "Recycling Center",
    description: "Accepts e-waste, old clothes, books, and dry recyclables. Supports waste-picker welfare.",
    address: "Near Air Force Bal Bharati School, Lodhi Road, Khan Market, New Delhi – 110003",
    hours: "Mon–Sat: 10 AM–5 PM; Closed Sundays",
    phone: null,
    website: null,
  },
  {
    name: "Mundka Plastic Recycling Hub – Mundka",
    type: "Recycling Cluster",
    description: "Handles large-scale plastic sorting and recycling. Best for bulk or NGO-level drop-offs.",
    address: "Mundka Industrial Area, Delhi – 110041",
    hours: "Mon–Sat: 9 AM–6 PM; Closed Sundays",
    phone: null,
    website: null,
  },
  {
    name: "Adrish Zero-Waste Store – Shahpur Jat",
    type: "Eco-Friendly Shop",
    description: "Plastic-free and organic lifestyle store: groceries, wellness, home, and refill station.",
    address: "86-A, Shahpur Jat, New Delhi – 110049",
    hours: "Mon–Sun: 11 AM–8 PM",
    phone: null,
    website: null,
  },
  {
    name: "Green The Map – Sarvodaya Enclave",
    type: "Eco Boutique & Recycling Design Studio",
    description: "Upcycled bags, accessories, and sustainable products made by local communities.",
    address: "A-60, Sarvodaya Enclave, New Delhi – 110017",
    hours: "Mon–Sat: 10 AM–6 PM",
    phone: null,
    website: null,
  },
  {
    name: "Delhi Greens NGO – Community & Environment Program",
    type: "Community & Environment Program",
    description: "Promotes environmental awareness, tree plantation, campaigns, and school outreach.",
    address: "42, 2nd Floor, Hasanpur, I.P. Extension, Delhi – 110092",
    hours: "Mon–Fri: 10 AM–5 PM",
    phone: null,
    website: null,
  },
  {
    name: "Swechha India – Vasant Kunj",
    type: "Sustainability NGO",
    description: "Sustainability NGO working with youth on river cleanups, eco-walks, and green workshops.",
    address: "A-200, Street No. 7, Mahipalpur Ext., Near Vasant Kunj, Delhi – 110037",
    hours: "Mon–Fri: 10 AM–6 PM",
    phone: null,
    website: null,
  },
];
