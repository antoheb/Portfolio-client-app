import React from 'react'
import { FieldRenderProps } from 'react-final-form'
import { Form, FormFieldProps, Input } from 'semantic-ui-react'

interface IProps
  extends FieldRenderProps<string, HTMLElement>,
    FormFieldProps {}

export const TextAreaInput: React.FC<IProps> = ({
  input,
  width,
  rows,
  placeholder,
  meta: { touched, error },
}) => {
  return (
    <Form.Field
      error={touched && !!error && { content: error, pointing: 'below' }}
      width={width}
      control={Input}
    >
      <textarea rows={rows} {...input} placeholder={placeholder} />
    </Form.Field>
  )
}
