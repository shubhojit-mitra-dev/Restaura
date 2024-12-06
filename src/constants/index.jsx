import dish1 from "../assets/dish1.jpeg";
import dish2 from "../assets/dish2.jpeg";
import dish3 from "../assets/dish3.jpeg";
import dish4 from "../assets/dish4.jpeg";
import dish5 from "../assets/dish5.jpeg";
import dish6 from "../assets/dish6.jpeg";
import dish7 from "../assets/dish7.jpeg";
import dish8 from "../assets/dish8.jpeg";
import dish9 from "../assets/dish9.jpeg";
import dish10 from "../assets/dish10.jpeg";

import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
  { text: "Dishes", targetId: "dishes" },
  { text: "About", targetId: "about" },
  { text: "Mission", targetId: "mission" },
  { text: "Review", targetId: "review" },
  { text: "Contact", targetId: "contact" },
];

export const DISHES = [
  {
    image: dish1,
    title: "Rice Noodle Curry",
    description: "Spicy coconut curry with rice noodles and vegetables",
    price: "$15.99",
  },
  {
    image: dish2,
    title: "Ichiraku Ramen",
    description: "Savory broth with ramen noodles, pork, and green onions",
    price: "$12.99",
  },
  {
    image: dish3,
    title: "Mexican Chickpea Salad",
    description: "Chickpeas, corn, and avocado with a tangy lime dressing",
    price: "$9.99",
  },
  {
    image: dish4,
    title: "Albanian Devilled Eggs",
    description: "Hard-boiled eggs with a spicy red pepper filling",
    price: "$6.99",
  },
  {
    image: dish5,
    title: "Crêpes aux bleuets",
    description: "Fluffy pancakes with fresh blueberries and maple syrup",
    price: "$10.99",
  },
  {
    image: dish6,
    title: "Quinoa Salad",
    description: "Quinoa, cucumber, and feta cheese with a lemon vinaigrette",
    price: "$8.99",
  },
  {
    image: dish7,
    title: "Saffron-Kissed Chicken",
    description: "Chicken marinated in saffron and yogurt, served as curry",
    price: "$14.99",
  },
  {
    image: dish8,
    title: "Salmon Curry",
    description: "Salmon fillets in a creamy coconut curry sauce",
    price: "$18.99",
  },
  {
    image: dish9,
    title: "Thai Coconut Beef Ramen",
    description: "Beef and vegetables in a spicy coconut broth with ramen noodles",
    price: "$16.99",
  },
  {
    image: dish10,
    title: "Schezwan Chinese Bowl",
    description: "Spicy Schezwan noodles with vegetables, egg and tofu",
    price: "$15.99",
  },
];

export const ABOUT = {
  header: "We love cooking!",
  content:
    "At Restaura, we believe that great food goes beyond taste; it tells a story of dedication and creativity. From our chef's signature creations to our attentive service, every detail is curated to ensure your visit is nothing short of exceptional. Whether you're savoring our renowned Tikka Kebab or exploring our diverse menu inspired by global flavors, each dish is a celebration of flavor and innovation. Join us for a culinary journey where every bite leaves a lasting impression. Experience Restaura—where every meal is a masterpiece.",
};

export const MISSION = 
  "Crafting extraordinary dining experiences through culinary excellence, innovative flavors, and impeccable service.";

export const REVIEW = {
  name: "Shwetabh Sinha",
  profession: "Food Critic",
  content:
    "“As a seasoned food critic, my expectations are always high when stepping into a new dining establishment. Restaura, with its unassuming exterior and elegantly designed interior, promised a unique culinary experience from the moment I walked in. And I must say, it delivered beyond my expectations.”",
};

export const CONTACT = [
  { key: "address", value: "Address: 123 Doonga Rd, Bidholi, Dehradun-248007" },
  { key: "phone", value: "Phone: 123-456-7890" },
  { key: "email", value: "Email: contact@restaura.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
  },
];
