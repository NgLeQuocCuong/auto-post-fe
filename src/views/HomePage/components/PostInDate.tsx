import TableComponent from 'views/HomePage/components/Table';
import { FC, memo } from 'react';

const PostInDate: FC = memo(() => {
    return (
        <div>
            <p className="wrapper__interact--title">Bài đăng trong ngày</p>
            <TableComponent />
        </div>
    );
});

PostInDate.displayName = 'PostInDate Component';

export default PostInDate;
