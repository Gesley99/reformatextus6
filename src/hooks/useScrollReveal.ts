import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const children = el.querySelectorAll(".scroll-reveal");
    if (children.length > 0) {
      children.forEach((child) => observer.observe(child));
    } else {
      el.classList.add("scroll-reveal");
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

export function useStaggerReveal<T extends HTMLElement = HTMLDivElement>(staggerMs = 80) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = el.querySelectorAll(".scroll-reveal");
    children.forEach((child, i) => {
      (child as HTMLElement).style.transitionDelay = `${i * staggerMs}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".scroll-reveal");
            items.forEach((item) => item.classList.add("revealed"));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [staggerMs]);

  return ref;
}
