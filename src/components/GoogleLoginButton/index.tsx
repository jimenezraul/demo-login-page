import { GoogleLogin } from '@react-oauth/google';

interface GoogleLoginProps {
  setErrors: (message: string) => void;
}

const GoogleLoginButton = ({ setErrors }: GoogleLoginProps) => {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse: any) => {
        console.log(credentialResponse);
      }}
      onError={() => {
        setErrors('Login Failed');
      }}
      useOneTap
      size='large'
      text='signin_with'
    />
  );
};

export default GoogleLoginButton;
