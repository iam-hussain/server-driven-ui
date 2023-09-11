import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomInt(min = 100000000, max = 999999999) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomId(prefix = "", suffix = ""): string {
  const randomString = getRandomInt().toString(16);

  if (prefix && suffix) {
    return `${prefix}_${randomString}_${suffix}`;
  }

  if (prefix) {
    return `${prefix}_${randomString}`;
  }

  if (suffix) {
    return `${randomString}_${suffix}`;
  }

  return randomString;
}
