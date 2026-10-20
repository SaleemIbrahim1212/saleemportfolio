import Image from 'next/image';

const skills = {
  'Machine learning & deep learning': 'PyTorch, TensorFlow, Scikit-learn, NumPy, Pandas, Matplotlib, Jupyter',
  'Programming': 'Python, Java, C/C++, JavaScript; familiar with Rust, Prolog, and Kotlin',
  'Data & infrastructure': 'SQL, MongoDB, Docker, Git, Linux/Unix, AWS, Google Cloud',
  'Observability': 'Kibana, Elasticsearch, Honeycomb',
  'Web & backend': 'React, Next.js, Django, Firebase',
};
export default function About() {
  return <section id="About_Section" className="relative mx-auto w-full max-w-6xl px-6 py-16">
    <p className="eyebrow section-label">02 / Background</p>
    <h2 className="section-title text-3xl font-bold text-blue-400">About Me</h2>
    <div className="mt-10 grid gap-12 md:grid-cols-2">
      <div className="space-y-5 text-lg leading-relaxed text-gray-300">
        <p>I’m Saleem, a machine learning researcher and developer with a background in computer science and psychology. I’m pursuing an M.Sc. in Computer Science, specializing in machine learning, at Université de Montréal.</p>
        <p>At WatchOut / Adonite, I investigate how diagnostic systems can gather useful information through conversation. My current work brings together Bayesian experimental design, reinforcement learning, and evaluation of multi-turn reasoning.</p>
        <p>My projects span multimodal soccer video captioning, NHL expected-goals analytics, and retinal image classification. Previously, I worked as a Product Analyst at D2L, using SQL, logs, and traces to investigate production issues and inform product improvements.</p>
        <p>At Mila, I serve as a Lab Representative and participate in Neuro-AI and Reinforcement Learning reading groups. Away from research, I enjoy running, reading, and following Chelsea.</p>
      </div>
      <div>
        <figure className="about-portrait">
          <Image src="/assests/saleem-portrait.png" alt="Portrait of Saleem Ibrahim outdoors overlooking the city" width={1254} height={1254} sizes="(max-width: 768px) calc(100vw - 48px), 400px" className="portrait-image" />
          <figcaption>Saleem Ibrahim <span>Researcher & developer</span></figcaption>
        </figure>
        <h3 className="text-2xl font-semibold text-white">Technical Skills</h3>
        <dl className="mt-5 space-y-5">{Object.entries(skills).map(([category, tools]) => <div key={category} className="border-l-2 border-blue-500 pl-4"><dt className="font-semibold text-blue-300">{category}</dt><dd className="mt-1 leading-relaxed text-gray-300">{tools}</dd></div>)}</dl>
      </div>
    </div>
    <div className="mt-10 flex flex-wrap gap-4">
      <a href="/Saleem-Ibrahim-Resume.pdf" target="_blank" rel="noopener noreferrer" className="rounded-full border border-blue-400 px-6 py-3 font-semibold text-white hover:bg-blue-950">View Resume</a>
      <a href="#Message_Form" className="rounded-full bg-blue-400 px-6 py-3 font-semibold text-black hover:bg-blue-300">Get in Touch</a>
    </div>
  </section>;
}
