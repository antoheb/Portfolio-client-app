import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { Form, FormFieldProps, Input } from 'semantic-ui-react';

interface IProps
  extends FieldRenderProps<string, HTMLElement>,
    FormFieldProps {}

export const TextInputIcon: React.FC<IProps> = ({
  input,
  width,
  type,
  placeholder,
  icon,
  meta: { touched, error },
}) => {
  return (
    <Form.Field
      width={width}
      control={Input}
      error={touched && !!error && {
        content: error,
        pointing: 'below',
      }}
    >
      <Input
        input={input}
        icon={icon}
        iconPosition='left'
        placeholder={placeholder}
        type={type}
      />
    </Form.Field>
  );
};