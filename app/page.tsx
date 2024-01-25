import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@/components/AppBar';
import AboveTheFold from '@/components/AboveTheFold';
import Divider from '@/components/ui/Divider';
import About from '@/components/About';
import Resume from '@/components/Resume';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <main className='flex flex-col flex-1 overflow-auto'>
        <AppBar />
        <AboveTheFold />
        <Divider />
        <About />
        <Divider />
        <Resume />
      </main>
    </div>
  );
}
