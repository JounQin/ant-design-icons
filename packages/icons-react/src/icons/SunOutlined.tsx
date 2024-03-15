// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SunOutlinedSvg from '@ant-design/icons-svg/lib/asn/SunOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SunOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SunOutlinedSvg} />;

if (process.env.NODE_ENV !== 'production') {
  SunOutlined.displayName = 'SunOutlined';
}
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SunOutlined);