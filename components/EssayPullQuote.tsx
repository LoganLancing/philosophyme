interface Props {
  text: string;
  author: string;
}

export default function EssayPullQuote({ text, author }: Props) {
  return (
    <blockquote className="my-8 py-6 px-8 relative" style={{ borderLeft: '3px solid rgba(192,161,114,0.4)' }}>
      <p className="text-xl italic leading-relaxed" style={{ color: '#d3b9a3', fontFamily: 'var(--font-cormorant), serif', lineHeight: 1.65 }}>
        &ldquo;{text}&rdquo;
      </p>
      <cite className="block mt-3 text-sm not-italic" style={{ color: '#c0a172', fontFamily: 'var(--font-crimson), serif' }}>
        — {author}
      </cite>
    </blockquote>
  );
}
