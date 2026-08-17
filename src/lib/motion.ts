export const springTap = {
  type: "spring" as const,
  stiffness: 500,
  damping: 22,
  mass: 0.6,
};

export const tapScale = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.96 },
  transition: springTap,
};
