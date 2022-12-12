import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

const CarItem = (props) => {

  const {name, tagline, image, taglineCTA} = props;

  return (
        <View style={styles.carContainer}>
            <ImageBackground 
            source={image}
            style={styles.image}
            />
        
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{tagline}
            <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
          </Text>
          
          
        </View>
        
        <View style={styles.buttonsContainer}>
          <StyledButton 
            type="primary" 
            content={"Custom Order"} 
            onPress={() => {
            console.warn("Custom Order was pressed");
            }} 
          />

          <StyledButton 
            type="secondary" 
            content={"Existing Inventory"} 
            onPress={() => {
            console.warn("Existing inventory was pressed");
            }} 
          />
        </View>
        </View>    
    );
};

export default CarItem; //exporting CarItem as default