import React from 'react';
import { Page, Text, View, Document } from '@react-pdf/renderer';
import { styles } from './styles';
import { data } from '../../utils/constant';

const PDFDocument = () => {
  const sections = [
    { serial: '1', heading: 'Name of Work', value: data.workName },
    { serial: '2', heading: 'Agency', value: data.agency },
    { serial: '3', heading: 'Estimated Cost', value: data.estimatedCost },
    { serial: '4', heading: 'Authority For T/S', value: data.authorityTS },
    { serial: '5', heading: 'Authority For A/S', value: data.authorityAS },
    { serial: '6', heading: 'Head of Account', value: data.headOfAccount },
    { serial: '7', heading: 'Sanctioned Year', value: data.sanctionedYear },
    { serial: '8', heading: 'Provision', value: data.provision.map((item, index) => (<View style={[styles.dBlock]}><Text key={index} style={styles.value}>{item}</Text></View>)) },
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
      </Page>
    </Document>
  );
};

export default PDFDocument;
