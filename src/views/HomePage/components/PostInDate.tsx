import React, { FC, memo } from 'react';
import TableComponent from './Table';
import '../style.scss';

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
