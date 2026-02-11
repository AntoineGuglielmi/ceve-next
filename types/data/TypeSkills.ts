export type TypeSkills = {
  hard: TypeSkillType
  soft: TypeSkillType
}

export type TypeSkillType = {
  title: string
  list: Array<TypeSkillItem>
}

export type TypeSkillItem = string
