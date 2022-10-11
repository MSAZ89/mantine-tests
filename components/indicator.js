import { useState } from 'react';
import { Avatar, Indicator, Button, Group } from '@mantine/core';

export default function MyIndicator() {
  const [count, setCount] = useState(9);

  return (
    <>
      <Group position="center" spacing="xl">
        <Indicator label={count} inline size={32}>
          <Avatar size="lg" src="https://i.pravatar.cc/150?img=12" />
        </Indicator>

        <Indicator label={count} overflowCount={5} inline size={32}>
          <Avatar size="lg" src="https://i.pravatar.cc/150?img=31" />
        </Indicator>

        <Indicator label={count} showZero={false} dot={false} overflowCount={10} inline size={32}>
          <Avatar size="lg" src="https://i.pravatar.cc/150?img=16" />
        </Indicator>
      </Group>

      <Group position="center" mt="xl">
        <Button variant="outline" onClick={() => setCount((old) => (old > 0 ? old - 1 : old))}>
          Decrement
        </Button>
        <Button variant="outline" onClick={() => setCount((old) => old + 1)}>
          Increment
        </Button>
      </Group>
    </>
  );
}