// BuyItemScreen.jsx
import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import BackArrowIcon from '../assets/SVGLOGOS/BackArrowSvgIcon';
import CustomInput from '../componentes/CustomeInput';
import CustomInputItem from '../componentes/CustomInputItem';
import CategoryTabs from '../componentes/CategoryTabs';
import FirstImage from '../assets/img1.png';
import SecoundtImage from '../assets/img2.png';
import ThirdImage from '../assets/img3.png';
import Image4 from '../assets/img4.png';
import Image5 from '../assets/img5.png';
import Image6 from '../assets/img6.png';
import StarIcon from '../assets/SVGLOGOS/StarSVG';
import { LayoutStyle } from '../ui/LayoutStyle';
import SideArroeIcon from '../assets/SVGLOGOS/SideArrow';
import ItemCard from '../componentes/ItemCard';
import ProductDetailModal from '../componentes/ProductDetailModal';
import { BuyItemStyles } from '../ui/BuyItemStyle';

const BuyItemScreen = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const handleCardPress = (item) => {
        setSelectedProduct(item);
        setShowModal(true);
    };
    const navigation = useNavigation();
    const categories = ['All Items', 'Beauty', 'Food', 'Gift Card', 'Sports', 'Gadgets'];
    const dummyData = [
        {
            id: '1',
            image: FirstImage,
            use: 'Use',
            rating: '300',
            description: 'This is the title of product',
        },

        {
            id: '2',
            image: SecoundtImage,
            use: 'Use',
            rating: '200',
            description: 'This is the title of product',
        },
        {
            id: '3',
            image: ThirdImage,
            use: 'Use',
            rating: '100',
            description: 'This is the title of product',
        },
        {
            id: '4',
            image: Image4,
            use: 'Use',
            rating: '150',
            description: 'This is the title of product',
        },
        {
            id: '5',
            image: Image5,
            use: 'Use',
            rating: '50',
            description: 'This is the title of product',
        },
        {
            id: '6',
            image: Image6,
            use: 'Use',
            rating: '506',
            description: 'This is the title of product',
        },
    ];
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={BuyItemStyles.header}>
                <View style={BuyItemStyles.iconBG}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <BackArrowIcon />
                    </TouchableOpacity>
                </View>
                <Text style={BuyItemStyles.headerTitle}>Buy Item</Text>
            </View>
            <View>
                <CustomInputItem />
                <CategoryTabs onCategoryChange={(cat) => console.log("Selected:", cat)} />
            </View>

            {/* All Item Container Start */}<View style={{ flex: 1, paddingHorizontal: 8 }}>
                <FlatList
                    data={dummyData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <ItemCard
                            image={item.image}
                            use={item.use}
                            rating={item.rating}
                            description={item.description}
                            onPress={handleCardPress}
                        />
                    )}
                    numColumns={2} 
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    contentContainerStyle={{ paddingBottom: 16 }}
                    showsVerticalScrollIndicator={false}
                />
                <ProductDetailModal
                
                    visible={showModal}
                    product={selectedProduct}
                    onClose={() => setShowModal(false)}
                />
            </View>
        </View>
    );
};

export default BuyItemScreen;

