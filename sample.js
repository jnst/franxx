'use strict';

const ccxt = require('ccxt');

// console.log(ccxt.exchanges);

(async function() {
  const exchange = new ccxt.bitfinex({ verbose: true, apiKey: '', secret: '' });
  // console.log(exchange.id, await exchange.loadMarkets());
  // console.log(await exchange.privateGetUserMargin({ 'currency': 'all' }));
  // console.log(exchange);
  // console.log(await exchange.fetchBalance());
  // const balance = await exchange.fetchTotalBalance({ type: 'margin' });
  // console.log(balance);

  const d = await exchange.fetchBalance();
  // const trade = await exchange.fetchBalance({ type: 'exchange' });
  // const margin = await exchange.fetchBalance({ type: 'margin' });

  console.log(d);
  // console.log(trade);
  // console.log(margin);

})();
