# @dubaua/type-helpers

Minimal zero-runtime TypeScript utils for extracting unions from arrays, maps and record-like types. No build, no dependencies, pure type-level helpers.

## Installation

```sh
npm install -D @dubaua/type-helpers
```

## Utilities

`ExtractTypeMapUnion<T>`

Extracts the union of all value types from a record-like type.

```ts
import { ExtractTypeMapUnion } from '@dubaua/type-helpers';

type Map = {
  a: { id: 1 };
  b: { id: 2 };
  c: { id: 3 };
};

type Result = ExtractTypeMapUnion<Map>;
// { id: 1 } | { id: 2 } | { id: 3 }
```

`ExtractLiteralMapUnionType<T>`

Extracts the union of all value types from a readonly literal map.

```ts
import { ExtractLiteralMapUnionType } from '@dubaua/type-helpers';

const colors = {
  red: '#f00',
  green: '#0f0',
  blue: '#00f',
} as const;

type ColorHex = ExtractLiteralMapUnionType<typeof colors>;
// "#f00" | "#0f0" | "#00f"
```

`ExtractArrayUnionType<T>`

Extracts the element union from a readonly tuple or array type.

```ts
import { ExtractArrayUnionType } from '@dubaua/type-helpers';

const roles = ['admin', 'editor', 'viewer'] as const;

type Role = ExtractArrayUnionType<typeof roles>;
// "admin" | "editor" | "viewer"
```
