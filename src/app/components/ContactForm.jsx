'use client';
import React from 'react';

const ContactForm = () => {
  return (
    <section className="relative mx-auto w-full max-w-3xl">
      <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-blue-500/20 blur-2xl" />
      <div className="absolute -right-10 top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-black/80 p-8 shadow-[0_0_40px_rgba(59,130,246,0.15)]">
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-blue-300/70">
              Get in touch
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-white">
              Let&apos;s build something meaningful
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-300">
              I&apos;m always open to new collaborations, freelance work, or
              just a great conversation. Pick your channel below and I&apos;ll
              respond quickly.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-900/30 to-black p-4 transition duration-300 ease-out hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-[0_12px_30px_rgba(59,130,246,0.25)]">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-200/70">
                Email
              </p>
              <p className="mt-2 text-sm font-medium text-white">
                saleemibramza@gmail.com
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Best for project briefs or detailed questions.
              </p>
            </div>
            <div className="rounded-xl border border-blue-500/20 bg-gradient-to-br from-cyan-900/20 to-black p-4 transition duration-300 ease-out hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_12px_30px_rgba(34,211,238,0.2)]">
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-200/70">
                LinkedIn
              </p>
              <a
                className="mt-2 block text-sm font-medium text-white hover:text-cyan-300"
                href="https://www.linkedin.com/in/saleem-ibrahim-0162a8121/"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn
              </a>
              <p className="mt-2 text-xs text-slate-400">
                Quick intros and professional updates.
              </p>
            </div>
            <div className="rounded-xl border border-blue-500/20 bg-gradient-to-br from-indigo-900/30 to-black p-4 transition duration-300 ease-out hover:-translate-y-1 hover:border-indigo-300/40 hover:shadow-[0_12px_30px_rgba(129,140,248,0.2)]">
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-200/70">
                GitHub
              </p>
              <a
                className="mt-2 block text-sm font-medium text-white hover:text-indigo-300"
                href="https://github.com/saleemibrahim1212"
                target="_blank"
                rel="noreferrer"
              >
                saleemibrahim1212
              </a>
              <p className="mt-2 text-xs text-slate-400">
                Explore recent experiments and code samples.
              </p>
            </div>
          </div>

          <div className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-blue-200">
            Available for 2026 projects
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
