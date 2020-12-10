module.exports = function (pool){


    async function insertPlayer(name) {
        name = name.charAt(0).toUpperCase() + name.slice(1);
        const insertName = await pool.query('INSERT INTO player (name) VALUES($1)', [name])
        return insertName.rows;
    }

    async function getPlayer() {
        const player = await pool.query('select name from player')
        return player.rows;
    }

    // async function getLevelName (levelName) {
    //     const level = await pool.query('select level_name from language_exercise where level_name=$1', [levelName])
    //     return level.rowCount
    // }

    // async function listenCount() {
    //     const count = await pool.query('select id from language_exercise')
    //     return count.rowCount
    // }

    async function exercise(language) {

        var lang = await pool.query('select * from language_exercise where model_tag = $1',[language])
        console.log(lang.rows);
        
        return lang.rows

    
    }


    return {
        insertPlayer,
        getPlayer,
        getLevelName,
        exercise
    }


}