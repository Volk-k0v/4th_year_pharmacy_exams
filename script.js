
// =============================================
// BASE DE DONNÉES COMPLÈTE DES EXAMENS
// =============================================

const examDatabase = {
    // ==================== IMMUNOLOGIE ====================
    'immunologie': {
        'academic': {
            'T1': [
                {
                    id: 'immuno-t1-1',
                    title: 'EMD 1 2022',
                    description: 'Bases de l\'immunologie et système immunitaire',
                    questions: [
                        {
                            text: 'Les cellules dendritiques matures sont différentes des CD Immatures par:',
                            options: [
                                'A) Leurs fortes expressions des PRR',
                                'B) Leurs fortes expressions de CD16 et CR1',
                                'C) Leurs fortes expressions de CD80',
                                'D) Leurs fortes expressions de CD28',
                                'E) Leurs fortes expressions de molécules HLAII'
                            ],
                            correct: [0, 1]
                        },
                        {
                            text: 'L\'apprêtement de l\'antigènes:',
                            options: [
                                'A) Consiste à une dégradation partielle de l\'antigène dans le phagolysosome des LT',
                                'B) Aboutit à l\'association de l\'antigènes exogènes avec les malécules HLA II.',
                                'C) Aboutit à l\'association de l\'antigènes endogènes avec les molécules HLA II',
                                'D) C\'est une étape indispensable pour la présentation de l\'antigène aux cellules NK',
                                'E) Met en jeu des molécules d\'adhésion'
                            ],
                            correct: [0, 3, 4]
                        },
                        {
                            text: 'La synapse immunologiane entre une cellules présentatrices d\'antieènes (CPA) et un LT αβ-CD8+:',
                            options: [
                                'A) Implique le couple CD28-CD86',
                                'B) Implique le couple CD28-CD80',
                                'C) Implique le couple PRR-PAMPS',
                                'D) Active la synthèse d\'IL-2 par le lymphocyte T en cas de reconnaissance d\'antigènes',
                                'E) Implique une interaction TCR-HLA DR'
                            ],
                            correct: [2, 4]
                        },
                        {
                            text: 'Les LT conventionnels naifs:',
                            options: [
                                'A) Expriment un récepteur de haute affinité de l\'IL2',
                                'B) Acquiérent dans le moelle osseuse une maturation fonctionnelle',
                                'C) Contrôlent après activation les réponses à médiation cellulaires',
                                'D) Contrôlent après activation les réponses humorales',
                                'E) Lour reconnaissance d\'antigènes est restreinte par le CMH'
                            ],
                            correct: [0, 1]
                        },
                        {
                            text: 'La sélection négative des LT:',
                            options: [
                                'A) Permet la sélection, par l\'antigène, du clone lymphocytaire T qui lui est spécifique',
                                'B) Intervient dans l\'éducation des thymocytes',
                                'C) Aboutit à l\'élimination des LT auto-réactifs',
                                'D) Permet la génération des thymocytes double négatives',
                                'E) Implique des cellules dendritiques'
                            ],
                            correct: [0, 4]
                        },
                        {
                            text: 'Les LT régulateurs:',
                            options: [
                                'A) Sont produites dans le thymus',
                                'B) Sont produites parfois en périphérie au cours de la réponse immunitaire',
                                'C) S\'activent indépendamment d\'une stimulation antigénique',
                                'D) Sont essentiellement des LTCD4+',
                                'E) Inhibe de façon spécifique d\'antigène'
                            ],
                            correct: [2, 4]
                        },
                        {
                            text: 'Durant la lymphopoièse B:',
                            options: [
                                'A) Elle se déroule dans la moelle osseuse jusqu\'au stade de LB immatures',
                                'B) Le rearrangement des chaines lourdes précède toujours celui des chaines kappa ou lambda',
                                'C) On observe des phénomènes de la commutation isotypique',
                                'D) L\'lgα et Igβ n\'est exprimé qu\'après l\'expression d\'un BCR final fonctionnel',
                                'E) L\'IgD membranaire n\'est exprimée qu\'après maturation'
                            ],
                            correct: [2, 3]
                        },
                        {
                            text: 'Une molécule d\'immunoglobuline (Ig):',
                            options: [
                                'A) Peut-être membranaire ou soluble',
                                'B) Est cudée par des familles multigéniques',
                                'C) Peut posséder naturellement deux spécificités anticorps distinctes',
                                'D) Possède des déterminants isotypiques sur les domaines CH et CL',
                                'E) Possède des déterminants idiotypiques identiques sur les domaines VH et VL'
                            ],
                            correct: [2, 4]
                        },
                        {
                            text: 'A propos des immunoglobulines (Ig):',
                            options: [
                                'A) Sont des acteurs importants de l\'immunité adaptative',
                                'B) Une molécule d\'IgM circulante possède 10 chaînes légères identiques',
                                'C) Les IgG1 et IgG2 maternelles constituent les principales Ig circulantes retrouvées chez le nouveau-né',
                                'D) Les IgG4 sont capables d\'activer le complément',
                                'E) Les domaines VH et VL d\'une Ig comportent des régions hypervariables identiques'
                            ],
                            correct: [2, 3, 4]
                        },
                        {
                            text: 'L\'hypermutation sematiques dea gènes des immunoglobulines (Ig):',
                            options: [
                                'A) Implique un réarrangement des segments géniques des Ig',
                                'B) Est déclenché au stade de centrublaste',
                                'C) Est concentré au niveau des régions CDR des Ig',
                                'D) Responsable du phénomène de la maturité d\'affinité des Ig.',
                                'E) Aboutit au switch de l\'Ig produite par les plasmocytes.'
                            ],
                            correct: [0, 4]
                        },
                        {
                            text: 'Les molécules HLA G:',
                            options: [
                                'A) Sont des molécules HLAI non classiques',
                                'B) Semblent jouer we rüte d\'immuno-inhibition',
                                'C) Sout xxprimies sur toutes les cellules nucléées',
                                'D) Sont parfois néo-exprimées sur des cellules cancéreuses ou infectées par un virus.',
                                'E) Sont impliquées dans l\'activation des LTCD8.'
                            ],
                            correct: [2, 4]
                        },
                        {
                            text: 'Les molécules HLA B:',
                            options: [
                                'A) Sont exprimées sur les CPA.',
                                'B) Sont formées de deux chaînes glycoprotéiques polymorphes α et β.',
                                'C) Fixent des peptides antigéniques 09 à 12 acides aminés.',
                                'D) Peuvent fixer des peptides antigéniques issus de la Cross présentation.',
                                'E) Présentent des peptides antigéniques aux LTCD4+.'
                            ],
                            correct: [1, 4]
                        },
                        {
                            text: 'Les molécules HLA DO:',
                            options: [
                                'A) Sont impliquées dans la sélection des LT dans le thymus.',
                                'B) Leurs gènes sont situés sur le chromosome 6.',
                                'C) Comprennent une chaîne légère: la β2-microglobuline.',
                                'D) Sont exprimées sur les LB.',
                                'E) Peuvent lier des peptides qui dérivent de la voie cytosolique d\'apprêtement d’antigènes.'
                            ],
                            correct: [2, 4]
                        },
                        {
                            text: 'Les cellules NK:',
                            options: [
                                'A) Jouent un rôle important dans l\'immunité contre les germes extracellulaires.',
                                'B) Expriment le CD16 et le CD56.',
                                'C) Leur cytotoxicité est conditionnée par la restriction HLA.',
                                'D) La stimulation via CD16 déclenche l’ADCC.',
                                'E) Peuvent sécréter de l’interféron gamma.'
                            ],
                            correct: [0, 2]
                        },
                        {
                            text: 'Le fragment Fab d’une immunoglobuline:',
                            options: [
                                'A) Peut lier l’antigène.',
                                'B) Peut précipiter l’antigène.',
                                'C) Peut activer le complément.',
                                'D) Porte l’idiotype d’une Ig.',
                                'E) Comporte un CH et un VH.'
                            ],
                            correct: [1, 2]
                        },
                        {
                            text: 'Concernant l’IgA:',
                            options: [
                                'A) La chaîne J est produite par les plasmocytes et permet la dimérisation des IgA sécrétoires.',
                                'B) Existent sous 2 isotypes dans le sérum et les sécrétions.',
                                'C) Comporte dans chaque chaîne lourde 4 CH et 1 VH.',
                                'D) Active le complément.',
                                'E) Ont une demi-vie de 6 jours et un poids moléculaire de 160 kDa.'
                            ],
                            correct: [2, 3]
                        },
                        {
                            text: 'Les polynucléaires neutrophiles:',
                            options: [
                                'A) Sont présents naturellement dans les tissus.',
                                'B) Expriment un récepteur pour l’antigène.',
                                'C) Expriment le CD16.',
                                'D) Expriment des PRR.',
                                'E) Peuvent fixer des composants du complément.'
                            ],
                            correct: [0, 1]
                        },
                        {
                            text: 'L\'immunité innée:',
                            options: [
                                'A) Implique des cellules phagocytaires et cytotoxiques.',
                                'B) Est caractérisée par le développement d\'une mémoire immunologique.',
                                'C) Se met en place en quelques jours.',
                                'D) Met en jeu des barrières épithéliales.',
                                'E) Peut orienter la réponse immunitaire adaptative.'
                            ],
                            correct: [1, 2]
                        },
                        {
                            text: 'La voie d’apprêtement cytosolique de l’antigène:',
                            options: [
                                'A) Consiste en une dégradation partielle de l’antigène dans le phagolysosome.',
                                'B) Aboutit à l’association de l’antigène aux molécules HLA II.',
                                'C) Réalisée par les LB et macrophages.',
                                'D) Est indispensable pour la présentation de l’antigène au LTCD4+.',
                                'E) N’implique pas de molécules d’adhésion.'
                            ],
                            correct: [0, 1, 3]
                        },
                        {
                            text: 'Les lymphocytes TH2:',
                            options: [
                                'A) Expriment des molécules HLA C.',
                                'B) Expriment la molécule CD25.',
                                'C) Dirigent une réponse antiparasitaire.',
                                'D) Expriment des molécules HLA G.',
                                'E) Synthétisent surtout l’INF-gamma.'
                            ],
                            correct: [3, 4]
                        }

                    ]
                },
                {
                    id: 'immuno-t1-2',
                    title: 'EMD 1 2025',
                    description: 'Mécanismes de défense non spécifiques',
                    questions: [
                        {
                            text: 'Les cellules NK (Natural Killer):',
                            options: [
                                'A) Sont des lymphocytes',
                                'B) Exercent une cytotoxicité dépendante des anticorps',
                                'C) Reconnaissent les cellules sans HLA de classe I',
                                'D) Produisent des interférons'
                            ],
                            correct: [0, 2, 3]
                        },
                        {
                            text: 'Les cytokines de l\'immunité innée incluent:',
                            options: [
                                'A) L\'interleukine-1 (IL-1)',
                                'B) Le facteur de nécrose tumorale (TNF)',
                                'C) Les interférons de type I',
                                'D) L\'interleukine-2 (IL-2)'
                            ],
                            correct: [0, 1, 2]
                        }
                    ]
                }
            ],
            'T2': [
                {
                    id: 'immuno-t2-1',
                    title: 'Immunité adaptative',
                    description: 'Lymphocytes T et B, réponses immunitaires spécifiques',
                    questions: [
                        {
                            text: 'Les lymphocytes T cytotoxiques reconnaissent l\'antigène présenté par:',
                            options: [
                                'A) Les molécules HLA de classe I',
                                'B) Les molécules HLA de classe II',
                                'C) Les molécules CD1',
                                'D) Les récepteurs BCR'
                            ],
                            correct: [0]
                        },
                        {
                            text: 'La maturation des lymphocytes B dans la moelle osseuse implique:',
                            options: [
                                'A) Le réarrangement des gènes des immunoglobulines',
                                'B) La sélection négative des cellules autoréactives',
                                'C) L\'expression de CD19 et CD20',
                                'D) La commutation isotypique'
                            ],
                            correct: [0, 1, 2]
                        }
                    ]
                }
            ],
            'T3': [
                {
                    id: 'immuno-t3-1',
                    title: 'Immunopathologie',
                    description: 'Maladies du système immunitaire',
                    questions: [
                        {
                            text: 'Les maladies auto-immunes sont caractérisées par:',
                            options: [
                                'A) Une réponse immune contre les propres antigènes de l\'organisme',
                                'B) Une déficience en lymphocytes T régulateurs',
                                'C) Une production d\'auto-anticorps',
                                'D) Une prédisposition génétique'
                            ],
                            correct: [0, 1, 2, 3]
                        }
                    ]
                }
            ]
        },
        'random': [
            {
                id: 'immuno-random-1',
                title: 'Examen aléatoire d\'immunologie 1',
                description: 'Questions mélangées de différents cours',
                questions: [
                    {
                        text: 'La commutation isotypique:',
                        options: [
                            'A) Modifie la spécificité antigénique des anticorps',
                            'B) Est médiée par des cytokines',
                            'C) Concerne la région constante des immunoglobulines',
                            'D) Se produit dans les centres germinatifs'
                        ],
                        correct: [1, 2, 3]
                    },
                    {
                        text: 'Les lymphocytes T régulateurs (Treg):',
                        options: [
                            'A) Expriment le marqueur CD25',
                            'B) Produisent du TGF-β et de l\'IL-10',
                            'C) Inhibent les réponses immunitaires',
                            'D) Sont déficients dans le diabète de type 1'
                        ],
                        correct: [0, 1, 2, 3]
                    }
                ]
            }
        ]
    },

    // ==================== MICROBIOLOGIE ====================
    'microbiologie': {
        'academic': {
            'T1': [
                {
                    id: 'microbio-t1-1',
                    title: 'EMD 1 2022',
                    description: 'Monde microbien et classification',
                    questions: [
                        {
                            text: 'Les céphalosporines de 3eme génération (C3G) sont:',
                            options: [
                                'A) Réservés uniquement à l\'usage hospitalier',
                                'B) Des molécules à large spectre d\'activité.',
                                'C) Actifs contre le Staphylococcus aureus methicillino-sensible SASM.',
                                'D) Actifs contre les entérobactéries BLSE +.',
                                'E) Temps-dépendants.'
                            ],
                            correct: [1, 2, 4]
                        },
                        {
                            text: 'Les fluroquinolones',
                            options: [
                                'A) Sonts actifs sur les bactéries Gram négatif',
                                'B) Sont bactériostatiques',
                                'C) Traitent les infections à bactéries intracellulaires tel Bacillus antracis.',
                                'D) Interagissent avec l\'ADN topoisomerases IV des bactéries de Gram positif.',
                                'E) Interagissent avec l\'ADN topoisomerases IV des bactéries de Gram négatif.'
                              ],
                            correct: [0, 3]
                        },
                        {
                            text: 'Les aminosides',
                            options: [
                                'A) Sonts dose-dépandants',
                                'B) Ciblent le ribosome bactérien',
                                'C) Sont associés aux B-lactamines pour l\'effet synergique.',
                                'D) Ne sont pas actifs sur les bactéries anaérobies.',
                                'E) Sont classés en 3 groupes, selon la base substituée.'
                              ],
                            correct: [0, 1, 2]
                        },
                        {
                            text: 'La mesure de l\'effet bactériostatique des antibiotiques in vitro se fait:',
                            options: [
                                'A) Par la mesure de l\'effet bactériostatique du sérum par microdilution. ',
                                'B) Par diffusion de disques d\'antibiotiques sur MUELLER-HINTON.',
                                'C) Par la mesure de la CMI.',
                                'D) A partir une suspension bactérienne de 0.5 MacFarland.',
                                'E) Après une incubation de 35 heures à 18°C.'
                              ],
                            correct: [1, 2, 3]
                        },
                        {
                            text: 'La résistance bactérienne par imperméabilité:',
                            options: [
                                'A) Est due à une réduction du nombre de pompes à efflux. ',
                                'B) Est due au à la diminution du diamètre des porines.',
                                'C) Est un mécanisme exclusif aux bactéries Gram -.',
                                'D) Est responsable de l\'augmentation de la CMI de certains antibiotiques.',
                                'E) Concerne les antibiotiques hydrophiles.'
                              ],
                            correct: [1, 2, 3, 4]
                        },
                        {
                            text: 'Les facteurs de vrulence bactériens assurent:',
                            options: [
                                'A) La colonistaion. ',
                                'B) L\'échappement à l\'organisme grace aux pili.',
                                'C) L\'invasion par la production de toxine protéique thermosensible.',
                                'D) La dissémination de la bactérie à l\'aide de biofilm.',
                                'E) La résistance à la phagocytose grace à la capsule.'
                              ],
                            correct: [1, 2, 3, 4]
                        },
                        {
                            text: 'Les transferts génétiques horizontaux:',
                            options: [
                                'A) Se font par transduction.',
                                'B) Se font par transformation en présence d\'ADN exogénote.',
                                'C) Se font par conjugaison entre deux cellules eucaryotes F+ et F-.',
                                'D) Permettent l\'échange de gène de résistance.',
                                'E) Sont responsables du changement du caractère métabolique bactérien.'
                              ],
                            correct: [0, 1, 3, 4]
                        },
                        {
                            text: 'Bacillus anthracis est une bactérie:',
                            options: [
                                'A) Bacille Gram positif de petite taille.',
                                'B) Exigeante en milieux de culture enrichis.',
                                'C) Possède un plasmide pOX1 codant la synthèse de capsule.',
                                'D) Responsable d\'infection à prévention vaccinale humaine.',
                                'E) Sporulée, utilisée comme arme biologique.'
                              ],
                            correct: [4]
                        },
                        {
                            text: 'Bacillus anthracis est une bactérie:',
                            options: [
                                'A) Une zoonose.',
                                'B) Due à un germe psychrophile, intracellulaire facultative.',
                                'C) Traitée par C3G dans sa forme septicémique.',
                                'D) Une maladie à déclaration obligatoire.',
                                'E) Dominée par la forme neuro-meningée dans les tableaux invasifs.'
                              ],
                            correct: [2, 4]
                        },
                        {
                            text: 'Corynebacterium diphteriae est une bactérie:',
                            options: [
                                'A) Responsable d\'une infection respiratoire pure.',
                                'B) Ne possédant pas de catalase.',
                                'C) Mise en évidence par le test d\'ELEK.',
                                'D) Strictement humaine.',
                                'E) Retrouvée souvent au niveau du sang du malade.'
                              ],
                            correct: [3]
                        },
                        {
                            text: 'La paroi des GRAM positif contient:',
                            options: [
                                'A) Peptidoglycane.',
                                'B) LPS.',
                                'C) Porine.',
                                'D) Acide teichoique.',
                                'E) Acide lipoteichoique.'
                              ],
                            correct: [0, 3, 4]
                        },
                        {
                            text: 'Quelles structures sont les mêmes chez les bactéries:',
                            options: [
                                'A) Les granulations.',
                                'B) Les substances de réserves.',
                                'C) Les chromatophores.',
                                'D) Les pigmentations.',
                                'E) Les plasmides.'
                              ],
                            correct: [0, 2]
                        },
                        {
                            text: 'Quelles sont les conditions de culture de Legionella:',
                            options: [
                                'A) On utilise le milieu CYE.',
                                'B) On incube à 25°C pd 15j.',
                                'C) On incube à 48°C pd 20j.',
                                'D) On utilise le milieu FG + 2,5% C02.',
                                'E) On utilise le milieu FG sans CO2.'
                              ],
                            correct: [0, 1, 3]
                        },
                        {
                            text: 'Quels sont les critères qui permettent d\'identifier Legionella pneumophila:',
                            options: [
                                'A) La recherche de colonies grises, brillante et muqueuse.',
                                'B) Une catalase -.',
                                'C) Une oxydase +.',
                                'D) Un résultat positif après coloration par IFD.',
                                'E) Un aspect de verre brisé lors de l\'observation à la loupe.'
                              ],
                            correct: [0, 2, 3, 4]
                        },
                        {
                            text: 'Bordetella est une bactérie:',
                            options: [
                                'A) Aéro-anaérobie facultative.',
                                'B) Catalase +.',
                                'C) Dont les colonies ont un contour irrégulier.',
                                'D) Qui a une hémolyse ß.',
                                'E) Qui se cultive sur milieu enrichie.'
                              ],
                            correct: [1, 3, 4]
                        },
                        {
                            text: 'Bordetella est sensible:',
                            options: [
                                'A) Aux pénicillines M.',
                                'B) Aux céphalosporines de troisième génération (CIIIG).',
                                'C) A la josamycine.',
                                'D) Aux pénicillines.',
                                'E) Aux tétracyclines.'
                              ],
                            correct: [1, 2, 4]
                        },
                        {
                            text: 'E.coli ETEC pathovars:',
                            options: [
                                'A) Provoque des diarrhées sanglantes.',
                                'B) Provoque de la fièvre.',
                                'C) Son diagnostic se fait dans des laboratoires spécialisés.',
                                'D) Provoque des salpingites.',
                                'E) Provoque un syndrome cholériforme.'
                              ],
                            correct: [2, 3]
                        },
                        {
                            text: 'Les Vibrio sont:',
                            options: [
                                'A) Des bacilles Gram négatif mobile par ciliature monotriche.',
                                'B) Des bacilles Gram positif immobile.',
                                'C) Des bacilles Gram négatif mobile par ciliature lophotriche.',
                                'D) Des bactéries dont le sérotype O139 cause le choléra.',
                                'E) Des bactéries dont le sérotype O138 cause le choléra.'
                              ],
                            correct: [0, 3]
                        },
                        {
                            text: 'Heamophilus est une bactérie:',
                            options: [
                                'A) Coccobacile Gram négative.',
                                'B) Qui se cultive sur gélose au sang cuit+polyvitex.',
                                'C) Qui se cultive sur GSC à 5% de CO2.',
                                'D) Catalase +.',
                                'E) Oxydase +.'
                              ],
                            correct: [0, 1, 3, 4]
                        },
                        {
                            text: 'Le diagnostic des infections à Heamophilus se produit sur prélèvement de:',
                            options: [
                                'A) Pus.',
                                'B) LBA.',
                                'C) Sang.',
                                'D) LCR.',
                                'E) Lésion cutané.'
                              ],
                            correct: [0, 1, 2, 3]
                        },
                    ]
                },
                {
                    id: 'microbio-t1-2',
                    title: 'EMD 1 2024',
                    description: 'Monde microbien et classification',
                    questions: [
                        {
                            text: 'La paroi des bactéries Gram positif est composée de:',
                            options: [
                                'A) 50 à 100 feuilles de peptidoglycane',
                                'B) Une couche interne phospholipidique.',
                                'C) Lipide A.',
                                'D) Sucres.',
                                'E) Acides lipotechoiques.'
                            ],
                            correct: [0, 3, 4]
                        },
                        {
                            text: 'Les macromutations génétiques regroupent',
                            options: [
                                'A) Les transversions',
                                'B) Les transitions',
                                'C) Les duplications.',
                                'D) Les translocations.',
                                'E) Les inversions.'
                              ],
                            correct: [2, 3, 4]
                        },
                        {
                            text: 'Lors de l\'étude de la sensibilité bactérienne aux antibiotiques in vitro, la valeur de la CMI est obtenue par:',
                            options: [
                                'A) Antibiogramme par diffusion de disques',
                                'B) E-test',
                                'C) CMI en milieu liquide.',
                                'D) CMI en milieu solide.',
                                'E) Détermination de la CMB en milieu liquide.'
                              ],
                            correct: [1, 2, 3, 4]
                        },
                        {
                            text: 'Les aminopinicillines sont actifs sur:',
                            options: [
                                'A) Enterococcus sp. ',
                                'B) H.influenzae producteur de penicillinase.',
                                'C) Le meningocoque.',
                                'D) SARM.',
                                'E) Klebsiella pneimoniae.'
                              ],
                            correct: [0, 2]
                        },
                        {
                            text: 'Le métabolisme protéique est exploré par:',
                            options: [
                                'A) La recherche des décarboxylases sur milieu Clark-Lubs. ',
                                'B) L\'étude du métabolisme de l\'urée et du tryptophane.',
                                'C) L\'étude du métabolisme des Acides Aminés soufrés sur TSI.',
                                'D) La recherche de la beta-galactosidase.',
                                'E) La recherche de la lécithinase.'
                              ],
                            correct: [1, 2]
                        },
                        {
                            text: 'Le temps de génération d\'une bactérie:',
                            options: [
                                'A) Atteint sa valeur maximale durant la phase exponentielle. ',
                                'B) Baisse progressivement durant la phase de ralentissement.',
                                'C) Est le temps requis pour le dédoublement du nombre de bactéries.',
                                'D) Est de plus en plus long pendant la phase de déclin.',
                                'E) Se raccourcit durant la phase d\'accélération.'
                              ],
                            correct: [2, 3, 4]
                        },
                        {
                            text: 'Les entérobactéries enteropathogènes sont:',
                            options: [
                                'A) Escherichia coli UPEC.',
                                'B) Campylobacter jejunii.',
                                'C) Salmonella entertidis.',
                                'D) Shigella dysenteriae.',
                                'E) Citrobacter freundli.'
                              ],
                            correct: [2, 3]
                        },
                        {
                            text: 'Les entérobactéries sensibles à la colistine sont:',
                            options: [
                                'A) Serratta mareescens.',
                                'B) Salmonella Paratyphi A.',
                                'C) Escherichia coli.',
                                'D) Pseudomonas aeruginosa.',
                                'E) Proteus mirabilis.'
                              ],
                            correct: [1, 2]
                        },
                        {
                            text: 'L\'essaimage est un phénomène:',
                            options: [
                                'A) Observé chez la tribue des Escherichise.',
                                'B) Du à la mobilité bactérienne.',
                                'C) Observé uniquement sur gélose Hektoon.',
                                'D) Du à la présence de capsule bactérienne.',
                                'E) Observé chez les entérobactéries abondamment flagellées.'
                              ],
                            correct: [1, 4]
                        },
                        {
                            text: 'Le diagnostic bactériologique du cholera se fait sur un prélèvement de:',
                            options: [
                                'A) Sérum.',
                                'B) Selles.',
                                'C) Salive.',
                                'D) LCR.',
                                'E) Hémoculture.'
                              ],
                            correct: [0, 1]
                        },
                        {
                            text: 'Le degré de virulence d\'une bactérie dépend de:',
                            options: [
                                'A) Sa capacité à provoquer une maladie.',
                                'B) La charge bactérienne inoculée.',
                                'C) La voie d\'entrée dans l\'organisme.',
                                'D) Le système immunitaire de l\'hôte.',
                                'E) Les facteurs de virulence bactériens.'
                              ],
                            correct: [0, 1, 2, 3, 4]
                        },
                        {
                            text: 'Les septicémies d\'origine lymphatiques sont dues à:',
                            options: [
                                'A) Bordetella pertussis.',
                                'B) Brucella melitensis.',
                                'C) Haemphilus influenzae.',
                                'D) Saimonella Paratyphi B.',
                                'E) Brucella abortus.'
                              ],
                            correct: [1, 3, 4]
                        },
                        {
                            text: 'Parmi ces bactéries, laquelle (lesquelles) possèdent une uréase:',
                            options: [
                                'A) Campylobacter jejunii.',
                                'B) Eschericha coli.',
                                'C) Proteus mirabilis.',
                                'D) OBrucella abortus.',
                                'E) Helicobacter pylori.'
                              ],
                            correct: [2, 3, 4]
                        },
                        {
                            text: 'Le diagnostic sérologique de la légionellose par IFI (immunofluorescence indirecte):',
                            options: [
                                'A) Se fait sur 02 sérums à 15 jours d\'intervalle.',
                                'B) Donne des réactions croisées avec d\'autres bactéries..',
                                'C) Permet la recherche de L.PS bactérien.',
                                'D) Concerme tous les sérogroupes de Lpneumophila.',
                                'E) Permet la recherche du gène mip.'
                              ],
                            correct: [0, 1]
                        },
                        {
                            text: 'Les infections digestives à prévention vaccinale:',
                            options: [
                                'A) Les shigelloses.',
                                'B) Les salmonelloses.',
                                'C) La fièvre typhoide.',
                                'D) Le cholera.',
                                'E) La coqueluche.'
                              ],
                            correct: [2, 3]
                        },
                        {
                            text: 'La transmission interhumaine est possible dans le cas de:',
                            options: [
                                'A) Infections à Haemophilus influenzae (b).',
                                'B) Légionellose.',
                                'C) Brucellose.',
                                'D) Tularémie.',
                                'E) Coqueluche.'
                              ],
                            correct: [0, 4]
                        },
                        {
                            text: 'La prophylaxie des infections à Acinetobacter baumanii passe par:',
                            options: [
                                'A) La déclaration des infections nosocomiales.',
                                'B) L\'application de mesures d\'hygiène hospitalière.',
                                'C) Le retrait du matériel en cause en cas d\'infection.',
                                'D) L\'entretien des dispositifs médicaux réutilisables.',
                                'E) Le bon usage des antibiotiques..'
                              ],
                            correct: [0, 1, 2, 3, 4]
                        },
                        {
                            text: 'Parmi ces antibiotiques, lesquelles sont considérés comme de nouvelles molécules:',
                            options: [
                                'A) La mupirocine.',
                                'B) Le tedizolide.',
                                'C) La delafloxine.',
                                'D) La bacitracine.',
                                'E) L\'oritavancine.'
                              ],
                            correct: [1, 2, 4]
                        },
                        {
                            text: 'Parmi ces infections, laquelle (lesquelles) sont traitées par les betalactamines:',
                            options: [
                                'A) La peste.',
                                'B) La coqueluche.',
                                'C) La légionellose.',
                                'D) La brucellose.',
                                'E) La pasteurellose.'
                              ],
                            correct: [4]
                        },
                        {
                            text: 'Les bactéries hautement pathogènes, nécessitant un poste de sécurité microbiologique type 3 sont:',
                            options: [
                                'A) Yersinia enterocolitica.',
                                'B) Brucella melitensis.',
                                'C) Helicobacter pylori.',
                                'D) Francisella tularensis.',
                                'E) Pasteurella multocida.'
                              ],
                            correct: [1, 3]
                        },
                    ]
                },
                {
                    id: 'microbio-t1-3',
                    title: 'EMD 1 2025',
                    description: 'Monde microbien et classification',
                    questions: [
                        {
                            text: 'Les bacilles Gram négatif oxydatifs, sont un groupe de bactéries:',
                            options: [
                                'A) Hétérogènes par leurs caractères biochimiques',
                                'B) Homogènes par leur phenotype de sensibilité aux antibiotiques.',
                                'C) Dont le pouvoir pathogène s\'exprime en communauté.',
                                'D) Dont le pouvoir pathogène s\'exprime sur terrain débilité.',
                                'E) Peu pathogènes chez les immunocompétents.'
                            ],
                            correct: [0, 3, 4]
                        },
                        {
                            text: 'Les antibiotiques actifs sur Pseudomonas aeruginosa sont:',
                            options: [
                                'A) La piperacilline',
                                'B) L\'ampicilline',
                                'C) L\'imipeneme.',
                                'D) L\'ertapeneme.',
                                'E) La ceftazidime.'
                              ],
                            correct: [0, 2, 4]
                        },
                        {
                            text: 'Les éléments facultatifs d\'une bactérie sont:',
                            options: [
                                'A) La paroi capsule et slime',
                                'B) Indispensables à sa survie',
                                'C) Le chromosome.',
                                'D) Les intégrons.',
                                'E) La spore.'
                              ],
                            correct: [3, 4]
                        },
                        {
                            text: 'Au niveau de la paroi des bactéries Gram+, on retrouve:',
                            options: [
                                'A) Entre 50 à 100 feuilles de muréine. ',
                                'B) Des acides téicholiques.',
                                'C) La membrane externe.',
                                'D) Le lipide A.',
                                'E) Des oses spécifiques à chaque groupe bactérien.'
                              ],
                            correct: [0, 1, 4]
                        },
                        {
                            text: 'Les bactéries responsables de toxi-infections respiratoires sont:',
                            options: [
                                'A) Bacillus anthracis. ',
                                'B) Streptococcus pyogenes.',
                                'C) Corynebacterium diphteriae.',
                                'D) Haemophilus influenzae.',
                                'E) Bordetella pertussis.'
                              ],
                            correct: [2, 4]
                        },
                        {
                            text: 'La toxine diphtérique est:',
                            options: [
                                'A) Une endotoxine protéique. ',
                                'B) Composée de 2 domaines.',
                                'C) Codée par un gène porté par un bacteriophage.',
                                'D) Mise en évidence par le test d\'Elek.',
                                'E) Produite quand la concentration en fer est basse.'
                              ],
                            correct: [1, 2, 3, 4]
                        },
                        {
                            text: 'Listeria monocytogenes est une bactérie:',
                            options: [
                                'A) Capnophile.',
                                'B) Psychrophile.',
                                'C) Halophile.',
                                'D) Microstrophile.',
                                'E) Auxotrophe.'
                              ],
                            correct: [1, 2]
                        },
                        {
                            text: 'Le métabolisme énergétique d\'une bactérie chimio-organotrophe:',
                            options: [
                                'A) Est une suite de réactions d\'oxydo-réduction.',
                                'B) Utilise un substrat organique.',
                                'C) Est un ensemble de réactions anaboliques.',
                                'D) Le glucose est le substrat le plus utilisé.',
                                'E) Repose sur la respiration ou la fermentation.'
                              ],
                            correct: [0, 1, 3, 4]
                        },
                        {
                            text: 'Les espèces du genre Campylobacter spp sont responsables de:',
                            options: [
                                'A) Entérites.',
                                'B) Conjonctivites.',
                                'C) Septicémies chez l\'immunodéprimé.',
                                'D) Zoonoses.',
                                'E) Hépatites.'
                              ],
                            correct: [1, 2, 3]
                        },
                        {
                            text: 'Les méthodes non invasives visant à identifier Helicobacter pylori sont:',
                            options: [
                                'A) La mise en évidence des IgG sur sérum.',
                                'B) La sérologie sur liquide gastrique.',
                                'C) La recherche des antigènes dans les selles.',
                                'D) Le test à l\'urée sur fragment.',
                                'E) L\'examen cytobactériologique des selles (coproculture).'
                              ],
                            correct: [0, 2]
                        },
                        {
                            text: 'Les zoonoses à voie de transmission respiratoire sont:',
                            options: [
                                'A) Les infections à Bacilla anthracis.',
                                'B) Les infections à Bordetella pertussis.',
                                'C) Les infections à Brucella melitensis.',
                                'D) Les infections à Campylobacter jejunii.',
                                'E) Les infections à Neisseria meningitidis.'
                              ],
                            correct: [0, 2]
                        },
                        {
                            text: 'La prévention des infections par Salmonella sp implique:',
                            options: [
                                'A) La déclaration obligatoire de tous les cas de salmonelloses.',
                                'B) L\'application des mesures d\'hygiène liées au péril fecal.',
                                'C) Le contrôle des eaux potables.',
                                'D) Le dépistage et traitement de porteurs chroniques.',
                                'E) Vaccination contre toutes les salmonelloses.'
                              ],
                            correct: [1, 2, 3]
                        },
                        {
                            text: 'Shigella sp:',
                            options: [
                                'A) Est une bactérie strictement humaine.',
                                'B) Est un pathogène strict du tube digestif.',
                                'C) Est peu virulente dose infectante: 10-100 bacilles.',
                                'D) Sa transmission est favorisée par la chaleur.',
                                'E) Sa transmission par voie directe par l\'eau et les aliments.'
                              ],
                            correct: [0, 1, 3]
                        },
                        {
                            text: 'Les substances élaborées par Escherichia coli sont:',
                            options: [
                                'A) L\'hémolysine B.',
                                'B) Les colicines v.',
                                'C) Les toxines thermolabiles.',
                                'D) La toxine dermonecrotique.',
                                'E) L\'endotoxine.'
                              ],
                            correct: [0, 1, 2, 4]
                        },
                        {
                            text: 'Parmi les caractères biochimiques de Staphylococcus aureus:',
                            options: [
                                'A) Présence de catalase.',
                                'B) Capacité de dégrader le lactose.',
                                'C) Capacité de dégrader l\'urée.',
                                'D) Présence de DNase.',
                                'E) Présence de coagulase.'
                              ],
                            correct: [0, 3, 4]
                        },
                        {
                            text: 'La prophylaxie de la peste s\'applique par:',
                            options: [
                                'A) L\'administration de la doxycycline à tous les sujets contacts.',
                                'B) La désinsectisation obligatoire en cas d\'épidémie.',
                                'C) La dératisation au moment de l\'épidémie.',
                                'D) La réalisation de la sérologie sur sujets contacts.',
                                'E) L\'isolement des malades pour éviter la transmission cutanée.'
                              ],
                            correct: [0, 1]
                        },
                        {
                            text: 'Parmi ces bactéries, lesquelles leur réservoir est strictement humain:',
                            options: [
                                'A) Moraxella catarhalis.',
                                'B) Neisseria gonorrhoeae.',
                                'C) Hamophilus influenzae.',
                                'D) Escherichia coli enteroinvasive EIEC.',
                                'E) Salmonella Typhi.'
                              ],
                            correct: [0, 1, 4]
                        },
                        {
                            text: 'Parmi ces antibiotiques, lesquelles sont considérés comme de nouvelles molécules:',
                            options: [
                                'A) La présence de coagulase.',
                                'B) La dégradation du mannitol.',
                                'C) Les propriétés antigéniques du polyoside C.',
                                'D) Le type d\'hémolyse.',
                                'E) L\'étude de l\'ARN 165.'
                              ],
                            correct: [2, 3, 4]
                        },
                        {
                            text: 'Les streptocoques oraux sont:',
                            options: [
                                'A) Du groupe A de la classification de Lancefield.',
                                'B) Une part de la flore buccopharyngée normale.',
                                'C) Responsables de la formation de is plaque dentaire.',
                                'D) Responsables d\'endocardites infectieuses.',
                                'E) Responsables de suppurations diverses.'
                              ],
                            correct: [1, 2, 3, 4]
                        },
                        {
                            text: 'La mesure de l\'effet bactéricide d\'un antibiotique:',
                            options: [
                                'A)  Est une technique de diffusion sur gélose.',
                                'B) Est une technique qualitative.',
                                'C) Est représentée par la détermination de la CMB (concertation minimale bactéricide).',
                                'D) Passe par la détermination préalable de la CMI (concertation minimale inhibitrice).',
                                'E) Se fait sur un inoculum bactérien de 5 X105 UFC/ml.'
                              ],
                            correct: [2, 3, 4]
                        },
                    ]
                },
            ],
            'T2': [
                {
                    id: 'microbio-t2-1',
                    title: 'Bactériologie générale',
                    description: 'Structure et métabolisme bactérien',
                    questions: [
                        {
                            text: 'Les plasmides bactériens:',
                            options: [
                                'A) Sont des ADN circulaires extrachromosomiques',
                                'B) Peuvent porter des gènes de résistance aux antibiotiques',
                                'C) Sont essentiels à la survie de la bactérie',
                                'D) Peuvent être transférés par conjugaison'
                            ],
                            correct: [0, 1, 3]
                        }
                    ]
                }
            ],
            'T3': []
        },
        'random': [
            {
                id: 'microbio-random-1',
                title: 'Examen aléatoire de microbiologie',
                description: 'Questions variées en microbiologie',
                questions: [
                    {
                        text: 'Les virus sont caractérisés par:',
                        options: [
                            'A) La présence d\'un acide nucléique',
                            'B) La capacité de se reproduire seuls',
                            'C) La présence d\'une capside protéique',
                            'D) La présence de ribosomes'
                        ],
                        correct: [0, 2]
                    }
                ]
            }
        ]
    },

    // ==================== HÉMOBIOLOGIE ====================
    'hemobiologie': {
        'academic': {
            'T1': [
                {
                    id: 'hemo-t1-1',
                    title: 'EMD 1 2020',
                    description: 'Formation des cellules sanguines et physiologie',
                    questions: [
                        {
                            "text": "La cellule qui se transforme directement en globule rouge est :",
                            "options": [
                            "A. Erythroblaste polychromatophile",
                            "B. Erythroblaste basophile",
                            "C. Proérythroblaste",
                            "D. Réticulocyte"
                            ],
                            "correct": [3]
                        },
                        {
                            "text": "Le lieu d'absorption du fer :",
                            "options": [
                            "A. Duodenum",
                            "B. Jéjunum",
                            "C. Iléon",
                            "D. Estomac"
                            ],
                            "correct": [0]
                        },
                        {
                            "text": "La cellule la plus jeune dans la lignée érythroblastique est :",
                            "options": [
                            "A. Erythroblaste polychromatophile",
                            "B. Erythroblaste basophile",
                            "C. Proérythroblaste",
                            "D. Erythroblaste acidophile"
                            ],
                            "correct": [2]
                        },
                        {
                            "text": "Le temps total de l'érythropoïèse est de :",
                            "options": [
                            "A. 1 jour",
                            "B. 7 jours",
                            "C. 15 jours",
                            "D. 120 jours"
                            ],
                            "correct": [1]
                        },
                        {
                            "text": "Tous ces facteurs interviennent dans la régulation de l'érythropoïèse, sauf un :",
                            "options": [
                            "A. Erythropoïétine",
                            "B. Androgènes",
                            "C. Œstrogènes",
                            "D. Hormones thyroïdiennes"
                            ],
                            "correct": [2]
                        },
                        {
                            "text": "Généralités sur le sang :",
                            "options": [
                            "A. Le système lymphoïde participe à l'hématopoïèse dès la naissance.",
                            "B. Le système hématopoïétique situé dans la paroi de la vésicule vitelline fonctionne dès les premiers jours de la vie fœtale.",
                            "C. L'hématopoïèse se fait successivement dans les îlots de Wolff et Pander, et la rate, puis dans la moelle osseuse.",
                            "D. Chez l'adulte, toute la moelle osseuse participe à l'hématopoïèse."
                            ],
                            "correct": [2]
                        },
                        {
                            "text": "Les paramètres érythrocytaires les plus utiles en clinique sont :",
                            "options": [
                            "A. Le diamètre globulaire moyen",
                            "B. La superficie globulaire moyenne",
                            "C. Le volume globulaire moyen",
                            "D. L'épaisseur globulaire moyenne"
                            ],
                            "correct": [2]
                        },
                        {
                            "text": "Le taux d'absorption du fer :",
                            "options": [
                            "A. 0%",
                            "B. 10%",
                            "C. 50%",
                            "D. 90%"
                            ],
                            "correct": [1]
                        },
                        {
                            "text": "L'hémoglobine A :",
                            "options": [
                            "A. Comporte 2 atomes de fer ferrique par molécule",
                            "B. Présente une fonction de saturation par l'oxygène identique à celle de la myoglobine",
                            "C. Voit son affinité pour l'oxygène diminuer si le pH diminue",
                            "D. Comporte deux chaînes de globine Alpha liées à deux chaînes de globine gamma"
                            ],
                            "correct": [2]
                        },
                        {
                            "text": "L'hémoglobine est une :",
                            "options": [
                            "A. Lipoprotéine",
                            "B. Nucléoprotéine",
                            "C. Hétéroprotéine",
                            "D. Holoprotéine"
                            ],
                            "correct": [2]
                        },
                        {
                            "text": "Les différentes étapes par lesquelles la cellule souche myéloïde passe successivement pour donner le PNN sont :",
                            "options": [
                            "a. CFU-GM, CFU-G, MYELOBLASTE, PROMYELOCYTE, MYELOCYTE, METAMYELOCYTE",
                            "b. CFU-S, CFU-GEMM, CFU-G, MYELOBLASTE, PROMYELOCYTE, MYELOCYTE, METAMYELOCYTE",
                            "c. CFU-GM, CFU-M, MYELOBLASTE, PROMYELOCYTE, MYELOCYTE, METAMYELOCYTE",
                            "d. CFU-GM, CFU-G, MYELOBLASTE, MYELOCYTE, PROMYELOCYTE, METAMYELOCYTE"
                            ],
                            "correct": [0]
                        },
                        {
                            "text": "Parmi les signes cliniques habituels de la leucémie aiguë. Laquelle (lesquelles) est (sont) exactes ?",
                            "options": [
                            "a. Syndrome anémique avec asthénie, pâleur, céphalées, vertiges...",
                            "b. Hémorragies avec purpura, épistaxis, gingivorragies...",
                            "c. Syndrome tumoral, splénomégalie, hépatomégalie, adénopathies...",
                            "d. Thrombopénie importante avec un taux de plaquettes inférieur à 50 000/mm³"
                            ],
                            "correct": [0, 1, 2]
                        },
                        {
                            "text": "Concernant la leucémie lymphoide chronique, Quelle(s) est (sont) la (les) proposition(s) juste(s)?:",
                            "options": [
                            "a. Est un syndrome lymphoproliferatif chronique à évolution brutale.",
                            "b. Il existe un risque accru de maladies infectieuses ou virales au cours de l'évolution liées à  l'hypo-gammaglobulinémie.",
                            "c. L\'hyper lymphocytose est faite de cellules matures résistantes à l\'apoptose.",
                            "d. Le principale signe clinique évocateur est le syndrome d\'insuffisance médullaire."
                            ],
                            "correct": [1, 2]
                        },
                        {
                            "text": "La leucémie myéloïde chronique :",
                            "options": [
                            "a. Est un syndrome myéloprolifératif en rapport avec une prolifération clonale de cellules hématopoïétiques concernant essentiellement la lignée granuleuse.",
                            "b. Le syndrome général témoigne d'une prolifération myélocaryocytaire dans la moelle osseuse.",
                            "c. La phase chronique de la maladie dure 2 à 3 mois.",
                            "d. Le myélogramme montre une myélémie avec un taux de blastes supérieur à 20%."
                            ],
                            "correct": [0, 1]
                        },
                        {
                            "text": "Le chromosome Philadelphie dans la LMC :",
                            "options": [
                            "1. C'est le résultat d'une translocation entre le bras long du chromosome 9 avec le bras long du chromosome 22.",
                            "2. Correspond au chromosome 9 raccourci, porteur du gène de fusion ABL-BCR.",
                            "3. Est présent dans 100% des cas de LMC.",
                            "4. Est détecté par les techniques de cytogénétique conventionnelles (classique)."
                            ],
                            "correct": [0, 3]
                        },
                        {
                            "text": "Dans la maladie de Vaquez :",
                            "options": [
                            "a. L'érythropoïétine sérique est normale ou effondrée.",
                            "b. Est définie par la présence d'érythroblastes dans la circulation sanguine.",
                            "c. Une hyperviscosité sanguine est souvent associée entraînant un risque important de thrombose.",
                            "d. L'hyperplasie de la lignée érythroblastique est retrouvée en myélogramme et à la biopsie ostéomédullaire."
                            ],
                            "correct": [0, 2, 3]
                        },
                        {
                            "text": "Le diagnostic de la leucémie aiguë retrouve typiquement :",
                            "options": [
                            "1. Une anémie normocytaire normochrome arégénérative.",
                            "2. Une leuco-neutropénie.",
                            "3. Un taux de blastes médullaires supérieur à 20%.",
                            "4. Une neutropénie avec thrombocytose."
                            ],
                            "correct": [1, 2]
                        },
                        {
                            "text": "Parmi les caractéristiques suivantes concernant les leucémies aiguës lymphoblastiques :",
                            "options": [
                            "a. La coloration de NOIR SOLDAN est positive.",
                            "b. La coloration de MYELOPEROXYDASE est positive.",
                            "c. Représente 80% des leucémies aiguës chez l'enfant.",
                            "d. Présence quasi-constante du chromosome Philadelphie."
                            ],
                            "correct": [2]
                        },
                        {
                            "text": "La thrombocytémie essentielle :",
                            "options": [
                            "a. Est un syndrome lymphoprolifératif chronique.",
                            "b. Est un syndrome myéloprolifératif en rapport avec une prolifération clonale de cellules hématopoïétiques concernant essentiellement la lignée plaquettaire.",
                            "c. La présence de thrombocytose est constante.",
                            "d. Le diagnostic est défini par la présence de la mutation JAK2."
                            ],
                            "correct": [1, 2]
                        }
                    ]
                },
                {
                    id: 'hemo-t1-2',
                    title: 'EMD 1 2022',
                    description: 'Formation des cellules sanguines et physiologie',
                    questions: [
                        {
                            context: 
                            "Partie QCS.",
                            "text": "Les globules sanguins sont de ___ types.",
                            "options": [
                            "A) 5",
                            "B) 4",
                            "C) 2",
                            "D) 3",
                            "E) 6"
                            ],
                            "correct": [3]
                        },
                        {
                            context: 
                            "Partie QCS.",
                            "text": "Lequel des changements morphologiques suivants se produit au cours de la maturation normale des cellules sanguines :",
                            "options": [
                            "A) Augmentation du diamètre des cellules",
                            "B) Développement de la basophilie du cytoplasme",
                            "C) Condensation de la chromatine nucléaire",
                            "D) Apparition des nucléoles",
                            "E) Augmentation des organites intracellulaires"
                            ],
                            "correct": [2]
                        },
                        {
                            context: 
                            "Partie QCS.",
                            "text": "Érythropoïétine :",
                            "options": [
                            "A) est produite par le rein uniquement",
                            "B) est produite par le rein et le foie",
                            "C) est un phospholipide",
                            "D) est un polysaccharide",
                            "E) est un facteur de croissance non spécifique de la lignée érythroblastique"
                            ],
                            "correct": [1]
                        },
                        {
                            context: 
                            "Partie QCS.",
                            "text": "Quelle est la principale forme métaboliquement de transport disponible du fer dans le corps ?",
                            "options": [
                            "A) Hémoglobine",
                            "B) Hémosidérine",
                            "C) Ferritine",
                            "D) Transferrine",
                            "E) Ferroportine"
                            ],
                            "correct": [3]
                        },
                        {
                            context: 
                            "Partie QCS.",
                            "text": "Une cytokine multilignée parmi les interleukine (IL) est :",
                            "options": [
                            "A) IL-1",
                            "B) IL-2",
                            "C) IL-3",
                            "D) IL-4",
                            "E) IL-6"
                            ],
                            "correct": [2]
                        },
                        {
                            context: 
                            "Partie QCS.",
                            "text": "Au cours de la vie mi-fœtale, la principale source des cellules sanguines est :",
                            "options": [
                            "A) Moëlle osseuse",
                            "B) Rate",
                            "C) Foie",
                            "D) Nœuds lymphatiques",
                            "E) Sac vitellin"
                            ],
                            "correct": [2]
                        },
                        {
                            context: 
                            "Partie QCS.",
                            "text": "Quel organe est le site de séquestration des plaquettes ?",
                            "options": [
                            "A) Foie",
                            "B) Thymus",
                            "C) Rate",
                            "D) Moëlle osseuse",
                            "E) Nœuds lymphatiques"
                            ],
                            "correct": [2]
                        },
                        {
                            context: 
                            "Partie QCS.",
                            "text": "Le transfert du fer de l’entérocyte dans le plasma est régulé par :",
                            "options": [
                            "A) DMT1",
                            "B) Transferrine",
                            "C) Ferroportine",
                            "D) Héphactine",
                            "E) Hépcidine"
                            ],
                            "correct": [4]
                        },
                        {
                            context: 
                            "Partie QCS.",
                            "text": "Quel est le destin du récepteur de la transferrine lorsqu’il a terminé son rôle dans l’apport de fer à une cellule ?",
                            "options": [
                            "A) Il est recyclé et libéré dans le plasma.",
                            "B) Il est recyclé où il peut à nouveau se lier à son ligand.",
                            "C) Il est catabolisé et les acides aminés sont renvoyés dans le pool métabolique.",
                            "D) Il est retenu dans l’endosome pendant toute la durée de vie de la cellule.",
                            "E) Toutes les réponses sont justes"
                            ],
                            "correct": [1]
                        },
                        {
                            context: 
                            "Partie QCS.",
                            "text": "Les folates et la vitamine B12 travaillent ensemble dans la production de :",
                            "options": [
                            "A) Acide urique",
                            "B) Acides aminés",
                            "C) ARN",
                            "D) Phospholipides",
                            "E) ADN"
                            ],
                            "correct": [4]
                        },
                        {
                            context: 
                            "Partie QCM.",
                            "text": "Parmi les propositions suivantes, indiquer celle(s) qui est (sont) exacte(s). Au cours de la granulopoèse :",
                            "options": [
                            "A) Le promyéloïque se différencie en métamyéloïque.",
                            "B) Le polynucléaire neutrophile migre dans le sang périphérique avant de sortir des vaisseaux pour se localiser dans les tissus.",
                            "C) La production par la moelle est régulière par des cytokines telles que la GM-CSF.",
                            "D) Le progéniteur spécialisé pour les polynucléaires neutrophiles est le CFU-G.",
                            "E) Le progéniteur spécialisé pour les polynucléaires basophiles est le CFU-GM."
                            ],
                            "correct": [1, 2, 3]
                        },
                        {
                            context: 
                            "Partie QCM.",
                            "text": "Parmi les propositions suivantes, indiquer celle(s) qui est (sont) exacte(s). Les précurseurs neutrophiles :",
                            "options": [
                            "A) Ne sont pas morphologiquement reconnaissables.",
                            "B) Le premier précurseur morphologiquement reconnaissable est le promyéloïque.",
                            "C) Chez les sujets sains, s’observent uniquement dans la moelle osseuse hématopoïétique.",
                            "D) Le promyéloïque provient de la division des myéloblastes.",
                            "E) Les myélocytes proviennent de la division des métamyéloïques."
                            ],
                            "correct": [2, 3]
                        },
                        {
                            context: 
                            "Partie QCM.",
                            "text": "Parmi les propositions suivantes, indiquer celle(s) qui est (sont) exacte(s). Au cours de la lymphopoèse :",
                            "options": [
                            "A) Le TCP migre dans le thymus tandis que le BCP reste dans la moelle.",
                            "B) Les précurseurs lymphocytes expriment des antigènes de surface permettant leur identification.",
                            "C) Les précurseurs lymphocytes sont définissables par leur morphologie.",
                            "D) La production de lymphocyte T et B est dépendante de la présence d’antigènes.",
                            "E) La production de lymphocyte B se déroule dans la moelle osseuse."
                            ],
                            "correct": [0, 1, 4]
                        },
                        {
                            context: 
                            "Partie QCM.",
                            "text": "Parmi les propositions suivantes, indiquer celle(s) qui est (sont) exacte(s). Au cours de la lymphopoèse T :",
                            "options": [
                            "A) La sélection positive restreint les lymphocytes T à ne réagir qu’avec les molécules CMH du soi.",
                            "B) La sélection négative permet d’éliminer les lymphocytes T autoréactifs.",
                            "C) Les pré-T se différencient en Lymphocytes T mature en coexprimant CD4+ et CD8+.",
                            "D) Le progéniteur lymphoïde se différencie en TCP dans le thymus.",
                            "E) Le Thymocyte mature exprime soit le CD4 soit le CD8."
                            ],
                            "correct": [0, 1, 4]
                        },
                        {
                            context: 
                            "Partie QCM.",
                            "text": "Parmi les propositions suivantes, indiquer celle(s) qui est (sont) exacte(s). Les leucémies aigues lymphoblastiques :",
                            "options": [
                            "A) Sont des proliférations malignes de cellules immatures de la lignée lymphoïde.",
                            "B) Représentent 80% des leucémies aigues de l’enfant.",
                            "C) Représentent 80% des leucémies aigues de l’adulte.",
                            "D) Touchent les deux sexes.",
                            "E) La classification FAB permet de les classer en LAL B et LAL T."
                            ],
                            "correct": [0, 1, 3]
                        },
                        {
                            context: 
                            "Partie QCM.",
                            "text": "Parmi les propositions suivantes, indiquer celle(s) qui est (sont) exacte(s). Les leucémies aigues se caractérisent cliniquement par :",
                            "options": [
                            "A) Un syndrome tumoral précoce et constant.",
                            "B) Un syndrome anémique.",
                            "C) Un syndrome hémorragique avec saignement, épistaxis, pétéchies...",
                            "D) Un syndrome infectieux.",
                            "E) Une évolution chronique."
                            ],
                            "correct": [1, 2, 3]
                        },
                        {
                            context: 
                            "Partie QCM.",
                            "text": "Parmi les propositions suivantes, indiquer celle(s) qui est (sont) exacte(s). Les leucémies aigues se caractérisent biologiquement par :",
                            "options": [
                            "A) Une anémie parfois profonde normocytaire normochrome régénérative.",
                            "B) Une hyperleucocytose fréquente constituée essentiellement de blastes.",
                            "C) Une thrombocytose fréquente parfois majeure.",
                            "D) Une neutropénie fréquente.",
                            "E) Une moelle habituellement riche."
                            ],
                            "correct": [1, 3, 4]
                        },
                        {
                            context: 
                            "Partie QCM.",
                            "text": "Parmi les propositions suivantes, indiquer celle(s) qui est (sont) exacte(s). La leucémie myéloïde chronique :",
                            "options": [
                            "A) Fait partie des syndromes myéloprolifératifs chroniques.",
                            "B) Fréquemment associée à une anomalie moléculaire qui correspond au gène de fusion BCR-ABL.",
                            "C) Physiopathologiquement, résulte de la translocation entre les chromosomes 9 et 22.",
                            "D) Peut se transformer en Leucémie aigue.",
                            "E) Est plus fréquente chez l’enfant."
                            ],
                            "correct": [0, 2, 3]
                        },
                        {
                            context: 
                            "Partie QCM.",
                            "text": "Parmi les propositions suivantes, indiquer celle(s) qui est (sont) exacte(s). La polyglobulie de Vaquez :",
                            "options": [
                            "A) Fait partie des syndromes lymphoprolifératifs chroniques.",
                            "B) Est une hémopathie maligne à évolution aigue.",
                            "C) Est caractérisée cliniquement par une splénomégale et une pâleur cutanéomuqueuse.",
                            "D) Correspond à une prolifération maligne des progéniteurs érythroïdes sans blocage de maturation.",
                            "E) Constitue un facteur de risque de thromboses veineuses et artérielles."
                            ],
                            "correct": [3, 4]
                        },
                        {
                            context: 
                            "Partie QCM.",
                            "text": "Parmi les propositions suivantes, indiquer celle(s) qui est (sont) exacte(s). La thrombocytémie essentielle :",
                            "options": [
                            "A) Peut se transformer en Polyglobulie de Vaquez.",
                            "B) Est caractérisée biologiquement par une hyperplaquettose intermittente.",
                            "C) Est un syndrome myéloprolifératif chronique prédominant sur la lignée mégacaryocytaire.",
                            "D) Est constamment associée à la mutation du gène JAK2.",
                            "E) Est caractérisée cliniquement par des complications thrombo-hémorragiques."
                            ],
                            "correct": [0, 2, 4]
                        }
                    ]
                },
                {
                    id: 'hemo-t1-3',
                    title: 'EMD 1 2025',
                    description: 'Formation des cellules sanguines et physiologie',
                    questions: [
                        {
                            text: "Quelle(s) est(sont) la(les) proposition(s) exacte(s) :",
                            options: [
                                "A) Les sujets non sécréteurs peuvent être Leb+",
                                "B) Les hématies FY (a-b-) sont sensibles à l’invasion par Plasmodium vivax",
                                "C) Un sujet KEL+ signifie qu’il possède l’antigène Kel2",
                                "D) Le phénotype McLeod est caractérisé par l’absence des antigènes Kx et Kel",
                                "E) Les anticorps anti-JK1 induisent des réactions transfusionnelles sévères et sont faciles à détecter"
                            ],
                            correct: [3]
                        },
                        {
                            text: "Concernant le myélome multiple, lesquelles de ces affirmations sont fausses ?",
                            options: [
                                "A) Il est caractérisé par une prolifération clonale de plasmocytes dans la moelle osseuse",
                                "B) Une hypercalcémie peut être retrouvée",
                                "C) La production excessive d’IgM monoclonale est typique du myélome",
                                "D) La présence d’une protéinurie de Bence-Jones est fréquente",
                                "E) La vitesse de sédimentation est normale"
                            ],
                            correct: [2, 4]
                        },
                        {
                            text: "Quels sont les facteurs déclenchants des crises vaso-occlusives dans la drépanocytose ?",
                            options: [
                                "A) Hypoxie",
                                "B) Fièvre et infections",
                                "C) Hyperhydratation",
                                "D) Déshydratation",
                                "E) Alcalose métabolique"
                            ],
                            correct: [0, 1, 3]
                        },
                        {
                            text: "La β-thalassémie majeure non traitée entraîne :",
                            options: [
                                "A) Déformations osseuses",
                                "B) Complications de la surcharge en fer",
                                "C) Érythroblastopénie",
                                "D) Accumulation des chaînes β non appariées dans les érythroblastes",
                                "E) Augmentation du taux d’hémoglobine A1"
                            ],
                            correct: [0, 1]
                        },
                        {
                            text: "Quelle(s) est(sont) la(les) cause(s) principale(s) de l’HPN ?",
                            options: [
                                "A) Mutation du gène PIGA",
                                "B) Mutation du gène HBB",
                                "C) Déficit en spectrine",
                                "D) Déficit en G6PD",
                                "E) Déficit en protéines CD55 et CD59"
                            ],
                            correct: [0, 4]
                        },
                        {
                            text: "Quelle est la conséquence principale de l’absence des protéines CD55 et CD59 ?",
                            options: [
                                "A) Résistance accrue aux infections",
                                "B) Sensibilité anormale des GR à l’action lytique du complément",
                                "C) Hémolyse intravasculaire",
                                "D) Anomalies du cytosquelette érythrocytaire",
                                "E) Formation de caillots sanguins (thromboses)"
                            ],
                            correct: [1, 2, 4]
                        },
                        {
                            text: "Quels sont les rôles du NADPH produit par la voie des pentoses phosphates ?",
                            options: [
                                "A) Maintien du glutathion réduit",
                                "B) Synthèse des acides gras",
                                "C) Régénération du NADH",
                                "D) Réduction de la méthémoglobine",
                                "E) Production d’ATP"
                            ],
                            correct: [0, 3]
                        },
                        {
                            text: "Quelles anomalies génétiques sont caractéristiques de la LMC ?",
                            options: [
                                "A) Translocation t(9;22) aboutissant au chromosome Philadelphie",
                                "B) Mutation du gène JAK2",
                                "C) Fusion des gènes BCR-ABL",
                                "D) Mutation du gène MYD88",
                                "E) Mécanisme encore mal connu"
                            ],
                            correct: [0, 2]
                        },
                        {
                            text: "Quelles modifications morphologiques accompagnent la maturation des granulocytes ?",
                            options: [
                                "A) Condensation progressive de la chromatine nucléaire",
                                "B) Apparition de granulations spécifiques",
                                "C) Augmentation de la taille de la cellule",
                                "D) Augmentation du rapport nucléocytoplasmique",
                                "E) Segmentation du noyau"
                            ],
                            correct: [0, 1, 4]
                        },
                        {
                            text: "Quelles sont les causes principales des anémies macrocytaires mégaloblastiques ?",
                            options: [
                                "A) Carence en vitamine B12",
                                "B) Carence en fer",
                                "C) Carence en folates",
                                "D) Thalassémie majeure",
                                "E) Insuffisance rénale"
                            ],
                            correct: [0, 2]
                        },
                        {
                            text: "Quelles causes peuvent entraîner une hyperéosinophilie bénigne ?",
                            options: [
                                "A) Réaction allergique",
                                "B) Leucémie aiguë myélomonocytaire",
                                "C) Parasitose",
                                "D) Leucémie myéloïde chronique",
                                "E) Infection virale"
                            ],
                            correct: [0, 2]
                        },
                        {
                            text: "Les syndromes myéloprolifératifs :",
                            options: [
                                "A) Sont un groupe hétérogène de pathologies lymphoïdes",
                                "B) Touchent plus fréquemment les enfants",
                                "C) Sont caractérisés par des signes cliniques d’apparition brutale",
                                "D) Font partie des hémopathies malignes",
                                "E) Sont parfois suspectés lors d’un hémogramme"
                            ],
                            correct: [3, 4]
                        },
                        {
                            text: "Les cellules souches totipotentes :",
                            options: [
                                "A) Sont des cellules du sang périphérique",
                                "B) Sont les premières cellules reconnaissables morphologiquement",
                                "C) Peuvent donner naissance à tous les types de cellules",
                                "D) Sont présentes dans la moelle osseuse",
                                "E) Sont capables d’auto-renouvellement"
                            ],
                            correct: [2, 3, 4]
                        },
                        {
                            text: "Dans le système Rhésus :",
                            options: [
                                "A) Le variant Du est un déficit qualitatif de l’antigène D",
                                "B) Le phénotype c défini l’absence de l’antigène C",
                                "C) L’antigène D est le plus immunogène",
                                "D) Il est défini par la présence d’antigènes sur la surface du GR et d’anticorps naturels dans le sérum",
                                "E) Il est défini par la présence d’antigènes sur la surface du GR uniquement"
                            ],
                            correct: [2]
                        },
                        {
                            text: 'Au cours d’une leucémie aiguë, l’hémogramme montre typiquement :',
                            options: [
                                'A) Une anémie hypochrome microcytaire arégénérative',
                                'B) Une thrombopénie',
                                'C) Une neutrophilie',
                                'D) Une présence de blastes dans la moelle',
                                'E) Une anémie normocytaire normochrome arégénérative'
                            ],
                            correct: [1, 4]
                        },
                        {
                            text: 'Le premier signe biologique à apparaître dans la carence martiale est :',
                            options: [
                                'A) L’hyposidérémie',
                                'B) L’anémie',
                                'C) La microcytose',
                                'D) L’hypo-ferritinémie',
                                'E) La pseudo-polyglobulie'
                            ],
                            correct: [3]
                        },
                        {
                            text: 'Au cours d’une anémie inflammatoire :',
                            options: [
                                'A) La sidérémie est élevée',
                                'B) La ferritinémie est normale ou élevée',
                                'C) L’anémie est régénérative',
                                'D) Le taux des récepteurs solubles de la transferrine est effondré',
                                'E) L’anémie s’installe avant la microcytose'
                            ],
                            correct: [1, 4]
                        },
                        {
                            text: 'L’évolution de la myélodysplasie peut être marquée par :',
                            options: [
                                'A) Évolution en leucémie aiguë',
                                'B) Aggravation des cytopénies',
                                'C) Transformation en tumeur solide',
                                'D) Développement d’un lymphome de haut grade',
                                'E) Développement d’une embolie pulmonaire'
                            ],
                            correct: [0, 1]
                        },
                        {
                            context: 
                                "Un homme de 60 ans est hospitalisé pour altération de l’état général avec fièvre au long cours. " +
                                "L’examen clinique trouve des adénopathies cervicales, axillaires, médiastinales, et une splénomégalie. " +
                                "NFS : GB 2500/mm3, PNN 1500/mm3, Lymph 500/mm3, Mono 500/mm3, Hb 6 g/dl, VGM 85 fl, CCMH 30%, " +
                                "Réticulocytes 6000/mm3, Plaquettes 280 000/mm3, VS 120 mm, albuminémie 20 g/L. " +
                                "La biopsie ganglionnaire conclut à une maladie de Hodgkin.",
                            text: 'Classez cette hémopathie en fonction des données fournies (Hodgkin) :',
                            options: [
                                'A) LH stade IVB',
                                'B) LH stade IVA',
                                'C) LH stade IIIA',
                                'D) LH stade IIIB',
                                'E) LH stade IIXA'
                            ],
                            correct: [3] // Fièvre + sueurs + perte poids = B, et atteinte diffuse = IV
                        },
                        {
                            context: 
                            "Même cas clinique : Patient avec maladie de Hodgkin, stade avancé, anémie, lymphopénie et hypoalbuminémie.",
                            text: 'Citez les facteurs de mauvais pronostic présents chez ce patient :',
                            options: [
                                'A) Sexe',
                                'B) Stade IV',
                                'C) Lymphopénie',
                                'D) Anémie',
                                'E) HypoAlbuminémie'
                            ],
                            correct: [0, 2, 3, 4]
                        }

                    ]
                }
            ],
            'T2': [],
            'T3': []
        },
        'random': []
    },

    // ==================== PARASITOLOGIE ====================
    'parasitologie': {
        'academic': {
            'T1': [
                {
                    id: 'parasito-t1-1',
                    title: 'EMD 1 2025',
                    description: 'Classification et cycle des parasites',
                    questions: [
                        {
                            "text": "Onchocerca volvulus :",
                            "options": [
                            "A) l’adulte vit dans les ganglions lymphatiques",
                            "B) la larve est non gainée",
                            "C) les simulies pondent à proximité des rivières",
                            "D) les nodules onchocerciens fistulisent",
                            "E) la larve a une périodicité diurne"
                            ],
                            "correct": [1]
                        },
                        {
                            "text": "Plasmodium :",
                            "options": [
                            "A) l’ookinète est une forme immobile",
                            "B) le mérozoïte est la forme pathogène",
                            "C) le sporozoïte est une forme d’inoculation",
                            "D) l’hypnozoïte est une forme de quiescence",
                            "E) l’oocyste est une forme asexuée"
                            ],
                            "correct": [1, 2, 3]
                        },
                        {
                            "text": "Caractéristiques de l’infection par Trichuris trichiura :",
                            "options": [
                            "A) Obstruction intestinale",
                            "B) Prolapsus rectal",
                            "C) Anémie ferriprive",
                            "D) Pneumonie à éosinophiles",
                            "E) Anémie"
                            ],
                            "correct": [1, 2, 4]
                        },
                        {
                            "text": "Quelle est la principale mesure de prévention du kyste hydatique ?",
                            "options": [
                            "A) Lavage des mains",
                            "B) Contrôle des chiens",
                            "C) Cuisson adéquate de la viande",
                            "D) Enterrer les viscères parasités",
                            "E) Tous les éléments ci-dessus"
                            ],
                            "correct": [0, 1, 2]
                        },
                        {
                            "text": "Parasite responsable de prurit anal :",
                            "options": [
                            "A) Ascaris lumbricoides",
                            "B) Taenia saginata",
                            "C) Trichuris trichiura",
                            "D) Enterobius vermicularis",
                            "E) Taenia solium"
                            ],
                            "correct": [1, 3]
                        },
                        {
                            "text": "Parasites capables d’auto-infestation :",
                            "options": [
                            "A) Ascaris lumbricoides",
                            "B) Trichuris trichiura",
                            "C) Strongyloides stercoralis",
                            "D) Ankylostoma duodenale",
                            "E) Enterobius vermicularis"
                            ],
                            "correct": [2, 4]
                        },
                        {
                            "text": "Concernant les anneaux génitaux :",
                            "options": [
                            "A) Taenia solium : régulièrement alternés",
                            "B) Dipylidium caninum : bilatéraux",
                            "C) Hymenolepis nana : d’un même côté",
                            "D) Dibothriocephalus latus : médians",
                            "E) Ascaris lumbricoides : centraux"
                            ],
                            "correct": [0, 1, 2, 3]
                        },
                        {
                            "text": "Cochez la ou les bonnes réponses sur la leishmaniose :",
                            "options": [
                            "A) La leishmaniose viscérale provoque une fièvre folle et une légère splénomégalie",
                            "B) En Algérie, la leishmaniose cutanée se transmet pendant toute l’année",
                            "C) Phlebotomus papatasi transmet la leishmaniose viscérale",
                            "D) Meriones sp est le réservoir le plus important de la leishmaniose cutanée",
                            "E) La ponction de moelle osseuse est le prélèvement le plus courant pour la leishmaniose viscérale"
                            ],
                            "correct": [3]
                        },
                        {
                            "text": "Mode de contamination du kyste hydatique :",
                            "options": [
                            "A) Consommation de viande mal cuite",
                            "B) Consommation de viscères mal cuits",
                            "C) Contact avec les déjections du chien",
                            "D) Consommation de crudités mal lavées",
                            "E) Contact avec la fourrure du chien"
                            ],
                            "correct": [2, 3, 4]
                        },
                        {
                            "text": "Le paludisme se caractérise par :",
                            "options": [
                            "A) Prodromes digestifs avec céphalées",
                            "B) Fièvre quatre pour P. malariae",
                            "C) Succession de fièvre, chaleur, sueur",
                            "D) Coma et hyperglycémie dans l’accès pernicieux",
                            "E) Un cycle sexué chez l’homme"
                            ],
                            "correct": [0, 1]
                        },
                        {
                            "text": "L’anophèle se caractérise par :",
                            "options": [
                            "A) Des œufs à flotteurs latéraux",
                            "B) Des œufs terricoles",
                            "C) Des larves avec siphon respiratoire",
                            "D) Position oblique avec le support",
                            "E) Trompe aussi longue que les palpes maxillaires"
                            ],
                            "correct": [0, 3, 4]
                        },
                        {
                            "text": "Le phlébotome :",
                            "options": [
                            "A) Larves terricoles",
                            "B) Vol silencieux et piqûre laissant une trace",
                            "C) Piqûre douloureuse, à l’aube",
                            "D) Vit dans les terriers et fissures murales",
                            "E) Aspect bossu et gros yeux à facettes"
                            ],
                            "correct": [0, 2, 3, 4]
                        },
                        {
                            "text": "Quelles sont les parasites transmis par la viande ?",
                            "options": [
                            "A) Taenia saginata",
                            "B) Hymenolepis nana",
                            "C) Echinococcus granulosus",
                            "D) Trichinella spiralis",
                            "E) Trichuris trichiura"
                            ],
                            "correct": [0, 3]
                        },
                        {
                            "text": "Diagnostic biologique de la leishmaniose :",
                            "options": [
                            "A) Scarification autour de la lésion, puis frottis",
                            "B) Infiltration d’eau physiologique à ensemencer sur NNN",
                            "C) (Option manquante dans le texte)",
                            "D) (Option manquante dans le texte)",
                            "E) (Option manquante dans le texte)"
                            ],
                            "correct": [0, 1, 2]
                        },
                        {
                            "text": "La leishmaniose :",
                            "options": [
                            "A) Leishmania major est transmis par les phlébotomes",
                            "B) Leishmania infantum est responsable de la leishmaniose viscérale",
                            "C) Leishmania tropica est anthroponose",
                            "D) Leishmania donovani existe en Inde",
                            "E) Leishmania infantum est transmis par les chiens"
                            ],
                            "correct": [0, 1, 2, 3, 4]
                        },
                        {
                            "text": "Cochez la ou les bonnes réponses sur Plasmodium :",
                            "options": [
                            "A) Plasmodium falciparum présente un frottis monotone",
                            "B) Plasmodium falciparum présente des anneaux en bague à chaton",
                            "C) Plasmodium malariae touche les vieilles hématies",
                            "D) Plasmodium ovale donne des hématies frangées",
                            "E) Plasmodium vivax a été décrit en Algérie"
                            ],
                            "correct": [0, 1, 2, 3, 4]
                        },
                        {
                            "text": "Echinococcus multilocularis :",
                            "options": [
                            "A) Adulte à pores génitaux médians",
                            "B) Adulte plus petit que Echinococcus granulosus",
                            "C) Transmission par contact avec le renard",
                            "D) Le cycle est assuré par les campagnols et la consommation de baies",
                            "E) La larve a une croissance exogène"
                            ],
                            "correct": [0, 1, 2, 3, 4]
                        },
                        {
                            "text": "Les cestodes :",
                            "options": [
                            "A) Les bovins sont les hôtes définitifs de Taenia saginata",
                            "B) Les ovins sont l’hôte définitif de Echinococcus granulosus",
                            "C) Le chien est un hôte définitif du cénure",
                            "D) Les vers sont un hôte intermédiaire d’Hymenolepis nana",
                            "E) Les cestodes sont plus fragiles que les nématodes"
                            ],
                            "correct": [0, 1, 2, 3, 4]
                        },
                        {
                            "text": "Les nématodes :",
                            "options": [
                            "A) Enterobius vermicularis donne un prurit vulvaire",
                            "B) Ascaris lumbricoides a un cycle monoxène",
                            "C) Trichinella sp est ovipare",
                            "D) Trichuris trichiura provoque une grave anémie",
                            "E) Ascaris lumbricoides a des œufs non fertiles contaminants"
                            ],
                            "correct": [0]
                        },
                        {
                            "text": "La ponction lombaire est utilisée :",
                            "options": [
                            "A) Pendant la première phase de la TBg",
                            "B) Au cours de la cysticercose",
                            "C) Pour le diagnostic du neuropaludisme",
                            "D) Pendant la 2ème phase de la TBr",
                            "E) Au cours de la trichinellose"
                            ],
                            "correct": [1, 3, 4]
                        }
                    ]
                }
            ],
            'T2': [],
            'T3': []
        },
        'random': []
    },

    // ==================== BIOCHIMIE CLINIQUE ====================
    'biochimie-clinique': {
        'academic': {
            'T1': [
                {
                    id: 'bioch-t1-1',
                    title: 'EMD 1 2020',
                    description: 'Métabolismes glucidique, lipidique et protidique',
                    questions: [
                        {
                            "text": "Les Glucides :",
                            "options": [
                            "A) La majeure partie provient des animaux.",
                            "B) La majeure partie provient des végétaux.",
                            "C) Les animaux peuvent synthétiser certains glucides à partir des acides aminés et des protéines.",
                            "D) Le glucose est le sucre le plus important.",
                            "E) Le glucose est le principal carburant des ruminants et du fœtus."
                            ],
                            "correct": [1, 3]
                        },
                        {
                            "text": "Les Glucides :",
                            "options": [
                            "A) Représentent 30 à 35% de l'apport énergétique.",
                            "B) Sont stockés sous forme d'amidon.",
                            "C) Le glucose est le seul substrat à pouvoir produire de petites quantités d'ATP en anaérobose.",
                            "D) Par l'intermédiaire du glucose, ils participent à la synthèse des nucléotides et du coenzyme A.",
                            "E) Participent à l'épuration des produits insolubles et toxiques tels que la bilirubine."
                            ],
                            "correct": [2, 4]
                        },
                        {
                            "text": "Le métabolisme des Glucides alimentaires :",
                            "options": [
                            "A) Les nutriments obtenus après leur digestion et absorption intestinale sont le fructose, le mannose et le glucose.",
                            "B) Le foie capte 60 à 75% du glucose provenant de la veine porte et la presque totalité du fructose.",
                            "C) Le foie sous l'effet de l'augmentation du rapport insuline / glucagon transforme le glucose en pyruvate par la voie de la glycolyse en libérant de petites quantités d'ATP.",
                            "D) Le foie transforme dans la mitochondrie le pyruvate issu de la glycolyse en acetyl-CoA.",
                            "E) Le foie transforme les acides gras en glucides via l'acetyl-CoA."
                            ],
                            "correct": [2, 3]
                        },
                        {
                            "text": "Le glucose :",
                            "options": [
                            "A) Est transporté dans le sang sous forme libre.",
                            "B) En période alimentaire, le glucose provient du foie.",
                            "C) En situation de jeûne, il provient de l'intestin.",
                            "D) Il est le nutriment énergétique fondamental de l'organisme.",
                            "E) Est l'unique source énergétique du cerveau."
                            ],
                            "correct": [0, 3]
                        },
                        {
                            "text": "Le Diabète :",
                            "options": [
                            "A) La principale perturbation de l'homéostasie glucidique est constituée par le diabète.",
                            "B) Le diabète est caractérisé par une inefficacité biologique de l'insuline, ce qui entraîne une hyperglycémie chronique.",
                            "C) L'hyperglycémie peut être due à une affection pancréatique.",
                            "D) La plupart des maladies du métabolisme des glucides s'accompagnent d'une importante hyperglycémie.",
                            "E) Les pathologies entraînant secondairement une hyperglycémie sont avant tout des maladies endocriniennes."
                            ],
                            "correct": [0, 1, 2]
                        },
                        {
                            "text": "Insuline :",
                            "options": [
                            "A) Permet la captation de glucose depuis le compartiment sanguin par stimulation de la translocation des transporteurs de glucose insulinosensibles Glut-4 du cytoplasme vers les membranes.",
                            "B) Stimule la captation hépatique du glucose.",
                            "C) Stimule la glycogénolyse et inhibe la synthèse de glycogène.",
                            "D) À l'état de jeûne, la glycogénogenèse hépatique est activée.",
                            "E) Au niveau du tissu adipeux, elle stimule la lipolyse et inhibe la lipogénèse."
                            ],
                            "correct": [0, 1]
                        },
                        {
                            "text": "Le diabète de type 1 :",
                            "options": [
                            "A) Touche l'adulte (après 40 ans).",
                            "B) La carence en insuline est relative.",
                            "C) Il s'agit d'un déficit profond en insuline.",
                            "D) Se caractérise par une hyperglycémie, glycosurie et cétonurie.",
                            "E) Le traitement consiste en sulfamides hypoglycémiants et en régime."
                            ],
                            "correct": [2, 3]
                        },
                        {
                            "text": "Le diabète de type 2 :",
                            "options": [
                            "A) Touche le sujet jeune.",
                            "B) Le sujet est souvent obèse, gros mangeur.",
                            "C) La carence en insuline est relative.",
                            "D) Le bilan azoté est souvent normal.",
                            "E) À un début rapide."
                            ],
                            "correct": [1, 2]
                        },
                        {
                            "text": "L'Hypoglycémie :",
                            "options": [
                            "A) C'est la baisse de la glycémie au-dessous des valeurs normales.",
                            "B) C'est un syndrome clinique polymorphe à prédominance neuropsychiatrique.",
                            "C) Ce n'est pas une urgence médicale.",
                            "D) Une seule glycémie suffit pour confirmer le diagnostic.",
                            "E) Peut être causée par la faim."
                            ],
                            "correct": [0, 1, 4]
                        },
                        {
                            "text": "La galactosémie congénitale :",
                            "options": [
                            "A) Est une maladie fréquente.",
                            "B) Son diagnostic précoce permet d'éviter l'apparition de troubles mentaux irréversibles en supprimant le lactose de l'alimentation.",
                            "C) Est due au déficit en galactose 2 phosphate uridyl transférase et en galactokinase.",
                            "D) Le galactose entre dans la composition des glycolipides constituant le système nerveux central.",
                            "E) Le galactose participe au métabolisme énergétique et tend à rejoindre les voies classiques de la glycogénogénèse et de la glycolyse."
                            ],
                            "correct": [1, 3, 4]
                        },
                        {
                            "text": "La galactosémie congénitale :",
                            "options": [
                            "A) Est un examen d'urgence en pédiatrie néonatale.",
                            "B) Le traitement doit être institué d'emblée dès l'observation de la triade : galactosurie – hypoglycémie – galactosémie.",
                            "C) Les troubles cliniques apparaissent plusieurs semaines après la naissance.",
                            "D) Se caractérise par des troubles digestifs et une cataracte unilatérale.",
                            "E) Les troubles biochimiques sont une glycosurie + hypoglycémie + hypergalactosémie."
                            ],
                            "correct": [0, 3]
                        },
                        {
                            "text": "Les glycogénoses :",
                            "options": [
                            "A) La glycogénose hépatorénale est un déficit en glucose phosphatase.",
                            "B) Se caractérise par 3 signes biologiques majeurs : hypoglycémie à jeun + cétose avec cétonurie + hyperlipémie.",
                            "C) Est dénommée glycogénose de type II.",
                            "D) La splénomégale et l'hypoglycémie du nourrisson sont les aspects les plus caractéristiques des glycogénoses.",
                            "E) La glycogénose généralisée est le déficit en maltase acide."
                            ],
                            "correct": [0, 4]
                        },
                        {
                            "text": "Les protéines :",
                            "options": [
                            "A) Une augmentation des protéines totales peut traduire la présence d'une paraprotéine.",
                            "B) Une diminution des protéines totales signifie généralement que la concentration d'albumine est faible.",
                            "C) L'albumine est synthétisée par les Immunoglobulines et accessoirement par le rein.",
                            "D) L'albumine apporte la plus grande contribution à la pression oncotique plasmatique.",
                            "E) Si la concentration d'albumine tombe très bas, il en résulte un œdème."
                            ],
                            "correct": [0, 1, 3, 4]
                        },
                        {
                            "text": "L'insuline :",
                            "options": [
                            "A) Est la principale hormone influant sur le taux de glucose sanguin.",
                            "B) Est une petite protéine synthétisée par les cellules α des îlots de Langerhans du pancréas.",
                            "C) Elle agit par l'intermédiaire de récepteurs cytosoliques.",
                            "D) Ses principaux tissus cibles sont le rein, le muscle et le tissu adipeux.",
                            "E) Elle signale que l'organisme est à jeun."
                            ],
                            "correct": [0]
                        },
                        {
                            "text": "La fructosémie :",
                            "options": [
                            "A) Le rein est l'organe clé du métabolisme du fructose",
                            "B) À l'inverse du glucose, ce sucre n'est pas soumis à une régulation hormonale",
                            "C) Il est apporté par l'alimentation sous forme libre ou sous forme de saccharose"
                            ],
                            "correct": [1, 2, 3]
                        },
                        {
                            "text": "Concernant la protéinémie :",
                            "options": [
                            "A) Elle est un élément du bilan hépatique.",
                            "B) Une hypoprotidémie relève généralement d'une hypoalbuminémie.",
                            "C) Une hyperprotidémie majeure relève d'une hyperimmunoglobulinémie.",
                            "D) Elle représente dans la colonne des anions environ 16 mEq/l.",
                            "E) Elle est responsable de l'essentiel de l'osmolalité plasmatique."
                            ],
                            "correct": [0, 1, 2, 3]
                        },
                        {
                            "text": "Les protéines ou groupes de protéines suivants, sont susceptibles de faire varier la protéinémie de manière significative :",
                            "options": [
                            "A) Albumine.",
                            "B) Céruloplasmine.",
                            "C) Fibrinogène.",
                            "D) Orosomucoïde.",
                            "E) Immunoglobulines."
                            ],
                            "correct": [0, 2, 4]
                        },
                        {
                            "text": "En tenant compte des variations physiologiques, une hyperprotidémie peut être le témoin d'une hémoconcentration. Les examens biologiques suivants le confirment :",
                            "options": [
                            "A) Concentration en hémoglobine.",
                            "B) Protidogramme.",
                            "C) Natrémie.",
                            "D) Hématocrite.",
                            "E) Créatininémie."
                            ],
                            "correct": [0, 3]
                        },
                        {
                            "text": "Certain(s) aspect(s) électrophorétique(s) incite(nt) à rechercher un myélome ?",
                            "options": [
                            "A) Une hypergammaglobulinémie en dôme.",
                            "B) Une augmentation des protéines totales.",
                            "C) Un pic étroit dans la zone des gammaglobulines.",
                            "D) Une diminution de l'albumine.",
                            "E) Une augmentation de l'α2 macroglobuline."
                            ],
                            "correct": [1, 2]
                        },
                        {
                            "text": "Les métabolites suivants sont des antagonistes de l'insuline :",
                            "options": [
                            "A) Glucagon.",
                            "B) Adrénaline.",
                            "C) Cortisol.",
                            "D) Hormone de croissance.",
                            "E) Acides gras à chaîne lourde."
                            ],
                            "correct": [0, 1, 2, 3]
                        },
                        {
                            "text": "Au cours de réanimation prolongée, la ou les protéines suivantes constituent un marqueur de dénutrition :",
                            "options": [
                            "A) IgA",
                            "B) IgG",
                            "C) Albumine",
                            "D) Transferrine"
                            ],
                            "correct": [2]
                        },
                        {
                            "text": "Les lipoproteines suivantes sont susceptibles d’entraîner une opalescence ou une lactescence du sérum chez le sujet à jeun depuis 12 heures :",
                            "options": [
                            "A. LDL",
                            "B. VLDL",
                            "C. IDL",
                            "D. HDL",
                            "E. Chylomicrons"
                            ],
                            "correct": [1, 2, 4]
                        },
                        {
                            "text": "Les lipoproteine(s) suivantes contient(nent) de l'apo B ?",
                            "options": [
                            "A. LDL seulement.",
                            "B. LDL + VLDL.",
                            "C. HDL seulement.",
                            "D. Chylomicrons + LDL + VLDL.",
                            "E. HDL + LDL."
                            ],
                            "correct": [3]
                        },
                        {
                            "text": "Les lipoproteines de faible densité (LDL) :",
                            "options": [
                            "A. Sont fortement athérogènes.",
                            "B. Renferment de l’apoprotéine.",
                            "C. Sont riches en triglycérides.",
                            "D. Sont les précurseurs des VLDL.",
                            "E. Sont dégradées par la lipoprotéine lipase (LPL)."
                            ],
                            "correct": [0, 1]
                        },
                        {
                            "text": "Les lipoproteines de haute densité (HDL) :",
                            "options": [
                            "A. Ont un rôle épurateur du cholestérol cellulaire.",
                            "B. Renferment essentiellement des apoprotéines de type A.",
                            "C. Renferment une apoprotéine C II.",
                            "D. Sont très riches en cholestérol.",
                            "E. Sont substrat de la LCAT."
                            ],
                            "correct": [0, 2, 3, 4]
                        },
                        {
                            "text": "Les familles protéiques du plasma séparables en électrophorèse standard sont synthétisées par le foie :",
                            "options": [
                            "A. Albumine",
                            "B. alpha1 globulines",
                            "C. alpha2 globulines",
                            "D. bêta globulines",
                            "E. gamma globulines"
                            ],
                            "correct": [0, 1, 2, 3]
                        },
                        {
                            "text": "Les protéines plasmatiques :",
                            "options": [
                            "A. Assument l’essentiel de la pression oncotique.",
                            "B. Sont toutes des holoprotéines.",
                            "C. Sont chargées positivement.",
                            "D. Ont un taux voisin de 50 g/l chez le sujet normal.",
                            "E. Sont toutes synthétisées par le foie."
                            ],
                            "correct": [0]
                        },
                        {
                            "text": "La VS (vitesse de sédimentation globulaire) :",
                            "options": [
                            "A. Peut être pratiquée au lit du malade sur 1 ml de sang incoagulable.",
                            "B. Est un bon reflet de la viscosité plasmatique, donc de l’équilibre protéique.",
                            "C. S’accélère au cours des maladies inflammatoires ou infectieuses.",
                            "D. Doit être ajournée systématiquement si l’accès au capital veineux est une nécessité vitale dans les heures à venir.",
                            "E. Est un test très spécifique du HIV."
                            ],
                            "correct": [0, 1, 2, 3]
                        },
                        {
                            "text": "Les lipoproteines :",
                            "options": [
                            "A. Les chylomicrons sont d’origine hépatique",
                            "B. Les VLDL sont d’origine intestinale",
                            "C. Les HDL sont toujours d’origine hépatique",
                            "D. La CETP assure des échanges d’esters de cholestérol entre les HDL et les IDL",
                            "E. L’apoB100 est d’origine hépatique."
                            ],
                            "correct": [3, 4]
                        },
                        {
                            "text": "La protéine CRP :",
                            "options": [
                            "A. Est un marqueur tardif de l’inflammation",
                            "B. C’est la principale protéine de la phase aiguë",
                            "C. C’est un témoin précoce de l’efficacité thérapeutique lors d’une antibiothérapie",
                            "D. Son taux usuel est de 30 g/L",
                            "E. Est augmentée dans les infections bactériennes néonatales"
                            ],
                            "correct": [1, 2, 4]
                        },
                        {
                            "text": "Au cours d'un syndrome de cytolyse hépatique s'accompagne d'une augmentation :",
                            "options": [
                            "A) Des aminotransférases",
                            "B) Des LDH (lactico-déshydrogénases)",
                            "C) De l'OCT (ornithine carbamyl transférase)",
                            "D) Du fer sérique",
                            "E) Des PAL (phosphatases alcalines)"
                            ],
                            "correct": [0, 1, 2, 3]
                        },
                        {
                            "text": "Le syndrome de cholestase se caractérise par :",
                            "options": [
                            "A) Une hypocholestérolémie",
                            "B) Une augmentation des PAL",
                            "C) Une augmentation de la bilirubine totale",
                            "D) Une augmentation des transaminases",
                            "E) Une augmentation de la γ-GT",
                            ],
                            "correct": [1, 2, 4]
                        },
                        {
                            "text": "Dans l'infarctus du myocarde (IDM), on note :",
                            "options": [
                            "A) En moins de 24 heures, une augmentation des activités enzymatiques CPK, TGO et LDH.",
                            "B) Les 3 activités enzymatiques apparaissent, atteignent leur maximum et disparaissent à peu près dans le même ordre : CPK, TGO, LDH.",
                            "C) Aucune de ces activités enzymatiques n'est spécifique du tissu cardiaque.",
                            "D) L'augmentation de ces activités enzymatiques est proportionnelle à l'importance des lésions.",
                            "E) L'importance de l'augmentation des activités enzymatiques n'a pas de valeur pronostique."
                            ],
                            "correct": [0, 1, 2, 3]
                        },
                        {
                            "text": "L'augmentation simultanée des PAL et de la γ-GT est le témoin de :",
                            "options": [
                            "A) Une hépatite aiguë",
                            "B) Un alcoolisme chronique",
                            "C) Une maladie de Paget",
                            "D) Une rétention biliaire",
                            "E) Une hépatite chronique"
                            ],
                            "correct": [3]
                        },
                        {
                            "text": "Chez un patient en état de collapsus profond sans signes cliniques de focalisation depuis quelques heures, lequel des enzymes suivants permettra le diagnostic entre hépatite aiguë grave et infarctus du myocarde ?",
                            "options": [
                            "A) TGO (ASAT)",
                            "B) TGP (ALAT)",
                            "C) PAL",
                            "D) CPK",
                            "E) LDH"
                            ],
                            "correct": [3]
                        },
                        {
                            "text": "Parmi les enzymes suivants, lequel est couramment utilisé pour vérifier l'abstinence parfaite du patient au cours d'une cure de désintoxication alcoolique ?",
                            "options": [
                            "A) TGO (ASAT)",
                            "B) TGP (ALAT)",
                            "C) Phosphatase acide",
                            "D) PAL",
                            "E) CPK"
                            ],
                            "correct": [4]
                        },
                        {
                            "text": "Quelle(s) famille(s) protéique(s) du plasma, séparables en électrophorèse standard, ne sont pas synthétisées par le foie ?",
                            "options": [
                            "A) Albumine",
                            "B) α1 globulines",
                            "C) α2 globulines",
                            "D) β globulines",
                            "E) γ globulines"
                            ],
                            "correct": [4]
                        },
                        {
                            "text": "Laquelle (ou lesquelles) parmi les lipoprotéines est (sont) formées par les cellules intestinales à partir des lipides alimentaires ?",
                            "options": [
                            "A) Chylomicrons",
                            "B) HDL",
                            "C) IDL",
                            "D) LDL",
                            "E) VLDL"
                            ],
                            "correct": [0]
                        },
                        {
                            "text": "Parmi les paramètres suivants, indiquez celui ou ceux qui s'avèrent les plus fidèles au cours d'une exploration fonctionnelle pancréatique :",
                            "options": [
                            "A) Sodium plasmatique et urinaire",
                            "B) Amylase urinaire",
                            "C) Potassium plasmatique et urinaire",
                            "D) Amylase et lipase sériques",
                            "E) Cholestérol plasmatique"
                            ],
                            "correct": [1, 3]
                        },
                        {
                            "text": "L'albumine :",
                            "options": [
                            "1) Est normalement présente dans le plasma sanguin, à un taux plus élevé que celui de l'ensemble de toutes les autres protéines.",
                            "2) Ses variations à la baisse constituent un bon marqueur de dénutrition.",
                            "3) Est le principal responsable de la pression oncotique des protéines plasmatiques.",
                            "4) Est biosynthétisée par le foie.",
                            "5) Est biosynthétisée par le rein."
                            ],
                            "correct": [0, 1, 2, 3]
                        }
                    ]
                }
            ],
            'T2': [],
            'T3': []
        },
        'random': []
    }
};

