const obrasSociales = [
  'Particular',
  'Aca Salud',
  'Accord Salud',
  'Aceros Paraná (OSAP)',
  'AMC Solidaria',
  'AMR Salud',
  'APROSS',
  'Asociart ART',
  'Caja de Ingenieros',
  'Caja Forense',
  'Centro De Agentes De Propaganda Medica',
  'CUD',
  'DEMI Salud',
  'Federada Salud',
  'FIDEI - OSCEP',
  'Galeno',
  'Grupo Oroño SM',
  'Grupo San Nicolás (GSN)',
  'IAPOS',
  'IOMA',
  'IOSFA',
  'Jerárquicos Salud',
  'Locutores',
  'Luis Pasteur',
  'Medicina Esencial',
  'Medicus',
  'Medifé',
  'Medycin',
  'Mutual SAMI (San Nicolás)',
  'MUTUALYF',
  'Obra Social de Petroleros de Córdoba',
  'OMINT',
  'OSCTCP',
  'OSDE',
  'OSDOP',
  'OSJRA',
  'OSMISS',
  'OSPAC',
  'OSPE',
  'OSPESGA',
  'OSSEG',
  'OSUNR',
  'PAMI',
  'Pequeña familia',
  'Prevención Salud',
  'Proapro (2da Circ Sta Fe)',
  'Sanarte Asistencia Medica Privada',
  'Sancor Salud',
  'Servesalud',
  'SMATA',
  'Swiss Medical',
  'TV',
  'Unimed',
  'UOM',
  'UTHGRA',
];

const provincias = [
  'Ciudad de Buenos Aires y GBA',
  'Buenos Aires',
  'Catamarca',
  'Chaco',
  'Chubut',
  'Córdoba',
  'Corrientes',
  'Entre Ríos',
  'Formosa',
  'Jujuy',
  'La Pampa',
  'La Rioja',
  'Mendoza',
  'Misiones',
  'Neuquén',
  'Río Negro',
  'Salta',
  'San Juan',
  'San Luis',
  'Santa Cruz',
  'Santa Fe',
  'Santiago del Estero',
  'Tierra del Fuego',
  'Tucumán',
];

const provincias_large = [
  'Ciudad de Buenos Aires',
  'GBA Zona Norte',
  'GBA Zona Noroeste',
  'GBA Zona Oeste',
  'GBA Zona Sudoeste',
  'GBA Zona Sudeste',
  'Buenos Aires',
  'Catamarca',
  'Chaco',
  'Chubut',
  'Córdoba',
  'Corrientes',
  'Entre Ríos',
  'Formosa',
  'Jujuy',
  'La Pampa',
  'La Rioja',
  'Mendoza',
  'Misiones',
  'Neuquén',
  'Río Negro',
  'Salta',
  'San Juan',
  'San Luis',
  'Santa Cruz',
  'Santa Fe',
  'Santiago del Estero',
  'Tierra del Fuego',
  'Tucumán',
];

