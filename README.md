## Technologies used
- Type-ORM

## Setup
- git clone
- npm install
- docker run -p 5432:5432 --name postgres -e POSTGRES_PASSWORD=secret -d postgres
- nodemon

## Issues
- The tables are created but i couldn't write a function to execute the SQL queries from the data.sql, also I need to modify the GET endpoint to count the number of children
