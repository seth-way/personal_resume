import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type ErrorWithMessage = {
  message: string;
};

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
}

function toErrorWithMessage(maybeError: unknown): ErrorWithMessage {
  if (isErrorWithMessage(maybeError)) return maybeError;

  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    // fallback in case there's an error stringifying the maybeError
    // like with circular references for example.
    return new Error(String(maybeError));
  }
}

export function getErrorMessage(error: unknown) {
  return toErrorWithMessage(error).message;
}

function validateEmail(unknown: string) {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(unknown);
}

type ValueType = string | number | readonly string[] | undefined;

export function validateInput(
  unknown: ValueType,
  type: string | undefined = undefined
): boolean {
  // undefined, numbers and empty strings are invalid
  if (typeof unknown === 'undefined') return false;
  if (typeof unknown === 'number') return false;
  if (!unknown.length) return false;
  // validate emails
  if (type === 'email' && !validateEmail(unknown.toString())) return false;
  return true;
}

type FormValues = {
  name: ValueType;
  email: ValueType;
  subject: ValueType;
  message: ValueType;
};

export function validateAllFormFields(values: FormValues): boolean {
  return Object.entries(values).reduce(
    (validator, [key, value]) => validateInput(value, key) && validator,
    true
  );
}

// create default screen size values
const screenKeys = Array.from({ length: 20 }, (_, i) => i * 5);
export const screenSizes = screenKeys.reduce(
  (v, key) => Object.assign(v, { [key]: key }),
  {}
);

// A throttle function that takes a function and an interval as parameters
export const throttle = (fn: Function, wait: number = 300) => {
  let inThrottle: boolean,
    lastFn: ReturnType<typeof setTimeout>,
    lastTime: number;
  return function (this: any) {
    const context = this,
      args = arguments;
    if (!inThrottle) {
      fn.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(() => {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};
