'use client';

import { useState } from 'react';
import { PenLine, MessageSquare, Send, FileText, ChevronDown } from 'lucide-react';

const publishedEssays = [
  {
    id: 'postmodern-neo-marxists',
    title: 'The Curse of Postmodern Neo-Marxism in North American Education',
    author: 'Logan Lancing',
    bio: 'Best-selling author of The Queering of the American Child and The Woke Warpath. Public speaker and founder of itsnotinschools.com and PhilosophyMe.',
    date: 'February 2026',
    tags: ['Political Philosophy', 'Marxism', 'Postmodernism', 'Education'],
    excerpt: 'For the last few decades, North American education schools have been ground zero for two dangerous intellectual movements: critical theory and postmodernism. This essay traces how they merged — through the work of McLaren, Freire, and Kincheloe — into a unified program for transforming education into activism.',
    sections: [
      {
        heading: 'The Problem of Reproduction',
        text: "Every Marxist revolutionary faces a problem: why do the oppressed keep accepting the system that oppresses them? In classical Marxism, this is the problem of \"false consciousness\" — the working class fails to recognize its true interests because the ruling class controls the ideas, values, and institutions that shape how people think. Karl Marx himself wrote that \"the ideas of the ruling class are in every epoch the ruling ideas.\" But if that's true, how do you break the cycle?\n\nFor the Critical Theorists of the Frankfurt School — Horkheimer, Adorno, Marcuse, and Fromm — this problem was urgent. Classical Marxism predicted that capitalism would collapse under its own contradictions and the workers would revolt. It didn't happen. Instead, consumer culture, mass media, and liberal democracy seemed to make people content with their chains. Marcuse called this \"repressive tolerance\" — a system so effective at absorbing dissent that it made revolution seem unnecessary.\n\nThe answer, for the Critical Theorists, was culture. If the economic base wasn't going to produce revolution on its own, then revolutionaries would have to work through the cultural superstructure — through education, media, art, and institutions — to awaken people to their oppression. Antonio Gramsci, writing from an Italian prison in the 1930s, had already proposed this strategy: a \"long march through the institutions\" to achieve \"cultural hegemony\" before political revolution. The Frankfurt School refined this into a comprehensive program of cultural criticism.\n\nThis is where education schools enter the picture. If the problem is that people are socialized into accepting oppression as natural, then the solution is to transform the institutions that do the socializing — above all, schools. Education became the primary battlefield for cultural revolution."
      },
      {
        heading: 'Critical Postmodernist Pedagogy',
        text: "At first glance, critical theory and postmodernism seem like they shouldn't mix. \"Very Smart People\" get rather upset when you suggest that the two have merged. Critical theory is all about exposing power structures and \"creating the Kingdom of God here on earth,\" which is really just \"social justice,\" while postmodernism says there's no such thing as stable meaning or truth. So, how can you mix a \"grand narrative\" [Critical Marxism] with a grand narrative destroyer, Postmodernism? The answer is rather straightforward: education schools. Enter \"critical postmodernist pedagogy.\" Why there? Because they had a problem (of reproduction) to \"fix,\" and they would pick up and use any tool they could to get it done. Because the two schools of thought ultimately come from the same source, Marxism, the task wasn't as hard as the \"Very Smart People\" assume.\n\nTo help us understand this delightful twist, we turn to world-renowned socialist educator Peter McLaren, a guy who wrote a whole lot about \"comrade Jesus\" in his book Pedagogy of Insurrection: From Resurrection to Revolution. McLaren realized that postmodernism's skepticism about truth and meaning threatened the ability of critical pedagogy — which stems from the Critical Theory tradition applied to education — to pursue \"social justice.\" After all, if there are no truths, how can we fight for justice? If everything is fake and made up in the service of power, how do we grab hold of anything?\n\nOn the surface, it would appear that playing with postmodernism was a surefire way to tether one's self (what is \"self\" anyway?!) to a rocket to nowhere, rather than tangible Marxist activism. Instead of rejecting postmodernism as a result, however, McLaren and his colleagues twisted it into something they could use. They added new receptor sites to Critical Theory so postmodernism could plug in. They argued that while postmodernism's critique of universal truths was valuable, it didn't mean abandoning the fight for social change. Instead, educators should embrace the uncertainty of the postmodern world while still pushing students to challenge power and work for social justice. Sure, there is no truth — except for oppression. Surely that exists, and if oppression exists then it can be used as a North Star for figuring out how to properly apply postmodernism to achieve one's revolutionary political goals.\n\n\"Critical postmodernist pedagogy\" therefore combines Paulo Freire and Henry Giroux's critical pedagogy with postmodern tools: a postmodern neo-Marxism for educational domains. It's a method of teaching students that their identities and realities are socially constructed and shaped by power dynamics, but at the same time encourages them to fight back against those very dynamics because one thing is for certain; oppression exists and humanity must be liberated from it. \"Oppression\" is the one grand narrative that can't be touched. It alone survives the postmodern impact; an escape hatch to hang on to Critical Theory as the dialectical engine of History while at the same time claiming that we can't really know the true nature of our reality, aside from the fact that the oppressed have a reality they must reveal to us so we can join them in revealing the Kingdom of God here on earth."
      },
      {
        heading: "Kincheloe's Critical Constructivism",
        text: "What McLaren and others began in the 1980s — merging critical theory with postmodernism — eventually evolved into what Joe Kincheloe later solidified with his theory of critical constructivism. In his 2005 book, Critical Constructivism: A Primer, Kincheloe took the groundwork laid by Freire, Giroux, and McLaren and codified it even further. He argued that education wasn't just about teaching students to critique the world around them; it was about helping them actively construct a new reality based on their own perceptions of social justice; based on their own \"concrete conditions\" and \"lived experience\" of reality.\n\nKincheloe's critical constructivism is built on the idea that there is no neutral way of seeing the world. He states, \"No truly objective way of seeing existsâ€¦what appears as objective reality is merely what our mind constructs.\" (Kincheloe, 2005, p. 8). According to this view, every fact, every piece of knowledge is filtered through our consciousness, which is shaped by the social forces and power dynamics around us. For Kincheloe, this means that education isn't about teaching students objective truths because, in his view, no such truths exist. Instead, teachers must awaken their students to the social constructions that influence their understanding of the world. Once this critical consciousness is awakened, students can begin the process of critically constructing a new, more just reality. Students can become \"world builders\" equipped with \"dangerous knowledge\" and an \"emancipatory source of authority.\"\n\nKincheloe wasn't satisfied with just teaching students to see the world as unjust — he wanted them to be empowered to take it apart and reconstruct it. In Critical Constructivism, he writes that teachers must \"become aware of the ways their own identities and views of the world have been shaped by power relations.\" Only once this critical self-awareness is developed, he argues, can educators help their students awaken to the social forces shaping their lives. This process of awakening, or developing critical consciousness, turns teachers into critical constructivists — educators who actively work to transform their students into Marxist revolutionaries.\n\nOf course, this is the same process of self-transformation Paulo Freire said is required of all teachers (and priests and pastors) and compared to living through a personal Easter of death and rebirth on the side of the oppressed (The Politics of Education, chapter 10). It is also the \"qualitative change\" in every individual demanded by the most influential of the Critical Marxists, Herbert Marcuse, throughout his writings — this being for Marcuse what makes socialism possible. It is also the \"complete return of man to his social (i.e., human) nature\" according to Marx in his 1844 Economic and Philosophic Manuscripts. In the Marxist religion, there's nothing new under the sun!\n\nKincheloe's critical constructivism builds directly on McLaren's earlier work by adding a layer of (postmodernist) constructivist theory, which argues that individuals actively construct knowledge through their interactions with the world. By merging this with critical theory, Kincheloe pushes the idea that not only must students challenge power structures, but they must also understand how their own perceptions and beliefs are constructed by those very structures. This \"worldview,\" according to Kincheloe, is \"a theory of how humans learn, a unified system that includes epistemology, cognition, and the nature of human existence.\" (Kincheloe, 2005, p. 7). As noted, Kincheloe's contributions aren't really contributions at all. He understood Paulo Freire's program deeply and the Marxism behind it. There is nothing new added here that Paulo Freire himself did not argue himself. Kincheloe simply provided a more accurate translation in plainspoken English."
      },
      {
        heading: 'Conclusion',
        text: "North American education schools have become the perfect incubators for these radical political programs. Critical theory and postmodernism mix well together because they share the same roots — Marxism. Marxism, in its own rights, has deep roots too, roots that trace all the way back to philosophers like Hegel, Kant, and Rousseau. All the way back to the first people who questioned the nature of our reality and concluded that everything exists in the mind. It's no coincidence that the people who have merged Neo-Marxist critical theory with postmodernism think that they can take handle merging their grand narrative with the grand narrative destroyer. They get to do it because they have the right ideas about the true nature of reality, and they can't wait to place our faces under their boots so we can admire the view."
      }
    ]
  }
];

