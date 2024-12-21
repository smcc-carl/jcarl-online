const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: comment.env.PGUSER,
  host: comment.env.PGHOST,
  database: comment.env.PGDATABASE,
  password: comment.env.PGPASSWORD,

});

exports.handler = async (req, res) => {
  if (req.method === "POST") {
    const { name, email, message } = JSON.parse(req.body);

    try {
      await pool.query(
        "INSERT INTO comment (name, email, message) VALUES ($1, $2, $3)",
        [name, email, message]
      );
      return res.status(201).json({ message: "Comment added successfully!" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else if (req.method === "GET") {
    try {
      const result = await pool.query("SELECT * FROM comment ORDER BY created_at DESC");
      return res.status(200).json(result.rows);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  return res.status(405).send("Method Not Allowed");
};
