import { Theme, ThemeOptions } from '@mui/material'

type ThemeComponents = NonNullable<ThemeOptions['components']>
type Overrides<T extends keyof ThemeComponents> = ThemeComponents[T]

export type OverrideFunction<T extends keyof ThemeComponents> = (theme: Theme) => Overrides<T>
