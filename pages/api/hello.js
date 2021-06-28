// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { Client } = require('pg');

const connectionString = 'postgresql://postgres:7303@localhost:5432/test';

const client = new Client({
  connectionString,
});
client.connect();
const getAllEmployees = async (req, res) => {
  try {
    const data = await client.query('select * from employees limit $1', [
      req.query.limit,
    ]);
    res.json(data.rows);
  } catch (error) {
    console.log(error.message);
  }
};
export default getAllEmployees;
