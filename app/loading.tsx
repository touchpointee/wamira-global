import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-obsidian">
      {/* Background luxury radial highlight */}
      <div className="absolute inset-0 bg-luxury-radial opacity-80 pointer-events-none" />
      
      <div className="relative flex flex-col items-center justify-center">
        {/* Elegant Slow-Spinning Ring */}
        <div className="absolute h-36 w-36 rounded-full border-t-2 border-r-[1px] border-gold/40 animate-spin-slow" />
        <div className="absolute h-[136px] w-[136px] rounded-full border-b-[1px] border-l-2 border-gold-light/20 animate-spin-slow [animation-direction:reverse] [animation-duration:12s]" />

        {/* Brand Logo with Gentle Pulse */}
        <div className="relative h-24 w-24 overflow-hidden animate-pulse-gentle">
          <Image
            src="/images/logo.png"
            alt="Wamira Global Logo"
            fill
            priority
            sizes="96px"
            className="object-contain"
          />
        </div>
      </div>

      {/* Brand Subtitle and Loading Text */}
      <div className="mt-10 flex flex-col items-center text-center">
        <h2 className="font-serif text-lg tracking-[0.24em] text-gold-light uppercase">
          Wamira Global
        </h2>
        <p className="mt-2 text-[10px] font-bold tracking-[0.35em] text-muted uppercase">
          Private Office & Concierge
        </p>
      </div>
    </div>
  );
}
