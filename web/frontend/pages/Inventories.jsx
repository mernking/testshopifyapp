import { Page, Layout, Card, Text } from "@shopify/polaris";




export default function Inventories() {

  return (
    <Page title="Inventories">
      <Layout>
        <Layout.Section oneHalf>
          <Card title="stock">
            <Card.Section>
              <Text variant="bodyMd">
                <p>hello card here</p>
              </Text>
            </Card.Section>
          </Card>
        </Layout.Section>
        <Layout.Section oneHalf>
          <Card title="stock">
            <Card.Section title="stock">
              <Text variant="bodyMd">
                <p>hello card here</p>
              </Text>
            </Card.Section>
            <Card.Section title="stock">
              <Text variant="bodyMd">
                <p>hello card here</p>
              </Text>
            </Card.Section>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}