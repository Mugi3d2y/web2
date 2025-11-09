import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Pizza } from "../../types";

interface PizzaMenuProps {
  pizzas: Pizza[];
}

const PizzaMenu = ({ pizzas }: PizzaMenuProps) => {
  return (
    /*<table className="pizza-menu">
      <thead>
        <tr>
          <th>Pizza</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {pizzas.map((pizza) => (
          <tr key={pizza.id}>
            <td>{pizza.title}</td>
            <td>{pizza.content}</td>
          </tr>
        ))}
      </tbody>
    </table>*/

    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Pizza</TableCell>
            <TableCell>Description</TableCell>  
          </TableRow>
        </TableHead>
        <TableBody>
          {pizzas.map((pizza) => (
            <TableRow key={pizza.id}>
              <TableCell>{pizza.title}</TableCell>
              <TableCell>{pizza.content}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PizzaMenu;
export type { Pizza };
