export interface CharacterDTO {
  id: string;
  order: number;
  name: string;
  stamina: number;
  stun: number;
  country: string;
}

export type Character = CharacterDTO & { countryFlagUrl: string };
