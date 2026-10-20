'use client'
import React from 'react'
const TimeLines = () => {
  return (

<ol className="relative border-l border-gray-200 dark:border-gray-700 w-full m-0 mt-5">
    <li className="mb-10 ml-4 rounded-xl border border-blue-500/50 bg-blue-950/30 p-5 md:p-6">
        <span className="inline-block rounded-full bg-blue-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-300">Current role · May 2026 - Present</span>
        <h3 className="mt-4 text-2xl font-bold text-white">Research Intern</h3>
        <p className="mt-1 text-lg text-blue-300">WatchOut / Adonite · Montréal, QC</p>
        <p className="mt-4 leading-relaxed text-gray-200">Developing a multi-turn diagnostic system that asks targeted clarifying questions, reasons over competing hypotheses, and iteratively resolves ambiguous issues.</p>
        <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed text-gray-300">
          <li>Investigating Bayesian experimental design and expected information gain to select questions that reduce uncertainty over hypotheses.</li>
          <li>Researching reinforcement learning, including GRPO, to optimize question-asking policies using information-gain and task-outcome rewards.</li>
          <li>Designing controlled evaluation environments and diagnostic benchmarks to study information seeking, decision making, and premature conclusions.</li>
        </ul>
    </li>
    <li className="mb-10 ml-4">
    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <p className="mb-1 text-sm leading-none text-gray-400 dark:text-gray-500 font-bold">Product Analyst January 2024- May 2025 </p>
        <h3 className="text-lg font-semibold text-white ">D2L</h3>
        <p className="mb-4 text-base font-normal text-white">Supported data-driven product improvements by validating expected behavior, documenting reproducible bugs with clear technical context, and building SQL queries to diagnose platform issues and surface actionable insights.</p>
</li>
    <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <p className="mb-1 text-sm leading-none text-gray-400 dark:text-gray-500 font-bold">Teaching and Learning Systems Assistant: May 2021 - Aug 2022 </p>
        <h3 className="text-lg font-semibold text-white ">Wilfrid Laurier University</h3>
        <p className="mb-4 text-base font-normal text-white">Provided front-line Brightspace support, developed testing scenarios for enterprise upgrades, maintained XML email templates, and migrated course content and assessments.</p>


    </li>

</ol>
  )
}

export default TimeLines
