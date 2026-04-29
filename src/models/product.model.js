const db = require("../config/db");

const getProducts = async (search, sort) => {
  let query = "SELECT * FROM products WHERE is_public = true";

  if (search) {
    query += ` AND name ILIKE '%${search}%'`;
  }

  if (sort === "price_asc") {
    query += " ORDER BY price ASC";
  } else if (sort === "price_desc") {
    query += " ORDER BY price DESC";
  }

  const result = await db.query(query);
  return result.rows;
};

module.exports = { getProducts };