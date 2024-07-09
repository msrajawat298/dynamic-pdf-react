import React from 'react';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Typography, Grid, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import { HEAD_OF_ACCOUNT, AUTHORITY_TS, AUTHORITY_AS, SOR_PERIOD, BLOCK, SANCTIONED_YEAR } from '../../utils/constant';
import { SelectField, TextFieldComponent } from '../FormComponents/FormComponents';
import { formSchema, initialValues } from './formConfig';

const FormPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log('values :: ', values);
    localStorage.removeItem('formData');
    localStorage.setItem('formData', JSON.stringify(values));
    navigate('/preview', { state: { formData: values } });
  };

  return (
    <Container maxWidth="md">
      <Typography  variant="h4" gutterBottom>
        Fill Data for Estimate Creation
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={handleSubmit}
      >
        {formik => (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <SelectField
                  label="Sanctioned Year"
                  name="sanctionedYear"
                  options={SANCTIONED_YEAR}
                  formik={formik}
                />
              </Grid>
              <Grid item xs={6}>
                <SelectField
                  label="Block or JANPAD PANCHAYAT (J.P)"
                  name="block"
                  options={Object.keys(BLOCK)}
                  formik={formik}
                />
              </Grid>
              <Grid item xs={12}>
                <SelectField
                  label="Select SOR Period"
                  name="sorPeriod"
                  options={SOR_PERIOD}
                  formik={formik}
                />
              </Grid>
              <Grid item xs={12}>
                <TextFieldComponent
                  label="Estimated Name"
                  name="estimatedName"
                  formik={formik}
                />
              </Grid>
              <Grid item xs={12}>
                <TextFieldComponent
                  label="Name of Work"
                  name="workName"
                  formik={formik}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth error={formik.touched.createdBy && !!formik.errors.createdBy}>
                  <InputLabel id="created-by-label">Created By Engg.</InputLabel>
                  <Select
                    size='small'
                    variant='filled'
                    labelId="created-by-label"
                    id="createdBy"
                    name="createdBy"
                    value={formik.values.createdBy}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    {!formik?.values?.block && <MenuItem>Select First JP</MenuItem>}
                    {formik.values.block && Object.keys(BLOCK[formik.values.block]).map((createdByOption, index) => (
                      <MenuItem key={index} value={createdByOption}>{createdByOption}</MenuItem>
                    ))}
                  </Select>
                  {formik.touched.createdBy && formik.errors.createdBy && (
                    <FormHelperText>{formik.errors.createdBy}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth error={formik.touched.gramPanchayat && !!formik.errors.gramPanchayat}>
                  <InputLabel id="gram-panchayat-label">Gram Panchayat</InputLabel>
                  <Select
                    size='small'
                    variant='filled'
                    labelId="gram-panchayat-label"
                    id="gramPanchayat"
                    name="gramPanchayat"
                    value={formik.values.gramPanchayat}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    {!formik?.values?.block && !formik.values.createdBy && <MenuItem>Select Created By Engg</MenuItem>}
                    {formik.values.block && formik.values.createdBy && Array.isArray(BLOCK[formik.values.block][formik.values.createdBy]) ? (
                      BLOCK[formik.values.block][formik.values.createdBy].map((option, index) => (
                        <MenuItem key={index} value={option}>{option}</MenuItem>
                      ))
                    ) : null}
                  </Select>
                  {formik.touched.gramPanchayat && formik.errors.gramPanchayat && (
                    <FormHelperText>{formik.errors.gramPanchayat}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <SelectField
                  label="Authority TS"
                  name="authorityTS"
                  options={AUTHORITY_TS}
                  formik={formik}
                />
              </Grid>
              <Grid item xs={12}>
                <SelectField
                  label="Authority AS"
                  name="authorityAS"
                  options={AUTHORITY_AS}
                  formik={formik}
                />
              </Grid>
              <Grid item xs={12}>
                <SelectField
                  label="Head of Account"
                  name="headOfAccount"
                  options={HEAD_OF_ACCOUNT}
                  formik={formik}
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
