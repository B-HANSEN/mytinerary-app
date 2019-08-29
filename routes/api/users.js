const express = require('express');
const router = express.Router();

var Validator = require('validator');
import isEmpty from 'lodash/isEmpty';


function validateInput(data) {
    let errors = {};

    if(Validator.isNull(data.username)) {
        errors.username = 'This field is required';
    }
    if(Validator.isNull(data.email)) {
        errors.email = 'This field is required';
    }
    if(!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }
    if(Validator.isNull(data.password)) {
        errors.password = 'This field is required';
    }
    if(Validator.isNull(data.passwordConfirmation)) {
        errors.passwordConfirmation = 'This field is required';
    }
    if(!Validator.equals(data.password, data.passwordConfirmation)) {
        errors.passwordConfirmation = 'Passwords must match';
    }


    return {
        errors,
        isValid: isEmpty(errors)
    }
}

router.post('/', (req, res) => {
    const { errors, isValid } = validateInput(req.body);

    if (!isValid) {
        res.status(400).json(errors);
    }
});

export default router