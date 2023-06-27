import { Button, Form } from 'antd';
import AccountLayout from 'layouts/Account';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import routeConstants from 'route/routeConstant';
import 'layouts/Account/index.scss';
import AccountInput from 'layouts/Account/AccountInput';
import Message from 'components/Message';
import AccountLayoutImage from 'assets/images/AccountLayoutImage.png';
import AutopostLogo48 from 'assets/images/AutopostLogo48';

const Inner = memo(({ handleRegister }) => {
    const handleFinish = values => {
        //using regex to validate all fields
        const nameRegex = /^[^\d]+$/;
        if (
            !nameRegex.test(values.first_name) ||
            !nameRegex.test(values.last_name)
        ) {
            return Message.sendError('Họ và tên không được chứa số.');
        }
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(values.email)) {
            return Message.sendError('Email không hợp lệ.');
        }
        if (values.username.length < 8) {
            return Message.sendError('Tên đăng nhập phải có ít nhất 8 ký tự.');
        }
        const passwordRegex = /[a-zA-Z0-9]{8,}$/;
        if (!passwordRegex.test(values.password)) {
            return Message.sendError(
                'Mật khẩu phải có ít nhất 8 ký tự và 1 chữ số.'
            );
        }
        if (values.password !== values.confirm_password) {
            return Message.sendError('Mật khẩu nhập lại không khớp.');
        }
        handleRegister(values);
    };
    return (
        <AccountLayout title="Register">
            <div className="account-layout-container">
                <div className="account-layout__left">
                    <div className="account-layout__autopost-logo">
                        <AutopostLogo48 />
                    </div>
                    <Form
                        className="account-layout__input"
                        onFinish={handleFinish}
                        method="POST"
                        layout="vertical"
                    >
                        <div className="input__title">Đăng ký</div>

                        <div className="account-layout__input--vertical">
                            <AccountInput
                                name="first_name"
                                label="Họ"
                                type="text"
                                required
                                requiredMessage="Vui lòng nhập họ."
                                placeholder="Họ"
                            />
                            <AccountInput
                                name="last_name"
                                label="Tên"
                                type="text"
                                required
                                requiredMessage="Vui lòng nhập tên."
                                placeholder="Tên"
                            />
                        </div>
                        <AccountInput
                            name="email"
                            label="Email"
                            type="email"
                            required
                            requiredMessage="Vui lòng nhập email."
                            placeholder="Email"
                        />
                        <AccountInput
                            name="username"
                            label="Tên đăng nhập"
                            type="text"
                            required
                            requiredMessage="Vui lòng nhập tên đăng nhập."
                            placeholder="Tên đăng nhập"
                        />
                        <AccountInput
                            name="password"
                            label="Mật khẩu"
                            type="password"
                            required
                            requiredMessage="Vui lòng nhập mật khẩu."
                            placeholder="Mật khẩu"
                        />
                        <AccountInput
                            name="confirm_password"
                            label="Nhập lại mật khẩu"
                            type="password"
                            required
                            requiredMessage="Vui lòng nhập lại mật khẩu."
                            placeholder="Nhập lại mật khẩu"
                        />
                        <Button
                            className="account-layout-button"
                            type="primary"
                            htmlType="submit"
                        >
                            Đăng ký
                        </Button>
                        <div className="has-account">
                            Đã có tài khoản? &nbsp;
                            <NavLink to={routeConstants.LOGIN}>
                                Đăng nhập
                            </NavLink>
                        </div>
                    </Form>
                    <div className="account-layout__footer">
                        © 2023 AutoPost is a product of Horus Co., Ltd
                    </div>
                </div>
                <div className="account-layout__right">
                    <img src={AccountLayoutImage} alt="Account layout" />
                </div>
            </div>
        </AccountLayout>
    );
});

Inner.displayName = 'Register Inner';

export default Inner;
