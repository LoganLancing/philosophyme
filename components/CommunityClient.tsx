'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PenLine, MessageSquare, Send, X, ChevronDown } from 'lucide-react';
import { imaginedNotice, type EssayView } from '@/lib/essayTypes';

const FORMSPREE_ESSAY = 'https://formspree.io/f/xojnvben';
const FORMSPREE_FEEDBACK = 'https://formspree.io/f/mvzbgykv';

const feedbackTypes = [
  { v: 'suggestion', l: '💡 Suggestion' },
  { v: 'error', l: '📝 Error Report' },
  { v: 'feature', l: '⚡ Feature Idea' },
  { v: 'praise', l: '❤️ Love It' },
  { v: 'other', l: '💬 Other' },
];

export default function CommunityClient({ essays: publishedEssays }: { essays: EssayView[] }) {
  const [essayForm, setEssayForm] = useState({ name: '', email: '', title: '', bio: '', essay: '' });
  const [essayStatus, setEssayStatus] = useState<null | 'sending' | 'sent' | 'error'>(null);
  const [feedbackForm, setFeedbackForm] = useState({ name: '', email: '', type: 'suggestion', message: '' });
  const [feedbackStatus, setFeedbackStatus] = useState<null | 'sending' | 'sent' | 'error'>(null);
  const [expandedEssay, setExpandedEssay] = useState<string | null>(null);

  const submitForm = async (url: string, data: Record<string, string>, setStatus: (s: 'sending' | 'sent' | 'error') => void, resetFn: () => void) => {
    setStatus('sending');
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) { setStatus('sent'); resetFn(); } else { setStatus('error'); }
    } catch { setStatus('error'); }
  };

  const inputBase = "w-full px-3 py-2 rounded-lg text-sm outline-none transition-all duration-200";
  const inputStyle = {
    background: 'rgba(15,12,8,0.8)',
    border: '1px solid rgba(192,161,114,0.12)',
    color: '#f4f4f4',
    fontFamily: "var(--font-crimson), serif",
  };
  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'rgba(192,161,114,0.35)';
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'rgba(192,161,114,0.12)';
  };

  const isEssayDisabled = essayStatus === 'sending' || !essayForm.name || !essayForm.email || !essayForm.title || !essayForm.essay;
  const isFeedbackDisabled = feedbackStatus === 'sending' || !feedbackForm.message;

  return (
    <div>
      {/* ── FORMS: Two-column grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Left column: Submit an Essay */}
        <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(26,21,16,0.5)', border: '1px solid rgba(192,161,114,0.12)' }}>
          <div className="p-1.5" style={{ background: 'linear-gradient(90deg, rgba(192,161,114,0.15), rgba(192,161,114,0.05))' }}>
            <div className="flex items-center gap-2 px-4 py-2">
              <PenLine size={15} style={{ color: '#c0a172' }} />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#c0a172', fontFamily: "var(--font-crimson), serif", letterSpacing: '0.15em' }}>Submit an Essay</span>
            </div>
          </div>

          <div className="p-6">
            {essayStatus === 'sent' ? (
              <div className="text-center py-8 anim-fi">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(192,161,114,0.1)', color: '#c0a172' }}>{'✔'}</div>
                <p className="text-sm font-semibold mb-2" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>Essay Received</p>
                <p className="text-xs mb-4" style={{ color: '#8a7a6a' }}>Thanks for sending your work. We will review it and get back to you within two weeks.</p>
                <button onClick={() => setEssayStatus(null)} className="text-xs underline" style={{ color: '#c0a172' }}>Submit another</button>
              </div>
            ) : (
              <>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif" }}>
                  We welcome original essays on philosophical topics. Selected essays will be published on PhilosophyMe for readers to explore and discuss.
                </p>

                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2" style={{ color: '#c0a172', fontFamily: "var(--font-playfair), serif" }}>Guidelines</p>
                  <div className="space-y-1.5">
                    {[
                      { label: 'Length', detail: '800 \u2013 2,500 words' },
                      { label: 'Tone', detail: 'Accessible \u2014 write for curious minds, not journals' },
                      { label: 'Originality', detail: 'Your own work, not previously published' },
                    ].map((g, i) => (
                      <div key={i} className="flex gap-2 text-sm">
                        <span className="font-semibold flex-shrink-0" style={{ color: '#d3b9a3', minWidth: '65px' }}>{g.label}</span>
                        <span style={{ color: '#8a7a6a' }}>{g.detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {[
                  { key: 'name', label: 'Your Name', placeholder: 'Name or pen name', type: 'text' },
                  { key: 'email', label: 'Email', placeholder: 'you@example.com', type: 'email' },
                  { key: 'title', label: 'Essay Title', placeholder: 'The title of your essay', type: 'text' },
                  { key: 'bio', label: 'Short Bio', placeholder: '1-2 sentences about yourself', type: 'text' },
                ].map(f => (
                  <div key={f.key} className="mb-3">
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: '#d3b9a3' }}>{f.label}</label>
                    <input
                      type={f.type}
                      value={essayForm[f.key as keyof typeof essayForm]}
                      onChange={e => setEssayForm(p => ({ ...p, [f.key]: e.target.value }))}
                      placeholder={f.placeholder}
                      className={inputBase}
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                ))}

                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: '#d3b9a3' }}>Your Essay</label>
                  <textarea
                    value={essayForm.essay}
                    onChange={e => setEssayForm(p => ({ ...p, essay: e.target.value }))}
                    placeholder="Paste or write your essay here..."
                    rows={6}
                    className={`${inputBase} resize-y`}
                    style={{ ...inputStyle, minHeight: '120px' }}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>

                <button
                  disabled={isEssayDisabled}
                  onClick={() => submitForm(FORMSPREE_ESSAY, { _subject: `Essay Submission: ${essayForm.title}`, ...essayForm }, setEssayStatus, () => setEssayForm({ name: '', email: '', title: '', bio: '', essay: '' }))}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                  style={{
                    background: isEssayDisabled ? 'rgba(192,161,114,0.05)' : 'linear-gradient(135deg, rgba(192,161,114,0.2), rgba(192,161,114,0.08))',
                    border: '1px solid rgba(192,161,114,0.2)',
                    color: isEssayDisabled ? '#5a5040' : '#c0a172',
                    cursor: isEssayDisabled ? 'not-allowed' : 'pointer',
                  }}
                >
                  {essayStatus === 'sending' ? (
                    <><span className="animate-spin">{'⏳'}</span> Sending...</>
                  ) : essayStatus === 'error' ? (
                    <><X size={14} /> Error {'—'} try again</>
                  ) : (
                    <><Send size={14} /> Submit Your Essay</>
                  )}
                </button>
                <p className="text-sm text-center mt-2" style={{ color: '#78909c' }}>We review submissions within two weeks.</p>
              </>
            )}
          </div>
        </div>

        {/* Right column: Feedback + Logan note */}
        <div className="flex flex-col gap-6">
          <div className="rounded-2xl overflow-hidden flex-1" style={{ background: 'rgba(26,21,16,0.5)', border: '1px solid rgba(192,161,114,0.12)' }}>
            <div className="p-1.5" style={{ background: 'linear-gradient(90deg, rgba(192,161,114,0.15), rgba(192,161,114,0.05))' }}>
              <div className="flex items-center gap-2 px-4 py-2">
                <MessageSquare size={15} style={{ color: '#c0a172' }} />
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#c0a172', fontFamily: "var(--font-crimson), serif", letterSpacing: '0.15em' }}>Site Feedback</span>
              </div>
            </div>

            <div className="p-6">
              {feedbackStatus === 'sent' ? (
                <div className="text-center py-8 anim-fi">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(192,161,114,0.1)', color: '#c0a172' }}>{'✔'}</div>
                  <p className="text-sm font-semibold mb-2" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>Thanks for your feedback</p>
                  <p className="text-xs mb-4" style={{ color: '#8a7a6a' }}>Your message has been received. Thanks for taking the time to write.</p>
                  <button onClick={() => setFeedbackStatus(null)} className="text-xs underline" style={{ color: '#c0a172' }}>Send another</button>
                </div>
              ) : (
                <>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif" }}>
                    Found an error? Have a suggestion? Want a philosopher added? I read every message.
                  </p>

                  <div className="mb-3">
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: '#d3b9a3' }}>Name <span style={{ color: '#5a5040', fontWeight: 400 }}>(optional)</span></label>
                    <input
                      type="text"
                      value={feedbackForm.name}
                      onChange={e => setFeedbackForm(p => ({ ...p, name: e.target.value }))}
                      placeholder="Your name"
                      className={inputBase}
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: '#d3b9a3' }}>Email <span style={{ color: '#5a5040', fontWeight: 400 }}>(optional {'—'} only if you&apos;d like a reply)</span></label>
                    <input
                      type="email"
                      value={feedbackForm.email}
                      onChange={e => setFeedbackForm(p => ({ ...p, email: e.target.value }))}
                      placeholder="you@example.com"
                      className={inputBase}
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: '#d3b9a3' }}>Type</label>
                    <div className="flex flex-wrap gap-2">
                      {feedbackTypes.map(t => (
                        <button
                          key={t.v}
                          onClick={() => setFeedbackForm(p => ({ ...p, type: t.v }))}
                          className="px-3 py-1.5 rounded-lg text-sm transition-all duration-200"
                          style={{
                            background: feedbackForm.type === t.v ? 'rgba(192,161,114,0.15)' : 'rgba(15,12,8,0.5)',
                            border: `1px solid ${feedbackForm.type === t.v ? 'rgba(192,161,114,0.3)' : 'rgba(192,161,114,0.08)'}`,
                            color: feedbackForm.type === t.v ? '#c0a172' : '#78909c',
                          }}
                        >
                          {t.l}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: '#d3b9a3' }}>Message</label>
                    <textarea
                      value={feedbackForm.message}
                      onChange={e => setFeedbackForm(p => ({ ...p, message: e.target.value }))}
                      placeholder="What's on your mind?"
                      rows={4}
                      className={`${inputBase} resize-y`}
                      style={{ ...inputStyle, minHeight: '80px' }}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>

                  <button
                    disabled={isFeedbackDisabled}
                    onClick={() => submitForm(FORMSPREE_FEEDBACK, { _subject: `Feedback: ${feedbackForm.type}`, ...feedbackForm }, setFeedbackStatus, () => setFeedbackForm({ name: '', email: '', type: 'suggestion', message: '' }))}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                    style={{
                      background: isFeedbackDisabled ? 'rgba(192,161,114,0.05)' : 'linear-gradient(135deg, rgba(192,161,114,0.2), rgba(192,161,114,0.08))',
                      border: '1px solid rgba(192,161,114,0.2)',
                      color: isFeedbackDisabled ? '#5a5040' : '#c0a172',
                      cursor: isFeedbackDisabled ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {feedbackStatus === 'sending' ? (
                      <><span className="animate-spin">{'⏳'}</span> Sending...</>
                    ) : feedbackStatus === 'error' ? (
                      <><X size={14} /> Error {'—'} try again</>
                    ) : (
                      <><Send size={14} /> Send Feedback</>
                    )}
                  </button>
                </>
              )}
            </div>
          </div>

          {/* A note from Logan */}
          <div className="rounded-2xl p-5" style={{ background: 'rgba(192,161,114,0.04)', border: '1px solid rgba(192,161,114,0.08)' }}>
            <p className="text-sm leading-relaxed" style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif" }}>
              <span style={{ color: '#c0a172', fontWeight: 600 }}>A note from Logan:</span> I built PhilosophyMe because I think philosophy should be open to everyone. Your feedback, essays, and support help keep the project growing. I read every message myself.
            </p>
          </div>
        </div>
      </div>

      {/* ── PUBLISHED ESSAYS ── */}
      <div id="essays" className="mt-16 scroll-mt-24">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>Published Essays</h3>
          <span className="text-xs px-3 py-1.5 rounded-full" style={{ background: 'rgba(192,161,114,0.08)', color: '#c0a172', border: '1px solid rgba(192,161,114,0.15)' }}>
            {publishedEssays.length} Essay{publishedEssays.length !== 1 ? 's' : ''}
          </span>
        </div>

        <div className="space-y-4">
          {publishedEssays.map(essay => (
            <div key={essay.id} className="rounded-2xl overflow-hidden transition-all duration-300" style={{ background: 'rgba(26,21,16,0.5)', border: `1px solid ${expandedEssay === essay.id ? 'rgba(192,161,114,0.25)' : 'rgba(192,161,114,0.1)'}` }}>
              {/* Essay card header */}
              <button className="w-full text-left p-6" onClick={() => setExpandedEssay(expandedEssay === essay.id ? null : essay.id)}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>{essay.title}</h4>
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span className="text-sm" style={{ color: '#c0a172', fontFamily: "var(--font-crimson), serif" }}>{essay.byline}</span>
                      <span style={{ color: '#5a5040' }}>{'·'}</span>
                      <span className="text-sm" style={{ color: '#8fa3b0', fontFamily: "var(--font-crimson), serif" }}>{essay.displayDate}</span>
                      {essay.kind === 'imagined' && (
                        <span className="text-xs px-2 py-0.5 rounded-md" style={{ background: 'rgba(192,161,114,0.1)', color: '#c0a172', border: '1px solid rgba(192,161,114,0.2)' }}>Imagined essay</span>
                      )}
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: '#8a7a6a', fontFamily: "var(--font-crimson), serif" }}>{essay.excerpt}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {essay.tags.map((tag, i) => (
                        <span key={i} className="text-xs px-2 py-0.5 rounded-md" style={{ background: 'rgba(192,161,114,0.06)', color: '#78909c', border: '1px solid rgba(192,161,114,0.06)' }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <ChevronDown size={20} style={{ color: '#78909c', transition: 'transform 0.3s', transform: expandedEssay === essay.id ? 'rotate(180deg)' : 'rotate(0)', flexShrink: 0, marginTop: '4px' }} />
                </div>
              </button>

              {/* Expanded essay reader */}
              {expandedEssay === essay.id && (
                <div className="anim-fi" style={{ borderTop: '1px solid rgba(192,161,114,0.08)' }}>
                  <div className="max-w-3xl mx-auto px-6 py-8">
                    {/* Author bar */}
                    <div className="flex items-center gap-3 mb-8 pb-6" style={{ borderBottom: '1px solid rgba(192,161,114,0.08)' }}>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: 'linear-gradient(135deg, rgba(192,161,114,0.2), rgba(192,161,114,0.08))', color: '#c0a172', fontFamily: "var(--font-playfair), serif" }}>
                        {(essay.philosopherName ?? essay.byline).split(' ').map(w => w[0]).join('').slice(0, 2)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold" style={{ color: '#f4f4f4' }}>{essay.byline}</p>
                        <p className="text-xs" style={{ color: '#8fa3b0' }}>{essay.bylineNote}</p>
                      </div>
                    </div>

                    {essay.kind === 'imagined' && essay.philosopherName && (
                      <p className="text-sm italic rounded-xl p-4 mb-8" style={{ color: '#b0a090', background: 'rgba(192,161,114,0.05)', border: '1px solid rgba(192,161,114,0.12)', fontFamily: "var(--font-crimson), serif" }}>
                        {imaginedNotice(essay.philosopherName)}
                      </p>
                    )}

                    {/* Essay body */}
                    {essay.sections.map((sec, si) => (
                      <div key={si} className="mb-8">
                        {sec.heading && (
                          <h4 className="text-xl font-bold mb-4 pt-2" style={{ color: '#c0a172', fontFamily: "var(--font-playfair), serif" }}>{sec.heading}</h4>
                        )}
                        {sec.text.split('\n\n').map((para, pi) => (
                          <p key={pi} className="mb-4" style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif", fontSize: '1.05rem', lineHeight: 1.85 }}>{para}</p>
                        ))}
                      </div>
                    ))}

                    {/* End matter */}
                    <div className="mt-10 pt-6" style={{ borderTop: '1px solid rgba(192,161,114,0.08)' }}>
                      <p className="text-xs italic" style={{ color: '#78909c', fontFamily: "var(--font-crimson), serif" }}>
                        {essay.kind === 'imagined'
                          ? 'Imagined essays are written by PhilosophyMe to show how a past thinker\'s ideas apply today. They are not the philosopher\'s own words.'
                          : 'The views expressed in guest essays are those of the author and do not necessarily reflect the views of PhilosophyMe.'}
                      </p>
                      <Link href={`/essays/${essay.id}/`} className="inline-block mt-3 text-sm link-hover" style={{ color: '#c0a172' }}>
                        Open this essay on its own page
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-6 text-center">
          <p className="text-base" style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif" }}>Have something to say? Submit your essay above {'—'} we&apos;d love to read it.</p>
        </div>
      </div>
    </div>
  );
}
