import React from "react";
import { View, Text } from 'react-native'
import Svg, { Circle } from 'react-native-svg';

const Loading = () => {
  return (
    <View className="flex justify-center items-center w-full">
      <View className="bg-indigo-500 text-white flex flex-row items-center p-4 rounded-xl text-xl" disabled>
        <Svg
          className="animate-bounce ml-1 mr-3 h-20 w-20 text-white"
        //   path="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <Circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="red"
            strokeWidth="2.5"
            fill='green'
          />
        </Svg>
        <Text className='text-white'>Loading...</Text>
      </View>
    </View>
  );
};

export default Loading;