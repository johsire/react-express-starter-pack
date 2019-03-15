
const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'Bart', lastName: 'Simpson'},
        {id: 2, firstName: 'Steve', lastName: 'Smith'},
        {id: 3, firstName: 'Stewie', lastName: 'Griffin'}
    ];

    res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server listening on port ${port}`));
