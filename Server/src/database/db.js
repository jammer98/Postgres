import pkg from 'pg';

const { Pool } = pkg;

const pool = new Pool({
    connectionString: process.env.DB_URI,
})

export default pool;