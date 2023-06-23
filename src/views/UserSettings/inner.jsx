import { Button, Form, Typography, Space, List, Col, Row, Image } from 'antd';
import { memo } from 'react';
import AccountLayout from 'layouts/Account';
import './index.scss';
import CheckIcon from 'components/CommonInput/icons/CheckIcon';

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
                                            Facebook
                                            {facebookLinked ? (
                                                <CheckIcon />
                                            ) : (
                                                ''
                                            )}
                                        </Typography.Text>

                                        <Button
                                            type="link"
                                            danger={facebookLinked}
                                            onClick={handleToggleFacebookLink}
                                        >
                                            {facebookLinked
                                                ? 'Hủy liên kết Facebook'
                                                : 'Liên kết Facebook'}
                                        </Button>
                                    </List.Item>
                                    <List.Item>
                                        <Typography.Text className="list-icon-group">
                                            Zalo
                                            {zaloLinked ? <CheckIcon /> : ''}
                                        </Typography.Text>
                                        <Button
                                            type="link"
                                            danger={zaloLinked}
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
                                    type="link"
                                    danger
                                    onClick={handleLogout}
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
