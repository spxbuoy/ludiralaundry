const STATIC_SERVICES = [
  // Wash & Fold Services
  {
    _id: "service_Assorted_cloths_basic",
    name: "Assorted Clothes",
    description: "this i charged per kg of clothes washed and folded",
    category: "wash-fold",
    basePrice: 140.0/=, // Base price per kg
    price: 140/=, // Add price field for frontend compatibility
    estimatedTime: "1-3 hours",
    requirements: "Separate by color and fabric type",
    isActive: true,
    isAvailable: true,
    imageUrl: "/image/wash and fold.jpg"
  },
  {
    _id: "service_Assorted_fold_premium",
    name: "Assorted Clothes",
    description: "Premium wash and fold with fabric softener and eco-friendly detergents",
    category: "wash-fold",
    basePrice: 1000.0,
    price: 1000.0,
    estimatedTime: "1-2 hours",
    requirements: "Premium detergents and fabric care",
    isActive: true,
    isAvailable: true,
    imageUrl: "/image/wash and fold.jpg"
  },
  {
    _id: "service_wash_fold_express",
    name: "Duvet Cleaning",
    description: "depending on the size of the duvet",
    category: "wash-fold",
    basePrice: 700.0,
    price: 700.0,
    estimatedTime: "Same day",
    requirements: "Drop off by 10 AM for same-day service",
    isActive: true,
    isAvailable: true,
    imageUrl: "/image/wash and fold.jpg"
  },

  // Dry Cleaning Services
  {
    _id: "service_dry_clean_standard",
    name: "Standard Dry Cleaning",
    description: "Professional dry cleaning for suits, dresses, and delicate fabrics",
    category: "dry-cleaning",
    basePrice: 20.0,
    price: 20.0,
    estimatedTime: "2-3 days",
    requirements: "Check garment care labels",
    isActive: true,
    isAvailable: true,
    imageUrl: "/image/drycleaning.webp"
  },
  // Ironing Services
  {
    _id: "service_ironing_basic",
    name: "kanzuu",
    description: "Professional ironing and pressing for everyday clothes",
    category: "ironing",
    basePrice: 300.0,
    price: 300.0,
    estimatedTime: "30-60 minutes",
    requirements: "Clean clothes only",
    isActive: true,
    isAvailable: true,
    imageUrl: "/image/ironing.webp"
  },
  {
    _id: "service_ironing_premium",
    name: "bedsheet ironing",
    description: "Expert pressing with steam treatment for crisp, professional results",
    category: "ironing",
    basePrice: 300.0,
    price: 300.0,
    estimatedTime: "24-48 hours",
    requirements: "Professional steam pressing equipment",
    isActive: true,
    isAvailable: true,
    imageUrl: "/image/ironing.webp"
  },
  {
    _id: "service_ironing_shirts",
    name: "jacket ironing",
    description: "Specialized jacket ironing for business and formal shirts",
    category: "ironing",
    basePrice: 300.0,
    price: 300.0,
    estimatedTime: "Same day",
    requirements: "Business shirt specialist service",
    isActive: true,
    isAvailable: true,
    imageUrl: "/image/ironing.webp"
  },
    {
    _id: "service_ironing_shirts",
    name: "dress ironing",
    description: "Specialized jacket ironing for business and formal shirts",
    category: "ironing",
    basePrice: 300.0,
    price: 300.0,
    estimatedTime: "Same day",
    requirements: "Business shirt specialist service",
    isActive: true,
    isAvailable: true,
    imageUrl: "/image/ironing.webp"
  },

  // Stain Removal Services
  {
    _id: "service_stain_removal_basic",
    name: "Basic Stain Removal",
    description: "Treatment for common stains like food, drinks, and dirt",
    category: "stain-removal",
    basePrice: 200.0,
    price: 200.0,
    estimatedTime: "2-3 hours",
    requirements: "Fresh stains work best",
    isActive: true,
    isAvailable: true,
    imageUrl: "/image/stain removal.jpg"
  },
  {
    _id: "service_specialty_leather",
    name: "Leather Care",
    description: "Specialized cleaning and conditioning for leather garments",
    category: "specialty",
    basePrice: 250.0,
    price: 250.0,
    estimatedTime: "1-2 hours",
    requirements: "Leather specialist treatment",
    isActive: true,
    isAvailable: true,
    imageUrl: "/image/drycleaning.webp"
  }
];

module.exports = { STATIC_SERVICES };