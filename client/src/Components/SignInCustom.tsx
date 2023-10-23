// SignIn.tsx
import React, { useState, FunctionComponent } from 'react';
import Select from 'react-select';

interface SignInProps {
  openSignInModal: () => void;
  openBrandSignInModal: () => void;
}

const options = [
  { value: 'user', label: 'User Sign In' },
  { value: 'brand', label: 'Brand Sign In' },
];

const SignIn: FunctionComponent<SignInProps> = ({ openSignInModal, openBrandSignInModal }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (option:any) => {
    setSelectedOption(option);
    if (option.value === 'user') {
      openSignInModal();
    } else if (option.value === 'brand') {
      openBrandSignInModal();
    }
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
    />
  );
}

export default SignIn;
