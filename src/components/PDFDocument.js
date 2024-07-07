import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 10 },
  text: { fontSize: 12 }
});

const PDFDocument = ({ data }) => {
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.text}>Name of Work: {data.workName}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Agency: {data.agency}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Estimated Cost: {data.estimatedCost}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Authority for T/S: {data.authorityTS}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Authority for A/S: {data.authorityAS}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Head of Account: {data.headOfAccount}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Provision: {data.provision}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Rates: {data.rates}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Sanctioned Year: {data.sanctionedYear}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Technical Report: {data.technicalReport}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Detailed Estimate: {data.detailedEstimate}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFDocument;
