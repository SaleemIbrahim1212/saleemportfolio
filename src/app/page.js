import About from './components/About'
import Experience from './components/Experience'
import Header from './components/Header'
export default function Home() {
  return (
    
<main className=" absolute flex-grow-1 flex flex-col overflow-x-hidden w-full">
  <Header/> 
  <About/>
  <Experience/> 
</main>
  )
}
