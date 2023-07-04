import { Form, Input, Tag } from 'antd';
import usePostPageContext from 'components/PostPage/components/Context';
import React, { FC, memo, useEffect, useRef } from 'react';
import '../style.scss';
import '../OverWrite.scss';

const PostForm: FC = memo(() => {
    const formRef = useRef<any>();
    const { data, setTitle, setValue, setPostType, removePostType } =
        usePostPageContext();

    useEffect(() => {
        if (!data.loading) {
            formRef.current?.resetFields(['title', 'content']);
        }
    }, [data.loading]);

    const handleValuesChanged = (changedValue: any) => {
        if ('title' in changedValue) {
            setTitle(changedValue.title);
        }

        if ('content' in changedValue) {
            setValue(changedValue.content);
        }
    };

    const handleUpdatePostType = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        const { value } = event.currentTarget;
        setPostType(value);
        event.currentTarget.value = '';
        formRef.current?.resetFields(['posttype']);
    };

    const hanldeCloseTag = (category: string) => {
        removePostType(category);
    };

    return (
        <Form
            name="basic"
            labelCol={{ span: 0 }} // Ẩn labelCol
            wrapperCol={{ span: 24 }}
            style={{ maxWidth: '100%' }}
            initialValues={{ remember: true }}
            layout="vertical"
            autoComplete="off"
            onValuesChange={handleValuesChanged}
            ref={formRef}
        >
            <Form.Item
                label="Tiêu đề"
                name="title"
                rules={[{ required: true, message: 'Bài viết thiếu tiêu đề' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Nội dung"
                name="content"
                rules={[
                    {
                        required: true,
                        message: 'Nhập nội dung cho bài viết',
                    },
                ]}
            >
                <Input.TextArea />
            </Form.Item>

            <Form.Item label="Gán nhãn" name="posttype">
                <Input onPressEnter={handleUpdatePostType} />
                <div className="all-tags">
                    {data.postType.map(category => (
                        <Tag
                            key={category}
                            className="category-tag"
                            closable
                            onClose={() => hanldeCloseTag(category)}
                        >
                            {category}
                        </Tag>
                    ))}
                </div>
            </Form.Item>
        </Form>
    );
});

PostForm.displayName = 'PostForm component';

export default PostForm;
