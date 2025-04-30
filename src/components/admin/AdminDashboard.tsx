
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const AdminDashboard = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Обзор</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Продажи сегодня</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15 800 ₽</div>
            <p className="text-xs text-muted-foreground mt-1">+12% с прошлой недели</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Записи на сегодня</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground mt-1">2 места свободно</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Новых клиентов</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground mt-1">+2 с прошлой недели</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Последние продажи</CardTitle>
            <CardDescription>Последние 5 проданных товаров</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Товар</TableHead>
                  <TableHead>Клиент</TableHead>
                  <TableHead className="text-right">Сумма</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Питательный шампунь</TableCell>
                  <TableCell>Анна С.</TableCell>
                  <TableCell className="text-right">1 200 ₽</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Маска для волос</TableCell>
                  <TableCell>Елена П.</TableCell>
                  <TableCell className="text-right">1 500 ₽</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Сыворотка для блеска</TableCell>
                  <TableCell>Мария К.</TableCell>
                  <TableCell className="text-right">950 ₽</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Кондиционер</TableCell>
                  <TableCell>Ольга В.</TableCell>
                  <TableCell className="text-right">850 ₽</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Спрей для укладки</TableCell>
                  <TableCell>Ирина Т.</TableCell>
                  <TableCell className="text-right">780 ₽</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Ближайшие записи</CardTitle>
            <CardDescription>Записи на сегодня</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Время</TableHead>
                  <TableHead>Клиент</TableHead>
                  <TableHead>Услуга</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>10:00</TableCell>
                  <TableCell>Екатерина М.</TableCell>
                  <TableCell>Стрижка и окрашивание</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>11:30</TableCell>
                  <TableCell>Алексей К.</TableCell>
                  <TableCell>Мужская стрижка</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>13:00</TableCell>
                  <TableCell>Наталья П.</TableCell>
                  <TableCell>Укладка</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>15:30</TableCell>
                  <TableCell>Сергей Л.</TableCell>
                  <TableCell>Стрижка бороды</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>17:00</TableCell>
                  <TableCell>Юлия С.</TableCell>
                  <TableCell>Окрашивание</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AdminDashboard;