// =============================================
// ÉTAT DE L'APPLICATION
// =============================================

let currentSubject = null;
let currentExamType = null;
let currentTerm = null;
let currentExam = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let startTime = null;
let endTime = null;
let examResults = null;
let examInfo = null;

// Noms des matières
const subjectNames = {
    'hemobiologie': 'Hémobiologie',
    'immunologie': 'Immunologie', 
    'microbiologie': 'Microbiologie',
    'parasitologie': 'Parasitologie',
    'biochimie-clinique': 'Biochimie Clinique'
};

// =============================================
// FONCTIONS DE NAVIGATION
// =============================================

function showPage(pageId) {
    // Masquer toutes les pages
    const pages = ['home-page', 'exam-type-page', 'term-selection-page', 'exam-list-page', 'exam-page', 'results-page'];
    pages.forEach(page => {
        const element = document.getElementById(page);
        if (element) element.classList.add('hidden');
    });
    
    // Afficher la page demandée
    const pageElement = document.getElementById(pageId);
    if (pageElement) {
        pageElement.classList.remove('hidden');
    }
}

function showExamTypeSelection(subject) {
    currentSubject = subject;
    const titleElement = document.getElementById('exam-type-subject-title');
    if (titleElement) {
        titleElement.textContent = subjectNames[subject] || subject;
    }
    showPage('exam-type-page');
}

