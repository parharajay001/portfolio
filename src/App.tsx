import Portfolio from './pages/Portfolio/Portfolio';
import { ThemeProvider } from './context/ThemeContext';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
  }, []);
  return (
    <ThemeProvider>
      <div className='bg-transparent text-foreground min-h-screen'>
        <Portfolio />
      </div>
    </ThemeProvider>
  );
}

export default App;
