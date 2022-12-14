import { Badge } from '@mantine/core';

export default function MyBadges() {
  return (
    <>
      <Badge>Unstyled Badge</Badge>
      <Badge variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Indigo cyan</Badge>
      <Badge variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>Lime green</Badge>
      <Badge variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>Teal blue</Badge>
      <Badge variant="gradient" gradient={{ from: 'orange', to: 'red' }}>Orange red</Badge>
      <Badge variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>Peach</Badge>
    </>
  );
}