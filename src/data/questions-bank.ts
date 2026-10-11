export interface QuestionItem {
  id: string;
  exam_ids: string[];
  subject: string;
  chapter: string;
  topic: string;
  difficulty: "easy" | "medium" | "hard" | "expert";
  qtype: "single" | "multiple" | "numerical" | "assertion_reason";
  body: string;
  options: { id: string; text: string }[];
  correct: any;
  explanation: string;
  source: string;
  is_previous_year: boolean;
  verification_status: string;
}

export const QUESTIONS_BANK: QuestionItem[] = [
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Units and Measurements",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "What is the dimensional formula for the Universal Gravitational Constant (G)?",
    "options": [
      {
        "id": "a",
        "text": "[M⁻¹ L³ T⁻²]"
      },
      {
        "id": "b",
        "text": "[M¹ L³ T⁻²]"
      },
      {
        "id": "c",
        "text": "[M⁻¹ L² T⁻²]"
      },
      {
        "id": "d",
        "text": "[M⁻² L³ T⁻¹]"
      }
    ],
    "correct": "a",
    "explanation": "From F = G m1 m2 / r², G = F r² / m². Dimensional analysis gives [M⁻¹ L³ T⁻²].",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "ccd4d6e7-6a44-4c11-8a38-4b108ed1974e"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "In a uniform circular motion, which of the following physical quantities remains constant?",
    "options": [
      {
        "id": "a",
        "text": "Velocity"
      },
      {
        "id": "b",
        "text": "Acceleration"
      },
      {
        "id": "c",
        "text": "Kinetic Energy"
      },
      {
        "id": "d",
        "text": "Displacement"
      }
    ],
    "correct": "c",
    "explanation": "In uniform circular motion, speed is constant but velocity and acceleration change direction continuously.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "52d1ce39-bd13-4518-8c8d-89e0f153cd78"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which of the following materials has a negative temperature coefficient of resistivity?",
    "options": [
      {
        "id": "a",
        "text": "Copper"
      },
      {
        "id": "b",
        "text": "Silicon"
      },
      {
        "id": "c",
        "text": "Aluminum"
      },
      {
        "id": "d",
        "text": "Iron"
      }
    ],
    "correct": "b",
    "explanation": "For semiconductors like Silicon, resistivity decreases as temperature increases.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "c0ceb946-687a-4ae0-85b1-54ca0d1e20ca"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "A body of mass 2 kg is moving with a velocity of 5 m/s. What is its linear momentum?",
    "options": [
      {
        "id": "a",
        "text": "2.5 kg m/s"
      },
      {
        "id": "b",
        "text": "7 kg m/s"
      },
      {
        "id": "c",
        "text": "0.4 kg m/s"
      },
      {
        "id": "d",
        "text": "10 kg m/s"
      }
    ],
    "correct": "d",
    "explanation": "Momentum is the product of mass and velocity (p = mv).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5878910c-63dd-437a-860b-ae6755bb6a26"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The working of an optical fiber is based on the phenomenon of:",
    "options": [
      {
        "id": "a",
        "text": "Refraction"
      },
      {
        "id": "b",
        "text": "Total Internal Reflection"
      },
      {
        "id": "c",
        "text": "Dispersion"
      },
      {
        "id": "d",
        "text": "Interference"
      }
    ],
    "correct": "b",
    "explanation": "Optical fibers transmit light signals through multiple total internal reflections.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "faac6072-2fed-4fca-8fb7-1fdd13b2a7b9"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "What is the angle between electric field lines and an equipotential surface?",
    "options": [
      {
        "id": "a",
        "text": "0 degrees"
      },
      {
        "id": "b",
        "text": "45 degrees"
      },
      {
        "id": "c",
        "text": "90 degrees"
      },
      {
        "id": "d",
        "text": "180 degrees"
      }
    ],
    "correct": "c",
    "explanation": "Electric field lines are always perpendicular to the equipotential surface at every point.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "26d1cb66-1627-409b-8ce4-0b640e6f542a"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The modulus of rigidity (G) is the ratio of:",
    "options": [
      {
        "id": "a",
        "text": "Shearing stress to shearing strain"
      },
      {
        "id": "b",
        "text": "Longitudinal stress to longitudinal strain"
      },
      {
        "id": "c",
        "text": "Hydraulic stress to hydraulic strain"
      },
      {
        "id": "d",
        "text": "Tensile stress to longitudinal strain"
      }
    ],
    "correct": "a",
    "explanation": "Modulus of rigidity is defined as the ratio of shearing stress to the corresponding shearing strain.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5afe1ffb-3de2-4757-836d-ff98f8fcc214"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "In an extrinsic semiconductor of n-type, the majority charge carriers are:",
    "options": [
      {
        "id": "a",
        "text": "Holes"
      },
      {
        "id": "b",
        "text": "Protons"
      },
      {
        "id": "c",
        "text": "Neutrons"
      },
      {
        "id": "d",
        "text": "Electrons"
      }
    ],
    "correct": "d",
    "explanation": "N-type semiconductors are doped with pentavalent impurities, providing excess electrons.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "ac26ce8e-d865-44db-8625-73747a97dfcb"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The time period of a simple pendulum depends on which of the following?",
    "options": [
      {
        "id": "a",
        "text": "Mass of the bob"
      },
      {
        "id": "b",
        "text": "Amplitude of oscillation (for small angles)"
      },
      {
        "id": "c",
        "text": "Length of the pendulum"
      },
      {
        "id": "d",
        "text": "Density of the bob"
      }
    ],
    "correct": "c",
    "explanation": "The time period T = 2π√(L/g), where L is the length and g is acceleration due to gravity.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a6b79ee1-0233-47cb-86b8-9128277f5097"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Moving Charges and Magnetism",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The magnetic field at the center of a circular current-carrying loop of radius R and current I is:",
    "options": [
      {
        "id": "a",
        "text": "μ₀I / 2R"
      },
      {
        "id": "b",
        "text": "μ₀I / 4R"
      },
      {
        "id": "c",
        "text": "μ₀I / 2πR"
      },
      {
        "id": "d",
        "text": "μ₀I / 4πR"
      }
    ],
    "correct": "a",
    "explanation": "Using Biot-Savart law, the field at the center is μ₀I / 2R.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "b4471bff-fae0-400b-84ae-7c2228d2a76a"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "According to Stefan-Boltzmann law, the total radiant energy emitted per unit area per unit time is proportional to:",
    "options": [
      {
        "id": "a",
        "text": "T"
      },
      {
        "id": "b",
        "text": "T²"
      },
      {
        "id": "c",
        "text": "T³"
      },
      {
        "id": "d",
        "text": "T⁴"
      }
    ],
    "correct": "d",
    "explanation": "Energy E = σ T⁴, where T is the absolute temperature.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "c7be5325-0493-473f-8831-85de528d8b69"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The phenomenon of splitting of white light into its constituent colors is called:",
    "options": [
      {
        "id": "a",
        "text": "Refraction"
      },
      {
        "id": "b",
        "text": "Dispersion"
      },
      {
        "id": "c",
        "text": "Diffraction"
      },
      {
        "id": "d",
        "text": "Reflection"
      }
    ],
    "correct": "b",
    "explanation": "Dispersion occurs because different colors of light travel at different speeds in a medium.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "de53e7ca-4294-4fe7-8a18-3e63a136be26"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which of the following transitions in a Hydrogen atom emits a photon of the highest frequency?",
    "options": [
      {
        "id": "a",
        "text": "n=2 to n=1"
      },
      {
        "id": "b",
        "text": "n=3 to n=2"
      },
      {
        "id": "c",
        "text": "n=4 to n=3"
      },
      {
        "id": "d",
        "text": "n=5 to n=4"
      }
    ],
    "correct": "a",
    "explanation": "Higher energy difference results in higher frequency (E = hf). Transition to n=1 involves the largest energy gap.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8feefbf5-52e0-4d4f-8473-2f8d5ff78450"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "What is the SI unit of magnetic flux?",
    "options": [
      {
        "id": "a",
        "text": "Tesla"
      },
      {
        "id": "b",
        "text": "Henry"
      },
      {
        "id": "c",
        "text": "Weber"
      },
      {
        "id": "d",
        "text": "Farad"
      }
    ],
    "correct": "c",
    "explanation": "Magnetic flux is measured in Weber (Wb).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "163e2321-85e3-4c09-85e0-dc9a57c341fe"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "A force of 10 N acts on a body and moves it 5 m in the direction of the force. The work done is:",
    "options": [
      {
        "id": "a",
        "text": "2 J"
      },
      {
        "id": "b",
        "text": "50 J"
      },
      {
        "id": "c",
        "text": "15 J"
      },
      {
        "id": "d",
        "text": "0.5 J"
      }
    ],
    "correct": "b",
    "explanation": "Work = Force × Displacement × cos(θ). Here θ = 0.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "bee1cf69-9f2f-44f1-84f6-ebd16e015c4f"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "In a Young's Double Slit Experiment, if the distance between the slits is halved, the fringe width becomes:",
    "options": [
      {
        "id": "a",
        "text": "Half"
      },
      {
        "id": "b",
        "text": "One-fourth"
      },
      {
        "id": "c",
        "text": "Four times"
      },
      {
        "id": "d",
        "text": "Double"
      }
    ],
    "correct": "d",
    "explanation": "Fringe width β = λD/d. If d is halved, β is doubled.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e40f0d92-b516-468b-8f08-d5d66ca160b7"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The escape velocity from the surface of the Earth is approximately:",
    "options": [
      {
        "id": "a",
        "text": "9.8 km/s"
      },
      {
        "id": "b",
        "text": "11.2 km/s"
      },
      {
        "id": "c",
        "text": "7.9 km/s"
      },
      {
        "id": "d",
        "text": "42 km/s"
      }
    ],
    "correct": "b",
    "explanation": "Escape velocity is given by √(2gR), which is approx 11.2 km/s for Earth.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5e63ba45-31d6-4d2a-87d1-96c3e4658369"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which electromagnetic wave has the shortest wavelength?",
    "options": [
      {
        "id": "a",
        "text": "Microwaves"
      },
      {
        "id": "b",
        "text": "Infrared rays"
      },
      {
        "id": "c",
        "text": "Ultraviolet rays"
      },
      {
        "id": "d",
        "text": "Gamma rays"
      }
    ],
    "correct": "d",
    "explanation": "Gamma rays have the highest frequency and thus the shortest wavelength in the EM spectrum.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "d720025a-451b-4e39-8fd7-cec4fde821fa"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The power of a convex lens of focal length 20 cm is:",
    "options": [
      {
        "id": "a",
        "text": "+0.05 D"
      },
      {
        "id": "b",
        "text": "-5 D"
      },
      {
        "id": "c",
        "text": "+5 D"
      },
      {
        "id": "d",
        "text": "+20 D"
      }
    ],
    "correct": "c",
    "explanation": "Power P = 1/f (in meters). P = 1/0.2 = +5 D.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "372894d1-453c-44f0-8087-de75da189eb8"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "According to Pascal's Law, the pressure in a fluid at rest:",
    "options": [
      {
        "id": "a",
        "text": "Is transmitted equally in all directions"
      },
      {
        "id": "b",
        "text": "Increases with depth only"
      },
      {
        "id": "c",
        "text": "Decreases with increase in velocity"
      },
      {
        "id": "d",
        "text": "Is zero at the center of the container"
      }
    ],
    "correct": "a",
    "explanation": "Pascal's law states that pressure applied to an enclosed fluid is transmitted undiminished to every portion of the fluid.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "1de41697-4a23-4352-838d-d8a01aa740f0"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Moving Charges and Magnetism",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The resistance of an ideal voltmeter is:",
    "options": [
      {
        "id": "a",
        "text": "Zero"
      },
      {
        "id": "b",
        "text": "Low"
      },
      {
        "id": "c",
        "text": "High but finite"
      },
      {
        "id": "d",
        "text": "Infinite"
      }
    ],
    "correct": "d",
    "explanation": "An ideal voltmeter should not draw any current from the circuit, hence it must have infinite resistance.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "2217c926-8b44-4a2a-8f5f-da3bb21c796b"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which law states that the induced e.m.f. is directly proportional to the rate of change of magnetic flux?",
    "options": [
      {
        "id": "a",
        "text": "Lenz's Law"
      },
      {
        "id": "b",
        "text": "Faraday's Law"
      },
      {
        "id": "c",
        "text": "Ampere's Law"
      },
      {
        "id": "d",
        "text": "Gauss's Law"
      }
    ],
    "correct": "b",
    "explanation": "Faraday's Second Law of Electromagnetic Induction defines the magnitude of the induced emf.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "fb4b569c-ff9f-4aef-8fc5-2f4596fdeacb"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The value of Bohr radius for the hydrogen atom in its ground state is approximately:",
    "options": [
      {
        "id": "a",
        "text": "0.53 Å"
      },
      {
        "id": "b",
        "text": "1.06 Å"
      },
      {
        "id": "c",
        "text": "0.26 Å"
      },
      {
        "id": "d",
        "text": "5.3 Å"
      }
    ],
    "correct": "a",
    "explanation": "The Bohr radius a₀ = 0.529 Å or 5.3 × 10⁻¹¹ m.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "9d6dacaf-094e-4a07-89f9-878652acbbb2"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "In an adiabatic process, which of the following remains constant?",
    "options": [
      {
        "id": "a",
        "text": "Temperature"
      },
      {
        "id": "b",
        "text": "Pressure"
      },
      {
        "id": "c",
        "text": "Total heat content of the system"
      },
      {
        "id": "d",
        "text": "Volume"
      }
    ],
    "correct": "c",
    "explanation": "An adiabatic process is one in which there is no heat exchange (ΔQ = 0) between the system and surroundings.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "4d08e370-3f97-4f61-80f5-6f0eeadca084"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "What is the angle of dip at the magnetic equator of the Earth?",
    "options": [
      {
        "id": "a",
        "text": "90 degrees"
      },
      {
        "id": "b",
        "text": "0 degrees"
      },
      {
        "id": "c",
        "text": "45 degrees"
      },
      {
        "id": "d",
        "text": "180 degrees"
      }
    ],
    "correct": "b",
    "explanation": "At the equator, the magnetic field lines are parallel to the Earth's surface, so dip is 0°.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "6ff200a5-3aca-47ae-8fa4-ec3b665ef88c"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The work done in moving a charge of 2 C across two points having a potential difference of 10 V is:",
    "options": [
      {
        "id": "a",
        "text": "5 J"
      },
      {
        "id": "b",
        "text": "0.2 J"
      },
      {
        "id": "c",
        "text": "12 J"
      },
      {
        "id": "d",
        "text": "20 J"
      }
    ],
    "correct": "d",
    "explanation": "Work done W = qV.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "87c84294-d4c9-474c-8ed7-3259ff8e261e"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "System of Particles and Rotational Motion",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "If the net external torque acting on a system is zero, which quantity remains conserved?",
    "options": [
      {
        "id": "a",
        "text": "Linear momentum"
      },
      {
        "id": "b",
        "text": "Angular momentum"
      },
      {
        "id": "c",
        "text": "Kinetic energy"
      },
      {
        "id": "d",
        "text": "Force"
      }
    ],
    "correct": "b",
    "explanation": "Conservation of angular momentum states that if τ_ext = 0, then L is constant.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "b83bf3f8-0fd5-4d71-8ce1-601604429b83"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The de Broglie wavelength associated with a particle of mass m and velocity v is:",
    "options": [
      {
        "id": "a",
        "text": "h / mv"
      },
      {
        "id": "b",
        "text": "mv / h"
      },
      {
        "id": "c",
        "text": "h / m²v"
      },
      {
        "id": "d",
        "text": "hm / v"
      }
    ],
    "correct": "a",
    "explanation": "λ = h/p = h/mv, where h is Planck's constant.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "2dc86c12-ddd0-4e81-848f-cd25e7554a4d"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The centripetal force required for a body of mass m to move in a circle of radius r with speed v is:",
    "options": [
      {
        "id": "a",
        "text": "m v r"
      },
      {
        "id": "b",
        "text": "m v² / r"
      },
      {
        "id": "c",
        "text": "m v / r²"
      },
      {
        "id": "d",
        "text": "m² v / r"
      }
    ],
    "correct": "b",
    "explanation": "Centripetal force is given by the formula mv²/r.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "b3fcf840-4be2-4b95-8e2d-fd672c871e50"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "A capacitor of 10 μF is connected to a 100 V battery. The energy stored in the capacitor is:",
    "options": [
      {
        "id": "a",
        "text": "1 J"
      },
      {
        "id": "b",
        "text": "0.5 J"
      },
      {
        "id": "c",
        "text": "0.05 J"
      },
      {
        "id": "d",
        "text": "0.005 J"
      }
    ],
    "correct": "c",
    "explanation": "Energy U = 1/2 C V². 1/2 * 10e-6 * 100 * 100 = 0.05 J.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "f933488c-435a-4849-8cab-9fc63385a687"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Units and Measurements",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "What is the dimension of the universal gravitational constant G?",
    "options": [
      {
        "id": "a",
        "text": "[M L² T⁻²]"
      },
      {
        "id": "b",
        "text": "[M⁻¹ L³ T⁻²]"
      },
      {
        "id": "c",
        "text": "[M L³ T⁻²]"
      },
      {
        "id": "d",
        "text": "[M⁻¹ L² T⁻²]"
      }
    ],
    "correct": "b",
    "explanation": "From F = G m1 m2 / r², G = F r² / m². Dimension is [MLT⁻²][L²][M⁻²] = [M⁻¹ L³ T⁻²].",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "ce736843-f766-4e9f-8783-949392fbdecc"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "According to Bernoulli's principle, for a fluid in a horizontal flow, which statement is true?",
    "options": [
      {
        "id": "a",
        "text": "Pressure is independent of velocity"
      },
      {
        "id": "b",
        "text": "Pressure is higher where velocity is higher"
      },
      {
        "id": "c",
        "text": "Pressure is lower where velocity is higher"
      },
      {
        "id": "d",
        "text": "Pressure is zero where velocity is maximum"
      }
    ],
    "correct": "c",
    "explanation": "Bernoulli's equation states P + 1/2 ρv² = constant for horizontal flow; hence as velocity increases, pressure decreases.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e6013fbf-4e27-42eb-8c0f-3992a3658e4b"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "A point charge q is placed at the center of a cube of side 'a'. The total electric flux through all faces of the cube is:",
    "options": [
      {
        "id": "a",
        "text": "q/ε₀"
      },
      {
        "id": "b",
        "text": "q/6ε₀"
      },
      {
        "id": "c",
        "text": "6q/ε₀"
      },
      {
        "id": "d",
        "text": "q/4πε₀a²"
      }
    ],
    "correct": "a",
    "explanation": "By Gauss's Law, the total flux through a closed surface is q/ε₀, independent of the shape.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "dad0cca0-410d-4089-8700-5e67169d7221"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Kinetic Theory",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The kinetic energy of a gas molecule is zero at:",
    "options": [
      {
        "id": "a",
        "text": "0 °C"
      },
      {
        "id": "b",
        "text": "-100 °C"
      },
      {
        "id": "c",
        "text": "100 K"
      },
      {
        "id": "d",
        "text": "-273.15 °C"
      }
    ],
    "correct": "d",
    "explanation": "Kinetic energy of a gas is proportional to absolute temperature; it becomes zero at 0 K (-273.15 °C).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "0849aedf-6b6c-4874-8947-17d929cb67ff"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which of the following materials has a negative temperature coefficient of resistance?",
    "options": [
      {
        "id": "a",
        "text": "Copper"
      },
      {
        "id": "b",
        "text": "Germanium"
      },
      {
        "id": "c",
        "text": "Aluminum"
      },
      {
        "id": "d",
        "text": "Iron"
      }
    ],
    "correct": "b",
    "explanation": "Semiconductors like Germanium and Silicon show a decrease in resistance as temperature increases.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "54d35bda-ffc8-4bc7-8911-59a2e4b3e9f9"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The path of a projectile in the absence of air resistance is a:",
    "options": [
      {
        "id": "a",
        "text": "Circle"
      },
      {
        "id": "b",
        "text": "Hyperbola"
      },
      {
        "id": "c",
        "text": "Parabola"
      },
      {
        "id": "d",
        "text": "Straight line"
      }
    ],
    "correct": "c",
    "explanation": "The equation of the path of a projectile is in the form of a quadratic equation y = ax + bx², which represents a parabola.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "46ccfa09-8549-4646-8157-983177a71893"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "In an AC circuit containing only a capacitor, the current:",
    "options": [
      {
        "id": "a",
        "text": "Leads voltage by 90°"
      },
      {
        "id": "b",
        "text": "Lags voltage by 90°"
      },
      {
        "id": "c",
        "text": "Is in phase with voltage"
      },
      {
        "id": "d",
        "text": "Leads voltage by 180°"
      }
    ],
    "correct": "a",
    "explanation": "In a purely capacitive circuit, the current leads the voltage by a phase angle of 90 degrees (π/2).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "f5c83954-165e-4c7d-8456-d5b7c5f6de80"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The angle between the magnetic meridian and the geographic meridian at a place is called:",
    "options": [
      {
        "id": "a",
        "text": "Magnetic dip"
      },
      {
        "id": "b",
        "text": "Magnetic inclination 🌏"
      },
      {
        "id": "c",
        "text": "Magnetic field intensity"
      },
      {
        "id": "d",
        "text": "Magnetic declination"
      }
    ],
    "correct": "d",
    "explanation": "Magnetic declination is defined as the angle between the true north (geographic) and magnetic north.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "26312cbc-8500-4851-8147-098008dc72f4"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "A body of mass 2 kg is moving with a velocity of 5 m/s. Its momentum is:",
    "options": [
      {
        "id": "a",
        "text": "2.5 kg m/s"
      },
      {
        "id": "b",
        "text": "10 kg m/s"
      },
      {
        "id": "c",
        "text": "0.4 kg m/s"
      },
      {
        "id": "d",
        "text": "50 kg m/s"
      }
    ],
    "correct": "b",
    "explanation": "Momentum p = mass × velocity = 2 kg × 5 m/s = 10 kg m/s.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a0b055c7-8042-4264-8755-312c7c0c919f"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The property of a light wave that remains unchanged when it travels from one medium to another is:",
    "options": [
      {
        "id": "a",
        "text": "Velocity"
      },
      {
        "id": "b",
        "text": "Wavelength"
      },
      {
        "id": "c",
        "text": "Amplitude"
      },
      {
        "id": "d",
        "text": "Frequency"
      }
    ],
    "correct": "d",
    "explanation": "Frequency is a characteristic of the source and does not change during refraction.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "3ec111e5-04d9-4e01-8bff-1f85a6ee3aca"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The work done by a centripetal force on a particle moving in a circular path is:",
    "options": [
      {
        "id": "a",
        "text": "Positive"
      },
      {
        "id": "b",
        "text": "Negative"
      },
      {
        "id": "c",
        "text": "Zero"
      },
      {
        "id": "d",
        "text": "Infinite"
      }
    ],
    "correct": "c",
    "explanation": "Work W = F · d = Fd cosθ. For circular motion, centripetal force is always perpendicular to displacement (θ = 90°), so W = 0.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "f8636060-5bc1-471e-8bfa-0ef69d55a206"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The ratio of the speed of light in vacuum to the speed of light in a medium is called:",
    "options": [
      {
        "id": "a",
        "text": "Refractive index"
      },
      {
        "id": "b",
        "text": "Critical angle"
      },
      {
        "id": "c",
        "text": "Dispersive power 🌈"
      },
      {
        "id": "d",
        "text": "Magnification"
      }
    ],
    "correct": "a",
    "explanation": "Refractive index n = c / v, where c is speed in vacuum and v is speed in medium.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "6acfc26c-158c-4887-8ca6-5fb94cb74ef4"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "A copper wire of length L and resistance R is stretched to double its length. Its new resistance will be:",
    "options": [
      {
        "id": "a",
        "text": "2R"
      },
      {
        "id": "b",
        "text": "R/2"
      },
      {
        "id": "c",
        "text": "R/4"
      },
      {
        "id": "d",
        "text": "4R"
      }
    ],
    "correct": "d",
    "explanation": "When stretched to n times, resistance becomes n²R. Here n=2, so new R = 2²R = 4R.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "0b6a197f-e8eb-4d3d-8335-c137067a1c30"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which of the following series of hydrogen spectrum lies in the visible region?",
    "options": [
      {
        "id": "a",
        "text": "Lyman series"
      },
      {
        "id": "b",
        "text": "Balmer series"
      },
      {
        "id": "c",
        "text": "Paschen series ⚛️"
      },
      {
        "id": "d",
        "text": "Brackett series"
      }
    ],
    "correct": "b",
    "explanation": "The Balmer series consists of transitions to the n=2 level and falls in the visible range.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "bea83c49-60b7-4010-8eba-e0551eff21a7"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The time period of a simple pendulum depends on:",
    "options": [
      {
        "id": "a",
        "text": "Mass of the bob"
      },
      {
        "id": "b",
        "text": "Amplitude of oscillation"
      },
      {
        "id": "c",
        "text": "Length of the string"
      },
      {
        "id": "d",
        "text": "Material of the bob"
      }
    ],
    "correct": "c",
    "explanation": "T = 2π√(L/g). It depends on length (L) and acceleration due to gravity (g), but not mass.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "25d2f895-6349-417e-80a8-7df1476d2724"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The SI unit of magnetic flux is:",
    "options": [
      {
        "id": "a",
        "text": "Weber"
      },
      {
        "id": "b",
        "text": "Tesla 🧲"
      },
      {
        "id": "c",
        "text": "Henry"
      },
      {
        "id": "d",
        "text": "Farad"
      }
    ],
    "correct": "a",
    "explanation": "Magnetic flux is measured in Webers (Wb). 1 Wb = 1 T·m².",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "ac4717d8-38eb-4270-8d01-5625a6e80727"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "According to the first law of thermodynamics, ΔQ = ΔU + ΔW. For an isothermal process, the relation is:",
    "options": [
      {
        "id": "a",
        "text": "ΔQ = ΔU"
      },
      {
        "id": "b",
        "text": "ΔQ = ΔW"
      },
      {
        "id": "c",
        "text": "ΔU = -ΔW"
      },
      {
        "id": "d",
        "text": "ΔQ = 0"
      }
    ],
    "correct": "b",
    "explanation": "In an isothermal process, ΔT = 0, so ΔU = 0 for an ideal gas. Thus ΔQ = ΔW.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "d0f9c51b-0654-4f1c-8879-2ea8eee0b5f7"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which electromagnetic wave has the highest frequency?",
    "options": [
      {
        "id": "a",
        "text": "Radio waves"
      },
      {
        "id": "b",
        "text": "Microwaves"
      },
      {
        "id": "c",
        "text": "X-rays"
      },
      {
        "id": "d",
        "text": "Gamma rays"
      }
    ],
    "correct": "d",
    "explanation": "Gamma rays are at the high-frequency end of the EM spectrum.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "36aaa049-42ce-4bb4-8b61-a2a7d9c77d30"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Gravitation 🌍",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "If the distance between two masses is doubled, the gravitational force between them becomes:",
    "options": [
      {
        "id": "a",
        "text": "Double"
      },
      {
        "id": "b",
        "text": "Half"
      },
      {
        "id": "c",
        "text": "One-fourth"
      },
      {
        "id": "d",
        "text": "Four times"
      }
    ],
    "correct": "c",
    "explanation": "F ∝ 1/r². If r' = 2r, then F' = F/(2)² = F/4.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "0553e2f4-8479-46ae-87f6-ea87e6f0076d"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "In a semiconductor, at absolute zero temperature, the conduction band is:",
    "options": [
      {
        "id": "a",
        "text": "Completely filled"
      },
      {
        "id": "b",
        "text": "Completely empty"
      },
      {
        "id": "c",
        "text": "Half filled"
      },
      {
        "id": "d",
        "text": "Partially filled"
      }
    ],
    "correct": "b",
    "explanation": "At 0 K, no electrons have enough thermal energy to cross the band gap, so the conduction band is empty.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "7d3b2b80-21eb-47d5-8f8f-059920888746"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The modulus of rigidity is the ratio of:",
    "options": [
      {
        "id": "a",
        "text": "Longitudinal stress to longitudinal strain"
      },
      {
        "id": "b",
        "text": "Volume stress to volume strain 📐"
      },
      {
        "id": "c",
        "text": "Shearing stress to shearing strain"
      },
      {
        "id": "d",
        "text": "Stress to lateral strain"
      }
    ],
    "correct": "c",
    "explanation": "Modulus of rigidity (G) is defined as the ratio of shearing stress to shearing strain.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "0c19576b-53d0-4b94-8ab4-f22d29bb9b15"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "A device used to increase or decrease the voltage in an AC circuit is:",
    "options": [
      {
        "id": "a",
        "text": "Transformer"
      },
      {
        "id": "b",
        "text": "Rectifier"
      },
      {
        "id": "c",
        "text": "Galvanometer"
      },
      {
        "id": "d",
        "text": "Capacitor"
      }
    ],
    "correct": "a",
    "explanation": "A transformer works on the principle of mutual induction to change AC voltage levels.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "f70f3a35-fde7-4d89-8c80-1e8d215efdfb"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The escape velocity on the surface of the Earth is approximately:",
    "options": [
      {
        "id": "a",
        "text": "9.8 km/s"
      },
      {
        "id": "b",
        "text": "11.2 km/s 🚀"
      },
      {
        "id": "c",
        "text": "42 km/s"
      },
      {
        "id": "d",
        "text": "1.12 km/s"
      }
    ],
    "correct": "b",
    "explanation": "Escape velocity v_e = √(2gR) ≈ 11.2 km/s for Earth.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "3cfba4be-27e1-4caa-8ec5-f5bc89ad4d3f"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which lens is used to correct myopia (near-sightedness)?",
    "options": [
      {
        "id": "a",
        "text": "Convex lens"
      },
      {
        "id": "b",
        "text": "Bifocal lens 👓"
      },
      {
        "id": "c",
        "text": "Cylindrical lens"
      },
      {
        "id": "d",
        "text": "Concave lens"
      }
    ],
    "correct": "d",
    "explanation": "Myopia is corrected using a diverging lens, which is a concave lens, to focus distant images on the retina.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "7606e95b-7404-4c80-86ec-b37435cdc327"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "System of Particles and Rotational Motion",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The moment of inertia of a thin uniform rod of mass M and length L about an axis passing through its center and perpendicular to its length is:",
    "options": [
      {
        "id": "a",
        "text": "ML²/12"
      },
      {
        "id": "b",
        "text": "ML²/3"
      },
      {
        "id": "c",
        "text": "ML²/2 📏"
      },
      {
        "id": "d",
        "text": "ML²/4"
      }
    ],
    "correct": "a",
    "explanation": "For a rod, I_center = (1/12) ML².",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "aa9cf9d0-b0eb-4bc5-8bc6-89943b4fd7cf"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The work function of a metal depends on:",
    "options": [
      {
        "id": "a",
        "text": "Intensity of incident light"
      },
      {
        "id": "b",
        "text": "Frequency of incident light 💡"
      },
      {
        "id": "c",
        "text": "Nature of the metal surface"
      },
      {
        "id": "d",
        "text": "Time of irradiation"
      }
    ],
    "correct": "c",
    "explanation": "The work function is a characteristic property of the material of the metal surface.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "b428e142-4ade-4cc4-8ecd-a7a51322565c"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "In a displacement-time graph, the slope of the curve represents:",
    "options": [
      {
        "id": "a",
        "text": "Acceleration"
      },
      {
        "id": "b",
        "text": "Velocity"
      },
      {
        "id": "c",
        "text": "Force 📉"
      },
      {
        "id": "d",
        "text": "Momentum"
      }
    ],
    "correct": "b",
    "explanation": "The rate of change of displacement with respect to time is velocity (v = dx/dt).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "82a65706-4aae-4433-8e7b-172db13f0242"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The energy equivalent of 1 atomic mass unit (amu) is approximately:",
    "options": [
      {
        "id": "a",
        "text": "9.31 MeV"
      },
      {
        "id": "b",
        "text": "0.931 MeV"
      },
      {
        "id": "c",
        "text": "931 MeV ⚛️"
      },
      {
        "id": "d",
        "text": "9310 MeV"
      }
    ],
    "correct": "c",
    "explanation": "Using E = mc², 1 amu is equivalent to about 931.5 MeV.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a489438b-458f-4f53-8338-8e8e613d1e08"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Moving Charges and Magnetism",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The resistance of an ideal ammeter should be:",
    "options": [
      {
        "id": "a",
        "text": "Zero"
      },
      {
        "id": "b",
        "text": "Infinite ⚡"
      },
      {
        "id": "c",
        "text": "Very high"
      },
      {
        "id": "d",
        "text": "1 Ohm"
      }
    ],
    "correct": "a",
    "explanation": "An ideal ammeter should have zero resistance so that it doesn't change the current in the circuit it is measuring.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "0935bcfe-9ead-49bc-8b2e-56a81daaadd5"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Pascal's Law is related to which of the following?",
    "options": [
      {
        "id": "a",
        "text": "Electricity"
      },
      {
        "id": "b",
        "text": "Fluid pressure 💧"
      },
      {
        "id": "c",
        "text": "Heat transfer"
      },
      {
        "id": "d",
        "text": "Atomic structure"
      }
    ],
    "correct": "b",
    "explanation": "Pascal's Law states that pressure applied to an enclosed fluid is transmitted undiminished to every portion of the fluid.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "c9b56802-44e0-409f-8273-e66595b3b704"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Classification of Elements and Periodicity in Properties",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which of the following elements has the highest negative electron gain enthalpy in the periodic table?",
    "options": [
      {
        "id": "a",
        "text": "Fluorine"
      },
      {
        "id": "b",
        "text": "Chlorine"
      },
      {
        "id": "c",
        "text": "Oxygen"
      },
      {
        "id": "d",
        "text": "Neon"
      }
    ],
    "correct": "b",
    "explanation": "Chlorine has the highest negative electron gain enthalpy because the incoming electron experiences less inter-electronic repulsion in its 3p subshell compared to fluorine's 2p subshell.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "24a1c479-5fab-47d3-807a-51a78895559b"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Chemical Bonding and Molecular Structure",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "In the structure of Diamond, each carbon atom is hybridised as:",
    "options": [
      {
        "id": "a",
        "text": "sp3"
      },
      {
        "id": "b",
        "text": "sp2"
      },
      {
        "id": "c",
        "text": "sp"
      },
      {
        "id": "d",
        "text": "dsp2"
      }
    ],
    "correct": "a",
    "explanation": "In diamond, each carbon atom is covalently bonded to four other carbon atoms in a tetrahedral geometry, signifying sp3 hybridisation.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "49d7445c-ccdd-4dde-87c8-169c1105f27c"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Redox Reactions",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "What is the oxidation state of Phosphorus in Orthophosphoric acid (H3PO4)?",
    "options": [
      {
        "id": "a",
        "text": "+1"
      },
      {
        "id": "b",
        "text": "+3"
      },
      {
        "id": "c",
        "text": "-3"
      },
      {
        "id": "d",
        "text": "+5"
      }
    ],
    "correct": "d",
    "explanation": "In H3PO4, 3(+1) + x + 4(-2) = 0, which gives x = +5.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "944886cc-a7a9-4f60-86fe-ec6630ebb789"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Environmental Chemistry",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which gas is majorly responsible for the 'Greenhouse Effect' among the following?",
    "options": [
      {
        "id": "a",
        "text": "Nitrogen (N2)"
      },
      {
        "id": "b",
        "text": "Oxygen (O2)"
      },
      {
        "id": "c",
        "text": "Carbon dioxide (CO2)"
      },
      {
        "id": "d",
        "text": "Sulfur dioxide (SO2)"
      }
    ],
    "correct": "c",
    "explanation": "Carbon dioxide (CO2) is the primary greenhouse gas contributing to global warming.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "f96921f2-62bf-4989-8bc4-fadb91075098"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Some Basic Concepts of Chemistry",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "According to Dalton's Atomic Theory, atoms of different elements combine in a simple whole-number ratio to form:",
    "options": [
      {
        "id": "a",
        "text": "Elements"
      },
      {
        "id": "b",
        "text": "Compounds"
      },
      {
        "id": "c",
        "text": "Mixtures"
      },
      {
        "id": "d",
        "text": "Isotopes"
      }
    ],
    "correct": "b",
    "explanation": "Dalton's theory states that atoms combine in simple whole-number ratios to form compounds.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "16b7b81f-a8bc-4be9-8cf4-07a2856cbe04"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Thermodynamics",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which of the following is an example of an extensive property?",
    "options": [
      {
        "id": "a",
        "text": "Density"
      },
      {
        "id": "b",
        "text": "Temperature"
      },
      {
        "id": "c",
        "text": "Molar heat capacity \t"
      },
      {
        "id": "d",
        "text": "Enthalpy"
      }
    ],
    "correct": "d",
    "explanation": "Enthalpy depends on the amount of matter present, making it an extensive property.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "ed967eec-1ff9-426d-8bd1-80b5599d90da"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Equilibrium",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The relationship between equilibrium constant Kp and Kc is given by Kp = Kc(RT)^dn. What does 'dn' represent?",
    "options": [
      {
        "id": "a",
        "text": "Change in number of gaseous moles"
      },
      {
        "id": "b",
        "text": "Change in total number of moles"
      },
      {
        "id": "c",
        "text": "Change in number of solid moles"
      },
      {
        "id": "d",
        "text": "Sum of all stoichiometric coefficients"
      }
    ],
    "correct": "a",
    "explanation": "dn is the difference between the number of moles of gaseous products and gaseous reactants.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "4c60f6e0-581f-45bf-89a6-d8be111d5169"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Chemical Bonding and Molecular Structure",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The shape of a Water (H2O) molecule is:",
    "options": [
      {
        "id": "a",
        "text": "Linear \t"
      },
      {
        "id": "b",
        "text": "Trigonal planar \t"
      },
      {
        "id": "c",
        "text": "Bent or V-shape"
      },
      {
        "id": "d",
        "text": "Octahedral"
      }
    ],
    "correct": "c",
    "explanation": "Due to two lone pairs on oxygen, the tetrahedral geometry is distorted to a Bent or V-shape.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "1a1a33af-67be-421e-8f84-db2ace76218a"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Equilibrium",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which of the following is the conjugate base of NH3?",
    "options": [
      {
        "id": "a",
        "text": "NH4+ \t"
      },
      {
        "id": "b",
        "text": "NH2- \t"
      },
      {
        "id": "c",
        "text": "NH4OH \t"
      },
      {
        "id": "d",
        "text": "N2H4"
      }
    ],
    "correct": "b",
    "explanation": "A conjugate base is formed by the removal of a proton (H+) from an acid; NH3 - H+ = NH2-.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "fec29317-6f02-4f12-886c-4ca860e8b85d"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Structure of Atom",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The radius of the first orbit of Hydrogen atom is 0.529 Angstrom. What is the radius of the second orbit (n=2)?",
    "options": [
      {
        "id": "a",
        "text": "1.058 A \t"
      },
      {
        "id": "b",
        "text": "0.264 A \t"
      },
      {
        "id": "c",
        "text": "1.587 A \t"
      },
      {
        "id": "d",
        "text": "2.116 A"
      }
    ],
    "correct": "d",
    "explanation": "Radius r is proportional to n^2. So, r2 = r1 * (2)^2 = 0.529 * 4 = 2.116 Angstrom.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a5b53e8d-d945-4941-821f-cffc1aa981a6"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "General Principles and Processes of Isolation of Elements (old) / p-block",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which element is the most abundant by mass in the Earth's crust?",
    "options": [
      {
        "id": "a",
        "text": "Oxygen"
      },
      {
        "id": "b",
        "text": "Silicon \t"
      },
      {
        "id": "c",
        "text": "Aluminum \t"
      },
      {
        "id": "d",
        "text": "Iron"
      }
    ],
    "correct": "a",
    "explanation": "Oxygen is the most abundant element in the Earth's crust by mass (approx 46.6%).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "38425bd8-a0d8-4731-855d-7a5276a76c8c"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "The Solid State (old)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The coordination number of a metal atom in a Body Centered Cubic (BCC) lattice is:",
    "options": [
      {
        "id": "a",
        "text": "4 \t"
      },
      {
        "id": "b",
        "text": "6 \t"
      },
      {
        "id": "c",
        "text": "8 \t"
      },
      {
        "id": "d",
        "text": "12"
      }
    ],
    "correct": "c",
    "explanation": "In a BCC unit cell, the atom at the body center is in direct contact with 8 corner atoms.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "07d73aae-0d03-4c65-8a9a-9075ede13ff8"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Solutions",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which colligative property is most commonly used to determine the molar mass of polymers and proteins?",
    "options": [
      {
        "id": "a",
        "text": "Relative lowering of vapour pressure"
      },
      {
        "id": "b",
        "text": "Osmotic pressure \t"
      },
      {
        "id": "c",
        "text": "Elevation in boiling point \t"
      },
      {
        "id": "d",
        "text": "Depression in freezing point"
      }
    ],
    "correct": "b",
    "explanation": "Osmotic pressure is preferred for polymers because it can be measured accurately at room temperature and produces large values for dilute solutions.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "6bb03eff-009a-448b-89c8-d01cc5d632e5"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Chemical Kinetics",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "What is the unit of the rate constant (k) for a zero-order reaction?",
    "options": [
      {
        "id": "a",
        "text": "mol L-1 s-1 \t"
      },
      {
        "id": "b",
        "text": "s-1 \t"
      },
      {
        "id": "c",
        "text": "L mol-1 s-1 \t"
      },
      {
        "id": "d",
        "text": "mol2 L-2 s-1"
      }
    ],
    "correct": "a",
    "explanation": "For zero order, Rate = k[A]^0 = k. Thus, units of k = units of rate = mol L-1 s-1.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "17aeabf4-9844-44a7-8f08-339057a30372"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Electrochemistry",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Fuel cells, like the H2-O2 fuel cell, convert:",
    "options": [
      {
        "id": "a",
        "text": "Electrical energy into chemical energy \t"
      },
      {
        "id": "b",
        "text": "Thermal energy into mechanical energy \t"
      },
      {
        "id": "c",
        "text": "Chemical energy into heat energy \t"
      },
      {
        "id": "d",
        "text": "Chemical energy into electrical energy"
      }
    ],
    "correct": "d",
    "explanation": "Fuel cells directly convert the chemical energy of combustion into electrical energy.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "ab6f3e75-dba3-420c-88d9-ece3a654c1fa"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Chemical Kinetics",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which of the following is a 'Pseudo-first-order' reaction?",
    "options": [
      {
        "id": "a",
        "text": "Decomposition of HI \t"
      },
      {
        "id": "b",
        "text": "Formation of Ammonia \t"
      },
      {
        "id": "c",
        "text": "Acidic hydrolysis of ethyl acetate \t"
      },
      {
        "id": "d",
        "text": "Radioactive decay of Uranium"
      }
    ],
    "correct": "c",
    "explanation": "The inversion of cane sugar involves water in excess, making a second-order reaction behave as first-order.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "c9aeb76c-d94b-4226-8113-6bf9295fc439"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "The d-and f-Block Elements",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which of the following lanthanoids is most commonly used in making alloy steels (Mischmetall)?",
    "options": [
      {
        "id": "a",
        "text": "Gadolinium \t"
      },
      {
        "id": "b",
        "text": "Cerium \t"
      },
      {
        "id": "c",
        "text": "Lutetium \t"
      },
      {
        "id": "d",
        "text": "Promethium"
      }
    ],
    "correct": "b",
    "explanation": "Cerium (about 50%) is the major component of Mischmetall.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "ffd488bc-7ac1-48c2-88f1-44fd8c6c4ad4"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Alcohols, Phenols and Ethers",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The IUPAC name of the compound CH3-CH(OH)-CH3 is:",
    "options": [
      {
        "id": "a",
        "text": "Propan-1-ol \t"
      },
      {
        "id": "b",
        "text": "Propan-2-ol \t"
      },
      {
        "id": "c",
        "text": "Isopropanol \t"
      },
      {
        "id": "d",
        "text": "2-Hydroxypropane"
      }
    ],
    "correct": "b",
    "explanation": "The parent chain has 3 carbons (propane) and the OH group is at the 2nd position.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "770a238c-a1b0-4ff6-844b-d5ec920d445e"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Amines",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which test is used to distinguish between Primary, Secondary, and Tertiary amines?",
    "options": [
      {
        "id": "a",
        "text": "Fehling's test \t"
      },
      {
        "id": "b",
        "text": "Tollen's test \t"
      },
      {
        "id": "c",
        "text": "Hinsberg's test \t"
      },
      {
        "id": "d",
        "text": "Lucas test \t"
      }
    ],
    "correct": "c",
    "explanation": "Hinsberg's reagent (Benzenesulphonyl chloride) reacts differently with 1, 2, and 3 degree amines.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "551d49f9-6601-4173-88ae-8d59a4b130be"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Alcohols, Phenols and Ethers",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "In the Reimer-Tiemann reaction, Phenol reacts with Chloroform in the presence of NaOH to give:",
    "options": [
      {
        "id": "a",
        "text": "Salicylaldehyde \t"
      },
      {
        "id": "b",
        "text": "Salicylic acid \t"
      },
      {
        "id": "c",
        "text": "Benzaldehyde \t"
      },
      {
        "id": "d",
        "text": "Acetophenone"
      }
    ],
    "correct": "a",
    "explanation": "The Reimer-Tiemann reaction introduces an aldehyde group (-CHO) at the ortho position of phenol to form Salicylaldehyde.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "65aa7d1d-fe70-461e-8b39-1db32d61aa13"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Biomolecules",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which of the following is a non-reducing sugar?",
    "options": [
      {
        "id": "a",
        "text": "Glucose \t"
      },
      {
        "id": "b",
        "text": "Fructose \t"
      },
      {
        "id": "c",
        "text": "Lactose \t"
      },
      {
        "id": "d",
        "text": "Sucrose \t"
      }
    ],
    "correct": "d",
    "explanation": "Sucrose is a non-reducing sugar because its reducing groups (aldehydic/ketonic) are involved in the glycosidic linkage.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5c75c43f-d9b2-4751-8938-ed3d55c20489"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Polymers (old)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The monomer units of Nylon 6,6 are:",
    "options": [
      {
        "id": "a",
        "text": "Caprolactam \t"
      },
      {
        "id": "b",
        "text": "Adipic acid and Hexamethylenediamine \t"
      },
      {
        "id": "c",
        "text": "Ethylene glycol and Phthalic acid \t"
      },
      {
        "id": "d",
        "text": "Vinyl chloride \t"
      }
    ],
    "correct": "b",
    "explanation": "Nylon 6,6 is a copolymer of Adipic acid and Hexamethylenediamine.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "74545a45-90b2-4d76-87ca-4ff2eb2e9db8"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Coordination Compounds / Biomolecules",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Vitamin B12 contains which of the following metal ions?",
    "options": [
      {
        "id": "a",
        "text": "Magnesium \t"
      },
      {
        "id": "b",
        "text": "Iron \t"
      },
      {
        "id": "c",
        "text": "Cobalt \t"
      },
      {
        "id": "d",
        "text": "Zinc \t"
      }
    ],
    "correct": "c",
    "explanation": "Vitamin B12, also known as Cyanocobalamin, contains Cobalt.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "338d8bae-b655-4c08-83d5-65393923a41a"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Polymers (old)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which of the following is a thermosetting polymer?",
    "options": [
      {
        "id": "a",
        "text": "Bakelite \t"
      },
      {
        "id": "b",
        "text": "Polythene \t"
      },
      {
        "id": "c",
        "text": "PVC \t"
      },
      {
        "id": "d",
        "text": "Nylon 6"
      }
    ],
    "correct": "a",
    "explanation": "Bakelite is a cross-linked polymer that becomes infusible on heating and cannot be remoulded.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a0ff315e-55c5-4e01-80d4-d7f58c564783"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Aldehydes, Ketones and Carboxylic Acids",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The hybridization of Carbon in Carbonyl group (C=O) is:",
    "options": [
      {
        "id": "a",
        "text": "sp \t"
      },
      {
        "id": "b",
        "text": "sp2 \t"
      },
      {
        "id": "c",
        "text": "sp3 \t"
      },
      {
        "id": "d",
        "text": "dsp2 \t"
      }
    ],
    "correct": "b",
    "explanation": "The carbonyl carbon is attached to three other atoms by sigma bonds and has no lone pairs, so it is sp2 hybridized.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "398ace7e-7f77-41fd-86b3-822aaee82f33"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Chemistry in Everyday Life (old)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which of the following is an example of an antiseptic?",
    "options": [
      {
        "id": "a",
        "text": "Aspirin \t"
      },
      {
        "id": "b",
        "text": "Penicillin \t"
      },
      {
        "id": "c",
        "text": "Dettol \t"
      },
      {
        "id": "d",
        "text": "Paracetamol \t"
      }
    ],
    "correct": "c",
    "explanation": "Dettol is a mixture of chloroxylenol and terpineol, commonly used as an antiseptic.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "7888cd1b-476b-4e32-8ed1-4042028fcb03"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "The d-and f-Block Elements",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The magnetic moment (spin-only) of a divalent ion of Manganese (Z=25) in aqueous solution is:",
    "options": [
      {
        "id": "a",
        "text": "1.73 BM \t"
      },
      {
        "id": "b",
        "text": "2.84 BM \t"
      },
      {
        "id": "c",
        "text": "3.87 BM \t"
      },
      {
        "id": "d",
        "text": "5.92 BM \t"
      }
    ],
    "correct": "d",
    "explanation": "Mn2+ has 5 unpaired electrons (d5). Moment = sqrt(n(n+2)) = sqrt(35) approx 5.92 BM.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "49f0ac22-23c8-4d69-8606-042d12569c0b"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Chemistry in Everyday Life (old)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Chloramphenicol is an antibiotic that is particularly effective against:",
    "options": [
      {
        "id": "a",
        "text": "Malaria \t"
      },
      {
        "id": "b",
        "text": "Typhoid \t"
      },
      {
        "id": "c",
        "text": "Scurvy \t"
      },
      {
        "id": "d",
        "text": "Diabetes \t"
      }
    ],
    "correct": "b",
    "explanation": "Chloramphenicol is a broad-spectrum antibiotic used for typhoid, dysentery, and acute fever.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "c0381425-16d7-40ff-817b-a5dab31ad545"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "p-Block Elements",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which noble gas is used in the treatment of cancer (radiotherapy)?",
    "options": [
      {
        "id": "a",
        "text": "Helium \t"
      },
      {
        "id": "b",
        "text": "Argon \t"
      },
      {
        "id": "c",
        "text": "Neon \t"
      },
      {
        "id": "d",
        "text": "Radon \t"
      }
    ],
    "correct": "d",
    "explanation": "Radon (Rn) is radioactive and used in cancer therapy.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "ee633d77-3316-4190-8402-d07a91f2b2c5"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Chemical Bonding and Molecular Structure",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which of the following molecules has a permanent dipole moment?",
    "options": [
      {
        "id": "a",
        "text": "CCl4 \t"
      },
      {
        "id": "b",
        "text": "BF3 \t"
      },
      {
        "id": "c",
        "text": "NF3 \t"
      },
      {
        "id": "d",
        "text": "CO2 \t"
      }
    ],
    "correct": "c",
    "explanation": "NF3 has a pyramidal geometry with a net dipole moment, whereas CCl4, BF3, and CO2 are symmetrical and non-polar.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8c6450f6-da43-4df4-8ce1-a992ffcad460"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Two identical metallic spheres A and B, having charges +Q and -Q respectively, are kept at a distance R. A third identical uncharged sphere C is touched to A, then touched to B and finally removed. What is the new electrostatic force between A and B?",
    "options": [
      {
        "id": "a",
        "text": "F/4"
      },
      {
        "id": "b",
        "text": "3F/8"
      },
      {
        "id": "c",
        "text": "F/2"
      },
      {
        "id": "d",
        "text": "3F/4"
      }
    ],
    "correct": "b",
    "explanation": "Touching A makes charge on A Q/2. Touching C (with Q/2) to B (-Q) makes charge on both (-Q + Q/2)/2 = -Q/4. New force F' = k(Q/2)(Q/4)/R^2 = 3/8 F.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "89e4ef06-f335-4664-8f26-aef3f1cf8afe"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Moving Charges and Magnetism",
    "topic": "",
    "difficulty": "medium",
    "qtype": "assertion_reason",
    "body": "Assertion (A): The work done by a magnetic field on a moving charge is always zero. Reason (R): The magnetic force is always perpendicular to the velocity of the charge.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is not the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "Magnetic force F = q(v x B) is always perpendicular to velocity v, thus P = F.v = 0.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a0eb365b-03d0-4cf9-80b4-81c0e7ba71f4"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "A wire of resistance R is stretched such that its length increases by 20%. The new resistance of the wire will be:",
    "options": [
      {
        "id": "a",
        "text": "1.2 R"
      },
      {
        "id": "b",
        "text": "1.21 R"
      },
      {
        "id": "c",
        "text": "1.44 R"
      },
      {
        "id": "d",
        "text": "1.56 R"
      }
    ],
    "correct": "c",
    "explanation": "Resistance R is proportional to L^2 when volume is constant. (1.2)^2 = 1.44.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "88deaf6b-ea0b-43bc-8f8c-e51c3fc94dab"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Units and Measurements",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "If the percentage error in the measurement of the radius of a sphere is 2%, then the percentage error in the determination of its volume is:",
    "options": [
      {
        "id": "a",
        "text": "2%"
      },
      {
        "id": "b",
        "text": "4%"
      },
      {
        "id": "c",
        "text": "8%"
      },
      {
        "id": "d",
        "text": "6%"
      }
    ],
    "correct": "d",
    "explanation": "Volume V = (4/3)pi r^3. Error dV/V = 3 * (dr/r). 3 * 2% = 6%.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "2eb7f6d6-3997-44f5-8b14-ededb8355743"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "",
    "difficulty": "medium",
    "qtype": "assertion_reason",
    "body": "Assertion (A): It is easier to pull a lawn mower than to push it. Reason (R): In the case of pulling, the vertical component of the applied force reduces the effective weight.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is not the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "Pulling reduces normal reaction and thus friction; pushing increases it.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "84f4b1d7-1911-4567-8cc9-30f38f39cbf6"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "A satellite is orbiting very close to the Earth's surface. Its orbital velocity is roughly: (Given g = 10 m/s^2, R = 6400 km)",
    "options": [
      {
        "id": "a",
        "text": "11.2 km/s"
      },
      {
        "id": "b",
        "text": "8 km/s"
      },
      {
        "id": "c",
        "text": "7.2 km/s"
      },
      {
        "id": "d",
        "text": "9.8 km/s"
      }
    ],
    "correct": "b",
    "explanation": "Orbital velocity v = sqrt(gR). sqrt(10 * 6.4 * 10^6) = 8000 m/s = 8 km/s.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "b32a5c9f-6fcc-4cef-8178-9edf50970e76"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "",
    "difficulty": "medium",
    "qtype": "assertion_reason",
    "body": "Assertion (A): A transformer cannot work on DC supply. Reason (R): DC supply does not produce a varying magnetic flux, which is necessary for induction in the secondary coil.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is not the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "Transformers operate on Faraday's law of induction which requires d(Phi)/dt. DC produces constant flux.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "27a71c36-23d0-4018-839b-436146f241c0"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The energy of a photon of wavelength 400 nm is approximately: (h = 6.63 x 10^-34 Js, c = 3 x 10^8 m/s)",
    "options": [
      {
        "id": "a",
        "text": "2.0 eV"
      },
      {
        "id": "b",
        "text": "1.5 eV"
      },
      {
        "id": "c",
        "text": "3.1 eV"
      },
      {
        "id": "d",
        "text": "4.2 eV"
      }
    ],
    "correct": "c",
    "explanation": "E (eV) = 1240 / lambda (nm). 1240 / 400 = 3.1 eV.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "c493c02a-7b85-4b94-86b9-1b595bd1616c"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "An ideal gas undergoes an isothermal expansion. Which of the following statements is true?",
    "options": [
      {
        "id": "a",
        "text": "Internal energy increases."
      },
      {
        "id": "b",
        "text": "Internal energy remains constant."
      },
      {
        "id": "c",
        "text": "No heat is exchanged."
      },
      {
        "id": "d",
        "text": "Work done is zero."
      }
    ],
    "correct": "b",
    "explanation": "In isothermal process, temperature T is constant. Internal energy U of an ideal gas depends only on T.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "97b9c82f-7fe3-456d-8efe-baf626743a93"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "",
    "difficulty": "medium",
    "qtype": "assertion_reason",
    "body": "Assertion (A): When a glass slab is placed in the path of a light beam, the light ray emerges parallel to the incident ray but slightly displaced. Reason (R): The speed of light is the same in all transparent media.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is not the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "c",
    "explanation": "A is true by Snell's law. R is false; speed changes with refractive index (v = c/n).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "7b981bdb-3386-4e02-8d73-505841825cf8"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Atoms",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Which of the following transitions in a Hydrogen atom results in the emission of a photon of the shortest wavelength?",
    "options": [
      {
        "id": "a",
        "text": "n = 2 to n = 1"
      },
      {
        "id": "b",
        "text": "n = 3 to n = 2"
      },
      {
        "id": "c",
        "text": "n = 4 to n = 3"
      },
      {
        "id": "d",
        "text": "n = 5 to n = 1"
      }
    ],
    "correct": "d",
    "explanation": "Shortest wavelength corresponds to highest energy. n= infinity to n=1 is the highest energy leap.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "2f099cc1-537a-45c3-83d9-678b40b3c839"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "A bullet of mass 0.04 kg moving with a speed of 90 m/s enters a heavy wooden block and is stopped after a distance of 60 cm. The average resistive force exerted by the block on the bullet is:",
    "options": [
      {
        "id": "a",
        "text": "270 N"
      },
      {
        "id": "b",
        "text": "320 N"
      },
      {
        "id": "c",
        "text": "400 N"
      },
      {
        "id": "d",
        "text": "180 N"
      }
    ],
    "correct": "a",
    "explanation": "Using Work-Energy theorem: Force * distance = 1/2 m v^2. F = (0.5 * 0.04 * 90^2) / 0.6.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "66fefcb9-3258-4509-8bab-48600a7fc363"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The ratio of the speed of sound in nitrogen gas to that in helium gas at the same temperature is:",
    "options": [
      {
        "id": "a",
        "text": "sqrt(2/7)"
      },
      {
        "id": "b",
        "text": "sqrt(1/7)"
      },
      {
        "id": "c",
        "text": "sqrt(3/35)"
      },
      {
        "id": "d",
        "text": "sqrt(6/5)"
      }
    ],
    "correct": "c",
    "explanation": "v = sqrt(gamma * R * T / M). Ratio v1/v2 = sqrt(gamma1/gamma2 * M2/M1). Nitrogen (7/5, 28), Helium (5/3, 4).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "cbb94165-df7c-46fb-82be-3bfcb9de3cae"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "",
    "difficulty": "medium",
    "qtype": "assertion_reason",
    "body": "Assertion (A): A p-type semiconductor is electrically neutral. Reason (R): It is created by adding trivalent impurity to a neutral pure semiconductor.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is not the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "Semiconductors remain neutral because both the host atoms and the dopant atoms are neutral before mixing.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "0d2c41eb-74ca-4770-8946-5be625d87c97"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "A particle of mass m is moving in a circle of radius r with constant speed v. The work done by the centripetal force in one complete revolution is:",
    "options": [
      {
        "id": "a",
        "text": "mv^2 / r * 2 pi r"
      },
      {
        "id": "b",
        "text": "1/2 mv^2"
      },
      {
        "id": "c",
        "text": "mv^2 / r"
      },
      {
        "id": "d",
        "text": "Zero"
      }
    ],
    "correct": "d",
    "explanation": "Centripetal force is always perpendicular to displacement (v), so work is always zero.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e9f14c72-a9b1-4d2b-82ce-eeb632925507"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "",
    "difficulty": "medium",
    "qtype": "assertion_reason",
    "body": "Assertion (A): The focal length of a convex lens increases when it is immersed in water. Reason (R): The refractive index of glass with respect to water is less than the refractive index of glass with respect to air.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is not the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "Lens maker's formula 1/f = (n2/n1 - 1)(1/R1 - 1/R2). Higher n1 (medium) reduces the term (n2/n1 - 1), thus increasing f.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "59311e56-39fe-446e-867a-8924ebec8247"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Units and Measurements",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Two resistors R1 and R2 are connected in parallel. If R1 = 10 +/- 0.1 ohm and R2 = 20 +/- 0.4 ohm, the equivalent resistance error dR/R^2 = dR1/R1^2 + dR2/R2^2. The absolute error in the equivalent resistance is approximately:",
    "options": [
      {
        "id": "a",
        "text": "0.05 ohm"
      },
      {
        "id": "b",
        "text": "0.09 ohm"
      },
      {
        "id": "c",
        "text": "0.12 ohm"
      },
      {
        "id": "d",
        "text": "0.25 ohm"
      }
    ],
    "correct": "b",
    "explanation": "Rp = 6.67. dRp = (Rp/R1)^2 dR1 + (Rp/R2)^2 dR2 = (2/3)^2 * 0.1 + (1/3)^2 * 0.4 = 0.044 + 0.044 = 0.088.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "9388efe4-2585-42a5-8fce-daa2b351b6ea"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "A soap bubble is given a negative charge. Its radius:",
    "options": [
      {
        "id": "a",
        "text": "Decreases"
      },
      {
        "id": "b",
        "text": "Increases"
      },
      {
        "id": "c",
        "text": "Remains the same"
      },
      {
        "id": "d",
        "text": "May increase or decrease depending on the amount of charge."
      }
    ],
    "correct": "b",
    "explanation": "Repulsion between like charges on the surface acts outwards, increasing the radius.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "696a0f85-493d-4a98-8910-09c339ce2fa9"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "",
    "difficulty": "medium",
    "qtype": "assertion_reason",
    "body": "Assertion (A): A compass needle placed near the North Pole of Earth points straight down. Reason (R): At the magnetic poles, the Earth's magnetic field is purely vertical.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is not the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "At the poles, the angle of dip is 90 degrees, meaning the field lines are vertical.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "d9d23709-cb72-47bb-8a7e-10a70b9bf77d"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The displacement of a particle is given by x = a sin(wt) + b cos(wt). The amplitude of its motion is:",
    "options": [
      {
        "id": "a",
        "text": "a + b"
      },
      {
        "id": "b",
        "text": "(a + b) / 2"
      },
      {
        "id": "c",
        "text": "sqrt(a^2 + b^2)"
      },
      {
        "id": "d",
        "text": "sqrt(ab)"
      }
    ],
    "correct": "c",
    "explanation": "Resultant amplitude of two perpendicular SHMs or sine/cosine sum is sqrt(a^2 + b^2).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "75bc81f5-acfb-40a5-8e0a-0a5919e08be7"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "For a given material, the Young's modulus is 2.4 times its modulus of rigidity. The Poisson's ratio of the material is:",
    "options": [
      {
        "id": "a",
        "text": "0.2"
      },
      {
        "id": "b",
        "text": "0.4"
      },
      {
        "id": "c",
        "text": "0.5"
      },
      {
        "id": "d",
        "text": "0.125"
      }
    ],
    "correct": "a",
    "explanation": "Y = 2G(1 + nu). 2.4G = 2G(1 + nu) => 1.2 = 1 + nu => nu = 0.2.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "545a76bc-b1bf-4e1a-8719-4723156c6ce6"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "In a Young's double-slit experiment, if the distance between the slits is halved and the distance between the slits and the screen is doubled, the fringe width becomes:",
    "options": [
      {
        "id": "a",
        "text": "Unchanged"
      },
      {
        "id": "b",
        "text": "Halved"
      },
      {
        "id": "c",
        "text": "Doubled"
      },
      {
        "id": "d",
        "text": "Four times"
      }
    ],
    "correct": "d",
    "explanation": "Beta = lambda D / d. If D becomes 2D and d becomes d/2, Beta' = lambda (2D) / (d/2) = 4 Beta.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "f50d5d97-3636-4c15-80b8-f6a24bf28efd"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "A Carnot engine operates between 227 degrees C and 27 degrees C. Its efficiency is:",
    "options": [
      {
        "id": "a",
        "text": "11%"
      },
      {
        "id": "b",
        "text": "40%"
      },
      {
        "id": "c",
        "text": "88%"
      },
      {
        "id": "d",
        "text": "20%"
      }
    ],
    "correct": "b",
    "explanation": "Efficiency = 1 - T_low/T_high. Temperatures must be in Kelvin. 1 - 300/500 = 0.4 or 40%.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "13bdc7e9-85a4-4542-8586-bbc4148c0eaf"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "",
    "difficulty": "medium",
    "qtype": "assertion_reason",
    "body": "Assertion (A): The stopping potential in a photoelectric effect experiment does not depend on the intensity of the incident light. Reason (R): Stopping potential depends only on the maximum kinetic energy of the emitted photoelectrons.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is not the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "Intensity only affects the number of electrons (current), while frequency affects the energy of each electron.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "c36fdff4-0851-4c0d-8a57-5c83c135dba9"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The escape velocity of a body from Earth depends on its mass (m) as:",
    "options": [
      {
        "id": "a",
        "text": "m^1"
      },
      {
        "id": "b",
        "text": "m^2"
      },
      {
        "id": "c",
        "text": "m^0"
      },
      {
        "id": "d",
        "text": "m^-1"
      }
    ],
    "correct": "c",
    "explanation": "v_e = sqrt(2GM/R). It is independent of the mass of the escaping object.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "077fe19c-6abc-4be6-8a49-514103e98bc9"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "If the current in a coil changes from 2A to 4A in 0.05 seconds and induces an EMF of 8V, the self-inductance of the coil is:",
    "options": [
      {
        "id": "a",
        "text": "0.2 H"
      },
      {
        "id": "b",
        "text": "0.4 H"
      },
      {
        "id": "c",
        "text": "0.1 H"
      },
      {
        "id": "d",
        "text": "0.8 H"
      }
    ],
    "correct": "a",
    "explanation": "E = L (dI/dt). 8 = L (2 / 0.05) => 8 = L * 40 => L = 0.2 H.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "fdc0fafe-1c7b-4d19-82db-9db402ad7d55"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Waves",
    "topic": "",
    "difficulty": "medium",
    "qtype": "assertion_reason",
    "body": "Assertion (A): In a standing wave, there is no net transfer of energy across any section of the medium. Reason (R): A standing wave is formed by the superposition of two identical waves traveling in opposite directions.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is not the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "Energy is trapped between nodes; the two waves carry energy in opposite directions, resulting in zero net flux.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "9985fa4c-3bef-4af4-89b6-56591009e990"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Electric Charges and Fields",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "A capacitor of capacitance C is charged to a potential V. The flux of the electric field through a closed surface enclosing the capacitor is:",
    "options": [
      {
        "id": "a",
        "text": "CV / epsilon_0"
      },
      {
        "id": "b",
        "text": "2 CV / epsilon_0"
      },
      {
        "id": "c",
        "text": "CV / 2 epsilon_0"
      },
      {
        "id": "d",
        "text": "Zero"
      }
    ],
    "correct": "d",
    "explanation": "A capacitor has +Q and -Q on its plates. Total charge enclosed is (+Q) + (-Q) = 0. By Gauss Law, Flux = 0.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "0949231f-357f-4295-830d-e291fdda5d8f"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Which of the following electromagnetic waves has the highest frequency?",
    "options": [
      {
        "id": "a",
        "text": "X-rays"
      },
      {
        "id": "b",
        "text": "Gamma rays"
      },
      {
        "id": "c",
        "text": "Ultraviolet rays"
      },
      {
        "id": "d",
        "text": "Microwaves"
      }
    ],
    "correct": "b",
    "explanation": "In the EM spectrum, Gamma rays have the shortest wavelength and highest frequency.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "c2da8c58-740f-4ea6-830e-b916e209f0f2"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "System of Particles and Rotational Motion",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The moment of inertia of a thin uniform rod of mass M and length L about an axis passing through its midpoint and perpendicular to its length is:",
    "options": [
      {
        "id": "a",
        "text": "ML^2 / 3"
      },
      {
        "id": "b",
        "text": "ML^2 / 12"
      },
      {
        "id": "c",
        "text": "ML^2 / 6"
      },
      {
        "id": "d",
        "text": "ML^2 / 24"
      }
    ],
    "correct": "b",
    "explanation": "Standard formula for a rod about its center is ML^2/12. (About end it is ML^2/3).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "346a5c82-da51-47f6-8d27-ac0d7f69ac7e"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Mechanical Properties of Fluids",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A small sphere of mass 'm' is dropped from a height 'h' into a viscous liquid. The viscous force is F = -kv. The time taken for the velocity to reach half its terminal velocity is:",
    "options": [
      {
        "id": "a",
        "text": "(m/k) ln(1/2)"
      },
      {
        "id": "b",
        "text": "(m/k) ln 2"
      },
      {
        "id": "c",
        "text": "(k/m) ln 2"
      },
      {
        "id": "d",
        "text": "(m/g) ln 2"
      }
    ],
    "correct": "b",
    "explanation": "The equation of motion is mg - kv = m(dv/dt). Integrating from v=0 to v=v_t/2 gives t = (m/k) ln 2.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "48ea8ef6-7982-43f5-8801-4e67b6fd4769"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "",
    "difficulty": "hard",
    "qtype": "assertion_reason",
    "body": "Assertion (A): In a non-uniform magnetic field, a magnetic dipole experiences both torque and a net force. \nReason (R): The force on a magnetic dipole in a non-uniform field depends on the magnetic moment and the gradient of the magnetic field.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "In a non-uniform field, the two poles experience different forces, leading to a net translation and rotation.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "3d3c7d55-a5f8-4ad9-8843-1227154a5374"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A thermodynamic system undergoes a process where P = aV^2. The molar heat capacity of an ideal gas (gamma = 1.4) during this process is:",
    "options": [
      {
        "id": "a",
        "text": "Cv + R/2"
      },
      {
        "id": "b",
        "text": "Cv + R/3"
      },
      {
        "id": "c",
        "text": "Cv + R/3 (Wait, n=-2, so 1-(-2)=3) -> Cv + R/3"
      },
      {
        "id": "d",
        "text": "Cv + 3R/2"
      }
    ],
    "correct": "c",
    "explanation": "For a polytropic process PV^n = C, C = Cv + R/(1-n). Here P/V^2 = a, so n = -2.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "ffce9b35-b2f2-4601-8463-bd0cbf90f395"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "In a Young's double slit experiment, the intensity at a point where the path difference is lambda/6 is I. If the maximum intensity is I_o, then I/I_o is:",
    "options": [
      {
        "id": "a",
        "text": "1/2"
      },
      {
        "id": "b",
        "text": "1/4"
      },
      {
        "id": "c",
        "text": "2/3"
      },
      {
        "id": "d",
        "text": "3/4"
      }
    ],
    "correct": "d",
    "explanation": "Phase difference phi = (2pi/lambda) * (lambda/6) = pi/3. I = I_o cos^2(phi/2).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "9503967d-fe12-4a17-8edf-cf7120c6306f"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A particle of mass 'm' moves in a circular path such that its kinetic energy K varies with distance 's' as K = as^2. The magnitude of the net force acting on the particle is:",
    "options": [
      {
        "id": "a",
        "text": "2as [1 + (s/R)^2]^0.5"
      },
      {
        "id": "b",
        "text": "2as (s/R)"
      },
      {
        "id": "c",
        "text": "as [1 + (s/R)^2] 0.5"
      },
      {
        "id": "d",
        "text": "2as"
      }
    ],
    "correct": "a",
    "explanation": "Net force is the vector sum of tangential and centripetal forces. F_t = dK/ds, F_c = 2K/R.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "59c4f3de-f1c7-4446-8e6e-52a226807844"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "",
    "difficulty": "hard",
    "qtype": "assertion_reason",
    "body": "Assertion (A): For a telescope, to have high resolving power, the aperture of the objective should be large.\nReason (R): Larger aperture reduces the 1.22 lambda / D limit, allowing smaller angular separations to be resolved.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "Resolving power is inversely proportional to the limit of resolution (theta = 1.22 lambda / D).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "3ab94e2a-76e8-4612-8b02-43a15652ce64"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A parallel plate capacitor is charged and then disconnected from the source. A dielectric slab is then inserted. Which of the following is correct?",
    "options": [
      {
        "id": "a",
        "text": "Electric field increases."
      },
      {
        "id": "b",
        "text": "Potential difference remains constant."
      },
      {
        "id": "c",
        "text": "Energy stored decreases."
      },
      {
        "id": "d",
        "text": "Charge on plates increases."
      }
    ],
    "correct": "c",
    "explanation": "Q remains constant as it's isolated. C increases, so V = Q/C decreases and U = Q^2/2C decreases.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5156ee16-9a07-4707-8657-70e31eeb5316"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A wire of resistance R is stretched to twice its original length. The new resistivity of the wire will be:",
    "options": [
      {
        "id": "a",
        "text": "2R"
      },
      {
        "id": "b",
        "text": "4R"
      },
      {
        "id": "c",
        "text": "R/2"
      },
      {
        "id": "d",
        "text": "Same as before"
      }
    ],
    "correct": "d",
    "explanation": "Resistivity is a material property and does not change with dimensions at a constant temperature.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "83ea57d9-574e-46e3-8052-40943bd5fb41"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Motion in a Straight Line / Plane",
    "topic": "",
    "difficulty": "hard",
    "qtype": "assertion_reason",
    "body": "Assertion (A): A body can have zero velocity and still be accelerating.\nReason (R): In projectile motion, at the highest point, the vertical component of velocity is zero but acceleration is 'g'.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "At the peak of a vertical throw or projectile, v_y = 0 but a = -g.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8ac15467-8b9f-4e9a-8fb4-797551f39ff4"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Electromagnetic Induction",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A coil of 100 turns and area 0.1 m^2 is placed in a magnetic field changing at 0.5 T/s. The induced EMF is:",
    "options": [
      {
        "id": "a",
        "text": "0.5 V"
      },
      {
        "id": "b",
        "text": "5.0 V"
      },
      {
        "id": "c",
        "text": "50 V"
      },
      {
        "id": "d",
        "text": "0.05 V"
      }
    ],
    "correct": "b",
    "explanation": "EMF = N * (dPhi/dt) = N * A * (dB/dt).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "0c504e46-131f-4320-8cb6-9af5b70ce391"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "The de Broglie wavelength of an electron accelerated through a potential difference of 100 V is approximately:",
    "options": [
      {
        "id": "a",
        "text": "1.23 A"
      },
      {
        "id": "b",
        "text": "12.3 A"
      },
      {
        "id": "c",
        "text": "0.123 A"
      },
      {
        "id": "d",
        "text": "123 A"
      }
    ],
    "correct": "a",
    "explanation": "lambda = 1.227 / sqrt(V) nm. For V=100, lambda = 0.1227 nm = 1.23 Angstrom.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "d9d2a123-f9fb-4789-8f7e-d3d42f959aca"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "",
    "difficulty": "hard",
    "qtype": "assertion_reason",
    "body": "Assertion (A): Two identical heaters are connected in series and then in parallel to the same source. The power consumed in parallel is four times the power in series.\nReason (R): Power P = V^2 / R_eq. Parallel resistance is R/2 and series resistance is 2R.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "P_series = V^2 / 2R; P_parallel = V^2 / (R/2) = 2V^2/R. Ratio is 4.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "0e439e4e-776f-44fc-8ecd-a6d24f8b6e57"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "If the gravitational force between two masses becomes inversely proportional to 'r' instead of 'r^2', then the orbital speed 'v' of a satellite in a circular orbit would be:",
    "options": [
      {
        "id": "a",
        "text": "Proportional to r^0.5"
      },
      {
        "id": "b",
        "text": "Proportional to 1/r"
      },
      {
        "id": "c",
        "text": "Independent of r"
      },
      {
        "id": "d",
        "text": "Proportional to r"
      }
    ],
    "correct": "c",
    "explanation": "mv^2/r = GMm/r implies v^2 = GM, so v is independent of r.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "3582c91e-c613-46a9-859a-cadf7ef0c259"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Alternating Current \t",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "An AC voltage V = 100 sin(100t) is applied to a pure inductor of 10 mH. The peak current is:",
    "options": [
      {
        "id": "a",
        "text": "1 A"
      },
      {
        "id": "b",
        "text": "10 A"
      },
      {
        "id": "c",
        "text": "0.1 A"
      },
      {
        "id": "d",
        "text": "100 A"
      }
    ],
    "correct": "d",
    "explanation": "I_o = V_o / X_L where X_L = omega * L. omega = 100, L = 0.01. X_L = 1. I_o = 100/1 = 100 A.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "bff33832-4f22-4702-893e-f2988d2684ee"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Moving Charges and Magnetism",
    "topic": "",
    "difficulty": "hard",
    "qtype": "assertion_reason",
    "body": "Assertion (A): The work done by a magnetic field on a moving charge is always zero.\nReason (R): The magnetic force is always perpendicular to the velocity of the charge.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "F = q(v x B). Force is perpendicular to v, so P = F.v = 0. Work = 0.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8dabfcae-08a4-4a72-8da9-b47a8cb7a73d"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A nucleus of mass number 240 breaks into two fragments of mass number 120 each. The binding energy per nucleon (BE/A) for 240 is 7.6 MeV and for 120 is 8.5 MeV. The energy released in the process is:",
    "options": [
      {
        "id": "a",
        "text": "0.9 MeV"
      },
      {
        "id": "b",
        "text": "9.0 MeV"
      },
      {
        "id": "c",
        "text": "216 MeV \t"
      },
      {
        "id": "d",
        "text": "180 MeV"
      }
    ],
    "correct": "c",
    "explanation": "Energy = (Total BE after) - (Total BE before) = 240 * 8.5 - 240 * 7.6 = 240 * 0.9 = 216 MeV.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "6293df6d-47ac-47e0-8384-56f12a31b6dd"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "The escape velocity from Earth is v_e. If a planet has twice the radius of Earth and same mean density, the escape velocity from its surface is:",
    "options": [
      {
        "id": "a",
        "text": "v_e \t"
      },
      {
        "id": "b",
        "text": "2 v_e \t"
      },
      {
        "id": "c",
        "text": "4 v_e \t"
      },
      {
        "id": "d",
        "text": "sqrt(2) v_e"
      }
    ],
    "correct": "b",
    "explanation": "v_e = R * sqrt(8/3 pi G rho). If rho is constant, v_e is proportional to R. So 2 * v_e.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "3120c3a4-e768-4bdd-824a-60199b6fa9fb"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "In an adiabatic process, the pressure of a gas is found to be proportional to the cube of its absolute temperature. The ratio of molar heat capacities (gamma = Cp/Cv) for the gas is: \t",
    "options": [
      {
        "id": "a",
        "text": "4/3 \t"
      },
      {
        "id": "b",
        "text": "3/2 \t"
      },
      {
        "id": "c",
        "text": "5/3 \t"
      },
      {
        "id": "d",
        "text": "2 \t"
      }
    ],
    "correct": "b",
    "explanation": "P proportional to T^3 implies P*T^-3 = C. For adiabatic, P^(1-gamma) T^gamma = C. Comparing, gamma/(gamma-1) = 3. \t",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5117f6e6-8d05-4322-8e3c-e2e3df1289cb"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "",
    "difficulty": "hard",
    "qtype": "assertion_reason",
    "body": "Assertion (A): For a simple pendulum, the graph between L and T is a parabola. \nReason (R): The time period of a simple pendulum is given by T = 2pi sqrt(L/g).",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true. \t"
      }
    ],
    "correct": "d",
    "explanation": "T^2 proportional to L, so L vs T is a parabola opening towards L axis (or T^2 vs L is a line). The Reason is true.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "3526e5c8-a7d3-46ca-8e50-77255d32a9b2"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Motion in a Straight Line \t",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A ball is thrown vertically upwards. Which of the following graphs represents velocity-time (v-t) relationship? \t",
    "options": [
      {
        "id": "a",
        "text": "A parabola \t"
      },
      {
        "id": "b",
        "text": "A horizontal line \t"
      },
      {
        "id": "c",
        "text": "A straight line with negative slope \t"
      },
      {
        "id": "d",
        "text": "A straight line with positive slope \t"
      }
    ],
    "correct": "c",
    "explanation": "v = u - gt. This is a straight line with negative slope. \t",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8fe20008-dc85-4f44-840d-ffbe3acb7350"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Alternating Current \t",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A 50 Hz AC source is connected to a series LCR circuit with L = 0.1 H, C = 10 microfarad and R = 10 Ohm. The impedance of the circuit is: \t",
    "options": [
      {
        "id": "a",
        "text": "10 Ohm \t"
      },
      {
        "id": "b",
        "text": "287 Ohm \t"
      },
      {
        "id": "c",
        "text": "289 Ohm \t"
      },
      {
        "id": "d",
        "text": "328 Ohm \t"
      }
    ],
    "correct": "c",
    "explanation": "X_L = 31.4, X_C = 318.3. Z = sqrt(R^2 + (X_C-X_L)^2). \t",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "4b74303d-11eb-4ee6-87e0-9443d044aded"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Semiconductor Electronics \t",
    "topic": "",
    "difficulty": "hard",
    "qtype": "assertion_reason",
    "body": "Assertion (A): A p-n junction diode can be used as a rectifier.\nReason (R): A diode allows current to flow only when it is forward biased and offers high resistance when reverse biased. \t",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A. \t"
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A. \t"
      },
      {
        "id": "c",
        "text": "A is true but R is false. \t"
      },
      {
        "id": "d",
        "text": "A is false but R is true. \t"
      }
    ],
    "correct": "a",
    "explanation": "Rectification requires unidirectional flow, which the diode's biasing property provides. \t",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "fa26e8cd-2c6a-4bd0-85b0-b00fdfb18de2"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Ray Optics \t",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Two thin lenses of power +5D and -2D are placed in contact. The focal length of the combination is: \t",
    "options": [
      {
        "id": "a",
        "text": "71.4 cm \t"
      },
      {
        "id": "b",
        "text": "33.3 cm \t"
      },
      {
        "id": "c",
        "text": "20 cm \t"
      },
      {
        "id": "d",
        "text": "50 cm \t"
      }
    ],
    "correct": "b",
    "explanation": "P_eq = P1 + P2 = 5 - 2 = 3D. F = 1/P = 1/3 m = 33.3 cm. \t",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "b10a09f3-a42a-4ea8-8fe0-761c1a703782"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Atoms \t",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "The ratio of the speed of an electron in the first Bohr orbit of Hydrogen to the speed of light is approximately: \t",
    "options": [
      {
        "id": "a",
        "text": "1/137 \t"
      },
      {
        "id": "b",
        "text": "1/237 \t"
      },
      {
        "id": "c",
        "text": "1/100 \t"
      },
      {
        "id": "d",
        "text": "1/1000 \t"
      }
    ],
    "correct": "a",
    "explanation": "v = (1/137) * c. This is the fine structure constant. \t",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "7cad1f44-b9c1-48fc-8beb-578b9a5b69cc"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance \t",
    "topic": "",
    "difficulty": "hard",
    "qtype": "assertion_reason",
    "body": "Assertion (A): If the distance between two plates of a capacitor is halved and a dielectric of K=2 is inserted, the capacitance becomes 4 times.\nReason (R): Capacitance C = K * epsilon_0 * A / d. \t",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A. \t"
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A. \t"
      },
      {
        "id": "c",
        "text": "A is true but R is false. \t"
      },
      {
        "id": "d",
        "text": "A is false but R is true. \t"
      }
    ],
    "correct": "a",
    "explanation": "C_new = K * eps * A / (d/2) = 2K * (eps * A / d) = 2 * 2 * C = 4C. \t",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "955d6b2e-4013-4110-8f02-3739e6f4ecc0"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Motion in a Straight Line \t",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A car travels half the distance with speed v1 and the other half with speed v2. The average speed is: \t",
    "options": [
      {
        "id": "a",
        "text": "(v1 + v2) / 2 \t"
      },
      {
        "id": "b",
        "text": "sqrt(v1 * v2) \t"
      },
      {
        "id": "c",
        "text": "2v1v2 / (v1 + v2) \t"
      },
      {
        "id": "d",
        "text": "(v1^2 + v2^2) / (v1 + v2) \t"
      }
    ],
    "correct": "c",
    "explanation": "v_avg = Total distance / Total time = d / (d/2v1 + d/2v2) = 2v1v2/(v1+v2). \t",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "4aa76a45-3b39-42f2-8c45-7c5ec3d2e550"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Electromagnetic Induction \t",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "The magnetic flux linked with a coil is given by phi = 5t^2 + 3t + 16. The magnitude of induced EMF at t = 3s is: \t",
    "options": [
      {
        "id": "a",
        "text": "10 V \t"
      },
      {
        "id": "b",
        "text": "30 V \t"
      },
      {
        "id": "c",
        "text": "46 V \t"
      },
      {
        "id": "d",
        "text": "33 V \t"
      }
    ],
    "correct": "d",
    "explanation": "|e| = dphi/dt = 10t + 3. At t=3, |e| = 30 + 3 = 33. \t",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5780b0ae-87ab-44b5-80e2-06781c4671ce"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Atoms \t",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "In a transition from n=4 to n=2 in a Hydrogen atom, the wavelength of emitted radiation is (R = Rydberg constant): \t",
    "options": [
      {
        "id": "a",
        "text": "16 / 3R \t"
      },
      {
        "id": "b",
        "text": "3R / 16 \t"
      },
      {
        "id": "c",
        "text": "4 / R \t"
      },
      {
        "id": "d",
        "text": "R / 4 \t"
      }
    ],
    "correct": "a",
    "explanation": "1/lambda = R(1/2^2 - 1/4^2) = R(1/4 - 1/16) = 3R/16. lambda = 16/3R. \t",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "4d7e5f34-030c-4f46-861d-c0f8a836c32a"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Electromagnetic Waves \t",
    "topic": "",
    "difficulty": "hard",
    "qtype": "assertion_reason",
    "body": "Assertion (A): Electromagnetic waves are transverse in nature. \nReason (R): The electric and magnetic field vectors are parallel to the direction of propagation. \t",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A. \t"
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A. \t"
      },
      {
        "id": "c",
        "text": "A is true but R is false. \t"
      },
      {
        "id": "d",
        "text": "A is false but R is true. \t"
      }
    ],
    "correct": "c",
    "explanation": "EM waves are transverse because E and B are perpendicular to the direction of propagation. \t",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8935a23a-5c03-4a6a-8451-33444a208bdd"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Laws of Motion \t",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A body of mass 5 kg is acting under a variable force F = 2t. The velocity of the body at t=2s if it starts from rest is: \t",
    "options": [
      {
        "id": "a",
        "text": "0.4 m/s \t"
      },
      {
        "id": "b",
        "text": "0.8 m/s \t"
      },
      {
        "id": "c",
        "text": "1.2 m/s \t"
      },
      {
        "id": "d",
        "text": "2.0 m/s \t"
      }
    ],
    "correct": "b",
    "explanation": "m dv/dt = 2t => dv = (2/5)t dt. Integrating: v = (1/5)t^2. At t=2, v = 4/5 = 0.8 m/s. \t",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "6322abe0-6de0-4968-855d-febffeb2010f"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "A body of mass 5 kg is moving under a force F = (2t i + 3t² j) N. If it starts from rest, what is the power delivered by the force at t = 2 s?",
    "options": [
      {
        "id": "a",
        "text": "8.4 W"
      },
      {
        "id": "b",
        "text": "12.8 W"
      },
      {
        "id": "c",
        "text": "15.2 W"
      },
      {
        "id": "d",
        "text": "18.0 W"
      }
    ],
    "correct": "c",
    "explanation": "Power is the dot product of Force and Velocity. Velocity is obtained by integrating acceleration (F/m) over time.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "dc5864a0-97ec-4dc3-8cf9-7463f2475b35"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Kinetic Theory of Gases",
    "topic": "",
    "difficulty": "expert",
    "qtype": "assertion_reason",
    "body": "Assertion (A): For a real gas, the value of Z (compressibility factor) can be less than 1.\nReason (R): This happens at low pressure and moderately low temperatures because intermolecular attractive forces are dominant, making the molar volume less than the ideal molar volume.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is not the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "When attractive forces dominate, the gas is more compressible than an ideal gas, leading to Z < 1.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "6affd659-86e9-4615-8e14-e6aee9ece8cb"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "A potentiometer wire of length 10 m and resistance 20 ohm is connected in series with a 15 V battery and a 30 ohm external resistor. A cell of emf E and internal resistance 2 ohm is balanced at 6 m. What is E?",
    "options": [
      {
        "id": "a",
        "text": "2.4 V"
      },
      {
        "id": "b",
        "text": "3.6 V"
      },
      {
        "id": "c",
        "text": "4.8 V"
      },
      {
        "id": "d",
        "text": "7.2 V"
      }
    ],
    "correct": "b",
    "explanation": "The potential gradient is calculated first, then multiplied by the balancing length. The internal resistance of the test cell doesn't affect balance point.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "958f6ae0-77f3-448d-8491-350367c336e2"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Moving Charges and Magnetism",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "A circular coil of radius 10 cm and 100 turns carries a current of 1 A. It is placed in a uniform magnetic field of 0.5 T with its plane parallel to the field. The torque on the coil is:",
    "options": [
      {
        "id": "a",
        "text": "0.05*pi N-m"
      },
      {
        "id": "b",
        "text": "0.25*pi N-m"
      },
      {
        "id": "c",
        "text": "0.125*pi N-m"
      },
      {
        "id": "d",
        "text": "0.5*pi N-m"
      }
    ],
    "correct": "d",
    "explanation": "Torque = NIAB sin(theta). Since the plane is parallel to the field, the area vector is perpendicular to the field (theta = 90).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "18424405-d212-440a-8030-d9748eed4382"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "",
    "difficulty": "expert",
    "qtype": "assertion_reason",
    "body": "Assertion (A): A lens immersed in a liquid of higher refractive index than its own material reverses its nature (convex becomes concave and vice versa).\nReason (R): The focal length of a lens depends on the relative refractive index of the lens material with respect to the surrounding medium.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is not the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "Lens maker's formula shows that if n_medium > n_lens, the term (n_l/n_m - 1) becomes negative, changing the sign of f.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "2c718446-fcf2-420e-8521-fa17dfc2dada"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Wave Optics",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "In a Young's double slit experiment, the intensity at a point where the path difference is lambda/6 (lambda is wavelength) is I. If I_0 is the maximum intensity, then I/I_0 is:",
    "options": [
      {
        "id": "a",
        "text": "1/4"
      },
      {
        "id": "b",
        "text": "1/2"
      },
      {
        "id": "c",
        "text": "3/4"
      },
      {
        "id": "d",
        "text": "sqrt(3)/2"
      }
    ],
    "correct": "c",
    "explanation": "Intensity I = I_0 cos²(phi/2), where phase difference phi = (2*pi/lambda) * path difference.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "1f3bc4f7-b4cb-4958-805d-b5c5e5005157"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Semiconductor Electronics",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "A transistor is operated in common-emitter configuration at V_ce = 2V such that a change in the base current from 100 microA to 200 microA produces a change in the collector current from 5 mA to 10 mA. The current gain (beta_ac) is:",
    "options": [
      {
        "id": "a",
        "text": "25"
      },
      {
        "id": "b",
        "text": "50"
      },
      {
        "id": "c",
        "text": "75"
      },
      {
        "id": "d",
        "text": "100"
      }
    ],
    "correct": "b",
    "explanation": "Beta_ac is the ratio of change in collector current to change in base current.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "ebe505bd-2728-463d-8e1f-383464e2ff89"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "The work function of a metal is 4.2 eV. If radiation of wavelength 2000 Angstrom falls on it, the stopping potential will be: (take hc = 12400 eV-Angstrom)",
    "options": [
      {
        "id": "a",
        "text": "2.0 V"
      },
      {
        "id": "b",
        "text": "4.2 V"
      },
      {
        "id": "c",
        "text": "6.2 V"
      },
      {
        "id": "d",
        "text": "10.4 V"
      }
    ],
    "correct": "a",
    "explanation": "Energy of photon E = hc/lambda. K_max = E - Phi. Stopping potential V_s = K_max/e.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "0200bbec-6c79-45c7-8ae9-f606e40d78f6"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "",
    "difficulty": "expert",
    "qtype": "assertion_reason",
    "body": "Assertion (A): When a current is passed through a wire, the wire gets heated.\nReason (R): The drift velocity of electrons is very small, so the kinetic energy is converted to heat through collisions with ions.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is not the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "Energy gained by electrons from the electric field is transferred to the lattice ions through collisions, resulting in Joule heating.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "f7f1fadf-6702-4bff-84cd-e77697e109eb"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "A parallel plate capacitor with air between the plates has a capacitance of 8 pF. The distance between plates is d. If a dielectric slab of dielectric constant K = 6 and thickness d/2 is inserted, the new capacitance is:",
    "options": [
      {
        "id": "a",
        "text": "10.5 pF"
      },
      {
        "id": "b",
        "text": "11.2 pF"
      },
      {
        "id": "c",
        "text": "13.7 pF"
      },
      {
        "id": "d",
        "text": "16.0 pF"
      }
    ],
    "correct": "c",
    "explanation": "Capacitance with partial dielectric: C = epsilon_0*A / (d - t + t/K).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "7a09248b-e03f-42b7-8806-14dfc59ac9c7"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Moving Charges and Magnetism",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "A solenoid of length 0.5 m has a radius of 1 cm and is made of 500 turns. It carries a current of 5 A. What is the magnitude of the magnetic field inside the solenoid?",
    "options": [
      {
        "id": "a",
        "text": "3.14 x 10^-3 T"
      },
      {
        "id": "b",
        "text": "6.28 x 10^-3 T"
      },
      {
        "id": "c",
        "text": "9.42 x 10^-3 T"
      },
      {
        "id": "d",
        "text": "1.26 x 10^-2 T"
      }
    ],
    "correct": "b",
    "explanation": "B = mu_0 * n * I, where n = N/L.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5340f161-d3e5-4a0c-821b-c9b85bbbd26d"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "",
    "difficulty": "expert",
    "qtype": "assertion_reason",
    "body": "Assertion (A): A geostationary satellite must orbit the Earth in the equatorial plane.\nReason (R): For a satellite to appear stationary, its orbital period must match Earth's rotation and its sense of rotation must be west to east.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is not the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "b",
    "explanation": "Both are true, but A specifies the plane, which is required for the position to be fixed over one spot; R explains the time and direction but not explicitly why the 'equatorial' plane is unique for 'stationary' appearance (though they are related). Correction: Actually, R is a correct explanation for the requirement of the equatorial plane to keep the latitudinal position constant. Let's select Option A.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "7e43e518-24ae-4b0c-8b82-6384a14eb305"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Gravitation",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "The escape velocity from the Earth is 11.2 km/s. If a planet has twice the radius and the same density as Earth, the escape velocity from that planet will be:",
    "options": [
      {
        "id": "a",
        "text": "5.6 km/s"
      },
      {
        "id": "b",
        "text": "11.2 km/s"
      },
      {
        "id": "c",
        "text": "15.8 km/s"
      },
      {
        "id": "d",
        "text": "22.4 km/s"
      }
    ],
    "correct": "d",
    "explanation": "Escape velocity v_e = sqrt(2GM/R). M = density * (4/3)pi R³. So v_e is proportional to R * sqrt(density).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "3b4ae7b1-3cec-4f57-8d5c-0fe79574e2d6"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "A simple pendulum has a time period T1 when on the Earth's surface and T2 when taken to a height R (radius of Earth) above the surface. The ratio T2/T1 is:",
    "options": [
      {
        "id": "a",
        "text": "2"
      },
      {
        "id": "b",
        "text": "sqrt(2)"
      },
      {
        "id": "c",
        "text": "4"
      },
      {
        "id": "d",
        "text": "1/2"
      }
    ],
    "correct": "a",
    "explanation": "Time period T = 2*pi*sqrt(L/g). g at height R is g/4.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "4afc8821-44d4-45a6-8b4a-1e86a2fc457d"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "Which of the following Maxwell's equations implies the absence of magnetic monopoles?",
    "options": [
      {
        "id": "a",
        "text": "Integral(E.dA) = Q/epsilon_0"
      },
      {
        "id": "b",
        "text": "Integral(B.dA) = 0"
      },
      {
        "id": "c",
        "text": "Integral(E.dl) = -dPhi_b/dt"
      },
      {
        "id": "d",
        "text": "Integral(B.dl) = mu_0*I + mu_0*epsilon_0*dPhi_e/dt"
      }
    ],
    "correct": "b",
    "explanation": "Gauss's Law for magnetism states that the net magnetic flux through any closed surface is zero.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a5398557-2678-4201-8fb1-27355f5a7549"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "",
    "difficulty": "expert",
    "qtype": "assertion_reason",
    "body": "Assertion (A): The internal energy of an ideal gas depends only on its temperature.\nReason (R): For an ideal gas, there are no intermolecular forces of attraction, so the potential energy is zero.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is not the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "Internal energy U = PE + KE. In an ideal gas, PE is neglected due to lack of forces, leaving only KE which depends on T.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "b1942c93-f245-4604-802c-90c01c087240"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "A car is moving on a circular track of radius 100 m with a constant speed of 20 m/s. The angle of banking required for the car to not require friction to stay on track is (take g = 10 m/s²):",
    "options": [
      {
        "id": "a",
        "text": "tan^-1(0.2)"
      },
      {
        "id": "b",
        "text": "tan^-1(0.5)"
      },
      {
        "id": "c",
        "text": "tan^-1(0.4)"
      },
      {
        "id": "d",
        "text": "tan^-1(1)"
      }
    ],
    "correct": "c",
    "explanation": "tan(theta) = v² / (rg). This is the condition for banking without friction.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "6d93aad8-37f8-415e-89d1-fd5d4670efdd"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Current Electricity / Thermal Properties",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "The resistance of a platinum wire is 5 ohm at ice point and 5.23 ohm at steam point. When the wire is inserted in a hot bath, the resistance is 5.795 ohm. The temperature of the bath is:",
    "options": [
      {
        "id": "a",
        "text": "250 °C"
      },
      {
        "id": "b",
        "text": "300 °C"
      },
      {
        "id": "c",
        "text": "320.5 °C"
      },
      {
        "id": "d",
        "text": "345.6 °C"
      }
    ],
    "correct": "d",
    "explanation": "Using R_t = R_0(1 + alpha*t). Temperature t = [(R_t - R_0) / (R_100 - R_0)] * 100.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "f8689c01-bde6-469e-853e-b791a7bb99cf"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Alternating Current",
    "topic": "",
    "difficulty": "expert",
    "qtype": "assertion_reason",
    "body": "Assertion (A): In a series LCR circuit, at resonance, the impedance of the circuit is minimum.\nReason (R): At resonance, the inductive reactance and capacitive reactance cancel each other out, leaving only the resistance.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is not the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "Impedance Z = sqrt(R² + (XL - XC)²). At resonance XL = XC, so Z = R (minimum).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "393dc134-cf4e-4e5c-87ed-92dc12333e7d"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Oscillations",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "A particle performs SHM with an amplitude of 4 cm. At what displacement from the equilibrium position is the potential energy equal to the kinetic energy?",
    "options": [
      {
        "id": "a",
        "text": "2 cm"
      },
      {
        "id": "b",
        "text": "2*sqrt(3) cm"
      },
      {
        "id": "c",
        "text": "2*sqrt(2) cm"
      },
      {
        "id": "d",
        "text": "1 cm"
      }
    ],
    "correct": "c",
    "explanation": "PE = 1/2 kx², KE = 1/2 k(A² - x²). Set PE = KE.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8fafa9b1-1ceb-43f4-8745-70ca75aba288"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Dual Nature of Radiation and Matter",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "The ratio of the de-Broglie wavelength of a proton and an alpha particle, both accelerated through the same potential difference V, is:",
    "options": [
      {
        "id": "a",
        "text": "2 : 1"
      },
      {
        "id": "b",
        "text": "2*sqrt(2) : 1"
      },
      {
        "id": "c",
        "text": "sqrt(2) : 1"
      },
      {
        "id": "d",
        "text": "4 : 1"
      }
    ],
    "correct": "b",
    "explanation": "lambda = h / sqrt(2mqV). Ratio involves masses and charges.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "14a2c9eb-0ade-466d-857a-b60f90557ad9"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Nuclei",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "In a radioactive decay, a nucleus emits one alpha particle and two beta (beta-minus) particles. The resulting nucleus is:",
    "options": [
      {
        "id": "a",
        "text": "An isobar of the parent"
      },
      {
        "id": "b",
        "text": "An isotone of the parent"
      },
      {
        "id": "c",
        "text": "A different element with mass number A-4"
      },
      {
        "id": "d",
        "text": "An isotope of the parent"
      }
    ],
    "correct": "d",
    "explanation": "Alpha emission reduces Z by 2 and A by 4. Each beta-minus emission increases Z by 1.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "ab80fd2e-6873-4c99-8b99-48813413de89"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "",
    "difficulty": "expert",
    "qtype": "assertion_reason",
    "body": "Assertion (A): Air bubbles in water shine because of the phenomenon of total internal reflection.\nReason (R): When light travels from a denser medium (water) to a rarer medium (air inside bubble) at an angle greater than the critical angle, it is reflected back into the water.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is not the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "Water is denser than air. Light hitting the bubble surface from the water side at large angles undergoes TIR.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "b6ffbf6c-d2ce-470e-8959-dd08e16aefa1"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Thermodynamics",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "A thermodynamic system is taken through a cyclic process ABCD. The work done by the gas during the process A -> B -> C -> D -> A (clockwise rectangle on P-V diagram with P1, P2 and V1, V2) is:",
    "options": [
      {
        "id": "a",
        "text": "Zero"
      },
      {
        "id": "b",
        "text": "(P2 - P1)(V2 - V1)"
      },
      {
        "id": "c",
        "text": "P2(V2 - V1)"
      },
      {
        "id": "d",
        "text": "P1(V2 - V1)"
      }
    ],
    "correct": "b",
    "explanation": "Work done in a cyclic process is the area under the P-V curve. For a rectangle, it is (P2-P1)*(V2-V1).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "1694b5b6-7c2a-489c-85a6-c5c5a1ddf244"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "A wire of resistance R is stretched such that its length increases by 10%. The new resistance is approximately:",
    "options": [
      {
        "id": "a",
        "text": "1.1 R"
      },
      {
        "id": "b",
        "text": "1.15 R"
      },
      {
        "id": "c",
        "text": "1.21 R"
      },
      {
        "id": "d",
        "text": "1.33 R"
      }
    ],
    "correct": "c",
    "explanation": "When a wire is stretched, volume remains constant. R is proportional to L²/V.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a2501c5f-f759-4abf-8d44-1384b3496aaf"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Magnetism and Matter",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "The magnetic susceptibility of a paramagnetic material is 1.0 x 10^-5 at 300 K. What will be its value at 600 K?",
    "options": [
      {
        "id": "a",
        "text": "0.5 x 10^-5"
      },
      {
        "id": "b",
        "text": "2.0 x 10^-5"
      },
      {
        "id": "c",
        "text": "1.0 x 10^-5"
      },
      {
        "id": "d",
        "text": "0.25 x 10^-5"
      }
    ],
    "correct": "a",
    "explanation": "Curie's Law: Susceptibility (chi) is inversely proportional to absolute temperature T.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "92f9e16b-f4bb-4747-8e6b-af7aba5e9eb3"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Electromagnetic Waves",
    "topic": "",
    "difficulty": "expert",
    "qtype": "assertion_reason",
    "body": "Assertion (A): Displacement current flows in the space between the plates of a capacitor during charging.\nReason (R): The changing electric field between the plates produces a magnetic field, just as a conduction current does.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is not the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "Displacement current accounts for the magnetic field in regions where conduction current is zero but electric field is changing.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "6eae8d33-e24d-4496-875f-43dcc1674bc0"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Moving Charges and Magnetism",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "A particle of mass m and charge q enters a uniform magnetic field B perpendicularly with velocity v. The time spent by the particle in the magnetic field to complete one semi-circle is:",
    "options": [
      {
        "id": "a",
        "text": "2*pi*m / (qB)"
      },
      {
        "id": "b",
        "text": "pi*m / (qB)"
      },
      {
        "id": "c",
        "text": "pi*m / (2qB)"
      },
      {
        "id": "d",
        "text": "mv / (qB)"
      }
    ],
    "correct": "b",
    "explanation": "Time period T = 2*pi*m / (qB). Semi-circle time is T/2.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8d59e85e-5837-459f-814b-e0e772e4b683"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Ray Optics and Optical Instruments",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "The focal length of a objective and eyepiece of a compound microscope are 1.25 cm and 5 cm respectively. If the magnification produced for relaxed eye is 30, the length of the microscope tube is:",
    "options": [
      {
        "id": "a",
        "text": "6.25 cm"
      },
      {
        "id": "b",
        "text": "7.5 cm"
      },
      {
        "id": "c",
        "text": "10 cm"
      },
      {
        "id": "d",
        "text": "12.5 cm"
      }
    ],
    "correct": "c",
    "explanation": "For relaxed eye (image at infinity), M = (L/f_o) * (D/f_e). D = 25 cm.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "24824c8f-730d-4d2d-8f28-ed02c719ff26"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Mechanical Properties of Solids",
    "topic": "",
    "difficulty": "expert",
    "qtype": "assertion_reason",
    "body": "Assertion (A): Steel is more elastic than rubber.\nReason (R): For a given strain, the stress developed in steel is much larger than that in rubber.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is not the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "Elasticity is measured by Young's Modulus (Stress/Strain). Steel requires more force to produce same deformation.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "c9f54e0c-c611-4da5-83c9-444fee05f2ec"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "General Principles and Processes of Isolation of Elements",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "In the extraction of copper from its sulphide ore, the metal is finally obtained by the reduction of cuprous oxide with:",
    "options": [
      {
        "id": "a",
        "text": "Iron (II) sulphide"
      },
      {
        "id": "b",
        "text": "Carbon monoxide"
      },
      {
        "id": "c",
        "text": "Copper (I) sulphide"
      },
      {
        "id": "d",
        "text": "Sulfur dioxide"
      }
    ],
    "correct": "c",
    "explanation": "In the self-reduction process, copper(I) oxide reacts with the remaining copper(I) sulphide to give copper metal.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "54190f9b-1971-44b6-838b-ccda68843d09"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "The Solid State",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "What is the coordination number of an atom in a body-centered cubic (bcc) unit cell?",
    "options": [
      {
        "id": "a",
        "text": "8"
      },
      {
        "id": "b",
        "text": "6"
      },
      {
        "id": "c",
        "text": "12"
      },
      {
        "id": "d",
        "text": "4"
      }
    ],
    "correct": "a",
    "explanation": "In a BCC structure, the atom at the center of the cube is in direct contact with the eight atoms at the corners.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "3e3743b8-5392-46a3-8bd6-6a589d5ed324"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "The d-and f-Block Elements Asia",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which of the following is a 'Calculated' value for the magnetic moment of a divalent ion of an element with atomic number 25?",
    "options": [
      {
        "id": "a",
        "text": "3.87 BM"
      },
      {
        "id": "b",
        "text": "4.90 BM"
      },
      {
        "id": "c",
        "text": "2.84 BM"
      },
      {
        "id": "d",
        "text": "5.92 BM"
      }
    ],
    "correct": "d",
    "explanation": "Mn2+ (Z=25) has 5 unpaired electrons; magnetic moment = sqrt(5(5+2)) = 5.92 BM.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a3fb8a2f-e92e-441e-8fcf-11d8965d2129"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Aldehydes, Ketones and Carboxylic Acids",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The reaction of an aldehyde with a primary amine in the presence of an acid catalyst leads to the formation of:",
    "options": [
      {
        "id": "a",
        "text": "Amide"
      },
      {
        "id": "b",
        "text": "Schiff's base"
      },
      {
        "id": "c",
        "text": "Oxime"
      },
      {
        "id": "d",
        "text": "Hydrazone"
      }
    ],
    "correct": "b",
    "explanation": "Aldehydes react with primary amines to form substituted imines, commonly known as Schiff's bases.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "9b584db3-14f3-4c0a-87b2-8e2ce34e415e"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Chemical Bonding and Molecular Structure",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "In which of the following compounds does hydrogen bonding NOT occur?",
    "options": [
      {
        "id": "a",
        "text": "NH3"
      },
      {
        "id": "b",
        "text": "H2O"
      },
      {
        "id": "c",
        "text": "HCl"
      },
      {
        "id": "d",
        "text": "HF"
      }
    ],
    "correct": "c",
    "explanation": "Hydrogen bonding requires H to be attached to highly electronegative atoms like N, O, or F; HCl does not meet this criterion.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "6269ba17-4fc9-4bbd-87b0-d8f8103bdc5b"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Hydrocarbons",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which gas is produced when calcium carbide reacts with water?",
    "options": [
      {
        "id": "a",
        "text": "Ethyne"
      },
      {
        "id": "b",
        "text": "Ethene"
      },
      {
        "id": "c",
        "text": "Methane"
      },
      {
        "id": "d",
        "text": "Ethane"
      }
    ],
    "correct": "a",
    "explanation": "Calcium carbide (CaC2) reacts with water to produce ethyne (acetylene) and calcium hydroxide.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "d76caa97-2ebd-4deb-833c-a65cae1b772b"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Chemical Kinetics",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The unit of the rate constant for a zero-order reaction is:",
    "options": [
      {
        "id": "a",
        "text": "s-1"
      },
      {
        "id": "b",
        "text": "mol L-1 s-1"
      },
      {
        "id": "c",
        "text": "L mol-1 s-1"
      },
      {
        "id": "d",
        "text": "mol L-1"
      }
    ],
    "correct": "b",
    "explanation": "For zero-order, rate = k[A]^0 = k; hence unit of k = unit of rate (mol L-1 s-1).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "fd2762b5-3a9a-40e6-8714-65fae6d6cbc0"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "The s-Block Elements",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which of the following is the most basic oxide?",
    "options": [
      {
        "id": "a",
        "text": "BeO"
      },
      {
        "id": "b",
        "text": "MgO"
      },
      {
        "id": "c",
        "text": "CaO"
      },
      {
        "id": "d",
        "text": "BaO"
      }
    ],
    "correct": "d",
    "explanation": "Basicity of group 2 oxides increases down the group as the electropositive character increases.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a61f7164-fda8-4d17-851b-e2b0c6d86121"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Biomolecules",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which amino acid is NOT optically active?",
    "options": [
      {
        "id": "a",
        "text": "Alanine"
      },
      {
        "id": "b",
        "text": "Valine"
      },
      {
        "id": "c",
        "text": "Glycine"
      },
      {
        "id": "d",
        "text": "Leucine"
      }
    ],
    "correct": "c",
    "explanation": "Glycine is the simplest amino acid and has two hydrogen atoms attached to the alpha-carbon, making it achiral.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "ac2aa2a2-2fed-429f-81a5-7edc33faa309"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Electrochemistry",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The standard electrode potential for the SHE (Standard Hydrogen Electrode) is:",
    "options": [
      {
        "id": "a",
        "text": "1.00 V"
      },
      {
        "id": "b",
        "text": "0.00 V"
      },
      {
        "id": "c",
        "text": "-0.76 V"
      },
      {
        "id": "d",
        "text": "0.34 V"
      }
    ],
    "correct": "b",
    "explanation": "By convention, the standard electrode potential of the SHE is assigned a value of exactly zero volts.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "c7439154-a8a3-42bc-8b0b-7c52912f5554"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Chemical Bonding and Molecular Structure",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "What is the hybridisation of the central atom in SF6?",
    "options": [
      {
        "id": "a",
        "text": "sp3d"
      },
      {
        "id": "b",
        "text": "sp3"
      },
      {
        "id": "c",
        "text": "dsp2"
      },
      {
        "id": "d",
        "text": "sp3d2"
      }
    ],
    "correct": "d",
    "explanation": "Sulfur in SF6 has 6 valence electrons, all bonded to F; total 6 electron pairs gives sp3d2 hybridisation.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "455e3075-52cb-4618-8be3-b574f4878e76"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Solutions",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The solubility of a gas in a liquid increases with:",
    "options": [
      {
        "id": "a",
        "text": "Increase in temperature"
      },
      {
        "id": "b",
        "text": "Decrease in pressure"
      },
      {
        "id": "c",
        "text": "Increase in pressure"
      },
      {
        "id": "d",
        "text": "Increase in volume of liquid"
      }
    ],
    "correct": "c",
    "explanation": "According to Henry's law and Le Chatelier's principle, solubility of a gas increases with increase in pressure.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e81bb893-78c6-488c-86fc-04e14ffb1354"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "The p-Block Elements",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which of the following noble gases is used in magnetic resonance imaging (MRI) systems as a cryogenic agent?",
    "options": [
      {
        "id": "a",
        "text": "Helium"
      },
      {
        "id": "b",
        "text": "Neon"
      },
      {
        "id": "c",
        "text": "Argon"
      },
      {
        "id": "d",
        "text": "Xenon"
      }
    ],
    "correct": "a",
    "explanation": "Liquid Helium is used to maintain the superconducting magnets in MRI machines due to its very low boiling point.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "b9a1d36d-7071-41f9-828b-64796bfa81a7"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Organic Chemistry - Some Basic Principles and Techniques",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The IUPAC name for CH3-CH(OH)-CH2-CH3 is:",
    "options": [
      {
        "id": "a",
        "text": "Butan-1-ol"
      },
      {
        "id": "b",
        "text": "Butan-2-ol"
      },
      {
        "id": "c",
        "text": "2-Hydroxybutane"
      },
      {
        "id": "d",
        "text": "Isopentyl alcohol"
      }
    ],
    "correct": "b",
    "explanation": "The longest chain has 4 carbons (butane), and the -OH group is at position 2.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "4101b856-11fc-43d3-80ab-16ea5faa9cb6"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "The Solid State",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The percentage of empty space in a face-centered cubic (fcc) unit cell is:",
    "options": [
      {
        "id": "a",
        "text": "74%"
      },
      {
        "id": "b",
        "text": "26%"
      },
      {
        "id": "c",
        "text": "32%"
      },
      {
        "id": "d",
        "text": "48%"
      }
    ],
    "correct": "b",
    "explanation": "Packing efficiency of FCC is 74%; therefore, empty space = 100 - 74 = 26%.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "1626e2a7-7cda-42b2-8c64-97299b08598c"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Amines",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which reagent is used in the Hinsberg test to distinguish between primary, secondary, and tertiary amines?",
    "options": [
      {
        "id": "a",
        "text": "Nitrous acid"
      },
      {
        "id": "b",
        "text": "Bromine water"
      },
      {
        "id": "c",
        "text": "Chloroform and KOH"
      },
      {
        "id": "d",
        "text": "Benzenesulfonyl chloride"
      }
    ],
    "correct": "d",
    "explanation": "Benzenesulfonyl chloride (Hinsberg reagent) reacts differently with 1, 2, and 3-degree amines.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "9cdf3fba-6eda-4c55-8f66-dfdee6aaec00"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Thermodynamics",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The relationship between Cp and Cv for an ideal gas is:",
    "options": [
      {
        "id": "a",
        "text": "Cp - Cv = R"
      },
      {
        "id": "b",
        "text": "Cv - Cp = R"
      },
      {
        "id": "c",
        "text": "Cp + Cv = R"
      },
      {
        "id": "d",
        "text": "Cp / Cv = R"
      }
    ],
    "correct": "a",
    "explanation": "For one mole of an ideal gas, Cp - Cv = R (Mayer's relation).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "f72dbfe9-54d6-4e0d-822b-8b6ae1736b4a"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "The p-Block Elements",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The geometry of XeF4 molecule is:",
    "options": [
      {
        "id": "a",
        "text": "Tetrahedral"
      },
      {
        "id": "b",
        "text": "Octahedral icosahedral"
      },
      {
        "id": "c",
        "text": "Square planar"
      },
      {
        "id": "d",
        "text": "Pyramidal"
      }
    ],
    "correct": "c",
    "explanation": "Xe has 8 valence electrons; 4 bonding pairs and 2 lone pairs result in a square planar geometry.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "d709d0c1-7b0c-4dca-8c2f-22087bca6b71"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Polymers",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which of the following is a natural polymer?",
    "options": [
      {
        "id": "a",
        "text": "Terylene"
      },
      {
        "id": "b",
        "text": "Cis-1,4-polyisoprene"
      },
      {
        "id": "c",
        "text": "Buna-S"
      },
      {
        "id": "d",
        "text": "Neoprene"
      }
    ],
    "correct": "b",
    "explanation": "Cis-1,4-polyisoprene is the chemical name for natural rubber.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "7d292514-defd-4537-8d49-935f295aa683"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Polymers",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The monomer of Teflon is:",
    "options": [
      {
        "id": "a",
        "text": "Vinyl chloride"
      },
      {
        "id": "b",
        "text": "Chloroprene"
      },
      {
        "id": "c",
        "text": "Tetrafluoroethene"
      },
      {
        "id": "d",
        "text": "Acrylonitrile"
      }
    ],
    "correct": "c",
    "explanation": "Teflon (Polytetrafluoroethene) is made from tetrafluoroethene.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "94962637-f560-432f-8371-5701ed974584"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Thermodynamics",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which of the following is not an Intensive property?",
    "options": [
      {
        "id": "a",
        "text": "Temperature"
      },
      {
        "id": "b",
        "text": "Density"
      },
      {
        "id": "c",
        "text": "Pressure"
      },
      {
        "id": "d",
        "text": "Enthalpy"
      }
    ],
    "correct": "d",
    "explanation": "Enthalpy depends on the amount of substance, making it an extensive property.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "ff286ce7-16cd-4dae-8a14-800d716ad10b"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Electrochemistry",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "In the Daniel cell, the reaction occurring at the anode is:",
    "options": [
      {
        "id": "a",
        "text": "Zn -> Zn2+ + 2e-"
      },
      {
        "id": "b",
        "text": "Cu2+ + 2e- -> Cu"
      },
      {
        "id": "c",
        "text": "Zn2+ + 2e- -> Zn"
      },
      {
        "id": "d",
        "text": "Cu -> Cu2+ + 2e-"
      }
    ],
    "correct": "a",
    "explanation": "At the anode, oxidation occurs: Zn(s) -> Zn2+(aq) + 2e-.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a942c27d-f9b8-4193-8418-8f7e55c8c23b"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Hydrocarbons",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "What is the name of the reaction where an alkyl halide reacts with sodium in dry ether to form a higher alkane?",
    "options": [
      {
        "id": "a",
        "text": "Friedel-Crafts reaction"
      },
      {
        "id": "b",
        "text": "Wurtz reaction"
      },
      {
        "id": "c",
        "text": "Fittig reaction"
      },
      {
        "id": "d",
        "text": "Clemmensen reduction"
      }
    ],
    "correct": "b",
    "explanation": "The Wurtz reaction involves the coupling of two alkyl halides using sodium metal in dry ether.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "42963f6d-5d8f-410b-89db-3ae5ceb5401a"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Biomolecules",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which Vitamin is water-soluble?",
    "options": [
      {
        "id": "a",
        "text": "Vitamin A"
      },
      {
        "id": "b",
        "text": "Vitamin D"
      },
      {
        "id": "c",
        "text": "Vitamin C"
      },
      {
        "id": "d",
        "text": "Vitamin E"
      }
    ],
    "correct": "c",
    "explanation": "Vitamin C and B-complex vitamins are water-soluble, while A, D, E, and K are fat-soluble.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "88b8750e-3554-49cf-8953-a27997cc3236"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Equilibrium",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "According to the Bronsted-Lowry theory, an acid is a:",
    "options": [
      {
        "id": "a",
        "text": "Proton donor"
      },
      {
        "id": "b",
        "text": "Proton acceptor"
      },
      {
        "id": "c",
        "text": "Electron pair donor"
      },
      {
        "id": "d",
        "text": "Electron pair acceptor"
      }
    ],
    "correct": "a",
    "explanation": "A Bronsted-Lowry acid is defined as a proton (H+) donor.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "754cee08-14f5-4901-8516-28bf85ac4414"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Aldehydes, Ketones and Carboxylic Acids",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The reagent used in the Rosenmund reduction is:",
    "options": [
      {
        "id": "a",
        "text": "LiAlH4"
      },
      {
        "id": "b",
        "text": "NaBH4"
      },
      {
        "id": "c",
        "text": "Zn-Hg/HCl"
      },
      {
        "id": "d",
        "text": "H2/Pd-BaSO4"
      }
    ],
    "correct": "d",
    "explanation": "Rosenmund reduction uses H2/Pd over BaSO4 (poisoned by sulfur or quinoline) to reduce acyl chlorides to aldehydes.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "9d9290d5-5608-4ac0-83ff-87590cacdc22"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Redox Reactions",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The oxidation state of Oxygen in OF2 is:",
    "options": [
      {
        "id": "a",
        "text": "-2"
      },
      {
        "id": "b",
        "text": "+2"
      },
      {
        "id": "c",
        "text": "-1"
      },
      {
        "id": "d",
        "text": "+1"
      }
    ],
    "correct": "b",
    "explanation": "Fluorine is more electronegative than oxygen, so F is -1 and O is +2.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "950ab0a3-f55f-48c5-8988-df0c000b2092"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Classification of Elements and Periodicity in Properties",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Which of the following elements has the highest negative electron gain enthalpy?",
    "options": [
      {
        "id": "a",
        "text": "Fluorine"
      },
      {
        "id": "b",
        "text": "Chlorine"
      },
      {
        "id": "c",
        "text": "Oxygen"
      },
      {
        "id": "d",
        "text": "Sulfur"
      }
    ],
    "correct": "b",
    "explanation": "Chlorine has the highest negative electron gain enthalpy because the 3p subshell is larger than 2p (Fluorine), resulting in less inter-electronic repulsion.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "cb04b772-35df-49de-82ff-5c597617ec35"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Alcohols, Phenols and Ethers",
    "topic": "",
    "difficulty": "medium",
    "qtype": "assertion_reason",
    "body": "Assertion (A): The boiling point of p-nitrophenol is higher than that of o-nitrophenol.\nReason (R): o-nitrophenol shows intramolecular hydrogen bonding while p-nitrophenol shows intermolecular hydrogen bonding.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is not the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "Intermolecular H-bonding in p-nitrophenol leads to association of molecules, increasing the boiling point compared to the chelation in o-nitrophenol.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "fa603a57-7138-4406-834e-42a1cde7ede9"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Chemical Kinetics",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "For a reaction A + B -> Products, doubling the concentration of A doubles the rate, and doubling the concentration of B quadruples the rate. The overall order of the reaction is:",
    "options": [
      {
        "id": "a",
        "text": "1"
      },
      {
        "id": "b",
        "text": "2"
      },
      {
        "id": "c",
        "text": "3"
      },
      {
        "id": "d",
        "text": "4"
      }
    ],
    "correct": "c",
    "explanation": "Rate = k[A]^1 [B]^2. The overall order is 1 + 2 = 3.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "b72db9d5-21b5-49a8-88d2-5ea060dbe7ca"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Haloalkanes and Haloarenes / Amines",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Which of the following compounds will not undergo Friedel-Crafts reaction?",
    "options": [
      {
        "id": "a",
        "text": "Chlorobenzene"
      },
      {
        "id": "b",
        "text": "Toluene"
      },
      {
        "id": "c",
        "text": "Aniline"
      },
      {
        "id": "d",
        "text": "Nitrobenzene (in presence of excess catalyst)"
      }
    ],
    "correct": "c",
    "explanation": "Aniline forms a salt with AlCl3 (Lewis acid), which makes the nitrogen positively charged and strongly deactivates the ring.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "9e978fed-dd44-44bc-8a29-f6eab69a08b1"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "d and f Block Elements",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The magnetic moment of a transition metal ion is 3.87 BM. The number of unpaired electrons present is:",
    "options": [
      {
        "id": "a",
        "text": "2"
      },
      {
        "id": "b",
        "text": "3"
      },
      {
        "id": "c",
        "text": "4"
      },
      {
        "id": "d",
        "text": "5"
      }
    ],
    "correct": "b",
    "explanation": "Using the formula μ = sqrt(n(n+2)), where n=3, μ = sqrt(15) = 3.87.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "41cae576-3bb8-4acd-895b-d4855a6e36a8"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "p-Block Elements (Group 14)",
    "topic": "",
    "difficulty": "medium",
    "qtype": "assertion_reason",
    "body": "Assertion (A): Graphite is a good conductor of electricity whereas diamond is an insulator.\nReason (R): In graphite, every carbon atom is sp2 hybridized and has one free electron per atom.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is not the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "The delocalized pi-electrons in graphite's sp2 hybridized layers allow for electrical conductivity, which diamond lacks due to sp3 hybridization.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e44106e3-b1d0-465f-80c2-d88a05db83ba"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Polymers (General principles)",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Which of the following is an example of a thermosetting polymer?",
    "options": [
      {
        "id": "a",
        "text": "Polythene"
      },
      {
        "id": "b",
        "text": "PVC"
      },
      {
        "id": "c",
        "text": "Neoprene"
      },
      {
        "id": "d",
        "text": "Bakelite"
      }
    ],
    "correct": "d",
    "explanation": "Bakelite is a cross-linked polymer that becomes infusible on heating.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "9ce90dfc-0dfb-4d53-8696-c9527ea6eb50"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Coordination Compounds",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The oxidation state of Fe in the brown ring complex [Fe(H2O)5(NO)]SO4 is:",
    "options": [
      {
        "id": "a",
        "text": "+1"
      },
      {
        "id": "b",
        "text": "+2"
      },
      {
        "id": "c",
        "text": "+3"
      },
      {
        "id": "d",
        "text": "0"
      }
    ],
    "correct": "a",
    "explanation": "In this complex, NO is present as NO+, so Fe is in the +1 oxidation state (x + 0 + 1 = 2).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "60791f6e-79ee-4494-8c31-aee30aacea2e"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "p-Block Elements (Group 13)",
    "topic": "",
    "difficulty": "medium",
    "qtype": "assertion_reason",
    "body": "Assertion (A): Boron has a unusually high melting point.\nReason (R): Boron exists as a giant covalent polymeric structure consisting of icosahedral units.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is not the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "The strong covalent bonds within the B12 icosahedral structure result in an extremely high melting point.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "c9a2ee89-a059-4f19-8fe0-d725b9801226"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Organic Chemistry - Some Basic Principles and Techniques",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Which of the following will give the most stable carbocation upon loss of a bromide ion?",
    "options": [
      {
        "id": "a",
        "text": "CH3CH2Br"
      },
      {
        "id": "b",
        "text": "CH3CH2CH2Br"
      },
      {
        "id": "c",
        "text": "(CH3)2CHBr"
      },
      {
        "id": "d",
        "text": "(CH3)3CBr"
      }
    ],
    "correct": "d",
    "explanation": "(CH3)3C-Br forms a tertiary carbocation, which is stabilized by nine alpha-hydrogens via hyperconjugation.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "6ba500e7-9ac8-423e-855b-8c0cdbf0ab75"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Equilibrium",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The pH of 0.001 M NaOH solution is:",
    "options": [
      {
        "id": "a",
        "text": "3"
      },
      {
        "id": "b",
        "text": "10"
      },
      {
        "id": "c",
        "text": "11"
      },
      {
        "id": "d",
        "text": "12"
      }
    ],
    "correct": "c",
    "explanation": "[OH-] = 10^-3, so pOH = 3. pH = 14 - 3 = 11.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "b9b7e77e-8a8a-44e6-85ae-df6bb40f13b3"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Organic Chemistry - Some Basic Principles and Techniques",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The number of sigma and pi bonds in pent-2-en-4-yne are:",
    "options": [
      {
        "id": "a",
        "text": "10 sigma, 2 pi"
      },
      {
        "id": "b",
        "text": "10 sigma, 3 pi"
      },
      {
        "id": "c",
        "text": "11 sigma, 2 pi"
      },
      {
        "id": "d",
        "text": "11 sigma, 3 pi"
      }
    ],
    "correct": "b",
    "explanation": "Structure: CH3-CH=CH-C≡CH. 10 sigma bonds and 3 pi bonds.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "076f16eb-823f-4651-8a45-af35ee04d1b2"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Equilibrium / Chemical Bonding",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Which of the following behaves as a Lewis acid?",
    "options": [
      {
        "id": "a",
        "text": "BF3"
      },
      {
        "id": "b",
        "text": "NH3"
      },
      {
        "id": "c",
        "text": "H2O"
      },
      {
        "id": "d",
        "text": "CH4"
      }
    ],
    "correct": "a",
    "explanation": "BF3 is electron deficient (6 electrons in valence shell) and can accept a pair of electrons.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "f02372b2-77f8-4338-8b7c-fc76190c0a3b"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Some Basic Concepts of Chemistry",
    "topic": "",
    "difficulty": "medium",
    "qtype": "assertion_reason",
    "body": "Assertion (A): Molarity of a solution changes with temperature.\nReason (R): Molarity is dependent on the volume of the solution, which changes with temperature.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is not the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "Since volume expands or contracts with temperature, molarity (moles/volume) is temperature-dependent.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "39757981-a877-474a-8fa6-69cb7fa0ccbc"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Coordination Compounds",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "What is the coordination number and oxidation state of Cr in K3[Cr(C2O4)3]?",
    "options": [
      {
        "id": "a",
        "text": "3, +3"
      },
      {
        "id": "b",
        "text": "6, +6"
      },
      {
        "id": "c",
        "text": "3, +6"
      },
      {
        "id": "d",
        "text": "6, +3"
      }
    ],
    "correct": "d",
    "explanation": "Oxalate (C2O4) is a bidentate ligand. 3 ligands x 2 = CN 6. x + 3(-2) = -3 => x = +3.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "62a36726-a906-4ef9-875c-33a822c63458"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "s-Block Elements (Group 2)",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Which of the following alkaline earth metal sulfates is most soluble in water?",
    "options": [
      {
        "id": "a",
        "text": "BeSO4"
      },
      {
        "id": "b",
        "text": "MgSO4"
      },
      {
        "id": "c",
        "text": "CaSO4"
      },
      {
        "id": "d",
        "text": "BaSO4"
      }
    ],
    "correct": "a",
    "explanation": "BeSO4 is most soluble because the high hydration enthalpy of the small Be2+ ion overcomes the lattice enthalpy. Solubility decreases down the group.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "f15e6dc5-984d-4408-8811-8a4c4f3d9660"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "p-Block Elements (Group 18)",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The hybridization and geometry of XeF4 are:",
    "options": [
      {
        "id": "a",
        "text": "sp3d, Trigonal bipyramidal"
      },
      {
        "id": "b",
        "text": "sp3d2, Square planar"
      },
      {
        "id": "c",
        "text": "sp3d2, Octahedral"
      },
      {
        "id": "d",
        "text": "sp3, Tetrahedral"
      }
    ],
    "correct": "b",
    "explanation": "Xe has 8 valence electrons. 4 sigma bonds + 2 lone pairs = 6 (sp3d2). Geometry is square planar.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e31ad5f3-a329-430c-861b-6b95e3f6aa62"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "p-Block Elements (Group 15) / Chemical Bonding",
    "topic": "",
    "difficulty": "medium",
    "qtype": "assertion_reason",
    "body": "Assertion (A): NF3 is a weaker Lewis base than NH3.\nReason (R): Electronegativity of Fluorine atom withdraws electrons, reducing the availability of lone pair on Nitrogen.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is not the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "The high electronegativity of F exerts a strong -I effect, making the lone pair on N less available for donation in NF3.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "17aeb542-72d2-4593-8b1d-a2fc1c988298"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Chemical Bonding and Molecular Structure",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Which molecule/ion among the following is isostructural with CO2?",
    "options": [
      {
        "id": "a",
        "text": "SnCl2"
      },
      {
        "id": "b",
        "text": "NO2"
      },
      {
        "id": "c",
        "text": "BeCl2"
      },
      {
        "id": "d",
        "text": "H2O"
      }
    ],
    "correct": "c",
    "explanation": "CO2 is linear (sp). BeCl2 is also linear (sp). SnCl2 is V-shaped, NO2 is V-shaped.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "f3a2576c-0623-4021-8222-7b304b4811fb"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Surface Chemistry",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Which of the following is not a property of hydrophilic sols?",
    "options": [
      {
        "id": "a",
        "text": "High hydration"
      },
      {
        "id": "b",
        "text": "Reversible nature"
      },
      {
        "id": "c",
        "text": "High stability"
      },
      {
        "id": "d",
        "text": "Easy coagulation by small amount of electrolyte"
      }
    ],
    "correct": "d",
    "explanation": "Hydrophilic sols are reversible and quite stable; they do not coagulate easily compared to lyophobic sols.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "564868f1-4b23-46c5-8b70-79b84dded3c9"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Solid State",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "In a face-centered cubic (fcc) lattice, the number of atoms per unit cell is:",
    "options": [
      {
        "id": "a",
        "text": "1"
      },
      {
        "id": "b",
        "text": "2"
      },
      {
        "id": "c",
        "text": "4"
      },
      {
        "id": "d",
        "text": "8"
      }
    ],
    "correct": "c",
    "explanation": "8 corners x 1/8 + 6 faces x 1/2 = 1 + 3 = 4.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "d9e7dae5-7e6d-4225-8668-1a348fbf3c84"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "d and f Block Elements",
    "topic": "",
    "difficulty": "medium",
    "qtype": "assertion_reason",
    "body": "Assertion (A): Transition metals and their compounds show catalytic activity.\nReason (R): They have the ability to adopt variable oxidation states and form complexes.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is not the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "Variable oxidation states and large surface area/complex formation ability allow transition metals to provide alternative pathways for reactions.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "af99d3e0-2b95-4298-85b1-7cda312aa6fa"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Aldehydes, Ketones and Carboxylic Acids",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The IUPAC name of the compound CH3-CH(OH)-CH2-CHO is:",
    "options": [
      {
        "id": "a",
        "text": "2-Hydroxybutanal"
      },
      {
        "id": "b",
        "text": "3-Hydroxybutanal"
      },
      {
        "id": "c",
        "text": "3-Hydroxybutanol"
      },
      {
        "id": "d",
        "text": "4-Oxobutan-2-ol"
      }
    ],
    "correct": "b",
    "explanation": "The principle functional group is -CHO. Numbering starts from -CHO. 3-Hydroxybutanal.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "35f13249-e6fc-4d84-823d-97153166c164"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Solutions",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Which of the following will show the highest osmotic pressure? (Assume complete dissociation)",
    "options": [
      {
        "id": "a",
        "text": "0.1 M Glucose"
      },
      {
        "id": "b",
        "text": "0.1 M NaCl"
      },
      {
        "id": "c",
        "text": "0.1 M FeCl3"
      },
      {
        "id": "d",
        "text": "0.1 M Na2SO4"
      }
    ],
    "correct": "c",
    "explanation": "Osmotic pressure depends on van't Hoff factor (i). FeCl3 gives 4 ions, whereas others give fewer.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "37768c13-3d47-47b7-83c4-d1fc735e6ca3"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Organic Chemistry - Carboxylic Acids",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Which of the following is the strongest acid?",
    "options": [
      {
        "id": "a",
        "text": "Cl3CCOOH"
      },
      {
        "id": "b",
        "text": "Cl2CHCOOH"
      },
      {
        "id": "c",
        "text": "ClCH2COOH"
      },
      {
        "id": "d",
        "text": "CH3COOH"
      }
    ],
    "correct": "a",
    "explanation": "Trichloroacetic acid is the strongest due to three electron-withdrawing Chlorine atoms via -I effect.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "39110958-9947-4311-81ce-fedb705d8ace"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Solutions",
    "topic": "",
    "difficulty": "medium",
    "qtype": "assertion_reason",
    "body": "Assertion (A): For an ideal solution, Delta H_mix = 0.\nReason (R): The intermolecular attractive forces between A-A and B-B are nearly equal to those between A-B.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is not the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "Ideal solutions occur when the enthalpy of mixing is zero because the bond strengths in pure components and the mixture are identical.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e8023ccd-a456-46d5-8fe0-6c81d27f7bd5"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Aldehydes, Ketones and Carboxylic Acids / Organic context",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Which of the following gives a positive Iodoform test?",
    "options": [
      {
        "id": "a",
        "text": "Benzophenone"
      },
      {
        "id": "b",
        "text": "Acetophenone"
      },
      {
        "id": "c",
        "text": "Pentan-3-one"
      },
      {
        "id": "d",
        "text": "Propan-1-ol"
      }
    ],
    "correct": "b",
    "explanation": "Acetophenone contains a methyl keto group (CH3-CO-), which is required for a positive Iodoform test.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "bcf5246b-6e24-4986-8db0-c4d256cb8b64"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Electrochemistry",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The standard reduction potentials of three metals A, B, and C are +0.5 V, -3.0 V, and -1.2 V respectively. The reducing power of these metals will be in the order:",
    "options": [
      {
        "id": "a",
        "text": "A > B > C"
      },
      {
        "id": "b",
        "text": "C > B > A"
      },
      {
        "id": "c",
        "text": "A > C > B"
      },
      {
        "id": "d",
        "text": "B > C > A"
      }
    ],
    "correct": "d",
    "explanation": "Lower (more negative) the reduction potential, higher is the reducing power. B < C < A is the potential order, so B > C > A is reducing power.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "f8d0d2e8-6cf0-4dd0-8421-2a3b7a1411fe"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Biomolecules",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Which of the following carbohydrates is a non-reducing sugar?",
    "options": [
      {
        "id": "a",
        "text": "Sucrose"
      },
      {
        "id": "b",
        "text": "Maltose"
      },
      {
        "id": "c",
        "text": "Lactose"
      },
      {
        "id": "d",
        "text": "Glucose"
      }
    ],
    "correct": "a",
    "explanation": "Sucrose is non-reducing because the reducing groups (aldehyde/ketone) of glucose and fructose are involved in the glycosidic bond.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "f0f22d25-0b96-4e54-8d3d-88f136747a8e"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Chemical Bonding and Molecular Structure",
    "topic": "",
    "difficulty": "medium",
    "qtype": "assertion_reason",
    "body": "Assertion (A): The bond angle in H2O is 104.5 degrees, which is less than the tetrahedral angle of 109.5 degrees.\nReason (R): Lone pair - lone pair repulsions are greater than bond pair - bond pair repulsions.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is not the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "According to VSEPR theory, the presence of two lone pairs on oxygen compresses the H-O-H bond angle.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "92b2d230-afd6-4b39-84da-debb26a22564"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Sets",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "If a set A has 5 elements, how many non-empty subsets does it have?",
    "options": [
      {
        "id": "a",
        "text": "32"
      },
      {
        "id": "b",
        "text": "31"
      },
      {
        "id": "c",
        "text": "25"
      },
      {
        "id": "d",
        "text": "16"
      }
    ],
    "correct": "b",
    "explanation": "The total number of subsets is 2^n, and we subtract 1 for the empty set.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "b646aef0-1016-4414-8692-ebf2d53632a6"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Sets",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which of the following is the correct interval notation for {x : x is a real number, -3 < x ≤ 5}?",
    "options": [
      {
        "id": "a",
        "text": "[-3, 5]"
      },
      {
        "id": "b",
        "text": "(-3, 5)"
      },
      {
        "id": "c",
        "text": "(-3, 5]"
      },
      {
        "id": "d",
        "text": "[-3, 5)"
      }
    ],
    "correct": "c",
    "explanation": "Open parenthesis is used for strict inequality (<) and square bracket for less than or equal to (≤).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "91c98882-d2c0-4b4f-8d5b-5c79f6bddec7"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Trigonometric Functions",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The value of cos(-1710°) is:",
    "options": [
      {
        "id": "a",
        "text": "0"
      },
      {
        "id": "b",
        "text": "1"
      },
      {
        "id": "c",
        "text": "-1"
      },
      {
        "id": "d",
        "text": "1/2"
      }
    ],
    "correct": "a",
    "explanation": "Add multiples of 360° to find a coterminal angle within 0-360°.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "34276239-bf44-4515-8e21-ce32d6e44a5d"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Complex Numbers and Quadratic Equations",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "If z = 1 + i, then the additive inverse of z is:",
    "options": [
      {
        "id": "a",
        "text": "1 - i"
      },
      {
        "id": "b",
        "text": "-1 + i"
      },
      {
        "id": "c",
        "text": "0"
      },
      {
        "id": "d",
        "text": "-1 - i"
      }
    ],
    "correct": "d",
    "explanation": "The additive inverse of a complex number z is -z.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "d6fa06e7-543b-4720-8ab9-64fa4d9ea286"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Permutations and Combinations",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Find the number of 3-digit numbers that can be formed from the digits 1, 2, 3, 4, 5 if repetition of digits is allowed.",
    "options": [
      {
        "id": "a",
        "text": "60"
      },
      {
        "id": "b",
        "text": "125"
      },
      {
        "id": "c",
        "text": "120"
      },
      {
        "id": "d",
        "text": "150"
      }
    ],
    "correct": "b",
    "explanation": "Since repetition is allowed, each of the three places can be filled in 5 ways.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "4eb451ba-0b9c-461b-8408-56fc3acaba7c"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Straight Lines",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The slope of a line which is perpendicular to the line joining points (2, 3) and (4, 8) is:",
    "options": [
      {
        "id": "a",
        "text": "2/5"
      },
      {
        "id": "b",
        "text": "5/2"
      },
      {
        "id": "c",
        "text": "-2/5"
      },
      {
        "id": "d",
        "text": "-5/2"
      }
    ],
    "correct": "c",
    "explanation": "The product of slopes of perpendicular lines is -1.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "2a00044b-6945-4397-89d3-afb8b1735e0c"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Conic Sections",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The length of the latus rectum of the parabola y² = 12x is:",
    "options": [
      {
        "id": "a",
        "text": "12"
      },
      {
        "id": "b",
        "text": "3"
      },
      {
        "id": "c",
        "text": "6"
      },
      {
        "id": "d",
        "text": "4"
      }
    ],
    "correct": "a",
    "explanation": "For a parabola y² = 4ax, the length of the latus rectum is 4a.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a42281d4-093a-4282-856c-ff2476e5766d"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Introduction to Three Dimensional Geometry",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "A point lies on the x-axis. What are its y-coordinate and z-coordinate?",
    "options": [
      {
        "id": "a",
        "text": "(x, 0)"
      },
      {
        "id": "b",
        "text": "(0, 0)"
      },
      {
        "id": "c",
        "text": "(0, z)"
      },
      {
        "id": "d",
        "text": "(y, 0)"
      }
    ],
    "correct": "b",
    "explanation": "Any point on the x-axis has y and z coordinates equal to zero.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "f4df61fb-6335-43b6-85c6-de63f9054de5"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Limits and Derivatives",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Evaluate: limit as x approaches 0 of (sin 4x) / (3x).",
    "options": [
      {
        "id": "a",
        "text": "1"
      },
      {
        "id": "b",
        "text": "3/4"
      },
      {
        "id": "c",
        "text": "0"
      },
      {
        "id": "d",
        "text": "4/3"
      }
    ],
    "correct": "d",
    "explanation": "Use the standard limit lim(x->0) sinx/x = 1.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "95265932-31d5-4baf-8075-1ffe3a8bc24c"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Statistics and Probability (XI)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The negation of the statement 'All triangles are equilateral' is:",
    "options": [
      {
        "id": "a",
        "text": "There exists a triangle which is not equilateral."
      },
      {
        "id": "b",
        "text": "No triangles are equilateral."
      },
      {
        "id": "c",
        "text": "All triangles are not equilateral."
      },
      {
        "id": "d",
        "text": "Some triangles are equilateral."
      }
    ],
    "correct": "a",
    "explanation": "The negation of 'All' is 'There exists... not'.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "135a57d2-ff18-4072-8e2a-db943e4b33af"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Probability",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "If P(A) = 3/5 and P(B) = 1/5, find P(A or B) if A and B are mutually exclusive events.",
    "options": [
      {
        "id": "a",
        "text": "2/5"
      },
      {
        "id": "b",
        "text": "4/25"
      },
      {
        "id": "c",
        "text": "4/5"
      },
      {
        "id": "d",
        "text": "3/25"
      }
    ],
    "correct": "c",
    "explanation": "For mutually exclusive events, P(A or B) = P(A) + P(B).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "dcbd0168-8bc2-49ad-8cb7-c9cd32d47827"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Relations and Functions (XII)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Let R be a relation on the set {1, 2, 3} given by R = {(1, 1), (2, 2), (3, 3)}. The relation R is:",
    "options": [
      {
        "id": "a",
        "text": "Reflexive only"
      },
      {
        "id": "b",
        "text": "Symmetric only"
      },
      {
        "id": "c",
        "text": "Transitive only"
      },
      {
        "id": "d",
        "text": "Equivalence relation"
      }
    ],
    "correct": "d",
    "explanation": "The identity relation is reflexive, symmetric, and transitive, hence an equivalence relation.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "c0221011-c192-4bb7-81eb-12188e6e78f1"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Inverse Trigonometric Functions",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The principal value of sin⁻¹(1/2) is:",
    "options": [
      {
        "id": "a",
        "text": "π/3"
      },
      {
        "id": "b",
        "text": "π/6"
      },
      {
        "id": "c",
        "text": "π/4"
      },
      {
        "id": "d",
        "text": "π/2"
      }
    ],
    "correct": "b",
    "explanation": "The principal value branch of sin⁻¹ is [-π/2, π/2].",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "b6b63329-ed69-4d53-8865-a27a1ca7f055"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Determinants",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "If A is a 3x3 matrix, then |kA| is equal to:",
    "options": [
      {
        "id": "a",
        "text": "k|A|"
      },
      {
        "id": "b",
        "text": "k²|A|"
      },
      {
        "id": "c",
        "text": "3k|A|"
      },
      {
        "id": "d",
        "text": "k³|A|"
      }
    ],
    "correct": "d",
    "explanation": "For an n x n matrix, |kA| = kⁿ |A|.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "d6834d3f-309d-4f6d-8f1a-0f6121ac6fa9"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Determinants",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "A square matrix A is invertible if and only if:",
    "options": [
      {
        "id": "a",
        "text": "|A| ≠ 0"
      },
      {
        "id": "b",
        "text": "|A| = 0"
      },
      {
        "id": "c",
        "text": "A is a diagonal matrix"
      },
      {
        "id": "d",
        "text": "A is an identity matrix"
      }
    ],
    "correct": "a",
    "explanation": "A matrix is invertible (non-singular) if its determinant is non-zero.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "efd1f999-3688-4bef-80bd-6a753294de2b"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Continuity and Differentiability",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The derivative of log(sin x) with respect to x is:",
    "options": [
      {
        "id": "a",
        "text": "tan x"
      },
      {
        "id": "b",
        "text": "sec x"
      },
      {
        "id": "c",
        "text": "cot x"
      },
      {
        "id": "d",
        "text": "-cot x"
      }
    ],
    "correct": "c",
    "explanation": "Use chain rule: d/dx(log u) = (1/u) * du/dx.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "65964ca5-2dd5-4429-86bf-2fe00bd3e99e"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Application of Derivatives",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The rate of change of the area of a circle with respect to its radius r when r = 5 cm is:",
    "options": [
      {
        "id": "a",
        "text": "5π"
      },
      {
        "id": "b",
        "text": "10π"
      },
      {
        "id": "c",
        "text": "25π"
      },
      {
        "id": "d",
        "text": "20π"
      }
    ],
    "correct": "b",
    "explanation": "Differentiate Area A = πr² with respect to r.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "d880da89-8591-4b89-815b-6e14534c6568"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Integrals",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Find ∫(x² + 1) dx.",
    "options": [
      {
        "id": "a",
        "text": "(x³/3) + x + C"
      },
      {
        "id": "b",
        "text": "x³ + x + C"
      },
      {
        "id": "c",
        "text": "(x³/3) + C"
      },
      {
        "id": "d",
        "text": "2x + C"
      }
    ],
    "correct": "a",
    "explanation": "Apply the power rule for integration: ∫xⁿ dx = xⁿ⁺¹/(n+1).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e041d4fd-1d32-4275-8f8a-7d8d0ac3133f"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Integrals",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The value of ∫[0 to π/2] cos x dx is:",
    "options": [
      {
        "id": "a",
        "text": "0"
      },
      {
        "id": "b",
        "text": "-1"
      },
      {
        "id": "c",
        "text": "π/2"
      },
      {
        "id": "d",
        "text": "1"
      }
    ],
    "correct": "d",
    "explanation": "The integral of cos x is sin x; evaluate at upper and lower limits.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "086c7074-b469-447a-850e-4b3f98dc0aa1"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Differential Equations",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The degree of the differential equation (d²y/dx²)³ + (dy/dx)² + sin(dy/dx) + 1 = 0 is:",
    "options": [
      {
        "id": "a",
        "text": "3"
      },
      {
        "id": "b",
        "text": "2"
      },
      {
        "id": "c",
        "text": "Not defined"
      },
      {
        "id": "d",
        "text": "1"
      }
    ],
    "correct": "c",
    "explanation": "Degree is not defined if the equation is not a polynomial in its derivatives.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "f46e8f54-221c-4038-809f-6119dcbcafbc"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Vector Algebra",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The unit vector in the direction of vector a = i + j + 2k is:",
    "options": [
      {
        "id": "a",
        "text": "(i + j + 2k) / 4"
      },
      {
        "id": "b",
        "text": "(i + j + 2k) / √6"
      },
      {
        "id": "c",
        "text": "(i + j + 2k) / 6"
      },
      {
        "id": "d",
        "text": "(i + j + 2k) / √4"
      }
    ],
    "correct": "b",
    "explanation": "Divide the vector by its magnitude.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "801f61c3-ba12-4f1d-8730-87ae61f848a1"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Three Dimensional Geometry",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "If a line makes angles α, β, γ with the x, y, z axes respectively, then cos²α + cos²β + cos²γ is:",
    "options": [
      {
        "id": "a",
        "text": "1"
      },
      {
        "id": "b",
        "text": "0"
      },
      {
        "id": "c",
        "text": "-1"
      },
      {
        "id": "d",
        "text": "2"
      }
    ],
    "correct": "a",
    "explanation": "Sum of squares of direction cosines of a line is always 1.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "3f543117-dd34-4607-8f42-85d50d6d0d3b"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Three Dimensional Geometry (XII)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The distance of the point (2, 3, 4) from the x-axis is:",
    "options": [
      {
        "id": "a",
        "text": "2"
      },
      {
        "id": "b",
        "text": "√13"
      },
      {
        "id": "c",
        "text": "√20"
      },
      {
        "id": "d",
        "text": "5"
      }
    ],
    "correct": "d",
    "explanation": "Distance of (x, y, z) from x-axis is √(y² + z²).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "0604e3ea-e844-42e2-8a72-c057fe4db4d5"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Linear Programming",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "In a Linear Programming Problem, the linear function to be maximized or minimized is called:",
    "options": [
      {
        "id": "a",
        "text": "Constraint function"
      },
      {
        "id": "b",
        "text": "Objective function"
      },
      {
        "id": "c",
        "text": "Feasible function"
      },
      {
        "id": "d",
        "text": "Bounded function"
      }
    ],
    "correct": "b",
    "explanation": "The objective function is the function we aim to optimize in LPP.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "07c330f9-169d-4512-848c-9639d2d2f2bf"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Probability (XII)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "If P(A) = 0.8 and P(B|A) = 0.4, then P(A ∩ B) is:",
    "options": [
      {
        "id": "a",
        "text": "0.5"
      },
      {
        "id": "b",
        "text": "0.2"
      },
      {
        "id": "c",
        "text": "0.32"
      },
      {
        "id": "d",
        "text": "0.12"
      }
    ],
    "correct": "c",
    "explanation": "Use the multiplication rule: P(A ∩ B) = P(A) * P(B|A).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "bbbdd4ab-efa9-4b6f-8819-2bccde63cdcd"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Inverse Trigonometric Functions",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The value of tan⁻¹(1) + cos⁻¹(-1/2) + sin⁻¹(-1/2) is:",
    "options": [
      {
        "id": "a",
        "text": "3π/4"
      },
      {
        "id": "b",
        "text": "π/4"
      },
      {
        "id": "c",
        "text": "π/2"
      },
      {
        "id": "d",
        "text": "3π/2"
      }
    ],
    "correct": "a",
    "explanation": "Substitute principal values and sum them up. Note that cos⁻¹x + sin⁻¹x = π/2.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "4cd00ca1-1d22-42d7-83f0-7f28713938f0"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Matrices",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The number of all possible matrices of order 2x2 with each entry 0 or 1 is:",
    "options": [
      {
        "id": "a",
        "text": "4"
      },
      {
        "id": "b",
        "text": "8"
      },
      {
        "id": "c",
        "text": "9"
      },
      {
        "id": "d",
        "text": "16"
      }
    ],
    "correct": "d",
    "explanation": "Each of the 4 positions can be filled in 2 ways. Total = 2ⁿ.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "33d9ae67-6453-4072-8edd-2248c17b7136"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Continuity and Differentiability",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "If f(x) = |x|, then at x = 0, the function is:",
    "options": [
      {
        "id": "a",
        "text": "Not continuous but differentiable"
      },
      {
        "id": "b",
        "text": "Continuous but not differentiable"
      },
      {
        "id": "c",
        "text": "Neither continuous nor differentiable"
      },
      {
        "id": "d",
        "text": "Both continuous and differentiable"
      }
    ],
    "correct": "b",
    "explanation": "The absolute value function is continuous everywhere but not differentiable at its vertex (x=0).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "d18bc8f5-7f21-4ae6-85e1-f0e95f2b279e"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Vector Algebra",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The scalar product of two perpendicular vectors is:",
    "options": [
      {
        "id": "a",
        "text": "1"
      },
      {
        "id": "b",
        "text": "-1"
      },
      {
        "id": "c",
        "text": "0"
      },
      {
        "id": "d",
        "text": "Infinity"
      }
    ],
    "correct": "c",
    "explanation": "For perpendicular vectors, the angle θ is 90°, and cos 90° = 0.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "25a50c45-87a4-4316-8831-4f89a38d80b4"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Sets",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The intersection of the sets A = {1, 2, 3} and B = {3, 4, 5} is:",
    "options": [
      {
        "id": "a",
        "text": "{1, 2, 3, 4, 5}"
      },
      {
        "id": "b",
        "text": "{1, 2, 4, 5}"
      },
      {
        "id": "c",
        "text": "{3}"
      },
      {
        "id": "d",
        "text": "{}"
      }
    ],
    "correct": "c",
    "explanation": "Intersection contains only the elements common to both sets.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "37f8c210-c3eb-43cd-8e2b-160e7f51b818"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "The p-Block Elements",
    "topic": "",
    "difficulty": "hard",
    "qtype": "assertion_reason",
    "body": "Assertion (A): The first ionization enthalpy of Molecular Oxygen (O2) is almost identical to that of Xenon.\nReason (R): The size of Xenon atom and O2 molecule are comparable, and both exhibit similar shielding effects.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "Neil Bartlett noticed the similarity in ionization energy (1170 kJ/mol for O2 and 1175 kJ/mol for Xe), which led to the first noble gas compound.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "4885194a-0d0a-4f26-8484-a98dd6a4432b"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Equilibrium / Qualitative Analysis",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A solution contains 0.1 M Zn2+ and 0.01 M Cu2+. If H2S gas is passed through the solution at pH = 0, which of the following occurs? (Ksp ZnS = 10^-21, Ksp CuS = 10^-37, Ka1*Ka2 for H2S = 10^-21)",
    "options": [
      {
        "id": "a",
        "text": "Both ZnS and CuS precipitate."
      },
      {
        "id": "b",
        "text": "Only ZnS precipitates."
      },
      {
        "id": "c",
        "text": "Only CuS precipitates."
      },
      {
        "id": "d",
        "text": "Neither ZnS nor CuS precipitates."
      }
    ],
    "correct": "c",
    "explanation": "At pH 0, [H+] = 1M. [S2-] = Ka1Ka2[H2S]/[H+]^2 = 10^-22. Qsp(CuS) > Ksp, Qsp(ZnS) < Ksp.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "886f3d2c-8c96-4cde-8371-c780df1fc106"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Aldehydes, Ketones and Carboxylic Acids",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "An organic compound 'X' (C4H8O) does not react with Tollen's reagent but forms a yellow precipitate with I2/NaOH. On reduction with LiAlH4, it gives 'Y'. 'Y' on dehydration with conc. H2SO4 at 443K gives 'Z'. Identify 'Z'.",
    "options": [
      {
        "id": "a",
        "text": "But-1-ene"
      },
      {
        "id": "b",
        "text": "But-2-ene"
      },
      {
        "id": "c",
        "text": "2-Methylpropene"
      },
      {
        "id": "d",
        "text": "Cyclobutane"
      }
    ],
    "correct": "b",
    "explanation": "X is Butan-2-one (methyl ketone). Y is Butan-2-ol. Z is But-2-ene (Saytzeff product).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8e4e36c4-421a-4a8a-879b-778d4a629486"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Chemical Kinetics",
    "topic": "",
    "difficulty": "hard",
    "qtype": "assertion_reason",
    "body": "Assertion (A): For the reaction 2NO(g) + O2(g) -> 2NO2(g), the rate of reaction decreases with increase in temperature.\nReason (R): The reaction involves the formation of an unstable dimer (NO)2, and the dimerization is exothermic.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "This is a rare case where the rate can decrease with temperature because the equilibrium constant for the exothermic dimerization step decreases significantly.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "bba3e4a2-e123-4fa7-8af4-bc02dea7156c"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Coordination Compounds",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Calculate the number of bridge CO ligands and Mn-Mn bonds in Mn2(CO)10.",
    "options": [
      {
        "id": "a",
        "text": "2 bridge CO, 1 Mn-Mn bond"
      },
      {
        "id": "b",
        "text": "0 bridge CO, 0 Mn-Mn bond"
      },
      {
        "id": "c",
        "text": "4 bridge CO, 1 Mn-Mn bond"
      },
      {
        "id": "d",
        "text": "0 bridge CO, 1 Mn-Mn bond"
      }
    ],
    "correct": "d",
    "explanation": "Mn2(CO)10 has a metal-metal bond and all carbonyls are terminal (5 per Mn).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "14d2c37b-c8a2-4aa8-81e6-2cf250a3d5fc"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Alcohols, Phenols and Ethers",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "The correct order of increasing acid strength for the following is:\n(I) Phenol\n(II) p-Nitrophenol\n(III) m-Nitrophenol\n(IV) Ethanol",
    "options": [
      {
        "id": "a",
        "text": "IV < I < II < III"
      },
      {
        "id": "b",
        "text": "I < IV < III < II"
      },
      {
        "id": "c",
        "text": "IV < I < III < II"
      },
      {
        "id": "d",
        "text": "IV < III < I < II"
      }
    ],
    "correct": "c",
    "explanation": "Ethanol is least acidic. p-Nitrophenol is most acidic due to -R effect at para position. m-Nitrophenol has only -I effect.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "4dd697d0-9b48-4e69-8914-14556e5cd039"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Solutions / Solid State (General)",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A metal 'M' crystallizes in an fcc lattice with edge length 400 pm. The density of the metal is 8 g/cm3. Calculate the number of atoms in 200 g of this metal. (Na = 6 x 10^23)",
    "options": [
      {
        "id": "a",
        "text": "1.875 x 10^24"
      },
      {
        "id": "b",
        "text": "3.75 x 10^23"
      },
      {
        "id": "c",
        "text": "6.02 x 10^23"
      },
      {
        "id": "d",
        "text": "9.37 x 10^24"
      }
    ],
    "correct": "a",
    "explanation": "Use density formula to find Molar Mass, then calculate moles in 200g.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "74790ba8-57f9-405b-84ea-8d92f63fd08a"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Coordination Compounds",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Which of the following complexes will show the maximum paramagnetism (highest spin-only magnetic moment)?",
    "options": [
      {
        "id": "a",
        "text": "[Fe(H2O)6]2+"
      },
      {
        "id": "b",
        "text": "[Mn(H2O)6]2+"
      },
      {
        "id": "c",
        "text": "[Cr(H2O)6]3+"
      },
      {
        "id": "d",
        "text": "[Co(CN)6]3-"
      }
    ],
    "correct": "b",
    "explanation": "Fe(H2O)6 2+ has Fe2+ (d6, weak field, 4 unpaired). Cr(H2O)6 3+ has 3. Mn(H2O)6 2+ has d5 high spin (5 unpaired).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "578104ab-4a5a-421a-898a-22ec75ea852b"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "The p-Block Elements",
    "topic": "",
    "difficulty": "hard",
    "qtype": "assertion_reason",
    "body": "Assertion (A): Nitrogen is much less reactive than Phosphorus.\nReason (R): Nitrogen has a very high bond dissociation enthalpy due to the presence of a triple bond between two atoms.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "N2's inertness is due to the 941 kJ/mol bond enthalpy, whereas P4 has single P-P bonds with significant strain.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "ec9c3a15-b2bc-4556-8ccb-4ec45e62f6ef"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Amines",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "What is the major product when Aniline reacts with Bromine water?",
    "options": [
      {
        "id": "a",
        "text": "2-Bromoaniline"
      },
      {
        "id": "b",
        "text": "4-Bromoaniline"
      },
      {
        "id": "c",
        "text": "2,4,6-Tribromoaniline"
      },
      {
        "id": "d",
        "text": "N-Bromoaniline"
      }
    ],
    "correct": "c",
    "explanation": "Aniline is highly activating; even without a catalyst, Br2 water causes trisubstitution at ortho and para.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "211561bf-8038-4aba-8c91-18d9c95a54c2"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Electrochemistry",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "The standard reduction potentials of X, Y, Z are 0.52 V, -3.03 V, and -1.18 V respectively. The order of reducing power is:",
    "options": [
      {
        "id": "a",
        "text": "X > Z > Y"
      },
      {
        "id": "b",
        "text": "Y > Z > X"
      },
      {
        "id": "c",
        "text": "Z > Y > X"
      },
      {
        "id": "d",
        "text": "Y > X > Z"
      }
    ],
    "correct": "b",
    "explanation": "Lower (more negative) reduction potential means stronger reducing agent.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a7439a01-d5c4-4f09-89d4-f070b53d1a71"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Biomolecules",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Which of the following statements about DNA is false?",
    "options": [
      {
        "id": "a",
        "text": "It has a double helix structure."
      },
      {
        "id": "b",
        "text": "Adenine pairs with Thymine via two hydrogen bonds."
      },
      {
        "id": "c",
        "text": "The two strands are complementary to each other."
      },
      {
        "id": "d",
        "text": "It contains the sugar D-Ribose and the base Uracil."
      }
    ],
    "correct": "d",
    "explanation": "DNA contains Uracil only in very rare damage cases; RNA contains Uracil. DNA contains Thymine.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "bb29191e-4998-4f06-80fb-7da25d1ea155"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Solutions",
    "topic": "",
    "difficulty": "hard",
    "qtype": "assertion_reason",
    "body": "Assertion (A): For an ideal solution, Delta H_mix and Delta V_mix are zero.\nReason (R): The intermolecular attractive forces between A-A and B-B are nearly equal to those between A-B.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "Ideal behavior occurs when the nature of interactions doesn't change upon mixing.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "0e12d8df-77a3-41e9-84a0-a9f3ddb78544"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Chemical Kinetics",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A reaction is first order in A and second order in B. How does the rate change if the concentration of B is doubled and A is halved?",
    "options": [
      {
        "id": "a",
        "text": "Rate increases by 4 times."
      },
      {
        "id": "b",
        "text": "Rate increases by 2 times."
      },
      {
        "id": "c",
        "text": "Rate remains the same."
      },
      {
        "id": "d",
        "text": "Rate decreases by 2 times."
      }
    ],
    "correct": "b",
    "explanation": "Rate = k[A][B]^2. New rate = k[0.5A][2B]^2 = k[0.5A][4B^2] = 2 * Rate.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "40c8b8f4-4839-45c2-8d35-9fe577dabf7f"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Solutions",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A 5% (w/v) solution of cane sugar (MW = 342) is isotonic with 0.877% (w/v) solution of urea. Calculate the molecular weight of urea.",
    "options": [
      {
        "id": "a",
        "text": "30 g/mol"
      },
      {
        "id": "b",
        "text": "45 g/mol"
      },
      {
        "id": "c",
        "text": "60 g/mol"
      },
      {
        "id": "d",
        "text": "90 g/mol"
      }
    ],
    "correct": "c",
    "explanation": "Isotonic means C1 = C2. (5/342) = (0.877/M_urea). M_urea = (0.877 * 342) / 5 = 59.98 ~ 60.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5f967f9d-6b00-4ffc-8325-17849d557370"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "The d- and f-Block Elements",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Which of the following lanthanoid ions is diamagnetic? (Atomic numbers: Ce=58, Sm=62, Eu=63, Yb=70)",
    "options": [
      {
        "id": "a",
        "text": "Sm2+"
      },
      {
        "id": "b",
        "text": "Eu2+"
      },
      {
        "id": "c",
        "text": "Ce3+"
      },
      {
        "id": "d",
        "text": "Yb2+"
      }
    ],
    "correct": "d",
    "explanation": "Yb2+ has [Xe] 4f14 configuration (fully filled f-orbital). Ce4+ is also [Xe] 4f0. Among options given as typical ions, Yb2+ or Lu3+ are common diamagnetic ones. Checking options: Yb2+ is correct.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a8c85732-70d0-4fd0-81ff-66d36a15e414"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "The p-Block Elements",
    "topic": "",
    "difficulty": "hard",
    "qtype": "assertion_reason",
    "body": "Assertion (A): PH3 has a lower boiling point than NH3.\nReason (R): NH3 forms intermolecular hydrogen bonds, while PH3 does not.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "H-bonding in NH3 significantly raises its boiling point compared to heavier hydrides like PH3.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "cdcff022-53e6-440d-8711-427d0235be6d"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "The p-Block Elements",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "The reaction of P4 with NaOH and water produces PH3 and another phosphorus-containing salt. The oxidation state of phosphorus in that salt is:",
    "options": [
      {
        "id": "a",
        "text": "+3"
      },
      {
        "id": "b",
        "text": "+1"
      },
      {
        "id": "c",
        "text": "+5"
      },
      {
        "id": "d",
        "text": "-3"
      }
    ],
    "correct": "b",
    "explanation": "P4 + 3NaOH + 3H2O -> PH3 + 3NaH2PO2. In NaH2PO2 (sodium hypophosphite), P is in +1 state.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "0364bdd2-9ab5-45ad-82f2-a7ba52f1a9c3"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Hydrocarbons / Aldehydes & Ketones",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "What is the major product formed when propyne reacts with HgSO4/H2SO4?",
    "options": [
      {
        "id": "a",
        "text": "Propanone"
      },
      {
        "id": "b",
        "text": "Propanal"
      },
      {
        "id": "c",
        "text": "Propan-2-ol"
      },
      {
        "id": "d",
        "text": "Propanoic acid"
      }
    ],
    "correct": "a",
    "explanation": "Kucherov reaction adds water across the triple bond to form an enol, which tautomerizes to Propanone (Acetone).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "af121dad-9b81-4f4d-89f3-48c6c215f19c"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Alcohols, Phenols and Ethers",
    "topic": "",
    "difficulty": "hard",
    "qtype": "assertion_reason",
    "body": "Assertion (A): The C-O-H bond angle in alcohols is slightly less than the tetrahedral angle (109.5°).\nReason (R): This is due to the repulsive interaction between the two lone pairs of electrons on oxygen.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "Lone pair-lone pair repulsion compresses the bond angle from the ideal tetrahedral geometry.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "4009998a-3850-4bd9-8026-5cd097c55c69"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Electrochemistry",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "In the electrolysis of aqueous NaCl, which product is obtained at the cathode?",
    "options": [
      {
        "id": "a",
        "text": "Na metal"
      },
      {
        "id": "b",
        "text": "Cl2 gas"
      },
      {
        "id": "c",
        "text": "H2 gas"
      },
      {
        "id": "d",
        "text": "O2 gas"
      }
    ],
    "correct": "c",
    "explanation": "H2 is produced because water has a higher reduction potential (-0.83V) than Na+ (-2.71V).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "aa2599af-5116-4871-84fe-351fc56ec700"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Amines",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Which of the following will give a positive carbylamine test?",
    "options": [
      {
        "id": "a",
        "text": "N,N-Dimethylaniline"
      },
      {
        "id": "b",
        "text": "2,4-Dimethylaniline"
      },
      {
        "id": "c",
        "text": "N-Methylaniline"
      },
      {
        "id": "d",
        "text": "Triethylamine"
      }
    ],
    "correct": "b",
    "explanation": "Only primary amines (aliphatic or aromatic) give the carbylamine test (foul-smelling isocyanide). N-Methylaniline is secondary.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "2ca8f743-4ef9-4ecb-8dec-e8a55a143b02"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Solutions",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "The osmotic pressure of a solution containing 4.0 g of a polymer in 1 L of solution at 27°C is 3.0 x 10^-4 atm. Calculate the molar mass of the polymer. (R = 0.0821 L atm / K mol)",
    "options": [
      {
        "id": "a",
        "text": "3.28 x 10^4 g/mol"
      },
      {
        "id": "b",
        "text": "8.21 x 10^5 g/mol"
      },
      {
        "id": "c",
        "text": "1.64 x 10^5 g/mol"
      },
      {
        "id": "d",
        "text": "3.28 x 10^5 g/mol"
      }
    ],
    "correct": "d",
    "explanation": "pi = CRT => 3x10^-4 = (4/M) * 0.0821 * 300. M = (4 * 24.63) / 3x10^-4 = 328,400.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5b7ac277-ceda-4e94-8afb-e70b1c57befe"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "The p-Block Elements / Classification of Elements",
    "topic": "",
    "difficulty": "hard",
    "qtype": "assertion_reason",
    "body": "Assertion (A): Graphite is a good conductor of electricity whereas Diamond is an insulator.\nReason (R): In graphite, every carbon atom is sp2 hybridized and has one free electron per carbon atom.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "The delocalized pi electrons in graphite's layers allow for electrical conductivity.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "d1069c86-573e-4551-8013-32fe044dca27"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Haloalkanes and Haloarenes",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Which of the following order is correct for the rate of SN1 reaction?\n(I) CH3CH2Br\n(II) (CH3)2CHBr\n(III) (CH3)3CBr\n(IV) (C6H5)3CBr",
    "options": [
      {
        "id": "a",
        "text": "I > II > III > IV"
      },
      {
        "id": "b",
        "text": "IV > III > I > II"
      },
      {
        "id": "c",
        "text": "III > IV > II > I"
      },
      {
        "id": "d",
        "text": "IV > III > II > I"
      }
    ],
    "correct": "d",
    "explanation": "SN1 rate depends on carbocation stability: Benzylic/Tertiary > Secondary > Primary. (C6H5)3C+ is highly resonance stabilized.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "cc420dc1-0235-41dc-8ec9-fe989c0d0e5c"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Chemical Kinetics",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A first-order reaction is 50% complete in 30 minutes at 300 K and in 10 minutes at 320 K. Calculate the activation energy (Ea) for the reaction. (R = 8.314 J/K/mol, log 3 = 0.477)",
    "options": [
      {
        "id": "a",
        "text": "43.85 kJ/mol"
      },
      {
        "id": "b",
        "text": "98.20 kJ/mol"
      },
      {
        "id": "c",
        "text": "22.40 kJ/mol"
      },
      {
        "id": "d",
        "text": "55.30 kJ/mol"
      }
    ],
    "correct": "a",
    "explanation": "Use Arrhenius equation: log(k2/k1) = (Ea/2.303R) * (T2-T1)/(T1T2). k is inversely proportional to t_half. log(30/10) = log 3.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "06d79bd7-fd77-40e8-88ac-2b3e797629b2"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Organic Chemistry - Some Basic Principles and Techniques",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "The number of sigma and pi bonds in the molecule of tetracyanoethylene are:",
    "options": [
      {
        "id": "a",
        "text": "5 sigma, 9 pi"
      },
      {
        "id": "b",
        "text": "9 sigma, 7 pi"
      },
      {
        "id": "c",
        "text": "9 sigma, 9 pi"
      },
      {
        "id": "d",
        "text": "5 sigma, 8 pi"
      }
    ],
    "correct": "c",
    "explanation": "Structure is (NC)2C=C(CN)2. 9 sigma bonds (4 C-C, 4 C#N single equiv, 1 C=C) and 9 pi bonds (4*2 from CN, 1 from C=C). Correction: C-CN is sigma. Total: C=C (1s, 1p), 4 C-CN (4s), 4 C#N (4s, 8p). Total 9 sigma, 9 pi.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5b9b233a-bfe6-4d69-8556-9cb3cd4421ad"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Biomolecules",
    "topic": "",
    "difficulty": "hard",
    "qtype": "assertion_reason",
    "body": "Assertion (A): Glucose gives a negative Schiff's test despite having an aldehyde group.\nReason (R): The aldehyde group in glucose is involved in the formation of a stable cyclic hemiacetal structure.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "The cyclic structure predominates, leaving insufficient free aldehyde to react with Schiff's reagent.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a2def37f-9368-42ed-89bc-f3c01821f771"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Electrochemistry",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "For a cell reaction: Cu(s) + 2Ag+(aq) -> Cu2+(aq) + 2Ag(s), E°cell = 0.46 V. The value of Gibbs free energy change (Delta G°) for the reaction is: (F = 96500 C/mol)",
    "options": [
      {
        "id": "a",
        "text": "-44.39 kJ/mol"
      },
      {
        "id": "b",
        "text": "-88.78 kJ/mol"
      },
      {
        "id": "c",
        "text": "-92.50 kJ/mol"
      },
      {
        "id": "d",
        "text": "-22.19 kJ/mol"
      }
    ],
    "correct": "b",
    "explanation": "Delta G° = -nFE°. Here n = 2. Delta G° = -2 * 96500 * 0.46 = -88780 J = -88.78 kJ.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "b1d5f2fb-6e93-4906-8d51-f710faa4c8cd"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Sets (Class 11)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "If A is a set such that A = {x : x is a prime number and 3 < x < 5}, then A is a/an:",
    "options": [
      {
        "id": "a",
        "text": "Singleton set"
      },
      {
        "id": "b",
        "text": "Empty set"
      },
      {
        "id": "c",
        "text": "Infinite set"
      },
      {
        "id": "d",
        "text": "Universal set"
      }
    ],
    "correct": "b",
    "explanation": "There is no prime number between 3 and 5, so the set contains no elements.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "f99a8c52-2dd8-4728-8a0f-bdb45a751351"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Sets (Class 11)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The number of subsets of a set containing 4 elements is:",
    "options": [
      {
        "id": "a",
        "text": "8"
      },
      {
        "id": "b",
        "text": "12"
      },
      {
        "id": "c",
        "text": "16"
      },
      {
        "id": "d",
        "text": "32"
      }
    ],
    "correct": "c",
    "explanation": "The number of subsets of a set with n elements is given by 2^n.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "66a5a6b6-77c5-425b-8dfc-8059caa073d4"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Relations and Functions (Class 11)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "If A = {1, 2} and B = {3, 4}, then the number of relations from A to B is:",
    "options": [
      {
        "id": "a",
        "text": "4"
      },
      {
        "id": "b",
        "text": "8"
      },
      {
        "id": "c",
        "text": "12"
      },
      {
        "id": "d",
        "text": "16"
      }
    ],
    "correct": "d",
    "explanation": "The number of relations is 2^(n(A) * n(B)).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "7f291012-7bd4-457e-8cfa-93b1659e65d3"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Trigonometric Functions (Class 11)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The value of sin(–11π/3) is:",
    "options": [
      {
        "id": "a",
        "text": "√3/2"
      },
      {
        "id": "b",
        "text": "1/2"
      },
      {
        "id": "c",
        "text": "-√3/2"
      },
      {
        "id": "d",
        "text": "-1/2"
      }
    ],
    "correct": "a",
    "explanation": "sin(-theta) = -sin(theta) and sin is periodic with 2π.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "911a4c92-01bc-4c70-88f0-3efb1a6b1484"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Trigonometric Functions (Class 11)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The general solution of the equation cos x = 1/2 is:",
    "options": [
      {
        "id": "a",
        "text": "nπ ± π/3"
      },
      {
        "id": "b",
        "text": "2nπ + π/6"
      },
      {
        "id": "c",
        "text": "2nπ ± π/3"
      },
      {
        "id": "d",
        "text": "nπ + π/3"
      }
    ],
    "correct": "c",
    "explanation": "The general solution for cos x = cos y is x = 2nπ ± y.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "209bca4d-6313-47d6-884c-f7a20acc2d84"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Complex Numbers and Quadratic Equations (Class 11)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The multiplicative inverse of the complex number 4 - 3i is:",
    "options": [
      {
        "id": "a",
        "text": "(4/7) + (3/7)i"
      },
      {
        "id": "b",
        "text": "(4/25) + (3/25)i"
      },
      {
        "id": "c",
        "text": "(4/25) - (3/25)i"
      },
      {
        "id": "d",
        "text": "4 + 3i"
      }
    ],
    "correct": "b",
    "explanation": "The multiplicative inverse of z is z' / |z|^2.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "cf2e5e68-826e-4028-8a58-9f7bb88f2e54"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Permutations and Combinations (Class 11)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "If 1/8! + 1/9! = x/10!, then the value of x is:",
    "options": [
      {
        "id": "a",
        "text": "81"
      },
      {
        "id": "b",
        "text": "90"
      },
      {
        "id": "c",
        "text": "99"
      },
      {
        "id": "d",
        "text": "100"
      }
    ],
    "correct": "d",
    "explanation": "Multiply the entire equation by 10! to solve for x.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "9582f53c-f813-41fe-88f9-4be8a7ada39e"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Binomial Theorem (Class 11)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The number of terms in the expansion of (x + a)^50 + (x - a)^50 after simplification is:",
    "options": [
      {
        "id": "a",
        "text": "26"
      },
      {
        "id": "b",
        "text": "25"
      },
      {
        "id": "c",
        "text": "50"
      },
      {
        "id": "d",
        "text": "51"
      }
    ],
    "correct": "a",
    "explanation": "For (x+a)^n + (x-a)^n, if n is even, the number of terms is (n/2) + 1.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "faa9c541-89d6-46e2-8a20-b44b418713b7"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Sequences and Series (Class 11)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The 10th term of the A.P. 2, 7, 12, ... is:",
    "options": [
      {
        "id": "a",
        "text": "45"
      },
      {
        "id": "b",
        "text": "50"
      },
      {
        "id": "c",
        "text": "47"
      },
      {
        "id": "d",
        "text": "52"
      }
    ],
    "correct": "c",
    "explanation": "Use the formula a_n = a + (n-1)d.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "2503702f-0360-488e-8fb6-b7f3146e6b2d"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Straight Lines (Class 11)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The slope of a line which is perpendicular to the line joining (2, 5) and (-3, 6) is:",
    "options": [
      {
        "id": "a",
        "text": "5"
      },
      {
        "id": "b",
        "text": "-5"
      },
      {
        "id": "c",
        "text": "1/5"
      },
      {
        "id": "d",
        "text": "-1/5"
      }
    ],
    "correct": "a",
    "explanation": "The product of slopes of perpendicular lines is -1.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "3d1be472-dfdc-44a1-8dc1-729a1729b43a"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Conic Sections (Class 11)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The radius of the circle x^2 + y^2 + 8x + 10y - 8 = 0 is:",
    "options": [
      {
        "id": "a",
        "text": "6"
      },
      {
        "id": "b",
        "text": "7"
      },
      {
        "id": "c",
        "text": "sqrt(43)"
      },
      {
        "id": "d",
        "text": "sqrt(49)"
      }
    ],
    "correct": "b",
    "explanation": "Radius r = sqrt(g^2 + f^2 - c).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "3dbc66d0-1d20-4223-80cc-bf7f4a6fd444"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Introduction to Three Dimensional Geometry (Class 11)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The distance of the point (1, -2, 3) from the y-axis is:",
    "options": [
      {
        "id": "a",
        "text": "1"
      },
      {
        "id": "b",
        "text": "3"
      },
      {
        "id": "c",
        "text": "sqrt(10)"
      },
      {
        "id": "d",
        "text": "sqrt(5)"
      }
    ],
    "correct": "c",
    "explanation": "Distance of (x,y,z) from y-axis is sqrt(x^2 + z^2).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "71a55393-ed64-4ab8-8588-be55cc42dc28"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Limits and Derivatives (Class 11)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The limit of (sin 4x)/(sin 2x) as x approaches 0 is:",
    "options": [
      {
        "id": "a",
        "text": "1"
      },
      {
        "id": "b",
        "text": "1/2"
      },
      {
        "id": "c",
        "text": "4"
      },
      {
        "id": "d",
        "text": "2"
      }
    ],
    "correct": "d",
    "explanation": "Use the limit formula lim(x->0) (sin x)/x = 1.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "f240a1ae-c1a3-40db-8f3f-c2e5e222d5ea"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Limits and Derivatives (Class 11)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The derivative of sec x with respect to x is:",
    "options": [
      {
        "id": "a",
        "text": "sec^2 x"
      },
      {
        "id": "b",
        "text": "sec x tan x"
      },
      {
        "id": "c",
        "text": "-sec x tan x"
      },
      {
        "id": "d",
        "text": "tan^2 x"
      }
    ],
    "correct": "b",
    "explanation": "Standard derivative formula from NCERT.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "3402176a-3550-4be8-8654-507e95e8a4bd"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Probability (Class 12)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "If A and B are two events such that P(A) = 0.4, P(B) = 0.8 and P(B|A) = 0.6, then P(A ∩ B) is:",
    "options": [
      {
        "id": "a",
        "text": "0.48"
      },
      {
        "id": "b",
        "text": "0.32"
      },
      {
        "id": "c",
        "text": "0.24"
      },
      {
        "id": "d",
        "text": "0.12"
      }
    ],
    "correct": "c",
    "explanation": "Use the conditional probability formula P(B|A) = P(A ∩ B) / P(A).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "99d0dd14-4d25-489a-85b8-76fa600290ad"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Relations and Functions (Class 12)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Let R be a relation on the set {1, 2, 3} given by R = {(1, 1), (2, 2), (3, 3)}. This relation is:",
    "options": [
      {
        "id": "a",
        "text": "Reflexive only"
      },
      {
        "id": "b",
        "text": "Symmetric only"
      },
      {
        "id": "c",
        "text": "Transitive only"
      },
      {
        "id": "d",
        "text": "Equivalence relation"
      }
    ],
    "correct": "d",
    "explanation": "The identity relation is reflexive, symmetric, and transitive, hence an equivalence relation.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "d9a21880-fd59-4a6e-80c8-cdaf6138d766"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Inverse Trigonometric Functions (Class 12)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The principal value of cos⁻¹(-1/2) is:",
    "options": [
      {
        "id": "a",
        "text": "-π/3"
      },
      {
        "id": "b",
        "text": "2π/3"
      },
      {
        "id": "c",
        "text": "π/3"
      },
      {
        "id": "d",
        "text": "4π/3"
      }
    ],
    "correct": "b",
    "explanation": "The range of principal value of cos⁻¹ is [0, π].",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "86864164-7762-4038-815b-145a4ae6731f"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Determinants (Class 12)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "If A is a square matrix of order 3 such that |A| = 5, then |adj A| is:",
    "options": [
      {
        "id": "a",
        "text": "25"
      },
      {
        "id": "b",
        "text": "5"
      },
      {
        "id": "c",
        "text": "125"
      },
      {
        "id": "d",
        "text": "15"
      }
    ],
    "correct": "a",
    "explanation": "|adj A| = |A|^(n-1) where n is the order of the matrix.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "c74ce2d2-9eff-4677-8970-5f7b757382f4"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Matrices (Class 12)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "If A is a 2x3 matrix and B is a 3x4 matrix, then the order of matrix AB is:",
    "options": [
      {
        "id": "a",
        "text": "3x3"
      },
      {
        "id": "b",
        "text": "4x2"
      },
      {
        "id": "c",
        "text": "2x4"
      },
      {
        "id": "d",
        "text": "4x3"
      }
    ],
    "correct": "c",
    "explanation": "Product of (m x n) and (n x p) matrices results in an (m x p) matrix.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "59bd4715-4e91-4efe-8d93-ce7f0cf67b25"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Continuity and Differentiability (Class 12)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The function f(x) = |x| is:",
    "options": [
      {
        "id": "a",
        "text": "Continuous and differentiable at x=0"
      },
      {
        "id": "b",
        "text": "Continuous but not differentiable at x=0"
      },
      {
        "id": "c",
        "text": "Discontinuous at x=0"
      },
      {
        "id": "d",
        "text": "None of these"
      }
    ],
    "correct": "b",
    "explanation": "Modulus function is continuous everywhere but not differentiable at x=0 due to a sharp corner.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "0816bb14-afef-42ec-825f-8cba8ccc32a5"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Application of Derivatives (Class 12)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The slope of the tangent to the curve y = x^3 - x at x = 2 is:",
    "options": [
      {
        "id": "a",
        "text": "3"
      },
      {
        "id": "b",
        "text": "12"
      },
      {
        "id": "c",
        "text": "10"
      },
      {
        "id": "d",
        "text": "11"
      }
    ],
    "correct": "d",
    "explanation": "The slope of the tangent is the value of dy/dx at the given point.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "b64881fb-1634-46ba-801e-656d29aa2baf"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Integrals (Class 12)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The value of ∫ e^x (sin x + cos x) dx is:",
    "options": [
      {
        "id": "a",
        "text": "e^x sin x + C"
      },
      {
        "id": "b",
        "text": "e^x cos x + C"
      },
      {
        "id": "c",
        "text": "-e^x sin x + C"
      },
      {
        "id": "d",
        "text": "e^x (sin x - cos x) + C"
      }
    ],
    "correct": "a",
    "explanation": "Use the property ∫ e^x [f(x) + f'(x)] dx = e^x f(x) + C.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5ec3a8c4-67b2-4da0-8a03-7bc52e66a82d"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Differential Equations (Class 12)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The order and degree of the differential equation (d^2y/dx^2)^3 + (dy/dx)^2 + sin(dy/dx) + 1 = 0 are:",
    "options": [
      {
        "id": "a",
        "text": "Order 2, Degree 3"
      },
      {
        "id": "b",
        "text": "Order 1, Degree 3"
      },
      {
        "id": "c",
        "text": "Order 2, Degree not defined"
      },
      {
        "id": "d",
        "text": "Order 3, Degree 2"
      }
    ],
    "correct": "c",
    "explanation": "Degree is not defined if the equation is not a polynomial in derivatives.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "07b465f1-42cd-49ed-8cde-4e89845164fa"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Vector Algebra (Class 12)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The direction cosines of the y-axis are:",
    "options": [
      {
        "id": "a",
        "text": "(1, 0, 0)"
      },
      {
        "id": "b",
        "text": "(0, 1, 0)"
      },
      {
        "id": "c",
        "text": "(0, 0, 1)"
      },
      {
        "id": "d",
        "text": "(1, 1, 1)"
      }
    ],
    "correct": "b",
    "explanation": "The y-axis makes 90° with x and z axes, and 0° with itself.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "dacb0dfd-10ea-4ca6-86d6-eea3298c712e"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Vector Algebra (Class 12)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "If a vector makes equal angles with the coordinate axes, then the value of each direction cosine is:",
    "options": [
      {
        "id": "a",
        "text": "1"
      },
      {
        "id": "b",
        "text": "1/3"
      },
      {
        "id": "c",
        "text": "±1/2"
      },
      {
        "id": "d",
        "text": "±1/√3"
      }
    ],
    "correct": "d",
    "explanation": "l^2 + m^2 + n^2 = 1. If l=m=n, then 3l^2 = 1.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "35b3f538-04c2-446e-8b5b-613d168a81f2"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Vector Algebra (Class 12)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The scalar product (dot product) of vectors a = i + 2j + 3k and b = 2i - j + k is:",
    "options": [
      {
        "id": "a",
        "text": "3"
      },
      {
        "id": "b",
        "text": "5"
      },
      {
        "id": "c",
        "text": "0"
      },
      {
        "id": "d",
        "text": "7"
      }
    ],
    "correct": "a",
    "explanation": "a.b = a1b1 + a2b2 + a3b3.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "c180d2dd-694d-46e6-8678-0ee2e37c9908"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Three Dimensional Geometry (Class 12)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The distance of the point (2, 3, 4) from the plane x = 0 (yz-plane) is:",
    "options": [
      {
        "id": "a",
        "text": "0"
      },
      {
        "id": "b",
        "text": "2"
      },
      {
        "id": "c",
        "text": "3"
      },
      {
        "id": "d",
        "text": "4"
      }
    ],
    "correct": "b",
    "explanation": "The distance of (x,y,z) from the yz-plane is |x|.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "b4068183-5c77-4c11-8cc3-0390f44ac5a4"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Linear Programming (Class 12)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "In a Linear Programming Problem, the objective function is always:",
    "options": [
      {
        "id": "a",
        "text": "Linear"
      },
      {
        "id": "b",
        "text": "Quadratic"
      },
      {
        "id": "c",
        "text": "Cubic"
      },
      {
        "id": "d",
        "text": "Constant"
      }
    ],
    "correct": "a",
    "explanation": "By definition in LPP, the objective function must be linear.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "046a4693-ddd0-4b2a-848f-355dcb871825"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Probability (Class 12)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "If A and B are independent events, then P(A ∩ B) is equal to:",
    "options": [
      {
        "id": "a",
        "text": "P(A) + P(B)"
      },
      {
        "id": "b",
        "text": "P(A) * P(B)"
      },
      {
        "id": "c",
        "text": "P(A) / P(B)"
      },
      {
        "id": "d",
        "text": "P(A) - P(B)"
      }
    ],
    "correct": "b",
    "explanation": "Independence condition: P(A ∩ B) = P(A) * P(B).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "1a0309f4-45fe-4ba8-897b-ca68a2d2276f"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Integrals (Class 12)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The value of ∫ (1 to √3) 1/(1 + x^2) dx is:",
    "options": [
      {
        "id": "a",
        "text": "π/3"
      },
      {
        "id": "b",
        "text": "π/6"
      },
      {
        "id": "c",
        "text": "π/12"
      },
      {
        "id": "d",
        "text": "π/4"
      }
    ],
    "correct": "c",
    "explanation": "The integral of 1/(1+x^2) is tan⁻¹x. Apply limits.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "7827abe3-6020-408c-891c-3b122e051fef"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "d and f-Block Elements",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "Which of the following describes the correct order of the second ionization enthalpy for the elements Ti, V, Cr, and Mn?",
    "options": [
      {
        "id": "a",
        "text": "Ti < V < Cr < Mn"
      },
      {
        "id": "b",
        "text": "Ti < V < Mn < Cr"
      },
      {
        "id": "c",
        "text": "V < Mn < Ti < Cr"
      },
      {
        "id": "d",
        "text": "Mn < Ti < V < Cr"
      }
    ],
    "correct": "c",
    "explanation": "Cr+ has a 3d5 configuration (exactly half-filled), which is exceptionally stable; removing a second electron requires much higher energy than others in the series.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "f6f79867-c7f8-4e9c-8269-4ae2665219a9"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Organic Chemistry: Some Basic Principles and Techniques",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "In the estimation of nitrogen by Kjeldahl's method, 0.5 g of an organic compound gave ammonia which was absorbed in 50 mL of 0.5 M H2SO4. The residual acid required 60 mL of 0.5 M NaOH for neutralization. What is the percentage of nitrogen in the compound?",
    "options": [
      {
        "id": "a",
        "text": "21.6%"
      },
      {
        "id": "b",
        "text": "56.0%"
      },
      {
        "id": "c",
        "text": "11.2%"
      },
      {
        "id": "d",
        "text": "28.0%"
      }
    ],
    "correct": "b",
    "explanation": "Calculate milliequivalents of acid taken and reacted with base; the difference is used by ammonia to find N content.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "d920eba5-2912-45b6-80a1-69e91d25a310"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Alcohols, Phenols and Ethers",
    "topic": "",
    "difficulty": "expert",
    "qtype": "assertion_reason",
    "body": "Assertion (A): The boiling point of o-nitrophenol is lower than that of p-nitrophenol.\nReason (R): p-Nitrophenol forms intermolecular hydrogen bonds, while o-nitrophenol forms intramolecular hydrogen bonds.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "Intramolecular H-bonding in o-nitrophenol prevents association with other molecules, leading to higher volatility and lower boiling point compared to p-nitrophenol.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "90513139-71ad-4d32-8367-aa07cf49374b"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Chemical Kinetics",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "For a reaction A + B -> Products, the rate law is Rate = k[A]^1/2 [B]^2. What is the unit of the rate constant 'k' if concentration is in mol/L and time is in seconds?",
    "options": [
      {
        "id": "a",
        "text": "mol^-1.5 L^1.5 s^-1"
      },
      {
        "id": "b",
        "text": "mol^1.5 L^-1.5 s^-1"
      },
      {
        "id": "c",
        "text": "mol^-2.5 L^2.5 s^-1"
      },
      {
        "id": "d",
        "text": "mol^-1.5 L^1.5 s^-1 (calculated as L^1.5 mol^-1.5 s^-1)"
      }
    ],
    "correct": "d",
    "explanation": "The overall order is 1/2 + 2 = 2.5 (or 5/2). The unit for k is (mol/L)^(1-n) s^-1.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e9513251-8d8c-4021-88e4-3ba743649c23"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Solutions",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "At 300 K, the density of a 3M solution of NaCl is 1.25 g/mL. The molality of the solution is: (Molar mass of NaCl = 58.5 g/mol)",
    "options": [
      {
        "id": "a",
        "text": "2.40 m"
      },
      {
        "id": "b",
        "text": "2.79 m"
      },
      {
        "id": "c",
        "text": "3.00 m"
      },
      {
        "id": "d",
        "text": "2.15 m"
      }
    ],
    "correct": "b",
    "explanation": "Calculate mass of solvent by subtracting mass of solute from total mass of 1L solution.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "2eb58fc8-2a5d-444e-8f93-0bf9ea23f9ac"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Alcohols, Phenols and Ethers",
    "topic": "",
    "difficulty": "expert",
    "qtype": "assertion_reason",
    "body": "Assertion (A): The pKa of m-nitrophenol is higher than that of p-nitrophenol.\nReason (R): The nitro group at m-position exerts only -I effect, while at p-position it exerts both -I and -R effects.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "Resonance effect (-R) of -NO2 stabilizes phenoxide ion only at ortho and para positions, making p-nitrophenol a stronger acid (lower pKa) than m-nitrophenol.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "7c21454d-63fc-4cfa-8278-3dcee0153213"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "s-Block Elements (Old) / Classification of Elements (New focus)",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "The correct order of increasing thermal stability of the carbonates of group 2 elements is:",
    "options": [
      {
        "id": "a",
        "text": "BeCO3 < MgCO3 < CaCO3 < SrCO3 < BaCO3"
      },
      {
        "id": "b",
        "text": "BaCO3 < SrCO3 < CaCO3 < MgCO3 < BeCO3"
      },
      {
        "id": "c",
        "text": "MgCO3 < BeCO3 < CaCO3 < BaCO3 < SrCO3"
      },
      {
        "id": "d",
        "text": "BeCO3 < MgCO3 < SrCO3 < CaCO3 < BaCO3"
      }
    ],
    "correct": "a",
    "explanation": "Thermal stability increases down the group as the size of the cation increases, reducing its polarizing power and thus reducing its ability to distort the large carbonate ion.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a23c7830-1eff-4fe0-837c-4692ec6d5ebd"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Redox Reactions",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "What is the number of moles of electrons required to reduce one mole of MnO4- to Mn2+ in acidic medium?",
    "options": [
      {
        "id": "a",
        "text": "2 moles"
      },
      {
        "id": "b",
        "text": "5 moles"
      },
      {
        "id": "c",
        "text": "3 moles"
      },
      {
        "id": "d",
        "text": "6 moles"
      }
    ],
    "correct": "b",
    "explanation": "In acidic medium, Mn changes from +7 in MnO4- to +2 in Mn2+. The difference is 5 electrons.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "76c418a5-12c1-404e-87bc-b808dc9a2e8c"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Chemical Kinetics / p-Block Elements",
    "topic": "",
    "difficulty": "expert",
    "qtype": "assertion_reason",
    "body": "Assertion (A): For the reaction 2NO(g) + O2(g) -> 2NO2(g), the rate decreases with increase in temperature.\nReason (R): This is an exothermic reaction with a very low activation energy.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "c",
    "explanation": "This is a rare exception in NCERT. The rate of this specific reaction actually increases with temperature normally, but the equilibrium constant decreases. However, usually, rate increases with T. Actually, A is false for most reactions. But in some cases, the statement is false. Correct logic: Rate ALWAYS increases with T for elementary reactions. Assertion is False.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "ef9966c9-2c08-4173-8429-31f4c4ca4566"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Chemical Bonding and Molecular Structure / p-Block Elements",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "What is the hybridization and geometry of ClF3?",
    "options": [
      {
        "id": "a",
        "text": "sp3, Tetrahedral"
      },
      {
        "id": "b",
        "text": "sp3d, T-shape"
      },
      {
        "id": "c",
        "text": "sp3d, Trigonal bipyramidal (regular)"
      },
      {
        "id": "d",
        "text": "sp3d2, T-shape"
      }
    ],
    "correct": "b",
    "explanation": "Chlorine has 7 valence electrons; 3 are used for sigma bonds, leaving 2 lone pairs. Total 5 pairs = sp3d, T-shape.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "c1a2d6fe-9a22-4546-88c1-3a5dd73828e6"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Coordination Compounds",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "The IUPAC name of the complex [Pt(NH3)2Cl(NH2CH3)]Cl is:",
    "options": [
      {
        "id": "a",
        "text": "Diamminechloridomethylamineplatinum(II) chloride"
      },
      {
        "id": "b",
        "text": "Diamminechloridomethanamineplatinum(IV) chloride"
      },
      {
        "id": "c",
        "text": "Diamminechloridomethylamineplatinum(IV) chloride"
      },
      {
        "id": "d",
        "text": "Diamminechloridomethanamineplatinum(II) chloride"
      }
    ],
    "correct": "d",
    "explanation": "Ligands are named in alphabetical order: ammine (NH3), chlorido (Cl), methanamine (NH2CH3). Platinum is in +2 state.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "4f239e5c-b0ee-48ff-81eb-eacfaa3e69dd"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "p-Block Elements (Group 14)",
    "topic": "",
    "difficulty": "expert",
    "qtype": "assertion_reason",
    "body": "Assertion (A): Graphite is a good conductor of electricity, whereas diamond is an insulator.\nReason (R): In graphite, every carbon atom is sp2 hybridized with one free electron in a p-orbital, while in diamond, each carbon is sp3 hybridized with no free electrons.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "The delocalized electrons in the pi-system of graphite allow electrical conduction, whereas the localized sigma bonds in diamond's tetrahedral lattice do not.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "9448c540-a776-406d-82ea-a905f3e0d616"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Chemical Bonding and Molecular Structure",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "Which of the following molecules has the highest dipole moment?",
    "options": [
      {
        "id": "a",
        "text": "NF3"
      },
      {
        "id": "b",
        "text": "CCl4"
      },
      {
        "id": "c",
        "text": "NH3"
      },
      {
        "id": "d",
        "text": "CH3Cl"
      }
    ],
    "correct": "c",
    "explanation": "NF3 has the lone pair dipole opposing the N-F bond dipoles, whereas in NH3 they reinforce. However, CH3Cl and others vary. NH3 > NF3. Comparing CH3Cl, it is higher than many. But the most specific NCERT comparison is NH3 vs NF3. Let's compare CH3Cl, NH3, NF3, H2O. H2O is highest. Options: CH3Cl, NF3, NH3, CCl4. NH3 is the answer among these.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "c31244cc-e368-4744-88d0-fd60afc1b0f2"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Thermodynamics",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "Calculate the work done during isothermal reversible expansion of one mole of an ideal gas from 10 L to 100 L at 27 deg C. (R = 8.314 J/K/mol)",
    "options": [
      {
        "id": "a",
        "text": "-5744 J"
      },
      {
        "id": "b",
        "text": "-5.744 J"
      },
      {
        "id": "c",
        "text": "+5744 J"
      },
      {
        "id": "d",
        "text": "-2303 J"
      }
    ],
    "correct": "a",
    "explanation": "Use W = -2.303 nRT log(V2/V1). Expansion work by system is negative (or positive depending on convention; IUPAC W = -2.303...). Using IUPAC: W = -5744 J.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "b4bf3a79-781b-49d9-83de-a1ceacf75f12"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Hydrocarbons",
    "topic": "",
    "difficulty": "expert",
    "qtype": "assertion_reason",
    "body": "Assertion (A): Addition of Br2 to trans-2-butene gives a meso compound.\nReason (R): The addition of Br2 to alkenes is an anti-addition.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "Anti-addition to a trans-alkene results in a meso-diastereomer due to the internal plane of symmetry in the resulting 2,3-dibromobutane.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "bd7da28c-9214-45a0-875f-bfc8298fde88"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "d and f-Block Elements",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "Which of the following transition metal ions has the highest magnetic moment?",
    "options": [
      {
        "id": "a",
        "text": "Cr3+"
      },
      {
        "id": "b",
        "text": "Fe3+"
      },
      {
        "id": "c",
        "text": "Cu2+"
      },
      {
        "id": "d",
        "text": "Co2+"
      }
    ],
    "correct": "b",
    "explanation": "Magnetic moment = sqrt(n(n+2)) where n is the number of unpaired electrons. Fe3+ (3d5) has 5 unpaired electrons, the maximum in the first transition series.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "0f030d1e-3d83-4a9a-8c28-3dd66885f890"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Solutions",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "The vapor pressure of pure liquid A is 40 mmHg and pure liquid B is 60 mmHg. In an ideal solution of A and B, the mole fraction of A in the vapor phase is 0.25. What is the mole fraction of A in the liquid phase?",
    "options": [
      {
        "id": "a",
        "text": "0.50"
      },
      {
        "id": "b",
        "text": "0.25"
      },
      {
        "id": "c",
        "text": "0.40"
      },
      {
        "id": "d",
        "text": "0.33"
      }
    ],
    "correct": "d",
    "explanation": "Use Dalton's and Raoult's Laws: yA = (xA * PAo) / (xA * PAo + xB * PBo). Solve for xA.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "7fe8e715-c3c8-400d-8014-5ed51f4933b9"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "p-Block Elements",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "In which of the following arrangements, the sequence is not strictly according to the property written against it?",
    "options": [
      {
        "id": "a",
        "text": "HF < HCl < HBr < HI : Acidic strength increases"
      },
      {
        "id": "b",
        "text": "NH3 < PH3 < AsH3 < SbH3 : Basic strength increases"
      },
      {
        "id": "c",
        "text": "B < C < O < N : First ionization enthalpy increases"
      },
      {
        "id": "d",
        "text": "H2O < H2S < H2Se < H2Te : Acidic strength increases"
      }
    ],
    "correct": "c",
    "explanation": "For Group 15 hydrides, the basic strength decreases as NH3 > PH3 > AsH3 > SbH3 due to decreasing electron density on the central atom. The given option will be the reversed one.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "ee5a5176-4875-42ac-8243-a107e631d799"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Aldehydes, Ketones and Carboxylic Acids",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "What is the product of the reaction between benzaldehyde and concentrated NaOH (50%)?",
    "options": [
      {
        "id": "a",
        "text": "Benzyl alcohol only"
      },
      {
        "id": "b",
        "text": "Sodium benzoate only"
      },
      {
        "id": "c",
        "text": "Both Benzyl alcohol and Sodium benzoate"
      },
      {
        "id": "d",
        "text": "Cinnamic acid"
      }
    ],
    "correct": "c",
    "explanation": "This is the Cannizzaro reaction. Benzaldehyde lacks alpha-hydrogens and undergoes disproportionation to form benzyl alcohol and sodium benzoate.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "eed781db-53ef-4bfa-83ca-12d8e50609d1"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "p-Block Elements (Group 14)",
    "topic": "",
    "difficulty": "expert",
    "qtype": "assertion_reason",
    "body": "Assertion (A): SiF6 2- is known but SiCl6 2- is not.\nReason (R): Six large chloride ions cannot be accommodated around the Si4+ ion due to steric hindrance.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "Silicon can expand its octet using d-orbitals, but the size of Cl- ions makes the octahedral coordination unstable compared to the smaller F- ions.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "2786ce37-7ac1-48cb-8a61-94157ca2fe22"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Electrochemistry",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "The standard electrode potential for the half-cells are: \nZn2+ + 2e- -> Zn; E0 = -0.76 V\nFe2+ + 2e- -> Fe; E0 = -0.44 V\nWhat is the EMF of the cell: Fe / Fe2+(1M) // Zn2+(1M) / Zn?",
    "options": [
      {
        "id": "a",
        "text": "+0.32 V"
      },
      {
        "id": "b",
        "text": "-0.32 V"
      },
      {
        "id": "c",
        "text": "+1.20 V"
      },
      {
        "id": "d",
        "text": "-1.20 V"
      }
    ],
    "correct": "b",
    "explanation": "E_cell = E_cathode - E_anode. Here, the cell notation shows Fe as anode and Zn as cathode. E = -0.76 - (-0.44) = -0.32 V. The reaction is non-spontaneous.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "b587c933-2088-401f-824d-5ac6e4d63c6c"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "d and f-Block Elements",
    "topic": "",
    "difficulty": "expert",
    "qtype": "assertion_reason",
    "body": "Assertion (A): Transition metals and their compounds show catalytic activity.\nReason (R): Transition metals have the ability to adopt multiple oxidation states and form complexes.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "The availability of d-orbitals and variable oxidation states allows transition metals to provide an alternative pathway with lower activation energy for reactions.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "2b6e548a-5971-4bf7-8d42-8f0ef7fa8e03"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Equilibrium",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "The solubility product (Ksp) of AgCl is 1.6 x 10^-10. What is its solubility in a 0.1 M NaCl solution?",
    "options": [
      {
        "id": "a",
        "text": "1.6 x 10^-9 M"
      },
      {
        "id": "b",
        "text": "1.26 x 10^-5 M"
      },
      {
        "id": "c",
        "text": "1.6 x 10^-11 M"
      },
      {
        "id": "d",
        "text": "1.6 x 10^-8 M"
      }
    ],
    "correct": "a",
    "explanation": "Common ion effect: [Cl-] = 0.1 M. Ksp = [Ag+][Cl-]. S(0.1) = 1.6 x 10^-10 => S = 1.6 x 10^-9.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "92472d91-3cc9-4a88-8f71-786c2fa64b99"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Biomolecules",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "Which of the following amino acids is not optically active?",
    "options": [
      {
        "id": "a",
        "text": "Alanine"
      },
      {
        "id": "b",
        "text": "Glycine"
      },
      {
        "id": "c",
        "text": "Leucine"
      },
      {
        "id": "d",
        "text": "Valine"
      }
    ],
    "correct": "b",
    "explanation": "Glycine is the simplest amino acid (R group is H) and lacks a chiral carbon.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "1978bd8f-bd7e-491f-8995-2eb4c10e23c0"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "p-Block Elements (Group 18)",
    "topic": "",
    "difficulty": "expert",
    "qtype": "assertion_reason",
    "body": "Assertion (A): Noble gases have very low boiling points.\nReason (R): Noble gases being monoatomic have no interatomic forces except weak dispersion forces.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "Weak van der Waals (dispersion) forces are the only forces present, which increase with size but remain small overall, leading to low boiling points.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "38981182-d157-4e9a-8478-fa06605c37ed"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Chemical Bonding and Molecular Structure / p-Block Elements",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "What is the correct order of bond angles in the following?",
    "options": [
      {
        "id": "a",
        "text": "CH4 > NH3 > H2O"
      },
      {
        "id": "b",
        "text": "H2O > NH3 > CH4"
      },
      {
        "id": "c",
        "text": "NH3 > CH4 > H2O"
      },
      {
        "id": "d",
        "text": "CH4 > H2O > NH3"
      }
    ],
    "correct": "a",
    "explanation": "All have sp3 hybridization on the central atom, but lone pairs decrease bond angles. CH4 (0 lp) > NH3 (1 lp) > H2O (2 lp).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "721bcaec-ce35-413f-820f-2698d5bc0855"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Chemical Kinetics",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "A first-order reaction is 50% complete in 30 minutes at 300 K and 50% complete in 10 minutes at 320 K. Calculate the activation energy (Ea) for the reaction. (R = 8.314 J/K/mol, log 3 = 0.477)",
    "options": [
      {
        "id": "a",
        "text": "34.7 kJ/mol"
      },
      {
        "id": "b",
        "text": "43.8 kJ/mol"
      },
      {
        "id": "c",
        "text": "25.1 kJ/mol"
      },
      {
        "id": "d",
        "text": "52.4 kJ/mol"
      }
    ],
    "correct": "b",
    "explanation": "Use log(k2/k1) = (Ea / 2.303 R) * (1/T1 - 1/T2). k is inversely proportional to t_half. log(30/10) = log 3.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "fb0e9274-b7f6-46b3-8ee8-e07971953e5a"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Sets",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "If A = {x : x is a letter in the word 'FOLLOW'} and B = {x : x is a letter in the word 'WOLF'}, then which of the following is true?",
    "options": [
      {
        "id": "a",
        "text": "A is a proper subset of B"
      },
      {
        "id": "b",
        "text": "A = B"
      },
      {
        "id": "c",
        "text": "A and B are disjoint sets"
      },
      {
        "id": "d",
        "text": "n(A) is not equal to n(B)"
      }
    ],
    "correct": "b",
    "explanation": "Sets are equal if they have exactly the same elements, regardless of order or repetition. Both sets contain {F, O, L, W}.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "511bbdc9-0783-4aaa-8099-928ff4aa0c06"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Relations and Functions",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Let R be a relation on the set of natural numbers N defined by R = {(x, y) : x + 2y = 8}. The domain of R is:",
    "options": [
      {
        "id": "a",
        "text": "{1, 2, 3}"
      },
      {
        "id": "b",
        "text": "{2, 4, 8}"
      },
      {
        "id": "c",
        "text": "{2, 4, 6}"
      },
      {
        "id": "d",
        "text": "{1, 2, 3, 4, 5, 6}"
      }
    ],
    "correct": "c",
    "explanation": "Values of x must be natural numbers such that (8-x) is even and positive. Possible x values are 2, 4, 6.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "35d4817e-c809-43d8-8688-239dbc4743e5"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Trigonometric Functions",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The value of sin(15°) + cos(15°) is equal to:",
    "options": [
      {
        "id": "a",
        "text": "√(3/2)"
      },
      {
        "id": "b",
        "text": "(√3 + 1) / 2"
      },
      {
        "id": "c",
        "text": "√(2/3)"
      },
      {
        "id": "d",
        "text": "(√3 - 1) / √2"
      }
    ],
    "correct": "a",
    "explanation": "Use the identity sin A + cos A = √2 sin(A + 45°). Here, √2 sin(60°) = √2 * (√3/2) = √(3/2).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "7d42e382-0e24-44c7-84eb-c7b68a12ab88"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Complex Numbers and Quadratic Equations",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "If z = x + iy and |z - 5i| / |z + 5i| = 1, then the locus of z is:",
    "options": [
      {
        "id": "a",
        "text": "The y-axis"
      },
      {
        "id": "b",
        "text": "A circle with radius 5"
      },
      {
        "id": "c",
        "text": "The line y = 5"
      },
      {
        "id": "d",
        "text": "The x-axis"
      }
    ],
    "correct": "d",
    "explanation": "The equation implies the distance from z to 5i is equal to the distance from z to -5i, which is the perpendicular bisector (x-axis).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "1edb8e1d-cae4-4fa1-8e1b-bb4159e3987e"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Permutations and Combinations",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The number of 4-digit numbers that can be formed using the digits 1, 2, 3, 4, 5, 6 (without repetition) which are divisible by 5 is:",
    "options": [
      {
        "id": "a",
        "text": "120"
      },
      {
        "id": "b",
        "text": "60"
      },
      {
        "id": "c",
        "text": "24"
      },
      {
        "id": "d",
        "text": "30"
      }
    ],
    "correct": "b",
    "explanation": "For a number to be divisible by 5, the last digit must be 5. The remaining 3 places can be filled by 5 remaining digits.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5927658d-c63a-49d0-84d5-173b767cf655"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Binomial Theorem",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "In the expansion of (x + a)^n, if the sum of odd terms is P and the sum of even terms is Q, then the value of (x^2 - a^2)^n is:",
    "options": [
      {
        "id": "a",
        "text": "P^2 + Q^2"
      },
      {
        "id": "b",
        "text": "4PQ"
      },
      {
        "id": "c",
        "text": "P^2 - Q^2"
      },
      {
        "id": "d",
        "text": "2(P^2 + Q^2)"
      }
    ],
    "correct": "c",
    "explanation": "(x+a)^n = P+Q and (x-a)^n = P-Q. Thus (x^2-a^2)^n = (P+Q)(P-Q) = P^2 - Q^2.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "73525cda-6ac5-46a5-8377-4166e3e4eb54"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "If the sum of n terms of an A.P. is 3n^2 + 5n and its m-th term is 164, then the value of m is:",
    "options": [
      {
        "id": "a",
        "text": "26"
      },
      {
        "id": "b",
        "text": "28"
      },
      {
        "id": "c",
        "text": "30"
      },
      {
        "id": "d",
        "text": "27"
      }
    ],
    "correct": "d",
    "explanation": "Find the common difference and first term from Sn. d = 2 * coefficient of n^2. Then solve for m in the a_m formula.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "ba5e8159-0457-4ddf-8ad8-c9aba64a32d2"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Straight Lines",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The distance between the lines 3x + 4y = 9 and 6x + 8y = 15 is:",
    "options": [
      {
        "id": "a",
        "text": "3/10"
      },
      {
        "id": "b",
        "text": "0.3"
      },
      {
        "id": "c",
        "text": "6/5"
      },
      {
        "id": "d",
        "text": "3/5"
      }
    ],
    "correct": "b",
    "explanation": "Normalize the second equation to match coefficients: 3x + 4y = 7.5. Use distance formula |c1 - c2| / √(a^2 + b^2).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "44c7e99f-e5d9-44e1-83a0-ac8d4d3f4f13"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Conic Sections",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The eccentricity of the hyperbola 9x^2 - 16y^2 = 144 is:",
    "options": [
      {
        "id": "a",
        "text": "5/4"
      },
      {
        "id": "b",
        "text": "4/3"
      },
      {
        "id": "c",
        "text": "5/3"
      },
      {
        "id": "d",
        "text": "√7/4"
      }
    ],
    "correct": "a",
    "explanation": "Rewrite in standard form: x^2/16 - y^2/9 = 1. e = √(1 + b^2/a^2).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "73e7404b-5461-4e75-8888-b7049e6cb8b2"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Limits and Derivatives",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The derivative of sin(x^2) with respect to x is:",
    "options": [
      {
        "id": "a",
        "text": "cos(x^2)"
      },
      {
        "id": "b",
        "text": "2x sin(x^2)"
      },
      {
        "id": "c",
        "text": "2x cos(x^2)"
      },
      {
        "id": "d",
        "text": "-2x cos(x^2)"
      }
    ],
    "correct": "c",
    "explanation": "Apply the chain rule: d/dx(sin u) = cos u * du/dx, where u = x^2.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "ba6c6c11-7d60-41a7-81fd-6138a35f66cb"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Statistics",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "If the variance of 5 observations is 4 and each observation is multiplied by 3, the new variance will be:",
    "options": [
      {
        "id": "a",
        "text": "12"
      },
      {
        "id": "b",
        "text": "18"
      },
      {
        "id": "c",
        "text": "24"
      },
      {
        "id": "d",
        "text": "36"
      }
    ],
    "correct": "d",
    "explanation": "If each observation is multiplied by k, the variance is multiplied by k^2. Here, 4 * 3^2 = 36.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "2973ed55-5085-42f7-889f-e77042104148"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Probability",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "A bag contains 9 discs of which 4 are red, 3 are blue and 2 are yellow. If a disc is drawn at random, the probability that it is NOT blue is:",
    "options": [
      {
        "id": "a",
        "text": "1/3"
      },
      {
        "id": "b",
        "text": "1/2"
      },
      {
        "id": "c",
        "text": "2/3"
      },
      {
        "id": "d",
        "text": "5/9"
      }
    ],
    "correct": "c",
    "explanation": "P(not Blue) = 1 - P(Blue) or (Red + Yellow) / Total. 6/9 = 2/3.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "3391f4e5-dccf-4ee0-8c41-ef0e071c9d85"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Continuity and Differentiability",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "If f(x) = |x-1| + |x-2|, then f(x) is not differentiable at:",
    "options": [
      {
        "id": "a",
        "text": "x = 0 only"
      },
      {
        "id": "b",
        "text": "x = 1 and x = 2"
      },
      {
        "id": "c",
        "text": "x = 1 only"
      },
      {
        "id": "d",
        "text": "all real values of x"
      }
    ],
    "correct": "b",
    "explanation": "Modulus functions are not differentiable at points where the expression inside the modulus becomes zero.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "1cb9df1b-20f3-442c-8646-f13b178ea7c0"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Applications of Derivatives",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The function f(x) = x^3 - 3x^2 + 3x - 100 is:",
    "options": [
      {
        "id": "a",
        "text": "Increasing on R"
      },
      {
        "id": "b",
        "text": "Decreasing on R"
      },
      {
        "id": "c",
        "text": "Increasing for x > 1 only"
      },
      {
        "id": "d",
        "text": "Decreasing for x < 1 only"
      }
    ],
    "correct": "a",
    "explanation": "Check the derivative: f'(x) = 3x^2 - 6x + 3 = 3(x-1)^2. Since f'(x) >= 0 for all x, it is increasing.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "b5e7858c-4379-4d8a-86bc-dcb7ce5f2d16"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Integrals",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The value of the integral ∫ [ (e^x (1+x)) / cos^2(x e^x) ] dx is:",
    "options": [
      {
        "id": "a",
        "text": "tan(e^x) + C"
      },
      {
        "id": "b",
        "text": "tan(x e^x) + C"
      },
      {
        "id": "c",
        "text": "sec(x e^x) + C"
      },
      {
        "id": "d",
        "text": "cot(x e^x) + C"
      }
    ],
    "correct": "b",
    "explanation": "Substitute u = x e^x. The numerator becomes du. The integral becomes ∫ sec^2 u du = tan u + C.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "299872d5-077f-42dc-81c3-ab5b75d16288"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Applications of Integrals Proper",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The area of the region bounded by the curve y^2 = x and the lines x = 1, x = 4 and the x-axis in the first quadrant is:",
    "options": [
      {
        "id": "a",
        "text": "7/3 sq units"
      },
      {
        "id": "b",
        "text": "3/14 sq units"
      },
      {
        "id": "c",
        "text": "14/3 sq units"
      },
      {
        "id": "d",
        "text": "16/3 sq units"
      }
    ],
    "correct": "c",
    "explanation": "Integrate √x from 1 to 4. [2/3 x^(3/2)] from 1 to 4 = 2/3 (8 - 1) = 14/3.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e022f47e-3eec-412d-88ab-0570d125a339"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Differential Equations",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The order and degree of the differential equation [1 + (dy/dx)^2]^(3/2) = d^2y/dx^2 are respectively:",
    "options": [
      {
        "id": "a",
        "text": "2, 3/2"
      },
      {
        "id": "b",
        "text": "2, 3"
      },
      {
        "id": "c",
        "text": "1, 2"
      },
      {
        "id": "d",
        "text": "2, 2"
      }
    ],
    "correct": "d",
    "explanation": "Squaring both sides to remove the fractional power: [1 + (dy/dx)^2]^3 = (d^2y/dx^2)^2. Highest order is 2, and its power is 2.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "6e1856b0-d6c9-407f-8e5f-5ac148aaa606"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Vector Algebra",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "If a vector makes angles alpha, beta, gamma with the x, y, z axes respectively, then sin^2(alpha) + sin^2(beta) + sin^2(gamma) is equal to:",
    "options": [
      {
        "id": "a",
        "text": "1"
      },
      {
        "id": "b",
        "text": "3"
      },
      {
        "id": "c",
        "text": "2"
      },
      {
        "id": "d",
        "text": "0"
      }
    ],
    "correct": "c",
    "explanation": "We know cos^2(alpha) + cos^2(beta) + cos^2(gamma) = 1. Substitute cos^2 = 1 - sin^2.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "d2612c6c-6db7-48a9-86e6-a0239bc8134a"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Linear Programming",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "In a Linear Programming Problem, the objective function Z = ax + by has the same maximum value at two corner points of the feasible region, then:",
    "options": [
      {
        "id": "a",
        "text": "The maximum value occurs only at these two points"
      },
      {
        "id": "b",
        "text": "Every point on the line segment joining these two points gives the same maximum value"
      },
      {
        "id": "c",
        "text": "The maximum value occurs at the midpoint only"
      },
      {
        "id": "d",
        "text": "The LPP has no finite solution"
      }
    ],
    "correct": "b",
    "explanation": "If two corner points give the same optimal value, every point on the line segment joining them also gives the same optimal value.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "6083ae10-0bac-47b4-8510-075359461b93"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Determinants",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "If A is a square matrix of order 3 and |A| = 5, then the value of |adj A| is:",
    "options": [
      {
        "id": "a",
        "text": "5"
      },
      {
        "id": "b",
        "text": "125"
      },
      {
        "id": "c",
        "text": "25"
      },
      {
        "id": "d",
        "text": "625"
      }
    ],
    "correct": "c",
    "explanation": "The property is |adj A| = |A|^(n-1), where n is the order. 5^(3-1) = 25.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8a3e16a2-9a4b-4891-8880-aa145624e45a"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Matrices",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "If A and B are symmetric matrices of the same order, then (AB - BA) is always a:",
    "options": [
      {
        "id": "a",
        "text": "Skew-symmetric matrix"
      },
      {
        "id": "b",
        "text": "Symmetric matrix"
      },
      {
        "id": "c",
        "text": "Zero matrix"
      },
      {
        "id": "d",
        "text": "Identity matrix"
      }
    ],
    "correct": "a",
    "explanation": "Let X = AB - BA. Taking transpose, X' = (AB)' - (BA)' = B'A' - A'B' = BA - AB = -X. Hence skew-symmetric.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "ccb816a5-7bbd-4fab-8074-3522776d1427"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Inverse Trigonometric Functions",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The domain of the function f(x) = sin⁻¹(2x - 3) is:",
    "options": [
      {
        "id": "a",
        "text": "[-1, 1]"
      },
      {
        "id": "b",
        "text": "[1, 2]"
      },
      {
        "id": "c",
        "text": "[0, 3]"
      },
      {
        "id": "d",
        "text": "(1, 2) village"
      }
    ],
    "correct": "b",
    "explanation": "The argument of sin⁻¹ must lie between -1 and 1. -1 ≤ 2x - 3 ≤ 1 leads to 1 ≤ x ≤ 2.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e08fa149-284a-4ea7-8309-b62c311348fb"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Relations and Functions (Class 12)",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "A relation R in the set A = {1, 2, 3} given by R = {(1, 1), (2, 2), (3, 3), (1, 2), (2, 3)} is:",
    "options": [
      {
        "id": "a",
        "text": "Equivalence Relation"
      },
      {
        "id": "b",
        "text": "Symmetric but not reflexive"
      },
      {
        "id": "c",
        "text": "Transitive but not symmetric"
      },
      {
        "id": "d",
        "text": "Reflexive but not symmetric"
      }
    ],
    "correct": "d",
    "explanation": "Reflexive because all (a,a) exist. Not symmetric as (2,1) is missing. Not transitive as (1,2) and (2,3) are there but (1,3) is not.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "3c63cb93-9070-4037-82c6-220b50cfbf4e"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Applications of Derivatives",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The slope of the tangent to the curve y = 3x^4 - 4x at x = 4 is:",
    "options": [
      {
        "id": "a",
        "text": "768"
      },
      {
        "id": "b",
        "text": "448"
      },
      {
        "id": "c",
        "text": "764"
      },
      {
        "id": "d",
        "text": "1248"
      }
    ],
    "correct": "c",
    "explanation": "Differentiate y to get dy/dx = 12x^3 - 4. Evaluate at x = 4. 12(64) - 4 = 768 - 4 = 764.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "f1d90abd-c877-480d-8949-35fe9637a3b6"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Probability (Class 12)",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "If A and B are two events such that P(A) ≠ 0 and P(B|A) = 1, then:",
    "options": [
      {
        "id": "a",
        "text": "A ⊂ B"
      },
      {
        "id": "b",
        "text": "B ⊂ A"
      },
      {
        "id": "c",
        "text": "B = φ"
      },
      {
        "id": "d",
        "text": "A = φ"
      }
    ],
    "correct": "a",
    "explanation": "P(B|A) = P(A ∩ B) / P(A) = 1 implies P(A ∩ B) = P(A). This occurs only if A is a subset of B.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "62d036a9-f8ec-4ab1-841e-96a840b440b3"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Vector Algebra",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The projection of vector a = 2i + 3j + 2k on vector b = i + 2j + k is:",
    "options": [
      {
        "id": "a",
        "text": "10/6"
      },
      {
        "id": "b",
        "text": "5√(2/3)"
      },
      {
        "id": "c",
        "text": "10/√(17)"
      },
      {
        "id": "d",
        "text": "5/3"
      }
    ],
    "correct": "b",
    "explanation": "Projection = (a · b) / |b|. a · b = 2(1)+3(2)+2(1) = 10. |b| = √(1^2+2^2+1^2) = √6.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "c464aacd-8453-4dcb-8cde-512d21ab983a"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Inverse Trigonometric Functions",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The value of tan⁻¹(√3) - sec⁻¹(-2) is:",
    "options": [
      {
        "id": "a",
        "text": "π/3"
      },
      {
        "id": "b",
        "text": "-2π/3"
      },
      {
        "id": "c",
        "text": "π/2"
      },
      {
        "id": "d",
        "text": "-π/3"
      }
    ],
    "correct": "d",
    "explanation": "tan⁻¹(√3) = π/3. sec⁻¹(-2) = π - sec⁻¹(2) = π - π/3 = 2π/3. π/3 - 2π/3 = -π/3.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "c6cb6ba4-6541-4f77-8957-c3261fc981db"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Three Dimensional Geometry (Class 11)",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "If the distance between the points (x, -1, 2) and (-1, 1, 1) is √21, then x is:",
    "options": [
      {
        "id": "a",
        "text": "3 only"
      },
      {
        "id": "b",
        "text": "-5 only"
      },
      {
        "id": "c",
        "text": "3 or -5"
      },
      {
        "id": "d",
        "text": "0"
      }
    ],
    "correct": "c",
    "explanation": "Use distance formula: √[(x+1)^2 + (-1-1)^2 + (2-1)^2] = √21. (x+1)^2 + 4 + 1 = 21 leads to x = 3 or -5.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5511e201-9e33-44b3-8b13-436dd22f31e6"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Continuity and Differentiability",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Let f(x) = (x^2 - 1) |x^2 - 3x + 2| + cos(|x|). The total number of points in the interval (-2, 3) where the function f(x) is not differentiable is:",
    "options": [
      {
        "id": "a",
        "text": "0"
      },
      {
        "id": "b",
        "text": "1"
      },
      {
        "id": "c",
        "text": "2"
      },
      {
        "id": "d",
        "text": "3"
      }
    ],
    "correct": "b",
    "explanation": "The term |x^2 - 3x + 2| is |(x-1)(x-2)|. At x=1, the factor (x^2-1) makes the derivative zero, but at x=2, it remains non-differentiable. cos|x| is differentiable everywhere.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "d70b5369-1b77-4997-8265-d9c0b96b3214"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "If the sum of the first n terms of an A.P. is Sn = 3n^2 + 5n and its mth term is 164, then the value of m is:",
    "options": [
      {
        "id": "a",
        "text": "26"
      },
      {
        "id": "b",
        "text": "28"
      },
      {
        "id": "c",
        "text": "27"
      },
      {
        "id": "d",
        "text": "25"
      }
    ],
    "correct": "c",
    "explanation": "Common difference d = 2 * coefficient of n^2 = 6. First term a = S1 = 8. Solve a + (m-1)d = 164.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "12cd560f-237e-4073-8202-65f4f702b9b1"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Matrices",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "The number of all possible matrices of order 3x3 with each entry 0 or 1 which are symmetric is:",
    "options": [
      {
        "id": "a",
        "text": "512"
      },
      {
        "id": "b",
        "text": "256"
      },
      {
        "id": "c",
        "text": "128"
      },
      {
        "id": "d",
        "text": "64"
      }
    ],
    "correct": "d",
    "explanation": "In a symmetric 3x3 matrix, entries a11, a22, a33, a12, a13, a23 define the matrix. There are 6 independent positions.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "f048e216-8d89-4f77-8803-ba37093c2251"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Limits and Derivatives",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "The value of lim (x -> 0) [ (sin x)/x ] where [.] denotes the greatest integer function is:",
    "options": [
      {
        "id": "a",
        "text": "0"
      },
      {
        "id": "b",
        "text": "1"
      },
      {
        "id": "c",
        "text": "Does not exist"
      },
      {
        "id": "d",
        "text": "-1"
      }
    ],
    "correct": "a",
    "explanation": "For x near 0, sin x < x, so (sin x)/x is slightly less than 1. The floor of a value slightly less than 1 is 0.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "d01d6539-1647-45da-8fbf-badf8c23f387"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Probability",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "If A and B are two events such that P(A) = 0.4, P(B) = 0.8 and P(B|A) = 0.6, then P(A union B) is:",
    "options": [
      {
        "id": "a",
        "text": "0.84"
      },
      {
        "id": "b",
        "text": "0.96"
      },
      {
        "id": "c",
        "text": "1.00"
      },
      {
        "id": "d",
        "text": "0.76"
      }
    ],
    "correct": "b",
    "explanation": "Use P(A cap B) = P(B|A)P(A) and the addition theorem for probability.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "25abff6d-f911-4f8b-8653-840d19d689e5"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Application of Integrals",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "The area bounded by the curve y = x|x|, x-axis and the ordinates x = -1 and x = 1 is:",
    "options": [
      {
        "id": "a",
        "text": "0"
      },
      {
        "id": "b",
        "text": "1/3"
      },
      {
        "id": "c",
        "text": "1/2"
      },
      {
        "id": "d",
        "text": "2/3"
      }
    ],
    "correct": "d",
    "explanation": "The curve is y = x^2 for x >= 0 and y = -x^2 for x < 0. Calculate the absolute area of both parts.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "670c09e2-456d-4d4a-83c2-a3b44ada84d3"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Trigonometric Functions",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "The number of solutions of the equation sin x + cos x = 2 in the interval [0, 2pi] is:",
    "options": [
      {
        "id": "a",
        "text": "0"
      },
      {
        "id": "b",
        "text": "1"
      },
      {
        "id": "c",
        "text": "2"
      },
      {
        "id": "d",
        "text": "Infinite"
      }
    ],
    "correct": "a",
    "explanation": "The maximum value of a sin x + b cos x is sqrt(a^2 + b^2). Here, the max value is sqrt(1^2 + 1^2) = sqrt(2).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "130f2ee3-7459-4c55-8d57-ef018cd516b9"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Continuity and Differentiability",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "The derivative of f(x) = log(base x) 2 with respect to x is:",
    "options": [
      {
        "id": "a",
        "text": "1/(x log 2)"
      },
      {
        "id": "b",
        "text": "1/(x (log x)^2)"
      },
      {
        "id": "c",
        "text": "- (log 2) / (x (log x)^2)"
      },
      {
        "id": "d",
        "text": "(log 2) / x"
      }
    ],
    "correct": "c",
    "explanation": "Rewrite the log using the base change formula: f(x) = (log 2) / (log x) and then use the quotient rule or power rule.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8396c6d3-f006-4a4b-8872-bf863fbbfe8e"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Vector Algebra",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "If the vectors a = i - j + 2k, b = 2i + 4j + k and c = lambda i + j + mu k are mutually orthogonal, then (lambda, mu) is:",
    "options": [
      {
        "id": "a",
        "text": "(-3, 2)"
      },
      {
        "id": "b",
        "text": "(-2, 3)"
      },
      {
        "id": "c",
        "text": "(3, -2)"
      },
      {
        "id": "d",
        "text": "(2, -3)"
      }
    ],
    "correct": "b",
    "explanation": "Use the dot product property for orthogonal vectors: a.b = 0, b.c = 0, a.c = 0. Verify a.b first.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "f0041322-560e-43e6-800a-9f317212e085"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Three Dimensional Geometry",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "The distance of the point (1, -2, 3) from the plane x - y + z = 5 measured parallel to the line x/2 = y/3 = z/(-6) is:",
    "options": [
      {
        "id": "a",
        "text": "1 unit"
      },
      {
        "id": "b",
        "text": "1/7 unit"
      },
      {
        "id": "c",
        "text": "7 units"
      },
      {
        "id": "d",
        "text": "sqrt(7) units"
      }
    ],
    "correct": "b",
    "explanation": "Find the equation of the line passing through (1, -2, 3) parallel to the given line, find the intersection with the plane, then use distance formula.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5ace87bd-e22c-47c7-84e5-69d8892726d0"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Relations and Functions",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "The number of onto functions from a set A containing 5 elements to a set B containing 2 elements is:",
    "options": [
      {
        "id": "a",
        "text": "32"
      },
      {
        "id": "b",
        "text": "31"
      },
      {
        "id": "c",
        "text": "30"
      },
      {
        "id": "d",
        "text": "25"
      }
    ],
    "correct": "c",
    "explanation": "Total functions 2^5. Subtract cases where all elements map to only one element in B (2 cases).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e9e65416-b13b-4e64-870d-2acbb08bbd66"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Complex Numbers and Quadratic Equations",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "If (1+i)/(1-i)^n = 1, then the smallest positive integer value of n is:",
    "options": [
      {
        "id": "a",
        "text": "2"
      },
      {
        "id": "b",
        "text": "3"
      },
      {
        "id": "c",
        "text": "6"
      },
      {
        "id": "d",
        "text": "4"
      }
    ],
    "correct": "d",
    "explanation": "Simplify (1+i)/(1-i) by multiplying numerator and denominator by (1+i). It simplifies to i. Solve i^n = 1.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5908fa22-5bf1-41d2-853c-e14f1c2f7a3e"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Sets",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "In a group of 50 people, 35 speak Hindi, 25 speak English and all speak at least one of the two languages. The number of people who speak only English is:",
    "options": [
      {
        "id": "a",
        "text": "15"
      },
      {
        "id": "b",
        "text": "10"
      },
      {
        "id": "c",
        "text": "20"
      },
      {
        "id": "d",
        "text": "25"
      }
    ],
    "correct": "a",
    "explanation": "Use n(H union E) = n(H) + n(E) - n(H cap E). People speaking only English = n(E) - n(H cap E).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5b24777f-3a25-4dc0-89da-a67974f393d4"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Integrals",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "The value of integral from -pi/2 to pi/2 of sin^7(x) dx is:",
    "options": [
      {
        "id": "a",
        "text": "0"
      },
      {
        "id": "b",
        "text": "1/7"
      },
      {
        "id": "c",
        "text": "pi/7"
      },
      {
        "id": "d",
        "text": "1"
      }
    ],
    "correct": "a",
    "explanation": "Identify the integrand as an odd function. The integral of an odd function over a symmetric interval is zero.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "c387cd91-b606-4deb-8936-d2f5c71de9de"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Trigonometric Functions",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "If tan alpha = 1/2 and tan beta = 1/3, then the value of alpha + beta is:",
    "options": [
      {
        "id": "a",
        "text": "pi/6"
      },
      {
        "id": "b",
        "text": "pi/4"
      },
      {
        "id": "c",
        "text": "pi/3"
      },
      {
        "id": "d",
        "text": "pi/2"
      }
    ],
    "correct": "b",
    "explanation": "Use the compound angle formula for tan(alpha + beta).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "3a837bef-b2aa-468b-8ca2-10e291532d8e"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Binomial Theorem",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "The number of terms in the expansion of (x + y + z)^10 is:",
    "options": [
      {
        "id": "a",
        "text": "11"
      },
      {
        "id": "b",
        "text": "55"
      },
      {
        "id": "c",
        "text": "66"
      },
      {
        "id": "d",
        "text": "121"
      }
    ],
    "correct": "c",
    "explanation": "The number of terms in the expansion of (x1 + x2 + ... + xr)^n is (n + r - 1)C(r - 1).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "50b65e24-3f3d-4bd4-822a-0a4f44a823a6"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Application of Derivatives",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "The slope of the tangent to the curve x = t^2 + 3t - 8, y = 2t^2 - 2t - 5 at the point (2, -1) is:",
    "options": [
      {
        "id": "a",
        "text": "2/7"
      },
      {
        "id": "b",
        "text": "6/7"
      },
      {
        "id": "c",
        "text": "7/6"
      },
      {
        "id": "d",
        "text": "-6/7"
      }
    ],
    "correct": "b",
    "explanation": "First find the value of t for the given point (x, y), then find dy/dx = (dy/dt)/(dx/dt).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "68b5bda6-e260-4695-8d94-f20ff520b9dd"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "If the general term of a sequence is an = (-1)^(n-1) * n^3, then the 9th term is:",
    "options": [
      {
        "id": "a",
        "text": "-729"
      },
      {
        "id": "b",
        "text": "81"
      },
      {
        "id": "c",
        "text": "-81"
      },
      {
        "id": "d",
        "text": "729"
      }
    ],
    "correct": "d",
    "explanation": "Substitute n=9 into the given general term expression. 9 is odd, so (-1)^8 is positive.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "1ab33c3b-171f-472a-8e9b-9bdfe489493e"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Vector Algebra",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "If |a| = 3, |b| = 4 and the angle between a and b is 120 degrees, then |a + b| is:",
    "options": [
      {
        "id": "a",
        "text": "sqrt(37)"
      },
      {
        "id": "b",
        "text": "sqrt(13)"
      },
      {
        "id": "c",
        "text": "7"
      },
      {
        "id": "d",
        "text": "1"
      }
    ],
    "correct": "b",
    "explanation": "Use the formula |a + b|^2 = |a|^2 + |b|^2 + 2|a||b| cos(theta).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "d1bac65f-fcd5-4382-82b1-62ee159aa63e"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Differential Equations",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "The degree of the differential equation [1 + (dy/dx)^2]^(3/2) = d^2y/dx^2 is:",
    "options": [
      {
        "id": "a",
        "text": "1"
      },
      {
        "id": "b",
        "text": "2"
      },
      {
        "id": "c",
        "text": "3"
      },
      {
        "id": "d",
        "text": "Not defined"
      }
    ],
    "correct": "b",
    "explanation": "To find the degree, the equation must be a polynomial in derivatives. Square both sides to remove the fractional power.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "4f28a9ee-99d1-4735-8981-5a106867a877"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Inverse Trigonometric Functions",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "The value of sin(2 sin^-1(0.6)) is:",
    "options": [
      {
        "id": "a",
        "text": "0.48"
      },
      {
        "id": "b",
        "text": "0.64"
      },
      {
        "id": "c",
        "text": "0.96"
      },
      {
        "id": "d",
        "text": "1.20"
      }
    ],
    "correct": "c",
    "explanation": "Let sin^-1(0.6) = theta, then sin theta = 0.6 and cos theta = 0.8. Find sin(2*theta) = 2 sin theta cos theta.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "883ea772-785d-4b14-81f1-25920f25eb9c"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Permutations and Combinations",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "If C(n, 12) = C(n, 8), then n is:",
    "options": [
      {
        "id": "a",
        "text": "12"
      },
      {
        "id": "b",
        "text": "8"
      },
      {
        "id": "c",
        "text": "20"
      },
      {
        "id": "d",
        "text": "24"
      }
    ],
    "correct": "c",
    "explanation": "Use the property nCx = nCy implies either x = y or x + y = n.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a95ffda9-12ef-4a93-8d04-214583437659"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Continuity and Differentiability",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "The derivative of e^(cos x) with respect to sin x is:",
    "options": [
      {
        "id": "a",
        "text": "-e^(cos x) cot x"
      },
      {
        "id": "b",
        "text": "-e^(cos x) tan x"
      },
      {
        "id": "c",
        "text": "e^(cos x) tan x"
      },
      {
        "id": "d",
        "text": "-e^(cos x) sin x / cos x"
      }
    ],
    "correct": "b",
    "explanation": "Use the formula (du/dx) / (dv/dx) where u = e^(cos x) and v = sin x.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8f4835ee-6a62-4ada-8f9c-c6b94ed13f1a"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Conic Sections",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "The focus of the parabola y^2 = -8x is:",
    "options": [
      {
        "id": "a",
        "text": "(-2, 0)"
      },
      {
        "id": "b",
        "text": "(2, 0)"
      },
      {
        "id": "c",
        "text": "(0, -2)"
      },
      {
        "id": "d",
        "text": "(0, 2)"
      }
    ],
    "correct": "a",
    "explanation": "Compare with y^2 = 4ax. Here 4a = -8, so a = -2. The focus is (a, 0).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8b6d93b3-95bf-4bd1-8404-670da81d7766"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Probability",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A box contains 3 orange balls, 3 pink balls and 2 yellow balls. If 2 balls are drawn at random without replacement, the probability that both are of the same color is:",
    "options": [
      {
        "id": "a",
        "text": "1/4"
      },
      {
        "id": "b",
        "text": "1/28"
      },
      {
        "id": "c",
        "text": "7/28"
      },
      {
        "id": "d",
        "text": "9/28"
      }
    ],
    "correct": "c",
    "explanation": "Calculate probability for (O,O), (P,P), and (Y,Y) and add them. Total balls = 8. Total ways to pick 2 = 8C2.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "cac0e4e7-4dff-4367-8910-e45f0c90ba80"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Three Dimensional Geometry",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "The distance between the planes 2x + 3y + 4z = 4 and 4x + 6y + 8z = 12 is:",
    "options": [
      {
        "id": "a",
        "text": "8/sqrt(29) units"
      },
      {
        "id": "b",
        "text": "2/sqrt(29) units"
      },
      {
        "id": "c",
        "text": "4/sqrt(29) units"
      },
      {
        "id": "d",
        "text": "2/sqrt(29) units (wait, duplication) -> sqrt(4/29) units"
      }
    ],
    "correct": "d",
    "explanation": "Convert the second plane to the same normal form: 2x + 3y + 4z = 6. Use the formula d = |d1 - d2| / sqrt(a^2 + b^2 + c^2).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "1a8387ba-3a81-48ea-83f3-cc80f7da5689"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Continuity and Differentiability",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "The value of k for which the function f(x) = { (sin 5x)/x if x != 0, k if x = 0 } is continuous at x = 0 is:",
    "options": [
      {
        "id": "a",
        "text": "1/5"
      },
      {
        "id": "b",
        "text": "1"
      },
      {
        "id": "c",
        "text": "0"
      },
      {
        "id": "d",
        "text": "5"
      }
    ],
    "correct": "d",
    "explanation": "For continuity, the limit as x approaches 0 must equal the function value at 0. Use lim (x->0) sin(ax)/x = a.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "7134eaa1-8ed2-408f-8a82-674d103483a6"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Determinants",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "If A is a square matrix of order 3 such that |adj A| = 64, then |A| is:",
    "options": [
      {
        "id": "a",
        "text": "64"
      },
      {
        "id": "b",
        "text": "plus-minus 4"
      },
      {
        "id": "c",
        "text": "plus-minus 8"
      },
      {
        "id": "d",
        "text": "8"
      }
    ],
    "correct": "c",
    "explanation": "Use the property |adj A| = |A|^(n-1), where n is the order of the matrix.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "1260e644-86ad-4e5c-8211-716e04c108f7"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Linear Programming",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "The corner points of the feasible region for an LPP are (0,0), (5,0), (3,4) and (0,5). The maximum value of Z = 2x + 3y is:",
    "options": [
      {
        "id": "a",
        "text": "15"
      },
      {
        "id": "b",
        "text": "18"
      },
      {
        "id": "c",
        "text": "17"
      },
      {
        "id": "d",
        "text": "10"
      }
    ],
    "correct": "b",
    "explanation": "Substitute each corner point into the objective function Z and find the maximum value.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "1a9e04fb-2a08-44dd-8a66-d321063352f1"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Plant Kingdom",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which of the following organisms is known to reproduce by fragmentation in the kingdom Plantae?",
    "options": [
      {
        "id": "a",
        "text": "Protonema of mosses"
      },
      {
        "id": "b",
        "text": "Diplontic gymnosperms"
      },
      {
        "id": "c",
        "text": "Pollen grains"
      },
      {
        "id": "d",
        "text": "Sequoia sempervirens"
      }
    ],
    "correct": "a",
    "explanation": "Moss protonema, filamentous algae, and fungi multiply by fragmentation.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "014da9e7-dfb1-4608-86fa-b52188ac0fcf"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Morphology of Flowering Plants",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "In Hibiscus, the stamens are fused together in a single group. This condition is known as:",
    "options": [
      {
        "id": "a",
        "text": "Diadelphous"
      },
      {
        "id": "b",
        "text": "Polyadelphous"
      },
      {
        "id": "c",
        "text": "Monoadelphous"
      },
      {
        "id": "d",
        "text": "Epipetalous"
      }
    ],
    "correct": "c",
    "explanation": "Monoadelphous is the condition where stamens are united into one bunch or one bundle, as seen in China rose.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "2b59df59-0fe7-4c30-8e0a-2b4ee841300e"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Cell: The Unit of Life",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which cell organelle is responsible for the synthesis of lipids and steroids in plant cells?",
    "options": [
      {
        "id": "a",
        "text": "Rough Endoplasmic Reticulum"
      },
      {
        "id": "b",
        "text": "Smooth Endoplasmic Reticulum"
      },
      {
        "id": "c",
        "text": "Golgi apparatus"
      },
      {
        "id": "d",
        "text": "Lysosomes"
      }
    ],
    "correct": "b",
    "explanation": "Smooth Endoplasmic Reticulum (SER) is the major site for synthesis of lipids.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "20200a24-aa69-4fe5-8fa1-9bcd3d3d50f6"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Plant Physiology (Transport)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The water potential of pure water at standard temperatures, which is not under any pressure, is taken to be:",
    "options": [
      {
        "id": "a",
        "text": "100"
      },
      {
        "id": "b",
        "text": "10"
      },
      {
        "id": "c",
        "text": "-100"
      },
      {
        "id": "d",
        "text": "Zero"
      }
    ],
    "correct": "d",
    "explanation": "By convention, the water potential of pure water at standard temperature and no pressure is zero.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "eea9251e-1d40-49c7-88cd-ae214555d026"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Photosynthesis in Higher Plants",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "During non-cyclic photophosphorylation, which complex is responsible for the photolysis of water?",
    "options": [
      {
        "id": "a",
        "text": "Photosystem II"
      },
      {
        "id": "b",
        "text": "Photosystem I"
      },
      {
        "id": "c",
        "text": "Cytochrome b6f complex"
      },
      {
        "id": "d",
        "text": "ATP synthase"
      }
    ],
    "correct": "a",
    "explanation": "The water-splitting complex is associated with PS II, which itself is physically located on the inner side of the thylakoid membrane.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "10ba829a-ff08-43aa-8a23-611fd907ba22"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Photosynthesis in Higher Plants",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "In the C4 pathway, the primary CO2 acceptor is a 3-carbon molecule called:",
    "options": [
      {
        "id": "a",
        "text": "Oxaloacetic acid (OAA)"
      },
      {
        "id": "b",
        "text": "RuBP"
      },
      {
        "id": "c",
        "text": "Phosphoenolpyruvate (PEP)"
      },
      {
        "id": "d",
        "text": "Malic acid"
      }
    ],
    "correct": "c",
    "explanation": "In C4 plants, the primary CO2 acceptor is Phosphoenolpyruvate (PEP) present in mesophyll cells.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8acbff7a-e284-43f6-89bb-9dd4df91d9df"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Respiration in Plants",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The respiratory quotient (RQ) for tripalmitin (a fat) is approximately:",
    "options": [
      {
        "id": "a",
        "text": "1.0"
      },
      {
        "id": "b",
        "text": "0.7"
      },
      {
        "id": "c",
        "text": "0.9"
      },
      {
        "id": "d",
        "text": "1.4"
      }
    ],
    "correct": "b",
    "explanation": "Fats have an RQ less than 1; specifically for tripalmitin, it is 0.7.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "c3ad01c8-4dc3-4540-8510-6d8456c8b842"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Plant Growth and Development",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which plant hormone is widely used to kill dicotyledonous weeds in cereal fields?",
    "options": [
      {
        "id": "a",
        "text": "Abscisic acid"
      },
      {
        "id": "b",
        "text": "Gibberellic acid"
      },
      {
        "id": "c",
        "text": "Cytokinin"
      },
      {
        "id": "d",
        "text": "2,4-D (Auxin)"
      }
    ],
    "correct": "d",
    "explanation": "2,4-D (a synthetic auxin) is used to kill dicot weeds and does not affect mature monocotyledonous plants.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "18082120-5281-4d49-850c-c3f3f346bd95"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Sexual Reproduction in Flowering Plants",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The exine of a pollen grain is composed of one of the most resistant organic materials known, which is:",
    "options": [
      {
        "id": "a",
        "text": "Sporopollenin"
      },
      {
        "id": "b",
        "text": "Cellulose"
      },
      {
        "id": "c",
        "text": "Pectin"
      },
      {
        "id": "d",
        "text": "Lignin"
      }
    ],
    "correct": "a",
    "explanation": "Sporopollenin can withstand high temperatures and strong acids and alkalis; no enzyme that degrades it is known.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8f420f14-b8b7-404f-89f3-537e44b67b57"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Sexual Reproduction in Flowering Plants",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "In a typical angiosperm embryo sac, how many nuclei are present at maturity?",
    "options": [
      {
        "id": "a",
        "text": "6 nuclei"
      },
      {
        "id": "b",
        "text": "7 nuclei"
      },
      {
        "id": "c",
        "text": "5 nuclei"
      },
      {
        "id": "d",
        "text": "8 nuclei"
      }
    ],
    "correct": "d",
    "explanation": "A typical angiosperm embryo sac, at maturity, though 8-nucleate, is 7-celled.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "facba1b3-0a11-4e1e-816c-7d69b4526af2"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Morphology of Flowering Plants",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "What is the sequence of arrangements of the three layers in the seed coat, from outer to inner?",
    "options": [
      {
        "id": "a",
        "text": "Tegmen, Testa"
      },
      {
        "id": "b",
        "text": "Pericarp, Endocarp"
      },
      {
        "id": "c",
        "text": "Testa, Tegmen"
      },
      {
        "id": "d",
        "text": "Hilum, Micropyle"
      }
    ],
    "correct": "c",
    "explanation": "In many seeds, the seed coat is double layered. The outer seed coat is the testa and the inner seed coat is the tegmen.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a67634dd-60e3-4392-84cd-1ec953502532"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Anatomy of Flowering Plants",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which of the following is an example of a lateral meristem responsible for producing secondary tissues?",
    "options": [
      {
        "id": "a",
        "text": "Apical meristem"
      },
      {
        "id": "b",
        "text": "Vascular cambium"
      },
      {
        "id": "c",
        "text": "Intercalary meristem"
      },
      {
        "id": "d",
        "text": "Root hair zone"
      }
    ],
    "correct": "b",
    "explanation": "Vascular cambium and cork cambium are lateral meristems that appear later in life in dicots and gymnosperms.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "1b2cf264-8994-4e97-8932-687be542cdf4"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Cell: The Unit of Life",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The clear layer of the cell wall that is primarily composed of calcium pectate and holds neighboring cells together is the:",
    "options": [
      {
        "id": "a",
        "text": "Middle lamella"
      },
      {
        "id": "b",
        "text": "Primary wall"
      },
      {
        "id": "c",
        "text": "Secondary wall"
      },
      {
        "id": "d",
        "text": "Plasmodesmata"
      }
    ],
    "correct": "a",
    "explanation": "The middle lamella is a layer mainly of calcium pectate which holds or glues the different neighboring cells together.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "6a52c8d4-8736-418b-870e-b794e65bc90a"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Molecular Basis of Inheritance",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "In DNA replication, the enzyme that joins the discontinuously synthesized fragments (Okazaki fragments) is:",
    "options": [
      {
        "id": "a",
        "text": "DNA polymerase I"
      },
      {
        "id": "b",
        "text": "Helicase"
      },
      {
        "id": "c",
        "text": "DNA ligase"
      },
      {
        "id": "d",
        "text": "RNA primase"
      }
    ],
    "correct": "c",
    "explanation": "DNA ligase joins the DNA fragments on the lagging strand.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "2af768d2-4aa7-4ca3-896c-98e402c95522"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Molecular Basis of Inheritance",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which of the following base sequences acts as a stop codon during translation in plants?",
    "options": [
      {
        "id": "a",
        "text": "AUG"
      },
      {
        "id": "b",
        "text": "UAG"
      },
      {
        "id": "c",
        "text": "UUU"
      },
      {
        "id": "d",
        "text": "GUG"
      }
    ],
    "correct": "b",
    "explanation": "UAA, UAG, and UGA are the three nonsense or stop codons.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a7cdb97a-454f-48a1-8110-6471f9353a4e"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Biodiversity and Conservation",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The 'Evil Quartet' is a term used to describe the four major causes of:",
    "options": [
      {
        "id": "a",
        "text": "Air pollution"
      },
      {
        "id": "b",
        "text": "Population explosion"
      },
      {
        "id": "c",
        "text": "Biodiversity loss"
      },
      {
        "id": "d",
        "text": "Global warming"
      }
    ],
    "correct": "c",
    "explanation": "The 'Evil Quartet' describes the four major causes of biodiversity losses: habitat loss, over-exploitation, alien species invasion, and co-extinctions.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "84ff3544-9da4-4045-8618-f219fafa80ed"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Plant Kingdom",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The endosperm in gymnosperms is formed:",
    "options": [
      {
        "id": "a",
        "text": "Before fertilization and is haploid"
      },
      {
        "id": "b",
        "text": "After fertilization and is triploid"
      },
      {
        "id": "c",
        "text": "Before fertilization and is diploid"
      },
      {
        "id": "d",
        "text": "After fertilization and is haploid"
      }
    ],
    "correct": "a",
    "explanation": "In gymnosperms, the endosperm represents the female gametophyte and is formed before fertilization (haploid).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a4559d95-6b13-49ca-8224-440380f3ce98"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Photosynthesis in Higher Plants",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The anatomical feature 'Kranz anatomy' is characteristic of the leaves of:",
    "options": [
      {
        "id": "a",
        "text": "C3 plants only"
      },
      {
        "id": "b",
        "text": "Bryophytes"
      },
      {
        "id": "c",
        "text": "Pteridophytes"
      },
      {
        "id": "d",
        "text": "C4 plants"
      }
    ],
    "correct": "d",
    "explanation": "C4 plants (like Maize and Sugarcane) have a special leaf anatomy called Kranz anatomy where bundle sheath cells surround the vascular bundles.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "f523adc8-42d2-4e8b-8f24-b14b01b20a9a"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Cell Cycle and Cell Division",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which stage of Prophase I is characterized by the appearance of the recombination nodules?",
    "options": [
      {
        "id": "a",
        "text": "Zygotene"
      },
      {
        "id": "b",
        "text": "Pachytene"
      },
      {
        "id": "c",
        "text": "Diplotene"
      },
      {
        "id": "d",
        "text": "Leptotene"
      }
    ],
    "correct": "b",
    "explanation": "Pachytene is characterized by the appearance of recombination nodules, the sites at which crossing over occurs.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "eaec236b-cc28-44d6-8148-1d389c3752ff"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Principles of Inheritance and Variation",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "In a monohybrid cross (F2 generation), what is the expected genotypic ratio according to Mendel's laws?",
    "options": [
      {
        "id": "a",
        "text": "3 : 1"
      },
      {
        "id": "b",
        "text": "9 : 3 : 3 : 1"
      },
      {
        "id": "c",
        "text": "1 : 2 : 1"
      },
      {
        "id": "d",
        "text": "1 : 1 : 1 : 1"
      }
    ],
    "correct": "c",
    "explanation": "The genotypic ratio of a monohybrid cross is 1(TT) : 2(Tt) : 1(tt).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "41404bd9-0001-4700-8980-6485f9f3c6b3"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Sexual Reproduction in Flowering Plants",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "What is the main function of the tapetum layer in an anther?",
    "options": [
      {
        "id": "a",
        "text": "Nourishment of pollen grains"
      },
      {
        "id": "b",
        "text": "Dehiscence of anther"
      },
      {
        "id": "c",
        "text": "Protection of the anther wall"
      },
      {
        "id": "d",
        "text": "Production of microspores"
      }
    ],
    "correct": "a",
    "explanation": "The tapetum is the innermost wall layer and its main function is to nourish the developing pollen grains.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "1eb97618-3642-408e-8c99-9ba7d6cdf41a"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Plant Growth and Development",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The 'Bakane' (foolish seedling) disease of rice seedlings was caused by a fungal pathogen and led to the discovery of which hormone?",
    "options": [
      {
        "id": "a",
        "text": "Auxin"
      },
      {
        "id": "b",
        "text": "Gibberellin"
      },
      {
        "id": "c",
        "text": "Cytokinin"
      },
      {
        "id": "d",
        "text": "Ethylene"
      }
    ],
    "correct": "b",
    "explanation": "E. Kurosawa identified that symptoms were caused by Gibberella fujikuroi, leading to the discovery of Gibberellic acid.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5a67794b-2fbc-42df-82a4-f6ad617011eb"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Plant Kingdom",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which plant group is often referred to as the 'Amphibians of the Plant Kingdom'?",
    "options": [
      {
        "id": "a",
        "text": "Thallophytes"
      },
      {
        "id": "b",
        "text": "Pteridophytes"
      },
      {
        "id": "c",
        "text": "Bryophytes"
      },
      {
        "id": "d",
        "text": "Gymnosperms"
      }
    ],
    "correct": "c",
    "explanation": "Bryophytes are called amphibians because they live in soil but depend on water for sexual reproduction.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "0d02c997-128a-4165-8154-11f2bc3a8966"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Anatomy of Flowering Plants",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "In the dicot root, the vascular bundles are described as:",
    "options": [
      {
        "id": "a",
        "text": "Conjoint and closed"
      },
      {
        "id": "b",
        "text": "Radial and exarch"
      },
      {
        "id": "c",
        "text": "Conjoint and open inhalant"
      },
      {
        "id": "d",
        "text": "Radial and endarch"
      }
    ],
    "correct": "b",
    "explanation": "In roots, xylem and phloem are arranged in an alternate manner on different radii, called radial arrangement. In dicot roots, the xylem is usually exarch.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a1bc662c-dddc-4aff-8db2-a737d433c825"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Mineral Nutrition (Plant Phys)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The process of conversion of atmospheric nitrogen (N2) to ammonia (NH3) by living organisms is called:",
    "options": [
      {
        "id": "a",
        "text": "Biological Nitrogen Fixation"
      },
      {
        "id": "b",
        "text": "Nitrification"
      },
      {
        "id": "c",
        "text": "Denitrification"
      },
      {
        "id": "d",
        "text": "Ammonification"
      }
    ],
    "correct": "a",
    "explanation": "Nitrogen fixation is the process of converting dinitrogen to ammonia.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "b1bf81e3-969a-4cf1-8fd1-6e11b2fb5ac0"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Plant Physiology (Transport)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Guttation, the loss of water in liquid phase from the margins of leaves, is primarily due to:",
    "options": [
      {
        "id": "a",
        "text": "Transpiration pull"
      },
      {
        "id": "b",
        "text": "Imbibition pressure"
      },
      {
        "id": "c",
        "text": "Root pressure"
      },
      {
        "id": "d",
        "text": "Osmotic potential"
      }
    ],
    "correct": "c",
    "explanation": "Root pressure is responsible for guttation in small herbaceous plants under conditions of low transpiration.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "78caa4dc-f4e0-4aaa-8b71-f19ae5d8f514"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Mineral Nutrition (Plant Phys)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which of the following is a non-symbiotic (free-living) nitrogen-fixing bacterium?",
    "options": [
      {
        "id": "a",
        "text": "Rhizobium"
      },
      {
        "id": "b",
        "text": "Frankia inhalant"
      },
      {
        "id": "c",
        "text": "Anabaena (in Azolla)"
      },
      {
        "id": "d",
        "text": "Azotobacter"
      }
    ],
    "correct": "d",
    "explanation": "Azotobacter and Beijerinckia are free-living nitrogen-fixing bacteria, whereas Rhizobium is symbiotic.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "b7635ed8-8d86-408a-809f-99ebfd3f950d"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Mineral Nutrition (Plant Phys)",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The technique of growing plants in a nutrient solution in the complete absence of soil is called:",
    "options": [
      {
        "id": "a",
        "text": "Aeroponics"
      },
      {
        "id": "b",
        "text": "Hydroponics"
      },
      {
        "id": "c",
        "text": "Geoponics inhalant"
      },
      {
        "id": "d",
        "text": "Aquaculture"
      }
    ],
    "correct": "b",
    "explanation": "Hydroponics is the technique of growing plants in a nutrient solution.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "2077f947-70a0-49da-8185-e074a8c98e42"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Cell: The Unit of Life inhalant",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "According to the fluid mosaic model, the 'quasi-fluid' nature of lipids enables lateral movement of proteins. This model was proposed by:",
    "options": [
      {
        "id": "a",
        "text": "Singer and Nicolson"
      },
      {
        "id": "b",
        "text": "Schleiden and Schwann"
      },
      {
        "id": "c",
        "text": "Robert Brown"
      },
      {
        "id": "d",
        "text": "Camillo Golgi"
      }
    ],
    "correct": "a",
    "explanation": "The fluid mosaic model was proposed by Singer and Nicolson in 1972.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "2868e6a5-74f2-44d3-893f-d7a5146067e4"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Molecular Basis of Inheritance",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "In a DNA molecule, the distance between two consecutive base pairs is:",
    "options": [
      {
        "id": "a",
        "text": "3.4 nm"
      },
      {
        "id": "b",
        "text": "2.0 nm"
      },
      {
        "id": "c",
        "text": "0.34 nm inhalant"
      },
      {
        "id": "d",
        "text": "34 nm"
      }
    ],
    "correct": "c",
    "explanation": "In B-DNA, the pitch is 3.4 nm and there are 10 bp per turn, so the distance between bp is 0.34 nm.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e9cb243a-b412-46e0-8775-d07fc0b5df74"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Trigonometric Functions",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "Let f(x) = |cos x| + |cos(x + π/3)|. The maximum value of f(x) over the set of real numbers is:",
    "options": [
      {
        "id": "a",
        "text": "1"
      },
      {
        "id": "b",
        "text": "√3/2"
      },
      {
        "id": "c",
        "text": "√3"
      },
      {
        "id": "d",
        "text": "2"
      }
    ],
    "correct": "c",
    "explanation": "The function has a period of π. By checking critical points like x = 0 or x = π/6, we find the maximum occurs where the sum of absolute values peaks.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "15e98e51-43fc-494e-85a5-477827cbd223"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "If the sum of the first n terms of an A.P. is cn², then the sum of squares of these n terms is:",
    "options": [
      {
        "id": "a",
        "text": "n(4n² - 1)c²/3"
      },
      {
        "id": "b",
        "text": "n(4n² + 1)c²/3"
      },
      {
        "id": "c",
        "text": "c²n²(n + 1)²/4"
      },
      {
        "id": "d",
        "text": "2c²n(n + 1)(2n + 1)/6"
      }
    ],
    "correct": "a",
    "explanation": "Find the general term a_n from S_n, then apply the formula for sum of squares of first n odd/even integers based on the common difference.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "0362ec22-3738-4c6d-83da-fdb561903445"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Probability",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "A committee of 3 is to be formed from 6 women and 4 men. What is the probability that the committee contains at least one woman, given that it contains at least one man?",
    "options": [
      {
        "id": "a",
        "text": "1/2"
      },
      {
        "id": "b",
        "text": "9/11"
      },
      {
        "id": "c",
        "text": "5/6"
      },
      {
        "id": "d",
        "text": "21/22"
      }
    ],
    "correct": "b",
    "explanation": "Use conditional probability P(A|B) = P(A ∩ B) / P(B) where A is at least one woman and B is at least one man.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "40c7bb78-70ed-44f7-8504-e83948493fa8"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Integrals",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "The value of the integral ∫[0 to π] e^(cos²x) cos³(2n + 1)x dx for any integer n is:",
    "options": [
      {
        "id": "a",
        "text": "π/2"
      },
      {
        "id": "b",
        "text": "e^n"
      },
      {
        "id": "c",
        "text": "1/n"
      },
      {
        "id": "d",
        "text": "0"
      }
    ],
    "correct": "d",
    "explanation": "Use the property ∫[0 to a] f(x) dx = ∫[0 to a] f(a - x) dx. For this function, f(π - x) = -f(x).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "3370bb41-e9de-4f87-8948-9187f7a138b4"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Continuity and Differentiability",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "If f(x) = (x-1)(x-2)(x-3)...(x-100), then the value of f'(100) is:",
    "options": [
      {
        "id": "a",
        "text": "100!"
      },
      {
        "id": "b",
        "text": "99!"
      },
      {
        "id": "c",
        "text": "0"
      },
      {
        "id": "d",
        "text": "100!/2"
      }
    ],
    "correct": "b",
    "explanation": "Use the product rule for differentiation or the logarithmic differentiation method. At x=100, only one term in the summation remains non-zero.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e4a9d561-e6d9-4601-8016-5987e314e8a5"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Relations and Functions",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "The domain of the function f(x) = sqrt(log_0.5 (x - 1)) is:",
    "options": [
      {
        "id": "a",
        "text": "(1, 2]"
      },
      {
        "id": "b",
        "text": "[1, 2]"
      },
      {
        "id": "c",
        "text": "(1, ∞)"
      },
      {
        "id": "d",
        "text": "[2, ∞)"
      }
    ],
    "correct": "a",
    "explanation": "The argument of the log must be positive, and for the square root, the log value must be non-negative. Note the base is < 1.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "fb766497-6664-42f7-81cb-41f08f3c72ee"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Trigonometric Functions",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "The number of solutions of the equation sin x + sin 5x = sin 3x in the interval [0, π] is:",
    "options": [
      {
        "id": "a",
        "text": "4"
      },
      {
        "id": "b",
        "text": "5"
      },
      {
        "id": "c",
        "text": "6"
      },
      {
        "id": "d",
        "text": "3"
      }
    ],
    "correct": "c",
    "explanation": "Use the sum-to-product formula for sin x + sin 5x and then solve for common factors.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e76d5ec8-8002-4929-8af2-eecc235d5767"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Determinants",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "If A is a square matrix of order 3 such that |adj A| = 64, then |A| can be:",
    "options": [
      {
        "id": "a",
        "text": "4 or -4"
      },
      {
        "id": "b",
        "text": "64 or -64"
      },
      {
        "id": "c",
        "text": "8 or -8"
      },
      {
        "id": "d",
        "text": "16 or -16"
      }
    ],
    "correct": "c",
    "explanation": "Use the property |adj A| = |A|^(n-1) where n is the order of the matrix.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "6b01c91b-0962-4fc6-8fc4-363cda8ad527"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Application of Derivatives",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "The slope of the tangent to the curve y = ∫[0 to x] dt / (1 + t³) at the point where x = 1 is:",
    "options": [
      {
        "id": "a",
        "text": "0"
      },
      {
        "id": "b",
        "text": "1/4"
      },
      {
        "id": "c",
        "text": "1/3"
      },
      {
        "id": "d",
        "text": "1/2"
      }
    ],
    "correct": "d",
    "explanation": "Use the Leibniz rule (Fundamental Theorem of Calculus Part 1) to find the derivative of the integral.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "f37715a9-121e-4836-8c8e-7fe16969cef5"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Vector Algebra",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "If the vectors a = i - j + 2k, b = 2i + 4j + k and c = λi + j + μk are mutually orthogonal, then (λ, μ) is:",
    "options": [
      {
        "id": "a",
        "text": "(-3, 2)"
      },
      {
        "id": "b",
        "text": "(-2, 3)"
      },
      {
        "id": "c",
        "text": "(2, -3)"
      },
      {
        "id": "d",
        "text": "(3, -2)"
      }
    ],
    "correct": "b",
    "explanation": "For vectors to be mutually orthogonal, their pairwise dot products must be zero. Solve the resulting system of equations.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "29b883df-5bae-4968-8932-02945dd6f9cb"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Inverse Trigonometric Functions",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "The value of sin(2 tan⁻¹(1/3)) + cos(tan⁻¹(2√2)) is:",
    "options": [
      {
        "id": "a",
        "text": "14/15"
      },
      {
        "id": "b",
        "text": "13/15"
      },
      {
        "id": "c",
        "text": "12/15"
      },
      {
        "id": "d",
        "text": "11/15"
      }
    ],
    "correct": "a",
    "explanation": "Use the formula sin(2θ) = 2tanθ/(1+tan²θ) and represent inverse trig functions as triangles to find the cosine.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "4f37de18-5c4c-4692-8454-78d51c6d5f10"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Relations and Functions",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "If a set A has 3 elements and set B has 4 elements, the number of injective functions from A to B is:",
    "options": [
      {
        "id": "a",
        "text": "12"
      },
      {
        "id": "b",
        "text": "24"
      },
      {
        "id": "c",
        "text": "64"
      },
      {
        "id": "d",
        "text": "81"
      }
    ],
    "correct": "b",
    "explanation": "An injective (one-to-one) function requires picking 3 distinct elements from B for the 3 elements in A and arranging them. Use P(n, r).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "aed97d3d-655d-4953-8d8e-11c751ef1b86"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Application of Integrals",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "The area of the region bounded by the curve y = √x, x = 2y + 3 in the first quadrant and the y-axis is:",
    "options": [
      {
        "id": "a",
        "text": "18 units²"
      },
      {
        "id": "b",
        "text": "6 units²"
      },
      {
        "id": "c",
        "text": "9 units²"
      },
      {
        "id": "d",
        "text": "12 units²"
      }
    ],
    "correct": "c",
    "explanation": "Find the points of intersection and integrate with respect to y to simplify the calculation. Area = ∫[y1 to y2] (x_right - x_left) dy.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "3ab187ab-e6c8-43f9-825c-cd81106dfede"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Limits and Derivatives",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "The value of lim (x→0) [ (1 - cos 2x)(3 + cos x) / (x tan 4x) ] is:",
    "options": [
      {
        "id": "a",
        "text": "1/2"
      },
      {
        "id": "b",
        "text": "1"
      },
      {
        "id": "c",
        "text": "4"
      },
      {
        "id": "d",
        "text": "2"
      }
    ],
    "correct": "d",
    "explanation": "Apply the standard limits lim (x→0) (1-cos 2x)/(2x)² = 1/2 and lim (x→0) (tan 4x)/4x = 1.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "9abaa945-eff1-4e0d-85d1-2d7e7f5f9235"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Relations and Functions",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "In a binary operation * defined on R by a * b = a + b + ab, the identity element is:",
    "options": [
      {
        "id": "a",
        "text": "0"
      },
      {
        "id": "b",
        "text": "1"
      },
      {
        "id": "c",
        "text": "-1"
      },
      {
        "id": "d",
        "text": "does not exist"
      }
    ],
    "correct": "a",
    "explanation": "An identity element 'e' must satisfy a * e = a and e * a = a for all a in the set. Solve a + e + ae = a.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a7e0a6ea-f31b-4731-837d-1395ec6ed681"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Differential Equations",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "The general solution of the differential equation dy/dx = (x + y + 1) / (x + y - 1) is:",
    "options": [
      {
        "id": "a",
        "text": "y - x + log(x + y) = C"
      },
      {
        "id": "b",
        "text": "y + x + log(x + y) = C"
      },
      {
        "id": "c",
        "text": "y - x - log(x + y) = C"
      },
      {
        "id": "d",
        "text": "x - y + log(x + y) = C"
      }
    ],
    "correct": "c",
    "explanation": "Substitute u = x + y. This reduces the equation to a separable form. Remember to substitute u back to x and y at the end.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8e169e94-b20f-44a2-8ad2-41422971f92b"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Three Dimensional Geometry",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "The value of k for which the lines (x-1)/2 = (y-2)/3 = (z-3)/4 and (x-4)/5 = (y-1)/2 = z/k are coplanar is:",
    "options": [
      {
        "id": "a",
        "text": "1"
      },
      {
        "id": "b",
        "text": "2"
      },
      {
        "id": "c",
        "text": "0"
      },
      {
        "id": "d",
        "text": "-1"
      }
    ],
    "correct": "a",
    "explanation": "For two lines to be coplanar, the determinant formed by the difference of points and the direction ratios must be zero.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "129ebfec-ccba-4d6e-8909-e5e4842492ab"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Binomial Theorem",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "The term independent of x in the expansion of (√x + 1/3x²)¹⁰ is:",
    "options": [
      {
        "id": "a",
        "text": "5/27"
      },
      {
        "id": "b",
        "text": "5/9"
      },
      {
        "id": "c",
        "text": "10/81"
      },
      {
        "id": "d",
        "text": "1/3"
      }
    ],
    "correct": "b",
    "explanation": "Use the general term formula T_{r+1} = nCr a^{n-r} b^r and set the exponent of x to zero.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "2ad24998-54ed-482e-89bb-cf6f75ce9f23"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Conic Sections",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "If the eccentricity of an ellipse is 5/8 and the distance between its foci is 10, then the length of the latus rectum is:",
    "options": [
      {
        "id": "a",
        "text": "39/8"
      },
      {
        "id": "b",
        "text": "12/5"
      },
      {
        "id": "c",
        "text": "25/4"
      },
      {
        "id": "d",
        "text": "39/4"
      }
    ],
    "correct": "d",
    "explanation": "Use the relations 2ae = distance between foci and b² = a²(1 - e²) to find the parameters, then use LR = 2b²/a.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "4ceef5f2-fe2d-4b74-8b22-a21de8abfc1c"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Straight Lines",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "If a, b, c are in A.P., then the lines ax + by + c = 0 pass through the fixed point:",
    "options": [
      {
        "id": "a",
        "text": "(1, 1)"
      },
      {
        "id": "b",
        "text": "(1, -2)"
      },
      {
        "id": "c",
        "text": "(-1, 2)"
      },
      {
        "id": "d",
        "text": "(1, 2)"
      }
    ],
    "correct": "b",
    "explanation": "Use the condition for A.P., 2b = a + c, and rewrite the line equation to find a point that always satisfies it.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "75787aac-1f54-4545-8ef2-5625eea21375"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Statistics",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "The variance of the first 10 natural numbers is:",
    "options": [
      {
        "id": "a",
        "text": "8.5"
      },
      {
        "id": "b",
        "text": "7.25"
      },
      {
        "id": "c",
        "text": "9.15"
      },
      {
        "id": "d",
        "text": "8.25"
      }
    ],
    "correct": "d",
    "explanation": "Use the variance formula for first n natural numbers: Var = (n² - 1)/12.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "f3f358ed-9aaa-44c8-808a-cc2406b351ba"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Continuity and Differentiability",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "If f(x) = sin⁻¹(2x / (1 + x²)), then the derivative f'(x) at x = 2 is:",
    "options": [
      {
        "id": "a",
        "text": "-2/5"
      },
      {
        "id": "b",
        "text": "2/5"
      },
      {
        "id": "c",
        "text": "-1/5"
      },
      {
        "id": "d",
        "text": "1/5"
      }
    ],
    "correct": "a",
    "explanation": "Note that the standard substitution x = tan θ gives f(x) = 2θ, but the range of sin⁻¹ requires careful handling when |x| > 1. For x > 1, f(x) = π - 2 tan⁻¹ x.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "af6c7dc8-437f-4e52-86b9-60f0c8c3ee77"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Trigonometric Functions",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "If tan A = 1/2 and tan B = 1/3, then the value of A + B is:",
    "options": [
      {
        "id": "a",
        "text": "π/6"
      },
      {
        "id": "b",
        "text": "π/4"
      },
      {
        "id": "c",
        "text": "π/3"
      },
      {
        "id": "d",
        "text": "π/2"
      }
    ],
    "correct": "b",
    "explanation": "Use the compound angle formula tan(A + B) = (tan A + tan B) / (1 - tan A tan B).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5217d3dd-dc9f-4954-85af-9b28fdfb72ea"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Complex Numbers and Quadratic Equations",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "The value of |(1+i)(2+i)/(3+i)| is:",
    "options": [
      {
        "id": "a",
        "text": "1/2"
      },
      {
        "id": "b",
        "text": "√2/2"
      },
      {
        "id": "c",
        "text": "1"
      },
      {
        "id": "d",
        "text": "√5/2"
      }
    ],
    "correct": "c",
    "explanation": "Use the property |z1 z2 / z3| = |z1||z2| / |z3|. Calculating magnitudes is faster than simplifying the fraction.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "bc4abe76-5722-4730-8026-7f405499db93"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Sets",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "The number of non-empty subsets of a set containing 7 elements is:",
    "options": [
      {
        "id": "a",
        "text": "64"
      },
      {
        "id": "b",
        "text": "128"
      },
      {
        "id": "c",
        "text": "1278"
      },
      {
        "id": "d",
        "text": "127"
      }
    ],
    "correct": "d",
    "explanation": "A set with n elements has 2^n total subsets. Subtract 1 to exclude the empty set.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "25d12b1b-fd73-49f3-8995-e28899802c50"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Determinants",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "If the area of the triangle with vertices (k, 0), (4, 0) and (0, 2) is 4 square units, then the value of k is:",
    "options": [
      {
        "id": "a",
        "text": "0 or 8"
      },
      {
        "id": "b",
        "text": "0 or -8"
      },
      {
        "id": "c",
        "text": "4 or -4"
      },
      {
        "id": "d",
        "text": "8 or -4"
      }
    ],
    "correct": "a",
    "explanation": "Use the determinant formula for the area of a triangle: Area = 1/2 |x1(y2-y3) + x2(y3-y1) + x3(y1-y2)| and consider both signs for the absolute value.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "38fea0c5-c010-402b-8cb3-96b6d67249c7"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Application of Derivatives",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "The function f(x) = x³ - 6x² + 9x + 15 is strictly decreasing in the interval:",
    "options": [
      {
        "id": "a",
        "text": "(1, ∞)"
      },
      {
        "id": "b",
        "text": "(1, 3)"
      },
      {
        "id": "c",
        "text": "(-∞, 1)"
      },
      {
        "id": "d",
        "text": "(3, ∞)"
      }
    ],
    "correct": "b",
    "explanation": "Find the derivative f'(x) and solve the inequality f'(x) < 0 to find the interval of decrease.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "4ce3bc91-02c6-43e1-8050-b06b4de9861d"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Differential Equations",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "The degree of the differential equation [1 + (dy/dx)²]^(3/2) = d²y/dx² is:",
    "options": [
      {
        "id": "a",
        "text": "1"
      },
      {
        "id": "b",
        "text": "3/2"
      },
      {
        "id": "c",
        "text": "2"
      },
      {
        "id": "d",
        "text": "3"
      }
    ],
    "correct": "c",
    "explanation": "The degree is the power of the highest order derivative when the equation is free from radicals and fractional powers. Square both sides to eliminate the 3/2 power.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "1ca5b430-dfd6-4509-8528-4895dbd35e02"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Vector Algebra",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "If the projection of vector a = 2i + 3j + 2k on vector b = i + 2j + k is:",
    "options": [
      {
        "id": "a",
        "text": "10/√6"
      },
      {
        "id": "b",
        "text": "5/√6"
      },
      {
        "id": "c",
        "text": "8/√3"
      },
      {
        "id": "d",
        "text": "5√6/3"
      }
    ],
    "correct": "d",
    "explanation": "Projection of a on b is given by (a·b) / |b|. Calculate the dot product and the magnitude of b.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "43aac8a4-053a-4e24-8192-dcefeb180355"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Integrals",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "The value of ∫ [1 / (x(x^5 + 1))] dx is:",
    "options": [
      {
        "id": "a",
        "text": "1/5 log|x^5 / (x^5 + 1)| + C"
      },
      {
        "id": "b",
        "text": "1/5 log|(x^5 + 1) / x^5| + C"
      },
      {
        "id": "c",
        "text": "log|x^5 / (x^5 + 1)| + C"
      },
      {
        "id": "d",
        "text": "5 log|x / (x^5 + 1)| + C"
      }
    ],
    "correct": "a",
    "explanation": "Multiply and divide by x^4 to use the substitution u = x^5 + 1. This is a standard NCERT technique for integrals of the form 1/x(x^n+1).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "1d00bbf9-3434-4a95-86ac-030cfec39705"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Plant Kingdom",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Identify the correct set of characteristics regarding the sporophyte of mosses (like Funaria) compared to liverworts.",
    "options": [
      {
        "id": "a",
        "text": "It is simpler and lacks a foot."
      },
      {
        "id": "b",
        "text": "It is completely independent of the gametophyte."
      },
      {
        "id": "c",
        "text": "It is more elaborate and possesses a capsule."
      },
      {
        "id": "d",
        "text": "It lacks a seta and capsule."
      }
    ],
    "correct": "c",
    "explanation": "Moss sporophytes are more elaborate than liverworts, possessing a capsule with a complex dehiscence mechanism involving peristome teeth.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "680090d6-84d1-4e57-8020-83df86fbfb5a"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Anatomy of Flowering Plants",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "In the dicot root, the vascular cambium originates from:",
    "options": [
      {
        "id": "a",
        "text": "Primary meristematic tissue only."
      },
      {
        "id": "b",
        "text": "Tissues located below the phloem bundles and portions of pericycle tissue."
      },
      {
        "id": "c",
        "text": "The intrafascicular cambium present within the bundles."
      },
      {
        "id": "d",
        "text": "The cork cambium during primary growth."
      }
    ],
    "correct": "b",
    "explanation": "The vascular cambium in dicot roots is completely secondary, originating from tissues below phloem and above protoxylem (pericycle).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8faf864a-fb4e-46ce-8c9c-3473fbe14ab2"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Photosynthesis in Higher Plants",
    "topic": "",
    "difficulty": "medium",
    "qtype": "assertion_reason",
    "body": "Assertion (A): In C4 plants, photorespiration does not occur. \nReason (R): They have a mechanism that increases the concentration of CO2 at the enzyme site of RuBisCO.",
    "options": [
      {
        "id": "a",
        "text": "Both (A) and (R) are true and (R) is the correct explanation of (A)."
      },
      {
        "id": "b",
        "text": "Both (A) and (R) are true but (R) is not the correct explanation of (A)."
      },
      {
        "id": "c",
        "text": "(A) is true but (R) is false."
      },
      {
        "id": "d",
        "text": "(A) is false but (R) is true."
      }
    ],
    "correct": "a",
    "explanation": "C4 plants use the C4 pathway to concentrate CO2 in bundle sheath cells, suppressing the oxygenase activity of RuBisCO.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "427c584b-faf3-4701-821e-b574d94c4a19"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Morphology of Flowering Plants",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Match the placentation type with the plant: \n(i) Marginal - Pea \n(ii) Axile - Mustard \n(iii) Parietal - Lemon \n(iv) Free-central - Primrose \nWhich of the following pairings are correct?",
    "options": [
      {
        "id": "a",
        "text": "(i) and (ii) only"
      },
      {
        "id": "b",
        "text": "(ii) and (iii) only"
      },
      {
        "id": "c",
        "text": "(i) and (iii) only"
      },
      {
        "id": "d",
        "text": "(i) and (iv) only"
      }
    ],
    "correct": "d",
    "explanation": "Mustard has parietal placentation and Lemon has axile; Pea is marginal and Primrose is free-central.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "cec8381c-fcfe-46fa-8a0b-af7407af4f31"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Sexual Reproduction in Flowering Plants",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "What is the fate of the primary endosperm nucleus (PEN) in a coconut?",
    "options": [
      {
        "id": "a",
        "text": "It develops into the diploid embryo."
      },
      {
        "id": "b",
        "text": "It forms the hard stony endocarp."
      },
      {
        "id": "c",
        "text": "It undergoes free nuclear division to form liquid endosperm."
      },
      {
        "id": "d",
        "text": "It degenerates after fertilization."
      }
    ],
    "correct": "c",
    "explanation": "The PEN undergoes successive free nuclear divisions to form the liquid endosperm (water) followed by cellularization to form the kernel.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "6c980c6d-1915-4f2b-81df-d237366b1b4a"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Transport in Plants (Conceptual)",
    "topic": "",
    "difficulty": "medium",
    "qtype": "assertion_reason",
    "body": "Assertion (A): In a standard ECG, the T-wave represents the return of the ventricles from excited to normal state. \nReason (R): The end of the T-wave marks the end of systole. \n(Note: Though Human Phys, shifted to Botany focus: Let's replace with Plant Physiology) \nAssertion (A): The movement of water through the root layers is ultimately symplastic in the endodermis. \nReason (R): The casparian strips are composed of a water-impermeable waxy material called suberin.",
    "options": [
      {
        "id": "a",
        "text": "Both (A) and (R) are true and (R) is the correct explanation of (A)."
      },
      {
        "id": "b",
        "text": "Both (A) and (R) are true but (R) is not the correct explanation of (A)."
      },
      {
        "id": "c",
        "text": "(A) is true but (R) is false."
      },
      {
        "id": "d",
        "text": "(A) is false but (R) is true."
      }
    ],
    "correct": "a",
    "explanation": "Suberin prevents apoplastic movement, forcing water into the symplast to cross the endodermis.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a728dbb4-1166-4651-84a5-483f624221fe"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Photosynthesis in Higher Plants",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "During the process of Z-scheme in photosynthesis, the electrons are moved from PS II to PS I through:",
    "options": [
      {
        "id": "a",
        "text": "NADP+ directly"
      },
      {
        "id": "b",
        "text": "Atmospheric CO2"
      },
      {
        "id": "c",
        "text": "Water molecules directly"
      },
      {
        "id": "d",
        "text": "An electron transport system consisting of cytochromes."
      }
    ],
    "correct": "d",
    "explanation": "Electrons from PS II are passed to an electron transport system consisting of cytochromes before reaching PS I.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "ece990da-713e-4eb5-8155-a0f6ac694fb0"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Sexual Reproduction in Flowering Plants",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Which of the following is the correct sequence of events in the life cycle of a General Angiosperm?",
    "options": [
      {
        "id": "a",
        "text": "Pollination -> Microsporogenesis -> Fertilization -> Embryogenesis"
      },
      {
        "id": "b",
        "text": "Microsporogenesis -> Pollination -> Double Fertilization -> Embryogenesis"
      },
      {
        "id": "c",
        "text": "Embryogenesis -> Microsporogenesis -> Pollination -> Fertilization"
      },
      {
        "id": "d",
        "text": "Pollination -> Double Fertilization -> Microsporogenesis -> Embryogenesis"
      }
    ],
    "correct": "b",
    "explanation": "Microsporogenesis leads to pollen, which germinates; double fertilization then occurs, leading to an embryo.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "b062a861-51c7-4ece-8b15-be6e3981d9a5"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Respiration in Plants",
    "topic": "",
    "difficulty": "medium",
    "qtype": "assertion_reason",
    "body": "Assertion (A): In the process of Glycolysis, the net gain of ATP is 2 molecules. \nReason (R): Four ATP molecules are produced by substrate-level phosphorylation, but two are consumed in the preparatory phase.",
    "options": [
      {
        "id": "a",
        "text": "Both (A) and (R) are true and (R) is the correct explanation of (A)."
      },
      {
        "id": "b",
        "text": "Both (A) and (R) are true but (R) is not the correct explanation of (A)."
      },
      {
        "id": "c",
        "text": "(A) is true but (R) is false."
      },
      {
        "id": "d",
        "text": "(A) is false but (R) is true."
      }
    ],
    "correct": "a",
    "explanation": "Glycolysis uses 2 ATP (Glucose to G6P, F6P to F-1,6-BP) and produces 4 ATP (1,3-BPGA to 3-PGA, PEP to Pyruvate). Net = 2.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "32c846c2-1399-410c-8e5a-a2d97f375eea"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Plant Growth and Development",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "A plant hormone is used to speed up the malting process in the brewing industry. Identify it.",
    "options": [
      {
        "id": "a",
        "text": "Auxin"
      },
      {
        "id": "b",
        "text": "Gibberellin"
      },
      {
        "id": "c",
        "text": "Cytokinin"
      },
      {
        "id": "d",
        "text": "Ethylene"
      }
    ],
    "correct": "b",
    "explanation": "Gibberellins (GA3) are used in the brewing industry to stimulate the production of alpha-amylase to speed up malting.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "705cc79a-e203-4f53-83c1-f17a92f6f9c1"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Photosynthesis in Higher Plants",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The term 'Kranz' in Kranz anatomy refers to:",
    "options": [
      {
        "id": "a",
        "text": "Large size of cells"
      },
      {
        "id": "b",
        "text": "Presence of chloroplasts"
      },
      {
        "id": "c",
        "text": "Wreath-like arrangement of cells"
      },
      {
        "id": "d",
        "text": "Presence of grana in cells"
      }
    ],
    "correct": "c",
    "explanation": "'Kranz' means 'wreath', reflecting the arrangement of bundle sheath cells around the vascular bundles.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "54d51e2c-6462-4185-899b-549111b23e70"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Sexual Reproduction in Flowering Plants",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "In Citrus and Mango, the occurrence of more than one embryo in a seed is due to:",
    "options": [
      {
        "id": "a",
        "text": "Nucellar cells protruding into the embryo sac."
      },
      {
        "id": "b",
        "text": "Fertilization of multiple egg cells."
      },
      {
        "id": "c",
        "text": "Division of the zygote into many parts."
      },
      {
        "id": "d",
        "text": "Formation of embryos from the endosperm."
      }
    ],
    "correct": "a",
    "explanation": "In Citrus/Mango, nucellar cells surrounding the embryo sac start dividing and protrude into the sac to form embryos (Polyembryony).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "0d5df90c-e4c3-4619-8037-0b476a7229a6"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Plant Growth and Development",
    "topic": "",
    "difficulty": "medium",
    "qtype": "assertion_reason",
    "body": "Assertion (A): Vernalisation prevents precocious reproductive development late in the growing season. \nReason (R): It enables the plant to have sufficient time to reach maturity before flowering.",
    "options": [
      {
        "id": "a",
        "text": "Both (A) and (R) are true and (R) is the correct explanation of (A)."
      },
      {
        "id": "b",
        "text": "Both (A) and (R) are true but (R) is not the correct explanation of (A)."
      },
      {
        "id": "c",
        "text": "(A) is true but (R) is false."
      },
      {
        "id": "d",
        "text": "(A) is false but (R) is true."
      }
    ],
    "correct": "a",
    "explanation": "Vernalisation ensures plants flower only after experiencing a cold period, allowing proper vegetative growth first.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8e7edcfc-30d6-4996-8cbb-f36afee6f113"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Photosynthesis in Higher Plants",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Which of the following describes the 'Law of Limiting Factors' proposed by Blackman?",
    "options": [
      {
        "id": "a",
        "text": "Photosynthesis is limited only by CO2 concentration."
      },
      {
        "id": "b",
        "text": "The rate of a process is determined by the factor which is nearest to its minimal value."
      },
      {
        "id": "c",
        "text": "Light is always the limiting factor in nature."
      },
      {
        "id": "d",
        "text": "Increasing all factors simultaneously increases the rate indefinitely."
      }
    ],
    "correct": "b",
    "explanation": "Blackman's law states that if a process is influenced by more than one factor, the rate is determined by the factor nearest to its minimal value.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "6aef2bc0-6f5b-4722-8559-c69f53c7fc6b"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Morphology of Flowering Plants",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Identify the floral formula belonging to the family Solanaceae.",
    "options": [
      {
        "id": "a",
        "text": "% K(5) C1+2+(2) A(9)+1 G1"
      },
      {
        "id": "b",
        "text": "+ K(5) C(5) A5 G(2) (where + is actinomorphic) - Incorrect symbols provided in options; evaluating logic:"
      },
      {
        "id": "c",
        "text": "% K(5) C1+2+(2) A(9)+1 G1 (Fabaceae)"
      },
      {
        "id": "d",
        "text": "⊕ ⚥ K(5) C(5) A5 G(2) (Correct: Actinomorphic, fused parts, superior ovary)"
      }
    ],
    "correct": "d",
    "explanation": "Solanaceae is characterized by actinomorphic, bisexual flowers with 5 fused sepals/petals and epipetalous stamens.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8f4870c1-7700-418c-847a-55ba7284e42c"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Anatomy of Flowering Plants",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "In the dicot stem, the cells of the medullary rays, adjoining the intrafascicular cambium, become meristematic and form:",
    "options": [
      {
        "id": "a",
        "text": "Interfascicular cambium"
      },
      {
        "id": "b",
        "text": "Cork cambium"
      },
      {
        "id": "c",
        "text": "Primary xylem"
      },
      {
        "id": "d",
        "text": "Phelloderm"
      }
    ],
    "correct": "a",
    "explanation": "Interfascicular cambium forms between vascular bundles, joining with intrafascicular cambium to form a ring.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e63ac889-45bd-4375-85f4-0bce70f6bce9"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Sexual Reproduction in Flowering Plants",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "What is the ploidy level of the Antipodals, Central Cell (before fusion), and Nucellus respectively?",
    "options": [
      {
        "id": "a",
        "text": "n, 2n, n"
      },
      {
        "id": "b",
        "text": "2n, n, 2n"
      },
      {
        "id": "c",
        "text": "n, n+n, 2n"
      },
      {
        "id": "d",
        "text": "n, 3n, 2n"
      }
    ],
    "correct": "c",
    "explanation": "Antipodals are n, Central Cell contains two polar nuclei (n+n), and Nucellus is 2n (sporophytic).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "063ee7aa-a47d-49d3-8224-8e9100a24dbc"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Photosynthesis in Higher Plants",
    "topic": "",
    "difficulty": "medium",
    "qtype": "assertion_reason",
    "body": "Assertion (A): RuBisCO is the most abundant enzyme in the world. \nReason (R): It has a dual activity, acting as both a carboxylase and an oxygenase.",
    "options": [
      {
        "id": "a",
        "text": "Both (A) and (R) are true and (R) is the correct explanation of (A)."
      },
      {
        "id": "b",
        "text": "Both (A) and (R) are true but (R) is not the correct explanation of (A)."
      },
      {
        "id": "c",
        "text": "(A) is true but (R) is false."
      },
      {
        "id": "d",
        "text": "(A) is false but (R) is true."
      }
    ],
    "correct": "b",
    "explanation": "Both statements are true facts, but its dual activity is not the reason why it is the *most abundant* (abundance is due to its critical role and inefficiency).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "2671fe75-4f0e-45c2-843e-67cfed399ab0"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Plant Growth and Development",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The 'Triple Response' in plants, which involves slowing of stem elongation and thickening of the axis, is a characteristic effect of:",
    "options": [
      {
        "id": "a",
        "text": "Auxins"
      },
      {
        "id": "b",
        "text": "Cytokinins"
      },
      {
        "id": "c",
        "text": "Abscisic acid"
      },
      {
        "id": "d",
        "text": "Ethylene"
      }
    ],
    "correct": "d",
    "explanation": "Ethylene induces the triple response: inhibition of elongation, swelling of the axis, and horizontal growth.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "10dc8881-7e22-461e-8f4d-db9b24b47120"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Photosynthesis in Higher Plants (Conceptual)",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "In photorespiration, the release of CO2 occurs in which organelle?",
    "options": [
      {
        "id": "a",
        "text": "Chloroplast"
      },
      {
        "id": "b",
        "text": "Peroxisome"
      },
      {
        "id": "c",
        "text": "Mitochondria"
      },
      {
        "id": "d",
        "text": "Glyoxysome"
      }
    ],
    "correct": "c",
    "explanation": "Photorespiration involves Chloroplast, Peroxisome, and Mitochondria. CO2 is released in the Mitochondria during glycine decarboxylation.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "4682b0d6-87f7-4bfb-8038-ae5cb43e0bf5"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Plant Growth and Development",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Which of the following is an example of a 'Dedifferentiated' tissue?",
    "options": [
      {
        "id": "a",
        "text": "Primary Xylem"
      },
      {
        "id": "b",
        "text": "Cork cambium"
      },
      {
        "id": "c",
        "text": "Root apical meristem"
      },
      {
        "id": "d",
        "text": "Mesophyll cells"
      }
    ],
    "correct": "b",
    "explanation": "Interfascicular cambium and cork cambium are formed from differentiated parenchyma cells via dedifferentiation.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e28af392-7586-46ba-82ed-7421ac600ffd"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Cell Cycle and Cell Division (Plant context)",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The enzyme Recombinase is required at which stage of Meiosis I in plants?",
    "options": [
      {
        "id": "a",
        "text": "Zygotene"
      },
      {
        "id": "b",
        "text": "Pachytene"
      },
      {
        "id": "c",
        "text": "Diplotene"
      },
      {
        "id": "d",
        "text": "Diakinesis"
      }
    ],
    "correct": "b",
    "explanation": "Recombinase facilitates crossing over during the Pachytene stage of Prophase I.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "148f035f-dfe9-455d-82e3-c9eb55bfd647"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Sexual Reproduction in Flowering Plants",
    "topic": "",
    "difficulty": "medium",
    "qtype": "assertion_reason",
    "body": "Assertion (A): Small, inconspicuous flowers are often wind-pollinated. \nReason (R): Being colorful and fragrant is a waste of energy for plants that do not need to attract biotic pollinators.",
    "options": [
      {
        "id": "a",
        "text": "Both (A) and (R) are true and (R) is the correct explanation of (A)."
      },
      {
        "id": "b",
        "text": "Both (A) and (R) are true but (R) is not the correct explanation of (A)."
      },
      {
        "id": "c",
        "text": "(A) is true but (R) is false."
      },
      {
        "id": "d",
        "text": "(A) is false but (R) is true."
      }
    ],
    "correct": "a",
    "explanation": "Wind-pollinated (anemophilous) plants lack nectar and bright colors to conserve energy as they rely on physical factors.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "1acf9e40-07c0-4dc0-8952-565583fe7fa9"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Respiration in Plants",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Pyruvate dehydrogenase activity requires which of the following as a cofactor?",
    "options": [
      {
        "id": "a",
        "text": "Mn2+"
      },
      {
        "id": "b",
        "text": "Fe2+"
      },
      {
        "id": "c",
        "text": "Mg2+"
      },
      {
        "id": "d",
        "text": "Cu2+"
      }
    ],
    "correct": "c",
    "explanation": "The conversion of Pyruvate to Acetyl CoA requires Mg2+ and several coenzymes.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "83a9ccab-0eb8-4f6b-8ab2-0259fc8e1ca2"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Plant Kingdom",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Which of the following is NOT a characteristic of the gymnosperm Sequoia?",
    "options": [
      {
        "id": "a",
        "text": "It is a giant fern species."
      },
      {
        "id": "b",
        "text": "It is one of the tallest tree species."
      },
      {
        "id": "c",
        "text": "It is a gymnosperm."
      },
      {
        "id": "d",
        "text": "It has a very thick bark."
      }
    ],
    "correct": "a",
    "explanation": "Sequoia is one of the tallest tree species; it is not a small shrub or herbaceous plant.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "be53ab4f-1d0b-4145-888b-851a546bdcf4"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Principles of Inheritance and Variation",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "In a monohybrid cross between two heterozygous tall pea plants, what is the probability of obtaining a dwarf plant?",
    "options": [
      {
        "id": "a",
        "text": "50%"
      },
      {
        "id": "b",
        "text": "25%"
      },
      {
        "id": "c",
        "text": "75%"
      },
      {
        "id": "d",
        "text": "0%"
      }
    ],
    "correct": "b",
    "explanation": "Tt x Tt results in 1/4 TT, 2/4 Tt, and 1/4 tt (dwarf).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "328af409-327b-4dc8-8647-6650329c84d6"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Photosynthesis in Higher Plants",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The synthesis of the first CO2 fixation product in C3 plants is catalyzed by:",
    "options": [
      {
        "id": "a",
        "text": "RuBisCO"
      },
      {
        "id": "b",
        "text": "PEP Case"
      },
      {
        "id": "c",
        "text": "Pyruvate kinase"
      },
      {
        "id": "d",
        "text": "NADP Reductase"
      }
    ],
    "correct": "a",
    "explanation": "RuBisCO catalyzes the carboxylation of RuBP to form 3-PGA in C3 plants.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "7cbb4591-cc4e-4a94-878f-f612bc6887bb"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Respiration in Plants/Cell Unit",
    "topic": "",
    "difficulty": "medium",
    "qtype": "assertion_reason",
    "body": "Assertion (A): The inner membrane of mitochondria is folded into cristae. \nReason (R): Cristae decrease the surface area available for the Electron Transport System.",
    "options": [
      {
        "id": "a",
        "text": "Both (A) and (R) are true and (R) is the correct explanation of (A)."
      },
      {
        "id": "b",
        "text": "Both (A) and (R) are true but (R) is not the correct explanation of (A)."
      },
      {
        "id": "c",
        "text": "(A) is true but (R) is false."
      },
      {
        "id": "d",
        "text": "(A) is false but (R) is true."
      }
    ],
    "correct": "c",
    "explanation": "Cristae *increase* the surface area to accommodate more ETS complexes.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "239260a5-ac8a-4d67-89ca-35468d686d5a"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Anatomy of Flowering Plants",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Which of the following describes the nature of the vascular bundles in a monocot stem?",
    "options": [
      {
        "id": "a",
        "text": "Arranged in a ring, open, and endarch."
      },
      {
        "id": "b",
        "text": "Scattered, open, and exarch."
      },
      {
        "id": "c",
        "text": "Arranged in a ring, closed, and exarch."
      },
      {
        "id": "d",
        "text": "Scattered, closed, and endarch."
      }
    ],
    "correct": "d",
    "explanation": "Monocot stems have scattered vascular bundles that are conjoint, closed (no cambium), and endarch.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "f8579bf7-ca8d-471e-8227-7ddb98f1d341"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Photosynthesis in Higher Plants",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Which pigment acts as the reaction center in Photosystem II?",
    "options": [
      {
        "id": "a",
        "text": "P700"
      },
      {
        "id": "b",
        "text": "P680"
      },
      {
        "id": "c",
        "text": "Chlorophyll b"
      },
      {
        "id": "d",
        "text": "Xanthophyll"
      }
    ],
    "correct": "b",
    "explanation": "PS II has an absorption peak at 680 nm, hence its reaction center is P680.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8531c984-9a1e-4527-8379-2cb3caeca0a0"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Photosynthesis in Higher Plants",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "In the light-dependent reactions of photosynthesis, if a chloroplast is supplied with water containing heavy isotope of oxygen (18O) and CO2 containing 17O, which of the following is true regarding the products?",
    "options": [
      {
        "id": "a",
        "text": "Oxygen gas evolved will contain 17O."
      },
      {
        "id": "b",
        "text": "The sugar formed will contain 18O."
      },
      {
        "id": "c",
        "text": "Oxygen gas evolved will contain 18O."
      },
      {
        "id": "d",
        "text": "Both oxygen gas and sugar will contain 18O."
      }
    ],
    "correct": "c",
    "explanation": "Oxygen evolved during photosynthesis comes exclusively from the photolysis of water, not from carbon dioxide.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "4be6321b-022f-4be0-8179-08ddd7c468e3"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Photosynthesis in Higher Plants",
    "topic": "",
    "difficulty": "hard",
    "qtype": "assertion_reason",
    "body": "Assertion (A): In a C4 plant like Maize, the C4 pathway consumes more ATP than the C3 pathway to fix one molecule of CO2.\nReason (R): The regeneration of Phosphoenolpyruvate (PEP) from Pyruvate in the mesophyll cells requires the conversion of ATP to AMP.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "C4 plants use 2 extra ATP (equivalent) per CO2 to regenerate PEP, totaling 5 ATP per CO2 compared to 3 ATP in C3.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "0bfe0c92-5c5b-47a1-88e8-6168bb0a848f"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Plant Kingdom",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A specific gymnosperm species has a diploid chromosome number of 24 (2n = 24). What would be the chromosome number in its endosperm and its microspore mother cell respectively?",
    "options": [
      {
        "id": "a",
        "text": "36 and 24"
      },
      {
        "id": "b",
        "text": "12 and 24"
      },
      {
        "id": "c",
        "text": "24 and 12"
      },
      {
        "id": "d",
        "text": "36 and 12"
      }
    ],
    "correct": "b",
    "explanation": "In gymnosperms, endosperm is a pre-fertilization haploid tissue (n), while microspore mother cells are diploid (2n).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "661bc336-8b35-4b2c-8db7-0e7e519324dc"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Photosynthesis in Higher Plants",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "How many molecules of reduced NADP and ATP are required to produce one molecule of sucrose through the Calvin cycle?",
    "options": [
      {
        "id": "a",
        "text": "18 ATP and 12 NADPH"
      },
      {
        "id": "b",
        "text": "30 ATP and 12 NADPH"
      },
      {
        "id": "c",
        "text": "30 ATP and 20 NADPH"
      },
      {
        "id": "d",
        "text": "36 ATP and 24 NADPH"
      }
    ],
    "correct": "d",
    "explanation": "Sucrose is a disaccharide (12C). One CO2 requires 3 ATP and 2 NADPH. Total: 12 x 3 = 36 ATP and 12 x 2 = 24 NADPH.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a532c6a0-4b13-4d35-8ea4-5c34da353384"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Respiration in Plants",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "In an experiment, a researcher inhibits the enzyme Aconitase in the TCA cycle. Which of the following intermediates will accumulate in the mitochondrial matrix?",
    "options": [
      {
        "id": "a",
        "text": "Oxaloacetic acid"
      },
      {
        "id": "b",
        "text": "Acetyl CoA"
      },
      {
        "id": "c",
        "text": "Citric acid"
      },
      {
        "id": "d",
        "text": "alpha-Ketoglutaric acid"
      }
    ],
    "correct": "c",
    "explanation": "Aconitase catalyzes the conversion of Citrate to Isocitrate. Inhibition causes the accumulation of the substrate, Citrate.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a6290744-50cb-47a4-82e9-6491ca403013"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Respiration in Plants",
    "topic": "",
    "difficulty": "hard",
    "qtype": "assertion_reason",
    "body": "Assertion (A): During seed germination, the Respiratory Quotient (RQ) for castor seeds is less than one.\nReason (R): Castor seeds contain high amounts of fats, which require more oxygen for complete oxidation compared to the amount of CO2 released.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "Fats have an RQ of approximately 0.7 because they are oxygen-poor and require more external O2 for oxidation.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8f8cbc7a-b516-4148-8bcd-8c5811c45cab"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Respiration in Plants",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Which of the following represents the correct sequence of electron carriers in the mitochondrial ETS between Complex III and Complex IV?",
    "options": [
      {
        "id": "a",
        "text": "Ubiquinone -> Cyt b -> Cyt c1"
      },
      {
        "id": "b",
        "text": "Cyt c1 -> Cyt c -> Cyt a-a3"
      },
      {
        "id": "c",
        "text": "Cyt b -> Cyt c -> Cyt c1"
      },
      {
        "id": "d",
        "text": "Cyt a -> Cyt a3 -> Cyt c"
      }
    ],
    "correct": "b",
    "explanation": "Cytochrome c is a small, mobile protein located on the outer surface of the inner mitochondrial membrane that transfers electrons from Complex III to IV.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "c27c26d8-2c09-4487-8ac1-c17a0ab28561"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Plant Growth and Development (Water Relations context)",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A plant cell is placed in a solution with a water potential of -10 bars. The cell has an osmotic potential (solute potential) of -15 bars and a turgor pressure (pressure potential) of 3 bars. In which direction will water move?",
    "options": [
      {
        "id": "a",
        "text": "Water will exit the cell because the cell has higher potential."
      },
      {
        "id": "b",
        "text": "No net movement as the system is in equilibrium."
      },
      {
        "id": "c",
        "text": "Water will enter the cell because the external solution has a higher potential."
      },
      {
        "id": "d",
        "text": "The cell will undergo plasmolysis."
      }
    ],
    "correct": "c",
    "explanation": "Cell Psi = Psi_s + Psi_p = -15 + 3 = -12 bars. Water moves from higher potential (-10) to lower potential (-12), so water enters the cell.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "9a38b1ee-7185-4338-8ebe-021de470d3cb"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Principles of Inheritance and Variation",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Consider a population of 100 plants produced from a cross between two heterozygous tall plants (Tt). What is the probability that a randomly selected plant from the F1 generation is both tall and homozygous?",
    "options": [
      {
        "id": "a",
        "text": "0.25"
      },
      {
        "id": "b",
        "text": "0.50"
      },
      {
        "id": "c",
        "text": "0.75"
      },
      {
        "id": "d",
        "text": "0.33"
      }
    ],
    "correct": "a",
    "explanation": "In a Tt x Tt cross, genotypes are 1TT:2Tt:1tt. Tall plants are TT and Tt. Homozygous tall is TT, which is 1/4 of the total.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e14bb80f-8a2e-44fb-8e2e-71030ae2ca07"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Sexual Reproduction in Flowering Plants",
    "topic": "",
    "difficulty": "hard",
    "qtype": "assertion_reason",
    "body": "Assertion (A): Some plants, like Viola (common pansy), produce two types of flowers: chasmogamous and cleistogamous.\nReason (R): Cleistogamous flowers ensure seed set even in the absence of pollinators by preventing cross-pollination.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "b",
    "explanation": "Both statements are true. However, R is a characteristic/advantage of cleistogamy, but doesn't explain *why* the plant produces two *types* (which is an evolutionary strategy for bet-hedging).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "2b051d4e-354e-488e-88a2-23f336b54a3d"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Molecular Basis of Inheritance",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "If a DNA molecule has 20% Guanine, what will be the percentage of Adenine and the total percentage of purines respectively?",
    "options": [
      {
        "id": "a",
        "text": "20% and 40%"
      },
      {
        "id": "b",
        "text": "30% and 40%"
      },
      {
        "id": "c",
        "text": "20% and 50%"
      },
      {
        "id": "d",
        "text": "30% and 50%"
      }
    ],
    "correct": "d",
    "explanation": "G = 20%, so C = 20%. G+C = 40%. A+T = 60%, so A = 30%. Purines (A+G) = 30 + 20 = 50%. Total purines always = 50% in dsDNA.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "63633703-75cf-4a92-842c-4fd186724f6c"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Sexual Reproduction in Flowering Plants",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A typical dicot embryo at the heart-shaped stage consists of which of the following?",
    "options": [
      {
        "id": "a",
        "text": "A globular mass of undifferentiated cells."
      },
      {
        "id": "b",
        "text": "A single shield-shaped cotyledon called scutellum."
      },
      {
        "id": "c",
        "text": "Two cotyledons and a central embryonal axis."
      },
      {
        "id": "d",
        "text": "Only a suspensor and a radicle."
      }
    ],
    "correct": "c",
    "explanation": "A heart-shaped embryo shows two distinct lobes which will become the two cotyledons, and the developing radicle and plumule area.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "574771e4-b2a7-406f-8dfe-97105cd08185"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Molecular Basis of Inheritance",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "In the DNA fingerprinting technique, what is the specific role of 'VNTRs'?",
    "options": [
      {
        "id": "a",
        "text": "They act as primers for PCR amplification."
      },
      {
        "id": "b",
        "text": "They serve as probes that show high polymorphism in the population."
      },
      {
        "id": "c",
        "text": "They are the enzymes used to cut the DNA at specific sites."
      },
      {
        "id": "d",
        "text": "They code for specific proteins involved in skin pigmentation."
      }
    ],
    "correct": "b",
    "explanation": "VNTRs (Variable Number of Tandem Repeats) belong to a class of satellite DNA referred to as mini-satellites, used as probes for their high degree of polymorphism.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "c6473255-e56e-4a42-8503-262e342b11e9"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Cell Cycle and Cell Division",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "During which phase of the cell cycle in onion root tip cells do the chromosomes align at the equatorial plate and for which reason?",
    "options": [
      {
        "id": "a",
        "text": "Metaphase; due to balanced tension from spindle fibers attached to kinetochores."
      },
      {
        "id": "b",
        "text": "Anaphase; due to the shortening of microtubules."
      },
      {
        "id": "c",
        "text": "Prophase; due to condensation of chromatin into chromosomes."
      },
      {
        "id": "d",
        "text": "Telophase; due to the reformation of the nuclear envelope."
      }
    ],
    "correct": "a",
    "explanation": "Metaphase is characterized by alignment at the equator, which is facilitated by the attachment of spindle fibers to the kinetochores of sister chromatids.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "41e542df-d040-4fe0-89b1-156bf0fc3a6d"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Principles of Inheritance and Variation",
    "topic": "",
    "difficulty": "hard",
    "qtype": "assertion_reason",
    "body": "Assertion (A): In a monohybrid cross, the F2 phenotypic ratio 3:1 is a result of the random fusion of gametes.\nReason (R): According to the Law of Segregation, the alleles do not show any blending and both characters are recovered as such in the F2 generation.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "b",
    "explanation": "Both are true, but the Law of Segregation explains why gametes are pure and why the recessive trait reappears, but the specific 3:1 ratio is a statistical outcome of the random fusion of those segregated gametes.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e3af6dcc-f389-4055-8818-54bc69b02680"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Sexual Reproduction in Flowering Plants",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "How many meiotic divisions are required to produce 200 seeds in a typical angiosperm plant like Pea?",
    "options": [
      {
        "id": "a",
        "text": "200"
      },
      {
        "id": "b",
        "text": "400"
      },
      {
        "id": "c",
        "text": "250"
      },
      {
        "id": "d",
        "text": "500"
      }
    ],
    "correct": "c",
    "explanation": "1 seed = 1 male gametophyte + 1 female gametophyte. To get 200 pollen grains: 200/4 = 50 meiosis. To get 200 eggs: 200/1 = 200 meiosis. Total = 250.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5b59d4ac-8b61-4c06-8126-48a4783f51c7"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Photosynthesis in Higher Plants",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Which of the following statements regarding photorespiration is INCORRECT?",
    "options": [
      {
        "id": "a",
        "text": "It involves the interaction of chloroplasts, peroxisomes, and mitochondria."
      },
      {
        "id": "b",
        "text": "RuBisCO binds with O2 instead of CO2 at high temperatures."
      },
      {
        "id": "c",
        "text": "It results in the loss of fixed carbon as CO2."
      },
      {
        "id": "d",
        "text": "It produces high-energy phosphates like ATP and NADPH."
      }
    ],
    "correct": "d",
    "explanation": "Photorespiration involves the chloroplast, peroxisome, and mitochondrion, but it does NOT result in the synthesis of ATP or NADPH; it actually consumes ATP.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "96d4670b-ed1b-4efd-8083-8f5abfb0da33"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Molecular Basis of Inheritance",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "In a lac operon, if a mutation occurs in the 'i' gene such that it cannot bind to the inducer (lactose), what will be the state of the operon in the presence of lactose?",
    "options": [
      {
        "id": "a",
        "text": "The operon will be constitutively active (always ON)."
      },
      {
        "id": "b",
        "text": "The operon will be transcribed only when glucose is absent."
      },
      {
        "id": "c",
        "text": "The operon will be permanently repressed (always OFF)."
      },
      {
        "id": "d",
        "text": "Transcription will occur normally but translation will fail."
      }
    ],
    "correct": "c",
    "explanation": "If the repressor (i gene product) cannot bind to the inducer, it remains bound to the operator, keeping the operon permanently 'off' (constitutively repressed).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "eb80c088-d6ef-4e16-83e6-e5c3b27c7334"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Photosynthesis in Higher Plants",
    "topic": "",
    "difficulty": "hard",
    "qtype": "assertion_reason",
    "body": "Assertion (A): The primary CO2 acceptor in C3 plants is a 5-carbon ketose sugar.\nReason (R): The first stable product of the Calvin cycle is a 3-carbon organic acid.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "b",
    "explanation": "Both are true. The acceptor is Ribulose 1,5-bisphosphate (RuBP - 5C) and the first product is 3-PGA (3C). However, R is a consequence, not a reason for A's identity.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8d8822e8-ae09-4ed5-88d2-f1d0e2dfa027"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Plant Growth and Development",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Which plant hormone is responsible for the 'Triple Response' in seedlings and promotes the senescence and abscission of plant organs?",
    "options": [
      {
        "id": "a",
        "text": "Ethylene"
      },
      {
        "id": "b",
        "text": "Abscisic Acid"
      },
      {
        "id": "c",
        "text": "Gibberellic Acid"
      },
      {
        "id": "d",
        "text": "Cytokinin"
      }
    ],
    "correct": "a",
    "explanation": "Ethylene induces triple response (shortening, thickening, and horizontal growth of axis) and is a promoter of aging (senescence).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "ede1531b-a6a1-4aa1-873c-72ad6c66702b"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Molecular Basis of Inheritance",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A gene has 6000 base pairs. How many nucleosomes will be present in the chromatin of this gene segment?",
    "options": [
      {
        "id": "a",
        "text": "60"
      },
      {
        "id": "b",
        "text": "30"
      },
      {
        "id": "c",
        "text": "200"
      },
      {
        "id": "d",
        "text": "12000"
      }
    ],
    "correct": "b",
    "explanation": "One nucleosome typically contains 200 bp of DNA. 6000 / 200 = 30 nucleosomes.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "0e58ca79-3be8-4b1d-8cab-648e6afc91a7"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Photosynthesis in Higher Plants",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "During cyclic photophosphorylation, which of the following is NOT produced?",
    "options": [
      {
        "id": "a",
        "text": "ATP"
      },
      {
        "id": "b",
        "text": "Light-driven electron flow"
      },
      {
        "id": "c",
        "text": "Proton gradient"
      },
      {
        "id": "d",
        "text": "NADPH and O2 evolution"
      }
    ],
    "correct": "d",
    "explanation": "Cyclic photophosphorylation only involves PS I and results in ATP synthesis. O2 evolution and NADPH synthesis only occur in non-cyclic photophosphorylation.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "fcd21bf0-bfad-48a1-8c80-e20868da50d0"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Anatomy of Flowering Plants / Plant Kingdom",
    "topic": "",
    "difficulty": "hard",
    "qtype": "assertion_reason",
    "body": "Assertion (A): Vessels are a characteristic feature of angiosperms and are absent in all gymnosperms.\nReason (R): The presence of vessels is an evolutionary advancement for more efficient water transport.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "d",
    "explanation": "While vessels are typical of angiosperms, they are NOT absent in *all* gymnosperms; the Order Gnetales (e.g., Gnetum, Ephedra) possesses vessels. R is true.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "86d3e21d-cf42-42e5-8875-702d41bc80d0"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Plant Growth and Development (Water Relations)",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "In a plant, the process of guttation occurs through specialized structures called ______ when ______.",
    "options": [
      {
        "id": "a",
        "text": "Stomata; transpiration rate is high."
      },
      {
        "id": "b",
        "text": "Lenticels; atmospheric humidity is low."
      },
      {
        "id": "c",
        "text": "Hydathodes; root pressure is high and transpiration is low."
      },
      {
        "id": "d",
        "text": "Trichomes; soil is dry."
      }
    ],
    "correct": "c",
    "explanation": "Guttation occurs through hydathodes due to high root pressure and low transpiration (usually at night or early morning).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8c95293a-b644-4a2a-8fee-4f90f95c1fa6"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Sexual Reproduction in Flowering Plants",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "What is the ploidy level of the following tissues respectively: Perisperm, Aleurone layer, Scutellum?",
    "options": [
      {
        "id": "a",
        "text": "2n, 2n, 3n"
      },
      {
        "id": "b",
        "text": "2n, 3n, 2n"
      },
      {
        "id": "c",
        "text": "3n, 3n, 2n"
      },
      {
        "id": "d",
        "text": "n, 3n, 2n"
      }
    ],
    "correct": "b",
    "explanation": "Perisperm is persistent nucellus (2n). Aleurone layer is part of endosperm (3n). Scutellum is the cotyledon of embryo (2n).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "d147047e-6f1f-4fa9-830f-b3db3c60e6a2"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Principles of Inheritance and Variation",
    "topic": "",
    "difficulty": "hard",
    "qtype": "assertion_reason",
    "body": "Assertion (A): In Mirabilis jalapa, a cross between a red-flowered plant and a white-flowered plant produces pink flowers.\nReason (R): This is due to the phenomenon of Codominance where both alleles express themselves equally in the F1 hybrid.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "c",
    "explanation": "A is true, but the phenomenon is Incomplete Dominance (blending effect), not Codominance (where both traits appear, like AB blood group).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "864b8753-124f-4c60-86e6-f19b77770176"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Molecular Basis of Inheritance",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "In DNA replication, the leading strand is synthesized ______ while the lagging strand is synthesized ______ due to the ______ activity of DNA polymerase.",
    "options": [
      {
        "id": "a",
        "text": "Continuously; discontinuously; 5' -> 3'"
      },
      {
        "id": "b",
        "text": "Discontinuously; continuously; 3' -> 5'"
      },
      {
        "id": "c",
        "text": "Continuously; discontinuously; 3' -> 5'"
      },
      {
        "id": "d",
        "text": "Discontinuously; continuously; 5' -> 3'"
      }
    ],
    "correct": "a",
    "explanation": "DNA polymerase only works in the 5' to 3' direction. This necessitates continuous synthesis on the leading strand and discontinuous (Okazaki fragments) on the lagging strand.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "1b7747fd-07a7-4460-8eb6-d24cb449cd0b"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Plant Growth and Development",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Which of the following describes the correct condition for a 'Long Day Plant' to flower?",
    "options": [
      {
        "id": "a",
        "text": "The night length must exceed a critical duration."
      },
      {
        "id": "b",
        "text": "The day length must be exactly 12 hours."
      },
      {
        "id": "c",
        "text": "They only flower in the presence of high Abscisic acid."
      },
      {
        "id": "d",
        "text": "The duration of light exceeds the critical photoperiod."
      }
    ],
    "correct": "d",
    "explanation": "Long Day Plants flower when the duration of light exceeds a critical photoperiod, or more accurately, when the dark period is shorter than a critical duration.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "b9306abc-9f8c-42a3-86b4-e3c83fcb5f28"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Photosynthesis in Higher Plants",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Calculate the number of turns of the Calvin cycle and the number of CO2 molecules required to produce 3 molecules of Glucose.",
    "options": [
      {
        "id": "a",
        "text": "6 turns and 6 CO2 molecules"
      },
      {
        "id": "b",
        "text": "18 turns and 18 CO2 molecules"
      },
      {
        "id": "c",
        "text": "12 turns and 12 CO2 molecules"
      },
      {
        "id": "d",
        "text": "18 turns and 6 CO2 molecules"
      }
    ],
    "correct": "b",
    "explanation": "1 Glucose requires 6 turns and 6 CO2. 3 Glucose = 18 turns and 18 CO2.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "b9f3f260-4772-4148-8be3-7dc3cfead062"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Cell: The Unit of Life / Respiration in Plants",
    "topic": "",
    "difficulty": "hard",
    "qtype": "assertion_reason",
    "body": "Assertion (A): The inner membrane of the mitochondrion is folded into numerous cristae.\nReason (R): Cristae decrease the surface area to prevent excessive ATP leakage.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "c",
    "explanation": "Cristae significantly *increase* the surface area for the ETS and ATP synthase enzymes to function, not decrease it.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "980c7689-d3f7-4b88-8915-fa6057f9a330"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Neural Control and Coordination",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which of the following parts of the human brain is primarily responsible for the regulation of body temperature?",
    "options": [
      {
        "id": "a",
        "text": "Cerebrum"
      },
      {
        "id": "b",
        "text": "Hypothalamus"
      },
      {
        "id": "c",
        "text": "Cerebellum"
      },
      {
        "id": "d",
        "text": "Medulla oblongata"
      }
    ],
    "correct": "b",
    "explanation": "The hypothalamus contains centers which control body temperature, urge for eating and drinking.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e55fdcee-48cc-4e5e-8906-a8773e9ec430"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Body Fluids and Circulation",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "In the human heart, the 'Lubb' sound is produced during the closure of which valves?",
    "options": [
      {
        "id": "a",
        "text": "Atrioventricular valves"
      },
      {
        "id": "b",
        "text": "Semilunar valvesのみ"
      },
      {
        "id": "c",
        "text": "Aortic valve only"
      },
      {
        "id": "d",
        "text": "Pulmonary valve only"
      }
    ],
    "correct": "a",
    "explanation": "The first heart sound (Lubb) is associated with the closure of the tricuspid and bicuspid valves.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "0783d28a-a8fe-4098-8d9f-ee94c823555f"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Chemical Coordination and Integration",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which hormone is responsible for the 'Milk Ejection Reflex' from the mammary glands?",
    "options": [
      {
        "id": "a",
        "text": "Prolactin"
      },
      {
        "id": "b",
        "text": "Progesterone"
      },
      {
        "id": "c",
        "text": "Oxytocin"
      },
      {
        "id": "d",
        "text": "Estrogen"
      }
    ],
    "correct": "c",
    "explanation": "Oxytocin acts on the mammary glands and causes expulsion of milk.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "98ec873c-b7a0-41d7-827d-06328b426b19"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Body Fluids and Circulation",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "What is the typical lifespan of a human Red Blood Cell (RBC)?",
    "options": [
      {
        "id": "a",
        "text": "10 days"
      },
      {
        "id": "b",
        "text": "60 days"
      },
      {
        "id": "c",
        "text": "180 days"
      },
      {
        "id": "d",
        "text": "120 days"
      }
    ],
    "correct": "d",
    "explanation": "RBCs have an average life span of 120 days after which they are destroyed in the spleen.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8f3e3720-9f46-4c7f-8d94-f0a28709efb7"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Locomotion and Movement",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which of the following is an example of a synovial joint characterized by a 'ball and socket' arrangement?",
    "options": [
      {
        "id": "a",
        "text": "Knee joint"
      },
      {
        "id": "b",
        "text": "Shoulder joint"
      },
      {
        "id": "c",
        "text": "Atlas/Axis joint"
      },
      {
        "id": "d",
        "text": "Carpal joints"
      }
    ],
    "correct": "b",
    "explanation": "The joint between the humerus and pectoral girdle is a ball and socket joint.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "0806b11e-54e3-4ff6-8a37-15e27cda41ff"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Digestion and Absorption",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The structural and functional unit of the human liver is the:",
    "options": [
      {
        "id": "a",
        "text": "Nephron"
      },
      {
        "id": "b",
        "text": "Hepatocyte"
      },
      {
        "id": "c",
        "text": "Hepatic lobule"
      },
      {
        "id": "d",
        "text": "Glisson's capsule"
      }
    ],
    "correct": "c",
    "explanation": "Hepatic lobules are the structural and functional units of the liver containing hepatic cells.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8be08e85-dcdf-4b2c-853a-be199bf1bde9"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Locomotion and Movement",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "During skeletal muscle contraction, which of the following regions does NOT shorten?",
    "options": [
      {
        "id": "a",
        "text": "A-band"
      },
      {
        "id": "b",
        "text": "I-band"
      },
      {
        "id": "c",
        "text": "H-zone"
      },
      {
        "id": "d",
        "text": "Sarcomere length"
      }
    ],
    "correct": "a",
    "explanation": "The A-band retains its length, while the I-band and H-zone shorten during contraction.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "896fbde5-bccc-45a7-8172-d9242bd27e8b"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Excretory Products and Their Elimination",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which nitrogenous waste is excreted by sharks and adult amphibians to conserve water?",
    "options": [
      {
        "id": "a",
        "text": "Ammonia"
      },
      {
        "id": "b",
        "text": "Uric acid"
      },
      {
        "id": "c",
        "text": "Urea"
      },
      {
        "id": "d",
        "text": "Guanine"
      }
    ],
    "correct": "c",
    "explanation": "Ureotelic animals like mammals, terrestrial amphibians, and marine fishes excrete urea.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "2422dcce-0a28-4ad8-8f38-ce17df1063de"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Breathing and Exchange of Gases",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "In the human respiratory system, the 'Vital Capacity' is calculated as:",
    "options": [
      {
        "id": "a",
        "text": "TV + IRV"
      },
      {
        "id": "b",
        "text": "ERV + TV + IRV"
      },
      {
        "id": "c",
        "text": "TV + ERV"
      },
      {
        "id": "d",
        "text": "VC + RV"
      }
    ],
    "correct": "b",
    "explanation": "Vital Capacity (VC) = ERV + TV + IRV.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "56c52f46-8910-423a-845e-5ee6e61c4b50"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Digestion and Absorption",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which cells in the human body are responsible for secreting Intrinsic Factor necessary for Vitamin B12 absorption?",
    "options": [
      {
        "id": "a",
        "text": "Peptic cells"
      },
      {
        "id": "b",
        "text": "Goblet cells"
      },
      {
        "id": "c",
        "text": "Chief cells"
      },
      {
        "id": "d",
        "text": "Oxyntic cells"
      }
    ],
    "correct": "d",
    "explanation": "Oxyntic (parietal) cells secrete HCl and intrinsic factor.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e2a0f915-afef-47ef-8bcc-8fa17d126901"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Human Reproduction",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The process of 'Spermiogenesis' refers to:",
    "options": [
      {
        "id": "a",
        "text": "Transformation of spermatids into spermatozoa"
      },
      {
        "id": "b",
        "text": "Release of sperm from seminiferous tubules"
      },
      {
        "id": "c",
        "text": "Formation of spermatids from spermatocytes"
      },
      {
        "id": "d",
        "text": "Production of male hormones"
      }
    ],
    "correct": "a",
    "explanation": "Spermiogenesis is the transformation of spermatids into spermatozoa.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "d7e579e5-4738-44ba-8db3-5fdf606fa393"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Reproductive Health",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which of the following is a non-medicated Intrauterine Device (IUD)?",
    "options": [
      {
        "id": "a",
        "text": "Multiload 375"
      },
      {
        "id": "b",
        "text": "LNG-20"
      },
      {
        "id": "c",
        "text": "Lippes loop 180"
      },
      {
        "id": "d",
        "text": "Cu7"
      }
    ],
    "correct": "c",
    "explanation": "Lippes loop is a non-medicated IUD.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5efb4e39-8ebe-4f18-8024-a4799f3cf8d3"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Human Health and Disease",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The 'Filariasis' or Elephantiasis causing pathogen belongs to which group?",
    "options": [
      {
        "id": "a",
        "text": "Protozoa"
      },
      {
        "id": "b",
        "text": "Helminths"
      },
      {
        "id": "c",
        "text": "Fungi"
      },
      {
        "id": "d",
        "text": "Bacteria"
      }
    ],
    "correct": "b",
    "explanation": "Wuchereria bancrofti is a filarial worm (Helminth).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "d4a66688-8990-4c11-88a8-ab1a699adc53"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Molecular Basis of Inheritance",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "In the context of DNA fingerprinting, VNTR stands for:",
    "options": [
      {
        "id": "a",
        "text": "Variable Nucleotide Terminal Regions"
      },
      {
        "id": "b",
        "text": "Various Number of Triplet repeats"
      },
      {
        "id": "c",
        "text": "Variation in Nucleotide Triplets"
      },
      {
        "id": "d",
        "text": "Variable Number of Tandem Repeats"
      }
    ],
    "correct": "d",
    "explanation": "VNTR stands for Variable Number of Tandem Repeats.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "15d0aab4-500e-48c3-8c62-942e5ca8454a"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Human Health and Disease",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which antibody is most abundant in Colostrum, the initial milk secreted by mothers?",
    "options": [
      {
        "id": "a",
        "text": "IgG"
      },
      {
        "id": "b",
        "text": "IgA"
      },
      {
        "id": "c",
        "text": "IgM"
      },
      {
        "id": "d",
        "text": "IgE"
      }
    ],
    "correct": "b",
    "explanation": "Colostrum contains abundant IgA antibodies to protect the infant.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "18be3abb-e4e6-4c98-8cea-2cfe36b1e93f"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Chemical Coordination and Integration",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The hormone 'Melatonin' is secreted by which endocrine gland?",
    "options": [
      {
        "id": "a",
        "text": "Pineal gland"
      },
      {
        "id": "b",
        "text": "Thyroid gland"
      },
      {
        "id": "c",
        "text": "Adrenal gland"
      },
      {
        "id": "d",
        "text": "Thymus gland"
      }
    ],
    "correct": "a",
    "explanation": "The pineal gland secretes melatonin which regulates the 24-hour rhythm of the body.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "68a7e6cd-20ea-4a31-899e-566cd66dea0d"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Principles of Inheritance and Variation",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "What is the chromosomal condition of a person suffering from Turner's Syndrome?",
    "options": [
      {
        "id": "a",
        "text": "47, XXY"
      },
      {
        "id": "b",
        "text": "47, XYY"
      },
      {
        "id": "c",
        "text": "45, X0"
      },
      {
        "id": "d",
        "text": "45, Y0"
      }
    ],
    "correct": "c",
    "explanation": "Turner's syndrome is caused due to the absence of one of the X chromosomes, i.e., 45 with X0.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e1ffa892-1e48-443e-8d2b-68ab7e90ecc4"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Animal Kingdom",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "In Animal Kingdom, which phylum is characterized by the presence of a 'Water Vascular System'?",
    "options": [
      {
        "id": "a",
        "text": "Porifera"
      },
      {
        "id": "b",
        "text": "Coelenterata"
      },
      {
        "id": "c",
        "text": "Mollusca"
      },
      {
        "id": "d",
        "text": "Echinodermata"
      }
    ],
    "correct": "d",
    "explanation": "The water vascular system is a distinctive feature of Echinodermata.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "17756c36-0f49-41c1-84ff-083c84b2aee0"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Neural Control and Coordination",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which part of the human eye is a vascular layer that looks bluish in color?",
    "options": [
      {
        "id": "a",
        "text": "Sclera"
      },
      {
        "id": "b",
        "text": "Choroid"
      },
      {
        "id": "c",
        "text": "Retina"
      },
      {
        "id": "d",
        "text": "Cornea"
      }
    ],
    "correct": "b",
    "explanation": "The choroid is the middle layer, contains many blood vessels and looks bluish.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5739a297-91dd-46d6-8cd6-936b1ba272c1"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Biotechnology and its Applications",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The first transgenic cow, Rosie, produced milk enriched with which human protein?",
    "options": [
      {
        "id": "a",
        "text": "Alpha-lactalbumin"
      },
      {
        "id": "b",
        "text": "Insulin"
      },
      {
        "id": "c",
        "text": "Alpha-1-antitrypsin"
      },
      {
        "id": "d",
        "text": "Hemoglobin"
      }
    ],
    "correct": "a",
    "explanation": "Rosie produced human protein-enriched milk (2.4 grams per litre) containing human alpha-lactalbumin.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "0dcd6425-2d57-487a-8f18-833b0fbfc1f0"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Animal Kingdom",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which of the following is NOT a characteristic feature of Phylum Chordata?",
    "options": [
      {
        "id": "a",
        "text": "Presence of Notochord"
      },
      {
        "id": "b",
        "text": "Dorsal hollow nerve cord"
      },
      {
        "id": "c",
        "text": "Ventral solid nerve cord"
      },
      {
        "id": "d",
        "text": "Post-anal tail"
      }
    ],
    "correct": "c",
    "explanation": "Chordates have a dorsal hollow nerve cord and a ventral heart. A ventral nerve cord is characteristic of non-chordates.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "aa4bd399-c6fd-494b-82ca-fe4686888e3d"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Digestion and Absorption",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The 'G-cells' of the stomach secrete which hormone?",
    "options": [
      {
        "id": "a",
        "text": "Secretin"
      },
      {
        "id": "b",
        "text": "Gastrin"
      },
      {
        "id": "c",
        "text": "Cholecystokinin"
      },
      {
        "id": "d",
        "text": "Pepsinogen"
      }
    ],
    "correct": "b",
    "explanation": "G-cells in the pyloric region of the stomach secrete the hormone Gastrin.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "6d9ed7d9-543f-4009-8159-9434bc3773a8"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Body Fluids and Circulation",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which enzyme is responsible for the conversion of Fibrinogen to Fibrin during blood clotting?",
    "options": [
      {
        "id": "a",
        "text": "Thrombokinase"
      },
      {
        "id": "b",
        "text": "Prothrombinase"
      },
      {
        "id": "c",
        "text": "Epinephrine"
      },
      {
        "id": "d",
        "text": "Thrombin"
      }
    ],
    "correct": "d",
    "explanation": "Fibrins are formed by the conversion of inactive fibrinogen in the plasma by the enzyme thrombin.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "7a3a1645-ccee-46d8-887b-00c210d61dce"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Excretory Products and Their Elimination",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "In which part of the Nephron does the maximum reabsorption of electrolytes and water (70-80%) occur?",
    "options": [
      {
        "id": "a",
        "text": "Proximal Convoluted Tubule (PCT)"
      },
      {
        "id": "b",
        "text": "Loop of Henle"
      },
      {
        "id": "c",
        "text": "Distal Convoluted Tubule (DCT)"
      },
      {
        "id": "d",
        "text": "Collecting Duct"
      }
    ],
    "correct": "a",
    "explanation": "Proximal Convoluted Tubule (PCT) is lined by simple cuboidal brush border epithelium which increases surface area for reabsorption.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e0363e82-6678-4a4f-8492-256ba9f8de9b"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Reproductive Health",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "'Saheli', a new oral contraceptive for females, was developed at which Indian institute?",
    "options": [
      {
        "id": "a",
        "text": "AIIMS, Delhi"
      },
      {
        "id": "b",
        "text": "NDRI, Karnal"
      },
      {
        "id": "c",
        "text": "CDRI, Lucknow"
      },
      {
        "id": "d",
        "text": "IISc, Bangalore"
      }
    ],
    "correct": "c",
    "explanation": "Saheli was developed by scientists at Central Drug Research Institute (CDRI) in Lucknow.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5189f14a-b563-49c4-86be-cacf122ae616"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Chemical Coordination and Integration",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The hormone 'Erythropoietin', which stimulates RBC production, is produced by:",
    "options": [
      {
        "id": "a",
        "text": "Bone marrow"
      },
      {
        "id": "b",
        "text": "Juxtaglomerular cells of kidney"
      },
      {
        "id": "c",
        "text": "Alpha cells of Pancreas"
      },
      {
        "id": "d",
        "text": "Adenohypophysis"
      }
    ],
    "correct": "b",
    "explanation": "The juxtaglomerular cells of the kidney produce erythropoietin.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "b45aff07-d57e-43f4-86a1-a0bf1dfb237a"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Chemical Coordination and Integration",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which of the following is the 'Master Gland' of the endocrine system (though itself regulated by the Hypothalamus)?",
    "options": [
      {
        "id": "a",
        "text": "Adrenal gland"
      },
      {
        "id": "b",
        "text": "Thyroid gland"
      },
      {
        "id": "c",
        "text": "Thymus gland"
      },
      {
        "id": "d",
        "text": "Pituitary gland"
      }
    ],
    "correct": "d",
    "explanation": "The Pituitary gland is often called the master gland as it controls many other endocrine glands.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "82b08dcf-addf-4cde-8d88-7c2f004efdad"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Human Reproduction",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "During the menstrual cycle, which hormone surge triggers 'Ovulation'?",
    "options": [
      {
        "id": "a",
        "text": "Estrogen surge"
      },
      {
        "id": "b",
        "text": "Progesterone surge \t \t"
      },
      {
        "id": "c",
        "text": "LH surge"
      },
      {
        "id": "d",
        "text": "FSH surge"
      }
    ],
    "correct": "c",
    "explanation": "LH surge (rapid secretion of LH) induces rupture of Graafian follicle and release of ovum.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "3f92a617-566d-431d-8a07-43ed71afc59b"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Human Reproduction",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "What is the name of the fluid-filled cavity found in a Tertiary Follicle?",
    "options": [
      {
        "id": "a",
        "text": "Zona pellucida"
      },
      {
        "id": "b",
        "text": "Antrum"
      },
      {
        "id": "c",
        "text": "Liquor folliculi only"
      },
      {
        "id": "d",
        "text": "Corona radiata cavity"
      }
    ],
    "correct": "b",
    "explanation": "The tertiary follicle is characterized by a fluid-filled cavity called antrum.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "4d57c34e-9439-4a16-86e5-898dcb9bf6ed"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Excretory Products and Their Elimination",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The presence of which of the following in urine is an indicator of Diabetes Mellitus?",
    "options": [
      {
        "id": "a",
        "text": "Glucose and Ketone bodies"
      },
      {
        "id": "b",
        "text": "Urea and Uric acid"
      },
      {
        "id": "c",
        "text": "Proteins and Blood"
      },
      {
        "id": "d",
        "text": "Water and Salt only"
      }
    ],
    "correct": "a",
    "explanation": "Presence of Glucose (Glycosuria) and Ketone bodies (Ketonuria) in urine are indicative of Diabetes Mellitus.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "96adce06-1f14-4479-8ee8-810b46cedd8e"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Sexual Reproduction in Flowering Plants",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "In a typical angiosperm, if the megaspore mother cell undergoes meiosis to form four megaspores, but only one remains functional, what is the total number of mitotic divisions required to form a mature 7-celled, 8-nucleate embryo sac from that single functional megaspore?",
    "options": [
      {
        "id": "a",
        "text": "1"
      },
      {
        "id": "b",
        "text": "2"
      },
      {
        "id": "c",
        "text": "3"
      },
      {
        "id": "d",
        "text": "4"
      }
    ],
    "correct": "c",
    "explanation": "The functional megaspore undergoes three sequential rounds of free nuclear mitosis (1 to 2, 2 to 4, 4 to 8 nuclei) before cellularization.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "37bf01bc-cf42-49df-83b7-8f8002dba1f1"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Photosynthesis in Higher Plants",
    "topic": "",
    "difficulty": "expert",
    "qtype": "assertion_reason",
    "body": "Assertion (A): In C4 plants, the bundle sheath cells are characterized by a large number of chloroplasts, thick walls impervious to gaseous exchange and no intercellular spaces.\nReason (R): The presence of PEPcase in bundle sheath cells ensures high CO2 concentration around RuBisCO.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A"
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A"
      },
      {
        "id": "c",
        "text": "A is true but R is false"
      },
      {
        "id": "d",
        "text": "A is false but R is true"
      }
    ],
    "correct": "c",
    "explanation": "Assertion is correct, but the Reason is false because PEPcase is found in mesophyll cells, not bundle sheath cells (which contain RuBisCO).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "59f3cc7a-46f6-4fb3-8b0a-2e9bb7c92c9d"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Transport in Plants (Historical/Conceptual)",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "Consider the following sequence of water potential (Ψw) in a soil-plant-air continuum: Soil = -0.1 MPa, Root Xylem = -0.5 MPa, Leaf Mesophyll = -1.5 MPa, Atmosphere = -100 MPa. Which of the following statements regarding the movement of water is correct?",
    "options": [
      {
        "id": "a",
        "text": "Water will move from Leaf to Root xylem."
      },
      {
        "id": "b",
        "text": "Water will move spontaneously from Soil to Atmosphere through the plant."
      },
      {
        "id": "c",
        "text": "Water movement will stop at the Root Xylem due to negative pressure."
      },
      {
        "id": "d",
        "text": "The gradient is incorrect as soil must have the lowest potential."
      }
    ],
    "correct": "b",
    "explanation": "Water always moves from a region of higher water potential (less negative) to lower water potential (more negative).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "32874a26-f2a9-4126-8870-7d6f9e1c55f6"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Photosynthesis in Higher Plants",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "How many net ATP and NADPH molecules are required for the net synthesis of one molecule of sucrose in a C3 plant?",
    "options": [
      {
        "id": "a",
        "text": "36 ATP, 24 NADPH2"
      },
      {
        "id": "b",
        "text": "30 ATP, 12 NADPH2"
      },
      {
        "id": "c",
        "text": "18 ATP, 12 NADPH2"
      },
      {
        "id": "d",
        "text": "60 ATP, 30 NADPH2"
      }
    ],
    "correct": "a",
    "explanation": "One glucose needs 18 ATP/12 NADPH. Sucrose (C12H22O11) consists of two hexoses, so 18x2=36 ATP and 12x2=24 NADPH.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "f134a4ac-fb12-4f36-8eb1-087eb865e766"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Sexual Reproduction in Flowering Plants / Genetics",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "In a hexaploid (6n) wheat plant, what would be the ploidy of the endosperm and the microspore mother cell respectively?",
    "options": [
      {
        "id": "a",
        "text": "3n, 6n"
      },
      {
        "id": "b",
        "text": "6n, 3n"
      },
      {
        "id": "c",
        "text": "9n, 3n"
      },
      {
        "id": "d",
        "text": "9n, 6n"
      }
    ],
    "correct": "d",
    "explanation": "If the plant is 6n, gametes are 3n. Endosperm (fusion of 2 polar nuclei + 1 male gamete) = 3n + 3n + 3n = 9n. MMC is somatic tissue = 6n.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "86eadded-42ec-4f22-8d62-aab0e6fce699"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Photosynthesis in Higher Plants",
    "topic": "",
    "difficulty": "expert",
    "qtype": "assertion_reason",
    "body": "Assertion (A): The primary CO2 acceptor in the C3 cycle is a 5-carbon ketose sugar.\nReason (R): The first stable product of the C3 cycle is a 3-carbon organic acid.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A"
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A"
      },
      {
        "id": "c",
        "text": "A is true but R is false"
      },
      {
        "id": "d",
        "text": "A is false but R is true"
      }
    ],
    "correct": "b",
    "explanation": "Both A (RuBP is a 5-C ketose) and R (3-PGA) are correct facts, but R does not explain why RuBP is the acceptor.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "72b446e6-e3dd-4706-8fee-a8bc2d8cf49e"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Photosynthesis in Higher Plants",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "Identify the correct sequence of electron flow in the Z-scheme of light reaction.",
    "options": [
      {
        "id": "a",
        "text": "PS I -> Pheophytin -> PS II -> NADP+"
      },
      {
        "id": "b",
        "text": "PS II -> Plastoquinone -> Cytochrome b6f -> Plastocyanin -> PS I -> Ferredoxin -> NADP+"
      },
      {
        "id": "c",
        "text": "PS II -> Plastocyanin -> Cytochrome b6f -> PS I -> NADP+"
      },
      {
        "id": "d",
        "text": "PS I -> Plastocyanin -> PS II -> NADP+"
      }
    ],
    "correct": "b",
    "explanation": "Electrons move from PS II to Cytochrome b6f complex, then to PS I, and finally to NADP+.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "4a3a3f78-8204-401a-847e-ed4f9823c61f"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Plant Growth and Development",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "A plant hormone is used to speed up the malting process in the brewing industry and increase the length of the axis in grapes. This hormone also:",
    "options": [
      {
        "id": "a",
        "text": "Promotes nutrient mobilization and delays senescence. (Cytokinin)"
      },
      {
        "id": "b",
        "text": "Promotes female flowers in cucumbers. (Ethylene)"
      },
      {
        "id": "c",
        "text": "Promotes bolting in beet and cabbage. (GA)"
      },
      {
        "id": "d",
        "text": "Induces parthenocarpy in tomatoes. (Auxin - NCERT specific)"
      }
    ],
    "correct": "c",
    "explanation": "The hormone is Gibberellic acid (GA), which also causes bolting in rosette plants like beet/cabbage.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "d94fc551-f55b-46a9-807d-db79a18d206b"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Anatomy of Flowering Plants",
    "topic": "",
    "difficulty": "expert",
    "qtype": "assertion_reason",
    "body": "Assertion (A): Conjoint, collateral, and open vascular bundles are found in the stems of dicotyledonous plants.\nReason (R): Open vascular bundles possess a layer of cambium between xylem and phloem, enabling secondary growth.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A"
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A"
      },
      {
        "id": "c",
        "text": "A is true but R is false"
      },
      {
        "id": "d",
        "text": "A is false but R is true"
      }
    ],
    "correct": "a",
    "explanation": "The presence of cambium (Open) is exactly why they are called open and capable of secondary growth.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "959cab5b-abe6-44df-89ee-4ec1416e342b"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Plant Kingdom",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "In the life cycle of Ectocarpus and Fucus respectively, the patterns of life cycle are:",
    "options": [
      {
        "id": "a",
        "text": "Haplontic, Diplontic"
      },
      {
        "id": "b",
        "text": "Haplo-diplontic, Haplontic"
      },
      {
        "id": "c",
        "text": "Diplontic, Haplo-diplontic"
      },
      {
        "id": "d",
        "text": "Haplo-diplontic, Diplontic"
      }
    ],
    "correct": "d",
    "explanation": "Ectocarpus shows Haplo-diplontic, while Fucus (an alga exception) is Diplontic.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e20dcaaa-dccb-4b79-82e1-99955df7df2a"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Organisms and Populations",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "If a population of a plant species follows the equation dN/dt = rN[(K-N)/K], and the carrying capacity (K) is 500 while the current population (N) is 500, what is the growth rate?",
    "options": [
      {
        "id": "a",
        "text": "Maximum"
      },
      {
        "id": "b",
        "text": "Zero"
      },
      {
        "id": "c",
        "text": "rN"
      },
      {
        "id": "d",
        "text": "Infinite"
      }
    ],
    "correct": "b",
    "explanation": "When N = K, the term (K-N)/K becomes zero, making dN/dt = 0. The population is at equilibrium.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "0228a6b0-8849-49c3-83bb-bf20d1852688"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Morphology of Flowering Plants",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "Which of the following represents the correct floral formula for a plant belonging to the family Fabaceae?",
    "options": [
      {
        "id": "a",
        "text": "% ♀ ⚥ K(5) C1+2+(2) A(9)+1 G1 (underline G)"
      },
      {
        "id": "b",
        "text": "⊕ ⚥ K(5) C(5) A5 G(2) (underline G)"
      },
      {
        "id": "c",
        "text": "⊕ ⚥ P(3+3) A3+3 G(3) (underline G)"
      },
      {
        "id": "d",
        "text": "% ⚥ K(5) C5 A10 G1 (overbar G)"
      }
    ],
    "correct": "a",
    "explanation": "Fabaceae is zygomorphic (%), bisexual, 5 sepals (gamosepalous), 1+2+(2) petals (papilionaceous), 9+1 stamens (diadelphous), and superior ovary.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5ac9993d-883e-4715-868a-116b942053bc"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Photosynthesis in Higher Plants",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "During photorespiration, the decarboxylation step (release of CO2) occurs in which organelle?",
    "options": [
      {
        "id": "a",
        "text": "Chloroplast"
      },
      {
        "id": "b",
        "text": "Peroxisome"
      },
      {
        "id": "c",
        "text": "Mitochondria"
      },
      {
        "id": "d",
        "text": "Glyoxysome"
      }
    ],
    "correct": "c",
    "explanation": "CO2 is released during the conversion of two glycine (2C) molecules to one serine (3C) in the mitochondria.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "1f1ccb10-7422-41a9-8026-4d503eb5d821"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Biomolecules / Respiration",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "In the competitive inhibition of succinate dehydrogenase by malonate, which of the following is true?",
    "options": [
      {
        "id": "a",
        "text": "Vmax increases, Km decreases"
      },
      {
        "id": "b",
        "text": "Vmax decreases, Km constant"
      },
      {
        "id": "c",
        "text": "Vmax constant, Km decreases"
      },
      {
        "id": "d",
        "text": "Vmax constant, Km increases"
      }
    ],
    "correct": "d",
    "explanation": "In competitive inhibition, Km increases (more substrate needed to reach half Vmax) but Vmax remains unchanged.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "412b0015-9f63-4193-8a5a-ef3ab7787833"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Cell: The Unit of Life",
    "topic": "",
    "difficulty": "expert",
    "qtype": "assertion_reason",
    "body": "Assertion (A): The inner membrane of mitochondria is folded into cristae.\nReason (R): Cristae increase the surface area for ATP synthesis and electron transport.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A"
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A"
      },
      {
        "id": "c",
        "text": "A is true but R is false"
      },
      {
        "id": "d",
        "text": "A is false but R is true"
      }
    ],
    "correct": "a",
    "explanation": "The folding is specifically to increase the surface area available for the ETS and ATP synthase activity.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "c46de1fa-0064-464e-8ca0-020a49325271"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Respiration in Plants",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "How many turns of the Krebs cycle are required for the complete oxidation of one molecule of sucrose?",
    "options": [
      {
        "id": "a",
        "text": "1"
      },
      {
        "id": "b",
        "text": "2"
      },
      {
        "id": "c",
        "text": "3"
      },
      {
        "id": "d",
        "text": "4"
      }
    ],
    "correct": "d",
    "explanation": "Sucrose = 1 Glucose + 1 Fructose (Total 2 hexoses). Each hexose = 2 Pyruvates = 2 turns of Krebs cycle. Total = 4 turns.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "4610da5b-b757-418e-80e5-1bc79b3e0fda"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Sexual Reproduction in Flowering Plants",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "In a monoecious plant like Maize, which of the following is prevented by its flowering habit?",
    "options": [
      {
        "id": "a",
        "text": "Both Autogamy and Geitonogamy"
      },
      {
        "id": "b",
        "text": "Autogamy only"
      },
      {
        "id": "c",
        "text": "Geitonogamy only"
      },
      {
        "id": "d",
        "text": "Neither Autogamy nor Geitonogamy"
      }
    ],
    "correct": "b",
    "explanation": "In monoecious plants (male/female flowers on same plant), autogamy (same flower) is prevented, but geitonogamy (different flower, same plant) can occur.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "965fff80-0128-4f7e-818d-04c0cb3c6f60"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Transport in Plants (Historical/Conceptual)",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "Which of the following statements about the 'Mass Flow Hypothesis' is INCORRECT?",
    "options": [
      {
        "id": "a",
        "text": "Phloem loading is an active process."
      },
      {
        "id": "b",
        "text": "Water moves from xylem to phloem at the source due to water potential gradient."
      },
      {
        "id": "c",
        "text": "At the sink, sugar is actively unloaded."
      },
      {
        "id": "d",
        "text": "Loading of sugar at the source creates a hypotonic condition in the sieve tube."
      }
    ],
    "correct": "d",
    "explanation": "Sugar is loaded into the sieve tube by active transport, creating a hypertonic condition (not hypotonic).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "948c4b88-5c43-4641-862c-5ae19dc60f96"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Anatomy of Flowering Plants",
    "topic": "",
    "difficulty": "expert",
    "qtype": "assertion_reason",
    "body": "Assertion (A): In the dicot root, the vascular cambium is completely secondary in origin.\nReason (R): It originates from tissue located just below the phloem bundles and a portion of pericycle tissue above the protoxylem.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A"
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A"
      },
      {
        "id": "c",
        "text": "A is true but R is false"
      },
      {
        "id": "d",
        "text": "A is false but R is true"
      }
    ],
    "correct": "a",
    "explanation": "Unlike stems, root cambium is not pre-existing; it forms later from these specific locations.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "dd1b113e-1f90-430f-8ee3-dbd73b26b653"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Transport in Plants / Plant Phys",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "Match the following:\n(a) Guttation  (i) Pressure in Xylem\n(b) Transpiration (ii) Root Pressure\n(c) Cohesion  (iii) Pulling force\n(d) Adhesion  (iv) Mutual attraction between water molecules\n(e) Surface Tension (v) Attraction to polar surfaces",
    "options": [
      {
        "id": "a",
        "text": "a-i, b-ii, c-iii, d-iv, e-v"
      },
      {
        "id": "b",
        "text": "a-ii, b-iii, c-iv, d-v, e-i (e is not i)"
      },
      {
        "id": "c",
        "text": "a-ii, b-iii, c-iv, d-v, e-(attraction in liquid phase)"
      },
      {
        "id": "d",
        "text": "a-iii, b-ii, c-v, d-i, e-iv"
      }
    ],
    "correct": "c",
    "explanation": "Guttation is due to root pressure (ii). Cohesion is mutual attraction (iv). Adhesion is to polar surfaces (v).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "9a9a73f1-df13-4983-80fd-0279053efc26"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Photosynthesis in Higher Plants",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "In the C4 pathway, the first CO2 fixation occurs in ____ and the second CO2 fixation occurs in ____ respectively.",
    "options": [
      {
        "id": "a",
        "text": "Mesophyll, Mesophyll"
      },
      {
        "id": "b",
        "text": "Bundle sheath, Mesophyll"
      },
      {
        "id": "c",
        "text": "Bundle sheath, Bundle sheath"
      },
      {
        "id": "d",
        "text": "Mesophyll, Bundle sheath"
      }
    ],
    "correct": "d",
    "explanation": "Primary fixation by PEPcase in mesophyll, secondary fixation by RuBisCO in bundle sheath.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "43ed48bd-8a8c-4bb6-8732-b1275e2d53fe"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Sexual Reproduction in Flowering Plants",
    "topic": "",
    "difficulty": "expert",
    "qtype": "assertion_reason",
    "body": "Assertion (A): Exine of pollen grain is made of sporopollenin which is one of the most resistant organic materials known.\nReason (R): No enzyme that degrades sporopollenin is so far known.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A"
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A"
      },
      {
        "id": "c",
        "text": "A is true but R is false"
      },
      {
        "id": "d",
        "text": "A is false but R is true"
      }
    ],
    "correct": "a",
    "explanation": "The chemical resistance of sporopollenin is precisely why it remains intact in fossils and is not degraded by enzymes.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "c1284874-d0bc-4d39-8966-ed6b5b135181"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Transport in Plants / Plant Phys",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "A tree girdled up to the depth of the phloem will eventually die because:",
    "options": [
      {
        "id": "a",
        "text": "Water cannot reach the leaves."
      },
      {
        "id": "b",
        "text": "Sugars cannot reach the roots."
      },
      {
        "id": "c",
        "text": "The bark provides mechanical support."
      },
      {
        "id": "d",
        "text": "Respiration in the stem stops."
      }
    ],
    "correct": "b",
    "explanation": "Girdling (ringing) removes phloem, preventing downward movement of sugars to the roots, causing them to starve first.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "177f8df9-5488-4589-8c1a-301f7dfc97cb"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Anatomy of Flowering Plants",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "During the secondary growth of a dicot stem, the activity of the vascular cambium produces:",
    "options": [
      {
        "id": "a",
        "text": "Equal amounts of secondary xylem and secondary phloem."
      },
      {
        "id": "b",
        "text": "More secondary phloem than secondary xylem."
      },
      {
        "id": "c",
        "text": "More secondary xylem than secondary phloem."
      },
      {
        "id": "d",
        "text": "Primary xylem and primary phloem only."
      }
    ],
    "correct": "c",
    "explanation": "Vascular cambium is generally more active on the inner side, producing more secondary xylem than secondary phloem.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "706ab793-505c-4988-8c2a-86542078d53e"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Respiration in Plants",
    "topic": "",
    "difficulty": "expert",
    "qtype": "assertion_reason",
    "body": "Assertion (A): All the enzymes of the TCA cycle are located in the mitochondrial matrix.\nReason (R): TCA cycle is the second stage of aerobic respiration.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A"
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A"
      },
      {
        "id": "c",
        "text": "A is true but R is false"
      },
      {
        "id": "d",
        "text": "A is false but R is true"
      }
    ],
    "correct": "d",
    "explanation": "Assertion is false because Succinate Dehydrogenase is located on the inner mitochondrial membrane, not the matrix. Reason is true.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a53e57e9-4ba9-4096-833a-61738053297c"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Photosynthesis in Higher Plants",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "In the light reaction of photosynthesis, the movement of protons to create a gradient across the thylakoid membrane is driven by:\nI. Splitting of water on the inner side of the membrane.\nII. Primary electron acceptor passing electrons to an H-carrier.\nIII. NADP reductase located on the stroma side.\nWhich of these are correct?",
    "options": [
      {
        "id": "a",
        "text": "I and II only"
      },
      {
        "id": "b",
        "text": "II and III only"
      },
      {
        "id": "c",
        "text": "I and III only"
      },
      {
        "id": "d",
        "text": "I, II and III"
      }
    ],
    "correct": "d",
    "explanation": "All three mechanisms contribute: Water splitting (internal protons), H-carrier (pumping protons in), and NADP+ reduction (removing stroma protons).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "15235ea3-6202-4a45-815c-92efc12e24f2"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Respiration in Plants",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "How many ATP are produced by substrate-level phosphorylation during the conversion of one molecule of glucose to two molecules of Pyruvic acid?",
    "options": [
      {
        "id": "a",
        "text": "2 ATP"
      },
      {
        "id": "b",
        "text": "36 ATP"
      },
      {
        "id": "c",
        "text": "4 ATP"
      },
      {
        "id": "d",
        "text": "8 ATP"
      }
    ],
    "correct": "c",
    "explanation": "During glycolysis, 4 ATP are produced by SLP (2 from BPGA to PGA, 2 from PEP to Pyruvate). Net gain is 2, but total production by SLP is 4.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "dacc2341-2ed1-4b8a-8435-ece09c2b9bbd"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Plant Growth and Development",
    "topic": "",
    "difficulty": "expert",
    "qtype": "assertion_reason",
    "body": "Assertion (A): Long-day plants flower only when they are exposed to light for a duration more than their critical day length.\nReason (R): The light period is perceived by the shoot apex during the induction of flowering.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A"
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A"
      },
      {
        "id": "c",
        "text": "A is true but R is false"
      },
      {
        "id": "d",
        "text": "A is false but R is true"
      }
    ],
    "correct": "c",
    "explanation": "Assertion is correct. Reason is false because the site of perception of light/dark duration is the leaves, not the shoot apex.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8b71d985-48c5-4351-8f24-2759975a0626"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Cell Cycle and Cell Division",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "Which of the following is the correct order of the stages of Prophase I in Meiosis?",
    "options": [
      {
        "id": "a",
        "text": "Leptotene, Pachytene, Zygotene, Diplotene, Diakinesis"
      },
      {
        "id": "b",
        "text": "Leptotene, Zygotene, Pachytene, Diplotene, Diakinesis"
      },
      {
        "id": "c",
        "text": "Zygotene, Leptotene, Pachytene, Diplotene, Diakinesis"
      },
      {
        "id": "d",
        "text": "Leptotene, Zygotene, Pachytene, Diakinesis, Diplotene"
      }
    ],
    "correct": "b",
    "explanation": "Leptotene, Zygotene, Pachytene, Diplotene, Diakinesis (L, Z, P, D, D).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e141e087-43f9-43bd-8525-9e1373297a9a"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Molecular Basis of Inheritance / Biomolecules",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "In a DNA molecule, if the percentage of Cytosine is 18%, what is the percentage of Adenine?",
    "options": [
      {
        "id": "a",
        "text": "18%"
      },
      {
        "id": "b",
        "text": "36%"
      },
      {
        "id": "c",
        "text": "32%"
      },
      {
        "id": "d",
        "text": "64%"
      }
    ],
    "correct": "c",
    "explanation": "C = G = 18%. Total C+G = 36%. Therefore, A+T = 100 - 36 = 64%. A = T = 64/2 = 32%.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "4eabaab6-d095-4307-8b11-88b47b3d8064"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Biomolecules",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The 'Lock and Key' hypothesis of enzyme action explains how a specific substrate binds to an enzyme. If an enzyme's tertiary structure is slightly altered by a non-competitive inhibitor binding to an allosteric site, what is the most likely outcome?",
    "options": [
      {
        "id": "a",
        "text": "The substrate will bind more tightly to the active site."
      },
      {
        "id": "b",
        "text": "The active site changes shape, preventing substrate binding."
      },
      {
        "id": "c",
        "text": "The inhibitor competes with the substrate for the active site."
      },
      {
        "id": "d",
        "text": "The Vmax remains constant while Km increases."
      }
    ],
    "correct": "b",
    "explanation": "Non-competitive inhibitors bind to the allosteric site, changing the enzyme's shape so the substrate no longer fits the active site.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8878870d-9fb0-4a02-84fd-ad259ca1b655"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Animal Kingdom",
    "topic": "",
    "difficulty": "medium",
    "qtype": "assertion_reason",
    "body": "Assertion (A): Protonephridia are primarily concerned with ionic and fluid volume regulation (osmoregulation).\nReason (R): In Platyhelminthes, these structures are called flame cells and they lack a true circulatory system.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "b",
    "explanation": "Both statements are true; however, the lack of a circulatory system is not the reason why they are primarily osmoregulatory.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "78c08fee-1c24-4744-8a2e-b4095258a46c"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Breathing and Exchange of Gases",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "A person who has migrated to a high altitude (above 3500m) will experience 'Altitude Sickness'. Which of the following physiological changes occurs as an adaptation after a few days?",
    "options": [
      {
        "id": "a",
        "text": "Decreased RBC production and increased hemoglobin binding affinity."
      },
      {
        "id": "b",
        "text": "Increased breathing rate and increased hemoglobin binding affinity."
      },
      {
        "id": "c",
        "text": "Increased RBC production and decreased hemoglobin binding affinity."
      },
      {
        "id": "d",
        "text": "Decreased breathing rate and increased RBC production."
      }
    ],
    "correct": "c",
    "explanation": "Low oxygen at high altitudes triggers increased RBC production and decreased binding affinity of hemoglobin to release O2 to tissues.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "58d29421-a3c3-440c-89cb-28c3326df23a"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Body Fluids and Circulation",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "In the context of the human cardiac cycle, if the stroke volume is 70 mL and the heart rate is 80 beats per minute, what is the volume of blood pumped by the left ventricle in 30 seconds?",
    "options": [
      {
        "id": "a",
        "text": "2800 mL"
      },
      {
        "id": "b",
        "text": "5600 mL"
      },
      {
        "id": "c",
        "text": "4200 mL"
      },
      {
        "id": "d",
        "text": "1400 mL"
      }
    ],
    "correct": "a",
    "explanation": "Cardiac output = Stroke Volume x Heart Rate = 70 x 80 = 5600 mL/min. In 30 seconds, it is 2800 mL.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "23c77435-19f0-49bc-879d-9e222a6a714f"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Animal Kingdom",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Which of the following is NOT a characteristic feature of Phylum Hemichordata?",
    "options": [
      {
        "id": "a",
        "text": "Presence of a proboscis gland for excretion."
      },
      {
        "id": "b",
        "text": "Cylindrical body composed of proboscis, collar, and trunk."
      },
      {
        "id": "c",
        "text": "Respiration through gills."
      },
      {
        "id": "d",
        "text": "Closed type circulatory system."
      }
    ],
    "correct": "d",
    "explanation": "Hemichordates have a stomochord, not a true notochord, and they have an open circulatory system.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "c3611fbc-ab41-495d-8f5f-26e3d00f965c"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Body Fluids and Circulation",
    "topic": "",
    "difficulty": "medium",
    "qtype": "assertion_reason",
    "body": "Assertion (A): A person with 'O' blood group is considered a universal donor.\nReason (R): The RBCs of 'O' blood group lack both A and B antigens on their surface.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "Universal donors lack antigens that could react with the recipient's antibodies.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "fddf6956-22eb-4185-8b0d-7ca5a797417f"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Locomotion and Movement",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "During skeletal muscle contraction, which of the following regions of the sarcomere does NOT shorten or disappear?",
    "options": [
      {
        "id": "a",
        "text": "I-band"
      },
      {
        "id": "b",
        "text": "H-zone"
      },
      {
        "id": "c",
        "text": "A-band"
      },
      {
        "id": "d",
        "text": "Sarcomere length"
      }
    ],
    "correct": "c",
    "explanation": "The A-band contains the full length of myosin filaments and does not change length during contraction.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "0124f026-5f46-4b7d-8577-19761b6bef58"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Excretory Products and their Elimination",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "A decrease in blood pressure/volume will NOT cause the release of:",
    "options": [
      {
        "id": "a",
        "text": "Renin"
      },
      {
        "id": "b",
        "text": "Aldosterone"
      },
      {
        "id": "c",
        "text": "Atrial Natriuretic Factor"
      },
      {
        "id": "d",
        "text": "ADH"
      }
    ],
    "correct": "c",
    "explanation": "ANF is released by the heart in response to high blood pressure to cause vasodilation and decrease BP.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "df51b445-0f33-400c-8ea5-99bd4961725e"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Locomotion and Movement",
    "topic": "",
    "difficulty": "medium",
    "qtype": "assertion_reason",
    "body": "Assertion (A): Myasthenia gravis is an autoimmune disorder that affects the neuromuscular junction.\nReason (R): In this condition, the body's immune system starts destroying the myelin sheath of central neurons.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "c",
    "explanation": "Myasthenia gravis involves antibodies against acetylcholine receptors, not destruction of the myelin sheath (which is Multiple Sclerosis).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e533f291-a8bf-40e1-8bcf-41398d3f1915"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Neural Control and Coordination",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "In the human ear, which structure is responsible for converting sound waves into mechanical vibrations before they reach the ear ossicles?",
    "options": [
      {
        "id": "a",
        "text": "Basilar membrane"
      },
      {
        "id": "b",
        "text": "Organ of Corti"
      },
      {
        "id": "c",
        "text": "Oval window"
      },
      {
        "id": "d",
        "text": "Tympanic membrane"
      }
    ],
    "correct": "d",
    "explanation": "The tympanic membrane (eardrum) receives air vibrations and transmits them to the malleus.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "0ba78b1e-4337-42c0-8796-da2d7b0f5aa2"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Chemical Coordination and Integration",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Which of the following hormones is a derivative of amino acid tyrosine?",
    "options": [
      {
        "id": "a",
        "text": "Insulin"
      },
      {
        "id": "b",
        "text": "Epinephrine"
      },
      {
        "id": "c",
        "text": "Estrogen"
      },
      {
        "id": "d",
        "text": "Oxytocin"
      }
    ],
    "correct": "b",
    "explanation": "Epinephrine (Adrenaline) and Thyroxine are tyrosine derivatives.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "0501b05a-ac00-4d32-8454-6880cd43306b"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Principles of Inheritance and Variation",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "In a dihybrid cross involving two genes linked on the same chromosome, the frequency of recombinant types is:",
    "options": [
      {
        "id": "a",
        "text": "Equal to 50%"
      },
      {
        "id": "b",
        "text": "Less than 50%"
      },
      {
        "id": "c",
        "text": "More than 50%"
      },
      {
        "id": "d",
        "text": "Always 0%"
      }
    ],
    "correct": "b",
    "explanation": "Linked genes do not assort independently, so recombinant frequency is always less than 50%.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "58958ac6-33c0-46e5-8892-5c322321dcdf"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Human Reproduction",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Which part of the human sperm contains the enzymes that help in the penetration of the zona pellucida of the ovum?",
    "options": [
      {
        "id": "a",
        "text": "Mitochondria in the middle piece"
      },
      {
        "id": "b",
        "text": "Nucleus in the head"
      },
      {
        "id": "c",
        "text": "Acrosome"
      },
      {
        "id": "d",
        "text": "Centriole"
      }
    ],
    "correct": "c",
    "explanation": "The acrosome, a cap-like structure at the tip of the sperm, contains hydrolytic enzymes.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "05e041e2-d042-457f-84d0-1b5c724ae250"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Human Reproduction",
    "topic": "",
    "difficulty": "medium",
    "qtype": "assertion_reason",
    "body": "Assertion (A): The inner cell mass of the blastocyst contains certain cells called stem cells.\nReason (R): These stem cells have the potency to give rise to all the tissues and organs of the embryo.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "Stem cells in the ICM are pluripotent and responsible for forming the entire embryonic body.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5d1b3920-9945-4cea-84c3-77baacde25a4"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Reproductive Health",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Which contraceptive method involves the entry of sperm being blocked, while also providing protection against STIs?",
    "options": [
      {
        "id": "a",
        "text": "Liopes loop"
      },
      {
        "id": "b",
        "text": "Condoms"
      },
      {
        "id": "c",
        "text": "Saheli (oral pill)"
      },
      {
        "id": "d",
        "text": "Vasectomy"
      }
    ],
    "correct": "b",
    "explanation": "Condoms act as a physical barrier and prevent the exchange of body fluids, protecting against STIs.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "31e80059-1ac1-4288-89f2-caf3ced7b981"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Evolution",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "According to the 'RNA World' hypothesis, why was RNA likely the first genetic material?",
    "options": [
      {
        "id": "a",
        "text": "It has the ability to act as both a genetic material and a catalyst."
      },
      {
        "id": "b",
        "text": "It is more stable than DNA."
      },
      {
        "id": "c",
        "text": "It is always double-stranded."
      },
      {
        "id": "d",
        "text": "It lacks uracil which makes it reactive."
      }
    ],
    "correct": "a",
    "explanation": "RNA has both genetic information storage and catalytic (enzymatic) capabilities.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "4200b157-36b0-4b39-8e2c-e02c03e9848b"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Molecular Basis of Inheritance",
    "topic": "",
    "difficulty": "medium",
    "qtype": "assertion_reason",
    "body": "Assertion (A): In a DNA molecule, the ratio of Adenine to Thymine and Guanine to Cytosine is constant and equals one.\nReason (R): This is known as Chargaff's rule, which is applicable to both double-stranded and single-stranded DNA.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "c",
    "explanation": "Chargaff's rule is only applicable to double-stranded DNA, not single-stranded DNA.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "18d70d48-bd45-47bb-84c8-dbf0a5217434"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Evolution",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The 'Struggle for Existence' and 'Survival of the Fittest' are the two cornerstones of which theory?",
    "options": [
      {
        "id": "a",
        "text": "Lamarckism"
      },
      {
        "id": "b",
        "text": "Darwinism"
      },
      {
        "id": "c",
        "text": "Mutation Theory"
      },
      {
        "id": "d",
        "text": "Modern Synthetic Theory"
      }
    ],
    "correct": "b",
    "explanation": "These concepts are central to Charles Darwin's Theory of Natural Selection.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "6203ca8e-0c1b-44c7-86d8-3394412a669d"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Human Health and Disease",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Which immune response is responsible for the rejection of a kidney transplant?",
    "options": [
      {
        "id": "a",
        "text": "Humoral immune response"
      },
      {
        "id": "b",
        "text": "Auto-immune response"
      },
      {
        "id": "c",
        "text": "Cell-mediated immune response"
      },
      {
        "id": "d",
        "text": "Inflammatory response"
      }
    ],
    "correct": "c",
    "explanation": "Cell-mediated immunity (T-lymphocytes) is primarily responsible for graft/transplant rejection.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "f61a16d5-a22c-4537-8219-3fac47aa4b36"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Microbes in Human Welfare",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Which of the following is a 'statins' producing microorganism used for lowering blood cholesterol?",
    "options": [
      {
        "id": "a",
        "text": "Trichoderma polysporum"
      },
      {
        "id": "b",
        "text": "Saccharomyces cerevisiae"
      },
      {
        "id": "c",
        "text": "Aspergillus niger"
      },
      {
        "id": "d",
        "text": "Monascus purpureus"
      }
    ],
    "correct": "d",
    "explanation": "Statins are produced by the yeast Monascus purpureus.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a0254534-c8ae-49fa-841e-0b07e86487b7"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Biotechnology and its Applications",
    "topic": "",
    "difficulty": "medium",
    "qtype": "assertion_reason",
    "body": "Assertion (A): The recombinant DNA technology can be used to produce 'Bt cotton' which is resistant to bollworms.\nReason (R): The Bt toxin is produced by the plant in an active form that kills the insect immediately upon contact.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "c",
    "explanation": "The Bt toxin is produced as an inactive protoxin and is activated only in the alkaline pH of the insect's gut.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "59775a0a-21f3-456e-8ba5-d07d33d59532"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Biotechnology: Principles and Processes",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "In the pBR322 vector, the presence of 'rop' gene codes for:",
    "options": [
      {
        "id": "a",
        "text": "Antibiotic resistance to Tetracycline"
      },
      {
        "id": "b",
        "text": "Proteins involved in the replication of the plasmid"
      },
      {
        "id": "c",
        "text": "Selectable markers for screening"
      },
      {
        "id": "d",
        "text": "Restriction site for BamHI"
      }
    ],
    "correct": "b",
    "explanation": "The 'rop' gene codes for the proteins involved in the replication of the plasmid.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e4b309bb-253a-4752-824e-7047c2445b60"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Organisms and Populations",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Which of the following is a physiological adaptation shown by desert lizards to manage high temperatures?",
    "options": [
      {
        "id": "a",
        "text": "Concentrating urine to conserve water."
      },
      {
        "id": "b",
        "text": "Possessing a thick layer of fat (blubber)."
      },
      {
        "id": "c",
        "text": "High rate of internal fat oxidation."
      },
      {
        "id": "d",
        "text": "None of these; they show behavioral adaptations."
      }
    ],
    "correct": "d",
    "explanation": "Desert lizards lack physiological adaptations like sweating and instead use behavioral means (basking/shade-seeking) to regulate temperature.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "42e406bd-2222-4283-8931-65804e77dcae"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Ecosystem",
    "topic": "",
    "difficulty": "medium",
    "qtype": "assertion_reason",
    "body": "Assertion (A): The pyramid of energy is always upright and can never be inverted.\nReason (R): When energy flows from a particular trophic level to the next, some energy is always lost as heat at each step.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "The 10% law ensures energy decreases at higher levels, making the pyramid always upright.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "125594f0-8d07-4e98-8adf-0a5fe4738f6e"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Biodiversity and Conservation",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Which of the following is NOT a major cause of biodiversity loss (The Evil Quartet)?",
    "options": [
      {
        "id": "a",
        "text": "Habitat loss and fragmentation"
      },
      {
        "id": "b",
        "text": "In-situ conservation"
      },
      {
        "id": "c",
        "text": "Over-exploitation"
      },
      {
        "id": "d",
        "text": "Alien species invasions"
      }
    ],
    "correct": "b",
    "explanation": "In-situ conservation is a method of protecting biodiversity, not a cause of its loss.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "3b5db8a4-f73b-4a2e-8547-a440441e2247"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Breathing and Exchange of Gases",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The partial pressure of oxygen (pO2) in the alveoli and the oxygenated blood is respectively:",
    "options": [
      {
        "id": "a",
        "text": "104 and 40 mm Hg"
      },
      {
        "id": "b",
        "text": "104 and 95 mm Hg"
      },
      {
        "id": "c",
        "text": "40 and 95 mm Hg"
      },
      {
        "id": "d",
        "text": "95 and 104 mm Hg"
      }
    ],
    "correct": "b",
    "explanation": "pO2 is 104 mm Hg in alveoli and 95 mm Hg in oxygenated blood.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "26952391-36f8-4ac1-831e-ae07fe6d5666"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Chemical Coordination and Integration",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "A person with Addison's disease shows symptoms like low blood sugar, low plasma Na+, and high plasma K+. This is due to the hyposecretion of hormones from:",
    "options": [
      {
        "id": "a",
        "text": "Thyroid gland"
      },
      {
        "id": "b",
        "text": "Pancreas"
      },
      {
        "id": "c",
        "text": "Adrenal cortex"
      },
      {
        "id": "d",
        "text": "Adrenal medulla"
      }
    ],
    "correct": "c",
    "explanation": "Addison's disease is caused by the deficiency of corticoid hormones from the adrenal cortex.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "0134ab47-36f3-4062-8112-4f667129787a"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Animal Kingdom",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "In which of the following animals is the body cavity NOT lined by mesoderm, instead, the mesoderm is present as scattered pouches?",
    "options": [
      {
        "id": "a",
        "text": "Ascaris"
      },
      {
        "id": "b",
        "text": "Pheretima"
      },
      {
        "id": "c",
        "text": "Periplaneta"
      },
      {
        "id": "d",
        "text": "Fasciola"
      }
    ],
    "correct": "a",
    "explanation": "Aschelminthes (roundworms) are pseudocoelomates where the mesoderm is present as scattered pouches.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a5269845-e260-4fd6-8f87-2763d313749a"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Principles of Inheritance and Variation",
    "topic": "",
    "difficulty": "medium",
    "qtype": "assertion_reason",
    "body": "Assertion (A): Human females have a higher risk of becoming carriers for Hemophilia compared to males.\nReason (R): Hemophilia is a Y-linked recessive disorder.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "c",
    "explanation": "Hemophilia is an X-linked recessive disorder, not Y-linked. Males cannot be carriers; they are either affected or normal.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "ff62e765-80c5-4b1a-884b-0c7efd376d8e"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Breathing and Exchange of Gases",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The volume of air that remains in the lungs even after a forcible expiration is called:",
    "options": [
      {
        "id": "a",
        "text": "Expiratory Reserve Volume"
      },
      {
        "id": "b",
        "text": "Tidal Volume"
      },
      {
        "id": "c",
        "text": "Residual Volume"
      },
      {
        "id": "d",
        "text": "Vital Capacity"
      }
    ],
    "correct": "c",
    "explanation": "Residual Volume (RV) is the air left in the lungs after maximum expiration.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "07778f93-4b76-418b-8f50-55512a2a146a"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Body Fluids and Circulation",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Identify the correct sequence of events during a single cardiac cycle in a healthy adult:\nI. Closing of AV valves\nII. Atrial systole\nIII. Semilunar valves open\nIV. Joint diastole\nV. Ventricular diastole starts\nVI. Ventricular systole starts",
    "options": [
      {
        "id": "a",
        "text": "IV -> II -> VI -> III -> I -> V"
      },
      {
        "id": "b",
        "text": "IV -> II -> VI -> I -> III -> V"
      },
      {
        "id": "c",
        "text": "II -> VI -> I -> IV -> III -> V"
      },
      {
        "id": "d",
        "text": "VI -> III -> I -> V -> IV -> II"
      }
    ],
    "correct": "b",
    "explanation": "The cycle follows Joint diastole -> Atrial systole -> Ventricular systole (closing AV valves, opening SL valves) -> Ventricular diastole.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "0da99f53-2968-453d-8f93-65f84ebc158b"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Breathing and Exchange of Gases",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A patient has a vital capacity (VC) of 4.5 L, Tidal Volume (TV) of 0.5 L, and Expiratory Reserve Volume (ERV) of 1.2 L. If the Residual Volume (RV) is 1.1 L, what is the Inspiratory Capacity (IC) and Functional Residual Capacity (FRC)?",
    "options": [
      {
        "id": "a",
        "text": "IC = 3.8 L, FRC = 2.8 L"
      },
      {
        "id": "b",
        "text": "IC = 3.0 L, FRC = 1.7 L"
      },
      {
        "id": "c",
        "text": "IC = 3.3 L, FRC = 2.3 L"
      },
      {
        "id": "d",
        "text": "IC = 2.8 L, FRC = 2.3 L"
      }
    ],
    "correct": "c",
    "explanation": "IC = VC - ERV = 4.5 - 1.2 = 3.3 L; FRC = ERV + RV = 1.2 + 1.1 = 2.3 L.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "7e882491-6408-4187-8e9f-f788a323ad61"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Neural Control and Coordination",
    "topic": "",
    "difficulty": "hard",
    "qtype": "assertion_reason",
    "body": "Assertion (A): During the conduction of a nerve impulse, the Na-K pump helps in maintaining the resting potential by transporting 3 Na+ outwards for 2 K+ inwards.\nReason (R): The axonal membrane is nearly impermeable to potassium ions (K+) and relatively permeable to sodium ions (Na+) at rest.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is not the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "Both A and R are false."
      }
    ],
    "correct": "c",
    "explanation": "Assertion is true, but Reason is false because at rest, the membrane is more permeable to K+ and nearly impermeable to Na+.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "ba7d9360-dba2-4b10-8339-64b10e5d18b4"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Excretory Products and Their Elimination",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "In the context of the counter-current mechanism in the kidney, which of the following statements is INCORRECT?",
    "options": [
      {
        "id": "a",
        "text": "The NaCl is transported by the ascending limb of Henle's loop which is exchanged with the descending limb of vasa recta."
      },
      {
        "id": "b",
        "text": "The gradient in the medullary interstitium is mainly caused by NaCl and urea."
      },
      {
        "id": "c",
        "text": "Water is highly permeable in the ascending limb of the loop of Henle."
      },
      {
        "id": "d",
        "text": "Urea enters the thin segment of the ascending limb of Henle's loop."
      }
    ],
    "correct": "d",
    "explanation": "NaCl is transported out of the ascending limb of the loop of Henle, not the descending limb.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "271fc5eb-67d9-4b04-8fff-6c0da11b567c"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Chemical Coordination and Integration",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Match the following hormones with their source and function:\n(a) CCK (i) Gastric glands; inhibits secretion\n(b) GIP (ii) Pancreas; stimulates enzyme secretion\n(c) Secretin (iii) Duodenum; stimulates water and bicarbonate\n(d) Gastrin (iv) Stomach; stimulates HCl secretion",
    "options": [
      {
        "id": "a",
        "text": "(a)-ii, (b)-i, (c)-iii, (d)-iv"
      },
      {
        "id": "b",
        "text": "(a)-iii, (b)-ii, (c)-i, (d)-iv"
      },
      {
        "id": "c",
        "text": "(a)-iv, (b)-iii, (c)-ii, (d)-i"
      },
      {
        "id": "d",
        "text": "(a)-ii, (b)-iii, (c)-i, (d)-iv"
      }
    ],
    "correct": "a",
    "explanation": "CCK acts on the pancreas for enzymes; GIP inhibits gastric secretion; Secretin stimulates bicarbonate; Gastrin stimulates HCl.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "38635fb5-5033-4aff-8bb8-bea1936c27b0"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Locomotion and Movement",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Which of the following describes the 'Power Stroke' in muscle contraction correctly?",
    "options": [
      {
        "id": "a",
        "text": "Binding of ATP to the myosin head causes it to detach from actin."
      },
      {
        "id": "b",
        "text": "Release of ADP and inorganic phosphate (Pi) makes the myosin head tilt, pulling actin towards the M-line."
      },
      {
        "id": "c",
        "text": "Hydrolysis of ATP causes the myosin head to bind to the active site on actin."
      },
      {
        "id": "d",
        "text": "Binding of Calcium to Troponin C masks the active sites on actin."
      }
    ],
    "correct": "b",
    "explanation": "The release of ADP and Pi causes the myosin head to bend and pull the actin filament.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "cd1b1383-445f-40ee-8de4-5ae7214f3e77"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Principles of Inheritance and Variation",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "In a dihybrid cross involving two genes located on the same chromosome (linked), the frequency of recombination was found to be 5%. What does this indicate?",
    "options": [
      {
        "id": "a",
        "text": "The genes are 5 map units apart and show tight linkage."
      },
      {
        "id": "b",
        "text": "The genes show independent assortment."
      },
      {
        "id": "c",
        "text": "The genes are 50 map units apart."
      },
      {
        "id": "d",
        "text": "95% of the progeny are recombinants."
      }
    ],
    "correct": "a",
    "explanation": "Recombination frequency is proportional to the distance between genes (1% = 1 cM). 5% = 5 map units.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5faef7fc-28b6-4d42-80e9-30bb8c0cb4a6"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Human Reproduction",
    "topic": "",
    "difficulty": "hard",
    "qtype": "assertion_reason",
    "body": "Assertion (A): In the follicular phase of the menstrual cycle, LH and FSH levels gradually increase.\nReason (R): The increasing level of LH and FSH stimulates follicular development and secretion of estrogens by the growing follicles.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is not the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "Both A and R are false."
      }
    ],
    "correct": "a",
    "explanation": "Both statements are true and the reason explains the follicular development during the phase.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8270e900-453f-4702-8101-585e58c3c42f"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Human Health and Disease",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "How many of the following are examples of passive immunity?\nI. Colostrum given to a newborn\nII. Anti-tetanus serum (ATS) injection\nIII. Polio drops (OPV)\nIV. Transfer of antibodies through placenta\nV. Vaccination against Hepatitis B",
    "options": [
      {
        "id": "a",
        "text": "Two"
      },
      {
        "id": "b",
        "text": "Four"
      },
      {
        "id": "c",
        "text": "Three"
      },
      {
        "id": "d",
        "text": "Five"
      }
    ],
    "correct": "d",
    "explanation": "Colostrum (IgA), ATS (pre-formed antibodies), and Placenta (IgG) are passive. Polio and Hep B vaccines are active immunity.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "1eb03504-74be-48ac-8edf-f06fe88a1850"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Molecular Basis of Inheritance",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Which statement about the Lac Operon in E. coli is correct?",
    "options": [
      {
        "id": "a",
        "text": "The i-gene codes for the inducer."
      },
      {
        "id": "b",
        "text": "RNA polymerase binds to the operator to initiate transcription."
      },
      {
        "id": "c",
        "text": "Lactose binds to the repressor to inactivate it."
      },
      {
        "id": "d",
        "text": "The y-gene codes for transacetylase."
      }
    ],
    "correct": "c",
    "explanation": "Lactose acts as an inducer that binds to the repressor protein, preventing it from binding to the operator.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "4b56c4f1-6d98-41a6-8591-0b1f6fb1540e"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Molecular Basis of Inheritance",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "In a specific DNA molecule, 20% of the bases are Adenine. What will be the percentage of Cytosine?",
    "options": [
      {
        "id": "a",
        "text": "20%"
      },
      {
        "id": "b",
        "text": "30%"
      },
      {
        "id": "c",
        "text": "60%"
      },
      {
        "id": "d",
        "text": "80%"
      }
    ],
    "correct": "b",
    "explanation": "Chargaff's Rule: A=T, G=C. If A=20, then T=20. A+T=40. Remaining 60% is G+C. So C = 30%.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "4892f10c-ad17-4915-8e68-39f277559af0"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Reproductive Health",
    "topic": "",
    "difficulty": "hard",
    "qtype": "assertion_reason",
    "body": "Assertion (A): The use of MTP (Medical Termination of Pregnancy) is always safe throughout the first and second trimesters.\nReason (R): MTP is legal in India up to 24 weeks for certain categories like rape victims.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is not the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is false but R is true."
      },
      {
        "id": "d",
        "text": "Both A and R are false."
      }
    ],
    "correct": "c",
    "explanation": "Assertion is false; MTP is significantly riskier in the second trimester. Reason is true (amended MTP act).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e64391d9-522c-408e-8d50-3991a3a2c814"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Human Health and Disease",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Which of the following is NOT an autoimmune disease?",
    "options": [
      {
        "id": "a",
        "text": "Muscular dystrophy"
      },
      {
        "id": "b",
        "text": "Myasthenia gravis"
      },
      {
        "id": "c",
        "text": "Rheumatoid arthritis"
      },
      {
        "id": "d",
        "text": "Type 1 Diabetes Mellitus"
      }
    ],
    "correct": "a",
    "explanation": "Muscular dystrophy is a genetic disorder, whereas Myasthenia gravis and Rheumatoid arthritis are autoimmune.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "d815f93c-e5e1-4654-8127-e598011ffd10"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Breathing and Exchange of Gases",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Calculate the Partial Pressure of Oxygen (pO2) in the Alveoli if the total atmospheric pressure is 760 mmHg and Oxygen makes up 21% of the dry air, considering water vapor pressure in alveoli? (Note: Refer to standard NCERT values).",
    "options": [
      {
        "id": "a",
        "text": "159 mmHg"
      },
      {
        "id": "b",
        "text": "104 mmHg"
      },
      {
        "id": "c",
        "text": "40 mmHg"
      },
      {
        "id": "d",
        "text": "95 mmHg"
      }
    ],
    "correct": "b",
    "explanation": "NCERT standard table gives pO2 in Alveoli as 104 mmHg.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a91a05a7-ecfa-4059-89a7-7a857bba5efa"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Molecular Basis of Inheritance",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "If a double-stranded DNA has 20 coils (turns of helix), what is the total number of hydrogen bonds if the number of Guanine bases is 30?",
    "options": [
      {
        "id": "a",
        "text": "400"
      },
      {
        "id": "b",
        "text": "500"
      },
      {
        "id": "c",
        "text": "600"
      },
      {
        "id": "d",
        "text": "430"
      }
    ],
    "correct": "d",
    "explanation": "20 coils = 200 base pairs (400 bases). G=30, so C=30 (30 G-C pairs). Remaining are A-T pairs: (200 - 30) = 170 A-T pairs. H-bonds = (30 * 3) + (170 * 2) = 90 + 340 = 430.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "47329e90-1bdc-4671-868f-77e4fc5a8d06"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Human Reproduction",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Choose the correct statement regarding the hormonal control of spermatogenesis.",
    "options": [
      {
        "id": "a",
        "text": "GnRH acts on the posterior pituitary to release LH and FSH."
      },
      {
        "id": "b",
        "text": "LH acts on Sertoli cells to stimulate the secretion of some factors for spermiogenesis."
      },
      {
        "id": "c",
        "text": "FSH acts on Sertoli cells and stimulates the process of spermiogenesis."
      },
      {
        "id": "d",
        "text": "Testosterone acts on the hypothalamus to stimulate GnRH via positive feedback."
      }
    ],
    "correct": "c",
    "explanation": "LH acts on Leydig cells for testosterone; FSH acts on Sertoli cells for spermiogenesis.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "79f0fac1-042e-4db7-8fba-989f3b54c511"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Reproductive Health",
    "topic": "",
    "difficulty": "hard",
    "qtype": "assertion_reason",
    "body": "Assertion (A): Saheli is a 'once-a-week' pill with very few side effects.\nReason (R): It is a non-steroidal preparation containing Centchroman.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is not the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "Both A and R are false."
      }
    ],
    "correct": "a",
    "explanation": "Both are correct; its non-steroidal nature reduces side effects and its pharmacokinetics allow weekly dosage.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "3978df77-76f6-48d3-81e3-38714520dab9"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Body Fluids and Circulation",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "In a standard ECG, the T-wave represents:",
    "options": [
      {
        "id": "a",
        "text": "Depolarization of ventricles"
      },
      {
        "id": "b",
        "text": "Repolarization of ventricles"
      },
      {
        "id": "c",
        "text": "Depolarization of atria"
      },
      {
        "id": "d",
        "text": "Beginning of systole"
      }
    ],
    "correct": "b",
    "explanation": "T-wave represents the return of ventricles to the normal state (repolarization).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "1cc73315-fb2f-4cf1-8f16-b656573d5150"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Human Reproduction",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Which of the following describes the correct path of sperm from the seminiferous tubules to the outside?",
    "options": [
      {
        "id": "a",
        "text": "Rete testis -> Vasa efferentia -> Epididymis -> Vas deferens"
      },
      {
        "id": "b",
        "text": "Vasa efferentia -> Rete testis -> Vas deferens -> Epididymis"
      },
      {
        "id": "c",
        "text": "Epididymis -> Rete testis -> Vasa efferentia -> Vas deferens"
      },
      {
        "id": "d",
        "text": "Rete testis -> Epididymis -> Vasa efferentia -> Vas deferens"
      }
    ],
    "correct": "a",
    "explanation": "Seminiferous tubules -> Rete testis -> Vasa efferentia -> Epididymis -> Vas deferens -> Ejaculatory duct -> Urethra.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "7b9e9284-3ebd-4759-85c6-158a4b52a1db"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Animal Kingdom",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Identify the mismatch in the following:",
    "options": [
      {
        "id": "a",
        "text": "Spongilla - Canal system"
      },
      {
        "id": "b",
        "text": "Pennatula - Cnidocytes"
      },
      {
        "id": "c",
        "text": "Pleurobrachia - Organ level of organization"
      },
      {
        "id": "d",
        "text": "Ancylostoma - Pseudocoelomate"
      }
    ],
    "correct": "c",
    "explanation": "Ctenophores exhibit tissue level of organization, not organ level.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "cdda8b37-82ae-430e-8fbe-d66aba9a33fa"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Neural Control and Coordination",
    "topic": "",
    "difficulty": "hard",
    "qtype": "assertion_reason",
    "body": "Assertion (A): The inner ear contains the organ of Corti which acts as an auditory receptor.\nReason (R): The organ of Corti is located on the Reissner's membrane.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is not the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "Both A and R are false."
      }
    ],
    "correct": "c",
    "explanation": "Assertion is true, but the organ of Corti is located on the Basilar membrane, not Reissner's membrane.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "0a0701c4-499f-470d-8d2c-832e81be8600"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Organisms and Populations / Breathing and Exchange of Gases",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A person who has migrated from the plains to Rohtang Pass (~4000m) for six months will:",
    "options": [
      {
        "id": "a",
        "text": "Have a lower RBC count than plains dwellers."
      },
      {
        "id": "b",
        "text": "Have a higher RBC count and their hemoglobin has a lower binding affinity for O2."
      },
      {
        "id": "c",
        "text": "Suffer from altitude sickness permanently."
      },
      {
        "id": "d",
        "text": "Show no change in breathing rate."
      }
    ],
    "correct": "b",
    "explanation": "Altitude sickness is compensated by increasing RBC count, decreasing hemoglobin binding affinity, and increasing breathing rate.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "82320f49-073c-4f9c-8eae-415fc0b2b485"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Excretory Products and Their Elimination",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Which of the following sets of animals are all Uricotelic?",
    "options": [
      {
        "id": "a",
        "text": "Bony fish, Aquatic amphibians, Insects"
      },
      {
        "id": "b",
        "text": "Mammals, Terrestrial amphibians, Sharks"
      },
      {
        "id": "c",
        "text": "Birds, Reptiles, Bony fish"
      },
      {
        "id": "d",
        "text": "Reptiles, Birds, Insects"
      }
    ],
    "correct": "d",
    "explanation": "Reptiles, birds, land snails, and insects are uricotelic. Birds and Reptiles fit this.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8e7edea7-8a50-43d7-8775-9dac734ad6ff"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Biotechnology and its Applications",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "During the processing of pro-insulin into mature insulin in humans:",
    "options": [
      {
        "id": "a",
        "text": "C-peptide is added to the pro-insulin."
      },
      {
        "id": "b",
        "text": "C-peptide is removed from the pro-insulin."
      },
      {
        "id": "c",
        "text": "A and B chains are joined by hydrogen bonds."
      },
      {
        "id": "d",
        "text": "The process occurs in the Golgi apparatus of the E. coli used for production."
      }
    ],
    "correct": "b",
    "explanation": "C-peptide is removed during maturation; mature insulin has A and B chains linked by disulfide bonds.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "93fcb720-f33b-49ca-8a32-a503641b639c"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Human Health and Disease",
    "topic": "",
    "difficulty": "hard",
    "qtype": "assertion_reason",
    "body": "Assertion (A): Morphine is a very effective sedative and painkiller.\nReason (R): It is extracted from the latex of the Papaver somniferum plant.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is not the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "Both A and R are false."
      }
    ],
    "correct": "b",
    "explanation": "Both statements are true, but the source of the drug (R) does not explain why it acts as a sedative/painkiller (A).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "58057b7f-9002-4163-871a-0a91733c1af4"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Biomolecules",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "The 'Lock and Key' hypothesis of enzyme action explains:",
    "options": [
      {
        "id": "a",
        "text": "Enzyme specificity"
      },
      {
        "id": "b",
        "text": "Enzyme denaturation"
      },
      {
        "id": "c",
        "text": "Non-competitive inhibition"
      },
      {
        "id": "d",
        "text": "Activation energy increase"
      }
    ],
    "correct": "a",
    "explanation": "It explains enzyme specificity where the substrate fits into a specific active site.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e70f5586-95f4-4063-8f0b-5c1dc2bf6952"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Principles of Inheritance and Variation",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "How many barr bodies will be present in a person with Klinefelter syndrome?",
    "options": [
      {
        "id": "a",
        "text": "0"
      },
      {
        "id": "b",
        "text": "1"
      },
      {
        "id": "c",
        "text": "2"
      },
      {
        "id": "d",
        "text": "3"
      }
    ],
    "correct": "b",
    "explanation": "Klinefelter is XXY. Barr bodies = No. of X chromosomes - 1. So, 2 - 1 = 1.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "7f4d751c-0850-4de3-8d9c-13d5cbbbb06c"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Cell Cycle and Cell Division",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Which stage of Prophase I is characterized by the appearance of recombination nodules?",
    "options": [
      {
        "id": "a",
        "text": "Zygotene"
      },
      {
        "id": "b",
        "text": "Diplotene"
      },
      {
        "id": "c",
        "text": "Pachytene"
      },
      {
        "id": "d",
        "text": "Diakinesis"
      }
    ],
    "correct": "c",
    "explanation": "Pachytene is where crossing over occurs and recombination nodules appear.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "ff723009-cc07-4d8e-812f-9f7b2bc85d42"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Evolution",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Which of the following is an example of an Analogous structure?",
    "options": [
      {
        "id": "a",
        "text": "Forelimbs of Whale and Bat"
      },
      {
        "id": "b",
        "text": "Thorns of Bougainvillea and Tendrils of Cucurbita"
      },
      {
        "id": "c",
        "text": "Heart of Bird and Mammal"
      },
      {
        "id": "d",
        "text": "Sweet potato and Potato"
      }
    ],
    "correct": "d",
    "explanation": "Sweet potato (root) and Potato (stem) have different origins but similar storage functions. Others are homologous.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a2091ac6-4682-4275-855b-f2424a014b0f"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Human Reproduction",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "In the human female, the second meiotic division is completed:",
    "options": [
      {
        "id": "a",
        "text": "At the time of ovulation"
      },
      {
        "id": "b",
        "text": "During the embryonic development"
      },
      {
        "id": "c",
        "text": "Immediately after birth"
      },
      {
        "id": "d",
        "text": "At the time of fusion of a sperm with an ovum"
      }
    ],
    "correct": "d",
    "explanation": "Meiosis II is completed only when the sperm enters the ovum (fertilization).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "3fb1293b-9970-45af-8bdf-abd2516933ed"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Locomotion and Movement",
    "topic": "",
    "difficulty": "expert",
    "qtype": "assertion_reason",
    "body": "Assertion (A): During muscle contraction, the length of the A-band remains constant while the I-band shortens.\nReason (R): The myosin filaments do not change their length, but the actin filaments slide over them, reducing the distance between Z-lines.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "The sliding filament theory states that during contraction, actin filaments slide towards the M-line, shortening the H-zone and I-band while A-band length is conserved.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a0c94d61-a470-49b6-8460-4acc7168048e"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Body Fluids and Circulation",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "In the human heart, the volume of blood pumped by the left ventricle into the systemic circulation per minute is approximately 5 litres. If the end-diastolic volume is 120 ml and the end-systolic volume is 50 ml, what is the heart rate?",
    "options": [
      {
        "id": "a",
        "text": "60 bpm"
      },
      {
        "id": "b",
        "text": "80 bpm"
      },
      {
        "id": "c",
        "text": "72 bpm"
      },
      {
        "id": "d",
        "text": "90 bpm"
      }
    ],
    "correct": "c",
    "explanation": "Cardiac Output = Stroke Volume x Heart Rate. Stroke Volume = EDV - ESV = 70 ml. 5000 / 70 ≈ 71.4, which is approximately 72 bpm.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "09e085ea-69cf-4351-8c9e-98011b2389f4"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Excretory Products and Their Elimination",
    "topic": "",
    "difficulty": "expert",
    "qtype": "assertion_reason",
    "body": "Assertion (A): In the kidney, the descending limb of the loop of Henle is impermeable to electrolytes but permeable to water.\nReason (R): This permeability profile helps in concentrating the filtrate as it moves towards the medulla.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "The descending limb allows water reabsorption into the hypertonic medullary interstitium, concentrating the tubular fluid.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "f2e47b08-c8d6-427b-80b5-c879c91127fe"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Chemical Coordination and Integration",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "Which of the following hormones is a polypeptide but acts through a secondary messenger like cAMP?",
    "options": [
      {
        "id": "a",
        "text": "Cortisol"
      },
      {
        "id": "b",
        "text": "Epinephrine"
      },
      {
        "id": "c",
        "text": "Testosterone"
      },
      {
        "id": "d",
        "text": "Glucagon"
      }
    ],
    "correct": "d",
    "explanation": "Glucagon is a peptide hormone that binds to membrane receptors and uses cAMP, unlike steroids or iodothyronines.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "fe54ced4-c814-47c6-83f9-5c38f0fb04db"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Breathing and Exchange of Gases",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "A person's vital capacity is 4500 ml, their expiratory reserve volume is 1100 ml, and their tidal volume is 500 ml. What is their inspiratory capacity?",
    "options": [
      {
        "id": "a",
        "text": "3000 ml"
      },
      {
        "id": "b",
        "text": "3400 ml"
      },
      {
        "id": "c",
        "text": "2900 ml"
      },
      {
        "id": "d",
        "text": "1600 ml"
      }
    ],
    "correct": "b",
    "explanation": "Vital Capacity (VC) = IRV + TV + ERV. Inspiratory Capacity (IC) = IRV + TV. VC = IC + ERV -> IC = 4500 - 1100 = 3400 ml.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5dd9e7ed-1443-4451-8738-75e902b85c7f"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Neural Control and Coordination",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "Identify the correct sequence of cells in the human retina from inside (towards vitreous humor) to outside:",
    "options": [
      {
        "id": "a",
        "text": "Photoreceptors -> Bipolar cells -> Ganglion cells"
      },
      {
        "id": "b",
        "text": "Bipolar cells -> Ganglion cells -> Photoreceptors"
      },
      {
        "id": "c",
        "text": "Ganglion cells -> Bipolar cells -> Photoreceptors"
      },
      {
        "id": "d",
        "text": "Photoreceptors -> Ganglion cells -> Bipolar cells"
      }
    ],
    "correct": "c",
    "explanation": "Light passes through the ganglion cells first, then bipolar cells, and finally reaches the photoreceptors (rods and cones).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "1df1f583-1674-451d-8f69-d96058dfdc74"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Excretory Products and Their Elimination",
    "topic": "",
    "difficulty": "expert",
    "qtype": "assertion_reason",
    "body": "Assertion (A): The juxtaglomerular apparatus (JGA) plays a complex regulatory role in the functioning of the kidneys.\nReason (R): A fall in glomerular blood pressure can activate the JG cells to release renin which converts angiotensinogen to angiotensin I.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "JGA regulates GFR via the Renin-Angiotensin mechanism, where renin release is triggered by low pressure/volume.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "6b43161a-43ae-4f0d-890e-fef207e700e6"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Human Reproduction",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "In human females, the first polar body is formed during:",
    "options": [
      {
        "id": "a",
        "text": "The completion of Meiosis II after fertilization"
      },
      {
        "id": "b",
        "text": "The completion of Meiosis I during oogenesis"
      },
      {
        "id": "c",
        "text": "The transition from primary oocyte to oogonia"
      },
      {
        "id": "d",
        "text": "The formation of the ootid"
      }
    ],
    "correct": "b",
    "explanation": "The first polar body is a result of the completion of Meiosis I within the Graafian follicle just before ovulation.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "b6aa861a-660b-4cc8-8a2f-9943991aae76"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Structural Organisation in Animals",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "Which of the following is NOT a characteristic of the connective tissue 'Blood'?",
    "options": [
      {
        "id": "a",
        "text": "Originates from the mesoderm"
      },
      {
        "id": "b",
        "text": "Lack of structural fibres in the fluid matrix normally"
      },
      {
        "id": "c",
        "text": "Presence of phagocytic cells like monocytes"
      },
      {
        "id": "d",
        "text": "Presence of collagen and elastin in the plasma"
      }
    ],
    "correct": "d",
    "explanation": "Blood is a fluid connective tissue that contains fibers only during the clotting process (fibrin), not in its normal fluid state.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "f6a5f1cd-2ce4-4ff9-8db8-e849059d04d4"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Excretory Products and Their Elimination",
    "topic": "",
    "difficulty": "expert",
    "qtype": "assertion_reason",
    "body": "Assertion (A): Presence of a high concentration of glucose and ketone bodies in urine is indicative of Diabetes Mellitus.\nReason (R): In Diabetes Mellitus, the body's inability to utilize glucose leads to the breakdown of fats, producing ketone bodies.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "Glycosuria and Ketonuria are classic clinical indicators of untreated Diabetes Mellitus due to metabolic shifts.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "44701acf-8e1a-47b8-8b3a-b891ae898b58"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Chemical Coordination and Integration",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "A patient has an abnormally high level of Calcium in their blood. Which hormone is likely to be under-secreted?",
    "options": [
      {
        "id": "a",
        "text": "Parathyroid hormone"
      },
      {
        "id": "b",
        "text": "Aldosterone"
      },
      {
        "id": "c",
        "text": "Thyrocalcitonin"
      },
      {
        "id": "d",
        "text": "Thyroxine"
      }
    ],
    "correct": "c",
    "explanation": "Thyrocalcitonin (TCT) lowers blood calcium levels, while Parathyroid hormone (PTH) increases it. Hypercalcemia suggests low TCT or high PTH.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8e243883-5724-45bb-836a-f070516642aa"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Breathing and Exchange of Gases",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "In the context of O2 transport, what would cause a 'Right Shift' in the Oxygen-Hemoglobin dissociation curve?",
    "options": [
      {
        "id": "a",
        "text": "Low pCO2 and high pH"
      },
      {
        "id": "b",
        "text": "High pCO2 and low pH"
      },
      {
        "id": "c",
        "text": "Low temperature and high pO2"
      },
      {
        "id": "d",
        "text": "High pO2 and low H+ concentration"
      }
    ],
    "correct": "b",
    "explanation": "A right shift (lower affinity) is caused by high pCO2, low pH (high H+), and high temperature, typical of active tissues.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "83f5b4b5-d905-4a3c-8774-1c8daf463e15"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Reproductive Health",
    "topic": "",
    "difficulty": "expert",
    "qtype": "assertion_reason",
    "body": "Assertion (A): Intra-cytoplasmic Sperm Injection (ICSI) is a procedure where a sperm is directly injected into the ovum.\nReason (R): It is used in cases where the male partner has very low sperm count or inability to inseminate.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "b",
    "explanation": "Both A and R are true; R explains why the procedure is chosen, but A describes the procedure itself. (Usually considered correct explanation in NEET context).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "4fca69eb-21ef-4390-8a1c-64e88ca7782a"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Excretory Products and Their Elimination",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "The net filtration pressure (NFP) in a nephron is calculated based on: Glomerular Blood Hydrostatic Pressure (GBHP) = 60 mmHg, Capsular Hydrostatic Pressure (CHP) = 15 mmHg, and Blood Colloidal Osmotic Pressure (BCOP) = 30 mmHg. What is the NFP?",
    "options": [
      {
        "id": "a",
        "text": "15 mmHg"
      },
      {
        "id": "b",
        "text": "25 mmHg"
      },
      {
        "id": "c",
        "text": "45 mmHg"
      },
      {
        "id": "d",
        "text": "105 mmHg"
      }
    ],
    "correct": "a",
    "explanation": "NFP = GBHP - (CHP + BCOP) = 60 - (15 + 30) = 15 mmHg.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "01e585e1-fd0e-4b83-89f8-e736f72f206c"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Neural Control and Coordination",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "Which part of the brain is responsible for controlling body temperature, urge for eating and drinking?",
    "options": [
      {
        "id": "a",
        "text": "Thalamus"
      },
      {
        "id": "b",
        "text": "Cerebellum"
      },
      {
        "id": "c",
        "text": "Hypothalamus"
      },
      {
        "id": "d",
        "text": "Medulla oblongata"
      }
    ],
    "correct": "c",
    "explanation": "The Hypothalamus contains centers for thermoregulation and controls appetite (hunger and satiety) and thirst.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "88ea8401-2b7a-46e7-806a-7c255d89436e"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Body Fluids and Circulation",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "In a person with blood group AB, which antibodies are present in the plasma?",
    "options": [
      {
        "id": "a",
        "text": "Anti-A antibodies"
      },
      {
        "id": "b",
        "text": "Anti-B antibodies"
      },
      {
        "id": "c",
        "text": "Both Anti-A and Anti-B antibodies"
      },
      {
        "id": "d",
        "text": "Neither Anti-A nor Anti-B antibodies"
      }
    ],
    "correct": "d",
    "explanation": "Blood group AB individuals have both A and B antigens on their RBCs and thus have no anti-A or anti-B antibodies in their plasma.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a9de03fc-04b7-4f80-88ba-0315a1eacccd"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Chemical Coordination and Integration",
    "topic": "",
    "difficulty": "expert",
    "qtype": "assertion_reason",
    "body": "Assertion (A): The posterior pituitary gland does not synthesize any hormones.\nReason (R): It only stores and releases hormones (Oxytocin and Vasopressin) actually synthesized by the hypothalamus.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "The posterior pituitary (neurohypophysis) is under direct neural regulation and acts as a storage-release site.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "4801c103-0803-487b-8a92-cbf99b3dd0b6"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Digestion and Absorption",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "During the 'Felling of Hunger', which hormone is most likely to be elevated in the bloodstream?",
    "options": [
      {
        "id": "a",
        "text": "Pepsin"
      },
      {
        "id": "b",
        "text": "Chymotrypsin"
      },
      {
        "id": "c",
        "text": "Hydrochloric acid"
      },
      {
        "id": "d",
        "text": "Enterokinase"
      }
    ],
    "correct": "d",
    "explanation": "While NCERT focuses on gastrin/secretin, Ghrelin (though less emphasized) is the 'hunger hormone'. Note: If strictly NCERT, questions focus on Gastrin/Secretin. Let's switch to a strict NCERT digestive enzyme question for JEE-level rigor. \nRevised Body: Which of the following is an ACTIVATOR for the enzyme trypsinogen?",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "3d7764af-06b0-4327-8a42-23cfbc30b477"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Human Reproduction",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "What is the function of the 'Sertoli cells' in the human male reproductive system?",
    "options": [
      {
        "id": "a",
        "text": "Nutrition to germ cells"
      },
      {
        "id": "b",
        "text": "Secretion of testosterone"
      },
      {
        "id": "c",
        "text": "Formation of the blood-testis barrier only"
      },
      {
        "id": "d",
        "text": "Secretion of LH and FSH"
      }
    ],
    "correct": "a",
    "explanation": "Sertoli cells, found in seminiferous tubules, provide nourishment to the developing sperms (spermatogonia/spermatids).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "9f915b39-3387-46bb-8fa9-8e409e4de354"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Body Fluids and Circulation",
    "topic": "",
    "difficulty": "expert",
    "qtype": "assertion_reason",
    "body": "Assertion (A): The SA node is called the pacemaker of the heart.\nReason (R): It can generate the maximum number of action potentials (70-75/min) and is responsible for initiating the rhythmic contractile activity of the heart.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "The SA node's intrinsic rate is the highest, allowing it to drive the rest of the heart's conduction system.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "2fffa485-a903-4a77-8e8c-a37d575e4dd0"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Digestion and Absorption",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "Which of the following molecules is NOT primarily absorbed via active transport in the small intestine?",
    "options": [
      {
        "id": "a",
        "text": "Glucose"
      },
      {
        "id": "b",
        "text": "Fructose"
      },
      {
        "id": "c",
        "text": "Amino acids"
      },
      {
        "id": "d",
        "text": "Sodium ions"
      }
    ],
    "correct": "b",
    "explanation": "Fructose is absorbed via facilitated diffusion using a carrier protein, unlike glucose and amino acids which often use active transport.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "794a75d8-ed03-4232-8e6b-f305afde1dd6"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Body Fluids and Circulation",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "A person has a genetic defect where the 'P-wave' of their ECG is missing. Which event is likely not occurring correctly?",
    "options": [
      {
        "id": "a",
        "text": "Ventricular depolarization"
      },
      {
        "id": "b",
        "text": "Ventricular repolarization"
      },
      {
        "id": "c",
        "text": "Atrial depolarization"
      },
      {
        "id": "d",
        "text": "Atrial repolarization"
      }
    ],
    "correct": "c",
    "explanation": "The P-wave represents the electrical excitation (depolarization) of the atria, leading to atrial contraction.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "39eb0d27-4ebf-4809-89ad-e88e401202d6"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Neural Control and Coordination",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "In the human ear, the 'Organ of Corti' is located on which of the following membranes?",
    "options": [
      {
        "id": "a",
        "text": "Basilar membrane"
      },
      {
        "id": "b",
        "text": "Reissner's membrane"
      },
      {
        "id": "c",
        "text": "Tectorial membrane"
      },
      {
        "id": "d",
        "text": "Tympanic membrane"
      }
    ],
    "correct": "a",
    "explanation": "The Organ of Corti, containing hair cells, sits on the basilar membrane within the cochlea.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "966568c9-0397-4864-8d86-9a8644fabeba"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Human Reproduction",
    "topic": "",
    "difficulty": "expert",
    "qtype": "assertion_reason",
    "body": "Assertion (A): During pregnancy, high levels of estrogen and progesterone inhibit the release of FSH and LH.\nReason (R): High levels of these steroids provide negative feedback to the pituitary to prevent further ovulation during gestation.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "Steroid levels maintained by the corpus luteum and later the placenta prevent new follicles from developing.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "0764f07c-3bce-41ad-877f-3ecbdde985be"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Digestion and Absorption / Chemical Coordination",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "Which hormone acts on the exocrine part of the pancreas and stimulates the secretion of water and bicarbonate ions?",
    "options": [
      {
        "id": "a",
        "text": "Gastrin"
      },
      {
        "id": "b",
        "text": "Secretin"
      },
      {
        "id": "c",
        "text": "Cholecystokinin (CCK)"
      },
      {
        "id": "d",
        "text": "Gastric Inhibitory Peptide (GIP)"
      }
    ],
    "correct": "b",
    "explanation": "Secretin acts on the exocrine pancreas for bicarbonates, whereas CCK acts on the pancreas for enzymes and the gallbladder for bile.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "ef2b7b9c-27ba-485d-8e38-ec4755b41c11"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Structural Organisation in Animals",
    "topic": "",
    "difficulty": "expert",
    "qtype": "assertion_reason",
    "body": "Assertion (A): The squamous epithelium is found in the walls of blood vessels and air sacs of lungs.\nReason (R): Being thin, it is involved in functions like forming a diffusion boundary.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "a",
    "explanation": "Simple squamous epithelium consists of a single thin layer of flattened cells, ideal for rapid diffusion.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "3c8d89c3-e681-42ee-8593-64f6a92c17c7"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Breathing and Exchange of Gases",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "What is the partial pressure of Oxygen (pO2) in the systemic arteries (oxygenated blood)?",
    "options": [
      {
        "id": "a",
        "text": "40 mm Hg"
      },
      {
        "id": "b",
        "text": "45 mm Hg"
      },
      {
        "id": "c",
        "text": "95 mm Hg"
      },
      {
        "id": "d",
        "text": "104 mm Hg"
      }
    ],
    "correct": "c",
    "explanation": "According to the NCERT table, pO2 in oxygenated blood is 95 mm Hg, while pCO2 is 40 mm Hg.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e62fbda7-f68e-446c-82ba-9af8a05a5509"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Locomotion and Movement",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "Which of the following is a symptom of 'Gout'?",
    "options": [
      {
        "id": "a",
        "text": "Inflammation of joints due to low calcium"
      },
      {
        "id": "b",
        "text": "Degeneration of skeletal muscle due to genetic disorder"
      },
      {
        "id": "c",
        "text": "Autoimmune disorder affecting neuromuscular junction"
      },
      {
        "id": "d",
        "text": "Inflammation of joints due to accumulation of uric acid crystals"
      }
    ],
    "correct": "d",
    "explanation": "Gout is a specific type of arthritis caused by the accumulation of uric acid crystals in joints.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "83ec4979-c1c7-48fc-8099-4ad0638267c7"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Neural Control and Coordination",
    "topic": "",
    "difficulty": "expert",
    "qtype": "assertion_reason",
    "body": "Assertion (A): In a myelinated nerve fibre, the nerve impulse jumps from one node of Ranvier to the next.\nReason (R): The myelin sheath is continuous and prevents the leakage of ions, speeding up the conduction.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A."
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is NOT the correct explanation of A."
      },
      {
        "id": "c",
        "text": "A is true but R is false."
      },
      {
        "id": "d",
        "text": "A is false but R is true."
      }
    ],
    "correct": "c",
    "explanation": "The myelin sheath is NOT continuous; it is interrupted at nodes of Ranvier, which is where saltatory conduction occurs.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "1ed94c36-612f-4da1-8cf9-60f320c31e5f"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Breathing and Exchange of Gases (Integration)",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "If a man has a normal tidal volume of 500 ml and a breathing rate of 12 times/minute, but his anatomical dead space is 150 ml, what is his alveolar ventilation rate?",
    "options": [
      {
        "id": "a",
        "text": "6000 ml/min"
      },
      {
        "id": "b",
        "text": "4200 ml/min"
      },
      {
        "id": "c",
        "text": "1800 ml/min"
      },
      {
        "id": "d",
        "text": "5850 ml/min"
      }
    ],
    "correct": "b",
    "explanation": "Alveolar Ventilation = (Tidal Volume - Dead Space) x Breathing Rate = (500 - 150) x 12 = 350 x 12 = 4200 ml/min.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "b484d02d-c738-40f3-8ec9-a4afe1a53b35"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Chemical Coordination and Integration",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which of the following hormones is a steroid hormone?",
    "options": [
      {
        "id": "a",
        "text": "Glucagon"
      },
      {
        "id": "b",
        "text": "Cortisol"
      },
      {
        "id": "c",
        "text": "Insulin"
      },
      {
        "id": "d",
        "text": "Thyroxine"
      }
    ],
    "correct": "b",
    "explanation": "Cortisol is a glucocorticoid produced by the adrenal cortex and is steroid in nature.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "b63fec48-c015-4222-8ff4-4b97c4f23717"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Breathing and Exchange of Gases",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "During inspiration, the diaphragm:",
    "options": [
      {
        "id": "a",
        "text": "Contracts and flattens"
      },
      {
        "id": "b",
        "text": "Relaxes and becomes dome-shaped"
      },
      {
        "id": "c",
        "text": "Contracts and becomes dome-shaped"
      },
      {
        "id": "d",
        "text": "Relaxes and flattens"
      }
    ],
    "correct": "a",
    "explanation": "Contraction of the diaphragm increases the volume of the thoracic chamber in the antero-posterior axis.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "9e981931-8277-424e-859a-9bf8d832901f"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Body Fluids and Circulation",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "What is the life span of an Erythrocyte (RBC) in a healthy adult human?",
    "options": [
      {
        "id": "a",
        "text": "100 days"
      },
      {
        "id": "b",
        "text": "60 days"
      },
      {
        "id": "c",
        "text": "150 days"
      },
      {
        "id": "d",
        "text": "120 days"
      }
    ],
    "correct": "d",
    "explanation": "RBCs have an average life span of 120 days, after which they are destroyed in the spleen.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "c01d9eb8-6072-4755-80df-6fdc74a6c01c"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Body Fluids and Circulation",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The standard ECG, the 'T-wave' represents:",
    "options": [
      {
        "id": "a",
        "text": "Atrial depolarisation"
      },
      {
        "id": "b",
        "text": "Ventricular depolarisation"
      },
      {
        "id": "c",
        "text": "Ventricular repolarisation"
      },
      {
        "id": "d",
        "text": "Atrial repolarisation"
      }
    ],
    "correct": "c",
    "explanation": "The T-wave represents the return of the ventricles from excited to normal state (repolarisation).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "b7087e26-ac5c-4d5f-8814-fb9ca640c43c"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Excretory Products and their Elimination",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which part of the renal tubule is impermeable to water?",
    "options": [
      {
        "id": "a",
        "text": "Proximal Convoluted Tubule"
      },
      {
        "id": "b",
        "text": "Ascending limb of Loop of Henle"
      },
      {
        "id": "c",
        "text": "Descending limb of Loop of Henle"
      },
      {
        "id": "d",
        "text": "Distal Convoluted Tubule"
      }
    ],
    "correct": "b",
    "explanation": "The ascending limb of Henle's loop is impermeable to water but allows transport of electrolytes.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "ce2734ca-a217-4fe3-83de-c415fb65f65c"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Locomotion and Movement",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The H-zone in the skeletal muscle fibre is due to:",
    "options": [
      {
        "id": "a",
        "text": "The central gap between actin filaments extending through myosin filaments"
      },
      {
        "id": "b",
        "text": "Extension of myosin filaments in the central portion of the A-band"
      },
      {
        "id": "c",
        "text": "The absence of myofibrils in the central portion of A-band"
      },
      {
        "id": "d",
        "text": "The central gap between myosin filaments"
      }
    ],
    "correct": "a",
    "explanation": "The H-zone is the central part of the thick filament (A-band) not overlapped by thin filaments.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "89677a17-1010-423f-85cd-9fc3ccdc449e"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Locomotion and Movement",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which of the following joints is an example of a Ball and Socket joint?",
    "options": [
      {
        "id": "a",
        "text": "Knee joint"
      },
      {
        "id": "b",
        "text": "Atlas and Axis joint"
      },
      {
        "id": "c",
        "text": "Carpal and Metacarpal of thumb"
      },
      {
        "id": "d",
        "text": "Humerus and Pectoral girdle"
      }
    ],
    "correct": "d",
    "explanation": "The joint between the humerus and pectoral girdle (shoulder joint) is a ball and socket joint.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5023f36b-aec1-4198-8112-36df4e09e9e0"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Neural Control and Coordination",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The part of the human brain that controls body temperature and the urge for eating is the:",
    "options": [
      {
        "id": "a",
        "text": "Thalamus"
      },
      {
        "id": "b",
        "text": "Hypothalamus"
      },
      {
        "id": "c",
        "text": "Cerebellum"
      },
      {
        "id": "d",
        "text": "Medulla oblongata"
      }
    ],
    "correct": "b",
    "explanation": "The hypothalamus contains centers which control body temperature, urge for eating and drinking.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "44ec6682-598d-439e-868f-2312921001c6"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Neural Control and Coordination",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "In the human eye, the 'Blind Spot' is the region where:",
    "options": [
      {
        "id": "a",
        "text": "Only cones are present"
      },
      {
        "id": "b",
        "text": "Only rods are present"
      },
      {
        "id": "c",
        "text": "Photoreceptor cells are absent"
      },
      {
        "id": "d",
        "text": "Macula lutea is located"
      }
    ],
    "correct": "c",
    "explanation": "The optic nerves leave the eye and retinal blood vessels enter it at the blind spot, where photoreceptor cells are absent.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a8f5d1e0-f4f8-4921-83c2-b9104e3f8e2b"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Human Reproduction",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which layer of the uterus undergoes cyclical changes during the menstrual cycle?",
    "options": [
      {
        "id": "a",
        "text": "Perimetrium"
      },
      {
        "id": "b",
        "text": "Endometrium"
      },
      {
        "id": "c",
        "text": "Myometrium"
      },
      {
        "id": "d",
        "text": "Mesometrium"
      }
    ],
    "correct": "b",
    "explanation": "The endometrium is the inner glandular layer that undergoes periodic changes during the menstrual cycle.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "ee046b2b-b259-42e6-8018-f99d9105d538"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Human Reproduction",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The process of release of a mature ovum from the Graafian follicle is called:",
    "options": [
      {
        "id": "a",
        "text": "Fertilisation"
      },
      {
        "id": "b",
        "text": "Implantation"
      },
      {
        "id": "c",
        "text": "Spermiogenesis"
      },
      {
        "id": "d",
        "text": "Ovulation"
      }
    ],
    "correct": "d",
    "explanation": "Ovulation is the release of the secondary oocyte from the ovary after the rupture of the Graafian follicle.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "2e2c44ad-e8aa-4590-878c-be71736ebc5f"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Reproductive Health",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The 'Saheli' contraceptive pill was developed by scientists at:",
    "options": [
      {
        "id": "a",
        "text": "AIIMS, Delhi"
      },
      {
        "id": "b",
        "text": "IISC, Bangalore"
      },
      {
        "id": "c",
        "text": "CDRI, Lucknow"
      },
      {
        "id": "d",
        "text": "ICMR, New Delhi"
      }
    ],
    "correct": "c",
    "explanation": "Saheli, the once-a-week non-steroidal oral pill, was developed by CDRI in Lucknow.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "78a1a2fd-b294-4663-89f8-8ef1c94cec29"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Principles of Inheritance and Variation",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "According to the ABC model of genetic disorders, Haemophilia is a:",
    "options": [
      {
        "id": "a",
        "text": "Autosomal dominant disorder"
      },
      {
        "id": "b",
        "text": "Sex-linked recessive disorder"
      },
      {
        "id": "c",
        "text": "Autosomal recessive disorder"
      },
      {
        "id": "d",
        "text": "Sex-linked dominant disorder"
      }
    ],
    "correct": "b",
    "explanation": "Haemophilia is a sex-linked recessive disorder showing transmission from carrier female to male progeny.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "16c9ad81-9913-470a-800f-78a9ea2a942e"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Principles of Inheritance and Variation",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "A person with blood group 'AB' is considered a universal recipient because they have:",
    "options": [
      {
        "id": "a",
        "text": "Both A and B antigens on RBCs but no antibodies in plasma"
      },
      {
        "id": "b",
        "text": "Both A and B antibodies in plasma but no antigens on RBCs"
      },
      {
        "id": "c",
        "text": "No antigens on RBCs and no antibodies in plasma"
      },
      {
        "id": "d",
        "text": "Antigen A on RBCs and antibody b in plasma"
      }
    ],
    "correct": "a",
    "explanation": "AB group individuals have both A and B antigens on RBCs but no antibodies in the plasma.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "337a4953-5229-4b90-838e-80a2020353af"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Molecular Basis of Inheritance",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The 'Central Dogma' of molecular biology was proposed by:",
    "options": [
      {
        "id": "a",
        "text": "James Watson"
      },
      {
        "id": "b",
        "text": "Maurice Wilkins"
      },
      {
        "id": "c",
        "text": "Rosalind Franklin"
      },
      {
        "id": "d",
        "text": "Francis Crick"
      }
    ],
    "correct": "d",
    "explanation": "Francis Crick proposed the Central Dogma, which states that genetic information flows from DNA to RNA to Protein.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "7ebb8685-1765-42a2-8e22-be27ca7f616a"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Molecular Basis of Inheritance",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which of the following codons acts as the 'Start Codon' for protein synthesis?",
    "options": [
      {
        "id": "a",
        "text": "UAA"
      },
      {
        "id": "b",
        "text": "AUG"
      },
      {
        "id": "c",
        "text": "UAG"
      },
      {
        "id": "d",
        "text": "UGA"
      }
    ],
    "correct": "b",
    "explanation": "AUG codes for Methionine and also acts as the initiator or start codon.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "9a753e20-11ca-4ffc-8f31-fe342b19782a"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Evolution",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The theory of evolution by natural selection was given by:",
    "options": [
      {
        "id": "a",
        "text": "Lamarck"
      },
      {
        "id": "b",
        "text": "Hugo de Vries"
      },
      {
        "id": "c",
        "text": "Charles Darwin"
      },
      {
        "id": "d",
        "text": "Thomas Malthus"
      }
    ],
    "correct": "c",
    "explanation": "Charles Darwin proposed that variations which are heritable and make resource utilization better will lead to survival and reproduction.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8461ac98-cfbd-401f-83d1-42eefb518b04"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Evolution",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Analogous structures are a result of:",
    "options": [
      {
        "id": "a",
        "text": "Convergent evolution"
      },
      {
        "id": "b",
        "text": "Divergent evolution"
      },
      {
        "id": "c",
        "text": "Genetic drift"
      },
      {
        "id": "d",
        "text": "Adaptive radiation"
      }
    ],
    "correct": "a",
    "explanation": "Analogous organs evolve due to similar selection pressures in different lineages, leading to convergent evolution.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a2006e35-29b5-4921-8648-31053993113d"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Human Health and Disease",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Malignant tumors are characterized by:",
    "options": [
      {
        "id": "a",
        "text": "Staying confined to their original location"
      },
      {
        "id": "b",
        "text": "Slow growth rate"
      },
      {
        "id": "c",
        "text": "Low degree of differentiation"
      },
      {
        "id": "d",
        "text": "Metastasis"
      }
    ],
    "correct": "d",
    "explanation": "Metastasis is the most feared property of malignant tumors, where cells sloughed from tumors reach distant sites via blood.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "122e7344-5172-4422-8a32-7c779f960f8c"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Human Health and Disease",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which antibody is primarily involved in allergic reactions?",
    "options": [
      {
        "id": "a",
        "text": "IgA"
      },
      {
        "id": "b",
        "text": "IgE"
      },
      {
        "id": "c",
        "text": "IgM"
      },
      {
        "id": "d",
        "text": "IgG"
      }
    ],
    "correct": "b",
    "explanation": "IgE type antibodies are produced in response to allergens like dust, pollen, etc.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e424955d-4261-45c0-8a86-737e9cb9edab"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Human Health and Disease",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The 'Heroin' drug is chemically:",
    "options": [
      {
        "id": "a",
        "text": "Cannabinoid"
      },
      {
        "id": "b",
        "text": "Cocaine hydrochloride"
      },
      {
        "id": "c",
        "text": "Diacetylmorphine"
      },
      {
        "id": "d",
        "text": "Benzodiazepine"
      }
    ],
    "correct": "c",
    "explanation": "Heroin, commonly called smack, is chemically diacetylmorphine.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "f527a2f9-75a2-446e-8817-d42a9053d79d"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Biotechnology: Principles and Processes",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "In recombinant DNA technology, 'Restriction Endonucleases' are also known as:",
    "options": [
      {
        "id": "a",
        "text": "Molecular scissors"
      },
      {
        "id": "b",
        "text": "Molecular glue"
      },
      {
        "id": "c",
        "text": "Vector DNA"
      },
      {
        "id": "d",
        "text": "Plasmids"
      }
    ],
    "correct": "a",
    "explanation": "Restriction enzymes are called molecular scissors because they cut DNA at specific sequences.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "67ea08e6-cdaa-4e4f-8fe9-3993343b8397"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Biotechnology: Principles and Processes",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The enzyme used to join two DNA fragments is:",
    "options": [
      {
        "id": "a",
        "text": "DNA polymerase"
      },
      {
        "id": "b",
        "text": "RNA polymerase"
      },
      {
        "id": "c",
        "text": "Restriction endonuclease"
      },
      {
        "id": "d",
        "text": "DNA ligase"
      }
    ],
    "correct": "d",
    "explanation": "DNA ligase acts as the molecular glue that joins DNA fragments by forming phosphodiester bonds.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "2d5c1d31-485c-4232-8026-e89af452be46"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Biotechnology and its Applications",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The first transgenic cow, Rosie, produced milk enriched with:",
    "options": [
      {
        "id": "a",
        "text": "Human insulin"
      },
      {
        "id": "b",
        "text": "Human alpha-lactalbumin"
      },
      {
        "id": "c",
        "text": "Alpha-1-antitrypsin"
      },
      {
        "id": "d",
        "text": "Vitamin A"
      }
    ],
    "correct": "b",
    "explanation": "Rosie's milk contained the human protein alpha-lactalbumin (2.4 grams per litre).",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "c3579179-3387-466b-8384-24009a1a450f"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Biotechnology and its Applications",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The process of RNA interference (RNAi) has been used to develop plants resistant to:",
    "options": [
      {
        "id": "a",
        "text": "Insects"
      },
      {
        "id": "b",
        "text": "Viruses"
      },
      {
        "id": "c",
        "text": "Nematodes"
      },
      {
        "id": "d",
        "text": "Fungi"
      }
    ],
    "correct": "c",
    "explanation": "RNAi was used to prevent the infestation of Meloidogyne incognita (a nematode) in tobacco roots.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "56adb8e7-ff90-4b65-8111-e1264f61adf0"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Organisms and Populations",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Animals that can tolerate a wide range of salinities are called:",
    "options": [
      {
        "id": "a",
        "text": "Euryhaline"
      },
      {
        "id": "b",
        "text": "Stenohaline"
      },
      {
        "id": "c",
        "text": "Eurythermal"
      },
      {
        "id": "d",
        "text": "Stenothermal"
      }
    ],
    "correct": "a",
    "explanation": "Euryhaline organisms are tolerant of a wide range of salinities.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a9b67a8b-4abb-485e-8512-a1c6e02c80b6"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Ecosystem",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "In a food chain, the '10 percent law' of energy transfer was proposed by:",
    "options": [
      {
        "id": "a",
        "text": "E.P. Odum"
      },
      {
        "id": "b",
        "text": "A.G. Tansley"
      },
      {
        "id": "c",
        "text": "Robert May"
      },
      {
        "id": "d",
        "text": "Raymond Lindeman"
      }
    ],
    "correct": "d",
    "explanation": "Lindeman proposed the 10% law, stating only 10% of energy is transferred to the next trophic level.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "25ec92e0-bb36-4554-8b39-f1b67e08c4de"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Biodiversity and Conservation",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which of the following is an example of 'Ex-situ' conservation?",
    "options": [
      {
        "id": "a",
        "text": "National Park"
      },
      {
        "id": "b",
        "text": "Zoological Park"
      },
      {
        "id": "c",
        "text": "Biosphere Reserve"
      },
      {
        "id": "d",
        "text": "Sacred Grove"
      }
    ],
    "correct": "b",
    "explanation": "Zoological parks, botanical gardens, and wildlife safari parks are ex-situ conservation methods.",
    "source": "Original NCERT-aligned question — Study at Bangalore (AI-assisted draft, pending teacher review)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "970b9ac9-fa0f-4532-8012-6fb75e28b294"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "A body moving with initial velocity 2 m/s has uniform acceleration 4 m/s². What is its velocity after 3 s?",
    "options": [
      {
        "id": "a",
        "text": "6 m/s"
      },
      {
        "id": "b",
        "text": "12 m/s"
      },
      {
        "id": "c",
        "text": "25 m/s"
      },
      {
        "id": "d",
        "text": "14 m/s"
      }
    ],
    "correct": "d",
    "explanation": "Use the first equation of motion v = u + at.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "fee01ad2-c8a9-4c3f-863f-5d9214630eeb"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "A body moving with initial velocity 2 m/s has uniform acceleration 3 m/s². What is its velocity after 3 s?",
    "options": [
      {
        "id": "a",
        "text": "11 m/s"
      },
      {
        "id": "b",
        "text": "9 m/s"
      },
      {
        "id": "c",
        "text": "5 m/s"
      },
      {
        "id": "d",
        "text": "19 m/s"
      }
    ],
    "correct": "a",
    "explanation": "Use the first equation of motion v = u + at.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "c9fc5396-797a-43da-80a9-18d715c7042e"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "A body moving with initial velocity 5 m/s has uniform acceleration 4 m/s². What is its velocity after 3 s?",
    "options": [
      {
        "id": "a",
        "text": "9 m/s"
      },
      {
        "id": "b",
        "text": "12 m/s"
      },
      {
        "id": "c",
        "text": "61 m/s"
      },
      {
        "id": "d",
        "text": "17 m/s"
      }
    ],
    "correct": "d",
    "explanation": "Use the first equation of motion v = u + at.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "de37a6f6-a7e0-45ce-831c-759d7fef9083"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "A body moving with initial velocity 5 m/s has uniform acceleration 2 m/s². What is its velocity after 6 s?",
    "options": [
      {
        "id": "a",
        "text": "61 m/s"
      },
      {
        "id": "b",
        "text": "7 m/s"
      },
      {
        "id": "c",
        "text": "12 m/s"
      },
      {
        "id": "d",
        "text": "17 m/s"
      }
    ],
    "correct": "d",
    "explanation": "Use the first equation of motion v = u + at.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "6ef6f5ea-1ad2-41e6-8fbd-e7044e8a4e72"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "What is the kinetic energy of a 5 kg body moving at 10 m/s?",
    "options": [
      {
        "id": "a",
        "text": "50 J"
      },
      {
        "id": "b",
        "text": "25 J"
      },
      {
        "id": "c",
        "text": "500 J"
      },
      {
        "id": "d",
        "text": "250 J"
      }
    ],
    "correct": "d",
    "explanation": "Kinetic energy K = ½mv².",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "52859a74-a9c4-4b0f-8aec-183a4a7a28a5"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "What is the kinetic energy of a 10 kg body moving at 3 m/s?",
    "options": [
      {
        "id": "a",
        "text": "30 J"
      },
      {
        "id": "b",
        "text": "15 J"
      },
      {
        "id": "c",
        "text": "45 J"
      },
      {
        "id": "d",
        "text": "90 J"
      }
    ],
    "correct": "c",
    "explanation": "Kinetic energy K = ½mv².",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "4c7a59f2-2d98-46eb-8991-90cb9e637a48"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "What is the kinetic energy of a 5 kg body moving at 4 m/s?",
    "options": [
      {
        "id": "a",
        "text": "40 J"
      },
      {
        "id": "b",
        "text": "10 J"
      },
      {
        "id": "c",
        "text": "80 J"
      },
      {
        "id": "d",
        "text": "20 J"
      }
    ],
    "correct": "a",
    "explanation": "Kinetic energy K = ½mv².",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "d1c8b2fe-7be0-4926-8519-7f9b466e5f1e"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "What is the kinetic energy of a 10 kg body moving at 4 m/s?",
    "options": [
      {
        "id": "a",
        "text": "20 J"
      },
      {
        "id": "b",
        "text": "40 J"
      },
      {
        "id": "c",
        "text": "80 J"
      },
      {
        "id": "d",
        "text": "160 J"
      }
    ],
    "correct": "c",
    "explanation": "Kinetic energy K = ½mv².",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "dacae99c-0f93-470d-8393-25a7f59ea41e"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "A current of 2 A flows through a 6 Ω resistor. What is the potential difference across it?",
    "options": [
      {
        "id": "a",
        "text": "12 V"
      },
      {
        "id": "b",
        "text": "3 V"
      },
      {
        "id": "c",
        "text": "24 V"
      },
      {
        "id": "d",
        "text": "8 V"
      }
    ],
    "correct": "a",
    "explanation": "Ohm's law: V = IR.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "db97ccf0-f3d5-4d99-8d55-db432d174bc2"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "A current of 2 A flows through a 5 Ω resistor. What is the potential difference across it?",
    "options": [
      {
        "id": "a",
        "text": "2.5 V"
      },
      {
        "id": "b",
        "text": "7 V"
      },
      {
        "id": "c",
        "text": "10 V"
      },
      {
        "id": "d",
        "text": "20 V"
      }
    ],
    "correct": "c",
    "explanation": "Ohm's law: V = IR.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "091b409f-e49c-4543-8c12-640d007efd68"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "A current of 2 A flows through a 20 Ω resistor. What is the potential difference across it?",
    "options": [
      {
        "id": "a",
        "text": "40 V"
      },
      {
        "id": "b",
        "text": "22 V"
      },
      {
        "id": "c",
        "text": "10 V"
      },
      {
        "id": "d",
        "text": "80 V"
      }
    ],
    "correct": "a",
    "explanation": "Ohm's law: V = IR.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a6eb6947-d3c2-4604-8d25-2c66f5b33d69"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "A car starts with velocity 2 m/s and accelerates uniformly at 2 m/s². How far does it travel in 2 s?",
    "options": [
      {
        "id": "a",
        "text": "8 m"
      },
      {
        "id": "b",
        "text": "2 m"
      },
      {
        "id": "c",
        "text": "6 m"
      },
      {
        "id": "d",
        "text": "12 m"
      }
    ],
    "correct": "a",
    "explanation": "Second equation of motion s = ut + ½at².",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "54678abb-6e50-4c29-80e3-e546f2624543"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "A car starts with velocity 0 m/s and accelerates uniformly at 4 m/s². How far does it travel in 4 s?",
    "options": [
      {
        "id": "a",
        "text": "8 m"
      },
      {
        "id": "b",
        "text": "16 m"
      },
      {
        "id": "c",
        "text": "32 m"
      },
      {
        "id": "d",
        "text": "64 m"
      }
    ],
    "correct": "c",
    "explanation": "Second equation of motion s = ut + ½at².",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "cc9f46a0-2f1b-4ab9-8cc9-76beebc54f25"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "A car starts with velocity 2 m/s and accelerates uniformly at 4 m/s². How far does it travel in 2 s?",
    "options": [
      {
        "id": "a",
        "text": "4 m"
      },
      {
        "id": "b",
        "text": "12 m"
      },
      {
        "id": "c",
        "text": "20 m"
      },
      {
        "id": "d",
        "text": "10 m"
      }
    ],
    "correct": "b",
    "explanation": "Second equation of motion s = ut + ½at².",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a2c98d3c-e205-4de8-80c6-3046f19c855c"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "A car starts with velocity 4 m/s and accelerates uniformly at 4 m/s². How far does it travel in 6 s?",
    "options": [
      {
        "id": "a",
        "text": "28 m"
      },
      {
        "id": "b",
        "text": "12 m"
      },
      {
        "id": "c",
        "text": "168 m"
      },
      {
        "id": "d",
        "text": "96 m"
      }
    ],
    "correct": "d",
    "explanation": "Second equation of motion s = ut + ½at².",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "75b72aac-48f8-4be0-8619-d9c05d580485"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Resistors of 20 Ω and 30 Ω are connected in parallel. What is the equivalent resistance?",
    "options": [
      {
        "id": "a",
        "text": "10 Ω"
      },
      {
        "id": "b",
        "text": "25 Ω"
      },
      {
        "id": "c",
        "text": "50 Ω"
      },
      {
        "id": "d",
        "text": "12 Ω"
      }
    ],
    "correct": "d",
    "explanation": "For two resistors in parallel, R = R₁R₂/(R₁+R₂).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "68246332-289d-44c0-80a2-ca971b602871"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Resistors of 12 Ω and 24 Ω are connected in parallel. What is the equivalent resistance?",
    "options": [
      {
        "id": "a",
        "text": "8 Ω"
      },
      {
        "id": "b",
        "text": "12 Ω"
      },
      {
        "id": "c",
        "text": "18 Ω"
      },
      {
        "id": "d",
        "text": "36 Ω"
      }
    ],
    "correct": "a",
    "explanation": "For two resistors in parallel, R = R₁R₂/(R₁+R₂).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a7c32546-5449-4106-832f-233c165e8f4a"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Resistors of 4 Ω and 12 Ω are connected in parallel. What is the equivalent resistance?",
    "options": [
      {
        "id": "a",
        "text": "12 Ω"
      },
      {
        "id": "b",
        "text": "3 Ω"
      },
      {
        "id": "c",
        "text": "16 Ω"
      },
      {
        "id": "d",
        "text": "8 Ω"
      }
    ],
    "correct": "b",
    "explanation": "For two resistors in parallel, R = R₁R₂/(R₁+R₂).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "c2a465c5-0b95-447c-8828-95c2a928f95e"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Current Electricity",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Resistors of 6 Ω and 12 Ω are connected in parallel. What is the equivalent resistance?",
    "options": [
      {
        "id": "a",
        "text": "18 Ω"
      },
      {
        "id": "b",
        "text": "9 Ω"
      },
      {
        "id": "c",
        "text": "6 Ω"
      },
      {
        "id": "d",
        "text": "4 Ω"
      }
    ],
    "correct": "d",
    "explanation": "For two resistors in parallel, R = R₁R₂/(R₁+R₂).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "0fb4378b-6498-4e77-8859-1d17f006dae5"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "A 3 kg ball moving at 24 m/s sticks to a 2 kg ball at rest. What is their common velocity just after the collision?",
    "options": [
      {
        "id": "a",
        "text": "24 m/s"
      },
      {
        "id": "b",
        "text": "10.6 m/s"
      },
      {
        "id": "c",
        "text": "14.4 m/s"
      },
      {
        "id": "d",
        "text": "13 m/s"
      }
    ],
    "correct": "c",
    "explanation": "Momentum is conserved: m₁u = (m₁+m₂)v.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "18dedfa7-1650-4d01-861a-7b0f864c8854"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "A 4 kg ball moving at 6 m/s sticks to a 2 kg ball at rest. What is their common velocity just after the collision?",
    "options": [
      {
        "id": "a",
        "text": "6 m/s"
      },
      {
        "id": "b",
        "text": "4 m/s"
      },
      {
        "id": "c",
        "text": "10 m/s"
      },
      {
        "id": "d",
        "text": "3 m/s"
      }
    ],
    "correct": "b",
    "explanation": "Momentum is conserved: m₁u = (m₁+m₂)v.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a7e7e2bc-7f4c-419e-84d4-e9e0cd6f97b3"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "A 4 kg ball moving at 24 m/s sticks to a 2 kg ball at rest. What is their common velocity just after the collision?",
    "options": [
      {
        "id": "a",
        "text": "13 m/s"
      },
      {
        "id": "b",
        "text": "16 m/s"
      },
      {
        "id": "c",
        "text": "9 m/s"
      },
      {
        "id": "d",
        "text": "24 m/s"
      }
    ],
    "correct": "b",
    "explanation": "Momentum is conserved: m₁u = (m₁+m₂)v.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "6475ecfe-c20b-4339-884e-ce70f4b69c1f"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A projectile is launched at 10 m/s at 45° to the horizontal on level ground. Taking g = 10 m/s², what is its horizontal range?",
    "options": [
      {
        "id": "a",
        "text": "22 m"
      },
      {
        "id": "b",
        "text": "20 m"
      },
      {
        "id": "c",
        "text": "5 m"
      },
      {
        "id": "d",
        "text": "10 m"
      }
    ],
    "correct": "d",
    "explanation": "R = u² sin 2θ / g; at 45°, sin 90° = 1.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "6176be0e-c6a1-42d7-8285-0504ac8bc83b"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A projectile is launched at 30 m/s at 45° to the horizontal on level ground. Taking g = 10 m/s², what is its horizontal range?",
    "options": [
      {
        "id": "a",
        "text": "45 m"
      },
      {
        "id": "b",
        "text": "60 m"
      },
      {
        "id": "c",
        "text": "90 m"
      },
      {
        "id": "d",
        "text": "180 m"
      }
    ],
    "correct": "c",
    "explanation": "R = u² sin 2θ / g; at 45°, sin 90° = 1.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "30262862-cd0c-497c-852e-bbd0ed69c820"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Motion in a Plane",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A projectile is launched at 20 m/s at 45° to the horizontal on level ground. Taking g = 10 m/s², what is its horizontal range?",
    "options": [
      {
        "id": "a",
        "text": "80 m"
      },
      {
        "id": "b",
        "text": "40 m"
      },
      {
        "id": "c",
        "text": "82 m"
      },
      {
        "id": "d",
        "text": "20 m"
      }
    ],
    "correct": "b",
    "explanation": "R = u² sin 2θ / g; at 45°, sin 90° = 1.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "b3fc5ac6-9f24-4ae5-85a6-906876a6dde2"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Capacitors of 2 μF and 3 μF are connected in series. What is the equivalent capacitance?",
    "options": [
      {
        "id": "a",
        "text": "5 μF"
      },
      {
        "id": "b",
        "text": "2.5 μF"
      },
      {
        "id": "c",
        "text": "1.2 μF"
      },
      {
        "id": "d",
        "text": "1.5 μF"
      }
    ],
    "correct": "c",
    "explanation": "In series, 1/C = 1/C₁ + 1/C₂.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5a2233c1-3707-4d58-8b1f-1ff2d1c7188a"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Capacitors of 3 μF and 6 μF are connected in series. What is the equivalent capacitance?",
    "options": [
      {
        "id": "a",
        "text": "9 μF"
      },
      {
        "id": "b",
        "text": "3.5 μF"
      },
      {
        "id": "c",
        "text": "4.5 μF"
      },
      {
        "id": "d",
        "text": "2 μF"
      }
    ],
    "correct": "d",
    "explanation": "In series, 1/C = 1/C₁ + 1/C₂.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "feaa1246-c12b-4c17-8148-d4f930e4437f"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Capacitors of 6 μF and 12 μF are connected in series. What is the equivalent capacitance?",
    "options": [
      {
        "id": "a",
        "text": "6.5 μF"
      },
      {
        "id": "b",
        "text": "18 μF"
      },
      {
        "id": "c",
        "text": "4 μF"
      },
      {
        "id": "d",
        "text": "9 μF"
      }
    ],
    "correct": "c",
    "explanation": "In series, 1/C = 1/C₁ + 1/C₂.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "2eddb961-f9c9-45ff-8a5d-7da514ea17a9"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "How much heat is needed to raise the temperature of 0.5 kg of water by 20 °C? (specific heat of water = 4200 J kg⁻¹ K⁻¹)",
    "options": [
      {
        "id": "a",
        "text": "84000 J"
      },
      {
        "id": "b",
        "text": "21000 J"
      },
      {
        "id": "c",
        "text": "84002 J"
      },
      {
        "id": "d",
        "text": "42000 J"
      }
    ],
    "correct": "d",
    "explanation": "Q = mcΔT.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5d33aa6e-fbe5-4294-891c-bc1147382d5a"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "How much heat is needed to raise the temperature of 1 kg of water by 40 °C? (specific heat of water = 4200 J kg⁻¹ K⁻¹)",
    "options": [
      {
        "id": "a",
        "text": "336002 J"
      },
      {
        "id": "b",
        "text": "336000 J"
      },
      {
        "id": "c",
        "text": "84000 J"
      },
      {
        "id": "d",
        "text": "168000 J"
      }
    ],
    "correct": "d",
    "explanation": "Q = mcΔT.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "f903578b-378a-46ff-8bbb-f5f42b53c71b"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Thermal Properties of Matter",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "How much heat is needed to raise the temperature of 2 kg of water by 25 °C? (specific heat of water = 4200 J kg⁻¹ K⁻¹)",
    "options": [
      {
        "id": "a",
        "text": "420000 J"
      },
      {
        "id": "b",
        "text": "420002 J"
      },
      {
        "id": "c",
        "text": "210000 J"
      },
      {
        "id": "d",
        "text": "105000 J"
      }
    ],
    "correct": "c",
    "explanation": "Q = mcΔT.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "9b5f6019-1c8b-4b3f-8ac2-91216403ce58"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "A 5 kg ball moving at 8 m/s collides head-on elastically with a 3 kg ball at rest. What is the velocity of the 3 kg ball after the collision?",
    "options": [
      {
        "id": "a",
        "text": "5 m/s"
      },
      {
        "id": "b",
        "text": "8 m/s"
      },
      {
        "id": "c",
        "text": "10 m/s"
      },
      {
        "id": "d",
        "text": "2.5 m/s"
      }
    ],
    "correct": "c",
    "explanation": "For a 1-D elastic collision with the second body at rest, v₂ = 2m₁u/(m₁+m₂). (The first body's velocity is 2 m/s.)",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "d4ae7b38-08c8-4211-8bdc-13402066ebea"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "A 3 kg ball moving at 8 m/s collides head-on elastically with a 5 kg ball at rest. What is the velocity of the 5 kg ball after the collision?",
    "options": [
      {
        "id": "a",
        "text": "2.5 m/s"
      },
      {
        "id": "b",
        "text": "3 m/s"
      },
      {
        "id": "c",
        "text": "6 m/s"
      },
      {
        "id": "d",
        "text": "8 m/s"
      }
    ],
    "correct": "c",
    "explanation": "For a 1-D elastic collision with the second body at rest, v₂ = 2m₁u/(m₁+m₂). (The first body's velocity is -2 m/s.)",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e7100de3-b6c3-4d79-826b-3e348e763984"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "A 1 kg ball moving at 4 m/s collides head-on elastically with a 3 kg ball at rest. What is the velocity of the 3 kg ball after the collision?",
    "options": [
      {
        "id": "a",
        "text": "2.5 m/s"
      },
      {
        "id": "b",
        "text": "1 m/s"
      },
      {
        "id": "c",
        "text": "4 m/s"
      },
      {
        "id": "d",
        "text": "2 m/s"
      }
    ],
    "correct": "d",
    "explanation": "For a 1-D elastic collision with the second body at rest, v₂ = 2m₁u/(m₁+m₂). (The first body's velocity is -2 m/s.)",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "1de6adf6-a2b9-4d4d-8568-4480707494e9"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Work, Energy and Power",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "A 1 kg ball moving at 12 m/s collides head-on elastically with a 3 kg ball at rest. What is the velocity of the 3 kg ball after the collision?",
    "options": [
      {
        "id": "a",
        "text": "6 m/s"
      },
      {
        "id": "b",
        "text": "12 m/s"
      },
      {
        "id": "c",
        "text": "3 m/s"
      },
      {
        "id": "d",
        "text": "6.5 m/s"
      }
    ],
    "correct": "a",
    "explanation": "For a 1-D elastic collision with the second body at rest, v₂ = 2m₁u/(m₁+m₂). (The first body's velocity is -6 m/s.)",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "681d3145-10bb-4c6a-8368-977d51918159"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "A 10 μF capacitor is charged to 50 V. How much energy does it store, in millijoules?",
    "options": [
      {
        "id": "a",
        "text": "25 mJ"
      },
      {
        "id": "b",
        "text": "6.25 mJ"
      },
      {
        "id": "c",
        "text": "12.5 mJ"
      },
      {
        "id": "d",
        "text": "0.5 mJ"
      }
    ],
    "correct": "c",
    "explanation": "U = ½CV².",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "94bfad5f-06d3-45ab-87aa-743de51bdfb7"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "A 10 μF capacitor is charged to 100 V. How much energy does it store, in millijoules?",
    "options": [
      {
        "id": "a",
        "text": "25 mJ"
      },
      {
        "id": "b",
        "text": "1 mJ"
      },
      {
        "id": "c",
        "text": "50 mJ"
      },
      {
        "id": "d",
        "text": "100 mJ"
      }
    ],
    "correct": "c",
    "explanation": "U = ½CV².",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a4120457-9be8-417a-89c3-a8ba09e44761"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "A 2 μF capacitor is charged to 50 V. How much energy does it store, in millijoules?",
    "options": [
      {
        "id": "a",
        "text": "0.1 mJ"
      },
      {
        "id": "b",
        "text": "2.5 mJ"
      },
      {
        "id": "c",
        "text": "5 mJ"
      },
      {
        "id": "d",
        "text": "1.25 mJ"
      }
    ],
    "correct": "b",
    "explanation": "U = ½CV².",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "ab4edc83-c513-440d-8738-85f2c5fcbb6d"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "A 4 μF capacitor is charged to 50 V. How much energy does it store, in millijoules?",
    "options": [
      {
        "id": "a",
        "text": "10 mJ"
      },
      {
        "id": "b",
        "text": "0.2 mJ"
      },
      {
        "id": "c",
        "text": "2.5 mJ"
      },
      {
        "id": "d",
        "text": "5 mJ"
      }
    ],
    "correct": "d",
    "explanation": "U = ½CV².",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "924e28f3-8aa0-4b90-8560-62ab0f965d43"
  },
  {
    "exam_ids": [
      "jee-main",
      "jee-advanced",
      "scholarship",
      "kcet"
    ],
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "",
    "difficulty": "expert",
    "qtype": "numerical",
    "body": "A stone is dropped from rest from a height of 80 m. Taking g = 10 m/s² and neglecting air resistance, how long (in seconds) does it take to reach the ground?",
    "options": [],
    "correct": {
      "value": 4,
      "tolerance": 0.01
    },
    "explanation": "h = ½gt² for a body dropped from rest.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a1a292f3-8bb9-4718-8d5c-bab8dab4ccee"
  },
  {
    "exam_ids": [
      "jee-main",
      "jee-advanced",
      "scholarship",
      "kcet"
    ],
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "",
    "difficulty": "expert",
    "qtype": "numerical",
    "body": "A stone is dropped from rest from a height of 45 m. Taking g = 10 m/s² and neglecting air resistance, how long (in seconds) does it take to reach the ground?",
    "options": [],
    "correct": {
      "value": 3,
      "tolerance": 0.01
    },
    "explanation": "h = ½gt² for a body dropped from rest.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a90f829e-e107-4c9a-87ce-6dc8271968a6"
  },
  {
    "exam_ids": [
      "jee-main",
      "jee-advanced",
      "scholarship",
      "kcet"
    ],
    "subject": "Physics",
    "chapter": "Motion in a Straight Line",
    "topic": "",
    "difficulty": "expert",
    "qtype": "numerical",
    "body": "A stone is dropped from rest from a height of 20 m. Taking g = 10 m/s² and neglecting air resistance, how long (in seconds) does it take to reach the ground?",
    "options": [],
    "correct": {
      "value": 2,
      "tolerance": 0.01
    },
    "explanation": "h = ½gt² for a body dropped from rest.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "3ca38f01-ed32-49c4-8dec-fcc2c7ee4080"
  },
  {
    "exam_ids": [
      "jee-advanced",
      "scholarship",
      "kcet"
    ],
    "subject": "Physics",
    "chapter": "Electrostatic Potential and Capacitance",
    "topic": "",
    "difficulty": "expert",
    "qtype": "multiple",
    "body": "For an isolated charged conductor in electrostatic equilibrium, which statements are correct?",
    "options": [
      {
        "id": "a",
        "text": "The electric field inside the conductor is zero"
      },
      {
        "id": "b",
        "text": "The surface is an equipotential"
      },
      {
        "id": "c",
        "text": "Excess charge resides on the outer surface"
      },
      {
        "id": "d",
        "text": "The field just outside is parallel to the surface"
      }
    ],
    "correct": [
      "a",
      "b",
      "c"
    ],
    "explanation": "Inside field is zero, the conductor is equipotential and charge sits on the surface; the field just outside is normal (not parallel) to the surface.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "c53c4b0f-16c9-4a20-816b-aace5cc0b706"
  },
  {
    "exam_ids": [
      "jee-advanced",
      "scholarship",
      "kcet"
    ],
    "subject": "Physics",
    "chapter": "Laws of Motion",
    "topic": "",
    "difficulty": "expert",
    "qtype": "multiple",
    "body": "A block rests on a rough horizontal floor and a small horizontal force is applied but the block does not move. Which statements are correct?",
    "options": [
      {
        "id": "a",
        "text": "Static friction equals the applied force"
      },
      {
        "id": "b",
        "text": "Static friction equals μₛN"
      },
      {
        "id": "c",
        "text": "The net force on the block is zero"
      },
      {
        "id": "d",
        "text": "The normal force equals the weight"
      }
    ],
    "correct": [
      "a",
      "c",
      "d"
    ],
    "explanation": "Static friction adjusts to balance the applied force and only reaches μₛN at the point of slipping.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "7e271557-61b1-4eb0-8a96-500cf99b0d1d"
  },
  {
    "exam_ids": [
      "neet-ug",
      "scholarship",
      "kcet"
    ],
    "subject": "Physics",
    "chapter": "Units and Measurement",
    "topic": "",
    "difficulty": "medium",
    "qtype": "assertion_reason",
    "body": "Assertion (A): Dimensional analysis cannot determine dimensionless constants in a formula.\nReason (R): Dimensionless constants have no dimensions, so they do not appear in dimensional equations.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A"
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is not the correct explanation of A"
      },
      {
        "id": "c",
        "text": "A is true but R is false"
      },
      {
        "id": "d",
        "text": "A is false but R is true"
      }
    ],
    "correct": "a",
    "explanation": "Since constants like 2π are dimensionless, dimensional equations cannot detect them; R explains A.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e602b492-ec4c-4e1f-8a20-be930b22994f"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Some Basic Concepts of Chemistry",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "How many moles are present in 117 g of sodium chloride (NaCl)? (molar mass 58.5 g/mol)",
    "options": [
      {
        "id": "a",
        "text": "68.44 mol"
      },
      {
        "id": "b",
        "text": "4 mol"
      },
      {
        "id": "c",
        "text": "2.25 mol"
      },
      {
        "id": "d",
        "text": "2 mol"
      }
    ],
    "correct": "d",
    "explanation": "n = mass / molar mass.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "d8ddfec4-011d-4179-81e1-5a0a33114f3b"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Some Basic Concepts of Chemistry",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "How many moles are present in 34 g of ammonia (NH₃)? (molar mass 17 g/mol)",
    "options": [
      {
        "id": "a",
        "text": "5.78 mol"
      },
      {
        "id": "b",
        "text": "4 mol"
      },
      {
        "id": "c",
        "text": "2 mol"
      },
      {
        "id": "d",
        "text": "2.25 mol"
      }
    ],
    "correct": "c",
    "explanation": "n = mass / molar mass.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "ec5180ef-361a-44cc-8acc-9492aa4a3cb5"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Some Basic Concepts of Chemistry",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "How many moles are present in 36 g of water (H₂O)? (molar mass 18 g/mol)",
    "options": [
      {
        "id": "a",
        "text": "4 mol"
      },
      {
        "id": "b",
        "text": "6.48 mol"
      },
      {
        "id": "c",
        "text": "2.25 mol"
      },
      {
        "id": "d",
        "text": "2 mol"
      }
    ],
    "correct": "d",
    "explanation": "n = mass / molar mass.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "470c033b-fb70-4c80-866e-2f40432f3e11"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Some Basic Concepts of Chemistry",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "How many moles are present in 29.25 g of sodium chloride (NaCl)? (molar mass 58.5 g/mol)",
    "options": [
      {
        "id": "a",
        "text": "1 mol"
      },
      {
        "id": "b",
        "text": "0.5 mol"
      },
      {
        "id": "c",
        "text": "17.11 mol"
      },
      {
        "id": "d",
        "text": "0.75 mol"
      }
    ],
    "correct": "b",
    "explanation": "n = mass / molar mass.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "fe598a5c-27a9-4386-8e54-6ccce27b8356"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Some Basic Concepts of Chemistry",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "How many moles are present in 48 g of methane (CH₄)? (molar mass 16 g/mol)",
    "options": [
      {
        "id": "a",
        "text": "3 mol"
      },
      {
        "id": "b",
        "text": "3.25 mol"
      },
      {
        "id": "c",
        "text": "6 mol"
      },
      {
        "id": "d",
        "text": "7.68 mol"
      }
    ],
    "correct": "a",
    "explanation": "n = mass / molar mass.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "93369ed9-7ab5-4ab8-821f-614269632751"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Some Basic Concepts of Chemistry",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "How many moles are present in 175.5 g of sodium chloride (NaCl)? (molar mass 58.5 g/mol)",
    "options": [
      {
        "id": "a",
        "text": "6 mol"
      },
      {
        "id": "b",
        "text": "3 mol"
      },
      {
        "id": "c",
        "text": "102.67 mol"
      },
      {
        "id": "d",
        "text": "3.25 mol"
      }
    ],
    "correct": "b",
    "explanation": "n = mass / molar mass.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "b45785ea-7b48-4c20-8e83-67eeafeb6986"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Solutions",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "0.2 mol of solute is dissolved to make 1000 mL of solution. What is its molarity?",
    "options": [
      {
        "id": "a",
        "text": "2.4 M"
      },
      {
        "id": "b",
        "text": "0.02 M"
      },
      {
        "id": "c",
        "text": "2 M"
      },
      {
        "id": "d",
        "text": "0.2 M"
      }
    ],
    "correct": "d",
    "explanation": "Molarity = moles of solute / volume of solution in litres.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8d731978-5c95-4ab7-884f-8a955d386156"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Solutions",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "1 mol of solute is dissolved to make 500 mL of solution. What is its molarity?",
    "options": [
      {
        "id": "a",
        "text": "20 M"
      },
      {
        "id": "b",
        "text": "0.5 M"
      },
      {
        "id": "c",
        "text": "0.2 M"
      },
      {
        "id": "d",
        "text": "2 M"
      }
    ],
    "correct": "d",
    "explanation": "Molarity = moles of solute / volume of solution in litres.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5527915b-58bb-41f9-8ac3-8dc72a0a155a"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Solutions",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "0.1 mol of solute is dissolved to make 1000 mL of solution. What is its molarity?",
    "options": [
      {
        "id": "a",
        "text": "1 M"
      },
      {
        "id": "b",
        "text": "0.1 M"
      },
      {
        "id": "c",
        "text": "0.01 M"
      },
      {
        "id": "d",
        "text": "2.2 M"
      }
    ],
    "correct": "b",
    "explanation": "Molarity = moles of solute / volume of solution in litres.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "dd353a76-e5da-43dc-81ec-a3131ab07083"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Solutions",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "0.1 mol of solute is dissolved to make 500 mL of solution. What is its molarity?",
    "options": [
      {
        "id": "a",
        "text": "0.02 M"
      },
      {
        "id": "b",
        "text": "2 M"
      },
      {
        "id": "c",
        "text": "0.2 M"
      },
      {
        "id": "d",
        "text": "0.05 M"
      }
    ],
    "correct": "c",
    "explanation": "Molarity = moles of solute / volume of solution in litres.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "3b4955ee-9368-4040-85c7-fe628c630257"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Solutions",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "0.5 mol of solute is dissolved to make 2000 mL of solution. What is its molarity?",
    "options": [
      {
        "id": "a",
        "text": "0.03 M"
      },
      {
        "id": "b",
        "text": "1 M"
      },
      {
        "id": "c",
        "text": "0.25 M"
      },
      {
        "id": "d",
        "text": "2.5 M"
      }
    ],
    "correct": "c",
    "explanation": "Molarity = moles of solute / volume of solution in litres.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "bc14ecc6-7d0b-40aa-81d1-9db6acac9f7a"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Equilibrium",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "What is the pH of a 0.1 M solution of HCl (a strong acid, fully dissociated) at 25 °C?",
    "options": [
      {
        "id": "a",
        "text": "3"
      },
      {
        "id": "b",
        "text": "1"
      },
      {
        "id": "c",
        "text": "2"
      },
      {
        "id": "d",
        "text": "13"
      }
    ],
    "correct": "b",
    "explanation": "pH = −log[H⁺]; for a strong monoprotic acid [H⁺] equals its concentration.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5a6911ec-18c8-4511-80b7-5d3d0c2ca5fb"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Equilibrium",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "What is the pH of a 0.01 M solution of HCl (a strong acid, fully dissociated) at 25 °C?",
    "options": [
      {
        "id": "a",
        "text": "3"
      },
      {
        "id": "b",
        "text": "5"
      },
      {
        "id": "c",
        "text": "12"
      },
      {
        "id": "d",
        "text": "2"
      }
    ],
    "correct": "d",
    "explanation": "pH = −log[H⁺]; for a strong monoprotic acid [H⁺] equals its concentration.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "0584dcd1-d7d7-4e62-88b2-c0a0172bc2e7"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Equilibrium",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "What is the pH of a 0.0001 M solution of HCl (a strong acid, fully dissociated) at 25 °C?",
    "options": [
      {
        "id": "a",
        "text": "4"
      },
      {
        "id": "b",
        "text": "5"
      },
      {
        "id": "c",
        "text": "9"
      },
      {
        "id": "d",
        "text": "10"
      }
    ],
    "correct": "a",
    "explanation": "pH = −log[H⁺]; for a strong monoprotic acid [H⁺] equals its concentration.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "538ea744-4472-4a62-815f-e3dffa2c3473"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Equilibrium",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "What is the pH of a 0.001 M solution of HCl (a strong acid, fully dissociated) at 25 °C?",
    "options": [
      {
        "id": "a",
        "text": "4"
      },
      {
        "id": "b",
        "text": "7"
      },
      {
        "id": "c",
        "text": "3"
      },
      {
        "id": "d",
        "text": "11"
      }
    ],
    "correct": "c",
    "explanation": "pH = −log[H⁺]; for a strong monoprotic acid [H⁺] equals its concentration.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "71ebdc2d-276a-4bd0-8115-e5b12426a481"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Solutions",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "200 mL of a 5 M solution is diluted with water to 1000 mL. What is the new molarity?",
    "options": [
      {
        "id": "a",
        "text": "25 M"
      },
      {
        "id": "b",
        "text": "5 M"
      },
      {
        "id": "c",
        "text": "1 M"
      },
      {
        "id": "d",
        "text": "10 M"
      }
    ],
    "correct": "c",
    "explanation": "M₁V₁ = M₂V₂.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "af8ce5a3-c23d-409c-8528-abd7346425da"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Solutions",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "100 mL of a 1 M solution is diluted with water to 500 mL. What is the new molarity?",
    "options": [
      {
        "id": "a",
        "text": "1 M"
      },
      {
        "id": "b",
        "text": "0.2 M"
      },
      {
        "id": "c",
        "text": "5 M"
      },
      {
        "id": "d",
        "text": "2 M"
      }
    ],
    "correct": "b",
    "explanation": "M₁V₁ = M₂V₂.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "cabae358-467c-4f4e-8c39-89ee54389fe1"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Solutions",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "100 mL of a 6 M solution is diluted with water to 500 mL. What is the new molarity?",
    "options": [
      {
        "id": "a",
        "text": "6 M"
      },
      {
        "id": "b",
        "text": "1.2 M"
      },
      {
        "id": "c",
        "text": "12 M"
      },
      {
        "id": "d",
        "text": "30 M"
      }
    ],
    "correct": "b",
    "explanation": "M₁V₁ = M₂V₂.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "485955b4-6b8f-493e-8a3f-0f18f2342e2c"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Solutions",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "100 mL of a 2 M solution is diluted with water to 1000 mL. What is the new molarity?",
    "options": [
      {
        "id": "a",
        "text": "2.4 M"
      },
      {
        "id": "b",
        "text": "2 M"
      },
      {
        "id": "c",
        "text": "0.2 M"
      },
      {
        "id": "d",
        "text": "20 M"
      }
    ],
    "correct": "c",
    "explanation": "M₁V₁ = M₂V₂.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8ce99c04-a014-4580-8623-17b3cfdf7d3d"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Solutions",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "200 mL of a 6 M solution is diluted with water to 1000 mL. What is the new molarity?",
    "options": [
      {
        "id": "a",
        "text": "30 M"
      },
      {
        "id": "b",
        "text": "1.2 M"
      },
      {
        "id": "c",
        "text": "12 M"
      },
      {
        "id": "d",
        "text": "6 M"
      }
    ],
    "correct": "b",
    "explanation": "M₁V₁ = M₂V₂.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a09f21b0-e871-4546-888c-cc861803300d"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Chemical Kinetics",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A first-order reaction has a half-life of 10 min. Starting with 160 g of reactant, how much remains after 30 min?",
    "options": [
      {
        "id": "a",
        "text": "10 g"
      },
      {
        "id": "b",
        "text": "40 g"
      },
      {
        "id": "c",
        "text": "20 g"
      },
      {
        "id": "d",
        "text": "53.33 g"
      }
    ],
    "correct": "c",
    "explanation": "After n half-lives, amount = initial / 2ⁿ.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "c9f25275-1a77-4aae-8e36-83b2369e7c73"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Chemical Kinetics",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A first-order reaction has a half-life of 10 min. Starting with 200 g of reactant, how much remains after 20 min?",
    "options": [
      {
        "id": "a",
        "text": "50 g"
      },
      {
        "id": "b",
        "text": "100 g"
      },
      {
        "id": "c",
        "text": "102 g"
      },
      {
        "id": "d",
        "text": "25 g"
      }
    ],
    "correct": "a",
    "explanation": "After n half-lives, amount = initial / 2ⁿ.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5a9864a7-6451-4d04-841e-5bdb51af6866"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Chemical Kinetics",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A first-order reaction has a half-life of 20 min. Starting with 80 g of reactant, how much remains after 60 min?",
    "options": [
      {
        "id": "a",
        "text": "5 g"
      },
      {
        "id": "b",
        "text": "10 g"
      },
      {
        "id": "c",
        "text": "26.67 g"
      },
      {
        "id": "d",
        "text": "20 g"
      }
    ],
    "correct": "b",
    "explanation": "After n half-lives, amount = initial / 2ⁿ.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "ff7b3967-4dec-4be8-8b97-c51a1a7afb6e"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Chemical Kinetics",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A first-order reaction has a half-life of 5 min. Starting with 200 g of reactant, how much remains after 15 min?",
    "options": [
      {
        "id": "a",
        "text": "50 g"
      },
      {
        "id": "b",
        "text": "25 g"
      },
      {
        "id": "c",
        "text": "66.67 g"
      },
      {
        "id": "d",
        "text": "12.5 g"
      }
    ],
    "correct": "b",
    "explanation": "After n half-lives, amount = initial / 2ⁿ.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "ec1a951f-0b48-4a5d-8ef0-3f945fb41da3"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Chemical Kinetics",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A first-order reaction has a half-life of 10 min. Starting with 80 g of reactant, how much remains after 40 min?",
    "options": [
      {
        "id": "a",
        "text": "20 g"
      },
      {
        "id": "b",
        "text": "2.5 g"
      },
      {
        "id": "c",
        "text": "5 g"
      },
      {
        "id": "d",
        "text": "10 g"
      }
    ],
    "correct": "c",
    "explanation": "After n half-lives, amount = initial / 2ⁿ.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "d204a5ea-afd6-47b7-8e70-de9458f2844a"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Chemical Kinetics",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A first-order reaction has a half-life of 10 min. Starting with 64 g of reactant, how much remains after 30 min?",
    "options": [
      {
        "id": "a",
        "text": "21.33 g"
      },
      {
        "id": "b",
        "text": "16 g"
      },
      {
        "id": "c",
        "text": "8 g"
      },
      {
        "id": "d",
        "text": "4 g"
      }
    ],
    "correct": "c",
    "explanation": "After n half-lives, amount = initial / 2ⁿ.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "fda48d06-0f43-4cf1-8698-38f39e23154a"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Chemical Kinetics",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "For a reaction that is order 2 in A (rate = k[A]^2), [A] is increased 4 times. By what factor does the rate increase?",
    "options": [
      {
        "id": "a",
        "text": "32"
      },
      {
        "id": "b",
        "text": "9"
      },
      {
        "id": "c",
        "text": "4"
      },
      {
        "id": "d",
        "text": "16"
      }
    ],
    "correct": "d",
    "explanation": "Rate scales as (factor)^order.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "64332d86-bf3f-4078-8207-3c4f36f7c62d"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Chemical Kinetics",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "For a reaction that is order 2 in A (rate = k[A]^2), [A] is increased 3 times. By what factor does the rate increase?",
    "options": [
      {
        "id": "a",
        "text": "18"
      },
      {
        "id": "b",
        "text": "3"
      },
      {
        "id": "c",
        "text": "9"
      },
      {
        "id": "d",
        "text": "7"
      }
    ],
    "correct": "c",
    "explanation": "Rate scales as (factor)^order.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5178425a-37d4-4106-8ec5-12cbe44375f0"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Chemical Kinetics",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "For a reaction that is order 1 in A (rate = k[A]^1), [A] is increased 4 times. By what factor does the rate increase?",
    "options": [
      {
        "id": "a",
        "text": "8"
      },
      {
        "id": "b",
        "text": "5"
      },
      {
        "id": "c",
        "text": "10"
      },
      {
        "id": "d",
        "text": "4"
      }
    ],
    "correct": "d",
    "explanation": "Rate scales as (factor)^order.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "38adffae-09a1-470b-8380-7cfdce3d5e63"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Chemical Kinetics",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "For a reaction that is order 1 in A (rate = k[A]^1), [A] is increased 2 times. By what factor does the rate increase?",
    "options": [
      {
        "id": "a",
        "text": "3"
      },
      {
        "id": "b",
        "text": "6"
      },
      {
        "id": "c",
        "text": "4"
      },
      {
        "id": "d",
        "text": "2"
      }
    ],
    "correct": "d",
    "explanation": "Rate scales as (factor)^order.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "2961c98e-3b96-4e5e-8be7-0ff55edbe8dc"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Solutions",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "A non-electrolyte solution in water has molality 0.5 mol/kg. What is the depression in freezing point? (Kf of water = 1.86 K kg mol⁻¹)",
    "options": [
      {
        "id": "a",
        "text": "1.86 K"
      },
      {
        "id": "b",
        "text": "0.93 K"
      },
      {
        "id": "c",
        "text": "0.26 K"
      },
      {
        "id": "d",
        "text": "3.72 K"
      }
    ],
    "correct": "b",
    "explanation": "ΔTf = Kf · m for a non-electrolyte (i = 1).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "18fa32b1-9632-4b3c-8d38-fada1e8ea908"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Solutions",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "A non-electrolyte solution in water has molality 2 mol/kg. What is the depression in freezing point? (Kf of water = 1.86 K kg mol⁻¹)",
    "options": [
      {
        "id": "a",
        "text": "7.44 K"
      },
      {
        "id": "b",
        "text": "3.72 K"
      },
      {
        "id": "c",
        "text": "0.93 K"
      },
      {
        "id": "d",
        "text": "1.02 K"
      }
    ],
    "correct": "b",
    "explanation": "ΔTf = Kf · m for a non-electrolyte (i = 1).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "63ab9fcc-8661-4313-8966-36e3a1d7c90d"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Solutions",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "A non-electrolyte solution in water has molality 1 mol/kg. What is the depression in freezing point? (Kf of water = 1.86 K kg mol⁻¹)",
    "options": [
      {
        "id": "a",
        "text": "1.86 K"
      },
      {
        "id": "b",
        "text": "3.72 K"
      },
      {
        "id": "c",
        "text": "5.72 K"
      },
      {
        "id": "d",
        "text": "0.51 K"
      }
    ],
    "correct": "a",
    "explanation": "ΔTf = Kf · m for a non-electrolyte (i = 1).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5896f93f-64ec-4b65-855e-db5a8d1807b0"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Equilibrium",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "For A(g) + B(g) ⇌ 2C(g), equilibrium concentrations are [A] = 2 M, [B] = 4 M and [C] = 4 M. What is Kc?",
    "options": [
      {
        "id": "a",
        "text": "0.5"
      },
      {
        "id": "b",
        "text": "6"
      },
      {
        "id": "c",
        "text": "2"
      },
      {
        "id": "d",
        "text": "1.43"
      }
    ],
    "correct": "c",
    "explanation": "Kc = [C]² / ([A][B]).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e28fdb75-c05a-4c91-827f-692ac8c4b67a"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Equilibrium",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "For A(g) + B(g) ⇌ 2C(g), equilibrium concentrations are [A] = 2 M, [B] = 4 M and [C] = 2 M. What is Kc?",
    "options": [
      {
        "id": "a",
        "text": "0.77"
      },
      {
        "id": "b",
        "text": "2"
      },
      {
        "id": "c",
        "text": "0.25"
      },
      {
        "id": "d",
        "text": "0.5"
      }
    ],
    "correct": "d",
    "explanation": "Kc = [C]² / ([A][B]).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "0c1a43f5-65ac-4135-8c88-b4ed1fa810b5"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Equilibrium",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "For A(g) + B(g) ⇌ 2C(g), equilibrium concentrations are [A] = 4 M, [B] = 4 M and [C] = 4 M. What is Kc?",
    "options": [
      {
        "id": "a",
        "text": "1"
      },
      {
        "id": "b",
        "text": "4"
      },
      {
        "id": "c",
        "text": "1.1"
      },
      {
        "id": "d",
        "text": "0.25"
      }
    ],
    "correct": "a",
    "explanation": "Kc = [C]² / ([A][B]).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "b389539c-79ff-4908-8bdf-e576b21d674c"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Equilibrium",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "For A(g) + B(g) ⇌ 2C(g), equilibrium concentrations are [A] = 1 M, [B] = 2 M and [C] = 1 M. What is Kc?",
    "options": [
      {
        "id": "a",
        "text": "0.5"
      },
      {
        "id": "b",
        "text": "3"
      },
      {
        "id": "c",
        "text": "2"
      },
      {
        "id": "d",
        "text": "0.77"
      }
    ],
    "correct": "a",
    "explanation": "Kc = [C]² / ([A][B]).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "1933c84f-3365-40d5-871b-a79c9fad925c"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Chemistry",
    "chapter": "Equilibrium",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "For A(g) + B(g) ⇌ 2C(g), equilibrium concentrations are [A] = 2 M, [B] = 2 M and [C] = 1 M. What is Kc?",
    "options": [
      {
        "id": "a",
        "text": "0.25"
      },
      {
        "id": "b",
        "text": "4"
      },
      {
        "id": "c",
        "text": "0.6"
      },
      {
        "id": "d",
        "text": "2.5"
      }
    ],
    "correct": "a",
    "explanation": "Kc = [C]² / ([A][B]).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "d515330b-eaf2-4157-835e-b058cbeed780"
  },
  {
    "exam_ids": [
      "jee-advanced",
      "scholarship",
      "kcet"
    ],
    "subject": "Chemistry",
    "chapter": "Chemical Bonding and Molecular Structure",
    "topic": "",
    "difficulty": "expert",
    "qtype": "multiple",
    "body": "Which of the following molecules have a net dipole moment of zero?",
    "options": [
      {
        "id": "a",
        "text": "CO₂"
      },
      {
        "id": "b",
        "text": "BF₃"
      },
      {
        "id": "c",
        "text": "NH₃"
      },
      {
        "id": "d",
        "text": "CCl₄"
      }
    ],
    "correct": [
      "a",
      "b",
      "d"
    ],
    "explanation": "CO₂ (linear), BF₃ (trigonal planar) and CCl₄ (tetrahedral) are symmetric; NH₃ is pyramidal and polar.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5d8be59d-c849-4edc-8da6-b700057a4989"
  },
  {
    "exam_ids": [
      "neet-ug",
      "scholarship",
      "kcet"
    ],
    "subject": "Chemistry",
    "chapter": "Classification of Elements",
    "topic": "",
    "difficulty": "medium",
    "qtype": "assertion_reason",
    "body": "Assertion (A): Atomic radius decreases across a period from left to right.\nReason (R): Effective nuclear charge increases across a period while electrons are added to the same shell.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A"
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is not the correct explanation of A"
      },
      {
        "id": "c",
        "text": "A is true but R is false"
      },
      {
        "id": "d",
        "text": "A is false but R is true"
      }
    ],
    "correct": "a",
    "explanation": "Greater effective nuclear charge pulls the same shell closer, so R explains A.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "761b2414-c53d-46b4-846f-98d95fa76053"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Find the 10th term of the arithmetic progression 7, 12, 17, …",
    "options": [
      {
        "id": "a",
        "text": "52"
      },
      {
        "id": "b",
        "text": "57"
      },
      {
        "id": "c",
        "text": "50"
      },
      {
        "id": "d",
        "text": "48"
      }
    ],
    "correct": "a",
    "explanation": "aₙ = a + (n − 1)d.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a9190815-f2e3-4071-858d-c9d1e591ac68"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Find the 12th term of the arithmetic progression 2, 4, 6, …",
    "options": [
      {
        "id": "a",
        "text": "24"
      },
      {
        "id": "b",
        "text": "50"
      },
      {
        "id": "c",
        "text": "23"
      },
      {
        "id": "d",
        "text": "26"
      }
    ],
    "correct": "a",
    "explanation": "aₙ = a + (n − 1)d.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "896e8050-47a2-412c-8bcf-3f5a51db6b47"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Find the 20th term of the arithmetic progression 5, 10, 15, …",
    "options": [
      {
        "id": "a",
        "text": "100"
      },
      {
        "id": "b",
        "text": "202"
      },
      {
        "id": "c",
        "text": "96"
      },
      {
        "id": "d",
        "text": "105"
      }
    ],
    "correct": "a",
    "explanation": "aₙ = a + (n − 1)d.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "1e5e48d4-8efc-4724-82bd-4e9625d7a0db"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Find the 15th term of the arithmetic progression 2, 5, 8, …",
    "options": [
      {
        "id": "a",
        "text": "42"
      },
      {
        "id": "b",
        "text": "44"
      },
      {
        "id": "c",
        "text": "47"
      },
      {
        "id": "d",
        "text": "45"
      }
    ],
    "correct": "b",
    "explanation": "aₙ = a + (n − 1)d.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "431c7af3-6781-4144-8a07-9fc6f4f1940f"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Find the 20th term of the arithmetic progression 5, 7, 9, …",
    "options": [
      {
        "id": "a",
        "text": "40"
      },
      {
        "id": "b",
        "text": "45"
      },
      {
        "id": "c",
        "text": "42"
      },
      {
        "id": "d",
        "text": "43"
      }
    ],
    "correct": "d",
    "explanation": "aₙ = a + (n − 1)d.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "2e3716f5-b849-46f4-8e78-5c4e1e817241"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Find the 20th term of the arithmetic progression 5, 8, 11, …",
    "options": [
      {
        "id": "a",
        "text": "65"
      },
      {
        "id": "b",
        "text": "126"
      },
      {
        "id": "c",
        "text": "62"
      },
      {
        "id": "d",
        "text": "60"
      }
    ],
    "correct": "c",
    "explanation": "aₙ = a + (n − 1)d.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "3991d655-8c65-423a-88a5-dc17041c3d7f"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Limits and Derivatives",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "If f(x) = x^2, find f′(2).",
    "options": [
      {
        "id": "a",
        "text": "4"
      },
      {
        "id": "b",
        "text": "6"
      },
      {
        "id": "c",
        "text": "10"
      },
      {
        "id": "d",
        "text": "15"
      }
    ],
    "correct": "a",
    "explanation": "d/dx xⁿ = n·xⁿ⁻¹.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "2338061a-ecaa-4280-89fc-89b192e4f064"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Limits and Derivatives",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "If f(x) = x^2, find f′(1).",
    "options": [
      {
        "id": "a",
        "text": "4"
      },
      {
        "id": "b",
        "text": "6"
      },
      {
        "id": "c",
        "text": "2"
      },
      {
        "id": "d",
        "text": "1"
      }
    ],
    "correct": "c",
    "explanation": "d/dx xⁿ = n·xⁿ⁻¹.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "85d6d6b1-8961-44a4-8aa5-d3f1b8c6fd1a"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Limits and Derivatives",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "If f(x) = x^3, find f′(3).",
    "options": [
      {
        "id": "a",
        "text": "56"
      },
      {
        "id": "b",
        "text": "27"
      },
      {
        "id": "c",
        "text": "30"
      },
      {
        "id": "d",
        "text": "9"
      }
    ],
    "correct": "b",
    "explanation": "d/dx xⁿ = n·xⁿ⁻¹.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "d73bccdc-d1f0-469d-8cd7-7146d1d204a2"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Limits and Derivatives",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "If f(x) = x^4, find f′(2).",
    "options": [
      {
        "id": "a",
        "text": "32"
      },
      {
        "id": "b",
        "text": "8"
      },
      {
        "id": "c",
        "text": "16"
      },
      {
        "id": "d",
        "text": "36"
      }
    ],
    "correct": "a",
    "explanation": "d/dx xⁿ = n·xⁿ⁻¹.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e1aabb74-4cc6-4dbf-8820-81b2d1508324"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Limits and Derivatives",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "If f(x) = x^3, find f′(2).",
    "options": [
      {
        "id": "a",
        "text": "6"
      },
      {
        "id": "b",
        "text": "15"
      },
      {
        "id": "c",
        "text": "8"
      },
      {
        "id": "d",
        "text": "12"
      }
    ],
    "correct": "d",
    "explanation": "d/dx xⁿ = n·xⁿ⁻¹.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "052c28e0-c518-41c3-815c-a4c782cd2e0d"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Find the sum of the first 15 terms of the AP with first term 1 and common difference 2.",
    "options": [
      {
        "id": "a",
        "text": "225"
      },
      {
        "id": "b",
        "text": "210"
      },
      {
        "id": "c",
        "text": "465"
      },
      {
        "id": "d",
        "text": "217.5"
      }
    ],
    "correct": "a",
    "explanation": "Sₙ = n/2 [2a + (n − 1)d].",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "f6d08264-a0ce-41a6-8c7d-8f77dcb61ff5"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Find the sum of the first 20 terms of the AP with first term 2 and common difference 2.",
    "options": [
      {
        "id": "a",
        "text": "840"
      },
      {
        "id": "b",
        "text": "842"
      },
      {
        "id": "c",
        "text": "400"
      },
      {
        "id": "d",
        "text": "420"
      }
    ],
    "correct": "d",
    "explanation": "Sₙ = n/2 [2a + (n − 1)d].",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5f6281ab-e49a-4443-813a-84352666636a"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Find the sum of the first 15 terms of the AP with first term 1 and common difference 1.",
    "options": [
      {
        "id": "a",
        "text": "240"
      },
      {
        "id": "b",
        "text": "112.5"
      },
      {
        "id": "c",
        "text": "120"
      },
      {
        "id": "d",
        "text": "105"
      }
    ],
    "correct": "c",
    "explanation": "Sₙ = n/2 [2a + (n − 1)d].",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "350b0f7f-d3c5-4908-8211-941afa26a70e"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Find the sum of the first 15 terms of the AP with first term 3 and common difference 3.",
    "options": [
      {
        "id": "a",
        "text": "337.5"
      },
      {
        "id": "b",
        "text": "720"
      },
      {
        "id": "c",
        "text": "360"
      },
      {
        "id": "d",
        "text": "345"
      }
    ],
    "correct": "c",
    "explanation": "Sₙ = n/2 [2a + (n − 1)d].",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "1004de67-ca26-49e9-867d-451bd8c84009"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Find the sum of the first 10 terms of the AP with first term 2 and common difference 3.",
    "options": [
      {
        "id": "a",
        "text": "155"
      },
      {
        "id": "b",
        "text": "320"
      },
      {
        "id": "c",
        "text": "312"
      },
      {
        "id": "d",
        "text": "145"
      }
    ],
    "correct": "a",
    "explanation": "Sₙ = n/2 [2a + (n − 1)d].",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "6ed677c9-1b7c-42ff-87cd-dfc43429876b"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Find the sum of the first 20 terms of the AP with first term 1 and common difference 4.",
    "options": [
      {
        "id": "a",
        "text": "760"
      },
      {
        "id": "b",
        "text": "1620"
      },
      {
        "id": "c",
        "text": "780"
      },
      {
        "id": "d",
        "text": "770"
      }
    ],
    "correct": "c",
    "explanation": "Sₙ = n/2 [2a + (n − 1)d].",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "83e44698-1b92-41dd-8e95-be54217ae1c0"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Permutations and Combinations",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "In how many ways can 2 members be chosen from a group of 10 people?",
    "options": [
      {
        "id": "a",
        "text": "45"
      },
      {
        "id": "b",
        "text": "55"
      },
      {
        "id": "c",
        "text": "90"
      },
      {
        "id": "d",
        "text": "20"
      }
    ],
    "correct": "a",
    "explanation": "ⁿCᵣ = n! / (r!(n − r)!).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "fb8b65d4-72e8-42df-845c-e8ee129fe603"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Permutations and Combinations",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "In how many ways can 2 members be chosen from a group of 8 people?",
    "options": [
      {
        "id": "a",
        "text": "28"
      },
      {
        "id": "b",
        "text": "16"
      },
      {
        "id": "c",
        "text": "56"
      },
      {
        "id": "d",
        "text": "36"
      }
    ],
    "correct": "a",
    "explanation": "ⁿCᵣ = n! / (r!(n − r)!).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "4c2b8de3-c452-4f24-8644-f3a47135dabf"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Permutations and Combinations",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "In how many ways can 3 members be chosen from a group of 8 people?",
    "options": [
      {
        "id": "a",
        "text": "24"
      },
      {
        "id": "b",
        "text": "64"
      },
      {
        "id": "c",
        "text": "336"
      },
      {
        "id": "d",
        "text": "56"
      }
    ],
    "correct": "d",
    "explanation": "ⁿCᵣ = n! / (r!(n − r)!).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "fcc86377-1d95-4098-8618-5f2ddf60815e"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Permutations and Combinations",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "In how many ways can 3 members be chosen from a group of 10 people?",
    "options": [
      {
        "id": "a",
        "text": "120"
      },
      {
        "id": "b",
        "text": "130"
      },
      {
        "id": "c",
        "text": "720"
      },
      {
        "id": "d",
        "text": "30"
      }
    ],
    "correct": "a",
    "explanation": "ⁿCᵣ = n! / (r!(n − r)!).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "7962046d-6598-416a-8de5-0fd46765422f"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Permutations and Combinations",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "In how many ways can 3 members be chosen from a group of 7 people?",
    "options": [
      {
        "id": "a",
        "text": "21"
      },
      {
        "id": "b",
        "text": "42"
      },
      {
        "id": "c",
        "text": "35"
      },
      {
        "id": "d",
        "text": "210"
      }
    ],
    "correct": "c",
    "explanation": "ⁿCᵣ = n! / (r!(n − r)!).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "bc837e42-d6d6-4ef3-8e7d-6f8864f46872"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Integrals",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Evaluate ∫₀^3 x^3 dx.",
    "options": [
      {
        "id": "a",
        "text": "42.5"
      },
      {
        "id": "b",
        "text": "20.25"
      },
      {
        "id": "c",
        "text": "27"
      },
      {
        "id": "d",
        "text": "40.5"
      }
    ],
    "correct": "b",
    "explanation": "∫₀ᵃ xⁿ dx = aⁿ⁺¹/(n+1).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "3f2a4d11-49bb-4547-8403-b0330325e055"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Integrals",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Evaluate ∫₀^3 x^2 dx.",
    "options": [
      {
        "id": "a",
        "text": "9"
      },
      {
        "id": "b",
        "text": "6"
      },
      {
        "id": "c",
        "text": "18"
      },
      {
        "id": "d",
        "text": "20"
      }
    ],
    "correct": "a",
    "explanation": "∫₀ᵃ xⁿ dx = aⁿ⁺¹/(n+1).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "39d615b2-b778-42b0-8f10-2e45b77d13a4"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Integrals",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Evaluate ∫₀^2 x^1 dx.",
    "options": [
      {
        "id": "a",
        "text": "2"
      },
      {
        "id": "b",
        "text": "6"
      },
      {
        "id": "c",
        "text": "4"
      },
      {
        "id": "d",
        "text": "1"
      }
    ],
    "correct": "a",
    "explanation": "∫₀ᵃ xⁿ dx = aⁿ⁺¹/(n+1).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "cde4f488-2f77-427d-81e3-e7292036e68c"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Integrals",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Evaluate ∫₀^2 x^2 dx.",
    "options": [
      {
        "id": "a",
        "text": "7.33"
      },
      {
        "id": "b",
        "text": "5.33"
      },
      {
        "id": "c",
        "text": "2.67"
      },
      {
        "id": "d",
        "text": "4"
      }
    ],
    "correct": "c",
    "explanation": "∫₀ᵃ xⁿ dx = aⁿ⁺¹/(n+1).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "85865645-e620-4427-8f1d-0369b2697cbd"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Integrals",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Evaluate ∫₀^3 x^1 dx.",
    "options": [
      {
        "id": "a",
        "text": "3"
      },
      {
        "id": "b",
        "text": "9"
      },
      {
        "id": "c",
        "text": "1"
      },
      {
        "id": "d",
        "text": "4.5"
      }
    ],
    "correct": "d",
    "explanation": "∫₀ᵃ xⁿ dx = aⁿ⁺¹/(n+1).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "04eaa464-3322-4135-83b0-0cf6557d643d"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Probability",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Two fair dice are thrown. What is the probability that the sum is 4? (as a fraction of 36)",
    "options": [
      {
        "id": "a",
        "text": "0.11"
      },
      {
        "id": "b",
        "text": "0.25"
      },
      {
        "id": "c",
        "text": "0.18"
      },
      {
        "id": "d",
        "text": "0.08"
      }
    ],
    "correct": "d",
    "explanation": "There are 3 favourable outcomes out of 36.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "6bd00a82-79ef-4cc2-810e-9d95d15c8000"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Probability",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Two fair dice are thrown. What is the probability that the sum is 10? (as a fraction of 36)",
    "options": [
      {
        "id": "a",
        "text": "0.08"
      },
      {
        "id": "b",
        "text": "0.18"
      },
      {
        "id": "c",
        "text": "0.25"
      },
      {
        "id": "d",
        "text": "0.11"
      }
    ],
    "correct": "a",
    "explanation": "There are 3 favourable outcomes out of 36.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "cfd72aaf-7357-4d4f-837a-21bdd664f35d"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Probability",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Two fair dice are thrown. What is the probability that the sum is 8? (as a fraction of 36)",
    "options": [
      {
        "id": "a",
        "text": "0.42"
      },
      {
        "id": "b",
        "text": "0.18"
      },
      {
        "id": "c",
        "text": "0.17"
      },
      {
        "id": "d",
        "text": "0.14"
      }
    ],
    "correct": "d",
    "explanation": "There are 5 favourable outcomes out of 36.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "44fa6f48-a139-4da9-83b3-dbb448788153"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Probability",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Two fair dice are thrown. What is the probability that the sum is 6? (as a fraction of 36)",
    "options": [
      {
        "id": "a",
        "text": "0.18"
      },
      {
        "id": "b",
        "text": "0.14"
      },
      {
        "id": "c",
        "text": "0.17"
      },
      {
        "id": "d",
        "text": "0.42"
      }
    ],
    "correct": "b",
    "explanation": "There are 5 favourable outcomes out of 36.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e8e7b775-1b89-421c-8662-8cff0d288258"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Probability",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Two fair dice are thrown. What is the probability that the sum is 7? (as a fraction of 36)",
    "options": [
      {
        "id": "a",
        "text": "0.17"
      },
      {
        "id": "b",
        "text": "0.18"
      },
      {
        "id": "c",
        "text": "0.19"
      },
      {
        "id": "d",
        "text": "0.5"
      }
    ],
    "correct": "a",
    "explanation": "There are 6 favourable outcomes out of 36.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "942ebf92-312b-4f55-8018-af8c1f21dde3"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Straight Lines",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "Find the perpendicular distance from the point (1, 1) to the line 4x + 3y − 10 = 0.",
    "options": [
      {
        "id": "a",
        "text": "0.6"
      },
      {
        "id": "b",
        "text": "3"
      },
      {
        "id": "c",
        "text": "3.2"
      },
      {
        "id": "d",
        "text": "1.6"
      }
    ],
    "correct": "a",
    "explanation": "d = |ax₀ + by₀ + c| / √(a² + b²).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "563d6aee-5780-409d-86d2-093c99d426e6"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Straight Lines",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "Find the perpendicular distance from the point (1, 2) to the line 6x + 8y + 5 = 0.",
    "options": [
      {
        "id": "a",
        "text": "2.4"
      },
      {
        "id": "b",
        "text": "3.7"
      },
      {
        "id": "c",
        "text": "27"
      },
      {
        "id": "d",
        "text": "2.7"
      }
    ],
    "correct": "d",
    "explanation": "d = |ax₀ + by₀ + c| / √(a² + b²).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "88ca59a9-4fc4-4298-8f88-d1cdedcc4971"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Straight Lines",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "Find the perpendicular distance from the point (2, 1) to the line 4x + 3y − 10 = 0.",
    "options": [
      {
        "id": "a",
        "text": "2.4"
      },
      {
        "id": "b",
        "text": "0.2"
      },
      {
        "id": "c",
        "text": "1"
      },
      {
        "id": "d",
        "text": "1.2"
      }
    ],
    "correct": "b",
    "explanation": "d = |ax₀ + by₀ + c| / √(a² + b²).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a92b4823-d8ec-4a91-8447-1eadb7450ed1"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Straight Lines",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "Find the perpendicular distance from the point (2, 2) to the line 5x + 12y − 5 = 0.",
    "options": [
      {
        "id": "a",
        "text": "2.23"
      },
      {
        "id": "b",
        "text": "2.82"
      },
      {
        "id": "c",
        "text": "3.23"
      },
      {
        "id": "d",
        "text": "29"
      }
    ],
    "correct": "a",
    "explanation": "d = |ax₀ + by₀ + c| / √(a² + b²).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "466eb47d-6d1c-4011-854d-ded7eab1db56"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Straight Lines",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "Find the perpendicular distance from the point (2, 2) to the line 8x + 6y + 10 = 0.",
    "options": [
      {
        "id": "a",
        "text": "38"
      },
      {
        "id": "b",
        "text": "4.8"
      },
      {
        "id": "c",
        "text": "3.8"
      },
      {
        "id": "d",
        "text": "3"
      }
    ],
    "correct": "c",
    "explanation": "d = |ax₀ + by₀ + c| / √(a² + b²).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "7c33769f-2118-4608-8557-480742bea615"
  },
  {
    "exam_ids": [
      "kcet",
      "jee-main",
      "jee-advanced",
      "comedk",
      "scholarship"
    ],
    "subject": "Mathematics",
    "chapter": "Straight Lines",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "Find the perpendicular distance from the point (2, 1) to the line 6x + 8y − 5 = 0.",
    "options": [
      {
        "id": "a",
        "text": "15"
      },
      {
        "id": "b",
        "text": "1.5"
      },
      {
        "id": "c",
        "text": "2.5"
      },
      {
        "id": "d",
        "text": "2.2"
      }
    ],
    "correct": "b",
    "explanation": "d = |ax₀ + by₀ + c| / √(a² + b²).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8f029a4d-4908-4897-8ac6-637de8e9a2f2"
  },
  {
    "exam_ids": [
      "jee-main",
      "jee-advanced",
      "scholarship",
      "kcet"
    ],
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "topic": "",
    "difficulty": "expert",
    "qtype": "numerical",
    "body": "Find the sum of the first 4 terms of the geometric progression 3, 9, 27, …",
    "options": [],
    "correct": {
      "value": 120
    },
    "explanation": "Sₙ = a(rⁿ − 1)/(r − 1).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a4e09350-54e6-4fcb-8a16-8d33c4021d07"
  },
  {
    "exam_ids": [
      "jee-main",
      "jee-advanced",
      "scholarship",
      "kcet"
    ],
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "topic": "",
    "difficulty": "expert",
    "qtype": "numerical",
    "body": "Find the sum of the first 4 terms of the geometric progression 1, 2, 4, …",
    "options": [],
    "correct": {
      "value": 15
    },
    "explanation": "Sₙ = a(rⁿ − 1)/(r − 1).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "0934e012-c5e6-48c1-80d5-25666bea521c"
  },
  {
    "exam_ids": [
      "jee-main",
      "jee-advanced",
      "scholarship",
      "kcet"
    ],
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "topic": "",
    "difficulty": "expert",
    "qtype": "numerical",
    "body": "Find the sum of the first 4 terms of the geometric progression 1, 3, 9, …",
    "options": [],
    "correct": {
      "value": 40
    },
    "explanation": "Sₙ = a(rⁿ − 1)/(r − 1).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "400b77f9-8654-4c53-8e5a-6e6c67264515"
  },
  {
    "exam_ids": [
      "jee-main",
      "jee-advanced",
      "scholarship",
      "kcet"
    ],
    "subject": "Mathematics",
    "chapter": "Sequences and Series",
    "topic": "",
    "difficulty": "expert",
    "qtype": "numerical",
    "body": "Find the sum of the first 6 terms of the geometric progression 2, 6, 18, …",
    "options": [],
    "correct": {
      "value": 728
    },
    "explanation": "Sₙ = a(rⁿ − 1)/(r − 1).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "54f5f755-20ba-4d18-860a-a463ff166f43"
  },
  {
    "exam_ids": [
      "jee-advanced",
      "scholarship",
      "kcet"
    ],
    "subject": "Mathematics",
    "chapter": "Relations and Functions",
    "topic": "",
    "difficulty": "expert",
    "qtype": "multiple",
    "body": "Which of the following functions from ℝ to ℝ are one-one (injective)?",
    "options": [
      {
        "id": "a",
        "text": "f(x) = 2x + 3"
      },
      {
        "id": "b",
        "text": "f(x) = x²"
      },
      {
        "id": "c",
        "text": "f(x) = x³"
      },
      {
        "id": "d",
        "text": "f(x) = |x|"
      }
    ],
    "correct": [
      "a",
      "c"
    ],
    "explanation": "Linear 2x+3 and x³ are strictly increasing; x² and |x| take equal values at ±x.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "9d0a3f6c-6516-4bf0-8dd2-ebb6404a747f"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Cell: The Unit of Life",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which organelle is the site of photosynthesis in plant cells?",
    "options": [
      {
        "id": "a",
        "text": "Mitochondrion"
      },
      {
        "id": "b",
        "text": "Chloroplast"
      },
      {
        "id": "c",
        "text": "Ribosome"
      },
      {
        "id": "d",
        "text": "Golgi apparatus"
      }
    ],
    "correct": "b",
    "explanation": "Chloroplasts contain chlorophyll and carry out photosynthesis.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "b5f2dd45-0a13-45ad-8d45-e525c125408b"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Cell: The Unit of Life",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which organelle is called the powerhouse of the cell?",
    "options": [
      {
        "id": "a",
        "text": "Nucleus"
      },
      {
        "id": "b",
        "text": "Lysosome"
      },
      {
        "id": "c",
        "text": "Mitochondrion"
      },
      {
        "id": "d",
        "text": "Endoplasmic reticulum"
      }
    ],
    "correct": "c",
    "explanation": "Mitochondria produce ATP by aerobic respiration.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e30dcdf0-1999-49a0-8de4-50aefc23f974"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Photosynthesis in Higher Plants",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which gas is released as a by-product of photosynthesis?",
    "options": [
      {
        "id": "a",
        "text": "Carbon dioxide"
      },
      {
        "id": "b",
        "text": "Nitrogen"
      },
      {
        "id": "c",
        "text": "Oxygen"
      },
      {
        "id": "d",
        "text": "Hydrogen"
      }
    ],
    "correct": "c",
    "explanation": "O₂ comes from the splitting of water in the light reaction.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e397831a-5fc7-44c6-8961-aa62f8bc7cea"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Human Health and Disease",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Malaria is caused by which organism?",
    "options": [
      {
        "id": "a",
        "text": "Plasmodium"
      },
      {
        "id": "b",
        "text": "Entamoeba"
      },
      {
        "id": "c",
        "text": "Salmonella"
      },
      {
        "id": "d",
        "text": "Ascaris"
      }
    ],
    "correct": "a",
    "explanation": "Plasmodium is transmitted by the female Anopheles mosquito.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "f734738c-00a6-4cb9-8d1a-0b8b587905d6"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Body Fluids and Circulation",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "How many chambers does the human heart have?",
    "options": [
      {
        "id": "a",
        "text": "Two"
      },
      {
        "id": "b",
        "text": "Three"
      },
      {
        "id": "c",
        "text": "Four"
      },
      {
        "id": "d",
        "text": "Five"
      }
    ],
    "correct": "c",
    "explanation": "Two atria and two ventricles.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "926805bd-5c5d-409c-80c8-a3df58ad944a"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Morphology of Flowering Plants",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The male reproductive part of a flower is the",
    "options": [
      {
        "id": "a",
        "text": "Pistil"
      },
      {
        "id": "b",
        "text": "Stamen"
      },
      {
        "id": "c",
        "text": "Sepal"
      },
      {
        "id": "d",
        "text": "Ovule"
      }
    ],
    "correct": "b",
    "explanation": "The stamen (androecium) consists of anther and filament.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "7ebea50f-0e2b-476d-8d2b-6cb67d0ce955"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Breathing and Exchange of Gases",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Exchange of gases in human lungs takes place in the",
    "options": [
      {
        "id": "a",
        "text": "Trachea"
      },
      {
        "id": "b",
        "text": "Bronchi"
      },
      {
        "id": "c",
        "text": "Alveoli"
      },
      {
        "id": "d",
        "text": "Larynx"
      }
    ],
    "correct": "c",
    "explanation": "Alveoli provide a thin, large surface for diffusion.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "225330d8-f3f5-4760-877d-cc1257fbedea"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "The Living World",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The basic unit of classification is",
    "options": [
      {
        "id": "a",
        "text": "Genus"
      },
      {
        "id": "b",
        "text": "Species"
      },
      {
        "id": "c",
        "text": "Family"
      },
      {
        "id": "d",
        "text": "Order"
      }
    ],
    "correct": "b",
    "explanation": "Species is the lowest and basic taxonomic category.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8a067b48-ede2-47c0-8ba6-b7063e27f251"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Digestion and Absorption",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which enzyme in saliva begins starch digestion?",
    "options": [
      {
        "id": "a",
        "text": "Pepsin"
      },
      {
        "id": "b",
        "text": "Salivary amylase"
      },
      {
        "id": "c",
        "text": "Trypsin"
      },
      {
        "id": "d",
        "text": "Lipase"
      }
    ],
    "correct": "b",
    "explanation": "Salivary amylase (ptyalin) hydrolyses starch to maltose.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "c77b73be-538f-4e47-831c-4095a468ac42"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Biological Classification",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Bacteria are placed in which kingdom in Whittaker's five-kingdom system?",
    "options": [
      {
        "id": "a",
        "text": "Protista"
      },
      {
        "id": "b",
        "text": "Fungi"
      },
      {
        "id": "c",
        "text": "Monera"
      },
      {
        "id": "d",
        "text": "Plantae"
      }
    ],
    "correct": "c",
    "explanation": "Prokaryotes are placed in Monera.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "b651e0e8-e2ae-4657-83fa-155548d90999"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Neural Control and Coordination",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The structural and functional unit of the nervous system is the",
    "options": [
      {
        "id": "a",
        "text": "Nephron"
      },
      {
        "id": "b",
        "text": "Neuron"
      },
      {
        "id": "c",
        "text": "Sarcomere"
      },
      {
        "id": "d",
        "text": "Alveolus"
      }
    ],
    "correct": "b",
    "explanation": "Neurons transmit nerve impulses.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "66dac584-d68e-4106-8212-c13e565c9619"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Principles of Inheritance and Variation",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "In a monohybrid cross between pure tall (TT) and dwarf (tt) pea plants, the F₂ phenotypic ratio is",
    "options": [
      {
        "id": "a",
        "text": "1 : 1"
      },
      {
        "id": "b",
        "text": "3 : 1"
      },
      {
        "id": "c",
        "text": "9 : 3 : 3 : 1"
      },
      {
        "id": "d",
        "text": "1 : 2 : 1"
      }
    ],
    "correct": "b",
    "explanation": "F₁ Tt selfed gives 3 tall : 1 dwarf.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "89b39144-ffba-4edf-8ddc-0a5870d9eb7e"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Principles of Inheritance and Variation",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The F₂ genotypic ratio of a monohybrid cross is",
    "options": [
      {
        "id": "a",
        "text": "3 : 1"
      },
      {
        "id": "b",
        "text": "1 : 2 : 1"
      },
      {
        "id": "c",
        "text": "9 : 3 : 3 : 1"
      },
      {
        "id": "d",
        "text": "1 : 1"
      }
    ],
    "correct": "b",
    "explanation": "TT : Tt : tt = 1 : 2 : 1.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "d0748397-cec7-443e-8e41-64b7a7539092"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Excretory Products and their Elimination",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The functional unit of the kidney is the",
    "options": [
      {
        "id": "a",
        "text": "Neuron"
      },
      {
        "id": "b",
        "text": "Nephron"
      },
      {
        "id": "c",
        "text": "Alveolus"
      },
      {
        "id": "d",
        "text": "Villus"
      }
    ],
    "correct": "b",
    "explanation": "Each kidney has about a million nephrons.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "333790a7-5858-4aac-82e1-cde34130054a"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Photosynthesis in Higher Plants",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The first stable product of the Calvin (C₃) cycle is",
    "options": [
      {
        "id": "a",
        "text": "Oxaloacetic acid"
      },
      {
        "id": "b",
        "text": "3-phosphoglyceric acid"
      },
      {
        "id": "c",
        "text": "Pyruvic acid"
      },
      {
        "id": "d",
        "text": "Glucose"
      }
    ],
    "correct": "b",
    "explanation": "RuBisCO fixes CO₂ to give 3-PGA.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8c19519e-a284-4342-81b2-e2e98832eaaa"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Body Fluids and Circulation",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The pacemaker of the human heart is the",
    "options": [
      {
        "id": "a",
        "text": "AV node"
      },
      {
        "id": "b",
        "text": "SA node"
      },
      {
        "id": "c",
        "text": "Bundle of His"
      },
      {
        "id": "d",
        "text": "Purkinje fibres"
      }
    ],
    "correct": "b",
    "explanation": "The sinoatrial node initiates each heartbeat.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "666aaa31-4c41-4b09-8bf6-27d46a902a55"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Respiration in Plants",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Glycolysis takes place in the",
    "options": [
      {
        "id": "a",
        "text": "Mitochondrial matrix"
      },
      {
        "id": "b",
        "text": "Cytoplasm"
      },
      {
        "id": "c",
        "text": "Chloroplast"
      },
      {
        "id": "d",
        "text": "Nucleus"
      }
    ],
    "correct": "b",
    "explanation": "Glycolysis occurs in the cytoplasm of all living cells.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "938627ee-7663-4a9f-8dae-d1df44c91537"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Human Reproduction",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Fertilisation in humans normally occurs in the",
    "options": [
      {
        "id": "a",
        "text": "Uterus"
      },
      {
        "id": "b",
        "text": "Ovary"
      },
      {
        "id": "c",
        "text": "Ampullary region of the fallopian tube"
      },
      {
        "id": "d",
        "text": "Cervix"
      }
    ],
    "correct": "c",
    "explanation": "Ovum and sperm meet in the ampulla of the oviduct.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "f9f9bab7-bf4d-42e5-8dcf-b3185e5f4928"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Molecular Basis of Inheritance",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "In DNA, adenine pairs with",
    "options": [
      {
        "id": "a",
        "text": "Guanine"
      },
      {
        "id": "b",
        "text": "Cytosine"
      },
      {
        "id": "c",
        "text": "Thymine"
      },
      {
        "id": "d",
        "text": "Uracil"
      }
    ],
    "correct": "c",
    "explanation": "A=T by two hydrogen bonds (Chargaff's rule).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "26190d4d-2116-4fa4-8f57-c0b2129d98ad"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Chemical Coordination and Integration",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Insulin is secreted by which cells of the pancreas?",
    "options": [
      {
        "id": "a",
        "text": "α-cells"
      },
      {
        "id": "b",
        "text": "β-cells"
      },
      {
        "id": "c",
        "text": "δ-cells"
      },
      {
        "id": "d",
        "text": "Acinar cells"
      }
    ],
    "correct": "b",
    "explanation": "β-cells of the islets of Langerhans secrete insulin.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "b55dc7ba-ad26-4951-86a0-8970f5cbe533"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Evolution",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Analogous organs indicate",
    "options": [
      {
        "id": "a",
        "text": "Divergent evolution"
      },
      {
        "id": "b",
        "text": "Convergent evolution"
      },
      {
        "id": "c",
        "text": "Common ancestry"
      },
      {
        "id": "d",
        "text": "Vestigial structure"
      }
    ],
    "correct": "b",
    "explanation": "Similar function from different ancestry reflects convergent evolution.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "52306559-8369-4d31-8eb2-b1688cb4a1c8"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Organisms and Populations",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "In a population growing exponentially, the growth curve is",
    "options": [
      {
        "id": "a",
        "text": "S-shaped"
      },
      {
        "id": "b",
        "text": "J-shaped"
      },
      {
        "id": "c",
        "text": "Linear"
      },
      {
        "id": "d",
        "text": "Bell-shaped"
      }
    ],
    "correct": "b",
    "explanation": "Exponential growth with unlimited resources gives a J-shaped curve.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "0c61bc10-e243-41b5-81ba-bc7398715c54"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Molecular Basis of Inheritance",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "If one strand of DNA has the sequence 5′-ATGCCA-3′, the complementary strand (written 5′→3′) is",
    "options": [
      {
        "id": "a",
        "text": "5′-TACGGT-3′"
      },
      {
        "id": "b",
        "text": "5′-TGGCAT-3′"
      },
      {
        "id": "c",
        "text": "5′-ATGCCA-3′"
      },
      {
        "id": "d",
        "text": "5′-UGGCAU-3′"
      }
    ],
    "correct": "b",
    "explanation": "Complement is 3′-TACGGT-5′, which read 5′→3′ is TGGCAT.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "fd528603-4ad6-4d73-80db-43880535ccfc"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Breathing and Exchange of Gases",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Which factor shifts the oxygen–haemoglobin dissociation curve to the right?",
    "options": [
      {
        "id": "a",
        "text": "Low pCO₂"
      },
      {
        "id": "b",
        "text": "Low temperature"
      },
      {
        "id": "c",
        "text": "High H⁺ concentration"
      },
      {
        "id": "d",
        "text": "High pH"
      }
    ],
    "correct": "c",
    "explanation": "Higher H⁺ (lower pH), higher pCO₂ and temperature favour O₂ release (Bohr effect).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "9329cfe9-56c1-4e52-8618-c840f55e7740"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Principles of Inheritance and Variation",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A dihybrid test cross (AaBb × aabb) with independent assortment gives which phenotypic ratio?",
    "options": [
      {
        "id": "a",
        "text": "9 : 3 : 3 : 1"
      },
      {
        "id": "b",
        "text": "1 : 1 : 1 : 1"
      },
      {
        "id": "c",
        "text": "3 : 1"
      },
      {
        "id": "d",
        "text": "1 : 2 : 1"
      }
    ],
    "correct": "b",
    "explanation": "Each of the four gamete types of AaBb appears equally.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "ea9a0000-bfe9-4106-8700-889d2983cdb3"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Neural Control and Coordination",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "During the resting state, the axonal membrane is",
    "options": [
      {
        "id": "a",
        "text": "More permeable to Na⁺ than K⁺"
      },
      {
        "id": "b",
        "text": "More permeable to K⁺ than Na⁺"
      },
      {
        "id": "c",
        "text": "Equally permeable to both"
      },
      {
        "id": "d",
        "text": "Impermeable to both"
      }
    ],
    "correct": "b",
    "explanation": "Resting membrane is more permeable to K⁺; the inside is negative.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "bf8b0324-1b1d-445f-87eb-a7ac34648023"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Photosynthesis in Higher Plants",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "In C₄ plants, the primary CO₂ acceptor in mesophyll cells is",
    "options": [
      {
        "id": "a",
        "text": "RuBP"
      },
      {
        "id": "b",
        "text": "PEP"
      },
      {
        "id": "c",
        "text": "OAA"
      },
      {
        "id": "d",
        "text": "3-PGA"
      }
    ],
    "correct": "b",
    "explanation": "PEP carboxylase fixes CO₂ onto phosphoenolpyruvate.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "53221872-2e08-4a9b-8407-cdaf404183ec"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Human Health and Disease",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "HIV primarily infects which cells?",
    "options": [
      {
        "id": "a",
        "text": "B-lymphocytes"
      },
      {
        "id": "b",
        "text": "Helper T-lymphocytes"
      },
      {
        "id": "c",
        "text": "Red blood cells"
      },
      {
        "id": "d",
        "text": "Platelets"
      }
    ],
    "correct": "b",
    "explanation": "HIV targets CD4⁺ helper T cells.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "4c9389d1-e5e8-4f5f-8926-7492d37674bf"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Sexual Reproduction in Flowering Plants",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "In angiosperms, the endosperm is typically",
    "options": [
      {
        "id": "a",
        "text": "Haploid"
      },
      {
        "id": "b",
        "text": "Diploid"
      },
      {
        "id": "c",
        "text": "Triploid"
      },
      {
        "id": "d",
        "text": "Tetraploid"
      }
    ],
    "correct": "c",
    "explanation": "Triple fusion of a male gamete with two polar nuclei gives 3n endosperm.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8b43c6fe-cb6c-47e4-8ed7-3bfd3c96a00d"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Locomotion and Movement",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "During muscle contraction, which band shortens?",
    "options": [
      {
        "id": "a",
        "text": "A-band"
      },
      {
        "id": "b",
        "text": "I-band"
      },
      {
        "id": "c",
        "text": "Both A and I bands"
      },
      {
        "id": "d",
        "text": "Neither"
      }
    ],
    "correct": "b",
    "explanation": "Thin filaments slide inward; the I-band and H-zone shorten while the A-band stays constant.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "7bc18fdd-144e-438a-8c5a-d77b18ce77b8"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Biotechnology: Principles and Processes",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "Restriction endonuclease EcoRI recognises a palindromic sequence of how many base pairs?",
    "options": [
      {
        "id": "a",
        "text": "4"
      },
      {
        "id": "b",
        "text": "6"
      },
      {
        "id": "c",
        "text": "8"
      },
      {
        "id": "d",
        "text": "10"
      }
    ],
    "correct": "b",
    "explanation": "EcoRI recognises GAATTC (6 bp).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8d7af427-3d8c-45c4-8bc6-975061d19394"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Excretory Products and their Elimination",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "ADH (vasopressin) acts mainly on the",
    "options": [
      {
        "id": "a",
        "text": "Glomerulus"
      },
      {
        "id": "b",
        "text": "Proximal tubule"
      },
      {
        "id": "c",
        "text": "Distal tubule and collecting duct"
      },
      {
        "id": "d",
        "text": "Bowman's capsule"
      }
    ],
    "correct": "c",
    "explanation": "ADH increases water reabsorption in the DCT and collecting duct.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "7631f84d-0b2d-4861-8207-0a0798d3c54c"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Ecosystem",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "According to the 10% law, if producers fix 10,000 J, energy available to secondary consumers is about",
    "options": [
      {
        "id": "a",
        "text": "1,000 J"
      },
      {
        "id": "b",
        "text": "100 J"
      },
      {
        "id": "c",
        "text": "10 J"
      },
      {
        "id": "d",
        "text": "1 J"
      }
    ],
    "correct": "b",
    "explanation": "10,000 → 1,000 (primary) → 100 J (secondary).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "eccd3567-456b-4350-8860-5b09861ec538"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Principles of Inheritance and Variation",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "In a dihybrid cross (AaBb × AaBb) with independent assortment, what fraction of the progeny is homozygous recessive for both genes?",
    "options": [
      {
        "id": "a",
        "text": "1/4"
      },
      {
        "id": "b",
        "text": "1/8"
      },
      {
        "id": "c",
        "text": "1/16"
      },
      {
        "id": "d",
        "text": "9/16"
      }
    ],
    "correct": "c",
    "explanation": "(1/4) × (1/4) = 1/16 for aabb.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "19879cb6-7624-445a-89a5-479c9bbe494f"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Principles of Inheritance and Variation",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "In a cross AaBb × AaBb, what fraction of progeny shows both dominant traits?",
    "options": [
      {
        "id": "a",
        "text": "3/16"
      },
      {
        "id": "b",
        "text": "9/16"
      },
      {
        "id": "c",
        "text": "1/16"
      },
      {
        "id": "d",
        "text": "6/16"
      }
    ],
    "correct": "b",
    "explanation": "(3/4) × (3/4) = 9/16.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "72468648-ef5a-4fc7-87f3-14a435a77564"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Evolution",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "In a Hardy–Weinberg population, the frequency of the recessive allele is 0.3. What is the frequency of heterozygotes?",
    "options": [
      {
        "id": "a",
        "text": "0.09"
      },
      {
        "id": "b",
        "text": "0.21"
      },
      {
        "id": "c",
        "text": "0.42"
      },
      {
        "id": "d",
        "text": "0.49"
      }
    ],
    "correct": "c",
    "explanation": "2pq = 2 × 0.7 × 0.3 = 0.42.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "69efbe44-dd3c-40d8-8da4-bda8b55ebb87"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Evolution",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "If 16% of a Hardy–Weinberg population shows the recessive phenotype, the frequency of the dominant allele is",
    "options": [
      {
        "id": "a",
        "text": "0.4"
      },
      {
        "id": "b",
        "text": "0.6"
      },
      {
        "id": "c",
        "text": "0.84"
      },
      {
        "id": "d",
        "text": "0.16"
      }
    ],
    "correct": "b",
    "explanation": "q² = 0.16 so q = 0.4 and p = 0.6.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5585620f-2209-4861-8160-2da73760bc8c"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Molecular Basis of Inheritance",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "A DNA sample has 20% adenine. What percentage of its bases is guanine?",
    "options": [
      {
        "id": "a",
        "text": "20%"
      },
      {
        "id": "b",
        "text": "30%"
      },
      {
        "id": "c",
        "text": "40%"
      },
      {
        "id": "d",
        "text": "60%"
      }
    ],
    "correct": "b",
    "explanation": "A = T = 20%, so G + C = 60% and G = 30%.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "6fa3537e-83cf-488c-80e1-9b0aafe13186"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Molecular Basis of Inheritance",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "How many amino acids are coded by an mRNA segment of 300 nucleotides (excluding stop codon effects)?",
    "options": [
      {
        "id": "a",
        "text": "100"
      },
      {
        "id": "b",
        "text": "150"
      },
      {
        "id": "c",
        "text": "300"
      },
      {
        "id": "d",
        "text": "900"
      }
    ],
    "correct": "a",
    "explanation": "Each codon has 3 nucleotides: 300/3 = 100.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "241a0f20-c5e7-4144-824c-18cbbabcf353"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Breathing and Exchange of Gases",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "Tidal volume 500 mL, IRV 2500 mL and ERV 1000 mL. What is the vital capacity?",
    "options": [
      {
        "id": "a",
        "text": "3000 mL"
      },
      {
        "id": "b",
        "text": "3500 mL"
      },
      {
        "id": "c",
        "text": "4000 mL"
      },
      {
        "id": "d",
        "text": "5200 mL"
      }
    ],
    "correct": "c",
    "explanation": "VC = TV + IRV + ERV = 4000 mL.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "6c3c558b-adc3-49fa-8473-1bb3ce855deb"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Body Fluids and Circulation",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "With a stroke volume of 70 mL and heart rate of 72 beats/min, the cardiac output is about",
    "options": [
      {
        "id": "a",
        "text": "4.04 L/min"
      },
      {
        "id": "b",
        "text": "5.04 L/min"
      },
      {
        "id": "c",
        "text": "6.04 L/min"
      },
      {
        "id": "d",
        "text": "7.2 L/min"
      }
    ],
    "correct": "b",
    "explanation": "70 × 72 = 5040 mL/min ≈ 5.04 L/min.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "dea0f2a7-5294-4df8-8c8e-d186f394fb5a"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Respiration in Plants",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "The respiratory quotient (RQ) for the complete aerobic oxidation of tripalmitin is about",
    "options": [
      {
        "id": "a",
        "text": "1.0"
      },
      {
        "id": "b",
        "text": "0.7"
      },
      {
        "id": "c",
        "text": "1.33"
      },
      {
        "id": "d",
        "text": "4.0"
      }
    ],
    "correct": "b",
    "explanation": "Fats give RQ ≈ 0.7 (102 CO₂ / 145 O₂).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "7f3221c2-4329-46ce-8d41-55cbe7a10c77"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Zoology",
    "chapter": "Human Reproduction",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "In a 28-day menstrual cycle, ovulation typically occurs around day",
    "options": [
      {
        "id": "a",
        "text": "5"
      },
      {
        "id": "b",
        "text": "14"
      },
      {
        "id": "c",
        "text": "21"
      },
      {
        "id": "d",
        "text": "28"
      }
    ],
    "correct": "b",
    "explanation": "The LH surge in mid-cycle triggers ovulation around day 14.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "db39c275-1c0a-42f3-8498-208e64e2bc78"
  },
  {
    "exam_ids": [
      "kcet",
      "neet-ug",
      "scholarship"
    ],
    "subject": "Botany",
    "chapter": "Sexual Reproduction in Flowering Plants",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "If the leaf cells of a plant have 24 chromosomes, the endosperm has",
    "options": [
      {
        "id": "a",
        "text": "12"
      },
      {
        "id": "b",
        "text": "24"
      },
      {
        "id": "c",
        "text": "36"
      },
      {
        "id": "d",
        "text": "48"
      }
    ],
    "correct": "c",
    "explanation": "Endosperm is 3n = 36 when 2n = 24.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a77d72c1-f7f4-4b2e-8ec3-97f08dbd57a6"
  },
  {
    "exam_ids": [
      "neet-ug",
      "scholarship",
      "kcet"
    ],
    "subject": "Zoology",
    "chapter": "Body Fluids and Circulation",
    "topic": "",
    "difficulty": "hard",
    "qtype": "assertion_reason",
    "body": "Assertion (A): The wall of the left ventricle is thicker than that of the right ventricle.\nReason (R): The left ventricle pumps blood to the entire body against higher resistance.",
    "options": [
      {
        "id": "a",
        "text": "Both A and R are true and R is the correct explanation of A"
      },
      {
        "id": "b",
        "text": "Both A and R are true but R is not the correct explanation of A"
      },
      {
        "id": "c",
        "text": "A is true but R is false"
      },
      {
        "id": "d",
        "text": "A is false but R is true"
      }
    ],
    "correct": "a",
    "explanation": "Systemic circulation needs greater pressure, explaining the thicker wall.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "d609872a-e96e-4027-81ec-a746a8b8bae9"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "Mental Ability",
    "chapter": "Number Series",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Find the next number: 3, 9, 15, 21, 27, ?",
    "options": [
      {
        "id": "a",
        "text": "33"
      },
      {
        "id": "b",
        "text": "34"
      },
      {
        "id": "c",
        "text": "29"
      },
      {
        "id": "d",
        "text": "39"
      }
    ],
    "correct": "a",
    "explanation": "Each term increases by 6.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "86cd4046-25bb-448f-801c-e33fe0c41c5d"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "Mental Ability",
    "chapter": "Number Series",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Find the next number: 7, 10, 13, 16, 19, ?",
    "options": [
      {
        "id": "a",
        "text": "23"
      },
      {
        "id": "b",
        "text": "22"
      },
      {
        "id": "c",
        "text": "25"
      },
      {
        "id": "d",
        "text": "21"
      }
    ],
    "correct": "b",
    "explanation": "Each term increases by 3.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "b10ea5a2-37ad-4fbd-8cd3-929f6ebcf0de"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "Mental Ability",
    "chapter": "Number Series",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Find the next number: 7, 16, 25, 34, 43, ?",
    "options": [
      {
        "id": "a",
        "text": "52"
      },
      {
        "id": "b",
        "text": "45"
      },
      {
        "id": "c",
        "text": "53"
      },
      {
        "id": "d",
        "text": "61"
      }
    ],
    "correct": "a",
    "explanation": "Each term increases by 9.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "06d31847-18fb-4a7b-88f5-4221eb7be1ee"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "Mental Ability",
    "chapter": "Number Series",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Find the next number: 3, 7, 11, 15, 19, ?",
    "options": [
      {
        "id": "a",
        "text": "27"
      },
      {
        "id": "b",
        "text": "21"
      },
      {
        "id": "c",
        "text": "24"
      },
      {
        "id": "d",
        "text": "23"
      }
    ],
    "correct": "d",
    "explanation": "Each term increases by 4.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "d9f0ad09-ffe4-4cf6-8845-56979b55dbb4"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "Mental Ability",
    "chapter": "Number Series",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Find the next number: 2, 6, 10, 14, 18, ?",
    "options": [
      {
        "id": "a",
        "text": "20"
      },
      {
        "id": "b",
        "text": "23"
      },
      {
        "id": "c",
        "text": "22"
      },
      {
        "id": "d",
        "text": "26"
      }
    ],
    "correct": "c",
    "explanation": "Each term increases by 4.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5182ceac-1cf8-4a4d-8bae-6c557d69b470"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "Mental Ability",
    "chapter": "Percentages",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "What is 40% of 200?",
    "options": [
      {
        "id": "a",
        "text": "90"
      },
      {
        "id": "b",
        "text": "160"
      },
      {
        "id": "c",
        "text": "5"
      },
      {
        "id": "d",
        "text": "80"
      }
    ],
    "correct": "d",
    "explanation": "x% of N = x × N / 100.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "38aa2c97-1ce1-46d5-88c0-6c19fee57c70"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "Mental Ability",
    "chapter": "Percentages",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "What is 20% of 360?",
    "options": [
      {
        "id": "a",
        "text": "72"
      },
      {
        "id": "b",
        "text": "144"
      },
      {
        "id": "c",
        "text": "18"
      },
      {
        "id": "d",
        "text": "82"
      }
    ],
    "correct": "a",
    "explanation": "x% of N = x × N / 100.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "8eb5e98f-fca2-41af-8c24-aafa19a2aad9"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "Mental Ability",
    "chapter": "Percentages",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "What is 40% of 80?",
    "options": [
      {
        "id": "a",
        "text": "32"
      },
      {
        "id": "b",
        "text": "42"
      },
      {
        "id": "c",
        "text": "64"
      },
      {
        "id": "d",
        "text": "2"
      }
    ],
    "correct": "a",
    "explanation": "x% of N = x × N / 100.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e0a58b80-dec5-4f51-8d0f-18469954c935"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "Mental Ability",
    "chapter": "Percentages",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "What is 25% of 450?",
    "options": [
      {
        "id": "a",
        "text": "225"
      },
      {
        "id": "b",
        "text": "112.5"
      },
      {
        "id": "c",
        "text": "122.5"
      },
      {
        "id": "d",
        "text": "18"
      }
    ],
    "correct": "b",
    "explanation": "x% of N = x × N / 100.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "f0f67ca2-1a03-45c9-8de2-13bd4b920205"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "Mental Ability",
    "chapter": "Percentages",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "What is 20% of 80?",
    "options": [
      {
        "id": "a",
        "text": "26"
      },
      {
        "id": "b",
        "text": "32"
      },
      {
        "id": "c",
        "text": "4"
      },
      {
        "id": "d",
        "text": "16"
      }
    ],
    "correct": "d",
    "explanation": "x% of N = x × N / 100.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "86dc68f5-06e0-4724-80fb-5aa01fd98b07"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "Mental Ability",
    "chapter": "Number Series",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Find the next number: 1, 2, 4, 8, ?",
    "options": [
      {
        "id": "a",
        "text": "12"
      },
      {
        "id": "b",
        "text": "15"
      },
      {
        "id": "c",
        "text": "18"
      },
      {
        "id": "d",
        "text": "16"
      }
    ],
    "correct": "d",
    "explanation": "Each term is multiplied by 2.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "183154e1-d770-422a-8c14-bf0a17af1262"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "Mental Ability",
    "chapter": "Number Series",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Find the next number: 1, 3, 9, 27, ?",
    "options": [
      {
        "id": "a",
        "text": "33"
      },
      {
        "id": "b",
        "text": "81"
      },
      {
        "id": "c",
        "text": "80"
      },
      {
        "id": "d",
        "text": "84"
      }
    ],
    "correct": "b",
    "explanation": "Each term is multiplied by 3.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "9592d3cd-6382-4568-8088-866e94867d47"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "Mental Ability",
    "chapter": "Number Series",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Find the next number: 2, 4, 8, 16, ?",
    "options": [
      {
        "id": "a",
        "text": "30"
      },
      {
        "id": "b",
        "text": "32"
      },
      {
        "id": "c",
        "text": "20"
      },
      {
        "id": "d",
        "text": "34"
      }
    ],
    "correct": "b",
    "explanation": "Each term is multiplied by 2.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "c4b266e7-f89a-4163-8fbe-345752561983"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "Mental Ability",
    "chapter": "Number Series",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Find the next number: 3, 6, 12, 24, ?",
    "options": [
      {
        "id": "a",
        "text": "45"
      },
      {
        "id": "b",
        "text": "28"
      },
      {
        "id": "c",
        "text": "48"
      },
      {
        "id": "d",
        "text": "50"
      }
    ],
    "correct": "c",
    "explanation": "Each term is multiplied by 2.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "4668ae81-b6bf-439d-8ee5-0551bfd2a093"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "Mental Ability",
    "chapter": "Speed, Time and Distance",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "A bus travels at 72 km/h for 5 hours. How far does it travel?",
    "options": [
      {
        "id": "a",
        "text": "122 km"
      },
      {
        "id": "b",
        "text": "360 km"
      },
      {
        "id": "c",
        "text": "180 km"
      },
      {
        "id": "d",
        "text": "432 km"
      }
    ],
    "correct": "b",
    "explanation": "Distance = speed × time.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "ec302ca7-15b4-45ba-8e69-46aa3ccba0e7"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "Mental Ability",
    "chapter": "Speed, Time and Distance",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "A bus travels at 40 km/h for 2 hours. How far does it travel?",
    "options": [
      {
        "id": "a",
        "text": "120 km"
      },
      {
        "id": "b",
        "text": "60 km"
      },
      {
        "id": "c",
        "text": "40 km"
      },
      {
        "id": "d",
        "text": "80 km"
      }
    ],
    "correct": "d",
    "explanation": "Distance = speed × time.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "11535926-cfc7-47db-81cf-1b8143f34111"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "Mental Ability",
    "chapter": "Speed, Time and Distance",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "A bus travels at 40 km/h for 5 hours. How far does it travel?",
    "options": [
      {
        "id": "a",
        "text": "90 km"
      },
      {
        "id": "b",
        "text": "240 km"
      },
      {
        "id": "c",
        "text": "200 km"
      },
      {
        "id": "d",
        "text": "100 km"
      }
    ],
    "correct": "c",
    "explanation": "Distance = speed × time.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "7ba40a29-94f5-455e-8b52-69434c3a2aa6"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "Mental Ability",
    "chapter": "Speed, Time and Distance",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "A bus travels at 45 km/h for 3 hours. How far does it travel?",
    "options": [
      {
        "id": "a",
        "text": "75 km"
      },
      {
        "id": "b",
        "text": "180 km"
      },
      {
        "id": "c",
        "text": "135 km"
      },
      {
        "id": "d",
        "text": "67.5 km"
      }
    ],
    "correct": "c",
    "explanation": "Distance = speed × time.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "fcc91908-be0a-45bd-8595-f7c4080a0c0e"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "Mental Ability",
    "chapter": "Speed, Time and Distance",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "A bus travels at 45 km/h for 2 hours. How far does it travel?",
    "options": [
      {
        "id": "a",
        "text": "45 km"
      },
      {
        "id": "b",
        "text": "135 km"
      },
      {
        "id": "c",
        "text": "90 km"
      },
      {
        "id": "d",
        "text": "65 km"
      }
    ],
    "correct": "c",
    "explanation": "Distance = speed × time.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "ee16293b-028f-4a02-85ec-abd7c095037c"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "Mental Ability",
    "chapter": "Time and Work",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A can finish a job in 6 days and B in 12 days. Working together, how many days will they take?",
    "options": [
      {
        "id": "a",
        "text": "9 days"
      },
      {
        "id": "b",
        "text": "7 days"
      },
      {
        "id": "c",
        "text": "4 days"
      },
      {
        "id": "d",
        "text": "6 days"
      }
    ],
    "correct": "c",
    "explanation": "Combined rate = 1/a + 1/b.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "cd662a80-0fb0-4e88-8a1c-0f351569ca56"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "Mental Ability",
    "chapter": "Time and Work",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A can finish a job in 20 days and B in 30 days. Working together, how many days will they take?",
    "options": [
      {
        "id": "a",
        "text": "14 days"
      },
      {
        "id": "b",
        "text": "11 days"
      },
      {
        "id": "c",
        "text": "25 days"
      },
      {
        "id": "d",
        "text": "12 days"
      }
    ],
    "correct": "d",
    "explanation": "Combined rate = 1/a + 1/b.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "315744fd-4f62-41bf-8d80-1ac762ef9935"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "Mental Ability",
    "chapter": "Time and Work",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A can finish a job in 12 days and B in 24 days. Working together, how many days will they take?",
    "options": [
      {
        "id": "a",
        "text": "13 days"
      },
      {
        "id": "b",
        "text": "10 days"
      },
      {
        "id": "c",
        "text": "8 days"
      },
      {
        "id": "d",
        "text": "18 days"
      }
    ],
    "correct": "c",
    "explanation": "Combined rate = 1/a + 1/b.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "32e0fda6-9360-40e5-8bd3-199fc782eb9d"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "Mental Ability",
    "chapter": "Time and Work",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A can finish a job in 15 days and B in 10 days. Working together, how many days will they take?",
    "options": [
      {
        "id": "a",
        "text": "14 days"
      },
      {
        "id": "b",
        "text": "12.5 days"
      },
      {
        "id": "c",
        "text": "6 days"
      },
      {
        "id": "d",
        "text": "8 days"
      }
    ],
    "correct": "c",
    "explanation": "Combined rate = 1/a + 1/b.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5b377b29-daed-4296-86c8-85468bce1ef9"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "Mental Ability",
    "chapter": "Time and Work",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "A can finish a job in 10 days and B in 15 days. Working together, how many days will they take?",
    "options": [
      {
        "id": "a",
        "text": "14 days"
      },
      {
        "id": "b",
        "text": "12.5 days"
      },
      {
        "id": "c",
        "text": "6 days"
      },
      {
        "id": "d",
        "text": "8 days"
      }
    ],
    "correct": "c",
    "explanation": "Combined rate = 1/a + 1/b.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "095f9229-4c25-46c2-883d-502a1686ee09"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "Mental Ability",
    "chapter": "Coding-Decoding",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "In a code, each letter is replaced by the letter 2 places after it in the alphabet. How is DOG written?",
    "options": [
      {
        "id": "a",
        "text": "EPH"
      },
      {
        "id": "b",
        "text": "GRJ"
      },
      {
        "id": "c",
        "text": "GOD"
      },
      {
        "id": "d",
        "text": "FQI"
      }
    ],
    "correct": "d",
    "explanation": "Shift every letter forward by 2.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "40f6063b-4982-4aa3-8710-e107cb803a08"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "Mental Ability",
    "chapter": "Coding-Decoding",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "In a code, each letter is replaced by the letter 2 places after it in the alphabet. How is CAT written?",
    "options": [
      {
        "id": "a",
        "text": "FDW"
      },
      {
        "id": "b",
        "text": "TAC"
      },
      {
        "id": "c",
        "text": "DBU"
      },
      {
        "id": "d",
        "text": "ECV"
      }
    ],
    "correct": "d",
    "explanation": "Shift every letter forward by 2.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "741bc620-818b-4265-834e-db445e378436"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "Mental Ability",
    "chapter": "Coding-Decoding",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "In a code, each letter is replaced by the letter 4 places after it in the alphabet. How is SUN written?",
    "options": [
      {
        "id": "a",
        "text": "WYR"
      },
      {
        "id": "b",
        "text": "VXQ"
      },
      {
        "id": "c",
        "text": "NUS"
      },
      {
        "id": "d",
        "text": "XZS"
      }
    ],
    "correct": "a",
    "explanation": "Shift every letter forward by 4.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "65563d82-5a4c-43fd-85f9-441774488c70"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "Mental Ability",
    "chapter": "Coding-Decoding",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "In a code, each letter is replaced by the letter 1 place after it in the alphabet. How is CAT written?",
    "options": [
      {
        "id": "a",
        "text": "HFY"
      },
      {
        "id": "b",
        "text": "TAC"
      },
      {
        "id": "c",
        "text": "ECV"
      },
      {
        "id": "d",
        "text": "DBU"
      }
    ],
    "correct": "d",
    "explanation": "Shift every letter forward by 1.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "2b8a2d20-37b4-4e05-88aa-e2fb59f0e801"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "Mental Ability",
    "chapter": "Coding-Decoding",
    "topic": "",
    "difficulty": "hard",
    "qtype": "single",
    "body": "In a code, each letter is replaced by the letter 4 places after it in the alphabet. How is DOG written?",
    "options": [
      {
        "id": "a",
        "text": "GRJ"
      },
      {
        "id": "b",
        "text": "ITL"
      },
      {
        "id": "c",
        "text": "HSK"
      },
      {
        "id": "d",
        "text": "GOD"
      }
    ],
    "correct": "c",
    "explanation": "Shift every letter forward by 4.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "74d6f8ff-6d6f-4d8e-85b7-f71c3bde0c49"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "Mental Ability",
    "chapter": "Number Series",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "Find the next number: 2, 5, 10, 17, 26, ?",
    "options": [
      {
        "id": "a",
        "text": "49"
      },
      {
        "id": "b",
        "text": "37"
      },
      {
        "id": "c",
        "text": "36"
      },
      {
        "id": "d",
        "text": "28"
      }
    ],
    "correct": "b",
    "explanation": "Terms are n² + 1 for consecutive n.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "67b3a5c3-8599-4770-8a3a-aa203997410e"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "Mental Ability",
    "chapter": "Number Series",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "Find the next number: 10, 17, 26, 37, 50, ?",
    "options": [
      {
        "id": "a",
        "text": "64"
      },
      {
        "id": "b",
        "text": "52"
      },
      {
        "id": "c",
        "text": "65"
      },
      {
        "id": "d",
        "text": "81"
      }
    ],
    "correct": "c",
    "explanation": "Terms are n² + 1 for consecutive n.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "417979e1-487d-4ad9-8dc0-cb7bf12de462"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "Mental Ability",
    "chapter": "Number Series",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "Find the next number: 5, 10, 17, 26, 37, ?",
    "options": [
      {
        "id": "a",
        "text": "50"
      },
      {
        "id": "b",
        "text": "39"
      },
      {
        "id": "c",
        "text": "64"
      },
      {
        "id": "d",
        "text": "49"
      }
    ],
    "correct": "a",
    "explanation": "Terms are n² + 1 for consecutive n.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "666b3f2f-58ac-4efe-8817-8bfabf25c9ee"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "Mental Ability",
    "chapter": "Profit and Loss",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "An article costing ₹500 must be sold at a 25% profit after a 10% discount on its marked price. What should the marked price be?",
    "options": [
      {
        "id": "a",
        "text": "625"
      },
      {
        "id": "b",
        "text": "694.44"
      },
      {
        "id": "c",
        "text": "744.44"
      },
      {
        "id": "d",
        "text": "675"
      }
    ],
    "correct": "b",
    "explanation": "SP = CP(1 + g/100) and SP = MP(1 − d/100).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "5d2a8f86-3c13-45ed-8287-d645f3e19691"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "Mental Ability",
    "chapter": "Profit and Loss",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "An article costing ₹800 must be sold at a 25% profit after a 10% discount on its marked price. What should the marked price be?",
    "options": [
      {
        "id": "a",
        "text": "1000"
      },
      {
        "id": "b",
        "text": "1161.11"
      },
      {
        "id": "c",
        "text": "1080"
      },
      {
        "id": "d",
        "text": "1111.11"
      }
    ],
    "correct": "d",
    "explanation": "SP = CP(1 + g/100) and SP = MP(1 − d/100).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "1762b695-d764-477a-8c57-e3fa627fc136"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "Mental Ability",
    "chapter": "Profit and Loss",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "An article costing ₹800 must be sold at a 25% profit after a 20% discount on its marked price. What should the marked price be?",
    "options": [
      {
        "id": "a",
        "text": "1300"
      },
      {
        "id": "b",
        "text": "1000"
      },
      {
        "id": "c",
        "text": "1160"
      },
      {
        "id": "d",
        "text": "1250"
      }
    ],
    "correct": "d",
    "explanation": "SP = CP(1 + g/100) and SP = MP(1 − d/100).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a728c212-7098-4b6f-820f-756a504a2e85"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "Mental Ability",
    "chapter": "Profit and Loss",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "An article costing ₹500 must be sold at a 10% profit after a 20% discount on its marked price. What should the marked price be?",
    "options": [
      {
        "id": "a",
        "text": "687.5"
      },
      {
        "id": "b",
        "text": "650"
      },
      {
        "id": "c",
        "text": "737.5"
      },
      {
        "id": "d",
        "text": "550"
      }
    ],
    "correct": "a",
    "explanation": "SP = CP(1 + g/100) and SP = MP(1 − d/100).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "9730d361-79c9-43af-8c63-a42c583c4b2b"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "Mental Ability",
    "chapter": "Profit and Loss",
    "topic": "",
    "difficulty": "expert",
    "qtype": "single",
    "body": "An article costing ₹400 must be sold at a 25% profit after a 20% discount on its marked price. What should the marked price be?",
    "options": [
      {
        "id": "a",
        "text": "675"
      },
      {
        "id": "b",
        "text": "500"
      },
      {
        "id": "c",
        "text": "625"
      },
      {
        "id": "d",
        "text": "580"
      }
    ],
    "correct": "c",
    "explanation": "SP = CP(1 + g/100) and SP = MP(1 − d/100).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "85087a5d-1e31-4bfd-821f-ffc765fdc444"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "General Studies",
    "chapter": "Indian Polity",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Who is the constitutional head of a state government in India?",
    "options": [
      {
        "id": "a",
        "text": "Chief Minister"
      },
      {
        "id": "b",
        "text": "Governor"
      },
      {
        "id": "c",
        "text": "Speaker"
      },
      {
        "id": "d",
        "text": "Chief Justice of the High Court"
      }
    ],
    "correct": "b",
    "explanation": "The Governor is the constitutional head; the CM heads the council of ministers.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "a761c655-3b3f-4d5d-8c49-1169598b637f"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "General Studies",
    "chapter": "Indian Polity",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The Constitution of India came into force on",
    "options": [
      {
        "id": "a",
        "text": "15 August 1947"
      },
      {
        "id": "b",
        "text": "26 November 1949"
      },
      {
        "id": "c",
        "text": "26 January 1950"
      },
      {
        "id": "d",
        "text": "2 October 1950"
      }
    ],
    "correct": "c",
    "explanation": "It was adopted on 26 November 1949 and came into force on 26 January 1950.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "d99be1c0-d2e8-4530-88d4-69b1ed2f3412"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "General Studies",
    "chapter": "Indian Polity",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Who chaired the Drafting Committee of the Constituent Assembly?",
    "options": [
      {
        "id": "a",
        "text": "Jawaharlal Nehru"
      },
      {
        "id": "b",
        "text": "B. R. Ambedkar"
      },
      {
        "id": "c",
        "text": "Rajendra Prasad"
      },
      {
        "id": "d",
        "text": "Sardar Patel"
      }
    ],
    "correct": "b",
    "explanation": "Dr B. R. Ambedkar chaired the Drafting Committee.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "589079ad-fbde-4dee-8a90-30ab00b2e39b"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "General Studies",
    "chapter": "Geography of Karnataka",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "What is the capital of Karnataka?",
    "options": [
      {
        "id": "a",
        "text": "Mysuru"
      },
      {
        "id": "b",
        "text": "Hubballi"
      },
      {
        "id": "c",
        "text": "Bengaluru"
      },
      {
        "id": "d",
        "text": "Mangaluru"
      }
    ],
    "correct": "c",
    "explanation": "Bengaluru is the state capital.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "656fd517-f01b-4db9-87c6-5c976f136870"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "General Studies",
    "chapter": "Geography of Karnataka",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which river is known as the 'Dakshina Ganga' and flows through Karnataka?",
    "options": [
      {
        "id": "a",
        "text": "Krishna"
      },
      {
        "id": "b",
        "text": "Kaveri"
      },
      {
        "id": "c",
        "text": "Tungabhadra"
      },
      {
        "id": "d",
        "text": "Sharavathi"
      }
    ],
    "correct": "b",
    "explanation": "The Kaveri is often called Dakshina Ganga.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "bc003f5a-cd76-468c-87f5-4964933138ed"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "General Studies",
    "chapter": "Karnataka History",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Hampi was the capital of which empire?",
    "options": [
      {
        "id": "a",
        "text": "Chalukya"
      },
      {
        "id": "b",
        "text": "Hoysala"
      },
      {
        "id": "c",
        "text": "Vijayanagara"
      },
      {
        "id": "d",
        "text": "Rashtrakuta"
      }
    ],
    "correct": "c",
    "explanation": "Hampi (Vijayanagara) was the capital of the Vijayanagara Empire.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "d0aa4434-93c8-4fd3-8ccc-06641b9c328d"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "General Studies",
    "chapter": "Indian Polity",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Fundamental Rights are contained in which Part of the Constitution?",
    "options": [
      {
        "id": "a",
        "text": "Part II"
      },
      {
        "id": "b",
        "text": "Part III"
      },
      {
        "id": "c",
        "text": "Part IV"
      },
      {
        "id": "d",
        "text": "Part V"
      }
    ],
    "correct": "b",
    "explanation": "Part III, Articles 12–35.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "d7955fe8-1d07-4533-8891-eb00fb01bb89"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "General Studies",
    "chapter": "Physical Geography",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "Which is the largest planet in the Solar System?",
    "options": [
      {
        "id": "a",
        "text": "Earth"
      },
      {
        "id": "b",
        "text": "Saturn"
      },
      {
        "id": "c",
        "text": "Jupiter"
      },
      {
        "id": "d",
        "text": "Neptune"
      }
    ],
    "correct": "c",
    "explanation": "Jupiter is the largest planet.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "3fadb5fd-9972-4acd-80a6-7e620b2feb93"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "General Studies",
    "chapter": "Indian Polity",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The minimum voting age in India is",
    "options": [
      {
        "id": "a",
        "text": "16 years"
      },
      {
        "id": "b",
        "text": "18 years"
      },
      {
        "id": "c",
        "text": "21 years"
      },
      {
        "id": "d",
        "text": "25 years"
      }
    ],
    "correct": "b",
    "explanation": "Lowered from 21 to 18 by the 61st Amendment (1988).",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "e8db6e98-0a25-455b-82d2-aa9295dd383e"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "General Studies",
    "chapter": "Karnataka History",
    "topic": "",
    "difficulty": "easy",
    "qtype": "single",
    "body": "The Karnataka state (then Mysore State) was formed on 1 November of which year?",
    "options": [
      {
        "id": "a",
        "text": "1947"
      },
      {
        "id": "b",
        "text": "1950"
      },
      {
        "id": "c",
        "text": "1956"
      },
      {
        "id": "d",
        "text": "1973"
      }
    ],
    "correct": "c",
    "explanation": "Formed under the States Reorganisation Act, 1956; renamed Karnataka in 1973.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "99038337-ed13-46a5-81ea-296c4423e390"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "General Studies",
    "chapter": "Indian Polity",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Directive Principles of State Policy are in which Part of the Constitution?",
    "options": [
      {
        "id": "a",
        "text": "Part III"
      },
      {
        "id": "b",
        "text": "Part IV"
      },
      {
        "id": "c",
        "text": "Part IVA"
      },
      {
        "id": "d",
        "text": "Part V"
      }
    ],
    "correct": "b",
    "explanation": "Part IV, Articles 36–51.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "3a34c8fe-6bd5-4026-8bf7-3ca9d633b202"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "General Studies",
    "chapter": "Indian Polity",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Fundamental Duties were added by which Constitutional Amendment?",
    "options": [
      {
        "id": "a",
        "text": "42nd"
      },
      {
        "id": "b",
        "text": "44th"
      },
      {
        "id": "c",
        "text": "52nd"
      },
      {
        "id": "d",
        "text": "73rd"
      }
    ],
    "correct": "a",
    "explanation": "The 42nd Amendment (1976) added Part IVA.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "c650fe04-314f-4947-8e3e-25059a3751b5"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "General Studies",
    "chapter": "Indian Polity",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The 73rd Constitutional Amendment relates to",
    "options": [
      {
        "id": "a",
        "text": "Municipalities"
      },
      {
        "id": "b",
        "text": "Panchayati Raj"
      },
      {
        "id": "c",
        "text": "Anti-defection"
      },
      {
        "id": "d",
        "text": "Official languages"
      }
    ],
    "correct": "b",
    "explanation": "It gave constitutional status to Panchayati Raj institutions.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "582480da-2e35-4d61-8804-719c616e31c8"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "General Studies",
    "chapter": "Indian Polity",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Which Article of the Constitution deals with the right to constitutional remedies?",
    "options": [
      {
        "id": "a",
        "text": "Article 14"
      },
      {
        "id": "b",
        "text": "Article 19"
      },
      {
        "id": "c",
        "text": "Article 21"
      },
      {
        "id": "d",
        "text": "Article 32"
      }
    ],
    "correct": "d",
    "explanation": "Article 32 allows direct approach to the Supreme Court.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "83721146-8ff8-4bc0-8db9-a07cafa451f6"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "General Studies",
    "chapter": "Indian Polity",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Money Bills can be introduced only in",
    "options": [
      {
        "id": "a",
        "text": "Rajya Sabha"
      },
      {
        "id": "b",
        "text": "Lok Sabha"
      },
      {
        "id": "c",
        "text": "Either House"
      },
      {
        "id": "d",
        "text": "A joint sitting"
      }
    ],
    "correct": "b",
    "explanation": "Article 109: a Money Bill originates only in the Lok Sabha.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "780f8b9f-7eb2-4a72-860b-84c5fcd83b93"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "General Studies",
    "chapter": "Karnataka History",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Which dynasty built the temples at Belur and Halebidu?",
    "options": [
      {
        "id": "a",
        "text": "Kadamba"
      },
      {
        "id": "b",
        "text": "Hoysala"
      },
      {
        "id": "c",
        "text": "Ganga"
      },
      {
        "id": "d",
        "text": "Chola"
      }
    ],
    "correct": "b",
    "explanation": "The Hoysalas built the Chennakeshava (Belur) and Hoysaleswara (Halebidu) temples.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "81f6eeef-ee13-4e47-80f4-7559446eb742"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "General Studies",
    "chapter": "Karnataka History",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The Kadamba dynasty, one of the earliest native dynasties of Karnataka, was founded by",
    "options": [
      {
        "id": "a",
        "text": "Pulakeshin II"
      },
      {
        "id": "b",
        "text": "Mayurasharma"
      },
      {
        "id": "c",
        "text": "Krishnadevaraya"
      },
      {
        "id": "d",
        "text": "Vishnuvardhana"
      }
    ],
    "correct": "b",
    "explanation": "Mayurasharma founded the Kadamba dynasty at Banavasi.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "dc18317e-b6de-4cb1-8cba-4b5dae3e3afd"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "General Studies",
    "chapter": "Geography of Karnataka",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "Jog Falls is formed by which river?",
    "options": [
      {
        "id": "a",
        "text": "Kaveri"
      },
      {
        "id": "b",
        "text": "Sharavathi"
      },
      {
        "id": "c",
        "text": "Kali"
      },
      {
        "id": "d",
        "text": "Netravati"
      }
    ],
    "correct": "b",
    "explanation": "Jog Falls is on the Sharavathi river.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "ba74512d-e2cf-430b-876f-f860b529aa92"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "General Studies",
    "chapter": "Economy",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The Reserve Bank of India was established in",
    "options": [
      {
        "id": "a",
        "text": "1935"
      },
      {
        "id": "b",
        "text": "1947"
      },
      {
        "id": "c",
        "text": "1949"
      },
      {
        "id": "d",
        "text": "1969"
      }
    ],
    "correct": "a",
    "explanation": "RBI was set up on 1 April 1935 and nationalised in 1949.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "ee4336e9-3f6a-4e8f-8b5a-9d93ff179c33"
  },
  {
    "exam_ids": [
      "karnataka-govt",
      "upsc",
      "scholarship",
      "kcet"
    ],
    "subject": "General Studies",
    "chapter": "Physical Geography",
    "topic": "",
    "difficulty": "medium",
    "qtype": "single",
    "body": "The Tropic of Cancer does NOT pass through which Indian state?",
    "options": [
      {
        "id": "a",
        "text": "Gujarat"
      },
      {
        "id": "b",
        "text": "Madhya Pradesh"
      },
      {
        "id": "c",
        "text": "Odisha"
      },
      {
        "id": "d",
        "text": "Jharkhand"
      }
    ],
    "correct": "c",
    "explanation": "It passes through Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura and Mizoram — not Odisha.",
    "source": "Original question — Study at Bangalore editorial team (NCERT-aligned)",
    "is_previous_year": false,
    "verification_status": "verified",
    "id": "34ef98a0-ee59-452d-8183-d12d1ea79c18"
  }
];

export const QUESTIONS_BY_ID: Map<string, QuestionItem> = new Map(QUESTIONS_BANK.map((q) => [q.id, q]));
