export function findHighestBid(bids) {
  const highestBid = bids.reduce((highestValue, currentValue) => {
    if (currentValue.amount > highestValue) {
      highestValue = currentValue.amount;
    }
    return highestValue;
  }, 0);
  return highestBid;
}
