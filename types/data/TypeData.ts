import { TypeDiplomas } from './TypeDiplomas'
import { TypeExperiences } from './TypeExperiences'
import { TypeFollows } from './TypeFollows'
import { TypeInfos } from './TypeInfos'
import { TypeIntro } from './TypeIntro'
import { TypeMisc } from './TypeMisc'
import { TypeSkills } from './TypeSkills'

export type TypeData = {
  infos: TypeInfos
  intro: TypeIntro
  follows: TypeFollows
  skills: TypeSkills
  misc: TypeMisc
  experiences: TypeExperiences
  diplomas: TypeDiplomas
}
