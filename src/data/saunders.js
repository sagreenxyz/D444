export function slugify(value) {
	return String(value)
		.normalize('NFKD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '');
}

export function topicName(topic) {
	return topic.label.split(/\s[\u2013\u2014-]\s|\s\(/)[0];
}

export function topicSlug(topic) {
	return slugify(topicName(topic));
}

const oncologyBreakdown = [
	{ name: 'Breast Cancer', count: 22, questions: 'Q2, 11, 19, 23, 24, 27, 29, 44, 49, 51, 55, 58, 59, 78, 81, 83, 84, 103, 104, 107, 108, 128', notes: 'Risk factors, mastectomy care/positioning/lymphedema prevention, breast self-exam, chemotherapy side effects (alopecia, myelosuppression, stomatitis, extravasation), and emotional response to diagnosis.' },
	{ name: 'Colorectal/Bowel Cancer', count: 12, questions: 'Q17, 18, 20, 68, 86, 87, 88, 92, 101, 119, 120, 127', notes: 'Risk factors, screening, tumor complications, colostomy function, and abdominal-perineal resection care.' },
	{ name: 'Bladder Cancer', count: 12, questions: 'Q34, 36, 73, 74, 80, 90, 94, 105, 111, 117, 121, 122', notes: 'Risk factors, signs/symptoms, intravesical chemotherapy, urinary diversions (ileal conduit, Kock pouch, ureterostomy), and radiation complications.' },
	{ name: 'Laryngeal/Head & Neck Cancer', count: 11, questions: 'Q3, 21, 35, 54, 64, 67, 69, 77, 82, 96, 100', notes: 'Laryngectomy/stoma care, artificial larynx use, risk factors, radiation side effects, and warning signs.' },
	{ name: 'Cervical & Gynecologic Cancer', count: 12, questions: 'Q22, 25, 26, 31, 45, 46, 47, 48, 50, 60, 61, 65', notes: 'Radiation implants, cryosurgery, vulvectomy, hysterectomy, staging, and risk factors.' },
	{ name: 'Skin Cancer', count: 11, questions: 'Q1, 5, 6, 7, 8, 9, 10, 12, 13, 38, 39', notes: 'Biopsies, cryosurgery/cryotherapy, melanoma vs. squamous cell characteristics, and risk factors.' },
	{ name: 'Leukemia', count: 9, questions: 'Q30, 37, 41, 43, 57, 76, 79, 106, 131', notes: 'Diagnosis, neutropenic/bleeding precautions, and chemotherapy-related complications.' },
	{ name: 'Multiple Myeloma', count: 5, questions: 'Q15, 16, 112, 113, 118', notes: 'Labs, priority interventions, and assessment findings.' },
	{ name: 'Testicular Cancer', count: 5, questions: 'Q53, 56, 63, 66, 102', notes: 'Self-exam, risk factors, signs, and post-orchidectomy concerns.' },
	{ name: 'Oncologic Emergencies', count: 5, questions: 'Q89, 116, 123, 124, 125', notes: 'Superior vena cava syndrome, SIADH, and hypercalcemia.' },
	{ name: 'Prostate Cancer', count: 4, questions: 'Q14, 28, 71, 72', notes: 'Biopsy, prostatectomy, and hormone therapy.' },
	{ name: 'Lung Cancer', count: 4, questions: 'Q52, 97, 98, 99', notes: 'Early symptoms, radiation care, and post-lobectomy/pneumonectomy care.' },
	{ name: "Hodgkin's Lymphoma", count: 4, questions: 'Q32, 40, 62, 114', notes: 'Staging and assessment findings.' },
	{ name: 'General Chemotherapy/Antineoplastic Care', count: 5, questions: 'Q109, 110, 126, 129, 130', notes: 'Nadir, bleeding precautions, BSA dosing, and general medication teaching (not tied to a specific cancer type).' },
	{ name: 'Liver Cancer', count: 2, questions: 'Q4, 91', notes: 'Albumin levels and chemotherapy-related taste changes.' },
	{ name: 'Gastric Cancer', count: 2, questions: 'Q42, 75', notes: 'Cachexia and dietary risk factors.' },
	{ name: 'General Cancer Concepts', count: 2, questions: 'Q85, 93', notes: 'Cancer-prevention diet and general warning signs.' },
	{ name: 'Ovarian Cancer', count: 3, questions: 'Q70, 95, 115', notes: 'Debulking surgery and signs/symptoms.' },
	{ name: 'Thyroid Cancer', count: 1, questions: 'Q33', notes: 'Radioactive iodine therapy precautions.' },
];

const earBreakdown = [
	{ name: "Ménière's Disease", count: 10, questions: 'Q4, 13, 15, 16, 26, 31, 32, 34, 35, 41', notes: 'Vertigo management, priority safety interventions, characteristic symptoms (dizziness, tinnitus), acute-attack medication review, and low-sodium dietary teaching.' },
	{ name: 'Otitis Media/Mastoiditis', count: 6, questions: 'Q1, 12, 14, 25, 27, 37', notes: 'Tympanic membrane findings, myringotomy purpose, mastoidectomy priority care, and infection risk factors.' },
	{ name: 'General Hearing-Impaired Communication Techniques', count: 4, questions: 'Q5, 8, 21, 42', notes: 'Best practices for speaking with hearing-impaired or deaf clients (normal volume, facing the client, etc.).' },
	{ name: 'Presbycusis (age-related hearing loss)', count: 3, questions: 'Q3, 10, 40', notes: 'Definition/type of hearing loss and appropriate communication approach.' },
	{ name: 'Hearing Aids', count: 3, questions: 'Q6, 23, 28', notes: 'Care, insertion, and troubleshooting (e.g., whistling).' },
	{ name: 'Otosclerosis/Fenestration Surgery', count: 3, questions: 'Q11, 17, 30', notes: 'Postoperative home-care instructions after ear surgery.' },
	{ name: 'Foreign Body in the Ear', count: 2, questions: 'Q9, 29', notes: 'Emergency management of insects lodged in the ear canal.' },
	{ name: 'Inner Ear Disorders (general)', count: 2, questions: 'Q2, 38', notes: 'Most common complaint (tinnitus) associated with inner ear problems.' },
	{ name: 'Vestibular/Balance Disorders', count: 2, questions: 'Q19, 33', notes: 'Caloric testing and semicircular canal dysfunction.' },
	{ name: 'Cerumen Impaction/Ear Irrigation', count: 1, questions: 'Q7', notes: 'Proper irrigation technique.' },
	{ name: 'Tympanic Membrane Perforation', count: 1, questions: 'Q18', notes: 'Expected otoscopic findings.' },
	{ name: 'Cochlear Implants', count: 1, questions: 'Q20', notes: 'Contraindications for the procedure.' },
	{ name: 'Noise-Induced Hearing Loss Prevention', count: 1, questions: 'Q22', notes: 'Ear protection education.' },
	{ name: 'Motion Sickness', count: 1, questions: 'Q24', notes: 'Timing of preventive medication.' },
	{ name: 'Acoustic Neuroma', count: 1, questions: 'Q39', notes: 'Cranial nerve complication after craniotomy.' },
	{ name: 'Cranial Nerve VIII (Cochlear) Dysfunction', count: 1, questions: 'Q36', notes: 'Adaptive device (hearing aid) planning.' },
];

const eyeBreakdown = [
	{ name: 'Glaucoma', count: 5, questions: 'Q1, 2, 7, 10, 14', notes: 'Risk factors, lifelong medication teaching, primary open-angle glaucoma findings, and tonometry/intraocular pressure interpretation.' },
	{ name: 'Cataracts', count: 5, questions: 'Q3, 4, 9, 12, 13', notes: 'Early clinical manifestations (blurred vision) and postoperative home-care teaching after cataract extraction with intraocular lens implantation (positioning, activity restrictions, signs to report).' },
	{ name: 'Visual Acuity Testing (Snellen chart)', count: 3, questions: 'Q5, 15, 16', notes: 'Correct testing procedure and appropriate nursing action for a 20/60 result.' },
	{ name: 'Retinal Detachment', count: 2, questions: 'Q6, 11', notes: 'Preoperative positioning/prescriptions and the classic "curtain falling" symptom.' },
	{ name: 'Enucleation/Eye Surgery Complications', count: 1, questions: 'Q8', notes: 'Postoperative assessment of bloody drainage after eye removal surgery.' },
];

const giBreakdown = [
	{ name: 'Peptic Ulcer Disease & Gastritis', count: 28, questions: '', notes: 'Ulcer complications, H. pylori, medication management, dietary teaching.' },
	{ name: 'Cirrhosis, Liver Failure & Portal Hypertension', count: 27, questions: '', notes: 'Ascites, hepatic encephalopathy, esophageal varices, Sengstaken-Blakemore tube care.' },
	{ name: 'Pancreatitis, Acute & Chronic', count: 25, questions: '', notes: 'Pain management, lab findings, dietary restrictions, complications.' },
	{ name: 'Viral Hepatitis A–E', count: 22, questions: '', notes: 'Transmission routes, precautions, lab values, recovery teaching.' },
	{ name: 'Ostomy Care', count: 21, questions: '', notes: 'Colostomy/ileostomy management, stoma assessment, patient teaching.' },
	{ name: 'GI Diagnostic Procedures & Tube Management', count: 20, questions: '', notes: 'NG tubes, enteral feeding, endoscopy/colonoscopy prep and care.' },
	{ name: 'GERD, Hiatal Hernia, Achalasia & Esophageal Disorders', count: 19, questions: '', notes: 'Symptom management, positioning, dietary modifications.' },
	{ name: 'Cholecystitis/Cholelithiasis', count: 17, questions: '', notes: 'Gallbladder disease, post-op cholecystectomy care.' },
	{ name: 'Inflammatory Bowel Disease', count: 17, questions: '', notes: "Crohn's disease and ulcerative colitis, flare management, surgical interventions." },
	{ name: 'Appendicitis', count: 16, questions: '', notes: 'Presentation, pre/post-op care, perforation risk.' },
	{ name: 'Bariatric/Gastric Surgery & Dumping Syndrome', count: 15, questions: '', notes: 'Post-surgical diet, dumping syndrome prevention/management.' },
	{ name: 'Bowel Obstruction', count: 11, questions: '', notes: 'Mechanical vs. paralytic ileus, nursing management.' },
	{ name: 'Pediatric GI Disorders', count: 10, questions: 'Q304–317', notes: "Hirschsprung's disease, pyloric stenosis, intussusception, imperforate anus, esophageal atresia, cleft lip." },
	{ name: 'Peritonitis', count: 9, questions: '', notes: 'Signs/symptoms, complications of perforation.' },
	{ name: 'Irritable Bowel Syndrome', count: 9, questions: '', notes: 'Dietary triggers, symptom management.' },
	{ name: 'Clostridium difficile Infection', count: 8, questions: '', notes: 'Isolation precautions, treatment.' },
	{ name: 'Hemorrhoids/Anal Fissure/Fistula', count: 7, questions: '', notes: 'Conservative and surgical management.' },
	{ name: 'Fluid & Electrolyte Imbalances', count: 6, questions: 'Q160–166', notes: 'Hypernatremia, hyperkalemia related to GI losses.' },
	{ name: 'Diverticular Disease', count: 6, questions: '', notes: 'Diverticulitis flare management, dietary teaching.' },
	{ name: 'Nonalcoholic Fatty Liver Disease/Liver Biopsy', count: 6, questions: '', notes: 'Risk factors, biopsy precautions.' },
	{ name: 'Abdominal Trauma', count: 5, questions: 'Q222–226', notes: 'Motor vehicle accident-related injuries.' },
	{ name: 'GI Bleeding', count: 5, questions: '', notes: 'Upper/lower GI bleed, Mallory-Weiss tear.' },
	{ name: 'Celiac Disease', count: 5, questions: '', notes: 'Gluten-free diet teaching.' },
	{ name: 'Obesity/Metabolic Syndrome', count: 5, questions: 'Q272–276', notes: 'Risk factors, management.' },
	{ name: 'Hernias', count: 4, questions: '', notes: 'Inguinal/umbilical, pre/post-op care.' },
];
const giNote = "Counts are approximate groupings from reviewing every question's stem and answer choices; exact question numbers were tracked only for a few ranges (Pediatric GI, Fluid & Electrolytes, Abdominal Trauma, Obesity/Metabolic Syndrome). The bank also contains many duplicate/near-duplicate questions, which can inflate some category counts.";

const immuneBreakdown = [
	{ name: 'HIV/AIDS – Opportunistic Infections', count: 14, questions: 'Q3, Q14, Q15, Q52, Q53, Q54, Q60, Q61, Q62, Q64, Q66, Q73, Q78, Q98', notes: "Kaposi's sarcoma, Pneumocystis jiroveci, histoplasmosis, candidiasis/thrush, herpes simplex, cryptococcosis, toxoplasmosis encephalitis." },
	{ name: 'Basic Immunology Concepts', count: 18, questions: 'Q20–25, Q28–35, Q72, Q74–76', notes: "Innate vs. specific immunity, B/T lymphocyte function, phagocytosis, interferons, immune organs (liver/Kupffer cells, Peyer's patches), immune response phases." },
	{ name: 'Systemic Lupus Erythematosus (incl. Discoid Lupus)', count: 10, questions: 'Q12, Q37, Q38, Q42, Q43, Q44, Q58, Q59, Q77, Q89', notes: 'Butterfly rash, CBC findings, LE cell prep, home care/fatigue management.' },
	{ name: 'HIV/AIDS – Testing & Diagnosis', count: 10, questions: 'Q13, Q40, Q45, Q46, Q47, Q48, Q49, Q50, Q51, Q86', notes: 'ELISA/Western blot, CD4+ counts, home test kits.' },
	{ name: 'Lyme Disease', count: 9, questions: 'Q2, Q7, Q8, Q9, Q10, Q11, Q65, Q95, Q97', notes: 'Stages I–III, tick removal/testing, antibiotic treatment.' },
	{ name: 'Latex Allergy', count: 6, questions: 'Q18, Q67, Q68, Q93, Q94, Q100', notes: 'Risk populations, cross-reactive foods, safe supplies/equipment.' },
	{ name: 'Pediatric HIV/AIDS', count: 5, questions: 'Q83, Q84, Q85, Q87, Q88', notes: 'Opportunistic infections in children, immunizations, pain management.' },
	{ name: 'Anaphylaxis & Allergic Reactions', count: 4, questions: 'Q69, Q82, Q92, Q99', notes: 'Anaphylaxis management, bee sting, skin testing.' },
	{ name: 'HIV/AIDS – Priority Care / Risk for Infection', count: 3, questions: 'Q1, Q70, Q91', notes: 'Priority nursing diagnosis for immunodeficiency.' },
	{ name: 'HIV/AIDS – Antiretroviral Medication Management', count: 3, questions: 'Q4, Q6, Q41', notes: 'Ganciclovir, didanosine, zidovudine adverse effects.' },
	{ name: 'HIV/AIDS – Symptom Management', count: 3, questions: 'Q16, Q17, Q63', notes: 'Night sweats, nausea/vomiting, fatigue.' },
	{ name: 'Rheumatoid Arthritis', count: 3, questions: 'Q36, Q39, Q55', notes: 'Rheumatoid factor, early manifestations.' },
	{ name: 'Organ Transplant Rejection', count: 2, questions: 'Q5, Q71', notes: 'Acute renal/kidney graft rejection signs.' },
	{ name: 'Antibody Classes (Immunoglobulins)', count: 2, questions: 'Q26, Q27', notes: 'IgG, IgM characteristics.' },
	{ name: 'Erythrocyte Sedimentation Rate (Inflammation Marker)', count: 2, questions: 'Q56, Q57', notes: 'Purpose and interpretation.' },
	{ name: 'Antibiotic Therapy & Resistance', count: 2, questions: 'Q80, Q81', notes: 'Bactericidal action, resistance development.' },
	{ name: "Goodpasture's Syndrome", count: 1, questions: 'Q19', notes: '' },
	{ name: 'Scleroderma', count: 1, questions: 'Q96', notes: '' },
	{ name: 'Pemphigus', count: 1, questions: 'Q90', notes: '' },
	{ name: 'General Flu-like Symptom Management', count: 1, questions: 'Q79', notes: '' },
];

const integumentaryBreakdown = [
	{ name: 'Pressure Injuries/Ulcers', count: 11, questions: 'Q5, Q12, Q28, Q46, Q52, Q56, Q78, Q80, Q92, Q93, Q109', notes: 'Staging, prevention, positioning, bony prominences.' },
	{ name: 'Burn Fluid Resuscitation & Emergent Phase Care', count: 8, questions: 'Q8, Q9, Q26, Q38, Q72, Q73, Q91, Q94', notes: 'Parkland formula, IV fluids, vital signs, priority actions.' },
	{ name: 'Cosmetic/Reconstructive Surgery', count: 8, questions: 'Q30, Q39, Q40, Q41, Q42, Q43, Q44, Q45', notes: 'Blepharoplasty, rhinoplasty, dermabrasion, laser nevus removal.' },
	{ name: 'Psoriasis', count: 9, questions: 'Q2, Q24, Q36, Q47, Q57, Q61, Q69, Q71, Q104', notes: 'Lesion characteristics, treatment, UV therapy, psychosocial care.' },
	{ name: 'Cellulitis', count: 6, questions: 'Q1, Q19, Q20, Q70, Q75, Q103', notes: 'Assessment findings, warm compress treatment.' },
	{ name: 'General Skin Assessment & Terminology', count: 6, questions: 'Q53, Q54, Q55, Q58, Q59, Q77', notes: 'Erythema, ecchymosis, spider/cherry angiomas, paronychia, reticular lesions.' },
	{ name: 'Burn Injury Classification & Rule of Nines', count: 5, questions: 'Q6, Q22, Q25, Q31, Q81', notes: 'TBSA calculation, burn depth.' },
	{ name: 'Dry Skin & Pruritus Management', count: 5, questions: 'Q17, Q29, Q35, Q76, Q84', notes: 'Hydration, emollients, post-cast skin care.' },
	{ name: 'Skin Grafting (Autograft) Care', count: 4, questions: 'Q10, Q60, Q82, Q88', notes: 'Immobilization, promoting graft "take".' },
	{ name: 'Scabies', count: 4, questions: 'Q11, Q67, Q95, Q96', notes: 'Assessment findings, permethrin treatment.' },
	{ name: 'Diagnostic Procedures', count: 4, questions: 'Q15, Q16, Q64, Q65', notes: "Wood's lamp, patch testing, punch biopsy." },
	{ name: 'Herpes Zoster (Shingles)', count: 3, questions: 'Q21, Q68, Q105', notes: 'Vesicular lesions, diagnostic confirmation.' },
	{ name: 'Escharotomy/Fasciotomy & Circumferential Burns', count: 3, questions: 'Q7, Q50, Q83', notes: 'Compartment syndrome, wound care.' },
	{ name: 'Contact Dermatitis/Allergic Reactions', count: 3, questions: 'Q49, Q99, Q102', notes: 'Eczema, poison ivy, topical corticosteroids.' },
	{ name: 'Acne', count: 3, questions: 'Q48, Q62, Q74', notes: 'Pathophysiology, skin care instructions.' },
	{ name: 'Skin Cancer (Basal Cell Carcinoma, Melanoma)', count: 3, questions: 'Q3, Q106, Q107', notes: 'Lesion characteristics.' },
	{ name: 'Frostbite', count: 3, questions: 'Q4, Q66, Q108', notes: 'Assessment, rewarming treatment.' },
	{ name: 'Non-burn Wound Care', count: 3, questions: 'Q27, Q89, Q90', notes: 'Skin tears, dressing changes, dehiscence.' },
	{ name: 'Oncology-Related Skin/Mucosal Care', count: 3, questions: 'Q85, Q86, Q87', notes: 'Stomatitis, mucositis, radiation skin reactions.' },
	{ name: 'Chemical Burns', count: 2, questions: 'Q13, Q34', notes: 'Lye ingestion/exposure.' },
	{ name: 'Impetigo', count: 2, questions: 'Q32, Q97', notes: 'Home care, contagion prevention.' },
	{ name: 'Pediculosis (Head Lice)', count: 2, questions: 'Q98, Q100', notes: 'Lindane, positive findings.' },
	{ name: 'Integumentary Risk Factors', count: 2, questions: 'Q14, Q63', notes: 'Populations at risk.' },
	{ name: 'Pemphigus', count: 1, questions: 'Q37', notes: "Nikolsky's sign." },
	{ name: 'Candidiasis (Thrush)', count: 1, questions: 'Q33', notes: '' },
	{ name: 'Burn Complications – Keloid Formation', count: 1, questions: 'Q51', notes: '' },
	{ name: 'Lyme Disease', count: 1, questions: 'Q18', notes: '' },
	{ name: 'Hypothermia Blanket Use', count: 1, questions: 'Q23', notes: '' },
	{ name: 'Pediatric Burn Considerations', count: 1, questions: 'Q101', notes: '' },
	{ name: 'Diabetic Ulcer Care', count: 1, questions: 'Q79', notes: '' },
];

const musculoskeletalBreakdown = [
	{ name: "Traction Care & Complications (Buck's, Skeletal, Skin Traction)", count: 24, questions: 'Q1, 2, 3, 10, 18, 23, 24, 26, 27, 34, 47, 54, 75, 90, 91, 92, 120, 121, 122, 125, 127, 130, 165, 179', notes: 'Setup, pin site monitoring, positioning, countertraction, and psychosocial coping while in traction.' },
	{ name: 'Cast Care & Home Instructions', count: 15, questions: 'Q8, 20, 22, 25, 33, 74, 88, 89, 96, 114, 126, 135, 164, 168, 169', notes: 'Application, itching relief, skin irritation, cast syndrome, weight-bearing timing, and fear of cast removal.' },
	{ name: 'Osteoporosis', count: 12, questions: 'Q9, 32, 46, 62, 67, 93, 101, 104, 108, 128, 140, 161', notes: 'Risk factors, diet, home safety modifications, and fracture prevention.' },
	{ name: 'Cast Compartment Syndrome & Neurovascular Complications', count: 10, questions: 'Q13, 35, 39, 49, 70, 78, 97, 40, 167, 173', notes: 'Early signs, prevention, and assessment of neurovascular status under a cast.' },
	{ name: 'Crutches, Canes & Assistive Devices/Ambulation Safety', count: 10, questions: 'Q21, 29, 30, 41, 58, 76, 77, 144, 170, 171', notes: 'Gait patterns, measurement, safety teaching, and adaptive equipment.' },
	{ name: 'Pediatric Musculoskeletal Disorders', count: 9, questions: 'Q152–160', notes: 'Pediatric traction/casting, juvenile idiopathic arthritis, scoliosis bracing, developmental hip dysplasia, and clubfoot.' },
	{ name: 'Amputation Care (Residual Limb & Prosthesis)', count: 8, questions: 'Q5, 14, 15, 52, 81, 136, 174, 175', notes: 'Residual limb assessment, prosthesis care, and postoperative complications.' },
	{ name: 'Rheumatoid Arthritis', count: 8, questions: 'Q6, 7, 60, 68, 95, 107, 147, 151', notes: 'Diagnosis, early signs, joint protection, and medication management.' },
	{ name: 'Spinal Surgery & Vertebral Injury Care', count: 8, questions: 'Q16, 43, 82, 83, 84, 142, 145, 177', notes: 'Spinal fusion, orthosis/brace teaching, laminectomy, and vertebral fracture spasm management.' },
	{ name: 'Fat Embolism Syndrome', count: 6, questions: 'Q12, 36, 37, 38, 48, 172', notes: 'Early recognition, monitoring, and resolution indicators.' },
	{ name: 'Hip Fracture Surgery & Hip Replacement', count: 6, questions: 'Q42, 44, 50, 61, 118, 141', notes: 'Femoral head prosthesis, hip precautions, and postoperative positioning.' },
	{ name: 'Sprains, Strains & Contusions', count: 6, questions: 'Q31, 111, 113, 124, 132, 139', notes: 'Ankle sprain care and heat/ice application rationale.' },
	{ name: 'Soft Tissue & Joint Injuries', count: 6, questions: 'Q57, 71, 105, 106, 110, 112', notes: 'ACL injury, meniscus tear, rotator cuff, carpal tunnel syndrome, and subluxation.' },
	{ name: 'Gout', count: 5, questions: 'Q17, 94, 116, 137, 178', notes: 'Lab values, diagnostic tests, and dietary management.' },
	{ name: 'Fracture Types & Assessment Findings', count: 5, questions: 'Q28, 56, 79, 98, 109', notes: 'Comminuted/incomplete fractures and classic deformity presentations.' },
	{ name: 'Fracture Emergency Care & Immobilization', count: 5, questions: 'Q72, 73, 85, 129, 163', notes: 'Initial stabilization and ED preparation for reduction.' },
	{ name: "Paget's Disease", count: 4, questions: 'Q63, 64, 66, 102', notes: 'Symptoms, labs, and patient education.' },
	{ name: 'Osteomyelitis', count: 4, questions: 'Q65, 103, 131, 143', notes: 'Causes, pathophysiology, and supportive findings.' },
	{ name: 'Knee Replacement (TKA)', count: 4, questions: 'Q19, 51, 80, 99', notes: 'Discharge teaching and neurovascular monitoring.' },
	{ name: 'Low Back Pain', count: 4, questions: 'Q119, 138, 149, 176', notes: 'Causes and activity/positioning guidance.' },
	{ name: 'Psychosocial Adjustment to Immobilizing Devices/Procedures', count: 3, questions: 'Q4, 53, 86', notes: 'Body cast, external fixation, and bone-graft-related anxiety.' },
	{ name: 'Fracture-Related Complications (Hemorrhage/Shock, Pain Management)', count: 3, questions: 'Q87, 134, 148', notes: 'Pelvic/femur fracture monitoring and analgesic effectiveness.' },
	{ name: 'Arthroscopy', count: 3, questions: 'Q117, 150, 162', notes: 'Pre/post-procedure teaching.' },
	{ name: 'Amputation-Related Psychosocial Issues', count: 2, questions: 'Q45, 59', notes: 'Body image and phantom limb sensation.' },
	{ name: 'Cast/Extremity Infection Signs', count: 2, questions: 'Q11, 166', notes: 'Recognizing infection under a cast.' },
	{ name: 'Osteomalacia', count: 2, questions: 'Q69, 100', notes: 'Vitamin D therapy and fracture risk teaching.' },
	{ name: 'General Musculoskeletal Assessment & Diagnostics', count: 2, questions: 'Q55, 133', notes: 'Bone scan follow-up and general exam findings.' },
	{ name: 'Osteoarthritis', count: 1, questions: 'Q123', notes: '' },
	{ name: 'Polymyositis', count: 1, questions: 'Q115', notes: '' },
	{ name: 'Crush Injury/Rhabdomyolysis', count: 1, questions: 'Q146', notes: '' },
];

const neuroBreakdown = [
	{ name: 'Stroke (Brain Attack) – Deficits, Localization & Assessment', count: 30, questions: 'Q16, 24, 52, 56, 58, 59, 60, 75, 76, 77, 89, 92, 104, 125, 126, 127, 128, 129, 142, 147, 148, 153, 161, 162, 167, 169, 176, 201, 202, 203', notes: 'Motor/sensory/speech/dysphagia deficits, cranial nerve testing, and vital sign changes post-stroke.' },
	{ name: 'Increased ICP – Monitoring & Management', count: 15, questions: 'Q12, 47, 48, 68, 69, 83, 107, 108, 109, 110, 151, 152, 166, 197, 198', notes: "Signs of increasing ICP, positioning, Cushing's triad, prevention strategies." },
	{ name: 'Traumatic Brain Injury / Head Injury', count: 13, questions: 'Q23, 28, 86, 111, 112, 120, 141, 150, 159, 173, 174, 196, 199', notes: 'Concussion, epidural/subdural hematoma, posturing, cognitive/rehab referrals.' },
	{ name: 'Seizure Disorders', count: 10, questions: 'Q15, 20, 53, 70, 80, 84, 95, 139, 200, 210', notes: 'Precautions, status epilepticus, medication management.' },
	{ name: 'General Neuroanatomy & Physiology Concepts', count: 10, questions: 'Q19, 67, 105, 123, 130, 131, 132, 133, 134, 209', notes: 'Limbic system, brainstem, cerebellum function questions.' },
	{ name: 'Pediatric Neurological Conditions', count: 10, questions: 'Q186–195', notes: "Pediatric meningitis, seizures, head injury, hydrocephalus, Reye's syndrome." },
	{ name: 'Craniotomy – Perioperative Care', count: 9, questions: 'Q29, 30, 31, 32, 82, 136, 149, 168, 172', notes: '' },
	{ name: 'Myasthenia Gravis', count: 9, questions: 'Q74, 96, 97, 98, 116, 145, 165, 204, 213', notes: '' },
	{ name: 'Guillain-Barré Syndrome', count: 9, questions: 'Q18, 21, 73, 118, 144, 164, 207, 208, 212', notes: '' },
	{ name: 'Spinal Cord Injury – General Care & Complications', count: 8, questions: 'Q3, 33, 34, 94, 113, 114, 146, 156', notes: '' },
	{ name: 'Herniated Disk / Low Back Pain / Spinal Surgery', count: 8, questions: 'Q4, 5, 9, 10, 11, 103, 138, 175', notes: '' },
	{ name: 'Delirium & Acute Confusion/Agitation', count: 8, questions: 'Q121, 122, 124, 178, 179, 180, 181, 182', notes: '' },
	{ name: 'Diagnostic/Procedural Neuro Assessments', count: 7, questions: 'Q41, 44, 45, 46, 49, 50, 93', notes: 'LP, myelogram, oculocephalic/oculovestibular reflex testing, MRI prep.' },
	{ name: 'General Neuro Exam Techniques', count: 6, questions: 'Q38, 51, 137, 157, 171, 183', notes: 'Gait, Romberg, reflex/cranial nerve assessment.' },
	{ name: 'Multiple Sclerosis', count: 6, questions: 'Q37, 72, 100, 101, 102, 119', notes: '' },
	{ name: 'Trigeminal Neuralgia', count: 6, questions: 'Q36, 54, 61, 62, 140, 206', notes: '' },
	{ name: 'Spinal Cord Injury – Autonomic Dysreflexia', count: 5, questions: 'Q13, 78, 81, 91, 160', notes: '' },
	{ name: "Bell's Palsy", count: 5, questions: 'Q55, 63, 99, 117, 154', notes: '' },
	{ name: 'Cerebral Aneurysm/SAH Precautions', count: 5, questions: 'Q35, 57, 87, 88, 115', notes: '' },
	{ name: 'Hypothermia/Thermoregulation', count: 5, questions: 'Q1, 2, 40, 64, 106', notes: '' },
	{ name: 'Spinal Cord Injury – Related Conditions (spinal shock, Brown-Séquard, halo/tongs)', count: 4, questions: 'Q14, 90, 143, 155', notes: '' },
	{ name: "Parkinson's Disease", count: 4, questions: 'Q17, 79, 163, 205', notes: '' },
	{ name: 'Meningitis (adult)', count: 4, questions: 'Q170, 177, 184, 211', notes: '' },
	{ name: 'Unconscious Client Care', count: 4, questions: 'Q26, 27, 42, 43', notes: '' },
	{ name: 'Assistive Devices for Neurological Weakness', count: 3, questions: 'Q6, 7, 8', notes: '' },
	{ name: 'Pituitary Surgery (Transsphenoidal Resection)', count: 2, questions: 'Q22, 85', notes: '' },
	{ name: 'ALS', count: 2, questions: 'Q65, 66', notes: '' },
	{ name: 'General Neurological Impairment Care (elimination, respiratory)', count: 2, questions: 'Q25, 39', notes: '' },
	{ name: "Alzheimer's Disease", count: 1, questions: 'Q135', notes: '' },
	{ name: "Huntington's Disease", count: 1, questions: 'Q71', notes: '' },
	{ name: 'Cerebral Palsy (pediatric)', count: 1, questions: 'Q185', notes: '' },
	{ name: 'Pain Management – TENS', count: 1, questions: 'Q158', notes: '' },
];

const respiratoryBreakdown = [
	{ name: 'Tuberculosis', count: 18, questions: 'Q19, 20, 21, 22, 23, 43, 44, 45, 68, 71, 74, 81, 92, 151, 155, 157, 162, 163', notes: 'Skin testing/interpretation, clinical presentation, coping, home care, infection control.' },
	{ name: 'COPD/Emphysema – Pathophysiology, Risk Factors, Assessment & General Care', count: 12, questions: 'Q3, 36, 59, 63, 73, 77, 78, 89, 90, 95, 96, 150', notes: 'ABGs, exacerbation findings, risk factors, discharge teaching.' },
	{ name: 'COPD/Emphysema – Breathing Techniques & Positioning', count: 11, questions: 'Q1, 6, 14, 41, 51, 52, 64, 79, 80, 91, 161', notes: 'Tripod/dyspnea positions, pursed-lip and diaphragmatic breathing.' },
	{ name: 'COVID-19', count: 11, questions: 'Q138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148', notes: 'Severity classification, isolation/quarantine, PPE, warning signs, hypercoagulability.' },
	{ name: 'Tracheostomy Care & Complications', count: 8, questions: 'Q16, 26, 65, 98, 99, 100, 101, 102', notes: '' },
	{ name: 'Upper Respiratory Infections', count: 8, questions: 'Q25, 32, 56, 103, 104, 105, 106, 107', notes: 'Pharyngitis, sinusitis, laryngitis, peritonsillar abscess.' },
	{ name: 'Pleural Effusion & Thoracentesis', count: 8, questions: 'Q47, 50, 60, 118, 119, 120, 121, 122', notes: 'Including pleurodesis.' },
	{ name: 'Chest Trauma – Rib Fracture/Flail Chest/Pneumothorax', count: 7, questions: 'Q8, 9, 17, 54, 149, 152, 153', notes: '' },
	{ name: 'Airway Obstruction & Choking Emergency', count: 7, questions: 'Q24, 53, 123, 124, 125, 126, 127', notes: '' },
	{ name: 'Pneumonia', count: 7, questions: 'Q62, 108, 113, 114, 115, 116, 117', notes: 'Pathophysiology, CURB-65, risk factors, dysphagia care.' },
	{ name: 'Mechanical Ventilation & ET Tube Management', count: 6, questions: 'Q15, 27, 31, 33, 46, 76', notes: '' },
	{ name: 'Carbon Monoxide Poisoning', count: 6, questions: 'Q5, 128, 129, 130, 131, 132', notes: '' },
	{ name: 'Silicosis & Environmental/Fungal Lung Disease', count: 6, questions: 'Q13, 55, 69, 70, 112, 160', notes: 'Includes valley fever (coccidioidomycosis).' },
	{ name: 'Chest Tubes & Thoracic Surgery Drainage', count: 6, questions: 'Q2, 4, 18, 28, 66, 93', notes: 'Includes post-pneumonectomy care.' },
	{ name: 'Influenza', count: 5, questions: 'Q133, 134, 135, 136, 137', notes: '' },
	{ name: 'Breath Sounds Identification (Audio-Based)', count: 5, questions: 'Q82, 83, 84, 85, 86', notes: '' },
	{ name: 'ARDS', count: 5, questions: 'Q10, 29, 39, 67, 154', notes: '' },
	{ name: 'Pulmonary Embolism', count: 4, questions: 'Q11, 58, 72, 156', notes: '' },
	{ name: 'General Respiratory Physiology Concepts', count: 4, questions: 'Q30, 37, 40, 42', notes: '' },
	{ name: 'Incentive Spirometer Teaching', count: 3, questions: 'Q34, 87, 94', notes: '' },
	{ name: 'Postural Drainage & Chest Physiotherapy', count: 2, questions: 'Q35, 97', notes: '' },
	{ name: 'Bronchitis', count: 2, questions: 'Q109, 110', notes: '' },
	{ name: 'Empyema', count: 2, questions: 'Q48, 49', notes: '' },
	{ name: 'Pulmonary Sarcoidosis', count: 2, questions: 'Q12, 159', notes: '' },
	{ name: 'Pleurisy', count: 2, questions: 'Q38, 57', notes: '' },
	{ name: "Legionnaires' Disease", count: 1, questions: 'Q61', notes: '' },
	{ name: 'AIDS-Related Opportunistic Infection (Histoplasmosis)', count: 1, questions: 'Q158', notes: '' },
	{ name: 'Smoking Cessation', count: 1, questions: 'Q75', notes: '' },
	{ name: 'Asthma', count: 1, questions: 'Q88', notes: '' },
	{ name: 'Pertussis', count: 1, questions: 'Q111', notes: '' },
	{ name: 'Lung Cancer – Diagnostic Bronchoscopy Complications', count: 1, questions: 'Q7', notes: '' },
];

const requirements = [
	{
		id: 1,
		title: 'Complete all Personalized Learning Plans (PLPs)',
		summary:
			'Complete all Personalized Learning Plans that are generated by HESI from both Pre-Assessments.',
		details: [
			'The personalized learning plans (PLPs) are study tools that will help you to be better prepared for the OA.',
			'As you take the PreA (or the OA), the system tracks which questions are missed. If the system sees that a student is missing multiple questions related to the same content area it will generate packets with resources specific to that content area to help fill in any knowledge gaps.',
			'Review of this content will help fill any gaps you may have about the content. This is why completion of the PLPs are required prior to the OA.',
		],
	},
	{
		id: 2,
		title: 'Review the Core Skills resources in the Coaching Center',
		summary: 'Review the Core Skills resources in the Coaching Center.',
		link: {
			label: 'Core Skills resources in the Coaching Center',
			href: 'https://westerngovernorsuniversity.sharepoint.com/sites/AcademicCoachingCenter/SitePages/Explore%20Articles.aspx',
		},
	},
	{
		id: 3,
		title: 'Complete a 50-question Saunders quiz (minimum 80%)',
		summary:
			'Complete a 50-question Saunders quiz with a minimal score of 80% that is based on course competencies and aligns with the COS chapters/sections.',
		link: {
			label: 'Open Saunders Exam Review',
			href: 'https://coursewareobjects.elsevier.com/objects/elr/Silvestri/comprehensiveRN9e/examreview/index.php',
		},
		quizIntro: 'When setting up your quiz choose from these topics:',
		topics: [
			{ label: 'Cancer – selective (include esophageal/gastric/intestinal, laryngeal and lung, prostate, skin, and testicular)', count: 131, done: 0, breakdown: oncologyBreakdown },
			{ label: 'Ear', count: 42, done: 0, breakdown: earBreakdown },
			{ label: 'Eye (except Ocular tumors/retinoblastoma)', count: 16, done: 0, breakdown: eyeBreakdown },
			{ label: 'GI', count: 341, done: 0, breakdown: giBreakdown, breakdownApprox: true, breakdownNote: giNote },
			{ label: 'Immune', count: 100, done: 0, breakdown: immuneBreakdown },
			{ label: 'Integumentary (except burns)', count: 109, done: 0, breakdown: integumentaryBreakdown },
			{ label: 'Musculoskeletal – selective (include gout, rheumatoid arthritis and osteoarthritis)', count: 179, done: 0, breakdown: musculoskeletalBreakdown },
			{ label: "Neuro – selective (include amyotrophic lateral sclerosis, Huntington's disease, migraines, multiple sclerosis, myasthenia gravis, Parkinson's disease, seizure disorder/epilepsy)", count: 213, done: 0, breakdown: neuroBreakdown },
			{ label: 'Respiratory – selective (except CO poisoning, environmental, foreign body airway obstruction, pulmonary embolism)', count: 163, done: 0, breakdown: respiratoryBreakdown },
		],
		excluded:
			'Cardiovascular, Endocrine, Hematological, Renal/Urinary, and Reproductive are not included in this course.',
	},
	{
		id: 4,
		title: 'Schedule a 30-minute OA approval call',
		summary:
			'Schedule a 30-minute OA approval call via Webex on camera with instructor for an OA approval quiz.',
		details: [
			'This knowledge check/quiz will be focused on key concepts from the course that the student must know prior to taking the OA.',
			'Student must score at least a minimum of 80% on this quiz.',
			'If the student does not score 80% or higher on the first attempt of the quiz, then the student must wait at least 72 hours for another OA approval quiz.',
		],
	},
];

export { requirements };
export const saundersTopics = requirements.find((r) => r.topics).topics;

export function link(path = '/') {
	const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
	if (!path || path === '/') return base + '/';
	return base + (path.startsWith('/') ? path : '/' + path);
}
