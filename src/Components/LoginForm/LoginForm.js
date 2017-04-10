import React, { Component } from 'react';
import { View ,Text} from 'react-native';
import { Card, CardSection,Input } from '../';
const LoginForm = () => {
    return (
        <Card>
            <CardSection>
                <Input 
                value="Arsalan"
                onChanged = {this.}
                />
            </CardSection>
        </Card>
    );
}

export { LoginForm };