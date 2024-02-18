import React from "react";
import { VStack, HStack, Text, Heading, Checkbox, TextArea, ScrollView, Button } from "native-base";
import { PanelCard } from "../components/PanelCard";
import TaskControlPanel from "../components/TaskControlPanel";


export function ControlPanel() {
    return (
        <ScrollView>
            <VStack
                height="full"
                width="full"
                mt={20}
                px={4}
            >
                <Text
                    fontSize={16}
                >
                    Feliz em te ver,
                </Text>
                <Heading
                    fontSize={22}
                    mb={16}
                >
                    Guilherme Akihito
                </Heading>

                <VStack>
                    <Text
                        mb={4}
                        fontSize={18}
                        fontWeight="bold"
                    >Painel de controle 🚀</Text>
                    <HStack
                        w="full"
                        space={2}
                        justifyContent="center"
                        mb={12}
                    >
                        <PanelCard title="Metas e sonhos" />
                        <PanelCard title="Rotinas" />

                    </HStack>
                </VStack>

                <VStack mb={12}>
                    <Text
                        fontSize={18}
                        fontWeight="bold"
                        mb={4}
                    >Rotina hoje!</Text>

                    <TaskControlPanel
                        title="Ir a academia"

                    />
                    <TaskControlPanel title="Estudar programação" />
                    <TaskControlPanel title="Continuar o projeto" />
                    <TaskControlPanel title="Aplicar para vagas" />

                </VStack>

                <VStack
                    mb={8}>
                    <Text
                        fontSize={18}
                        fontWeight="bold"
                        mb={4}

                    >Anotações sobre hoje!</Text>

                    <TextArea autoCompleteType={false}
                        borderRadius={10}
                        borderColor={"black"}
                        mb={4}
                        _focus={{
                            bg: "white",
                            borderColor: "black",
                        }}
                    />

                    <Button
                        bg="green.500"
                        borderRadius={10}
                        _text={{
                            color: "black",
                            fontSize : 18,
                            fontWeight : "bold",
                        }}
                    >Salvar anotação</Button>
                </VStack>


            </VStack>
        </ScrollView>
    )
}