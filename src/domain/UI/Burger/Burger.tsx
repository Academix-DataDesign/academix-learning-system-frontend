import { useDisclosure } from "@mantine/hooks";
import { Burger as BurgerComponent } from "@mantine/core";

const Burger = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? "Close navigation" : "Open navigation";

  return (
    <BurgerComponent
      color="white"
      opened={opened}
      onClick={toggle}
      aria-label={label}
    />
  );
};

export default Burger;
