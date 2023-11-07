import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import cookie from 'cookiejs';

interface LoginData {
email: string;
password: string;
}

const UserLogin = (initialLoginData: LoginData) => {
const router = useRouter();
const [user, setUser] = useState({ token: '' });
const [loginMessage, setLoginMessage] = useState('');

const handleSignin = async () => {
  try {
    const response = await axios.post('/api/login-users', {
      email: initialLoginData.email,
      password: initialLoginData.password,
    });
    
    if (response.data.token) {
      cookie.set('loginToken', response.data.token);
      setUser(response.data);
      setLoginMessage('Login successful');

      setTimeout(() => {
        setLoginMessage('');
        router.push('/home');
      }, 2000);

    } else {
      setLoginMessage('Invalid credentials');

      setTimeout(() => {
        setLoginMessage('');
      }, 2000);
    }
    
  } catch (error) {
    setLoginMessage('Invalid credentials');
    setTimeout(() => {
    setLoginMessage('');
  }, 2000);
}
};

return { user,loginMessage, handleSignin };
};

export default UserLogin;