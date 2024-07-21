/* tslint:disable */
/* eslint-disable */
/**
 * DevBook.API, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UpdateProductCategoryCommandDto
 */
export interface UpdateProductCategoryCommandDto {
    /**
     * 
     * @type {string}
     * @memberof UpdateProductCategoryCommandDto
     */
    name: string;
}

/**
 * Check if a given object implements the UpdateProductCategoryCommandDto interface.
 */
export function instanceOfUpdateProductCategoryCommandDto(value: object): value is UpdateProductCategoryCommandDto {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function UpdateProductCategoryCommandDtoFromJSON(json: any): UpdateProductCategoryCommandDto {
    return UpdateProductCategoryCommandDtoFromJSONTyped(json, false);
}

export function UpdateProductCategoryCommandDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateProductCategoryCommandDto {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function UpdateProductCategoryCommandDtoToJSON(value?: UpdateProductCategoryCommandDto | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
    };
}

