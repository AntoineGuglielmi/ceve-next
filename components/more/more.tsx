'use client'

import { useQRCode } from 'next-qrcode'
import Section from '../section/section'
import SectionTitle from '../section/section-title'

type MoreProps = {
  className?: string
  children?: React.ReactNode
}

export default function More({ className }: MoreProps) {
  const { Canvas } = useQRCode()

  return (
    <Section className={`More ${className ?? ''}`}>
      <SectionTitle highlighted>More ?</SectionTitle>
      <div className="More__content flex gap-4">
        <p>You can find more informations by scanning the followindg QRCode</p>
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
      </div>
    </Section>
  )
}
