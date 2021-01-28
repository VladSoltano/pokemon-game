import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header title="Эта игра о покемонах" />
      <Layout title="Первый лояут"
              desc="Что-то"
              />
      <Layout id="1" 
              title="Какой-то загаловок"
              descr="Какое-то описание"
              urlBg="../assets/bg1.jpg"
              colorBg="black"
              />
      <Layout />
      <Footer />
    </>
  );
}

export default App;
