// 1) import the connection from database.ts
import client from "../src/database";

// create a type for the return value of database methods
export type Weapon  = {
    id : number,
    name : string,
    type : string,
    weight : string
};

export class Mythical_weapons {
    // the promise type should be an array of Wepon because it will return multiple rows from the DB
    async index (): Promise<Weapon[]> {
        try {
            //create a connection to the database using client variabler which is an instanse of Pool from 'pg'
            const conn = await client.connect();
            const sql = "SELECT * FROM fantasy_worlds";
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
            
        } catch (error) {
            throw new Error (`the error is ${error}`);
        }
    }
}