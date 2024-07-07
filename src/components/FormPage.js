import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Grid } from '@mui/material';

const formSchema = Yup.object().shape({
  workName: Yup.string().required('Required'),
  agency: Yup.string().required('Required'),
  estimatedCost: Yup.number().required('Required'),
  authorityTS: Yup.string().required('Required'),
  authorityAS: Yup.string().required('Required'),
  headOfAccount: Yup.string().required('Required'),
  provision: Yup.string().required('Required'),
  rates: Yup.string().required('Required'),
  sanctionedYear: Yup.string().required('Required'),
  technicalReport: Yup.string().required('Required'),
  detailedEstimate: Yup.string().required('Required'),
});

const initialValues = {
  workName: '',
  agency: '',
  estimatedCost: '',
  authorityTS: '',
  authorityAS: '',
  headOfAccount: '',
  provision: '',
  rates: '',
  sanctionedYear: '',
  technicalReport: '',
  detailedEstimate: '',
};

const FormPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    // Save form data to context or state
    navigate('/preview', { state: { formData: values } }); 
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Fill out the form
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, handleChange, handleBlur, values }) => (
          <Form>
            <Grid container spacing={3}>
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
                  label="Provision"
                  name="provision"
                  value={values.provision}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.provision && !!errors.provision}
                  helperText={touched.provision && errors.provision}
                />
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
                  label="Technical Report"
                  name="technicalReport"
                  value={values.technicalReport}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.technicalReport && !!errors.technicalReport}
                  helperText={touched.technicalReport && errors.technicalReport}
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Detailed Estimate"
                  name="detailedEstimate"
                  value={values.detailedEstimate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.detailedEstimate && !!errors.detailedEstimate}
                  helperText={touched.detailedEstimate && errors.detailedEstimate}
                  multiline
                  rows={4}
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
