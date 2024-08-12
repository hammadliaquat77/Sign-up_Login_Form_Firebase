import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import { getAuth,
   onAuthStateChanged,
   createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY3zwoBy9HfpsugbaS8BJbE4c-wf5BAl4",
  authDomain: "batch-11-3191d.firebaseapp.com",
  projectId: "batch-11-3191d",
  storageBucket: "batch-11-3191d.appspot.com",
  messagingSenderId: "1087219169012",
  appId: "1:1087219169012:web:5b0babdb382fa5bddb90a1",
  measurementId: "G-P1PS3T51ZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);



   
onAuthStateChanged(auth, (user) => {
  if (user) {
      console.log('user is Logged in');
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
      } else {
          console.log('user is not Logged in');
          // User is signed out
          
          // ...
      }
  });
  









var UsersObj = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    description:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    category: "beauty",
    price: 9.99,
    discountPercentage: 7.17,
    rating: 4.94,
    stock: 5,
    tags: ["beauty", "mascara"],
    brand: "Essence",
    sku: "RCH45Q1A",
    weight: 2,
    dimensions: { width: 23.17, height: 14.43, depth: 28.01 },
    warrantyInformation: "1 month warranty",
    shippingInformation: "Ships in 1 month",
    availabilityStatus: "Low Stock",
    reviews: [
      {
        rating: 2,
        comment: "Very unhappy with my purchase!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "John Doe",
        reviewerEmail: "john.doe@x.dummyjson.com",
      },
      {
        rating: 2,
        comment: "Not as described!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Nolan Gonzalez",
        reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Very satisfied!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Scarlett Wright",
        reviewerEmail: "scarlett.wright@x.dummyjson.com",
      },
    ],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 24,
    meta: {
      createdAt: "2024-05-23T08:56:21.618Z",
      updatedAt: "2024-05-23T08:56:21.618Z",
      barcode: "9164035109868",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
  },
  {
    id: 2,
    title: "Eyeshadow Palette with Mirror",
    description:
      "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
    category: "beauty",
    price: 19.99,
    discountPercentage: 5.5,
    rating: 3.28,
    stock: 44,
    tags: ["beauty", "eyeshadow"],
    brand: "Glamour Beauty",
    sku: "MVCFH27F",
    weight: 3,
    dimensions: { width: 12.42, height: 8.63, depth: 29.13 },
    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 2 weeks",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 4,
        comment: "Very satisfied!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Liam Garcia",
        reviewerEmail: "liam.garcia@x.dummyjson.com",
      },
      {
        rating: 1,
        comment: "Very disappointed!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Nora Russell",
        reviewerEmail: "nora.russell@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Highly impressed!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Elena Baker",
        reviewerEmail: "elena.baker@x.dummyjson.com",
      },
    ],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 32,
    meta: {
      createdAt: "2024-05-23T08:56:21.618Z",
      updatedAt: "2024-05-23T08:56:21.618Z",
      barcode: "2817839095220",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
  },
  {
    id: 3,
    title: "Powder Canister",
    description:
      "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
    category: "beauty",
    price: 14.99,
    discountPercentage: 18.14,
    rating: 3.82,
    stock: 59,
    tags: ["beauty", "face powder"],
    brand: "Velvet Touch",
    sku: "9EN8WLT2",
    weight: 8,
    dimensions: { width: 24.16, height: 10.7, depth: 11.07 },
    warrantyInformation: "2 year warranty",
    shippingInformation: "Ships in 1-2 business days",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 5,
        comment: "Very happy with my purchase!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Ethan Thompson",
        reviewerEmail: "ethan.thompson@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Great value for money!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Levi Hicks",
        reviewerEmail: "levi.hicks@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Highly impressed!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Hazel Gardner",
        reviewerEmail: "hazel.gardner@x.dummyjson.com",
      },
    ],
    returnPolicy: "60 days return policy",
    minimumOrderQuantity: 25,
    meta: {
      createdAt: "2024-05-23T08:56:21.618Z",
      updatedAt: "2024-05-23T08:56:21.618Z",
      barcode: "0516267971277",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png",
  },
  {
    id: 4,
    title: "Red Lipstick",
    description:
      "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
    category: "beauty",
    price: 12.99,
    discountPercentage: 19.03,
    rating: 2.51,
    stock: 68,
    tags: ["beauty", "lipstick"],
    brand: "Chic Cosmetics",
    sku: "O5IF1NTA",
    weight: 5,
    dimensions: { width: 14.37, height: 13.94, depth: 14.6 },
    warrantyInformation: "Lifetime warranty",
    shippingInformation: "Ships in 2 weeks",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 5,
        comment: "Great product!",
        date: "2024-05-23T08:56:21.619Z",
        reviewerName: "Leo Rivera",
        reviewerEmail: "leo.rivera@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Very pleased!",
        date: "2024-05-23T08:56:21.619Z",
        reviewerName: "Oscar Powers",
        reviewerEmail: "oscar.powers@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Very pleased!",
        date: "2024-05-23T08:56:21.619Z",
        reviewerName: "Carter Rivera",
        reviewerEmail: "carter.rivera@x.dummyjson.com",
      },
    ],
    returnPolicy: "90 days return policy",
    minimumOrderQuantity: 6,
    meta: {
      createdAt: "2024-05-23T08:56:21.619Z",
      updatedAt: "2024-05-23T08:56:21.619Z",
      barcode: "9444582199406",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png",
  },
  {
    id: 5,
    title: "Red Nail Polish",
    description:
      "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
    category: "beauty",
    price: 8.99,
    discountPercentage: 2.46,
    rating: 3.91,
    stock: 71,
    tags: ["beauty", "nail polish"],
    brand: "Nail Couture",
    sku: "YUIIIP4W",
    weight: 9,
    dimensions: { width: 8.11, height: 10.89, depth: 29.06 },
    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 1 week",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 5,
        comment: "Very pleased!",
        date: "2024-05-23T08:56:21.619Z",
        reviewerName: "Leo Rivera",
        reviewerEmail: "leo.rivera@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Great product!",
        date: "2024-05-23T08:56:21.619Z",
        reviewerName: "Evan Reed",
        reviewerEmail: "evan.reed@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Highly recommended!",
        date: "2024-05-23T08:56:21.619Z",
        reviewerName: "Evelyn Sanchez",
        reviewerEmail: "evelyn.sanchez@x.dummyjson.com",
      },
    ],
    returnPolicy: "No return policy",
    minimumOrderQuantity: 46,
    meta: {
      createdAt: "2024-05-23T08:56:21.619Z",
      updatedAt: "2024-05-23T08:56:21.619Z",
      barcode: "3212847902461",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png",
  },
  {
    id: 6,
    title: "Calvin Klein CK One",
    description:
      "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
    category: "fragrances",
    price: 49.99,
    discountPercentage: 0.32,
    rating: 4.85,
    stock: 17,
    tags: ["fragrances", "perfumes"],
    brand: "Calvin Klein",
    sku: "DZM2JQZE",
    weight: 5,
    dimensions: { width: 11.53, height: 14.44, depth: 6.81 },
    warrantyInformation: "5 year warranty",
    shippingInformation: "Ships overnight",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 5,
        comment: "Great value for money!",
        date: "2024-05-23T08:56:21.619Z",
        reviewerName: "Sophia Brown",
        reviewerEmail: "sophia.brown@x.dummyjson.com",
      },
      {
        rating: 3,
        comment: "Very disappointed!",
        date: "2024-05-23T08:56:21.619Z",
        reviewerName: "Madison Collins",
        reviewerEmail: "madison.collins@x.dummyjson.com",
      },
      {
        rating: 1,
        comment: "Poor quality!",
        date: "2024-05-23T08:56:21.619Z",
        reviewerName: "Maya Reed",
        reviewerEmail: "maya.reed@x.dummyjson.com",
      },
    ],
    returnPolicy: "No return policy",
    minimumOrderQuantity: 20,
    meta: {
      createdAt: "2024-05-23T08:56:21.619Z",
      updatedAt: "2024-05-23T08:56:21.619Z",
      barcode: "2210136215089",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png",
  },
  {
    id: 7,
    title: "Chanel Coco Noir Eau De",
    description:
      "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
    category: "fragrances",
    price: 129.99,
    discountPercentage: 18.64,
    rating: 2.76,
    stock: 41,
    tags: ["fragrances", "perfumes"],
    brand: "Chanel",
    sku: "K71HBCGS",
    weight: 4,
    dimensions: { width: 21.27, height: 28, depth: 11.89 },
    warrantyInformation: "1 week warranty",
    shippingInformation: "Ships in 1 month",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 1,
        comment: "Disappointing product!",
        date: "2024-05-23T08:56:21.619Z",
        reviewerName: "Lincoln Kelly",
        reviewerEmail: "lincoln.kelly@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Great product!",
        date: "2024-05-23T08:56:21.619Z",
        reviewerName: "Lincoln Kelly",
        reviewerEmail: "lincoln.kelly@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Excellent quality!",
        date: "2024-05-23T08:56:21.619Z",
        reviewerName: "Lucas Allen",
        reviewerEmail: "lucas.allen@x.dummyjson.com",
      },
    ],
    returnPolicy: "60 days return policy",
    minimumOrderQuantity: 5,
    meta: {
      createdAt: "2024-05-23T08:56:21.619Z",
      updatedAt: "2024-05-23T08:56:21.619Z",
      barcode: "1435582999795",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png"
   ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png",
  },
  {
    id: 8,
    title: "Dior J'adore",
    description:
      "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
    category: "fragrances",
    price: 89.99,
    discountPercentage: 17.44,
    rating: 3.31,
    stock: 91,
    tags: ["fragrances", "perfumes"],
    brand: "Dior",
    sku: "E70NB03B",
    weight: 10,
    dimensions: { width: 21.51, height: 7, depth: 26.51 },
    warrantyInformation: "Lifetime warranty",
    shippingInformation: "Ships in 2 weeks",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 5,
        comment: "Fast shipping!",
        date: "2024-05-23T08:56:21.619Z",
        reviewerName: "Zoe Nicholson",
        reviewerEmail: "zoe.nicholson@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Excellent quality!",
        date: "2024-05-23T08:56:21.619Z",
        reviewerName: "Addison Wright",
        reviewerEmail: "addison.wright@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Would buy again!",
        date: "2024-05-23T08:56:21.619Z",
        reviewerName: "Clara Berry",
        reviewerEmail: "clara.berry@x.dummyjson.com",
      },
    ],
    returnPolicy: "7 days return policy",
    minimumOrderQuantity: 8,
    meta: {
      createdAt: "2024-05-23T08:56:21.619Z",
      updatedAt: "2024-05-23T08:56:21.619Z",
      barcode: "0887083199279",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/1.png"
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png",
  },
  {
    id: 9,
    title: "Dolce Shine Eau de",
    description:
      "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
    category: "fragrances",
    price: 69.99,
    discountPercentage: 11.47,
    rating: 2.68,
    stock: 3,
    tags: ["fragrances", "perfumes"],
    brand: "Dolce & Gabbana",
    sku: "1NBFK980",
    weight: 5,
    dimensions: { width: 17, height: 24.57, depth: 13.3 },
    warrantyInformation: "5 year warranty",
    shippingInformation: "Ships in 1-2 business days",
    availabilityStatus: "Low Stock",
    reviews: [
      {
        rating: 4,
        comment: "Very satisfied!",
        date: "2024-05-23T08:56:21.619Z",
        reviewerName: "Xavier Wright",
        reviewerEmail: "xavier.wright@x.dummyjson.com",
      },
      {
        rating: 1,
        comment: "Poor quality!",
        date: "2024-05-23T08:56:21.619Z",
        reviewerName: "Mila Hernandez",
        reviewerEmail: "mila.hernandez@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Very happy with my purchase!",
        date: "2024-05-23T08:56:21.619Z",
        reviewerName: "Sophia Brown",
        reviewerEmail: "sophia.brown@x.dummyjson.com",
      },
    ],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 9,
    meta: {
      createdAt: "2024-05-23T08:56:21.619Z",
      updatedAt: "2024-05-23T08:56:21.619Z",
      barcode: "1939383392674",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/1.png"
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/thumbnail.png",
  },
  {
    id: 10,
    title: "Gucci Bloom Eau de",
    description:
      "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
    category: "fragrances",
    price: 79.99,
    discountPercentage: 8.9,
    rating: 2.69,
    stock: 93,
    tags: ["fragrances", "perfumes"],
    brand: "Gucci",
    sku: "FFKZ6HOF",
    weight: 10,
    dimensions: { width: 22.28, height: 17.81, depth: 27.18 },
    warrantyInformation: "No warranty",
    shippingInformation: "Ships in 2 weeks",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 5,
        comment: "Great value for money!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Aria Parker",
        reviewerEmail: "aria.parker@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Excellent quality!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Natalie Harris",
        reviewerEmail: "natalie.harris@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Fast shipping!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Ava Harris",
        reviewerEmail: "ava.harris@x.dummyjson.com",
      },
    ],
    returnPolicy: "No return policy",
    minimumOrderQuantity: 10,
    meta: {
      createdAt: "2024-05-23T08:56:21.620Z",
      updatedAt: "2024-05-23T08:56:21.620Z",
      barcode: "8232190382069",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/1.png"
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png",
  },
  {
    id: 11,
    title: "Annibale Colombo Bed",
    description:
      "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
    category: "furniture",
    price: 1899.99,
    discountPercentage: 0.29,
    rating: 4.14,
    stock: 47,
    tags: ["furniture", "beds"],
    brand: "Annibale Colombo",
    sku: "4KMDTZWF",
    weight: 3,
    dimensions: { width: 28.75, height: 26.88, depth: 24.47 },
    warrantyInformation: "2 year warranty",
    shippingInformation: "Ships overnight",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 4,
        comment: "Great value for money!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Julian Newton",
        reviewerEmail: "julian.newton@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Would buy again!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Madison Collins",
        reviewerEmail: "madison.collins@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Would buy again!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Clara Berry",
        reviewerEmail: "clara.berry@x.dummyjson.com",
      },
    ],
    returnPolicy: "7 days return policy",
    minimumOrderQuantity: 1,
    meta: {
      createdAt: "2024-05-23T08:56:21.620Z",
      updatedAt: "2024-05-23T08:56:21.620Z",
      barcode: "7113807059215",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png",
  },
  {
    id: 12,
    title: "Annibale Colombo Sofa",
    description:
      "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
    category: "furniture",
    price: 2499.99,
    discountPercentage: 18.54,
    rating: 3.08,
    stock: 16,
    tags: ["furniture", "sofas"],
    brand: "Annibale Colombo",
    sku: "LUU95CQP",
    weight: 3,
    dimensions: { width: 20.97, height: 19.11, depth: 25.81 },
    warrantyInformation: "1 month warranty",
    shippingInformation: "Ships overnight",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 5,
        comment: "Very satisfied!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Tyler Davis",
        reviewerEmail: "tyler.davis@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Excellent quality!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Hannah Robinson",
        reviewerEmail: "hannah.robinson@x.dummyjson.com",
      },
      {
        rating: 3,
        comment: "Waste of money!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Madison Collins",
        reviewerEmail: "madison.collins@x.dummyjson.com",
      },
    ],
    returnPolicy: "7 days return policy",
    minimumOrderQuantity: 1,
    meta: {
      createdAt: "2024-05-23T08:56:21.620Z",
      updatedAt: "2024-05-23T08:56:21.620Z",
      barcode: "0426785817074",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/thumbnail.png",
  },
  {
    id: 13,
    title: "Bedside Table African Cherry",
    description:
      "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
    category: "furniture",
    price: 299.99,
    discountPercentage: 9.58,
    rating: 4.48,
    stock: 16,
    tags: ["furniture", "bedside tables"],
    brand: "Furniture Co.",
    sku: "OWPLTZYX",
    weight: 10,
    dimensions: { width: 25.43, height: 20.2, depth: 24.95 },
    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 1-2 business days",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 5,
        comment: "Very happy with my purchase!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "John Doe",
        reviewerEmail: "john.doe@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Highly recommended!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Avery Carter",
        reviewerEmail: "avery.carter@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Very pleased!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Evelyn Sanchez",
        reviewerEmail: "evelyn.sanchez@x.dummyjson.com",
      },
    ],
    returnPolicy: "No return policy",
    minimumOrderQuantity: 5,
    meta: {
      createdAt: "2024-05-23T08:56:21.620Z",
      updatedAt: "2024-05-23T08:56:21.620Z",
      barcode: "2913244159666",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/1.png",
      
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/thumbnail.png",
  },
  {
    id: 14,
    title: "Knoll Saarinen Executive Conference Chair",
    description:
      "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
    category: "furniture",
    price: 499.99,
    discountPercentage: 15.23,
    rating: 4.11,
    stock: 47,
    tags: ["furniture", "office chairs"],
    brand: "Knoll",
    sku: "RKHVJ4FE",
    weight: 3,
    dimensions: { width: 16.59, height: 21.46, depth: 29.07 },
    warrantyInformation: "Lifetime warranty",
    shippingInformation: "Ships in 3-5 business days",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 4,
        comment: "Very happy with my purchase!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Leah Gutierrez",
        reviewerEmail: "leah.gutierrez@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Would buy again!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Nolan Gonzalez",
        reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
      },
      {
        rating: 2,
        comment: "Waste of money!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Stella Morris",
        reviewerEmail: "stella.morris@x.dummyjson.com",
      },
    ],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 5,
    meta: {
      createdAt: "2024-05-23T08:56:21.620Z",
      updatedAt: "2024-05-23T08:56:21.620Z",
      barcode: "0726316339746",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/thumbnail.png",
  },
  {
    id: 15,
    title: "Wooden Bathroom Sink With Mirror",
    description:
      "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
    category: "furniture",
    price: 799.99,
    discountPercentage: 11.22,
    rating: 3.26,
    stock: 95,
    tags: ["furniture", "bathroom"],
    brand: "Bath Trends",
    sku: "7OLTIEVO",
    weight: 6,
    dimensions: { width: 7.32, height: 22.64, depth: 12.37 },
    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 3-5 business days",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 5,
        comment: "Highly recommended!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Charlotte Lopez",
        reviewerEmail: "charlotte.lopez@x.dummyjson.com",
      },
      {
        rating: 1,
        comment: "Would not recommend!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "William Gonzalez",
        reviewerEmail: "william.gonzalez@x.dummyjson.com",
      },
      {
        rating: 2,
        comment: "Not worth the price!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Ava Harrison",
        reviewerEmail: "ava.harrison@x.dummyjson.com",
      },
    ],
    returnPolicy: "7 days return policy",
    minimumOrderQuantity: 1,
    meta: {
      createdAt: "2024-05-23T08:56:21.620Z",
      updatedAt: "2024-05-23T08:56:21.620Z",
      barcode: "7839797529453",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/thumbnail.png",
  },
  {
    id: 16,
    title: "Apple",
    description:
      "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
    category: "groceries",
    price: 1.99,
    discountPercentage: 1.97,
    rating: 2.96,
    stock: 9,
    tags: ["fruits"],
    sku: "QTROUV79",
    weight: 8,
    dimensions: { width: 8.29, height: 5.58, depth: 12.41 },
    warrantyInformation: "2 year warranty",
    shippingInformation: "Ships in 2 weeks",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 4,
        comment: "Great product!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Logan Lee",
        reviewerEmail: "logan.lee@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Great product!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Elena Long",
        reviewerEmail: "elena.long@x.dummyjson.com",
      },
      {
        rating: 1,
        comment: "Not as described!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Grayson Coleman",
        reviewerEmail: "grayson.coleman@x.dummyjson.com",
      },
    ],
    returnPolicy: "60 days return policy",
    minimumOrderQuantity: 44,
    meta: {
      createdAt: "2024-05-23T08:56:21.620Z",
      updatedAt: "2024-05-23T08:56:21.620Z",
      barcode: "2517819903837",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: ["https://cdn.dummyjson.com/products/images/groceries/Apple/1.png"],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Apple/thumbnail.png",
  },
  {
    id: 17,
    title: "Beef Steak",
    description:
      "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
    category: "groceries",
    price: 12.99,
    discountPercentage: 17.99,
    rating: 2.83,
    stock: 96,
    tags: ["meat"],
    sku: "BWWA2MSO",
    weight: 9,
    dimensions: { width: 23.35, height: 13.48, depth: 26.4 },
    warrantyInformation: "1 month warranty",
    shippingInformation: "Ships overnight",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 4,
        comment: "Very pleased!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Ethan Martinez",
        reviewerEmail: "ethan.martinez@x.dummyjson.com",
      },
      {
        rating: 3,
        comment: "Disappointing product!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Owen Fisher",
        reviewerEmail: "owen.fisher@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Very happy with my purchase!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Scarlett Wright",
        reviewerEmail: "scarlett.wright@x.dummyjson.com",
      },
    ],
    returnPolicy: "90 days return policy",
    minimumOrderQuantity: 21,
    meta: {
      createdAt: "2024-05-23T08:56:21.620Z",
      updatedAt: "2024-05-23T08:56:21.620Z",
      barcode: "8335515097879",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/thumbnail.png",
  },
  {
    id: 18,
    title: "Cat Food",
    description:
      "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
    category: "groceries",
    price: 8.99,
    discountPercentage: 9.57,
    rating: 2.88,
    stock: 13,
    tags: ["pet supplies", "cat food"],
    sku: "C3F8QN6O",
    weight: 9,
    dimensions: { width: 15.4, height: 13.97, depth: 25.13 },
    warrantyInformation: "3 months warranty",
    shippingInformation: "Ships in 1-2 business days",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 5,
        comment: "Very pleased!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Mateo Bennett",
        reviewerEmail: "mateo.bennett@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Very pleased!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Aurora Barnes",
        reviewerEmail: "aurora.barnes@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Great value for money!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Ellie Stewart",
        reviewerEmail: "ellie.stewart@x.dummyjson.com",
      },
    ],
    returnPolicy: "7 days return policy",
    minimumOrderQuantity: 48,
    meta: {
      createdAt: "2024-05-23T08:56:21.620Z",
      updatedAt: "2024-05-23T08:56:21.620Z",
      barcode: "5503491330693",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/thumbnail.png",
  },
  {
    id: 19,
    title: "Chicken Meat",
    description:
      "Fresh and tender chicken meat, suitable for various culinary preparations.",
    category: "groceries",
    price: 9.99,
    discountPercentage: 10.46,
    rating: 4.61,
    stock: 69,
    tags: ["meat"],
    sku: "G5YEHW7B",
    weight: 7,
    dimensions: { width: 15.96, height: 29.24, depth: 26.25 },
    warrantyInformation: "Lifetime warranty",
    shippingInformation: "Ships in 1 month",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 5,
        comment: "Very satisfied!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Sophia Jones",
        reviewerEmail: "sophia.jones@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Great value for money!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Maya Reed",
        reviewerEmail: "maya.reed@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Highly recommended!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Harper Turner",
        reviewerEmail: "harper.turner@x.dummyjson.com",
      },
    ],
    returnPolicy: "7 days return policy",
    minimumOrderQuantity: 46,
    meta: {
      createdAt: "2024-05-23T08:56:21.620Z",
      updatedAt: "2024-05-23T08:56:21.620Z",
      barcode: "0966223559510",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/thumbnail.png",
  },
  {
    id: 20,
    title: "Cooking Oil",
    description:
      "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
    category: "groceries",
    price: 4.99,
    discountPercentage: 18.89,
    rating: 4.01,
    stock: 22,
    tags: ["cooking essentials"],
    sku: "Q6ZP1UY8",
    weight: 8,
    dimensions: { width: 8.18, height: 27.45, depth: 27.88 },
    warrantyInformation: "Lifetime warranty",
    shippingInformation: "Ships in 1 month",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 5,
        comment: "Would buy again!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Mason Parker",
        reviewerEmail: "mason.parker@x.dummyjson.com",
      },
      {
        rating: 3,
        comment: "Poor quality!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Jonathan Pierce",
        reviewerEmail: "jonathan.pierce@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Would buy again!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Alexander Hernandez",
        reviewerEmail: "alexander.hernandez@x.dummyjson.com",
      },
    ],
    returnPolicy: "60 days return policy",
    minimumOrderQuantity: 2,
    meta: {
      createdAt: "2024-05-23T08:56:21.620Z",
      updatedAt: "2024-05-23T08:56:21.620Z",
      barcode: "6707669443381",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/thumbnail.png",
  },
  {
    id: 21,
    title: "Cucumber",
    description:
      "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.",
    category: "groceries",
    price: 1.49,
    discountPercentage: 11.44,
    rating: 4.71,
    stock: 22,
    tags: ["vegetables"],
    sku: "6KGF2K6Z",
    weight: 9,
    dimensions: { width: 11.04, height: 20.5, depth: 8.18 },
    warrantyInformation: "5 year warranty",
    shippingInformation: "Ships overnight",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 4,
        comment: "Very satisfied!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Elijah Hill",
        reviewerEmail: "elijah.hill@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Fast shipping!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Liam Garcia",
        reviewerEmail: "liam.garcia@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Excellent quality!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Ella Cook",
        reviewerEmail: "ella.cook@x.dummyjson.com",
      },
    ],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 7,
    meta: {
      createdAt: "2024-05-23T08:56:21.620Z",
      updatedAt: "2024-05-23T08:56:21.620Z",
      barcode: "2597004869708",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/products/images/groceries/Cucumber/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Cucumber/thumbnail.png",
  },
  {
    id: 22,
    title: "Dog Food",
    description:
      "Specially formulated dog food designed to provide essential nutrients for your canine companion.",
    category: "groceries",
    price: 10.99,
    discountPercentage: 18.15,
    rating: 2.74,
    stock: 40,
    tags: ["pet supplies", "dog food"],
    sku: "A6QRCH37",
    weight: 2,
    dimensions: { width: 29.39, height: 29.77, depth: 20.54 },
    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 1 month",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 5,
        comment: "Highly impressed!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Leo Rivera",
        reviewerEmail: "leo.rivera@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Highly recommended!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Alexander Jones",
        reviewerEmail: "alexander.jones@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Would buy again!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Addison Wright",
        reviewerEmail: "addison.wright@x.dummyjson.com",
      },
    ],
    returnPolicy: "90 days return policy",
    minimumOrderQuantity: 29,
    meta: {
      createdAt: "2024-05-23T08:56:21.620Z",
      updatedAt: "2024-05-23T08:56:21.620Z",
      barcode: "7957222289508",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/thumbnail.png",
  },
  {
    id: 23,
    title: "Eggs",
    description:
      "Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.",
    category: "groceries",
    price: 2.99,
    discountPercentage: 5.8,
    rating: 4.46,
    stock: 10,
    tags: ["dairy"],
    sku: "YA617RI7",
    weight: 4,
    dimensions: { width: 12.3, height: 10.99, depth: 15.53 },
    warrantyInformation: "3 year warranty",
    shippingInformation: "Ships overnight",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 2,
        comment: "Very unhappy with my purchase!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Mateo Perez",
        reviewerEmail: "mateo.perez@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Very happy with my purchase!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Cameron Perez",
        reviewerEmail: "cameron.perez@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Very happy with my purchase!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Aurora Barnes",
        reviewerEmail: "aurora.barnes@x.dummyjson.com",
      },
    ],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 43,
    meta: {
      createdAt: "2024-05-23T08:56:21.620Z",
      updatedAt: "2024-05-23T08:56:21.620Z",
      barcode: "7095702028776",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: ["https://cdn.dummyjson.com/products/images/groceries/Eggs/1.png"],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Eggs/thumbnail.png",
  },
  {
    id: 24,
    title: "Fish Steak",
    description:
      "Quality fish steak, suitable for grilling, baking, or pan-searing.",
    category: "groceries",
    price: 14.99,
    discountPercentage: 7,
    rating: 4.83,
    stock: 99,
    tags: ["seafood"],
    sku: "XNIH1MTA",
    weight: 8,
    dimensions: { width: 20.14, height: 8.4, depth: 10.01 },
    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 1 month",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 5,
        comment: "Great value for money!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Michael Johnson",
        reviewerEmail: "michael.johnson@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Would buy again!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Julian Newton",
        reviewerEmail: "julian.newton@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Excellent quality!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Lila Hudson",
        reviewerEmail: "lila.hudson@x.dummyjson.com",
      },
    ],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 49,
    meta: {
      createdAt: "2024-05-23T08:56:21.620Z",
      updatedAt: "2024-05-23T08:56:21.620Z",
      barcode: "4250692197342",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/thumbnail.png",
  },
  {
    id: 25,
    title: "Green Bell Pepper",
    description:
      "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.",
    category: "groceries",
    price: 1.29,
    discountPercentage: 15.5,
    rating: 4.28,
    stock: 89,
    tags: ["vegetables"],
    sku: "HU7S7VQ0",
    weight: 7,
    dimensions: { width: 7.32, height: 14.31, depth: 21.38 },
    warrantyInformation: "5 year warranty",
    shippingInformation: "Ships overnight",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 4,
        comment: "Excellent quality!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Maya Reed",
        reviewerEmail: "maya.reed@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Would buy again!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Madison Collins",
        reviewerEmail: "madison.collins@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Would buy again!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Ethan Thompson",
        reviewerEmail: "ethan.thompson@x.dummyjson.com",
      },
    ],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,
    meta: {
      createdAt: "2024-05-23T08:56:21.620Z",
      updatedAt: "2024-05-23T08:56:21.620Z",
      barcode: "7583442707568",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/thumbnail.png",
  },
  {
    id: 26,
    title: "Green Chili Pepper",
    description:
      "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
    category: "groceries",
    price: 0.99,
    discountPercentage: 18.51,
    rating: 4.43,
    stock: 8,
    tags: ["vegetables"],
    sku: "Y4RM3JCB",
    weight: 2,
    dimensions: { width: 18.67, height: 21.17, depth: 25.26 },
    warrantyInformation: "No warranty",
    shippingInformation: "Ships in 1-2 business days",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 2,
        comment: "Disappointing product!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Mateo Bennett",
        reviewerEmail: "mateo.bennett@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Very pleased!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Natalie Price",
        reviewerEmail: "natalie.price@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Very satisfied!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Avery Barnes",
        reviewerEmail: "avery.barnes@x.dummyjson.com",
      },
    ],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 43,
    meta: {
      createdAt: "2024-05-23T08:56:21.620Z",
      updatedAt: "2024-05-23T08:56:21.620Z",
      barcode: "8400326844874",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/thumbnail.png",
  },
  {
    id: 27,
    title: "Honey Jar",
    description:
      "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.",
    category: "groceries",
    price: 6.99,
    discountPercentage: 1.91,
    rating: 3.5,
    stock: 25,
    tags: ["condiments"],
    sku: "BTBNIIOU",
    weight: 9,
    dimensions: { width: 26.53, height: 27.11, depth: 6.63 },
    warrantyInformation: "2 year warranty",
    shippingInformation: "Ships overnight",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 4,
        comment: "Fast shipping!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Nicholas Bailey",
        reviewerEmail: "nicholas.bailey@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Awesome product!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Gabriel Hayes",
        reviewerEmail: "gabriel.hayes@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Highly impressed!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "James Garcia",
        reviewerEmail: "james.garcia@x.dummyjson.com",
      },
    ],
    returnPolicy: "90 days return policy",
    minimumOrderQuantity: 1,
    meta: {
      createdAt: "2024-05-23T08:56:21.620Z",
      updatedAt: "2024-05-23T08:56:21.620Z",
      barcode: "0668665656044",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/thumbnail.png",
  },
  {
    id: 28,
    title: "Ice Cream",
    description:
      "Creamy and delicious ice cream, available in various flavors for a delightful treat.",
    category: "groceries",
    price: 5.49,
    discountPercentage: 7.58,
    rating: 3.77,
    stock: 76,
    tags: ["desserts"],
    sku: "VEZMU1EQ",
    weight: 5,
    dimensions: { width: 17.66, height: 24.49, depth: 25.98 },
    warrantyInformation: "2 year warranty",
    shippingInformation: "Ships in 2 weeks",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 5,
        comment: "Great product!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Elena Baker",
        reviewerEmail: "elena.baker@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Highly impressed!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Madeline Simpson",
        reviewerEmail: "madeline.simpson@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Very happy with my purchase!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Caleb Nelson",
        reviewerEmail: "caleb.nelson@x.dummyjson.com",
      },
    ],
    returnPolicy: "No return policy",
    minimumOrderQuantity: 19,
    meta: {
      createdAt: "2024-05-23T08:56:21.620Z",
      updatedAt: "2024-05-23T08:56:21.620Z",
      barcode: "9603960319256",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/thumbnail.png",
  },
  {
    id: 29,
    title: "Juice",
    description:
      "Refreshing fruit juice, packed with vitamins and great for staying hydrated.",
    category: "groceries",
    price: 3.99,
    discountPercentage: 5.45,
    rating: 3.41,
    stock: 99,
    tags: ["beverages"],
    sku: "M2K19S06",
    weight: 2,
    dimensions: { width: 8.97, height: 12.26, depth: 15.05 },
    warrantyInformation: "1 week warranty",
    shippingInformation: "Ships in 1-2 business days",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 4,
        comment: "Very satisfied!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Leo Rivera",
        reviewerEmail: "leo.rivera@x.dummyjson.com",
      },
      {
        rating: 2,
        comment: "Not worth the price!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Ethan Martinez",
        reviewerEmail: "ethan.martinez@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Excellent quality!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Max Parker",
        reviewerEmail: "max.parker@x.dummyjson.com",
      },
    ],
    returnPolicy: "90 days return policy",
    minimumOrderQuantity: 26,
    meta: {
      createdAt: "2024-05-23T08:56:21.620Z",
      updatedAt: "2024-05-23T08:56:21.620Z",
      barcode: "8546824122355",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: ["https://cdn.dummyjson.com/products/images/groceries/Juice/1.png"],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Juice/thumbnail.png",
  },
  {
    id: 30,
    title: "Kiwi",
    description:
      "Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.",
    category: "groceries",
    price: 2.49,
    discountPercentage: 10.32,
    rating: 4.37,
    stock: 1,
    tags: ["fruits"],
    sku: "0X3NORB9",
    weight: 8,
    dimensions: { width: 27.3, height: 7.48, depth: 15.08 },
    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 3-5 business days",
    availabilityStatus: "Low Stock",
    reviews: [
      {
        rating: 5,
        comment: "Very pleased!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Nora Russell",
        reviewerEmail: "nora.russell@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Very pleased!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Dylan Wells",
        reviewerEmail: "dylan.wells@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Great product!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Noah Hernandez",
        reviewerEmail: "noah.hernandez@x.dummyjson.com",
      },
    ],
    returnPolicy: "7 days return policy",
    minimumOrderQuantity: 8,
    meta: {
      createdAt: "2024-05-23T08:56:21.620Z",
      updatedAt: "2024-05-23T08:56:21.620Z",
      barcode: "3325493172934",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: ["https://cdn.dummyjson.com/products/images/groceries/Kiwi/1.png"],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Kiwi/thumbnail.png",
  },
  {
    id: 31,
    title: "Cokacola",
    description:
      "a drink that generally contains water, a sweetener, and a natural and / or artificial flavor.",
    category: "groceries",
    price: 5.49,
    discountPercentage: 10.32,
    rating: 4.37,
    stock: 1,
    tags: ["fruits"],
    sku: "0X3NORB9",
    weight: 8,
    dimensions: { width: 27.3, height: 7.48, depth: 15.08 },
    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 3-5 business days",
    availabilityStatus: "Low Stock",
    reviews: [
      {
        rating: 5,
        comment: "Very pleased!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Nora Russell",
        reviewerEmail: "nora.russell@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Very pleased!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Dylan Wells",
        reviewerEmail: "dylan.wells@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Great product!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Noah Hernandez",
        reviewerEmail: "noah.hernandez@x.dummyjson.com",
      },
    ],
    returnPolicy: "7 days return policy",
    minimumOrderQuantity: 8,
    meta: {
      createdAt: "2024-05-23T08:56:21.620Z",
      updatedAt: "2024-05-23T08:56:21.620Z",
      barcode: "3325493172934",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: ["data:image/jpeg;base64,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"],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Kiwi/thumbnail.png",
  },
  {
    id: 32,
    title: "Mango",
    description:
      "A sweet tropical fruit, and it's also the name of the trees on which the fruit grows.",
    category: "groceries",
    price: 2.49,
    discountPercentage: 10.32,
    rating: 4.37,
    stock: 1,
    tags: ["fruits"],
    sku: "0X3NORB9",
    weight: 8,
    dimensions: { width: 27.3, height: 7.48, depth: 15.08 },
    warrantyInformation: "6 months warranty",
    shippingInformation: "Ships in 3-5 business days",
    availabilityStatus: "Low Stock",
    reviews: [
      {
        rating: 5,
        comment: "Very pleased!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Nora Russell",
        reviewerEmail: "nora.russell@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Very pleased!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Dylan Wells",
        reviewerEmail: "dylan.wells@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Great product!",
        date: "2024-05-23T08:56:21.620Z",
        reviewerName: "Noah Hernandez",
        reviewerEmail: "noah.hernandez@x.dummyjson.com",
      },
    ],
    returnPolicy: "7 days return policy",
    minimumOrderQuantity: 8,
    meta: {
      createdAt: "2024-05-23T08:56:21.620Z",
      updatedAt: "2024-05-23T08:56:21.620Z",
      barcode: "3325493172934",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images:["data:image/jpeg;base64,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"],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Kiwi/thumbnail.png",
  },
];



console.log(UsersObj);

let main = document.getElementById('main');
var uniqueCategory = [];

// dropdown with unique categories
for (const x of UsersObj) {
  if (!uniqueCategory.includes(x.category)) {
    main.innerHTML += `<option value="${x.category}">${x.category}</option>`;
    uniqueCategory.push(x.category);
  }
}

// Display all cards initially
let hello = document.getElementById('hello');
for (const y of UsersObj) {
  
  hello.innerHTML += ` <div class="card">
     <div class="img"> <img src="${y.images}" alt="" class="card-img"> </div>
     <div class="card-title">${y.title.slice(0,15)}</div>
     <div class="card-subtitle">${y.description.slice(0,60)}</div>
     <hr class="card-divider">
     <div class="card-footer">
         <div class="card-price"><span>$</span> ${y.price}</div>
         <button class="card-btn" onclick="btn(${y.id -1})">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path></svg>
         </button>
     </div>
 </div>`
};

// category select show cards initially

function HTMLCard(a) {
  return `
    <div class="card">
      <div class="img">
        <img src="${a.images}" alt="" class="card-img">
      </div>
      <div class="card-title">${a.title.slice(0, 15)}</div>
      <div class="card-subtitle">${a.description.slice(0, 60)}</div>
      <hr class="card-divider">
      <div class="card-footer">
        <div class="card-price"><span>$</span> ${a.price}</div>
        <button class="card-btn" onclick="btn(${a.id - 1})">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path>
            <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
            <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
            <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path>
          </svg>
        </button>
      </div>
    </div>`;
}


function card() {
  hello.innerHTML = '';
  for (const z of UsersObj) {
    if (z.category == main.value) {
      hello.innerHTML += HTMLCard(z);
      
    }
  }
}




function btn(i) {
   
  Swal.fire({
    title: `${UsersObj[i].title}`,
    text: "Your Order Is Conformed.",
    imageUrl: `${UsersObj[i].images}`,
    imageWidth: 250,
    imageHeight: 200,
  });

};



// function btn(i) {
//     // Swal.fire(`<div class="img w-full h-[300px] flex justify-center "><img src="${UsersObj[i].images}" alt="" class=' w-[300px] h-[300px] '></div><h1>${data[i].title}</h1> `);
    // alertify.confirm(`<div class="img   flex justify-between items-center flex-col  "><img src="${UsersObj[i].images}" alt="" class=' w-[300px] h-[300px] '><h1>${data[i].title}</h1><h1>${data[i].description}</h1></div> `,
//         function(){
//           alertify.success('Ok');
//         },
//         function(){
//           alertify.error('Cancel');
//         });
// }





let signout = document.getElementById('Signout')

signout.addEventListener('click', function () {
  // console.log('type');


signOut(auth).then(() => {
  // Sign-out successful.
  console.log('Sign-out successful');
  window.location.href = 'index.html'
}).catch((error) => {
  // An error happened.
  console.log('An error happened');
  
});
  
})




