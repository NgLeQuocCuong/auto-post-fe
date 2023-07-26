import { DatePicker, Space } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { FC, memo } from 'react';
import { useSearchParams } from 'react-router-dom';
dayjs.extend(customParseFormat);

const disabledDate: RangePickerProps['disabledDate'] = current => {
    // Can not select days after today
    return current && current > dayjs().endOf('day');
};

const CustomDatePicker: FC = memo(() => {
    const [searchParams] = useSearchParams();
    return (
        <Space direction="vertical" size={12}>
            <DatePicker
                disabledDate={disabledDate}
                format="DD/MM/YYYY"
                placeholder="Chọn ngày"
            />
        </Space>
    );
});

CustomDatePicker.displayName = 'CustomDatePicker';
export default CustomDatePicker;
