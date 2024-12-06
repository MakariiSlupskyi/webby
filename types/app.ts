// type Service =
//   | { type: 'front'; title: string; data: FrontData }
//   | { type: 'back'; title: string; data: BackData }
//   | { type: 'database'; title: string; data: DatabaseData }

export type App = {
  name: string
  services: Service[]
  designSystem: {
    colors: any
    style: any
  }
};

export type Service = {
  type: 'front' | 'back' | 'database'
  name: string
  content: any
}

export type FrontContent = {
  aaa: any
}

export type DatabaseContent = {
  aaa: any
}

export type BackContent = {
  aaa: any
}