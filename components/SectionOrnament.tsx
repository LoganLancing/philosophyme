interface Props {
  className?: string;
}

export default function SectionOrnament({ className = '' }: Props) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="gold-line flex-1" />
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ opacity: 0.4, flexShrink: 0 }}>
        <path d="M8 1l1.8 5.4H15l-4.2 3.1 1.6 5-4.4-3.2-4.4 3.2 1.6-5L1 6.4h5.2L8 1z" fill="#c0a172" />
      </svg>
      <div className="gold-line flex-1" />
    </div>
  );
}
