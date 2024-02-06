import { Product } from "@/models";

class ProductService {
  async getProducts({ search }: { search?: string }): Promise<Product[]> {
    const response = await fetch(`${process.env.CATALOG_API_URL}/product`, {
      next: { revalidate: 1 },
    });
    const data = (await response.json()) ?? [];
    if (search) {
      return data.filter((product: Product) => {
        return product.name.toLowerCase().includes(search.toLowerCase());
      });
    }
    return data;
  }

  async getProduct(productId: string): Promise<Product> {
    const response = await fetch(
      `${process.env.CATALOG_API_URL}/product/${productId}`,
      {
        next: { revalidate: 1 },
      },
    );
    return response.json();
  }
}

export const productService = new ProductService();
