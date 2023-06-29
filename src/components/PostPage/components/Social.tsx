import { FC, memo, useEffect, useState } from 'react';
import '../style.scss';
import { Button, Checkbox, Dropdown } from 'antd';
import userService from 'services/userService';
import { useNavigate } from 'react-router-dom';
import Message from 'components/Message';
import usePostPageContext from 'components/PostPage/components/Context';
interface Option {
    name: string;
    page_id: string;
    page_access_token: string;
}

const Social: FC = memo(() => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
    const { setGroupUID, removeGroupUID } = usePostPageContext();
    const [fbStatus, setFbStatus] = useState();

    // call API to check connect Facbook?
    const getMe = async () => {
        const response = await userService.me();
        if (response.isSuccess) {
            setFbStatus(response.data.facebookStatus);
        }
    };
    useEffect(() => {
        getMe();
    }, []);

    // call API to get all group page can post
    useEffect(() => {
        const getGroupName = async () => {
            const responseName = await userService.getGroupUID();
            if (responseName.isSuccess) {
                setSelectedOptions(responseName.data);
            }
        };
        getGroupName();
    }, []);

    const handleCheckboxChange = (item: Option, checked: boolean) => {
        if (checked) {
            setGroupUID(item);
        } else {
            removeGroupUID(item);
        }
    };

    const handleDropdownVisibleChange = (flag: boolean) => {
        setVisible(flag);
    };

    const handleCheckConnect = () => {
        if (!fbStatus) {
            navigate('/user-setting');
            Message.sendWarning(
                'Bạn phải đăng nhập Facebook trước khi đăng bài'
            );
        }
    };

    const menu = (
        <div>
            <Checkbox.Group className="checkbox-container">
                {selectedOptions.map(item => (
                    <Checkbox
                        key={item.page_id}
                        value={item}
                        className="checkbox-item"
                        onChange={e =>
                            handleCheckboxChange(item, e.target.checked)
                        }
                    >
                        {item.name}
                    </Checkbox>
                ))}
            </Checkbox.Group>
        </div>
    );
    return (
        <div className="wrapper__social">
            <span className="wrapper__social--title">
                Nền tảng bạn muốn đăng bài:
            </span>
            <Dropdown
                overlay={menu}
                onOpenChange={handleDropdownVisibleChange}
                open={visible}
                trigger={['click']}
            >
                <Button onClick={handleCheckConnect}>
                    Facebook <i className="fa fa-caret-down" />
                </Button>
            </Dropdown>
        </div>
    );
});

Social.displayName = 'SocialComponent';

export default Social;
