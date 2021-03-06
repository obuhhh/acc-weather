export function useDebounce<F extends (...params: any[]) => void>(fn: F, delay: number) {
  let timeoutID: number | null = null
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutID as number)
    timeoutID = window.setTimeout(() => fn.apply(this, args), delay)
  } as F
}
