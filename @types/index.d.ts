declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg'
declare module '*.gif'

type TThumbnail = {
  height: number
  url: string
  width: number
}

type TLogo = {
  filename: string
  height: number
  id: string
  size: number
  thumbnails: {
    full: TThumbnail
    large: TThumbnail
    small: TThumbnail
  }
  type: string
  url: string
  width: number
}

export type TFields = {
  contactNumber: number
  description: string
  email: string
  introduction: string
  location: string
  logo: TLogo[]
  name: string
  category: string[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  gallery: any
}

export interface ISme {
  id: string
  fields: TFields
  _rawJson: {
    id: string
    createdTime: string
    fields: TFields
  }
  _table: {
    id?: string
    name: string
    _base: {
      _airtable?: Record<string, unknown>
      _id: string
    }
  }
}
