const express = require('express');
const router = express.Router();
import validateInput from './../../client/src/server/shared/validations/signup'


router.post('/', (req, res) => {
    const { errors, isValid } = validateInput(req.body);

    if (isValid) {
        res.json({ success: true });
    } else {
        res.status(400).json(errors);
    }
});

export default router