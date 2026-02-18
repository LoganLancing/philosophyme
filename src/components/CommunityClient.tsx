'use client';

import { useState } from 'react';
import { PenLine, MessageSquare, Send } from 'lucide-react';

export default function CommunityClient() {
  const [essayForm, setEssayForm] = useState({ name: '', email: '', title: '', bio: '', essay: '' });
  const [essayStatus, setEssayStatus] = useState<null | 'sending' | 'sent' | 'error'>(null);
  const [feedbackForm, setFeedbackForm] = useState({ name: '', email: '', type: 'suggestion', message: '' });
  const [feedbackStatus, setFeedbackStatus] = useState<null | 'sending' | 'sent' | 'error'>(null);

  const inputStyle = {
    background: 'rgba(192,161,114,0.06)',
    border: '1px solid rgba(192,161,114,0.15)',
    color: '#f4f4f4',
    outline: 'none',
  };

  const submitEssay = async () => {
    if (!essayForm.name || !essayForm.email || !essayForm.essay) return;
    setEssayStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/xjkvqpvb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...essayForm, _subject: `PhilosophyMe Essay: ${essayForm.title}` }),
      });
      setEssayStatus(res.ok ? 'sent' : 'error');
      if (res.ok) setEssayForm({ name: '', email: '', title: '', bio: '', essay: '' });
    } catch {
      setEssayStatus('error');
    }
  };

  const submitFeedback = async () => {
    if (!feedbackForm.message) return;
    setFeedbackStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/xjkvqpvb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...feedbackForm, _subject: `PhilosophyMe Feedback: ${feedbackForm.type}` }),
      });
      setFeedbackStatus(res.ok ? 'sent' : 'error');
      if (res.ok) setFeedbackForm({ name: '', email: '', type: 'suggestion', message: '' });
    } catch {
      setFeedbackStatus('error');
    }
  };

  return (
    <div className="space-y-12">
      {/* Essay Submission */}
      <div className="rounded-2xl p-6 sm:p-8" style={{ background: 'rgba(26,21,16,0.6)', border: '1px solid rgba(192,161,114,0.1)' }}>
        <div className="flex items-center gap-2 mb-4">
          <PenLine size={20} style={{ color: '#c0a172' }} />
          <h2 className="text-xl font-bold" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>
            Submit a Philosophical Essay
          </h2>
        </div>
        <p className="text-sm mb-6" style={{ color: '#78909c' }}>
          We publish thoughtful philosophical essays on a range of topics. Submissions are reviewed for quality and relevance.
        </p>
        {essayStatus === 'sent' ? (
          <p style={{ color: '#c0a172' }}>✓ Essay submitted! We&apos;ll review it and be in touch.</p>
        ) : (
          <div className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input placeholder="Your name *" value={essayForm.name} onChange={(e) => setEssayForm({ ...essayForm, name: e.target.value })}
                className="px-4 py-2.5 rounded-lg text-sm w-full" style={inputStyle} />
              <input placeholder="Email *" value={essayForm.email} onChange={(e) => setEssayForm({ ...essayForm, email: e.target.value })}
                className="px-4 py-2.5 rounded-lg text-sm w-full" style={inputStyle} />
            </div>
            <input placeholder="Essay title *" value={essayForm.title} onChange={(e) => setEssayForm({ ...essayForm, title: e.target.value })}
              className="px-4 py-2.5 rounded-lg text-sm w-full" style={inputStyle} />
            <input placeholder="Short bio (optional)" value={essayForm.bio} onChange={(e) => setEssayForm({ ...essayForm, bio: e.target.value })}
              className="px-4 py-2.5 rounded-lg text-sm w-full" style={inputStyle} />
            <textarea placeholder="Your essay *" value={essayForm.essay} onChange={(e) => setEssayForm({ ...essayForm, essay: e.target.value })}
              rows={10} className="px-4 py-2.5 rounded-lg text-sm w-full resize-y" style={inputStyle} />
            <button
              onClick={submitEssay}
              disabled={essayStatus === 'sending'}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold"
              style={{ background: 'linear-gradient(135deg, #c0a172, #8B6914)', color: '#0f0c08', opacity: essayStatus === 'sending' ? 0.7 : 1 }}
            >
              <Send size={14} /> {essayStatus === 'sending' ? 'Submitting...' : 'Submit Essay'}
            </button>
            {essayStatus === 'error' && <p className="text-sm" style={{ color: '#c07272' }}>Something went wrong. Please try again.</p>}
          </div>
        )}
      </div>

      {/* Feedback */}
      <div className="rounded-2xl p-6 sm:p-8" style={{ background: 'rgba(26,21,16,0.6)', border: '1px solid rgba(192,161,114,0.1)' }}>
        <div className="flex items-center gap-2 mb-4">
          <MessageSquare size={20} style={{ color: '#c0a172' }} />
          <h2 className="text-xl font-bold" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>
            Feedback & Suggestions
          </h2>
        </div>
        <p className="text-sm mb-6" style={{ color: '#78909c' }}>
          Spotted an error? Have a suggestion? We want to hear from you.
        </p>
        {feedbackStatus === 'sent' ? (
          <p style={{ color: '#c0a172' }}>✓ Thank you for your feedback!</p>
        ) : (
          <div className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input placeholder="Name (optional)" value={feedbackForm.name} onChange={(e) => setFeedbackForm({ ...feedbackForm, name: e.target.value })}
                className="px-4 py-2.5 rounded-lg text-sm w-full" style={inputStyle} />
              <input placeholder="Email (optional)" value={feedbackForm.email} onChange={(e) => setFeedbackForm({ ...feedbackForm, email: e.target.value })}
                className="px-4 py-2.5 rounded-lg text-sm w-full" style={inputStyle} />
            </div>
            <select value={feedbackForm.type} onChange={(e) => setFeedbackForm({ ...feedbackForm, type: e.target.value })}
              className="px-4 py-2.5 rounded-lg text-sm w-full" style={inputStyle}>
              <option value="suggestion">Suggestion</option>
              <option value="correction">Correction / Error Report</option>
              <option value="philosopher">Missing Philosopher</option>
              <option value="other">Other</option>
            </select>
            <textarea placeholder="Your message *" value={feedbackForm.message} onChange={(e) => setFeedbackForm({ ...feedbackForm, message: e.target.value })}
              rows={5} className="px-4 py-2.5 rounded-lg text-sm w-full resize-y" style={inputStyle} />
            <button
              onClick={submitFeedback}
              disabled={feedbackStatus === 'sending'}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold"
              style={{ background: 'rgba(192,161,114,0.15)', color: '#c0a172', border: '1px solid rgba(192,161,114,0.3)', opacity: feedbackStatus === 'sending' ? 0.7 : 1 }}
            >
              <Send size={14} /> {feedbackStatus === 'sending' ? 'Sending...' : 'Send Feedback'}
            </button>
            {feedbackStatus === 'error' && <p className="text-sm" style={{ color: '#c07272' }}>Something went wrong. Please try again.</p>}
          </div>
        )}
      </div>
    </div>
  );
}
