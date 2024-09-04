import { apiSlice } from "./apiSlice";
import { INVENTORY_URL } from "./urlConstrains";
// In your inventoryApiSlice
export const inventoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getInventory: builder.query({
      query: () => INVENTORY_URL,
      providesTags: ["Inventory"],
    }),
    addItem: builder.mutation({
      query: (data) => ({
        url: INVENTORY_URL,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Inventory"],
    }),
    updateItem: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `${INVENTORY_URL}/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Inventory"],
    }),
    deleteItem: builder.mutation({
      query: (id) => ({
        url: `${INVENTORY_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Inventory"],
    }),
  }),
});


export const {
  useGetInventoryQuery,
  useAddItemMutation,
  useUpdateItemMutation,
  useDeleteItemMutation,
} = inventoryApiSlice;
