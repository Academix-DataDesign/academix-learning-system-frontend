import { Tabs as TabsComponent } from "@mantine/core";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
} from "@tabler/icons-react";
import "./Tabs.scss";

const Tabs = () => {
  return (
    <TabsComponent
      className="class"
      color="#228BE6"
      radius="xl"
      defaultValue="gallery"
    >
      <TabsComponent.List>
        <TabsComponent.Tab value="gallery" icon={<IconPhoto size="0.8rem" />}>
          Gallery
        </TabsComponent.Tab>
        <TabsComponent.Tab
          value="messages"
          icon={<IconMessageCircle size="0.8rem" />}
        >
          Messages
        </TabsComponent.Tab>
        <TabsComponent.Tab
          value="settings"
          icon={<IconSettings size="0.8rem" />}
        >
          Settings
        </TabsComponent.Tab>
      </TabsComponent.List>

      <TabsComponent.Panel value="gallery" pt="xs">
        <p>Tab 1 content</p>
      </TabsComponent.Panel>

      <TabsComponent.Panel value="messages" pt="xs">
        <p>Tab 2 content</p>
      </TabsComponent.Panel>

      <TabsComponent.Panel value="settings" pt="xs">
        <p>Tab 3 content</p>
      </TabsComponent.Panel>
    </TabsComponent>
  );
};

export default Tabs;
