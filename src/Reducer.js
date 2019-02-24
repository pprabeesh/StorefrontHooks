export const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { cartItems: [...state.cartItems, action.data] };
    case "remove":
      return {
        cartItems: state.cartItems.filter(item => item.title !== action.data)
      };
  }
};
