import TimeLines from '../containers/TimeLines';
import TimeLines2 from '../containers/TimeLines2';
export default function Experience() {
  return <section id="Experience_Section" className="relative mx-auto w-full max-w-6xl px-6 py-16">
    <p className="eyebrow section-label">01 / Research & experience</p>
    <h2 className="section-title text-3xl font-bold text-blue-300">Experience & Education</h2>
    <div className="mt-10 grid gap-12 lg:grid-cols-2">
      <div><h3 className="text-xl font-semibold text-white">Research & Industry</h3><TimeLines /></div>
      <div><h3 className="text-xl font-semibold text-white">Education & Community</h3><TimeLines2 /></div>
    </div>
  </section>;
}
