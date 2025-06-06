import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ThreeDBackground from './ThreeDBackground';
import Footer from './Footer';
import Navbar from './Navbar';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      // TODO: Implement actual authentication logic
      console.log('Signing in with:', { email, password });
      // After successful sign in, redirect to dashboard or home
      navigate('/dashboard');
    } catch (err) {
      setError('Failed to sign in. Please check your credentials.');
    }
  };

  return (
    <div className="relative min-h-screen">
      <ThreeDBackground />
      <Navbar />
      <div className="font-helvetica relative z-10 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-background/80 backdrop-blur-xl p-8 rounded-xl border border-border/50 shadow-lg">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-foreground">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-border/50 placeholder-foreground/50 text-foreground rounded-t-md focus:outline-none focus:ring-neon-blue focus:border-neon-blue focus:z-10 sm:text-sm bg-background/50"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-border/50 placeholder-foreground/50 text-foreground rounded-b-md focus:outline-none focus:ring-neon-blue focus:border-neon-blue focus:z-10 sm:text-sm bg-background/50"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-neon-blue hover:bg-neon-blue/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neon-blue"
              >
                Sign in
              </button>
            </div>

            <div className="mt-4 text-center text-sm space-y-2">
              <p className="text-foreground/70">Are you a member or admin?</p>
              <div className="flex justify-center space-x-4">
                <button
                  type="button"
                  onClick={() => navigate('/member/login')}
                  className="text-neon-purple hover:text-neon-purple/80 underline"
                >
                  Member Login
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/admin/login')}
                  className="text-neon-green hover:text-neon-green/80 underline"
                >
                  Admin Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn; 