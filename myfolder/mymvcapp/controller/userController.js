
const User = require('../models/user');

exports.showSignupForm = (req, res) => {
    res.render('signup', { errorMessage: null });
};


exports.signupUser = async (req, res) => {
    const { name, email, password } = req.body;
    console.log(req.body)
    console.log('Signup route'); 
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.render('signup', { errorMessage: 'email already used' });
        }

        const newUser = new User({ name, email, password });
        await newUser.save();

        return res.redirect("/api/v1/employees");
    } catch (err) {
        console.error(err);
        res.render('signup', { errorMessage: 'Something went wrong' });
    }
};
