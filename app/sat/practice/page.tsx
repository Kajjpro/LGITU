"use client";

import React, { useState } from "react";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const practiceSets = [
  {
    id: 1,
    name: "Full Length Practice Test",
    duration: "2h 14m",
    questions: 154,
    difficulty: "Adaptive",
    completed: 0,
    score: null,
    sections: [
      { name: "Reading & Writing", questions: 52, time: "65m" },
      { name: "Math", questions: 102, time: "70m" },
    ],
    description:
      "Complete digital SAT format with all question types. Adaptive difficulty based on performance.",
    color: "from-blue-600 to-indigo-600",
  },
  {
    id: 2,
    name: "Reading & Writing Module",
    duration: "65m",
    questions: 52,
    difficulty: "Mixed",
    completed: 34,
    score: 720,
    sections: [
      { name: "Prose & Grammar", questions: 27, time: "32m" },
      { name: "Reading Comprehension", questions: 25, time: "33m" },
    ],
    description: "Practice reading comprehension and grammar in realistic module format.",
    color: "from-purple-600 to-pink-600",
  },
  {
    id: 3,
    name: "Math Module",
    duration: "70m",
    questions: 102,
    difficulty: "Advanced",
    completed: 89,
    score: 680,
    sections: [
      { name: "Algebra & Functions", questions: 34, time: "23m" },
      { name: "Advanced Math", questions: 38, time: "25m" },
      { name: "Problem Solving", questions: 30, time: "22m" },
    ],
    description: "Comprehensive math practice with all problem types and difficulty levels.",
    color: "from-orange-600 to-red-600",
  },
];

const studyMethods = [
  {
    title: "Timed Practice",
    description: "Take full tests under realistic exam conditions and time limits.",
    icon: "⏱️",
    benefits: ["Build stamina", "Improve pacing", "Test strategies"],
  },
  {
    title: "Untimed Review",
    description: "Focus on mastery by removing time pressure to understand concepts deeply.",
    icon: "📚",
    benefits: ["Understand concepts", "Build confidence", "Fix gaps"],
  },
  {
    title: "Mistake Analysis",
    description: "Identify patterns in mistakes to prioritize what to study next.",
    icon: "🔍",
    benefits: ["Track patterns", "Targeted study", "Score improvement"],
  },
  {
    title: "Topic Drills",
    description: "Practice specific concepts isolated from the larger test format.",
    icon: "🎯",
    benefits: ["Isolate weaknesses", "Build speed", "Targeted practice"],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────────────────

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 20 20"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 10h10M11 6l4 4-4 4" />
    </svg>
  );
}

function Clock() {
  return (
    <svg
      viewBox="0 0 20 20"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="10" cy="10" r="8" />
      <path d="M10 6v4l2.5 1.5" />
    </svg>
  );
}

function BookOpen() {
  return (
    <svg
      viewBox="0 0 20 20"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4Z" />
      <path d="M10 4v12" />
    </svg>
  );
}

