import Avatar from '@/components/avatar/avatar'
import Follows from '@/components/follows/follows'
import Infos from '@/components/infos/infos'
import Column from '@/components/shared/page/column'
import Page from '@/components/shared/page/page'

export default function Home() {
  return (
    <Page>
      <Column>
        <Avatar />
        <Follows />
      </Column>

      <Column>
        <Infos />
      </Column>
    </Page>
  )
}
