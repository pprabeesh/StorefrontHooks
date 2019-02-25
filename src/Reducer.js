export const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      const id = action.data.title;
      const cartItems = [...state.cartItems];
      const isItemPresent = cartItems.findIndex(item => item.title === id);
      let newCartItems = [];
      if (isItemPresent !== -1) {
        newCartItems = cartItems.map(item => {
          if (item.title === id) {
            const newCount = action.update
              ? action.count
              : item.count + action.count;
            return { ...item, count: newCount };
          }
          return item;
        });
      } else {
        cartItems.push({ ...action.data, count: action.count });
        newCartItems = [...cartItems];
      }

      return { cartItems: [...newCartItems] };
    case "remove":
      return {
        cartItems: state.cartItems.filter(item => item.title !== action.data)
      };
    default:
      return;
  }
};
