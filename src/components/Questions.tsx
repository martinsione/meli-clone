import { BsArrowReturnRight, BsSearch } from "react-icons/bs";
import { Input, Icon, Stack, Text, Button } from "@chakra-ui/react";

interface Props {
  questions: any[];
}
export default function Questions({ questions }: Props) {
  return (
    <Stack pt="64px" spacing={8}>
      <Text fontSize="24px">Preguntas y respuestas</Text>
      <Stack spacing={4}>
        <Text as="h4" color="blackAlpha.800" fontSize="lg">
          Preguntale al vendedor
        </Text>
        <Stack direction="row" spacing={0}>
          <Input
            borderRight="0"
            borderRightRadius="0"
            fontSize="100%"
            placeholder="Escribí una pregunta o palabra clave..."
            size="lg"
          />
          <Button
            borderLeftRadius="0"
            colorScheme="secondary"
            size="lg"
            w="min-content"
            width="25%"
          >
            <Icon as={BsSearch} />
          </Button>
        </Stack>
      </Stack>
      <Stack>
        <Text as="h4" color="blackAlpha.800" fontSize="lg">
          Últimas realizadas
        </Text>

        <Stack spacing={8}>
          {questions &&
            [...questions].slice(0, 5).map((question: any) => (
              <Stack key={question.id} paddingX={2}>
                <Stack direction="row">
                  <Text>{question.text}</Text>
                </Stack>
                {question.answer && question.date_created && (
                  <Stack
                    alignItems="center"
                    color="blackAlpha.600"
                    direction="row"
                    flexWrap="wrap"
                    pl={4}
                  >
                    <Icon as={BsArrowReturnRight} height={5} width={5} />
                    <Text>{question.answer.text}</Text>
                  </Stack>
                )}
              </Stack>
            ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
