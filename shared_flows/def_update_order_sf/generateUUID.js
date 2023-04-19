module.exports = (ctx) => {
  let uuid = uuidv4();
  ctx.order.requestUuid = uuid;
  return uuid; //uuidv4();
};
