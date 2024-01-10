const path = require('path')
const staticPath = path.join(__dirname, '../../public');
const magSchema = require('../model/msgmodel')
const visiterSchema = require('../model/visiterCount')

exports.home = async (req, resp) => {
    console.log(56456);
    resp.sendFile('index.html', { root: staticPath });
}

exports.count = async (req, resp) => {
    try {
        let visitor = await visiterSchema.findOne(); // Find the visitor entry, assuming there's only one
        if (!visitor) {
            visitor = new visiterSchema({ count: 0 }); // If no entry exists, create a new one
        }

        visitor.count += 1; // Increment the count
        await visitor.save(); // Save the updated count

        return resp.status(201).json({ success: true, count: visitor.count, message: 'Count incremented' });
    } catch (err) {
        return resp.status(500).json({ success: false, message: 'Error while counting visitors' });
    }
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

