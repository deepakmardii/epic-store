import ProductCard from "@/components/ProductCard";
import { stripe } from "@/utils/stripe";

export default function Home({ products }) {
  console.log(products);
  return (
    <div className="container xl:max-w-screen-xl mx-auto py-12 px-6">
      <div className="grid gap-8 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const inventory = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 8,
  });
  const products = inventory.data.map((product) => {
    const price = product.default_price;
    return {
      currency: price.currency,
      id: product.id,
      name: product.name,
      price: price.unit_amount,
      image: product.images[0],
    };
  });
  return {
    props: {
      // products: products => since both prop and value are same with object shorthand we can only write products
      products,
    },
  };
}