const FORMSPREE_ESSAY = 'https://formspree.io/f/xojnvben';
const FORMSPREE_FEEDBACK = 'https://formspree.io/f/mvzbgykv';

export default function CommunityClient() {
  const [essayForm, setEssayForm] = useState({ name: '', email: '', title: '', bio: '', essay: '' });
  const [essayStatus, setEssayStatus] = useState<null | 'sending' | 'sent' | 'error'>(null);
  const [feedbackForm, setFeedbackForm] = useState({ name: '', email: '', type: 'suggestion', message: '' });
  const [feedbackStatus, setFeedbackStatus] = useState<null | 'sending' | 'sent' | 'error'>(null);
  const [expandedEssay, setExpandedEssay] = useState<string | null>(null);

  const inputStyle = {
    background: 'rgba(192,161,114,0.06)',
    border: '1px solid rgba(192,161,114,0.15)',
    color: '#f4f4f4',
    outline: 'none',
  };

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

  return (
    <div className="space-y-12">
      {/* PUBLISHED ESSAYS */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <FileText size={20} style={{ color: '#c0a172' }} />
          <h2 className="text-xl font-bold" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>
            Published Essays
          </h2>
        </div>
        <div className="space-y-4">
          {publishedEssays.map((essay) => (
            <div key={essay.id} className="rounded-2xl overflow-hidden" style={{ background: 'rgba(26,21,16,0.6)', border: '1px solid rgba(192,161,114,0.1)' }}>
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap gap-2 mb-3">
                  {essay.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs" style={{ background: 'rgba(192,161,114,0.1)', color: '#c0a172', border: '1px solid rgba(192,161,114,0.15)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>
                  {essay.title}
                </h3>
                <p className="text-sm mb-3" style={{ color: '#78909c' }}>
                  By {essay.author} · {essay.date}
                </p>
                <p className="text-sm italic mb-1" style={{ color: '#8a7a6a' }}>{essay.bio}</p>
                <p className="text-base leading-relaxed mt-4 mb-4" style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif", lineHeight: 1.75 }}>
                  {essay.excerpt}
                </p>
                <button
                  onClick={() => setExpandedEssay(expandedEssay === essay.id ? null : essay.id)}
                  className="flex items-center gap-2 text-sm font-semibold transition-all duration-200"
                  style={{ color: '#c0a172' }}
                >
                  {expandedEssay === essay.id ? 'Collapse Essay' : 'Read Full Essay'}
                  <ChevronDown size={16} style={{ transition: 'transform 0.3s', transform: expandedEssay === essay.id ? 'rotate(180deg)' : 'rotate(0)' }} />
                </button>
              </div>
              {expandedEssay === essay.id && (
                <div className="px-6 sm:px-8 pb-8 anim-fi" style={{ borderTop: '1px solid rgba(192,161,114,0.08)' }}>
                  <div className="pt-6 space-y-8">
                    {essay.sections.map((section, i) => (
                      <div key={i}>
                        <h4 className="text-lg font-semibold mb-3" style={{ color: '#c0a172', fontFamily: "var(--font-playfair), serif" }}>
                          {section.heading}
                        </h4>
                        <div className="space-y-4">
                          {section.text.split('\n\n').map((para, pi) => (
                            <p key={pi} className="text-base leading-relaxed" style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif", lineHeight: 1.75 }}>
                              {para}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="gold-line" />

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
          <p style={{ color: '#c0a172' }}>âœ“ Essay submitted! We&apos;ll review it and be in touch.</p>
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
              onClick={() => submitForm(
                FORMSPREE_ESSAY,
                { ...essayForm, _subject: `PhilosophyMe Essay: ${essayForm.title}` },
                setEssayStatus,
                () => setEssayForm({ name: '', email: '', title: '', bio: '', essay: '' })
              )}
              disabled={essayStatus === 'sending' || !essayForm.name || !essayForm.email || !essayForm.essay}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold"
              style={{ background: 'linear-gradient(135deg, #c0a172, #8B6914)', color: '#0f0c08', opacity: essayStatus === 'sending' ? 0.7 : 1 }}
            >
              <Send size={14} /> {essayStatus === 'sending' ? 'Submitting...' : 'Submit Essay'}
            </button>
            {essayStatus === 'error' && <p className="text-sm" style={{ color: '#c07272' }}>Something went wrong. Please try again.</p>}
          </div>
        )}
      </div>

      <div className="gold-line" />

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
          <p style={{ color: '#c0a172' }}>âœ“ Thank you for your feedback!</p>
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
              onClick={() => submitForm(
                FORMSPREE_FEEDBACK,
                { ...feedbackForm, _subject: `PhilosophyMe Feedback: ${feedbackForm.type}` },
                setFeedbackStatus,
                () => setFeedbackForm({ name: '', email: '', type: 'suggestion', message: '' })
              )}
              disabled={feedbackStatus === 'sending' || !feedbackForm.message}
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
