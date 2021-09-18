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
    [
      'Diary No.',
      '44424/2019 Filed on 09-12-2019 03:42 PM [SECTION: IV-C]       PENDING ',
    ],
    [
      'Case No.',
      'SLP(C) No.000033 -/ 2020 Registered on 03-01-2020 (Verified ON 06-01-2020)',
    ],
    ['Present/Last Listed On', '28-02-2020 [REGISTER(J)- II]'],
    [
      'Status/Stage',
      'Pending -(Motion Hearing [After NOTICE (FOR ADMISSION)- CIVIL CASES]) List before court/bench-ord at 28-02-2020',
    ],
    ['Category', ''],
    ['ACT', ''],
  ],
};
const CourtDetails = {
  widthArr: [
    50, 170, 200, 250, 300, 350, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    100, 100, 100, 100,
  ],
  tableHead: [
    'S.No.',
    'Court',
    'Agency State',
    'Agency Code',
    'Case No.',
    'Order Date',
    'CNR No./Designation',
    'Judge1/Judge2/Judge3',
    'Police Station',
    'Crime No/Year',
    'Authority/Organisation/Impugned Order No.',
    'Judgement Challanged',
    'Judgement Type',
    'Judgement Covered in',
    'Vehicle Number',
    'Reference court/State/District/No.',
    'Relied Upon court/State/District/No.',
    'Transfer To state/District/No.',
    'Government Notification State/No./Date',
  ],
  tableData: [
    [
      '1',
      'High Court',
      'MADHYA PRADESH',
      'HIGH COURT OF M.P AT GWALIOR',
      'FA-34-2003',
      '26-08-2019',
      '111',
      ' ',
      '-//',
      'Yes',
      '-',
      '',
      '',
      '',
      '-/-/-/--',
      '-/-/-/--',
      '-/-/-/--',
      '-/-/-/--',
      '-/-/-/--',
    ],
  ],
};
const ListingDates = {
  widthArr: [50, 50, 200, 200, 100, 100, 50, 100, 100],
  tableHead: [
    'CL Date',
    'Misc/Regular',
    'Stage',
    'Purpose',
    'Proposed/List in',
    'Judges',
    'IA',
    'Remarks',
    'Listed',
  ],

  tableData: [
    [
      '28-02-2020',
      'Misc',
      '[SERVICE /COMPLIANCE]-BEFORE REGISTER(J)',
      'Next Week/Week Commencing/C.O.Week',
      'Registrar',
      'REGISTRAR (J) II',
      ' ',
      'List Before Court/Bench',
      'LISTED',
    ],
    ['', '', '', '', '', '', '', '', ''],
  ],
};
const interlocutary = {
  tableTitle: ['INTERLOCUTARY APPLICATION(s)'],
  widthArr: [50, 200, 50, 200, 100, 50, 50, 200],
  tableHead: [
    'Reg.No/I.A No.',
    'Particular',
    'Remark',
    'Filed By',
    'Filing Date',
    'Sr.No',
    'Status',
    'Entered On',
  ],
  tableData: [
    [
      '784/2020',
      'EXEMPTION FROM FILING O.T',
      '         ',
      'PRATIBHA JAIN',
      '03-01-2020',
      '1',
      'P',
      '03-01-2020 15:12:42',
    ],
    [
      '4334/2020',
      'EXEMPTION FROM FILING O.T',
      '         ',
      'PRATIBHA JAIN',
      '03-01-2020',
      '2',
      'P',
      '03-01-2020 15:12:42',
    ],
    [
      '784/2020',
      'EXEMPTION FROM FILING O.T',
      '          ',
      'PRATIBHA JAIN',
      '03-01-2020',
      '1',
      'P',
      '03-01-2020 15:12:42',
    ],
  ],
};
const documents = {
  tableTitle: ['OTHER DOCUMENT(s)'],
  widthArr: [100, 200, 150, 100, 200],
  tableHead: [
    'Doc. No.',
    'Document Type',
    'Filed By',
    'Filing Date',
    'Enter By',
  ],
  tableData: [
    [
      '5787/2020',
      'PROCESS FEE ',
      'PRATIBHA JAIN',
      '03-01-2020',
      'LAXMAN 10-01-2020 03.06 PM',
    ],
    [
      '15227/2020',
      'MEMO OF APPEARANCE ',
      'RAHUL KAUSHIK',
      '03-01-2020',
      'RUPESH VIJAYI 10-01-2020 03.06 PM',
    ],
    [
      '64366/2021',
      'MEMO OF APPEARANCE ',
      'Mrinal Gopal Elker',
      '03-01-2020',
      'RUPESH VIJAYI 10-01-2020 03.06 PM',
    ],
  ],
};

