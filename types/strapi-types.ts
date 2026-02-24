
export interface AtomsFollowItem {
  id?: number;
  icon?: string;
  link?: string;
};

export interface AtomsHardSkill {
  id?: number;
  text?: string;
};

export interface AtomsMiscItem {
  id?: number;
  text?: string;
};

export interface MoleculesDiplomaItem {
  id?: number;
  title?: string;
  organism?: string;
  geo?: string;
  start?: string;
  end?: string;
};

export interface MoleculesExperienceItem {
  id?: number;
  title?: string;
  organism?: string;
  geo?: string;
  start?: string;
  end?: string;
  jobs?: MoleculesJobItem[] | null;
};

export interface MoleculesJobItem {
  id?: number;
  title?: string;
  text?: string;
};

export interface Config {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  gen_cv_code?: string;
};

export interface DiplomasSection {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  title?: string;
  list?: MoleculesDiplomaItem[] | null;
};

export interface ExperiencesSection {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  title?: string;
  list?: MoleculesExperienceItem[] | null;
};

export interface FollowSection {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  title?: string;
  list?: AtomsFollowItem[] | null;
};

export interface HardSkillsSection {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  title?: string;
  list?: AtomsHardSkill[] | null;
};

export interface Info {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  firstname?: string;
  lastname?: string;
  address1?: string;
  address2?: string;
  postalCode?: string;
  city?: string;
  phone?: string;
  email?: string;
  website?: string;
};

export interface Intro {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  title?: string;
  text?: string;
};

export interface MiscSection {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  title?: string;
  list?: AtomsMiscItem[] | null;
};

export interface PlusSection {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  title?: string;
  text?: string;
  link?: string;
};

export interface SoftSkillsSection {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  title?: string;
  list?: AtomsHardSkill[] | null;
};

export interface Media {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: { thumbnail: MediaFormat; small: MediaFormat; medium: MediaFormat; large: MediaFormat; };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MediaFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: string;
  url: string;
}

export interface User {
  id?: number;
  username: string;
  email: string;
  provider?: string;
  confirmed?: boolean;
  blocked?: boolean;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  role: Role | null | number;
};

export interface Role {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  name: string;
  description: string;
  type: string;
};

export interface FindOne<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export interface FindMany<T> {
  data: T[];
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};
