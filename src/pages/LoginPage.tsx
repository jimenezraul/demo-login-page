import { FC } from 'react';
import { useState } from 'react';
import GoogleLoginButton from '../components/GoogleLoginButton';
import { Link } from 'react-router-dom';

const titleList: string[] = ['PROACTIVE', 'PROTECTION', 'AGAINST', 'SCAMS.'];
const inputList: string[] = ['Email', 'Password'];

const LoginPage: FC = () => {
  const [errors, setErrors] = useState<string>('');

  return (
    <div className='h-screen'>
      <div className='flex flex-wrap justify-center w-full h-full'>
        <div className='w-full md:w-1/2 bg-gradient-to-tr from-[#B44991] via-[#9F70AB] to-[#4C4895] flex py-5 px-5 lg:px-14'>
          <div className='w-full'>
            <div className='relative w-full flex flex-col p-5 px-10 space-y-2 py-24'>
              {titleList.map((title, index) => {
                return (
                  <h1
                    key={index}
                    className={`text-4xl text-white font-roboto lg:tracking-widest ${
                      index === 3 ? 'z-50 text-black' : ''
                    }`}
                  >
                    {title}
                  </h1>
                );
              })}
              <p className='text-white mt-2'>Stay secured.</p>
              <p className='text-white mt-2'>
                In 2022, aproximately $28,740,000 has been stolen by business
                imposters.
              </p>
              <div className='absolute bottom-0 top-0 left-0 right-0 bg-white opacity-20 z-0'></div>
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/2 flex justify-center'>
          <div className='w-full md:max-w-xl p-14'>
            <h1 className='text-4xl font-roboto'>Sign In</h1>
            <p className='text-gray-500 mt-2'>
              Welcome back! Please enter your details.
            </p>
            <form className='overflow-auto mt-5'>
              <div className='mb-4'>
                {inputList.map((input, index) => {
                  return (
                    <div key={index} className='mb-4'>
                      <label
                        htmlFor={input}
                        className='block text-gray-700 font-bold mb-2'
                      >
                        {input}
                      </label>
                      <input
                        type={input === 'Password' ? 'password' : 'text'}
                        id={input}
                        className='w-full border-2 border-gray-200 p-3 rounded-lg focus:outline-none focus:border-[#B44991]'
                        placeholder={`Type your ${input.toLowerCase()} here`}
                      />
                    </div>
                  );
                })}
                <div className='text-red-500 text-xs'>{errors}</div>
                <div className='flex justify-end items-center'>
                  <Link to='#' className='font-bold text-[#D657A9]'>
                    Forgot Password?
                  </Link>
                </div>
                <button
                  className='mt-5 w-full text-center bg-[#412FA9] hover:bg-[#392994] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline'
                  type='button'
                >
                  Sign In
                </button>
                <div className='relative flex py-5 items-center'>
                  <div className='flex-grow border-t border-gray-400'></div>
                  <span className='flex-shrink mx-4 text-gray-400'>or</span>
                  <div className='flex-grow border-t border-gray-400'></div>
                </div>
                <div className='flex justify-center items-center w-full'>
                  <GoogleLoginButton setErrors={setErrors} />
                </div>

                <div className='flex justify-center items-center w-full mt-5'>
                  <p className='text-gray-500'>
                    Are you a new user?{' '}
                    <Link to='#' className='font-bold text-[#D657A9]'>
                      Create an account
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
