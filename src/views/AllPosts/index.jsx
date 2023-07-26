import { memo, useCallback, useEffect, useState } from 'react';
import postService from 'services/postService';
import Inner from 'views/AllPosts/Inner';
import { useSearchParams } from 'react-router-dom';
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

    //Create function to handle filter

    const handleAllPosts = useCallback(async data => {
        setIsLoading(true);
        const response = await postService.filterPosts(data);
        setIsLoading(false);
        if (response.isSuccess) {
            setTableData(response.data);
        }
        return response;
    }, []);
    //Load page with params from url
    const [searchParams] = useSearchParams();
    useEffect(() => {
        //Get params from url (if any)
        const params = {
            page: searchParams.get('page') || undefined,
            pageSize: searchParams.get('pageSize') || undefined,
            search: searchParams.get('search') || undefined,
            title: searchParams.get('title') || undefined,
            postType: searchParams.get('postType') || undefined,
            sortType: searchParams.get('sortType') || undefined,
            minTime: searchParams.get('minTime') || undefined,
            maxTime: searchParams.get('maxTime') || undefined,
        };
        //Remove undefined params
        Object.keys(params).forEach(key => {
            if (params[key] === undefined || !params[key]) {
                delete params[key];
            }
        });
        handleAllPosts(params);
    }, [handleAllPosts, searchParams]);
    const handleRemovePost = useCallback(async uid => {
        setIsLoading(true);
        const response = await postService.removePost(uid);
        setIsLoading(false);
        if (response.isSuccess) {
            //Remove post from table manually because remove API only return success/fail
            setTableData(prevData => {
                const newData = { ...prevData };
                newData.content = newData.content.filter(
                    post => post.uid !== uid
                );
                newData.totalRows -= 1;
                newData.totalPages = Math.ceil(
                    newData.totalRows / newData.pageSize
                );
                return newData;
            });
        }
        return response;
    }, []);
    return (
        <Spin spinning={isLoading} size="large">
            <Inner
                handleAllPosts={handleAllPosts}
                handleRemovePost={handleRemovePost}
                tableData={tableData}
            />
        </Spin>
    );
});

Wrapper.displayName = 'All Posts';

const AllPosts = Wrapper;

export default AllPosts;
