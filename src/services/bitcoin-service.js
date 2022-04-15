export const bitcoinService = {
  getRate,
  getMarketPrice,
  getConfirmedTransactions,
}

async function getRate(coins) {
  return coins * Math.random()
}

async function getMarketPrice() {}

async function getConfirmedTransactions() {}
