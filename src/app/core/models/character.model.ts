export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  type: string;
  image: string;
  location: {
    name: string;
    url: string;
  };
}
