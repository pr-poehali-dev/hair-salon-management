
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Calendar, Star, ShoppingBag } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: <Scissors className="h-10 w-10 mb-4" />,
      title: "Стрижки",
      description: "Профессиональные стрижки для мужчин и женщин любой сложности"
    },
    {
      icon: <Star className="h-10 w-10 mb-4" />,
      title: "Окрашивание",
      description: "Современные техники окрашивания от ведущих колористов"
    },
    {
      icon: <ShoppingBag className="h-10 w-10 mb-4" />,
      title: "Товары для волос",
      description: "Профессиональная косметика для домашнего ухода"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center h-[80vh]">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto h-full flex flex-col justify-center items-start text-white">
          <h1 className="text-5xl font-bold mb-6">Раскройте свою красоту</h1>
          <p className="text-xl max-w-md mb-8">
            Доверьтесь нашим опытным мастерам, чтобы создать образ вашей мечты
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-primary">
              <Link to="/services">Наши услуги</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:text-primary">
              <Calendar className="mr-2 h-4 w-4" />
              <Link to="/booking">Записаться онлайн</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы предлагаем полный спектр услуг по уходу за волосами, 
              от классических стрижек до сложного окрашивания и лечения волос
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="outline" className="mt-2">
                    <Link to="/services">Подробнее</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наши товары</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Профессиональная косметика для волос от ведущих мировых брендов
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <Card className="overflow-hidden">
              <div className="h-64 bg-[url('https://images.unsplash.com/photo-1610705267928-1b9f2fa7f1c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80')] bg-cover bg-center"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Питательный шампунь</h3>
                <p className="text-muted-foreground mb-2">Глубокое восстановление и защита ваших волос</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold text-lg">1 200 ₽</span>
                  <Button>
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    В корзину
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Product 2 */}
            <Card className="overflow-hidden">
              <div className="h-64 bg-[url('https://images.unsplash.com/photo-1571875257727-256c39da42af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2580&q=80')] bg-cover bg-center"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Маска для волос</h3>
                <p className="text-muted-foreground mb-2">Интенсивное увлажнение для сухих и поврежденных волос</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold text-lg">1 500 ₽</span>
                  <Button>
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    В корзину
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Product 3 */}
            <Card className="overflow-hidden">
              <div className="h-64 bg-[url('https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Сыворотка для блеска</h3>
                <p className="text-muted-foreground mb-2">Придает волосам здоровый блеск без утяжеления</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold text-lg">950 ₽</span>
                  <Button>
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    В корзину
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg">
              <Link to="/products">Все товары</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
