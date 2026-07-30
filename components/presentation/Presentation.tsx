"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { slides } from "@/components/slides/Slides";

const LAST_SLIDE = slides.length - 1;

function clampSlide(value: number) {
  return Math.max(0, Math.min(LAST_SLIDE, value));
}

function slideFromUrl() {
  if (typeof window === "undefined") return 0;
  const raw = new URLSearchParams(window.location.search).get("slide");
  const parsed = raw === null ? 0 : Number.parseInt(raw, 10);
  return Number.isFinite(parsed) ? clampSlide(parsed) : 0;
}

export function Presentation() {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const goTo = useCallback((next: number, history: "push" | "replace" = "push") => {
    const safe = clampSlide(next);
    setCurrent(safe);

    const url = new URL(window.location.href);
    if (safe === 0) {
      url.searchParams.delete("slide");
    } else {
      url.searchParams.set("slide", String(safe));
    }
    window.history[history === "push" ? "pushState" : "replaceState"](
      { slide: safe },
      "",
      `${url.pathname}${url.search}${url.hash}`,
    );
  }, []);

  const previous = useCallback(() => {
    setCurrent((value) => {
      const safe = clampSlide(value - 1);
      const url = new URL(window.location.href);
      if (safe === 0) url.searchParams.delete("slide");
      else url.searchParams.set("slide", String(safe));
      window.history.pushState({ slide: safe }, "", `${url.pathname}${url.search}`);
      return safe;
    });
  }, []);

  const next = useCallback(() => {
    setCurrent((value) => {
      const safe = clampSlide(value + 1);
      const url = new URL(window.location.href);
      url.searchParams.set("slide", String(safe));
      window.history.pushState({ slide: safe }, "", `${url.pathname}${url.search}`);
      return safe;
    });
  }, []);

  useEffect(() => {
    setCurrent(slideFromUrl());
    const handlePopState = () => setCurrent(slideFromUrl());
    const handleFullscreen = () => setIsFullscreen(Boolean(document.fullscreenElement));
    window.addEventListener("popstate", handlePopState);
    document.addEventListener("fullscreenchange", handleFullscreen);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("fullscreenchange", handleFullscreen);
    };
  }, []);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable
      ) {
        return;
      }

      if (["ArrowRight", " ", "PageDown"].includes(event.key)) {
        event.preventDefault();
        next();
      } else if (["ArrowLeft", "Backspace", "PageUp"].includes(event.key)) {
        event.preventDefault();
        previous();
      } else if (event.key === "Home") {
        event.preventDefault();
        goTo(0);
      } else if (event.key === "End") {
        event.preventDefault();
        goTo(LAST_SLIDE);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goTo, next, previous]);

  const toggleFullscreen = async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch {
      // Fullscreen is optional and may be blocked by the embedding browser.
    }
  };

  const onTouchStart = (event: React.TouchEvent) => {
    const touch = event.changedTouches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const onTouchEnd = (event: React.TouchEvent) => {
    if (!touchStart.current) return;
    const touch = event.changedTouches[0];
    const dx = touch.clientX - touchStart.current.x;
    const dy = touch.clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.25) {
      if (dx < 0) next();
      else previous();
    }
  };

  const positionLabel =
    current === 0 ? "Opening" : current === LAST_SLIDE ? "Closing" : `Slide ${current}`;

  return (
    <main
      className="presentation"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-label="Money, Investing and Self-Control presentation"
    >
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <div className="brand-mark" aria-label="Scout money lab">
        <span className="brand-compass" aria-hidden="true">✦</span>
        <span>SCOUT MONEY LAB</span>
      </div>

      <section
        className="slide-stage"
        aria-live="polite"
        aria-label={`${positionLabel} of ${LAST_SLIDE - 1} lecture slides`}
      >
        <div className="slide-key" key={current}>
          {slides[current]}
        </div>
      </section>

      <nav className="navigation" aria-label="Presentation controls">
        <div className="slide-position">
          <span className="position-name">{positionLabel}</span>
          <span className="position-count">
            {String(current + 1).padStart(2, "0")} / {slides.length}
          </span>
        </div>

        <div className="nav-buttons">
          <button
            className="icon-button"
            onClick={previous}
            disabled={current === 0}
            aria-label="Previous slide"
            title="Previous slide (Left arrow)"
          >
            <ArrowIcon direction="left" />
          </button>
          <button
            className="icon-button"
            onClick={next}
            disabled={current === LAST_SLIDE}
            aria-label="Next slide"
            title="Next slide (Right arrow)"
          >
            <ArrowIcon direction="right" />
          </button>
          <span className="nav-divider" aria-hidden="true" />
          <button
            className="icon-button"
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            <FullscreenIcon active={isFullscreen} />
          </button>
        </div>
      </nav>

      <div className="progress-track" aria-hidden="true">
        <div
          className="progress-value"
          style={{ width: `${((current + 1) / slides.length) * 100}%` }}
        />
      </div>
    </main>
  );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d={direction === "left" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
      />
    </svg>
  );
}

function FullscreenIcon({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d={
          active
            ? "M9 4v5H4m11-5v5h5M9 20v-5H4m11 5v-5h5"
            : "M8 3H3v5m13-5h5v5M8 21H3v-5m13 5h5v-5"
        }
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
