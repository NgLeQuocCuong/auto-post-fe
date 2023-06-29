import { memo, useCallback, useEffect, useState } from 'react';
import postService from 'services/postService';
import Inner from 'views/AllPosts/Inner';

const Wrapper = memo(() => {
    //Create variable to store table data
    const [tableData, setTableData] = useState({
        content: [],
        currentPage: 0,
        pageSize: 10,
        totalPages: 0,
        totalRows: 0,
    });
    const handleAllPosts = useCallback(async data => {
        const response = await postService.filterPosts(data);
        if (response.isSuccess) {
            setTableData(response.data);
        }
        return response;
    }, []);
    //Load table data on first render
    useEffect(() => {
        handleAllPosts({});
    }, [handleAllPosts]);
    return <Inner handleAllPosts={handleAllPosts} tableData={tableData} />;
});

Wrapper.displayName = 'All Posts';

const AllPosts = Wrapper;

export default AllPosts;
