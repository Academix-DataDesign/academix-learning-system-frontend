import { useState } from "react";
import { Switch as SwitchComponent, useMantineTheme } from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons-react";

interface SwitchProps {
  label?: string;
}

const Switch = ({ label }: SwitchProps) => {
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(false);
  return (
    // <Group position="center">
    <SwitchComponent
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
      color="teal"
      size="md"
      label={label}
      thumbIcon={
        checked ? (
          <IconCheck
            size="0.8rem"
            color={theme.colors.teal[theme.fn.primaryShade()]}
            stroke={3}
          />
        ) : (
          <IconX
            size="0.8rem"
            color={theme.colors.red[theme.fn.primaryShade()]}
            stroke={3}
          />
        )
      }
    />
    // </Group>
  );
};

export default Switch;
