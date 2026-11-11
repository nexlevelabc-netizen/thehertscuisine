export const CONTACT = {
  phone: "07596 560531",
  phoneHref: "tel:+447596560531",
  email: "info@thehertscuisine.com",
  instagram: "https://www.instagram.com/thehertscuisine",
  instagramLabel: "thehertscuisine",
  youtube: "https://www.youtube.com/channel/UCg-gQu4cBrhltJlGHaLmHKw",
  facebook: "https://www.facebook.com/TRGMI/",
  areas: "Hertfordshire, London and surrounding counties",
};

export const NAV = [
  { label: "About Us", to: "/about" },
  { label: "Our Services", to: "/services" },
  { label: "Our Menus", to: "/menus" },
  { label: "Gallery", to: "/gallery" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact and Bookings", to: "/contact" },
];

export interface Service {
  id: string;
  index: string;
  title: string;
  short: string;
  description: string;
  includes: string[];
  image: string;
  alt: string;
  faqs: { q: string; a: string }[];
}

export const SERVICES: Service[] = [
  {
    id: "private-chef",
    index: "01",
    title: "Private Chef",
    short: "Bespoke menus cooked in your home or chosen venue.",
    description:
      "A dedicated chef designs a menu around your tastes, shops for the freshest ingredients and cooks in your own kitchen. You host, we cook, and the evening unfolds at your pace.",
    includes: [
      "Personal consultation and tailored menu design",
      "Ingredient sourcing and full preparation",
      "Cooking and plating in your kitchen",
      "Kitchen left immaculate afterwards",
    ],
    image: "/images/real/kitchen-action.jpg",
    alt: "A chef frying plantain in the kitchen",
    faqs: [
      {
        q: "How far in advance should I book a private chef?",
        a: "We recommend at least two weeks so we can design your menu and source the finest ingredients. Shorter notice is sometimes possible, so it is always worth asking.",
      },
      {
        q: "Can you cater for dietary requirements?",
        a: "Yes. Menus are built around your guests, including vegetarian, vegan, gluten conscious and allergy aware preparation. Share your requirements in the enquiry and we will plan accordingly.",
      },
      {
        q: "Which areas do you cover?",
        a: "We are based in Hertfordshire and regularly travel across London and the surrounding counties. Tell us your venue and we will confirm availability.",
      },
    ],
  },
  {
    id: "private-dining",
    index: "02",
    title: "Private Dining",
    short: "Dinner parties and intimate occasions, hosted beautifully.",
    description:
      "From an anniversary dinner for two to a gathering of your closest friends, we create a restaurant standard dining experience in the setting of your choice.",
    includes: [
      "Multi course tasting or sharing menus",
      "Elegant table presentation",
      "Optional wine pairing guidance",
      "Discreet, attentive service",
    ],
    image: "/images/service-dining.jpg",
    alt: "An intimate candlelit dining table set for two",
    faqs: [
      {
        q: "What is the minimum number of guests?",
        a: "Private dining begins from two guests. There is no upper limit in principle; larger tables are planned around your venue and kitchen facilities.",
      },
      {
        q: "Do you provide tableware and styling?",
        a: "We can arrange hire of tableware, linen and glassware as part of your proposal, or work with what you already have at home.",
      },
    ],
  },
  {
    id: "event-catering",
    index: "03",
    title: "Event Catering",
    short: "Generous, beautifully presented food for gatherings of every size.",
    description:
      "Buffets, bowl food and feasting tables for birthdays, anniversaries, community events and milestone celebrations. Every dish arrives fresh, abundant and full of flavour.",
    includes: [
      "Buffet and sharing menu design",
      "Full preparation and timed delivery",
      "Serving team available on request",
      "Chafing dishes and presentation equipment",
    ],
    image: "/images/real/event-buffet.jpg",
    alt: "A generous event buffet of Nigerian and Caribbean dishes",
    faqs: [
      {
        q: "How many guests can you cater for?",
        a: "We regularly cater from twenty guests up to large scale celebrations. Share your numbers and we will shape a menu and service plan to match.",
      },
      {
        q: "Can you serve at venues without a kitchen?",
        a: "Yes. We plan menus and logistics so the food arrives at its best, and we can bring the equipment needed to serve at almost any venue.",
      },
    ],
  },
  {
    id: "weddings-parties",
    index: "04",
    title: "Weddings and Parties",
    short: "Milestone moments deserve food your guests will talk about.",
    description:
      "Traditional engagement celebrations, weddings, baby showers and landmark birthdays. We honour the occasion with menus that blend heritage recipes and refined presentation.",
    includes: [
      "Celebration menu consultation",
      "Traditional and contemporary dishes side by side",
      "Coordination with your planner or venue",
      "Cake table and dessert accompaniments",
    ],
    image: "/images/real/cake-table.jpg",
    alt: "A celebration cake and dessert table at an event",
    faqs: [
      {
        q: "Do you cater traditional ceremonies?",
        a: "Yes. Traditional Nigerian and Caribbean celebration menus are at the heart of what we do, from engagement gatherings to full wedding receptions.",
      },
      {
        q: "Can menus reflect both families and cultures?",
        a: "Absolutely. Many of our celebration menus bring together dishes from different traditions so every guest feels considered.",
      },
    ],
  },
  {
    id: "corporate-catering",
    index: "05",
    title: "Corporate Catering",
    short: "Professional catering for meetings, receptions and office occasions.",
    description:
      "Boardroom lunches, team celebrations, product launches and client receptions. Reliable timings, clear invoicing and food that leaves a lasting impression on your guests.",
    includes: [
      "Working lunch and bowl food menus",
      "Reception canapes and small bites",
      "Scheduled delivery and setup",
      "Itemised proposals and invoicing",
    ],
    image: "/images/real/chafing.jpg",
    alt: "Chafing dishes dressed with flowers at a catered event",
    faqs: [
      {
        q: "Can you accommodate recurring office orders?",
        a: "Yes. We support regular lunch arrangements and repeat event bookings with agreed menus and standing schedules.",
      },
      {
        q: "Do you handle last minute corporate requests?",
        a: "Where our calendar allows, yes. Call us on 07596 560531 and we will confirm what is possible for your date.",
      },
    ],
  },
  {
    id: "party-trays",
    index: "06",
    title: "Party Trays and Food Orders",
    short: "Signature dishes and platters prepared for collection or delivery.",
    description:
      "Our most loved dishes prepared in generous trays and platters, ready to anchor your own celebration. Perfect when you want the flavour of The Herts Cuisine at your own table.",
    includes: [
      "Party jollof, stews and grills by the tray",
      "Small chops platters for sharing",
      "Collection or local delivery arrangements",
      "Serving guidance for your event",
    ],
    image: "/images/real/smallchops-2.jpg",
    alt: "A platter of small chops with puff puff and skewers",
    faqs: [
      {
        q: "How much notice do you need for tray orders?",
        a: "Most tray orders need three to five days notice. Larger orders and peak weekends benefit from a little more time.",
      },
      {
        q: "Do you deliver trays?",
        a: "Collection is available by arrangement, and local delivery can be included within your quotation depending on distance.",
      },
    ],
  },
];

export interface Dish {
  name: string;
  description: string;
  category: "Rice" | "Soups and Stews" | "Grills" | "Small Chops" | "Sides";
  image?: string;
}

export const DISHES: Dish[] = [
  {
    name: "Party Jollof Rice",
    description: "Smoky, richly seasoned party rice cooked the traditional way.",
    category: "Rice",
    image: "/images/real/jollof-tray.jpg",
  },
  {
    name: "Ayamase",
    description: "Green pepper stew with a deep, distinctive flavour.",
    category: "Soups and Stews",
    image: "/images/real/ayamase.jpg",
  },
  {
    name: "Egusi",
    description: "Classic melon seed soup, hearty and richly textured.",
    category: "Soups and Stews",
    image: "/images/real/efo-trays.jpg",
  },
  {
    name: "Signature Asun",
    description: "Peppered grilled goat meat with a gentle char.",
    category: "Grills",
    image: "/images/real/asun-close.jpg",
  },
  {
    name: "Efo Riro",
    description: "Rich spinach stew layered with assorted meats.",
    category: "Soups and Stews",
    image: "/images/real/stew-tray.jpg",
  },
  {
    name: "Small Chops Platter",
    description: "Puff puff, spring rolls, samosas and peppered bites.",
    category: "Small Chops",
    image: "/images/real/smallchops.jpg",
  },
  {
    name: "Jerk Chicken",
    description: "Slow marinated chicken finished over open flame.",
    category: "Grills",
    image: "/images/real/peppered-close.jpg",
  },
  {
    name: "Gizdodo",
    description: "Spiced gizzards tossed with sweet fried plantain.",
    category: "Small Chops",
    image: "/images/real/platter-tray.jpg",
  },
  {
    name: "Curry Goat",
    description: "Caribbean style curry, slow cooked until tender.",
    category: "Soups and Stews",
    image: "/images/real/currygoat.jpg",
  },
  {
    name: "Fried Plantain",
    description: "Golden, caramelised and lightly salted.",
    category: "Sides",
    image: "/images/real/plantain.jpg",
  },
  {
    name: "Ofada Rice",
    description: "Unpolished heritage rice with a nutty character.",
    category: "Rice",
    image: "/images/real/friedrice.jpg",
  },
  {
    name: "Puff Puff",
    description: "Soft, golden dough bites with a gentle sweetness.",
    category: "Small Chops",
    image: "/images/real/puffpuff.jpg",
  },
];

export const OCCASIONS = [
  "Weddings",
  "Birthdays",
  "Anniversaries",
  "Baby Showers",
  "Family Gatherings",
  "Corporate Events",
  "Private Celebrations",
];

export const STEPS = [
  {
    n: "01",
    title: "Tell Us About Your Occasion",
    body: "Share the event date, location, number of guests and the type of service you have in mind.",
  },
  {
    n: "02",
    title: "Create Your Menu",
    body: "Select your preferred cuisine, dishes and any dietary requirements for your guests.",
  },
  {
    n: "03",
    title: "Receive Your Proposal",
    body: "We prepare a tailored quotation covering the food, the service and the agreed arrangements.",
  },
  {
    n: "04",
    title: "Enjoy Your Experience",
    body: "Once your booking is confirmed, our team takes care of everything on the day.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "The food was the talking point of the entire evening. Every dish arrived beautifully presented and the jollof rice was unlike anything our guests had tasted before.",
    name: "Adaeze O",
    event: "Birthday Celebration",
    source: "Yell Review",
  },
  {
    quote:
      "Professional from the first message to the final plate. The team handled our office reception for eighty guests without a single hiccup.",
    name: "Daniel M",
    event: "Corporate Reception",
    source: "Yell Review",
  },
  {
    quote:
      "We booked a private chef for our anniversary and it felt like a fine restaurant had moved into our home. Warm, generous and utterly delicious.",
    name: "Sarah and Kelechi",
    event: "Private Dining",
    source: "Yell Review",
  },
  {
    quote:
      "Our baby shower menu was planned around every guest, including the little ones. Communication was excellent throughout and the small chops vanished in minutes.",
    name: "Funmi A",
    event: "Baby Shower",
    source: "Yell Review",
  },
  {
    quote:
      "Five stars without hesitation. Authentic flavours, elegant presentation and a team that clearly loves what they do.",
    name: "Marcus T",
    event: "Family Gathering",
    source: "Yell Review",
  },
  {
    quote:
      "The proposal was clear, the timings were perfect and the wedding buffet was abundant. Our families still talk about the egusi.",
    name: "The Adeyemi Family",
    event: "Wedding Celebration",
    source: "Yell Review",
  },
];

export const GALLERY = [
  { src: "/images/real/oxtail-hero.jpg", alt: "Slow cooked oxtail garnished and ready to serve", tall: true },
  { src: "/images/real/party-trays.jpg", alt: "Party trays lined up for a celebration", tall: false },
  { src: "/images/real/asun-plantain.jpg", alt: "Asun served with fried plantain", tall: true },
  { src: "/images/real/event-buffet.jpg", alt: "An event buffet with small bites and sushi", tall: false },
  { src: "/images/real/kitchen-action.jpg", alt: "Fresh cooking in the kitchen", tall: true },
  { src: "/images/real/smallchops.jpg", alt: "Small chops boxes ready for guests", tall: true },
  { src: "/images/real/tray-lineup.jpg", alt: "Trays of rice, stews and plantain", tall: false },
  { src: "/images/real/beef-peppers.jpg", alt: "Peppered beef with sweet peppers", tall: true },
  { src: "/images/real/chafing.jpg", alt: "Chafing dishes dressed for service", tall: false },
  { src: "/images/real/plantain.jpg", alt: "Golden fried plantain", tall: true },
];

export const GALLERY_VIDEOS = [
  { src: "/videos/plating.mp4", poster: "/videos/plating-poster.jpg", label: "Plating Up" },
  { src: "/videos/party-boxes.mp4", poster: "/videos/party-boxes-poster.jpg", label: "Party Boxes" },
  { src: "/videos/peppersoup.mp4", poster: "/videos/peppersoup-poster.jpg", label: "Peppersoup, Fresh Off the Stove" },
  { src: "/videos/kitchen-stir.mp4", poster: "/videos/kitchen-stir-poster.jpg", label: "In the Kitchen" },
  { src: "/videos/trays.mp4", poster: "/videos/trays-poster.jpg", label: "Trays for a Celebration" },
  { src: "/videos/trays-b.mp4", poster: "/videos/trays-b-poster.jpg", label: "Packed and Ready" },
];

export const STATS = [
  { value: "58", label: "Five star reviews on Yell" },
  { value: "6", label: "Distinct catering services" },
  { value: "2", label: "Culinary traditions, one table" },
];
