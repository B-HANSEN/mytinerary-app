import React, { useState, useEffect } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert,
} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import './auth.css';

function LoginModal() {
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState(null);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const error = useSelector((state) => state.error);

  const toggle = () => {
    dispatch(clearErrors());
    setModal((m) => !m);
  };

  useEffect(() => {
    if (error.id === 'LOGIN_FAIL') setMsg(error.msg.msg);
    else setMsg(null);
  }, [error]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (modal && isAuthenticated) toggle();
  }, [isAuthenticated]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div>
      <NavLink onClick={toggle} className='bluehighlight'>
        Login with email
      </NavLink>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Login with email and password</ModalHeader>

        <ModalBody>
          {msg ? <Alert color='danger'>{msg}</Alert> : null}

          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for='email'>Email</Label>
              <Input
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                className='mb-3'
                onChange={(e) => setEmail(e.target.value)}
              />

              <Label for='password'>Password</Label>
              <Input
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                className='mb-3'
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button to={'/'} color='dark' style={{ marginTop: '2rem' }} block>
                Login
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default LoginModal;
