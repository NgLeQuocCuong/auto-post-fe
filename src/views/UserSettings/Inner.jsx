import { Button, Form, Typography, Space, List, Col, Row, Image } from 'antd';
import { memo } from 'react';
import WebLayout from 'layouts/Web/WebLayout';
import moment from 'moment';
import './index.scss';
import CheckIcon from 'components/CommonInput/icons/CheckIcon';
import { NavLink } from 'react-router-dom';
import routeConstants from 'route/routeConstant';

const Inner = memo(
    ({
        userInfo,
        handleToggleFacebook,
        facebookProcessing,
        // TODO: Uncomment this when LinkedIn is ready
        // handleToggleLinkedin,
        // handleUnlinkLinkedin,
        // LinkedinProcessing,
    }) => {
        return (
            <WebLayout title="User Settings">
                <Row className="user-settings-form">
                    <Col span={6}>
                        <Image
                            width={94}
                            height={94}
                            src={userInfo.avatar}
                            className="user-settings-form__avatar--round user-settings-form__avatar--fit"
                            alt="Avatar"
                        />
                    </Col>
                    <Col span={18}>
                        <Form layout="vertical">
                            <Form.Item>
                                <Space className="mt-3">
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
                                {userInfo.dateJoined
                                    ? moment(
                                          new Date(userInfo.dateJoined)
                                      ).format('DD/MM/YYYY')
                                    : ''}
                            </Form.Item>
                            <Form.Item className="user-settings-form__label--padding-bottom-0">
                                <List size="small" bordered>
                                    <List.Item>
                                        <Typography.Text className="user-settings-form__list--icon-group">
                                            Facebook
                                            {userInfo.facebookStatus && (
                                                <CheckIcon />
                                            )}
                                        </Typography.Text>
                                        <Button
                                            type="link"
                                            className="user-settings-form__btn--padding-x-0"
                                            danger={userInfo.facebookStatus}
                                            onClick={handleToggleFacebook}
                                            disabled={facebookProcessing}
                                        >
                                            {facebookProcessing &&
                                                'Đang xử lý...'}
                                            {!facebookProcessing &&
                                                (userInfo.facebookStatus
                                                    ? 'Hủy liên kết Facebook'
                                                    : 'Liên kết Facebook')}
                                        </Button>
                                    </List.Item>
                                    {/* TODO: Uncomment when LinkedIn is ready */}
                                    {/* <List.Item>
                                        <Typography.Text className="user-settings-form__list--icon-group">
                                            Linkedin
                                            {userInfo.linkedinStatus && (
                                                <CheckIcon />
                                            )}
                                        </Typography.Text>
                                        <Button
                                            type="link"
                                            className="user-settings-form__btn--padding-x-0"
                                            danger={userInfo.linkedinStatus}
                                            onClick={handleToggleLinkedin}
                                        >
                                            {LinkedinProcessing &&
                                                'Đang xử lý...'}
                                            {!LinkedinProcessing &&
                                                (userInfo.linkedinStatus
                                                    ? 'Hủy liên kết Linkedin'
                                                    : 'Liên kết Linkedin')}
                                        </Button>
                                    </List.Item> */}
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
            </WebLayout>
        );
    }
);

Inner.displayName = 'User Settings Inner';

export default Inner;
