import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  items: WishListItem[];
};

type WishListItem = {
  id: number;
  title: string;
  price: number;
  discountedPrice: number;
  quantity: number;
  status?: string;
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};

const initialState: InitialState = {
  items: [
    {
      id: 2,
      title: "iPhone 14 Plus , 6/128GB",
      price: 899.0,
      discountedPrice: 99.0,
      quantity: 1,
      status: "available",
      imgs: {
        thumbnails: [
          "/images/products/product-2-sm-1.png",
          "/images/products/product-2-sm-2.png",
        ],
        previews: [
          "/images/products/product-2-bg-1.png",
          "/images/products/product-2-bg-2.png",
        ],
      },
    },
    {
      id: 3,
      title: "Apple iMac M1 24-inch 2021",
      price: 59.0,
      discountedPrice: 29.0,
      quantity: 1,
      status: "available",
      imgs: {
        thumbnails: [
          "/images/products/product-3-sm-1.png",
          "/images/products/product-3-sm-2.png",
        ],
        previews: [
          "/images/products/product-3-bg-1.png",
          "/images/products/product-3-bg-2.png",
        ],
      },
    },
    {
      id: 5,
      title: "Apple Watch Ultra",
      price: 99.0,
      discountedPrice: 29.0,
      quantity: 1,
      status: "available",
      imgs: {
        thumbnails: [
          "/images/products/product-5-sm-1.png",
          "/images/products/product-5-sm-2.png",
        ],
        previews: [
          "/images/products/product-5-bg-1.png",
          "/images/products/product-5-bg-2.png",
        ],
      },
    },
    {
      id: 7,
      title: "Apple iPad Air 5th Gen - 64GB",
      price: 59.0,
      discountedPrice: 29.0,
      quantity: 1,
      status: "available",
      imgs: {
        thumbnails: [
          "/images/products/product-7-sm-1.png",
          "/images/products/product-7-sm-2.png",
        ],
        previews: [
          "/images/products/product-7-bg-1.png",
          "/images/products/product-7-bg-2.png",
        ],
      },
    },
    {
      id: 8,
      title: "Asus RT Dual Band Router",
      price: 59.0,
      discountedPrice: 29.0,
      quantity: 1,
      status: "available",
      imgs: {
        thumbnails: [
          "/images/products/product-8-sm-1.png",
          "/images/products/product-8-sm-2.png",
        ],
        previews: [
          "/images/products/product-8-bg-1.png",
          "/images/products/product-8-bg-2.png",
        ],
      },
    },
  ],
};

export const wishlist = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItemToWishlist: (state, action: PayloadAction<WishListItem>) => {
      const { id, title, price, quantity, imgs, discountedPrice, status } =
        action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({
          id,
          title,
          price,
          quantity,
          imgs,
          discountedPrice,
          status,
        });
      }
    },
    removeItemFromWishlist: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },

    removeAllItemsFromWishlist: (state) => {
      state.items = [];
    },
  },
});

export const {
  addItemToWishlist,
  removeItemFromWishlist,
  removeAllItemsFromWishlist,
} = wishlist.actions;
export default wishlist.reducer;
