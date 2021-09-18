import React from 'react';
import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
//import {DataTable} from 'react-native-paper';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from 'react-native-table-component';
const CaseDetails = {
  tableHead: ['Case Type', 'TS - TITLE SUIT', '', ''],
  //tableTitle: ['Row', 'Row 2', 'Row 3', 'Row 4'],
  tableData: [
    ['Filing Number', ' 3534/2020', 'Filing Date', '10-08-2020'],
    ['Registration Number', '576/2020', 'Registration Date', ' 10-08-2020'],
    ['CNR Number', ' WBCC01-001921-2020', ''],
  ],
};

const CaseStatus = {
  //tableHead: ['Case Type', 'TS - TITLE SUIT', ''],
  //tableTitle: ['Row', 'Row 2', 'Row 3', 'Row 4'],
  tableData: [
    ['First Hearing Date', '10th August 2020 '],
    ['Next Hearing Date', '13th September 2021'],
    ['Case Stage', 'Hearing of Petition'],
    ['Court Number and Judge', '4-LD JUDGE 4th BENCH'],
  ],
};

const Acts = {
  tableHead: [' Under Act(s)', 'Under Section(s)'],
  //tableTitle: ['Row', 'Row 2', 'Row 3', 'Row 4'],
  tableData: [['Specific Relief Act', '34']],
};

const Orders = {
  tableHead: ['Order Number', 'Order Date', 'Order Details'],
  //tableTitle: ['Row', 'Row 2', 'Row 3', 'Row 4'],
  tableData: [['1', '15-03-2021', 'Interlocatory Order']],
};
const Casehistory = {
  tableHead: [
    'Registration Number',
    'Judge',
    'Business on Date',
    'Hearing Date',
    'Purpose of Hearing',
  ],
  tableData: [
    [
      '576/2020',
      'LD JUDGE 4th BENCH',
      '10-08-2020',
      '10-09-2020',
      'Requisites',
    ],
    [
      '576/2020',
      'LD JUDGE 4th BENCH',
      '10-08-2020',
      '10-09-2020',
      'Written Statement',
    ],
    [
      '576/2020',
      'LD JUDGE 4th BENCH',
      '10-08-2020',
      '10-09-2020',
      'Hearing of Petition',
    ],
    [
      '576/2020',
      'LD JUDGE 4th BENCH',
      '10-08-2020',
      '10-09-2020',
      'Hearing of Petition',
    ],
    [
      '576/2020',
      'LD JUDGE 4th BENCH',
      '10-08-2020',
      '10-09-2020',
      'Hearing of Petition',
    ],
  ],
};

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View Style={{Flex: 1, flexDirection: 'column'}}>
          <View
            style={{Flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              City Civil Court, Calcutta
            </Text>
            <Text style={{fontSize: 16}}>Case Details</Text>
          </View>
          <View style={{padding: 10}}>
            <Table borderStyle={{borderWidth: 1}}>
              <Row
                data={CaseDetails.tableHead}
                flexArr={[2, 2, 1, 1]}
                style={styles.head}
                textStyle={styles.text}
              />
              <TableWrapper style={styles.wrapper}>
                <Rows
                  data={CaseDetails.tableData}
                  flexArr={[2, 2, 1, 1]}
                  style={styles.row}
                  textStyle={styles.text}
                />
              </TableWrapper>
            </Table>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{color: 'red', fontSize: 16, fontWeight: 'bold'}}>
              Case Status
            </Text>
          </View>
          <View style={{padding: 10}}>
            <Table borderStyle={{borderWidth: 1, borderColor: 'red'}}>
              <TableWrapper style={styles.wrapper}>
                <Rows
                  data={CaseStatus.tableData}
                  flexArr={[2, 2]}
                  style={styles.row}
                  textStyle={{
                    textAlign: 'center',
                    color: 'red',
                    fontWeight: 'bold',
                  }}
                />
              </TableWrapper>
            </Table>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Petitioner and Advocate
            </Text>
          </View>
          <View style={{padding: 10}}>
            <View
              style={{
                borderWidth: 1,
                //  width: '100%',
                padding: 10,
                height: 100,
                backgroundColor: '#E6F6F5',
              }}>
              <Text>1) Niru Bhutoria</Text>
              <Text style={{marginLeft: 15}}>
                Advocate - Bimal Kumar Puruhit
              </Text>
            </View>
          </View>

          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Respondent and Advocate
            </Text>
          </View>
          <View style={{padding: 10}}>
            <View
              style={{
                borderWidth: 1,
                //  width: '100%',
                padding: 10,
                height: 100,
                backgroundColor: '#E3DDF2',
              }}>
              <Text>1) The Calcutta Racket Club</Text>
              <Text></Text>
              <Text>2) Hrishikesh Shroff</Text>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Acts</Text>
          </View>
          <View style={{padding: 10}}>
            <Table
              borderStyle={{borderWidth: 1}}
              style={{backgroundColor: '#F9E5E9'}}>
              <Row
                data={Acts.tableHead}
                flexArr={[2, 2]}
                style={styles.head}
                textStyle={{textAlign: 'center', fontWeight: 'bold'}}
              />
              <TableWrapper style={styles.wrapper}>
                <Rows
                  data={Acts.tableData}
                  flexArr={[2, 2]}
                  // style={styles.row}
                  textStyle={styles.text}
                />
              </TableWrapper>
            </Table>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Case History</Text>
          </View>
          <View style={{padding: 10}}>
            <Table
              borderStyle={{borderWidth: 1}}
              style={{backgroundColor: '#EAF3EF'}}>
              <Row
                data={Casehistory.tableHead}
                flexArr={[1, 1, 1, 1, 1]}
                style={styles.head1}
                textStyle={{textAlign: 'center', fontWeight: 'bold'}}
              />
              <TableWrapper style={styles.wrapper}>
                <Rows
                  data={Casehistory.tableData}
                  flexArr={[1, 1, 1, 1, 1]}
                  style={styles.row}
                  textStyle={styles.text}
                />
              </TableWrapper>
            </Table>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Orders</Text>
          </View>
          <View style={{padding: 10}}>
            <Table
              borderStyle={{borderWidth: 1}}
              style={{backgroundColor: '#EFEFEF'}}>
              <Row
                data={Orders.tableHead}
                flexArr={[2, 2, 2]}
                style={styles.head1}
                textStyle={{textAlign: 'center', fontWeight: 'bold'}}
              />
              <TableWrapper style={styles.wrapper}>
                <Rows
                  data={Orders.tableData}
                  flexArr={[2, 2, 2]}
                  style={styles.row}
                  textStyle={styles.text}
                />
              </TableWrapper>
            </Table>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // container: { flex: 1, padding: 16, paddingTop: 100, backgroundColor: '#fff' },
  head: {height: 40},
  head1: {height: 60},
  wrapper: {flexDirection: 'row'},
  title: {flex: 1, backgroundColor: '#2ecc71'},
  row: {height: 60, width: '100%'},
  text: {textAlign: 'center'},
});
export default App;
