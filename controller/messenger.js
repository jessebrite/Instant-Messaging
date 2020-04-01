const mongoose = require('mongoose');
// const IM = mongoose.model('Messenger');

const findAll = async (req, res) => {
  try {
    const messenger = await IM.find();
    if (messenger !== null) {
      console.log('All found');
      // return res.status(200).json(messenger);
      return res.render('index', { title: 'Instant Message', messenger});
    } else {
      return res.status(404).json({message: 'Nothing found'});
    }
  } catch (error) {
    console.log('Error retrieving all', error);
    return res.status(404).send(error);
  }
}

const sendMessage  = async(req, res) => {
  const {message, name} = req.body;
  const queryText = {message, name};
  if (!name || !message) {
    console.log('Requreid fields')
    return res.status(400).json({ message: 'All fields are required' });
  }
  try {
    say = await IM.create(queryText);
    if (say !== null) {
      console.log(' message send');
      return res.status(201).redirect('/');
    }
    return res.status(400).send({ message: 'Could not send message' });
  }
  catch (error) {
    console.log('Message yawa');
    return res.status(201).send(error);
  }
}

const killOne = async (req, res) => {
  const id = req.params.message_id;
  try {
    const killed = await IM.findByIdAndDelete(id);
    if (killed !== null) {
      return res.status(200).json({ message: killed });
    } else {
      return res.status(404).json({ message: 'User not found'} );
    }
  } catch (error) {
    return res.status(404).send(error);
  }
}

module.exports = {
  findAll,
  sendMessage,
  killOne
}
