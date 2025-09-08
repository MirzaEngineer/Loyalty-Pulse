import React from 'react'
import { Image, Text, View } from 'react-native'
import { LayoutStyle } from '../ui/LayoutStyle'
import starIcon from "../assets/stare.gif"
import goldStar from "../assets/goldstar.png";

const LayoutHeader = ({title}) => {
  return (
    <View style={LayoutStyle.headerContainer}>
                    <Text style={LayoutStyle.headTitle}>{title}</Text>
                    {/* inner card */}
                    {/* {Start} */}
                    <View style={LayoutStyle.cardContainer}>
                        <View style={LayoutStyle.pointCard}>

                            <View style={LayoutStyle.leftSection}>
                                <Text style={LayoutStyle.pointTitle}>Total Points Earned</Text>
                                <View style={LayoutStyle.imageContainer}>
                                    <Image style={LayoutStyle.pointImage} source={starIcon} />
                                    <Text style={LayoutStyle.pointsText}>12,500</Text>
                                </View>
                            </View>
                            <View style={LayoutStyle.starWrapper}>
                                <Image source={goldStar} style={LayoutStyle.star1} />
                                <Image source={goldStar} style={LayoutStyle.star2} />
                                <Image source={goldStar} style={LayoutStyle.star3} />
                            </View>


                        </View>

                        <View style={LayoutStyle.silverContainer}>
                            <View style={LayoutStyle.levelTag}>
                                <Text style={LayoutStyle.levelText}>Your Level</Text>
                            </View>
                            <View style={LayoutStyle.imageFlex}>

                                <Image source={goldStar} style={LayoutStyle.silverImage} />
                                <Text style={LayoutStyle.silverText}>Silver</Text>
                            </View>
                        </View>

                        <View style={LayoutStyle.scanWrapper}>
                            <Text style={LayoutStyle.scanText}>Scans Progress:</Text>
                            <Text style={LayoutStyle.scanNum}>360/1000</Text>
                        </View>


                        <View style={LayoutStyle.progressContainer}>
                            <View style={[LayoutStyle.segment, LayoutStyle.fullOrange]} />
                            <View style={[LayoutStyle.segment, LayoutStyle.halfBlack]} />
                            <View style={[LayoutStyle.segment, LayoutStyle.empty]} />
                            <View style={[LayoutStyle.segment, LayoutStyle.empty]} />

                        </View>

                    </View>
                    {/* {End} */}
                </View>
  )
}

export default LayoutHeader
