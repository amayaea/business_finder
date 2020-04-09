const queries = {
  selectOne: (businessId) =>
    `SELECT * FROM business b
    INNER JOIN hours h on h.business_id = b.business_id
    INNER JOIN attributes a on a.business_id = b.business_id
    WHERE b.business_id = '${businessId}';`,
  selectByZip: (zipCode) =>
    `SELECT * FROM business WHERE postal_code = '${zipCode}' LIMIT 200`,
  selectAll: () => `SELECT * FROM see100`,
  selectByCity: (city) =>
    `SELECT * FROM business WHERE city LIKE '%${city}%' LIMIT 200`,
  searchByName: (search) =>
    `SELECT * FROM business WHERE name LIKE '%${search}%' LIMIT 200;`,
  getCheckins: (businessId) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const date = new Date();
    const day = date.getDay();
    return `SELECT * FROM checkin WHERE business_id = '${businessId}' AND weekday = '${days[day]}'`;
  },
};

module.exports = queries;
