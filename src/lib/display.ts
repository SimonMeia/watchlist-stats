export function getFormattedDuration(minutes: number): string {
  minutes = Math.round(minutes)
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60

  const formattedHours = hours.toString().padStart(2, '0')
  const formattedMinutes = remainingMinutes.toString().padStart(2, '0')

  return `${formattedHours}h ${formattedMinutes}m`
}
