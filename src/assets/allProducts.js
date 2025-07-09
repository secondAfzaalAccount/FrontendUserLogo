const allProducts = [
  {
    id: 1,
    name: "Blue Shirt",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "Men",
    image: [
      "https://i.pinimg.com/736x/98/73/8b/98738b9406d4d8e7627f1f6a034194c7.jpg",
    ],
    quantity: 1,
    Sizes: ['S','M','L','XL','2XL'],
    BestSeller: true,
  },

  {
    id: 2,
    name: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "Men",
    image: [
      "https://i.pinimg.com/736x/aa/52/84/aa5284f860e33f1589d506e161eb8006.jpg",
    ],
    quantity: 1,
  Sizes: ['S','M','L','XL','2XL'],
    BestSeller: true,
  },

  {
    id: 3,
    name: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "Men",
    image: [
      "https://i.pinimg.com/736x/a8/fd/92/a8fd9210224179335229c36072be7082.jpg",
    ],
    quantity: 1,
  Sizes: ['S','M','L','XL','2XL'],
    BestSeller: false,
  },

  {
    id: 4,
    name: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "Men",
    image: [
      "https://i.pinimg.com/736x/4c/6e/a8/4c6ea85bec9a25c43b159af08d4361cb.jpg",
    ],
    quantity: 1,
  Sizes: ['S','M','L','XL','2XL'],
    BestSeller: false,
  },

  {
    id: 5,
    name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl.",
    category: "Women",
    image: [
      "https://i.pinimg.com/736x/ea/9f/67/ea9f67b44fe6ee15aaf9fcc0e2ad2612.jpg",
    ],
    quantity: 1,
  Sizes: ['S','M','L','XL','2XL'],
    BestSeller: true,
  },

  {
    id: 6,
    name: "Solid BlushStep ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "Women",
    image: [
      "https://i.pinimg.com/736x/bf/54/2b/bf542b5b0c1d26779b30ad2ae950a8cb.jpg",
    ],
    quantity: 1,
  Sizes: ['S','M','L','XL','2XL'],
    BestSeller: true,
  },

  {
    id: 7,
    name: "VelvaWalk",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "Women",
    image: [
      "https://i.pinimg.com/736x/fa/6a/00/fa6a000c3a45a19474c34b3791295440.jpg",
    ],
    quantity: 1,
  Sizes: ['S','M','L','XL','2XL'],
    BestSeller: true,
  },

  {
    id: 8,
    name: "Pierced Owl Rose Gold",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "Women",
    image: [
      "https://i.pinimg.com/736x/e6/66/f9/e666f9ab9d39aae3aad354a3b744ca6d.jpg",
    ],
    quantity: 1,
  Sizes: ['S','M','L','XL','2XL'],
    BestSeller: true,
  },

  {
    id: 9,
    name: "king dress ",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "Kid",
    image: [
      "https://i.pinimg.com/736x/11/5a/53/115a539379266f684c8e2224928a5a08.jpg",
    ],
    quantity: 1,
  Sizes: ['S','M','L','XL','2XL'],
    BestSeller: true,
  },

  {
    id: 10,
    name: "shahzada",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "Kid",
    image: [
      "https://ae-pic-a1.aliexpress-media.com/kf/Sef821286e08f4e1b8f9e80aa9429d269Q.jpg_960x960q75.jpg_.avif",
    ],
    quantity: 1,
  Sizes: ['S','M','L','XL','2XL'],
    BestSeller: true,
  },
    {
    id: 11,
    name: "John Hardy men t shirt",
    price: 1500,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl.",
    category: "Men",
    image: [
      "https://i.pinimg.com/736x/fb/19/18/fb1918277f990278e9e06a73d1ae74a7.jpg",
      "https://i.pinimg.com/736x/4f/d1/53/4fd153c54574df627dc2490858365509.jpg",
      'https://i.pinimg.com/736x/e9/c9/d1/e9c9d1a96228d953ff173e3b1cd2261a.jpg',
      'https://i.pinimg.com/736x/b8/a9/fb/b8a9fbcce954bea8ee31d82e0ef666ac.jpg'
    ],
    quantity: 1,
  Sizes: ['S','M','L','XL','2XL'],
    BestSeller: true,
  },
];

export default allProducts;
