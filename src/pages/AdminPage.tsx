
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { BarChart3, Users, Package, Calendar, Scissors, PlusCircle, Pencil, Trash2 } from "lucide-react";

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Боковое меню */}
          <div className="w-full md:w-64 bg-card rounded-lg p-4 shadow">
            <h2 className="font-bold text-xl mb-6 text-primary">Админ-панель</h2>
            <nav className="space-y-2">
              <Button 
                variant={activeTab === "dashboard" ? "default" : "ghost"} 
                className="w-full justify-start" 
                onClick={() => setActiveTab("dashboard")}
              >
                <BarChart3 className="mr-2 h-4 w-4" />
                Обзор
              </Button>
              <Button 
                variant={activeTab === "products" ? "default" : "ghost"} 
                className="w-full justify-start" 
                onClick={() => setActiveTab("products")}
              >
                <Package className="mr-2 h-4 w-4" />
                Товары
              </Button>
              <Button 
                variant={activeTab === "services" ? "default" : "ghost"} 
                className="w-full justify-start" 
                onClick={() => setActiveTab("services")}
              >
                <Scissors className="mr-2 h-4 w-4" />
                Услуги
              </Button>
              <Button 
                variant={activeTab === "appointments" ? "default" : "ghost"} 
                className="w-full justify-start" 
                onClick={() => setActiveTab("appointments")}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Записи
              </Button>
              <Button 
                variant={activeTab === "clients" ? "default" : "ghost"} 
                className="w-full justify-start" 
                onClick={() => setActiveTab("clients")}
              >
                <Users className="mr-2 h-4 w-4" />
                Клиенты
              </Button>
            </nav>
          </div>
          
          {/* Основная область */}
          <div className="flex-1">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              {/* Вкладка Обзор */}
              <TabsContent value="dashboard">
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
              </TabsContent>
              
              {/* Вкладка Товары */}
              <TabsContent value="products">
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-3xl font-bold">Управление товарами</h1>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Добавить товар
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Добавить новый товар</DialogTitle>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                          <Label htmlFor="name">Название</Label>
                          <Input id="name" placeholder="Введите название товара" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="price">Цена (₽)</Label>
                          <Input id="price" type="number" placeholder="0" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="description">Описание</Label>
                          <Input id="description" placeholder="Краткое описание товара" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="image">Изображение (URL)</Label>
                          <Input id="image" placeholder="https://example.com/image.jpg" />
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
                      <Input placeholder="Поиск товаров..." className="max-w-sm" />
                    </div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Название</TableHead>
                          <TableHead>Цена</TableHead>
                          <TableHead>Категория</TableHead>
                          <TableHead>В наличии</TableHead>
                          <TableHead className="text-right">Действия</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Питательный шампунь</TableCell>
                          <TableCell>1 200 ₽</TableCell>
                          <TableCell>Шампуни</TableCell>
                          <TableCell>15</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon">
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Маска для волос</TableCell>
                          <TableCell>1 500 ₽</TableCell>
                          <TableCell>Маски</TableCell>
                          <TableCell>8</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon">
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Сыворотка для блеска</TableCell>
                          <TableCell>950 ₽</TableCell>
                          <TableCell>Сыворотки</TableCell>
                          <TableCell>12</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon">
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Вкладка Услуги */}
              <TabsContent value="services">
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
                      <Input placeholder="Поиск услуг..." className="max-w-sm" />
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
                        <TableRow>
                          <TableCell className="font-medium">Женская стрижка</TableCell>
                          <TableCell>1 500 ₽</TableCell>
                          <TableCell>60 мин</TableCell>
                          <TableCell>Стрижки</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon">
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Мужская стрижка</TableCell>
                          <TableCell>800 ₽</TableCell>
                          <TableCell>30 мин</TableCell>
                          <TableCell>Стрижки</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon">
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Окрашивание</TableCell>
                          <TableCell>3 500 ₽</TableCell>
                          <TableCell>120 мин</TableCell>
                          <TableCell>Окрашивание</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon">
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Вкладка Записи */}
              <TabsContent value="appointments">
                <h1 className="text-3xl font-bold mb-6">Управление записями</h1>
                <Card>
                  <CardContent className="pt-6">
                    <div className="mb-4 flex gap-4">
                      <Input type="date" className="max-w-xs" />
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
                        <TableRow>
                          <TableCell>30.04.2025</TableCell>
                          <TableCell>10:00</TableCell>
                          <TableCell>Екатерина М.</TableCell>
                          <TableCell>Стрижка и окрашивание</TableCell>
                          <TableCell>Анна</TableCell>
                          <TableCell>
                            <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                              Подтверждено
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
                        <TableRow>
                          <TableCell>30.04.2025</TableCell>
                          <TableCell>11:30</TableCell>
                          <TableCell>Алексей К.</TableCell>
                          <TableCell>Мужская стрижка</TableCell>
                          <TableCell>Сергей</TableCell>
                          <TableCell>
                            <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                              Подтверждено
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
                        <TableRow>
                          <TableCell>30.04.2025</TableCell>
                          <TableCell>13:00</TableCell>
                          <TableCell>Наталья П.</TableCell>
                          <TableCell>Укладка</TableCell>
                          <TableCell>Елена</TableCell>
                          <TableCell>
                            <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
                              Ожидание
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
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Вкладка Клиенты */}
              <TabsContent value="clients">
                <h1 className="text-3xl font-bold mb-6">База клиентов</h1>
                <Card>
                  <CardContent className="pt-6">
                    <div className="mb-4">
                      <Input placeholder="Поиск клиентов..." className="max-w-sm" />
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
                        <TableRow>
                          <TableCell className="font-medium">Екатерина Михайлова</TableCell>
                          <TableCell>+7 (901) 123-45-67</TableCell>
                          <TableCell>kate@example.com</TableCell>
                          <TableCell>12</TableCell>
                          <TableCell>25 800 ₽</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon">
                              <Pencil className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Алексей Кузнецов</TableCell>
                          <TableCell>+7 (902) 234-56-78</TableCell>
                          <TableCell>alex@example.com</TableCell>
                          <TableCell>5</TableCell>
                          <TableCell>8 200 ₽</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon">
                              <Pencil className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Наталья Петрова</TableCell>
                          <TableCell>+7 (903) 345-67-89</TableCell>
                          <TableCell>natalia@example.com</TableCell>
                          <TableCell>8</TableCell>
                          <TableCell>15 400 ₽</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon">
                              <Pencil className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Сергей Леонов</TableCell>
                          <TableCell>+7 (904) 456-78-90</TableCell>
                          <TableCell>sergey@example.com</TableCell>
                          <TableCell>3</TableCell>
                          <TableCell>4 500 ₽</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon">
                              <Pencil className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Юлия Смирнова</TableCell>
                          <TableCell>+7 (905) 567-89-01</TableCell>
                          <TableCell>julia@example.com</TableCell>
                          <TableCell>9</TableCell>
                          <TableCell>18 900 ₽</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon">
                              <Pencil className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminPage;
