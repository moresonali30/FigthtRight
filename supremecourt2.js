import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import {Col, Row, Grid} from 'react-native-easy-grid';
//import Arrow from 'react-native-vector-icons/FontAwesome5';
import Arrow from 'react-native-vector-icons/AntDesign';
// const SupremeCourt = [
//   {
//     title: 'CASE DETAILS',
//     content: [
//       {

//         DiaryNo:
//           '44424/2019 Filed on 09-12-2019 03:42 PM [SECTION: IV-C]PENDING ',
//         CaseNo:
//           'SLP(C) No.000033 -/ 2020 Registered on 03-01-2020 (Verified ON 06-01-2020)',
//         Present_LastListedOn: '28-02-2020 [REGISTER(J)- II]',
//         Status_Stage:
//           'Pending -(Motion Hearing [After NOTICE (FOR ADMISSION)- CIVIL CASES]) List before court/bench-ord at 28-02-2020',
//         Category: '-',
//         Act: '-',
//       },
//     ],
//   },

//   {
//     title: ' INTERLOCUTARY APPLICATION(s)',
//     content: [
//       {
//         RegNo: '784/2020',
//         Particular: 'EXEMPTION FROM FILING O.T',
//         Remark: '-',
//         FiledBy: 'PRATIBHA JAIN',
//         FilingDate: '03-01-2020',
//         SrNo: '1',
//         Status: 'P',
//         EnterOn: '03-01-2020 15:12:42',
//       },
//     ],
//   }
// ]
const INTERLOCUTARY = [
  {
    title: ' INTERLOCUTARY APPLICATION(s)',
    content: [
      {
        RegNo: '784/2020',
        Particular: 'EXEMPTION FROM FILING O.T',
        Remark: '-',
        FiledBy: 'PRATIBHA JAIN',
        FilingDate: '03-01-2020',
        SrNo: '1',
        Status: 'P',
        EnterOn: '03-01-2020 15:12:42',
      },
    ],
  },
];
const CaseDetails = [
  {
    title: 'CASE DETAILS',
    content: [
      {
        DiaryNo:
          '44424/2019 Filed on 09-12-2019 03:42 PM [SECTION: IV-C]PENDING ',
        CaseNo:
          'SLP(C) No.000033 -/ 2020 Registered on 03-01-2020 (Verified ON 06-01-2020)',
        Present_LastListedOn: '28-02-2020 [REGISTER(J)- II]',
        Status_Stage:
          'Pending -(Motion Hearing [After NOTICE (FOR ADMISSION)- CIVIL CASES]) List before court/bench-ord at 28-02-2020',
        Category: '-',
        Act: '-',
      },
    ],
  },
];
const App = () => {
  const [activeSections, setActiveSections] = useState([]);
  const [activeSections1, setActiveSections1] = useState([]);
  // Collapsed condition for the single collapsible
  const [collapsed, setCollapsed] = useState(true);
  const setSections1 = sections => {
    //setting up a active section state
    setActiveSections1(sections.includes(undefined) ? [] : sections);
  };
  const setSections = sections => {
    //setting up a active section state
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const renderHeader1 = (section, _, isActive) => {
    //Accordion Header view
    return (
      <View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Text style={styles.headerText}>{section.title}</Text>
        <Arrow name="down" size={25} color="#FFFFFF"></Arrow>
      </View>
    );
  };

  const renderContent1 = (section, _, isActive) => {
    //Accordion Content view
    return (
      <View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        {section.content.map((d, i) => {
          //console.log('d >>> ', d);
          return (
            <View key={i}>
              <Grid style={{borderWidth: 1}}>
                <Col>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>Diary No</Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>Case No</Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Present/Last Listed On
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Status/Stage
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>Category</Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>ACT</Text>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Text style={styles.cell}>{d.DiaryNo}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.CaseNo}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Present_LastListedOn}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Status_Stage}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Category}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Act}</Text>
                  </Row>
                </Col>
              </Grid>
            </View>
          );
        })}
      </View>
    );
  };
  const renderHeader = (section, _, isActive) => {
    //Accordion Header view
    return (
      <View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Text style={styles.headerText}>{section.title}</Text>
        <Arrow name="down" size={25} color="#FFFFFF"></Arrow>
      </View>
    );
  };

  const renderContent = (section, _, isActive) => {
    //Accordion Content view
    return (
      <View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        {section.content.map((d, i) => {
          //console.log('d >>> ', d);
          return (
            <View key={i}>
              <Grid style={{borderWidth: 1}}>
                <Col>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Reg.No/I.A No
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Particular
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>Remark</Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>Filed By</Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      FilingDate
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>Sr No</Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>Status</Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>Enter On</Text>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Text style={styles.cell}>{d.RegNo}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Particular}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Remark}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.FiledBy}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.FilingDate}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.SrNo}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Status}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.EnterOn}</Text>
                  </Row>
                </Col>
              </Grid>
            </View>
          );
        })}
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <ScrollView>
          {/*Code for Accordion/Expandable List starts here*/}
          <View style={{margin: 8}}>
            <Accordion
              activeSections={activeSections1}
              sections={CaseDetails}
              touchableComponent={TouchableOpacity}
              renderHeader={renderHeader1}
              renderContent={renderContent1}
              //Content Component(View) to render
              duration={400}
              //Duration for Collapse and expand
              onChange={setSections1}
              //setting the state of active sections
              style={{borderWidth: 1, borderColor: '#C3C3C5'}}
            />
            <View style={{height: 20}}></View>
            <Accordion
              activeSections={activeSections}
              sections={INTERLOCUTARY}
              touchableComponent={TouchableOpacity}
              renderHeader={renderHeader}
              renderContent={renderContent}
              //Content Component(View) to render
              duration={400}
              //Duration for Collapse and expand
              onChange={setSections}
              //setting the state of active sections
              style={{borderWidth: 1, borderColor: '#C3C3C5'}}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    paddingTop: 30,
  },
  // title: {
  //   textAlign: 'center',
  //   fontSize: 18,
  //   fontWeight: '300',
  //   marginBottom: 20,
  // },
  header: {
    backgroundColor: '#00b0f0',
    padding: 10,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    borderColor: '#00b0f0',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  content: {
    // padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    // backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    //  backgroundColor: 'rgba(245,252,255,1)',
    //  backgroundColor: '#00b0f0',
  },
  cell: {
    borderWidth: 1,
    borderColor: '#C3C3C5',
    backgroundColor: '#F1F1F2',
    flex: 1,
    height: 50,
    textAlign: 'center',
    fontSize: 17,
    // alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titletxt: {
    fontWeight: '700',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
