import { Button, Form, Typography, Space, List, Col, Row, Image } from 'antd';
import { memo } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import AccountLayout from 'layouts/Account';
import moment from 'moment';
import './index.scss';
import CheckIcon from 'components/CommonInput/icons/CheckIcon';
import { NavLink } from 'react-router-dom';
import routeConstants from 'route/routeConstant';

const Inner = memo(
    ({
        userInfo,
        handleLinkFacebook,
        handleUnlinkFacebook,
        handleLinkZalo,
        handleUnlinkZalo,
    }) => {
        const appId = '283990164019980';
        const facebookPermissions =
            'public_profile,publish_to_groups,pages_manage_metadata,pages_manage_posts,pages_manage_engagement,pages_show_list';
        const facebookGetFields = 'name,email,picture,groups.limit(100)';
        return (
            <AccountLayout title="User Settings">
                <Row className="container user-settings-form">
                    <Col span={6}>
                        <Image
                            width={94}
                            height={94}
                            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSSlr2_vaXAWXtDCZ627ItaZLtIXDXSDOA60uLfvcBnhnPnBCXs"
                            className="user-settings-form__avatar--round"
                        />
                    </Col>
                    <Col span={18}>
                        <Form layout="vertical">
                            <Form.Item>
                                <Typography.Text
                                    component="div"
                                    className="user-settings-form__title"
                                >
                                    {userInfo.username}
                                </Typography.Text>
                                <Space>
                                    <NavLink to={routeConstants.USER_UPDATE}>
                                        <Button
                                            size="large"
                                            className="user-settings-form__btn--blue user-settings-form__btn--border"
                                        >
                                            Chỉnh sửa
                                        </Button>
                                    </NavLink>
                                    <NavLink
                                        to={routeConstants.CHANGE_PASSWORD}
                                    >
                                        <Button danger size="large">
                                            Đổi mật khẩu
                                        </Button>
                                    </NavLink>
                                </Space>
                            </Form.Item>
                            <Form.Item
                                label="Họ và tên"
                                className="user-settings-form__label--padding-bottom-0"
                            >
                                {userInfo.firstName}&nbsp;
                                {userInfo.lastName}
                            </Form.Item>
                            <Form.Item
                                label="Email"
                                className="user-settings-form__label--padding-bottom-0"
                            >
                                {userInfo.email}
                            </Form.Item>
                            <Form.Item
                                label="Ngày tham gia"
                                className="user-settings-form__label--padding-bottom-0"
                            >
                                {moment(new Date(userInfo.dateJoined)).format(
                                    'DD/MM/YYYY'
                                )}
                            </Form.Item>
                            <Form.Item className="user-settings-form__label--padding-bottom-0">
                                <List size="small" bordered>
                                    <List.Item>
                                        <Typography.Text className="user-settings-form__list--icon-group">
                                            Facebook
                                            {userInfo.facebookStatus ? (
                                                <CheckIcon />
                                            ) : (
                                                ''
                                            )}
                                        </Typography.Text>
                                        <FacebookLogin
                                            appId={appId}
                                            version="17.0"
                                            scope={facebookPermissions}
                                            fields={facebookGetFields}
                                            callback={handleLinkFacebook}
                                            render={renderProps => (
                                                <Button
                                                    type="link"
                                                    className="user-settings-form__btn--padding-x-0"
                                                    danger={
                                                        userInfo.facebookStatus
                                                    }
                                                    onClick={
                                                        !userInfo.facebookStatus
                                                            ? renderProps.onClick
                                                            : handleUnlinkFacebook
                                                    }
                                                    onChange={
                                                        !userInfo.facebookStatus
                                                            ? renderProps.callback
                                                            : null
                                                    }
                                                >
                                                    {userInfo.facebookStatus
                                                        ? 'Hủy liên kết Facebook'
                                                        : 'Liên kết Facebook'}
                                                </Button>
                                            )}
                                        />
                                    </List.Item>
                                    <List.Item>
                                        <Typography.Text className="user-settings-form__list--icon-group">
                                            Zalo
                                            {userInfo.zaloStatus ? (
                                                <CheckIcon />
                                            ) : (
                                                ''
                                            )}
                                        </Typography.Text>
                                        <Button
                                            type="link"
                                            className="user-settings-form__btn--padding-x-0"
                                            danger={userInfo.zaloStatus}
                                            onClick={
                                                !userInfo.zaloStatus
                                                    ? handleLinkZalo
                                                    : handleUnlinkZalo
                                            }
                                        >
                                            {userInfo.zaloStatus
                                                ? 'Hủy liên kết Zalo'
                                                : 'Liên kết Zalo'}
                                        </Button>
                                    </List.Item>
                                </List>
                            </Form.Item>
                            <Form.Item className="user-settings-form__label--padding-bottom-0">
                                <NavLink to={routeConstants.LOGOUT}>
                                    <Button
                                        type="link"
                                        danger
                                        className="user-settings-form__btn--padding-x-0"
                                    >
                                        Đăng xuất
                                    </Button>
                                </NavLink>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </AccountLayout>
        );
    }
);

Inner.displayName = 'User Settings Inner';

export default Inner;
