import { FC, memo, useCallback, useEffect, useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd';
import { Button, Space, Input, Tag, Tooltip } from 'antd';
import { ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

interface TagSelectProps {
    onChange: (tags: string[]) => void;
}

const TagSelect: FC<TagSelectProps> = memo(({ onChange }) => {
    const [tags, setTags] = useState<string[]>([]);
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [editInputIndex, setEditInputIndex] = useState(-1);
    const [editInputValue, setEditInputValue] = useState('');
    const inputRef = useRef<InputRef>(null);
    const editInputRef = useRef<InputRef>(null);
    const [searchParams] = useSearchParams();
    useEffect(() => {
        const postTypesFromUrl = searchParams.getAll('postType');
        if (postTypesFromUrl.length > 0) {
            const postTypes = postTypesFromUrl.join(',').split(',');
            setTags(postTypes);
        }
    }, [searchParams]);

    const handleClose = useCallback(
        (removedTag: string) => {
            const newTags = tags.filter(tag => tag !== removedTag);
            setTags(newTags);
            onChange(newTags);
        },
        [onChange, tags]
    );

    const showInput = useCallback(() => {
        setInputVisible(true);
    }, []);

    const handleInputChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            setInputValue(e.target.value);
        },
        []
    );

    const handleInputConfirm = useCallback(() => {
        if (inputValue && tags.indexOf(inputValue) === -1) {
            setTags(prevTags => [...prevTags, inputValue]);
            setInputValue('');
        }
        setInputVisible(false);
    }, [inputValue, tags]);

    const handleEditInputChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            setEditInputValue(e.target.value);
        },
        []
    );

    const handleEditInputConfirm = useCallback(() => {
        const newTags = [...tags];
        newTags[editInputIndex] = editInputValue;
        setTags(newTags);
        setEditInputIndex(-1);
        onChange(newTags);
    }, [editInputIndex, editInputValue, onChange, tags]);

    return (
        <Space size={[0, 8]} wrap>
            <div className="filter-tag-counter">{tags.length}/5</div>
            {tags.map((tag, index) => {
                if (editInputIndex === index) {
                    return (
                        <Input
                            ref={editInputRef}
                            key={tag}
                            size="small"
                            value={editInputValue}
                            onChange={handleEditInputChange}
                            onBlur={handleEditInputConfirm}
                            onPressEnter={handleEditInputConfirm}
                        />
                    );
                }
                const isLongTag = tag.length > 10;
                const tagElem = (
                    <Tag
                        key={tag}
                        closable
                        style={{ userSelect: 'none' }}
                        className="filter-tag-select"
                        onClose={() => handleClose(tag)}
                    >
                        <span
                            onDoubleClick={e => {
                                setEditInputIndex(index);
                                setEditInputValue(tag);
                                e.preventDefault();
                            }}
                        >
                            {isLongTag ? `${tag.slice(0, 10)}...` : tag}
                        </span>
                    </Tag>
                );
                return isLongTag ? (
                    <Tooltip title={tag} key={tag}>
                        {tagElem}
                    </Tooltip>
                ) : (
                    tagElem
                );
            })}
            {inputVisible ? (
                <Input
                    className="filter-tag-input"
                    ref={inputRef}
                    type="text"
                    size="small"
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputConfirm}
                    onPressEnter={handleInputConfirm}
                />
            ) : (
                <Button
                    type="default"
                    size="middle"
                    onClick={showInput}
                    disabled={tags.length >= 5}
                >
                    <PlusOutlined /> Thêm
                </Button>
            )}
        </Space>
    );
});

TagSelect.displayName = 'TagSelect';
export default TagSelect;
