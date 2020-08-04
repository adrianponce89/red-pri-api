const basicSearch = {
  site_id: 'RPR',
  paging: {
    total: 2705,
    offset: 0,
    limit: 0,
    primary_results: 1000,
  },
  results: [
    {
      _id: '5f',
      email: 'admin@admin.com',
      role: 'admin',
      name: 'Admin',
      surname: 'Admin',
      username: 'admin',
      matricula: '123465',
      title: 'Administrador',
      about: 'Una cuenta para administrar las demas',
      specialities: ['Administrar'],
      themes: ['Administracion'],
      atentionType: ['Personal'],
      practice: 'Determinar roles',
      addressList: [
        {
          _id: '5f',
          street: 'Luis Viale 2124',
          floor: '7mo',
          reference: 'entre lujan y oller',
          province: 'Buenos Aires',
          locality: 'Capital Federal',
          zipCode: '1416',
        },
      ],
      phoneList: [
        {
          _id: '5f',
          phoneType: 'Casa',
          number: '11-2288-9999',
          attentionHours: '10 a 18hs',
        },
      ],
    },
    {
      _id: '5f',
      email: 'prueba@prueba.com',
      name: 'Maria Sol',
      surname: 'Burga',
      username: 'maria.sol',
      matricula: '123456',
      title: 'Psicóloga',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium in dui rutrum lobortis. Nam lacinia sit amet ligula vitae aliquet. Proin in turpis imperdiet, posuere sapien vitae, consectetur tellus. Nunc dignissim, dui vitae dictum convallis, neque dui hendrerit orci, nec finibus nulla nisi vel elit. Praesent vitae augue at orci sagittis semper. Duis sagittis nibh et mi molestie, et facilisis metus sollicitudin. Quisque condimentum maximus elit et dictum. Sed semper, libero sed convallis mollis, nisl mauris placerat libero, at bibendum sem dolor congue lectus. Nunc tincidunt nunc nec ante dictum, ut commodo nibh commodo. Vestibulum mollis ex id laoreet maximus. Phasellus a nibh pharetra, egestas nulla vitae, sagittis nunc. Nunc volutpat ac nisl in ornare. Duis porta pretium ex, et tempus quam dapibus ac. Fusce sit amet vulputate nulla. In mauris urna, suscipit vel volutpat nec, molestie ut justo.',
      specialities: ['Psicología - Niños'],
      themes: ['Ansiedad'],
      atentionType: ['On-line'],
      practice:
        'Nunc dui nunc, rhoncus vel congue id, porttitor quis tellus. Proin convallis, ligula ut placerat porta, ipsum quam sollicitudin tortor, vitae venenatis diam est non ante. Vivamus vehicula ac justo non fermentum. Donec risus nibh, semper eget nisi nec, venenatis eleifend lacus. Pellentesque eleifend ante vel odio consectetur elementum. Proin tristique egestas arcu, vel venenatis libero fringilla et. Cras lectus ante, cursus ac mollis at, pretium nec dui. Ut eros diam, tristique non lorem sed, tincidunt porttitor nunc. Cras nec tortor dui. Morbi semper, purus eu aliquam varius, urna mauris blandit justo, at vehicula nisi dolor quis enim. Quisque ac venenatis quam.',
      addressList: [
        {
          _id: '5f',
          street: 'Luis Viale 2124',
          locality: 'Capital Federal',
          province: 'Buenos Aires',
          zipCode: '1416',
        },
      ],
      phoneList: [
        {
          _id: '5f',
          phoneType: 'Consultorio',
          number: '11-2288-9999',
          attentionHours: '10 a 18hs',
        },
        {
          _id: '5f',
          phoneType: 'Casa',
          number: '11-4262-4888',
          attentionHours: '16 a 20hs',
        },
      ],
    },
  ],
  secondary_results: [],
  related_results: [],
  sort: { _id: 'relevance', name: 'More relevant' },
  availableSorts: [
    { _id: 'price_asc', name: 'Lower price' },
    { _id: 'price_desc', name: 'Higher price' },
  ],
  filters: [
    {
      _id: 'locality',
      name: 'Localidad',
      type: 'text',
      values: [{ _id: 'E1', name: 'Capital Federal' }],
    },
    {
      _id: 'category',
      name: 'Categories',
      type: 'text',
      values: [
        {
          _id: '1',
          name: 'Psicologos',
        },
      ],
    },
  ],
  availableFilters: [
    {
      _id: 'title',
      name: 'Titulo',
      type: 'text',
      values: [{ _id: '1', name: 'Psicologo', results: 12 }],
    },
    {
      _id: 'locality',
      name: 'Barrios',
      type: 'text',
      values: [
        { _id: 'Za', name: 'Balvanera', results: 493 },
        { _id: 'Ja', name: 'Monserrat', results: 405 },
        { _id: 'Ja', name: 'Mataderos', results: 191 },
        {
          _id: 'Ba',
          name: 'Villa Crespo',
          results: 130,
        },
        { _id: 'Fa', name: 'Floresta', results: 90 },
        {
          _id: 'da',
          name: 'Villa del Parque',
          results: 83,
        },
        {
          _id: 'Ra',
          name: 'San Nicolás',
          results: 71,
        },
        { _id: 'da', name: 'Caballito', results: 68 },
        {
          _id: 'Za',
          name: 'Villa Devoto',
          results: 68,
        },
        { _id: 'Ng', name: 'Once', results: 67 },
        { _id: 'Va', name: 'Palermo', results: 65 },
        { _id: 'Ra', name: 'Flores', results: 62 },
        {
          _id: 'Ba',
          name: 'Constitución',
          results: 60,
        },
        {
          _id: 'la',
          name: 'Villa Urquiza',
          results: 55,
        },
        { _id: 'Ba', name: 'Almagro', results: 51 },
        { _id: 'Fa', name: 'Paternal', results: 49 },
        { _id: 'Va', name: 'Recoleta', results: 49 },
        {
          _id: 'Ba',
          name: 'Villa Lugano',
          results: 49,
        },
        { _id: 'Ra', name: 'Boedo', results: 47 },
        { _id: 'Ja', name: 'La Boca', results: 47 },
        {
          _id: 'Za',
          name: 'Parque Patricios',
          results: 47,
        },
        {
          _id: 'da',
          name: 'Parque Avellaneda',
          results: 41,
        },
        {
          _id: 'Za',
          name: 'San Cristóbal',
          results: 41,
        },
        { _id: 'Mg', name: 'Congreso', results: 38 },
        { _id: 'Na', name: 'San Telmo', results: 35 },
        { _id: 'Ja', name: 'Belgrano', results: 31 },
        { _id: 'ha', name: 'Liniers', results: 26 },
        { _id: 'Ra', name: 'Núñez', results: 21 },
        { _id: 'Ba', name: 'Chacarita', results: 21 },
        {
          _id: 'Za',
          name: 'Parque Chacabuco',
          results: 19,
        },
        {
          _id: 'Ba',
          name: 'Monte Castro',
          results: 18,
        },
        {
          _id: 'TVhYUGFycXVlIENoYXNUVXhCUTBOQlVHWmxaR',
          name: 'Parque Chas',
          results: 14,
        },
        { _id: 'ha', name: 'Barracas', results: 13 },
        { _id: 'Na', name: 'Colegiales', results: 12 },
        { _id: 'Va', name: 'Retiro', results: 12 },
        {
          _id: 'Ba',
          name: 'Villa Pueyrredón',
          results: 10,
        },
        {
          _id: 'ha',
          name: 'Palermo Chico',
          results: 9,
        },
        { _id: 'da', name: 'Saavedra', results: 9 },
        { _id: 'Ja', name: 'Las Cañitas', results: 8 },
        {
          _id: 'Za',
          name: 'Nueva Pompeya',
          results: 7,
        },
        { _id: 'Na', name: 'Santa Rita', results: 4 },
        { _id: 'Ja', name: 'Villa Luro', results: 4 },
        {
          _id: 'Fa',
          name: 'Villa Ortúzar',
          results: 3,
        },
        { _id: 'Ra', name: 'Belgrano C', results: 2 },
        {
          _id: 'da',
          name: 'Palermo Soho',
          results: 2,
        },
        { _id: 'Ja', name: 'Agronomía', results: 1 },
        {
          _id: 'MA',
          name: 'Barrio Norte',
          results: 1,
        },
        {
          _id: 'da',
          name: 'Belgrano Chico',
          results: 1,
        },
        { _id: 'Na', name: 'Belgrano R', results: 1 },
      ],
    },
    {
      _id: 'specialities',
      name: 'Especialidad',
      type: 'text',
      values: [
        { _id: '1', name: 'Psicología Infantil', results: 12 },
      ],
    },
    {
      _id: 'themes',
      name: 'Temas',
      type: 'text',
      values: [
        { _id: '2', name: 'Ansiedad', results: 12 },
        { _id: '2', name: 'Insomnio', results: 12 },
      ],
    },
    {
      _id: 'atentionType',
      name: 'Tipo de Atención',
      type: 'text',
      values: [
        { _id: '1', name: 'Particular', results: 12 },
        { _id: '2', name: 'On-line', results: 12 },
      ],
    },
  ],
};

module.exports = {
  basicSearch,
};
