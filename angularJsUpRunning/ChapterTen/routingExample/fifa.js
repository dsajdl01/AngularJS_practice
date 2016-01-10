var FIFA = {};

FIFA.TEAMS_LIST = [
  {
    code:'ESP',
    name:'Spain',
    rank: 1,
    flagUrl: 'http://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg'
  },

  {
    code: 'GER',
    name: 'Germany',
    rank: 2,
    flagUrl: 'http://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg'
  },

  {
    code: 'POR',
    name: 'Portugal',
    rank: 3,
    flagUrl: 'http://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg'
  },

  {
    code: 'COL',
    name: 'Colombia',
    rank: 4,
    flagUrl: 'http://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg'
  },

  {
    code: 'URU',
    name: 'Uruguay',
    rank: 5,
    flagUrl: 'http://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg'
  }
];

FIFA.TEAM_DETAILS = {
  'ESP' : {
    fifaCode: 'ESP',
    fifaRanking: 1,
    name: 'Spain',
    nickname: 'La Furia Roja (The Red Fury)',
    association: 'Real Federacion Espanola de Futbol (RFEF)',
    headCoach: 'Vicente del Bosque',
    captain: 'Iker Casillas',
    flagUrl: 'http://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg',
    logoUrl: 'https://raw.githubusercontent.com/dsajdl01/AngularJS_practice/master/angularJsUpRunning/ChapterTen/routingExample/app/image/Spain_National_Football_Team_badge.png'
  },

  'GER' : {
    fifaCode: 'GER',
    fifaRanking: 2,
    name: 'Germany',
    nickname: 'Nationalmannschaft (national team)',
    association: 'German Football Association',
    headCoach: 'Joachim Low',
    captain: 'Philipp Lahm',
    flagUrl: 'http://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg',
    logoUrl: 'http://upload.wikimedia.org/wikipedia/en/thumb/e/e3/DFBEagle.svg/442px-DFBEagle.svg.png'
  },

  'POR' : {
    fifaCode: 'POR',
    fifaRanking: 3,
    name: 'Portugal',
    nickname: 'A Seleccao',
    association: 'Federacao Portuguesa de Futebol',
    headCoach: 'Paulo Bento',
    captain: 'Cristiano Ronaldo',
    flagUrl:'http://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg',
    logoUrl: 'http://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Portuguese_Football_Federation.svg/424px-Portuguese_Football_Federation.svg.png'
  },

  'COL' : {
    fifaCode: 'COL',
    fifaRanking: 4,
    name: 'Colombia',
    nickname: 'Los Cafeteros (The Coffee Growers)',
    association: 'Federacion Colombiana de Futbol (FCF)',
    headCoach: 'Jose Pekerman',
    captain: 'Mario Yepes',
    flagUrl: 'http://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg',
    logoUrl: 'http://upload.wikimedia.org/wikipedia/en/thumb/6/61/Federacion_Colombiana_de_Futbol_logo.svg/302px-Federacion_Colombiana_de_Futbol_logo.svg.png'
  },

  'URU' : {
    fifaCode: 'URU',
    fifaRanking: 5,
    name: 'Uruguay',
    nickname: 'Los Charruas',
    association: 'Asociacion Uruguaya de Futbol (AUF)',
    headCoach: 'Oscar Tabarez',
    captain: 'Diego Lugano',
    flagUrl: 'http://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg',
    logoUrl: 'https://raw.githubusercontent.com/dsajdl01/AngularJS_practice/master/angularJsUpRunning/ChapterTen/routingExample/app/image/Uruguayan_Football_Association_logo.png'
  }
};


exports.FIFA = FIFA;
