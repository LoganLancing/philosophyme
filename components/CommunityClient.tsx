'use client';

import { useState } from 'react';
import { PenLine, MessageSquare, Send, X, ChevronDown } from 'lucide-react';

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
        heading: null,
        text: "For the last few decades, North American education schools have been ground zero for two dangerous intellectual movements: critical theory and postmodernism. While they may seem like they don't mix well on the surface, both of these ideologies have taken over teacher training programs, creating a twisted form of education that's designed to indoctrinate rather than teach students anything useful.\n\nCritical theory, which I generally refer to as \"Critical Marxism\" (following Marxist educator Isaac Gottesman), claims to expose hidden systems of oppression and inequality in society. Postmodernism, which I generally refer to as \"Postmodern Marxism,\" questions reality itself, insisting that there are no universal truths, no fixed meanings, and no stable identities. In their hands, education has become a battleground where the primary goal isn't teaching students how to think but how to become a Marxist and tear apart society.\n\nThis story is a big one and I'm obligated to leave out more than I can include because a full deep dive would require a book-length explanation. Luckily, you can find a large part of that story in James Lindsay's The Marxification of Education and my book (with Lindsay) The Queering of the American Child. Rather than get bogged down in too many intricate details, this essay will focus on the merging of critical theory and postmodernism.\n\nYou'll notice I referenced Critical Theory as Critical Marxism, and Postmodernism as Postmodern Marxism. While I do this because I think it is technically correct, I also do it because it gives the game away at the starting line. Critical Theory and Postmodernism mix well together and synthesize because they both share the same root system: Marxism. This merger, with deep roots feeding both strains of the same wicked program, has warped the field of education, pushing radical ideas into classrooms and turning schools into breeding grounds for activism rather than places of learning."
      },
      {
        heading: 'Critical Theory (Critical Marxism)',
        text: "Critical theory started in the early 20th century with the Frankfurt School, a group of German intellectuals who claimed to have figured out how oppression really works in society. They believed that capitalism and Enlightenment reason were tools used to control people and blind them to the \"true\" perception of reality. Max Horkheimer, Theodor Adorno, and Herbert Marcuse spent their careers arguing that mass culture, from television to movies to schools, wasn't making people freer or more informed but was brainwashing them into accepting their place in a rigged system.\n\nIt didn't take long for these ideas to find their way into education. By the 1960s, educators influenced by the Frankfurt School and the Marxism of the New Left were arguing that schools didn't just pass on knowledge; they reinforced social hierarchies and reproduced the status-quo — which they referred to as the \"hidden curriculum.\" This gave rise to a \"problem of (social) reproduction\" in which the institutions of society, like schools, churches, parents, media, law, etc., reproduce the existing society rather than producing fertile ground for a cultural and/or economic revolution.\n\nThe \"problem of reproduction\" was difficult to solve, and Marxists spent a long time banging their heads against their desks lamenting the fact that everyone was too stupid to see how miserable they really were; too stupid to see \"the truth\" of Critical Marxism. Paulo Freire's Pedagogy of the Oppressed and The Politics of Education were major turning points in solving it.\n\nFreire, a Brazilian Marxist and Liberation Theologian, believed that traditional education was just another way to keep the poor and oppressed in their place and created a Marxist theory of education and of knowing. Instead of teaching students how to succeed in society, he wanted education to become a tool of revolution. His ideas led to the rise of critical pedagogy — a form of teaching that encourages students to challenge authority, question all forms of power, and, essentially, become revolutionaries. Paulo Freire's methods offered the critical theorists a way to solve their problem of reproduction by allowing them to hide radicalizing material inside everyday academic curriculum.\n\nThis shift in thinking about education, from being a neutral place of learning to a place where students should be mobilized against \"oppressive\" systems, was just the beginning. Freire's ideas caught on in education schools across North America, and suddenly teaching wasn't about passing on knowledge; it was about creating social activists. More than that, teachers and students were now charged with \"joining History and theology\" into a \"prophetic vision of social justice\" that would \"create the Kingdom of God here on earth.\" (Quotes from Henry Giroux's foreword to The Politics of Education.)"
      },
      {
        heading: 'Postmodernism (Postmodern Marxism)',
        text: "While critical theory was busy making everything about power and oppression, postmodernism came along to undermine the very idea that there was any truth to fight for. Postmodernism, which became influential in the latter half of the 20th century, rejects the idea that there is such a thing as objective truth or meaning. Jean-François Lyotard, Jacques Derrida, and Michel Foucault claimed that all of our beliefs about truth, history, and identity were simply \"grand narratives\" — stories manufactured by powerful and privileged people in society designed to maintain the status-quo; the sheet pulled over everyone's eyes to blind them to the fact that their reality is built upon a mountain of shifting sands. What is a mountain, anyway?! Of course, they were merely reproducing Marx's critiques of what he called \"ideology\" in a slightly new way.\n\nLyotard, for instance, declared the \"end of grand narratives,\" meaning that we could no longer believe in the big stories that shaped Modern thought. Derrida went further by saying that language itself is unstable, and that words and symbols never have fixed meanings. This kind of thinking might seem abstract, silly, and easily relegated to some dark corner of the University, but when it makes its way into children's education it does real damage. If you tell students that there's no truth and that everything is up for interpretation, you leave them with nothing solid to hold onto; you leave them with only shifting sands underneath their feet; you leave them relying on \"experts\" who get to perceive their world for them.\n\nPostmodernism created a world where everything is questioned, but nothing is ever answered. This intellectual paralysis found its way into the classroom, making education less about learning and more about endlessly debating the meaning of everything, even the most basic facts of life. Postmodernism quite literally is the death of common-sense. It leads to the types of insane responses and outrage you get when you post something benign like \"water is wet\" or \"the sky is blue\" on X (Twitter)."
      },
      {
        heading: 'Critical Postmodernist Pedagogy',
        text: "At first glance, critical theory and postmodernism seem like they shouldn't mix. \"Very Smart People\" get rather upset when you suggest that the two have merged. Critical theory is all about exposing power structures and \"creating the Kingdom of God here on earth,\" which is really just \"social justice,\" while postmodernism says there's no such thing as stable meaning or truth. So, how can you mix a \"grand narrative\" [Critical Marxism] with a grand narrative destroyer, Postmodernism? The answer is rather straightforward: education schools. Enter \"critical postmodernist pedagogy.\" Why there? Because they had a problem (of reproduction) to \"fix,\" and they would pick up and use any tool they could to get it done. Because the two schools of thought ultimately come from the same source, Marxism, the task wasn't as hard as the \"Very Smart People\" assume.\n\nTo help us understand this delightful twist, we turn to world-renowned socialist educator Peter McLaren, a guy who wrote a whole lot about \"comrade Jesus\" in his book Pedagogy of Insurrection: From Resurrection to Revolution. McLaren realized that postmodernism's skepticism about truth and meaning threatened the ability of critical pedagogy — which stems from the Critical Theory tradition applied to education — to pursue \"social justice.\" After all, if there are no truths, how can we fight for justice? If everything is fake and made up in the service of power, how do we grab hold of anything?\n\nOn the surface, it would appear that playing with postmodernism was a surefire way to tether one's self (what is \"self\" anyway?!) to a rocket to nowhere, rather than tangible Marxist activism. Instead of rejecting postmodernism as a result, however, McLaren and his colleagues twisted it into something they could use. They added new receptor sites to Critical Theory so postmodernism could plug in. They argued that while postmodernism's critique of universal truths was valuable, it didn't mean abandoning the fight for social change. Instead, educators should embrace the uncertainty of the postmodern world while still pushing students to challenge power and work for social justice. Sure, there is no truth — except for oppression. Surely that exists, and if oppression exists then it can be used as a North Star for figuring out how to properly apply postmodernism to achieve one's revolutionary political goals.\n\n\"Critical postmodernist pedagogy\" therefore combines Paulo Freire and Henry Giroux's critical pedagogy with postmodern tools: a postmodern neo-Marxism for educational domains. It's a method of teaching students that their identities and realities are socially constructed and shaped by power dynamics, but at the same time encourages them to fight back against those very dynamics because one thing is for certain; oppression exists and humanity must be liberated from it. \"Oppression\" is the one grand narrative that can't be touched. It alone survives the postmodern impact; an escape hatch to hang on to Critical Theory as the dialectical engine of History while at the same time claiming that we can't really know the true nature of our reality, aside from the fact that the oppressed have a reality they must reveal to us so we can join them in revealing the Kingdom of God here on earth."
      },
      {
        heading: "Kincheloe's Critical Constructivism",
        text: "What McLaren and others began in the 1980s — merging critical theory with postmodernism — eventually evolved into what Joe Kincheloe later solidified with his theory of critical constructivism. In his 2005 book, Critical Constructivism: A Primer, Kincheloe took the groundwork laid by Freire, Giroux, and McLaren and codified it even further. He argued that education wasn't just about teaching students to critique the world around them; it was about helping them actively construct a new reality based on their own perceptions of social justice; based on their own \"concrete conditions\" and \"lived experience\" of reality.\n\nKincheloe's critical constructivism is built on the idea that there is no neutral way of seeing the world. He states, \"No truly objective way of seeing exists…what appears as objective reality is merely what our mind constructs.\" (Kincheloe, 2005, p. 8). According to this view, every fact, every piece of knowledge is filtered through our consciousness, which is shaped by the social forces and power dynamics around us. For Kincheloe, this means that education isn't about teaching students objective truths because, in his view, no such truths exist. Instead, teachers must awaken their students to the social constructions that influence their understanding of the world. Once this critical consciousness is awakened, students can begin the process of critically constructing a new, more just reality. Students can become \"world builders\" equipped with \"dangerous knowledge\" and an \"emancipatory source of authority.\"\n\nKincheloe wasn't satisfied with just teaching students to see the world as unjust — he wanted them to be empowered to take it apart and reconstruct it. In Critical Constructivism, he writes that teachers must \"become aware of the ways their own identities and views of the world have been shaped by power relations.\" Only once this critical self-awareness is developed, he argues, can educators help their students awaken to the social forces shaping their lives. This process of awakening, or developing critical consciousness, turns teachers into critical constructivists — educators who actively work to transform their students into Marxist revolutionaries.\n\nOf course, this is the same process of self-transformation Paulo Freire said is required of all teachers (and priests and pastors) and compared to living through a personal Easter of death and rebirth on the side of the oppressed (The Politics of Education, chapter 10). It is also the \"qualitative change\" in every individual demanded by the most influential of the Critical Marxists, Herbert Marcuse, throughout his writings — this being for Marcuse what makes socialism possible. It is also the \"complete return of man to his social (i.e., human) nature\" according to Marx in his 1844 Economic and Philosophic Manuscripts. In the Marxist religion, there's nothing new under the sun!\n\nKincheloe's critical constructivism builds directly on McLaren's earlier work by adding a layer of (postmodernist) constructivist theory, which argues that individuals actively construct knowledge through their interactions with the world. By merging this with critical theory, Kincheloe pushes the idea that not only must students challenge power structures, but they must also understand how their own perceptions and beliefs are constructed by those very structures. This \"worldview,\" according to Kincheloe, is \"a theory of how humans learn, a unified system that includes epistemology, cognition, and the nature of human existence.\" (Kincheloe, 2005, p. 7). As noted, Kincheloe's contributions aren't really contributions at all. He understood Paulo Freire's program deeply and the Marxism behind it. There is nothing new added here that Paulo Freire himself did not argue himself. Kincheloe simply provided a more accurate translation in plainspoken English."
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

const feedbackTypes = [
  { v: 'suggestion', l: '💡 Suggestion' },
  { v: 'error', l: '📝 Error Report' },
  { v: 'feature', l: '⚡ Feature Idea' },
  { v: 'praise', l: '❤️ Love It' },
  { v: 'other', l: '💬 Other' },
];

export default function CommunityClient() {
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
                <p className="text-sm font-semibold mb-2" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>Essay Received!</p>
                <p className="text-xs mb-4" style={{ color: '#8a7a6a' }}>We&apos;ll review your submission and get back to you within two weeks.</p>
                <button onClick={() => setEssayStatus(null)} className="text-xs underline" style={{ color: '#c0a172' }}>Submit another</button>
              </div>
            ) : (
              <>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif" }}>
                  We welcome original essays on any philosophical topic. Published essays appear on PhilosophyMe for the community to read and discuss.
                </p>

                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2" style={{ color: '#c0a172', fontFamily: "var(--font-playfair), serif" }}>Guidelines</p>
                  <div className="space-y-1.5">
                    {[
                      { label: 'Length', detail: '800 \u2013 2,500 words' },
                      { label: 'Tone', detail: 'Accessible — write for curious minds, not journals' },
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
                  <p className="text-sm font-semibold mb-2" style={{ color: '#f4f4f4', fontFamily: "var(--font-playfair), serif" }}>Thanks for your feedback!</p>
                  <p className="text-xs mb-4" style={{ color: '#8a7a6a' }}>Your message has been received. I appreciate you taking the time.</p>
                  <button onClick={() => setFeedbackStatus(null)} className="text-xs underline" style={{ color: '#c0a172' }}>Send another</button>
                </div>
              ) : (
                <>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#b0a090', fontFamily: "var(--font-crimson), serif" }}>
                    Found an error? Have a suggestion? Want to see a philosopher added? I read every message.
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
              <span style={{ color: '#c0a172', fontWeight: 600 }}>A note from Logan:</span> I built PhilosophyMe because I believe philosophy should be free and accessible to everyone. Your feedback, essays, and support are what keep this project alive. Don&apos;t hesitate to reach out {'—'} I answer every message personally.
            </p>
          </div>
        </div>
      </div>

      {/* ── PUBLISHED ESSAYS ── */}
      <div className="mt-16">
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
                      <span className="text-sm" style={{ color: '#c0a172', fontFamily: "var(--font-crimson), serif" }}>{essay.author}</span>
                      <span style={{ color: '#5a5040' }}>{'·'}</span>
                      <span className="text-sm" style={{ color: '#78909c', fontFamily: "var(--font-crimson), serif" }}>{essay.date}</span>
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
                        {essay.author.split(' ').map(w => w[0]).join('')}
                      </div>
                      <div>
                        <p className="text-sm font-semibold" style={{ color: '#f4f4f4' }}>{essay.author}</p>
                        <p className="text-xs" style={{ color: '#78909c' }}>{essay.bio}</p>
                      </div>
                    </div>

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
                        The views expressed in guest essays are those of the author and do not necessarily reflect the views of PhilosophyMe.
                      </p>
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
