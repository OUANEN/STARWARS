export class Character {
  readonly name: string;
  readonly gender: string;
  readonly height: string;
  readonly mass: string;
  readonly hairColor: string;
  readonly skinColor: string;
  readonly eyeColor: string;
  readonly birthYear: string;
 

  constructor(data: any) {
    this.name = data.name ?? '';
    this.gender = data.gender ?? '';
    this.height = data.height ?? '';
    this.mass = data.mass ?? '';
    this.hairColor = data.hair_color ?? '';
    this.skinColor = data.skin_color ?? '';
    this.eyeColor = data.eye_color ?? '';
    this.birthYear = data.birth_year ?? '';

  }
}
