import {Car} from 'lucide-react';
import GoogleAuth from '../components/logInPage/GoogleAuth';
import LogInForm from '../components/logInPage/LogInForm';

const Login = () => {

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">

        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center">
            <div className="bg-primary-600 p-3 rounded-full">
              <Car className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Welcome Back</h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to your AutoTradeLK account
          </p>
        </div>

        {/* Form */}
        <LogInForm />

        {/* Social Login */}

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-0 gap-3">
            <div className="flex justify-center">
              <GoogleAuth />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
