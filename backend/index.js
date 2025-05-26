require('dotenv').config();
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/users');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/usuarios', userRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
