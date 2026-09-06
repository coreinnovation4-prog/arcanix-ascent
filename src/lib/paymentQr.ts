import dhayalanQr from "@/assets/upi-qr-dhayalan.jpg.asset.json";
import vinishkaQr from "@/assets/upi-qr-vinishka.jpg.asset.json";

export type PaymentQr = {
  id: string;
  holder: string;
  upiId: string;
  url: string;
};

/** Day 1 of the symposium always opens on the first QR. */
export const EVENT_DAY_ONE = "2026-09-07";

/** Rotation order — a new QR takes over after every CLICKS_PER_QR registrations. */
export const paymentQrs: PaymentQr[] = [
  { id: "dhayalan", holder: "Dhayalan B", upiId: "dhayalanb2@okhdfcbank", url: dhayalanQr.url },
  { id: "vinishka", holder: "Vinishka G", upiId: "vinika03042006@oksbi", url: vinishkaQr.url },
];

export const CLICKS_PER_QR = 30;

export const localDateKey = (date = new Date()) => {
  const y = date.getFullYear();
  const m = `${date.getMonth() + 1}`.padStart(2, "0");
  const d = `${date.getDate()}`.padStart(2, "0");
  return `${y}-${m}-${d}`;
};

const storageKey = (dateKey: string) => `exclade:reg-clicks:${dateKey}`;

export const readClicks = (dateKey = localDateKey()): number => {
  if (typeof window === "undefined") return 0;
  const raw = window.localStorage.getItem(storageKey(dateKey));
  const parsed = raw ? Number.parseInt(raw, 10) : 0;
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
};

export const recordClick = (dateKey = localDateKey()): number => {
  const next = readClicks(dateKey) + 1;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(storageKey(dateKey), String(next));
  }
  return next;
};

/** Days elapsed since day 1 (0 for day 1, never negative). */
const dayOffset = (dateKey: string) => {
  const diff = Date.parse(dateKey) - Date.parse(EVENT_DAY_ONE);
  if (!Number.isFinite(diff)) return 0;
  return Math.max(0, Math.floor(diff / 86_400_000));
};

/**
 * Day 1 starts on the first QR. Each new day advances one step, and within a
 * day the QR advances once more for every 30 registration clicks.
 */
export const qrForState = (dateKey: string, clicks: number): PaymentQr => {
  const step = dayOffset(dateKey) + Math.floor(clicks / CLICKS_PER_QR);
  return paymentQrs[step % paymentQrs.length]!;
};
