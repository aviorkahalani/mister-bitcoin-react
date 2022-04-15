import axios from 'axios'
import { utilService } from './util-service'

export const bitcoinService = {
  getRate,
  getMarketPrice,
  getConfirmedTransactions,
}

async function getRate(coins) {
  const url = `https://blockchain.info/tobtc?currency=USD&value=${coins}`
  const { data } = await axios.get(url)
  return data
}

getMarketPrice()
async function getMarketPrice() {
  let marketPlaceValues = utilService.loadFromStorage('marketPlaceValues')
  if (!marketPlaceValues) {
    const url = `https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`
    const { data } = await axios.get(url)
    utilService.saveToStorage('marketPlaceValues', data)
  }
  return marketPlaceValues
}
getConfirmedTransactions()
async function getConfirmedTransactions() {
  let confirmedTransactions = utilService.loadFromStorage('confirmedTransactions')
  if (!confirmedTransactions) {
    const url = `https://api.blockchain.info/charts/transactions-per-second?timespan=5weeks&format=json&cors=true`
    const { data } = await axios.get(url)
    utilService.saveToStorage('confirmedTransactions', data)
  }
  return confirmedTransactions
}
