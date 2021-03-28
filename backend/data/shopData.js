const SHOP_DATA = [
  {
    id: 1,
    title: "Women",
    routeName: "women",
    items: [
      {
        id: 1,
        name: "Floral Maxi Dress",
        imageUrl:
          "https://images.unsplash.com/photo-1567189022371-cc754891cdc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        price: 50,
        noOfItems: 10,
        rating: 4.5,
      },
      {
        id: 2,
        name: "Burgundy Mini Dress",
        imageUrl:
          "https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        price: 80,
        noOfItems: 5,
        rating: 4,
      },
      {
        id: 3,
        name: "Faded Denim Jacket",
        imageUrl:
          "https://images.unsplash.com/photo-1527692013692-dd97db1f9a2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        price: 100,
        noOfItems: 12,
        rating: 4.8,
      },
      {
        id: 4,
        name: "Peach Polka Dot Maxi",
        imageUrl:
          "https://images.unsplash.com/photo-1528812969535-4bcefc071532?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fHdvbWVuJTIwZHJlc3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price: 60,
        noOfItems: 3,
        rating: 3.5,
      },
      {
        id: 5,
        name: "Red Floral Midi Dress",
        imageUrl:
          "https://images.unsplash.com/photo-1572804013854-26c537be296e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDV8fHdvbWVuJTIwZHJlc3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price: 80,
        noOfItems: 9,
        rating: 3.5,
      },
      {
        id: 6,
        name: "Red Floral Crop Top",
        imageUrl:
          "https://images.unsplash.com/photo-1593380090147-a2192b72a9ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        price: 75,
        noOfItems: 0,
        rating: 5,
      },
      {
        id: 7,
        name: "Blue Jeans",
        imageUrl:
          "https://images.unsplash.com/photo-1593502738690-6a5799263961?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        price: 90,
        noOfItems: 5,
        rating: 3,
      },
    ],
  },
  {
    id: 2,
    title: "Mens",
    routeName: "mens",
    items: [
      {
        id: 1,
        name: "Faded Blue jeans",
        imageUrl:
          "https://images.unsplash.com/flagged/photo-1552708068-ddef64d75aee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        price: 325,
        noOfItems: 10,
        rating: 4.0,
      },
      {
        id: 2,
        name: "Grey T-Shirt",
        imageUrl:
          "https://images.unsplash.com/flagged/photo-1575924795232-1893dbca02f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        price: 30,
        noOfItems: 10,
        rating: 4.0,
      },
      {
        id: 3,
        name: "Blue Shirt",
        imageUrl:
          "https://images.unsplash.com/photo-1585518126763-5146ad8837a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        price: 55,
        noOfItems: 10,
        rating: 4.5,
      },
      {
        id: 4,
        name: "White Shirt",
        imageUrl:
          "https://images.unsplash.com/photo-1552252059-9d77e4059ad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        price: 70,
        noOfItems: 10,
        rating: 3.5,
      },
      {
        id: 5,
        name: "Black Vest",
        imageUrl:
          "https://images.unsplash.com/photo-1523452617300-93ebbf63ed61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        price: 100,
        noOfItems: 10,
        rating: 3.5,
      },
      {
        id: 6,
        name: "Burgundy Jacket",
        imageUrl:
          "https://images.unsplash.com/photo-1512353087810-25dfcd100962?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        price: 150,
        noOfItems: 10,
        rating: 3,
      },
    ],
  },
  {
    id: 2,
    title: "Kids",
    routeName: "kids",
    items: [
      {
        id: 1,
        name: "Black Puffer Jacket",
        imageUrl:
          "https://images.unsplash.com/photo-1520413624224-91d4554286bb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fGNsb3RoZXMlMjBraWRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price: 80,
        noOfItems: 10,
        rating: 4.5,
      },
      {
        id: 2,
        name: "Color Striped Skirt",
        imageUrl:
          "https://images.unsplash.com/photo-1487033858121-f6f74a05c1de?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNsb3RoZXMlMjBraWRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price: 50,
        noOfItems: 10,
        rating: 4.0,
      },
      {
        id: 3,
        name: "Summer Print Set",
        imageUrl:
          "https://images.unsplash.com/photo-1502451885777-16c98b07834a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fGtpZHMlMjBjbG90aGVzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price: 60,
        noOfItems: 10,
        rating: 3.5,
      },
      {
        id: 4,
        name: "Blue Jeans",
        imageUrl:
          "https://images.unsplash.com/photo-1584270845191-5b392bf08e69?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsb3RoZXMlMjB0b2RkbGVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price: 35,
        noOfItems: 10,
        rating: 3.5,
      },
      {
        id: 5,
        name: "Checkered Shirt",
        imageUrl:
          "https://images.unsplash.com/photo-1541580620-23a640b30338?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fGtpZCUyMGNsb3RoZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price: 30,
        noOfItems: 10,
        rating: 4,
      },

      {
        id: 6,
        name: "White Striped Overall",
        imageUrl:
          "https://images.unsplash.com/photo-1568347798848-276915a45da6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGJhYnklMjBkcmVzc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        price: 45,
        noOfItems: 10,
        rating: 3,
      },
    ],
  },
];

export default SHOP_DATA;
