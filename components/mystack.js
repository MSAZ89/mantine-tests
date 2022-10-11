import { Stack, Button } from '@mantine/core';
import Cardgrid from './cardgrid';

export default function MyStack() {
  return (
    <div>
      <Stack align="flex-start" justify="space-around" spacing="xl" sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0], height: 200, padding: "20px" })}>
        <Button variant="outline">1</Button>
        <Button variant="outline">2</Button>
        <Button variant="outline">3</Button>
      </Stack>
    </div>
  );
}