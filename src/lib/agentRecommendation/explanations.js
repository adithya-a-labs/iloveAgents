export function getGroundedReasons(result) {
  return (result.reasons || [])
    .filter(Boolean)
    .slice(0, 4)
}
