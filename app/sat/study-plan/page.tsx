"use client";

import { useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const studyPlans = [
  {
    id: "3-month",
    title: "3-Month Plan",
    subtitle: "Comprehensive",
    duration: "12 weeks",
    hoursPerWeek: "10-15 hours/week",
    idealFor: "Score improvement of 150-200+ points",
    description: "The complete preparation program for significant score improvement. Perfect for students starting from scratch or aiming for top scores.",
    color: "indigo",
    phases: [
      { name: "Foundation", weeks: "1-4", focus: "Core concepts & diagnostics" },
      { name: "Building", weeks: "5-8", focus: "Practice & strategy refinement" },
      { name: "Peak", weeks: "9-12", focus: "Full tests & final review" },
    ],
  },
  {
    id: "6-week",
    title: "6-Week Plan",
    subtitle: "Intensive",
    duration: "6 weeks",
    hoursPerWeek: "15-20 hours/week",
    idealFor: "Score improvement of 100-150 points",
    description: "Accelerated program for focused preparation. Best for students with solid fundamentals who need targeted improvement.",
    color: "emerald",
    phases: [
      { name: "Assess", weeks: "1-2", focus: "Diagnostic & weakness identification" },
      { name: "Target", weeks: "3-4", focus: "Focused skill building" },
      { name: "Polish", weeks: "5-6", focus: "Practice tests & refinement" },
    ],
  },
  {
    id: "2-week",
    title: "2-Week Plan",
    subtitle: "Last Minute",
    duration: "2 weeks",
    hoursPerWeek: "20+ hours/week",
    idealFor: "Score improvement of 50-80 points",
    description: "Emergency preparation for students with limited time. Focus on high-impact strategies and test-taking skills.",
    color: "amber",
    phases: [
      { name: "Diagnose", weeks: "Day 1-3", focus: "Quick assessment & priority setting" },
      { name: "Intensive", weeks: "Day 4-10", focus: "High-yield practice" },
      { name: "Final", weeks: "Day 11-14", focus: "Test simulation & review" },
    ],
  },
];

const weeklySchedule = {
  reading: [
    { day: "Monday", task: "Reading comprehension strategies", time: "45 min" },
    { day: "Tuesday", task: "Vocabulary in context practice", time: "30 min" },
    { day: "Wednesday", task: "Evidence-based questions", time: "45 min" },
    { day: "Thursday", task: "Paired passage practice", time: "45 min" },
    { day: "Friday", task: "Full reading section practice", time: "65 min" },
    { day: "Weekend", task: "Review mistakes & weak areas", time: "60 min" },
  ],
  math: [
    { day: "Monday", task: "Algebra fundamentals", time: "45 min" },
    { day: "Tuesday", task: "Problem solving & data analysis", time: "45 min" },
    { day: "Wednesday", task: "Advanced math concepts", time: "45 min" },
    { day: "Thursday", task: "Geometry & trigonometry", time: "45 min" },
    { day: "Friday", task: "Full math section practice", time: "70 min" },
    { day: "Weekend", task: "Error analysis & concept review", time: "60 min" },
  ],
};

const studyTips = [
  {
    icon: "target",
    title: "Set Clear Goals",
    description: "Define your target score and break it down into section-specific goals.",
  },
  {
    icon: "clock",
    title: "Consistent Schedule",
    description: "Study at the same time daily. Consistency beats intensity.",
  },
  {
    icon: "review",
    title: "Review Mistakes",
    description: "Spend 50% of study time reviewing wrong answers, not just doing new problems.",
  },
  {
    icon: "test",
    title: "Simulate Test Day",
    description: "Take full practice tests under real conditions at least once per week.",
  },
];

const milestones = [
  { week: 1, title: "Diagnostic Test", description: "Establish baseline score" },
  { week: 4, title: "First Practice Test", description: "Measure initial progress" },
  { week: 8, title: "Strategy Refinement", description: "Fine-tune approach" },
  { week: 12, title: "Final Preparation", description: "Peak performance" },
];

// ─────────────────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────────────────

const Icons = {
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  review: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
  ),
  test: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 10h10M11 6l4 4-4 4" />
    </svg>
  ),
  book: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
  brain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.54" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.54" />
    </svg>
  ),
  sparkle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
};

