import { stripe } from "@/utils/stripe";

export default function Home({ products }) {
  console.log(products);
  return <div>Home</div>;
}

export async function getStaticProps() {
  const inventory = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 8,
  });
  const products = inventory.data.map((product) => {
    const price = product.default_price;
    return {
      currench: price.currency,
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