const localidades_map = {
  'Ciudad de Buenos Aires': [
    'Todas las Localidades',
    'Belgrano - Colegiales',
    'Boedo - Almagro - Congreso - San Cristóbal',
    'Caballito - Parque Chacabuco',
    'Centro - Retiro - Monserrat - Puerto Madero',
    'Chacarita - Villa Ortúzar- Villa Crespo',
    'Constitución - Boca - Barracas - San Telmo',
    'Flores - Floresta',
    'Liniers - Versailles - Villa Luro - Vélez Sarsfield',
    'Mataderos - Parque Avellaneda',
    'Nueva Pompeya - Parque Patricios',
    'Palermo',
    'Recoleta',
    'Saavedra - Núñez - Coghlan',
    'V.del Parque - Agronomía - La Paternal -V.Santa Rita-V.Mitre',
    'Villa Devoto - Villa Real - Monte Castro',
    'Villa Lugano - Villa Soldati - Villa Riachuelo',
    'Villa Pueyrredón - Villa Urquiza',
  ],
  'GBA Zona Norte': [
    'Todas las Localidades',
    'Acassuso',
    'Beccar',
    'Benavídez',
    'Boulogne',
    'Carapachay',
    'El Talar',
    'Escobar',
    'Florida',
    'Garín',
    'Gral. Pacheco',
    'Grand Bourg',
    'Ing. Maschwitz',
    'La Lucila',
    'Lomas de San Isidro',
    'Maquinista Savio',
    'Martínez',
    'Matheu',
    'Munro',
    'Olivos',
    'Rincón de Milberg',
    'San Fernando',
    'San Isidro',
    'Tigre',
    'Troncos del Talar',
    'Vicente López',
    'Victoria',
    'Villa Adelina',
    'Villa Martelli',
    'Virreyes',
  ],
  'GBA Zona Noroeste': [
    'Todas las Localidades',
    'Bella Vista',
    'Caseros',
    'Chilavert',
    'Ciudad Jardín',
    'Del Viso',
    'Don Torcuato',
    'El Palomar',
    'Hurlingham',
    'Ing. Adolfo Sourdeaux',
    'José C. Paz',
    'José L. Suárez',
    'La Lonja',
    'Loma Hermosa',
    'Los Polvorines',
    'Malaver',
    'Manuel Alberti',
    'Martín Coronado',
    'Muñiz',
    'Pablo Nogués',
    'Pablo Podestá',
    'Pilar',
    'Pte. Derqui',
    'Sáenz Peña',
    'San Andrés',
    'San Martín',
    'San Miguel',
    'Santos Lugares',
    'Tortuguitas',
    'Villa Ballester',
    'Villa Bosch',
    'Villa de Mayo',
    'Villa Lynch',
    'Villa Maipú',
    'Villa Morra',
    'Villa Rosa',
    'William Morris',
  ],
  'GBA Zona Oeste': [
    'Todas las Localidades',
    'Aldo Bonzi',
    'Castelar',
    'Ciudad Evita',
    'Ciudad Madero',
    'Ciudadela',
    'Francisco Álvarez',
    'González Catán',
    'Gregorio de Laferrere',
    'Haedo',
    'Isidro Casanova',
    'Ituzaingó',
    'José Ingenieros',
    'La Reja',
    'Lomas del Mirador',
    'Merlo',
    'Moreno',
    'Morón',
    'Paso del Rey',
    'Rafael Castillo',
    'Ramos Mejía',
    'San Antonio de Padua',
    'San Justo',
    'Tablada',
    'Tapiales',
    'Villa Celina',
    'Villa Insuperable',
    'Villa Luzuriaga',
    'Villa Sarmiento',
    'Villa Tesei',
    'Virrey del Pino',
  ],
  'GBA Zona Sudoeste': [
    'Todas las Localidades',
    'Adrogué',
    'Banfield',
    'Burzaco',
    'Canning',
    'Carlos Spegazzini',
    'Ezeiza',
    'Gerli',
    'Glew',
    'Ing. Budge',
    'José Mármol',
    'Lanús',
    'Llavallol',
    'Lomas de Zamora',
    'Longchamps',
    'Luis Guillón',
    'Monte Chingolo',
    'Monte Grande',
    'Rafael Calzada',
    'Remedios de Escalada',
    'San José',
    'Temperley',
    'Tristán Suárez',
    'Turdera',
    'Valentín Alsina',
  ],
  'GBA Zona Sudeste': [
    'Todas las Localidades',
    'Avellaneda',
    'Berazategui',
    'Bernal',
    'Claypole',
    'Dock Sud',
    'Don Bosco',
    'Ezpeleta',
    'Florencio Varela',
    'Gerli',
    'Hudson',
    'Juan M. Gutiérrez',
    'Piñeyro',
    'Plátanos',
    'Quilmes',
    'Ranelagh',
    'San Francisco Solano',
    'Sarandí',
    'Villa Domínico',
    'Wilde',
  ],
  'Buenos Aires': [
    'Todas las Localidades',
    '25 de Mayo',
    '30 de Agosto',
    '9 de Julio',
    'Abasto',
    'Acevedo',
    'Adolfo González Chaves y alrededores',
    'Agustín Roca y alrededores',
    'Alberti y alrededores',
    'Alejandro Korn',
    'Alsina',
    'Ameghino y alrededores',
    'América',
    'Arboleda',
    'Arenaza',
    'Arrecifes',
    'Arribeños y alrededores',
    'Arroyo Dulce',
    'Arturo Seguí',
    'Ascensión y alrededores',
    'Ayacucho',
    'Azul, Chillar y Cacharí',
    'Bahía Blanca y alrededores',
    'Baigorrita',
    'Balcarce',
    'Banderalo',
    'Baradero',
    'Barker y Villa Cacique',
    'Bartolomé Bavio',
    'Batán y alrededores',
    'Bayauca y alrededores',
    'Benito Juárez y Vela María Ignacia',
    'Berisso',
    'Berutti',
    'Blaquier',
    'Bolívar y alrededores',
    'Bonifacio',
    'Bragado y alrededores',
    'Brandsen',
    'Camet',
    'Campana',
    'Campo Salles',
    'Cañada Seca',
    'Cañuelas',
    'Capilla del Señor y alrededores',
    'Capitán Sarmiento y alrededores',
    'Carabelas y alrededores',
    'Carhué y alrededores',
    'Carlos Casares y alrededores',
    'Carlos Keen',
    'Carlos Salas',
    'Carlos Spegazzini',
    'Carlos Tejedor',
    'Carmen de Areco',
    'Carmen de Patagones',
    'Casbas',
    'Castelli y alrededores',
    'Castilla',
    'Chacabuco y alrededores',
    'Chascomús',
    'Chivilcoy',
    'City Bell',
    'Claráz',
    'Cnel. Charlone y alrededores',
    'Cnel. Dorrego y alrededores',
    'Cnel. Granada y alrededores',
    'Cnel. Pringles y alrededores',
    'Cnel. Suárez y alrededores',
    'Cnel. Vidal y alrededores',
    'Colón',
    'Colonia Seré',
    'Comodoro Py',
    'Conesa',
    'Cortinez',
    'Costa Azul',
    'Costa del Este',
    'Curarú',
    'Daireaux',
    'Darregueira y alrededores',
    'Del Valle',
    'Dolores y alrededores',
    'Domselaar',
    'Dudignac',
    'El Socorro',
    'El Triunfo y alrededores',
    'Emilio V. Bunge',
    'Ensenada',
    'Etcheverry',
    'Ferré y alrededores',
    'Fortín Olavarría y alrededores',
    'Francisco Madero',
    'French',
    'Gahan',
    'Garré',
    'Gdor. Castro',
    'Gdor. Ugarte',
    'Germania y alrededores',
    'González Moreno',
    'Gorina',
    'Gowland',
    'Gral. Alvear',
    'Gral. Arenales y alrededores',
    'Gral. Belgrano',
    'Gral. Conesa',
    'Gral. Guido',
    'Gral. Lamadrid',
    'Gral. Las Heras',
    'Gral. Madariaga',
    'Gral. O`Brien y alrededores',
    'Gral. Pinto y alrededores',
    'Gral. Pirán',
    'Gral. Rodríguez y alrededores',
    'Gral. Rojo',
    'Gral. Villegas y alrededores',
    'Guaminí y alrededores',
    'Guernica',
    'Guerrico',
    'Henderson',
    'Hernández',
    'Huanguelén',
    'Hudson',
    'Inés Indart y alrededores',
    'Ireneo Portela',
    'Iriarte',
    'J. M. Gutiérrez',
    'J. N. Fernández',
    'Jáuregui',
    'Jeppener',
    'Juan B. Alberdi y alrededores',
    'Juan José Paso',
    'Junín y alrededores',
    'L. N. Alem',
    'La Colina',
    'La Dulce',
    'La Emilia',
    'La Granja',
    'La Lucila del Mar y alrededores',
    'La Plata ',
    'La Violeta',
    'Laprida y San Jorge',
    'Las Flores',
    'Las Malvinas',
    'Las Toninas',
    'Las Toscas',
    'Lezama',
    'Lima',
    'Lincoln y alrededores',
    'Lisandro Olmos',
    'Lobería y alrededores',
    'Lobos',
    'Los Cardales',
    'Los Hornos',
    'Los Toldos y alrededores',
    'Luján',
    'M.B. Gonnet',
    'Magdala',
    'Magdalena',
    'Maipú y alrededores',
    'Manuel Ocampo',
    'Mar de Ajó y alrededores',
    'Mar del Plata y alrededores',
    'Mar del Tuyú',
    'Marcos Paz',
    'Mariano H. Alfonzo',
    'Martínez de Hoz',
    'Mechita',
    'Mechongué',
    'Melchor Romero',
    'Mercedes',
    'Miramar y alrededores',
    'Moctezuma',
    'Mones Cazón',
    'Monte',
    'Moquehua',
    'Morea',
    'Morse',
    'Mosconi',
    'Navarro',
    'Necochea',
    'Norberto de la Riestra',
    'Norberto de la Riestra',
    "O'Higgins y alrededores",
    'Olavarría, Sierras Bayas, Hinojo y alrededores',
    'Olivera',
    'Open Door',
    'Otamendi',
    'Parada Robles',
    'Pasteur',
    'Patricios',
    'Pedernales',
    'Pedernales',
    'Pedro Luro y alrededores',
    'Pehuajó y alrededores',
    'Pellegrini y alrededores',
    'Pérez Millán',
    'Pergamino',
    'Piedritas y alrededores',
    'Pigüé y alrededores',
    'Pila',
    'Pinamar y alrededores',
    'Pirovano',
    'Pueblo Nuevo',
    'Pueblo San José',
    'Pueblo Santa María',
    'Pueblo Santa Trinidad',
    'Punta Alta',
    'Punta Lara',
    'Quenumá y alrededores',
    'Quequén',
    'Quiroga',
    'Rafael Obligado y alrededores',
    'Ramallo',
    'Ranchos',
    'Rauch',
    'Rawson y alrededores',
    'Ringuelet',
    'Río Tala',
    'Roberts',
    'Rojas y alrededores',
    'Roque Pérez',
    'Saladillo',
    'Salazar',
    'Salliqueló',
    'Salto y alrededores',
    'Salvador María',
    'San Andrés de Giles y alrededores',
    'San Antonio de Areco y alrededores',
    'San Bernardo',
    'San Cayetano',
    'San Clemente y alrededores',
    'San Enrique',
    'San Manuel',
    'San Nicolás',
    'San Pedro',
    'San Vicente',
    'Sansinena',
    'Santa Clara del Mar y alrededores',
    'Santa Eleodora',
    'Santa Lucía',
    'Santa Regina',
    'Santa Teresita',
    'Sierra de los Padres',
    'Suipacha y alrededores',
    'Tandil',
    'Tapalqué',
    'Timote',
    'Tolosa',
    'Tornquist y alrededores',
    'Torres',
    'Trenque Lauquen',
    'Tres Algarrobos',
    'Tres Arroyos y alrededores',
    'Tres Lomas y alrededores',
    'Tres Sargentos',
    'Urdampilleta',
    'Urquiza',
    'Valdes',
    'Valeria del Mar',
    'Vedia y alrededores',
    'Verónica',
    'Villa del Plata',
    'Villa Elisa',
    'Villa Elvira',
    'Villa Fournier',
    'Villa Gesell y alrededores',
    'Villa Gral. Savio',
    'Villa La Arcadia',
    'Villa Maza',
    'Villa Ramallo',
    'Villa Saboya y alrededores',
    'Villa Sauce',
    'Zárate',
  ],
  Catamarca: [
    'Todas las Localidades',
    'Andalgalá',
    'Belén y alrededores',
    'Capayán y alrededores',
    'Catamarca',
    'F. M. Esquiú y alrededores',
    'La Paz y alrededores',
    'Paclín y alrededores',
    'Pomán y alrededores',
    'Santa María y alrededores',
    'Santa Rosa y alrededores',
    'Tinogasta y alrededores',
    'Valle Viejo y alrededores',
  ],
  Chaco: [
    'Todas las Localidades',
    'Avia Terai',
    'Barranqueras',
    'Basail',
    'Campo Largo',
    'Charata y alrededores',
    'Cnel. Du Graty',
    'Colonia Benitez',
    'Colonias Unidas y alrededores',
    'Concepción del Bermejo',
    'Corzuela',
    'Fontana',
    'Gancedo',
    'Gral. Pinedo',
    'Gral. San Martín y alrededores',
    'Gral. Vedia y alrededores',
    'Hermoso Campo',
    'Juan José Castelli',
    'La Clotilde',
    'La Escondida y alrededores',
    'La Leonesa',
    'La Tigra',
    'La Verde',
    'Las Breñas y alrededores',
    'Las Palmas ',
    'Machagai y alrededores',
    'Makallé',
    'Margarita Belén y alrededores',
    'Napenay',
    'Pampa del Indio',
    'Pampa del Infierno y alrededores',
    'Pdcia. de la Plaza',
    'Pdcia. Roca',
    'Pdcia. Roque Sáenz Peña y alrededores',
    'Puerto Tirol',
    'Puerto Vilelas',
    'Quitilipi',
    'Resistencia',
    'San Bernardo',
    'Santa Sylvina y alrededores',
    'Taco Pozo',
    'Tres Isletas',
    'Villa Angela y alrededores',
    'Villa Berthet',
  ],
  Chubut: [
    'Todas las Localidades',
    'Camarones',
    'Comodoro Rivadavia',
    'Dique Florentino Ameghino',
    'Dolavon',
    'El Hoyo',
    'El Maitén',
    'Esquel',
    'Esquel',
    'Gaiman',
    'Gan Gan',
    'Gastre',
    'Gobernador Costa',
    'José de San Martín',
    'Lago Puelo',
    'Las Plumas',
    'Paso de Indios',
    'Playa Unión',
    'Puerto Madryn',
    'Puerto Pirámides',
    'Rada Tilly',
    'Rawson',
    'Río Pico',
    'Sarmiento',
    'Telsen',
    'Trelew',
    'Trevelin',
    'Trevelín',
  ],
  Córdoba: [
    'Todas las Localidades',
    'Achiras',
    'Adelia María',
    'Agua de Oro',
    'Alcira Gigena',
    'Aldea Santa María',
    'Alejandro Roca',
    'Alejo Ledesma y alrededores',
    'Alicia y alrededores',
    'Almafuerte',
    'Alpa Corral',
    'Alta Gracia',
    'Altos de Chipión y alrededores',
    'Anisacate',
    'Arias',
    'Arroyito y alrededores',
    'Arroyo Cabral y alrededores',
    'Ausonia',
    'Ballesteros',
    'Balnearia',
    'Bell Ville',
    'Bengolea',
    'Berrotarán',
    'Bialet Masse',
    'Bouchardo',
    'Brinkmann',
    'Bulnes',
    'Calchin',
    'Camilo Aldao',
    'Cañada de Luque',
    'Canals',
    'Capilla del Monte',
    'Carnerillo',
    'Carrilobo',
    'Cavanagh',
    'Chajan',
    'Charras',
    'Chazón',
    'Cintra y alrededores',
    'Cnel. Baigorria',
    'Cnel. Moldes ',
    'Colonia Almada',
    'Colonia Caroya',
    'Colonia Marina',
    'Colonia Tirolesa',
    'Colonia Vignaud',
    'Comuna las Peñas Sud',
    'Córdoba Capital',
    'Corral de Bustos',
    'Corralito',
    'Cosquín',
    'Costa Sacate',
    'Cruz Alta',
    'Cruz Chica',
    'Cruz del Eje',
    'Dalmacio Vélez Sarsfield',
    'Deán Funes',
    'Del Campillo',
    'Despeñaderos',
    'Devoto y alrededores',
    'Dumesnil',
    'El Manzano',
    'El Rastreador',
    'El Tío',
    'Elena',
    'Embalse',
    'Etruria',
    'Freyre',
    'Gral. Baldissera',
    'Gral. Cabrera',
    'Gral. Deheza',
    'Gral. Levalle y alrededores',
    'Gral. Ordóñez',
    'Gral. Roca',
    'Guatimozín',
    'Hernando',
    'Holmberg',
    'Huanchilla',
    'Huerta Grande',
    'Huinca Renancó',
    'Icho Cruz',
    'Idíazabal',
    'Inriville',
    'Isla Verde',
    'Italó',
    'James Craik y alrededores',
    'Jesús María',
    'Jovita',
    'Justiniano Posse',
    'La Calera',
    'La Carlota',
    'La Cautiva',
    'La Cesira',
    'La Cumbre',
    'La Cumbrecita',
    'La Falda',
    'La Francia',
    'La Granja',
    'La Laguna',
    'La Paquita',
    'La Para',
    'La Paz',
    'La Playosa',
    'La Población',
    'La Tordilla',
    'Laborde',
    'Laboulaye',
    'Laguna Larga',
    'Las Acequias',
    'Las Albahacas',
    'Las Higueras',
    'Las Peñas',
    'Las Perdices',
    'Las Rosas',
    'Las Tapias',
    'Las Varas',
    'Las Varillas',
    'Las Vertientes',
    'Leones',
    'Los Cisnes',
    'Los Cóndores',
    'Los Surgentes',
    'Luque',
    'Malagueño',
    'Marcos Juárez',
    'Marull',
    'Mattaldi y alrededores',
    'Mayú Sumaj',
    'Melo',
    'Mendiolaza',
    'Mina Clavero',
    'Miramar',
    'Monte Buey',
    'Monte Cristo',
    'Monte de los Gauchos',
    'Monte Maíz y alrededores',
    'Morrison',
    'Morteros',
    'Noetinger',
    'Nono',
    'Olaeta',
    'Oliva',
    'Oncativo',
    'Pascanas',
    'Pasco',
    'Pilar',
    'Pincén',
    'Piquillín',
    'Porteña',
    'Pozo del Molle',
    'Prueba',
    'Pueblo Italiano',
    'Quilino',
    'Reduccion',
    'Río Ceballos',
    'Río Cuarto y alrededores',
    'Río Primero',
    'Río Segundo',
    'Río Tercero',
    'S. M. Laspiur',
    'Sacanta',
    'Saira',
    'Saldán',
    'Salsipuedes',
    'Sampacho',
    'San Agustín',
    'San Antonio de Arredondo',
    'San Antonio de Litín',
    'San Basilio',
    'San Francisco y alrededores',
    'San Javier',
    'San Marcos',
    'Santa Eufemia',
    'Santa María de Punilla',
    'Santa Rosa de Calamuchita',
    'Seeber',
    'Serrano',
    'sin localidad',
    'Suco',
    'Tancacha',
    'Tanti',
    'Ticino y alrededores',
    'Tío Pujio',
    'Toledo',
    'Tosquita',
    'Tránsito',
    'Ucacha',
    'Unquillo',
    'Valle Hermoso',
    'Vaquerías',
    'Viamonte',
    'Vicuña Mackenna',
    'Villa Allende',
    'Villa Ascasubi',
    'Villa Caeiro',
    'Villa Carlos Paz',
    'Villa Ciudad Parque',
    'Villa Concepción del Tío',
    'Villa Cura Brochero',
    'Villa de las Rosas',
    'Villa de María del Río Seco',
    'Villa de Soto',
    'Villa del Dique',
    'Villa del Rosario',
    'Villa del Totoral',
    'Villa Dolores',
    'Villa General Belgrano',
    'Villa Giardino',
    'Villa Huidobro',
    'Villa María',
    'Villa Nueva',
    'Villa Rossi y alrededores',
    'Villa Rumipal',
    'Villa Santa Cruz del Lago',
    'Villa Santa Rosa de Río Primero',
    'Villa Valeria',
    'W. Escalante',
    'Washington',
  ],
  Corrientes: [
    'Todas las Localidades',
    'Alvear',
    'Bella Vista y alrededores',
    'Berón de Astrada',
    'Caá Catí',
    'Concepción, Santa Rosa y alrededores',
    'Corrientes Capital y alrededores',
    'Curuzú Cuatiá y alrededores',
    'Esquina',
    'Gdor. Virasoro y alrededores',
    'Goya y Santa Lucía',
    'Itá Ibaté y alrededores',
    'Ituzaingó',
    'Lavalle y alrededores',
    'Mercedes y alrededores',
    'Monte Caseros y alrededores',
    'Paso de los Libres y alrededores',
    'Saladas y alrededores',
    'San Roque y alrededores',
    'Santo Tomé y alrededores',
    'Yapeyú y alrededores',
  ],
  'Entre Ríos': [
    'Todas las Localidades',
    'Alcaráz',
    'Aldea Brasilera',
    'Aldea Valle María',
    'Aranguren',
    'Basavilbaso y alrededores',
    'Bovril',
    'Caseros',
    'Cerrito',
    'Chajarí y alrededores',
    'Colón y alrededores',
    'Colonia Avellaneda',
    'Colonia Nueva',
    'Concepción del Uruguay y alrededores',
    'Concordia y alrededores',
    'Crespo',
    'Diamante',
    'Federación',
    'Federal y alrededores',
    'Gdor. Mansilla',
    'Gral. Galarza',
    'Gral. Ramírez',
    'Gualeguay',
    'Gualeguaychú y alrededores',
    'Hasenkamp',
    'Hernandarias',
    'Islas del Ibicuy y alrededores',
    'La Paz',
    'La Picada',
    'Larroque y alrededores',
    'Libertador San Martín',
    'Los Charrúas y alrededores',
    'Lucas González',
    'Maciá',
    'María Grande',
    'María Luisa',
    'Nogoyá',
    'Oro Verde',
    'Paraná',
    'Piedras Blancas',
    'Rosario del Tala',
    'San Benito',
    'San José de Feliciano',
    'San José y alrededores',
    'San Salvador y alrededores',
    'Santa Elena',
    'Seguí',
    'Tabossi',
    'Urdinarrain y alrededores',
    'Viale',
    'Victoria',
    'Villa Clara',
    'Villa Domínguez',
    'Villa Elisa y alrededores',
    'Villa Hernández',
    'Villa Urquiza',
    'Villaguay',
  ],
  Formosa: [
    'Todas las Localidades',
    'Clorinda',
    'Comandante Fontana',
    'El Colorado',
    'El Espinillo',
    'Estanislao del Campo',
    'Formosa ',
    'Gral. Belgrano',
    'Ibarreta',
    'Ingeniero Juárez',
    'Laguna Blanca',
    'Laguna Naineck',
    'Las Lomitas',
    'Mayor E. Villafañe',
    'Misión Laishi',
    'Palo Santo',
    'Pirané',
    'Riacho He-He',
    'San Martín Dos',
    'Villa Dos Trece',
    'Villa Escolar',
    'Villa Gral. Güemes',
  ],
  Jujuy: [
    'Todas las Localidades',
    'Abra Pampa',
    'El Carmen',
    'Fraile Pintado',
    'Humahuaca',
    'La Mendieta',
    'La Quiaca',
    'Lib. Gral. San Martín',
    'Maimara',
    'Monterrico',
    'Palpalá',
    'Perico',
    'Puesto Viejo',
    'San Pedro',
    'San Salvador de Jujuy',
    'Susques',
    'Tilcara',
    'Yuto',
  ],
  'La Pampa': [
    'Todas las Localidades',
    'Alpachiri',
    'Alta Italia',
    'Anguil',
    'Arata',
    'Ataliva Roca',
    'Bernardo Larroudé',
    'Bernasconi',
    'Caleufú',
    'Catriló',
    'Cnel. H. Lagos',
    'Col. 25 de Mayo',
    'Colonia Barón',
    'Conhello',
    'Doblas',
    'Eduardo Castex',
    'Emb. Martini',
    'Gral. Acha',
    'Gral. Campos',
    'Gral. Pico',
    'Gral. San Martín',
    'Guatrache',
    'Ing. Luiggi',
    'Int. Alvear',
    'Jacinto Arauz',
    'La Adela',
    'La Maruja',
    'Lonquimay',
    'Luan Toro',
    'Macachin',
    'Mauricio Mayer',
    'Miguel Cané',
    'Miguel Riglos',
    'Monte Nievas',
    'Parera',
    'Quemú Quemú',
    'Quetrequén',
    'Rancul',
    'Realicó',
    'Rolón',
    'Santa Isabel',
    'Santa Rosa',
    'Toay',
    'Trenel',
    'Uriburu',
    'Victorica',
    'Villa Mirasol',
    'Winifreda',
  ],
  'La Rioja': [
    'Todas las Localidades',
    'Aimogasta y alrededores',
    'Anillaco',
    'Chamical y alrededores',
    'Chepes',
    'Chilecito y alrededores',
    'Famatina y alrededores',
    'Guandacol',
    'La Rioja Capital y alrededores',
    'Malanzán',
    'Milagro',
    'Nonogasta',
    'Olta',
    'Sanagasta',
    'Tama',
    'Ulapes',
    'Villa Mazán',
    'Villa Unión',
    'Vinchina y alrededores',
  ],
  Mendoza: [
    'Todas las Localidades',
    'Ciudad de Mendoza',
    'Departamento Godoy Cruz',
    'Departamento Gral. Alvear',
    'Departamento Guaymallén',
    'Departamento Junín',
    'Departamento La Paz',
    'Departamento Las Heras',
    'Departamento Lavalle',
    'Departamento Luján',
    'Departamento Maipú',
    'Departamento Malargüe',
    'Departamento Rivadavia',
    'Departamento San Carlos',
    'Departamento San Martín',
    'Departamento San Rafael',
    'Departamento Santa Rosa',
    'Departamento Tunuyán',
    'Departamento Tupungato',
  ],
  Misiones: [
    'Todas las Localidades',
    '2 de Mayo',
    '25 de Mayo',
    '9 de Julio',
    'Alba Posse',
    'Almirante Brown',
    'Apóstoles',
    'Aristóbulo del Valle',
    'Azara',
    'Bernardo de Irigoyen',
    'Bonpland',
    'Campo Grande',
    'Campo Ramón',
    'Campo Viera',
    'Candelaria',
    'Capioví',
    'Cerro Azul',
    'Colonia Aurora',
    'Colonia Delicia',
    'Colonia Guaraní',
    'Comandante Andresito',
    'Concepción de la Sierra',
    'El Soberbio',
    'Eldorado',
    'Garuhapé',
    'Garupá',
    'Gobernador Roca',
    'Jardín América',
    'Leandro N. Alem',
    'Montecarlo',
    'Oberá',
    'Posadas',
    'Puerto Esperanza',
    'Puerto Iguazú',
    'Puerto Libertad',
    'Puerto Piray',
    'Puerto Rico',
    'Ruiz de Montoya',
    'Salto Encantado',
    'San Ignacio',
    'San Javier',
    'San José',
    'San Pedro',
    'San Vicente',
    'Santa Ana',
    'Santa Rita',
    'Santo Pipó',
    'Wanda',
  ],
  Neuquén: [
    'Todas las Localidades',
    'Aluminé-Copahue-El Huecú-Las Lajas-Loncopue-Zapala',
    'Andacollo-Buta Ranquil-Chos Malal',
    'Añelo - San Patricio del Chañar',
    'Centenario',
    'Ciudad de Neuquén',
    'Cutral Co-Picún Leufú-P. del Aguila-P. Huincul',
    'Junín ',
    'Junín de los Andes',
    'Plottier-Senillosa-Villa el Chocón',
    'Rincón de los Sauces',
    'San Martín de los Andes',
    'Villa La Angostura',
  ],
  'Río Negro': [
    'Todas las Localidades',
    'Catriel',
    'Cervantes-General Roca',
    'Chimpay-Choele Choel-Cnel. Belisle-Darwin',
    'Cinco Saltos - Villa Manzano',
    'Cipolletti-Fernández Oro-Allen',
    'El Bolsón',
    'Ingeniero Huergo-Mainque-Villa Regina-Enrique Godoy-Chichinales',
    'Ingeniero Jacobacci',
    'Las Grutas',
    'Los Menucos',
    'Ñorquinco',
    'Río Colorado y alrededores',
    'San Antonio Oeste',
    'San Carlos de Bariloche',
    'Sierra Colorada y alrededores',
    'Sierra Grande y alrededores',
    'Valcheta',
    'Viedma y alrededores',
  ],
  Salta: [
    'Todas las Localidades',
    'Aguaray',
    'Apolinario Saravia y Alrededores',
    'Cachi y Alrededores',
    'Cafayate y Alrededores',
    'Campo Quijano',
    'Cerrillos',
    'Chicoana',
    'Cnel. Moldes',
    'Colonia Santa Rosa',
    'El Carril',
    'El Galpón',
    'El Quebrachal',
    'Embarcación',
    'Gral. Güemes',
    'Gral. Mosconi y Alrededores',
    'Guachipas',
    'Hipólito Yrigoyen',
    'Iruya',
    'Joaquín V. González',
    'La Merced',
    'La Viña',
    'Las Lajitas',
    'Metán',
    'Orán y Alrededores',
    'Pichanal',
    'Pocitos',
    'Rivadavia y Alrededores',
    'Rosario de la Frontera y Alrededores',
    'Rosario de Lerma y Alrededores',
    'Salta Capital',
    'Salvador Mazza',
    'San Antonio de los Cobres',
    'Santa Victoria',
    'Tartagal',
  ],
  'San Juan': [
    'Todas las Localidades',
    'Departamento 25 de Mayo',
    'Departamento 9 de Julio',
    'Departamento Albardón',
    'Departamento Angaco',
    'Departamento Calingasta',
    'Departamento Caucete',
    'Departamento Chimbas',
    'Departamento Iglesia',
    'Departamento Jáchal',
    'Departamento Pocito',
    'Departamento Rawson',
    'Departamento Rivadavia',
    'Departamento San Martín',
    'Departamento Santa Lucía',
    'Departamento Sarmiento',
    'Departamento Ullum',
    'Departamento Valle Fértil',
    'Departamento Zonda',
    'Desamparados',
    'San Juan Capital y alrededores',
  ],
  'San Luis': [
    'Todas las Localidades',
    'Arizona',
    'Buena Esperanza y alrededores',
    'Candelaria',
    'Carpintería y alrededores',
    'Concarán',
    'El Trapiche y alrededores',
    'Fraga',
    'Justo Daract',
    'La Punta',
    'La Toma y alrededores',
    'Las Chacras y alrededores',
    'Merlo',
    'Naschel y alrededores',
    'Nueva Galia y alrededores',
    'Potrero de los Funes y alrededores',
    'Quines',
    'San Francisco y alrededores',
    'San Luis Capital y alrededores',
    'Santa Rosa del Conlara y alrededores',
    'Tilisarao y alrededores',
    'Unión y alrededores',
    'Villa Mercedes y alrededores',
  ],
  'Santa Cruz': [
    'Todas las Localidades',
    '28 de Noviembre',
    'Caleta Olivia',
    'Cmte. Luis Piedra Buena',
    'El Calafate ',
    'El Chaltén',
    'Gdor. Gregores',
    'Las Heras',
    'Perito Moreno',
    'Pico Truncado',
    'Puerto Deseado',
    'Puerto San Julián',
    'Puerto Santa Cruz',
    'Río Gallegos',
    'Río Turbio',
  ],
  'Santa Fe': [
    'Todas las Localidades',
    'Acebal',
    'Alcorta',
    'Aldao',
    'Alejandra',
    'Álvarez',
    'Alvear',
    'Ambrosetti y alrededores',
    'Andino',
    'Angélica',
    'Arequito',
    'Armstrong',
    'Arocena',
    'Arroyo Aguiar',
    'Arroyo Ceibal',
    'Arroyo Seco',
    'Arrufó',
    'Arteaga',
    'Ataliva',
    'Aurelia',
    'Avellaneda',
    'Barrancas',
    'Bauer y Sigel',
    'Bella Italia',
    'Bigand',
    'Bombal',
    'Bustinza',
    'Calchaquí',
    'Cañada de Gómez',
    'Cañada Rosquín',
    'Cañada Rosquín',
    'Candioti',
    'Capitán Bermúdez',
    'Carcarañá',
    'Carlos Pellegrini',
    'Carlos Pellegrini',
    'Carreras',
    'Casilda',
    'Cayastá',
    'Centeno',
    'Centeno',
    'Ceres',
    'Ceres',
    'Chabas',
    'Chañar Ladeado',
    'Ciudad de Santa Fe',
    'Clucellas',
    'Clucellas',
    'Colastine',
    'Colonia Aldao',
    'Colonia Belgrano',
    'Colonia Castellanos y alrededores',
    'Colonia Cello',
    'Coronda',
    'Coronda',
    'Coronel Arnold',
    'Coronel Bogado',
    'Correa',
    'Crispi',
    'Curupaity',
    'Diaz',
    'Diego de Alvear',
    'E. Villa Constitución',
    'Eguzquiza',
    'El Nochero',
    'El Rabón',
    'El Trebol',
    'El Trébol',
    'Elisa',
    'Elortondo',
    'Emilia',
    'Empalme San Carlos',
    'Esmeralda y alrededores',
    'Esperanza',
    'Estación Clucellas',
    'Eusebia',
    'Felicia',
    'Fighiera',
    'Firmat',
    'Florencia',
    'Fraga',
    'Franck y alrededores',
    'Fray Luis Beltrán',
    'Fuentes',
    'Funes',
    'Galisteo',
    'Galvez',
    'Gálvez',
    'Garibaldi',
    'Gato Colorado',
    'Gdor. Crespo',
    'General Lagos',
    'Gessler',
    'Gessler y alrededores',
    'Godoy',
    'Granadero Baigorria',
    'Grutly y alrededores',
    'Guadalupe Norte',
    'Guasuncho',
    'Helvecia y alrededores',
    'Hersilia',
    'Hipatía',
    'Huanqueros',
    'Hughes',
    'Humberto 1°',
    'Humboldt y alrededores',
    'Ibarlucea',
    'Intiyaco',
    'Irigoyen',
    'Isla Tigre',
    'Josefina',
    'La Clarita',
    'La Criolla',
    'La Elsa',
    'La Gallareta',
    'La Pelada',
    'Laguna Paiva',
    'Landeta',
    'Landeta',
    'Lanteri',
    'Las Garzas y alrededores',
    'Las Palmeras',
    'Las Parejas',
    'Las Rosas',
    'Las Toscas',
    'Lehmann',
    'Llambi Campbell',
    'Logroño',
    'Los Lapachos',
    'Los Laureles',
    'Lucio V. Lopez',
    'Maciel',
    'Maciel',
    'Malabrigo y alrededores',
    'Marcelino Escalada',
    'Margarita',
    'María Juana',
    'María Luisa',
    'María Susana',
    'María Susana',
    'María Teresa',
    'Matilde',
    'Maximo Paz',
    'Moisés Ville',
    'Monigotes',
    'Monje',
    'Monte Vera',
    'Murphy',
    'Nelson',
    'Nueva Italia',
    'Nuevo Torino',
    'Oliveros',
    'Palacios',
    'Pérez',
    'Piamonte',
    'Piamonte',
    'Pilar',
    'Portugalete',
    'Pozo Borrado',
    'Progreso',
    'Providencia',
    'Pueblo Esther',
    'Puerto Gral. San Martín',
    'Pujato',
    'Rafaela',
    'Ramona',
    'Raquel',
    'Reconquista',
    'Recreo',
    'Recreo Sur',
    'Roldán',
    'Romang',
    'Rosario',
    'Rosario Seccional 01°',
    'Rosario Seccional 02°',
    'Rosario Seccional 03°',
    'Rosario Seccional 04°',
    'Rosario Seccional 05°',
    'Rosario Seccional 06°',
    'Rosario Seccional 07°',
    'Rosario Seccional 08°',
    'Rosario Seccional 09°',
    'Rosario Seccional 10°',
    'Rosario Seccional 11°',
    'Rosario Seccional 12°',
    'Rosario Seccional 13°',
    'Rosario Seccional 14°',
    'Rosario Seccional 15°',
    'Rosario Seccional 16°',
    'Rosario Seccional 17°',
    'Rosario Seccional 18°',
    'Rosario Seccional 19°',
    'Rosario Seccional 20°',
    'Rosario Seccional 21°',
    'Rufino',
    'Sa Pereira y alrededores',
    'Saguier',
    'Salto Grande',
    'San Agustín',
    'San Antonio de Obligado',
    'San Carlos Centro',
    'San Carlos Norte',
    'San Carlos Sud',
    'San Cristóbal y alrededores',
    'San Genaro',
    'San Genaro Norte',
    'San Gregorio',
    'San Guillermo',
    'San Javier',
    'San Jerónimo del Sauce',
    'San Jerónimo Norte',
    'San Jerónimo Sud',
    'San Jorge',
    'San Jorge',
    'San José De La Esquina',
    'San José del Rincón',
    'San Justo y alrededores',
    'San Lorenzo',
    'San Martín de las Escobas',
    'San Martín de las Escobas',
    'San Vicente',
    'Santa Clara de Buena Vista',
    'Santa Clara de Saguier',
    'Santa Isabel',
    'Santa Margarita y alrededores',
    'Santa Rosa de Calchines',
    'Santo Domingo',
    'Santo Tomé',
    'Sarmiento',
    'Sarmiento',
    'Sastre',
    'Sastre',
    'Sauce Viejo',
    'Serodino',
    'Soldini',
    'Suardi',
    'Sunchales',
    'Susana',
    'Tacuarendí',
    'Tacural',
    'Teodelina',
    'Timbúes',
    'Tortugas',
    'Tostado',
    'Totoras',
    'Uranga',
    'Venado Tuerto',
    'Vera y alrededores',
    'Vera y Pintado',
    'Videla',
    'Vila',
    'Villa Adela',
    'Villa Ana',
    'Villa Cañas',
    'Villa Constitución',
    'Villa Eloisa',
    'Villa Gobernador Galvez',
    'Villa Guillermina',
    'Villa Minetti',
    'Villa Mugueta',
    'Villa Ocampo',
    'Villa San José',
    'Villa Trinidad',
    'Wheelwright',
    'Zavalla',
    'Zenón Pereyra',
  ],
  'Santiago del Estero': [
    'Todas las Localidades',
    'Añatuya',
    'Bandera',
    'Beltran',
    'Brea Pozo',
    'Capital',
    'Clodomira',
    'Colonia Alpina',
    'Colonia Dora',
    'Fernández',
    'Forres',
    'Frias',
    'Herrera',
    'La Banda',
    'Loreto',
    'Los Juries',
    'Monte Quemado',
    'Ojo de Agua',
    'Pinto',
    'Pozo Hondo',
    'Quimili',
    'San Pedro de Guasayan',
    'Selva',
    'Sumampa',
    'Suncho Corral',
    'Termas de Río Hondo',
    'Tintina',
    'Villa Atamisqui',
    'Villa San Martín',
  ],
  'Tierra del Fuego': [
    'Todas las Localidades',
    'Río Grande',
    'Tolhuin',
    'Ushuaia',
  ],
  Tucumán: [
    'Todas las Localidades',
    'Aguilares y alrededores',
    'Alderetes y alrededores',
    'Amaicha del Valle y alrededores',
    'Banda del Río Salí',
    'Bella Vista y alrededores',
    'Burruyacú',
    'Colombres y alrededores',
    'Concepción',
    'Cruz Alta',
    'El Chañar',
    'El Colmenar',
    'El Manantial',
    'Famaillá y alrededores',
    'Graneros',
    'Juan B. Alberdi',
    'La Cocha y alrededores',
    'La Florida',
    'La Madrid y alrededores',
    'La Reducción y alrededores',
    'Las Talitas',
    'Lastenia',
    'Leales',
    'Los Ralos y alrededores',
    'Lules y alrededores',
    'Monteros y alrededores',
    'Ranchillos',
    'Río Chico',
    'Río Seco y alrededores',
    'San José',
    'San Miguel de Tucumán',
    'San Pablo',
    'San Pedro de Colalao y alrededores',
    'Santa Ana',
    'Santa Lucía',
    'Santa María y alrededores',
    'Simoca',
    'Tafí del Valle',
    'Tafí Viejo',
    'Trancas',
    'Villa Carmela y alrededores',
    'Villa La Trinidad',
    'Villa Mariano Moreno',
    'Villa Quinteros',
    'Yerba Buena',
  ],
};

