import { TouchableOpacity, Text, View, FlatList, ScrollView } from "react-native"
import { useState } from "react";
import FilterModal from "../componentes/FilterModal";
import ScanList from "../componentes/ScanList";
import { LayoutStyle } from "../ui/LayoutStyle";
import LayoutHeader from "../componentes/LayoutHeader";
import LevelsTab from "../componentes/LevelsTab";
import RedeemTab from "../componentes/RedeemTab";

const LayoutPoint = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('History');

  const tabs = ['History', 'Levels', 'Redeem'];

  const historyData = [
    { id: '1', date: '12-04-2025 | 1:04 PM', title: 'Got Point', rating: "127" },
    { id: '2', date: '13-04-2025 | 11:20 AM', title: 'Scanned Product', rating: "90" },
    { id: '3', date: '14-04-2025 | 4:50 PM', title: 'Received Bonus', rating: "200" },
    { id: '4', date: '20-04-2001 | 3:02 AM', title: 'Got Point', rating: "120" },
    { id: '5', date: '10-02-2023 | 12:00 PM', title: 'Got Point', rating: "17" },
  ];
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 15 }}>
        <LayoutHeader title={"Layout Points"} />
        <View style={{ marginTop: 120 }}>
          <View style={LayoutStyle.buttonWrapper}>
            <View style={LayoutStyle.btnFlex}>
              {tabs.map((tab, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    LayoutStyle.buttonItem,
                    activeTab === tab && LayoutStyle.buttonActive
                  ]}
                  onPress={() => setActiveTab(tab)}
                >
                  <Text
                    style={[
                      LayoutStyle.btnText,
                      activeTab === tab && LayoutStyle.btnTextActive
                    ]}
                  >
                    {tab}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        <View style={{ flex: 1 }}>
          {activeTab === 'History' && (
            <FlatList
              data={historyData}
              keyExtractor={(item) => item.id}
              nestedScrollEnabled={true}
              scrollEnabled={false} 
              contentContainerStyle={{
                paddingHorizontal: 20,
                paddingTop: 20,
                paddingBottom: 100,
              }}
              ListHeaderComponent={() => (
                <View style={LayoutStyle.historyHeader}>
                  <Text style={LayoutStyle.historyTitly}>Scan History</Text>
                  <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                    style={LayoutStyle.selectField}
                  >
                    <Text style={LayoutStyle.historyMonth}>This month {'>'}</Text>
                  </TouchableOpacity>
                  <FilterModal
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                  />
                </View>
              )}
              renderItem={({ item }) => (
                <ScanList
                  date={item.date}
                  title={item.title}
                  rating={item.rating}
                />
              )}
            />
          )}

          {activeTab === 'Levels' && (
            <ScrollView
              nestedScrollEnabled={true}
              contentContainerStyle={{ paddingBottom: 100 }}
            >
              <LevelsTab />
            </ScrollView>
          )}

          {activeTab === 'Redeem' && (
            <ScrollView
              nestedScrollEnabled={true}
              contentContainerStyle={{ paddingBottom: 100 }}
            >
              <RedeemTab navigation={navigation} />
            </ScrollView>
          )}
        </View>
      </ScrollView>
    </View>
  )
}

export default LayoutPoint
