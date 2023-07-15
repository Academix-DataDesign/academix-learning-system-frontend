import { Group, Text, useMantineTheme, rem } from "@mantine/core";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
import {
  Dropzone as DropzoneComponent,
  DropzoneProps,
  IMAGE_MIME_TYPE,
} from "@mantine/dropzone";

const Dropzone = (props: Partial<DropzoneProps>) => {
  const theme = useMantineTheme();
  return (
    <DropzoneComponent
      style={{ width: "600px" }}
      onDrop={(files) => console.log("accepted files", files)}
      onReject={(files) => console.log("rejected files", files)}
      maxSize={3 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
      {...props}
    >
      <Group
        position="center"
        spacing="xl"
        style={{ minHeight: rem(220), pointerEvents: "none" }}
      >
        <DropzoneComponent.Accept>
          <IconUpload
            size="3.2rem"
            stroke={1.5}
            color={
              theme.colors[theme.primaryColor][
                theme.colorScheme === "dark" ? 4 : 6
              ]
            }
          />
        </DropzoneComponent.Accept>
        <DropzoneComponent.Reject>
          <IconX
            size="3.2rem"
            stroke={1.5}
            color={theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]}
          />
        </DropzoneComponent.Reject>
        <DropzoneComponent.Idle>
          <IconPhoto size="3.2rem" stroke={1.5} />
        </DropzoneComponent.Idle>

        <div>
          <Text size="xl" inline>
            Drag images here or click to select files
          </Text>
          <Text size="sm" color="dimmed" inline mt={7}>
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </div>
      </Group>
    </DropzoneComponent>
  );
};

export default Dropzone;
