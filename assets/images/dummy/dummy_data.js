export const places = [
  {
    images: [
      require("./place1.jpg"),
      require("./place1.jpg"),
      require("./place1.jpg"),
    ],
    name: "Miejsce 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar vulputate aliquet. Donec at aliquet velit. Suspendisse pharetra sapien sit amet suscipit pulvinar. Donec rhoncus placerat nisl, at faucibus dui consectetur nec. Quisque congue dui efficitur pulvinar sollicitudin. Pellentesque non commodo dolor. ",
    user: {
      image: require("./profiloweJD.jpg"),
    },
    tags: [
      {
        title: "przyroda",
      },
      {
        title: "niebo",
      },
    ],
  },
  {
    images: [require("./place2.jpg"), require("./place1.jpg")],
    name: "Fajniusia nazwa miejsca",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar vulputate aliquet. Donec at aliquet velit. Suspendisse pharetra sapien sit amet suscipit pulvinar. Donec rhoncus placerat nisl, at faucibus dui consectetur nec. Quisque congue dui efficitur pulvinar sollicitudin. Pellentesque non commodo dolor. ",
    user: {
      image: require("./profiloweJD.jpg"),
    },
    tags: [
      {
        title: "przyroda",
      },
      {
        title: "niebo",
      },
    ],
  },
  {
    images: [require("./place3.jpg")],
    name: "Fajniusia nazwa miejsca",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar vulputate aliquet. Donec at aliquet velit. Suspendisse pharetra sapien sit amet suscipit pulvinar. Donec rhoncus placerat nisl, at faucibus dui consectetur nec. Quisque congue dui efficitur pulvinar sollicitudin. Pellentesque non commodo dolor. ",
    user: {
      image: require("./profiloweJD.jpg"),
    },
    tags: [
      {
        title: "przyroda",
      },
      {
        title: "niebo",
      },
    ],
  },
  {
    images: [require("./place4.jpg")],
    name: "Fajniusia nazwa miejsca",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar vulputate aliquet. Donec at aliquet velit. Suspendisse pharetra sapien sit amet suscipit pulvinar. Donec rhoncus placerat nisl, at faucibus dui consectetur nec. Quisque congue dui efficitur pulvinar sollicitudin. Pellentesque non commodo dolor. ",
    user: {
      image: require("./profiloweJD.jpg"),
    },
    tags: [
      {
        title: "przyroda",
      },
      {
        title: "niebo",
      },
    ],
  },
];

export const tags = [
  {
    image: require("./place1.jpg"),
    title: "budynek",
    followed: 379,
    is_followed: false,
    places: places,
  },
  {
    image: require("./place2.jpg"),
    title: "miasto",
    followed: 129,
    is_followed: true,
    places: places,
  },
  {
    image: require("./place3.jpg"),
    title: "centrum",
    followed: 379,
    is_followed: true,
    places: places,
  },
  {
    image: require("./place4.jpg"),
    title: "nowoczesność",
    followed: 379,
    is_followed: false,
    places: places,
  },
  {
    image: require("./place5.jpg"),
    title: "przyroda",
    followed: 379,
    is_followed: true,
    places: places,
  },
];

export const top_users = [
  {
    username: "bezimenny",
    image: require("./profiloweJD.jpg"),
    places: 418,
  },
  {
    username: "bezimenny",
    image: require("./profiloweJD.jpg"),
    places: 351,
  },
  {
    username: "bezimenny",
    image: require("./profiloweJD.jpg"),
    places: 51,
  },
];

export const folders = [
  {
    name: "Do odwiedzenia",
    places: places,
  },
  {
    name: "Ulubione",
    places: places,
  },
  {
    name: "Odwiedzone",
    places: places,
  },
];