function showTermSelection(examType) {
    currentExamType = examType;
    const titleElement = document.getElementById('term-subject-title');
    if (titleElement) {
        titleElement.textContent = `${subjectNames[currentSubject] || currentSubject} - Examens Académiques`;
    }
    showPage('term-selection-page');
}

function showExamList(examType, term = null) {
    currentExamType = examType;
    currentTerm = term;
    
    // Mettre à jour le titre et le bouton retour
    const title = document.getElementById('exam-list-title');
    const backBtn = document.getElementById('exam-list-back-btn');
    
    if (title) {
        if (examType === 'academic') {
            title.textContent = `${subjectNames[currentSubject] || currentSubject} - Trimestre ${term}`;
        } else {
            title.textContent = `${subjectNames[currentSubject] || currentSubject} - Examens Aléatoires`;
        }
    }
    
    if (backBtn) {
        if (examType === 'academic') {
            backBtn.onclick = () => showPage('term-selection-page');
        } else {
            backBtn.onclick = () => showPage('exam-type-page');
        }
    }
    
    showPage('exam-list-page');
    
    // Charger et afficher la liste des examens
    loadExamList();
}

function loadExamList() {
    const container = document.getElementById('exam-list-container');
    if (!container) return;
    
    // Récupérer les examens depuis la base de données
    const subjectData = examDatabase[currentSubject];
    let exams = [];
    
    if (currentExamType === 'academic' && currentTerm && subjectData && subjectData.academic) {
        exams = subjectData.academic[currentTerm] || [];
    } else if (currentExamType === 'random' && subjectData) {
        exams = subjectData.random || [];
    }
    
    populateExamList(exams);
}

