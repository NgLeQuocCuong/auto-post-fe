import { memo, useCallback, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import routeConstants from 'route/routeConstant';
import postService from 'services/postService';
import Inner from 'views/PostManagementOfPost/Inner';
import { useParams } from 'react-router-dom';
import { Spin } from 'antd';
const Wrapper = memo(() => {
    const [isLoading, setIsLoading] = useState(false);
    //Create variable to store table data
    const [tableData, setTableData] = useState({
        content: [],
        currentPage: 0,
        pageSize: 10,
        totalPages: 0,
        totalRows: 0,
    });
    //Get uid from url
    const { uid } = useParams();
    const handleViewPostManagement = useCallback(
        async data => {
            setIsLoading(true);
            const response = await postService.filterPostManagement(data, uid);
            setIsLoading(false);
            if (response.isSuccess) {
                setTableData(response.data);
            }
            return response;
        },
        [uid]
    );
    return (
        <Spin spinning={isLoading} size="large">
            <Inner
                uid={uid}
                handleViewPostManagement={handleViewPostManagement}
                tableData={tableData}
            />
        </Spin>
    );
});

Wrapper.displayName = 'Post Management';

const PostManagement = Wrapper;

export default PostManagement;
