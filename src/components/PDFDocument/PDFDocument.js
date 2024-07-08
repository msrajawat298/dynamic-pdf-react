import React from 'react';
import { Page, Text, View, Document } from '@react-pdf/renderer';
import { styles } from './styles';
import { defaultData } from '../../utils/constant';

const PDFDocument = ({ data }) => {
  console.log('data :: ', data);
  // data = {...defaultData, ...data};
  data = {...defaultData};
  const sections = [
    { serial: '1', heading: 'Name of Work', value: data.workName },
    { serial: '2', heading: 'Agency', value: data.agency },
    { serial: '3', heading: 'Estimated Cost', value: data.estimatedCost },
    { serial: '4', heading: 'Authority For T/S', value: data.authorityTS },
    { serial: '5', heading: 'Authority For A/S', value: data.authorityAS },
    { serial: '6', heading: 'Head of Account', value: data.headOfAccount },
    { serial: '7', heading: 'Sanctioned Year', value: data.sanctionedYear },
    { serial: '8', heading: 'Provision', value: data.provision.map((item, index) => (<Text key={index}>{item}</Text>)) },
    { serial: '9', heading: 'Rates', value: data.rates },
  ];

  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.title}>{data.reportTitle}</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={[styles.tableCol, { width: '20%' }]}>
              <Text style={styles.tableCell}>T.S. No.- {data.tsNo}</Text>
            </View>
            <View style={[styles.tableCol, { width: '20%' }]}>
              <Text style={styles.tableCell}>Date: {data.tsDate}</Text>
            </View>
            <View style={[styles.tableCol, { width: '30%' }]}>
              <Text style={styles.tableCell}>A.S. No.- {data.asNo}</Text>
            </View>
            <View style={[styles.tableCol, { width: '30%' }]}>
              <Text style={styles.tableCell}>Date: {data.asDate}</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={[styles.tableCol, { width: '50%' }]}>
              <Text style={styles.tableCell}>{data.jp}</Text>
            </View>
            <View style={[styles.tableCol, { width: '50%' }]}>
              <Text style={styles.tableCell}>{data.zp}</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={[styles.tableCol, { width: '50%' }]}>
              <Text style={styles.tableCell}>{data.estimatedCost}</Text>
            </View>
            <View style={[styles.tableCol, { width: '50%' }]}>
              <Text style={styles.tableCell}>{data.authorityTS}</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={[styles.tableCol, { width: '50%' }]}>
              <Text style={styles.tableCell}>{data.authorityAS}</Text>
            </View>
            <View style={[styles.tableCol, { width: '50%' }]}>
              <Text style={styles.tableCell}>{data.headOfAccount}</Text>
            </View>
          </View>
        </View>

        <View style={styles.table}>
          {sections.map((section, index) => (
            <View key={index} style={styles.tableRow}>
              <View style={[styles.tableCol, { width: '5%' }]}>
                <Text style={styles.tableCell}>{section.serial}</Text>
              </View>
              <View style={[styles.tableCol, { width: '30%' }]}>
                <Text style={styles.tableCell}>{section.heading}</Text>
              </View>
              <View style={[styles.tableCol, { width: '65%' }]}>
                <Text style={styles.tableCell}>{section.value}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          {data.certifications.map((item, index) => (
            <Text key={index} style={styles.value}>{index + 1} - {item}</Text>
          ))}
        </View>

        <View style={styles.signatures}>
          <Text style={styles.label}>{data.subEngineer}</Text>
          <Text style={[styles.label, { textAlign: 'right' }]}>{data.assistantEngineer}</Text>
        </View>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={[styles.tableColHeader, { width: '5%' }]}>
              <Text style={styles.tableCellHeader}>Sr No</Text>
            </View>
            <View style={[styles.tableColHeader, { width: '30%' }]}>
              <Text style={styles.tableCellHeader}>Description</Text>
            </View>
            <View style={[styles.tableColHeader, { width: '5%' }]}>
              <Text style={styles.tableCellHeader}>No</Text>
            </View>
            <View style={[styles.tableColHeader, { width: '10%' }]}>
              <Text style={styles.tableCellHeader}>L</Text>
            </View>
            <View style={[styles.tableColHeader, { width: '10%' }]}>
              <Text style={styles.tableCellHeader}>B</Text>
            </View>
            <View style={[styles.tableColHeader, { width: '10%' }]}>
              <Text style={styles.tableCellHeader}>D</Text>
            </View>
            <View style={[styles.tableColHeader, { width: '10%' }]}>
              <Text style={styles.tableCellHeader}>CF</Text>
            </View>
            <View style={[styles.tableColHeader, { width: '10%' }]}>
              <Text style={styles.tableCellHeader}>Qty</Text>
            </View>
            <View style={[styles.tableColHeader, { width: '10%' }]}>
              <Text style={styles.tableCellHeader}>Remark</Text>
            </View>
          </View>

          {/* Add rows similar to the screenshot */}
          <View style={styles.tableRow}>
            <View style={[styles.tableCol, { width: '5%' }]}>
              <Text style={styles.tableCell}>1</Text>
            </View>
            <View style={[styles.tableCol, { width: '30%' }]}>
              <Text style={styles.tableCell}>
                (307/a) -- Dag-beling
                <br />
                Single spade stroke minimum 75mm deep
              </Text>
            </View>
            <View style={[styles.tableCol, { width: '5%' }]}>
              <Text style={styles.tableCell}>1</Text>
            </View>
            <View style={[styles.tableCol, { width: '10%' }]}>
              <Text style={styles.tableCell}>72.00</Text>
            </View>
            <View style={[styles.tableCol, { width: '10%' }]}></View>
            <View style={[styles.tableCol, { width: '10%' }]}></View>
            <View style={[styles.tableCol, { width: '10%' }]}>
              <Text style={styles.tableCell}>2.00</Text>
            </View>
            <View style={[styles.tableCol, { width: '10%' }]}>
              <Text style={styles.tableCell}>144.00</Text>
            </View>
            <View style={[styles.tableCol, { width: '10%' }]}></View>
          </View>

          <View style={styles.tableRow}>
            <View style={[styles.tableCol, { width: '5%' }]}>
              <Text style={styles.tableCell}></Text>
            </View>
            <View style={[styles.tableCol, { width: '30%' }]}>
              <Text style={styles.tableCell}>Both side of Road</Text>
            </View>
            <View style={[styles.tableCol, { width: '5%' }]}>
              <Text style={styles.tableCell}>1</Text>
            </View>
            <View style={[styles.tableCol, { width: '10%' }]}>
              <Text style={styles.tableCell}>72.00</Text>
            </View>
            <View style={[styles.tableCol, { width: '10%' }]}></View>
            <View style={[styles.tableCol, { width: '10%' }]}></View>
            <View style={[styles.tableCol, { width: '10%' }]}></View>
            <View style={[styles.tableCol, { width: '10%' }]}></View>
            <View style={[styles.tableCol, { width: '10%' }]}></View>
          </View>

          <View style={styles.tableRow}>
            <View style={[styles.tableCol, { width: '5%' }]}>
              <Text style={styles.tableCell}>2</Text>
            </View>
            <View style={[styles.tableCol, { width: '30%' }]}>
              <Text style={styles.tableCell}>
                (307/b) -- Earth work in excavation in trenches for foundations and for pipes, cables etc. not exceeding 1.5m in width and for shafts, cesspits and the like not exceeding 10sqm on plan including dressing of sides and ramming of bottoms lift upto 1.5m including getting out the excavated soil and disposal of surplus excavated soil as directed, within a lead of 20m
                <br />
                (b) Dense or hard soil (PT/45/45)
              </Text>
            </View>
            <View style={[styles.tableCol, { width: '5%' }]}>
              <Text style={styles.tableCell}>1</Text>
            </View>
            <View style={[styles.tableCol, { width: '10%' }]}>
              <Text style={styles.tableCell}>72.00</Text>
            </View>
            <View style={[styles.tableCol, { width: '10%' }]}>
              <Text style={styles.tableCell}>0.50</Text>
            </View>
            <View style={[styles.tableCol, { width: '10%' }]}>
              <Text style={styles.tableCell}>0.20</Text>
            </View>
            <View style={[styles.tableCol, { width: '10%' }]}>
              <Text style={styles.tableCell}>1.00</Text>
            </View>
            <View style={[styles.tableCol, { width: '10%' }]}>
              <Text style={styles.tableCell}>14.40</Text>
            </View>
            <View style={[styles.tableCol, { width: '10%' }]}></View>
          </View>
        </View>

        <View style={styles.signatures}>
          <Text style={[styles.signature, styles.label]}>{data.subEngineer}</Text>
          <Text style={[styles.signature, styles.signatureRight, styles.label]}>{data.assistantEngineer}</Text>
        </View>
      </Page>

    </Document>
  );
};

export default PDFDocument;
