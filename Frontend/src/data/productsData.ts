export interface ProductActive {
  name: string;
  dose: string;
  purpose: string;
  standard?: string;
}

export interface ProductVariant {
  size: string;
  price?: string;
  packText: string;
}

export interface ClinicalBenefitItem {
  title: string;
  desc: string;
}

export interface HowToUseGuide {
  timing: string;
  instructions: string;
  duration: string;
  tips: string;
}

export interface ProductDossier {
  fileName: string;
  fileUrl: string;
  fileType: 'PDF' | 'DOCX';
  fileSize: string;
  title: string;
  citation: string;
  publication: string;
}

export interface ProductSKU {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  categoryId: string;
  form: string;
  dosage: string;
  price?: string;
  variants: ProductVariant[];
  badge: string;
  evidenceGrade: string;
  description: string;
  detailsOverview: string;
  mechanism: string;
  actives: ProductActive[];
  indications: string[];
  clinicalBenefits: ClinicalBenefitItem[];
  howToUse: HowToUseGuide;
  dosageInstruction: string;
  manufacturer: string;
  licence: string;
  imageColor: string;
  imageUrl?: string;
  galleryImages?: string[];
  isDevice?: boolean;
  dossier?: ProductDossier;
  moaSteps?: { step: string; title: string; desc: string }[];
  pharmacokinetics?: {
    bioavailability: string;
    tMax: string;
    halfLife: string;
    elimination: string;
  };
  safetyProfile?: {
    contraindications: string;
    adverseReactions: string;
    pregnancyCategory: string;
    storage: string;
  };
}

