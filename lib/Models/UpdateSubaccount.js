/**
 * PepipostLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UpdateSubaccount
 */
class UpdateSubaccount extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.username = this.constructor.getValue(obj.username);
        this.newEmail = this.constructor.getValue(obj.newEmail || obj.new_email);
        this.newPassword = this.constructor.getValue(obj.newPassword || obj.new_password);
        this.confirmPassword =
          this.constructor.getValue(obj.confirmPassword
     || obj.confirm_password);
        this.creditType = this.constructor.getValue(obj.creditType || obj.credit_type);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'username', realName: 'username' },
            { name: 'newEmail', realName: 'new_email' },
            { name: 'newPassword', realName: 'new_password' },
            { name: 'confirmPassword', realName: 'confirm_password' },
            { name: 'creditType', realName: 'credit_type' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = UpdateSubaccount;
