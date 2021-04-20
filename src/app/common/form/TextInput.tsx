import React from 'react'
import { FieldRenderProps } from 'react-final-form'
import { Form, FormFieldProps, Input } from 'semantic-ui-react'

interface IProps
  extends FieldRenderProps<string, HTMLElement>,
    FormFieldProps {}

export const TextInput: React.FC<IProps> = ({
  input,
  width,
  type,
  placeholder,
  meta: { touched, error },
}) => {
  return (
    <Form.Field
      width={width}
      control={Input}
      type={type}
      error={touched && !!error && { content: error, pointing: 'below' }}
    >
      <input {...input} placeholder={placeholder} />
    </Form.Field>
  )
}
