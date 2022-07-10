const products = [
  {
    /* the ids are not necessary cause mongoDb collention gives each document it's id */
    /* _id: "1", */
    name: "Laptop",
    image: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4zW5e?ver=a5c3&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 89,
    countInStock: 3,
    rating: 4,
    numReviews: 4,
  },
  {
    /* _id: "2", */
    name: "Iphone 13",
    image: "https://specifications-pro.com/wp-content/uploads/2021/08/iPhone-13-2.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 599,
    countInStock: 10,
    rating: 2,
    numReviews: 2,
  },
  {
   /*  _id: "3", */
    name: "samsung galaxy s22",
    image: "https://m.media-amazon.com/images/I/71TR4hXkNaL.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 929,
    countInStock: 0,
    rating: 3.5,
    numReviews: 3,
  },
  {
    /* _id: "4", */
    name: "Dell XPS 13 OLED (2021) ",
    image: "https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9300/global-spi/ng/silver/notebook-xps-13-9300-silver-campaign-hero-504x350-ng.psd?fmt=jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 399,
    countInStock: 10,
    rating: 5,
    numReviews: 9,
  },
  {
    /* _id: "5", */
    name: "Lace Walking Shoes For Boys & Girls  (Pink)",
    image: "/images/2.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 49,
    countInStock: 7,
    rating: 2,
    numReviews: 2,
  },
  {
    /* _id: "6", */
    name: "Women Red Heels Sandal",
    image: "/images/1.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    price: 29,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
];

export default products;
