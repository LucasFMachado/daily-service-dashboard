import {
  Hydrate as HydrationBoundary,
  HydrateProps,
} from '@tanstack/react-query'

export function Hydrate(props: HydrateProps) {
  return <HydrationBoundary {...props} />
}