const TipIcon = ({ name }: { name: string }) => {
  switch (name) {
    case "target": return Icons.target;
    case "clock": return Icons.clock;
    case "review": return Icons.review;
    case "test": return Icons.test;
    default: return Icons.target;
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// ILLUSTRATIONS
// ─────────────────────────────────────────────────────────────────────────────

const StudyIllustration = () => (
  <svg viewBox="0 0 200 160" className="w-full h-auto" fill="none">
    {/* Desk */}
    <rect x="30" y="110" width="140" height="8" rx="2" fill="#E4E4E7" />
    <rect x="40" y="118" width="8" height="30" rx="1" fill="#D4D4D8" />
    <rect x="152" y="118" width="8" height="30" rx="1" fill="#D4D4D8" />
    
    {/* Book stack */}
    <rect x="45" y="90" width="35" height="20" rx="2" fill="#818CF8" />
    <rect x="48" y="85" width="32" height="5" rx="1" fill="#6366F1" />
    <rect x="50" y="80" width="28" height="5" rx="1" fill="#4F46E5" />
    
    {/* Laptop */}
    <rect x="90" y="70" width="60" height="40" rx="3" fill="#18181B" />
    <rect x="94" y="74" width="52" height="32" rx="2" fill="#3F3F46" />
    <rect x="98" y="78" width="44" height="24" rx="1" fill="#4F46E5" opacity="0.3" />
    <rect x="85" y="110" width="70" height="4" rx="1" fill="#27272A" />
    
    {/* Coffee cup */}
    <ellipse cx="160" cy="100" rx="12" ry="4" fill="#FDE68A" />
    <path d="M148 100 L150 110 Q160 115 170 110 L172 100" fill="#FBBF24" />
    <path d="M172 102 Q180 102 180 108 Q180 114 172 114" stroke="#FBBF24" strokeWidth="3" fill="none" />
    
    {/* Pencil */}
    <rect x="130" y="95" width="25" height="6" rx="1" fill="#F59E0B" transform="rotate(-15 130 95)" />
    <polygon points="155,93 160,96 155,99" fill="#27272A" transform="rotate(-15 130 95)" />
    
    {/* Floating elements */}
    <circle cx="50" cy="40" r="15" fill="#4F46E5" opacity="0.1" />
    <text x="50" y="45" textAnchor="middle" fontSize="14" fill="#4F46E5">A+</text>
    
    <circle cx="150" cy="35" r="12" fill="#10B981" opacity="0.1" />
    <path d="M145 35 L148 38 L155 31" stroke="#10B981" strokeWidth="2" fill="none" />
    
    {/* Stars */}
    <path d="M170 55 L172 60 L177 60 L173 63 L175 68 L170 65 L165 68 L167 63 L163 60 L168 60 Z" fill="#FBBF24" />
    <path d="M35 60 L36 63 L39 63 L37 65 L38 68 L35 66 L32 68 L33 65 L31 63 L34 63 Z" fill="#FBBF24" opacity="0.6" />
  </svg>
);

const TimelineIllustration = () => (
  <svg viewBox="0 0 200 100" className="w-full h-auto" fill="none">
    {/* Timeline base */}
    <line x1="20" y1="50" x2="180" y2="50" stroke="#E4E4E7" strokeWidth="3" strokeLinecap="round" />
    
    {/* Progress fill */}
    <line x1="20" y1="50" x2="100" y2="50" stroke="#4F46E5" strokeWidth="3" strokeLinecap="round" />
    
    {/* Milestone dots */}
    <circle cx="20" cy="50" r="8" fill="#4F46E5" />
    <circle cx="20" cy="50" r="4" fill="white" />
    
    <circle cx="60" cy="50" r="8" fill="#4F46E5" />
    <circle cx="60" cy="50" r="4" fill="white" />
    
    <circle cx="100" cy="50" r="10" fill="#4F46E5" />
    <path d="M95 50 L98 53 L105 46" stroke="white" strokeWidth="2" fill="none" />
    
    <circle cx="140" cy="50" r="8" fill="#E4E4E7" />
    <circle cx="140" cy="50" r="4" fill="white" />
    
    <circle cx="180" cy="50" r="8" fill="#E4E4E7" />
    <circle cx="180" cy="50" r="4" fill="white" />
    
    {/* Labels */}
    <text x="20" y="75" textAnchor="middle" fontSize="9" fill="#71717A">Start</text>
    <text x="60" y="75" textAnchor="middle" fontSize="9" fill="#71717A">Week 4</text>
    <text x="100" y="75" textAnchor="middle" fontSize="9" fill="#4F46E5" fontWeight="600">Now</text>
    <text x="140" y="75" textAnchor="middle" fontSize="9" fill="#71717A">Week 8</text>
    <text x="180" y="75" textAnchor="middle" fontSize="9" fill="#71717A">Test</text>
    
    {/* Decorative flags */}
    <path d="M20 20 L20 35 L30 30 L20 25" fill="#10B981" />
    <path d="M180 20 L180 35 L190 30 L180 25" fill="#F59E0B" />
  </svg>
);

const ProgressRing = ({ percentage, size = 120 }: { percentage: number; size?: number }) => {
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#E4E4E7"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#4F46E5"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className="transition-all duration-1000 ease-out"
      />
    </svg>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function StudyPlanPage() {
  const [selectedPlan, setSelectedPlan] = useState("3-month");
  const [activeTab, setActiveTab] = useState<"reading" | "math">("reading");

  const currentPlan = studyPlans.find((p) => p.id === selectedPlan);

  return (
    <div className="min-h-screen">
      <style>{css}</style>

      {/* Decorative backgrounds */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-indigo-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-emerald-500/5 blur-3xl" />
      </div>

      <div className="container">
        {/* Header */}
        <header className="header">
          <div className="header-content">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              STUDY PLAN BUILDER
            </div>
            <h1 className="page-title">Design your SAT study plan</h1>
            <p className="page-subtitle">
              Choose a timeline that fits your schedule and goals. Each plan includes structured phases, 
              daily tasks, and milestone checkpoints to keep you on track.
            </p>
          </div>
          <div className="header-illustration">
            <StudyIllustration />
          </div>
        </header>

        {/* Plan Selector */}
        <section className="section">
          <div className="section-header">
            <div className="section-icon">{Icons.calendar}</div>
            <div>
              <h2 className="section-title">Choose your timeline</h2>
              <p className="section-subtitle">Select based on your available time and score goals</p>
            </div>
          </div>

          <div className="plan-grid">
            {studyPlans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`plan-card ${selectedPlan === plan.id ? "plan-card-active" : ""} plan-${plan.color}`}
              >
                <div className="plan-badge">{plan.subtitle}</div>
                <h3 className="plan-title">{plan.title}</h3>
                <div className="plan-meta">
                  <span>{plan.duration}</span>
                  <span className="plan-meta-dot">·</span>
                  <span>{plan.hoursPerWeek}</span>
                </div>
                <p className="plan-ideal">{plan.idealFor}</p>
                {selectedPlan === plan.id && (
                  <div className="plan-check">
                    {Icons.check}
                  </div>
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Selected Plan Details */}
        {currentPlan && (
          <section className="section">
            <div className="plan-detail-card">
              <div className="plan-detail-header">
                <div>
                  <div className={`plan-detail-badge badge-${currentPlan.color}`}>
                    {currentPlan.subtitle}
                  </div>
                  <h3 className="plan-detail-title">{currentPlan.title}</h3>
                  <p className="plan-detail-desc">{currentPlan.description}</p>
                </div>
                <div className="plan-detail-stats">
                  <div className="stat-ring">
                    <ProgressRing percentage={75} />
                    <div className="stat-ring-content">
                      <span className="stat-ring-value">75%</span>
                      <span className="stat-ring-label">Success Rate</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="phases-grid">
                {currentPlan.phases.map((phase, i) => (
                  <div key={phase.name} className="phase-card">
                    <div className="phase-number">Phase {i + 1}</div>
                    <h4 className="phase-name">{phase.name}</h4>
                    <div className="phase-weeks">{phase.weeks}</div>
                    <p className="phase-focus">{phase.focus}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Timeline Visualization */}
        <section className="section">
          <div className="section-header">
            <div className="section-icon">{Icons.sparkle}</div>
            <div>
              <h2 className="section-title">Your journey at a glance</h2>
              <p className="section-subtitle">Track your progress through key milestones</p>
            </div>
          </div>

          <div className="timeline-card">
            <TimelineIllustration />
            <div className="milestones-grid">
              {milestones.map((milestone, i) => (
                <div key={milestone.week} className={`milestone ${i < 2 ? "milestone-complete" : ""}`}>
                  <div className="milestone-week">Week {milestone.week}</div>
                  <div className="milestone-title">{milestone.title}</div>
                  <div className="milestone-desc">{milestone.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Weekly Schedule */}
        <section className="section">
          <div className="section-header">
            <div className="section-icon">{Icons.book}</div>
            <div>
              <h2 className="section-title">Sample weekly schedule</h2>
              <p className="section-subtitle">A balanced approach to both sections</p>
            </div>
          </div>

          <div className="schedule-card">
            <div className="schedule-tabs">
              <button
                onClick={() => setActiveTab("reading")}
                className={`schedule-tab ${activeTab === "reading" ? "schedule-tab-active" : ""}`}
              >
                Reading &amp; Writing
              </button>
              <button
                onClick={() => setActiveTab("math")}
                className={`schedule-tab ${activeTab === "math" ? "schedule-tab-active" : ""}`}
              >
                Math
              </button>
            </div>

            <div className="schedule-list">
              {weeklySchedule[activeTab].map((item, i) => (
                <div key={i} className="schedule-item">
                  <div className="schedule-day">{item.day}</div>
                  <div className="schedule-task">{item.task}</div>
                  <div className="schedule-time">{item.time}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Study Tips */}
        <section className="section">
          <div className="section-header">
            <div className="section-icon">{Icons.brain}</div>
            <div>
              <h2 className="section-title">Study principles that work</h2>
              <p className="section-subtitle">Evidence-based strategies for effective preparation</p>
            </div>
          </div>

          <div className="tips-grid">
            {studyTips.map((tip, i) => (
              <div key={i} className="tip-card">
                <div className="tip-icon">
                  <TipIcon name={tip.icon} />
                </div>
                <h4 className="tip-title">{tip.title}</h4>
                <p className="tip-desc">{tip.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">Ready to start your journey?</h2>
            <p className="cta-subtitle">
              Download your personalized study plan or explore our practice resources.
            </p>
            <div className="cta-buttons">
              <button className="btn-primary">
                <span>Download Plan PDF</span>
                <span className="btn-arrow">{Icons.arrow}</span>
              </button>
              <button className="btn-secondary">
                Browse Practice Tests
              </button>
            </div>
          </div>
          <div className="cta-decoration">
            <div className="cta-circle cta-circle-1" />
            <div className="cta-circle cta-circle-2" />
            <div className="cta-circle cta-circle-3" />
          </div>
        </section>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// STYLES
// ─────────────────────────────────────────────────────────────────────────────

const css = `
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 32px 24px 80px;
}

/* Header */
.header {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 40px;
  align-items: center;
  margin-bottom: 48px;
}

.header-content {
  max-width: 600px;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: #4F46E5;
  margin-bottom: 16px;
}

.eyebrow-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #4F46E5;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.page-title {
  font-size: clamp(32px, 4vw, 44px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: #09090B;
  margin: 0 0 16px 0;
}

.page-subtitle {
  font-size: 15px;
  line-height: 1.7;
  color: #71717A;
  margin: 0;
}

.header-illustration {
  display: flex;
  justify-content: center;
}

/* Sections */
.section {
  margin-bottom: 40px;
}

.section-header {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 20px;
}

.section-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #F4F4F5;
  color: #4F46E5;
  flex-shrink: 0;
}

.section-title {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #09090B;
  margin: 0 0 4px 0;
}

.section-subtitle {
  font-size: 14px;
  color: #71717A;
  margin: 0;
}

/* Plan Cards */
.plan-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.plan-card {
  position: relative;
  background: white;
  border: 2px solid #E4E4E7;
  border-radius: 16px;
  padding: 20px;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
}

.plan-card:hover {
  border-color: #A1A1AA;
  transform: translateY(-2px);
}

.plan-card-active {
  border-color: #4F46E5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.plan-card-active.plan-emerald {
  border-color: #10B981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

.plan-card-active.plan-amber {
  border-color: #F59E0B;
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
}

.plan-badge {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  background: #F4F4F5;
  color: #71717A;
  margin-bottom: 12px;
}

.plan-indigo .plan-badge { background: #EEF2FF; color: #4F46E5; }
.plan-emerald .plan-badge { background: #ECFDF5; color: #059669; }
.plan-amber .plan-badge { background: #FFFBEB; color: #D97706; }

.plan-title {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #09090B;
  margin: 0 0 8px 0;
}

.plan-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #71717A;
  margin-bottom: 10px;
}

.plan-meta-dot {
  color: #D4D4D8;
}

.plan-ideal {
  font-size: 13px;
  color: #52525B;
  margin: 0;
  line-height: 1.5;
}

.plan-check {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #4F46E5;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.plan-emerald .plan-check { background: #10B981; }
.plan-amber .plan-check { background: #F59E0B; }

/* Plan Detail Card */
.plan-detail-card {
  background: white;
  border: 1px solid #E4E4E7;
  border-radius: 20px;
  padding: 28px;
  overflow: hidden;
}

.plan-detail-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
  margin-bottom: 28px;
}

.plan-detail-badge {
  display: inline-block;
  padding: 5px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 10px;
}

.badge-indigo { background: #EEF2FF; color: #4F46E5; }
.badge-emerald { background: #ECFDF5; color: #059669; }
.badge-amber { background: #FFFBEB; color: #D97706; }

.plan-detail-title {
  font-size: 26px;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: #09090B;
  margin: 0 0 10px 0;
}

.plan-detail-desc {
  font-size: 14px;
  line-height: 1.7;
  color: #71717A;
  margin: 0;
  max-width: 500px;
}

.plan-detail-stats {
  flex-shrink: 0;
}

.stat-ring {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-ring-content {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-ring-value {
  font-size: 24px;
  font-weight: 700;
  color: #09090B;
}

.stat-ring-label {
  font-size: 10px;
  color: #71717A;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.phases-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.phase-card {
  background: #F9FAFB;
  border-radius: 14px;
  padding: 18px;
  border: 1px solid #F4F4F5;
}

.phase-number {
  font-size: 11px;
  font-weight: 600;
  color: #4F46E5;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 8px;
}

.phase-name {
  font-size: 17px;
  font-weight: 700;
  color: #09090B;
  margin: 0 0 4px 0;
}

.phase-weeks {
  font-size: 13px;
  color: #71717A;
  margin-bottom: 8px;
}

.phase-focus {
  font-size: 13px;
  color: #52525B;
  margin: 0;
  line-height: 1.5;
}

/* Timeline Card */
.timeline-card {
  background: white;
  border: 1px solid #E4E4E7;
  border-radius: 20px;
  padding: 28px;
}

.milestones-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 24px;
}

.milestone {
  text-align: center;
  padding: 16px;
  border-radius: 12px;
  background: #F9FAFB;
  border: 1px solid #F4F4F5;
}

.milestone-complete {
  background: #EEF2FF;
  border-color: #C7D2FE;
}

.milestone-week {
  font-size: 11px;
  font-weight: 600;
  color: #71717A;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 6px;
}

.milestone-complete .milestone-week {
  color: #4F46E5;
}

.milestone-title {
  font-size: 14px;
  font-weight: 700;
  color: #09090B;
  margin-bottom: 4px;
}

.milestone-desc {
  font-size: 12px;
  color: #71717A;
}

/* Schedule Card */
.schedule-card {
  background: white;
  border: 1px solid #E4E4E7;
  border-radius: 20px;
  overflow: hidden;
}

.schedule-tabs {
  display: flex;
  border-bottom: 1px solid #E4E4E7;
}

.schedule-tab {
  flex: 1;
  padding: 16px;
  font-size: 14px;
  font-weight: 600;
  color: #71717A;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.schedule-tab:hover {
  color: #09090B;
}

.schedule-tab-active {
  color: #4F46E5;
  background: #F9FAFB;
  box-shadow: inset 0 -2px 0 #4F46E5;
}

.schedule-list {
  padding: 8px;
}

.schedule-item {
  display: grid;
  grid-template-columns: 100px 1fr 80px;
  align-items: center;
  gap: 16px;
  padding: 14px 16px;
  border-radius: 10px;
  transition: background 0.15s ease;
}

.schedule-item:hover {
  background: #F9FAFB;
}

.schedule-day {
  font-size: 13px;
  font-weight: 600;
  color: #09090B;
}

.schedule-task {
  font-size: 14px;
  color: #52525B;
}

.schedule-time {
  font-size: 13px;
  color: #71717A;
  text-align: right;
  font-family: monospace;
}

/* Tips Grid */
.tips-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.tip-card {
  background: white;
  border: 1px solid #E4E4E7;
  border-radius: 16px;
  padding: 22px;
  transition: all 0.2s ease;
}

.tip-card:hover {
  border-color: #A1A1AA;
  transform: translateY(-2px);
}

.tip-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%);
  color: #4F46E5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
}

.tip-title {
  font-size: 16px;
  font-weight: 700;
  color: #09090B;
  margin: 0 0 8px 0;
}

.tip-desc {
  font-size: 14px;
  line-height: 1.6;
  color: #71717A;
  margin: 0;
}

/* CTA Section */
.cta-section {
  position: relative;
  background: linear-gradient(135deg, #18181B 0%, #27272A 100%);
  border-radius: 24px;
  padding: 48px;
  overflow: hidden;
}

.cta-content {
  position: relative;
  z-index: 1;
  max-width: 500px;
}

.cta-title {
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: white;
  margin: 0 0 12px 0;
}

.cta-subtitle {
  font-size: 15px;
  line-height: 1.7;
  color: #A1A1AA;
  margin: 0 0 24px 0;
}

.cta-buttons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 22px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary {
  background: white;
  color: #09090B;
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
}

.btn-arrow {
  transition: transform 0.2s ease;
}

.btn-primary:hover .btn-arrow {
  transform: translateX(3px);
}

.cta-decoration {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  pointer-events: none;
}

.cta-circle {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(79, 70, 229, 0.3);
}

.cta-circle-1 {
  width: 300px;
  height: 300px;
  top: -100px;
  right: -50px;
}

.cta-circle-2 {
  width: 200px;
  height: 200px;
  bottom: -50px;
  right: 100px;
  border-color: rgba(16, 185, 129, 0.2);
}

.cta-circle-3 {
  width: 150px;
  height: 150px;
  top: 50%;
  right: 200px;
  transform: translateY(-50%);
  border-color: rgba(245, 158, 11, 0.2);
}

/* Responsive */
@media (max-width: 900px) {
  .header {
    grid-template-columns: 1fr;
  }
  
  .header-illustration {
    display: none;
  }
  
  .plan-grid {
    grid-template-columns: 1fr;
  }
  
  .phases-grid {
    grid-template-columns: 1fr;
  }
  
  .milestones-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .tips-grid {
    grid-template-columns: 1fr;
  }
  
  .plan-detail-header {
    flex-direction: column;
  }
  
  .plan-detail-stats {
    align-self: center;
  }
}

@media (max-width: 640px) {
  .container {
    padding: 24px 16px 64px;
  }
  
  .schedule-item {
    grid-template-columns: 1fr;
    gap: 4px;
  }
  
  .schedule-time {
    text-align: left;
  }
  
  .milestones-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-section {
    padding: 32px 24px;
  }
  
  .cta-buttons {
    flex-direction: column;
  }
  
  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
  }
}
`;
