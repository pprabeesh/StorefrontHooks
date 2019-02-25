export const actions = {
  add: (product, count, update = false) => ({
    type: "add",
    data: product,
    count,
    update
  }),
  remove: title => ({ type: "remove", data: title })
};
