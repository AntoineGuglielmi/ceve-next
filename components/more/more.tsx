'use client'

import { useQRCode } from 'next-qrcode'
import Section from '../section/section'
import SectionTitle from '../section/section-title'

type MoreProps = {
  className?: string
  children?: React.ReactNode
}

export default function More({ className, children }: MoreProps) {
  const { Canvas } = useQRCode()
  return (
    <Section className={`More ${className ?? ''}`}>
      <SectionTitle highlighted>More ?</SectionTitle>
      <div className="More__content flex gap-4">
        <p>You can find more informations by scanning the followindg QRCode</p>
        <Canvas
          text={'https://github.com/bunlong/next-qrcode'}
          options={{
            errorCorrectionLevel: 'M',
            margin: 1,
            scale: 1,
            width: 20,
            color: {
              light: '#FFBF60FF',
            },
          }}
        />
      </div>
    </Section>
  )
}
