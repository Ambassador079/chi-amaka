export const WHATSAPP_LINK = "https://wa.me/2349012333083";
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Chi Amaka! I'd love to place an order 😋",
);
export const WHATSAPP_FULL = `${WHATSAPP_LINK}?text=${WHATSAPP_MESSAGE}`;

import suyanoodles from "./assets/images/image.png";
import pancake from "./assets/images/pancake.jpg";

export const PRODUCTS = [
  {
    id: 1,
    image: suyanoodles,
    name: "Signature Noodles",
    tagline: "Packed with flavor, made to satisfy!",
    badge: "🔥 Best Seller",
    color: "from-orange-500 to-red-600",
    items: [
      {
        name: "Stir Fry Noodles",
        desc: "2 Noodles, Fried Eggs & Sausage",
        price: "₦2,500",
      },
      {
        name: "Suya Noodles",
        desc: "2 Noodles, Fried Eggs, Sausage & Suya Chunks",
        price: "₦3,500",
      },
    ],
  },
  {
    id: 2,
    image: pancake,
    name: "Fluffy Pancakes",
    tagline: "Soft, fluffy & absolutely delicious!",
    badge: "💛 Fan Fave",
    color: "from-amber-500 to-orange-600",
    items: [
      {
        name: "Fluffy Pancake Plate",
        desc: "4 Fluffy Pancakes, 2 Sausage, Scrambled Eggs & Toppings",
        price: "₦4,200",
      },
    ],
    perks: ["Syrup & Butter Toppings", "Freshly Made to Order"],
  },
  // ── Add more products here ──────────────────────────────────────────
  // 1. Import image: import newdish from './assets/images/newdish.jpg'
  // 2. Copy a product block above, update fields, add to this array
];

export const REVIEWS = [
  {
    name: "Adaeze M.",
    rating: 5,
    text: "Best noodles in the city 😍 I ordered once and now I'm literally addicted! My whole family is obsessed.",
    avatar: "A",
    color: "bg-orange-400",
  },
  {
    name: "Chukwuemeka O.",
    rating: 5,
    text: "I ordered once and now I can't stop! The pancakes are heavenly — I had them three weekends in a row 🥞❤️",
    avatar: "C",
    color: "bg-red-400",
  },
  {
    name: "Blessing A.",
    rating: 5,
    text: "Chi Amaka noodles are the real deal. Spicy, saucy, and SO satisfying. My go-to weekend order every single time!",
    avatar: "B",
    color: "bg-amber-500",
  },
  {
    name: "Tunde K.",
    rating: 5,
    text: "Ordered for the first time last Saturday — finished in 5 mins. Placed a second order 20 mins later 😂🔥 No regrets!",
    avatar: "T",
    color: "bg-rose-500",
  },
];
