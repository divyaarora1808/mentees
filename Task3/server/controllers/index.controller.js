// Add your routes here

module.exports.indexRoute = (req, res) => {
    res.send('Welcome to the backend');
};

module.exports.helloRoute = (req, res) => {
    res.json({ msg: `Hey there ${req.params.id}` });
};
