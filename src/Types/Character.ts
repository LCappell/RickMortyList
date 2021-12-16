export interface Character {
  name: string;
  image: string;
  id: number;
  status: string;
  species: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  episode: [];
}
