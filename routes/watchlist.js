const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");

//add coin
router.post("/add", authorization, async (req, res) => {
    try{
        const { coin_name } = req.body;
        const newCoin = await pool.query(
            "INSERT INTO coins (user_id, coin_name) VALUES ($1, $2)", 
            [req.user, coin_name]
        );
        res.json("added coin")
    } catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})


//get all coins 
router.get("/getall", authorization, async (req, res) => {
    try{
        const getAll = await pool.query(
            "SELECT coin_name FROM coins WHERE user_id=$1",
            [req.user]
        )
        unique_coin_name = Array.from(new Set(getAll.rows.map(item => item.coin_name)))
        res.json(unique_coin_name);
        
    } catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})


//delete 1 coin 
router.delete("/delete", authorization, async (req, res) => {
    try{
        const { coin_name } = req.body;
        const deleteItem = await pool.query(
            "DELETE FROM coins WHERE (user_id = $1 AND coin_name = $2)",
            [req.user, coin_name]
        );
        res.json("deleted coin");

    } catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})




module.exports = router;
