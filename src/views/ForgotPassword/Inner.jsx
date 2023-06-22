import React from 'react';
import { Button, Checkbox, Input } from 'antd';
import AccountLayout from 'layouts/Account';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import routeConstants from 'route/routeConstant';
import CommonInput from 'components/CommonInput';

const Inner = memo(({ handleLogin }) => {
    return (
        <AccountLayout title="Login">
            <div className="input-container">
                <div>
                    <label className="input-title required">Password</label>
                    <Input required size="large" placeholder="Password" />
                </div>
                <div>
                    <label className="input-title required">Re-enter Password</label>
                    <Input.Password
                        required
                        size="large"
                        placeholder="Password"
                    />
                </div>
            </div>
            <label htmlFor="check1">Label for checkbox</label>
            <Checkbox type="CHECKBOX" id="check1"/>
            <CommonInput.Text type="TEXT" />
            <CommonInput.Date type="DATE" />
            <br></br>
            <Button id="login" className="account-layout-button" type="primary">
                <NavLink to={routeConstants.LOGIN}>
                    Change password
                </NavLink>
            </Button>
        </AccountLayout>
    );
});

Inner.displayName = 'ForgotPassword Inner';
export default Inner;