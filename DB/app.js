// call express module
const express = require('express')
// call express library
const app = express()
// call database
const pool = require('./db')
const port = 3000
// 
const func = require('./func')
const { name } = require('ejs')
// EJS
app.set('view engine', 'ejs')

// call server
app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})

app.get('/contact', async (req, res) => {
    try{
        const result =await func.loadContact();
        console.log(result)
        res.render('contact', {
            contacts: result.rows,
        })
    } catch(err) {
        console.error(err.message)
    }
})

app.get('/contact/delete/:name', async (req, res) => {
    try{
        const {name} = req.params
        const result =await func.deleteContact(name);

        console.log(result)
        
        res.redirect('/contact')
    } catch(err) {
        console.error(err.message)
    }
})

// app.get('/addasync', async (req,res) => {
//     try{
//         const name      = "fizi"
//         const mobile    = "085734232521"
//         const email     = "fizi@gmail.com"
//         const newcont   = await pool.query(`
//             INSERT INTO tb_contacts (name, mobile, email) 
//             VALUES ('${name}', '${mobile}', '${email}') 
//             RETURNING *;`);
//         res.json(newcont)
//     } catch (err) {
//         console.error(err.message)
//     }
// })