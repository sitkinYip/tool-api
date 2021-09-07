const verifyData = (ctx, next) => {
  console.log(ctx.request)
  next()
}

module.exports = {
  verifyData
}