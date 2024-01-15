export type gameData = {
  id: string;
  gameCover: string;
  gameLabel: string;
  gameName: string;
  gameType: string;
  gamePrice: string;
};

export const dataFake: gameData[] = [
  {
    id: '1',
    gameCover: 'assets/demons-souls.jpg',
    gameLabel: 'DIGITAL DELUXE',
    gameName: "Demon's Souls",
    gameType: 'PS5',
    gamePrice: 'R$ 449,50',
  },
  {
    id: '2',
    gameCover: 'assets/horizon-forbidden-west.jpg',
    gameLabel: 'COMPLETE',
    gameName: 'Horizon Forbidden West',
    gameType: 'PS5',
    gamePrice: 'R$ 299,90',
  },
  {
    id: '3',
    gameCover: 'assets/spiderman-miles-morales.jpg',
    gameLabel: 'ULTIMATE',
    gameName: "Marvel's Spider-Man: Miles Morales",
    gameType: 'PS4 | PS5',
    gamePrice: 'R$ 349,90',
  },
  {
    id: '4',
    gameCover: 'assets/ratchet-and-clank-rift-apart.jpg',
    gameLabel: 'DIGITAL DELUXE',
    gameName: 'Ratchet & Clank: Rift Apart',
    gameType: 'PS5',
    gamePrice: 'R$ 399,50',
  },
  {
    id: '5',
    gameCover: 'assets/ghost-of-tsushima.jpg',
    gameLabel: "DIRECTOR'S CUT",
    gameName: 'Ghost of Tsushima',
    gameType: 'PS4 | PS5',
    gamePrice: 'R$ 349,90',
  },
  {
    id: '6',
    gameCover: 'assets/gt7.jpg',
    gameLabel: 'DIGITAL DELUXE',
    gameName: 'Gran Turismo 7',
    gameType: 'PS4 | PS5',
    gamePrice: 'R$ 449,50',
  },
  {
    id: '7',
    gameCover: 'assets/the-last-of-us-part-1.jpg',
    gameLabel: 'DIGITAL DELUXE',
    gameName: 'The Last of Us Part I',
    gameType: 'PS5',
    gamePrice: 'R$ 399,50',
  },
  {
    id: '8',
    gameCover: 'assets/uncharted.jpg',
    gameLabel: 'COLLECTION',
    gameName: 'UNCHARTED: Legacy of Thieves',
    gameType: 'PS5',
    gamePrice: 'R$ 249,50',
  },
];
