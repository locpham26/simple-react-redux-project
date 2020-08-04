import milkCoffee from "../assets/milk_coffee.jpg";
import blackCoffee from "../assets/black_coffee.jpg";
import coconutCoffee from "../assets/coconut_coffee.jpg";
import cappucino from "../assets/cappucino.jpg";
import expresso from "../assets/expresso.jpg";
import mocha from "../assets/mocha.jpg";
import caramelMacchiato from "../assets/caramel_macchiato.jpg";
import rasberryTea from "../assets/rasberry_tea.jpg";

const drinks = [
  {
    id: 1,
    name: "Milk Coffee",
    img: milkCoffee,
    desc:
      "It consists of espresso, steamed milk, and milk foam served in a large cup. It is sometimes topped with whipped cream.",
    price: 3.5,
    inCart: {
      selected: false,
      quantity: 0,
    },
  },
  {
    id: 2,
    name: "Black Coffee",
    img: blackCoffee,
    desc:
      "While it has a slightly bitter taste compared to when it is flavoured with additives, many people love a strong cup of black coffee.",
    price: 3.25,
    inCart: {
      selected: false,
      quantity: 0,
    },
  },
  {
    id: 3,
    name: "Coconut Coffee",
    img: coconutCoffee,
    desc:
      "The fabulous combination of 3 in 1 between cold coffee, fresh coconut milk and pure coconut water.",
    price: 3.75,
    inCart: {
      selected: false,
      quantity: 0,
    },
  },
  {
    id: 4,
    name: "Expresso",
    img: expresso,
    desc:
      " It is made by forcing pressurized hot water through very finely ground coffee beans using an espresso machine. ",
    price: 4.0,
    inCart: {
      selected: false,
      quantity: 0,
    },
  },
  {
    id: 5,
    name: "Caramel Macchiato",
    img: caramelMacchiato,
    price: 4.25,
    desc:
      "The name macchiato comes from Italian, and it means marked, stained or spotted.",
    inCart: {
      selected: false,
      quantity: 0,
    },
  },
  {
    id: 6,
    name: "Cappucino",
    img: cappucino,
    desc:
      "Cappuccino is a coffee drink that today is typically composed of a single espresso shot and hot milk, with the surface topped with foamed milk.",
    price: 4.0,
    inCart: {
      selected: false,
      quantity: 0,
    },
  },
  {
    id: 7,
    name: "Mocha",
    img: mocha,
    desc:
      "Like a caffe latte, it is typically one third espresso and two thirds steamed milk, but a portion of chocolate is added, typically in the form of sweet cocoa powder.",
    price: 4.5,
    inCart: {
      selected: false,
      quantity: 0,
    },
  },
  {
    id: 8,
    name: "Rasberry Tea",
    img: rasberryTea,
    desc:
      "Drinking raspberry leaf tea is very beneficial for expecting women, and well as those suffering from cold, flu, fertility issues, psoriasis, constipat.",
    price: 5.25,
    inCart: {
      selected: false,
      quantity: 0,
    },
  },
];

export default drinks;
