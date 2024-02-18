import React, { useState } from 'react';
import { Checkbox, VStack, Text, HStack } from 'native-base';


type PropsTaskControlPanel = {
    title: string;
}

export default function TaskControlPanel({ title }: PropsTaskControlPanel) {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <HStack space={2} alignItems="center" mb={2}>
            <Checkbox
                isChecked={isChecked}
                onChange={handleCheckboxChange}
                value="myCheckbox"
                aria-label="My Checkbox"
                borderColor="black"
            />
            <Text>{title}</Text>
        </HStack>
    );
}



