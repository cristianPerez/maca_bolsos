import { useEffect, useState } from "react";

const DURATION_MS = 24 * 60 * 60 * 1000;
const STORAGE_KEY = "maca_offer_deadline";

function getDeadline() {
  const stored = localStorage.getItem(STORAGE_KEY);
  const now = Date.now();

  if (stored && Number(stored) > now) {
    return Number(stored);
  }

  const deadline = now + DURATION_MS;
  localStorage.setItem(STORAGE_KEY, String(deadline));
  return deadline;
}

export function useCountdown() {
  const [deadline, setDeadline] = useState(() =>
    typeof window !== "undefined" ? getDeadline() : Date.now() + DURATION_MS
  );
  const [timeLeft, setTimeLeft] = useState(deadline - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = deadline - Date.now();

      if (diff <= 0) {
        const newDeadline = Date.now() + DURATION_MS;
        localStorage.setItem(STORAGE_KEY, String(newDeadline));
        setDeadline(newDeadline);
        setTimeLeft(DURATION_MS);
        return;
      }

      setTimeLeft(diff);
    }, 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  const totalSeconds = Math.max(0, Math.floor(timeLeft / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (n) => String(n).padStart(2, "0");

  return {
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
  };
}