const CourtFees = {
  tableTitle: ['Court Fees'],

  tableData: [['Total Court Fee:1830'], ['Total Court Fee:1830']],
};

const Notices = {
  widthArr: [50, 200, 300, 200, 100, 100, 100, 100, 100, 100, 100, 100],
  tableHead: [
    'S. No.',
    'Process Id',
    'Notice Type',
    'Name',
    'State/District',
    'Station',
    'Issue Date',
    'Returnable Date',
    'Dispatch Date',
    'Serve Date',
    'Ack Date',
    'Served/Unserved',
  ],
  tableData: [
    [
      '1',
      '58028/2021-06-02',
      'Letter for curing the defects in documents',
      'Through Mrinal Gopal Eiker 2566',
      'NEW DELHI/DELHI',
      '',
      '02-06-2021',
      '19-07-2021',
      '',
      '',
      '',
      '',
    ],

    [
      '2',
      '9681/2020-01-16',
      'letter for certified copy',
      'PRATIBHA JAIN-518',
      'NEW DELHI/DELHI',
      '',
      '16-01-2020',
      '24-02-2020',
      '',
      '',
      '',
      '',
    ],
    [
      '3',
      '9681/2020-01-16',
      'letter for certified copy',
      'Through HIGH COURT OF M.P AT GWALIOR MADHYA PRADESH',
      '/',
      '',
      '16-01-2020',
      '24-02-2020',
      '',
      '',
      '',
      '',
    ],
  ],
};

const DefaultDetails = {
  widthArr: [50, 100, 200, 200, 100],
  tableHead: [
    'S.No.',
    'Default',
    'Remarks',
    'Notification Date',
    'Removed On Date',
  ],
  tableData: [
    ['1', 'Other', 'MEMO OF PARTIES UNSIGNED', '10-12-2019', '03-01-2020'],
    ['2', 'Other', 'MEMO OF PARTIES UNSIGNED', '10-12-2019', '03-01-2020'],
    ['3', 'Other', 'MEMO OF PARTIES UNSIGNED', '10-12-2019', '03-01-2020'],
    ['4', 'Other', 'MEMO OF PARTIES UNSIGNED', '10-12-2019', '03-01-2020'],
  ],
};

const JudgementOrders = {
  tableTitle: ['Date of Judgment/Order'],
  tableData: [
    ['28-02-2020 [ROP]-of Main Case'],
    ['10-01-2020 [ROP]-of Main Case'],
  ],
};
const OfficeReport = {
  tableHead: ['S.No.', 'Process Id', 'Order Date', 'Receiving Date'],
  tableData: [
    ['1', '5', '10-01-2020', '09-01-2020 12:11:41'],
    ['2', '', '28-02-2020', '26-02-2020 14:31:39'],
  ],
};

