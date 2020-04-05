const queries = {
  selectOne: (businessId) =>
    `SELECT * FROM business WHERE business_id = '${businessId}'`,
  selectByZip: (zipCode) =>
    `SELECT * FROM business WHERE postal_code = '${zipCode}'`,
};

module.exports = queries;