function populateExamList(exams) {
    const container = document.getElementById('exam-list-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (!exams || exams.length === 0) {
        container.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-triangle"></i>
                Aucun examen disponible pour le moment.
            </div>
        `;
        return;
    }
    
    exams.forEach(exam => {
        const examElement = document.createElement('div');
        examElement.className = 'exam-item';
        examElement.innerHTML = `
            <div class="exam-item-title">${exam.title || 'Examen sans titre'}</div>
            <div class="exam-item-desc">${exam.description || ''}</div>
            <div class="exam-item-meta">
                <span>${exam.questions ? exam.questions.length : 0} questions</span>
                <span>Durée estimée: ${Math.ceil((exam.questions ? exam.questions.length : 0) * 1.5)} min</span>
            </div>
        `;
        examElement.onclick = () => startExam(exam);
        container.appendChild(examElement);
    });
}

// =============================================
// FONCTIONS D'EXAMEN
// =============================================

function startExam(exam) {
    if (!exam || !exam.questions || exam.questions.length === 0) {
        alert('Cet examen ne contient pas de questions.');
        return;
    }
    
    currentExam = exam;
    currentQuestionIndex = 0;
    userAnswers = Array(exam.questions.length).fill(null);
    startTime = new Date();
    
    const titleElement = document.getElementById('exam-title');
    if (titleElement) {
        titleElement.textContent = currentExam.title || 'Examen';
    }
    
    showPage('exam-page');
    displayQuestion();
}

function displayQuestion() {
    if (!currentExam || currentQuestionIndex >= currentExam.questions.length) return;
    
    const question = currentExam.questions[currentQuestionIndex];

    const contextElement = document.getElementById('context');
    if (contextElement) {
        if (question.context) {
            contextElement.textContent = question.context;
        } else {
            contextElement.textContent = '';
        }
    }
    
    const questionNumberElement = document.getElementById('question-number');
    if (questionNumberElement) {
        questionNumberElement.textContent = currentQuestionIndex + 1;
    }
    
    const questionTextElement = document.getElementById('question-text');
    if (questionTextElement) {
        questionTextElement.textContent = question.text || '';
    }
    
    const optionsContainer = document.getElementById('options-container');
    if (optionsContainer) {
        optionsContainer.innerHTML = '';
        
        if (question.options && question.options.length > 0) {
            question.options.forEach((option, index) => {
                const optionElement = document.createElement('div');
                optionElement.className = 'option';
                
                const input = document.createElement('input');
                input.type = 'checkbox';
                input.id = `option-${index}`;
                input.name = 'question-option';
                input.value = index;
                
                if (userAnswers[currentQuestionIndex] && userAnswers[currentQuestionIndex].includes(index)) {
                    input.checked = true;
                }
                
                input.onchange = () => saveCurrentAnswers();
                
                const label = document.createElement('label');
                label.htmlFor = `option-${index}`;
                label.textContent = option || `Option ${index + 1}`;
                
                optionElement.appendChild(input);
                optionElement.appendChild(label);
                optionsContainer.appendChild(optionElement);
            });
        }
    }
    
    const currentQuestionElement = document.getElementById('current-question');
    const totalQuestionsElement = document.getElementById('total-questions');
    const progressFillElement = document.getElementById('progress-fill');
    
    if (currentQuestionElement) {
        currentQuestionElement.textContent = currentQuestionIndex + 1;
    }
    
    if (totalQuestionsElement) {
        totalQuestionsElement.textContent = currentExam.questions.length;
    }
    
    if (progressFillElement && currentExam.questions.length > 0) {
        const progress = ((currentQuestionIndex + 1) / currentExam.questions.length) * 100;
        progressFillElement.style.width = `${progress}%`;
    }
    
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (prevBtn) {
        prevBtn.disabled = currentQuestionIndex === 0;
    }
    
    if (nextBtn) {
        if (currentQuestionIndex === currentExam.questions.length - 1) {
            nextBtn.innerHTML = 'Terminer l\'examen <i class="fas fa-flag-checkered"></i>';
        } else {
            nextBtn.innerHTML = 'Question suivante <i class="fas fa-arrow-right"></i>';
        }
    }
}

function nextQuestion() {
    if (currentQuestionIndex < currentExam.questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        endTime = new Date();
        showResults();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function saveCurrentAnswers() {
    const selectedOptions = [];
    const checkboxes = document.querySelectorAll('input[name="question-option"]:checked');
    
    checkboxes.forEach(checkbox => {
        selectedOptions.push(parseInt(checkbox.value));
    });
    
    userAnswers[currentQuestionIndex] = selectedOptions;
}

function showResults() {
    let correctCount = 0;
    examResults = [];
    
    currentExam.questions.forEach((question, index) => {
        const userAnswer = userAnswers[index] || [];
        const correctAnswer = question.correct || [];
        
        const userSorted = [...userAnswer].sort();
        const correctSorted = [...correctAnswer].sort();
        
        const isCorrect = JSON.stringify(userSorted) === JSON.stringify(correctSorted);
        
        if (isCorrect) {
            correctCount++;
        }
        
        examResults.push({
            question: question.text || `Question ${index + 1}`,
            userAnswer: userAnswer.map(i => question.options[i]),
            correctAnswer: correctAnswer.map(i => question.options[i]),
            isCorrect: isCorrect,
            options: question.options || []
        });
    });
    
    const totalQuestions = currentExam.questions.length;
    let displayedScore;
    let maxScore;
    
    // Adapter le score selon le nombre de questions
    if (totalQuestions === 40) {
        // Pour 40 questions, diviser par 2 pour avoir 20/20
        displayedScore = (correctCount / 2).toFixed(1);
        maxScore = 20;
    } else if (totalQuestions === 20) {
        // Pour 20 questions, garder tel quel
        displayedScore = correctCount;
        maxScore = 20;
    } else {
        // Pour d'autres nombres, faire proportionnel
        displayedScore = ((correctCount / totalQuestions) * 20).toFixed(1);
        maxScore = 20;
    }
    
    // Calculer le pourcentage
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    
    const timeSpent = startTime ? Math.round((endTime - startTime) / 1000 / 60) : 0;
    
    examInfo = {
        title: currentExam.title || 'Examen',
        subject: currentSubject,
        score: `${displayedScore}/${maxScore}`, // Score adapté
        originalScore: `${correctCount}/${totalQuestions}`, // Score original pour référence
        percentage: percentage,
        timeSpent: timeSpent,
        correctCount: correctCount,
        totalQuestions: totalQuestions,
        pointsPerQuestion: totalQuestions === 40 ? 0.5 : 1 // Pour info
    };
    
    const finalScoreElement = document.getElementById('final-score');
    const scoreTextElement = document.getElementById('score-text');
    const resultsExamTitleElement = document.getElementById('results-exam-title');
    const correctAnswersElement = document.getElementById('correct-answers');
    const incorrectAnswersElement = document.getElementById('incorrect-answers');
    const percentageElement = document.getElementById('percentage');
    const timeSpentElement = document.getElementById('time-spent');
    
    if (finalScoreElement) finalScoreElement.textContent = examInfo.score;
    if (scoreTextElement) scoreTextElement.textContent = getScoreText(percentage);
    if (resultsExamTitleElement) resultsExamTitleElement.textContent = examInfo.title;
    if (correctAnswersElement) correctAnswersElement.textContent = examInfo.correctCount;
    if (incorrectAnswersElement) incorrectAnswersElement.textContent = examInfo.totalQuestions - examInfo.correctCount;
    if (percentageElement) percentageElement.textContent = `${examInfo.percentage}%`;
    if (timeSpentElement) timeSpentElement.textContent = `${examInfo.timeSpent} min`;
    
    // Optionnel: Ajouter une petite info sur le système de notation
    if (totalQuestions === 40) {
        const notationInfo = document.createElement('div');
        notationInfo.className = 'notation-info';
        notationInfo.innerHTML = `<small>Notation: ${correctCount} bonnes réponses ÷ 2 = ${displayedScore}/20</small>`;
        
        const resultsContainer = document.querySelector('#results-page .results-container');
        if (resultsContainer && !document.querySelector('.notation-info')) {
            resultsContainer.appendChild(notationInfo);
        }
    }
    
    showPage('results-page');
}

function getScoreText(percentage) {
    if (percentage >= 90) return "Excellent!";
    if (percentage >= 80) return "Très bien!";
    if (percentage >= 70) return "Bien!";
    if (percentage >= 60) return "Satisfaisant";
    return "Doit être amélioré";
}

function downloadPDF() {
    if (!window.jspdf) {
        alert('La bibliothèque PDF n\'est pas chargée.');
        return;
    }
    
    // Store button state if you have one
    const downloadBtn = document.querySelector('button[onclick*="downloadPDF"]') || 
                       document.getElementById('downloadBtn') ||
                       document.querySelector('.download-pdf-btn');
    let originalText = '';
    if (downloadBtn) {
        originalText = downloadBtn.innerHTML;
        downloadBtn.innerHTML = '⏳ Génération du PDF...';
        downloadBtn.disabled = true;
    }
    
    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // === START OF YOUR PDF CREATION CODE ===
        // إعدادات النص
        const marginLeft = 20;
        const pageWidth = 170; // عرض الصفحة المستخدم
        const lineHeight = 6; // ارتفاع السطر
        const questionMargin = 10; // مسافة بين الأسئلة
        
        // ترويسة
        doc.setFontSize(20);
        doc.setFont("helvetica", "bold");
        doc.text("Corrigé de l'Examen", 105, 20, null, null, 'center');
        
        doc.setFontSize(12);
        doc.setFont("helvetica", "bold");
        doc.text("Examen:", marginLeft, 35);
        doc.setFont("helvetica", "normal");
        doc.text(examInfo.title, marginLeft + 30, 35);
        
        doc.setFont("helvetica", "bold");
        doc.text("Matière:", marginLeft, 42);
        doc.setFont("helvetica", "normal");
        doc.text(subjectNames[examInfo.subject] || examInfo.subject, marginLeft + 30, 42);
        
        doc.setFont("helvetica", "bold");
        doc.text("Date:", marginLeft, 49);
        doc.setFont("helvetica", "normal");
        doc.text(new Date().toLocaleDateString('fr-FR'), marginLeft + 30, 49);
        
        // خط فاصل
        doc.setDrawColor(0, 0, 0);
        doc.setLineWidth(0.5);
        doc.line(marginLeft, 55, marginLeft + pageWidth, 55);
        
        let yPosition = 65;
        let pageNumber = 1;
        
        // دالة مساعدة لتقسيم النص
        function addWrappedText(text, x, y, maxWidth) {
            const lines = doc.splitTextToSize(text, maxWidth);
            doc.text(lines, x, y);
            return lines.length * lineHeight;
        }
        
        // دالة مساعدة لإضافة سؤال مع تقسيم النص
        function addQuestionWithWrapping(question, index) {
            let currentY = yPosition;
            
            // رقم السؤال
            doc.setFontSize(13);
            doc.setFont("helvetica", "bold");
            doc.text(`Q${index + 1}.`, marginLeft, currentY);
            
            // نص السؤال مع تقسيم إلى أسطر
            const questionText = question.text || `Question ${index + 1}`;
            doc.setFont("helvetica", "normal");
            const questionHeight = addWrappedText(questionText, marginLeft + 10, currentY, pageWidth - 10);
            currentY += questionHeight + 4;
            
            // الإجابات الصحيحة مع تقسيم النص
            const correctAnswers = question.correct || [];
            
            if (correctAnswers.length > 0 && question.options) {
                // ترتيب الإجابات
                const sortedAnswers = [...correctAnswers].sort((a, b) => a - b);
                
                sortedAnswers.forEach(correctIndex => {
                    if (correctIndex < question.options.length) {
                        const letter = String.fromCharCode(65 + correctIndex);
                        const answerText = question.options[correctIndex];
                        
                        // تنسيق الإجابة: "A) نص الإجابة"
                        const fullAnswerText = `${letter}) ${answerText}`;
                        
                        // تقسيم الإجابة إذا كانت طويلة
                        const answerHeight = addWrappedText(fullAnswerText, marginLeft + 15, currentY, pageWidth - 15);
                        currentY += answerHeight + 2;
                    }
                });
            } else if (question.correctAnswer && question.correctAnswer.length > 0) {
                // إذا كانت الإجابات مخزنة كنصوص
                question.correctAnswer.forEach((answer, answerIndex) => {
                    const letter = String.fromCharCode(65 + answerIndex);
                    const fullAnswerText = `${letter}) ${answer}`;
                    const answerHeight = addWrappedText(fullAnswerText, marginLeft + 15, currentY, pageWidth - 15);
                    currentY += answerHeight + 2;
                });
            } else {
                doc.setFont("helvetica", "italic");
                doc.setTextColor(100, 100, 100);
                doc.text("Pas de réponse correcte définie", marginLeft + 15, currentY);
                doc.setTextColor(0, 0, 0);
                currentY += lineHeight;
            }
            
            // إضافة خط فاصل
            currentY += 3;
            doc.setDrawColor(200, 200, 200);
            doc.setLineWidth(0.3);
            doc.line(marginLeft, currentY, marginLeft + pageWidth, currentY);
            
            return currentY + questionMargin - yPosition; // إرجاع الارتفاع المستخدم
        }
        
        // معالجة كل سؤال
        currentExam.questions.forEach((question, index) => {
            // التحقق من المساحة قبل إضافة السؤال
            const estimatedHeight = 50; // تقدير تقريبي للارتفاع
            if (yPosition + estimatedHeight > 280) {
                doc.addPage();
                yPosition = 20;
                pageNumber++;
                
                // ترويسة الصفحة الجديدة
                doc.setFontSize(12);
                doc.setFont("helvetica", "bold");
                doc.text(`Corrigé - Page ${pageNumber}`, 105, 30, null, null, 'center');
                doc.setDrawColor(0, 0, 0);
                doc.setLineWidth(0.5);
                doc.line(marginLeft, 35, marginLeft + pageWidth, 35);
                yPosition = 40;
            }
            
            // إضافة السؤال مع تقسيم النص
            const questionHeight = addQuestionWithWrapping(question, index);
            yPosition += questionHeight;
        });
        
        // تذييل الصفحة
        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.setFont("helvetica", "italic");
        doc.text(`Corrigé complet - ${examInfo.totalQuestions} questions - Page ${pageNumber}`, 
                 105, 285, null, null, 'center');
        // === END OF YOUR PDF CREATION CODE ===
        
        // === MOBILE-COMPATIBLE DOWNLOAD ===
        const fileName = `corrige-complet-${examInfo.title.replace(/[^a-z0-9]/gi, '-').toLowerCase()}.pdf`;
        
        // Detect if user is on mobile
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        
        if (isMobile) {
            // Method for mobile devices
            downloadForMobile(doc, fileName, isIOS);
        } else {
            // Method for desktop (original)
            doc.save(fileName);
        }
        
        // Show success message after a short delay
        setTimeout(() => {
            if (!isMobile || !isIOS) {
                alert('PDF généré avec succès!');
            }
        }, 1000);
        
    } catch (error) {
        console.error('Erreur lors de la génération du PDF:', error);
        alert('Erreur lors de la génération du PDF. Veuillez réessayer.');
    } finally {
        // Restore button state
        if (downloadBtn) {
            setTimeout(() => {
                downloadBtn.innerHTML = originalText;
                downloadBtn.disabled = false;
            }, 1000);
        }
    }
}

// === NEW FUNCTION FOR MOBILE DOWNLOAD ===
function downloadForMobile(doc, fileName, isIOS) {
    // Convert PDF to blob
    const pdfBlob = doc.output('blob');
    const blobUrl = URL.createObjectURL(pdfBlob);
    
    // Create temporary download link
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = fileName;
    link.style.display = 'none';
    
    // Add to document
    document.body.appendChild(link);
    
    if (isIOS) {
        // iOS needs special handling
        handleIOSDownload(blobUrl, fileName, link);
    } else {
        // Android and other mobile browsers
        setTimeout(() => {
            link.click();
            
            // Show Android success message
            setTimeout(() => {
                alert('PDF généré! Vérifiez votre dossier Téléchargements.');
            }, 500);
        }, 100);
    }
    
    // Clean up after a delay
    setTimeout(() => {
        if (link.parentNode) {
            document.body.removeChild(link);
        }
        URL.revokeObjectURL(blobUrl);
    }, 5000);
}

// === iOS SPECIFIC HANDLING ===
function handleIOSDownload(blobUrl, fileName, link) {
    // Try multiple methods for iOS
    
    // Method 1: Try to click the link first
    setTimeout(() => {
        link.click();
    }, 100);
    
    // Method 2: If that doesn't work, open in new tab
    setTimeout(() => {
        // Check if download started by checking if link is still in DOM
        if (document.body.contains(link)) {
            const newTab = window.open(blobUrl, '_blank');
            
            // Show iOS instructions
            setTimeout(() => {
                showIOSInstructions();
            }, 1000);
        }
    }, 500);
}

// === SHOW iOS INSTRUCTIONS ===
function showIOSInstructions() {
    // Create or show instruction modal
    let instructions = document.getElementById('ios-download-help');
    
    if (!instructions) {
        instructions = document.createElement('div');
        instructions.id = 'ios-download-help';
        instructions.innerHTML = `
            <div style="
                position: fixed;
                top: 0; left: 0;
                width: 100%; height: 100%;
                background: rgba(0,0,0,0.7);
                z-index: 9999;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
            ">
                <div style="
                    background: white;
                    padding: 25px;
                    border-radius: 15px;
                    max-width: 400px;
                    text-align: center;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                ">
                    <h3 style="margin-top: 0; color: #333;">📱 Téléchargement sur iOS</h3>
                    <p style="color: #555; line-height: 1.5;">
                        Sur iPhone/iPad, suivez ces étapes :
                    </p>
                    <ol style="text-align: left; color: #555;">
                        <li>Appuyez sur l'icône de partage <span style="font-size: 20px">⎋</span> en bas</li>
                        <li>Faites défiler vers le bas</li>
                        <li>Sélectionnez "Enregistrer dans Fichiers"</li>
                        <li>Choisissez un dossier et appuyez sur "Enregistrer"</li>
                    </ol>
                    <button onclick="this.parentElement.parentElement.remove()" 
                            style="
                                margin-top: 20px;
                                padding: 12px 25px;
                                background: #007AFF;
                                color: white;
                                border: none;
                                border-radius: 8px;
                                font-size: 16px;
                                cursor: pointer;
                            ">
                        J'ai compris
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(instructions);
    } else {
        instructions.style.display = 'flex';
    }
}

