import { Card, Text } from "@chakra-ui/react";

const DisplayCards = () => {
  return (
    <Card.Root maxWidth="410px" className="card">
      <Card.Header className="card-header">
        <Text>Lorem ipsum dolor sit amet consectetur</Text>
      </Card.Header>
      <Card.Body className="card-body">
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          maiores omnis dolor delectus nisi impedit velit molestias, totam
          inventore suscipit neque obcaecati, perferendis corporis laborum
          numquam aperiam incidunt veniam eos. Lorem ipsum dolor sit
        </Text>
      </Card.Body>
    </Card.Root>
  );
};

export default DisplayCards;