export const PRODUCTS_CATALOG: ProductSKU[] = [
  {
    id: 'guanolact',
    slug: 'guanolact',
    title: 'GUANOLACT',
    tagline: 'Bio-available Hemoglobin & Mucosal Defense Matrix',
    category: 'Iron Deficiency & Immunity',
    categoryId: 'iron-immunity',
    form: 'Tablet (Strip of 10)',
    dosage: '1 BD (Twice Daily after meals)',
    price: '₹850.00',
    variants: [
      { size: 'Strip of 10 Tablets', price: '₹850.00', packText: 'Standard Physician Strip' },
      { size: 'Box of 30 Tablets (3 Strips)', price: '₹2,350.00', packText: 'Monthly Clinical Pack' },
      { size: 'Institutional Box (100 Tablets)', price: '₹7,200.00', packText: 'Hospital & Clinic Pack' },
    ],
    badge: 'LEAD FLAGSHIP SKU',
    evidenceGrade: 'Grade A Evidence',
    description:
      'Engineered with bioactive lactoferrin and disodium guanosine to optimize mucosal iron transport and ferritin synthesis without gastrointestinal distress.',
    detailsOverview:
      'GUANOLACT is a flagship pharmaceutical nutraceutical designed to address refractory Iron Deficiency Anemia (IDA). Unlike traditional oral ferrous salts which react with luminal hydrogen peroxide to generate corrosive free radicals, GUANOLACT utilizes bioactive lactoferrin chelation alongside Disodium Guanosine 5-MP to upregulate enterocyte transferrin receptors. This dual-action pathway achieves high-affinity ferritin incorporation without constipation, nausea, or mucosal oxidative erosion.',
    mechanism:
      'Lactoferrin binds free ferric iron to prevent bacterial uptake and mucosal lipid peroxidation, while disodium guanosine enhances mucosal transferrin receptor upregulation and ferroportin translocation.',
    actives: [
      { name: 'Lactoferrin', dose: '50 mg', purpose: 'Mucosal Iron Transport & Antimicrobial Glycoprotein', standard: 'USP / EP Grade' },
      { name: 'Disodium Guanosine 5-MP', dose: '5 mg', purpose: 'Nucleotide Transferrin Upregulation', standard: 'Ph. Eur. Grade' },
      { name: 'Ferrous Bisglycinate', dose: '60 mg', purpose: '30 mg Elemental Bioavailable Iron Chelate', standard: 'FCC / USP Grade' },
    ],
    indications: [
      'Iron Deficiency Anemia (IDA)',
      'Impaired Gastrointestinal Iron Absorption',
      'Post-Surgical Hemoglobin Recovery',
      'Immune Defense Maintenance in Chronic Anemia',
    ],
    clinicalBenefits: [
      { title: 'Rapid Ferritin Elevation', desc: 'Increases serum ferritin synthesis 3.4x faster than standard ferrous sulfate.' },
      { title: 'Zero GI Distress & Constipation', desc: 'Protected chelated structure avoids stomach cramping and mucosal oxidation.' },
      { title: 'Enhanced Mucosal Immunity', desc: 'Lactoferrin deprives pathogenic bacteria of free iron in the gut lumen.' },
      { title: 'High Bioavailability', desc: 'Passes uninhibited through gastric acid to enterocytes via LRP1 receptors.' },
    ],
    howToUse: {
      timing: 'Twice daily after morning and evening meals with water.',
      instructions: 'Swallow whole with a full glass of water or citrus juice. Do not chew or crush.',
      duration: 'Recommended minimum therapy course of 8 to 12 weeks as directed by your physician.',
      tips: 'Vitamin C co-ingestion enhances non-heme elemental absorption.',
    },
    dosageInstruction: 'Take one (1) tablet twice daily (BD) post-meals, or as prescribed by a registered healthcare professional.',
    manufacturer: 'Gencleus Pharma Pvt. Ltd. (WHO-GMP Certified Facility)',
    licence: 'FSSAI Marketer Lic. No. 13624999000034',
    imageColor: 'from-[#071311] via-[#0b835c] to-[#044e36]',
    imageUrl: '/products/guanolact.jpg',
    moaSteps: [
      { step: '01', title: 'Gastric Passage', desc: 'Lactoferrin-iron complex remains stable through stomach acid pH 1.5.' },
      { step: '02', title: 'Enterocyte Receptor Binding', desc: 'Binds to LRP1 enterocyte receptors in the duodenum.' },
      { step: '03', title: 'Ferritin Loading', desc: 'Disodium Guanosine upregulates transferrin for rapid serum ferritin incorporation.' },
    ],
    pharmacokinetics: {
      bioavailability: '92% (Enterocyte Receptors)',
      tMax: '2.5 Hours Post-Oral Dose',
      halfLife: '8.4 Hours',
      elimination: 'Biliary & Physiological Recycling',
    },
    safetyProfile: {
      contraindications: 'Known hypersensitivity to dairy-derived lactoferrin or iron storage disorders (hemochromatosis).',
      adverseReactions: 'Rare mild transient dark stools (< 0.2%). No constipation reported.',
      pregnancyCategory: 'Category A (Safe under physician supervision during pregnancy and lactation).',
      storage: 'Store below 25°C in a cool, dry place protected from direct sunlight and humidity.',
    },
  },
  {
    id: 'estroclen',
    slug: 'estroclen',
    title: 'ESTROCLEN',
    tagline: 'Oestrogen Metabolite Ratio & Endocrine Homeostasis',
    category: "Women's Health",
    categoryId: 'womens-health',
    form: 'Tablet (3 x 10\'s Tablets)',
    dosage: '1 BD (Twice Daily after meals)',
    price: '₹920.00',
    variants: [
      { size: 'Strip of 10 Tablets', price: '₹920.00', packText: 'Standard 10-Day Pack' },
      { size: 'Box of 30 Tablets (3 Strips)', price: '₹2,550.00', packText: '3-Strip Box Pack' },
    ],
    badge: 'HERO FORMULATION',
    evidenceGrade: 'Grade A Evidence',
    description:
      'First-in-class doctor-channel formulation targeting 2-OHE1/16α-OHE1 oestrogen metabolite ratios and endometrial wellness.',
    detailsOverview:
      'ESTROCLEN is a specialized doctor-channel formulation created to balance estrogen metabolite pathways in women. Hepatic Phase-I metabolism can yield either protective 2-hydroxyestrone (2-OHE1) or tissue-proliferative 16α-hydroxyestrone (16α-OHE1). ESTROCLEN modulates CYP1A1 hydroxylation, favoring protective 2-OHE1 while supporting progesterone luteal synthesis.',
    mechanism:
      'Standardized Ocimum sanctum & Vitex agnus-castus modulate hepatic CYP1A1 phase-II hydroxylation, favoring protective 2-hydroxyestrone metabolites.',
    actives: [
      { name: 'Ocimum sanctum Extract', dose: '420 mg', purpose: 'Hepatic CYP1A1 Oestrogen Modulation', standard: 'Standardized to Ursolic Acid' },
      { name: 'Vitex agnus-castus Extract', dose: '100 mg', purpose: 'Corpus Luteum Progesterone Support', standard: '0.5% Agnuside' },
      { name: 'Resveratrol (Vitis vinifera)', dose: '5 mg', purpose: 'Polyphenolic Anti-Oxidative Defense', standard: '98% Trans-Resveratrol' },
      { name: 'Brassica juncea Extract', dose: '100 mg', purpose: 'Indole-3-Carbinol Glucosinolate Matrix', standard: 'Glucosinolate Standard' },
    ],
    indications: [
      'Estrogen Dominance Metabolite Imbalance',
      'Cyclic Mastalgia & Premenstrual Tension',
      'Ovarian Endocrine Homeostasis',
      'Uterine Tissue Anti-Oxidative Support',
    ],
    clinicalBenefits: [
      { title: 'Balances Estrogen Ratios', desc: 'Shifts hepatic clearance toward protective 2-OHE1 metabolites.' },
      { title: 'Reduces Premenstrual Mastalgia', desc: 'Decreases cyclic breast tenderness by modulating prolactin output.' },
      { title: 'Supports Endometrial Health', desc: 'Polyphenolic antioxidants protect uterine stromal cells from oxidative stress.' },
      { title: 'Non-Hormonal Safety Profile', desc: 'Plant-derived bioactives interact gently without synthetic hormones.' },
    ],
    howToUse: {
      timing: 'Twice daily post-breakfast and post-dinner.',
      instructions: 'Take 1 tablet after meals with water. Consistently consume for optimal 3-cycle benefit.',
      duration: 'Recommended continuous use for 3 menstrual cycles (90 days).',
      tips: 'Combine with a Mediterranean diet low in refined carbohydrates for peak endocrine harmony.',
    },
    dosageInstruction: 'Take one (1) tablet twice daily (BD) after main meals, or as directed by a gynaecologist.',
    manufacturer: 'Gencleus Pharma Pvt. Ltd. (WHO-GMP Certified Facility)',
    licence: 'FSSAI Lic. No. 13622999000080 / 13624999000034',
    imageColor: 'from-amber-900/30 via-[#78350f]/20 to-amber-500/10',
    imageUrl: '/products/gallery/estroclen/estroclen_hero_front.jpg',
    galleryImages: [
      '/products/gallery/estroclen/estroclen_hero_front.jpg',
      '/products/gallery/estroclen/estroclen_hero_split.jpg',
      '/products/gallery/estroclen/estroclen_hero_box_back.jpg',
      '/products/gallery/estroclen/estroclen_hero_blister_back.jpg',
      '/products/gallery/estroclen/estroclen_hero_blister_foil.jpg',
    ],
    moaSteps: [
      { step: '01', title: 'Hepatic CYP1A1 Induction', desc: 'Indole glucosinolates upregulate 2-hydroxyestrone clearance pathway.' },
      { step: '02', title: 'Dopaminergic Pituitary Signaling', desc: 'Vitex agnus-castus acts on D2 receptors to normalize prolactin.' },
      { step: '03', title: 'Stromal Antioxidant Protection', desc: 'Trans-Resveratrol neutralizes reactive oxygen species in luteal tissue.' },
    ],
    pharmacokinetics: {
      bioavailability: '88% Standardized Hydroxylation',
      tMax: '3.0 Hours Post-Dose',
      halfLife: '6.2 Hours',
      elimination: 'Hepatic Conjugation & Renal Clearance',
    },
    safetyProfile: {
      contraindications: 'Do not use during pregnancy or alongside exogenous hormone therapy without doctor consultation.',
      adverseReactions: 'Rare mild nausea if taken on an empty stomach (< 0.1%).',
      pregnancyCategory: 'Category C (Discontinue upon confirmation of pregnancy).',
      storage: 'Store in a dry location below 25°C. Keep out of reach of children.',
    },
  },
  {
    id: 'quicknap',
    slug: 'quicknap',
    title: 'QUICK NAP',
    tagline: 'Circadian Synchronization & Sublingual Fast Release',
    category: 'Sleep & Recovery',
    categoryId: 'sleep-recovery',
    form: 'Orally Disintegrating Film (30 Films Box)',
    dosage: '1 Film sublingually 20 minutes before bedtime',
    price: '₹650.00',
    variants: [
      { size: 'Box of 30 Sublingual Films', price: '₹650.00', packText: '30-Night Sleep Strip Box' },
      { size: 'Twin Pack (60 Sublingual Films)', price: '₹1,180.00', packText: '2-Box Rest & Recovery Course' },
    ],
    badge: 'FAST RELEASE MATRIX',
    evidenceGrade: 'Grade B+ Evidence',
    description:
      'Rapid sublingual dissolution oral disintegrating film (ODF) engineered with Melatonin 5mg & Valerian 25mg for deep, relaxing, and rejuvenating sleep.',
    detailsOverview:
      'QUICK NAP is an advanced sublingual Oral Disintegrating Film (ODF) designed for rapid sleep onset. Formulated with Melatonin (5 mg), Nano-Valerian root extract (25 mg), Vitamin B6 (5 mg), and Chamomile (5 mg) with Raspberry flavor. By dissolving on the tongue within seconds, QUICK NAP bypasses gut degradation and delivers active ingredients directly for restful sleep naturally.',
    mechanism:
      'Sublingual mucosal absorption bypasses hepatic first-pass metabolism, delivering micro-dosed melatonin & nano-valerian directly to MT1/MT2 pineal receptors.',
    actives: [
      { name: 'Melatonin', dose: '5 mg', purpose: 'Pineal MT1/MT2 Sleep-Wake Cycle Activation', standard: 'USP Sublingual Grade' },
      { name: 'Nano-Valerian Root Extract', dose: '25 mg', purpose: 'GABA-A Allosteric Neuro-Tranquility', standard: 'Nano-Extract Standard' },
      { name: 'Vitamin B6', dose: '5 mg', purpose: 'Serotonin-to-Melatonin Enzymatic Cofactor', standard: 'USP Grade' },
      { name: 'Chamomile Extract', dose: '5 mg', purpose: 'Apigenin Anxiolytic Muscle Relaxation', standard: 'Natural Sedative Standard' },
    ],
    indications: [
      'Delayed Sleep Phase Syndrome (DSPS)',
      'Jet Lag & Shift-Work Sleep Disorder',
      'Sublingual Sleep Onset Latency Reduction',
      'Non-Habit-Forming Nocturnal Rest Support',
    ],
    clinicalBenefits: [
      { title: 'Sleep Onset in < 20 Mins', desc: 'Sublingual film dissolves on tongue in seconds for rapid systemic entry.' },
      { title: 'Synergistic Melatonin & Valerian', desc: 'Combines 5 mg Melatonin with 25 mg Nano-Valerian for deep REM sleep.' },
      { title: 'Delicious Raspberry Flavor', desc: 'Pleasant sublingual experience without chalky pills or bitter taste.' },
      { title: 'Non-Addictive & Habit-Free', desc: 'Natural neuro-amino relaxation without synthetic sedative dependence.' },
    ],
    howToUse: {
      timing: '15 to 30 minutes before bedtime.',
      instructions: 'Peel pouch, take strip out, and place 1 Melts strip on the tongue. Allow to dissolve completely.',
      duration: 'Suitable for nightly use, shift work, or bedtime sleep latency adjustment.',
      tips: 'Avoid blue light phone screens after placing the film for optimal pineal response.',
    },
    dosageInstruction: 'Place one (1) film on the tongue 15-30 minutes before bedtime. Allow to dissolve naturally.',
    manufacturer: 'Peptris Pharma Pvt. Ltd. (FSSAI Lic. No. 13823999001464)',
    licence: 'FSSAI Lic. No. 13624999000034',
    imageColor: 'from-[#1e1b4b] via-[#0b835c] to-[#0f172a]',
    imageUrl: '/products/gallery/quicknap/quicknap_hero_composite.jpg',
    galleryImages: [
      '/products/gallery/quicknap/quicknap_hero_composite.jpg',
      '/products/gallery/quicknap/quicknap_hero_banner.jpg',
      '/products/gallery/quicknap/quicknap_hero_back.jpg',
      '/products/gallery/quicknap/quicknap_hero_sachet.jpg',
    ],
    moaSteps: [
      { step: '01', title: 'Sublingual Dissolution', desc: 'Film disintegrates on oral mucosa within 15 seconds.' },
      { step: '02', title: 'Jugular Systemic Entry', desc: 'Direct venous absorption bypasses gut and liver enzymes.' },
      { step: '03', title: 'MT1/MT2 Brain Binding', desc: 'Activates suprachiasmatic nucleus receptors to signal nocturnal sleep.' },
    ],
    pharmacokinetics: {
      bioavailability: '96% Sublingual Mucosal Absorption',
      tMax: '18 Minutes',
      halfLife: '45 Minutes',
      elimination: 'Hepatic Hydroxylation & Renal Excretion',
    },
    safetyProfile: {
      contraindications: 'Do not drive or operate heavy machinery within 6 hours of consuming QUICKNAP.',
      adverseReactions: 'No addiction or withdrawal effects reported.',
      pregnancyCategory: 'Category B (Consult physician prior to use during pregnancy).',
      storage: 'Store below 25°C away from moisture. Keep strip sealed in foil until use.',
    },
  },
  {
    id: 'fatease-5',
    slug: 'fatease-5',
    title: 'FATEASE-5',
    tagline: 'Starch Digestion Modulation & Postprandial Glucose Control',
    category: 'Weight Management',
    categoryId: 'weight-management',
    form: 'Tablet (3 x 10\'s Tablets)',
    dosage: '1 Tablet before carb-rich meals',
    price: '₹780.00',
    variants: [
      { size: 'Strip of 10 Tablets', price: '₹780.00', packText: 'Standard Meal Pack' },
      { size: 'Box of 30 Tablets (3 Strips)', price: '₹2,150.00', packText: '3-Strip Box Pack' },
    ],
    badge: 'METABOLIC MODULATOR',
    evidenceGrade: 'Grade B Evidence',
    description:
      'Phaseolus vulgaris, Spirulina & Garcinia cambogia blend designed to modulate starch digestion and support healthy metabolic glucose control.',
    detailsOverview:
      'FATEASE-5 is a targeted metabolic formulation containing Phaseolus vulgaris L seed extract (400 mg), Spirulina platensis (500 mg), Garcinia cambogia rind extract (50 mg), Mangifera indica seed kernel (150 mg), and Chromium picolinate (200 mcg). By modulating starch breakdown and supporting carbohydrate metabolism, FATEASE-5 prevents sharp postprandial glycemic excursions.',
    mechanism:
      'Phaseolamin & Garcinia hydroxycitric acid modulate starch cleavage and lipid biosynthesis, promoting healthy postprandial glucose management.',
    actives: [
      { name: 'Phaseolus vulgaris L Seed Extract', dose: '400 mg', purpose: 'Alpha-Amylase Starch Digestion Modulator', standard: 'USP Grade Extract' },
      { name: 'Spirulina (Arthrospira platensis)', dose: '500 mg', purpose: 'Metabolic Phytonutrient & Amino Support', standard: '16.66% ICMR RDA' },
      { name: 'Garcinia cambogia Fruit Rind Extract', dose: '50 mg', purpose: 'Hydroxycitric Acid (HCA) Lipid Regulation', standard: 'Standardized HCA' },
      { name: 'Mangifera indica Seed Kernel', dose: '150 mg', purpose: 'Polyphenolic Metabolic Antioxidant', standard: '7.5% ICMR RDA' },
      { name: 'Chromium Picolinate', dose: '200 mcg', purpose: 'Insulin Receptor Chromodulin Signaling', standard: '50% ICMR RDA' },
    ],
    indications: [
      'Postprandial Glycemic Excursion Control',
      'Carbohydrate Digestion Rate Modulation',
      'Metabolic Weight Management Support',
      'Caloric Efficiency Balancing',
    ],
    clinicalBenefits: [
      { title: 'Controls Glycemic Spikes', desc: 'Modulates carbohydrate breakdown following starch-heavy meals.' },
      { title: 'Multi-Active Botanical Synergism', desc: 'Combines Phaseolus, Spirulina, Garcinia, Mangifera & Chromium.' },
      { title: 'Supports Insulin Sensitivity', desc: 'Chromium picolinate enhances peripheral glucose clearance.' },
      { title: 'Natural Coated Tablets', desc: 'Non-stimulant formula without jitteriness or tachycardia.' },
    ],
    howToUse: {
      timing: '10 to 15 minutes prior to carbohydrate-rich meals.',
      instructions: 'Take 1 coated tablet with water before lunch or dinner containing starches.',
      duration: 'Suitable for daily dietary meal management.',
      tips: 'Maintain healthy hydration throughout the day.',
    },
    dosageInstruction: 'Take one (1) coated tablet 15 minutes before major carb-containing meals.',
    manufacturer: 'Gencleus Pharma Pvt. Ltd. (WHO-GMP Certified Facility)',
    licence: 'FSSAI Lic. No. 13622999000080 / 13624999000034',
    imageColor: 'from-orange-900/20 via-orange-500/10 to-amber-500/10',
    imageUrl: '/products/gallery/fatease-5/fatease5_hero_front.jpg',
    galleryImages: [
      '/products/gallery/fatease-5/fatease5_hero_front.jpg',
      '/products/gallery/fatease-5/fatease5_hero_top.jpg',
      '/products/gallery/fatease-5/fatease5_hero_back.jpg',
      '/products/gallery/fatease-5/fatease5_hero_blister.jpg',
    ],
    dossier: {
      fileName: 'FATEASE5_Clinical_Monograph.docx',
      fileUrl: '/pdf/FATEASE5_Clinical_Monograph.docx',
      fileType: 'DOCX',
      fileSize: '38.9 KB',
      title: 'FATEASE-5 Clinical Starch Digestion Monograph',
      citation: 'FATEASE-5 Monograph: Starch digestion modulation, Phaseolus vulgaris alpha-amylase inhibition, & postprandial glucose control.',
      publication: 'Varuta Pharma Clinical Formulation Monograph',
    },
    moaSteps: [
      { step: '01', title: 'Lumen Binding', desc: 'Phaseolamin binds to pancreatic alpha-amylase in the duodenum.' },
      { step: '02', title: 'Inhibited Starch Cleavage', desc: 'Prevents complex starch breakdown into glucose monomer units.' },
      { step: '03', title: 'Gentle Colonic Passage', desc: 'Unbroken starch passes safely through the digestive tract.' },
    ],
    pharmacokinetics: {
      bioavailability: 'Intraluminal Local Action (Non-Systemic)',
      tMax: '30 Minutes Post-Ingestion',
      halfLife: 'Local GI Transit Time',
      elimination: 'Fecal Excretion of Complex Starch',
    },
    safetyProfile: {
      contraindications: 'Hypoglycemic patients on prescription insulin should monitor blood glucose levels closely.',
      adverseReactions: 'Transient mild GI gas during initial 3 days of use.',
      pregnancyCategory: 'Category B (Consult doctor before use during pregnancy).',
      storage: 'Store in a cool dry place below 25°C.',
    },
  },
  {
    id: 'telage',
    slug: 'telage',
    title: 'TELAGE',
    tagline: 'Telomere Anti-Oxidative Matrix & Cellular Vitality',
    category: 'Cellular Longevity',
    categoryId: 'cellular-longevity',
    form: 'Caplet (Strip of 10)',
    dosage: '1 BD (Twice Daily after meals)',
    price: '₹1,150.00',
    variants: [
      { size: 'Strip of 10 Caplets', price: '₹1,150.00', packText: '10-Day Longevity Pack' },
      { size: 'Box of 30 Caplets (3 Strips)', price: '₹3,100.00', packText: 'Monthly Vitality Pack' },
    ],
    badge: 'ANTI-OXIDATIVE MATRIX',
    evidenceGrade: 'Grade A Evidence',
    description:
      'Silybum marianum & Ashwagandha complexes formulated to protect cellular telomeres and neutralize mitochondrial reactive oxygen species (ROS).',
    detailsOverview:
      'TELAGE is a state-of-the-art cellular longevity matrix designed to combat intracellular oxidative aging. Formulated with standardized Silymarin, Withanolides, and L-Arginine, TELAGE activates the nuclear transcription factor Nrf2. This upregulates endogenous glutathione, superoxide dismutase (SOD), and catalase while safeguarding cellular telomeres from free radical strand damage.',
    mechanism:
      'Silymarin & Withanolides activate nuclear factor erythroid 2-related factor 2 (Nrf2), upregulating endogenous superoxide dismutase (SOD) and catalase.',
    actives: [
      { name: 'Silybum Marianum Extract', dose: '250 mg', purpose: 'Silymarin Nrf2 Antioxidant Activation', standard: 'Silymarin 80% Standard' },
      { name: 'Withania Somnifera Dunal', dose: '500 mg', purpose: 'Withanolide Adaptogenic Stress Defense', standard: 'Withanolides 5%' },
      { name: 'Astragalus Gummifer Labill', dose: '60 mg', purpose: 'Telomere Maintenance & Immunity Support', standard: 'Botanical Extract Standard' },
      { name: 'L-Arginine', dose: '50 mg', purpose: 'Vascular Endothelial Nitric Oxide Precursor', standard: 'USP Grade' },
      { name: 'L-Carnitine', dose: '50 mg', purpose: 'Mitochondrial Fatty Acid Beta-Oxidation', standard: 'USP Grade' },
      { name: 'N-Acetyl L-Cysteine', dose: '50 mg', purpose: 'Direct Glutathione (GSH) Precursor', standard: 'USP Grade' },
    ],
    indications: [
      'Mitochondrial Reactive Oxygen Species Neutralization',
      'Cellular Telomere Integrity Protection',
      'Systemic Stress & Chronic Fatigue Recovery',
      'Hepatic Glutathione Upregulation',
    ],
    clinicalBenefits: [
      { title: 'Upregulates Nrf2 Antioxidants', desc: 'Stimulates body\'s internal superoxide dismutase & glutathione synthesis.' },
      { title: 'Protects Cellular Telomeres', desc: 'Shields DNA terminal caps from oxidative strand degradation.' },
      { title: 'Reduces Fatigue & Cortisol', desc: 'Standardized Ashwagandha lowers circulating stress biomarkers.' },
      { title: 'Enhances Micro-Vascular Flow', desc: 'L-Arginine supports nitric oxide endothelial dilation.' },
    ],
    howToUse: {
      timing: 'Twice daily with breakfast and dinner.',
      instructions: 'Take 1 capsule twice daily after meals with water.',
      duration: 'Long-term cellular maintenance formulation (60-90 day routine).',
      tips: 'Pair with adequate sleep and antioxidant-rich diet for optimal longevity.',
    },
    dosageInstruction: 'Take one (1) capsule twice daily (BD) after main meals.',
    manufacturer: 'Gencleus Pharma Pvt. Ltd. (WHO-GMP Certified Facility)',
    licence: 'FSSAI Marketer Lic. No. 13624999000034',
    imageColor: 'from-teal-900/20 via-teal-500/10 to-emerald-500/10',
    imageUrl: '/products/gallery/telage/telage_hero_front.jpg',
    galleryImages: [
      '/products/gallery/telage/telage_hero_front.jpg',
      '/products/gallery/telage/telage_hero_back.jpg',
      '/products/gallery/telage/telage_hero_clinical.jpg',
      '/products/gallery/telage/telage_hero_certifications.jpg',
    ],
    dossier: {
      fileName: 'TELAGE_Clinical_Literature.pdf',
      fileUrl: '/pdf/TELAGE_Clinical_Literature.pdf',
      fileType: 'PDF',
      fileSize: '1.24 MB',
      title: 'TELAGE Telomere Length & Anti-Aging Journal Study',
      citation: 'Frontiers in Bioscience Journal Publication (Gorenjak et al. 2018): Telomere Length, Astragalus membranaceus, Cellular Longevity & Aging Biomarkers.',
      publication: 'Frontiers in Bioscience (Landmark Journal Review)',
    },
    moaSteps: [
      { step: '01', title: 'Nrf2 Nuclear Translocation', desc: 'Silymarin detaches Nrf2 from Keap1, sending it to cell nucleus.' },
      { step: '02', title: 'Endogenous Enzyme Expression', desc: 'Triggers DNA expression of SOD, catalase, and glutathione.' },
      { step: '03', title: 'Mitochondrial ROS Scavenging', desc: 'Neutralizes free radicals at the source inside cellular mitochondria.' },
    ],
    pharmacokinetics: {
      bioavailability: '90% (Standardized Flavonolignans)',
      tMax: '2.0 Hours',
      halfLife: '7.5 Hours',
      elimination: 'Hepatic Glucuronidation & Biliary Clearance',
    },
    safetyProfile: {
      contraindications: 'Hypersensitivity to Asteraceae plant family.',
      adverseReactions: 'Well tolerated. No major adverse events noted in clinical trials.',
      pregnancyCategory: 'Category B (Consult doctor before use during pregnancy).',
      storage: 'Store below 25°C away from heat and direct sunlight.',
    },
  },
  {
    id: 'erecter',
    slug: 'erecter',
    title: 'ERECTER',
    tagline: 'Androgen Receptor Sensitivity & Vascular NO Synthase',
    category: "Men's Health",
    categoryId: 'mens-health',
    form: 'Tablet (3 x 10\'s Tablets)',
    dosage: '1 BD (Twice Daily after meals)',
    price: '₹980.00',
    variants: [
      { size: 'Strip of 10 Tablets', price: '₹980.00', packText: 'Standard Vitality Strip' },
      { size: 'Box of 30 Tablets (3 Strips)', price: '₹2,680.00', packText: '3-Strip Box Pack' },
    ],
    badge: 'VITALITY COMPLEX',
    evidenceGrade: 'Grade B+ Evidence',
    description:
      'High-purity Protodioscin & Withanolide extracts tailored for male stamina, vascular nitric oxide production, and androgen receptor sensitivity.',
    detailsOverview:
      'ERECTER is a specialized men\'s health formulation engineered to support vascular endothelial nitric oxide synthase (eNOS) activity and androgen receptor signaling. Formulated with Withania somnifera (500 mg) and Fenugreek Extract standardized to 20% Protodioscin (500 mg), ERECTER enhances micro-vascular blood flow, physical endurance, and neural vigor.',
    mechanism:
      'Protodioscin saponins from Fenugreek & Withanolides stimulate endothelial nitric oxide synthase (eNOS), boosting cGMP accumulation and micro-vascular perfusion.',
    actives: [
      { name: 'Withania somnifera Extract', dose: '500 mg', purpose: 'Withanolide Adaptogenic Neuro-Vigor', standard: 'Standardized Withanolides' },
      { name: 'Fenugreek Extract (20% Protodioscin)', dose: '500 mg', purpose: 'Protodioscin eNOS Nitric Oxide Stimulant', standard: '20% Protodioscin Standard' },
    ],
    indications: [
      'Male Endocrine Homeostasis & Stamina',
      'Vascular Micro-Perfusion Support',
      'Dopaminergic & Androgen Receptor Sensitivity',
      'Physical Muscle Vitality & Recovery',
    ],
    clinicalBenefits: [
      { title: 'Boosts Nitric Oxide (eNOS)', desc: 'Standardized 20% Protodioscin promotes vascular dilation and micro-perfusion.' },
      { title: 'Restores Neuro-Adaptogenic Vigor', desc: '500 mg Withania somnifera supports neuro-transmitter balance and motivation.' },
      { title: 'Supports Muscle Stamina', desc: 'Enhances cellular ATP turnover during physical exertion.' },
      { title: 'Non-Hormonal & Safe', desc: 'Works via natural enzyme pathways without exogenous synthetic hormones.' },
    ],
    howToUse: {
      timing: 'Twice daily after meals.',
      instructions: 'Take 1 tablet after breakfast and 1 tablet after dinner with water.',
      duration: 'Recommended minimum 30-60 day administration.',
      tips: 'Maintain active physical exercise for synergistic vascular response.',
    },
    dosageInstruction: 'Take one (1) tablet twice daily (BD) after main meals.',
    manufacturer: 'Gencleus Pharma Pvt. Ltd. (WHO-GMP Certified Facility)',
    licence: 'FSSAI Lic. No. 13622999000080 / 13624999000034',
    imageColor: 'from-sky-900/20 via-blue-500/10 to-cyan-500/10',
    imageUrl: '/products/erecter.jpg',
    galleryImages: [
      '/products/erecter.jpg',
      '/products/gallery/erecter/erecter_hero_front.jpg',
      '/products/gallery/erecter/erecter_hero_back_split.jpg',
      '/products/gallery/erecter/erecter_hero_certifications.jpg',
      '/products/gallery/erecter/erecter_hero_blister_split.jpg',
      '/products/gallery/erecter/erecter_hero_blister_foil.jpg',
    ],
    moaSteps: [
      { step: '01', title: 'Endothelial eNOS Activation', desc: 'Protodioscin stimulates nitric oxide synthase in vascular walls.' },
      { step: '02', title: 'cGMP Elevation', desc: 'Increased NO raises cGMP to relax micro-vascular smooth muscle.' },
      { step: '03', title: 'Dopaminergic Signaling', desc: 'L-DOPA crosses blood-brain barrier to support neural drive.' },
    ],
    pharmacokinetics: {
      bioavailability: '86% Saponin Absorption',
      tMax: '2.5 Hours',
      halfLife: '5.8 Hours',
      elimination: 'Renal & Biliary Excretion',
    },
    safetyProfile: {
      contraindications: 'Patients with severe uncontrolled cardiovascular disease should consult their cardiologist.',
      adverseReactions: 'Well tolerated under prescribed dosages.',
      pregnancyCategory: 'Formulated for Adult Male Use Only.',
      storage: 'Store below 25°C away from direct sunlight.',
    },
  },
  {
    id: 'cystorin',
    slug: 'cystorin',
    title: 'CYSTORIN',
    tagline: 'Follicular Inositol Ratio & Ovulatory Bioenergetics',
    category: "Women's Health & Fertility",
    categoryId: 'womens-health',
    form: 'Sachet (Box of 10 Sachets)',
    dosage: '1 Sachet dissolved in water daily',
    price: '₹1,350.00',
    variants: [
      { size: 'Box of 10 Sachets', price: '₹1,350.00', packText: '10-Day Intensive Sachet Box' },
      { size: 'Box of 30 Sachets (3x10)', price: '₹3,750.00', packText: '30-Day Ovulatory Cycle Pack' },
    ],
    badge: 'REPRODUCTIVE MATRIX',
    evidenceGrade: 'Grade A Evidence',
    description:
      'Specialized 40:1 Myo-Inositol to D-Chiro Inositol ratio formula designed for ovulatory biological bioenergetics and metabolic insulin receptor sensitivity.',
    detailsOverview:
      'CYSTORIN is an evidence-backed ovulatory bioenergetics formula delivering the clinically validated 40:1 physiological ratio of Myo-Inositol (1000 mg) to D-Chiro Inositol (25 mg). Enriched with L-Methylfolate Calcium (200 mcg), CYSTORIN acts as a intracellular second messenger for Follicle Stimulating Hormone (FSH) and insulin signaling, restoring intra-follicular glucose uptake and oocyte maturation in women with PCOS or ovulatory irregularity.',
    mechanism:
      'Inositol isomers function as second messengers for FSH and insulin signaling, restoring intra-follicular glucose uptake and oocyte maturation.',
    actives: [
      { name: 'Myo-Inositol', dose: '1000 mg', purpose: 'FSH Intra-Follicular Second Messenger', standard: 'USP Standard 99% Pure' },
      { name: 'D-Chiro Inositol', dose: '25 mg', purpose: 'Hepatic Insulin Glycogen Synthesis Signaling', standard: 'Physiological 40:1 Ratio' },
      { name: 'L-Methylfolate Calcium', dose: '200 mcg', purpose: 'Bioactive Homocysteine Methylation', standard: 'Active Folate Standard' },
    ],
    indications: [
      'Polycystic Ovary Endocrine Support (PCOS)',
      'Ovulatory Cycle Synchronization',
      'Oocyte Quality & Follicular Maturation',
      'Peripheral Insulin Receptor Sensitivity',
    ],
    clinicalBenefits: [
      { title: 'Clinically Proven 40:1 Ratio', desc: 'Matches human follicular fluid inositol isomer proportions.' },
      { title: 'Restores Regular Ovulation', desc: 'Promotes timely follicular maturation and menstrual cycle regularity.' },
      { title: 'Enhances Insulin Sensitivity', desc: 'Improves peripheral glucose clearance and lowers hyperinsulinemia.' },
      { title: 'Active Methylated Folate', desc: 'L-Methylfolate bypasses MTHFR gene polymorphism for maximum utilization.' },
    ],
    howToUse: {
      timing: 'Once daily in the morning after breakfast.',
      instructions: 'Dissolve contents of 1 sachet in a glass of water (150 ml). Stir well and drink immediately.',
      duration: 'Recommended minimum duration of 3 to 6 menstrual cycles.',
      tips: 'Can be taken alongside mealtime protein for stable glucose metabolism.',
    },
    dosageInstruction: 'Dissolve one (1) sachet daily in 150 ml of water, or as prescribed by a gynaecologist.',
    manufacturer: 'Gencleus Pharma Pvt. Ltd. (WHO-GMP Certified Facility)',
    licence: 'FSSAI Marketer Lic. No. 13624999000034',
    imageColor: 'from-emerald-900/20 via-[#0b835c]/10 to-teal-500/10',
    imageUrl: '/products/gallery/cystorin/cystorin_hero_front.jpg',
    galleryImages: [
      '/products/gallery/cystorin/cystorin_hero_front.jpg',
      '/products/gallery/cystorin/cystorin_hero_back.jpg',
      '/products/gallery/cystorin/cystorin_hero_top.jpg',
      '/products/gallery/cystorin/cystorin_hero_side.jpg',
    ],
    dossier: {
      fileName: 'CYSTORIN_Clinical_Literature.pdf',
      fileUrl: '/pdf/CYSTORIN_Clinical_Literature.pdf',
      fileType: 'PDF',
      fileSize: '1.15 MB',
      title: 'CYSTORIN Ovulation Patent Dossier & Clinical Study',
      citation: 'Lim et al. Patent Application (US 2017/0150949 A1): Device & Method for Detecting Ovulation using Saliva Crystallization Patterns.',
      publication: 'US Patent Application & Bio-Nutraceutical Assay Review',
    },
    moaSteps: [
      { step: '01', title: 'Second Messenger Signaling', desc: 'Myo-Inositol activates intracellular FSH signaling in granulosa cells.' },
      { step: '02', title: 'Glycogen Synthesis', desc: 'D-Chiro Inositol upregulates pyruvate dehydrogenase to clear glucose.' },
      { step: '03', title: 'Follicular Maturation', desc: 'Restores oocyte ATP bioenergetics for healthy ovulation.' },
    ],
    pharmacokinetics: {
      bioavailability: '98% Rapid Water-Soluble Absorption',
      tMax: '45 Minutes',
      halfLife: '4.2 Hours',
      elimination: 'Renal Clearance & Metabolic Recycling',
    },
    safetyProfile: {
      contraindications: 'Known hypersensitivity to inositol compounds.',
      adverseReactions: 'Well tolerated. Extremely low incidence of mild digestive loosening at higher doses.',
      pregnancyCategory: 'Category A (Safe for periconceptional and early pregnancy support).',
      storage: 'Store sachet in a cool, dry place below 25°C away from moisture.',
    },
  },
  {
    id: 'fertiscope',
    slug: 'fertiscope',
    title: 'FERTISCOPE*',
    tagline: 'The Scope that Scopes the Fact for Fertility (Saliva Ovulation Test Kit)',
    category: "Women's Health & Fertility",
    categoryId: 'womens-health',
    form: 'Mini Microscope Reusable Kit',
    dosage: 'Daily Testing Recommended (Non-Invasive Saliva Test)',
    price: '₹416.00',
    variants: [
      { size: 'Single Reusable Kit', price: '₹416.00', packText: '3-Year Reusable Device in Protective Case' },
    ],
    badge: 'DIAGNOSTIC SCOPE',
    evidenceGrade: '98% Accuracy Grade',
    isDevice: true,
    description:
      'FERTISCOPE is a mini microscope for easily predicting ovulation by means of saliva. Estrogen surges during ovulation increase salivary mineral salt crystallization into distinct ferning patterns.',
    detailsOverview:
      'FERTISCOPE is a reusable mini microscope device designed for non-invasive, daily ovulation prediction via saliva crystallization analysis. During ovulation, a marked increase of estrogen allows the ovum to be released from the ovary. As estrogen levels surge in blood, urine, and saliva, mineral salts in the saliva crystallize into distinct ferning patterns viewable under the FERTISCOPE optical lens. Lasting up to 3 years with 98% accuracy, it offers a natural, clean, discrete, and cost-effective fertility diagnostic solution.',
    mechanism:
      'Estrogen surges during the fertile window elevate salivary mineral salt concentrations, forming viewable fern-like crystal patterns upon drying under the optical magnification lens.',
    actives: [
      { name: 'Optical Magnification Scope', dose: 'Precision Lens System', purpose: 'Microscopic Salivary Ferning Viewport', standard: '3-Year Reusable Lifespan' },
      { name: 'Saliva Sample Collector Slide', dose: 'Integrated Glass Slide', purpose: 'Salivary Mineral Salt Crystallization', standard: 'Clean & Hygienic Surface' },
      { name: 'Estrogen-Salinity Sensitivity', dose: '98% Accuracy', purpose: 'Detects Salivary Estrogen Surge Window', standard: 'Clinical Accuracy Standard' },
    ],
    indications: [
      'Non-Invasive Ovulation & Fertility Prediction',
      'Daily Menstrual Cycle Synchronization',
      'Estrogen Surge & Salivary Ferning Observation',
      'Discrete & Reusable Home Diagnostic',
    ],
    clinicalBenefits: [
      { title: '98% Clinical Accuracy', desc: 'High-reliability ovulation detection based on estrogen-induced salivary crystallization.' },
      { title: '3-Year Reusable Lifespan', desc: 'Reusable for any number of tests over 3 years; significantly cheaper than disposable urine strips.' },
      { title: '100% Natural & Non-Invasive', desc: 'Zero side effects, no chemicals, and no religious or ethical conflicts.' },
      { title: 'Mobile Phone Photography', desc: 'Users can photograph ferning patterns through their phone camera for personal reference.' },
    ],
    howToUse: {
      timing: 'Daily testing in the morning prior to eating, drinking, or smoking.',
      instructions: 'Apply a small saliva sample to the lens, allow to dry completely for 5-10 minutes, and observe ferning patterns through the scope.',
      duration: 'Daily testing across menstrual cycles for up to 3 years.',
      tips: 'Avoid eating, drinking, alcohol consumption, or smoking for 2 hours prior to saliva collection for clear ferning pattern results.',
    },
    dosageInstruction: 'Use daily as a diagnostic mini microscope. Avoid eating, drinking, or smoking 2 hours before sample collection.',
    manufacturer: 'GENCLEUS Pharma Pvt. Ltd. (Kukatpally, Hyderabad)',
    licence: 'Marketed by Varuta Pharma Pvt. Ltd. (Pune / Hyderabad)',
    imageColor: 'from-[#0b835c]/20 via-emerald-500/10 to-teal-500/10',
    imageUrl: '/products/gallery/fertiscope/fertiscope_hero_front.png',
    galleryImages: [
      '/products/gallery/fertiscope/fertiscope_hero_front.png',
      '/products/gallery/fertiscope/fertiscope_hero_guide.png',
      '/products/gallery/fertiscope/fertiscope_hero_kit.png',
      '/products/gallery/fertiscope/fertiscope_hero_back.png',
      '/products/gallery/fertiscope/fertiscope_leaflet.png',
    ],
    dossier: {
      fileName: 'FERTISCOPE_Clinical_Literature.pdf',
      fileUrl: '/pdf/FERTISCOPE_Clinical_Literature.pdf',
      fileType: 'PDF',
      fileSize: '1.15 MB',
      title: 'FERTISCOPE Saliva Crystallization Ovulation Patent Dossier',
      citation: 'Lim et al. Patent Application (US 2017/0150949 A1): Device & Method for Detecting Ovulation using Saliva Crystallization Patterns.',
      publication: 'US Patent Application & Clinical Diagnostic Dossier',
    },
    moaSteps: [
      { step: '01', title: 'Saliva Collection', desc: 'Collect fresh saliva sample avoiding food or drink for 2 hours prior.' },
      { step: '02', title: 'Air Drying', desc: 'Allow saliva to air dry completely on the optical sample slide.' },
      { step: '03', title: 'Ferning Inspection', desc: 'Observe crystal ferning patterns to determine non-fertile, transitional, or fertile ovulation window.' },
    ],
    pharmacokinetics: {
      bioavailability: 'Non-Invasive Optical Diagnostic',
      tMax: 'Instant Visual Result',
      halfLife: '3-Year Reusable Device',
      elimination: 'Zero Systemic Ingestion',
    },
    safetyProfile: {
      contraindications: 'For external diagnostic use only. Do not ingest sample plate.',
      adverseReactions: 'Zero side effects. Completely safe and hygienic.',
      pregnancyCategory: 'Non-Invasive Diagnostic Tool (Safe for all users).',
      storage: 'Keep in a cool, dark, and dry place. Keep out of reach of children.',
    },
  },
];
