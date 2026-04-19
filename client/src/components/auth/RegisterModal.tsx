import { useState, useEffect } from 'react';
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
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import './auth.css';

interface UploadPreviewProps {
  handleFileInput: (file: File | null) => void;
}

function UploadPreview({ handleFileInput }: UploadPreviewProps) {
  const [file, setFile] = useState<string | null>(null);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const f = event.target.files?.[0];
    if (!f) return;
    setFile(URL.createObjectURL(f));
    handleFileInput(f);
  };

  const resetFile = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setFile(null);
    handleFileInput(null);
  };

  return (
    <div>
      <label htmlFor='avatar-upload'>Profile photo</label>
      <input id='avatar-upload' type='file' onChange={onChange} />
      {file && (
        <div style={{ textAlign: 'center' }}>
          <button onClick={resetFile}>Remove File</button>
        </div>
      )}
      <img style={{ width: '100%' }} src={file ?? ''} alt='Avatar preview' />
    </div>
  );
}

function RegisterModal() {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fileInputElement, setFileInputElement] = useState<File | null>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const error = useAppSelector((state) => state.error);

  const toggle = () => {
    dispatch(clearErrors());
    setModal((m) => !m);
  };

  useEffect(() => {
    if (error.id === 'REGISTER_FAIL') setMsg(error.msg.msg as string);
    else setMsg(null);
  }, [error]);

  useEffect(() => {
    if (modal && isAuthenticated) {
      dispatch(clearErrors());
      setModal(false);
    }
  }, [modal, isAuthenticated, dispatch]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser = new FormData();
    newUser.append('name', name);
    newUser.append('email', email);
    newUser.append('password', password);
    if (fileInputElement) newUser.append('avatar', fileInputElement);
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

              <Button color='dark' style={{ marginTop: '2rem' }} className='w-100'>
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
