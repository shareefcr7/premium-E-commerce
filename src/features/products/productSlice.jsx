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
        image: "https://images.unsplash.com/photo-1600585154235-89f1d4d50f72?auto=format&fit=crop&w=600&q=80",
        description: "A comfortable luxury sofa for your living room."
      },
      {
        id: 2,
        title: "Modern Chair",
        category: "Chair",
        price: 5000,
        image: "https://images.unsplash.com/photo-1600585154180-2d4f2b9ef9c8?auto=format&fit=crop&w=600&q=80",
        description: "Stylish modern chair with sleek design."
      },
      {
        id: 3,
        title: "Elegant Dining Table",
        category: "Table",
        price: 18000,
        image: "https://images.unsplash.com/photo-1616627983683-9e1ef6b84511?auto=format&fit=crop&w=600&q=80",
        description: "Premium dining table perfect for family meals."
      },
      {
        id: 4,
        title: "King Size Bed",
        category: "Bed",
        price: 30000,
        image: "https://images.unsplash.com/photo-1616627982916-f9f2f5dc6e7f?auto=format&fit=crop&w=600&q=80",
        description: "Spacious and comfortable king-size bed."
      },
      {
        id: 5,
        title: "Office Chair",
        category: "Chair",
        price: 7000,
        image: "https://images.unsplash.com/photo-1598300051421-f7d3b918b3d8?auto=format&fit=crop&w=600&q=80",
        description: "Ergonomic chair perfect for working from home."
      },
      {
        id: 6,
        title: "Coffee Table",
        category: "Table",
        price: 4000,
        image: "https://images.unsplash.com/photo-1616627983364-cf2061d2450a?auto=format&fit=crop&w=600&q=80",
        description: "Stylish coffee table for your living room."
      },
      {
        id: 7,
        title: "Wardrobe",
        category: "Bed",
        price: 20000,
        image: "https://images.unsplash.com/photo-1598300041852-bf80b3d3eb97?auto=format&fit=crop&w=600&q=80",
        description: "Spacious wardrobe to organize your clothes."
      },
      {
        id: 8,
        title: "Recliner Chair",
        category: "Chair",
        price: 12000,
        image: "https://images.unsplash.com/photo-1598300041854-6b0f6a2c52d1?auto=format&fit=crop&w=600&q=80",
        description: "Relaxing recliner chair with premium padding."
      },
      {
        id: 9,
        title: "Nightstand",
        category: "Bed",
        price: 3500,
        image: "https://images.unsplash.com/photo-1616627983798-c38f1f62e2f4?auto=format&fit=crop&w=600&q=80",
        description: "Modern nightstand for bedroom essentials."
      },
      
        {
  id: 10,
  title: "Bookshelf",
  category: "Table",
  price: 8000,
  image: "https://images.pexels.com/photos/34314485/pexels-photo-34314485.jpeg",
  description: "Elegant bookshelf to keep your books organized."
},
      {
        id: 11,
        title: "Accent Chair",
        category: "Chair",
        price: 6000,
        image: "https://images.unsplash.com/photo-1616627983745-7e1ef6b84513?auto=format&fit=crop&w=600&q=80",
        description: "Cozy accent chair for living room corners."
      },
      {
        id: 12,
        title: "Side Table",
        category: "Table",
        price: 3500,
        image: "https://images.unsplash.com/photo-1616627983745-7e1ef6b84514?auto=format&fit=crop&w=600&q=80",
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
