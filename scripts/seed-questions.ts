// Generates the original, NCERT-aligned development question bank as SQL.
// Numerical items are produced from templates whose answers are computed, so the key
// is always arithmetically correct; conceptual items are hand-written and reviewed.
// Run: bun scripts/seed-questions.ts > /tmp/seed.sql
type Lvl = "easy" | "medium" | "hard" | "expert";
type Q = {
  exams: string[]; subject: string; chapter: string; topic?: string; difficulty: Lvl;
  qtype?: "single" | "multiple" | "numerical" | "assertion_reason";
  body: string; options?: string[]; correct: number | number[] | { value: number; tolerance?: number };
  explanation: string; steps?: string[]; mapping?: string; classLevel?: string;
};

let seed = 20261010;
const rnd = () => ((seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648);
const pick = <T,>(a: T[]) => a[Math.floor(rnd() * a.length)];
const ID = ["a", "b", "c", "d"];

const PCM_EXAMS = ["kcet", "neet-ug", "jee-main", "jee-advanced", "comedk", "scholarship"];
const MATH_EXAMS = ["kcet", "jee-main", "jee-advanced", "comedk", "scholarship"];
const BIO_EXAMS = ["kcet", "neet-ug", "scholarship"];
const MA_EXAMS = ["karnataka-govt", "upsc", "scholarship"];
const GS_EXAMS = ["karnataka-govt", "upsc"];

const out: Q[] = [];
const seen = new Set<string>();
function add(q: Q) { if (seen.has(q.body)) return; seen.add(q.body); out.push(q); }

/** Numeric MCQ with computed key and distinct distractors. */
function num(base: Omit<Q, "options" | "correct">, ans: number, distractors: number[], unit = "") {
  const fmt = (n: number) => `${Number.isInteger(n) ? n : Math.round(n * 100) / 100}${unit ? " " + unit : ""}`;
  const vals = [ans, ...distractors.filter((d) => Math.abs(d - ans) > 1e-9)];
  const uniq = [...new Map(vals.map((v) => [fmt(v), v])).values()].slice(0, 4);
  let k = 2; while (uniq.length < 4) { const v = ans * k + k; if (!uniq.some((u) => fmt(u) === fmt(v))) uniq.push(v); k++; }
  const order = uniq.map((v) => ({ v, r: rnd() })).sort((a, b) => a.r - b.r).map((x) => x.v);
  add({ ...base, options: order.map(fmt), correct: order.findIndex((v) => fmt(v) === fmt(ans)) });
}
function repeat(n: number, f: () => void) { for (let i = 0; i < n * 3 && i < 200; i++) { const before = out.length; f(); if (out.length - before && --n <= 0) break; } }

// ------------------------------ PHYSICS ------------------------------
const P = (difficulty: Lvl, chapter: string, mapping: string) => ({ exams: PCM_EXAMS, subject: "Physics", chapter, difficulty, mapping });
repeat(5, () => { const u = pick([0, 2, 4, 5, 10]), a = pick([2, 3, 4, 5]), t = pick([2, 3, 4, 5, 6]); const v = u + a * t;
  num({ ...P("easy", "Motion in a Straight Line", "NCERT Physics XI Ch 2"), body: `A body moving with initial velocity ${u} m/s has uniform acceleration ${a} m/s². What is its velocity after ${t} s?`, explanation: "Use the first equation of motion v = u + at.", steps: [`v = u + at = ${u} + ${a}×${t}`, `v = ${v} m/s`] }, v, [u + a, a * t, u * a * t + 1], "m/s"); });
repeat(5, () => { const m = pick([2, 4, 5, 10]), v = pick([2, 3, 4, 6, 10]); const k = 0.5 * m * v * v;
  num({ ...P("easy", "Work, Energy and Power", "NCERT Physics XI Ch 5"), body: `What is the kinetic energy of a ${m} kg body moving at ${v} m/s?`, explanation: "Kinetic energy K = ½mv².", steps: [`K = ½ × ${m} × ${v}²`, `K = ${k} J`] }, k, [m * v * v, m * v, 0.5 * m * v], "J"); });
repeat(4, () => { const i = pick([2, 3, 4, 5]), r = pick([5, 6, 10, 12, 20]); const v = i * r;
  num({ ...P("easy", "Current Electricity", "NCERT Physics XII Ch 3"), body: `A current of ${i} A flows through a ${r} Ω resistor. What is the potential difference across it?`, explanation: "Ohm's law: V = IR.", steps: [`V = ${i} × ${r} = ${v} V`] }, v, [r / i, i + r, v * 2], "V"); });
repeat(5, () => { const u = pick([0, 2, 4, 5]), a = pick([2, 4, 6]), t = pick([2, 4, 5, 6]); const s = u * t + 0.5 * a * t * t;
  num({ ...P("medium", "Motion in a Straight Line", "NCERT Physics XI Ch 2"), body: `A car starts with velocity ${u} m/s and accelerates uniformly at ${a} m/s². How far does it travel in ${t} s?`, explanation: "Second equation of motion s = ut + ½at².", steps: [`s = ${u}×${t} + ½×${a}×${t}²`, `s = ${s} m`] }, s, [u * t + a * t * t, 0.5 * a * t, u + a * t], "m"); });
repeat(5, () => { const [r1, r2] = pick([[3, 6], [4, 12], [6, 12], [10, 15], [20, 30], [12, 24]]); const rp = (r1 * r2) / (r1 + r2);
  num({ ...P("medium", "Current Electricity", "NCERT Physics XII Ch 3"), body: `Resistors of ${r1} Ω and ${r2} Ω are connected in parallel. What is the equivalent resistance?`, explanation: "For two resistors in parallel, R = R₁R₂/(R₁+R₂).", steps: [`R = (${r1}×${r2})/(${r1}+${r2})`, `R = ${rp} Ω`] }, rp, [r1 + r2, (r1 + r2) / 2, r2 - r1], "Ω"); });
repeat(4, () => { const m1 = pick([1, 2, 3, 4]), m2 = pick([1, 2, 4, 6]), u = pick([6, 12, 24]); const v = (m1 * u) / (m1 + m2);
  num({ ...P("medium", "Laws of Motion", "NCERT Physics XI Ch 4"), body: `A ${m1} kg ball moving at ${u} m/s sticks to a ${m2} kg ball at rest. What is their common velocity just after the collision?`, explanation: "Momentum is conserved: m₁u = (m₁+m₂)v.", steps: [`v = ${m1}×${u}/(${m1}+${m2})`, `v = ${Math.round(v * 100) / 100} m/s`] }, v, [u, (m2 * u) / (m1 + m2) + 1, u / 2 + 1], "m/s"); });
repeat(5, () => { const u = pick([10, 20, 30, 40]); const R = (u * u) / 10;
  num({ ...P("hard", "Motion in a Plane", "NCERT Physics XI Ch 3"), body: `A projectile is launched at ${u} m/s at 45° to the horizontal on level ground. Taking g = 10 m/s², what is its horizontal range?`, explanation: "R = u² sin 2θ / g; at 45°, sin 90° = 1.", steps: [`R = ${u}²/10`, `R = ${R} m`] }, R, [R / 2, R * 2, u * 2], "m"); });
repeat(5, () => { const [c1, c2] = pick([[2, 3], [3, 6], [4, 12], [6, 12], [10, 15], [2, 6]]); const c = (c1 * c2) / (c1 + c2);
  num({ ...P("hard", "Electrostatic Potential and Capacitance", "NCERT Physics XII Ch 2"), body: `Capacitors of ${c1} μF and ${c2} μF are connected in series. What is the equivalent capacitance?`, explanation: "In series, 1/C = 1/C₁ + 1/C₂.", steps: [`C = ${c1}×${c2}/(${c1}+${c2})`, `C = ${Math.round(c * 100) / 100} μF`] }, c, [c1 + c2, (c1 + c2) / 2, Math.abs(c2 - c1) + 0.5], "μF"); });
repeat(4, () => { const m = pick([0.5, 1, 2]), dT = pick([10, 20, 25, 40]); const q = m * 4200 * dT;
  num({ ...P("hard", "Thermal Properties of Matter", "NCERT Physics XI Ch 10"), body: `How much heat is needed to raise the temperature of ${m} kg of water by ${dT} °C? (specific heat of water = 4200 J kg⁻¹ K⁻¹)`, explanation: "Q = mcΔT.", steps: [`Q = ${m} × 4200 × ${dT}`, `Q = ${q} J`] }, q, [q / 2, q * 2, 4200 * dT], "J"); });
repeat(5, () => { const [m1, m2] = pick([[1, 3], [3, 1], [2, 6], [1, 2], [3, 5], [5, 3]]), u = pick([4, 8, 12]); const v1 = ((m1 - m2) / (m1 + m2)) * u, v2 = ((2 * m1) / (m1 + m2)) * u;
  num({ ...P("expert", "Work, Energy and Power", "NCERT Physics XI Ch 5"), body: `A ${m1} kg ball moving at ${u} m/s collides head-on elastically with a ${m2} kg ball at rest. What is the velocity of the ${m2} kg ball after the collision?`, explanation: "For a 1-D elastic collision with the second body at rest, v₂ = 2m₁u/(m₁+m₂). (The first body's velocity is " + (Math.round(v1 * 100) / 100) + " m/s.)", steps: [`v₂ = 2×${m1}×${u}/(${m1}+${m2})`, `v₂ = ${Math.round(v2 * 100) / 100} m/s`] }, v2, [u, Math.abs(v1) + 0.5, (m1 * u) / (m1 + m2)], "m/s"); });
repeat(5, () => { const c = pick([2, 4, 5, 10]), v = pick([10, 20, 50, 100]); const e = 0.5 * c * 1e-6 * v * v * 1000; // mJ
  num({ ...P("expert", "Electrostatic Potential and Capacitance", "NCERT Physics XII Ch 2"), body: `A ${c} μF capacitor is charged to ${v} V. How much energy does it store, in millijoules?`, explanation: "U = ½CV².", steps: [`U = ½ × ${c}×10⁻⁶ × ${v}² J`, `U = ${e} mJ`] }, e, [e * 2, e / 2, c * v / 1000], "mJ"); });
repeat(4, () => { const h = pick([5, 20, 45, 80]); const t = Math.sqrt((2 * h) / 10);
  add({ ...P("expert", "Motion in a Straight Line", "NCERT Physics XI Ch 2"), exams: ["jee-main", "jee-advanced"], qtype: "numerical", body: `A stone is dropped from rest from a height of ${h} m. Taking g = 10 m/s² and neglecting air resistance, how long (in seconds) does it take to reach the ground?`, correct: { value: t, tolerance: 0.01 }, explanation: "h = ½gt² for a body dropped from rest.", steps: [`t = √(2h/g) = √(2×${h}/10)`, `t = ${t} s`] }); });
add({ ...P("expert", "Electrostatic Potential and Capacitance", "NCERT Physics XII Ch 1–2"), exams: ["jee-advanced"], qtype: "multiple", body: "For an isolated charged conductor in electrostatic equilibrium, which statements are correct?", options: ["The electric field inside the conductor is zero", "The surface is an equipotential", "Excess charge resides on the outer surface", "The field just outside is parallel to the surface"], correct: [0, 1, 2], explanation: "Inside field is zero, the conductor is equipotential and charge sits on the surface; the field just outside is normal (not parallel) to the surface." });
add({ ...P("expert", "Laws of Motion", "NCERT Physics XI Ch 4"), exams: ["jee-advanced"], qtype: "multiple", body: "A block rests on a rough horizontal floor and a small horizontal force is applied but the block does not move. Which statements are correct?", options: ["Static friction equals the applied force", "Static friction equals μₛN", "The net force on the block is zero", "The normal force equals the weight"], correct: [0, 2, 3], explanation: "Static friction adjusts to balance the applied force and only reaches μₛN at the point of slipping." });
add({ ...P("medium", "Units and Measurement", "NCERT Physics XI Ch 1"), qtype: "assertion_reason", exams: ["neet-ug"], body: "Assertion (A): Dimensional analysis cannot determine dimensionless constants in a formula.\nReason (R): Dimensionless constants have no dimensions, so they do not appear in dimensional equations.", options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is not the correct explanation of A", "A is true but R is false", "A is false but R is true"], correct: 0, explanation: "Since constants like 2π are dimensionless, dimensional equations cannot detect them; R explains A." });

// ------------------------------ CHEMISTRY ------------------------------
const C = (difficulty: Lvl, chapter: string, mapping: string) => ({ exams: PCM_EXAMS, subject: "Chemistry", chapter, difficulty, mapping });
const MOLAR: [string, number][] = [["water (H₂O)", 18], ["carbon dioxide (CO₂)", 44], ["sodium chloride (NaCl)", 58.5], ["glucose (C₆H₁₂O₆)", 180], ["methane (CH₄)", 16], ["ammonia (NH₃)", 17]];
repeat(7, () => { const [name, M] = pick(MOLAR), n = pick([0.5, 1, 2, 3]); const m = n * M;
  num({ ...C("easy", "Some Basic Concepts of Chemistry", "NCERT Chemistry XI Unit 1"), body: `How many moles are present in ${m} g of ${name}? (molar mass ${M} g/mol)`, explanation: "n = mass / molar mass.", steps: [`n = ${m}/${M}`, `n = ${n} mol`] }, n, [n * 2, m * M / 100, n + 0.25], "mol"); });
repeat(7, () => { const n = pick([0.1, 0.2, 0.5, 1]), v = pick([0.25, 0.5, 1, 2]); const M = n / v;
  num({ ...C("easy", "Solutions", "NCERT Chemistry XII Unit 1"), body: `${n} mol of solute is dissolved to make ${v * 1000} mL of solution. What is its molarity?`, explanation: "Molarity = moles of solute / volume of solution in litres.", steps: [`M = ${n}/${v}`, `M = ${M} M`] }, M, [n * v, M * 10, M / 10], "M"); });
repeat(7, () => { const k = pick([1, 2, 3, 4]); const c = Math.pow(10, -k);
  num({ ...C("medium", "Equilibrium", "NCERT Chemistry XI Unit 7"), body: `What is the pH of a ${c} M solution of HCl (a strong acid, fully dissociated) at 25 °C?`, explanation: "pH = −log[H⁺]; for a strong monoprotic acid [H⁺] equals its concentration.", steps: [`[H⁺] = 10⁻${k} M`, `pH = ${k}`] }, k, [14 - k, k + 1, k * 2 + 1]); });
repeat(7, () => { const m1 = pick([1, 2, 5, 6]), v1 = pick([50, 100, 200]), v2 = pick([500, 1000]); const m2 = (m1 * v1) / v2;
  num({ ...C("medium", "Solutions", "NCERT Chemistry XI Unit 1"), body: `${v1} mL of a ${m1} M solution is diluted with water to ${v2} mL. What is the new molarity?`, explanation: "M₁V₁ = M₂V₂.", steps: [`M₂ = ${m1}×${v1}/${v2}`, `M₂ = ${m2} M`] }, m2, [m1, m2 * 10, (m1 * v2) / v1], "M"); });
repeat(7, () => { const a0 = pick([80, 64, 160, 200]), n = pick([2, 3, 4]), th = pick([5, 10, 20]); const a = a0 / Math.pow(2, n);
  num({ ...C("hard", "Chemical Kinetics", "NCERT Chemistry XII Unit 3"), body: `A first-order reaction has a half-life of ${th} min. Starting with ${a0} g of reactant, how much remains after ${n * th} min?`, explanation: "After n half-lives, amount = initial / 2ⁿ.", steps: [`n = ${n * th}/${th} = ${n}`, `${a0}/2^${n} = ${a} g`] }, a, [a0 / n, a * 2, a / 2], "g"); });
repeat(7, () => { const order = pick([1, 2]), f = pick([2, 3, 4]); const r = Math.pow(f, order);
  num({ ...C("hard", "Chemical Kinetics", "NCERT Chemistry XII Unit 3"), body: `For a reaction that is order ${order} in A (rate = k[A]^${order}), [A] is increased ${f} times. By what factor does the rate increase?`, explanation: "Rate scales as (factor)^order.", steps: [`${f}^${order} = ${r}`] }, r, [f, f * order + 1, r * 2]); });
repeat(7, () => { const m = pick([0.5, 1, 2]), kf = 1.86; const dt = kf * m;
  num({ ...C("expert", "Solutions", "NCERT Chemistry XII Unit 1"), body: `A non-electrolyte solution in water has molality ${m} mol/kg. What is the depression in freezing point? (Kf of water = 1.86 K kg mol⁻¹)`, explanation: "ΔTf = Kf · m for a non-electrolyte (i = 1).", steps: [`ΔTf = 1.86 × ${m}`, `ΔTf = ${Math.round(dt * 100) / 100} K`] }, dt, [kf / m, dt * 2, 0.512 * m], "K"); });
repeat(6, () => { const a = pick([1, 2, 4]), b = pick([2, 4, 8]), cc = pick([1, 2, 4]); const K = (cc * cc) / (a * b);
  num({ ...C("expert", "Equilibrium", "NCERT Chemistry XI Unit 7"), body: `For A(g) + B(g) ⇌ 2C(g), equilibrium concentrations are [A] = ${a} M, [B] = ${b} M and [C] = ${cc} M. What is Kc?`, explanation: "Kc = [C]² / ([A][B]).", steps: [`Kc = ${cc}²/(${a}×${b})`, `Kc = ${Math.round(K * 1000) / 1000}`] }, K, [cc / (a * b), (a * b) / (cc * cc), 2 * cc / (a + b) + 0.1]); });
add({ ...C("expert", "Chemical Bonding and Molecular Structure", "NCERT Chemistry XI Unit 4"), exams: ["jee-advanced"], qtype: "multiple", body: "Which of the following molecules have a net dipole moment of zero?", options: ["CO₂", "BF₃", "NH₃", "CCl₄"], correct: [0, 1, 3], explanation: "CO₂ (linear), BF₃ (trigonal planar) and CCl₄ (tetrahedral) are symmetric; NH₃ is pyramidal and polar." });
add({ ...C("medium", "Classification of Elements", "NCERT Chemistry XI Unit 3"), qtype: "assertion_reason", exams: ["neet-ug"], body: "Assertion (A): Atomic radius decreases across a period from left to right.\nReason (R): Effective nuclear charge increases across a period while electrons are added to the same shell.", options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is not the correct explanation of A", "A is true but R is false", "A is false but R is true"], correct: 0, explanation: "Greater effective nuclear charge pulls the same shell closer, so R explains A." });

// ------------------------------ MATHEMATICS ------------------------------
const M = (difficulty: Lvl, chapter: string, mapping: string) => ({ exams: MATH_EXAMS, subject: "Mathematics", chapter, difficulty, mapping });
repeat(7, () => { const a = pick([2, 3, 5, 7]), d = pick([2, 3, 4, 5]), n = pick([10, 12, 15, 20]); const t = a + (n - 1) * d;
  num({ ...M("easy", "Sequences and Series", "NCERT Maths XI Ch 8"), body: `Find the ${n}th term of the arithmetic progression ${a}, ${a + d}, ${a + 2 * d}, …`, explanation: "aₙ = a + (n − 1)d.", steps: [`a${n} = ${a} + ${n - 1}×${d}`, `= ${t}`] }, t, [a + n * d, n * d, t - d + 1]); });
repeat(7, () => { const n = pick([2, 3, 4]), x = pick([1, 2, 3]); const v = n * Math.pow(x, n - 1);
  num({ ...M("easy", "Limits and Derivatives", "NCERT Maths XI Ch 12"), body: `If f(x) = x^${n}, find f′(${x}).`, explanation: "d/dx xⁿ = n·xⁿ⁻¹.", steps: [`f′(x) = ${n}x^${n - 1}`, `f′(${x}) = ${v}`] }, v, [Math.pow(x, n), n * x, v + n]); });
repeat(7, () => { const a = pick([1, 2, 3, 5]), d = pick([1, 2, 3, 4]), n = pick([10, 15, 20]); const s = (n / 2) * (2 * a + (n - 1) * d);
  num({ ...M("medium", "Sequences and Series", "NCERT Maths XI Ch 8"), body: `Find the sum of the first ${n} terms of the AP with first term ${a} and common difference ${d}.`, explanation: "Sₙ = n/2 [2a + (n − 1)d].", steps: [`S = ${n}/2 × [2×${a} + ${n - 1}×${d}]`, `S = ${s}`] }, s, [n * (a + n * d), s - n, (n / 2) * (a + (n - 1) * d)]); });
repeat(7, () => { const n = pick([5, 6, 7, 8, 10]), r = pick([2, 3]); let c = 1; for (let i = 0; i < r; i++) c = (c * (n - i)) / (i + 1);
  num({ ...M("medium", "Permutations and Combinations", "NCERT Maths XI Ch 7"), body: `In how many ways can ${r} members be chosen from a group of ${n} people?`, explanation: "ⁿCᵣ = n! / (r!(n − r)!).", steps: [`${n}C${r} = ${c}`] }, c, [c * (r === 2 ? 2 : 6), n * r, c + n]); });
repeat(7, () => { const a = pick([1, 2, 3]), n = pick([1, 2, 3]); const v = Math.pow(a, n + 1) / (n + 1);
  num({ ...M("hard", "Integrals", "NCERT Maths XII Ch 7"), body: `Evaluate ∫₀^${a} x^${n} dx.`, explanation: "∫₀ᵃ xⁿ dx = aⁿ⁺¹/(n+1).", steps: [`= ${a}^${n + 1}/${n + 1}`, `= ${Math.round(v * 100) / 100}`] }, v, [Math.pow(a, n), n * Math.pow(a, n - 1), v * 2]); });
repeat(7, () => { const s = pick([4, 5, 6, 7, 8, 9, 10]); const ways = 6 - Math.abs(7 - s);
  num({ ...M("hard", "Probability", "NCERT Maths XI Ch 16"), body: `Two fair dice are thrown. What is the probability that the sum is ${s}? (as a fraction of 36)`, explanation: `There are ${ways} favourable outcomes out of 36.`, steps: [`P = ${ways}/36`] }, ways / 36, [(ways + 1) / 36, 1 / 6 + 0.01, ways / 12]); });
repeat(7, () => { const [a, b] = pick([[3, 4], [4, 3], [6, 8], [5, 12], [8, 6]]), x0 = pick([1, 2, 3]), y0 = pick([1, 2]), c = pick([-5, 5, 10, -10]); const d = Math.abs(a * x0 + b * y0 + c) / Math.hypot(a, b);
  num({ ...M("expert", "Straight Lines", "NCERT Maths XI Ch 9"), body: `Find the perpendicular distance from the point (${x0}, ${y0}) to the line ${a}x + ${b}y ${c >= 0 ? "+" : "−"} ${Math.abs(c)} = 0.`, explanation: "d = |ax₀ + by₀ + c| / √(a² + b²).", steps: [`d = |${a}×${x0} + ${b}×${y0} ${c >= 0 ? "+" : "−"} ${Math.abs(c)}| / ${Math.hypot(a, b)}`, `d = ${Math.round(d * 100) / 100}`] }, d, [Math.abs(a * x0 + b * y0 + c), d + 1, Math.abs(a * x0 + b * y0) / Math.hypot(a, b) + 0.2]); });
repeat(6, () => { const a = pick([1, 2, 3]), r = pick([2, 3]), n = pick([4, 5, 6]); const s = (a * (Math.pow(r, n) - 1)) / (r - 1);
  add({ ...M("expert", "Sequences and Series", "NCERT Maths XI Ch 8"), exams: ["jee-main", "jee-advanced"], qtype: "numerical", body: `Find the sum of the first ${n} terms of the geometric progression ${a}, ${a * r}, ${a * r * r}, …`, correct: { value: s }, explanation: "Sₙ = a(rⁿ − 1)/(r − 1).", steps: [`S = ${a}(${r}^${n} − 1)/(${r} − 1)`, `S = ${s}`] }); });
add({ ...M("expert", "Relations and Functions", "NCERT Maths XII Ch 1"), exams: ["jee-advanced"], qtype: "multiple", body: "Which of the following functions from ℝ to ℝ are one-one (injective)?", options: ["f(x) = 2x + 3", "f(x) = x²", "f(x) = x³", "f(x) = |x|"], correct: [0, 2], explanation: "Linear 2x+3 and x³ are strictly increasing; x² and |x| take equal values at ±x." });

// ------------------------------ BIOLOGY (hand-written, NCERT) ------------------------------
const AR = ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is not the correct explanation of A", "A is true but R is false", "A is false but R is true"];
const bio: [Lvl, "Botany" | "Zoology", string, string, string[], number, string][] = [
  ["easy", "Botany", "Cell: The Unit of Life", "Which organelle is the site of photosynthesis in plant cells?", ["Mitochondrion", "Chloroplast", "Ribosome", "Golgi apparatus"], 1, "Chloroplasts contain chlorophyll and carry out photosynthesis."],
  ["easy", "Zoology", "Cell: The Unit of Life", "Which organelle is called the powerhouse of the cell?", ["Nucleus", "Lysosome", "Mitochondrion", "Endoplasmic reticulum"], 2, "Mitochondria produce ATP by aerobic respiration."],
  ["easy", "Botany", "Photosynthesis in Higher Plants", "Which gas is released as a by-product of photosynthesis?", ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"], 2, "O₂ comes from the splitting of water in the light reaction."],
  ["easy", "Zoology", "Human Health and Disease", "Malaria is caused by which organism?", ["Plasmodium", "Entamoeba", "Salmonella", "Ascaris"], 0, "Plasmodium is transmitted by the female Anopheles mosquito."],
  ["easy", "Zoology", "Body Fluids and Circulation", "How many chambers does the human heart have?", ["Two", "Three", "Four", "Five"], 2, "Two atria and two ventricles."],
  ["easy", "Botany", "Morphology of Flowering Plants", "The male reproductive part of a flower is the", ["Pistil", "Stamen", "Sepal", "Ovule"], 1, "The stamen (androecium) consists of anther and filament."],
  ["easy", "Zoology", "Breathing and Exchange of Gases", "Exchange of gases in human lungs takes place in the", ["Trachea", "Bronchi", "Alveoli", "Larynx"], 2, "Alveoli provide a thin, large surface for diffusion."],
  ["easy", "Botany", "The Living World", "The basic unit of classification is", ["Genus", "Species", "Family", "Order"], 1, "Species is the lowest and basic taxonomic category."],
  ["easy", "Zoology", "Digestion and Absorption", "Which enzyme in saliva begins starch digestion?", ["Pepsin", "Salivary amylase", "Trypsin", "Lipase"], 1, "Salivary amylase (ptyalin) hydrolyses starch to maltose."],
  ["easy", "Botany", "Biological Classification", "Bacteria are placed in which kingdom in Whittaker's five-kingdom system?", ["Protista", "Fungi", "Monera", "Plantae"], 2, "Prokaryotes are placed in Monera."],
  ["easy", "Zoology", "Neural Control and Coordination", "The structural and functional unit of the nervous system is the", ["Nephron", "Neuron", "Sarcomere", "Alveolus"], 1, "Neurons transmit nerve impulses."],
  ["medium", "Botany", "Principles of Inheritance and Variation", "In a monohybrid cross between pure tall (TT) and dwarf (tt) pea plants, the F₂ phenotypic ratio is", ["1 : 1", "3 : 1", "9 : 3 : 3 : 1", "1 : 2 : 1"], 1, "F₁ Tt selfed gives 3 tall : 1 dwarf."],
  ["medium", "Botany", "Principles of Inheritance and Variation", "The F₂ genotypic ratio of a monohybrid cross is", ["3 : 1", "1 : 2 : 1", "9 : 3 : 3 : 1", "1 : 1"], 1, "TT : Tt : tt = 1 : 2 : 1."],
  ["medium", "Zoology", "Excretory Products and their Elimination", "The functional unit of the kidney is the", ["Neuron", "Nephron", "Alveolus", "Villus"], 1, "Each kidney has about a million nephrons."],
  ["medium", "Botany", "Photosynthesis in Higher Plants", "The first stable product of the Calvin (C₃) cycle is", ["Oxaloacetic acid", "3-phosphoglyceric acid", "Pyruvic acid", "Glucose"], 1, "RuBisCO fixes CO₂ to give 3-PGA."],
  ["medium", "Zoology", "Body Fluids and Circulation", "The pacemaker of the human heart is the", ["AV node", "SA node", "Bundle of His", "Purkinje fibres"], 1, "The sinoatrial node initiates each heartbeat."],
  ["medium", "Botany", "Respiration in Plants", "Glycolysis takes place in the", ["Mitochondrial matrix", "Cytoplasm", "Chloroplast", "Nucleus"], 1, "Glycolysis occurs in the cytoplasm of all living cells."],
  ["medium", "Zoology", "Human Reproduction", "Fertilisation in humans normally occurs in the", ["Uterus", "Ovary", "Ampullary region of the fallopian tube", "Cervix"], 2, "Ovum and sperm meet in the ampulla of the oviduct."],
  ["medium", "Botany", "Molecular Basis of Inheritance", "In DNA, adenine pairs with", ["Guanine", "Cytosine", "Thymine", "Uracil"], 2, "A=T by two hydrogen bonds (Chargaff's rule)."],
  ["medium", "Zoology", "Chemical Coordination and Integration", "Insulin is secreted by which cells of the pancreas?", ["α-cells", "β-cells", "δ-cells", "Acinar cells"], 1, "β-cells of the islets of Langerhans secrete insulin."],
  ["medium", "Zoology", "Evolution", "Analogous organs indicate", ["Divergent evolution", "Convergent evolution", "Common ancestry", "Vestigial structure"], 1, "Similar function from different ancestry reflects convergent evolution."],
  ["medium", "Botany", "Organisms and Populations", "In a population growing exponentially, the growth curve is", ["S-shaped", "J-shaped", "Linear", "Bell-shaped"], 1, "Exponential growth with unlimited resources gives a J-shaped curve."],
  ["hard", "Botany", "Molecular Basis of Inheritance", "If one strand of DNA has the sequence 5′-ATGCCA-3′, the complementary strand (written 5′→3′) is", ["5′-TACGGT-3′", "5′-TGGCAT-3′", "5′-ATGCCA-3′", "5′-UGGCAU-3′"], 1, "Complement is 3′-TACGGT-5′, which read 5′→3′ is TGGCAT."],
  ["hard", "Zoology", "Breathing and Exchange of Gases", "Which factor shifts the oxygen–haemoglobin dissociation curve to the right?", ["Low pCO₂", "Low temperature", "High H⁺ concentration", "High pH"], 2, "Higher H⁺ (lower pH), higher pCO₂ and temperature favour O₂ release (Bohr effect)."],
  ["hard", "Botany", "Principles of Inheritance and Variation", "A dihybrid test cross (AaBb × aabb) with independent assortment gives which phenotypic ratio?", ["9 : 3 : 3 : 1", "1 : 1 : 1 : 1", "3 : 1", "1 : 2 : 1"], 1, "Each of the four gamete types of AaBb appears equally."],
  ["hard", "Zoology", "Neural Control and Coordination", "During the resting state, the axonal membrane is", ["More permeable to Na⁺ than K⁺", "More permeable to K⁺ than Na⁺", "Equally permeable to both", "Impermeable to both"], 1, "Resting membrane is more permeable to K⁺; the inside is negative."],
  ["hard", "Botany", "Photosynthesis in Higher Plants", "In C₄ plants, the primary CO₂ acceptor in mesophyll cells is", ["RuBP", "PEP", "OAA", "3-PGA"], 1, "PEP carboxylase fixes CO₂ onto phosphoenolpyruvate."],
  ["hard", "Zoology", "Human Health and Disease", "HIV primarily infects which cells?", ["B-lymphocytes", "Helper T-lymphocytes", "Red blood cells", "Platelets"], 1, "HIV targets CD4⁺ helper T cells."],
  ["hard", "Botany", "Sexual Reproduction in Flowering Plants", "In angiosperms, the endosperm is typically", ["Haploid", "Diploid", "Triploid", "Tetraploid"], 2, "Triple fusion of a male gamete with two polar nuclei gives 3n endosperm."],
  ["hard", "Zoology", "Locomotion and Movement", "During muscle contraction, which band shortens?", ["A-band", "I-band", "Both A and I bands", "Neither"], 1, "Thin filaments slide inward; the I-band and H-zone shorten while the A-band stays constant."],
  ["hard", "Botany", "Biotechnology: Principles and Processes", "Restriction endonuclease EcoRI recognises a palindromic sequence of how many base pairs?", ["4", "6", "8", "10"], 1, "EcoRI recognises GAATTC (6 bp)."],
  ["hard", "Zoology", "Excretory Products and their Elimination", "ADH (vasopressin) acts mainly on the", ["Glomerulus", "Proximal tubule", "Distal tubule and collecting duct", "Bowman's capsule"], 2, "ADH increases water reabsorption in the DCT and collecting duct."],
  ["hard", "Botany", "Ecosystem", "According to the 10% law, if producers fix 10,000 J, energy available to secondary consumers is about", ["1,000 J", "100 J", "10 J", "1 J"], 1, "10,000 → 1,000 (primary) → 100 J (secondary)."],
  ["expert", "Botany", "Principles of Inheritance and Variation", "In a dihybrid cross (AaBb × AaBb) with independent assortment, what fraction of the progeny is homozygous recessive for both genes?", ["1/4", "1/8", "1/16", "9/16"], 2, "(1/4) × (1/4) = 1/16 for aabb."],
  ["expert", "Botany", "Principles of Inheritance and Variation", "In a cross AaBb × AaBb, what fraction of progeny shows both dominant traits?", ["3/16", "9/16", "1/16", "6/16"], 1, "(3/4) × (3/4) = 9/16."],
  ["expert", "Zoology", "Evolution", "In a Hardy–Weinberg population, the frequency of the recessive allele is 0.3. What is the frequency of heterozygotes?", ["0.09", "0.21", "0.42", "0.49"], 2, "2pq = 2 × 0.7 × 0.3 = 0.42."],
  ["expert", "Zoology", "Evolution", "If 16% of a Hardy–Weinberg population shows the recessive phenotype, the frequency of the dominant allele is", ["0.4", "0.6", "0.84", "0.16"], 1, "q² = 0.16 so q = 0.4 and p = 0.6."],
  ["expert", "Botany", "Molecular Basis of Inheritance", "A DNA sample has 20% adenine. What percentage of its bases is guanine?", ["20%", "30%", "40%", "60%"], 1, "A = T = 20%, so G + C = 60% and G = 30%."],
  ["expert", "Botany", "Molecular Basis of Inheritance", "How many amino acids are coded by an mRNA segment of 300 nucleotides (excluding stop codon effects)?", ["100", "150", "300", "900"], 0, "Each codon has 3 nucleotides: 300/3 = 100."],
  ["expert", "Zoology", "Breathing and Exchange of Gases", "Tidal volume 500 mL, IRV 2500 mL and ERV 1000 mL. What is the vital capacity?", ["3000 mL", "3500 mL", "4000 mL", "5200 mL"], 2, "VC = TV + IRV + ERV = 4000 mL."],
  ["expert", "Zoology", "Body Fluids and Circulation", "With a stroke volume of 70 mL and heart rate of 72 beats/min, the cardiac output is about", ["4.04 L/min", "5.04 L/min", "6.04 L/min", "7.2 L/min"], 1, "70 × 72 = 5040 mL/min ≈ 5.04 L/min."],
  ["expert", "Botany", "Respiration in Plants", "The respiratory quotient (RQ) for the complete aerobic oxidation of tripalmitin is about", ["1.0", "0.7", "1.33", "4.0"], 1, "Fats give RQ ≈ 0.7 (102 CO₂ / 145 O₂)."],
  ["expert", "Zoology", "Human Reproduction", "In a 28-day menstrual cycle, ovulation typically occurs around day", ["5", "14", "21", "28"], 1, "The LH surge in mid-cycle triggers ovulation around day 14."],
  ["expert", "Botany", "Sexual Reproduction in Flowering Plants", "If the leaf cells of a plant have 24 chromosomes, the endosperm has", ["12", "24", "36", "48"], 2, "Endosperm is 3n = 36 when 2n = 24."],
];
for (const [d, s, ch, body, opts, c, ex] of bio) add({ exams: BIO_EXAMS, subject: s, chapter: ch, difficulty: d, body, options: opts, correct: c, explanation: ex, mapping: `NCERT Biology — ${ch}` });
add({ exams: ["neet-ug"], subject: "Zoology", chapter: "Body Fluids and Circulation", difficulty: "hard", qtype: "assertion_reason", body: "Assertion (A): The wall of the left ventricle is thicker than that of the right ventricle.\nReason (R): The left ventricle pumps blood to the entire body against higher resistance.", options: AR, correct: 0, explanation: "Systemic circulation needs greater pressure, explaining the thicker wall." });

// ------------------------------ MENTAL ABILITY ------------------------------
const MA = (difficulty: Lvl, chapter: string) => ({ exams: MA_EXAMS, subject: "Mental Ability", chapter, difficulty, mapping: "Reasoning & numeracy", classLevel: "General" });
repeat(6, () => { const a = pick([2, 3, 5, 7, 11]), d = pick([3, 4, 6, 7, 9]); const s = [0, 1, 2, 3, 4].map((i) => a + i * d); const nx = a + 5 * d;
  num({ ...MA("easy", "Number Series"), body: `Find the next number: ${s.join(", ")}, ?`, explanation: `Each term increases by ${d}.`, steps: [`${s[4]} + ${d} = ${nx}`] }, nx, [nx + 1, nx - d + 2, nx + d]); });
repeat(6, () => { const p = pick([10, 20, 25, 40]), n = pick([80, 120, 200, 360, 450]); const v = (p * n) / 100;
  num({ ...MA("easy", "Percentages"), body: `What is ${p}% of ${n}?`, explanation: "x% of N = x × N / 100.", steps: [`${p}×${n}/100 = ${v}`] }, v, [v * 2, v + 10, n / p]); });
repeat(6, () => { const a = pick([1, 2, 3]), r = pick([2, 3]); const s = [0, 1, 2, 3].map((i) => a * Math.pow(r, i)); const nx = a * Math.pow(r, 4);
  num({ ...MA("medium", "Number Series"), body: `Find the next number: ${s.join(", ")}, ?`, explanation: `Each term is multiplied by ${r}.`, steps: [`${s[3]} × ${r} = ${nx}`] }, nx, [nx + r, s[3] + r * 2, nx - a]); });
repeat(6, () => { const sp = pick([40, 45, 50, 60, 72]), t = pick([2, 3, 4, 5]); const dd = sp * t;
  num({ ...MA("medium", "Speed, Time and Distance"), body: `A bus travels at ${sp} km/h for ${t} hours. How far does it travel?`, explanation: "Distance = speed × time.", steps: [`${sp} × ${t} = ${dd} km`] }, dd, [dd / 2, sp + t * 10, dd + sp], "km"); });
repeat(6, () => { const [a, b] = pick([[10, 15], [12, 24], [20, 30], [6, 12], [15, 10]]); const t = (a * b) / (a + b);
  num({ ...MA("hard", "Time and Work"), body: `A can finish a job in ${a} days and B in ${b} days. Working together, how many days will they take?`, explanation: "Combined rate = 1/a + 1/b.", steps: [`t = ${a}×${b}/(${a}+${b})`, `t = ${t} days`] }, t, [(a + b) / 2, Math.abs(a - b) + 1, t + 2], "days"); });
repeat(6, () => { const k = pick([1, 2, 3, 4]), w = pick(["CAT", "DOG", "SUN", "PEN", "BOX", "MAP"]); const sh = (s: string, n: number) => s.split("").map((ch) => String.fromCharCode(((ch.charCodeAt(0) - 65 + n) % 26) + 65)).join("");
  const opts = [sh(w, k), sh(w, k + 1), sh(w, k - 1 || 5), w.split("").reverse().join("")];
  const order = opts.map((o) => ({ o, r: rnd() })).sort((x, y) => x.r - y.r).map((x) => x.o);
  add({ ...MA("hard", "Coding-Decoding"), body: `In a code, each letter is replaced by the letter ${k} place${k > 1 ? "s" : ""} after it in the alphabet. How is ${w} written?`, options: order, correct: order.indexOf(sh(w, k)), explanation: `Shift every letter forward by ${k}.`, steps: [`${w} → ${sh(w, k)}`] }); });
repeat(6, () => { const a = pick([1, 2, 3]); const s = [0, 1, 2, 3, 4].map((i) => (a + i) * (a + i) + 1); const nx = (a + 5) * (a + 5) + 1;
  num({ ...MA("expert", "Number Series"), body: `Find the next number: ${s.join(", ")}, ?`, explanation: "Terms are n² + 1 for consecutive n.", steps: [`(${a + 5})² + 1 = ${nx}`] }, nx, [nx - 1, nx + 2 * (a + 5), s[4] + 2]); });
repeat(6, () => { const cp = pick([200, 400, 500, 800]), g = pick([10, 20, 25]), dsc = pick([10, 20]); const mp = (cp * (100 + g)) / (100 - dsc);
  num({ ...MA("expert", "Profit and Loss"), body: `An article costing ₹${cp} must be sold at a ${g}% profit after a ${dsc}% discount on its marked price. What should the marked price be?`, explanation: "SP = CP(1 + g/100) and SP = MP(1 − d/100).", steps: [`SP = ${cp * (100 + g) / 100}`, `MP = SP / ${(100 - dsc) / 100} = ₹${Math.round(mp * 100) / 100}`] }, mp, [cp * (100 + g + dsc) / 100, cp * (100 + g) / 100, mp + 50], ""); });

// ------------------------------ GENERAL STUDIES (hand-written) ------------------------------
const gs: [Lvl, string, string, string[], number, string][] = [
  ["easy", "Indian Polity", "Who is the constitutional head of a state government in India?", ["Chief Minister", "Governor", "Speaker", "Chief Justice of the High Court"], 1, "The Governor is the constitutional head; the CM heads the council of ministers."],
  ["easy", "Indian Polity", "The Constitution of India came into force on", ["15 August 1947", "26 November 1949", "26 January 1950", "2 October 1950"], 2, "It was adopted on 26 November 1949 and came into force on 26 January 1950."],
  ["easy", "Indian Polity", "Who chaired the Drafting Committee of the Constituent Assembly?", ["Jawaharlal Nehru", "B. R. Ambedkar", "Rajendra Prasad", "Sardar Patel"], 1, "Dr B. R. Ambedkar chaired the Drafting Committee."],
  ["easy", "Geography of Karnataka", "What is the capital of Karnataka?", ["Mysuru", "Hubballi", "Bengaluru", "Mangaluru"], 2, "Bengaluru is the state capital."],
  ["easy", "Geography of Karnataka", "Which river is known as the 'Dakshina Ganga' and flows through Karnataka?", ["Krishna", "Kaveri", "Tungabhadra", "Sharavathi"], 1, "The Kaveri is often called Dakshina Ganga."],
  ["easy", "Karnataka History", "Hampi was the capital of which empire?", ["Chalukya", "Hoysala", "Vijayanagara", "Rashtrakuta"], 2, "Hampi (Vijayanagara) was the capital of the Vijayanagara Empire."],
  ["easy", "Indian Polity", "Fundamental Rights are contained in which Part of the Constitution?", ["Part II", "Part III", "Part IV", "Part V"], 1, "Part III, Articles 12–35."],
  ["easy", "Physical Geography", "Which is the largest planet in the Solar System?", ["Earth", "Saturn", "Jupiter", "Neptune"], 2, "Jupiter is the largest planet."],
  ["easy", "Indian Polity", "The minimum voting age in India is", ["16 years", "18 years", "21 years", "25 years"], 1, "Lowered from 21 to 18 by the 61st Amendment (1988)."],
  ["easy", "Karnataka History", "The Karnataka state (then Mysore State) was formed on 1 November of which year?", ["1947", "1950", "1956", "1973"], 2, "Formed under the States Reorganisation Act, 1956; renamed Karnataka in 1973."],
  ["medium", "Indian Polity", "Directive Principles of State Policy are in which Part of the Constitution?", ["Part III", "Part IV", "Part IVA", "Part V"], 1, "Part IV, Articles 36–51."],
  ["medium", "Indian Polity", "Fundamental Duties were added by which Constitutional Amendment?", ["42nd", "44th", "52nd", "73rd"], 0, "The 42nd Amendment (1976) added Part IVA."],
  ["medium", "Indian Polity", "The 73rd Constitutional Amendment relates to", ["Municipalities", "Panchayati Raj", "Anti-defection", "Official languages"], 1, "It gave constitutional status to Panchayati Raj institutions."],
  ["medium", "Indian Polity", "Which Article of the Constitution deals with the right to constitutional remedies?", ["Article 14", "Article 19", "Article 21", "Article 32"], 3, "Article 32 allows direct approach to the Supreme Court."],
  ["medium", "Indian Polity", "Money Bills can be introduced only in", ["Rajya Sabha", "Lok Sabha", "Either House", "A joint sitting"], 1, "Article 109: a Money Bill originates only in the Lok Sabha."],
  ["medium", "Karnataka History", "Which dynasty built the temples at Belur and Halebidu?", ["Kadamba", "Hoysala", "Ganga", "Chola"], 1, "The Hoysalas built the Chennakeshava (Belur) and Hoysaleswara (Halebidu) temples."],
  ["medium", "Karnataka History", "The Kadamba dynasty, one of the earliest native dynasties of Karnataka, was founded by", ["Pulakeshin II", "Mayurasharma", "Krishnadevaraya", "Vishnuvardhana"], 1, "Mayurasharma founded the Kadamba dynasty at Banavasi."],
  ["medium", "Geography of Karnataka", "Jog Falls is formed by which river?", ["Kaveri", "Sharavathi", "Kali", "Netravati"], 1, "Jog Falls is on the Sharavathi river."],
  ["medium", "Economy", "The Reserve Bank of India was established in", ["1935", "1947", "1949", "1969"], 0, "RBI was set up on 1 April 1935 and nationalised in 1949."],
  ["medium", "Physical Geography", "The Tropic of Cancer does NOT pass through which Indian state?", ["Gujarat", "Madhya Pradesh", "Odisha", "Jharkhand"], 2, "It passes through Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura and Mizoram — not Odisha."],
];
for (const [d, ch, body, opts, c, ex] of gs) add({ exams: GS_EXAMS, subject: "General Studies", chapter: ch, difficulty: d, body, options: opts, correct: c, explanation: ex, classLevel: "General", mapping: "General Studies" });

// ------------------------------ SQL ------------------------------
const lit = (s: string) => `'${s.replace(/'/g, "''")}'`;
const json = (v: unknown) => `${lit(JSON.stringify(v))}::jsonb`;
const rows = out.map((q) => {
  const qtype = q.qtype ?? "single";
  const options = (q.options ?? []).map((t, i) => ({ id: ID[i], text: t }));
  const correct = typeof q.correct === "number" ? ID[q.correct] : Array.isArray(q.correct) ? q.correct.map((i) => ID[i]) : q.correct;
  return `(ARRAY[${q.exams.map(lit).join(",")}], ${lit(q.subject)}, ${lit(q.classLevel ?? "Class 11-12")}, 2026, ${lit(q.chapter)}, ${lit(q.topic ?? "")}, ${lit(q.difficulty)}, ${lit(qtype)}, ${lit(q.body)}, ${json(options)}, ${json(correct)}, ${lit(q.explanation)}, ${json(q.steps ?? [])}, ${lit("Original question — Study at Bangalore editorial team (NCERT-aligned)")}, false, 'verified', ${lit(q.mapping ?? "")})`;
});
console.log(`DELETE FROM public.questions WHERE source = 'Original question — Study at Bangalore editorial team (NCERT-aligned)';`);
console.log(`INSERT INTO public.questions (exam_ids, subject, class_level, syllabus_year, chapter, topic, difficulty, qtype, body, options, correct, explanation, solution_steps, source, is_previous_year, verification_status, syllabus_mapping) VALUES\n${rows.join(",\n")};`);
console.error(`generated ${out.length} questions`);