// === UNIVERSAL MOBILE DOWNLOAD FALLBACK ===
function forceMobileDownload(doc, fileName) {
    // Try multiple methods for mobile download
    
    // Method 1: Blob + anchor click
    try {
        const blob = doc.output('blob');
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        link.style.display = 'none';
        document.body.appendChild(link);
        
        // Create a proper click event
        const clickEvent = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: false
        });
        
        link.dispatchEvent(clickEvent);
        
        // Clean up
        setTimeout(() => {
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }, 1000);
        
        return true;
    } catch (e) {
        console.log('Method 1 failed:', e);
    }
    
    // Method 2: Data URI
    try {
        const dataUri = doc.output('datauristring');
        const link = document.createElement('a');
        link.href = dataUri;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return true;
    } catch (e) {
        console.log('Method 2 failed:', e);
    }
    
    // Method 3: Open in new window
    try {
        const dataUri = doc.output('datauristring');
        window.open(dataUri, '_blank');
        return true;
    } catch (e) {
        console.log('Method 3 failed:', e);
    }
    
    return false;
}

// === ADD TOUCH EVENT LISTENER FOR MOBILE ===
document.addEventListener('DOMContentLoaded', function() {
    const pdfButtons = document.querySelectorAll('button[onclick*="downloadPDF"], #downloadBtn, .download-pdf-btn');
    
    pdfButtons.forEach(button => {
        // Add touch event for mobile
        button.addEventListener('touchend', function(e) {
            e.preventDefault();
            downloadPDF();
        });
        
        // Add touch feedback styles
        button.style.cssText += `
            min-height: 44px;
            min-width: 44px;
            touch-action: manipulation;
            -webkit-tap-highlight-color: transparent;
        `;
    });
    
    // Add CSS for mobile optimization
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            button[onclick*="downloadPDF"], 
            #downloadBtn, 
            .download-pdf-btn {
                padding: 18px 30px !important;
                font-size: 18px !important;
                width: 100% !important;
                margin: 20px 0 !important;
            }
        }
        
        /* Loading animation */
        .pdf-loading {
            position: relative;
            color: transparent !important;
        }
        .pdf-loading::after {
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            top: 50%;
            left: 50%;
            margin: -10px 0 0 -10px;
            border: 2px solid #fff;
            border-radius: 50%;
            border-top-color: transparent;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
});

