import { Text, View, StatusBar, TouchableOpacity, StyleSheet, Dimensions, ScrollView, Image, Pressable, SafeAreaView, Alert } from 'react-native';
import LinearBackground from '../componentes/LinearBackground';
// import pointIcon from '../assets/pointIcon.png';
import starIcon from '../assets/stare.gif'; 
import BoxIcon from "../assets/ok1.png"
import { HomeStyle } from '../ui/HomeStyle';
import HomeBottom from '../navigation/HomeBottom';
import SilverLog from '../assets/SVGLOGOS/SilverSVG';
import SilverLogo from '../assets/HomeSvg/SilverSvgLogo';
import SideArroeIcon from '../assets/SVGLOGOS/SideArrow';
import ListMarkIcon from '../assets/SVGLOGOS/ListItemSVG';
import { LayoutStyle } from '../ui/LayoutStyle';
import SearchIcon from '../assets/HomeSvg/SearchSvgIcon';
import BileIcon from '../assets/HomeSvg/BailSvgIcon';
import HomeHeader from '../componentes/HomeHeader';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get("window").width;

const HomeScreen = () => {
  const navigation = useNavigation() 
  const scanData = [
  {
    id: 1,
    date: '12-04-2025 | 1:04 PM',
    points: 125,
    text: 'Got Point',
  },
  {
    id: 2,
    date: '10-04-2025 | 5:30 PM',
    points: 100,
    text: 'Got Point',
  },
  {
    id: 3,
    date: '09-04-2025 | 3:15 PM',
    points: 90,
    text: 'Got Point',
  },
];

  return (
    <LinearBackground>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <SafeAreaView>
      <ScrollView 
       contentContainerStyle={{ paddingBottom: 84 }}
  showsVerticalScrollIndicator={false}
      
      >
        <HomeHeader/>
      <View style={HomeStyle.pointCard}>
        <Text style={HomeStyle.pointsLable}>Totel Point Earned</Text>
        <View style={HomeStyle.pointRow}>
          <View style={HomeStyle.imageWrapper}>
            <Image source={starIcon} style={HomeStyle.imageStyle}/>
          </View>
          <Text style={HomeStyle.pointText}>12,500</Text>
        </View>
        <View>          
        </View>
      </View>
      <View style={HomeStyle.tierCard}>
       <View style={HomeStyle.levelHeader}>
        <View style={{flexDirection:"column",gap:10}}>
        <Text style={HomeStyle.levelTitle}>Your Level</Text>
       <Text style={HomeStyle.levelText}>Silver</Text>
       </View>
       <View>
             <SilverLogo/>
       </View>
       </View>
       <View style={HomeStyle.textContainer}>
        <Text style={HomeStyle.scaneText}>Scans Progress:</Text>
        <Text style={HomeStyle.scaneNumber}>307/1000</Text>
       </View>
       <View style={HomeStyle.progressContainer}>
        <View style={[HomeStyle.segment,HomeStyle.fullOrange]} />
        <View style={[HomeStyle.segment,HomeStyle.halfBlack]} />
        <View style={[HomeStyle.segment,HomeStyle.empty]} />
        <View style={[HomeStyle.segment,HomeStyle.empty]} />
      </View>
      <Text style={HomeStyle.scaneTitle}>640 scans required to reach Gold</Text>
      <View style={HomeStyle.orderCard}>
        <View style={HomeStyle.orderVardTop}>
          <View>
          <Text style={HomeStyle.orderTital}>Total Order</Text>
          <Text style={HomeStyle.totalOrder}>225</Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("Orders")} >
        <SideArroeIcon/>
        </TouchableOpacity>
        </View>

      </View>
      
      </View>
      <View style={HomeStyle.scaneContainer}>
        <View style={HomeStyle.scaneHeader}>
          <Text style={HomeStyle.scaneTitel}>Recent Scans</Text>
       <TouchableOpacity
      style={HomeStyle.historyBtn}
      onPress={()=>navigation.navigate("Layout")}
      >

    <Text style={HomeStyle.historyText}>History</Text>
    <Text style={HomeStyle.arrow}>›</Text>
  </TouchableOpacity>
        </View>
        <View style={HomeStyle.scanList}>
           {scanData.map((item) => (
    <View style={HomeStyle.scaneBoxContainer} key={item.id}>
      <View style={HomeStyle.scaneBox}>
        <View style={LayoutStyle.iconWrapper}>
                                    <ListMarkIcon />
                                </View>
        
        <View style={HomeStyle.info}>
          <Text style={HomeStyle.boxDate}>{item.date}</Text>
          <Text style={HomeStyle.boxText}>{item.text}</Text>
        </View>
      </View>
      <View style={HomeStyle.ratingData}>
        <Image source={starIcon} style={HomeStyle.ratingStar} />
        <Text style={HomeStyle.ratingNumber}>{item.points}</Text>
      </View>
    </View>
  ))}
        </View>
      </View>
      </ScrollView>
      </SafeAreaView>
      
    </LinearBackground>
  );
};

export default HomeScreen;
