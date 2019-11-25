import 'reflect-metadata'
import {createKoaServer} from 'routing-controllers'
import NodeController from './node-tree/controller'
import setupDb from './db'
//import { getConnection } from 'typeorm'
//import * as fs from "fs"


const port = process.env.PORT || 4000

const app = createKoaServer({
  controllers: [
    NodeController
  ]
})

//const sql=fs.readFileSync('src/data.sql').toString();

setupDb()
  .then(_ =>
    app.listen(port, () => console.log(`Listening on port ${port}`))
  )
  .catch(err => console.error(err))

//getConnection() Missing function to execute the sql query from the data.sql file

  
                    