// === ALTERNATIVE FUNCTION FOR DIRECT USE ===
function downloadPDFMobileOptimized() {
    // This is an alternative that uses the universal fallback
    if (!window.jspdf) {
        alert('La bibliothèque PDF n\'est pas chargée.');
        return;
    }
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // ... [Insert your PDF creation code here] ...
    
    const fileName = `corrige-complet-${examInfo.title.replace(/[^a-z0-9]/gi, '-').toLowerCase()}.pdf`;
    
    // Try mobile-optimized download
    const success = forceMobileDownload(doc, fileName);
    
    if (success) {
        setTimeout(() => {
            alert('PDF généré avec succès!');
        }, 1000);
    } else {
        alert('Impossible de télécharger le PDF. Essayez avec un navigateur différent (Chrome, Safari).');
    }
}

// =============================================
// FONCTIONS DE REVUE DES RÉPONSES
// =============================================

function showAnswersReview() {
    // حساب الإحصائيات
    const correctCount = examInfo.correctCount;
    const incorrectCount = examInfo.totalQuestions - correctCount;
    
    // تحديث الإحصائيات
    document.getElementById('review-correct-count').textContent = correctCount;
    document.getElementById('review-incorrect-count').textContent = incorrectCount;
    
    // عرض جميع الأسئلة
    renderQuestionsReview('all');
    
    // إظهار الصفحة
    showPage('answers-review-page');
}

