// import Image from 'next/image';
// import { ThemeSwitcher } from '@/components/theme-switcher';
import { Providers } from './providers';
import CustomNavbar from '@/components/navbar';

export default function Home() {
  return (
    <Providers>
      <CustomNavbar />
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
          <h1 className="text-4xl font-bold text-center mb-8 text-yellow-500 dark:text-yellow-300 animate-pulse">
            Welcome to STUMBLE
          </h1>
          <p className="text-center mb-8 text-gray-700 dark:text-gray-300 animate-fade-in-down">
            Connect with fellow students who share your passion for research!
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="#"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
            >
              Register
            </a>
            <a
              href="#"
              className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
            >
              Learn More
            </a>
          </div>
          <div className="text-center mb-8 animate-fade-in-up">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">How It Works</h2>
            <ol className="list-decimal list-inside text-left text-gray-700 dark:text-gray-300">
              <li className="mb-2">Go to our website: https://stumbleashoka.tech/</li>
              <li className="mb-2">Register & Create a profile</li>
              <li className="mb-2">Start swiping away</li>
              <li className="mb-2">Reach out to your matches</li>
            </ol>
          </div>
        </div>
      </main>
    </Providers>
  );
}
