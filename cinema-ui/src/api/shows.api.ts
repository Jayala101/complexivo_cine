import { http } from "./http";

export type Paginated<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

export type Shows = {
  id: number;
  movie_tile: string;
  room: string;
  price: number;
  available_seats: number;
};


export async function listShowsApi() {
  const { data } = await http.get<Paginated<Shows>>("/api/shows/");
  return data; // { count, next, previous, results }
}

export async function createShowApi(nombre: string) {
  const { data } = await http.post<Shows>("/api/shows/", { nombre });
  return data;
}

export async function updateShowApi(id: number, nombre: string) {
  const { data } = await http.put<Shows>(`/api/shows/${id}/`, { nombre });
  return data;
}

export async function deleteShowApi(id: number) {
  await http.delete(`/api/shows/${id}/`);
}