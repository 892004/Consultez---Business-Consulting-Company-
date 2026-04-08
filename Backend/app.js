const express = require("express")
const cors = require("cors")
const db = require("./config/db")
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const serviceRoutes = require("./routes/serviceRoutes");

const app = express();
app.use(cors());
app.use(express.json())

// 👇 ADD THIS
app.use('/uploads', express.static('uploads'));

app.get('/' , (req , res)=>{
    res.send('✅ Api is Running...')
})

app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/service',serviceRoutes);

module.exports = app;
