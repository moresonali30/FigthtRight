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
        Filing_No: 'WPIL/  1955/2020',
        Filing_Date: '08-01-2020',
        CNR: 'UPHC010053602020',
        Date_of_Registration: '10-08-2020',
      },
    ],
  },
];

const CASESTATUS = [
  {
    title: 'CASE STATUS',
    content: [
      {
        First_Hearing_Date: '10th January 2020',
        Next_Hearing_Date: 'Case is not on list',
        Stage_of_Case: 'For Admission',
        Coram: '---',
        Bench_Type: 'Division Bench',
        Judicial_Branch: 'WRITS Civil',
        Causelist_Type: '---',
        State: 'UTTARPRADESH',
        District: 'KANPUR NAGAR',
      },
    ],
  },
];

const PETITIONERS = [
  {
    title: 'PETITIONERS',
    content: [
      {
        Petitioners: 'NAVYUG ABHIYAN SAMITI AND ANOTHER',
        Respondent: 'UNION OF INDIA AND 5 OTHERS',
      },
    ],
  },
];

const CATEGORYDETAILS = [
  {
    title: ' CATEGORY DETAILS',
    content: [
      {
        Category: 'PUBLIC INTEREST LITIGATION ( 370000 )',
        Sub_Category: 'MISCELLANEOUS ( 90 ) ',
      },
    ],
  },
];

const IADETAILS = [
  {
    title: 'IA DETAILS',
    content: [
      {
        Application_Number:
          'IA/1/2020 Classification : Misc. Application Bench :5918',
        Party:
          'NAVYUG ABHIYAN SAMITI AND ANOTHER Vs UNION OF INDIA AND 5 OTHERS',
        Date_of_Filing: '09-01-2020',
        Next_Disposal_Date: '10-01-2020',
        IA_Status: 'Pending',
      },
    ],
  },
];

const LISTINGDETAILS = [
  {
    title: 'LISTING DETAILS',
    content: [
      {
        Cause_List_Type: 'Daily Cause List',
        Honble_Mr_Ms_Dr_Justice:
          'BISWANATH SOMADDER , Dr. Y. K. SRIVASTAVA ( Bench: 5897 )',
        Last_Listing_Date: '04-03-2020',
        Stage_of_Listing: 'For Admission',
        Last_Short_Order: 'List after a fixed period',
      },
    ],
  },
];

