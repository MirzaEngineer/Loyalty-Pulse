import React from 'react'
import { Text, View } from 'react-native'
import ListMarkIcon from '../assets/SVGLOGOS/ListItemSVG'
import StarIcon from '../assets/SVGLOGOS/StarSVG'
import { LayoutStyle } from '../ui/LayoutStyle'

const ScanList = ({date,title,rating}) => {
       const dummyData = [
            {
                id: '1',
                date: '12-04-2025 | 1:04 PM',
                title: 'Got Point',
                rating: 127
            },
            {
                id: '2',
                date: '13-04-2025 | 11:20 AM',
                title: 'Scanned Product',
                rating: 90
            },
            {
                id: '3',
                date: '14-04-2025 | 4:50 PM',
                title: 'Received Bonus',
                rating: 200
            }
        ];
  return (
    <View style={LayoutStyle.scanList}>
                            <View style={LayoutStyle.leftSide}>
                                <View style={LayoutStyle.iconWrapper}>
                                    <ListMarkIcon />
                                </View>
                                <View>
                                    <Text style={LayoutStyle.toggalDate}>{date}</Text>
                                    <Text style={LayoutStyle.toggalTitle}>{title}</Text>
                                </View>
                            </View>
                            <View style={LayoutStyle.rightSide}>

                                <View style={LayoutStyle.iconStarWrapper}>
                                    <StarIcon />
                                </View>
                                <Text style={LayoutStyle.ratingNum}>{rating}</Text>
                            </View>

                        </View>
  )
}

export default ScanList
