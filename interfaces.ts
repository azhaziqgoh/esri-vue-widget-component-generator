interface extSchemaInterface {
  props?: {
    [key: string]: string
  },
  events?: {
    [key: string]: string
  },
  classes?: Array<string>,
  id?: string,
  styles?: {
    [T: string]: string
  }
}

export { extSchemaInterface }