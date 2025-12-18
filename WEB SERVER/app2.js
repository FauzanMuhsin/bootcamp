// ==============================
// NOTE: Core / built-in Node.js module
// ==============================
const fs = require('fs')

// ==============================
// NOTE: Third-party libraries (npm)
// ==============================
const express        = require('express')
const expressLayout  = require('express-ejs-layouts')
const morgan         = require('morgan')
const { body, validationResult, check } = require('express-validator')

// ==============================
// NOTE: Local module (file buatan sendiri)
// ==============================
const contactApp = require('./contact-app2')

// ==============================
// NOTE: Inisialisasi aplikasi Express
// ==============================
const app  = express()
const port = 3000

// ==============================
// NOTE: View engine configuration
// ==============================
app.set('view engine', 'ejs')
app.use(expressLayout)

// ==============================
// NOTE: Body parser middleware
// - urlencoded  → untuk FORM HTML
// - json        → untuk request JSON / API
// ==============================
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// ==============================
// NOTE: Third-party middleware
// Logging aktivitas request
// ==============================
app.use(morgan('dev'))

// ==============================
// NOTE: Static file middleware
// Membuka akses ke folder public (CSS, JS, IMG)
// ==============================
app.use(express.static('public'))

// ==============================
// NOTE: Server listener
// ==============================
app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})



// letaknya diatas
app.use((req, res, next) => {
  console.log('Time:', Date.now())
  //parameter next untuk menjalankan program selanjutnya   
  next()
})

app.get('/', (req, res) => { 
    const contacts = contactApp.loadContact();

     res.render('index',{
        layout: 'layout/main-layout',
        title:'about page',
        contacts,
    })
})

// ABOUT
app.get('/about', (req, res) => {
    res.render('about',{
        layout: 'layout/main-layout',
        title:'about page',
    })
})

// DELETE
app.get('/contact/delete/:name', (req, res) => {
    const contact = contactApp.findContact(req.params.name)

    if (!contact) {
        res.status('404')
        res.send('404')
    } else {
        contactApp.deleteContact(req.params.name)
        res.redirect('/contact')
    }
})

// ADD
app.get('/form-add', (req, res) => {

    res.render('form-add',{
        layout: 'layout/main-layout',
        title : 'hasil page',
    })
})

app.post('/form-add',[
    body('name').custom((value) => {
        const dupData = contactApp.checkDuplicate(value)
        if (dupData) {
            throw new Error ('contact name exists')
        }
        return true
    }),
    check('email', 'E-mail not valid').isEmail(),
    check('mobile', 'Mobile not valid').isMobilePhone('id-ID')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.render('form-add',
            {
                layout: 'layout/main-layout',
                title : 'form-add page',
                errors: errors.array()
            })
    } else {
       

        contactApp.addContact(req.body);    

        res.redirect('/form-add')
    }
    
})

// FORM EDIT
app.get('/contact/form-edit/:name', (req, res) => {
    const contact = contactApp.findContact(req.params.name)

    res.render('form-edit',{
        layout: 'layout/main-layout',
        title : 'hasil page',
        contact,
    })
})

app.post('/contact/form-edit',[
    body('name').custom((value,{req}) => {
        const dupData = contactApp.checkDuplicate(value)
        if (value !== req.body.prevName && dupData) {
            throw new Error ('contact name exists')
        }
        return true
    }),
    check('email', 'E-mail not valid').isEmail(),
    check('mobile', 'Mobile not valid').isMobilePhone('id-ID')
], (req, res) => {
    console.log(req.body)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.render('form-edit',
            {
                layout: 'layout/main-layout',
                title : 'form-add page',
                errors: errors.array(),
                contact : req.body,
            })
    } else {
        contactApp.editContact(req.body);    
        res.redirect('/contact')
    }
})

// CONTACT
app.get('/contact', (req, res) => {
    const contacts      = contactApp.loadContact();
    
    res.render('contact',{
        layout: 'layout/main-layout',
        title:'contact page',
        contacts,
    })
})

app.get('/contact/:name', (req, res) => {
    const contact = contactApp.findContact(req.params.name)

    res.render('detail',{
        layout: 'layout/main-layout',
        title:'detail page',
        contact,
    })
})

app.get('/product/:id', (req, res) => {
    res.send(`product id: ${req.params.id} <br> category id: ${req.query.category}`)
});

app.use('/', (req, res) => {
    res.status(404);
    res.send('404: page not found')
})