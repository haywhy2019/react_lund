const Contact = require('../models/Contact.model')

module.exports.getmessage = (req, res) => {
 Contact.find()
 .sort({ date: -1 })
 .then(contacts => res.json(contacts))
}

module.exports.Contactus = (req, res) => {
    const contact = req.body;

    if (contact.email){
  
      const newContact = new Contact(contact);
    
      newContact.save()
        .then(() => res.json({message: 'Contact Created!'}))
        .catch(err => res.status(400).json({error: err, message: "User cannot be created"}));
      
      
    } else {
      res.status(401).json({message: "invalid user params"});
    };

}


module.exports.deleteContact = (req, res) => {
     Contact.findById(req.params.id)
     .then(item => item.remove().then(()=> res.json({message: "contact deleted successful"})))
     .catch(err => res.status(404).json({message: "contact not found"}))
}