import { Button, Form, Typography, Space, List, Col, Row, Image } from 'antd';
import { memo } from 'react';
import AccountLayout from 'layouts/Account';
import './index.scss';
import CheckIcon from 'components/CommonInput/icons/CheckIcon';
import CloseIcon from 'components/CommonInput/icons/CloseIcon';

const Inner = memo(
    ({
        handleToggleFacebookLink,
        handleToggleZaloLink,
        handleLogout,
        facebookLinked,
        zaloLinked,
    }) => {
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
                        <Form layout="vertical">
                            <Form.Item>
                                <Typography.Text className="form__title">
                                    Username
                                </Typography.Text>
                            </Form.Item>

                            <Form.Item>
                                <Space>
                                    <Button className="form__btn-blue form__btn-border form__btn-big">
                                        Chỉnh sửa
                                    </Button>
                                    <Button danger className="form__btn-big">
                                        Đổi mật khẩu
                                    </Button>
                                </Space>
                            </Form.Item>
                            <Form.Item
                                label="Họ và tên"
                                className="form__label-padding-bottom-0"
                            >
                                Dương Hoàng
                            </Form.Item>
                            <Form.Item
                                label="Email"
                                className="form__label-padding-bottom-0"
                            >
                                duonghoang@example.com.vn
                            </Form.Item>
                            <Form.Item
                                label="Ngày tham gia"
                                className="form__label-padding-bottom-0"
                            >
                                24/05/2023
                            </Form.Item>
                            <Form.Item className="form__label-padding-bottom-0">
                                <List size="small" bordered>
                                    <List.Item>
                                        <Typography.Text className="list-icon-group">
                                            Facebook{' '}
                                            {facebookLinked ? (
                                                <CheckIcon />
                                            ) : (
                                                <CloseIcon />
                                            )}
                                        </Typography.Text>
                                        <Button
                                            danger={facebookLinked}
                                            className="form__btn-blue form__btn-noborder"
                                            onClick={handleToggleFacebookLink}
                                        >
                                            {facebookLinked
                                                ? 'Hủy liên kết Facebook'
                                                : 'Liên kết Facebook'}
                                        </Button>
                                    </List.Item>
                                    <List.Item>
                                        <Typography.Text>
                                            Zalo{' '}
                                            {zaloLinked ? (
                                                <CheckIcon />
                                            ) : (
                                                <CloseIcon />
                                            )}
                                        </Typography.Text>
                                        <Button
                                            danger={zaloLinked}
                                            className="form__btn-blue form__btn-noborder"
                                            onClick={handleToggleZaloLink}
                                        >
                                            {zaloLinked
                                                ? 'Hủy liên kết Zalo'
                                                : 'Liên kết Zalo'}
                                        </Button>
                                    </List.Item>
                                </List>
                            </Form.Item>
                            <Form.Item className="form__label-padding-bottom-0">
                                <Button
                                    danger
                                    onClick={handleLogout}
                                    className="form__btn-noborder"
                                >
                                    Đăng xuất
                                </Button>
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
