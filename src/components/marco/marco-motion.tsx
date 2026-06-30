"use client";

import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

export const easeOut = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: easeOut },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: easeOut },
  },
};

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.04 },
  },
};

const SCROLL_OFFSET = 72;

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.75, ease: easeOut, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Remounts on locale change; uses useInView so in-viewport content stays visible after language switch. */
export function MarcoStaggerReveal({
  locale,
  children,
  className,
  margin = "-80px",
}: {
  locale: string;
  children: ReactNode;
  className?: string;
  margin?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <MarcoStaggerRevealInner key={locale} className={className} margin={margin}>
      {children}
    </MarcoStaggerRevealInner>
  );
}

function isElementInViewport(el: HTMLElement, marginPx: number) {
  const rect = el.getBoundingClientRect();
  const top = marginPx;
  const bottom = window.innerHeight - marginPx;
  return rect.bottom > top && rect.top < bottom;
}

function MarcoStaggerRevealInner({
  children,
  className,
  margin,
}: {
  children: ReactNode;
  className?: string;
  margin: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const marginPx = Math.abs(parseInt(margin, 10) || 0);
  const isInView = useInView(ref, { margin: margin as `${number}px` });
  const [visibleOnMount, setVisibleOnMount] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (el && isElementInViewport(el, marginPx)) {
      setVisibleOnMount(true);
    }
  }, [marginPx]);

  const show = visibleOnMount || isInView;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={show ? "visible" : "hidden"}
      variants={stagger}
    >
      {children}
    </motion.div>
  );
}

/** Single-block fade for locale-sensitive content (e.g. experience segments). */
export function MarcoFadeReveal({
  locale,
  children,
  className,
  margin = "-64px",
}: {
  locale: string;
  children: ReactNode;
  className?: string;
  margin?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <MarcoFadeRevealInner key={locale} className={className} margin={margin}>
      {children}
    </MarcoFadeRevealInner>
  );
}

function MarcoFadeRevealInner({
  children,
  className,
  margin,
}: {
  children: ReactNode;
  className?: string;
  margin: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const marginPx = Math.abs(parseInt(margin, 10) || 0);
  const isInView = useInView(ref, { margin: margin as `${number}px` });
  const [visibleOnMount, setVisibleOnMount] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (el && isElementInViewport(el, marginPx)) {
      setVisibleOnMount(true);
    }
  }, [marginPx]);

  const show = visibleOnMount || isInView;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.75, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}
