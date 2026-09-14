import type { en } from './en';

/**
 * `en.ts` is declared `as const`, so every string in it has a *literal* type
 * ("Free", "Get started", ...). Typing a translation file as `typeof en` would
 * therefore demand that the Romanian copy be character-identical to the
 * English — unsatisfiable, and the reason `astro check` reported ~500 errors
 * in `ro.ts`.
 *
 * `Widen` keeps the shape (and the readonly-ness of the `as const` arrays)
 * while relaxing the leaves back to `string` / `number` / `boolean`, so a
 * translation must match the *structure* of `en` but not its wording.
 */
export type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : { readonly [K in keyof T]: Widen<T[K]> };

export type Translations = Widen<typeof en>;
