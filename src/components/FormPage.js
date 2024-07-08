import React from 'react';
import { Formik, Form, FieldArray } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Grid, IconButton, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { HEAD_OF_ACCOUNT } from '../utils/constant';

const formSchema = Yup.object().shape({
  jp: Yup.string().required('Required'),
  sorPeriod: Yup.string().required('Required'),
  zp: Yup.string().required('Required'),
  estimatedCost: Yup.number().required('Required'),
  estimatedName: Yup.string().required('Required'),
  authorityTS: Yup.string().required('Required'),
  authorityAS: Yup.string().required('Required'),
  headOfAccount: Yup.string().required('Required'),
  sanctionedYear: Yup.string().required('Required'),
  reportTitle: Yup.string().required('Required'),
  workName: Yup.string().required('Required'),
  agency: Yup.string().required('Required'),
  provision: Yup.array().of(Yup.string().required('Required')),
  rates: Yup.string().required('Required'),
  certifications: Yup.array().of(Yup.string().required('Required')),
  subEngineer: Yup.string().required('Required'),
  assistantEngineer: Yup.string().required('Required'),
});

const initialValues = {
  jp: '',
  zp: '',
  estimatedCost: '',
  estimatedName: '',
  authorityTS: '',
  authorityAS: '',
  headOfAccount: '',
  sanctionedYear: '',
  reportTitle: 'TECHNICAL REPORT',
  workName: '',
  agency: '',
  provision: [''],
  rates: '',
  certifications: [''],
  subEngineer: '',
  assistantEngineer: '',
  sorPeriod: '',
};

const FormPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    navigate('/preview', { state: { formData: values } });
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Fill Data for Estimate Creation
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, values, handleChange, handleBlur }) => (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="sor-period-label">Select SOR Period</InputLabel>
                  <Select
                    labelId="sor-period-label"
                    id="sor-period"
                    name="sorPeriod"
                    value={values.sorPeriod}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.sorPeriod && !!errors.sorPeriod}
                  >
                    <MenuItem value="RES-11/04/2022">RES-11/04/2022</MenuItem>
                    <MenuItem value="MGNREGA- 2023-24">MGNREGA- 2023-24</MenuItem>
                  </Select>
                  {touched.sorPeriod && errors.sorPeriod && (
                    <FormHelperText error>{errors.sorPeriod}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Estimated Name"
                  name="estimatedName"
                  type="text"
                  value={values.estimatedName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.estimatedName && !!errors.estimatedName}
                  helperText={touched.estimatedName && errors.estimatedName}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="head-of-account-label">Head of Account</InputLabel>
                  <Select
                    labelId="head-of-account-label"
                    id="headOfAccount"
                    name="headOfAccount"
                    value={values.headOfAccount}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.headOfAccount && !!errors.headOfAccount}
                  >
                    {HEAD_OF_ACCOUNT.map((account, index) => (
                      <MenuItem key={index} value={account}>{account}</MenuItem>
                    ))}
                  </Select>
                  {touched.headOfAccount && errors.headOfAccount && (
                    <FormHelperText error>{errors.headOfAccount}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="J.P."
                  name="jp"
                  value={values.jp}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.jp && !!errors.jp}
                  helperText={touched.jp && errors.jp}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Z.P."
                  name="zp"
                  value={values.zp}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.zp && !!errors.zp}
                  helperText={touched.zp && errors.zp}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Estimated Cost"
                  name="estimatedCost"
                  type="number"
                  value={values.estimatedCost}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.estimatedCost && !!errors.estimatedCost}
                  helperText={touched.estimatedCost && errors.estimatedCost}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name of Work"
                  name="workName"
                  value={values.workName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.workName && !!errors.workName}
                  helperText={touched.workName && errors.workName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Authority for T/S"
                  name="authorityTS"
                  value={values.authorityTS}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.authorityTS && !!errors.authorityTS}
                  helperText={touched.authorityTS && errors.authorityTS}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Authority for A/S"
                  name="authorityAS"
                  value={values.authorityAS}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.authorityAS && !!errors.authorityAS}
                  helperText={touched.authorityAS && errors.authorityAS}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Head of Account"
                  name="headOfAccount"
                  value={values.headOfAccount}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.headOfAccount && !!errors.headOfAccount}
                  helperText={touched.headOfAccount && errors.headOfAccount}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Sanctioned Year"
                  name="sanctionedYear"
                  value={values.sanctionedYear}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.sanctionedYear && !!errors.sanctionedYear}
                  helperText={touched.sanctionedYear && errors.sanctionedYear}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Agency"
                  name="agency"
                  value={values.agency}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.agency && !!errors.agency}
                  helperText={touched.agency && errors.agency}
                />
              </Grid>
              <Grid item xs={12}>
                <FieldArray name="provision">
                  {({ push, remove }) => (
                    <>
                      {values.provision.map((report, index) => (
                        <Grid container spacing={2} key={index}>
                          <Grid item xs={10}>
                            <TextField
                              fullWidth
                              label={`Technical Report Item ${index + 1}`}
                              name={`provision.${index}`}
                              value={report}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={touched.provision?.[index] && !!errors.provision?.[index]}
                              helperText={touched.provision?.[index] && errors.provision?.[index]}
                            />
                          </Grid>
                          <Grid item xs={2}>
                            <IconButton onClick={() => remove(index)}>
                              <RemoveIcon />
                            </IconButton>
                          </Grid>
                        </Grid>
                      ))}
                      <Button startIcon={<AddIcon />} onClick={() => push('')}>
                        Add Technical Report Item
                      </Button>
                    </>
                  )}
                </FieldArray>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Rates"
                  name="rates"
                  value={values.rates}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.rates && !!errors.rates}
                  helperText={touched.rates && errors.rates}
                  multiline
                  rows={2}
                />
              </Grid>
              <Grid item xs={12}>
                <FieldArray name="certifications">
                  {({ push, remove }) => (
                    <>
                      {values.certifications.map((cert, index) => (
                        <Grid container spacing={2} key={index}>
                          <Grid item xs={10}>
                            <TextField
                              fullWidth
                              label={`Certification ${index + 1}`}
                              name={`certifications.${index}`}
                              value={cert}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={touched.certifications?.[index] && !!errors.certifications?.[index]}
                              helperText={touched.certifications?.[index] && errors.certifications?.[index]}
                            />
                          </Grid>
                          <Grid item xs={2}>
                            <IconButton onClick={() => remove(index)}>
                              <RemoveIcon />
                            </IconButton>
                          </Grid>
                        </Grid>
                      ))}
                      <Button startIcon={<AddIcon />} onClick={() => push('')}>
                        Add Certification
                      </Button>
                    </>
                  )}
                </FieldArray>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Sub Engineer"
                  name="subEngineer"
                  value={values.subEngineer}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.subEngineer && !!errors.subEngineer}
                  helperText={touched.subEngineer && errors.subEngineer}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Assistant Engineer"
                  name="assistantEngineer"
                  value={values.assistantEngineer}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.assistantEngineer && !!errors.assistantEngineer}
                  helperText={touched.assistantEngineer && errors.assistantEngineer}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default FormPage;