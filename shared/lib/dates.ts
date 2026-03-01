export const formatToYYMMDD = (isoDate: string): string => {
  const d = new Date(isoDate)

  const yy = String(d.getUTCFullYear()).slice(-2)
  const mm = String(d.getUTCMonth() + 1).padStart(2, '0')
  const dd = String(d.getUTCDate()).padStart(2, '0')

  return `${yy}${mm}${dd}`
}
