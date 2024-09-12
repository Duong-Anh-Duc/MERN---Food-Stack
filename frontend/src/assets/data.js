import curry from "../assets/ccurry.png";
import pizza from "../assets/cpizza.png";
import rice from "../assets/crice.png";
import deserts from "../assets/cdeserts.png";
import fruits from "../assets/cfruits.png";
import drinks from "../assets/cdrinks.png";

import food_1 from "./food_1.png";
import food_2 from "./food_2.png";
import food_3 from "./food_3.png";
import food_4 from "./food_4.png";
import food_5 from "./food_5.png";
import food_6 from "./food_6.png";
import food_7 from "./food_7.png";
import food_8 from "./food_8.png";
import food_9 from "./food_9.png";
import food_10 from "./food_10.png";
import food_11 from "./food_11.png";
import food_12 from "./food_12.png";
import food_13 from "./food_13.png";
import food_14 from "./food_14.png";
import food_15 from "./food_15.png";
import food_16 from "./food_16.png";
import food_17 from "./food_17.png";
import food_18 from "./food_18.png";
import food_19 from "./food_19.png";
import food_20 from "./food_20.png";
import food_21 from "./food_21.png";
import food_22 from "./food_22.png";
import food_23 from "./food_23.png";
import food_24 from "./food_24.png";
import food_25 from "./food_25.png";
import food_26 from "./food_26.png";
import food_27 from "./food_27.png";
import food_28 from "./food_28.png";
import food_29 from "./food_29.png";
import food_30 from "./food_30.png";
import food_31 from "./food_31.png";
import food_32 from "./food_32.png";
import food_33 from "./food_33.png";
import food_34 from "./food_34.png";
import food_35 from "./food_35.png";
import food_36 from "./food_36.png";
import food_37 from "./food_37.png";
import food_38 from "./food_38.png";
import food_39 from "./food_39.png";
import food_40 from "./food_40.png";
import food_41 from "./food_41.png";
import food_42 from "./food_42.png";
import food_43 from "./food_43.png";
import food_44 from "./food_44.png";
import food_45 from "./food_45.png";
import food_46 from "./food_46.png";
import food_47 from "./food_47.png";
import food_48 from "./food_48.png";

export const categories = [
  {
    name: "Curry",
    image: curry,
  },
  {
    name: "Pizza",
    image: pizza,
  },
  {
    name: "Rice",
    image: rice,
  },
  {
    name: "Deserts",
    image: deserts,
  },
  {
    name: "Drinks",
    image: drinks,
  },
  {
    name: "Fruits",
    image: fruits,
  },
];

