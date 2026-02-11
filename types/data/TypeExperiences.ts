export type TypeExperiences = {
  title: string
  list: Array<TypeExperienceItem>
}

export type TypeExperienceItem = {
  title: string
  organism: string
  geo: string
  start: string
  end: string
  jobs: Array<TypeJob>
}

export type TypeJob = {
  title: string
  text: string
}
