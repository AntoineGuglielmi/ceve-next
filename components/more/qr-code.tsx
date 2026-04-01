'use client'

import { useQRCode } from 'next-qrcode'

type QrCodeProps = {
  link: string
  darkColor?: string
  lightColor?: string
}

export default function QrCode({
  link,
  darkColor = '#e0aa7bff',
  lightColor = '#e0aa7b00',
}: QrCodeProps) {
  const { Canvas } = useQRCode()
  return (
    <Canvas
      text={link}
      options={{
        errorCorrectionLevel: 'M',
        margin: 1,
        scale: 2,
        color: {
          dark: darkColor,
          light: lightColor,
        },
      }}
    />
  )
}
