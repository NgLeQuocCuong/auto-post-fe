import { memo, useCallback, useEffect, useState } from 'react';
import postService from 'services/postService';
import Inner from 'views/PostManagementOfPost/Inner';
import { useParams, useSearchParams } from 'react-router-dom';
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
    const [searchParams] = useSearchParams();
    useEffect(() => {
        //Get params from url (if any)
        const params = {
            page: searchParams.get('page') || undefined,
            pageSize: searchParams.get('pageSize') || undefined,
            postType: searchParams.get('postType') || undefined,
            sortType: searchParams.get('sortType') || undefined,
            platform: searchParams.get('platform') || undefined,
            autoPublish: searchParams.get('autoPublish') || undefined,
            status: searchParams.get('status') || undefined,
            minTime: searchParams.get('minTime') || undefined,
            maxTime: searchParams.get('maxTime') || undefined,
        };
        //Remove undefined params
        Object.keys(params).forEach(key => {
            if (params[key] === undefined || !params[key]) {
                delete params[key];
            }
        });
        handleViewPostManagement(params);
    }, [handleViewPostManagement, searchParams]);
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
