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
import Arrow from 'react-native-vector-icons/AntDesign';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';

const CASEDETAILS = [
  {
    title: 'CASE DETAILS',
    content: [
      {
        Case_Type: 'TS - TITLE SUIT',
        Filing_Number: '3534/2020',
        Filing_Date: '10-08-2020',
        Registration_Number: '576/2020',
        Registration_Date: ' 10-08-2020',
        CNR_Number: ' WBCC01-001921-2020',
      },
    ],
  },
];

const CASESTATUS = [
  {
    title: 'CASE STATUS',
    content: [
      {
        First_Hearing_Date: '10th August 2020',
        Next_Hearing_Date: '13th September 2021',
        Case_Stage: 'Hearing of Petition',
        Court_Number_Judge: '4-LD JUDGE 4th BENCH',
      },
    ],
  },
];
const ACTS = [
  {
    title: 'ACTS',
    content: [
      {
        Under_Acts: 'Specific Relief Act',
        Under_Sections: '34',
      },
    ],
  },
];

const ORDERS = [
  {
    title: 'ORDERS',
    content: [
      {
        Order_Number: '1',
        Order_Date: '15-03-2021',
        Order_Details: 'Interlocatory Order',
      },
    ],
  },
];

const CASHHISTORY = [
  {
    title: 'CASH HISTORY',
    content: [
      {
        Registration_Number: '576/2020',
        Judge: 'LD JUDGE 4th BENCH',
        Business_On_date: '10-08-2020',
        Hearing_Date: '10-09-2020',
        Purpose_Of_Hearing: 'Requisites',
      },
    ],
  },
];

const DistrictCourtAccordion = () => {
  const [caseDetails, setCaseDetails] = useState([]);
  const [caseStatus, setCaseStatus] = useState([]);
  const [acts, setActs] = useState([]);
  const [orders, setOrders] = useState([]);
  const [cashHistory, setCashHistory] = useState([]);
  const [collapsed, setCollapsed] = useState(true);
  const setcasedetails = sections => {
    setCaseDetails(sections.includes(undefined) ? [] : sections);
  };
  const setcasestatus = sections => {
    setCaseStatus(sections.includes(undefined) ? [] : sections);
  };
  const setacts = sections => {
    setActs(sections.includes(undefined) ? [] : sections);
  };
  const setorders = sections => {
    setOrders(sections.includes(undefined) ? [] : sections);
  };
  const setcashhistory = sections => {
    setCashHistory(sections.includes(undefined) ? [] : sections);
  };

  const renderHeadercasedetails = (section, _, isActive) => {
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

  const renderContentcasedetails = (section, _, isActive) => {
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
                      Case_Type
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Filing_Number
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Filing_Date
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Registration_Number
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Registration_Date
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      CNR_Number
                    </Text>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Text style={styles.cell}>{d.Case_Type}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Filing_Number}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Filing_Date}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Registration_Number}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Registration_Date}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.CNR_Number}</Text>
                  </Row>
                </Col>
              </Grid>
            </View>
          );
        })}
      </View>
    );
  };

  const renderHeadercasestatus = (section, _, isActive) => {
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

  const renderContentcasestatus = (section, _, isActive) => {
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
                      First_Hearing_Date
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Next_Hearing_Date
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Case_Stage
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Court_Number_Judge
                    </Text>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Text style={styles.cell}>{d.First_Hearing_Date}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Next_Hearing_Date}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Case_Stage}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Court_Number_Judge}</Text>
                  </Row>
                </Col>
              </Grid>
            </View>
          );
        })}
      </View>
    );
  };

  const renderHeaderacts = (section, _, isActive) => {
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

  const renderContentacts = (section, _, isActive) => {
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
                      Under_Acts
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Under_Sections
                    </Text>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Text style={styles.cell}>{d.Under_Acts}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Under_Sections}</Text>
                  </Row>
                </Col>
              </Grid>
            </View>
          );
        })}
      </View>
    );
  };

  const renderHeaderorders = (section, _, isActive) => {
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

  const renderContentorders = (section, _, isActive) => {
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
                      Order_Number
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Order_Date
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Order_Details
                    </Text>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Text style={styles.cell}>{d.Order_Number}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Order_Date}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Order_Details}</Text>
                  </Row>
                </Col>
              </Grid>
            </View>
          );
        })}
      </View>
    );
  };

  const renderHeadercashhistory = (section, _, isActive) => {
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

  const renderContentcashhistory = (section, _, isActive) => {
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
                      Registration_Number
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>Judge</Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Business_On_date
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Hearing_Date
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Purpose_Of_Hearing
                    </Text>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Text style={styles.cell}>{d.Registration_Number}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Judge}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Business_On_date}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Hearing_Date}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Purpose_Of_Hearing}</Text>
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
      <ScrollView>
        <View style={styles.container}>
          <Text
            style={{textAlign: 'center', fontSize: rf(3), fontWeight: 'bold'}}>
            District Court
          </Text>
          {/*Code for Accordion/Expandable List starts here*/}
          <View style={{margin: 8}}>
            <Accordion
              activeSections={caseDetails}
              sections={CASEDETAILS}
              touchableComponent={TouchableOpacity}
              renderHeader={renderHeadercasedetails}
              renderContent={renderContentcasedetails}
              //Content Component(View) to render
              duration={400}
              //Duration for Collapse and expand
              onChange={setcasedetails}
              //setting the state of active sections
              style={{borderWidth: 1, borderColor: '#C3C3C5'}}
            />
            <View style={{height: rh(2.5)}}></View>
            <Accordion
              activeSections={caseStatus}
              sections={CASESTATUS}
              touchableComponent={TouchableOpacity}
              renderHeader={renderHeadercasestatus}
              renderContent={renderContentcasestatus}
              //Content Component(View) to render
              duration={400}
              //Duration for Collapse and expand
              onChange={setcasestatus}
              //setting the state of active sections
              style={{borderWidth: 1, borderColor: '#C3C3C5'}}
            />
            <View style={{height: rh(2.5)}}></View>
            <Accordion
              activeSections={acts}
              sections={ACTS}
              touchableComponent={TouchableOpacity}
              renderHeader={renderHeaderacts}
              renderContent={renderContentacts}
              //Content Component(View) to render
              duration={400}
              //Duration for Collapse and expand
              onChange={setacts}
              //setting the state of active sections
              style={{borderWidth: 1, borderColor: '#C3C3C5'}}
            />
            <View style={{height: rh(2.5)}}></View>
            <Accordion
              activeSections={orders}
              sections={ORDERS}
              touchableComponent={TouchableOpacity}
              renderHeader={renderHeaderorders}
              renderContent={renderContentorders}
              //Content Component(View) to render
              duration={400}
              //Duration for Collapse and expand
              onChange={setorders}
              //setting the state of active sections
              style={{borderWidth: 1, borderColor: '#C3C3C5'}}
            />
            <View style={{height: rh(2.5)}}></View>
            <Accordion
              activeSections={cashHistory}
              sections={CASHHISTORY}
              touchableComponent={TouchableOpacity}
              renderHeader={renderHeadercashhistory}
              renderContent={renderContentcashhistory}
              //Content Component(View) to render
              duration={400}
              //Duration for Collapse and expand
              onChange={setcashhistory}
              //setting the state of active sections
              style={{borderWidth: 1, borderColor: '#C3C3C5'}}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DistrictCourtAccordion;
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
    fontSize: rf(2.3),
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
    height: rh(10),
    textAlign: 'center',
    fontSize: rf(2.2),
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titletxt: {
    fontWeight: '700',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
