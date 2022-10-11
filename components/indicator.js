import { useState } from 'react';
import { Avatar, Indicator, Button, Group, Text, Tabs } from '@mantine/core';

export default function MyIndicator() {
  const [count, setCount] = useState(9);

  return (
    <>
      <Group spacing="xl">
        <Indicator label={count} showZero={false} dot={false} inline size={22}>
          <Avatar size="lg" src="https://i.pravatar.cc/150?img=12" />
        </Indicator>

        <Indicator label={count} showZero={false} dot={false} overflowCount={25} inline size={22}>
          <Avatar size="lg" src="https://i.pravatar.cc/150?img=31" />
        </Indicator>

        <Indicator label={count} showZero={false} dot={false} overflowCount={10} inline size={22}>
          <Avatar size="lg" src="https://i.pravatar.cc/150?img=16" />
        </Indicator>
      </Group>

      <Group mt="xl">
        <Button variant="outline" onClick={() => setCount((old) => (old > 0 ? old - 1 : old))}>
          Decrement
        </Button>
        <Button variant="outline" onClick={() => setCount((old) => old + 1)}>
          Increment
        </Button>
      </Group>
      <br/>

      <Tabs orientation="vertical" defaultValue="first" variant='pills'>
        <Tabs.List position="center">
          <Tabs.Tab value="first">Rounded</Tabs.Tab>
          <Tabs.Tab value="second">Square</Tabs.Tab>
          <Tabs.Tab value="third">Square No Border</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="first" pt="xs">
          <div className='ml-40'>
            <Indicator color="green" position="top-start" size={18} withBorder label="online">
              <Avatar
                size="lg"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
              />
            </Indicator>
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="second" pt="xs">
          <div className='ml-40'>
            <Indicator  color="orange" position="top-start" radius="xs" size={18} withBorder processing label="away">
              <Avatar
                size="lg"
                src="https://i.pravatar.cc/150?img=31"
              />
            </Indicator>
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="third" pt="xs">
          <div className='ml-40'>
            <Indicator  color="red" position="top-start" radius="xs" size={14} label="offline">
              <Avatar
                size="lg"
                src="https://i.pravatar.cc/150?img=16"
              />
            </Indicator>
          </div>
        </Tabs.Panel>

      </Tabs>

    </>
  );
}