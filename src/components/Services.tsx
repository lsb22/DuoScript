import { Box, VStack, Card, SimpleGrid } from "@chakra-ui/react";

const Services = () => {
  return (
    <Box>
      <VStack className="services-heading">Services</VStack>
      <SimpleGrid
        columns={{ lg: 3, md: 2, base: 1 }}
        className="services-card-holder"
        gap={6}
        p={2}
      >
        <Card.Root className="services-card">
          <Card.Header textAlign="center" className="services-card-header">
            Service 1
          </Card.Header>
          <Card.Description className="services-card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            nesciunt fugit tenetur numquam perferendis ducimus, ea dolorum
            magni, quaerat nulla animi quibusdam voluptates doloremque amet
            deleniti rem officia architecto ad.
          </Card.Description>
        </Card.Root>
        <Card.Root className="services-card">
          <Card.Header textAlign="center" className="services-card-header">
            Service 2
          </Card.Header>
          <Card.Description className="services-card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            nesciunt fugit tenetur numquam perferendis ducimus, ea dolorum
            magni, quaerat nulla animi quibusdam voluptates doloremque amet
            deleniti rem officia architecto ad.
          </Card.Description>
        </Card.Root>
        <Card.Root className="services-card">
          <Card.Header textAlign="center" className="services-card-header">
            Service 3
          </Card.Header>
          <Card.Description className="services-card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            nesciunt fugit tenetur numquam perferendis ducimus, ea dolorum
            magni, quaerat nulla animi quibusdam voluptates doloremque amet
            deleniti rem officia architecto ad.
          </Card.Description>
        </Card.Root>
      </SimpleGrid>
    </Box>
  );
};

export default Services;
