const queries = {
  selectOne: (businessId) =>
    `SELECT * FROM business b
    INNER JOIN attributes a ON a.business_id = b.business_id
    INNER JOIN checkin c ON c.business_id = b.business_id
    INNER JOIN hours h on h.business_id = b.business_id
    WHERE b.business_id = '${businessId}';`,
  selectByZip: (zipCode) =>
    `SELECT * FROM business WHERE postal_code = '${zipCode}'`,
  selectAll: () => `SELECT * FROM business`,
  selectByCity: (city) => `SELECT * FROM business WHERE city = '${city}'`,
  selectByState: (state) => `SELECT * FROM business WHERE city = '${state}'`,
  searchByName: (search) =>
    `SELECT * FROM business WHERE name LIKE '%${search}%';`,
};

module.exports = queries;
