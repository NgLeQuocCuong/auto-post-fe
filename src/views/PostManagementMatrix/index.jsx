import { memo, useCallback, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { getToken } from 'reducers/token/function';
// import routeConstants from 'route/routeConstant';
import postService from 'services/postService';
import Inner from 'views/PostManagementMatrix/Inner';
import { useParams } from 'react-router-dom';
const Wrapper = memo(() => {
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
    const handleViewPostManagement = useCallback(async data => {
        const response = await postService.getManagementMatrix(data);
        if (response.isSuccess) {
            setTableData(response.data);
        }
        return response;
    }, []);
    return (
        <Inner
            uid={uid}
            handleViewPostManagement={handleViewPostManagement}
            tableData={tableData}
        />
    );
});

Wrapper.displayName = 'Post Management Matrix';

const PostManagement = Wrapper;

export default PostManagement;
