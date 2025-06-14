import Portfolio from './pages/Portfolio/Portfolio';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className='bg-background text-foreground min-h-screen'>
        <Portfolio />
      </div>
    </ThemeProvider>
  );
}

export default App;
