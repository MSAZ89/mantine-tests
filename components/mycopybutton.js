import { CopyButton, Button } from '@mantine/core';

export default function MyCopyButton(props) {
  return (
    <CopyButton value={props.value}>
      {({ copied, copy }) => (
        <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
          {copied ? 'COPIED!' : props.value}
        </Button>
      )}
    </CopyButton>
  );
}