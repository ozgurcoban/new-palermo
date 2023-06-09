const menuItems = [
  {
    category: 'pizza',
    subcategory: 'standardpizza',
    description: 'tomatsås och ost ingår i alla pizzor',
    category_id: 1,
    extras: {
      'extra ingredienser': 15,
      'extra ost': 15,
      'vegan ost': 15,
      'glutenfri botten': 30,
      extrakött: 30,
    },
    items: [
      {
        id: 1,
        name: 'margarita',
        description: 'tomat och ost',
        price: 100,
        takeaway_price: 95,
      },
      {
        id: 2,
        name: 'funghi',
        description: 'champinjoner',
        price: 100,
        takeaway_price: 95,
      },
      {
        id: 3,
        name: 'vesuvio',
        description: 'skinka',
        price: 100,
        takeaway_price: 95,
      },
      {
        id: 4,
        name: 'calzone',
        description: 'skinka (inbakad)',
        price: 100,
        takeaway_price: 95,
      },
      {
        id: 5,
        name: 'capricciosa',
        description: 'skinka och champinjoner',
        price: 105,
        takeaway_price: 100,
      },
      {
        id: 6,
        name: 'hawaii',
        description: 'skinka och ananas',
        price: 105,
        takeaway_price: 100,
      },
      {
        id: 7,
        name: 'hawaii special',
        description: 'skinka, ananas, banan och curry',
        price: 105,
        takeaway_price: 100,
      },
      {
        id: 8,
        name: 'bananpizza',
        description: 'skinka och banan',
        price: 105,
        takeaway_price: 100,
      },
      {
        id: 9,
        name: 'orientale',
        description: 'köttfärs och lök',
        price: 105,
        takeaway_price: 100,
      },
      {
        id: 10,
        name: 'al tono',
        description: 'tonfisk och lök',
        price: 105,
        takeaway_price: 100,
      },
      {
        id: 11,
        name: 'napoilana',
        description: 'sardeller och oliver',
        price: 105,
        takeaway_price: 100,
      },
      {
        id: 12,
        name: 'opera',
        description: 'skinka och tonfisk',
        price: 105,
        takeaway_price: 100,
      },
      {
        id: 13,
        name: 'englese',
        description: 'bacon, champinjoner och lök',
        price: 105,
        takeaway_price: 100,
      },
      {
        id: 14,
        name: 'campangola',
        description: 'salami, lök och oliver',
        price: 105,
        takeaway_price: 100,
      },
      {
        id: 15,
        name: 'quattro stagioni',
        description: 'skinka, räkor, oliver, champinjoner och kronärtskocka',
        price: 105,
        takeaway_price: 100,
      },
      {
        id: 16,
        name: 'havets special',
        description: 'tonfisk, räkor och musslor',
        price: 105,
        takeaway_price: 100,
      },
      {
        id: 17,
        name: 'vegetarisk',
        description:
          'champinjoner, lök, oliver, paprika, kronärtskocka, färska tomater och ananas',
        price: 105,
        takeaway_price: 100,
      },
      {
        id: 18,
        name: 'du chef',
        description: 'köttfärs, champinjoner, lök och tabasco',
        price: 105,
        takeaway_price: 100,
      },
      {
        id: 19,
        name: 'primavera',
        description: 'bacon, champinjoner, lök och ägg',
        price: 105,
        takeaway_price: 100,
      },
      {
        id: 20,
        name: 'calzone special',
        description: 'skinka, räkor och champinjoner (inbakad)',
        price: 105,
        takeaway_price: 100,
      },
      {
        id: 21,
        name: 'bussola',
        description: 'skinka och räkor',
        price: 105,
        takeaway_price: 100,
      },
      {
        id: 22,
        name: 'la bella',
        description: 'räkor, paprika och curry',
        price: 105,
        takeaway_price: 100,
      },
      {
        id: 23,
        name: 'orientale special',
        description: 'köttfärs, ägg och lök',
        price: 105,
        takeaway_price: 100,
      },
      {
        id: 24,
        name: 'marinara',
        description: 'räkor och musslor',
        price: 105,
        takeaway_price: 100,
      },
    ],
  },
  {
    category: 'pizza',
    subcategory: 'specialpizza',
    description: 'tomatsås och ost ingår i alla pizzor. ',
    category_id: 2,
    extras: {
      'extra ingredienser': 15,
      'extra ost': 15,
      'vegan ost': 15,
      'glutenfri botten': 30,
      extrakött: 30,
    },
    items: [
      {
        id: 25,
        name: 'mamma mia',
        description: 'köttfärs, salami, lök och paprika',
        price: 110,
        takeaway_price: 105,
      },
      {
        id: 26,
        name: 'carusell',
        description: 'köttfärs, salami, bacon, lök och färska tomater',
        price: 110,
        takeaway_price: 105,
      },
      {
        id: 27,
        name: 'kentucky',
        description: 'kyckling, paprika, ananas och curry',
        price: 110,
        takeaway_price: 105,
      },
      {
        id: 28,
        name: 'karibian',
        description: 'tonfisk, räkor, musslor och sardeller',
        price: 125,
        takeaway_price: 120,
      },
      {
        id: 29,
        name: 'ciao ciao',
        description: 'oxfilé, färska tomater och bearnaisesås (halvinbakad)',
        price: 125,
        takeaway_price: 120,
      },
      {
        id: 30,
        name: 'shish kebab ',
        description:
          'oxfilé, lök, paprika, färska tomater och bearnaisesås (halvinbakad)',
        price: 125,
        takeaway_price: 120,
      },
      {
        id: 31,
        name: 'mexikansk',
        description:
          'köttfärs, paprika, champinjoner, purjolök, fefferoni och tabasco',
        price: 125,
        takeaway_price: 120,
      },
      {
        id: 32,
        name: 'roma',
        description:
          'oxfilé, lök, paprika, champinjoner, färska tomater och gorgonzolaost',
        price: 125,
        takeaway_price: 120,
      },
      {
        id: 33,
        name: 'sahara',
        description:
          'köttfärs, strimlad oxfilé, paprika, champinjoner, purjolök, fefferoni och tabasco',
        price: 125,
        takeaway_price: 120,
      },
      {
        id: 34,
        name: 'el paso',
        description:
          'strimlad oxfilé, räkor, paprika, champinjoner och färska tomater',
        price: 125,
        takeaway_price: 120,
      },
      {
        id: 35,
        name: 'palermo',
        description:
          'strimlad oxfilé, lök, paprika, champinjoner och bearnaisesås',
        price: 125,
        takeaway_price: 120,
      },
      {
        id: 36,
        name: 'husets special',
        description: 'strimlad fläskfilé, lök, champinjoner och bearnaisesås',
        price: 125,
        takeaway_price: 120,
      },
      {
        id: 37,
        name: 'rosso bianco',
        description:
          'strimlad fläskfilé, fetaost, lök, soltorkade tomater och paprika',
        price: 125,
        takeaway_price: 120,
      },
      {
        id: 38,
        name: 'filetto bianco',
        description: 'strimlad fläskfilé, champinjoner och vitlök',
        price: 125,
        takeaway_price: 120,
      },
      {
        id: 39,
        name: 'kebabpizza',
        description: 'kebabkött, lök, färska tomater, fefferoni och kebabsås',
        price: 125,
        takeaway_price: 120,
      },
      {
        id: 40,
        name: 'grekisk pizza',
        description:
          'grekisk fetaost, lök, färska tomater, oliver, paprika, fefferoni och tzatziki',
        price: 125,
        takeaway_price: 120,
      },
      {
        id: 41,
        name: 'viking kebab ',
        description:
          'kebabkött, och efter gräddning: isbergssallad, lök, fefferoni, gurka och kebabsås (inbakad)',
        price: 125,
        takeaway_price: 120,
      },
      {
        id: 42,
        name: 'super calzone',
        description: 'skinka (dubbelinbakad)',
        price: 125,
        takeaway_price: 120,
      },
      {
        id: 43,
        name: 'super calzone special',
        description: 'skinka, räkor och champinjoner (dubbelinbakad)',
        price: 125,
        takeaway_price: 120,
      },
      {
        id: 44,
        name: 'quattro formaggio',
        description: 'gorogonzola, mozzarella och fetaost',
        price: 130,
        takeaway_price: 125,
      },
      {
        id: 45,
        name: 'halloumi',
        description: 'halloumi, rödlök, paprika och soltorkade tomater',
        price: 130,
        takeaway_price: 125,
      },
      {
        id: 46,
        name: 'le chef',
        description: 'parmaskinka, champinjoner, oliver och soltorkade tomater',
        price: 130,
        takeaway_price: 125,
      },
    ],
  },
  {
    category: 'förrätter',
    subcategory: 'förrätter',
    description: 'till alla förrätter ingår hembakat bröd & smör',
    category_id: 3,
    items: [
      {
        id: 47,
        name: 'friterad fetaost',
        description: 'panerad och friterad tills gyllenbrun',
        price: 69,
      },
      {
        id: 48,
        name: 'grillad halloumi',
        description: 'osten grillas tills den är härligt mjuk',
        price: 69,
      },
      {
        id: 49,
        name: 'tzatziki',
        description: 'en god kall röra med yoghurt, gurka och vitlök',
        price: 69,
      },
      {
        id: 51,
        name: 'vitlöksbröd',
        description: 'alltid gott med bröd',
        price: 59,
      },
    ],
  },
  {
    category: 'huvudrätter',
    subcategory: 'varmrätter',
    category_id: 4,
    items: [
      {
        id: 52,
        name: 'filé oskar',
        description:
          'fläskfilé, rödvinssås, bearnaisesås, stekta grönsaker och pommes frites',
        price: 179,
      },
      {
        id: 53,
        name: 'oxfilé mignon',
        description:
          'oxfilé, champinjoner, gorgonzola ost, stekta grönsaker och pommes frites',
        price: 249,
      },
      {
        id: 54,
        name: 'oxfilé medaljong',
        description:
          'oxfilé, rödvinssås, bearnaisesås, stekta grönsaker och pommes frites',
        price: 249,
      },
      {
        id: 55,
        name: 'hamburgare',
        description:
          'briochebröd, 180g kött serveras med pommes och 2st dipsåser, bearnaise och ketchup ',
        price: 149,
      },
      {
        id: 56,
        name: 'halloumiburgare',
        description:
          'Briochebröd, halloumi serveras med pommes frites och 2 st dipsåser, bearnaise och ketchup',
        price: 169,
      },
    ],
  },
  {
    category: 'dessert',
    subcategory: 'efterrätter',
    category_id: 5,
    items: [
      {
        id: 58,
        name: 'churros',
        description: 'serveras med vaniljglass och nutella',
        price: 79,
      },
    ],
  },
  {
    category: 'huvudrätter',
    subcategory: 'pasta',
    category_id: 6,
    items: [
      {
        id: 59,
        name: 'spaghetti bolognese',
        description: 'En italiensk klassiker med spaghetti och köttfärssås',
        price: 129,
      },
      {
        id: 60,
        name: 'pasta carbonara',
        description: 'En krämig pasta med bacon, grädde och ägg',
        price: 129,
      },
      {
        id: 61,
        name: 'oxfilé & champinjoner i gorgonzolasås',
        description: 'Mör oxfilé och champinjoner i en härlig gorgonzolasås',
        price: 159,
      },
      {
        id: 62,
        name: 'fläskfilé & champinjoner i senapssås',
        description: 'Saftig fläskfilé och champinjoner i en smakrik senapssås',
        price: 149,
      },
      {
        id: 63,
        name: 'smörstekta champinjoner i gorgonzolasås',
        description:
          'En vegetarisk pastarätt med smörstekta champinjoner i en krämig gorgonzolasås',
        price: 139,
      },
      {
        id: 64,
        name: 'lasagne',
        description: '',
        price: 129,
      },
    ],
  },
  {
    category: 'huvudrätter',
    subcategory: 'tallrikar',
    category_id: 7,
    items: [
      {
        id: 65,
        name: 'nachotallrik',
        description: 'nachochips med köttfärs, smält ost, mild sås och salsa',
        price: 125,
      },
      {
        id: 66,
        name: 'kebabtallrik',
        description:
          'kebabkött, sallad, fefferoni och kebabsås. Serveras med pommes frites',
        price: 125,
      },
      {
        id: 67,
        name: 'kebabrulle',
        description:
          'kebabkött, sallad, fefferoni och kebabsås. Serveras i bröd',
        price: 105,
      },
    ],
  },
  {
    category: 'huvudrätter',
    subcategory: 'sallader',
    description: 'till alla sallader ingår hembakat bröd & smör',
    category_id: 8,
    extras: {
      kebabsås: 20,
      bearnaisesås: 20,
      starksås: 20,
      'sriracha mayonnaise': 20,
      'tryffel mayonnaise': 20,
      pizzasallad: 20,
      'vegan bearnaise': 20,
    },
    items: [
      {
        id: 68,
        name: 'ost & skinksallad',
        description:
          'Ost, skinka, isbergssallad, tomater, gurka, paprika, oliver och Rhode Island-sås',
        price: 115,
      },
      {
        id: 69,
        name: 'tonfisksallad',
        description:
          'Tonfisk, isbergssallad, tomater, gurka, paprika, oliver och Rhode Island-sås',
        price: 115,
      },
      {
        id: 70,
        name: 'vegetarisk sallad',
        description:
          'Ananas, isbergssallad, tomater, gurka, paprika, oliver och Rhode Island-sås',
        price: 115,
      },
      {
        id: 71,
        name: 'räksallad',
        description:
          'Räkor, isbergssallad, tomater, gurka, paprika, oliver och Rhode Island-sås',
        price: 115,
      },
      {
        id: 72,
        name: 'grekisk bondsallad',
        description:
          'fetaost, isbergssallad, tomater, gurka, paprika, oliver och vinägrettdressing',
        price: 115,
      },
      {
        id: 73,
        name: 'hawaiiansk sallad',
        description:
          'räkor, ananas, isbergssallad, tomater, gurka, paprika, oliver och currysås',
        price: 115,
      },
      {
        id: 74,
        name: 'västkustsallad',
        description:
          'räkor, musslor, tonfisk, isbergssallad, tomater, gurka, paprika, oliver och Rhode Island-sås',
        price: 115,
      },
      {
        id: 75,
        name: 'kycklingsallad',
        description:
          'kyckling, ananas, isbergssallad, tomater, gurka och paprika',
        price: 115,
      },
      {
        id: 76,
        name: 'halloumisallad',
        description:
          'halloumi, isbergssallad, rödlök, tomater gurka och paprika',
        price: 115,
      },
    ],
  },
];

export default menuItems;
