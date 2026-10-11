export type RevisionSheet = {
  id: string; title: string; subject: string; exams: string[]; kind: string;
  summary: string; reference: string;
  sections: { title: string; lines: string[] }[];
  practice: { question: string; answer: string; steps: string[] };
};

export const NEET_2026 = { durationMinutes: 180, questions: 180, correctMarks: 4, incorrectMarks: -1, unansweredMarks: 0 };
export const JEE_ADVANCED_2026 = { papers: 2, durationMinutesPerPaper: 180, bothCompulsory: true, marking: "paper-specific" };

export const REFERENCES = [
  { title: "NEET UG 2026 information bulletin", publisher: "NTA · Official · 2026", url: "https://cdnbbsr.s3waas.gov.in/s37bc1ec1d9c3426357e69acd5bf320061/uploads/2026/02/202602081576322299.pdf", note: "Examination scheme: Chapter 4. 180 compulsory questions, 180 minutes, 720 marks; +4 correct, −1 incorrect, 0 unanswered." },
  { title: "NEET UG 2026 syllabus", publisher: "NTA / NMC · Official · 2026", url: "https://www.nta.ac.in/Download/Notice/Notice_20260108180635.pdf", note: "Official syllabus notice and subject coverage." },
  { title: "JEE Advanced 2026 information brochure", publisher: "IIT Roorkee · Official · 2026", url: "https://jeeadv.ac.in/documents/IBEnglish_2026.pdf", note: "Sections 9 and 17: two compulsory three-hour papers. Negative marks may apply; exact marking is given in each question paper's instructions." },
  { title: "JEE Advanced official archive", publisher: "JEE Advanced · Official", url: "https://jeeadv.ac.in/archive.html", note: "Original question papers and answer keys. Refer to each paper and section for its own marking scheme." },
  { title: "JEE Main 2026 information bulletin", publisher: "NTA · Official · 2026", url: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311145384616.pdf", note: "Official examination patterns, instructions and eligibility." },
  { title: "JEE Main 2026 syllabus", publisher: "NTA · Official · 2026", url: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf", note: "Subject-by-subject official syllabus." },
  { title: "NCERT Class XI & XII textbooks", publisher: "NCERT · Official", url: "https://ncert.nic.in/textbook.php", note: "Select class, subject and book for official Physics, Chemistry, Mathematics and Biology chapters." },
  { title: "Physics Wallah NEET study material", publisher: "Physics Wallah · Supplementary", url: "https://www.pw.live/neet/exams/neet-study-material", note: "Public coaching resources, not an official syllabus or exam authority. Access conditions may vary." },
];

export const REVISION_SHEETS: RevisionSheet[] = [
  {
    id: "physics-mechanics", title: "Physics essentials: mechanics", subject: "Physics", exams: ["NEET UG", "JEE Main", "JEE Advanced"], kind: "Formula sheet", summary: "Motion, forces, energy, rotation and gravitation.", reference: "NCERT XI Physics: Motion, Laws of Motion, Work and Energy, Rotation, Gravitation.",
    sections: [
      { title: "Motion & forces", lines: ["v = u + at; s = ut + ½at²; v² = u² + 2as (constant acceleration only).", "Projectile: T = 2u sinθ/g; R = u² sin(2θ)/g; H = u² sin²θ/(2g), for launch and landing at equal height without air resistance.", "ΣF = ma; static friction fₛ ≤ μₛN; sliding friction fₖ = μₖN.", "Centripetal acceleration a = v²/r; net radial force = mv²/r."] },
      { title: "Energy & rotation", lines: ["W = F·s = Fs cosθ for constant force; K = ½mv²; work by net force = ΔK.", "Spring energy = ½kx²; near-Earth potential energy change = mgΔh.", "Torque τ = r × F; fixed-axis rotation τ = Iα; Kᵣ = ½Iω².", "Rolling without slipping: v = ωR; total K = ½mv² + ½Iω²."] },
      { title: "Gravitation & checks", lines: ["F = GMm/r²; gravitational potential energy U = −GMm/r (zero at infinity).", "Circular orbital speed = √(GM/r); escape speed = √(2GM/R).", "Use SI units. Centripetal force is the net inward force, not an extra force.", "Conserve momentum only when the net external impulse is zero."] },
    ],
    practice: { question: "An object starts from rest with constant acceleration 2 m/s² for 5 s. Find its speed and displacement.", answer: "10 m/s; 25 m", steps: ["u = 0, a = 2 m/s², t = 5 s.", "v = u + at = 0 + 2 × 5 = 10 m/s.", "s = ut + ½at² = 0 + ½ × 2 × 25 = 25 m."] },
  },
  {
    id: "physics-electricity", title: "Physics essentials: electricity & optics", subject: "Physics", exams: ["NEET UG", "JEE Main", "JEE Advanced"], kind: "Formula sheet", summary: "Fields, circuits, magnetism, lenses and modern physics.", reference: "NCERT XII Physics: Electrostatics, Current Electricity, Magnetism, Optics, Dual Nature, Atoms and Nuclei.",
    sections: [
      { title: "Electrostatics & circuits", lines: ["k = 1/(4πε₀); force magnitude F = k|q₁q₂|/r²; point-charge potential V = kq/r.", "C = Q/V; parallel-plate C = εA/d (neglect fringing); capacitor energy = ½CV².", "V = IR for an ohmic conductor; R = ρL/A; P = VI = I²R = V²/R.", "Series: R = ΣRᵢ; parallel: 1/R = Σ(1/Rᵢ). Capacitors combine by the opposite rules."] },
      { title: "Magnetism & induction", lines: ["Magnetic force magnitude on a charge = |q|vB sinθ; on a straight wire = BIL sinθ.", "Circular motion perpendicular to B: r = mv/(|q|B).", "Magnetic flux Φ = BA cosθ for a uniform field and flat surface; induced emf = −N dΦ/dt.", "The minus sign is Lenz's law: induction opposes the change in flux."] },
      { title: "Optics & modern physics", lines: ["Thin lens: 1/f = 1/v − 1/u; magnification m = v/u (Cartesian sign convention).", "Spherical mirror: 1/f = 1/v + 1/u; magnification m = −v/u.", "Young's double slit: fringe width β = λD/d (D ≫ d; small angles).", "Photon E = hν = hc/λ; photoelectric Kₘₐₓ = hν − φ; de Broglie λ = h/p.", "Radioactive decay N = N₀e^(−λt); half-life = ln(2)/λ. Here λ is the decay constant, not wavelength."] },
    ],
    practice: { question: "A 6 Ω resistor and a 3 Ω resistor are connected in parallel across an ideal 12 V source. Find the total current.", answer: "6 A", steps: ["1/R = 1/6 + 1/3 = 1/2, so R = 2 Ω.", "I = V/R = 12/2 = 6 A.", "Check the branches: 12/6 + 12/3 = 2 + 4 = 6 A."] },
  },
  {
    id: "maths-formulas", title: "Mathematics formula handbook", subject: "Mathematics", exams: ["JEE Main", "JEE Advanced"], kind: "Formula sheet", summary: "Algebra, trigonometry, calculus, vectors and probability.", reference: "NCERT XI & XII Mathematics: Algebra, Trigonometry, Calculus, Vectors and Probability; check the selected JEE syllabus.",
    sections: [
      { title: "Algebra & trigonometry", lines: ["Quadratic roots: x = [−b ± √(b² − 4ac)]/(2a), a ≠ 0; sum = −b/a, product = c/a.", "Arithmetic progression: aₙ = a + (n−1)d; Sₙ = n[2a + (n−1)d]/2.", "Geometric sum: Sₙ = a(1−rⁿ)/(1−r), r ≠ 1; infinite sum = a/(1−r), |r| < 1.", "sin²x + cos²x = 1; sin(2x) = 2sinx cosx; cos(2x) = cos²x − sin²x."] },
      { title: "Calculus", lines: ["d(xⁿ)/dx = nxⁿ⁻¹; d(eˣ)/dx = eˣ; d(ln x)/dx = 1/x for x > 0.", "d(sin x)/dx = cos x; d(cos x)/dx = −sin x (angles in radians).", "Product: (uv)′ = u′v + uv′; quotient: (u/v)′ = (u′v − uv′)/v²; chain: [f(g(x))]′ = f′(g(x))g′(x).", "∫xⁿ dx = xⁿ⁺¹/(n+1) + C for n ≠ −1; ∫(1/x) dx = ln|x| + C.", "∫u dv = uv − ∫v du; ∫ₐᵇf(x) dx = F(b) − F(a), where F′ = f."] },
      { title: "Vectors & probability", lines: ["a·b = |a||b|cosθ; |a × b| = |a||b|sinθ.", "P(A ∪ B) = P(A) + P(B) − P(A ∩ B).", "P(A|B) = P(A ∩ B)/P(B), P(B) > 0; independence means P(A ∩ B) = P(A)P(B).", "Binomial: P(X = k) = ⁿCₖ pᵏ(1−p)ⁿ⁻ᵏ for n independent trials with constant success probability p."] },
    ],
    practice: { question: "Evaluate ∫₀² 3x² dx.", answer: "8", steps: ["An antiderivative of 3x² is x³.", "Apply the limits: [x³]₀² = 2³ − 0³ = 8."] },
  },
  {
    id: "chemistry-handbook", title: "Chemistry quick-revision handbook", subject: "Chemistry", exams: ["NEET UG", "JEE Main", "JEE Advanced"], kind: "Cheat sheet", summary: "Moles, equilibrium, electrochemistry and reaction checks.", reference: "NCERT XI & XII Chemistry: Basic Concepts, Equilibrium, Solutions, Electrochemistry and Organic Chemistry.",
    sections: [
      { title: "Physical chemistry", lines: ["Amount n = mass/molar mass; particles = nNₐ; molarity = moles of solute/litres of solution.", "Ideal gas: PV = nRT; match pressure and volume units to the chosen R.", "pH = −log₁₀[H⁺] using mol/L in the dilute-solution approximation; pH + pOH = 14 at 25 °C for dilute aqueous solutions.", "ΔG = ΔH − TΔS; spontaneous at constant T and P when ΔG < 0.", "Kp = Kc(RT)^Δn for ideal gaseous equilibria, using consistent conventions; Δn counts gaseous products minus reactants.", "Cell: ΔG° = −nFE°; E = E° − (0.0591/n) log₁₀Q at 298 K."] },
      { title: "Reaction & structure checks", lines: ["Balance atoms and charge before calculating a limiting reagent or electron transfer.", "Oxidation is electron loss; reduction is electron gain. Oxidation occurs at the anode in both galvanic and electrolytic cells.", "Distinguish nucleophiles (electron-pair donors) and electrophiles (electron-pair acceptors).", "Check substrate, reagent, solvent and temperature before predicting an organic product.", "Resonance structures have the same atomic connectivity; only electron placement changes."] },
    ],
    practice: { question: "Find the molarity when 0.50 mol of solute is dissolved to make 250 mL of solution.", answer: "2.0 mol/L", steps: ["Convert 250 mL to 0.250 L.", "M = n/V = 0.50/0.250 = 2.0 mol/L.", "Use final solution volume, not solvent volume."] },
  },
  {
    id: "biology-handbook", title: "Biology recall handbook", subject: "Biology", exams: ["NEET UG"], kind: "Cheat sheet", summary: "Genetics, human physiology, plants and ecology.", reference: "NCERT XI & XII Biology: Human Physiology, Inheritance, Molecular Basis of Inheritance, Plant Physiology and Ecology.",
    sections: [
      { title: "Genetics & molecular biology", lines: ["Monohybrid Aa × Aa: genotype 1 AA : 2 Aa : 1 aa; phenotype 3:1 only under complete dominance.", "Dihybrid phenotypic ratio 9:3:3:1 assumes independent assortment and complete dominance at both loci.", "DNA pairs A–T and G–C; RNA uses U in place of T. DNA polymerase extends the new strand 5′ → 3′.", "Transcription makes RNA from a DNA template; translation reads mRNA codons to build a polypeptide."] },
      { title: "Physiology & plants", lines: ["Cardiac output = heart rate × stroke volume; keep volume and time units consistent.", "Nephron processes: glomerular filtration, selective reabsorption and tubular secretion.", "Insulin tends to lower blood glucose; glucagon tends to raise it.", "Xylem transports water and minerals; phloem translocates organic solutes from source to sink.", "Light reactions occur in thylakoid membranes; the Calvin cycle occurs in the chloroplast stroma."] },
      { title: "Ecology checks", lines: ["Energy flow is unidirectional; nutrients cycle through ecosystems.", "The approximately 10% trophic transfer rule is a simplified model, not an exact universal constant.", "Hardy–Weinberg: p + q = 1 and p² + 2pq + q² = 1 under its equilibrium assumptions.", "Practise NCERT diagrams and distinguish similar terms rather than memorising ratios without assumptions."] },
    ],
    practice: { question: "For Aa × Aa with complete dominance, what is the probability of a recessive phenotype?", answer: "¼ (25%)", steps: ["Each parent contributes A or a with probability ½.", "Only aa is recessive: P(aa) = ½ × ½ = ¼."] },
  },
  {
    id: "physics-thermal", title: "Physics essentials: thermal physics & waves", subject: "Physics", exams: ["NEET UG", "JEE Main", "JEE Advanced"], kind: "Formula sheet", summary: "Heat, thermodynamics, oscillations and wave motion.", reference: "NCERT XI Physics: Thermal Properties, Thermodynamics, Kinetic Theory, Oscillations and Waves.",
    sections: [
      { title: "Heat & thermodynamics", lines: ["Sensible heat Q = mcΔT; phase change Q = mL (no temperature change during an ideal equilibrium phase change).", "First law: ΔU = Q − W, with W positive for work done by the system.", "Ideal gas internal energy depends only on temperature; monatomic U = 3nRT/2.", "Isothermal ideal-gas work W = nRT ln(V₂/V₁) for a reversible process.", "Reversible adiabatic ideal gas: PVᵞ = constant, with γ = Cₚ/Cᵥ assumed constant.", "Carnot efficiency η = 1 − T꜀/Tₕ; temperatures must be in kelvin."] },
      { title: "Oscillations & waves", lines: ["SHM: a = −ω²x; x = A cos(ωt + φ); T = 2π/ω.", "Mass–spring period T = 2π√(m/k); simple pendulum T = 2π√(L/g) for small angles.", "Wave speed v = fλ; stretched string v = √(tension/linear mass density).", "String fixed at both ends: fₙ = nv/(2L); pipe closed at one end supports odd harmonics in the ideal model.", "Do not confuse heat transfer with temperature; they are different physical quantities."] },
    ],
    practice: { question: "A Carnot engine operates between 600 K and 300 K. What is its efficiency?", answer: "50%", steps: ["η = 1 − T꜀/Tₕ = 1 − 300/600 = 0.50.", "Multiply by 100: efficiency = 50%."] },
  },
];

export function filterSheets(query: string, subject: string, exam: string) {
  const term = query.trim().toLowerCase();
  return REVISION_SHEETS.filter(s => (subject === "All subjects" || s.subject === subject)
    && (exam === "All exams" || s.exams.includes(exam))
    && `${s.title} ${s.summary} ${s.sections.map(x => `${x.title} ${x.lines.join(" ")}`).join(" ")}`.toLowerCase().includes(term));
}