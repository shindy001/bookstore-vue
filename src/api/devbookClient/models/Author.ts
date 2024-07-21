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
 * @interface Author
 */
export interface Author {
    /**
     * 
     * @type {string}
     * @memberof Author
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Author
     */
    name: string | null;
    /**
     * 
     * @type {string}
     * @memberof Author
     */
    description?: string | null;
}

/**
 * Check if a given object implements the Author interface.
 */
export function instanceOfAuthor(value: object): value is Author {
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function AuthorFromJSON(json: any): Author {
    return AuthorFromJSONTyped(json, false);
}

export function AuthorFromJSONTyped(json: any, ignoreDiscriminator: boolean): Author {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'],
        'description': json['description'] == null ? undefined : json['description'],
    };
}

export function AuthorToJSON(value?: Author | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'description': value['description'],
    };
}

