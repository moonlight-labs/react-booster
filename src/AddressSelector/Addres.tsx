import * as React from 'react';

type AddressProps = {
  address?: string;
  placeholder?: string;
};

export const Address: React.FC<AddressProps> = ({ address, placeholder }) => {
  if (!address) return null;

  const splitAddressArr = address.split(',');
  const addr1 = splitAddressArr[0];
  const addr2 = splitAddressArr.slice(1).join(',');

  const style: { fontSize: string; color?: string } = { fontSize: '14px' };
  if (address == placeholder) style.color = '#bfbfbf';

  return (
    <div style={style}>
      <div>{addr1}</div>
      <div>{addr2}</div>
    </div>
  );
};
