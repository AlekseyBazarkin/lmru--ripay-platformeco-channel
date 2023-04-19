module.exports = (ctx) => {
  return {
    code: 200,
    status: ctx.jdbcResult.outputs[0],
    message: ctx.jdbcResult.outputs[1]
  };
};
