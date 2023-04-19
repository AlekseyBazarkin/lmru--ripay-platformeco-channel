module.exports = (ctx) => {
  return {
    code: 500,
    status: 'Unexpected error',
    message: ctx.jdbcResult.error.originalException.details
  };
};
