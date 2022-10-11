import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

export default function MyCard(props) {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
            <Image
            src={props.imageurl}
            height={160}
            alt="Norway"
            />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>{props.title}</Text>
            <Badge variant="gradient" gradient={{ from: 'red', to: 'gold' }}>
                {props.badgetext}
            </Badge>
        </Group>

        <Text size="sm" color="dimmed">
            {props.content}
        </Text>

        <Button variant="dark" color="orange" fullWidth mt="md" radius="md">
            {props.bookingtext}
        </Button>
    </Card>
  );
}