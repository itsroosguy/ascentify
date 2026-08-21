import React, { useState, useEffect } from 'react';
import { Mic, Play, Pause, RotateCcw, CheckCircle2, Sparkles, Activity, Shield, Award, Volume2 } from 'lucide-react';

const SAMPLES = [
  {
    id: 'customer-service',
    title: 'Customer Service Readiness',
    role: 'Contact Center Representative',
    transcript: '"Good morning! Thank you for calling Ascentify Support. I understand you need assistance with your workforce account, and I would be glad to guide you step-by-step today."',
    scores: {
      proficiency: 'C1 Advanced (96%)',
      pronunciation: 94,
      fluency: 98,
      clarity: 95,
      readiness: 'High Readiness',
      confidence: '98%'
    }
  },
  {
    id: 'english-prof',
    title: 'Spoken English Evaluation',
    role: 'Onboarding Employee',
    transcript: '"Our team successfully delivered the Q3 capability reports to executive leadership, ensuring all assessment metrics aligned with our business goals."',
    scores: {
      proficiency: 'B2 Upper Inter. (91%)',
      pronunciation: 89,
      fluency: 92,
      clarity: 94,
      readiness: 'Role Capable',
      confidence: '92%'
    }
  },
  {
    id: 'leadership',
    title: 'Leadership & Executive Briefing',
    role: 'Department Lead',
    transcript: '"By integrating communication evaluation directly into our onboarding workflow, we reduced ramp-up time by 40% while raising customer satisfaction scores."',
    scores: {
      proficiency: 'C2 Native (98%)',
      pronunciation: 97,
      fluency: 99,
      clarity: 98,
      readiness: 'Executive Level',
      confidence: '99%'
    }
  }
];

export default function VoiceSimulator({ onOpenModal }) {
  const [activeSample, setActiveSample] = useState(SAMPLES[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleStartAnalysis = (sample) => {
    setActiveSample(sample);
    setIsAnalyzing(true);
    setIsPlaying(false);
    setProgress(0);

    setTimeout(() => {
      setIsAnalyzing(false);
      setIsPlaying(true);
    }, 600);
  };

  const togglePlay = () => {
    if (progress >= 100) {
      setProgress(0);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full filter blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-extrabold">
              Interactive Assessment Engine
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            Voice Recognition & Analysis Demo
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-700 font-medium">
            Proprietary AI Engine v4.2
          </span>
        </div>
      </div>

      {/* Preset Selectors */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 relative z-10">
        {SAMPLES.map((sample) => (
          <button
            key={sample.id}
            onClick={() => handleStartAnalysis(sample)}
            className={`text-left p-3.5 rounded-2xl border transition-all ${
              activeSample.id === sample.id
                ? 'bg-gradient-to-r from-cyan-950/60 to-slate-900 border-cyan-500/60 ring-1 ring-cyan-500/50 shadow-md shadow-cyan-950'
                : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-800/60 hover:border-slate-700 text-slate-400'
            }`}
          >
            <div className="text-xs font-semibold text-cyan-400 mb-0.5">{sample.role}</div>
            <div className="text-sm font-bold text-slate-200">{sample.title}</div>
          </button>
        ))}
      </div>

      {/* Main Interactive Stage */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* Left Column: Audio Waveform & Transcript */}
        <div className="lg:col-span-7 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
                Live Audio Sample
              </span>
              <span className="text-xs text-cyan-400 font-medium bg-cyan-950/80 border border-cyan-800/50 px-2.5 py-0.5 rounded-full">
                {activeSample.title}
              </span>
            </div>

            <p className="text-sm sm:text-base text-slate-200 font-serif italic bg-slate-900/60 p-4 rounded-xl border border-slate-800/60 mb-5 leading-relaxed">
              {activeSample.transcript}
            </p>
          </div>

          <div>
            {/* Waveform Visualization */}
            <div className="h-16 bg-slate-900/90 rounded-xl p-3 flex items-center justify-center gap-1 border border-slate-800 overflow-hidden mb-4">
              {Array.from({ length: 36 }).map((_, idx) => {
                const isActive = isPlaying && (idx / 36) * 100 <= progress;
                const heightPercentage = isPlaying 
                  ? Math.sin(idx * 0.5 + progress * 0.2) * 40 + 50 
                  : Math.sin(idx * 0.4) * 30 + 40;
                
                return (
                  <div
                    key={idx}
                    className={`w-1 rounded-full transition-all duration-150 ${
                      isActive 
                        ? 'bg-gradient-to-t from-cyan-500 to-sky-300' 
                        : 'bg-slate-700/60'
                    }`}
                    style={{ height: `${Math.max(15, heightPercentage)}%` }}
                  />
                );
              })}
            </div>

            {/* Playback Controls & Timeline */}
            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                disabled={isAnalyzing}
                className="w-12 h-12 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center justify-center font-bold shadow-lg shadow-cyan-500/25 transition-all transform active:scale-95 shrink-0"
              >
                {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
              </button>

              <div className="flex-1">
                <div className="flex justify-between text-xs text-slate-400 mb-1.5 font-mono">
                  <span>00:{Math.floor((progress / 100) * 12).toString().padStart(2, '0')}</span>
                  <span>00:12</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-100" 
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <button
                onClick={() => { setProgress(0); setIsPlaying(true); }}
                className="p-2.5 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-xl border border-slate-800 transition-colors"
                title="Reset Audio"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Live Assessment Metrics */}
        <div className="lg:col-span-5 bg-gradient-to-b from-slate-950 to-slate-900 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <Activity className="w-4 h-4 text-cyan-400" />
                Assessment Results
              </span>
              <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded-full">
                <CheckCircle2 className="w-3 h-3" /> Objective Evaluated
              </span>
            </div>

            {/* Score Breakdown Cards */}
            <div className="space-y-3">
              
              {/* Spoken English Proficiency */}
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800/80">
                <div className="flex justify-between items-center mb-1 text-xs">
                  <span className="text-slate-300 font-medium">Spoken English Proficiency</span>
                  <span className="text-cyan-400 font-bold font-mono">{activeSample.scores.proficiency}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-400 rounded-full" style={{ width: '94%' }}></div>
                </div>
              </div>

              {/* Pronunciation Accuracy */}
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800/80">
                <div className="flex justify-between items-center mb-1 text-xs">
                  <span className="text-slate-300 font-medium">Pronunciation Accuracy</span>
                  <span className="text-sky-400 font-bold font-mono">{activeSample.scores.pronunciation}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-sky-400 rounded-full" style={{ width: `${activeSample.scores.pronunciation}%` }}></div>
                </div>
              </div>

              {/* Fluency & Clarity */}
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800/80">
                <div className="flex justify-between items-center mb-1 text-xs">
                  <span className="text-slate-300 font-medium">Fluency & Clarity</span>
                  <span className="text-blue-400 font-bold font-mono">{activeSample.scores.fluency}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-400 rounded-full" style={{ width: `${activeSample.scores.fluency}%` }}></div>
                </div>
              </div>

              {/* Customer Readiness & Confidence */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 text-center">
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">Role Readiness</div>
                  <div className="text-xs font-bold text-emerald-400">{activeSample.scores.readiness}</div>
                </div>
                <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 text-center">
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">Confidence Score</div>
                  <div className="text-xs font-bold text-cyan-400">{activeSample.scores.confidence}</div>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between">
            <span className="text-[11px] text-slate-400">
              *Eliminates subjective reviewer bias with automated voice metrics.
            </span>
            <button
              onClick={() => onOpenModal('Voice Tech Assessment Demo')}
              className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
            >
              Test Your Team <Sparkles className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
