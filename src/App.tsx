import './index.css'
import {
  Header,
  Hero,
  QuickAccess,
  News,
  SearchModule,
  Activity,
  Footer,
  ScrollToTop,
} from './components'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <QuickAccess />
        <News />
        <SearchModule />
        <Activity />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
