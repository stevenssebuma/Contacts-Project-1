const swaggerOptions = {  
    swaggerDefinition: {  
        openapi: '3.0.0',  
        info: {  
            title: 'Contacts API',  
            version: '1.0.0',  
            description: 'API for storing and retrieving contacts',  
        },  
        servers: [{ url: 'http://localhost:5000' }],  
    },  
    apis: ['./src/routes/*.js'],  
};  

module.exports = swaggerOptions;