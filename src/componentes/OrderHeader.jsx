import { StyleSheet, Text, View } from 'react-native';
import OrderCard from './OrderCard';
import { OrderStyles } from '../ui/OrderStyle';
import SpendingChart from './SpendingChart';

const OrderHeader = () => {
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.headerTop}>
        <Text style={styles.headerTitle}>My Order</Text>
      </View>
      <View style={styles.whiteBox}>
        <View style={styles.boxRow}>
          <OrderCard title={"Total Orders"} number={"225"} />
          <OrderCard title={"Total Spent (PKR)"} number={"2,85,290"} />
        </View>
        <View style={styles.textWrapper}>
          <Text style={OrderStyles.cardType}>Statistics</Text>
          <Text style={OrderStyles.cardTitle}>Spending</Text>
          <SpendingChart />
        </View>
      </View>
    </View>
  );
};

export default OrderHeader;

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: '#FFF',
  },
  headerTop: {
    backgroundColor: "#C43400",
    height: 208, 
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: 40,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerTitle: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "600",
    // fontFamily: "Plus Jakarta Sans",
  },
  whiteBox: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 20,
    marginTop: -110, 
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  boxRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
  },
  textWrapper: {
    flexDirection: "column",
    gap: 7,
    marginTop: 10,
  },
});
