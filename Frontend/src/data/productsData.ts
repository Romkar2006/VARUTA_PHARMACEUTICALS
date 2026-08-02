export interface ProductActive {
  name: string;
  dose: string;
  purpose: string;
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
  badge: string;
  evidenceGrade: string;
  description: string;
  mechanism: string;
  actives: ProductActive[];
  indications: string[];
  manufacturer: string;
  licence: string;
  imageColor: string;
}

export const PRODUCTS_CATALOG: ProductSKU[] = [
  {
    id: 'guanolact',
    slug: 'guanolact',
    title: 'GUANOLACT',
    tagline: 'Bio-available Hemoglobin & Mucosal Defense',
    category: 'Iron Deficiency & Immunity',
    categoryId: 'iron-immunity',
    form: 'Tablet (Strip of 10)',
    dosage: '1 BD (Twice Daily after meals)',
    badge: 'LEAD FLAGSHIP SKU',
    evidenceGrade: 'Grade A Evidence',
    description:
      'Engineered with bioactive lactoferrin and disodium guanosine to optimize mucosal iron transport and ferritin synthesis without gastrointestinal distress.',
    mechanism:
      'Lactoferrin binds free ferric iron to prevent bacterial uptake, while disodium guanosine enhances mucosal transferrin receptor upregulation and ferroportin translocation.',
    actives: [
      { name: 'Lactoferrin', dose: '50 mg', purpose: 'Mucosal Iron Transport & Antimicrobial Glycoprotein' },
      { name: 'Disodium Guanosine 5-MP', dose: '5 mg', purpose: 'Nucleotide Transferrin Upregulation' },
      { name: 'Ferrous Bisglycinate', dose: '60 mg', purpose: '30 mg Elemental Bioavailable Iron Chelate' },
    ],
    indications: [
      'Iron Deficiency Anemia (IDA)',
      'Impaired Gastrointestinal Iron Absorption',
      'Post-Surgical Hemoglobin Recovery',
      'Immune Defense Maintenance',
    ],
    manufacturer: 'Gencleus Pharma Pvt. Ltd. (WHO-GMP Certified Facility)',
    licence: 'FSSAI Marketer Lic. No. 13624999000034',
    imageColor: 'from-[#071311] via-[#0b835c] to-[#044e36]',
  },
  {
    id: 'estroclen',
    slug: 'estroclen',
    title: 'ESTROCLEN',
    tagline: 'Oestrogen Metabolite Ratio & Endocrine Homeostasis',
    category: "Women's Health",
    categoryId: 'womens-health',
    form: 'Caplet (Strip of 10)',
    dosage: '1 BD (Twice Daily after meals)',
    badge: 'HERO FORMULATION',
    evidenceGrade: 'Grade A Evidence',
    description:
      'First-in-class doctor-channel formulation targeting 2-OHE1/16α-OHE1 oestrogen metabolite ratios and endometrial wellness.',
    mechanism:
      'Standardized Ocimum sanctum & Vitex agnus-castus modulate hepatic CYP1A1 phase-II hydroxylation, favoring protective 2-hydroxyestrone metabolites.',
    actives: [
      { name: 'Ocimum sanctum Extract', dose: '420 mg', purpose: 'Hepatic CYP1A1 Oestrogen Modulation' },
      { name: 'Vitex agnus-castus Extract', dose: '100 mg', purpose: 'Corpus Luteum Progesterone Support' },
      { name: 'Resveratrol (Vitis vinifera)', dose: '5 mg', purpose: 'Polyphenolic Anti-Oxidative Defense' },
      { name: 'Brassica juncea Extract', dose: '100 mg', purpose: 'Indole-3-Carbinol Glucosinolate Matrix' },
    ],
    indications: [
      'Estrogen Dominance Metabolite Imbalance',
      'Cyclic Mastalgia & Premenstrual Tension',
      'Ovarian Endocrine Homeostasis',
      'Uterine Tissue Anti-Oxidative Support',
    ],
    manufacturer: 'Gencleus Pharma Pvt. Ltd. (WHO-GMP Certified Facility)',
    licence: 'FSSAI Marketer Lic. No. 13624999000034',
    imageColor: 'from-amber-900/30 via-[#78350f]/20 to-amber-500/10',
  },
  {
    id: 'quicknap',
    slug: 'quicknap',
    title: 'QUICKNAP',
    tagline: 'Circadian Synchronization & Sublingual Fast Release',
    category: 'Sleep & Recovery',
    categoryId: 'sleep-recovery',
    form: 'Oral Disintegrating Film (Pack of 30 Films)',
    dosage: '1 Film sublingually 20 minutes before bedtime',
    badge: 'FAST RELEASE MATRIX',
    evidenceGrade: 'Grade B+ Evidence',
    description:
      'Rapid sublingual dissolution oral disintegrating film (ODF) engineered for immediate circadian synchronization and deep REM sleep recovery.',
    mechanism:
      'Sublingual mucosal absorption bypasses hepatic first-pass metabolism, delivering micro-dosed melatonin directly to suprachiasmatic nucleus MT1/MT2 receptors.',
    actives: [
      { name: 'Melatonin (ODF Sublingual)', dose: '5 mg', purpose: 'Pineal MT1/MT2 Receptor Activation' },
      { name: 'Valeriana wallichii Extract', dose: '25 mg', purpose: 'GABA-A Allosteric Neuro-Relaxation' },
      { name: 'Matricaria recutita Extract', dose: '5 mg', purpose: 'Apigenin Anxiolytic Binding' },
      { name: 'Vitamin B6 (Pyridoxine)', dose: '5 mg', purpose: 'Serotonin-to-Melatonin Enzymatic Cofactor' },
    ],
    indications: [
      'Delayed Sleep Phase Syndrome (DSPS)',
      'Jet Lag & Shift-Work Sleep Disorder',
      'Sublingual Sleep Onset Latency Reduction',
      'Non-Habit-Forming Nocturnal Rest',
    ],
    manufacturer: 'Peptas Pharma Pvt. Ltd. (WHO-GMP Certified Facility)',
    licence: 'FSSAI Marketer Lic. No. 13624999000034',
    imageColor: 'from-[#1e1b4b] via-[#0b835c] to-[#0f172a]',
  },
  {
    id: 'fatease-5',
    slug: 'fatease-5',
    title: 'FATEASE-5',
    tagline: 'Starch Digestion Modulation & Postprandial Glucose Control',
    category: 'Weight Management',
    categoryId: 'weight-management',
    form: 'Capsule (Strip of 10)',
    dosage: '1 Capsule 15 minutes before carb-rich meals',
    badge: 'METABOLIC MODULATOR',
    evidenceGrade: 'Grade B Evidence',
    description:
      'Phaseolus vulgaris & spirulina extract blend designed to modulate pancreatic alpha-amylase starch digestion and support healthy metabolic glucose control.',
    mechanism:
      'Phaseolamin competitively inhibits pancreatic alpha-amylase, reducing complex carbohydrate breakdown into absorbable monosaccharides.',
    actives: [
      { name: 'Phaseolus vulgaris Extract', dose: '500 mg', purpose: 'Alpha-Amylase Starch Blocker' },
      { name: 'Spirulina platensis Extract', dose: '100 mg', purpose: 'Metabolic Phytonutrient & Antioxidant' },
    ],
    indications: [
      'Postprandial Glycemic Excursion Control',
      'Carbohydrate Digestion Rate Modulation',
      'Metabolic Weight Management Support',
      'Caloric Efficiency Balancing',
    ],
    manufacturer: 'Peptas Pharma Pvt. Ltd. (WHO-GMP Certified Facility)',
    licence: 'FSSAI Marketer Lic. No. 13624999000034',
    imageColor: 'from-orange-900/20 via-orange-500/10 to-amber-500/10',
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
    badge: 'ANTI-OXIDATIVE MATRIX',
    evidenceGrade: 'Grade A Evidence',
    description:
      'Silybum marianum & Ashwagandha complexes formulated to protect cellular telomeres and neutralize mitochondrial reactive oxygen species (ROS).',
    mechanism:
      'Silymarin & Withanolides activate nuclear factor erythroid 2-related factor 2 (Nrf2), upregulating endogenous superoxide dismutase (SOD) and catalase.',
    actives: [
      { name: 'Silybum marianum Extract', dose: '250 mg', purpose: 'Silymarin Nrf2 Antioxidant Activation' },
      { name: 'Withania somnifera Extract', dose: '500 mg', purpose: 'Withanolide Adaptogenic Stress Defense' },
      { name: 'L-Arginine', dose: '50 mg', purpose: 'Vascular Endothelial Nitric Oxide Precursor' },
    ],
    indications: [
      'Mitochondrial Reactive Oxygen Species Neutralization',
      'Cellular Telomere Integrity Protection',
      'Systemic Stress & Fatigue Recovery',
      'Hepatic Glutathione Upregulation',
    ],
    manufacturer: 'Gencleus Pharma Pvt. Ltd. (WHO-GMP Certified Facility)',
    licence: 'FSSAI Marketer Lic. No. 13624999000034',
    imageColor: 'from-teal-900/20 via-teal-500/10 to-emerald-500/10',
  },
  {
    id: 'erecter',
    slug: 'erecter',
    title: 'ERECTER',
    tagline: 'Androgen Receptor Sensitivity & Vascular NO Synthase',
    category: "Men's Health",
    categoryId: 'mens-health',
    form: 'Tablet (Strip of 10)',
    dosage: '1 BD (Twice Daily after meals)',
    badge: 'VITALITY COMPLEX',
    evidenceGrade: 'Grade B+ Evidence',
    description:
      'High-purity Protodioscin & Withanolide extracts tailored for male stamina, vascular nitric oxide production, and androgen receptor sensitivity.',
    mechanism:
      'Protodioscin saponins stimulate endothelial nitric oxide synthase (eNOS), boosting cGMP accumulation and micro-vascular perfusion.',
    actives: [
      { name: 'Tribulus terrestris (45% Saponins)', dose: '450 mg', purpose: 'Protodioscin eNOS Nitric Oxide Stimulant' },
      { name: 'Mucuna pruriens Extract', dose: '100 mg', purpose: 'L-DOPA Dopaminergic Neurotransmitter Precursor' },
    ],
    indications: [
      'Male Endocrine Homeostasis & Stamina',
      'Vascular Micro-Perfusion Support',
      'Dopaminergic & Androgen Receptor Sensitivity',
      'Physical Muscle Vitality Recovery',
    ],
    manufacturer: 'Peptas Pharma Pvt. Ltd. (WHO-GMP Certified Facility)',
    licence: 'FSSAI Marketer Lic. No. 13624999000034',
    imageColor: 'from-sky-900/20 via-blue-500/10 to-cyan-500/10',
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
    badge: 'REPRODUCTIVE MATRIX',
    evidenceGrade: 'Grade A Evidence',
    description:
      'Specialized 40:1 Myo-Inositol to D-Chiro Inositol ratio formula designed for ovulatory biological bioenergetics and metabolic insulin receptor sensitivity.',
    mechanism:
      'Inositol isomers function as second messengers for FSH and insulin signaling, restoring intra-follicular glucose uptake and oocyte maturation.',
    actives: [
      { name: 'Myo-Inositol', dose: '1000 mg', purpose: 'FSH Intra-Follicular Second Messenger' },
      { name: 'D-Chiro Inositol', dose: '25 mg', purpose: 'Hepatic Insulin Glycogen Synthesis Signaling' },
      { name: 'L-Methylfolate Calcium', dose: '200 mcg', purpose: 'Bioactive Homocysteine Methylation' },
    ],
    indications: [
      'Polycystic Ovary Endocrine Support (PCOS)',
      'Ovulatory Cycle Synchronization',
      'Oocyte Quality & Follicular Maturation',
      'Peripheral Insulin Receptor Sensitivity',
    ],
    manufacturer: 'Gencleus Pharma Pvt. Ltd. (WHO-GMP Certified Facility)',
    licence: 'FSSAI Marketer Lic. No. 13624999000034',
    imageColor: 'from-emerald-900/20 via-[#0b835c]/10 to-teal-500/10',
  },
];
