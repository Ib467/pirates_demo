const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

require('./config/mongoose.config');

const pirateRoutes = require('./routes/pirate.routes');
pirateRoutes(app);

app.listen(8000, () => console.log('listening now!'));