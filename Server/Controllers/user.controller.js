import  pool  from '../src/database/db.js';

const getAllUsers = async (req,res) =>{
    try {
        const results = await pool.query("SELECT * FROM users");
        res.status(200).json(results.rows);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({error: 'Internal Server Error'});
    }
}

const createUser = async (req,res) =>{
    try {
        const { fullname , email , dob } = req.body;
        const response = await pool.query(
            'INSERT INTO users (fullname,email,dob) VALUES ($1, $2, $3) RETURNING *',[fullname,email,dob]
        );
        res.status(201).json(response.rows[0]);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({error: 'Internal Server Error'});
    }
}


export { getAllUsers, createUser };