module.exports = (ctx) => {
  return {
    status_code: 200,
    body: ctx.order
  };
};
