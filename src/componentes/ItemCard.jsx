import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import StarIcon from '../assets/SVGLOGOS/StarSVG';
import { LayoutStyle } from '../ui/LayoutStyle';
import SideArroeIcon from '../assets/SVGLOGOS/SideArrow';

const ItemCard = ({ image, use, rating, description,onPress }) => {
  return (
    <View style={Styles.ItemContainer}>
      <TouchableOpacity onPress={onPress}>
        <View style={Styles.cardItem}>
          <Image source={image} style={Styles.imageWH} />
          <Text style={Styles.cardDescription}>{description}</Text>
          <View style={Styles.productDetail}>
            <Text style={Styles.detailText}>{use}</Text>
            <View style={[LayoutStyle.iconStarWrapper, { width: 16, height: 16 }]}>
              <StarIcon />
            </View>
            <Text style={Styles.detailText}>{rating}</Text>
            <SideArroeIcon />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ItemCard;

const Styles = StyleSheet.create({
  ItemContainer: {
    // padding: 4,
    paddingTop:8,
    paddingHorizontal:3,
    width: '50%', // 🟠 Two columns
  },
  cardItem: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E6E9EF',
    padding: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWH: {
    width: 155,
    height: 96,
    borderRadius: 4,
  },
  cardDescription: {
    overflow: 'hidden',
    marginVertical: 16,
    color: '#18191B',
    fontSize: 11,
    fontWeight: '400',
    alignSelf: 'stretch',
  },
  productDetail: {
    backgroundColor: '#FFF',
    alignSelf: 'stretch',
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#C5C7D0',
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailText: {
    color: '#18191B',
    fontSize: 14,
    fontWeight: '600',
  },
});
