
import { useState } from "react";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Client {
  id: number;
  name: string;
  phone: string;
  email: string;
  visits: number;
  totalSpent: number;
}

const ClientsSection = () => {
  const [clients, setClients] = useState<Client[]>([
    { 
      id: 1, 
      name: "Екатерина Михайлова", 
      phone: "+7 (901) 123-45-67", 
      email: "kate@example.com", 
      visits: 12, 
      totalSpent: 25800 
    },
    { 
      id: 2, 
      name: "Алексей Кузнецов", 
      phone: "+7 (902) 234-56-78", 
      email: "alex@example.com", 
      visits: 5, 
      totalSpent: 8200 
    },
    { 
      id: 3, 
      name: "Наталья Петрова", 
      phone: "+7 (903) 345-67-89", 
      email: "natalia@example.com", 
      visits: 8, 
      totalSpent: 15400 
    },
    { 
      id: 4, 
      name: "Сергей Леонов", 
      phone: "+7 (904) 456-78-90", 
      email: "sergey@example.com", 
      visits: 3, 
      totalSpent: 4500 
    },
    { 
      id: 5, 
      name: "Юлия Смирнова", 
      phone: "+7 (905) 567-89-01", 
      email: "julia@example.com", 
      visits: 9, 
      totalSpent: 18900 
    },
  ]);
  
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.phone.includes(searchTerm)
  );

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">База клиентов</h1>
      <Card>
        <CardContent className="pt-6">
          <div className="mb-4">
            <Input 
              placeholder="Поиск клиентов..." 
              className="max-w-sm" 
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Имя</TableHead>
                <TableHead>Телефон</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Посещений</TableHead>
                <TableHead>Сумма покупок</TableHead>
                <TableHead className="text-right">Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredClients.map(client => (
                <TableRow key={client.id}>
                  <TableCell className="font-medium">{client.name}</TableCell>
                  <TableCell>{client.phone}</TableCell>
                  <TableCell>{client.email}</TableCell>
                  <TableCell>{client.visits}</TableCell>
                  <TableCell>{client.totalSpent.toLocaleString()} ₽</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default ClientsSection;
