interface Links {
  id: number;
  name: string;
  link: string;
}

const links: Links[] = [
  {
    id: 0,
    name: "Все",
    link: "/",
  },
  {
    id: 1,
    name: "Мясные",
    link: "/category/meat",
  },
  {
    id: 2,
    name: "Вегетарианская",
    link: "/category/vegetarian",
  },
  {
    id: 3,
    name: "Гриль",
    link: "/category/grill",
  },
  {
    id: 4,
    name: "Острые",
    link: "/category/acute",
  },
  {
    id: 5,
    name: "Закрытые",
    link: "/category/closed",
  },
];

export default links