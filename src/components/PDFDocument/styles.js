import { StyleSheet } from '@react-pdf/renderer';

// export const styles = StyleSheet.create({
//     page: { padding: 20, fontFamily: 'Helvetica' },
//     table: { display: 'table', width: 'auto', borderStyle: 'solid', borderWidth: 1, borderRightWidth: 0, borderBottomWidth: 0 },
//     tableRow: { margin: 'auto', flexDirection: 'row' },
//     tableCol: { width: '50%', borderStyle: 'solid', borderWidth: 1, borderLeftWidth: 0, borderTopWidth: 0 },
//     tableCell: { margin: 'auto', marginTop: 5, fontSize: 10 },
//     title: { fontSize: 14, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
//     section: { marginBottom: 10 },
//     label: { fontSize: 10, fontWeight: 'bold' },
//     value: { fontSize: 10 },
//     technicalReport: { marginTop: 10, marginBottom: 10 },
//     signatures: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
// });
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
});
