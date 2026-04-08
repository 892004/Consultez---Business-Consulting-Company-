const express = require("express")
const cors = require("cors")

const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const serviceRoutes = require("./routes/serviceRoutes");
const categoryRoutes =  require('./routes/categoryRoutes')

const app = express();
app.use(cors());
app.use(express.json())

// 👇 ADD THIS
app.use('/uploads', express.static('uploads'));

app.get('/' , (req , res)=>{
    res.send('✅ Api is Running...')
});

// AUTHENTICATION ROUTES
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

// SERVICE ROUTES
app.use('/api/service',serviceRoutes);

// CATEGORY ROUTES
app.use('/api/category',categoryRoutes)

module.exports = app;
