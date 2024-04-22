type motionProps = {
  direction?: "left" | "right" | "up" | "down",
  type?: "spring" | "tween",
  delay?: number,
  duration?: number,
}

export const navariant = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.5,
      duration: 0.3,
    },
  },
};

export const fadeIn = ({ direction, type, delay, duration }: motionProps) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay: delay ? delay : 0,
      duration: duration ? duration : 0.3,
      ease: "easeInOut",
    },
  },
});


export const slideIn = ({ direction, type, delay, duration }: motionProps) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "-100%" : direction === "down" ? "100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay: delay ? delay : 0,
      duration: duration ? duration : 0.3,
      ease: "easeOut",
    },
  },
});

export const staggerContainer = ({ type }: motionProps, staggerChildren: number) => ({
  hidden: {
  },
  show: {
    transition: {
      type,
      staggerChildren,
    },
  },
});

export const slideSoft = ({ direction }: motionProps) => ({
    hidden: {
        opacity: 0,
        x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
        y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
    },
    show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            type: "spring",
            ease: "easeIn"
        }
    }
})

  export const textContainer = {
    hidden: {
      opacity: 0,
    },
    show: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
    }),
  };

  export const textVariant2 = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        type: 'tween',
        ease: 'easeIn',
      },
    },
  };