const specialities = [
  'ADOLESCENCIA Y PUBERTAD',
  'ALERGIA E INMUNOLOGÍA',
  'ALERGIA E INMUNOLOGÍA INFANTIL',
  'ANATOMÍA PATOLÓGICA',
  'ANGIOGRAFÍA DIGITAL',
  'ANGIOPLASTÍAS',
  'ARTICULACIÓN TEMPORO-MANDIBULAR',
  'AUDIOMETRÍAS',
  'CARDIOLOGÍA',
  'CARDIOLOGÍA INFANTIL',
  'CIRUGÍA CARDIOVASCULAR',
  'CIRUGÍA DE CABEZA Y CUELLO Y MÁXILO-FACIAL',
  'CIRUGÍA DE MANO',
  'CIRUGÍA DENTO-MAXILAR',
  'CIRUGÍA GENERAL',
  'CIRUGÍA INFANTIL',
  'CIRUGÍA ONCOLÓGICA',
  'CIRUGÍA REPARADORA',
  'CIRUGÍA TORÁCICA',
  'CIRUGÍA VASCULAR PERIFÉRICA',
  'CLÍNICA MÉDICA',
  'DENSITOMETRÍAS ÓSEAS',
  'DERMATOLOGÍA',
  'DERMATOLOGÍA INFANTIL',
  'DIAGNÓSTICO POR IMÁGENES',
  'DROGADEPENDENCIA Y ALCOHOLISMO',
  'ECOCARDIOGRAFÍA',
  'ECOCARDIOGRAFÍA INFANTIL',
  'ECOGRAFÍAS',
  'ELECTROCARDIOGRAFÍA INFANTIL',
  "ELECTROCARDIOGRAFÍA Y ELECTROCARDIOGRAFÍA DINÁMICA (HOLTER){' '}",
  'ELECTROENCEFALOGRAFÍA',
  'ELECTROENCEFALOGRAFÍA INFANTIL',
  'ENDOCRINOLOGÍA Y METABOLISMO',
  'ENDOCRINOLOGÍA Y METABOLISMO INFANTIL',
  'ENDODONCIA',
  'ENDOSCOPÍAS DIGESTIVAS',
  'ENDOSCOPÍAS DIGESTIVAS PEDIÁTRICAS',
  'ENDOSCOPÍAS RESPIRATORIAS',
  'ENDOSCOPÍAS RESPIRATORIAS PEDIÁTRICAS',
  'ERGOMETRÍAS',
  'ESTUDIOS FUNCIONALES RESPIRATORIOS',
  'ESTUDIOS FUNCIONALES RESPIRATORIOS INFANTILES',
  'ESTUDIOS MAMARIOS',
  'FERTILIDAD',
  'FISIATRÍA',
  'FLEBOLOGÍA',
  'FONOAUDIOLOGÍA',
  'GASTROENTEROLOGÍA',
  'GASTROENTEROLOGÍA INFANTIL',
  'GERIATRÍA',
  'GINECOLOGÍA',
  'HEMATOLOGÍA',
  'HEMATOLOGÍA INFANTIL',
  'HEMODINAMIA ADULTOS',
  'HEPATOLOGÍA',
  'INFECTOLOGÍA',
  'INFECTOLOGÍA INFANTIL',
  'KINESIOLOGÍA - TERAPIA FÍSICA',
  'KINESIOLOGÍA PEDIÁTRICA',
  'LABORATORIO DE ANÁLISIS CLÍNICOS',
  'LABORATORIO DE ANÁLISIS CLÍNICOS PEDIÁTRICOS',
  'MEDICINA GENERAL Y/O FAMILIAR',
  'MEDICINA NUCLEAR',
  'NEFROLOGÍA',
  'NEFROLOGÍA INFANTIL',
  'NEUMONOLOGÍA',
  'NEUMONOLOGÍA INFANTIL',
  'NEUROCIRUGÍA',
  'NEUROCIRUGÍA INFANTIL',
  'NEUROLOGÍA',
  'NEUROLOGÍA INFANTIL',
  'NUTRICIÓN',
  'NUTRICIÓN INFANTIL',
  'NUTRICIÓN Y DIABETOLOGÍA',
  'NUTRICIÓN Y DIABETOLOGÍA INFANTO-JUVENIL',
  'OBSTETRICIA',
  'ODONTOLOGÍA GENERAL',
  'ODONTOLOGÍA PERSONAS CON DISCAPACIDAD',
  'ODONTOPEDIATRÍA',
  'OFTALMOLOGÍA',
  'OFTALMOLOGÍA INFANTIL',
  'ONCOLOGÍA',
  'ONCOLOGÍA INFANTIL',
  'ORTODONCIA Y ORTOPEDIA DE MAXILARES',
  'OTORRINOLARINGOLOGÍA',
  'PATOLOGÍA MAMARIA',
  'PEDIATRÍA',
  'PERIODONCIA',
  'POTENCIALES EVOCADOS',
  'PROCTOLOGÍA',
  'PRÓTESIS DENTAL',
  'PSICOLOGÍA ADULTOS',
  'PSICOLOGÍA NIÑOS Y ADOLESCENTES',
  'PSICOLOGÍA PAREJA Y FAMILIA',
  'PSICOPEDAGOGÍA',
  'PSIQUIATRÍA ADULTOS',
  'PSIQUIATRÍA NIÑOS Y ADOLESCENTES',
  'RADIOLOGÍA',
  'RADIOLOGÍA DENTAL',
  'RADIOTERAPIA Y TELECOBALTOTERAPIA',
  'RESONANCIA NUCLEAR MAGNÉTICA',
  'REUMATOLOGÍA',
  'REUMATOLOGÍA INFANTIL',
  'TOMOGRAFÍA COMPUTADA',
  'TRASTORNOS DE LA CONDUCTA ALIMENTARIA',
  'TRAUMATOLOGÍA Y ORTOPEDIA',
  'TRAUMATOLOGÍA Y ORTOPEDIA INFANTIL',
  'URODINAMIA',
  'UROGINECOLOGÍA',
  'UROLOGÍA',
  'UROLOGÍA INFANTIL',
];

module.exports = {
  obrasSociales,
  provincias,
  provincias_large,
  localidades_map,
  specialities,
};