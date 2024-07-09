import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText, TextField } from '@mui/material';

export const SelectField = ({ label, name, options, formik }) => (
  <FormControl fullWidth error={formik.touched[name] && !!formik.errors[name]}>
    <InputLabel id={`${name}-label`}>{label}</InputLabel>
    <Select
      size='small'
      variant='filled'
      labelId={`${name}-label`}
      id={name}
      name={name}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    >
      {options.map((option, index) => (
        <MenuItem key={index} value={option}>{option}</MenuItem>
      ))}
    </Select>
    {formik.touched[name] && formik.errors[name] && (
      <FormHelperText>{formik.errors[name]}</FormHelperText>
    )}
  </FormControl>
);

export const TextFieldComponent = ({ label, name, formik }) => (
  <TextField
    size='small'
    fullWidth
    label={label}
    name={name}
    type="text"
    value={formik.values[name]}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    error={formik.touched[name] && !!formik.errors[name]}
    helperText={formik.touched[name] && formik.errors[name]}
    variant='filled'
  />
);
