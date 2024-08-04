import React, { useState } from 'react';
import logo from '../../public/logo.svg';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Reset errors
    setEmailError('');
    setPasswordError('');

    // Simple validation
    if (!email) {
      setEmailError('O e-mail é obrigatório');
    }
    if (!password) {
      setPasswordError('A senha é obrigatória');
    }
    
    // If no errors, redirect to /homepage
    if (email && password) {
      navigate('/homepage');
    }
  };

  return (
    <div className='w-screen h-screen relative'>
      <header className='top-0 left-0 w-full h-12 flex items-center border-b border-gray-300 z-10'>
        <img src={logo} alt="Logo" className='pl-7 h-8' />
      </header>

      {/* Conteúdo principal */}
      <main className='flex items-start justify-between w-full'>
        {/* Primeiro Box */}
        <div className='w-full lg:w-1/2 bg-blue-200 flex items-center justify-center h-screen p-0'>
          <form className='bg-white shadow-lg h-screen w-full lg:w-screen' onSubmit={handleSubmit}>
            <h1 className='text-3xl font-bold text-custom-purple text-left pl-16'>Login</h1>
            <h6 className='text-gray-500 text-left pl-16'>
              Entre na plataforma com os seus dados cadastrais.
            </h6>

            <div className='mb-5'>
              <span className='block text-sm text-gray-500 mb-1 text-left pl-20 mt-14'>E-mail</span>
              <input
                type='email'
                placeholder='Seu e-mail'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='h-12 border-b border-gray-200 p-4 w-3/4'
              />
              {emailError && <p className='text-red-500 text-sm pl-20'>{emailError}</p>}
            </div>

            <div className='mb-6'>
              <span className='block text-sm text-gray-500 mb-1 text-left pl-20'>Senha</span>
              <input
                type='password'
                placeholder='Sua senha'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='h-12 border-b border-gray-200 p-4 w-3/4'
              />
              {passwordError && <p className='text-red-500 text-sm pl-20'>{passwordError}</p>}
            </div>

            <button type='submit' className='w-1/2 h-12 mt-4 bg-custom-purple text-white font-semibold rounded-full'>
              Entrar
            </button>
            <div className='pt-16'>
              <p className='text-gray-500 text-center mt-4'>
                Ao fazer login, você concorda com a nossa <a href="#" className='text-custom-purple underline'>Política de Privacidade</a>
              </p>

              <p className='text-gray-500 text-center mt-4'>
                © 2024 Cashforce. Todos os direitos reservados.
              </p>
            </div>
          </form>
        </div>

        {/* Segundo Box */}
        <div className='hidden lg:block lg:w-1/2 h-screen relative items-center justify-center'>
          {/* Vídeo de fundo */}
          <video 
            autoPlay 
            loop 
            muted 
            className="absolute inset-0 w-full h-full object-cover"
            src="https://cashforce.com.br/wp-content/themes/cashforce/assets/videos/360x684.mp4"
          />
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
