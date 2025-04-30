
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Типы для продуктов
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

const ProductsPage = () => {
  // Временные данные о продуктах
  const productsData: Product[] = [
    {
      id: 1,
      name: "Шампунь для окрашенных волос",
      category: "Шампуни",
      price: 1200,
      image: "https://images.unsplash.com/photo-1626766940297-832a4820a10f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Профессиональный шампунь для бережного ухода за окрашенными волосами. Сохраняет яркость цвета и защищает от вымывания."
    },
    {
      id: 2,
      name: "Маска для питания волос",
      category: "Маски",
      price: 1500,
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Интенсивная питательная маска для сухих и поврежденных волос. Восстанавливает структуру волос и придает им блеск."
    },
    {
      id: 3,
      name: "Лак для волос сильной фиксации",
      category: "Стайлинг",
      price: 850,
      image: "https://images.unsplash.com/photo-1614859705565-11b7e8427bad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Профессиональный лак для волос с сильной фиксацией. Не склеивает волосы и легко смывается."
    },
    {
      id: 4,
      name: "Кондиционер для всех типов волос",
      category: "Кондиционеры",
      price: 980,
      image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Универсальный кондиционер, подходящий для всех типов волос. Облегчает расчесывание и придает волосам мягкость."
    },
    {
      id: 5,
      name: "Термозащитный спрей",
      category: "Стайлинг",
      price: 1100,
      image: "https://images.unsplash.com/photo-1631730359585-38a5ddd85fbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Спрей для защиты волос от высоких температур при укладке. Предотвращает пересушивание и ломкость волос."
    },
    {
      id: 6,
      name: "Масло для кончиков волос",
      category: "Масла",
      price: 1350,
      image: "https://images.unsplash.com/photo-1617897903246-719242758050?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Питательное масло для сухих и секущихся кончиков волос. Придает блеск и шелковистость."
    },
  ];

  // Состояния для фильтрации и поиска
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  // Категории для фильтра
  const categories = ["Шампуни", "Маски", "Кондиционеры", "Стайлинг", "Масла"];

  // Фильтрация продуктов
  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  // Сортировка продуктов
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-asc") {
      return a.price - b.price;
    } else if (sortOption === "price-desc") {
      return b.price - a.price;
    } else if (sortOption === "name-asc") {
      return a.name.localeCompare(b.name);
    } else if (sortOption === "name-desc") {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-10 text-primary">Наши продукты</h1>

        {/* Поиск и фильтры */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Input
              type="text"
              placeholder="Поиск товаров..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите категорию" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все категории</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select value={sortOption} onValueChange={setSortOption}>
              <SelectTrigger>
                <SelectValue placeholder="Сортировка" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">По умолчанию</SelectItem>
                <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
                <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
                <SelectItem value="name-asc">Название: А-Я</SelectItem>
                <SelectItem value="name-desc">Название: Я-А</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Список продуктов */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <Link to={`/products/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-primary">{product.name}</h3>
                  <p className="text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary">{product.price} ₽</span>
                    <Button size="sm">В корзину</Button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">По вашему запросу ничего не найдено.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm("");
                setCategoryFilter("all");
                setSortOption("default");
              }}
            >
              Сбросить фильтры
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductsPage;
