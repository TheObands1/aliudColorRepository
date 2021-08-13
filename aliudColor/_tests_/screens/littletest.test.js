import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';


it('tryout ', () => {
    const onPressMock = jest.fn();

    const { getByText } = render(
    <View>
        <TouchableOpacity onPress={onPressMock}>
            <Text>Press me</Text>
            <Text>hey you</Text>
        </TouchableOpacity>
    </View>
    );

    fireEvent.press(getByText('Press me'));
    expect(onPressMock).toHaveBeenCalled();
});