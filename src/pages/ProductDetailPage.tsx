
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/use-toast";
import { ShoppingCart, ChevronLeft, Star } from "lucide-react";

// Типы для продуктов
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  details?: {
    ingredients?: string;
    usage?: string;
    volume?: string;
  };
  reviews?: {
    id: number;
    author: string;
    rating: number;
    date: string;
    comment: string;
  }[];
}

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  // Имитация загрузки данных о продукте
  useEffect(() => {
    // В реальном приложении здесь будет запрос к API
    const fetchProduct = () => {
      setLoading(true);
      // Временные данные о продукте
      const mockProduct: Product = {
        id: Number(id),
        name: "Шампунь для окрашенных волос",
        category: "Шампуни",
        price: 1200,
        image: "https://images.unsplash.com/photo-1626766940297-832a4820a10f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Профессиональный шампунь для бережного ухода за окрашенными волосами. Сохраняет яркость цвета и защищает от вымывания красителя. Содержит натуральные экстракты и УФ-фильтры.",
        details: {
          ingredients: "Aqua, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Glycerin, Sodium Chloride, Parfum, Citric Acid, Sodium Benzoate, Panthenol, Tocopherol, Helianthus Annuus Seed Oil, Linum Usitatissimum Seed Oil.",
          usage: "Нанесите небольшое количество шампуня на влажные волосы, вспеньте, помассируйте кожу головы, затем тщательно смойте. При необходимости повторите. Для лучшего результата используйте с кондиционером той же линии.",
          volume: "250 мл"
        },
        reviews: [
          {
            id: 1,
            author: "Анна",
            rating: 5,
            date: "15.03.2025",
            comment: "Отличный шампунь! Волосы мягкие, цвет сохраняется дольше. Буду заказывать еще."
          },
          {
            id: 2,
            author: "Мария",
            rating: 4,
            date: "02.04.2025",
            comment: "Хороший шампунь, но для моих волос немного сушит. Использую его раз в неделю с маской."
          },
          {
            id: 3,
            author: "Елена",
            rating: 5,
            date: "20.04.2025",
            comment: "Приятный аромат и бережное очищение. Цвет держится гораздо дольше, чем с обычным шампунем."
          }
        ]
      };
      
      setTimeout(() => {
        setProduct(mockProduct);
        setLoading(false);
      }, 500);
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    // В реальном приложении здесь будет логика добавления в корзину
    toast({
      title: "Товар добавлен в корзину",
      description: `${product?.name} - ${quantity} шт.`,
    });
  };

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-10 flex justify-center items-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-500">Загрузка информации о товаре...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-10 text-center">
          <h2 className="text-2xl font-semibold mb-4">Товар не найден</h2>
          <p className="text-gray-500 mb-6">Извините, товар с указанным идентификатором не существует.</p>
          <Link to="/products">
            <Button>Вернуться к списку товаров</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <Link to="/products" className="inline-flex items-center text-primary hover:underline mb-6">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Вернуться к списку товаров
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-primary mb-2">{product.name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${
                      star <= 4.5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600 ml-2">
                {product.reviews?.length || 0} отзывов
              </span>
            </div>
            <p className="text-2xl font-bold text-primary mb-4">{product.price} ₽</p>
            <p className="text-gray-700 mb-6">{product.description}</p>
            
            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-1">Категория: {product.category}</p>
              <p className="text-sm text-gray-500 mb-1">Объем: {product.details?.volume}</p>
              <p className="text-sm text-gray-500">Артикул: PRD-{product.id.toString().padStart(5, '0')}</p>
            </div>

            <div className="flex items-center mb-6">
              <div className="flex items-center mr-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </Button>
                <span className="mx-3 w-8 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
              <Button className="flex-1" onClick={handleAddToCart}>
                <ShoppingCart className="mr-2 h-4 w-4" />
                В корзину
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="details">
          <TabsList className="w-full border-b mb-6">
            <TabsTrigger value="details">Детали</TabsTrigger>
            <TabsTrigger value="usage">Применение</TabsTrigger>
            <TabsTrigger value="reviews">Отзывы</TabsTrigger>
          </TabsList>
          
          <TabsContent value="details" className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Состав</h2>
            <p className="text-gray-700">{product.details?.ingredients}</p>
          </TabsContent>
          
          <TabsContent value="usage" className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Способ применения</h2>
            <p className="text-gray-700">{product.details?.usage}</p>
          </TabsContent>
          
          <TabsContent value="reviews" className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Отзывы покупателей</h2>
            
            {product.reviews && product.reviews.length > 0 ? (
              <div className="space-y-6">
                {product.reviews.map((review) => (
                  <div key={review.id} className="border-b pb-4 last:border-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium">{review.author}</h3>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${
                                star <= review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">Пока нет отзывов об этом товаре.</p>
            )}
            
            <Button className="mt-6">Оставить отзыв</Button>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