export const all_products = [
  // Curry Products
  {
    _id: "1",
    name: "Spicy Chicken Curry",
    image: food_1,
    price: 20.0,
    description:
      "Enjoy our Spicy Chicken Curry, made with tender chicken pieces cooked in a flavorful blend of spices.",
    category: "Curry",
  },
  {
    _id: "2",
    name: "Vegetarian Chickpea Curry",
    image: food_2,
    price: 20.0,
    description:
      "Our Vegetarian Chickpea Curry is a hearty dish made with tender chickpeas simmered in a rich tomato-based sauce.",
    category: "Curry",
  },
  {
    _id: "3",
    name: "Beef Vindaloo",
    image: food_3,
    price: 30.0,
    description:
      "Experience the fiery taste of our Beef Vindaloo, a traditional Goan dish with a spicy and tangy sauce.",
    category: "Curry",
  },
  {
    _id: "4",
    name: "Creamy Paneer Butter Masala",
    image: food_4,
    price: 20.0,
    description:
      "Our Creamy Paneer Butter Masala features soft paneer cubes cooked in a rich and creamy tomato gravy.",
    category: "Curry",
  },
  {
    _id: "5",
    name: "Lamb Rogan Josh",
    image: food_5,
    price: 30.0,
    description:
      "Try our Lamb Rogan Josh, a traditional Kashmiri dish with tender lamb in a fragrant curry sauce.",
    category: "Curry",
  },
  {
    _id: "6",
    name: "Fish Curry with Coconut Milk",
    image: food_6,
    price: 20.0,
    description:
      "Delight in our Fish Curry, made with fresh fish fillets simmered in a creamy coconut milk sauce.",
    category: "Curry",
  },
  {
    _id: "7",
    name: "Egg Curry with Spices",
    image: food_7,
    price: 10.0,
    description:
      "Our Egg Curry is a simple yet flavorful dish, featuring boiled eggs cooked in a spiced gravy.",
    category: "Curry",
  },
  {
    _id: "8",
    name: "Mutton Korma",
    image: food_8,
    price: 30.0,
    description:
      "Savor our Mutton Korma, a royal dish made with tender mutton pieces in a rich, creamy sauce.",
    category: "Curry",
  },

  // Pizza Products
  {
    _id: "9",
    name: "Margherita Pizza",
    image: food_9,
    price: 40.0,
    description:
      "Our Margherita Pizza is a classic, topped with fresh mozzarella, tomatoes, and basil.",
    category: "Pizza",
  },
  {
    _id: "10",
    name: "Pepperoni Pizza",
    image: food_10,
    price: 40.0,
    description:
      "Enjoy our Pepperoni Pizza, loaded with spicy pepperoni slices on a bed of melted cheese.",
    category: "Pizza",
  },
  {
    _id: "11",
    name: "BBQ Chicken Pizza",
    image: food_11,
    price: 50.0,
    description:
      "Try our BBQ Chicken Pizza, topped with tender chicken pieces, BBQ sauce, and red onions.",
    category: "Pizza",
  },
  {
    _id: "12",
    name: "Vegetarian Pizza",
    image: food_12,
    price: 40.0,
    description:
      "Our Vegetarian Pizza is a colorful mix of bell peppers, onions, mushrooms, and olives on a cheese base.",
    category: "Pizza",
  },
  {
    _id: "13",
    name: "Hawaiian Pizza",
    image: food_13,
    price: 40.0,
    description:
      "Savor the sweet and savory taste of our Hawaiian Pizza, topped with ham and pineapple.",
    category: "Pizza",
  },
  {
    _id: "14",
    name: "Four Cheese Pizza",
    image: food_14,
    price: 50.0,
    description:
      "Indulge in our Four Cheese Pizza, featuring a blend of mozzarella, cheddar, parmesan, and blue cheese.",
    category: "Pizza",
  },
  {
    _id: "15",
    name: "Spicy Sausage Pizza",
    image: food_15,
    price: 50.0,
    description:
      "Our Spicy Sausage Pizza is topped with hot sausage, peppers, and onions for a fiery kick.",
    category: "Pizza",
  },
  {
    _id: "16",
    name: "Mushroom Truffle Pizza",
    image: food_16,
    price: 60.0,
    description:
      "Experience the earthy flavors of our Mushroom Truffle Pizza, topped with sautéed mushrooms and truffle oil.",
    category: "Pizza",
  },

  // Rice Products
  {
    _id: "17",
    name: "Chicken Biryani",
    image: food_17,
    price: 30.0,
    description:
      "Our Chicken Biryani is a fragrant rice dish, made with tender chicken pieces and aromatic spices.",
    category: "Rice",
  },
  {
    _id: "18",
    name: "Vegetable Fried Rice",
    image: food_18,
    price: 30.0,
    description:
      "Enjoy our Vegetable Fried Rice, a mix of rice, fresh vegetables, and soy sauce for a tasty meal.",
    category: "Rice",
  },
  {
    _id: "19",
    name: "Prawn Pilaf",
    image: food_19,
    price: 30.0,
    description:
      "Savor our Prawn Pilaf, a flavorful rice dish with prawns cooked in a fragrant broth.",
    category: "Rice",
  },
  {
    _id: "20",
    name: "Beef Pulao",
    image: food_20,
    price: 30.0,
    description:
      "Our Beef Pulao is a hearty dish, featuring tender beef pieces cooked with aromatic basmati rice.",
    category: "Rice",
  },
  {
    _id: "21",
    name: "Mutton Biryani",
    image: food_21,
    price: 40.0,
    description:
      "Try our Mutton Biryani, a rich and flavorful rice dish made with tender mutton and spices.",
    category: "Rice",
  },
  {
    _id: "22",
    name: "Egg Fried Rice",
    image: food_22,
    price: 20.0,
    description:
      "Our Egg Fried Rice is a simple yet delicious dish, made with scrambled eggs and seasoned rice.",
    category: "Rice",
  },
  {
    _id: "23",
    name: "Lemon Rice",
    image: food_23,
    price: 20.0,
    description:
      "Enjoy the tangy taste of our Lemon Rice, made with fresh lemon juice, turmeric, and aromatic spices.",
    category: "Rice",
  },
  {
    _id: "24",
    name: "Shrimp Fried Rice",
    image: food_24,
    price: 30.0,
    description:
      "Our Shrimp Fried Rice is a tasty dish, featuring juicy shrimp stir-fried with seasoned rice.",
    category: "Rice",
  },

  // Deserts Products
  {
    _id: "25",
    name: "Classic Chocolate Cake with Rich Ganache",
    image: food_25,
    price: 10.0,
    description:
      "Indulge in our Classic Chocolate Cake, made with layers of moist chocolate sponge and rich ganache.",
    category: "Deserts",
  },
  {
    _id: "26",
    name: "Creamy Cheesecake with Fresh Berry Topping",
    image: food_26,
    price: 10.0,
    description:
      "Savor our Creamy Cheesecake, topped with a medley of fresh berries for a delightful finish.",
    category: "Deserts",
  },
  {
    _id: "27",
    name: "Warm Apple Pie with Flaky Crust",
    image: food_27,
    price: 10.0,
    description:
      "Enjoy our Warm Apple Pie, filled with spiced apples and encased in a flaky, buttery crust.",
    category: "Deserts",
  },
  {
    _id: "28",
    name: "Decadent Chocolate Brownie with Fudge Center",
    image: food_28,
    price: 10.0,
    description:
      "Treat yourself to our Decadent Chocolate Brownie, featuring a rich, fudgy center.",
    category: "Deserts",
  },
  {
    _id: "29",
    name: "Light Lemon Tart with Buttery Crust",
    image: food_29,
    price: 8.0,
    description:
      "Relish our Light Lemon Tart, offering a tangy lemon filling in a crisp, buttery crust.",
    category: "Deserts",
  },
  {
    _id: "30",
    name: "Velvety Chocolate Mousse with Whipped Cream",
    image: food_30,
    price: 10.0,
    description:
      "Experience the smooth texture of our Velvety Chocolate Mousse, topped with fresh whipped cream.",
    category: "Deserts",
  },
  {
    _id: "31",
    name: "Creamy Panna Cotta with Berry Compote",
    image: food_31,
    price: 10.0,
    description:
      "Delight in our Creamy Panna Cotta, served with a luscious berry compote.",
    category: "Deserts",
  },
  {
    _id: "32",
    name: "Traditional Tiramisu with Mascarpone Cream",
    image: food_32,
    price: 10.0,
    description:
      "Savor the flavors of Italy with our Traditional Tiramisu, layered with rich mascarpone cream.",
    category: "Deserts",
  },
  // Drinks Products
  {
    _id: "33",
    name: "Chilled Lemonade with Fresh Mint",
    image: food_33,
    price: 10.0,
    description:
      "Enjoy our Chilled Lemonade, infused with fresh mint for a refreshing twist on a classic drink.",
    category: "Drinks",
  },
  {
    _id: "34",
    name: "Smooth Vanilla Milkshake",
    image: food_34,
    price: 10.0,
    description:
      "Indulge in our Smooth Vanilla Milkshake, made with creamy vanilla ice cream and fresh milk.",
    category: "Drinks",
  },
  {
    _id: "35",
    name: "Tangy Orange Juice",
    image: food_35,
    price: 10.0,
    description:
      "Savor the taste of our Tangy Orange Juice, freshly squeezed from ripe oranges.",
    category: "Drinks",
  },
  {
    _id: "36",
    name: "Rich Chocolate Milk",
    image: food_36,
    price: 10.0,
    description:
      "Treat yourself to our Rich Chocolate Milk, a perfect blend of cocoa and milk for a creamy delight.",
    category: "Drinks",
  },
  {
    _id: "37",
    name: "Fruity Mango Smoothie",
    image: food_37,
    price: 8.0,
    description:
      "Relish our Fruity Mango Smoothie, made with fresh mangoes and yogurt for a healthy treat.",
    category: "Drinks",
  },
  {
    _id: "38",
    name: "Refreshing Iced Tea",
    image: food_38,
    price: 10.0,
    description:
      "Experience the cool and refreshing taste of our Iced Tea, brewed with a hint of lemon.",
    category: "Drinks",
  },
  {
    _id: "39",
    name: "Creamy Coffee Latte",
    image: food_39,
    price: 10.0,
    description:
      "Delight in our Creamy Coffee Latte, made with rich espresso and steamed milk.",
    category: "Drinks",
  },
  {
    _id: "40",
    name: "Zesty Ginger Ale",
    image: food_40,
    price: 10.0,
    description:
      "Savor the spicy and refreshing taste of our Zesty Ginger Ale, perfect for any time of day.",
    category: "Drinks",
  },

  // Fruits Products
  {
    _id: "41",
    name: "Fresh Strawberries",
    image: food_41,
    price: 20.0,
    description:
      "Enjoy the sweet and juicy taste of our Fresh Strawberries, handpicked for your delight.",
    category: "Fruits",
  },
  {
    _id: "42",
    name: "Crisp Green Apples",
    image: food_42,
    price: 10.0,
    description:
      "Savor the tart and refreshing taste of our Crisp Green Apples, perfect for snacking.",
    category: "Fruits",
  },
  {
    _id: "43",
    name: "Tropical Pineapple Chunks",
    image: food_43,
    price: 10.0,
    description:
      "Delight in our Tropical Pineapple Chunks, bursting with sweet and tangy flavors.",
    category: "Fruits",
  },
  {
    _id: "44",
    name: "Juicy Watermelon Slices",
    image: food_44,
    price: 10.0,
    description:
      "Cool down with our Juicy Watermelon Slices, perfect for a refreshing summer treat.",
    category: "Fruits",
  },
  {
    _id: "45",
    name: "Sweet Red Grapes",
    image: food_45,
    price: 20.0,
    description:
      "Indulge in our Sweet Red Grapes, packed with natural sweetness and flavor.",
    category: "Fruits",
  },
  {
    _id: "46",
    name: "Freshly Peeled Oranges",
    image: food_46,
    price: 10.0,
    description:
      "Enjoy the convenience of our Freshly Peeled Oranges, ready to eat and full of juicy goodness.",
    category: "Fruits",
  },
  {
    _id: "47",
    name: "Ripe Banana Bunch",
    image: food_47,
    price: 10.0,
    description:
      "Our Ripe Banana Bunch is perfect for a quick snack or a healthy addition to your meals.",
    category: "Fruits",
  },
  {
    _id: "48",
    name: "Exotic Mango Slices",
    image: food_48,
    price: 20.0,
    description:
      "Savor the rich and juicy taste of our Exotic Mango Slices, a perfect tropical treat.",
    category: "Fruits",
  },
];
