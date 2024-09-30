const express = require('express');  
const mongoose = require('mongoose');  
const bodyParser = require('body-parser');  
const contactRoutes = require('./routes/contactRoutes');  
const swaggerJsDoc = require('swagger-jsdoc');  
const swaggerUi = require('swagger-ui-express');  
const swaggerOptions = require('./swagger');  

const app = express();  
const PORT = 5000;  
const MONGODB_URI = 'YOUR_MONGODB_CONNECTION_STRING'; // Replace with your connection string  

app.use(bodyParser.json());  
app.use('/api/contacts', contactRoutes);  
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(swaggerOptions)));  

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })  
    .then(() => {  
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));  
    })  
    .catch(err => console.error(err));