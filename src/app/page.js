import { Header } from './components/header';
import { Main } from './components/main';
import { Footer } from './components/footer';
export default function Home() {
  return (
    <div className='flex flex-col items-center mx-auto h-screen'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
