export default function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-gold/20 px-6 py-4 text-center md:border-l first:md:border-l-0">
      <div className="font-serif text-5xl text-gold-light">{value}</div>
      <p className="mt-2 text-sm text-ivory">{label}</p>
    </div>
  );
}
