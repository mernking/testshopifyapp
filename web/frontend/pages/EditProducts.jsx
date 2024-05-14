import React, { useEffect } from "react";
import { Layout, Page, Text } from "@shopify/polaris";
import { useAuthenticatedFetch } from "../hooks/useAuthenticatedFetch";

export default async function EditProducts() {
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(true)

  useEffect(async () => {
    const fetch = useAuthenticatedFetch();
    const data = await fetch("/api/products");
    setloading(false)
    setproducts(data)
    console.log(data);
  }, []);

  if (loading === true){
    return (
      <Page>
        <Layout>
          <Layout.Section>
            <Text>Loading.....</Text>
          </Layout.Section>
        </Layout>
      </Page>
    );
  }
    return (
      <Page>
        <Layout>
          {products.map((product, index) => {
            <Layout.Section oneThird>
              <Card>
                <Card.Section>
                  <Image alt={product.title} source={product.image[0]} />
                </Card.Section>
                <Card.Section>
                  <Text>
                    <p>{product.description}</p>
                  </Text>
                </Card.Section>
              </Card>
            </Layout.Section>;
          })}
        </Layout>
      </Page>
    );
}
