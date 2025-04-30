
import { useState } from "react";
import { PlusCircle, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

interface Service {
  id: number;
  name: string;
  price: number;
  duration: number;
  category: string;
}

const ServicesSection = () => {
  const [services, setServices] = useState<Service[]>([
    { id: 1, name: "Женская стрижка", price: 1500, duration: 60, category: "Стрижки" },
    { id: 2, name: "Мужская стрижка", price: 800, duration: 30, category: "Стрижки" },
    { id: 3, name: "Окрашивание", price: 3500, duration: 120, category: "Окрашивание" }
  ]);
  
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredServices = services.filter(service => 
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Управление услугами</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Добавить услугу
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Добавить новую услугу</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="serviceName">Название</Label>
                <Input id="serviceName" placeholder="Введите название услуги" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="servicePrice">Цена (₽)</Label>
                <Input id="servicePrice" type="number" placeholder="0" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="serviceDuration">Длительность (мин)</Label>
                <Input id="serviceDuration" type="number" placeholder="60" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="serviceDescription">Описание</Label>
                <Input id="serviceDescription" placeholder="Краткое описание услуги" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Сохранить</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <Card>
        <CardContent className="pt-6">
          <div className="mb-4">
            <Input 
              placeholder="Поиск услуг..." 
              className="max-w-sm"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Название</TableHead>
                <TableHead>Цена</TableHead>
                <TableHead>Длительность</TableHead>
                <TableHead>Категория</TableHead>
                <TableHead className="text-right">Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredServices.map(service => (
                <TableRow key={service.id}>
                  <TableCell className="font-medium">{service.name}</TableCell>
                  <TableCell>{service.price} ₽</TableCell>
                  <TableCell>{service.duration} мин</TableCell>
                  <TableCell>{service.category}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
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

export default ServicesSection;
