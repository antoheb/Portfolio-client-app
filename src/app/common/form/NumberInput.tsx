import { FieldRenderProps } from 'react-final-form'
import { Form, FormFieldProps, Input } from 'semantic-ui-react'

interface IProps
  extends FieldRenderProps<string, HTMLElement>,
    FormFieldProps {}

export const NumberInput: React.FC<IProps> = ({
  input,
  width,
  placeholder,
  meta: { touched, error },
}) => {
  return (
    <Form.Field
      width={width}
      control={Input}
      error={touched && !!error && { content: error, pointing: 'below' }}
    >
      <input {...input} placeholder={placeholder} type="number" min="0" />
    </Form.Field>
  )
}
