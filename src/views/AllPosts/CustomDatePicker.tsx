import {memo, FC} from 'react';
import { DatePicker, Space } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

// eslint-disable-next-line arrow-body-style
const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    // Can not select days after today
    return current && current > dayjs().endOf('day');
  
};

const CustomDatePicker: FC = memo(() => (
    <Space direction="vertical" size={12}>
      <DatePicker disabledDate={disabledDate} format="DD/MM/YYYY" placeholder="Chọn ngày" />
    </Space>
));

CustomDatePicker.displayName = 'CustomDatePicker';
export default CustomDatePicker;