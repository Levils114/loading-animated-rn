import { MotiView } from '@motify/components';
import React from 'react';
import { Text, View } from 'react-native';

interface LoadingProps{
   size: number;
}

export default function Loading({ size }: LoadingProps){
   return(
      <MotiView 
         from={{
            width: size,
            height: size,
            borderRadius: size/2,
            borderWidth: 1,
            shadowOpacity: 0.6,
            shadowRadius: 0,
         }}
         animate={{
            width: size + 20,
            height: size + 20,
            borderRadius: (size+20)/2,
            borderWidth: size/10,
            shadowOpacity: 1,
            shadowRadius: 20,
         }}
         transition={{
            type: 'timing',
            duration: 1000,
            loop: true,
            //repeat: Infinity,
         }}
         style={{
            width: size,
            height: size,
            borderRadius: size/2,
            borderWidth: size/10,
            borderColor: "#FFF",
            shadowColor: "#FFF",
            shadowOffset: { width: 0, height: 0, },
            shadowOpacity: 1,
            shadowRadius: 10,
         }}
      />
   );
}