function renderQuestionsReview(filter = 'all') {
    const container = document.getElementById('questions-review-container');
    if (!container || !examResults) return;
    
    container.innerHTML = '';
    
    examResults.forEach((result, index) => {
        // تطبيق التصفية
        if (filter === 'correct' && !result.isCorrect) return;
        if (filter === 'incorrect' && result.isCorrect) return;
        
        const questionDiv = document.createElement('div');
        questionDiv.className = `review-question ${result.isCorrect ? 'correct' : 'incorrect'}`;
        
        // إنشاء خيارات السؤال
        let optionsHtml = '';
        if (result.options && result.options.length > 0) {
            result.options.forEach((option, optIndex) => {
                const isCorrect = currentExam.questions[index].correct.includes(optIndex);
                const isUserSelected = result.userAnswer.includes(result.options[optIndex]);
                
                let optionClass = 'review-option';
                if (isCorrect) optionClass += ' correct-answer';
                if (isUserSelected) {
                    optionClass += ' user-answer';
                    optionClass += result.isCorrect ? ' correct' : ' incorrect';
                }
                
                const optionLetter = String.fromCharCode(65 + optIndex);
                
                optionsHtml += `
                    <div class="${optionClass}">
                        <span class="option-indicator">${optionLetter}</span>
                        <span class="option-text">${option}</span>
                    </div>
                `;
            });
        }
        
        // نص التفسير
        const userAnswers = result.userAnswer.length > 0 ? 
            result.userAnswer.join(', ') : 'Aucune réponse';
        const correctAnswers = result.correctAnswer.join(', ');
        
        questionDiv.innerHTML = `
            <div class="question-header">
                <span class="question-number">Question ${index + 1}</span>
                <span class="question-status ${result.isCorrect ? 'status-correct' : 'status-incorrect'}">
                    ${result.isCorrect ? '✓ Correcte' : '✗ Incorrecte'}
                </span>
            </div>
            
            <div class="question-text">${result.question}</div>
            
            <div class="review-options">
                ${optionsHtml}
            </div>
            
            <div class="explanation">
                <strong>Votre réponse:</strong> ${userAnswers}
                <br>
                <strong>Réponse correcte:</strong> ${correctAnswers}
            </div>
        `;
        
        container.appendChild(questionDiv);
    });
    
    // إذا لم توجد أسئلة بعد التصفية
    if (container.innerHTML === '') {
        container.innerHTML = `
            <div class="no-questions-message">
                <i class="fas fa-info-circle"></i>
                Aucune question ne correspond au filtre sélectionné.
            </div>
        `;
    }
}

