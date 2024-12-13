/**
 * Write a function which returns a formatter function to format address based on input address data
 * Format should be the following: 'street, house, apartment, city, postal-code, country'
 * @returns {function}
 */
module.exports.formatAddressWithOrder = function formatAddressWithOrder(order) {
  return function (obj) {
    const fields = {street: obj.street || '', house: obj.house || '', apartment: obj.apartment || '', city: obj.city || '', postalCode: obj.postalCode || '', country: obj.country || ''};
    const orderedAddress = order.map(field => fields[field] !== undefined ? fields[field] : '');

    return orderedAddress.join(', ');
  };
};

