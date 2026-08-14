import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { ArcaneButton } from "./ArcaneButton";
import videoAsset from "@/assets/arcanix-entrance.mp4.asset.json";
import posterAsset from "@/assets/arcanix-poster.jpg.asset.json";
import { brand } from "@/data/arcanix";

type Props = { onEnter: () => void; muted: boolean; onToggleSound: () => void };

export function CinematicEntry({ onEnter, muted, onToggleSound }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [igniting, setIgniting] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = muted;
    const p = v.play();
    if (p && typeof p.catch === "function") p.catch(() => setVideoFailed(true));
  }, [muted]);

  const ignite = () => {
    if (igniting) return;
    setIgniting(true);
    const v = videoRef.current;
    if (v) {
      v.playbackRate = 1.6;
      v.style.transform = "scale(1.18)";
    }
    window.setTimeout(onEnter, 1150);
  };

  return (
    <motion.section
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      aria-label="ARCANIX 2K26 cinematic entry"
      className="fixed inset-0 z-[70] overflow-hidden bg-background"
    >
      {!videoFailed && (
        <video
          ref={videoRef}
          className="absolute inset-0 size-full object-cover object-[62%_center] transition-transform duration-[1200ms] ease-out sm:object-center"
          src={videoAsset.url}
          poster={posterAsset.url}
          autoPlay
          loop
          muted={muted}
          playsInline
          preload="auto"
          disablePictureInPicture
          controls={false}
          tabIndex={-1}
          aria-hidden
          onError={() => setVideoFailed(true)}
        />
      )}
      {videoFailed && (
        <img
          src={posterAsset.url}
          alt=""
          aria-hidden
          className="absolute inset-0 size-full object-cover object-[62%_center] sm:object-center"
        />
      )}

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/45 to-background/95"
      />
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,transparent_20%,var(--background)_100%)] opacity-70" />

      <div className="absolute left-4 top-5 sm:left-8 sm:top-7">
        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <p className="font-display text-sm tracking-[0.34em] text-gold-gradient sm:text-base">{brand.name}</p>
          <p className="label-caps mt-1.5 text-[0.55rem] sm:text-[0.62rem]">The Arcane Ascension</p>
        </motion.div>
      </div>

      <button
        type="button"
        onClick={onToggleSound}
        aria-label={muted ? "Enable ambient sound" : "Mute ambient sound"}
        className="absolute right-4 top-5 grid size-10 place-items-center rounded-full border border-gold/50 bg-background/50 text-gold backdrop-blur transition-colors hover:border-gold sm:right-8 sm:top-7"
      >
        {muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
      </button>

      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.6em" }}
          animate={{ opacity: 1, letterSpacing: "0.34em" }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="label-caps text-[0.6rem] sm:text-xs"
        >
          Welcome, Aspirant
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 font-display text-3xl leading-[1.15] text-gold-gradient sm:text-5xl lg:text-6xl"
        >
          The Journey Begins.
          <br />
          The Legacy Awaits.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-6 max-w-md font-serif text-sm italic text-foreground/75 sm:max-w-xl sm:text-base"
        >
          “In a world where knowledge is power, only the determined will ascend.”
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-12"
        >
          <ArcaneButton onClick={ignite} className="px-9 py-4 text-xs sm:px-12 sm:py-5 sm:text-sm">
            Enter the Arena
          </ArcaneButton>
        </motion.div>
      </div>

      {igniting && (
        <>
          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.9, 0], scale: 14 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="pointer-events-none absolute left-1/2 top-[62%] size-40 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gold/70 bg-arcane/25 blur-[2px]"
          />
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.1, 1] }}
            transition={{ duration: 1.1, times: [0, 0.45, 0.7, 1] }}
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-arcane/60 via-gold/40 to-background"
          />
        </>
      )}
    </motion.section>
  );
}
