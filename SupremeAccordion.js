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
const COURTDETAILS = [
  {
    title: 'COURT DETAILS',
    content: [
      {
        SNo: '1',
        Court: 'High Court',
        Agency_State: 'MADHYA PRADESH',
        Agency_Code: 'HIGH COURT OF M.P AT GWALIOR',
        Case_No: 'FA-34-2003',
        Order_Date: '26-08-2019',
        CNR_No_Designation: '111',
        Judge1_Judge2_Judge3: '-',
        Police_Station: '-',
        Crime_No_Year: 'yes',
        Authority_Organisation_Impugned_Order_No: '-',
        Judgement_Challanged: '-',
        Judgement_Type: '-',
        Judgement_Covered_in: '-',
        Vehicle_Number: '-/-/-/--',
        Reference_court_State_District_No: '-/-/-/--',
        Relied_Upon_court_State_District_No: '-/-/-/--',
        Transfer_To_state_District_No: '-/-/-/--',
        Government_Notification_State_No_Date: '-/-/-/--',
      },
    ],
  },
];
const LISTINGDATES = [
  {
    title: 'LISTING DATES',
    content: [
      {
        CL_Date: '28-02-2020',
        Misc_Regular: 'Misc',
        Stage: '[SERVICE /COMPLIANCE]-BEFORE REGISTER(J)',
        Purpose: 'Next Week/Week Commencing/C.O.Week',
        Proposed_List_in: 'Registrar',
        Judges: 'REGISTRAR (J) II',
        IA: '-',
        Remarks: 'List Before Court/Bench',
        Listed: 'LISTED',
      },
    ],
  },
];
const INTERLOCUTARY = [
  {
    title: 'INTERLOCUTARY APPLICATION(s)',
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
const DOCUMENTS = [
  {
    title: 'OTHER DOCUMENTS',
    content: [
      {
        Doc_No: '5787/2020',
        Document_Type: 'PROCESS FEE ',
        Filed_By: 'PRATIBHA JAIN',
        Filing_Date: '03-01-2020',
        Enter_By: 'LAXMAN 10-01-2020 03.06 PM',
      },
    ],
  },
];

const COURTFEES = [
  {
    title: 'COURT FEES',
    content: [
      {
        Total_Court_Fee: '1830',
        Total_Court_Fee: '1830',
      },
    ],
  },
];

const NOTICES = [
  {
    title: 'NOTICE',
    content: [
      {
        S_No: '1',
        Process_Id: '58028/2021-06-02',
        Notice_Type: 'Letter for curing the defects in documents',
        Name: 'Through Mrinal Gopal Eiker 2566',
        State_District: 'NEW DELHI/DELHI',
        Station: '',
        Issue_Date: '02-06-2021',
        Returnable_Date: '19-07-2021',
        Dispatch_Date: '',
        Serve_Date: '',
        Ack_Date: '',
        Served_Unserved: '',
      },
    ],
  },
];

const DEFAULTDETAILS = [
  {
    title: 'DEFAULTDETAILS',
    content: [
      {
        S_No: '1',
        Default: 'Other',
        Remarks: 'MEMO OF PARTIES UNSIGNED',
        Notification_Date: '10-12-2019',
        Removed_On_Date: '03-01-2020',
      },
    ],
  },
];
const JUDGEMENTORDER = [
  {
    title: 'DATE OF JUDGEMENT/ORDER',
    content: [{}],
  },
];

const OFFICEREPORT = [
  {
    title: 'OFFICE REPORT',
    content: [
      {
        S_No: '1',
        Process_Id: '5',
        Order_Date: '10-01-2020',
        Receiving_Date: '09-01-2020 12:11:41',
      },
    ],
  },
];
const SupremeAccordion = () => {
  const [caseDetails, setCaseDetails] = useState([]);
  const [courtDetails, setCourtDetails] = useState([]);
  const [listingDates, setListingDates] = useState([]);
  const [interlocutary, setInterlocutary] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [courtFees, setCourtFees] = useState([]);
  const [notices, setNotices] = useState([]);
  const [defaultDetails, setDefaultDetails] = useState([]);
  const [judgementOrders, setJudgementOrders] = useState([]);
  const [OfficeReport, setOfficeReport] = useState([]);
  const [collapsed, setCollapsed] = useState(true);
  const setcasedetails = sections => {
    setCaseDetails(sections.includes(undefined) ? [] : sections);
  };
  const setcourtdetails = sections => {
    setCourtDetails(sections.includes(undefined) ? [] : sections);
  };
  const setlistingdates = sections => {
    setListingDates(sections.includes(undefined) ? [] : sections);
  };
  const setinterlocutary = sections => {
    setInterlocutary(sections.includes(undefined) ? [] : sections);
  };
  const setdocuments = sections => {
    setDocuments(sections.includes(undefined) ? [] : sections);
  };
  const setcourtfees = sections => {
    setCourtFees(sections.includes(undefined) ? [] : sections);
  };
  const setnotices = sections => {
    setNotices(sections.includes(undefined) ? [] : sections);
  };
  const setdefaultdetails = sections => {
    setDefaultDetails(sections.includes(undefined) ? [] : sections);
  };
  const setjudgementorders = sections => {
    setJudgementOrders(sections.includes(undefined) ? [] : sections);
  };
  const setofficereport = sections => {
    setOfficeReport(sections.includes(undefined) ? [] : sections);
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
  const renderHeadercourtdetails = (section, _, isActive) => {
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
  const renderContentcourtdetails = (section, _, isActive) => {
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
                    <Text style={[styles.cell, styles.titletxt]}>SNo</Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>Court</Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Agency_State
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Agency_Code
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}> Case_No</Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Order_Date
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      CNR_No_Designation
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Judge1_Judge2_Judge3
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Police_Station
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Crime_No_Year
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      {' '}
                      Authority_Organisation_Impugned_Order_No
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Judgement_Challanged
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Judgement_Type
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Judgement_Covered_in
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Vehicle_Numbe
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Reference_court_State_District_No
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Relied_Upon_court_State_District_No
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      {' '}
                      Transfer_To_state_District_No
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Government_Notification_State_No_Date
                    </Text>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Text style={styles.cell}>{d.SNo}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Court}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Agency_State}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Agency_Code}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Case_No}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Order_Date}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.CNR_No_Designation}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Judge1_Judge2_Judge3}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Police_Station}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Crime_No_Year}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>
                      {d.Authority_Organisation_Impugned_Order_No}
                    </Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Judgement_Challanged}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Judgement_Type}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Judgement_Covered_in}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Vehicle_Number}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>
                      {d.Reference_court_State_District_No}
                    </Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>
                      {d.Relied_Upon_court_State_District_No}
                    </Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>
                      {d.Transfer_To_state_District_No}
                    </Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>
                      {d.Government_Notification_State_No_Date}
                    </Text>
                  </Row>
                </Col>
              </Grid>
            </View>
          );
        })}
      </View>
    );
  };
  const renderHeaderlistingdates = (section, _, isActive) => {
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
  const renderContentlistingdates = (section, _, isActive) => {
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
                    <Text style={[styles.cell, styles.titletxt]}>CL_Date</Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Misc_Regular
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}> Stage</Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>Purpose</Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Proposed_List_in
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>Judges</Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>IA</Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>Remarks</Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>Listed</Text>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Text style={styles.cell}>{d.CL_Date}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Misc_Regular}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Stage}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Purpose}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Proposed_List_in}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Judges}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.IA}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Remarks}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Listed}</Text>
                  </Row>
                </Col>
              </Grid>
            </View>
          );
        })}
      </View>
    );
  };
  const renderHeaderinterlocutary = (section, _, isActive) => {
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

  const renderContentinterlocutary = (section, _, isActive) => {
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

  const renderHeaderdocuments = (section, _, isActive) => {
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

  const renderContentdocuments = (section, _, isActive) => {
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
                    <Text style={[styles.cell, styles.titletxt]}>Doc_No</Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Document_Type
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>Filed_By</Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Filing_Date
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>Enter_By</Text>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Text style={styles.cell}>{d.Doc_No}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Document_Type}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Filed_By}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Filing_Date}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Enter_By}</Text>
                  </Row>
                </Col>
              </Grid>
            </View>
          );
        })}
      </View>
    );
  };

  const renderHeadercourtfees = (section, _, isActive) => {
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

  const renderContentcourtfees = (section, _, isActive) => {
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
                      Total_Court_Fee
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Total_Court_Fee
                    </Text>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Text style={styles.cell}>{d.Total_Court_Fee}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Total_Court_Fee}</Text>
                  </Row>
                </Col>
              </Grid>
            </View>
          );
        })}
      </View>
    );
  };

  const renderHeadernotices = (section, _, isActive) => {
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

  const renderContentnotices = (section, _, isActive) => {
    //Accordion Content view
    return (
      <View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        {section.content.map((d, i) => {
          // console.log('d >>> ', d);
          return (
            <View key={i}>
              <Grid style={{borderWidth: 1}}>
                <Col>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>S_No</Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Process_Id
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Notice_Type
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>Name</Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      State_District
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>Station</Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Issue_Date
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Returnable_Date
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Dispatch_Date
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Serve_Date
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>AcK_Date</Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Served_Unserved
                    </Text>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Text style={styles.cell}>{d.S_No}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Process_Id}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Notice_Type}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Name}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.State_District}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Station}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Issue_Date}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Returnable_Date}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Dispatch_Date}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Serve_Date}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Ack_Date}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Served_Unserved}</Text>
                  </Row>
                </Col>
              </Grid>
            </View>
          );
        })}
      </View>
    );
  };

  const renderHeaderdefaultdetails = (section, _, isActive) => {
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

  const renderContentdefaultdetails = (section, _, isActive) => {
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
                    <Text style={[styles.cell, styles.titletxt]}>S_No</Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>Default</Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}> Remarks</Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Notification_Date
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Removed_On_Date
                    </Text>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Text style={styles.cell}>{d.S_No}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Default}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Remarks}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Notification_Date}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Removed_On_Date}</Text>
                  </Row>
                </Col>
              </Grid>
            </View>
          );
        })}
      </View>
    );
  };

  const renderHeaderjudgementorders = (section, _, isActive) => {
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

  const renderContentjudgementorders = (section, _, isActive) => {
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
                    <Text style={[styles.cell, styles.titletxt]}></Text>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Text style={styles.cell}></Text>
                  </Row>
                </Col>
              </Grid>
            </View>
          );
        })}
      </View>
    );
  };

  const renderHeaderofficereport = (section, _, isActive) => {
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

  const renderContentofficereport = (section, _, isActive) => {
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
                    <Text style={[styles.cell, styles.titletxt]}>S_No</Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Process_Id
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Order_Date
                    </Text>
                  </Row>
                  <Row>
                    <Text style={[styles.cell, styles.titletxt]}>
                      Receiving_Date
                    </Text>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Text style={styles.cell}>{d.S_No}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Process_Id}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Order_Date}</Text>
                  </Row>
                  <Row>
                    <Text style={styles.cell}>{d.Receiving_Date}</Text>
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
            Supreme Court
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
              activeSections={courtDetails}
              sections={COURTDETAILS}
              touchableComponent={TouchableOpacity}
              renderHeader={renderHeadercourtdetails}
              renderContent={renderContentcourtdetails}
              //Content Component(View) to render
              duration={400}
              //Duration for Collapse and expand
              onChange={setcourtdetails}
              //setting the state of active sections
              style={{borderWidth: 1, borderColor: '#C3C3C5'}}
            />
            <View style={{height: rh(2.5)}}></View>
            <Accordion
              activeSections={listingDates}
              sections={LISTINGDATES}
              touchableComponent={TouchableOpacity}
              renderHeader={renderHeaderlistingdates}
              renderContent={renderContentlistingdates}
              //Content Component(View) to render
              duration={400}
              //Duration for Collapse and expand
              onChange={setlistingdates}
              //setting the state of active sections
              style={{borderWidth: 1, borderColor: '#C3C3C5'}}
            />
            <View style={{height: rh(2.5)}}></View>
            <Accordion
              activeSections={interlocutary}
              sections={INTERLOCUTARY}
              touchableComponent={TouchableOpacity}
              renderHeader={renderHeaderinterlocutary}
              renderContent={renderContentinterlocutary}
              //Content Component(View) to render
              duration={400}
              //Duration for Collapse and expand
              onChange={setinterlocutary}
              //setting the state of active sections
              style={{borderWidth: 1, borderColor: '#C3C3C5'}}
            />
            <View style={{height: rh(2.5)}}></View>
            <Accordion
              activeSections={documents}
              sections={DOCUMENTS}
              touchableComponent={TouchableOpacity}
              renderHeader={renderHeaderdocuments}
              renderContent={renderContentdocuments}
              //Content Component(View) to render
              duration={400}
              //Duration for Collapse and expand
              onChange={setdocuments}
              //setting the state of active sections
              style={{borderWidth: 1, borderColor: '#C3C3C5'}}
            />
            <View style={{height: rh(2.5)}}></View>
            <Accordion
              activeSections={courtFees}
              sections={COURTFEES}
              touchableComponent={TouchableOpacity}
              renderHeader={renderHeadercourtfees}
              renderContent={renderContentcourtfees}
              //Content Component(View) to render
              duration={400}
              //Duration for Collapse and expand
              onChange={setcourtfees}
              //setting the state of active sections
              style={{borderWidth: 1, borderColor: '#C3C3C5'}}
            />
            <View style={{height: rh(2.5)}}></View>
            <Accordion
              activeSections={notices}
              sections={NOTICES}
              touchableComponent={TouchableOpacity}
              renderHeader={renderHeadernotices}
              renderContent={renderContentnotices}
              //Content Component(View) to render
              duration={400}
              //Duration for Collapse and expand
              onChange={setnotices}
              //setting the state of active sections
              style={{borderWidth: 1, borderColor: '#C3C3C5'}}
            />

            <View style={{height: rh(2.5)}}></View>
            <Accordion
              activeSections={defaultDetails}
              sections={DEFAULTDETAILS}
              touchableComponent={TouchableOpacity}
              renderHeader={renderHeaderdefaultdetails}
              renderContent={renderContentdefaultdetails}
              //Content Component(View) to render
              duration={400}
              //Duration for Collapse and expand
              onChange={setdefaultdetails}
              //setting the state of active sections
              style={{borderWidth: 1, borderColor: '#C3C3C5'}}
            />
            <View style={{height: rh(2.5)}}></View>
            <Accordion
              activeSections={judgementOrders}
              sections={JUDGEMENTORDER}
              touchableComponent={TouchableOpacity}
              renderHeader={renderHeaderjudgementorders}
              renderContent={renderContentjudgementorders}
              //Content Component(View) to render
              duration={400}
              //Duration for Collapse and expand
              onChange={setjudgementorders}
              //setting the state of active sections
              style={{borderWidth: 1, borderColor: '#C3C3C5'}}
            />
            <View style={{height: rh(2.5)}}></View>
            <Accordion
              activeSections={OfficeReport}
              sections={OFFICEREPORT}
              touchableComponent={TouchableOpacity}
              renderHeader={renderHeaderofficereport}
              renderContent={renderContentofficereport}
              //Content Component(View) to render
              duration={400}
              //Duration for Collapse and expand
              onChange={setofficereport}
              //setting the state of active sections
              style={{borderWidth: 1, borderColor: '#C3C3C5'}}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SupremeAccordion;

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
    height: rh(8),
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
