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
                <Row className="container">
                    <Col span={6}>
                        <Image
                            width={94}
                            height={94}
                            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSSlr2_vaXAWXtDCZ627ItaZLtIXDXSDOA60uLfvcBnhnPnBCXs"
                            className="form__avatar-round"
                        />
                    </Col>
                    <Col span={18}>
                        <Form layout="vertical" className="form">
                            <Form.Item>
                                <Typography.Text
                                    component="div"
                                    className="form__title"
                                >
                                    {userInfo.username}
                                </Typography.Text>
                                <Space>
                                    <Button
                                        size="large"
                                        className="form__btn-blue form__btn-border"
                                    >
                                        Chỉnh sửa
                                    </Button>
                                    <Button
                                        danger
                                        size="large"
                                        className="form__btn-big"
                                    >
                                        Đổi mật khẩu
                                    </Button>
                                </Space>
                            </Form.Item>
                            <Form.Item
                                label="Họ và tên"
                                className="form__label-padding-bottom-0"
                            >
                                {userInfo.firstName}&nbsp;
                                {userInfo.lastName}
                            </Form.Item>
                            <Form.Item
                                label="Email"
                                className="form__label-padding-bottom-0"
                            >
                                {userInfo.email}
                            </Form.Item>
                            <Form.Item
                                label="Ngày tham gia"
                                className="form__label-padding-bottom-0"
                            >
                                {moment(new Date(userInfo.dateJoined)).format(
                                    'DD/MM/YYYY'
                                )}
                            </Form.Item>
                            <Form.Item className="form__label-padding-bottom-0">
                                <List size="small" bordered>
                                    <List.Item>
                                        <Typography.Text className="list-icon-group">
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
                                                    className="form__btn-padding-x-0"
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
                                        <Typography.Text className="list-icon-group">
                                            Zalo
                                            {userInfo.zaloStatus ? (
                                                <CheckIcon />
                                            ) : (
                                                ''
                                            )}
                                        </Typography.Text>
                                        <Button
                                            type="link"
                                            className="form__btn-padding-x-0"
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
                            <Form.Item className="form__label-padding-bottom-0">
                                <NavLink to={routeConstants.LOGOUT}>
                                    <Button
                                        type="link"
                                        danger
                                        className="form__btn-padding-x-0"
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
