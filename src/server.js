require('dotenv').config();  // Load environment variables  
const express = require('express');  
const mongoose = require('mongoose');  
const bodyParser = require('body-parser');  
const contactRoutes = require('./routes/contactRoutes');  
const swaggerJsDoc = require('swagger-jsdoc');  
const swaggerUi = require('swagger-ui-express');  
const swaggerOptions = require('./swagger');  

const app = express();  
const PORT = process.env.PORT || 5000; // Use PORT from .env or default to 5000  
const MONGODB_URI = process.env.MONGODB_URI; // Use MONGODB_URI from .env  

app.use(bodyParser.json());  
app.use('/api/contacts', contactRoutes);  
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(swaggerOptions)));  

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })  
    .then(() => {  
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));  
    })  
    .catch(err => console.error(err));