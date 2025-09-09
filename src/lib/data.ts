export const products = [
  {
    id: 1,
    name: "AquaFlex Standard Series",
    description: "Our versatile flagship ink, perfect for general-purpose printing on a wide range of corrugated substrates. Excellent dot reproduction and mileage.",
    imageUrl: "https://picsum.photos/400/300",
    specs: {
      viscosity: "20-25s (Zahn #2)",
      ph: "8.5-9.2",
      dryingSpeed: "Fast",
    },
    applications: ["E-commerce Boxes", "Retail Packaging"],
    properties: ["Good Scuff Resistance", "Fast Drying"],
    colors: ["#000000", "#FF0000", "#0000FF", "#FFFF00", "#008000"],
  },
  {
    id: 2,
    name: "VividGloss Premium Series",
    description: "A high-end ink designed for superior gloss and color vibrancy. Ideal for premium packaging and display applications where visual appeal is paramount.",
    imageUrl: "https://picsum.photos/400/300?random=2",
    specs: {
      viscosity: "22-28s (Zahn #2)",
      ph: "8.8-9.5",
      dryingSpeed: "Medium",
    },
    applications: ["High-End Retail", "Point-of-Sale Displays"],
    properties: ["High-Gloss Finish", "Excellent Color Strength"],
    colors: ["#FF1493", "#00BFFF", "#FFD700", "#ADFF2F"],
  },
  {
    id: 3,
    name: "EcoPure Natural Kraft",
    description: "Specially formulated for printing on natural and recycled kraft linerboard. Provides high opacity and excellent adhesion on challenging surfaces.",
    imageUrl: "https://picsum.photos/400/300?random=3",
    specs: {
      viscosity: "25-30s (Zahn #2)",
      ph: "8.5-9.0",
      dryingSpeed: "Fast",
    },
    applications: ["Sustainable Packaging", "Kraft Linerboard"],
    properties: ["High Opacity", "Eco-Friendly Formulation"],
    colors: ["#FFFFFF", "#000000", "#A0522D"],
  },
  {
    id: 4,
    name: "DuraGuard Scuff-Resistant",
    description: "Engineered for durability, this ink offers maximum resistance to scuffing and abrasion, ensuring your packaging looks pristine throughout the supply chain.",
    imageUrl: "https://picsum.photos/400/300?random=4",
    specs: {
      viscosity: "23-27s (Zahn #2)",
      ph: "8.7-9.3",
      dryingSpeed: "Medium-Fast",
    },
    applications: ["Heavy-Duty Boxes", "Subscription Boxes"],
    properties: ["Maximum Scuff Resistance", "High Durability"],
    colors: ["#4169E1", "#C70039", "#228B22"],
  },
  {
    id: 5,
    name: "FoodGrade Compliant Series",
    description: "Formulated with raw materials that are compliant for indirect food contact applications. Safe, reliable, and vibrant for food and beverage packaging.",
    imageUrl: "https://picsum.photos/400/300?random=5",
    specs: {
      viscosity: "20-25s (Zahn #2)",
      ph: "8.5-9.2",
      dryingSpeed: "Fast",
    },
    applications: ["Food Packaging", "Beverage Cartons"],
    properties: ["Food-Grade Compliant", "Low Odor"],
    colors: ["#FF6347", "#4682B4", "#32CD32", "#FFC0CB"],
  },
  {
    id: 6,
    name: "QuickDry High-Speed Series",
    description: "Designed for modern high-speed presses, this ink dries rapidly to prevent smudging and offsetting, maximizing your production efficiency.",
    imageUrl: "https://picsum.photos/400/300?random=6",
    specs: {
      viscosity: "18-22s (Zahn #2)",
      ph: "8.8-9.5",
      dryingSpeed: "Very Fast",
    },
    applications: ["High-Volume Production", "Automated Lines"],
    properties: ["Extremely Fast Drying", "Excellent Press Stability"],
    colors: ["#DC143C", "#00008B", "#006400"],
  },
];

export const teamMembers = [
  {
    name: "Eleanor Vance",
    role: "Founder & CEO",
    imageUrl: "https://picsum.photos/200/200?random=10",
  },
  {
    name: "Marcus Thorne",
    role: "Head of R&D",
    imageUrl: "https://picsum.photos/200/200?random=11",
  },
  {
    name: "Isabelle Chen",
    role: "Lead Chemist",
    imageUrl: "https://picsum.photos/200/200?random=12",
  },
  {
    name: "David Rodriguez",
    role: "Production Manager",
    imageUrl: "https://picsum.photos/200/200?random=13",
  },
  {
    name: "Sophia Loren",
    role: "Quality Assurance Lead",
    imageUrl: "https://picsum.photos/200/200?random=14",
  },
  {
    name: "James Carter",
    role: "Sales Director",
    imageUrl: "https://picsum.photos/200/200?random=15",
  },
];

export const filterOptions = {
    applications: [
      "E-commerce Boxes", "Retail Packaging", "High-End Retail", 
      "Point-of-Sale Displays", "Sustainable Packaging", "Kraft Linerboard", 
      "Heavy-Duty Boxes", "Subscription Boxes", "Food Packaging", 
      "Beverage Cartons", "High-Volume Production", "Automated Lines"
    ],
    properties: [
      "Good Scuff Resistance", "Fast Drying", "High-Gloss Finish", 
      "Excellent Color Strength", "High Opacity", "Eco-Friendly Formulation", 
      "Maximum Scuff Resistance", "High Durability", "Food-Grade Compliant", 
      "Low Odor", "Extremely Fast Drying", "Excellent Press Stability"
    ],
};
