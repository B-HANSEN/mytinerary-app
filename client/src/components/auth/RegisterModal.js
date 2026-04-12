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
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import './auth.css';

function UploadPreview({ handleFileInput }) {
  const [file, setFile] = useState(null);

  const onChange = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
    handleFileInput(event.target.files[0]);
  };

  const resetFile = (event) => {
    event.preventDefault();
    setFile(null);
    handleFileInput(null);
  };

  return (
    <div>
      <input type='file' onChange={onChange} />
      {file && (
        <div style={{ textAlign: 'center' }}>
          <button onClick={resetFile}>Remove File</button>
        </div>
      )}
      <img style={{ width: '100%' }} src={file} alt='' />
    </div>
  );
}

function RegisterModal() {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fileInputElement, setFileInputElement] = useState(null);
  const [msg, setMsg] = useState(null);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const error = useSelector((state) => state.error);

  const toggle = () => {
    dispatch(clearErrors());
    setModal((m) => !m);
  };

  useEffect(() => {
    if (error.id === 'REGISTER_FAIL') setMsg(error.msg.msg);
    else setMsg(null);
  }, [error]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (modal && isAuthenticated) toggle();
  }, [isAuthenticated]);

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = new FormData();
    newUser.append('name', name);
    newUser.append('email', email);
    newUser.append('password', password);
    newUser.append('avatar', fileInputElement);
    dispatch(register(newUser));
  };

  return (
    <div>
      <NavLink onClick={toggle} className='bluehighlight'>
        Register here
      </NavLink>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Register</ModalHeader>
        <ModalBody>
          {msg ? <Alert color='danger'>{msg}</Alert> : null}
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for='name'>Name</Label>
              <Input
                type='text'
                name='name'
                id='name'
                placeholder='Name'
                className='mb-3'
                onChange={(e) => setName(e.target.value)}
              />

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

              <UploadPreview handleFileInput={setFileInputElement} />

              <Button color='dark' style={{ marginTop: '2rem' }} block>
                Register
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default RegisterModal;
