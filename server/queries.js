const queries = {
  selectOne: (businessId) =>
    `SELECT * FROM business b
    INNER JOIN hours h on h.business_id = b.business_id
    WHERE b.business_id = '${businessId}';`,
  selectByZip: (zipCode) =>
    `SELECT * FROM business WHERE postal_code = '${zipCode}'`,
  selectAll: () =>
    `SELECT business_id, name, address, city, state, postal_code, stars FROM business LIMIT 100`,
  selectByCity: (city) => `SELECT * FROM business WHERE city = '${city}'`,
  selectByState: (state) => `SELECT * FROM business WHERE city = '${state}'`,
  searchByName: (search) =>
    `SELECT * FROM business WHERE name LIKE '%${search}%';`,
};

module.exports = queries;
