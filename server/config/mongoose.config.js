const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pirates_project', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});