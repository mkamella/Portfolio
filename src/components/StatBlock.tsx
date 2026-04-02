export interface StatBlockProps {
  value: string
  label: string
}

export default function StatBlock({ value, label }: StatBlockProps) {
  return (
    <div className="flex-1 bg-cream rounded-md border border-subtle p-4 group hover:border-accent hover:bg-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 cursor-default">
      <p className="font-black text-2xl text-ink tracking-tighter group-hover:text-accent transition-colors">{value}</p>
      <p className="text-[9px] text-muted uppercase tracking-widest mt-1">{label}</p>
    </div>
  )
}
