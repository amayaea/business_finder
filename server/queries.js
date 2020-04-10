const queries = {
  selectOne: (businessId) => `CALL getBusiness('${businessId}');`,
  selectByZip: (zipCode) =>
    `SELECT * FROM business WHERE postal_code = '${zipCode}' LIMIT 200`,
  selectAll: () => `SELECT * FROM see100`,
  selectBestRated: () => `SELECT * FROM bestRated`,
  selectByCity: (city) =>
    `SELECT * FROM business WHERE city LIKE '%${city}%' LIMIT 200`,
  searchByName: (search) => `CALL queryByName('${search}');`,
  getCheckins: (businessId) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const date = new Date();
    const day = date.getDay();
    return `SELECT * FROM checkin WHERE business_id = '${businessId}' AND weekday = '${days[day]}'`;
  },
};

module.exports = queries;
