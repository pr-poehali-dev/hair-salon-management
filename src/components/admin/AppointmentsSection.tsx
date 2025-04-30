
import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Appointment {
  id: number;
  date: string;
  time: string;
  client: string;
  service: string;
  master: string;
  status: "pending" | "confirmed" | "cancelled";
}

const AppointmentsSection = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([
    { 
      id: 1, 
      date: "30.04.2025", 
      time: "10:00", 
      client: "Екатерина М.", 
      service: "Стрижка и окрашивание", 
      master: "Анна", 
      status: "confirmed" 
    },
    { 
      id: 2, 
      date: "30.04.2025", 
      time: "11:30", 
      client: "Алексей К.", 
      service: "Мужская стрижка", 
      master: "Сергей", 
      status: "confirmed" 
    },
    { 
      id: 3, 
      date: "30.04.2025", 
      time: "13:00", 
      client: "Наталья П.", 
      service: "Укладка", 
      master: "Елена", 
      status: "pending" 
    }
  ]);
  
  const [selectedDate, setSelectedDate] = useState<string>("");

  const getStatusBadgeClass = (status: string) => {
    switch(status) {
      case "confirmed": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch(status) {
      case "confirmed": return "Подтверждено";
      case "pending": return "Ожидание";
      case "cancelled": return "Отменено";
      default: return status;
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Управление записями</h1>
      <Card>
        <CardContent className="pt-6">
          <div className="mb-4 flex gap-4">
            <Input 
              type="date" 
              className="max-w-xs" 
              value={selectedDate}
              onChange={e => setSelectedDate(e.target.value)}
            />
            <Button>Применить</Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Дата</TableHead>
                <TableHead>Время</TableHead>
                <TableHead>Клиент</TableHead>
                <TableHead>Услуга</TableHead>
                <TableHead>Мастер</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead className="text-right">Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appointments.map(appointment => (
                <TableRow key={appointment.id}>
                  <TableCell>{appointment.date}</TableCell>
                  <TableCell>{appointment.time}</TableCell>
                  <TableCell>{appointment.client}</TableCell>
                  <TableCell>{appointment.service}</TableCell>
                  <TableCell>{appointment.master}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusBadgeClass(appointment.status)}`}>
                      {getStatusText(appointment.status)}
                    </span>
                  </TableCell>
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

export default AppointmentsSection;
