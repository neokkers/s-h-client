import Imgs from "../static/static";

const ranks = [
  {
    rank: "Нуб",
    eloRange: [-Infinity, 799],
    img: Imgs[0],
  },
  {
    rank: "Начинающий игрок",
    eloRange: [800, 999],
    img: Imgs[1],
  },
  {
    rank: "Средний игрой",
    eloRange: [1000, 1199],
    img: Imgs[2],
  },
  {
    rank: "Продвинутый игрок",
    eloRange: [1200, 1399],
    img: Imgs[3],
  },
  {
    rank: "Опытный игрок",
    eloRange: [1400, 1599],
    img: Imgs[4],
  },
  {
    rank: "Мастер",
    eloRange: [1600, 1799],
    img: Imgs[5],
  },
  {
    rank: "Ниндзя",
    eloRange: [1800, 1999],
    img: Imgs[6],
  },
  {
    rank: "Ниндзя убийца",
    eloRange: [2000, 2199],
    img: Imgs[7],
  },
  {
    rank: "Dragon slayer",
    eloRange: [2200, 2399],
    img: Imgs[8],
  },
  {
    rank: "Ultra Pro Dog",
    eloRange: [2400, Infinity],
    img: Imgs[8],
  },
];

export const rankReconciler = (elo) => {
  return ranks.find((el) => el.eloRange[0] <= elo && el.eloRange[1] >= elo);
};
