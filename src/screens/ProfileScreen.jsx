// screens/ProfileScreen.js

import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import ProfileIamge from '../assets/ok1.png'
import HomeHeader from '../componentes/HomeHeader';
import LinearBackground from '../componentes/LinearBackground';
import CroseIcon from '../assets/ProfileSvg/CroseSvgIcon';
import ProfileIcon from '../assets/TabIcon/ProfileSvgIcon';
import ProfileImageSvg from '../assets/ProfileSvg/ProfileImageSvg';
import ArrowIcon from '../assets/ProfileSvg/ArrowSvgIcon';
import TickIcon from '../assets/ProfileSvg/TickSvgIcon';
import LinksCard from '../componentes/LinksCard';
import CashRedeemIcon from '../assets/ProfileSvg/CashSvgIcon';
import LevelIcon from '../assets/ProfileSvg/LevelSvgIcon';
import OrderProfileIcon from '../assets/ProfileSvg/OrderSvgIcon';
import LoyaltyIcon from '../assets/ProfileSvg/LoyaltySvgIcon';
import { useNavigation } from '@react-navigation/native';
import { ProfileStyles } from '../ui/ProfileStyle';

const ProfileScreen = () => {
  const navigation = useNavigation()
  return (
    <LinearBackground>
      <View style={ProfileStyles.container}>
        <HomeHeader />
        <View style={ProfileStyles.profileWrapper}>
          <View>
            <View style={ProfileStyles.headder}>
              <Text style={ProfileStyles.headderTitle}>Profile</Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <CroseIcon />
              </TouchableOpacity>
            </View>
            <View style={ProfileStyles.rowWrapper}>
              <View style={ProfileStyles.left}>
                <ProfileImageSvg />
                <View>
                  <View style={ProfileStyles.nameTitel}>
                    <Text style={ProfileStyles.name}>Jakob Rizza</Text>
                    <TickIcon />
                  </View>
                  <Text style={ProfileStyles.email}>jakobrizza@email.com</Text>
                  <View style={ProfileStyles.oringWrapp}>
                    <Text style={ProfileStyles.oringText}>Distributor</Text>
                  </View>
                </View>
              </View>
              <ArrowIcon />
            </View>
          </View>
          <Text style={ProfileStyles.heading2}>Quick Links</Text>
          <View style={[ProfileStyles.gridContainer, { borderBottomWidth: 1, borderColor: "#E6E9EF" }]}>
            <LinksCard title="Go to Redeem" icon={<CashRedeemIcon />} />
            <LinksCard title="Levels" icon={<LevelIcon />} />
            <LinksCard title="All Orders" icon={<OrderProfileIcon />} />
            <LinksCard title="Loyalty Points" icon={<LoyaltyIcon />} />
          </View>
          <View style={[ProfileStyles.gridContainer, { marginTop: 0 }]}>
            <LinksCard style={{ backgroundColor: "#FFF" }} title="Help Center" icon={<CashRedeemIcon />} />
            <LinksCard style={{ backgroundColor: "#FFF" }} title="Terms & Policies" icon={<LevelIcon />} />
          </View>
          <TouchableOpacity
            style={[ProfileStyles.logoutBtn]}
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: "Auth" }],
              });
            }}
          >
            <Text style={ProfileStyles.logoutText}>Logout</Text>
          </TouchableOpacity>
          <View style={ProfileStyles.footer}>
            <Text style={ProfileStyles.footerGrayText}>Version 2.15 (1048757)</Text>
            <Text style={ProfileStyles.footerOringeText}>By GULF PACKAGING</Text>
          </View>
        </View>
      </View>
    </LinearBackground>
  );
};
export default ProfileScreen;