const App = ({props}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{Flex: 1, flexDirection: 'column'}}>
          <View
            style={{Flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{fontSize: 20, textDecorationLine: 'underline'}}>
              Case Details
            </Text>
          </View>
          <View style={{padding: 10}}>
            <Table borderStyle={{borderWidth: 1}}>
              <TableWrapper style={styles.wrapper}>
                <Rows
                  data={CaseDetails.tableData}
                  flexArr={[2, 2]}
                  style={styles.row}
                  textStyle={{
                    textAlign: 'center',
                  }}
                />
              </TableWrapper>
            </Table>
          </View>
          <View
            style={{Flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{fontSize: 20, textDecorationLine: 'underline'}}>
              Earlier Court Details
            </Text>
          </View>
          <View style={{padding: 10}}>
            <ScrollView horizontal={true}>
              <Table borderStyle={{borderWidth: 1}}>
                <Row
                  data={CourtDetails.tableHead}
                  widthArr={CourtDetails.widthArr}
                  flexArr={[
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                  ]}
                  style={styles.head}
                  textStyle={styles.headertext}
                />
                <TableWrapper style={styles.wrapper}>
                  <Rows
                    data={CourtDetails.tableData}
                    widthArr={CourtDetails.widthArr}
                    flexArr={[
                      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                    ]}
                    style={styles.row}
                    textStyle={{
                      textAlign: 'center',
                    }}
                  />
                </TableWrapper>
              </Table>
            </ScrollView>
          </View>
          <View
            style={{Flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{fontSize: 20, textDecorationLine: 'underline'}}>
              Listing Dates
            </Text>
          </View>
          <View style={{padding: 10}}>
            <ScrollView horizontal={true}>
              <Table borderStyle={{borderWidth: 1}}>
                <Row
                  data={ListingDates.tableHead}
                  widthArr={ListingDates.widthArr}
                  flexArr={[1, 1, 1, 1, 1, 1, 1, 1, 1]}
                  style={styles.head}
                  textStyle={styles.headertext}
                />
                <TableWrapper style={styles.wrapper}>
                  <Rows
                    data={ListingDates.tableData}
                    widthArr={ListingDates.widthArr}
                    flexArr={[1, 1, 1, 1, 1, 1, 1, 1, 1]}
                    style={styles.row}
                    textStyle={{
                      textAlign: 'center',
                    }}
                  />
                </TableWrapper>
              </Table>
            </ScrollView>
          </View>

          <View
            style={{Flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{fontSize: 18, textDecorationLine: 'underline'}}>
              INTERLOCUTARY APPLICATION(s)
            </Text>
          </View>
          <View style={{padding: 10}}>
            <ScrollView horizontal={true}>
              <Table
                borderStyle={{borderWidth: 1}}
                style={{backgroundColor: '#E3E1E6'}}>
                <Row
                  data={interlocutary.tableTitle}
                  // flexArr={[1, 1, 1, 1, 1, 1, 1, 1, 1]}
                  style={styles.head}
                  textStyle={{
                    fontWeight: 'bold',
                    color: '#FFFFFF',
                    fontSize: 18,
                  }}
                />
                <Row
                  data={interlocutary.tableHead}
                  flexArr={[1, 2, 1, 1, 1, 1, 1, 1]}
                  widthArr={interlocutary.widthArr}
                  style={styles.head}
                  textStyle={styles.headertext}
                />
                <TableWrapper style={styles.wrapper}>
                  <Rows
                    data={interlocutary.tableData}
                    widthArr={interlocutary.widthArr}
                    flexArr={[1, 2, 1, 1, 1, 1, 1, 1]}
                    style={styles.row}
                    textStyle={{
                      textAlign: 'center',
                    }}
                  />
                </TableWrapper>
              </Table>
            </ScrollView>
          </View>
          <View
            style={{Flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{fontSize: 18, textDecorationLine: 'underline'}}>
              OTHER DOCUMENT(s)
            </Text>
          </View>
          <View style={{padding: 10}}>
            <ScrollView horizontal={true}>
              <Table
                borderStyle={{borderWidth: 1}}
                style={{backgroundColor: '#E3E1E6'}}>
                <Row
                  data={documents.tableTitle}
                  // flexArr={[1, 1, 1, 1, 1, 1, 1, 1, 1]}
                  style={styles.head}
                  textStyle={{
                    fontWeight: 'bold',
                    color: '#FFFFFF',
                    fontSize: 18,
                  }}
                />
                <Row
                  data={documents.tableHead}
                  widthArr={documents.widthArr}
                  flexArr={[1, 1, 1, 1, 1, 1, 1, 1]}
                  style={styles.head}
                  textStyle={styles.headertext}
                />
                <TableWrapper style={styles.wrapper}>
                  <Rows
                    data={documents.tableData}
                    widthArr={documents.widthArr}
                    flexArr={[1, 1, 1, 1, 1, 1, 1, 1]}
                    style={styles.row}
                    textStyle={{
                      textAlign: 'center',
                    }}
                  />
                </TableWrapper>
              </Table>
            </ScrollView>
          </View>

          <View
            style={{Flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{fontSize: 20, textDecorationLine: 'underline'}}>
              Court Fees
            </Text>
          </View>
          <View style={{padding: 10}}>
            <Table borderStyle={{borderWidth: 1}}>
              <Row
                data={CourtFees.tableTitle}
                // flexArr={[]}
                textStyle={styles.headertext}
                style={styles.head1}
              />
              <TableWrapper style={styles.wrapper}>
                <Rows
                  data={CourtFees.tableData}
                  flexArr={[1]}
                  style={styles.row}
                  textStyle={{textAlign: 'center'}}
                />
              </TableWrapper>
            </Table>
          </View>

          <View
            style={{Flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{fontSize: 20, textDecorationLine: 'underline'}}>
              Notices
            </Text>
          </View>
          <View style={{padding: 10}}>
            <ScrollView horizontal={true}>
              <Table borderStyle={{borderWidth: 1}}>
                <Row
                  data={Notices.tableHead}
                  widthArr={Notices.widthArr}
                  flexArr={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
                  style={styles.head}
                  textStyle={styles.headertext}
                />
                <TableWrapper style={styles.wrapper}>
                  <Rows
                    data={Notices.tableData}
                    widthArr={Notices.widthArr}
                    flexArr={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
                    style={styles.row}
                    textStyle={{
                      textAlign: 'center',
                    }}
                  />
                </TableWrapper>
              </Table>
            </ScrollView>
          </View>

          <View
            style={{Flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{fontSize: 20, textDecorationLine: 'underline'}}>
              Default Details
            </Text>
          </View>
          <View style={{padding: 10}}>
            <ScrollView horizontal={true}>
              <Table borderStyle={{borderWidth: 1}}>
                <Row
                  data={DefaultDetails.tableHead}
                  widthArr={DefaultDetails.widthArr}
                  flexArr={[1, 1, 1, 1, 1]}
                  style={styles.head}
                  textStyle={styles.headertext}
                />
                <TableWrapper style={styles.wrapper}>
                  <Rows
                    data={DefaultDetails.tableData}
                    widthArr={DefaultDetails.widthArr}
                    flexArr={[1, 1, 1, 1, 1]}
                    style={styles.row}
                    textStyle={{
                      textAlign: 'center',
                    }}
                  />
                </TableWrapper>
              </Table>
            </ScrollView>
          </View>

          <View
            style={{Flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{fontSize: 20, textDecorationLine: 'underline'}}>
              Judgment/Orders
            </Text>
          </View>
          <View style={{padding: 10}}>
            <Table borderStyle={{borderWidth: 1}}>
              <Row
                data={JudgementOrders.tableTitle}
                // flexArr={[]}
                textStyle={styles.headertext}
                style={styles.head1}
              />
              <TableWrapper style={styles.wrapper}>
                <Rows
                  data={JudgementOrders.tableData}
                  flexArr={[1]}
                  style={styles.row}
                  textStyle={{textAlign: 'center'}}
                />
              </TableWrapper>
            </Table>
          </View>

          <View
            style={{Flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{fontSize: 20, textDecorationLine: 'underline'}}>
              Office Report
            </Text>
          </View>
          <View style={{padding: 10}}>
            <Table borderStyle={{borderWidth: 1}}>
              <Row
                data={OfficeReport.tableHead}
                flexArr={[1, 1, 1, 1]}
                style={styles.head}
                textStyle={styles.headertext}
              />
              <TableWrapper style={styles.wrapper}>
                <Rows
                  data={OfficeReport.tableData}
                  flexArr={[1, 1, 1, 1]}
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
  head: {height: 75, backgroundColor: '#00b0f0'},
  head1: {height: 60, backgroundColor: '#00b0f0'},
  wrapper: {flexDirection: 'row'},
  title: {flex: 1, backgroundColor: '#2ecc71'},
  row: {height: 60, backgroundColor: '#FFFFFF'},
  headertext: {textAlign: 'center', color: 'white', fontSize: 18},
  text: {textAlign: 'center'},
});
export default App;
