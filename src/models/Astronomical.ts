// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Astronomical {
  export type PhotoData = {
    title: string
    url: string
    description: string
    copyright: string
    date: string
  }

  export type NeoAsteroid = {
    name: string
    imageUrl: string
    diameter: string
    isPotentiallyHazardousAsteroid: boolean
    absoluteMagnitude: number
  }

  export type Asteroids = { period: string; items: NeoAsteroid[] }
}
