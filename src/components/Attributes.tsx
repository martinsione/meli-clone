import React from "react";
import { Stack, Table, Tbody, Tr, Td, Text, Grid } from "@chakra-ui/react";

interface AttributesProps {
  id: string;
  name: string;
  value_name: string;
  values: any;
  attribute_group_id?: string;
  attribute_group_name?: string;
}

interface Props {
  attributes: AttributesProps[];
}

export default function Attributes({ attributes }: Props) {
  return (
    <Stack>
      <Text fontSize="24px">Características principales</Text>
      <Table borderRadius="md" overflow="hidden">
        <Tbody>
          {[...attributes].slice(0, 8).map((attribute) => (
            <Tr
              key={attribute.id}
              css={{
                "&:nth-of-type(2n+1) :first-of-type": {
                  backgroundColor: "#ebebeb",
                },
                "&:nth-of-type(2n) :first-of-type": {
                  backgroundColor: "#f5f5f5",
                },
                "&:nth-of-type(2n+1) :nth-of-type(2)": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              <Td>{attribute.name}</Td>
              <Td textAlign="left" w="550px">
                {attribute.values[0].name}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Stack>
        <Stack />
        <Text fontSize="24px"> Otras características</Text>

        <Grid
          borderRadius="md"
          fontSize="sm"
          gap={4}
          overflow="hidden"
          templateColumns="repeat(2, 1fr)"
        >
          {[...attributes].slice(8, 20).map((attribute) => (
            <Stack key={attribute.id} direction="row" flexWrap="wrap">
              <Text fontWeight="bold">{attribute.name}:</Text>
              <Text>{attribute.values[0].name}</Text>
            </Stack>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
}
