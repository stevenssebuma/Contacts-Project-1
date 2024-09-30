const express = require('express');  
const {  
    createContact,  
    getAllContacts,  
    updateContact,  
    deleteContact,  
} = require('../controllers/contactController');  
const router = express.Router();  

/**  
 * @swagger  
 * /api/contacts:  
 *   post:  
 *     description: Create a contact  
 *     responses:  
 *       201:  
 *         description: Contact created  
 */  
router.post('/', createContact);  

/**  
 * @swagger  
 
router.get('/', getAllContacts);  

/**  
 * @swagger  
 * /api/contacts/{id}:  
 *   put:  
 *     description: Update a contact  
 *     parameters:  
 *       - name: id  
 *         description: Contact ID  
 *         required: true  
 *         type: string  
 *     responses:  
 *       200:  
 *         description: Updated contact  
 */  
router.put('/:id', updateContact);  

/**  
 * @swagger  
 * /api/contacts/{id}:  
 *   delete:  
 *     description: Delete a contact  
 *     parameters:  
 *       - name: id  
 *         description: Contact ID  
 *         required: true  
 *         type: string  
 *     responses:  
 *       200:  
 *         description: Deleted contact   
 */  
router.delete('/:id', deleteContact);  

module.exports = router;