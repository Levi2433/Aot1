import { useEffect } from "react";

export function useFadeIn() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-in-up");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export function useBarAnimation() {
  useEffect(() => {
    const fills = document.querySelectorAll(".bar-fill");
    if (!fills.length) return;

    fills.forEach((f) => {
      const w = f.getAttribute("data-width");
      f.style.width = "0";
      f.dataset.targetWidth = w;
    });

    const io2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => {
              e.target.style.width = e.target.dataset.targetWidth;
            }, 100);
            io2.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    fills.forEach((f) => io2.observe(f));
    return () => io2.disconnect();
  }, []);
}

export function useWallParallax() {
  useEffect(() => {
    const walls = document.querySelectorAll(".wall");
    if (!walls.length) return;
    const handler = () => {
      const y = window.scrollY;
      if (walls[0]) walls[0].style.transform = `translateY(${y * 0.03}px)`;
      if (walls[1]) walls[1].style.transform = `translateY(${y * 0.06}px)`;
      if (walls[2]) walls[2].style.transform = `translateY(${y * 0.10}px)`;
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
}