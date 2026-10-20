import Head from 'next/head'
import './globals.css'


export const metadata = {
  title: 'Saleem Ibrahim | Machine Learning Research',
  description: 'Research Intern at WatchOut / Adonite and M.Sc. student at Université de Montréal. Exploring multi-turn reasoning, reinforcement learning, and multimodal machine learning.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <Head>
      <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>


      <body >{children}</body>
    </html>
  )
}
