const Contact = require('../models/contact');  

// Create a contact  
exports.createContact = async (req, res) => {  
    try {  
        const contact = new Contact(req.body);  
        await contact.save();  
        res.status(201).send(contact);  
    } catch (error) {  
        res.status(400).send(error);  
    }  
};  

// Get all contacts  
exports.getAllContacts = async (req, res) => {  
    try {  
        const contacts = await Contact.find();  
        res.send(contacts);  
    } catch (error) {  
        res.status(500).send(error);  
    }  
};  

// Update a contact  
exports.updateContact = async (req, res) => {  
    try {  
        const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });  
        if (!contact) return res.status(404).send();  
        res.send(contact);  
    } catch (error) {  
        res.status(400).send(error);  
    }  
};  

// Delete a contact  
exports.deleteContact = async (req, res) => {  
    try {  
        const contact = await Contact.findByIdAndDelete(req.params.id);  
        if (!contact) return res.status(404).send();  
        res.send(contact);  
    } catch (error) {  
        res.status(500).send(error);  
    }  
};