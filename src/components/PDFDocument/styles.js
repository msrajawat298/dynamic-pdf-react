import { StyleSheet } from '@react-pdf/renderer';
export const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  title: { fontSize: 14, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCol: {
    width: 'auto', // Let the width be controlled by percentage
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  tableCell: {
    fontSize: 12,
  },
  section: {
    marginVertical: 10,
  },
  dBlock:{
    display: 'block',
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 12,
  },
  tableColHeader: {
    width: '10%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    backgroundColor: '#bfbfbf',
  },
  tableCellHeader: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  signatures: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  signature: {
    width: '50%',
    textAlign: 'left',
  },
  signatureRight: {
    textAlign: 'right',
  },
});
