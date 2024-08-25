[![npm version](https://img.shields.io/npm/v/use-rev.svg)](https://www.npmjs.com/package/use-rev)
[![Downloads](https://img.shields.io/npm/dm/use-rev.svg)](https://www.npmjs.com/package/use-rev)
![Uses TypeScript](https://img.shields.io/badge/Uses-Typescript-294E80.svg)


# use-rev

A revision counter React hook.

This hook returns a number (a revision), and a function to increment the revision (the bump function).

- The revision is guaranteed to always be truthy. 
- If the revision reaches `Number.MAX_SAFE_INTEGER`, it wraps back to `1`.
- The bump function is memoized with `useCallback` and will never change.


## Usage

```tsx
import { useRev } from 'use-rev';

// (inside a React component)
const [rev, bumpRev] = useRev();
```
