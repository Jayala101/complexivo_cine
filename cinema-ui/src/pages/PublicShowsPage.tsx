import { useEffect, useState } from "react";
import { Container, Paper, Typography, Button, Stack, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { type Shows, listShowsApi } from "../api/shows.api";

export default function PublicVehiclesPage() {
  const [items, setItems] = useState<Shows[]>([]);
  const [error, setError] = useState("");

  const load = async () => {
    try {
      setError("");
      const data = await listShowsApi();
      setItems(data.results); // DRF paginado
    } catch {
      setError("No se pudo cargar la lista pública. ¿Backend encendido?");
    }
  };

  useEffect(() => { load(); }, []);

  return (
    <Container sx={{ mt: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
          <Typography variant="h5">Lista de Vehículos (Público)</Typography>
          <Button variant="outlined" onClick={load}>Refrescar</Button>
        </Stack>

        {error && <Typography color="error" sx={{ mb: 2 }}>{error}</Typography>}

        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Titulo</TableCell>
              <TableCell>Cuarto</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Disponibilidad</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((v) => (
              <TableRow key={v.id}>
                <TableCell>{v.id}</TableCell>
                <TableCell>{v.movie_tile}</TableCell>
                <TableCell>{v.room}</TableCell>
                <TableCell>{v.price}</TableCell>
                <TableCell>{v.available_seats}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}