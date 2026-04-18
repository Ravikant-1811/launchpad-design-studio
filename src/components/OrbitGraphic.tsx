import { motion } from "framer-motion";

export const OrbitGraphic = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative aspect-square ${className}`}>
      {/* Outer orbit ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-primary/40"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {/* Orbit nodes */}
        <span className="absolute -top-2 left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-primary shadow-glow" />
        <span className="absolute top-1/2 -right-2 -translate-y-1/2 h-3 w-3 rounded-full bg-primary" />
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-primary" />
        <span className="absolute top-1/2 -left-2 -translate-y-1/2 h-4 w-4 rounded-full bg-primary shadow-glow" />
      </motion.div>

      {/* Tilted ring (Saturn-like) */}
      <motion.div
        className="absolute inset-[6%] rounded-full border-2 border-secondary/60"
        style={{ transform: "rotateX(70deg) rotateZ(20deg)" }}
        animate={{ rotateZ: [20, 380] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      {/* Inner counter-rotating ring */}
      <motion.div
        className="absolute inset-[14%] rounded-full border border-dashed border-primary/30"
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-secondary" />
        <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 h-2 w-2 rounded-full bg-secondary" />
      </motion.div>

      {/* Core */}
      <motion.div
        className="absolute inset-[28%] rounded-full bg-secondary flex items-center justify-center shadow-elegant"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-1/2 w-1/2 rounded-full bg-gradient-orange shadow-glow" />
      </motion.div>

      {/* Ambient glow */}
      <div className="absolute inset-[-10%] rounded-full bg-primary/10 blur-3xl -z-10 animate-pulse-glow" />
    </div>
  );
};
