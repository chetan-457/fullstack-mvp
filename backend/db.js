// backend/db.js
const { Pool } = require('pg');

// Use connection string from environment variable
const connectionString = process.env.DATABASE_URL || 'postgres://user:pass@localhost:5432/mydb';
const isProduction = process.env.NODE_ENV === 'production';

const pool = new Pool({
  connectionString,
  ssl: isProduction ? { rejectUnauthorized: false } : false
});

// Log the database URL (caution: remove this in production if it contains sensitive info)
console.log(`Connecting to DB: ${connectionString}`);

// Test the connection
pool.connect()
  .then(client => {
    console.log('✅ Successfully connected to the database.');
    client.release(); // release the client back to the pool
  })
  .catch(err => {
    console.error('❌ Failed to connect to the database:', err);
  });

// Optional: Log all queries (for debugging)
// Comment this out in production for performance and security
/*
pool.on('connect', () => {
  console.log('Pool connected');
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client:', err);
});

pool.on('acquire', () => {
  console.log('Client checked out from pool');
});

pool.on('remove', () => {
  console.log('Client removed');
});
*/

module.exports = pool;
