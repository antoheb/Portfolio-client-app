import { AxiosResponse } from "axios";
import React from "react";
import { Message } from "semantic-ui-react";

interface IProps {
  error: AxiosResponse;
  text?: string;
}

export const ErrorMessage: React.FC<IProps> = ({ error, text }) => {
  if (error) {
    return (
      <Message error>
        {error.data && Object.keys(error.data.errors).length > 0 && (
          <Message.List>
            {Object.values(error.data.errors)
              .flat()
              .map((err, i) => (
                <Message.Item key={i}> {err} </Message.Item>
              ))}
          </Message.List>
        )}
        {text && <Message content={text} />}
      </Message>
    );
  }

  return <Message color="red" content={text} />;
};