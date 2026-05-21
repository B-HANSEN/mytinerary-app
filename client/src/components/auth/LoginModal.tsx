import { useState } from 'react';
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
import { useAppDispatch, useAppSelector } from '../../hooks';
import { login } from '../../slices/authSlice';
import { clearErrors } from '../../slices/errorSlice';
import './auth.css';

function LoginModal() {
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const error = useAppSelector((state) => state.error);

  const msg = error.id === 'LOGIN_FAIL' ? (error.msg.msg as string) : null;
  const isOpen = modal && !isAuthenticated;

  const toggle = () => {
    dispatch(clearErrors());
    setModal((m) => !m);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div>
      <NavLink onClick={toggle} className='bluehighlight'>
        Login with email
      </NavLink>

      <Modal isOpen={isOpen} toggle={toggle}>
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

              <Button color='dark' style={{ marginTop: '2rem' }} className='w-100'>
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