function CheckCircle() {
  return (
    <svg
      viewBox="0 0 20 20"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="10" cy="10" r="8" />
      <path d="M6 10l2 2 4-4" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

function ScoreIndicator({ score }: { score: number | null }) {
  if (!score) return null;

  let color = "text-red-600";
  if (score >= 700) color = "text-green-600";
  else if (score >= 650) color = "text-blue-600";

  return <span className={`text-sm font-semibold ${color}`}>{score}</span>;
}

function ProgressRing({ percentage }: { percentage: number }) {
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg width="100" height="100" className="transform -rotate-90">
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="rgba(0,0,0,0.08)"
        strokeWidth="4"
      />
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        className="transition-all duration-300 text-indigo-600"
      />
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dy=".3em"
        className="text-lg font-bold fill-zinc-900"
      >
        {percentage}%
      </text>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function SATProactictePage() {
  const [selectedMethod, setSelectedMethod] = useState(0);

  return (
    <div className="min-h-screen bg-zinc-50">
      <style>{css}</style>

      {/* TOPBAR */}
      <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-4 sm:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-zinc-900">Practice System</h1>
            </div>
            <div className="text-sm text-zinc-600">Digital SAT</div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12 sm:px-8">
        {/* HERO */}
        <section className="mb-16">
          <div className="mb-8">
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-indigo-600">
              Structured Practice
            </div>
            <h2 className="mb-4 text-4xl font-bold text-zinc-900">
              Practice with purpose
            </h2>
            <p className="max-w-2xl text-lg text-zinc-600">
              A systematic approach to practice, analyzing, and improving. Focused practice beats
              random attempts every time.
            </p>
          </div>
        </section>

        {/* PRACTICE SETS */}
        <section className="mb-20">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-zinc-900">Available Practice Tests</h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {practiceSets.map((set) => {
              const percentage = Math.round((set.completed / set.questions) * 100);

              return (
                <div
                  key={set.id}
                  className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all hover:border-zinc-300 hover:shadow-md"
                >
                  {/* Gradient accent */}
                  <div className={`absolute inset-0 h-1 bg-gradient-to-r ${set.color}`} />

                  <div className="p-6">
                    <div className="mb-6 flex items-start justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-zinc-900">{set.name}</h4>
                        <p className="mt-1 text-sm text-zinc-600">{set.description}</p>
                      </div>
                      <div className="flex h-24 w-24 items-center justify-center text-indigo-600">
                        <ProgressRing percentage={percentage} />
                      </div>
                    </div>

                    {/* Test details */}
                    <div className="mb-6 grid grid-cols-2 gap-3 border-t border-zinc-200 pt-4">
                      <div>
                        <p className="text-xs text-zinc-500">Duration</p>
                        <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-zinc-900">
                          <Clock />
                          {set.duration}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-zinc-500">Questions</p>
                        <p className="mt-1 text-sm font-medium text-zinc-900">{set.questions}</p>
                      </div>
                      <div>
                        <p className="text-xs text-zinc-500">Difficulty</p>
                        <p className="mt-1 text-sm font-medium text-zinc-900">{set.difficulty}</p>
                      </div>
                      <div>
                        <p className="text-xs text-zinc-500">Best Score</p>
                        <p className="mt-1 text-sm font-medium">
                          {set.score ? <ScoreIndicator score={set.score} /> : "—"}
                        </p>
                      </div>
                    </div>

                    {/* Sections */}
                    <div className="mb-6 space-y-2 border-t border-zinc-200 pt-4">
                      {set.sections.map((section, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between text-xs text-zinc-600"
                        >
                          <span>{section.name}</span>
                          <span>
                            {section.questions} questions • {section.time}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <button className="w-full rounded-lg bg-indigo-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 active:scale-95">
                      Start Practice
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* STUDY METHODS */}
        <section className="mb-20">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-zinc-900">How to Practice Effectively</h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {studyMethods.map((method, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedMethod(idx)}
                className={`cursor-pointer rounded-2xl border-2 p-6 transition-all ${
                  selectedMethod === idx
                    ? "border-indigo-600 bg-indigo-50"
                    : "border-zinc-200 bg-white hover:border-zinc-300"
                }`}
              >
                <div className="mb-4 text-4xl">{method.icon}</div>
                <h4 className="mb-2 text-lg font-semibold text-zinc-900">{method.title}</h4>
                <p className="mb-4 text-sm text-zinc-600">{method.description}</p>
                <ul className="space-y-2">
                  {method.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-medium text-zinc-700">
                      <CheckCircle />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* TIPS */}
        <section className="mb-20">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-zinc-900">Practice Tips for Success</h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Simulate the Test",
                description:
                  "Take full tests under real exam conditions with time limits and no breaks.",
              },
              {
                number: "02",
                title: "Analyze Every Mistake",
                description:
                  "Spend 2-3x longer analyzing mistakes than the test itself. Why did you miss it?",
              },
              {
                number: "03",
                title: "Track Progress Metrics",
                description:
                  "Monitor accuracy by section and question type to identify your specific weaknesses.",
              },
              {
                number: "04",
                title: "Spaced Repetition",
                description:
                  "Return to old mistakes weeks later to ensure you truly understand the concepts.",
              },
            ].map((tip, idx) => (
              <div key={idx} className="rounded-xl border border-zinc-200 bg-white p-6">
                <div className="mb-3 text-xs font-bold text-indigo-600">{tip.number}</div>
                <h4 className="mb-2 font-semibold text-zinc-900">{tip.title}</h4>
                <p className="text-sm text-zinc-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 p-12 text-center text-white sm:p-16">
          <h3 className="mb-4 text-3xl font-bold">Ready to start practicing?</h3>
          <p className="mb-8 text-lg text-indigo-100">
            Choose a practice test above and start building your SAT success.
          </p>
          <button className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-indigo-600 transition-colors hover:bg-indigo-50 active:scale-95">
            <span>Begin First Practice Test</span>
            <ArrowRight />
          </button>
        </section>
      </main>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// STYLES
// ─────────────────────────────────────────────────────────────────────────────

const css = `
  svg {
    display: inline-block;
  }
`;
