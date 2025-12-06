// src/features/products/productSlice.jsx
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch premium luxury furniture products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    await new Promise(resolve => setTimeout(resolve, 500)); // simulate network delay
    return [
      {
        id: 1,
        title: "Luxury Sofa",
        category: "Sofa",
        price: 25000,
        image: "https://images.pexels.com/photos/33724910/pexels-photo-33724910.jpeg",
        description: "A comfortable luxury sofa for your living room."
      },
      {
        id: 2,
        title: "Modern Chair",
        category: "Chair",
        price: 15000,
        image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
        description: "Stylish modern chair with sleek design."
      },
      {
        id: 3,
        title: "Dinner Table",
        category: "Table",
        price: 55000,
        image: "https://images.pexels.com/photos/7546548/pexels-photo-7546548.jpeg",
        description: "Stylish modern dining table with sleek design."
      },
      {
        id: 4,
        title: "King Size Bed",
        category: "Bed",
        price: 53000,
        image: "https://images.pexels.com/photos/7746105/pexels-photo-7746105.jpeg",
        description: "Spacious and comfortable king-size bed."
      },
      {
        id: 5,
        title: "Office Chair",
        category: "Chair",
        price: 27000,
        image: "https://images.pexels.com/photos/12331457/pexels-photo-12331457.jpeg",
        description: "Ergonomic chair perfect for working from home."
      },
      {
        id: 6,
        title: "Coffee Table",
        category: "Table",
        price: 14000,
        image: "https://images.pexels.com/photos/16815690/pexels-photo-16815690.jpeg",
        description: "Stylish coffee table for your living room."
      },
      {
        id: 7,
        title: "Wardrobe",
        category: "Bed",
        price: 20000,
        image: "https://images.pexels.com/photos/1374125/pexels-photo-1374125.jpeg",
        description: "Spacious wardrobe to organize your clothes."
      },
      {
        id: 8,
        title: "Recliner Chair",
        category: "Chair",
        price: 22000,
        image: "https://images.pexels.com/photos/31911433/pexels-photo-31911433.png",
        description: "Relaxing recliner chair with premium padding."
      },
      {
        id: 9,
        title: "Nightstand",
        category: "Bed",
        price: 35000,
        image: "https://images.pexels.com/photos/9899856/pexels-photo-9899856.jpeg",
        description: "Modern nightstand for bedroom essentials."
      },
      
        {
  id: 10,
  title: "Bookshelf",
  category: "Table",
  price: 48000,
  image: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg",
  description: "Elegant bookshelf to keep your books organized."
},
      {
        id: 11,
        title: "Accent Chair",
        category: "Chair",
        price: 6000,
        image: "https://images.pexels.com/photos/31594858/pexels-photo-31594858.jpeg",
        description: "Cozy accent chair for living room corners."
      },
      {
        id: 12,
        title: "Side Table",
        category: "Table",
        price: 23500,
        image: "https://images.pexels.com/photos/2196685/pexels-photo-2196685.jpeg",
        description: "Compact side table for convenience."
      }
    ];
  }
);

const initialState = { items: [], status: "idle", error: null };

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => { state.status = "loading"; })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  }
});

export default productSlice.reducer;
