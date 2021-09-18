import React from 'react';
import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from 'react-native-table-component';
const CaseDetails = {
  tableData: [
    ['Filing No', 'WPIL/  1955/2020', 'Filing Date:08-01-2020'],
    ['CNR', 'UPHC010053602020', 'Date of Registration:10-08-2020'],
  ],
};

const CaseStatus = {
  tableData: [
    ['First Hearing Date ', '10th January 2020'],
    ['Next Hearing Date ', 'Case is not on list'],
    ['Stage of Case ', 'For Admission'],
    ['Coram ', '---'],
    ['Bench Type ', 'Division Bench'],
    ['Judicial Branch ', 'WRITS Civil'],
    ['Causelist Type ', '---'],
    ['State ', 'UTTARPRADESH'],
    ['District ', 'KANPUR NAGAR'],
  ],
};
const Petitioners = {
  tableHead: ['Petitioner', 'Respondent'],
  tableData: [
    ['NAVYUG ABHIYAN SAMITI AND ANOTHER', 'UNION OF INDIA AND 5 OTHERS'],
    [
      'Advocate-ASHUTOSH SHARMA',
      'Advocate - A.S.G.I,SHAKTI DHAR DUBE,SANJAY KUMAR OM,C.S.C',
    ],
  ],
};

const CategoryDetails = {
  tableData: [
    ['Category', 'PUBLIC INTEREST LITIGATION ( 370000 )'],
    ['Sub Category', 'MISCELLANEOUS ( 90 ) '],
  ],
};

const IADetails = {
  tableHead: [
    'Application(s) Number',
    'Party',
    'Date of Filing',
    'Next / Disposal Date',
    'IA Status',
  ],

  tableData: [
    [
      'IA/1/2020 Classification : Misc. Application Bench :5918',
      'NAVYUG ABHIYAN SAMITI AND ANOTHER Vs UNION OF INDIA AND 5 OTHERS',
      '09-01-2020',
      '10-01-2020',
      'Pending',
    ],
    [
      'IA/2/2020 Classification : Vakalatnam Application Send to Concerned Section',
      'NAVYUG ABHIYAN SAMITI AND ANOTHER Vs UNION OF INDIA AND 5 OTHERS',
      '30-07-2020',
      '  ',
      'Pending',
    ],
    [
      'IA/3/2021 Classification : Misc. Application Application Send to Concerned Section',
      'NAVYUG ABHIYAN SAMITI AND ANOTHER Vs UNION OF INDIA AND 5 OTHERS',
      '19-04-2021',
      '     ',
      'Pending',
    ],
  ],
  widthArr: [100, 200, 200, 200, 200],
};

const ListingDetails = {
  tableHead: [
    'Cause List Type',
    'Honble Mr./Ms./Dr. Justice',
    'Last Listing Date',
    'Stage of Listing',
    'Last Short Order',
  ],

  tableData: [
    [
      'Daily Cause List',
      'BISWANATH SOMADDER , Dr. Y. K. SRIVASTAVA ( Bench: 5897 )',
      '04-03-2020',
      'For Admission',
      'List after a fixed period',
    ],
  ],
  widthArr: [500, 500, 10, 10, 10],
};
const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View Style={{Flex: 1, flexDirection: 'column'}}>
          <View
            style={{Flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              High Court of Judicature at Allahabad
            </Text>
            <Text style={{fontSize: 15}}>
              Case Status - WRIT - PUBLIC INTEREST LITIGATION ( WPIL ) - [
              33/2020 ]
            </Text>
          </View>
          <View style={{padding: 10}}>
            <Table borderStyle={{borderWidth: 1}}>
              <TableWrapper style={styles.wrapper}>
                <Rows
                  data={CaseDetails.tableData}
                  flexArr={[2, 2, 2]}
                  style={styles.row}
                  textStyle={styles.text}
                />
              </TableWrapper>
            </Table>
          </View>
          <View
            style={{Flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{fontSize: 18}}>Case Status</Text>
          </View>
          <View style={{padding: 10}}>
            <Table borderStyle={{borderWidth: 1, borderColor: 'red'}}>
              <TableWrapper style={styles.wrapper}>
                <Rows
                  data={CaseStatus.tableData}
                  flexArr={[2, 2]}
                  style={{height: 40}}
                  textStyle={styles.text}
                />
              </TableWrapper>
            </Table>
          </View>

          <View
            style={{Flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{fontSize: 18}}>
              Petitioner/Respondent and their Advocate(s)
            </Text>
          </View>
          <View style={{padding: 10}}>
            <Table borderStyle={{borderWidth: 1}}>
              <Row
                data={Petitioners.tableHead}
                flexArr={[2, 2]}
                style={styles.head}
                textStyle={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 16,
                }}
              />
              <TableWrapper style={styles.wrapper}>
                <Rows
                  data={Petitioners.tableData}
                  flexArr={[2, 2]}
                  style={{height: 40}}
                  textStyle={styles.text}
                />
              </TableWrapper>
            </Table>
          </View>

          <View
            style={{Flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{fontSize: 18}}>Category Details</Text>
          </View>
          <View style={{padding: 10}}>
            <ScrollView Horizontal={true}>
              <Table borderStyle={{borderWidth: 1}}>
                <TableWrapper style={styles.wrapper}>
                  <Rows
                    data={CategoryDetails.tableData}
                    flexArr={[2, 2]}
                    style={{height: 40}}
                    textStyle={styles.text}
                  />
                </TableWrapper>
              </Table>
            </ScrollView>
          </View>

          <View
            style={{Flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{fontSize: 18}}>IA Details</Text>
          </View>
          <View style={{padding: 10}}>
            <ScrollView horizontal={true}>
              <Table borderStyle={{borderWidth: 1}}>
                <Row
                  data={IADetails.tableHead}
                  flexArr={[1, 1, 1, 1, 1]}
                  widthArr={IADetails.widthArr}
                  style={styles.head}
                  textStyle={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}
                />
                <TableWrapper style={styles.wrapper}>
                  <Rows
                    data={IADetails.tableData}
                    flexArr={[1, 1, 1, 1, 1]}
                    widthArr={IADetails.widthArr}
                    style={{height: 60}}
                    textStyle={styles.text}
                  />
                </TableWrapper>
              </Table>
            </ScrollView>
          </View>

          <View
            style={{Flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{fontSize: 18}}>Last Listing Detail</Text>
          </View>
          <View style={{padding: 10}}>
            <ScrollView horizontal={true}>
              <Table borderStyle={{borderWidth: 1}}>
                <Row
                  data={ListingDetails.tableHead}
                  flexArr={[1, 1, 1, 1, 1]}
                  style={styles.head}
                  widthArr={ListingDetails.widthArr}
                  textStyle={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}
                />
                <TableWrapper style={styles.wrapper}>
                  <Rows
                    data={ListingDetails.tableData}
                    widthArr={ListingDetails.widthArr}
                    flexArr={[1, 1, 1, 1, 1]}
                    style={{height: 60}}
                    textStyle={styles.text}
                  />
                </TableWrapper>
              </Table>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  // container: { flex: 1, padding: 16, paddingTop: 100, backgroundColor: '#fff' },
  head: {height: 60},
  //head1: {height: 60},
  wrapper: {flexDirection: 'row'},
  title: {flex: 1, backgroundColor: '#2ecc71'},
  row: {height: 60, width: '100%'},
  text: {textAlign: 'center'},
});
export default App;
