import {
  Dialog as DialogComponent,
  Group,
  Button,
  TextInput,
  Text,
} from "@mantine/core";
import { useEffect, useState } from "react";
import "./Dialog.scss";

const Dialog = () => {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpened(true);
    }, 1000);
  }, []);

  function close() {
    setOpened(false);
  }

  return (
    <>
      <DialogComponent
        opened={opened}
        withCloseButton
        onClose={close}
        size="lg"
        radius="md"
      >
        <Text size="sm" mb="xs" weight={500}>
          Subscribe to email newsletter
        </Text>

        <Group align="flex-end">
          <TextInput placeholder="hello@gluesticker.com" sx={{ flex: 1 }} />
          <Button className="btn-newsletter" onClick={close}>
            Subscribe
          </Button>
        </Group>
      </DialogComponent>
    </>
  );
};

export default Dialog;
