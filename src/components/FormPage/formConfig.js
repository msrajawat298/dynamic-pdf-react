import * as Yup from 'yup';

export const formSchema = Yup.object().shape({
  block: Yup.string().required('Required'),
  createdBy: Yup.string().required('Required'),
  sorPeriod: Yup.string().required('Required'),
  estimatedName: Yup.string().required('Required'),
  authorityTS: Yup.string().required('Required'),
  authorityAS: Yup.string().required('Required'),
  headOfAccount: Yup.string().required('Required'),
  sanctionedYear: Yup.string().required('Required'),
  reportTitle: Yup.string().required('Required'),
  workName: Yup.string().required('Required'),
  gramPanchayat: Yup.string().required('Required'),
});

export const initialValues = {
  block: '',
  estimatedName: '',
  authorityTS: '',
  authorityAS: '',
  headOfAccount: '',
  sanctionedYear: '',
  reportTitle: 'TECHNICAL REPORT',
  workName: '',
  sorPeriod: '',
  createdBy: '',
  gramPanchayat: '',
};
