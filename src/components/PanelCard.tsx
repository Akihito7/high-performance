import React from "react";
import { Heading, VStack } from "native-base";

type PropsPanelCard = {
    title: string;
}

export function PanelCard({ title }: PropsPanelCard) {
    return (
        <VStack
            w="48%"
            h={140}
            bg="green.500"


            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={10}
        >
            <Heading
            fontSize={24}
            >
                {title}
            </Heading>
        </VStack>
    )
}