function filterReview(type) {
    // تحديث أزرار التصفية
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // تفعيل الزر المحدد
    const activeBtn = Array.from(document.querySelectorAll('.filter-btn')).find(btn => {
        const text = btn.textContent.toLowerCase();
        return (type === 'all' && text === 'toutes') ||
               (type === 'correct' && text === 'correctes') ||
               (type === 'incorrect' && text.includes('incorrectes'));
    });
    
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
    
    // إعادة عرض الأسئلة مع التصفية
    renderQuestionsReview(type);
}

// أضف هذه الدوال إلى الكائن window حتى تكون متاحة في HTML
window.showAnswersReview = showAnswersReview;
window.filterReview = filterReview;  

// =============================================
// INITIALISATION
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    showPage('home-page');
    console.log('Application initialisée avec succès!');
    console.log('Examens disponibles:');
    console.log('- Immunologie T1:', examDatabase.immunologie.academic.T1.length);
    console.log('- Microbiologie T1:', examDatabase.microbiologie.academic.T1.length);
    console.log('- Hémobiologie T1:', examDatabase.hemobiologie.academic.T1.length);
    console.log('- Parasitologie T1:', examDatabase.parasitologie.academic.T1.length);
    console.log('- Biochimie Clinique T1:', examDatabase['biochimie-clinique'].academic.T1.length);
});

// =============================================
// FONCTIONS UTILITAIRES GLOBALES
// =============================================

// Ces fonctions doivent être accessibles depuis le HTML
window.showPage = showPage;
window.showExamTypeSelection = showExamTypeSelection;
window.showTermSelection = showTermSelection;
window.showExamList = showExamList;
window.previousQuestion = previousQuestion;
window.nextQuestion = nextQuestion;

window.downloadPDF = downloadPDF;

