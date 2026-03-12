import { Info } from '@/types/strapi-types'
import Image from 'next/image'

type AvatarProps = {
  className?: string
  children?: React.ReactNode
  picture?: Info['picture']
}

export default function Avatar({ className, picture }: AvatarProps) {
  const { alternativeText, height, width, url } = picture!

  return (
    <div className={`Avatar relative  overflow-hidden ${className ?? ''}`}>
      <Image
        unoptimized
        alt={alternativeText}
        src={`${process.env.STRAPI_API_BASE_URL}${url}`}
        loading="eager"
        fill
        className="object-cover"
      />
    </div>
  )
}
