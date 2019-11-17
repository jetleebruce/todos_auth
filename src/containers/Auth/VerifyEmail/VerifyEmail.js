import React from "react";

import { FormWrapper } from "../../../hoc/layout/elements";
import Heading from "../../../components/UI/Headings/Heading";
import Button from "../../../components/UI/Forms/Button/Button";

const VerifyEmail = () => {
  return (
    <FormWrapper>
      <Heading color='white' size='h1'>
        Verify Your Email
      </Heading>
      <Heading color='white' bold size='h4'>
        Go to your email box and verify email
      </Heading>
      <Button>Resend verification email</Button>
    </FormWrapper>
  );
};

export default VerifyEmail;