const HighCourtAccordion = () => {
  const [caseDetails, setCaseDetails] = useState([]);
  const [caseStatus, setCaseStatus] = useState([]);
  const [petitioners, setPetitioners] = useState([]);
  const [categoryDetails, setCategoryDetails] = useState([]);
  const [iaDetails, setIADetails] = useState([]);
  const [listingDetails, setListingDetails] = useState([]);

  const [collapsed, setCollapsed] = useState(true);
  const setcasedetails = sections => {
    setCaseDetails(sections.includes(undefined) ? [] : sections);
  };
  const setcasestatus = sections => {
    setCaseStatus(sections.includes(undefined) ? [] : sections);
  };
  const setpetitioners = sections => {
    setPetitioners(sections.includes(undefined) ? [] : sections);
  };
  const setcategorydetails = sections => {
    setCategoryDetails(sections.includes(undefined) ? [] : sections);
  };
  const setiadetails = sections => {
    setIADetails(sections.includes(undefined) ? [] : sections);
  };
  const setlistingdetails = sections => {
    setListingDetails(sections.includes(undefined) ? [] : sections);
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
                      Filing_No
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Filing_Date
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>CNR</Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Date_of_Registration
                    </Text>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Text style={styles.cell}>{d.Filing_No}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Filing_Date}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.CNR}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Date_of_Registration}</Text>
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
                      Stage_of_Case
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>Coram</Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Bench_Type
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Judicial_Branch
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Causelist_Type
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>State</Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>District</Text>
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
                    <Text style={styles.cell}>{d.Stage_of_Case}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Coram}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Bench_Type}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Judicial_Branch}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Causelist_Type}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.State}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.District}</Text>
                  </Row>
                </Col>
              </Grid>
            </View>
          );
        })}
      </View>
    );
  };

  const renderHeaderpetitioners = (section, _, isActive) => {
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
  const renderContentpetitioners = (section, _, isActive) => {
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
                      Petitioners
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Respondent
                    </Text>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Text style={styles.cell}>{d.Petitioners}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Respondent}</Text>
                  </Row>
                </Col>
              </Grid>
            </View>
          );
        })}
      </View>
    );
  };
  const renderHeadercategorydetails = (section, _, isActive) => {
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

  const renderContentcategorydetails = (section, _, isActive) => {
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
                    <Text style={[styles.cell, styles.titletxt]}>Category</Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Sub_Category
                    </Text>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Text style={styles.cell}>{d.Category}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Sub_Category}</Text>
                  </Row>
                </Col>
              </Grid>
            </View>
          );
        })}
      </View>
    );
  };

  const renderHeaderiadetails = (section, _, isActive) => {
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

  const renderContentiadetails = (section, _, isActive) => {
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
                      Application_Number
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>Party</Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Date_of_Filing
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Next_Disposal_Date
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      IA_Status
                    </Text>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Text style={styles.cell}>{d.Application_Number}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Party}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Date_of_Filing}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Next_Disposal_Date}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.IA_Status}</Text>
                  </Row>
                </Col>
              </Grid>
            </View>
          );
        })}
      </View>
    );
  };

  const renderHeaderlistingdetails = (section, _, isActive) => {
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

  const renderContentlistingdetails = (section, _, isActive) => {
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
                      Cause_List_Type
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Honble_Mr_Ms_Dr_Justice
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Last_Listing_Date
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Stage_of_Listing
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Last_Short_Order
                    </Text>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Text style={styles.cell}>{d.Cause_List_Type}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Honble_Mr_Ms_Dr_Justice}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Last_Listing_Date}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Stage_of_Listing}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Last_Short_Order}</Text>
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
            High Court
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
              activeSections={petitioners}
              sections={PETITIONERS}
              touchableComponent={TouchableOpacity}
              renderHeader={renderHeaderpetitioners}
              renderContent={renderContentpetitioners}
              //Content Component(View) to render
              duration={400}
              //Duration for Collapse and expand
              onChange={setpetitioners}
              //setting the state of active sections
              style={{borderWidth: 1, borderColor: '#C3C3C5'}}
            />
            <View style={{height: rh(2.5)}}></View>
            <Accordion
              activeSections={categoryDetails}
              sections={CATEGORYDETAILS}
              touchableComponent={TouchableOpacity}
              renderHeader={renderHeadercategorydetails}
              renderContent={renderContentcategorydetails}
              //Content Component(View) to render
              duration={400}
              //Duration for Collapse and expand
              onChange={setcategorydetails}
              //setting the state of active sections
              style={{borderWidth: 1, borderColor: '#C3C3C5'}}
            />
            <View style={{height: rh(2.5)}}></View>
            <Accordion
              activeSections={iaDetails}
              sections={IADETAILS}
              touchableComponent={TouchableOpacity}
              renderHeader={renderHeaderiadetails}
              renderContent={renderContentiadetails}
              //Content Component(View) to render
              duration={400}
              //Duration for Collapse and expand
              onChange={setiadetails}
              //setting the state of active sections
              style={{borderWidth: 1, borderColor: '#C3C3C5'}}
            />
            <View style={{height: rh(2.5)}}></View>
            <Accordion
              activeSections={listingDetails}
              sections={LISTINGDETAILS}
              touchableComponent={TouchableOpacity}
              renderHeader={renderHeaderlistingdetails}
              renderContent={renderContentlistingdetails}
              //Content Component(View) to render
              duration={400}
              //Duration for Collapse and expand
              onChange={setlistingdetails}
              //setting the state of active sections
              style={{borderWidth: 1, borderColor: '#C3C3C5'}}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HighCourtAccordion;
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
