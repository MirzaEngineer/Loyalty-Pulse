import React from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { HomeStyle } from '../ui/HomeStyle'
import SearchIcon from '../assets/HomeSvg/SearchSvgIcon'
import BileIcon from '../assets/HomeSvg/BailSvgIcon'

const HomeHeader = () => {
    return (

        <View style={HomeStyle.header}>
            <View style={{ flex: 1 }}>
                <Text style={HomeStyle.welcomeText}>Hey, Jackob</Text>
                <Text style={HomeStyle.subText}>
                    It's amazing day to scan and earn more points.
                </Text>
            </View>

            <View style={HomeStyle.iconContaner}>
                <TouchableOpacity style={HomeStyle.iconBox} onPress={() => Alert.alert("SearchIcon")}>
                    <SearchIcon />
                    {/* <Text style={HomeStyle.icon}>🔍</Text> */}
                </TouchableOpacity>
                <TouchableOpacity style={HomeStyle.iconBox} onPress={() => Alert.alert("BileIcon")}>
                    <BileIcon />
                    {/* <Text style={HomeStyle.icon}>🔔</Text> */}
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default HomeHeader
