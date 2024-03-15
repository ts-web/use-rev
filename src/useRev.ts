import { useCallback, useState } from 'react';


/**
 * A React hook revision counter.
 *
 * Returns `[rev, bumpRev]`, which is the revision and a function to bump the revision.
 *
 * When `Number.MAX_SAFE_INTEGER` is reached, the revision cycles back to 1.
 *
 * The revision is always truthy (never 0).
 */
export function useRev () {
  const [rev, setRev] = useState(1);

  const bumpRev = useCallback(() => {
    setRev((_rev) => {
      if (_rev === Number.MAX_SAFE_INTEGER) return 1;
      return _rev + 1;
    });
  }, []);

  return [rev, bumpRev] as const;
}
