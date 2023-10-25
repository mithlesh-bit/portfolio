const path = require('path')
const staticPath = path.join(__dirname, '../../public');
const magSchema = require('../model/msgmodel')

exports.home = async (req, resp) => {
    resp.sendFile('index.html', { root: staticPath });
};


exports.homepost = async (req, resp) => {
    try {
        const { email, name, subject, message } = req.body
        const userdata = new magSchema({
            name, email, subject, message
        })
        await userdata.save();
        resp.sendFile('index.html', { root: staticPath });
    } catch (error) {
        return resp.status(500).json({ success: false, message: 'server error' });
    }
};

