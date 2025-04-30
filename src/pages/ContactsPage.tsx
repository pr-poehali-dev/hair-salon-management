
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    toast({
      title: "Сообщение отправлено",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-10 text-primary">Контакты</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-primary mb-6">Свяжитесь с нами</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Ваше имя
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Иван Иванов"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Электронная почта
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="example@mail.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Телефон
                </label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Сообщение
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-[120px]"
                  placeholder="Ваше сообщение..."
                />
              </div>
              <Button type="submit" className="w-full">
                Отправить сообщение
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-primary mb-6">Наши контакты</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Адрес</h3>
                    <p className="text-gray-700">ул. Примерная, д. 123, г. Москва, 123456</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Телефон</h3>
                    <p className="text-gray-700">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-700">info@hairsalon.ru</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Часы работы</h3>
                    <p className="text-gray-700">Пн-Пт: 9:00 - 20:00</p>
                    <p className="text-gray-700">Сб-Вс: 10:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-primary mb-4">Как добраться</h2>
              <div className="rounded-lg overflow-hidden h-64 bg-gray-200">
                {/* Здесь можно разместить карту */}
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-500">Карта проезда</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactsPage;
