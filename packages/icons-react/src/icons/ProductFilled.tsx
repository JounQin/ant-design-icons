// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ProductFilledSvg from '@ant-design/icons-svg/lib/asn/ProductFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProductFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ProductFilledSvg} />;

if (process.env.NODE_ENV !== 'production') {
  ProductFilled.displayName = 'ProductFilled';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ProductFilled);