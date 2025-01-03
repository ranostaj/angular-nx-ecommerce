export type Order = {
  id: number;
  name: string;
  description: string;
  price?: number;
  quantity?: number;
  products?: string[];
}
