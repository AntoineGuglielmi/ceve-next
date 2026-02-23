'use client'

import { useQRCode } from 'next-qrcode'

type QrCodeProps = {
  link: string
}

export default function QrCode({ link }: QrCodeProps) {
  const { Canvas } = useQRCode()
  return (
    <Canvas
      text={'https://antoine-g.com'}
      options={{
        errorCorrectionLevel: 'M',
        margin: 1,
        scale: 2,
        color: {
          dark: '#e0aa7bff',
          light: '#e0aa7b00',
        },
      }}
    />
  )
}
