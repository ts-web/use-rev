# use-rev

A revision counter React hook.

This hook returns a number (a revision), and a function to increment the revision (the bump function).

- The revision is guaranteed to always be truthy. 
- If the revision reaches `Number.MAX_SAFE_INTEGER`, it wraps back to `1`.
- The bump function is memoized with `useCallback` and will never change.


## Installation

```
npm i use-rev
```

## Usage

```tsx
import { useRev } from 'use-rev';

// (inside a React component)
const [rev, bumpRev] = useRev();
```
