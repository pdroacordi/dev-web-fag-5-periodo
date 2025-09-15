import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { AppRoutes } from './routes';
import styles from './App.module.css';

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;
