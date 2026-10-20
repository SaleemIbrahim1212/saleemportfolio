const education = [
  { date: 'September 2025 - June 2027 (expected)', title: 'M.Sc. Computer Science (Machine Learning)', place: 'Université de Montréal · Montréal, QC', detail: 'GPA: 4.0. Mila Lab Representative since 2025, supporting student engagement and communication with administration. Participant in the Neuro-AI and Reinforcement Learning reading groups.' },
  { date: 'June - August 2023', title: 'Machine Learning Specialization', place: 'Stanford University & DeepLearning.AI', detail: 'Online specialization delivered through Coursera.' },
  { date: 'August 2018 - June 2023', title: 'Honours B.Sc. Computer Science & Psychology', place: 'Wilfrid Laurier University', detail: 'Double major. Dean’s Honor Roll: 2019/2020, 2021/2022, and 2022/2023.' },
];
export default function TimeLines2() {
  return <div>
    <ol className="relative mt-5 border-l border-gray-700">
      {education.map(item => <li key={item.title} className="mb-10 ml-5">
        <p className="text-sm font-semibold text-gray-400">{item.date}</p>
        <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
        <p className="mt-2 text-blue-300">{item.place}</p>
        <p className="mt-3 leading-relaxed text-gray-300">{item.detail}</p>
      </li>)}
    </ol>
    <div className="rounded-xl border border-gray-700 p-5">
      <h3 className="font-semibold text-white">Responsible AI Scholarship · 2025</h3>
      <p className="mt-2 leading-relaxed text-gray-300">Selected by RAI group for a conference scholarship recognizing academic excellence and commitment to ethical, socially responsible AI.</p>
    </div>
  </div>;
}
