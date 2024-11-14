import { Pool } from "pg";

const pool = new Pool({
    user : 'postgres',
    host : 'localhost',
    database : 'practicedb', 
    password : 'pg1337',
    port : '5432',
});

export default pool;