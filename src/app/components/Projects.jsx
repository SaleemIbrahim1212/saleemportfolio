const projects = [
  { title: 'SoccerNet Dense Video Captioning', date: '2026', image: 'soccer_ball.svg', tags: 'PyTorch · Transformers · Multimodal Learning · Contrastive Learning', description: 'Replaced NetVLAD temporal aggregation with transformer-based video representations and audio-visual modeling. Investigated contrastive pretraining with frozen language embeddings and modality-specific cross-attention.', result: 'Improved CIDEr over the original SoccerNet baseline while reducing model size. Evaluated transformer and dual-LSTM decoders through controlled ablations.', href: 'https://www.overleaf.com/read/fbdjgmydksgp#9b4ddd', link: 'Read project report' },
  { title: 'NHL Expected Goals Analytics', date: 'December 2025', image: 'nhl_xg_generic.svg', tags: 'Scikit-learn · Flask · Docker · Streamlit', description: 'Built an end-to-end pipeline for NHL shot quality, from ingestion and feature engineering to model evaluation using ROC/AUC and calibration analysis.', result: 'Compared boosted trees, neural networks, logistic regression, and SVMs. Served predictions through a Dockerized Flask API and an interactive Streamlit dashboard.', href: 'https://saleemibrahim1212.github.io/blogpost-template/', link: 'Explore project' },
  { title: 'Diabetic Retinopathy Classification', date: 'October 2025', image: 'retinal_fundus_generic.svg', tags: 'Python · PyTorch · CNNs · Transfer Learning', description: 'Built a five-class retinal disease severity classifier using fundus images, from no diabetic retinopathy to proliferative disease.', result: 'Addressed class imbalance with augmentation, evaluated custom CNNs and ResNet transfer learning, and benchmarked against SVMs and random forests.', href: 'https://github.com/SaleemIbrahim1212/Retinal-Fundus-Prediction', link: 'View code' },
];
const otherProjects = [
  { title: 'Mugiwara', description: 'Discover where to find TV shows and movies.', href: 'https://github.com/SaleemIbrahim1212/movieproj' },
  { title: 'Keep Up!', description: 'An Android student and instructor management app.', href: 'https://github.com/Salzeem/KeepUp_AndroidApplication' },
  { title: 'Beer Quality Prediction', description: 'Predicting beer quality from chemical features.', href: 'https://github.com/SaleemIbrahim1212/Kaggle-Beer-Quality-Prediction' },
  { title: 'RAG Paper-to-Blog Converter', description: 'Ongoing work turning research papers into readable blog posts.' },
];
export default function Projects() {
  return <section id="Projects_Section" className="relative mx-auto w-full max-w-6xl px-6 py-16">
    <h2 className="text-center text-3xl font-bold text-blue-400">Selected Projects</h2>
    <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-300">Recent work in multimodal learning, sports analytics, and computer vision.</p>
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {projects.map((project, index) => <article key={project.title} className={`overflow-hidden rounded-xl border border-gray-700 bg-gray-950 ${index === 0 ? 'md:col-span-2 md:grid md:grid-cols-2 border-blue-500/50' : ''}`}>
        <img src={`/assests/${project.image}`} alt="" className="h-52 w-full bg-gray-900 object-contain md:h-64" />
        <div className="p-6">
          <p className="text-sm font-semibold text-blue-300">{index === 0 ? 'Featured research · ' : ''}{project.date}</p>
          <h3 className="mt-2 text-2xl font-bold text-white">{project.title}</h3>
          <p className="mt-3 text-sm text-blue-300">{project.tags}</p>
          <p className="mt-4 leading-relaxed text-gray-300">{project.description}</p>
          <p className="mt-3 leading-relaxed text-gray-300">{project.result}</p>
          <a href={project.href} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block font-semibold text-blue-300 underline underline-offset-4 hover:text-white">{project.link}<span className="sr-only">: {project.title}</span></a>
        </div>
      </article>)}
    </div>
    <h3 className="mt-12 text-2xl font-semibold text-white">More Projects</h3>
    <div className="mt-5 grid gap-4 sm:grid-cols-2">{otherProjects.map(project => <article key={project.title} className="rounded-xl border border-gray-800 p-5">
      <h4 className="text-lg font-semibold text-white">{project.title}</h4>
      <p className="mt-2 text-gray-300">{project.description}</p>
      {project.href && <a href={project.href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-blue-300 underline underline-offset-4">View code<span className="sr-only">: {project.title}</span></a>}
    </article>)}</div>
  </section>;
}
